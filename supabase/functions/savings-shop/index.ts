import * as cheerio from "npm:cheerio@1.0.0";

const corsHeaders={
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods":"POST, OPTIONS",
  "Content-Type":"application/json; charset=utf-8",
  "Cache-Control":"public, max-age=900"
};

const SOURCES={
  easy:"https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/",
  fixed:"https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/",
  isa:"https://www.moneysavingexpert.com/savings/best-cash-isa/",
  regular:"https://www.moneysavingexpert.com/savings/best-regular-savings-accounts/",
  lisa:"https://www.moneysavingexpert.com/savings/lifetime-isas/",
  junior:"https://www.moneysavingexpert.com/savings/junior-cash-isa/",
  notice:"https://moneyfactscompare.co.uk/news/savings/best-uk-savings-rates-this-week/"
};

const tidy=value=>String(value??"").replace(/\u00a0/g," ").replace(/\s+/g," ").trim();

function absoluteUrl(href,base){
  try{return new URL(href,base).toString()}catch{return base}
}

function rateFrom(text){
  const m=tidy(text).match(/(\d{1,2}(?:\.\d{1,3})?)\s*%/);
  if(!m)return null;
  const n=Number(m[1]);
  return Number.isFinite(n)&&n>0&&n<20?n:null;
}

function poundValue(text){
  const m=tidy(text).match(/£\s?[\d,.]+(?:\s?(?:m|k))?/i);
  return m?m[0].replace(/\s+/g," "):"Check provider";
}

function providerName(row){
  let p=tidy(row.linkText||row.cells[0]||"");
  p=p
    .replace(/\*+$/,"")
    .replace(/\s+-\s+newbies only.*$/i,"")
    .replace(/\s+\(part of .*?\)/i,"")
    .replace(/^\d+(?:\.\d+)?%\s+(?:on\s+small\s+amounts\s+)?/i,"")
    .trim();
  return p||"Savings provider";
}

function updatedDate(text){
  for(const re of [
    /Updated\s+(\d{1,2}\s+[A-Za-z]+\s+20\d{2})/i,
    /Last updated:\s*(\d{1,2}\/\d{1,2}\/20\d{2})/i,
    /Last updated:\s*(\d{1,2}\s+[A-Za-z]+\s+20\d{2})/i
  ]){
    const m=text.match(re);
    if(m)return tidy(m[1]);
  }
  return "";
}

function tables($,base){
  const out=[];
  let heading="";
  $("h2,h3,h4,table").each((_,el)=>{
    const tag=String(el.tagName||"").toLowerCase();
    if(tag!=="table"){
      heading=tidy($(el).text());
      return;
    }
    const rows=[];
    $(el).find("tr").each((__,tr)=>{
      const cells=$(tr).find("th,td").map((___,cell)=>tidy($(cell).text())).get();
      if(cells.length<2)return;
      const firstLink=$(tr).find("a[href]").first();
      rows.push({
        heading,
        cells,
        rowText:tidy(cells.join(" | ")),
        linkText:tidy(firstLink.text()),
        href:absoluteUrl(String(firstLink.attr("href")||""),base)
      });
    });
    if(rows.length)out.push({heading,rows});
  });
  return out;
}

function candidatesFromTables($,base,filter){
  return tables($,base)
    .filter(t=>filter(t.heading))
    .flatMap(t=>t.rows.map(r=>({...r,heading:t.heading})))
    .filter(r=>rateFrom(r.rowText)!==null);
}

function dedupeSort(items){
  const seen=new Set();
  return items
    .filter(x=>x.provider&&x.rate>0&&x.rate<20)
    .sort((a,b)=>b.rate-a.rate)
    .filter(x=>{
      const key=`${x.provider.toLowerCase()}|${x.name.toLowerCase()}`;
      if(seen.has(key))return false;
      seen.add(key);
      return true;
    })
    .slice(0,5);
}

function makeGeneric(row,opts){
  const rate=rateFrom(row.rowText)||0;
  return {
    provider:providerName(row),
    name:opts.name,
    rate,
    rateLabel:`${rate.toFixed(rate%1?2:0)}% AER`,
    tag:opts.tag,
    min:opts.min||poundValue(row.rowText),
    limit:opts.limit||"Check provider",
    access:opts.access||"Check provider terms",
    eligibility:opts.eligibility||"Check provider terms",
    detail:opts.detail||"Live comparison-table result. Check source/provider terms before applying.",
    flag:opts.flag||"Live result",
    sourceUrl:row.href||undefined
  };
}

function parseRegular($,base){
  const rows=candidatesFromTables($,base,h=>/regular|existing-customer|open-to-all/i.test(h));
  return dedupeSort(rows.map(row=>{
    const rateCell=row.cells.find(c=>rateFrom(c)!==null)||"";
    const maxCell=row.cells.find(c=>/£.*(?:month|mth)/i.test(c))||row.cells[2]||"";
    const withdraw=row.cells.find(c=>/withdraw/i.test(c))||row.cells[4]||"";
    const open=row.cells[row.cells.length-1]||"";
    const max=poundValue(maxCell);
    return makeGeneric(row,{
      name:"Regular Saver",
      tag:tidy(rateCell.replace(/^\s*\d+(?:\.\d+)?%\s*/,""))||"Regular saver",
      min:/min\s*£/i.test(row.rowText)?poundValue(row.rowText):"Check provider",
      limit:max!=="Check provider"?`${max}/month`:"Check provider",
      access:withdraw&&withdraw.length<120?withdraw:"Check withdrawal rules",
      eligibility:/open-to-all/i.test(row.heading)?"Open to all":(/existing/i.test(row.heading)?"Existing-customer conditions":"Check provider"),
      detail:`Monthly saver from the current comparison table. ${open?`Open/manage: ${open}.`:""}`,
      flag:"Live regular saver"
    });
  }));
}

function parseLisa($,base){
  const rows=candidatesFromTables($,base,h=>/lifetime isa|cash lifetime/i.test(h));
  return dedupeSort(rows.map(row=>{
    const rateCell=row.cells.find(c=>rateFrom(c)!==null)||"";
    const manage=row.cells[2]||"";
    const interest=row.cells[3]||"";
    const minMatch=rateCell.match(/min\s*(£[\d,.]+)/i);
    return makeGeneric(row,{
      name:"Cash Lifetime ISA",
      tag:"Cash LISA",
      min:minMatch?minMatch[1]:"Check provider",
      limit:"£4,000/year LISA contribution",
      access:"First home / age 60; other withdrawals may be penalised",
      eligibility:manage||"Age/transfer rules apply",
      detail:`Cash LISA. ${interest?`Interest: ${interest}.`:""} Check LISA withdrawal rules before applying.`,
      flag:"Live cash LISA"
    });
  }));
}

function parseJunior($,base){
  const rows=candidatesFromTables($,base,h=>/junior cash isa|junior isa/i.test(h));
  return dedupeSort(rows.map(row=>{
    const rateCell=row.cells.find(c=>rateFrom(c)!==null)||"";
    const minMatch=rateCell.match(/£[\d,.]+/);
    const open=row.cells[2]||"";
    const transfer=row.cells[3]||"";
    return makeGeneric(row,{
      name:"Junior Cash ISA",
      tag:"Junior Cash ISA",
      min:minMatch?minMatch[0]:"Check provider",
      limit:"£9,000/year JISA allowance",
      access:"Locked until age 18",
      eligibility:`${open||"Check opening method"}${transfer?`; transfers: ${transfer}`:""}`,
      detail:"Tax-free cash JISA from the current comparison table. Money is locked until the child turns 18.",
      flag:"Live Junior ISA"
    });
  }));
}

function isaTag(heading){
  const h=heading.toLowerCase();
  if(/five-year|5 year/.test(h))return "5-year fixed ISA";
  if(/four-year|4 year/.test(h))return "4-year fixed ISA";
  if(/three-year|3 year/.test(h))return "3-year fixed ISA";
  if(/two-year|2 year/.test(h))return "2-year fixed ISA";
  if(/one-year|1 year/.test(h))return "1-year fixed ISA";
  if(/easy|access/.test(h))return "Easy-access ISA";
  if(/notice/.test(h))return "Notice ISA";
  return "Cash ISA";
}

function parseIsa($,base){
  const rows=candidatesFromTables($,base,h=>/isa/i.test(h)&&!/lifetime|junior/i.test(h));
  return dedupeSort(rows.map(row=>{
    const tag=isaTag(row.heading);
    const rateIndex=row.cells.findIndex(c=>rateFrom(c)!==null);
    const min=rateIndex>=0&&row.cells[rateIndex+1]?poundValue(row.cells[rateIndex+1]):poundValue(row.rowText);
    const penalty=row.cells.find(c=>/days.*interest|penalty/i.test(c))||"";
    return makeGeneric(row,{
      name:tag,
      tag,
      min,
      limit:"Annual ISA allowance rules",
      access:/fixed/i.test(tag)?(penalty||"Fixed term; early-access ISA penalty applies"):"Check withdrawal rules",
      eligibility:"Check transfer/new-money conditions",
      detail:"Cash ISA from the current comparison table. Compare access, transfer and bonus rules as well as AER.",
      flag:"Live ISA result"
    });
  }));
}

function fixedTag(heading,rowText){
  const text=`${heading} ${rowText}`.toLowerCase();
  const years=text.match(/(\d+)\s*(?:-| )?year/);
  if(years)return `${years[1]}-year fixed`;
  const months=text.match(/(\d+)\s*(?:-| )?month/);
  if(months)return `${months[1]}-month fixed`;
  return "Fixed savings";
}

function parseFixed($,base){
  const rows=candidatesFromTables($,base,h=>/fixed/i.test(h)&&!/isa/i.test(h));
  return dedupeSort(rows.map(row=>{
    const tag=fixedTag(row.heading,row.rowText);
    return makeGeneric(row,{
      name:"Fixed Saver",
      tag,
      min:poundValue(row.rowText),
      limit:"Check provider",
      access:"Locked until maturity in most cases",
      eligibility:"Check provider terms",
      detail:"Fixed-rate result from the live comparison table. Check deposit window, interest payment and maturity rules.",
      flag:"Live fixed rate"
    });
  }));
}

function parseEasy($,base){
  let rows=candidatesFromTables($,base,h=>/easy|normal savings|access/i.test(h)&&!/isa|fixed|regular/i.test(h));

  if(rows.length<3){
    rows=tables($,base)
      .flatMap(t=>t.rows.map(r=>({...r,heading:t.heading})))
      .filter(r=>{
        const text=`${r.heading} ${r.rowText}`;
        return rateFrom(text)!==null &&
          !/fixed|isa|regular saver|lifetime|junior/i.test(text) &&
          /min\.?\s*£|max\.?\s*£|withdraw|easy|saver/i.test(text);
      });
  }

  return dedupeSort(rows.map(row=>{
    const text=row.rowText;
    const min=(text.match(/min\.?\s*(£[\d,.]+(?:[mk])?)/i)||[])[1]||poundValue(text);
    const max=(text.match(/max\.?\s*(£[\d,.]+(?:[mk])?)/i)||[])[1]||"Check provider";
    const withdrawal=(text.match(/(?:max\s*)?(\d+)\s+withdrawals?[^|,.]*/i)||[])[0]||"Flexible / check any withdrawal limits";
    return makeGeneric(row,{
      name:/sunny day/i.test(text)?"Sunny Day Saver":"Easy Access Saver",
      tag:/withdraw/i.test(text)&&!/flexible/i.test(text)?"Limited access":"Easy access",
      min,
      limit:max,
      access:withdrawal,
      eligibility:/newbies only/i.test(text)?"New-customer conditions apply":"Check provider terms",
      detail:"Easy-access result from the live comparison table. Check bonus expiry and withdrawal limits.",
      flag:"Live easy access"
    });
  }));
}

function htmlLines(html){
  const withoutScripts=html
    .replace(/<script[\s\S]*?<\/script>/gi," ")
    .replace(/<style[\s\S]*?<\/style>/gi," ");
  const withBreaks=withoutScripts
    .replace(/<br\s*\/?>/gi,"\n")
    .replace(/<\/(?:p|div|li|article|section|h1|h2|h3|h4)>/gi,"\n");
  const $=cheerio.load(withBreaks);
  return $.text().split(/\n+/).map(tidy).filter(Boolean);
}

function parseNotice(html,base){
  const lines=htmlLines(html);
  const items=[];

  for(let i=0;i<lines.length;i++){
    if(!/^Account:\s*/i.test(lines[i]))continue;
    const name=tidy(lines[i].replace(/^Account:\s*/i,""));
    let provider="";
    for(let j=i-1;j>=Math.max(0,i-5);j--){
      if(/^Image:/i.test(lines[j]))continue;
      if(/^(Notice accounts|Account:|Rate:|Notice:)/i.test(lines[j]))continue;
      provider=lines[j];
      if(provider)break;
    }

    let notice="";
    let rate=null;
    for(let j=i+1;j<=Math.min(lines.length-1,i+6);j++){
      if(/^Notice:/i.test(lines[j]))notice=tidy(lines[j].replace(/^Notice:\s*/i,""));
      if(/^Rate:/i.test(lines[j]))rate=rateFrom(lines[j]);
    }
    if(!provider||!rate||!notice)continue;

    items.push({
      provider,
      name,
      rate,
      rateLabel:`${rate.toFixed(rate%1?2:0)}% AER`,
      tag:`${notice} notice`,
      min:"Check provider",
      limit:"Check provider",
      access:`Give ${notice} notice before withdrawal`,
      eligibility:"Check provider terms",
      detail:"Live notice-account result from the comparison source. Check minimum deposit and withdrawal instructions.",
      flag:"Live notice rate",
      sourceUrl:base
    });
  }
  return dedupeSort(items);
}

function parseCategory(id,html,url){
  const $=cheerio.load(html);
  if(id==="regular")return parseRegular($,url);
  if(id==="lisa")return parseLisa($,url);
  if(id==="junior")return parseJunior($,url);
  if(id==="isa")return parseIsa($,url);
  if(id==="fixed")return parseFixed($,url);
  if(id==="easy")return parseEasy($,url);
  if(id==="notice")return parseNotice(html,url);
  return [];
}

async function fetchPage(url){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),12000);
  try{
    const res=await fetch(url,{
      signal:controller.signal,
      headers:{
        "user-agent":"SavingsHub/1.0",
        "accept":"text/html,application/xhtml+xml"
      }
    });
    if(!res.ok)throw new Error(`Source returned ${res.status}`);
    return await res.text();
  }finally{
    clearTimeout(timer);
  }
}

Deno.serve(async req=>{
  if(req.method==="OPTIONS")return new Response("ok",{headers:corsHeaders});
  if(req.method!=="POST"){
    return new Response(JSON.stringify({error:"POST required"}),{status:405,headers:corsHeaders});
  }

  let requested=Object.keys(SOURCES);
  try{
    const body=await req.json();
    if(Array.isArray(body?.categories)){
      const filtered=body.categories.map(String).filter(x=>x in SOURCES);
      if(filtered.length)requested=filtered;
    }
  }catch{}

  const fetchedAt=new Date().toISOString();
  const pageCache=new Map();
  const categories={};
  const errors={};

  for(const id of requested){
    const source=SOURCES[id];
    try{
      if(!pageCache.has(source))pageCache.set(source,fetchPage(source));
      const html=await pageCache.get(source);
      const items=parseCategory(id,html,source);
      if(!items.length)throw new Error("No verified product rows found");

      const text=tidy(cheerio.load(html)("body").text());
      categories[id]={
        source,
        sourceUpdated:updatedDate(text),
        items
      };
    }catch(e){
      errors[id]=String(e?.message||e);
    }
  }

  const ok=Object.keys(categories).length>0;
  return new Response(JSON.stringify({ok,fetchedAt,categories,errors}),{
    status:ok?200:502,
    headers:corsHeaders
  });
});
