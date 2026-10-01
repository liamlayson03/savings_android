
const STORAGE_KEY='australiaSavingsTracker_sync_v1';
const CONFIG_KEY='australiaSavingsTracker_supabase_v1';
const DIRTY_KEY='australiaSavingsTracker_dirty_v1';
const RECOVERY_KEY='australiaSavingsTracker_recovery_v1';
const ONBOARDING_KEY='savingsHub_onboarding_v1';
const CLOUD_OWNER_KEY='savingsHub_cloudOwner_v1';
const PRIVACY_KEY='savingsHub_privacy_v1';
const DEFAULT_SUPABASE_URL='https://hkrtwewjtxxuagbrknpo.supabase.co';
const DEFAULT_SUPABASE_KEY='sb_publishable_TYY1R3wJoKHId1NuO5WWrg_sT74oq7Q';



const SAVINGS_SHOP_CATALOG={
  easy:{
    title:'Easy-access savings',
    description:'For cash you may need back quickly. Rates are usually variable, so the trade-off for flexibility is that the provider can change the rate.',
    note:'Best for emergency funds and money you do not want locked away.',
    checked:'30 Sep 2026',
    source:'https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/',
    items:[
      {provider:'Cahoot',name:'Sunny Day Saver',rate:5.00,rateLabel:'5.00% AER',tag:'Easy access',min:'£1',limit:'£3,000',access:'Withdraw when needed',eligibility:'Open online',detail:'Account lasts one year; rate is variable.',flag:'Small-balance booster'},
      {provider:'Zopa',name:'Limited Access pot',rate:4.56,rateLabel:'4.56% AER',tag:'Limited access',min:'£1',limit:'Bonus up to £50,000',access:'3 penalty-free withdrawals/yr',eligibility:'App; Smart Saver required',detail:'Headline rate includes a 12-month bonus. Four or more withdrawals in a year reduce the rate.',flag:'Good rate, withdrawal cap'},
      {provider:'Cynergy Bank',name:'Easy Access',rate:4.55,rateLabel:'4.55% AER',tag:'Easy access',min:'£1',limit:'Up to £1m',access:'Flexible access',eligibility:'Check current provider terms',detail:'A straightforward high-rate easy-access option from the current tables.',flag:'Simple option'},
      {provider:'Tembo Money',name:'HomeSaver',rate:4.55,rateLabel:'4.55% AER',tag:'Easy access',min:'£10',limit:'Up to £20,000',access:'Withdrawals allowed',eligibility:'App',detail:'Rate includes a 12-month bonus. A higher rate may apply only with qualifying Tembo mortgage conditions.',flag:'Bonus rate'},
      {provider:'Chase',name:'Saver',rate:4.50,rateLabel:'4.50% AER',tag:'Easy access',min:'£1',limit:'Up to £3m',access:'Flexible access',eligibility:'Requires Chase current account; new-customer conditions',detail:'Headline rate includes a 12-month bonus, so diarise the bonus end date.',flag:'Big-name option'}
    ]
  },
  isa:{
    title:'Cash ISAs',
    description:'Savings where the interest stays tax-free. This shortlist intentionally mixes easy-access and fixed-term products, so compare the access rules as well as the headline AER.',
    note:'Easy-access and fixed ISAs are not like-for-like — the term/access badge matters.',
    checked:'30 Sep 2026',
    source:'https://www.moneysavingexpert.com/savings/best-cash-isa/',
    items:[
      {provider:'Shawbrook Bank',name:'5 Year Fixed Rate Cash ISA',rate:5.25,rateLabel:'5.25% AER',tag:'5-year fixed ISA',min:'£1,000',limit:'ISA allowance rules',access:'Early access with interest penalty',eligibility:'Check transfer window',detail:'Long lock for rate certainty; current comparison tables show a 360-day interest penalty for early access.',flag:'Highest headline here'},
      {provider:'Tandem Bank',name:'Fixed Cash ISA',rate:5.03,rateLabel:'5.03% AER',tag:'2-year fixed ISA',min:'Check latest terms',limit:'ISA allowance rules',access:'Fixed term; ISA early-access rules apply',eligibility:'Check provider terms',detail:'Two-year fixed option from the current top-pick tables.',flag:'2-year fix'},
      {provider:'Trading 212',name:'Cash ISA Promo Rate',rate:5.01,rateLabel:'5.01% AER',tag:'Easy-access ISA',min:'£1',limit:'Annual ISA allowance',access:'Flexible ISA; withdrawals allowed',eligibility:'Promo/new-money conditions apply',detail:'Includes a 12-month bonus; the current promotion has a time-limited application window.',flag:'Flexible + high rate'},
      {provider:'OakNorth Bank',name:'Fixed Cash ISA',rate:4.91,rateLabel:'4.91% AER',tag:'1-year fixed ISA',min:'Check latest terms',limit:'ISA allowance rules',access:'Fixed term; early-access penalty',eligibility:'Check provider terms',detail:'Shorter fixed-term ISA for people who want rate certainty without committing for several years.',flag:'1-year fix'},
      {provider:'Chip',name:'Cash ISA',rate:4.50,rateLabel:'4.50% AER',tag:'Easy-access ISA',min:'£1',limit:'Annual ISA allowance',access:'Easy access',eligibility:'App; transfer conditions apply',detail:'Current top pick for some ISA transfers; check closure/transfer-out interest rules before moving an ISA.',flag:'Transfer option'}
    ]
  },
  fixed:{
    title:'Fixed / locked savings',
    description:'Guaranteed rates for a set term, usually in exchange for giving up access to the cash. The five cards cover useful term lengths rather than pretending a five-year fix is directly comparable with six months.',
    note:'Only lock money you are comfortable not touching for the whole term.',
    checked:'30 Sep 2026',
    source:'https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/',
    items:[
      {provider:'DF Capital',name:'5 Year Fixed Saver',rate:5.35,rateLabel:'5.35% AER',tag:'5 years',min:'£1,000',limit:'Up to £250,000',access:'Locked until maturity',eligibility:'Online; check joint-account rules',detail:'Interest available annually or at maturity according to the current table.',flag:'Long-term headline'},
      {provider:'Thisbank',name:'3 Year Fixed Saver',rate:5.18,rateLabel:'5.18% AER',tag:'3 years',min:'£100',limit:'Up to £500,000',access:'Locked until maturity',eligibility:'Online; no joint accounts',detail:'Interest paid at maturity on the current deal.',flag:'3-year option'},
      {provider:'OakNorth Bank',name:'2 Year Fixed Saver',rate:5.15,rateLabel:'5.15% AER',tag:'2 years',min:'£1',limit:'Up to £500,000',access:'Locked until maturity',eligibility:'Online / app',detail:'A two-year rate leader in the current comparison tables.',flag:'2-year option'},
      {provider:'Union Bank of India UK',name:'1 Year Fixed Saver',rate:5.12,rateLabel:'5.12% AER',tag:'1 year',min:'£1,000',limit:'Up to £480,000',access:'Locked until maturity',eligibility:'Online',detail:'Interest paid at maturity on the current deal.',flag:'1-year option'},
      {provider:'Zopa',name:'Fixed Term Pot',rate:4.60,rateLabel:'4.60% AER',tag:'6 months',min:'£1',limit:'Up to £250,000',access:'Locked until maturity',eligibility:'App; Smart Saver required',detail:'Shorter fix for people who do not want to commit for a full year.',flag:'Short lock'}
    ]
  },
  regular:{
    title:'Regular savers',
    description:'High headline rates for feeding in smaller amounts each month. Monthly caps and eligibility matter more here than they do on ordinary savings accounts.',
    note:'The AER applies to money while it is actually in the account — you do not earn a full year of interest on every monthly deposit.',
    checked:'28 Sep 2026',
    source:'https://www.moneysavingexpert.com/savings/best-regular-savings-accounts/',
    items:[
      {provider:'Santander',name:'Regular Saver',rate:8.00,rateLabel:'8.00% AER',tag:'Variable • 1 year',min:'£1',limit:'£200/month',access:'Penalty-free withdrawals',eligibility:'Existing Santander current-account customer',detail:'Includes a 12-month bonus; current guide estimates about £104 interest if maxed for a year.',flag:'Top headline rate'},
      {provider:'First Direct',name:'Regular Saver',rate:7.00,rateLabel:'7.00% AER',tag:'Fixed • 1 year',min:'£25/month',limit:'£300/month',access:'No penalty-free withdrawals',eligibility:'First Direct current-account customer',detail:'Closing early reduces the interest paid; current guide estimates about £135 if maxed.',flag:'High monthly cap'},
      {provider:'Co-operative Bank',name:'Regular Saver',rate:7.00,rateLabel:'7.00% AER',tag:'Variable • 1 year',min:'Check terms',limit:'£250/month',access:'Penalty-free withdrawals',eligibility:'Existing Co-op customer conditions',detail:'Months can be skipped under the current terms.',flag:'Flexible regular saver'},
      {provider:'Progressive BS',name:'Regular Saver',rate:7.00,rateLabel:'7.00% AER',tag:'Variable • 12 months',min:'Check terms',limit:'£200/month',access:'One withdrawal per day',eligibility:'Open to all; online',detail:'One of the strongest nationally available regular savers without requiring another bank account.',flag:'Open to all'},
      {provider:'Chase',name:'Regular Saver',rate:6.50,rateLabel:'6.50% AER',tag:'Fixed • 1 year',min:'Check terms',limit:'£300/month',access:'Penalty-free withdrawals',eligibility:'Chase customer / app',detail:'Months can be skipped and the current guide estimates about £125 interest when maxed.',flag:'Flexible + £300/m'}
    ]
  },
  notice:{
    title:'Notice savings',
    description:'A middle ground between easy access and a fixed bond: you can withdraw, but only after giving the provider the required notice.',
    note:'A longer notice period is not automatically better — compare the extra rate with the flexibility you are giving up.',
    checked:'28 Sep 2026',
    source:'https://moneyfactscompare.co.uk/news/savings/best-uk-savings-rates-this-week/',
    items:[
      {provider:'The Stafford BS',name:'Notice Saver',rate:4.75,rateLabel:'4.75% AER',tag:'365-day notice',min:'£25,000',limit:'Check provider terms',access:'365 days notice',eligibility:'Large minimum deposit',detail:'Very long notice period; useful only if the higher rate compensates for tying up access for a year.',flag:'Highest rate, longest notice'},
      {provider:'Birmingham Bank',name:'Notice Account',rate:4.40,rateLabel:'4.40% AER',tag:'95-day notice',min:'£5,000',limit:'Up to £250,000',access:'95 days notice',eligibility:'Online; no joint accounts',detail:'Interest paid annually into the account on the current comparison table.',flag:'Around 3 months'},
      {provider:'BLME',name:'90 Day Notice Account',rate:4.37,rateLabel:'4.37% expected profit',tag:'90-day notice',min:'£10,000',limit:'Check provider terms',access:'90 days notice',eligibility:'Sharia-compliant expected profit rate',detail:'This is an expected profit rate rather than conventional interest; check the provider explanation.',flag:'Sharia-compliant'},
      {provider:'Kent Reliance',name:'60 Day Notice Savings',rate:4.25,rateLabel:'4.25% AER',tag:'60-day notice',min:'£1,000',limit:'Check provider terms',access:'60 days notice',eligibility:'Current listing is branch-led',detail:'Useful shorter notice band if two months of waiting is acceptable.',flag:'2-month notice'},
      {provider:'RCI Bank UK',name:'E-Volve Savings Notice Account',rate:4.00,rateLabel:'4.00% AER',tag:'14-day notice',min:'£100',limit:'Check provider terms',access:'14 days notice',eligibility:'Online / app',detail:'Much shorter notice period than most notice accounts; withdrawals need the full notice.',flag:'Short notice'}
    ]
  },
  lisa:{
    title:'Cash Lifetime ISAs',
    description:'For eligible first-time buyers or retirement saving. You can pay in up to £4,000 a tax year and the Government adds a 25% bonus, but the withdrawal rules are much stricter than a normal ISA.',
    note:'Normally open from age 18–39. Non-qualifying early withdrawals can trigger a 25% charge, so read the rules before using one.',
    checked:'29 Sep 2026',
    source:'https://www.moneysavingexpert.com/savings/lifetime-isas/',
    items:[
      {provider:'Moneybox',name:'Cash Lifetime ISA',rate:4.65,rateLabel:'4.65% AER',tag:'Cash LISA',min:'£1',limit:'£4,000/year LISA contribution',access:'First home / age 60; other withdrawals penalised',eligibility:'App; transfer restrictions apply',detail:'Rate includes a 12-month bonus; bonus interest is paid after the first year under the current terms.',flag:'Top current cash LISA'},
      {provider:'Tembo',name:'Cash Lifetime ISA',rate:4.56,rateLabel:'4.56% AER',tag:'Cash LISA',min:'£1',limit:'£4,000/year LISA contribution',access:'LISA withdrawal rules',eligibility:'App; existing-LISA transfers allowed',detail:'Transfers are currently limited to existing LISAs rather than other ISA types.',flag:'Strong app rate'},
      {provider:'Plum',name:'Cash Lifetime ISA',rate:4.52,rateLabel:'4.52% AER',tag:'Cash LISA',min:'£1',limit:'£4,000/year LISA contribution',access:'LISA withdrawal rules',eligibility:'App; existing-LISA transfers allowed',detail:'Rate includes a bonus element under the current terms.',flag:'App option'},
      {provider:'Paragon Bank',name:'Cash Lifetime ISA',rate:3.51,rateLabel:'3.51% AER',tag:'Cash LISA',min:'£1',limit:'£4,000/year LISA contribution',access:'LISA withdrawal rules',eligibility:'Online; existing-LISA transfers allowed',detail:'Lower headline rate but available online rather than app-only.',flag:'Online option'},
      {provider:'Bath Building Society',name:'Cash Lifetime ISA',rate:2.60,rateLabel:'2.60% AER',tag:'Cash LISA',min:'£1',limit:'£4,000/year LISA contribution',access:'LISA withdrawal rules',eligibility:'Online / branch; no transfers in',detail:'Check opening and transfer limitations carefully before choosing it.',flag:'Branch / online'}
    ]
  },
  junior:{
    title:'Junior Cash ISAs',
    description:'Tax-free cash savings for children. Money is locked until the child turns 18, at which point it becomes theirs.',
    note:'For very long time horizons, parents may also want to research investment Junior ISAs and understand the additional investment risk.',
    checked:'17 Sep 2026',
    source:'https://www.moneysavingexpert.com/savings/junior-cash-isa/',
    items:[
      {provider:'Leek Building Society',name:'Junior Cash ISA',rate:3.85,rateLabel:'3.85% AER',tag:'Junior Cash ISA',min:'£1',limit:'£9,000/year JISA allowance',access:'Locked until age 18',eligibility:'Post / branch; transfers in accepted',detail:'Current top-paying cash JISA in the cited national table.',flag:'Top cash JISA'},
      {provider:'Skipton Building Society',name:'Junior Cash ISA',rate:3.80,rateLabel:'3.80% AER',tag:'Junior Cash ISA',min:'£1',limit:'£9,000/year JISA allowance',access:'Locked until age 18',eligibility:'Post / branch; transfers in accepted',detail:'Second-highest rate in the current cited cash-JISA table.',flag:'Branch/post'},
      {provider:'Stafford Building Society',name:'Junior Cash ISA',rate:3.76,rateLabel:'3.76% AER',tag:'Junior Cash ISA',min:'£1,000',limit:'£9,000/year JISA allowance',access:'Locked until age 18',eligibility:'Post / branch; transfers in accepted',detail:'Higher minimum opening deposit than most of the other options shown.',flag:'£1k minimum'},
      {provider:'Coventry Building Society',name:'Junior Cash ISA',rate:3.75,rateLabel:'3.75% AER',tag:'Junior Cash ISA',min:'£1',limit:'£9,000/year JISA allowance',access:'Locked until age 18',eligibility:'Post / branch; transfers in accepted',detail:'Low minimum deposit with the standard JISA lock until age 18.',flag:'Low minimum'},
      {provider:'NS&I',name:'Junior ISA',rate:3.70,rateLabel:'3.70% AER',tag:'Junior Cash ISA',min:'£1',limit:'£9,000/year JISA allowance',access:'Locked until age 18',eligibility:'Online; transfers in accepted',detail:'Lower rate than the branch-led leaders but can be opened and managed online; backed by HM Treasury.',flag:'Online + Treasury backed'}
    ]
  }
};

let savingsShopState={tab:'easy'};


const SHOP_CACHE_KEY='savingsHub_shopCache_v1';
const SHOP_CACHE_VERSION=1;

function loadSavingsShopCache(){
  try{
    const cached=JSON.parse(localStorage.getItem(SHOP_CACHE_KEY)||'null');
    if(!cached||cached.version!==SHOP_CACHE_VERSION||!cached.categories)return null;
    return cached;
  }catch{
    return null;
  }
}

let savingsShopCache=loadSavingsShopCache();
let savingsShopCatalog={
  ...SAVINGS_SHOP_CATALOG,
  ...(savingsShopCache?.categories||{})
};

function saveSavingsShopCache(){
  localStorage.setItem(SHOP_CACHE_KEY,JSON.stringify(savingsShopCache));
}

function shopItemKey(item){
  return `${String(item?.provider||'').trim().toLowerCase()}|${String(item?.name||'').trim().toLowerCase()}`;
}

function validShopItem(item){
  const rate=Number(item?.rate);
  return !!(
    item &&
    String(item.provider||'').trim() &&
    String(item.name||'').trim() &&
    Number.isFinite(rate) &&
    rate>0 &&
    rate<20
  );
}

function normaliseShopItem(item,fallback={}){
  const rate=Number(item?.rate);
  return {
    provider:String(item?.provider||fallback.provider||'').trim(),
    name:String(item?.name||fallback.name||'Savings account').trim(),
    rate,
    rateLabel:String(item?.rateLabel||`${rate.toFixed(rate%1?2:0)}% AER`).trim(),
    tag:String(item?.tag||fallback.tag||'Savings').trim(),
    min:String(item?.min||fallback.min||'Check provider').trim(),
    limit:String(item?.limit||fallback.limit||'Check provider').trim(),
    access:String(item?.access||fallback.access||'Check provider terms').trim(),
    eligibility:String(item?.eligibility||fallback.eligibility||'Check provider terms').trim(),
    detail:String(item?.detail||fallback.detail||'Live comparison result. Check source/provider terms before applying.').trim(),
    flag:String(item?.flag||fallback.flag||'Live result').trim(),
    sourceUrl:String(item?.sourceUrl||fallback.sourceUrl||'').trim()
  };
}

function mergeLiveShopCategory(categoryId,incoming,meta={}){
  const fallback=SAVINGS_SHOP_CATALOG[categoryId];
  const current=savingsShopCatalog[categoryId]||fallback;
  if(!fallback)return null;

  const live=Array.isArray(incoming)?incoming.filter(validShopItem):[];
  if(!live.length)return null;

  const existing=[...(current.items||[]),...(fallback.items||[])];
  const existingByKey=new Map(existing.map(x=>[shopItemKey(x),x]));
  const used=new Set();
  const merged=[];

  live
    .map(x=>normaliseShopItem(x,existingByKey.get(shopItemKey(x))||{}))
    .sort((a,b)=>Number(b.rate)-Number(a.rate))
    .forEach(item=>{
      const key=shopItemKey(item);
      if(!used.has(key)){
        used.add(key);
        merged.push(item);
      }
    });

  existing
    .filter(validShopItem)
    .sort((a,b)=>Number(b.rate)-Number(a.rate))
    .forEach(item=>{
      const key=shopItemKey(item);
      if(merged.length<5&&!used.has(key)){
        used.add(key);
        merged.push(normaliseShopItem(item,item));
      }
    });

  return {
    ...fallback,
    ...current,
    source:String(meta.source||current.source||fallback.source),
    checked:meta.sourceUpdated
      ? String(meta.sourceUpdated)
      : new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}),
    checkedAt:String(meta.checkedAt||new Date().toISOString()),
    verifiedCount:Math.min(5,live.length),
    live:true,
    items:merged.slice(0,5)
  };
}

function shopFreshnessText(cat){
  if(cat?.live&&cat?.checkedAt){
    const when=new Date(cat.checkedAt);
    const time=Number.isNaN(when.getTime())?'':when.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
    const verified=Number(cat.verifiedCount)||0;
    return `Refreshed ${time||'live'} • ${verified}/5 live`;
  }
  return `Checked ${cat?.checked||'recently'}`;
}


const fallbackMarket={
  easyAccess:{rate:5.00,provider:'UK market headline',updated:'30 September 2026',source:'https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/'},
  regularSaver:{rate:8.00,provider:'UK market headline',updated:'29 September 2026',source:'https://www.moneysavingexpert.com/savings/best-regular-savings-accounts/'},
  fetchedAt:'2026-09-30T12:00:00Z',stale:true
};

function uuid(){return globalThis.crypto?.randomUUID?crypto.randomUUID():'id-'+Date.now()+'-'+Math.random().toString(16).slice(2)}
const todayIso=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}

const MODULE_DEFS=[
  {id:'actions',label:'Action centre',element:'actionCentre'},
  {id:'metrics',label:'Headline metrics',element:'metricsSection'},
  {id:'insights',label:'Insights + history',element:'intelligenceSection'},
  {id:'market',label:'Best rates / market comparison',element:'marketSection'},
  {id:'shop',label:'Savings shop',element:'shopSection'},
  {id:'goal',label:'Goal + projection graph',element:'goalSection'},
  {id:'accounts',label:'Savings accounts',element:'accountsSection'},
  {id:'planning',label:'Planning + bonus trackers',element:'planningSection'},
  {id:'data',label:'Rate history + data tools',element:'dataSection'}
];

const defaultProfile={
  appName:'Savings Hub',
  eyebrow:'PERSONAL FINANCE',
  subtitle:'Track it • plan it • make your money work harder',
  icon:'💰',
  accent:'#58a6ff',
  theme:'midnight',
  currency:'GBP',
  locale:'en-GB',
  goalName:'Savings',
  planningName:'Planning budget',
  visibleModules:{
    actions:true,metrics:true,insights:true,market:true,shop:true,goal:true,accounts:true,planning:true,data:true
  },
  moduleOrder:['actions','metrics','insights','market','shop','goal','accounts','planning','data']
};

const legacyProfile={
  ...defaultProfile,
  visibleModules:{...defaultProfile.visibleModules},
  moduleOrder:[...defaultProfile.moduleOrder],
  appName:'Savings Command Centre',
  eyebrow:'AUSTRALIA FUND',
  subtitle:'Track it • optimise it • know exactly what to do next',
  goalName:'Australia',
  planningName:'Australia landing budget'
};


const defaultData={
  version:5,updatedAt:new Date().toISOString(),lastBalanceUpdate:todayIso(),profile:{...defaultProfile,visibleModules:{...defaultProfile.visibleModules},moduleOrder:[...defaultProfile.moduleOrder]},
  targetDate:'2027-09-30',targetAmount:10000,marketCache:fallbackMarket,marketHistory:[],
  settings:{staleDays:30,minGain:10,notifications:false,lastNotified:''},
  moveBudget:{audPerGbp:1.90,items:[]},
  switches:[],
  oneOffDeposits:[],
  balanceHistory:[],
  activityLog:[],
  accounts:[]
};

const $=id=>document.getElementById(id);
const clone=x=>JSON.parse(JSON.stringify(x));

let data=migrate(loadRaw()),market=null,supabaseClient=null,currentUser=null,syncTimer=null,installPrompt=null,editingAccountIndex=null;
let graphState={
  monthlyOverride:null,
  monthlyCustom:false,
  rateAdjustment:0,
  horizon:'target',
  points:[],
  labels:[],
  activeIndex:null,
  lumpSumAmount:0,
  lumpSumDate:'',
  pauseMonths:0
};

let accountListState={search:'',type:'all',sort:'default'};
let editingOneOffId=null;
let intelligenceRenderKey='';
let goalTimelineCache={key:'',rows:[]};

let accountInsightState={
  index:null,
  horizon:'target',
  activeIndex:null,
  series:null
};

let autoSyncInterval=null;
let syncInFlight=false;
let lastAutoSyncAt=0;
market=data.marketCache||fallbackMarket;

function loadRaw(){try{const r=localStorage.getItem(STORAGE_KEY);return r?JSON.parse(r):clone(defaultData)}catch{return clone(defaultData)}}
function inferType(a){if(a.type)return a.type;return Number(a.monthly)>0?'regular':'easy'}
function inferNextDeposit(a){
  if(!Number(a.monthly))return '';
  const now=new Date(),day=Math.min(parseDate(a.maturity)?.getDate()||now.getDate(),28);
  let d=new Date(now.getFullYear(),now.getMonth(),day,12);if(d<=now)d=new Date(now.getFullYear(),now.getMonth()+1,day,12);return isoDate(d)
}
function migrate(d){
  const legacyVersion=Number(d?.version||0);
  const hadProfile=!!d?.profile;
  const o=d&&Array.isArray(d.accounts)?d:clone(defaultData);
  o.version=5;o.updatedAt=o.updatedAt||new Date().toISOString();o.lastBalanceUpdate=o.lastBalanceUpdate||todayIso();
  o.marketCache=o.marketCache||fallbackMarket;o.marketHistory=Array.isArray(o.marketHistory)?o.marketHistory:[];
  o.settings={...defaultData.settings,...(o.settings||{})};
  const profileSeed=(!hadProfile&&legacyVersion>0&&legacyVersion<=3)?legacyProfile:defaultProfile;
  o.profile={...clone(profileSeed),...(o.profile||{})};
  o.profile.visibleModules={...defaultProfile.visibleModules,...(o.profile.visibleModules||{})};
  const validOrder=Array.isArray(o.profile.moduleOrder)?o.profile.moduleOrder.filter(id=>MODULE_DEFS.some(m=>m.id===id)):[];
  if(!validOrder.includes('insights')){
    const metricsIndex=validOrder.indexOf('metrics');
    validOrder.splice(metricsIndex>=0?metricsIndex+1:Math.min(2,validOrder.length),0,'insights');
  }
  for(const m of MODULE_DEFS)if(!validOrder.includes(m.id))validOrder.push(m.id);
  o.profile.moduleOrder=validOrder;
  o.moveBudget={...clone(defaultData.moveBudget),...(o.moveBudget||{})};
  if(!Array.isArray(o.moveBudget.items))o.moveBudget.items=clone(defaultData.moveBudget.items);
  o.switches=Array.isArray(o.switches)?o.switches:[];
  o.oneOffDeposits=Array.isArray(o.oneOffDeposits)?o.oneOffDeposits.map(x=>({
    id:x.id||uuid(),name:x.name||'One-off deposit',amount:Math.max(0,Number(x.amount)||0),
    date:x.date||'',accountId:x.accountId||'',status:['planned','received','cancelled'].includes(x.status)?x.status:'planned',
    notes:x.notes||''
  })):[];
  o.balanceHistory=Array.isArray(o.balanceHistory)?o.balanceHistory:[];
  o.activityLog=Array.isArray(o.activityLog)?o.activityLog:[];
  o.accounts=o.accounts.map(a=>({
    id:a.id||uuid(),name:a.name||'Savings account',provider:a.provider||'',type:inferType(a),
    balance:Number(a.balance)||0,aer:Number(a.aer)||0,monthly:Number(a.monthly)||0,
    monthlyLimit:Number(a.monthlyLimit)||0,maxBalance:Number(a.maxBalance)||0,
    nextDeposit:a.nextDeposit||inferNextDeposit(a),maturity:a.maturity||'',rateEnd:a.rateEnd||a.maturity||'',
    access:a.access||'Easy',rolloverMode:a.rolloverMode||'market',
    rolloverRate:Number.isFinite(Number(a.rolloverRate))?Number(a.rolloverRate):5,
    replacementMode:a.replacementMode||(Number(a.monthly)?'market':'stop'),
    replacementRate:Number.isFinite(Number(a.replacementRate))?Number(a.replacementRate):7,
    notes:a.notes||'',updatedAt:a.updatedAt||o.lastBalanceUpdate||todayIso()
  }));

  if(!o.balanceHistory.length && o.accounts.length){
    const baseDate=(o.lastBalanceUpdate||todayIso())+'T12:00:00';
    o.balanceHistory.push({
      id:uuid(),at:baseDate,reason:'Imported baseline',
      total:o.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0),
      accounts:Object.fromEntries(o.accounts.map(a=>[a.id,Number(a.balance)||0]))
    });
  }

  return o
}
function markDirty(){localStorage.setItem(DIRTY_KEY,'1')}
function isDirty(){return localStorage.getItem(DIRTY_KEY)==='1'}
function clearDirty(){localStorage.removeItem(DIRTY_KEY)}

function cloudOwner(){return localStorage.getItem(CLOUD_OWNER_KEY)||''}
function markCloudOwner(userId){if(userId)localStorage.setItem(CLOUD_OWNER_KEY,String(userId))}
function isFirstCloudSyncForCurrentUser(){return !!currentUser&&cloudOwner()!==String(currentUser.id)}

function privacyMode(){return localStorage.getItem(PRIVACY_KEY)==='1'}
function applyPrivacyMode(){
  document.body.classList.toggle('privacyMode',privacyMode());
  const btn=$('privacyBtn');
  if(btn)btn.textContent=privacyMode()?'Show values':'Hide values';
}
function togglePrivacyMode(){
  localStorage.setItem(PRIVACY_KEY,privacyMode()?'0':'1');
  applyPrivacyMode();
}

function recoverySnapshots(){
  try{
    const value=JSON.parse(localStorage.getItem(RECOVERY_KEY)||'[]');
    return Array.isArray(value)?value:[];
  }catch{return []}
}

function saveRecoverySnapshot(label,payload){
  if(!payload)return;
  try{
    const list=recoverySnapshots();
    const serialized=JSON.stringify(payload);
    const newest=list[0]?.payload?JSON.stringify(list[0].payload):'';
    if(serialized===newest)return;

    list.unshift({
      savedAt:new Date().toISOString(),
      label:String(label||'Recovery snapshot'),
      payload:JSON.parse(serialized)
    });

    localStorage.setItem(RECOVERY_KEY,JSON.stringify(list.slice(0,10)));
    updateRecoveryButton();
  }catch(e){
    console.warn('Could not save recovery snapshot',e);
  }
}

function updateRecoveryButton(){
  const btn=$('restoreRecoveryBtn');
  if(!btn)return;
  const list=recoverySnapshots();
  btn.disabled=!list.length;
  btn.textContent=list.length?`Restore recovery (${list.length})`:'No recovery snapshots';
}

function restoreLatestRecovery(){
  const list=recoverySnapshots();
  if(!list.length)return alert('There are no recovery snapshots on this device.');

  const snap=list[0];
  const when=new Date(snap.savedAt).toLocaleString('en-GB');

  if(!confirm(`Restore the latest recovery snapshot?\n\n${snap.label}\n${when}\n\nYour current local state will be preserved as another recovery snapshot first.`))return;

  saveRecoverySnapshot('Before manual recovery restore',data);
  data=migrate(snap.payload);
  data.updatedAt=new Date().toISOString();
  market=data.marketCache||market||fallbackMarket;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  markDirty();
  render();
  scheduleSync(250);
  alert('Recovery snapshot restored. It will auto-sync to the cloud.');
}
function saveData({sync=true,balanceTouch=false}={}){
  data.updatedAt=new Date().toISOString();data.marketCache=market;if(balanceTouch)data.lastBalanceUpdate=todayIso();
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));markDirty();render();if(sync)scheduleSync()
}

function currentBalanceMap(){
  return Object.fromEntries(data.accounts.map(a=>[a.id,Number(a.balance)||0]));
}

function balanceMapsEqual(a,b){
  const keys=new Set([...Object.keys(a||{}),...Object.keys(b||{})]);
  for(const k of keys)if(Math.abs((Number(a?.[k])||0)-(Number(b?.[k])||0))>.005)return false;
  return true;
}

function recordBalanceSnapshot(reason='Balance update',{force=false}={}){
  data.balanceHistory=Array.isArray(data.balanceHistory)?data.balanceHistory:[];
  const accounts=currentBalanceMap();
  const last=data.balanceHistory[data.balanceHistory.length-1];
  if(!force && last && balanceMapsEqual(last.accounts,accounts))return false;

  data.balanceHistory.push({
    id:uuid(),
    at:new Date().toISOString(),
    reason:String(reason||'Balance update'),
    total:Object.values(accounts).reduce((s,v)=>s+(Number(v)||0),0),
    accounts
  });
  data.balanceHistory=data.balanceHistory.slice(-500);
  return true;
}

function recordActivity(kind,details={}){
  data.activityLog=Array.isArray(data.activityLog)?data.activityLog:[];
  data.activityLog.push({id:uuid(),at:new Date().toISOString(),kind,...details});
  data.activityLog=data.activityLog.slice(-800);
}

function sortedBalanceHistory(){
  return [...(data.balanceHistory||[])].filter(x=>x?.at).sort((a,b)=>new Date(a.at)-new Date(b.at));
}

function accountBalanceHistory(accountId){
  return sortedBalanceHistory().map(x=>({at:x.at,balance:Number(x.accounts?.[accountId])||0,reason:x.reason||''}));
}
function money(n){
  const p=data?.profile||defaultProfile;
  try{
    return new Intl.NumberFormat(p.locale||'en-GB',{
      style:'currency',
      currency:p.currency||'GBP',
      maximumFractionDigits:2
    }).format(Number(n)||0)
  }catch{
    return new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(Number(n)||0)
  }
}
function pct(n){return `${(Number(n)||0).toFixed(2)}%`}
function parseDate(s){return s?new Date(s+'T12:00:00'):null}
function isoDate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function addMonth(d){const day=d.getDate(),x=new Date(d.getFullYear(),d.getMonth()+1,1,12),last=new Date(x.getFullYear(),x.getMonth()+1,0,12).getDate();x.setDate(Math.min(day,last));return x}
function daysBetween(a,b){return Math.ceil((b-a)/(86400000))}
function formatDate(s){if(!s)return '—';return parseDate(s).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}
function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function safeSource(url){try{const u=new URL(url);return ['http:','https:'].includes(u.protocol)?u.href:'#'}catch{return '#'}}
function dailyFactor(aer){return Math.pow(1+(Number(aer)||0)/100,1/365)}
function marketEasy(adj=0){return Math.max(0,(Number(market?.easyAccess?.rate)||5)+adj)}
function marketRegular(adj=0){return Math.max(0,(Number(market?.regularSaver?.rate)||7)+adj)}

function actualMonthlyTotal(){
  return data.accounts.reduce((sum,account)=>sum+(Number(account.monthly)||0),0);
}

function graphMonthlyTotal(){
  return graphState.monthlyCustom
    ? Math.max(0,Number(graphState.monthlyOverride)||0)
    : actualMonthlyTotal();
}

function plannedOneOffsForAccount(accountId,start,target){
  return (data.oneOffDeposits||[])
    .filter(x=>x.status==='planned'&&x.accountId===accountId&&Number(x.amount)>0&&x.date)
    .map(x=>({...x,_date:parseDate(x.date)}))
    .filter(x=>x._date&&x._date>start&&x._date<=target)
    .sort((a,b)=>a._date-b._date);
}

function projectAccount(acc,targetDate,marketAdjustment=0,monthlyOverrideTotal=null,scenarioOptions=null){
  const start=new Date();start.setHours(12,0,0,0);const target=parseDate(targetDate);
  if(!target||target<=start)return {value:Number(acc.balance)||0,principal:Number(acc.balance)||0,interest:0};
  let active=Number(acc.balance)||0,rolled=0,replacement=0,principal=active;
  const baseMonthly=Number(acc.monthly)||0;
  const scheduledTotal=actualMonthlyTotal();

  const requestedMonthly=monthlyOverrideTotal===null?null:Math.max(0,Number(monthlyOverrideTotal)||0);
  const scaleDown=(requestedMonthly!==null&&scheduledTotal>0&&requestedMonthly<scheduledTotal)?requestedMonthly/scheduledTotal:1;
  const scaledMonthly=baseMonthly*scaleDown;
  const monthly=Math.min(scaledMonthly,Number(acc.monthlyLimit)>0?Number(acc.monthlyLimit):Infinity);
  const maturity=parseDate(acc.maturity);let next=parseDate(acc.nextDeposit),matured=maturity?start>=maturity:false;
  if(matured){rolled=active;active=0}
  const easyAfter=acc.rolloverMode==='market'?marketEasy(marketAdjustment):acc.rolloverMode==='manual'?Number(acc.rolloverRate)||0:0;
  const regAfter=acc.replacementMode==='market'?marketRegular(marketAdjustment):acc.replacementMode==='manual'?Number(acc.replacementRate)||0:0;
  const pauseMonths=Math.max(0,Number(scenarioOptions?.pauseMonths)||0);
  const pauseUntil=pauseMonths?addMonthsToDate(start,pauseMonths):null;
  const oneOffs=plannedOneOffsForAccount(acc.id,start,target);
  let oneOffIndex=0;

  for(let d=new Date(start);d<target;d.setDate(d.getDate()+1)){
    const tomorrow=new Date(d);tomorrow.setDate(tomorrow.getDate()+1);
    if(!matured&&maturity&&tomorrow>=maturity){
      active*=dailyFactor(acc.aer);rolled+=active;active=0;matured=true
    }else if(active>0){active*=dailyFactor(acc.aer)}
    if(rolled>0&&easyAfter>0)rolled*=dailyFactor(easyAfter);
    if(replacement>0&&regAfter>0)replacement*=dailyFactor(regAfter);

    if(next&&tomorrow>=next){
      const contributionAllowed=!pauseUntil||next>=pauseUntil;
      if(contributionAllowed){
        if(!maturity||next<maturity){active+=monthly;principal+=monthly}
        else if(acc.replacementMode!=='stop'){replacement+=monthly;principal+=monthly}
      }
      next=addMonth(next)
    }

    while(oneOffIndex<oneOffs.length&&tomorrow>=oneOffs[oneOffIndex]._date){
      const amount=Number(oneOffs[oneOffIndex].amount)||0;
      const depositDate=oneOffs[oneOffIndex]._date;
      if(!matured&&(!maturity||depositDate<maturity))active+=amount;
      else if(acc.replacementMode!=='stop')replacement+=amount;
      else rolled+=amount;
      principal+=amount;
      oneOffIndex++;
    }
  }
  const value=active+rolled+replacement;return {value,principal,interest:value-principal}
}

function projectFlexibleOneOffs(targetDate,marketAdjustment=0){
  const start=new Date();start.setHours(12,0,0,0);
  const target=parseDate(targetDate);
  if(!target||target<=start)return {value:0,principal:0,interest:0};
  const deposits=(data.oneOffDeposits||[])
    .filter(x=>x.status==='planned'&&!x.accountId&&Number(x.amount)>0&&x.date)
    .map(x=>({...x,_date:parseDate(x.date)}))
    .filter(x=>x._date&&x._date>start&&x._date<=target)
    .sort((a,b)=>a._date-b._date);
  let value=0,principal=0,i=0;
  const factor=dailyFactor(marketEasy(marketAdjustment));
  for(let d=new Date(start);d<target;d.setDate(d.getDate()+1)){
    const tomorrow=new Date(d);tomorrow.setDate(tomorrow.getDate()+1);
    if(value>0)value*=factor;
    while(i<deposits.length&&tomorrow>=deposits[i]._date){
      const amount=Number(deposits[i].amount)||0;
      value+=amount;principal+=amount;i++;
    }
  }
  return {value,principal,interest:value-principal};
}

function whatIfExtraMonthly(monthlyOverrideTotal){
  if(monthlyOverrideTotal===null)return 0;
  return Math.max(0,(Number(monthlyOverrideTotal)||0)-actualMonthlyTotal());
}

function projectWhatIfExtraPot(extraMonthly,targetDate,marketAdjustment=0,scenarioOptions=null){
  extraMonthly=Math.max(0,Number(extraMonthly)||0);
  const start=new Date();start.setHours(12,0,0,0);
  const target=parseDate(targetDate);

  if(!target||target<=start||extraMonthly<=0){
    return {value:0,principal:0,interest:0};
  }

  let value=0,principal=0;
  let next=addMonth(start);
  const factor=dailyFactor(marketEasy(marketAdjustment));
  const pauseMonths=Math.max(0,Number(scenarioOptions?.pauseMonths)||0);
  const pauseUntil=pauseMonths?addMonthsToDate(start,pauseMonths):null;

  for(let d=new Date(start);d<target;d.setDate(d.getDate()+1)){
    const tomorrow=new Date(d);tomorrow.setDate(tomorrow.getDate()+1);

    if(value>0)value*=factor;

    while(next && tomorrow>=next && next<=target){
      if(!pauseUntil||next>=pauseUntil){
        value+=extraMonthly;
        principal+=extraMonthly;
      }
      next=addMonth(next);
    }
  }

  return {value,principal,interest:value-principal};
}

function totals(adj=0,monthlyOverrideTotal=null,targetDateOverride=null,scenarioOptions=null){
  let value=0,principal=0,interest=0;
  const target=targetDateOverride||data.targetDate;

  for(const a of data.accounts){
    const p=projectAccount(a,target,adj,monthlyOverrideTotal,scenarioOptions);
    value+=p.value;
    principal+=p.principal;
    interest+=p.interest;
  }

  const flexibleOneOff=projectFlexibleOneOffs(target,adj);
  value+=flexibleOneOff.value;principal+=flexibleOneOff.principal;interest+=flexibleOneOff.interest;

  const extra=whatIfExtraMonthly(monthlyOverrideTotal);
  if(extra>0){
    const flexible=projectWhatIfExtraPot(extra,target,adj,scenarioOptions);
    value+=flexible.value;
    principal+=flexible.principal;
    interest+=flexible.interest;
  }

  return {value,principal,interest}
}
function graphScenarioOptions(){
  return {
    pauseMonths:Math.max(0,Number(graphState.pauseMonths)||0),
    lumpSumAmount:Math.max(0,Number(graphState.lumpSumAmount)||0),
    lumpSumDate:graphState.lumpSumDate||''
  };
}

function projectScenarioLump(options,targetDate,marketAdjustment=0){
  const amount=Math.max(0,Number(options?.lumpSumAmount)||0);
  const deposit=parseDate(options?.lumpSumDate);
  const target=parseDate(targetDate);
  const now=new Date();now.setHours(12,0,0,0);
  if(!amount||!deposit||!target||deposit<=now||deposit>target)return {value:0,principal:0,interest:0};
  const days=Math.max(0,daysBetween(deposit,target));
  const value=amount*Math.pow(dailyFactor(marketEasy(marketAdjustment)),days);
  return {value,principal:amount,interest:value-amount};
}

function scenarioTotals(adj=0,monthlyOverrideTotal=null,targetDateOverride=null,options=null){
  const target=targetDateOverride||data.targetDate;
  const base=totals(adj,monthlyOverrideTotal,target,options);
  const lump=projectScenarioLump(options,target,adj);
  return {value:base.value+lump.value,principal:base.principal+lump.principal,interest:base.interest+lump.interest};
}

function requiredMonthly(){
  const target=Number(data.targetAmount)||0,current=data.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0);
  const end=parseDate(data.targetDate),now=new Date();if(!end||end<=now)return 0;
  const months=Math.max(1,Math.ceil((end-now)/(86400000*30.4375)));
  return Math.max(0,(target-current)/months)
}

function moveBudgetGbp(){const aud=data.moveBudget.items.reduce((s,i)=>s+(Number(i.aud)||0),0),fx=Number(data.moveBudget.audPerGbp)||1;return aud/fx}

function rateOpportunities(){
  const easy=marketEasy(),reg=marketRegular(),minGain=Number(data.settings.minGain)||10,out=[];
  for(const a of data.accounts){
    const bal=Number(a.balance)||0,rate=Number(a.aer)||0,monthly=Number(a.monthly)||0;
    if(['easy','current','isa','other'].includes(a.type)&&bal>0&&easy>rate+.03){
      const gain=bal*(easy-rate)/100;if(gain>=minGain)out.push({kind:'easy',gain,headline:`${a.name}: ${pct(rate)} → ${pct(easy)} could add about ${money(gain)} a year.`,detail:`Based on ${money(bal)}. Check caps, bonus periods and withdrawal rules before moving.`,source:market.easyAccess?.source||null})
    }
    if(a.type==='regular'&&monthly>0&&reg>rate+.10){
      const eff=Math.min(monthly,a.monthlyLimit>0?a.monthlyLimit:monthly),rough=eff*12*(reg-rate)/200;
      if(rough>=Math.min(minGain,10))out.push({kind:'regular',gain:rough,headline:`${a.name}: market regular savers are up to ${pct(reg)} vs your ${pct(rate)}.`,detail:`Approx. ${money(rough)} uplift over a year at £${eff}/month, subject to eligibility and limits.`,source:market.regularSaver?.source||null})
    }
  }
  return out.sort((a,b)=>b.gain-a.gain)
}

function actions(){
  const now=new Date();now.setHours(12,0,0,0);const out=[],stale=Number(data.settings.staleDays)||30;
  for(const a of data.accounts){
    const mat=parseDate(a.maturity),rateEnd=parseDate(a.rateEnd),updated=parseDate(a.updatedAt);
    if(mat){const d=daysBetween(now,mat);if(d>=0&&d<=120)out.push({priority:d<=30?3:2,kind:'maturity',icon:'⏳',title:`${a.name} matures in ${d} day${d===1?'':'s'}`,text:`${formatDate(a.maturity)} • lump sum plan: ${a.rolloverMode==='market'?`top easy access (${pct(marketEasy())})`:a.rolloverMode==='manual'?pct(a.rolloverRate):'0%'}`,money:''})}
    if(rateEnd){const d=daysBetween(now,rateEnd);if(d>=0&&d<=60&&!mat)out.push({priority:d<=14?3:2,kind:'rate',icon:'⚠',title:`${a.name} rate ends in ${d} days`,text:`Review before ${formatDate(a.rateEnd)} so it does not fall onto a poor default rate.`,money:''})}
    if(updated&&daysBetween(updated,now)>stale)out.push({priority:1,kind:'stale',icon:'↻',title:`Update ${a.name} balance`,text:`Last marked updated ${daysBetween(updated,now)} days ago.`,money:''});
    if(a.monthlyLimit>0&&a.monthly>a.monthlyLimit)out.push({priority:3,kind:'cap',icon:'!',title:`${a.name} contribution exceeds its monthly cap`,text:`You entered £${a.monthly}/month but the cap is £${a.monthlyLimit}. Projection uses the cap.`,money:''})
    if(a.maxBalance>0&&a.balance>a.maxBalance)out.push({priority:3,kind:'cap',icon:'!',title:`${a.name} is above its interest-paying balance cap`,text:`Balance ${money(a.balance)} vs cap ${money(a.maxBalance)}. Check where excess cash should sit.`,money:''})
  }
  for(const o of rateOpportunities())out.push({priority:o.gain>=50?3:2,kind:'opportunity',icon:'£',title:o.headline,text:o.detail,money:`+${money(o.gain)}/yr`,source:o.source});
  const req=requiredMonthly(),actual=data.accounts.reduce((s,a)=>s+(Number(a.monthly)||0),0);
  if(actual+1<req)out.push({priority:2,kind:'target',icon:'◎',title:`Target needs roughly ${money(req)}/month from here`,text:`Current scheduled contributions are ${money(actual)}/month.`,money:`${money(req-actual)} gap`});
  for(const x of data.oneOffDeposits||[]){
    const d=parseDate(x.date);if(x.status==='planned'&&d){const days=daysBetween(now,d);if(days>=0&&days<=45)out.push({priority:days<=7?2:1,kind:'oneoff',icon:'★',title:`${x.name||'One-off deposit'} due in ${days} day${days===1?'':'s'}`,text:`${money(x.amount)} planned for ${formatDate(x.date)}.`,money:money(x.amount)})}
  }
  const fetched=market?.fetchedAt?new Date(market.fetchedAt):null;if(!fetched||Date.now()-fetched.getTime()>24*3600000)out.push({priority:1,kind:'market',icon:'↻',title:'Refresh market rates',text:'Your market comparison is more than 24 hours old.',money:''});
  const post=totals().value-moveBudgetGbp();if(post<3000)out.push({priority:2,kind:'buffer',icon:'✈',title:`${data.profile.planningName||'Planning'} buffer is getting tight`,text:`After your current planning costs, the projected remaining buffer is ${money(post)}.`,money:''});
  out.sort((a,b)=>b.priority-a.priority);return out
}



function setOnboardingComplete(){
  localStorage.setItem(ONBOARDING_KEY,'1');
}

function shouldShowOnboarding(){
  if(localStorage.getItem(ONBOARDING_KEY)==='1')return false;
  // Existing users with meaningful data should never be forced through onboarding.
  const meaningfulAccounts=(data.accounts||[]).some(a=>(Number(a.balance)||0)>0 || (Number(a.monthly)||0)>0);
  return !meaningfulAccounts;
}

function openOnboarding(){
  $('onboardGoalName').value=data.profile?.goalName||'Savings';
  $('onboardTargetDate').value=data.targetDate||'';
  $('onboardTargetAmount').value=Number(data.targetAmount)||10000;
  $('onboardCurrency').value=data.profile?.currency||'GBP';
  $('onboardingDialog').showModal();
}

function finishOnboarding(){
  data.profile.goalName=$('onboardGoalName').value.trim()||'Savings';
  data.targetDate=$('onboardTargetDate').value||data.targetDate;
  data.targetAmount=Math.max(0,Number($('onboardTargetAmount').value)||0);
  data.profile.currency=$('onboardCurrency').value||'GBP';
  setOnboardingComplete();
  saveData();
  try{$('onboardingDialog').close()}catch{}
  render();
  // New users should land directly in Add Account.
  setTimeout(()=>openAccount(null),150);
}

function accountHealthIssues(){
  const issues=[];
  const now=new Date(); now.setHours(12,0,0,0);

  for(const [index,a] of data.accounts.entries()){
    const name=a.name||`Account ${index+1}`;
    const balance=Number(a.balance)||0;
    const monthly=Number(a.monthly)||0;
    const aer=Number(a.aer);
    const next=parseDate(a.nextDeposit);
    const maturity=parseDate(a.maturity);
    const rateEnd=parseDate(a.rateEnd);
    const monthlyLimit=Number(a.monthlyLimit)||0;
    const maxBalance=Number(a.maxBalance)||0;

    if(balance<0){
      issues.push({severity:'bad',account:name,title:'Negative balance',text:'Balance is below £0. Check the saved amount.'});
    }
    if(!Number.isFinite(aer) || aer<0 || aer>30){
      issues.push({severity:'bad',account:name,title:'Unusual AER',text:`Saved AER is ${Number.isFinite(aer)?aer:'invalid'}%. Check the rate.`});
    }
    if(monthly<0){
      issues.push({severity:'bad',account:name,title:'Negative monthly saving',text:'Monthly contribution cannot be negative.'});
    }
    if(monthlyLimit>0 && monthly>monthlyLimit){
      issues.push({severity:'warn',account:name,title:'Monthly contribution exceeds cap',text:`You have ${money(monthly)}/month saved against a ${money(monthlyLimit)} monthly cap.`});
    }
    if(maxBalance>0 && balance>maxBalance){
      issues.push({severity:'warn',account:name,title:'Balance exceeds saved account cap',text:`Balance is ${money(balance)} against a ${money(maxBalance)} cap.`});
    }
    if(next && next<now && monthly>0){
      issues.push({severity:'warn',account:name,title:'Next-deposit date is in the past',text:`Saved as ${formatDate(a.nextDeposit)}. Update it so the schedule reflects reality.`});
    }
    if(maturity && maturity<now && balance>0){
      issues.push({severity:'warn',account:name,title:'Maturity/review date is in the past',text:`Saved as ${formatDate(a.maturity)} while the account still holds ${money(balance)}.`});
    }
    if(rateEnd && rateEnd<now && Number(a.aer)>0){
      issues.push({severity:'warn',account:name,title:'Rate-end date has passed',text:`Saved rate end is ${formatDate(a.rateEnd)}. Check whether the current AER is still correct.`});
    }
    if(monthly>0 && !a.nextDeposit){
      issues.push({severity:'info',account:name,title:'No next-deposit date',text:'Monthly saving is set, but there is no exact next deposit date.'});
    }
    if(balance>0 && !a.updatedAt){
      issues.push({severity:'info',account:name,title:'No balance-update date',text:'This balance has no freshness date.'});
    }
  }

  return issues;
}

function renderDataHealth(){
  const issues=accountHealthIssues();
  const bad=issues.filter(x=>x.severity==='bad').length;
  const warn=issues.filter(x=>x.severity==='warn').length;

  $('dataHealthSummary').innerHTML=issues.length
    ? `<div class="healthScore ${bad?'bad':warn?'warn':'good'}">
         <strong>${bad?`${bad} problem${bad===1?'':'s'}`:warn?`${warn} warning${warn===1?'':'s'}`:'Looks good'}</strong>
         <span>${issues.length} check${issues.length===1?'':'s'} need attention.</span>
       </div>`
    : `<div class="healthScore good"><strong>Everything looks healthy</strong><span>No account-data problems found.</span></div>`;

  $('dataHealthList').innerHTML=issues.length
    ? issues.map(x=>`<div class="healthIssue ${x.severity}">
        <div class="healthDot"></div>
        <div><strong>${escapeHtml(x.account)} — ${escapeHtml(x.title)}</strong><p>${escapeHtml(x.text)}</p></div>
      </div>`).join('')
    : '<div class="emptyState">No issues found.</div>';
}

function openDataHealth(){
  renderDataHealth();
  $('dataHealthDialog').showModal();
}

function accountSummary(){
  const count=data.accounts.length;
  const current=data.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0);
  const monthly=actualMonthlyTotal();
  const weightedBase=data.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0);
  const weightedRate=weightedBase
    ? data.accounts.reduce((s,a)=>s+(Number(a.balance)||0)*(Number(a.aer)||0),0)/weightedBase
    : 0;

  return {count,current,monthly,weightedRate};
}

function renderAccountSummary(){
  const s=accountSummary();
  $('accountSummaryStrip').innerHTML=`
    <div><span>Accounts</span><strong>${s.count}</strong></div>
    <div><span>Current balance</span><strong>${money(s.current)}</strong></div>
    <div><span>Monthly saving</span><strong>${money(s.monthly)}</strong></div>
    <div><span>Weighted AER</span><strong>${s.weightedRate.toFixed(2)}%</strong></div>
  `;
}

function sanitizeHexColor(v){
  return /^#[0-9a-f]{6}$/i.test(String(v||''))?String(v):defaultProfile.accent;
}

function applyTheme(){
  const p=data.profile||defaultProfile;
  document.documentElement.style.setProperty('--accent',sanitizeHexColor(p.accent));
  document.documentElement.dataset.theme=p.theme||'midnight';
  document.documentElement.style.setProperty('--app-accent',sanitizeHexColor(p.accent));

  document.title=p.appName||defaultProfile.appName;
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  if(themeMeta){
    themeMeta.setAttribute('content',p.theme==='light'?'#f6f8fa':p.theme==='dark'?'#101419':'#0d1117');
  }
}

function applyBranding(){
  const p=data.profile||defaultProfile;
  $('brandEyebrow').textContent=p.eyebrow||'';
  $('brandTitle').textContent=p.appName||defaultProfile.appName;
  $('brandSubtitle').textContent=p.subtitle||'';
  $('goalHeading').textContent=`${p.goalName||'Savings'} target`;
  $('accountsHeading').textContent=`${p.goalName||'Savings'} accounts`;
  $('planningHeading').textContent=p.planningName||'Planning budget';
}

function applyModuleLayout(){
  const p=data.profile||defaultProfile;
  const wrap=document.querySelector('.wrap');
  const footer=wrap.querySelector('footer');

  for(const id of p.moduleOrder){
    const def=MODULE_DEFS.find(m=>m.id===id);
    const el=def?$(def.element):null;
    if(el) wrap.insertBefore(el,footer);
  }

  for(const def of MODULE_DEFS){
    const el=$(def.element);
    if(!el) continue;
    const visible=p.visibleModules?.[def.id]!==false;
    el.classList.toggle('moduleHidden',!visible);
  }
}

function applyCustomisation(){
  applyTheme();
  applyBranding();
  applyModuleLayout();
}

function renderModuleToggles(){
  const p=data.profile||defaultProfile;
  $('moduleToggles').innerHTML=MODULE_DEFS.map(m=>`
    <label class="moduleToggle">
      <input type="checkbox" data-module-toggle="${m.id}" ${p.visibleModules?.[m.id]!==false?'checked':''}>
      <span>${escapeHtml(m.label)}</span>
    </label>
  `).join('');
}

function renderModuleOrderEditor(){
  const p=data.profile||defaultProfile;
  $('moduleOrderEditor').innerHTML=p.moduleOrder.map((id,i)=>{
    const def=MODULE_DEFS.find(m=>m.id===id);
    if(!def)return '';
    return `<div class="moduleOrderRow" data-order-id="${id}">
      <span>${i+1}. ${escapeHtml(def.label)}</span>
      <div class="orderButtons">
        <button type="button" data-order-up="${id}" ${i===0?'disabled':''}>↑</button>
        <button type="button" data-order-down="${id}" ${i===p.moduleOrder.length-1?'disabled':''}>↓</button>
      </div>
    </div>`
  }).join('');

  $('moduleOrderEditor').querySelectorAll('[data-order-up]').forEach(btn=>btn.addEventListener('click',()=>{
    const id=btn.dataset.orderUp;
    const i=data.profile.moduleOrder.indexOf(id);
    if(i>0){
      [data.profile.moduleOrder[i-1],data.profile.moduleOrder[i]]=[data.profile.moduleOrder[i],data.profile.moduleOrder[i-1]];
      renderModuleOrderEditor();
    }
  }));

  $('moduleOrderEditor').querySelectorAll('[data-order-down]').forEach(btn=>btn.addEventListener('click',()=>{
    const id=btn.dataset.orderDown;
    const i=data.profile.moduleOrder.indexOf(id);
    if(i>=0&&i<data.profile.moduleOrder.length-1){
      [data.profile.moduleOrder[i+1],data.profile.moduleOrder[i]]=[data.profile.moduleOrder[i],data.profile.moduleOrder[i+1]];
      renderModuleOrderEditor();
    }
  }));
}

function updateCustomPreview(){
  const name=$('customAppName').value.trim()||defaultProfile.appName;
  const subtitle=$('customSubtitle').value.trim()||'Your personal finance dashboard';
  const icon=$('customIcon').value.trim()||'💰';
  $('customPreviewTitle').textContent=name;
  $('customPreviewSubtitle').textContent=subtitle;
  $('customPreviewIcon').textContent=icon;
  $('customPreviewIcon').style.background=$('customAccent').value||defaultProfile.accent;
}

function openCustomise(){
  const p=data.profile||defaultProfile;
  $('customAppName').value=p.appName||'';
  $('customEyebrow').value=p.eyebrow||'';
  $('customSubtitle').value=p.subtitle||'';
  $('customIcon').value=p.icon||'';
  $('customAccent').value=sanitizeHexColor(p.accent);
  $('customTheme').value=p.theme||'midnight';
  $('customCurrency').value=p.currency||'GBP';
  $('customGoalName').value=p.goalName||'Savings';
  $('customPlanningName').value=p.planningName||'Planning budget';
  renderModuleToggles();
  renderModuleOrderEditor();
  updateCustomPreview();
  $('customiseDialog').showModal();
}

function saveCustomisation(){
  data.profile.appName=$('customAppName').value.trim()||defaultProfile.appName;
  data.profile.eyebrow=$('customEyebrow').value.trim();
  data.profile.subtitle=$('customSubtitle').value.trim();
  data.profile.icon=$('customIcon').value.trim()||'💰';
  data.profile.accent=sanitizeHexColor($('customAccent').value);
  data.profile.theme=$('customTheme').value||'midnight';
  data.profile.currency=$('customCurrency').value||'GBP';
  data.profile.goalName=$('customGoalName').value.trim()||'Savings';
  data.profile.planningName=$('customPlanningName').value.trim()||'Planning budget';

  $('moduleToggles').querySelectorAll('[data-module-toggle]').forEach(input=>{
    data.profile.visibleModules[input.dataset.moduleToggle]=input.checked;
  });

  saveData();
  applyCustomisation();
  try{$('customiseDialog').close()}catch{}
}

function resetCustomisation(){
  if(!confirm('Restore the default Savings Hub look? Your accounts and balances will not be changed.'))return;
  data.profile=clone(defaultProfile);
  saveData();
  try{$('customiseDialog').close()}catch{}
  setTimeout(openCustomise,0);
}


function currentTotalBalance(){return data.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0)}
function estimatedMonthlyInterestRunRate(){return data.accounts.reduce((s,a)=>s+(Number(a.balance)||0)*(Number(a.aer)||0)/100/12,0)}

function goalProjectionTimeline(maxMonths=180){
  const key=`${data.updatedAt}|${market?.fetchedAt||''}|${maxMonths}`;
  if(goalTimelineCache.key===key&&goalTimelineCache.rows.length)return goalTimelineCache.rows;
  const now=new Date();now.setHours(12,0,0,0);
  const rows=[{date:todayIso(),value:currentTotalBalance()}];
  for(let m=1;m<=maxMonths;m++){
    const d=addMonthsToDate(now,m);
    rows.push({date:isoDate(d),value:totals(0,null,isoDate(d)).value});
  }
  goalTimelineCache={key,rows};
  return rows;
}

function dateForProjectedAmount(amount,maxMonths=120){
  amount=Math.max(0,Number(amount)||0);
  if(currentTotalBalance()>=amount)return todayIso();
  const rows=goalProjectionTimeline(Math.max(maxMonths,180));
  return rows.find(x=>x.value>=amount)?.date||'';
}

function projectedGoalHitDate(){return dateForProjectedAmount(Number(data.targetAmount)||0,180)}

function renderGoalPace(){
  const target=Number(data.targetAmount)||0;
  const current=currentTotalBalance();
  const req=requiredMonthly();
  const monthly=actualMonthlyTotal();
  const hit=projectedGoalHitDate();
  const targetDate=parseDate(data.targetDate);
  const hitDate=parseDate(hit);
  let headline='Set a goal to see your pace';
  let badge='—';
  let detail='Add a target amount and date to calculate milestones.';

  if(target>0&&targetDate){
    if(current>=target){
      headline='Goal already reached';badge='Reached';detail=`You currently have ${money(current-target)} above the ${money(target)} target.`;
    }else if(hitDate){
      const diff=daysBetween(hitDate,targetDate);
      if(diff>15){headline=`On course to arrive ${diff} days early`;badge='Ahead';detail=`At the current plan, ${money(target)} is first reached around ${formatDate(hit)}.`}
      else if(diff>=-15){headline='Current plan is broadly on pace';badge='On track';detail=`Estimated goal hit: ${formatDate(hit)} • target date ${formatDate(data.targetDate)}.`}
      else{headline=`Current plan reaches the goal about ${Math.abs(diff)} days late`;badge='Behind';detail=`About ${money(Math.max(0,req-monthly))}/month extra closes the simple monthly pace gap.`}
    }else{headline='Goal is outside the current 15-year projection';badge='Review';detail=`Current scheduled saving is ${money(monthly)}/month.`}
  }

  $('paceHeadline').textContent=headline;$('paceBadge').textContent=badge;$('paceDetail').textContent=detail;
  $('paceBadge').className='paceBadge '+(badge==='Ahead'||badge==='Reached'?'good':badge==='Behind'||badge==='Review'?'warn':'');

  const levels=[.25,.5,.75,1];
  $('milestoneRail').innerHTML=levels.map(level=>{
    const amount=target*level;const date=dateForProjectedAmount(amount,180);const reached=current>=amount;
    return `<div class="milestone ${reached?'reached':''}"><div class="milestoneDot">${reached?'✓':Math.round(level*100)+'%'}</div><div><strong>${money(amount)}</strong><span>${reached?'Reached':date?formatDate(date):'Beyond forecast'}</span></div></div>`;
  }).join('');
}

function monthKey(dateLike){const d=new Date(dateLike);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`}
function savingsStreak(){
  const hist=sortedBalanceHistory();
  if(hist.length<2)return 0;
  const byMonth=new Map();
  for(const h of hist)byMonth.set(monthKey(h.at),Number(h.total)||0);
  const keys=[...byMonth.keys()].sort();
  let streak=0;
  for(let i=keys.length-1;i>0;i--){
    if((byMonth.get(keys[i])||0)>(byMonth.get(keys[i-1])||0)+.01)streak++;else break;
  }
  return streak;
}

function renderMonthlyReport(){
  const now=new Date();
  const monthStart=new Date(now.getFullYear(),now.getMonth(),1,0,0,0,0);
  const hist=sortedBalanceHistory();
  const monthHist=hist.filter(h=>new Date(h.at)>=monthStart);
  const baseline=monthHist[0]||hist.filter(h=>new Date(h.at)<monthStart).slice(-1)[0]||null;
  const current=currentTotalBalance();
  const net=baseline?current-(Number(baseline.total)||0):0;
  const updates=monthHist.length;
  const interest=estimatedMonthlyInterestRunRate();
  const planned=actualMonthlyTotal();
  const streak=savingsStreak();
  $('streakBadge').textContent=streak?`${streak} month streak`:'Building history';
  $('monthlyReport').innerHTML=`
    <div><span>Net balance change</span><strong class="${net>=0?'positiveText':'negativeText'}">${net>=0?'+':''}${money(net)}</strong><small>${baseline?'Since '+new Date(baseline.at).toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'Need another snapshot'}</small></div>
    <div><span>Planned saving</span><strong>${money(planned)}</strong><small>Current monthly schedule</small></div>
    <div><span>Interest run-rate</span><strong>${money(interest)}</strong><small>Approx. per month at current balances/rates</small></div>
    <div><span>Balance updates</span><strong>${updates}</strong><small>Recorded this month</small></div>`;
}

function renderSavingsHistory(){
  const hist=sortedBalanceHistory();
  $('historyCount').textContent=`${hist.length} snapshot${hist.length===1?'':'s'}`;
  $('insightFreshness').textContent=hist.length>=3?'History active':'Building history';
  const labels=hist.map(x=>new Date(x.at).toLocaleDateString('en-GB',{day:'numeric',month:'short'}));
  const values=hist.map(x=>Number(x.total)||0);
  drawLineChart($('savingsHistoryChart'),[values],labels,['#58a6ff'],220);
}

function cashflowEvents(){
  const now=new Date();now.setHours(12,0,0,0);const end=addMonthsToDate(now,12);const out=[];
  for(const a of data.accounts){
    let next=parseDate(a.nextDeposit);let guard=0;
    while(next&&next<now&&guard<120){next=addMonth(next);guard++}
    for(let i=0;next&&next<=end&&i<4;i++,next=addMonth(next)){
      if(!a.maturity||next<parseDate(a.maturity))out.push({date:isoDate(next),kind:'deposit',title:`${a.name} deposit`,detail:money(a.monthly),icon:'+'});
    }
    if(a.rateEnd){const d=parseDate(a.rateEnd);if(d&&d>=now&&d<=end)out.push({date:a.rateEnd,kind:'rate',title:`${a.name} rate review`,detail:pct(a.aer),icon:'%'});}
    if(a.maturity){const d=parseDate(a.maturity);if(d&&d>=now&&d<=end)out.push({date:a.maturity,kind:'maturity',title:`${a.name} maturity`,detail:money(projectAccount(a,a.maturity).value),icon:'↗'});}
  }
  for(const x of data.oneOffDeposits||[]){
    const d=parseDate(x.date);if(x.status==='planned'&&d&&d>=now&&d<=end)out.push({date:x.date,kind:'oneoff',title:x.name||'One-off deposit',detail:money(x.amount),icon:'★'});
  }
  return out.sort((a,b)=>parseDate(a.date)-parseDate(b.date));
}

function renderCashflow(){
  const events=cashflowEvents();
  $('cashflowList').innerHTML=events.length?events.slice(0,10).map(x=>`<div class="cashflowRow ${x.kind}"><div class="cashflowDate"><strong>${new Date(x.date+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric'})}</strong><span>${new Date(x.date+'T12:00:00').toLocaleDateString('en-GB',{month:'short'})}</span></div><div class="cashflowIcon">${escapeHtml(x.icon)}</div><div class="cashflowMain"><strong>${escapeHtml(x.title)}</strong><span>${escapeHtml(x.detail)}</span></div></div>`).join(''):'<div class="emptyState">No dated money movements in the next 12 months.</div>';
}

function futureInterestRows(months=6){
  const now=new Date();now.setHours(12,0,0,0);let previous=totals(0,null,todayIso()).interest;const rows=[];
  for(let m=1;m<=months;m++){
    const d=addMonthsToDate(now,m);const t=totals(0,null,isoDate(d));const delta=Math.max(0,t.interest-previous);rows.push({date:d,interest:delta,total:t.interest});previous=t.interest;
  }
  return rows;
}

function renderInterestLedger(){
  const annual=data.accounts.map(a=>({name:a.name,value:(Number(a.balance)||0)*(Number(a.aer)||0)/100})).sort((a,b)=>b.value-a.value);
  const run=annual.reduce((s,x)=>s+x.value,0);
  $('interestRunRate').textContent=`~${money(run)}/yr`;
  const rows=futureInterestRows(6);
  $('interestLedger').innerHTML=`<div class="interestTop"><span>Current annual run-rate</span><strong>${money(run)}</strong><small>${annual[0]?`${escapeHtml(annual[0].name)} contributes the most at roughly ${money(annual[0].value)}/yr.`:'Add an interest-bearing account to start.'}</small></div><div class="interestMonths">${rows.map(x=>`<div><span>${x.date.toLocaleDateString('en-GB',{month:'short'})}</span><strong>${money(x.interest)}</strong></div>`).join('')}</div>`;
}

function transferPlanText(a){
  const lump=a.rolloverMode==='market'?`Lump → headline easy access (${pct(marketEasy())})`:a.rolloverMode==='manual'?`Lump → ${pct(a.rolloverRate)}`:'Lump earns 0%';
  const monthly=!Number(a.monthly)?'No monthly contribution':a.replacementMode==='market'?`Monthly → headline regular saver (${pct(marketRegular())})`:a.replacementMode==='manual'?`Monthly → ${pct(a.replacementRate)}`:'Monthly saving stops';
  return `${lump} • ${monthly}`;
}

function renderTransferPlans(){
  const rows=data.accounts.filter(a=>a.maturity).sort((a,b)=>parseDate(a.maturity)-parseDate(b.maturity));
  $('transferPlanList').innerHTML=rows.length?rows.slice(0,6).map(a=>`<button type="button" class="transferRow" data-transfer-account="${escapeHtml(a.id)}"><div><strong>${escapeHtml(a.name)}</strong><span>${formatDate(a.maturity)} • projected ${money(projectAccount(a,a.maturity).value)}</span><small>${escapeHtml(transferPlanText(a))}</small></div><span class="nativeChevron">›</span></button>`).join(''):'<div class="emptyState">No maturity dates saved yet.</div>';
  document.querySelectorAll('[data-transfer-account]').forEach(btn=>btn.onclick=()=>{const i=data.accounts.findIndex(a=>a.id===btn.dataset.transferAccount);if(i>=0)openAccount(i)});
}

function openOneOff(id=null){
  editingOneOffId=id;
  const x=id?(data.oneOffDeposits||[]).find(v=>v.id===id):null;
  $('oneOffDialogTitle').textContent=x?'Edit one-off deposit':'Add one-off deposit';
  $('oneOffName').value=x?.name||'';$('oneOffAmount').value=x?.amount||'';$('oneOffDate').value=x?.date||isoDate(addMonthsToDate(new Date(),1));$('oneOffStatus').value=x?.status||'planned';$('oneOffNotes').value=x?.notes||'';
  $('oneOffAccount').innerHTML='<option value="">Flexible savings pot</option>'+data.accounts.map(a=>`<option value="${escapeHtml(a.id)}">${escapeHtml(a.name)}</option>`).join('');
  $('oneOffAccount').value=x?.accountId||'';
  $('oneOffDialog').showModal();
}

function saveOneOff(){
  const existing=editingOneOffId?(data.oneOffDeposits||[]).find(x=>x.id===editingOneOffId):null;
  const item={id:existing?.id||uuid(),name:$('oneOffName').value.trim()||'One-off deposit',amount:Math.max(0,Number($('oneOffAmount').value)||0),date:$('oneOffDate').value,accountId:$('oneOffAccount').value,status:$('oneOffStatus').value,notes:$('oneOffNotes').value.trim()};
  if(!item.amount||!item.date)return alert('Enter an amount and date.');
  if(existing)Object.assign(existing,item);else data.oneOffDeposits.push(item);
  recordActivity('one_off_saved',{oneOffId:item.id,amount:item.amount,status:item.status});
  try{$('oneOffDialog').close()}catch{};saveData();
}

function renderOneOffs(){
  const rows=[...(data.oneOffDeposits||[])].sort((a,b)=>parseDate(a.date)-parseDate(b.date));
  $('oneOffList').innerHTML=rows.length?rows.map(x=>`<div class="oneOffRow ${escapeHtml(x.status)}"><div class="oneOffDate"><strong>${formatDate(x.date)}</strong><span>${escapeHtml(x.status)}</span></div><div class="oneOffMain"><strong>${escapeHtml(x.name)}</strong><span>${money(x.amount)} • ${escapeHtml(data.accounts.find(a=>a.id===x.accountId)?.name||'Flexible savings pot')}</span></div><div class="rowActions"><button data-oneoff-edit="${escapeHtml(x.id)}">Edit</button>${x.status==='planned'?`<button data-oneoff-received="${escapeHtml(x.id)}">Received</button>`:''}<button class="danger" data-oneoff-remove="${escapeHtml(x.id)}">×</button></div></div>`).join(''):'<div class="emptyState compact">Add known future bonuses, gifts or lump sums and they will flow into the real projection.</div>';
  document.querySelectorAll('[data-oneoff-edit]').forEach(b=>b.onclick=()=>openOneOff(b.dataset.oneoffEdit));
  document.querySelectorAll('[data-oneoff-received]').forEach(b=>b.onclick=()=>{const x=data.oneOffDeposits.find(v=>v.id===b.dataset.oneoffReceived);if(x){x.status='received';recordActivity('one_off_received',{oneOffId:x.id,amount:x.amount});saveData()}});
  document.querySelectorAll('[data-oneoff-remove]').forEach(b=>b.onclick=()=>{if(confirm('Remove this one-off deposit?')){data.oneOffDeposits=data.oneOffDeposits.filter(v=>v.id!==b.dataset.oneoffRemove);saveData()}});
}

function renderIntelligence(force=false){
  const key=`${data.updatedAt}|${market?.fetchedAt||''}|${data.balanceHistory?.length||0}|${data.oneOffDeposits?.length||0}`;
  if(!force&&intelligenceRenderKey===key)return;
  intelligenceRenderKey=key;
  renderGoalPace();renderMonthlyReport();renderSavingsHistory();renderCashflow();renderInterestLedger();renderTransferPlans();renderOneOffs();
}

function snapshotSummaryText(){
  const t=totals(0,null,data.targetDate);const current=currentTotalBalance();const monthly=actualMonthlyTotal();const hit=projectedGoalHitDate();
  return `${data.profile?.appName||'Savings Hub'}\n${data.profile?.goalName||'Savings'}\nSaved now: ${money(current)}\nSaving monthly: ${money(monthly)}\nProjected at target: ${money(t.value)}\nProjected interest: ${money(t.interest)}\nTarget: ${money(data.targetAmount)} by ${formatDate(data.targetDate)}${hit?`\nEstimated goal hit: ${formatDate(hit)}`:''}`;
}

function renderSnapshot(){
  const t=totals(0,null,data.targetDate);const current=currentTotalBalance();const monthly=actualMonthlyTotal();const progress=Number(data.targetAmount)?Math.min(100,t.value/Number(data.targetAmount)*100):0;const hit=projectedGoalHitDate();
  $('snapshotTitle').textContent=data.profile?.goalName||'Savings';$('snapshotDate').textContent=`Snapshot • ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}`;
  $('snapshotContent').innerHTML=`<div class="snapshotHero"><span>Saved now</span><strong>${money(current)}</strong><div class="progress"><div style="width:${progress.toFixed(1)}%"></div></div><small>${progress.toFixed(1)}% projected progress to ${money(data.targetAmount)}</small></div><div class="snapshotGrid"><div><span>Monthly saving</span><strong>${money(monthly)}</strong></div><div><span>At target date</span><strong>${money(t.value)}</strong></div><div><span>Projected interest</span><strong>${money(t.interest)}</strong></div><div><span>Estimated goal hit</span><strong>${hit?formatDate(hit):'Beyond forecast'}</strong></div></div><div class="snapshotAccounts">${[...data.accounts].sort((a,b)=>b.balance-a.balance).map(a=>`<div><span>${escapeHtml(a.name)}</span><strong>${money(a.balance)}</strong><small>${pct(a.aer)} • ${money(a.monthly)}/mo</small></div>`).join('')}</div>`;
}

async function copySnapshot(){try{await navigator.clipboard.writeText(snapshotSummaryText());alert('Snapshot copied.')}catch{alert(snapshotSummaryText())}}
function printSnapshot(){document.body.classList.add('printingSnapshot');window.print();setTimeout(()=>document.body.classList.remove('printingSnapshot'),250)}

function render(){
  updateRecoveryButton();
  applyCustomisation();
  applyPrivacyMode();
  renderAccountSummary();
  const healthCount=accountHealthIssues().length;
  $('dataHealthBtn').textContent=healthCount?`Data health (${healthCount})`:'Data health';
  $('dataHealthBtn').classList.toggle('warningButton',healthCount>0);

  const current=data.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0);
  const monthly=actualMonthlyTotal();

  // REAL DASHBOARD:
  // These figures use the saved accounts exactly as configured.
  // They never read graphState or any what-if slider.
  const actualPlan=totals(0,null,data.targetDate);

  // WHAT-IF GRAPH:
  // These calculations are deliberately sandboxed from the dashboard.
  const graphTarget=graphTargetDate();
  const whatIfMonthly=graphMonthlyTotal();
  const graphOptions=graphScenarioOptions();
  const base=scenarioTotals(graphState.rateAdjustment,whatIfMonthly,graphTarget,graphOptions);
  const low=scenarioTotals(graphState.rateAdjustment-1.5,whatIfMonthly,graphTarget,graphOptions);
  const high=scenarioTotals(graphState.rateAdjustment+0.5,whatIfMonthly,graphTarget,graphOptions);

  $('totalBalance').textContent=money(current);
  $('monthlyTotal').textContent=money(monthly);
  $('projectedTotal').textContent=money(actualPlan.value);
  $('interestTotal').textContent=money(Math.max(0,actualPlan.interest));
  $('balanceUpdated').textContent=`Dashboard updated ${formatDate(data.lastBalanceUpdate)}`;
  const req=requiredMonthly();$('monthlyVsRequired').textContent=req?`${monthly>=req?'On pace':'Need about '+money(req-monthly)+' more'} • target pace ${money(req)}/m`:'';
  $('projectedSurplus').textContent=actualPlan.value>=data.targetAmount?`${money(actualPlan.value-data.targetAmount)} above target`:`${money(data.targetAmount-actualPlan.value)} below target`;
  $('interestShare').textContent=actualPlan.value?`${(actualPlan.interest/actualPlan.value*100).toFixed(1)}% of projected fund`:''; 
  $('targetDate').value=data.targetDate||'';$('targetAmount').value=data.targetAmount||0;
  const progress=data.targetAmount?Math.min(100,actualPlan.value/data.targetAmount*100):0;$('progressBar').style.width=progress+'%';$('progressText').textContent=`${progress.toFixed(1)}% of ${money(data.targetAmount)} projected for ${data.profile.goalName||'your goal'} by ${formatDate(data.targetDate)}`;
  $('projectionNote').innerHTML=`Market-mode rollovers currently assume <strong>${pct(marketEasy())}</strong> for matured lump sums and <strong>${pct(marketRegular())}</strong> for replacement regular savers.`;
  $('scenarioLow').textContent=money(low.value);$('scenarioBase').textContent=money(base.value);$('scenarioHigh').textContent=money(high.value);
  $('graphMonthlySlider').value=String(Math.max(0,Math.min(2000,whatIfMonthly)));
  $('graphMonthlyValue').textContent=`${money(whatIfMonthly)}/m`;
  $('graphRateSlider').value=String(graphState.rateAdjustment);
  $('graphRateValue').textContent=`${graphState.rateAdjustment>0?'+':''}${graphState.rateAdjustment.toFixed(2)}%`;
  $('graphLumpAmount').value=Number(graphState.lumpSumAmount)||0;
  $('graphLumpDate').value=graphState.lumpSumDate||'';
  $('graphPauseMonths').value=String(graphState.pauseMonths||0);
  document.querySelectorAll('[data-horizon]').forEach(btn=>btn.classList.toggle('active',btn.dataset.horizon===String(graphState.horizon)));
  $('staleDays').value=String(data.settings.staleDays);$('minGain').value=String(data.settings.minGain);$('fxAudPerGbp').value=Number(data.moveBudget.audPerGbp)||1.9;
  renderAccounts();renderMarket();renderSavingsShop();renderActions();renderMoveBudget();renderSwitches();renderIntelligence();drawProjectionChart();drawRateHistory();updateSyncUI();
  if($('accountInsightDialog')?.open && accountInsightState.index!==null){
    if(data.accounts[accountInsightState.index])renderAccountInsight();
    else try{$('accountInsightDialog').close()}catch{}
  }
}

function renderActions(){
  const list=actions();$('actionCount').textContent=`${list.length} action${list.length===1?'':'s'}`;
  $('actionList').innerHTML=list.length?list.slice(0,8).map(a=>`
    <div class="action ${a.priority>=3?'high':a.priority===2?'medium':'good'}">
      <div class="actionIcon">${escapeHtml(a.icon)}</div>
      <div><div class="actionTitle">${escapeHtml(a.title)}</div><div class="actionText">${escapeHtml(a.text)}${a.source?` <a class="sourceBtn" href="${escapeHtml(safeSource(a.source))}" target="_blank" rel="noopener noreferrer">Source ↗</a>`:''}</div></div>
      <div class="actionMoney">${escapeHtml(a.money||'')}</div>
    </div>`).join(''):'<div class="muted">Nothing urgent — the plan is tidy.</div>';
}


function shopRateAnnualExample(item){
  if(!Number.isFinite(Number(item.rate)))return '';
  if(['regular','lisa','junior'].includes(savingsShopState.tab))return '';
  const annual=10000*(Number(item.rate)||0)/100;
  return `≈ ${money(annual)} gross/yr on £10k at the headline rate`;
}

function renderSavingsShop(){
  const cat=savingsShopCatalog[savingsShopState.tab]||SAVINGS_SHOP_CATALOG[savingsShopState.tab]||SAVINGS_SHOP_CATALOG.easy;
  $('shopTitle').textContent=cat.title;
  $('shopDescription').textContent=cat.description;
  $('shopCategoryNote').textContent=cat.note;
  $('shopFreshness').textContent=shopFreshnessText(cat);
  $('shopSourceLink').href=cat.source;

  $('shopTabs').querySelectorAll('[data-shop-tab]').forEach(btn=>{
    const active=btn.dataset.shopTab===savingsShopState.tab;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-selected',active?'true':'false');
  });

  $('shopCards').innerHTML=cat.items.map((item,i)=>`
    <article class="shopCard">
      <div class="shopCardTop">
        <div class="shopRank">${i+1}</div>
        <div class="shopProviderWrap">
          <div class="shopProvider">${escapeHtml(item.provider)}</div>
          <div class="shopProduct">${escapeHtml(item.name)}</div>
        </div>
        <span class="shopFlag">${escapeHtml(item.flag||'')}</span>
      </div>

      <div class="shopRateRow">
        <strong>${escapeHtml(item.rateLabel)}</strong>
        <span>${escapeHtml(item.tag)}</span>
      </div>

      <div class="shopFacts">
        <div><span>Minimum</span><strong>${escapeHtml(item.min)}</strong></div>
        <div><span>Limit / cap</span><strong>${escapeHtml(item.limit)}</strong></div>
        <div><span>Access</span><strong>${escapeHtml(item.access)}</strong></div>
        <div><span>Eligibility</span><strong>${escapeHtml(item.eligibility)}</strong></div>
      </div>

      <p class="shopDetail">${escapeHtml(item.detail)}</p>
      ${shopRateAnnualExample(item)?`<div class="shopExample">${escapeHtml(shopRateAnnualExample(item))}</div>`:''}

      <a class="shopCheckBtn" href="${escapeHtml(item.sourceUrl||cat.source)}" target="_blank" rel="noopener noreferrer">
        Check latest details ↗
      </a>
    </article>
  `).join('');
}


async function refreshSavingsShop({quiet=false}={}){
  const btn=$('refreshShopBtn');
  const status=$('shopRefreshStatus');

  if(!navigator.onLine){
    if(!quiet)alert('Offline — the Savings Shop is keeping its last known-good list.');
    return;
  }
  if(!supabaseClient){
    if(!quiet)alert('Cloud setup is needed before the live Savings Shop checker can run.');
    return;
  }

  const original=btn.textContent;
  btn.disabled=true;
  btn.textContent='Refreshing…';
  status.textContent='Checking 7 categories…';

  try{
    const {data:res,error}=await supabaseClient.functions.invoke('savings-shop',{
      body:{
        source:'savings-hub',
        categories:['easy','isa','fixed','regular','notice','lisa','junior']
      }
    });
    if(error)throw error;
    if(!res?.categories||typeof res.categories!=='object')throw new Error('Invalid Savings Shop response');

    const nextCategories={...(savingsShopCache?.categories||{})};
    const categoryIds=['easy','isa','fixed','regular','notice','lisa','junior'];
    let refreshed=0;
    let liveCards=0;

    for(const id of categoryIds){
      const incoming=res.categories[id];
      if(!incoming||!Array.isArray(incoming.items))continue;

      const merged=mergeLiveShopCategory(id,incoming.items,{
        source:incoming.source,
        sourceUpdated:incoming.sourceUpdated,
        checkedAt:res.fetchedAt||new Date().toISOString()
      });
      if(!merged)continue;

      nextCategories[id]=merged;
      savingsShopCatalog[id]=merged;
      refreshed++;
      liveCards+=Number(merged.verifiedCount)||0;
    }

    if(!refreshed)throw new Error('No categories could be verified');

    savingsShopCache={
      version:SHOP_CACHE_VERSION,
      fetchedAt:res.fetchedAt||new Date().toISOString(),
      categories:nextCategories,
      errors:res.errors||{}
    };
    saveSavingsShopCache();
    renderSavingsShop();

    const failed=7-refreshed;
    status.textContent=failed
      ? `${refreshed}/7 categories refreshed • ${failed} kept cached`
      : `All 7 refreshed • ${liveCards} live cards verified`;

    if(!quiet&&failed){
      alert(`Savings Shop refreshed ${refreshed} of 7 categories. Any category the live source could not verify has been left on its last known-good data.`);
    }
  }catch(e){
    console.error('Savings Shop refresh failed',e);
    status.textContent='Refresh failed • cached list kept';
    if(!quiet){
      const msg=String(e?.message||e||'');
      const undeployed=/404|not found|function/i.test(msg);
      alert(undeployed
        ? 'The Savings Shop refresh service is not deployed yet. Your current shop list is untouched.'
        : 'Live Savings Shop refresh failed. Nothing was replaced — the last known-good list is still being used.');
    }
  }finally{
    btn.disabled=false;
    btn.textContent=original||'Refresh shop';
  }
}

function openSavingsShop(){
  const el=$('shopSection');
  if(!el)return;
  if(el.classList.contains('moduleHidden')){
    data.profile.visibleModules.shop=true;
    applyModuleLayout();
    saveData({sync:false});
  }
  el.scrollIntoView({behavior:'smooth',block:'start'});
  setTimeout(()=>el.classList.add('shopFlash'),250);
  setTimeout(()=>el.classList.remove('shopFlash'),1150);
}

function renderMarket(){
  $('easyRate').textContent=pct(marketEasy());$('easyProvider').textContent=market.easyAccess?.provider||'Market headline';$('easyUpdated').textContent=market.easyAccess?.updated?`Source updated ${market.easyAccess.updated}`:'';$('easySourceLink').href=safeSource(market.easyAccess?.source);
  $('regularRate').textContent=pct(marketRegular());$('regularProvider').textContent=market.regularSaver?.provider||'Market headline';$('regularUpdated').textContent=market.regularSaver?.updated?`Source updated ${market.regularSaver.updated}`:'';$('regularSourceLink').href=safeSource(market.regularSaver?.source);
  const opp=rateOpportunities()[0];$('bestMove').textContent=opp?opp.headline:'Your current rates are close to the headline market.';$('bestMoveSourceLink').href=safeSource(opp?.source||market.easyAccess?.source);$('bestMoveSourceHint').style.display='block';
  const fetched=market?.fetchedAt?new Date(market.fetchedAt):null,$f=$('marketFreshness');if(fetched){const hrs=(Date.now()-fetched.getTime())/3600000;$f.textContent=hrs<24?`Rates ${Math.max(0,Math.floor(hrs))}h old`:'Rates need refresh'}else $f.textContent='Market cache';
  const box=$('opportunities'),all=rateOpportunities();box.innerHTML=all.length?all.map(o=>`<div class="opp ${o.gain>=20?'good':'warn'}"><div class="oppMain"><strong>${escapeHtml(o.headline)}</strong><div class="muted">${escapeHtml(o.detail)}</div>${o.source?`<a class="sourceBtn" href="${escapeHtml(safeSource(o.source))}" target="_blank" rel="noopener noreferrer">View source ↗</a>`:''}</div><div class="oppMoney">+${money(o.gain)}/yr</div></div>`).join(''):'';
}


function accountBenchmarkRate(a){
  return a.type==='regular' ? marketRegular() : marketEasy();
}

function accountEventDate(a){
  const maturity=parseDate(a.maturity);
  const rateEnd=parseDate(a.rateEnd);
  const now=new Date();now.setHours(12,0,0,0);

  const future=[maturity,rateEnd]
    .filter(Boolean)
    .filter(d=>d>now)
    .sort((x,y)=>x-y);

  return future[0]||maturity||rateEnd||null;
}

function accountInsightEndDate(a){
  const now=new Date();now.setHours(12,0,0,0);

  if(accountInsightState.horizon==='target'){
    const target=parseDate(data.targetDate);
    return target&&target>now?target:addMonthsToDate(now,12);
  }

  if(accountInsightState.horizon==='event'){
    const event=accountEventDate(a);
    return event&&event>now?event:addMonthsToDate(now,12);
  }

  return addMonthsToDate(now,Number(accountInsightState.horizon)||12);
}

function accountInsightSeries(a,endDate){
  const start=new Date();start.setHours(12,0,0,0);
  const end=new Date(endDate);
  const labels=['Now'];
  const dates=[isoDate(start)];
  const values=[Number(a.balance)||0];
  const principal=[Number(a.balance)||0];

  if(end<=start)return {labels,dates,values,principal};

  let d=new Date(start);
  let guard=0;
  while(d<end && guard<72){
    d=new Date(d.getFullYear(),d.getMonth()+1,1,12);
    if(d>end)d=new Date(end);

    const p=projectAccount(a,isoDate(d),0,null);
    labels.push(d.toLocaleDateString('en-GB',{month:'short',year:'2-digit'}));
    dates.push(isoDate(d));
    values.push(p.value);
    principal.push(p.principal);

    guard++;
    if(d>=end)break;
  }

  return {labels,dates,values,principal};
}

function accountDaysUntil(dateLike){
  const d=parseDate(dateLike);
  if(!d)return null;
  const now=new Date();now.setHours(12,0,0,0);
  return Math.ceil((d-now)/86400000);
}

function accountRelativeDate(dateLike){
  const days=accountDaysUntil(dateLike);
  if(days===null)return '';
  if(days===0)return 'today';
  if(days===1)return 'tomorrow';
  if(days>1)return `in ${days} days`;
  if(days===-1)return 'yesterday';
  return `${Math.abs(days)} days ago`;
}

function accountAfterMaturityText(a){
  const lump=
    a.rolloverMode==='market' ? `the matured balance is modelled at the headline easy-access rate (${pct(marketEasy())})` :
    a.rolloverMode==='manual' ? `the matured balance is modelled at your saved ${pct(a.rolloverRate)} rate` :
    'the matured balance is modelled at 0%';

  const monthly=
    !Number(a.monthly) ? 'there are no scheduled monthly deposits' :
    a.replacementMode==='market' ? `future ${money(a.monthly)}/month deposits move to a headline regular saver (${pct(marketRegular())})` :
    a.replacementMode==='manual' ? `future ${money(a.monthly)}/month deposits continue at your saved ${pct(a.replacementRate)} rate` :
    'monthly deposits stop at maturity';

  return `After maturity, ${lump}; ${monthly}.`;
}

function accountGoalShare(a){
  const account=projectAccount(a,data.targetDate,0,null);
  const total=totals(0,null,data.targetDate);
  return total.value>0 ? account.value/total.value*100 : 0;
}

function accountCapCrossing(a){
  const cap=Number(a.maxBalance)||0;
  if(cap<=0)return null;
  if((Number(a.balance)||0)>=cap)return {date:todayIso(),value:Number(a.balance)||0};

  const now=new Date();now.setHours(12,0,0,0);
  for(let m=1;m<=72;m++){
    const d=addMonthsToDate(now,m);
    const p=projectAccount(a,isoDate(d),0,null);
    if(p.value>=cap)return {date:isoDate(d),value:p.value};
  }
  return null;
}

function accountInsightNarratives(a,endDate,snapshot){
  const items=[];
  const monthly=Number(a.monthly)||0;
  const monthlyCap=Number(a.monthlyLimit)||0;
  const balance=Number(a.balance)||0;
  const maxBalance=Number(a.maxBalance)||0;
  const benchmark=accountBenchmarkRate(a);
  const rateDiff=(Number(a.aer)||0)-benchmark;

  if(monthly>0){
    if(monthlyCap>0){
      const used=monthlyCap?monthly/monthlyCap*100:0;
      const remaining=Math.max(0,monthlyCap-monthly);

      if(monthly>monthlyCap){
        items.push({
          tone:'bad',
          icon:'!',
          title:'Monthly contribution is above the saved cap',
          text:`You have ${money(monthly)}/month configured against a ${money(monthlyCap)} monthly limit.`
        });
      }else if(remaining<0.01){
        items.push({
          tone:'good',
          icon:'✓',
          title:'Using the full monthly allowance',
          text:`${money(monthly)}/month uses 100% of the saved ${money(monthlyCap)} contribution cap.`
        });
      }else{
        items.push({
          tone:'info',
          icon:'↗',
          title:`${money(remaining)}/month contribution headroom`,
          text:`You are using ${used.toFixed(0)}% of the saved monthly allowance.`
        });
      }
    }else{
      items.push({
        tone:'info',
        icon:'＋',
        title:`${money(monthly)}/month is scheduled`,
        text:`That contribution plan is included in this account's future projection.`
      });
    }
  }else{
    items.push({
      tone:'neutral',
      icon:'•',
      title:'No future monthly deposits',
      text:'This projection grows the existing balance only, unless a maturity/replacement rule later applies.'
    });
  }

  if(rateDiff>=0.10){
    items.push({
      tone:'good',
      icon:'↑',
      title:`Rate is ${rateDiff.toFixed(2)} percentage points above the headline benchmark`,
      text:`Saved AER ${pct(a.aer)} versus ${pct(benchmark)} for the relevant headline market comparison.`
    });
  }else if(rateDiff<=-0.10){
    const gain=Math.max(0,balance*(-rateDiff)/100);
    items.push({
      tone:'warn',
      icon:'↓',
      title:`Rate is ${Math.abs(rateDiff).toFixed(2)} percentage points below the headline benchmark`,
      text:`On today's ${money(balance)} balance, that gap is roughly ${money(gain)} a year before tax/terms, if an equivalent account were available.`
    });
  }else{
    items.push({
      tone:'good',
      icon:'≈',
      title:'Rate is close to the headline benchmark',
      text:`Saved AER ${pct(a.aer)} versus ${pct(benchmark)} used for this comparison.`
    });
  }

  if(a.maturity){
    const days=accountDaysUntil(a.maturity);
    const maturityProjection=projectAccount(a,a.maturity,0,null);

    if(days!==null && days>=0){
      items.push({
        tone:'info',
        icon:'◷',
        title:`Projected ${money(maturityProjection.value)} by maturity`,
        text:`Review/maturity is ${formatDate(a.maturity)} (${accountRelativeDate(a.maturity)}). ${accountAfterMaturityText(a)}`
      });
    }else{
      items.push({
        tone:'warn',
        icon:'!',
        title:'Saved maturity date has passed',
        text:`The account still has a balance recorded, but its saved review/maturity date is ${formatDate(a.maturity)}. Check the account details.`
      });
    }
  }else if(a.rateEnd){
    const days=accountDaysUntil(a.rateEnd);
    items.push({
      tone:days!==null&&days<0?'warn':'info',
      icon:'%',
      title:`Rate / bonus ${days!==null&&days<0?'ended':'ends'} ${formatDate(a.rateEnd)}`,
      text:'The forecast keeps using the saved AER after this review point until you update the account, because no replacement rate is known automatically.'
    });
  }

  if(maxBalance>0){
    const headroom=maxBalance-balance;
    const crossing=accountCapCrossing(a);

    if(headroom<=0){
      items.push({
        tone:'warn',
        icon:'!',
        title:'Saved balance cap is already reached',
        text:`Current balance ${money(balance)} is at or above the saved ${money(maxBalance)} cap.`
      });
    }else if(crossing){
      items.push({
        tone:'warn',
        icon:'↗',
        title:`Projection reaches the saved balance cap around ${formatDate(crossing.date)}`,
        text:`There is currently ${money(headroom)} of headroom. Check what the provider does once the balance cap is reached.`
      });
    }else{
      items.push({
        tone:'neutral',
        icon:'□',
        title:`${money(headroom)} below the saved balance cap`,
        text:`The selected projection horizon remains below the ${money(maxBalance)} cap.`
      });
    }
  }

  const accountHist=accountBalanceHistory(a.id);
  if(accountHist.length>=2){
    const first=accountHist[0],last=accountHist[accountHist.length-1],change=last.balance-first.balance;
    items.push({
      tone:change>=0?'good':'warn',icon:'↔',
      title:`Recorded balance ${change>=0?'rose':'fell'} ${money(Math.abs(change))}`,
      text:`From ${money(first.balance)} on ${new Date(first.at).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})} to ${money(last.balance)} in the latest snapshot.`
    });
  }

  const share=accountGoalShare(a);
  items.push({
    tone:'info',
    icon:'◎',
    title:`About ${share.toFixed(1)}% of your projected goal-date fund`,
    text:`At ${formatDate(data.targetDate)}, this account is projected to contribute ${money(projectAccount(a,data.targetDate,0,null).value)} to the overall plan.`
  });

  return items;
}

function accountInsightTimelineItems(a){
  const items=[];

  if(a.nextDeposit){
    items.push({
      date:a.nextDeposit,
      title:'Next scheduled deposit',
      text:Number(a.monthly)>0?`${money(a.monthly)} planned`:'No monthly amount configured',
      tone:accountDaysUntil(a.nextDeposit)<0?'warn':'normal'
    });
  }

  if(a.rateEnd){
    items.push({
      date:a.rateEnd,
      title:'Rate / bonus review',
      text:`Saved AER currently ${pct(a.aer)}`,
      tone:accountDaysUntil(a.rateEnd)<0?'warn':'normal'
    });
  }

  if(a.maturity){
    const p=projectAccount(a,a.maturity,0,null);
    items.push({
      date:a.maturity,
      title:'Review / maturity',
      text:`Projected around ${money(p.value)}`,
      tone:accountDaysUntil(a.maturity)<0?'warn':'normal'
    });
  }

  if(data.targetDate){
    const p=projectAccount(a,data.targetDate,0,null);
    items.push({
      date:data.targetDate,
      title:`${data.profile?.goalName||'Goal'} target`,
      text:`Projected account value ${money(p.value)}`,
      tone:'goal'
    });
  }

  return items
    .filter(x=>x.date)
    .sort((x,y)=>parseDate(x.date)-parseDate(y.date));
}

function accountInsightHorizonName(a,endDate){
  if(accountInsightState.horizon==='target')return `${data.profile?.goalName||'Goal'} date • ${formatDate(isoDate(endDate))}`;
  if(accountInsightState.horizon==='event'){
    if(a.maturity && isoDate(parseDate(a.maturity))===isoDate(endDate))return `Maturity • ${formatDate(a.maturity)}`;
    if(a.rateEnd && isoDate(parseDate(a.rateEnd))===isoDate(endDate))return `Rate review • ${formatDate(a.rateEnd)}`;
    return `Next account event • ${formatDate(isoDate(endDate))}`;
  }
  return `${accountInsightState.horizon} months • ${formatDate(isoDate(endDate))}`;
}

function drawAccountComposition(currentBalance,snapshot){
  const canvas=$('accountCompositionChart');
  const {ctx,w,h}=prepareCanvas(canvas,210);

  const current=Math.max(0,Number(currentBalance)||0);
  const newDeposits=Math.max(0,(Number(snapshot.principal)||0)-current);
  const interest=Math.max(0,Number(snapshot.interest)||0);
  const parts=[
    {name:'Starting balance',value:current,color:'#58a6ff'},
    {name:'New deposits',value:newDeposits,color:'#a371f7'},
    {name:'Interest',value:interest,color:'#3fb950'}
  ];
  const total=parts.reduce((s,x)=>s+x.value,0);

  if(total<=0){
    ctx.fillStyle='#8b949e';
    ctx.font='12px Segoe UI, Arial, sans-serif';
    ctx.fillText('No projected value yet',14,25);
    $('accountCompositionLegend').innerHTML='';
    return;
  }

  const cx=w/2,cy=h/2-2,r=Math.min(w,h)*.31,inner=r*.62;
  let angle=-Math.PI/2;

  parts.forEach(part=>{
    const share=part.value/total;
    const next=angle+share*Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,angle,next);
    ctx.closePath();
    ctx.fillStyle=part.color;
    ctx.fill();
    angle=next;
  });

  ctx.beginPath();
  ctx.arc(cx,cy,inner,0,Math.PI*2);
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--panel').trim()||'#0d1117';
  ctx.fill();

  ctx.textAlign='center';
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--muted').trim()||'#8b949e';
  ctx.font='10px Segoe UI, Arial, sans-serif';
  ctx.fillText('PROJECTED',cx,cy-4);
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--text').trim()||'#f0f6fc';
  ctx.font='700 18px Segoe UI, Arial, sans-serif';
  ctx.fillText(money(total),cx,cy+19);
  ctx.textAlign='start';

  $('accountCompositionLegend').innerHTML=parts.map(part=>{
    const share=total?part.value/total*100:0;
    return `<div><i style="background:${part.color}"></i><span>${part.name}</span><strong>${money(part.value)}</strong><small>${share.toFixed(1)}%</small></div>`;
  }).join('');
}

function drawAccountInsightChart(a,endDate){
  const s=accountInsightSeries(a,endDate);
  accountInsightState.series=s;

  drawLineChart(
    $('accountInsightChart'),
    [s.values,s.principal],
    s.labels,
    ['#58a6ff','#a371f7'],
    270
  );

  const canvas=$('accountInsightChart');
  const meta=canvas._chartMeta;
  if(!meta||!s.values.length)return;

  const {ctx}=prepareCanvas(canvas,270);
  // redraw base chart after prepareCanvas cleared it
  drawLineChart(canvas,[s.values,s.principal],s.labels,['#58a6ff','#a371f7'],270);
  const meta2=canvas._chartMeta;
  if(!meta2)return;

  const ctx2=canvas.getContext('2d');
  const start=parseDate(s.dates[0]);
  const end=parseDate(s.dates[s.dates.length-1]);
  const duration=Math.max(1,end-start);

  const events=[
    {date:a.rateEnd,label:'Rate review',color:'#d29922'},
    {date:a.maturity,label:'Maturity',color:'#f85149'}
  ].filter(x=>{
    const d=parseDate(x.date);
    return d&&d>=start&&d<=end;
  });

  ctx2.save();
  events.forEach(ev=>{
    const d=parseDate(ev.date);
    const ratio=(d-start)/duration;
    const x=meta2.pad.l+(meta2.w-meta2.pad.l-meta2.pad.r)*ratio;
    ctx2.strokeStyle=ev.color;
    ctx2.lineWidth=1;
    ctx2.setLineDash([4,4]);
    ctx2.beginPath();
    ctx2.moveTo(x,meta2.pad.t);
    ctx2.lineTo(x,meta2.h-meta2.pad.b);
    ctx2.stroke();
    ctx2.setLineDash([]);
    ctx2.fillStyle=ev.color;
    ctx2.font='10px Segoe UI, Arial, sans-serif';
    const labelWidth=ctx2.measureText(ev.label).width;
    ctx2.fillText(ev.label,Math.min(Math.max(meta2.pad.l,x-labelWidth/2),meta2.w-meta2.pad.r-labelWidth),meta2.pad.t+10);
  });

  if(accountInsightState.activeIndex!==null){
    const i=Math.max(0,Math.min(s.values.length-1,accountInsightState.activeIndex));
    const x=meta2.pad.l+(meta2.w-meta2.pad.l-meta2.pad.r)*(s.values.length===1?.5:i/(s.values.length-1));
    const value=Number(s.values[i]);
    const y=meta2.pad.t+(meta2.h-meta2.pad.t-meta2.pad.b)*(meta2.max-value)/meta2.span;

    ctx2.strokeStyle='rgba(240,246,252,.35)';
    ctx2.lineWidth=1;
    ctx2.beginPath();
    ctx2.moveTo(x,meta2.pad.t);
    ctx2.lineTo(x,meta2.h-meta2.pad.b);
    ctx2.stroke();

    ctx2.fillStyle='#58a6ff';
    ctx2.beginPath();
    ctx2.arc(x,y,5,0,Math.PI*2);
    ctx2.fill();
  }
  ctx2.restore();
}

function inspectAccountInsightChart(clientX,clientY){
  const canvas=$('accountInsightChart');
  const meta=canvas?._chartMeta;
  const s=accountInsightState.series;
  if(!meta||!s?.values?.length)return;

  const rect=canvas.getBoundingClientRect();
  const x=clientX-rect.left;
  const y=clientY-rect.top;

  if(x<meta.pad.l||x>meta.w-meta.pad.r||y<meta.pad.t-20||y>meta.h-meta.pad.b+20){
    $('accountInsightChartTooltip').classList.add('hidden');
    return;
  }

  const ratio=Math.max(0,Math.min(1,(x-meta.pad.l)/(meta.w-meta.pad.l-meta.pad.r)));
  const i=Math.round(ratio*(s.values.length-1));
  accountInsightState.activeIndex=i;

  const a=data.accounts[accountInsightState.index];
  if(a)drawAccountInsightChart(a,accountInsightEndDate(a));

  const value=Number(s.values[i])||0;
  const principal=Number(s.principal[i])||0;
  const interest=Math.max(0,value-principal);
  const tip=$('accountInsightChartTooltip');
  tip.innerHTML=`<strong>${escapeHtml(s.labels[i])}</strong><span>Balance ${money(value)}</span><span>Your money ${money(principal)}</span><span>Interest ${money(interest)}</span>`;
  tip.classList.remove('hidden');

  const left=Math.max(8,Math.min(rect.width-190,x+12));
  const top=Math.max(8,Math.min(rect.height-90,y-42));
  tip.style.left=`${left}px`;
  tip.style.top=`${top}px`;
}

function renderAccountInsight(){
  const i=accountInsightState.index;
  const a=data.accounts[i];
  if(!a)return;

  const endDate=accountInsightEndDate(a);
  const endIso=isoDate(endDate);
  const snapshot=projectAccount(a,endIso,0,null);
  const current=Number(a.balance)||0;
  const futureDeposits=Math.max(0,snapshot.principal-current);
  const interest=Math.max(0,snapshot.interest);
  const growth=current?((snapshot.value-current)/current*100):null;
  const benchmark=accountBenchmarkRate(a);
  const marketDiff=(Number(a.aer)||0)-benchmark;

  $('accountInsightGlyph').textContent=(a.provider||a.name||'S').trim().slice(0,1).toUpperCase();
  $('accountInsightProvider').textContent=(a.provider||typeName(a.type)||'Savings account').toUpperCase();
  $('accountInsightTitle').textContent=a.name;
  $('accountInsightBadges').innerHTML=`
    <span class="typePill">${escapeHtml(typeName(a.type))}</span>
    <span class="typePill">${escapeHtml(a.access||'Access not set')}</span>
    <span class="typePill">${pct(a.aer)} AER</span>`;

  $('accountInsightHero').innerHTML=`
    <div>
      <span>Current balance</span>
      <strong>${money(current)}</strong>
      <small>${Number(a.monthly)>0?`${money(a.monthly)}/month scheduled`:'No monthly deposits'}</small>
    </div>
    <div class="accountInsightHeroArrow">→</div>
    <div>
      <span>${escapeHtml(accountInsightHorizonName(a,endDate))}</span>
      <strong>${money(snapshot.value)}</strong>
      <small>${interest>0?`${money(interest)} projected interest`:'No projected interest'}</small>
    </div>`;

  document.querySelectorAll('[data-account-horizon]').forEach(btn=>{
    const isEvent=btn.dataset.accountHorizon==='event';
    if(isEvent){
      const event=accountEventDate(a);
      btn.style.display=event?'inline-flex':'none';
      if(event){
        btn.textContent=a.maturity&&parseDate(a.maturity)?.getTime()===event.getTime()?'Maturity':'Rate review';
      }
    }
    btn.classList.toggle('active',btn.dataset.accountHorizon===String(accountInsightState.horizon));
  });

  $('accountInsightHorizonLabel').textContent=accountInsightHorizonName(a,endDate);

  $('accountInsightMetrics').innerHTML=`
    <div><span>Projected balance</span><strong>${money(snapshot.value)}</strong><small>${growth===null?'From a £0 start':`${growth>=0?'+':''}${growth.toFixed(1)}% vs today`}</small></div>
    <div><span>New deposits</span><strong>${money(futureDeposits)}</strong><small>${Number(a.monthly)>0?`${money(a.monthly)}/month plan`:'Existing balance only'}</small></div>
    <div><span>Interest earned</span><strong>${money(interest)}</strong><small>${snapshot.value?`${(interest/snapshot.value*100).toFixed(1)}% of projected value`:'0% of projected value'}</small></div>
    <div><span>Market position</span><strong>${marketDiff>=0?'+':''}${marketDiff.toFixed(2)}pp</strong><small>vs ${pct(benchmark)} headline benchmark</small></div>`;

  drawAccountInsightChart(a,endDate);
  drawAccountComposition(current,snapshot);

  const narratives=accountInsightNarratives(a,endDate,snapshot);
  $('accountInsightNarrative').innerHTML=narratives.map(x=>`
    <div class="accountInsightNarrativeRow ${escapeHtml(x.tone)}">
      <div class="accountInsightNarrativeIcon">${escapeHtml(x.icon)}</div>
      <div><strong>${escapeHtml(x.title)}</strong><p>${escapeHtml(x.text)}</p></div>
    </div>`).join('');

  const timeline=accountInsightTimelineItems(a);
  $('accountInsightTimeline').innerHTML=timeline.length?timeline.map(x=>`
    <div class="accountTimelineRow ${escapeHtml(x.tone)}">
      <div class="accountTimelineRail"><i></i></div>
      <div class="accountTimelineDate">
        <strong>${formatDate(x.date)}</strong>
        <span>${escapeHtml(accountRelativeDate(x.date))}</span>
      </div>
      <div class="accountTimelineMain">
        <strong>${escapeHtml(x.title)}</strong>
        <span>${escapeHtml(x.text)}</span>
      </div>
    </div>`).join(''):'<div class="muted">No future dates saved for this account yet.</div>';

  const assumptions=[];
  if(a.rateEnd)assumptions.push('A saved rate-end date is treated as a review reminder; the projection keeps using the current AER until the account is updated.');
  if(a.maturity)assumptions.push(accountAfterMaturityText(a));
  if(!a.nextDeposit&&Number(a.monthly)>0)assumptions.push('Monthly deposits are configured but no exact next-deposit date is saved, so future scheduled deposits cannot be placed precisely.');
  if(!assumptions.length)assumptions.push('Projection uses the balance, AER and contribution schedule currently saved on this account.');

  $('accountInsightAssumption').innerHTML=`<strong>Projection assumptions</strong><span>${escapeHtml(assumptions.join(' '))}</span>`;
}

function openAccountInsight(i){
  const a=data.accounts[i];
  if(!a)return;
  accountInsightState.index=i;
  accountInsightState.horizon='target';
  accountInsightState.activeIndex=null;
  renderAccountInsight();
  $('accountInsightDialog').showModal();
}

function accountPlan(a){
  const lump=a.rolloverMode==='market'?`Lump → market easy ${pct(marketEasy())}`:a.rolloverMode==='manual'?`Lump → ${pct(a.rolloverRate)}`:'Lump → 0%';
  const m=a.monthly? (a.replacementMode==='market'?`£${a.monthly}/m → market regular ${pct(marketRegular())}`:a.replacementMode==='manual'?`£${a.monthly}/m → ${pct(a.replacementRate)}`:'Monthly saving stops'):'';
  return m?`${lump}<br>${m}`:lump
}
function renderAccounts(){
  const b=$('accountsBody');b.innerHTML='';
  const q=(accountListState.search||'').trim().toLowerCase();
  let rows=data.accounts.map((a,i)=>({a,i})).filter(({a})=>{
    const matchesSearch=!q||`${a.name} ${a.provider} ${typeName(a.type)}`.toLowerCase().includes(q);
    const matchesType=accountListState.type==='all'||a.type===accountListState.type;
    return matchesSearch&&matchesType;
  });

  if(accountListState.sort==='balance-desc')rows.sort((x,y)=>(Number(y.a.balance)||0)-(Number(x.a.balance)||0));
  else if(accountListState.sort==='rate-desc')rows.sort((x,y)=>(Number(y.a.aer)||0)-(Number(x.a.aer)||0));
  else if(accountListState.sort==='monthly-desc')rows.sort((x,y)=>(Number(y.a.monthly)||0)-(Number(x.a.monthly)||0));
  else if(accountListState.sort==='name')rows.sort((x,y)=>x.a.name.localeCompare(y.a.name));
  else if(accountListState.sort==='maturity')rows.sort((x,y)=>{
    const xd=parseDate(x.a.maturity||x.a.rateEnd),yd=parseDate(y.a.maturity||y.a.rateEnd);
    if(!xd&&!yd)return 0;if(!xd)return 1;if(!yd)return -1;return xd-yd;
  });

  $('accountFilterCount').textContent=`${rows.length} of ${data.accounts.length}`;

  rows.forEach(({a,i})=>{
    const tr=document.createElement('tr');
    tr.className='accountClickableRow';tr.dataset.accountInsight=String(i);tr.tabIndex=0;tr.setAttribute('role','button');tr.setAttribute('aria-label',`Open future outlook for ${a.name}`);
    tr.innerHTML=`
      <td><div class="accountName">${escapeHtml(a.name)} <span class="accountOpenHint">View outlook</span></div><div class="accountProvider">${escapeHtml(a.provider||'')}</div></td>
      <td><span class="typePill">${escapeHtml(typeName(a.type))}</span></td>
      <td>${money(a.balance)}</td><td>${pct(a.aer)}</td><td>${money(a.monthly)}</td>
      <td>${formatDate(a.nextDeposit)}</td><td>${formatDate(a.maturity||a.rateEnd)}</td>
      <td><div class="accountPlan">${accountPlan(a)}</div></td>
      <td><div class="rowActions"><button class="accountViewBtn" data-view="${i}">View</button><button data-edit="${i}">Edit</button><button class="danger" data-remove="${i}">×</button></div></td>`;
    b.appendChild(tr)
  });

  if(!rows.length)b.innerHTML='<tr><td colspan="9"><div class="emptyState">No accounts match those filters.</div></td></tr>';

  b.querySelectorAll('[data-account-insight]').forEach(row=>{
    row.addEventListener('click',e=>{if(e.target.closest('button,a,input,select,textarea'))return;openAccountInsight(Number(row.dataset.accountInsight))});
    row.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button,a,input,select,textarea')){e.preventDefault();openAccountInsight(Number(row.dataset.accountInsight))}});
  });
  b.querySelectorAll('[data-view]').forEach(x=>x.addEventListener('click',e=>{e.stopPropagation();openAccountInsight(Number(x.dataset.view))}));
  b.querySelectorAll('[data-edit]').forEach(x=>x.addEventListener('click',e=>{e.stopPropagation();openAccount(Number(x.dataset.edit))}));
  b.querySelectorAll('[data-remove]').forEach(x=>x.addEventListener('click',e=>{
    e.stopPropagation();const i=Number(x.dataset.remove);const a=data.accounts[i];
    if(confirm('Remove this account?')){recordActivity('account_removed',{accountId:a?.id,name:a?.name,balance:Number(a?.balance)||0});data.accounts.splice(i,1);recordBalanceSnapshot('Account removed',{force:true});saveData()}
  }));
}
function typeName(t){return ({regular:'Regular saver',easy:'Easy access',fixed:'Fixed',current:'Current',isa:'Cash ISA',other:'Other'})[t]||t}

function openAccount(i=null){
  editingAccountIndex=i;
  const fresh={
    id:uuid(),name:'New savings account',provider:'',type:'easy',
    balance:0,aer:0,monthly:0,monthlyLimit:0,maxBalance:0,nextDeposit:'',
    maturity:'',rateEnd:'',access:'Easy',
    rolloverMode:'market',rolloverRate:marketEasy(),
    replacementMode:'stop',replacementRate:marketRegular(),
    notes:'',updatedAt:todayIso()
  };
  const a=i===null?fresh:data.accounts[i];
  $('accountDialogTitle').textContent=i===null?'Add savings account':`Edit — ${a.name}`;
  for(const [id,key] of [['accName','name'],['accProvider','provider'],['accType','type'],['accBalance','balance'],['accAer','aer'],['accMonthly','monthly'],['accMonthlyLimit','monthlyLimit'],['accMaxBalance','maxBalance'],['accNextDeposit','nextDeposit'],['accMaturity','maturity'],['accRateEnd','rateEnd'],['accAccess','access'],['accRolloverMode','rolloverMode'],['accRolloverRate','rolloverRate'],['accReplacementMode','replacementMode'],['accReplacementRate','replacementRate'],['accNotes','notes']])$(id).value=a[key]??'';
  updateAccountModeVisibility();$('accountDialog').showModal()
}
function updateAccountModeVisibility(){
  $('accRolloverRateWrap').style.display=$('accRolloverMode').value==='manual'?'block':'none';$('accReplacementRateWrap').style.display=$('accReplacementMode').value==='manual'?'block':'none'
}
function saveAccount(){
  const old=editingAccountIndex===null?null:{...data.accounts[editingAccountIndex]};
  const baseAcc=editingAccountIndex===null?{id:uuid()}:data.accounts[editingAccountIndex];
  const a={...baseAcc,name:$('accName').value.trim()||'Savings account',provider:$('accProvider').value.trim(),type:$('accType').value,balance:Number($('accBalance').value)||0,aer:Number($('accAer').value)||0,monthly:Number($('accMonthly').value)||0,monthlyLimit:Number($('accMonthlyLimit').value)||0,maxBalance:Number($('accMaxBalance').value)||0,nextDeposit:$('accNextDeposit').value,maturity:$('accMaturity').value,rateEnd:$('accRateEnd').value,access:$('accAccess').value,rolloverMode:$('accRolloverMode').value,rolloverRate:Number($('accRolloverRate').value)||0,replacementMode:$('accReplacementMode').value,replacementRate:Number($('accReplacementRate').value)||0,notes:$('accNotes').value,updatedAt:todayIso()};
  if(editingAccountIndex===null)data.accounts.push(a);else data.accounts[editingAccountIndex]=a;
  const delta=(Number(a.balance)||0)-(Number(old?.balance)||0);
  if(editingAccountIndex===null)recordActivity('account_added',{accountId:a.id,name:a.name,balance:a.balance});
  else if(Math.abs(delta)>.005)recordActivity('balance_update',{accountId:a.id,name:a.name,delta,balance:a.balance,previous:Number(old?.balance)||0});
  if(editingAccountIndex===null||Math.abs(delta)>.005)recordBalanceSnapshot(editingAccountIndex===null?`Added ${a.name}`:`Updated ${a.name}`);
  $('accountDialog').close();saveData({balanceTouch:true})
}

function renderMoveBudget(){
  $('moveCosts').innerHTML=data.moveBudget.items.map((x,i)=>`<div class="costRow"><input data-cost-name="${i}" value="${escapeHtml(x.name)}"><input data-cost-aud="${i}" type="number" min="0" step="50" value="${Number(x.aud)||0}"><button class="miniBtn danger" data-cost-remove="${i}">×</button></div>`).join('');
  document.querySelectorAll('[data-cost-name]').forEach(el=>el.addEventListener('change',()=>{data.moveBudget.items[Number(el.dataset.costName)].name=el.value;saveData()}));
  document.querySelectorAll('[data-cost-aud]').forEach(el=>el.addEventListener('change',()=>{data.moveBudget.items[Number(el.dataset.costAud)].aud=Number(el.value)||0;saveData()}));
  document.querySelectorAll('[data-cost-remove]').forEach(el=>el.addEventListener('click',()=>{data.moveBudget.items.splice(Number(el.dataset.costRemove),1);saveData()}));
  const cost=moveBudgetGbp(),post=totals().value-cost;$('moveCostGbp').textContent=money(cost);$('postMoveBuffer').textContent=money(post)
}
function renderSwitches(){
  $('switchList').innerHTML=data.switches.length?data.switches.map((s,i)=>`<div class="switchRow"><input data-sw-bank="${i}" value="${escapeHtml(s.bank)}"><input data-sw-bonus="${i}" type="number" min="0" step="5" value="${Number(s.bonus)||0}"><select data-sw-status="${i}"><option ${s.status==='planned'?'selected':''} value="planned">Planned</option><option ${s.status==='pending'?'selected':''} value="pending">Pending</option><option ${s.status==='paid'?'selected':''} value="paid">Paid</option><option ${s.status==='skipped'?'selected':''} value="skipped">Skipped</option></select><button class="miniBtn danger" data-sw-remove="${i}">×</button></div>`).join(''):'<div class="muted">No switch bonuses tracked yet.</div>';
  document.querySelectorAll('[data-sw-bank]').forEach(el=>el.addEventListener('change',()=>{data.switches[Number(el.dataset.swBank)].bank=el.value;saveData()}));
  document.querySelectorAll('[data-sw-bonus]').forEach(el=>el.addEventListener('change',()=>{data.switches[Number(el.dataset.swBonus)].bonus=Number(el.value)||0;saveData()}));
  document.querySelectorAll('[data-sw-status]').forEach(el=>el.addEventListener('change',()=>{data.switches[Number(el.dataset.swStatus)].status=el.value;saveData()}));
  document.querySelectorAll('[data-sw-remove]').forEach(el=>el.addEventListener('click',()=>{data.switches.splice(Number(el.dataset.swRemove),1);saveData()}));
  const paid=data.switches.filter(s=>s.status==='paid').reduce((x,s)=>x+(Number(s.bonus)||0),0),pending=data.switches.filter(s=>['planned','pending'].includes(s.status)).reduce((x,s)=>x+(Number(s.bonus)||0),0);
  $('switchCollected').textContent=money(paid);$('switchPending').textContent=money(pending)
}

function prepareCanvas(canvas,fallbackHeight=220){
  const rect=canvas.getBoundingClientRect();
  const cssWidth=Math.max(280,Math.floor(rect.width||canvas.parentElement?.clientWidth||500));
  const cssHeight=Number(canvas.dataset.chartHeight)||fallbackHeight;
  const dpr=Math.min(window.devicePixelRatio||1,2);

  // Critical for iPhone Safari: keep the layout box fixed in CSS pixels.
  // Only the backing bitmap is scaled for Retina.
  canvas.style.width='100%';
  canvas.style.height=`${cssHeight}px`;

  const pixelWidth=Math.round(cssWidth*dpr);
  const pixelHeight=Math.round(cssHeight*dpr);

  if(canvas.width!==pixelWidth) canvas.width=pixelWidth;
  if(canvas.height!==pixelHeight) canvas.height=pixelHeight;

  const ctx=canvas.getContext('2d');
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,cssWidth,cssHeight);

  return {ctx,w:cssWidth,h:cssHeight,dpr};
}


function drawLineChart(canvas,series,labels,colors,fallbackHeight=220){
  const {ctx,w,h}=prepareCanvas(canvas,fallbackHeight);
  const pad={l:52,r:18,t:18,b:31};
  const vals=series.flat().filter(v=>Number.isFinite(Number(v))).map(Number);

  canvas._chartMeta=null;

  if(!vals.length){
    ctx.fillStyle='#8b949e';
    ctx.font='12px Segoe UI, Arial, sans-serif';
    ctx.fillText('No chart data yet',16,28);
    return;
  }

  let min=Math.min(...vals),max=Math.max(...vals);
  const margin=(max-min)*0.12 || Math.max(100,max*.05);
  min=Math.max(0,min-margin);
  max=max+margin;
  const span=max-min||1;

  ctx.strokeStyle='#25313b';
  ctx.lineWidth=1;
  ctx.fillStyle='#8b949e';
  ctx.font='11px Segoe UI, Arial, sans-serif';

  for(let i=0;i<4;i++){
    const y=pad.t+(h-pad.t-pad.b)*i/3;
    ctx.beginPath();
    ctx.moveTo(pad.l,y);
    ctx.lineTo(w-pad.r,y);
    ctx.stroke();

    const v=max-span*i/3;
    const label=Math.abs(v)>=1000 ? `£${(v/1000).toFixed(v>=10000?0:1)}k` : `£${Math.round(v)}`;
    ctx.fillText(label,4,y+4);
  }

  series.forEach((arr,si)=>{
    if(!arr.length) return;
    ctx.strokeStyle=colors[si]||'#58a6ff';
    ctx.lineWidth=2.5;
    ctx.lineJoin='round';
    ctx.lineCap='round';
    ctx.beginPath();

    arr.forEach((raw,i)=>{
      const v=Number(raw);
      if(!Number.isFinite(v)) return;
      const x=pad.l+(w-pad.l-pad.r)*(arr.length===1?.5:i/(arr.length-1));
      const y=pad.t+(h-pad.t-pad.b)*(max-v)/span;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });

    ctx.stroke();
  });

  // Active touch / hover inspection marker.
  if(
    canvas.id==='projectionChart' &&
    graphState.activeIndex!==null &&
    series[0]?.length
  ){
    const i=Math.max(0,Math.min(series[0].length-1,graphState.activeIndex));
    const v=Number(series[0][i]);
    const x=pad.l+(w-pad.l-pad.r)*(series[0].length===1?.5:i/(series[0].length-1));
    const y=pad.t+(h-pad.t-pad.b)*(max-v)/span;

    ctx.strokeStyle='rgba(240,246,252,.35)';
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(x,pad.t);
    ctx.lineTo(x,h-pad.b);
    ctx.stroke();

    ctx.fillStyle='#58a6ff';
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fill();

    ctx.strokeStyle='#f0f6fc';
    ctx.lineWidth=2;
    ctx.stroke();
  }

  if(labels.length){
    ctx.fillStyle='#8b949e';
    ctx.font='11px Segoe UI, Arial, sans-serif';
    const first=String(labels[0]??'');
    const last=String(labels[labels.length-1]??'');
    ctx.fillText(first,pad.l,h-8);
    const lw=ctx.measureText(last).width;
    ctx.fillText(last,Math.max(pad.l,w-pad.r-lw),h-8);
  }

  canvas._chartMeta={pad,w,h,min,max,span,count:series[0]?.length||0};
}

function addMonthsToDate(date,months){
  const d=new Date(date);
  const originalDay=d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth()+months);
  const last=new Date(d.getFullYear(),d.getMonth()+1,0,12).getDate();
  d.setDate(Math.min(originalDay,last));
  d.setHours(12,0,0,0);
  return d;
}

function graphTargetDate(){
  if(graphState.horizon==='target') return data.targetDate;

  const now=new Date();
  now.setHours(12,0,0,0);
  const months=Number(graphState.horizon)||12;
  const d=addMonthsToDate(now,months);

  const actualTarget=parseDate(data.targetDate);
  if(actualTarget && d>actualTarget) return data.targetDate;

  return isoDate(d);
}

function monthlyProjectionSeries(adj=0,monthlyOverrideTotal=null,targetDateOverride=null,scenarioOptions=null){
  const end=parseDate(targetDateOverride||data.targetDate);
  const start=new Date();
  start.setHours(12,0,0,0);

  const labels=[],values=[],dates=[];
  if(!end) return {labels,values,dates};

  // Include "today" as the first point.
  labels.push('Now');
  dates.push(isoDate(start));
  values.push(data.accounts.reduce((s,a)=>s+(Number(a.balance)||0),0));

  let d=new Date(start);
  while(d<end){
    d=new Date(d.getFullYear(),d.getMonth()+1,1,12);
    if(d>end) d=new Date(end);

    const target=isoDate(d);
    const v=scenarioTotals(adj,monthlyOverrideTotal,target,scenarioOptions).value;

    labels.push(d.toLocaleDateString('en-GB',{month:'short',year:'2-digit'}));
    dates.push(target);
    values.push(v);

    if(d>=end || values.length>72) break;
  }

  return {labels,values,dates};
}

function drawProjectionChart(){
  const monthly=graphMonthlyTotal();

  const target=graphTargetDate();
  const s=monthlyProjectionSeries(graphState.rateAdjustment,monthly,target,graphScenarioOptions());

  graphState.points=s.values;
  graphState.labels=s.labels;

  drawLineChart(
    $('projectionChart'),
    [s.values],
    s.labels,
    ['#58a6ff'],
    190
  );

  const end=s.values.length?s.values[s.values.length-1]:0;
  $('graphResult').textContent=`${money(end)} projected by ${formatDate(target)}`;

  drawChartInspection();
}
function inspectProjectionChart(clientX,clientY){
  const canvas=$('projectionChart');
  const meta=canvas?._chartMeta;
  if(!meta || !graphState.points.length) return;

  const rect=canvas.getBoundingClientRect();
  const x=clientX-rect.left;
  const y=clientY-rect.top;

  if(x<meta.pad.l || x>meta.w-meta.pad.r || y<meta.pad.t-20 || y>meta.h-meta.pad.b+20){
    return;
  }

  const usable=meta.w-meta.pad.l-meta.pad.r;
  const ratio=Math.max(0,Math.min(1,(x-meta.pad.l)/usable));
  const index=Math.round(ratio*(graphState.points.length-1));

  graphState.activeIndex=index;
  drawProjectionChart();
}

function drawChartInspection(){
  const tip=$('chartTooltip');
  const canvas=$('projectionChart');

  if(graphState.activeIndex===null || !graphState.points.length){
    tip.classList.add('hidden');
    return;
  }

  const meta=canvas?._chartMeta;
  if(!meta) return;

  const i=Math.max(0,Math.min(graphState.points.length-1,graphState.activeIndex));
  const value=graphState.points[i];
  const label=graphState.labels[i]||'';
  const x=meta.pad.l+(meta.w-meta.pad.l-meta.pad.r)*(graphState.points.length===1?.5:i/(graphState.points.length-1));
  const y=meta.pad.t+(meta.h-meta.pad.t-meta.pad.b)*(meta.max-value)/meta.span;

  tip.innerHTML=`<strong>${escapeHtml(label)}</strong><span>${money(value)}</span>`;
  tip.classList.remove('hidden');

  const tipWidth=140;
  const left=Math.max(8,Math.min(meta.w-tipWidth-8,x-tipWidth/2));
  const top=Math.max(8,y-66);

  tip.style.left=`${left}px`;
  tip.style.top=`${top}px`;
}

function clearChartInspection(){
  graphState.activeIndex=null;
  drawProjectionChart();
}

function drawRateHistory(){
  const hist=data.marketHistory.slice(-30),empty=$('rateHistoryEmpty');if(hist.length<2){empty.textContent='Refresh rates a couple of times and a history chart will build here.';drawLineChart($('rateHistoryChart'),[],[],[]);return}
  empty.textContent='Blue = easy access • green = regular saver';drawLineChart($('rateHistoryChart'),[hist.map(x=>x.easy),hist.map(x=>x.regular)],hist.map(x=>new Date(x.at).toLocaleDateString('en-GB',{day:'numeric',month:'short'})),['#58a6ff','#3fb950'],220)
}

async function refreshMarketRates({quiet=false}={}){
  if(!supabaseClient){if(!quiet)alert('Cloud setup is needed before the live market checker can run.');return}
  if(!navigator.onLine){if(!quiet)alert('Offline — using cached rates.');return}
  $('refreshRatesBtn').disabled=true;$('refreshRatesBtn').textContent='Checking…';
  try{
    const {data:res,error}=await supabaseClient.functions.invoke('market-rates',{body:{source:'app'}});if(error)throw error;
    if(!res?.easyAccess?.rate||!res?.regularSaver?.rate)throw new Error('Incomplete market feed');
    market=res;const last=data.marketHistory[data.marketHistory.length-1],entry={at:new Date().toISOString(),easy:Number(res.easyAccess.rate),regular:Number(res.regularSaver.rate)};
    if(!last||last.easy!==entry.easy||last.regular!==entry.regular||Date.now()-new Date(last.at).getTime()>20*3600000)data.marketHistory.push(entry);
    if(data.marketHistory.length>90)data.marketHistory=data.marketHistory.slice(-90);saveData()
  }catch(e){console.error(e);if(!quiet)alert('Live rate check failed. Cached rates are still being used.')}
  finally{$('refreshRatesBtn').disabled=false;$('refreshRatesBtn').textContent='Refresh rates';render()}
}
function maybeAutoRefresh(){const last=market?.fetchedAt?new Date(market.fetchedAt).getTime():0;if(navigator.onLine&&Date.now()-last>12*3600000)refreshMarketRates({quiet:true})}

function maybeNotify(){
  if(!data.settings.notifications||Notification.permission!=='granted')return;
  if(data.settings.lastNotified===todayIso())return;const top=actions()[0];if(!top||top.priority<2)return;
  try{new Notification('Savings Command Centre',{body:top.title});data.settings.lastNotified=todayIso();saveData({sync:false})}catch{}
}
async function toggleNotifications(){
  if(!('Notification'in window))return alert('Browser notifications are not supported here.');
  const p=await Notification.requestPermission();data.settings.notifications=p==='granted';saveData();if(p==='granted'){alert('Alerts enabled. They can fire when the app is opened/active.');maybeNotify()}
}

function exportBackup(){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='savings-command-centre-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
function exportCsv(){
  const rows=[['Account','Provider','Type','Balance','AER','Monthly contribution','Next deposit','Maturity','Rate end'],...data.accounts.map(a=>[a.name,a.provider,typeName(a.type),a.balance,a.aer,a.monthly,a.nextDeposit,a.maturity,a.rateEnd])];
  const csv=rows.map(r=>r.map(v=>`"${String(v??'').replaceAll('"','""')}"`).join(',')).join('\n'),blob=new Blob([csv],{type:'text/csv'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='savings-accounts.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)
}
function importBackup(file){const r=new FileReader();r.onload=()=>{try{data=migrate(JSON.parse(r.result));market=data.marketCache||fallbackMarket;saveData();alert('Backup imported.')}catch{alert('That backup could not be read.')}};r.readAsText(file)}
function resetData(){if(confirm('Reset back to the starter setup?')){data=clone(defaultData);data.accounts=data.accounts.map(a=>({...a,id:uuid()}));market=data.marketCache;saveData()}}

function getConfig(){
  try{
    const saved=JSON.parse(localStorage.getItem(CONFIG_KEY)||'{}');
    return {
      url:saved.url||DEFAULT_SUPABASE_URL,
      key:saved.key||DEFAULT_SUPABASE_KEY
    };
  }catch{
    return {url:DEFAULT_SUPABASE_URL,key:DEFAULT_SUPABASE_KEY};
  }
} function setConfig(c){localStorage.setItem(CONFIG_KEY,JSON.stringify(c))}
function updateSyncUI(message){
  const c=getConfig();
  const defaultText=
    !c.url||!c.key ? 'Local only — cloud not configured' :
    !currentUser ? 'Cloud configured — sign in to auto-sync' :
    !navigator.onLine ? 'Offline — changes queued' :
    isDirty() ? 'Changes saved locally — auto-sync pending' :
    'Auto-sync on';

  $('syncStatus').textContent=message||defaultText;
  $('userBadge').textContent=currentUser?.email||'Not signed in';

  if($('syncLast')){
    $('syncLast').textContent=lastAutoSyncAt
      ? `Last cloud sync ${new Date(lastAutoSyncAt).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}`
      : (currentUser?'Waiting for first cloud sync':'');
  }
}
function scheduleSync(delay=900){
  clearTimeout(syncTimer);
  syncTimer=setTimeout(()=>{
    if(isDirty()) syncNow();
  },delay);
}

function startAutoSync(){
  if(autoSyncInterval) clearInterval(autoSyncInterval);

  autoSyncInterval=setInterval(()=>{
    if(
      currentUser &&
      navigator.onLine &&
      isDirty() &&
      !syncInFlight
    ){
      syncNow();
    }
  },4000);
}

function stopAutoSync(){
  if(autoSyncInterval){
    clearInterval(autoSyncInterval);
    autoSyncInterval=null;
  }
}
async function initSupabase(){
  const c=getConfig();if(!c.url||!c.key||!window.supabase){supabaseClient=null;currentUser=null;updateSyncUI();return}
  supabaseClient=window.supabase.createClient(c.url,c.key,{auth:{persistSession:true,detectSessionInUrl:true,autoRefreshToken:true}});
  const {data:{session}}=await supabaseClient.auth.getSession();currentUser=session?.user||null;
  supabaseClient.auth.onAuthStateChange((_e,s)=>{currentUser=s?.user||null;updateSyncUI();startAutoSync();if(currentUser)syncNow().then(()=>{maybeAutoRefresh();maybeNotify()})});
  updateSyncUI();startAutoSync();if(currentUser){await syncNow();maybeAutoRefresh();maybeNotify()}
}
async function syncNow(){
  if(syncInFlight)return;
  if(!navigator.onLine){updateSyncUI('Offline — changes queued');return}
  if(!supabaseClient||!currentUser){updateSyncUI();return}
  syncInFlight=true;updateSyncUI('Auto-syncing…');
  try{
    const {data:cloud,error:e}=await supabaseClient.from('savings_profiles').select('payload,updated_at').eq('user_id',currentUser.id).maybeSingle();
    if(e)throw e;
    const firstSyncForThisUser=isFirstCloudSyncForCurrentUser();
    if(!cloud){
      const {error}=await supabaseClient.from('savings_profiles').upsert({user_id:currentUser.id,payload:data,updated_at:data.updatedAt});if(error)throw error;
      markCloudOwner(currentUser.id);clearDirty();lastAutoSyncAt=Date.now();updateSyncUI('Synced automatically');return;
    }
    if(firstSyncForThisUser){
      saveRecoverySnapshot('Local state before first cloud seed',data);data=migrate(cloud.payload);market=data.marketCache||market||fallbackMarket;localStorage.setItem(STORAGE_KEY,JSON.stringify(data));markCloudOwner(currentUser.id);clearDirty();render();lastAutoSyncAt=Date.now();updateSyncUI('Cloud profile loaded safely');return;
    }
    const localDirty=isDirty(),lt=new Date(data.updatedAt||0).getTime(),ct=new Date(cloud.payload?.updatedAt||cloud.updated_at||0).getTime();
    if(!localDirty){
      saveRecoverySnapshot('Local state before cloud refresh',data);data=migrate(cloud.payload);market=data.marketCache||market||fallbackMarket;localStorage.setItem(STORAGE_KEY,JSON.stringify(data));markCloudOwner(currentUser.id);clearDirty();render();lastAutoSyncAt=Date.now();updateSyncUI('Cloud profile loaded');return;
    }
    if(lt>ct){
      saveRecoverySnapshot('Cloud state before local upload',cloud.payload);const {error}=await supabaseClient.from('savings_profiles').upsert({user_id:currentUser.id,payload:data,updated_at:data.updatedAt});if(error)throw error;markCloudOwner(currentUser.id);clearDirty();lastAutoSyncAt=Date.now();updateSyncUI('Synced automatically');return;
    }
    saveRecoverySnapshot('Unsynced local state before newer cloud copy',data);data=migrate(cloud.payload);market=data.marketCache||market||fallbackMarket;localStorage.setItem(STORAGE_KEY,JSON.stringify(data));markCloudOwner(currentUser.id);clearDirty();render();lastAutoSyncAt=Date.now();updateSyncUI('Newer cloud changes loaded — local recovery saved');
  }catch(e){console.error(e);updateSyncUI('Sync error — local data is safe')}finally{syncInFlight=false;updateRecoveryButton()}
}
async function saveCloudConfig(){const url=$('supabaseUrl').value.trim().replace(/\/$/,''),key=$('supabaseKey').value.trim();if(!url||!key)return alert('Enter both the URL and publishable key.');setConfig({url,key});await initSupabase();alert('Cloud settings saved.')}


async function createPasswordAccount(){
  const email=$('emailInput').value.trim();
  const password=$('passwordInput').value;

  if(!email) return alert('Enter your email.');
  if(!password || password.length<8) return alert('Choose a password of at least 8 characters.');
  if(!supabaseClient) return alert('Cloud setup is not connected.');

  $('createPasswordAccountBtn').disabled=true;
  $('createPasswordAccountBtn').textContent='Creating…';
  $('passwordStatus').textContent='';

  try{
    const {data:authData,error}=await supabaseClient.auth.signUp({
      email,
      password
    });

    if(error) throw error;

    if(!authData?.session){
      $('passwordStatus').textContent='Account created but no session was issued. In Supabase, temporarily turn OFF Confirm Email, then try again.';
      return;
    }

    currentUser=authData?.user || authData?.session?.user || null;
    $('passwordStatus').textContent='Account created and signed in. Uploading this device’s local tracker data…';

    // This device's local copy is intentionally treated as the source of truth
    // for a freshly-created account.
    markDirty();
    updateSyncUI('Signed in — uploading local data…');
    await syncNow();
    maybeAutoRefresh();
    maybeNotify();

    $('passwordStatus').textContent='Signed in and synced.';
    setTimeout(()=>{
      try{$('cloudDialog').close()}catch{}
    },450);
  }catch(error){
    console.error(error);
    const msg=String(error?.message||error||'Could not create account.');
    if(/already registered|already exists/i.test(msg)){
      $('passwordStatus').textContent='That email already exists in Supabase. See the setup note: either sign into that user, or back up locally and remove the old Auth user before creating this password account.';
    }else{
      $('passwordStatus').textContent=msg;
    }
  }finally{
    $('createPasswordAccountBtn').disabled=false;
    $('createPasswordAccountBtn').textContent='Create password account';
  }
}

async function signInWithPassword(){
  const email=$('emailInput').value.trim();
  const password=$('passwordInput').value;

  if(!email) return alert('Enter your email.');
  if(!password) return alert('Enter your password.');
  if(!supabaseClient) return alert('Cloud setup is not connected.');

  $('passwordSignInBtn').disabled=true;
  $('passwordSignInBtn').textContent='Signing in…';
  $('passwordStatus').textContent='';

  try{
    const {data:authData,error}=await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if(error) throw error;

    currentUser=authData?.user || authData?.session?.user || null;
    $('passwordStatus').textContent='Signed in.';
    updateSyncUI('Signed in — syncing…');
    await syncNow();
    maybeAutoRefresh();
    maybeNotify();

    setTimeout(()=>{
      try{$('cloudDialog').close()}catch{}
    },250);
  }catch(error){
    console.error(error);
    $('passwordStatus').textContent=String(error?.message||error||'Could not sign in.');
  }finally{
    $('passwordSignInBtn').disabled=false;
    $('passwordSignInBtn').textContent='Sign in with password';
  }
}

async function setOrChangePassword(){
  const password=$('passwordInput').value;

  if(!supabaseClient) return alert('Cloud setup is not connected.');
  if(!currentUser) {
    $('passwordStatus').textContent='You need an existing signed-in session on this device before you can set a password without email.';
    return;
  }
  if(!password || password.length<8) {
    $('passwordStatus').textContent='Choose a password of at least 8 characters.';
    return;
  }

  $('setPasswordBtn').disabled=true;
  $('setPasswordBtn').textContent='Saving…';
  $('passwordStatus').textContent='';

  try{
    const {data:updated,error}=await supabaseClient.auth.updateUser({
      password
    });

    if(error) throw error;

    currentUser=updated?.user || currentUser;
    $('passwordStatus').textContent='Password set. You can now use it to sign in on your phone immediately.';
  }catch(error){
    console.error(error);
    $('passwordStatus').textContent=String(error?.message||error||'Could not set password.');
  }finally{
    $('setPasswordBtn').disabled=false;
    $('setPasswordBtn').textContent='Set / change password';
  }
}

async function sendMagicLink(){const email=$('emailInput').value.trim();if(!email)return alert('Enter your email first.');if(!supabaseClient)return alert('Save cloud settings first.');const clean=location.origin+location.pathname;const {error}=await supabaseClient.auth.signInWithOtp({email,options:{emailRedirectTo:clean}});if(error)alert(error.message);else alert('Sign-in link sent.')}
async function signOut(){if(supabaseClient)await supabaseClient.auth.signOut();currentUser=null;updateSyncUI()}


$('passwordInput').addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    e.preventDefault();
    signInWithPassword();
  }
});

$('privacyBtn').addEventListener('click',togglePrivacyMode);
$('snapshotBtn').addEventListener('click',()=>{renderSnapshot();$('snapshotDialog').showModal()});
$('snapshotCloseBtn').addEventListener('click',()=>{try{$('snapshotDialog').close()}catch{}});
$('copySnapshotBtn').addEventListener('click',copySnapshot);
$('printSnapshotBtn').addEventListener('click',printSnapshot);
$('addOneOffBtn').addEventListener('click',()=>openOneOff());
$('saveOneOffBtn').addEventListener('click',saveOneOff);

$('accountSearch').addEventListener('input',e=>{accountListState.search=e.target.value;renderAccounts()});
$('accountTypeFilter').addEventListener('change',e=>{accountListState.type=e.target.value;renderAccounts()});
$('accountSort').addEventListener('change',e=>{accountListState.sort=e.target.value;renderAccounts()});

document.querySelectorAll('[data-graph-preset]').forEach(btn=>btn.addEventListener('click',()=>{
  const preset=btn.dataset.graphPreset;
  const baseMonthly=actualMonthlyTotal();
  graphState.monthlyCustom=true;graphState.monthlyOverride=baseMonthly;graphState.pauseMonths=0;graphState.lumpSumAmount=0;graphState.lumpSumDate='';
  if(preset==='current'){graphState.monthlyCustom=false;graphState.monthlyOverride=null}
  if(preset==='plus100')graphState.monthlyOverride=baseMonthly+100;
  if(preset==='plus250')graphState.monthlyOverride=baseMonthly+250;
  if(preset==='pause3')graphState.pauseMonths=3;
  if(preset==='lump1000'){graphState.lumpSumAmount=1000;graphState.lumpSumDate=isoDate(addMonthsToDate(new Date(),1))}
  document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.toggle('active',x===btn));
  graphState.activeIndex=null;render();
}));
$('graphLumpAmount').addEventListener('input',e=>{document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.remove('active'));graphState.lumpSumAmount=Math.max(0,Number(e.target.value)||0);graphState.activeIndex=null;render()});
$('graphLumpDate').addEventListener('change',e=>{document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.remove('active'));graphState.lumpSumDate=e.target.value;graphState.activeIndex=null;render()});
$('graphPauseMonths').addEventListener('change',e=>{document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.remove('active'));graphState.pauseMonths=Math.max(0,Number(e.target.value)||0);graphState.activeIndex=null;render()});

$('graphMonthlySlider').addEventListener('input',e=>{
  document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.remove('active'));
  graphState.monthlyOverride=Number(e.target.value)||0;
  graphState.monthlyCustom=true;
  graphState.activeIndex=null;
  render();
});

$('graphRateSlider').addEventListener('input',e=>{
  document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.remove('active'));
  graphState.rateAdjustment=Number(e.target.value)||0;
  graphState.activeIndex=null;
  render();
});

document.querySelectorAll('[data-horizon]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    graphState.horizon=btn.dataset.horizon;
    graphState.activeIndex=null;
    render();
  });
});

$('resetGraphBtn').addEventListener('click',()=>{
  graphState.monthlyOverride=null;graphState.monthlyCustom=false;graphState.rateAdjustment=0;graphState.horizon='target';graphState.activeIndex=null;
  graphState.lumpSumAmount=0;graphState.lumpSumDate='';graphState.pauseMonths=0;
  document.querySelectorAll('[data-graph-preset]').forEach(x=>x.classList.toggle('active',x.dataset.graphPreset==='current'));
  render();
});

$('projectionChart').addEventListener('pointerdown',e=>{
  try{$('projectionChart').setPointerCapture(e.pointerId)}catch{}
  inspectProjectionChart(e.clientX,e.clientY);
});

$('projectionChart').addEventListener('pointermove',e=>{
  if(e.pointerType==='mouse' || e.buttons===1){
    inspectProjectionChart(e.clientX,e.clientY);
  }
});

$('projectionChart').addEventListener('pointerup',e=>{
  inspectProjectionChart(e.clientX,e.clientY);
});

$('projectionChart').addEventListener('pointerleave',e=>{
  if(e.pointerType==='mouse') clearChartInspection();
});

$('targetDate').addEventListener('change',()=>{data.targetDate=$('targetDate').value;saveData()});
$('targetAmount').addEventListener('change',()=>{data.targetAmount=Number($('targetAmount').value)||0;saveData()});
$('staleDays').addEventListener('change',()=>{data.settings.staleDays=Number($('staleDays').value);saveData()});
$('minGain').addEventListener('change',()=>{data.settings.minGain=Number($('minGain').value);saveData()});
$('fxAudPerGbp').addEventListener('change',()=>{data.moveBudget.audPerGbp=Number($('fxAudPerGbp').value)||1.9;saveData()});

$('accountInsightCloseBtn').addEventListener('click',()=>{
  try{$('accountInsightDialog').close()}catch{}
});
$('accountInsightEditBtn').addEventListener('click',()=>{
  const i=accountInsightState.index;
  try{$('accountInsightDialog').close()}catch{}
  if(i!==null)openAccount(i);
});
document.querySelectorAll('[data-account-horizon]').forEach(btn=>btn.addEventListener('click',()=>{
  accountInsightState.horizon=btn.dataset.accountHorizon;
  accountInsightState.activeIndex=null;
  renderAccountInsight();
}));

$('accountInsightChart').addEventListener('mousemove',e=>inspectAccountInsightChart(e.clientX,e.clientY));
$('accountInsightChart').addEventListener('mouseleave',()=>{
  accountInsightState.activeIndex=null;
  $('accountInsightChartTooltip').classList.add('hidden');
  const a=data.accounts[accountInsightState.index];
  if(a)drawAccountInsightChart(a,accountInsightEndDate(a));
});
$('accountInsightChart').addEventListener('touchstart',e=>{
  const t=e.touches[0];
  if(t)inspectAccountInsightChart(t.clientX,t.clientY);
},{passive:true});
$('accountInsightChart').addEventListener('touchmove',e=>{
  const t=e.touches[0];
  if(t)inspectAccountInsightChart(t.clientX,t.clientY);
},{passive:true});
$('accountInsightChart').addEventListener('touchend',()=>{
  setTimeout(()=>{
    accountInsightState.activeIndex=null;
    $('accountInsightChartTooltip').classList.add('hidden');
    const a=data.accounts[accountInsightState.index];
    if(a)drawAccountInsightChart(a,accountInsightEndDate(a));
  },450);
},{passive:true});

$('addAccountBtn').addEventListener('click',()=>openAccount(null));
$('saveAccountBtn').addEventListener('click',saveAccount);$('accRolloverMode').addEventListener('change',updateAccountModeVisibility);$('accReplacementMode').addEventListener('change',updateAccountModeVisibility);
$('addMoveCostBtn').addEventListener('click',()=>{data.moveBudget.items.push({id:uuid(),name:'New cost',aud:0});saveData()});
$('addSwitchBtn').addEventListener('click',()=>{data.switches.push({id:uuid(),bank:'New switch',bonus:0,status:'planned'});saveData()});

$('savingsShopBtn').addEventListener('click',openSavingsShop);
$('refreshShopBtn').addEventListener('click',()=>refreshSavingsShop());
$('shopTabs').querySelectorAll('[data-shop-tab]').forEach(btn=>btn.addEventListener('click',()=>{
  savingsShopState.tab=btn.dataset.shopTab;
  renderSavingsShop();
  try{
    history.replaceState(null,'',`#shop-${savingsShopState.tab}`);
  }catch{}
}));

$('refreshRatesBtn').addEventListener('click',()=>refreshMarketRates());
$('notifyBtn').addEventListener('click',toggleNotifications);
$('exportBtn').addEventListener('click',exportBackup);$('exportCsvBtn').addEventListener('click',exportCsv);$('importBtn').addEventListener('click',()=>$('importFile').click());$('restoreRecoveryBtn').addEventListener('click',restoreLatestRecovery);$('importFile').addEventListener('change',e=>{const f=e.target.files[0];if(f)importBackup(f);e.target.value=''});$('resetBtn').addEventListener('click',resetData);
$('dataHealthBtn').addEventListener('click',openDataHealth);
$('finishOnboardingBtn').addEventListener('click',finishOnboarding);
$('skipOnboardingBtn').addEventListener('click',()=>{
  setOnboardingComplete();
  try{$('onboardingDialog').close()}catch{}
});
$('markBalancesFreshBtn').addEventListener('click',()=>{
  const t=todayIso();data.lastBalanceUpdate=t;data.accounts.forEach(a=>a.updatedAt=t);
  recordBalanceSnapshot('Manual balance check',{force:true});recordActivity('balance_check',{total:currentTotalBalance()});
  saveData();renderDataHealth();render();
});
$('customiseBtn').addEventListener('click',openCustomise);
$('saveCustomiseBtn').addEventListener('click',saveCustomisation);
$('resetCustomiseBtn').addEventListener('click',resetCustomisation);
['customAppName','customSubtitle','customIcon','customAccent'].forEach(id=>{
  $(id).addEventListener('input',updateCustomPreview);
});
$('cloudBtn').addEventListener('click',()=>{
  const c=getConfig();
  $('supabaseUrl').value=c.url||'';
  $('supabaseKey').value=c.key||'';
  if(currentUser?.email) $('emailInput').value=currentUser.email;
  $('passwordStatus').textContent=currentUser ? 'This device is already signed in. You can set a password here without sending an email.' : '';
  $('cloudDialog').showModal();
});
$('saveCloudConfigBtn').addEventListener('click',saveCloudConfig);$('passwordSignInBtn').addEventListener('click',signInWithPassword);$('createPasswordAccountBtn').addEventListener('click',createPasswordAccount);$('setPasswordBtn').addEventListener('click',setOrChangePassword);$('sendMagicLinkBtn').addEventListener('click',sendMagicLink);$('signOutBtn').addEventListener('click',signOut);


let visualPolishReady=false;

function initVisualPolish(){
  if(visualPolishReady)return;
  visualPolishReady=true;

  document.documentElement.classList.add('js-polish');

  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  const targets=[
    ...document.querySelectorAll('.wrap > section'),
    ...document.querySelectorAll('.metrics > .metricCard')
  ];

  targets.forEach((el,i)=>{
    el.classList.add('revealReady');
    el.style.setProperty('--reveal-delay',`${Math.min(i*24,180)}ms`);
  });

  if(reduced || !('IntersectionObserver' in window)){
    targets.forEach(el=>el.classList.add('is-visible'));
  }else{
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },{
      threshold:0.055,
      rootMargin:'0px 0px -3% 0px'
    });

    targets.forEach(el=>observer.observe(el));
  }

  let scrollTick=false;
  const updateScrollState=()=>{
    document.body.classList.toggle('pageScrolled',window.scrollY>18);
    scrollTick=false;
  };
  window.addEventListener('scroll',()=>{
    if(scrollTick)return;
    scrollTick=true;
    requestAnimationFrame(updateScrollState);
  },{passive:true});
  updateScrollState();

  // Add a small press response to clickable controls without changing handlers.
  document.addEventListener('pointerdown',e=>{
    const target=e.target.closest('button,.buttonLink,.sourceBtn,.shopCheckBtn,.marketLinkTile,.accountClickableRow');
    if(!target)return;
    target.classList.add('pressed');
  },{passive:true});

  const clearPressed=e=>{
    const target=e.target.closest?.('button,.buttonLink,.sourceBtn,.shopCheckBtn,.marketLinkTile,.accountClickableRow');
    if(target)target.classList.remove('pressed');
  };
  document.addEventListener('pointerup',clearPressed,{passive:true});
  document.addEventListener('pointercancel',clearPressed,{passive:true});
  document.addEventListener('pointerleave',clearPressed,{passive:true});

  // Keep newly-rendered Savings Shop cards feeling deliberate rather than snapping in.
  const shop=$('shopCards');
  if(shop && 'MutationObserver' in window && !reduced){
    const shopObserver=new MutationObserver(()=>{
      shop.classList.remove('shopCardsEntering');
      requestAnimationFrame(()=>shop.classList.add('shopCardsEntering'));
      setTimeout(()=>shop.classList.remove('shopCardsEntering'),620);
    });
    shopObserver.observe(shop,{childList:true});
  }
}

let chartResizeTimer=null;
let lastChartWidth=0;

function redrawChartsIfWidthChanged(){
  clearTimeout(chartResizeTimer);
  chartResizeTimer=setTimeout(()=>{
    const probe=$('projectionChart')?.getBoundingClientRect().width||0;

    // iPhone Safari changes viewport HEIGHT while scrolling as the browser
    // chrome collapses/expands. Ignore those events unless chart WIDTH changed.
    if(Math.abs(probe-lastChartWidth)<4) return;

    lastChartWidth=probe;
    drawProjectionChart();
    drawRateHistory();
  },120);
}

window.addEventListener('orientationchange',()=>{
  lastChartWidth=0;
  setTimeout(redrawChartsIfWidthChanged,250);
});

if('ResizeObserver' in window){
  const chartObserver=new ResizeObserver(entries=>{
    const width=entries[0]?.contentRect?.width||0;
    if(Math.abs(width-lastChartWidth)<4) return;
    lastChartWidth=width;
    clearTimeout(chartResizeTimer);
    chartResizeTimer=setTimeout(()=>{
      drawProjectionChart();
      drawRateHistory();
    },80);
  });
  window.addEventListener('load',()=>{
    const host=$('projectionChart')?.parentElement;
    if(host) chartObserver.observe(host);
  });
}else{
  window.addEventListener('resize',redrawChartsIfWidthChanged);
}window.addEventListener('online',()=>{
  if(isDirty()) syncNow();
  maybeAutoRefresh();
});
window.addEventListener('offline',()=>updateSyncUI());

window.addEventListener('focus',()=>{
  if(isDirty()) syncNow();
});

document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible'){
    if(isDirty()) syncNow();
    maybeAutoRefresh();
  }else{
    // Fire one best-effort sync as the user leaves the app.
    if(isDirty() && navigator.onLine) syncNow();
  }
});

window.addEventListener('pagehide',()=>{
  if(isDirty() && navigator.onLine) syncNow();
});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('installBtn').classList.remove('hidden')});$('installBtn').addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('installBtn').classList.add('hidden')});
if('serviceWorker'in navigator && !window.Capacitor?.isNativePlatform?.())window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(console.error));

applyCustomisation();
{
  const m=String(location.hash||'').match(/^#shop-(easy|isa|fixed|regular|notice|lisa|junior)$/);
  if(m)savingsShopState.tab=m[1];
}
render();
initVisualPolish();
localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
initSupabase();
setTimeout(()=>{
  if(shouldShowOnboarding() && !$('onboardingDialog').open) openOnboarding();
},350);


// ------------------------------------------------------------
// Savings Hub native mobile V6.1 presentation layer
// RC5.2 web/data engine remains the single source of truth.
// ------------------------------------------------------------
const NATIVE_TABS=['home','accounts','planner','shop','settings'];
let nativeActiveTab='home';
let nativePullStartY=null;
let nativePullDistance=0;
let nativePullBusy=false;
let nativeLastTab='home';
let nativeSwipe={
  tracking:false,
  horizontal:false,
  cancelled:false,
  startX:0,
  startY:0,
  lastX:0,
  lastY:0,
  startedAt:0,
  page:null
};


function isNativeIOS(){
  try{return !!(window.Capacitor?.isNativePlatform?.()&&window.Capacitor?.getPlatform?.()==='ios')}catch{return false}
}
function isNativeAndroid(){
  try{return !!(window.Capacitor?.isNativePlatform?.()&&window.Capacitor?.getPlatform?.()==='android')}catch{return false}
}
function isNativeMobile(){
  return isNativeIOS()||isNativeAndroid();
}

async function nativeHaptic(style='light'){
  try{
    const Haptics=window.Capacitor?.Plugins?.Haptics;if(!Haptics)return;
    const map={light:'LIGHT',medium:'MEDIUM',heavy:'HEAVY'};
    await Haptics.impact({style:map[style]||'LIGHT'});
  }catch{}
}

function nativeEscape(s){return escapeHtml(s)}
function nativeAccountInitial(a){const raw=(a.provider||a.name||'S').trim();return nativeEscape(raw.slice(0,1).toUpperCase())}
function nativeDateShort(s){if(!s)return '—';const d=parseDate(s);return d?d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'—'}
function nativeSyncLabel(){if(!currentUser)return 'Local only';if(!navigator.onLine)return 'Offline';if(isDirty())return 'Syncing soon';return 'Synced'}
function nativeProgress(){const real=totals(0,null,data.targetDate);const target=Number(data.targetAmount)||0;const pctValue=target?Math.max(0,Math.min(100,real.value/target*100)):0;return{real,target,pctValue}}

function nativeGoalPaceData(){
  const target=Number(data.targetAmount)||0,current=currentTotalBalance(),req=requiredMonthly(),monthly=actualMonthlyTotal();
  const hit=projectedGoalHitDate(),targetDate=parseDate(data.targetDate),hitDate=parseDate(hit);
  let headline='Set a goal to see your pace',badge='—',detail='Add a target amount and date to calculate milestones.';
  if(target>0&&targetDate){
    if(current>=target){headline='Goal already reached';badge='Reached';detail=`You have ${money(current-target)} above the ${money(target)} target.`}
    else if(hitDate){
      const diff=daysBetween(hitDate,targetDate);
      if(diff>15){headline=`On course to arrive ${diff} days early`;badge='Ahead';detail=`Current plan first reaches the goal around ${formatDate(hit)}.`}
      else if(diff>=-15){headline='Current plan is broadly on pace';badge='On track';detail=`Estimated goal hit ${formatDate(hit)} • target ${formatDate(data.targetDate)}.`}
      else{headline=`Current plan reaches the goal about ${Math.abs(diff)} days late`;badge='Behind';detail=`About ${money(Math.max(0,req-monthly))}/month extra closes the simple pace gap.`}
    }else{headline='Goal is outside the current forecast';badge='Review';detail=`Current scheduled saving is ${money(monthly)}/month.`}
  }
  const milestones=[.25,.5,.75,1].map(level=>{const amount=target*level,date=dateForProjectedAmount(amount,180),reached=current>=amount;return{level,amount,date,reached}});
  return{headline,badge,detail,milestones};
}

function nativeMonthlyReportData(){
  const now=new Date(),monthStart=new Date(now.getFullYear(),now.getMonth(),1,0,0,0,0),hist=sortedBalanceHistory();
  const monthHist=hist.filter(h=>new Date(h.at)>=monthStart),baseline=monthHist[0]||hist.filter(h=>new Date(h.at)<monthStart).slice(-1)[0]||null;
  const current=currentTotalBalance(),net=baseline?current-(Number(baseline.total)||0):0;
  return{net,baseline,updates:monthHist.length,interest:estimatedMonthlyInterestRunRate(),planned:actualMonthlyTotal(),streak:savingsStreak()};
}

function nativeRenderHome(){
  const current=currentTotalBalance(),monthly=actualMonthlyTotal(),{real,target,pctValue}=nativeProgress(),req=requiredMonthly(),opp=rateOpportunities()[0];
  $('nativeHomeEyebrow').textContent=(data.profile?.appName||'Savings Hub').toUpperCase();
  $('nativeHomeHero').innerHTML=`<div class="nativeBalanceHero"><div class="nativeHeroTop"><div><span class="nativeHeroLabel">Total saved</span><div class="nativeHeroBalance nativeMoney">${money(current)}</div></div><div class="nativeSyncBadge ${currentUser?'ok':'local'}"><i></i>${nativeSyncLabel()}</div></div><div class="nativeHeroProgressTrack"><div style="width:${pctValue.toFixed(2)}%"></div></div><div class="nativeHeroProgressText"><span>${pctValue.toFixed(1)}% of ${money(target)}</span><span>${nativeEscape(data.profile?.goalName||'Goal')} • ${nativeDateShort(data.targetDate)}</span></div></div>`;
  $('nativeHomeQuickStats').innerHTML=`<div class="nativeQuickStat"><span>Per month</span><strong class="nativeMoney">${money(monthly)}</strong><small>${req&&monthly<req?`${money(req-monthly)} below pace`:'Current schedule'}</small></div><div class="nativeQuickStat"><span>At target</span><strong class="nativeMoney">${money(real.value)}</strong><small>${real.value>=target?`${money(real.value-target)} above goal`:`${money(target-real.value)} to close`}</small></div><div class="nativeQuickStat"><span>Interest</span><strong class="nativeMoney">${money(Math.max(0,real.interest))}</strong><small>Projected to goal date</small></div>`;

  const pace=nativeGoalPaceData();
  $('nativeGoalPaceBadge').textContent=pace.badge;$('nativeGoalPaceBadge').className='nativePill '+(['Ahead','Reached'].includes(pace.badge)?'good':(['Behind','Review'].includes(pace.badge)?'warn':''));
  $('nativeGoalPace').innerHTML=`<div class="nativeGlassCard nativeGoalPaceCard"><div class="nativeGoalPaceTop"><div><strong>${nativeEscape(pace.headline)}</strong><p>${nativeEscape(pace.detail)}</p></div></div><div class="nativeMilestones">${pace.milestones.map(m=>`<div class="nativeMilestone ${m.reached?'reached':''}"><b class="nativeMoney">${money(m.amount)}</b><span>${m.reached?'Reached':m.date?nativeDateShort(m.date):'Beyond'}</span></div>`).join('')}</div></div>`;

  const report=nativeMonthlyReportData();$('nativeStreakBadge').textContent=report.streak?`${report.streak} month streak`:'Building history';
  $('nativeMonthlyReport').innerHTML=`<div class="nativeReportCell"><span>Net change</span><strong class="nativeMoney">${report.net>=0?'+':''}${money(report.net)}</strong><small>${report.baseline?'Since '+new Date(report.baseline.at).toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'Need another snapshot'}</small></div><div class="nativeReportCell"><span>Planned</span><strong class="nativeMoney">${money(report.planned)}</strong><small>Monthly schedule</small></div><div class="nativeReportCell"><span>Interest run-rate</span><strong class="nativeMoney">${money(report.interest)}</strong><small>Approx. per month</small></div><div class="nativeReportCell"><span>Updates</span><strong>${report.updates}</strong><small>Recorded this month</small></div>`;

  const hist=sortedBalanceHistory();$('nativeHistoryCount').textContent=`${hist.length} snapshot${hist.length===1?'':'s'}`;
  if(hist.length<2){$('nativeHistoryEmpty').textContent='Update balances over time and your actual history will build here.';drawLineChart($('nativeSavingsHistoryChart'),[],[],[])}
  else{$('nativeHistoryEmpty').textContent='';drawLineChart($('nativeSavingsHistoryChart'),[hist.map(x=>Number(x.total)||0)],hist.map(x=>new Date(x.at).toLocaleDateString('en-GB',{day:'numeric',month:'short'})),['#58a6ff'],210)}

  const cash=cashflowEvents().slice(0,5);$('nativeCashflow').innerHTML=cash.length?cash.map(x=>{const d=parseDate(x.date);return `<div class="nativeListRow"><span class="nativeCashflowDate"><strong>${d.getDate()}</strong><span>${d.toLocaleDateString('en-GB',{month:'short'})}</span></span><span class="nativeCashflowGlyph">${nativeEscape(x.icon)}</span><span class="nativeListMain"><strong>${nativeEscape(x.title)}</strong><small>${nativeEscape(x.detail)}</small></span></div>`}).join(''):`<div class="nativeEmptyState compact"><div class="nativeEmptyIcon">✓</div><strong>Nothing urgent coming up</strong><span>Add deposit, maturity or rate dates to build your calendar.</span></div>`;

  const topAccounts=[...data.accounts].sort((a,b)=>(Number(b.balance)||0)-(Number(a.balance)||0)).slice(0,3);$('nativeHomeAccounts').innerHTML=topAccounts.length?topAccounts.map(a=>`<button type="button" class="nativeListRow" data-native-account-id="${nativeEscape(a.id)}"><span class="nativeAccountGlyph">${nativeAccountInitial(a)}</span><span class="nativeListMain"><strong>${nativeEscape(a.name)}</strong><small>${nativeEscape(a.provider||typeName(a.type))} • ${pct(a.aer)}</small></span><span class="nativeListValue nativeMoney">${money(a.balance)}<small>${Number(a.monthly)>0?`+${money(a.monthly)}/mo`:''}</small></span><span class="nativeChevron">›</span></button>`).join(''):`<div class="nativeEmptyState"><div class="nativeEmptyIcon">＋</div><strong>Add your first account</strong><span>Your dashboard comes alive once an account is added.</span></div>`;
  $('nativeHomeMarket').innerHTML=`<div class="nativeMarketPulse"><div><span>Easy access</span><strong>${pct(marketEasy())}</strong><small>${nativeEscape(market.easyAccess?.provider||'Headline rate')}</small></div><div class="nativeMarketDivider"></div><div><span>Regular saver</span><strong>${pct(marketRegular())}</strong><small>${nativeEscape(market.regularSaver?.provider||'Headline rate')}</small></div></div>${opp?`<div class="nativeMarketInsight"><span class="nativeInsightDot"></span><div><strong>Potential improvement</strong><small>${nativeEscape(opp.headline)}</small></div></div>`:''}`;
}

function nativeFilteredAccounts(){
  const q=(accountListState.search||'').trim().toLowerCase();
  let rows=data.accounts.map((a,i)=>({a,i})).filter(({a})=>(!q||`${a.name} ${a.provider} ${typeName(a.type)}`.toLowerCase().includes(q))&&(accountListState.type==='all'||a.type===accountListState.type));
  if(accountListState.sort==='balance-desc')rows.sort((x,y)=>(Number(y.a.balance)||0)-(Number(x.a.balance)||0));
  else if(accountListState.sort==='rate-desc')rows.sort((x,y)=>(Number(y.a.aer)||0)-(Number(x.a.aer)||0));
  else if(accountListState.sort==='monthly-desc')rows.sort((x,y)=>(Number(y.a.monthly)||0)-(Number(x.a.monthly)||0));
  else if(accountListState.sort==='name')rows.sort((x,y)=>x.a.name.localeCompare(y.a.name));
  else if(accountListState.sort==='maturity')rows.sort((x,y)=>{const xd=parseDate(x.a.maturity||x.a.rateEnd),yd=parseDate(y.a.maturity||y.a.rateEnd);if(!xd&&!yd)return 0;if(!xd)return 1;if(!yd)return-1;return xd-yd});
  return rows;
}

function nativeRenderAccounts(){
  const summary=accountSummary();$('nativeAccountsSummary').innerHTML=`<div class="nativeSummaryHero"><span>Across ${summary.count} account${summary.count===1?'':'s'}</span><strong class="nativeMoney">${money(summary.current)}</strong><div class="nativeSummaryMeta"><span>${money(summary.monthly)}/mo</span><span>${summary.weightedRate.toFixed(2)}% weighted AER</span></div></div>`;
  $('nativeAccountSearch').value=accountListState.search||'';$('nativeAccountType').value=accountListState.type||'all';$('nativeAccountSort').value=accountListState.sort||'default';
  const rows=nativeFilteredAccounts();
  $('nativeAccountCards').innerHTML=rows.length?rows.map(({a,i})=>{const cap=Number(a.maxBalance)||0,capPct=cap?Math.min(100,(Number(a.balance)||0)/cap*100):null;const goal=projectAccount(a,data.targetDate,0,null);return `<button type="button" class="nativeAccountCard" data-native-account-index="${i}"><div class="nativeAccountCardTop"><div class="nativeAccountGlyph large">${nativeAccountInitial(a)}</div><div class="nativeAccountIdentity"><strong>${nativeEscape(a.name)}</strong><span>${nativeEscape(a.provider||typeName(a.type))}</span></div><span class="nativeChevron">›</span></div><div class="nativeAccountMoney nativeMoney">${money(a.balance)}</div><div class="nativeAccountFacts"><span><small>AER</small><strong>${pct(a.aer)}</strong></span><span><small>Monthly</small><strong class="nativeMoney">${money(a.monthly)}</strong></span><span><small>Next date</small><strong>${nativeEscape(nativeDateShort(a.maturity||a.rateEnd||a.nextDeposit))}</strong></span></div>${capPct!==null?`<div class="nativeMiniProgress"><div style="width:${capPct.toFixed(1)}%"></div></div><div class="nativeMiniCaption">${capPct.toFixed(0)}% of ${money(cap)} balance cap</div>`:''}<div class="nativeAccountOutlook"><span>Goal-date outlook</span><strong class="nativeMoney">${money(goal.value)}</strong></div></button>`}).join(''):`<button type="button" class="nativeEmptyCard" id="nativeEmptyAddAccount"><div>＋</div><strong>${data.accounts.length?'No matching accounts':'Add an account'}</strong><span>${data.accounts.length?'Change your search or filter.':'Balance, rate, monthly saving and dates.'}</span></button>`;
}

function nativeRenderPlanner(){
  const monthly=graphMonthlyTotal(),target=graphTargetDate(),options=graphScenarioOptions(),whatIf=scenarioTotals(graphState.rateAdjustment,monthly,target,options),low=scenarioTotals(graphState.rateAdjustment-1.5,monthly,target,options),high=scenarioTotals(graphState.rateAdjustment+0.5,monthly,target,options),{real,target:goalTarget,pctValue}=nativeProgress();
  $('nativeRealPlan').innerHTML=`<div class="nativeRealPlanCard"><div class="nativeRealPlanHead"><div><span>Real plan</span><strong class="nativeMoney">${money(real.value)}</strong></div><div class="nativePlanBadge">${pctValue.toFixed(0)}%</div></div><div class="nativeHeroProgressTrack"><div style="width:${pctValue.toFixed(2)}%"></div></div><div class="nativeRealPlanMeta"><span>Goal ${money(goalTarget)}</span><span>${nativeDateShort(data.targetDate)}</span></div><div class="nativePlanInputs"><label><span>Target date</span><input id="nativeTargetDate" type="date" value="${nativeEscape(data.targetDate)}"></label><label><span>Target amount</span><div class="nativeMoneyInput"><b>£</b><input id="nativeTargetAmount" type="number" min="0" step="100" value="${Number(data.targetAmount)||0}"></div></label></div></div>`;
  $('nativeGraphMonthlySlider').value=String(Math.min(2000,monthly));$('nativeGraphMonthlyValue').textContent=`${money(monthly)}/mo`;$('nativeGraphRateSlider').value=String(graphState.rateAdjustment);$('nativeGraphRateValue').textContent=`${graphState.rateAdjustment>=0?'+':''}${Number(graphState.rateAdjustment).toFixed(2)}%`;
  $('nativeGraphLumpAmount').value=Number(graphState.lumpSumAmount)||0;$('nativeGraphLumpDate').value=graphState.lumpSumDate||'';$('nativeGraphPauseMonths').value=String(graphState.pauseMonths||0);
  document.querySelectorAll('[data-native-horizon]').forEach(b=>b.classList.toggle('active',b.dataset.nativeHorizon===String(graphState.horizon)));
  $('nativeGraphResult').textContent=money(whatIf.value);$('nativeScenarioStrip').innerHTML=`<div><span>Conservative</span><strong class="nativeMoney">${money(low.value)}</strong><small>${pct(Math.max(0,marketEasy(graphState.rateAdjustment-1.5)))}</small></div><div class="active"><span>Current</span><strong class="nativeMoney">${money(whatIf.value)}</strong><small>${graphState.pauseMonths?`${graphState.pauseMonths}m break`:graphState.lumpSumAmount?`${money(graphState.lumpSumAmount)} lump`:'Your scenario'}</small></div><div><span>Stronger</span><strong class="nativeMoney">${money(high.value)}</strong><small>${pct(marketEasy(graphState.rateAdjustment+.5))}</small></div>`;
  const series=monthlyProjectionSeries(graphState.rateAdjustment,monthly,target,options);drawLineChart($('nativeProjectionChart'),[series.values],series.labels,['#0a84ff'],220);

  const one=[...(data.oneOffDeposits||[])].sort((a,b)=>parseDate(a.date)-parseDate(b.date));$('nativeOneOffList').innerHTML=one.length?one.map(x=>`<div class="nativeListRow"><span class="nativeActionIcon">★</span><span class="nativeListMain"><strong>${nativeEscape(x.name)}</strong><small>${formatDate(x.date)} • ${nativeEscape(data.accounts.find(a=>a.id===x.accountId)?.name||'Flexible savings pot')} • ${nativeEscape(x.status)}</small></span><span class="nativeListValue nativeMoney">${money(x.amount)}</span><span class="nativeOneOffActions"><button type="button" class="nativeMiniAction" data-native-oneoff-edit="${nativeEscape(x.id)}">Edit</button>${x.status==='planned'?`<button type="button" class="nativeMiniAction" data-native-oneoff-received="${nativeEscape(x.id)}">Received</button>`:''}</span></div>`).join(''):`<div class="nativeEmptyState compact"><div class="nativeEmptyIcon">★</div><strong>No one-off deposits</strong><span>Add future bonuses, gifts or lump sums and include them in the forecast.</span></div>`;
  const maturity=data.accounts.filter(a=>a.maturity).sort((a,b)=>parseDate(a.maturity)-parseDate(b.maturity));$('nativeTransferPlan').innerHTML=maturity.length?maturity.slice(0,6).map(a=>`<button type="button" class="nativeListRow" data-native-transfer-id="${nativeEscape(a.id)}"><span class="nativeTransferGlyph">↗</span><span class="nativeListMain"><strong>${nativeEscape(a.name)}</strong><small>${formatDate(a.maturity)} • ${nativeEscape(transferPlanText(a))}</small></span><span class="nativeListValue nativeMoney">${money(projectAccount(a,a.maturity).value)}</span><span class="nativeChevron">›</span></button>`).join(''):`<div class="nativeEmptyState compact"><div class="nativeEmptyIcon">↗</div><strong>No maturity dates saved</strong><span>Add maturity dates to build your transfer plan.</span></div>`;

  const audTotal=data.moveBudget.items.reduce((s,x)=>s+(Number(x.aud)||0),0),gbp=moveBudgetGbp();$('nativePlanningBudget').innerHTML=`<div class="nativeGlassCard"><div class="nativeBudgetHeadline"><div><span>${nativeEscape(data.profile?.planningName||'Planning budget')}</span><strong>A$${audTotal.toLocaleString('en-GB',{maximumFractionDigits:0})}</strong></div><div><span>Approx. GBP</span><strong class="nativeMoney">${money(gbp)}</strong></div></div><div class="nativeFxInline"><span>Exchange assumption</span><label>A$ <input id="nativeFxRate" type="number" step="0.01" min="0.1" value="${Number(data.moveBudget.audPerGbp)||1.9}"> / £1</label></div><div class="nativeBudgetRows">${data.moveBudget.items.length?data.moveBudget.items.map((x,i)=>`<div class="nativeBudgetRow"><input data-native-cost-name="${i}" value="${nativeEscape(x.name)}" aria-label="Cost name"><div class="nativeBudgetAmount"><span>A$</span><input data-native-cost-aud="${i}" type="number" min="0" step="25" value="${Number(x.aud)||0}" aria-label="Cost amount"></div><button type="button" data-native-cost-remove="${i}">−</button></div>`).join(''):'<div class="nativeEmptyMini">No planning costs yet.</div>'}</div><button type="button" id="nativeAddCostBtn" class="nativeInsetButton">＋ Add cost</button></div>`;
  const collected=data.switches.filter(x=>x.status==='paid').reduce((s,x)=>s+(Number(x.amount)||0),0),pending=data.switches.filter(x=>['planned','pending'].includes(x.status)).reduce((s,x)=>s+(Number(x.amount)||0),0);$('nativeBonusTracker').innerHTML=`<div class="nativeGlassCard"><div class="nativeBudgetHeadline"><div><span>Collected</span><strong class="nativeMoney">${money(collected)}</strong></div><div><span>Available / pending</span><strong class="nativeMoney">${money(pending)}</strong></div></div><div class="nativeBonusRows">${data.switches.length?data.switches.map((x,i)=>`<div class="nativeBonusRow"><input data-native-switch-bank="${i}" value="${nativeEscape(x.bank)}" aria-label="Bonus name"><input data-native-switch-amount="${i}" type="number" min="0" step="5" value="${Number(x.amount)||0}" aria-label="Bonus amount"><select data-native-switch-status="${i}"><option value="planned" ${x.status==='planned'?'selected':''}>Planned</option><option value="pending" ${x.status==='pending'?'selected':''}>Pending</option><option value="paid" ${x.status==='paid'?'selected':''}>Paid</option><option value="skipped" ${x.status==='skipped'?'selected':''}>Skipped</option></select><button type="button" data-native-switch-remove="${i}" aria-label="Remove bonus">−</button></div>`).join(''):'<div class="nativeEmptyMini">No bonuses tracked yet.</div>'}</div><button type="button" id="nativeAddBonusBtn" class="nativeInsetButton">＋ Add bonus</button></div>`;
}

function nativeRenderShop(){
  const cat=savingsShopCatalog[savingsShopState.tab]||SAVINGS_SHOP_CATALOG.easy;
  document.querySelectorAll('[data-native-shop]').forEach(b=>b.classList.toggle('active',b.dataset.nativeShop===savingsShopState.tab));
  $('nativeShopStatus').textContent=shopFreshnessText(cat);$('nativeShopIntro').innerHTML=`<strong>${nativeEscape(cat.title)}</strong><span>${nativeEscape(cat.description)} ${nativeEscape(cat.note||'')}</span>`;
  $('nativeShopCards').innerHTML=(cat.items||[]).slice(0,5).map((item,i)=>`<a class="nativeShopCard nativeShopEnter" href="${nativeEscape(safeSource(item.sourceUrl||cat.source))}" target="_blank" rel="noopener noreferrer" style="animation-delay:${i*28}ms"><div class="nativeShopCardTop"><span class="nativeShopRank">${i+1}</span><span class="nativeShopIdentity"><strong>${nativeEscape(item.provider)}</strong><span>${nativeEscape(item.name)}</span></span><span class="nativeShopFlag">${nativeEscape(item.flag||'')}</span></div><div class="nativeShopRate"><strong>${nativeEscape(item.rateLabel)}</strong><span>${nativeEscape(item.tag)}</span></div><div class="nativeShopFacts"><div class="nativeShopFact"><span>Minimum</span><strong>${nativeEscape(item.min)}</strong></div><div class="nativeShopFact"><span>Limit / cap</span><strong>${nativeEscape(item.limit)}</strong></div><div class="nativeShopFact"><span>Access</span><strong>${nativeEscape(item.access)}</strong></div><div class="nativeShopFact"><span>Eligibility</span><strong>${nativeEscape(item.eligibility)}</strong></div></div><p class="nativeShopDetail">${nativeEscape(item.detail)}</p><div class="nativeShopSource"><span>Check latest details</span><span>↗</span></div></a>`).join('');
  const fetched=market?.fetchedAt?new Date(market.fetchedAt):null,hours=fetched?(Date.now()-fetched.getTime())/3600000:null;$('nativeRateAge').textContent=fetched?(hours<24?`${Math.max(0,Math.floor(hours))}h old`:'Refresh recommended'):'Cached';
  $('nativeRateHeadlines').innerHTML=`<a class="nativeRateHero easy" href="${nativeEscape(safeSource(market.easyAccess?.source))}" target="_blank" rel="noopener noreferrer"><span>Easy access</span><strong>${pct(marketEasy())}</strong><small>${nativeEscape(market.easyAccess?.provider||'Headline market')}</small><em>Open source ↗</em></a><a class="nativeRateHero regular" href="${nativeEscape(safeSource(market.regularSaver?.source))}" target="_blank" rel="noopener noreferrer"><span>Regular saver</span><strong>${pct(marketRegular())}</strong><small>${nativeEscape(market.regularSaver?.provider||'Headline market')}</small><em>Open source ↗</em></a>`;
  const top=rateOpportunities()[0];$('nativeBestMove').innerHTML=top?`<a class="nativeBestMoveCard" href="${nativeEscape(safeSource(top.source))}" target="_blank" rel="noopener noreferrer"><span class="nativeInsightDot"></span><div><strong>${nativeEscape(top.headline)}</strong><small>${nativeEscape(top.detail)}</small></div><span class="nativeChevron">›</span></a>`:`<div class="nativeBestMoveCard neutral"><span class="nativeInsightDot good"></span><div><strong>Your rates are competitive</strong><small>No meaningful headline-market improvement is showing right now.</small></div></div>`;
  const opportunities=rateOpportunities();$('nativeRateOpportunities').innerHTML=opportunities.length?opportunities.slice(0,5).map(o=>`<a class="nativeListRow" href="${nativeEscape(safeSource(o.source))}" target="_blank" rel="noopener noreferrer"><span class="nativeRateOpportunityIcon">£</span><span class="nativeListMain"><strong>${nativeEscape(o.headline)}</strong><small>${nativeEscape(o.detail)}</small></span><span class="nativeListValue goodText nativeMoney">+${money(o.gain)}/yr</span><span class="nativeChevron">›</span></a>`).join(''):`<div class="nativeEmptyState compact"><div class="nativeEmptyIcon">✓</div><strong>No obvious rate moves</strong><span>Your current accounts are close to the headline market.</span></div>`;
  const hist=data.marketHistory.slice(-30);if(hist.length<2){$('nativeRateHistoryEmpty').textContent='Refresh rates a couple of times and your history will build here.';drawLineChart($('nativeRateHistoryChart'),[],[],[])}else{$('nativeRateHistoryEmpty').textContent='';drawLineChart($('nativeRateHistoryChart'),[hist.map(x=>x.easy),hist.map(x=>x.regular)],hist.map(x=>new Date(x.at).toLocaleDateString('en-GB',{day:'numeric',month:'short'})),['#0a84ff','#30d158'],210)}
}

function nativeRenderSettings(){
  const name=data.profile?.appName||'Savings Hub',icon=data.profile?.icon||'💰',health=accountHealthIssues(),rec=recoverySnapshots();
  $('nativeSettingsAvatar').textContent=icon.length<=3?icon:name.slice(0,1).toUpperCase();$('nativeProfileCard').innerHTML=`<div class="nativeProfileCard"><div class="nativeProfileIcon">${nativeEscape(icon)}</div><div><strong>${nativeEscape(name)}</strong><span>${currentUser?.email?nativeEscape(currentUser.email):'Not signed in'}</span></div><div class="nativeSyncBadge ${currentUser?'ok':'local'}"><i></i>${nativeSyncLabel()}</div></div>`;
  $('nativePrivacyStatus').textContent=privacyMode()?'Values hidden':'Values visible';$('nativeAlertsStatus').textContent=data.settings.notifications?'Enabled':'Off';$('nativeHealthStatus').textContent=health.length?`${health.length} item${health.length===1?'':'s'} to check`:'Everything looks healthy';$('nativeCloudStatus').textContent=currentUser?nativeSyncLabel():'Sign in to sync devices';$('nativeRecoveryStatus').textContent=rec.length?`${rec.length} snapshot${rec.length===1?'':'s'} stored`:'None stored';$('nativeStaleDays').value=String(data.settings.staleDays);$('nativeMinGain').value=String(data.settings.minGain);
}

function nativeBindDynamicEvents(){
  document.querySelectorAll('[data-native-goto]').forEach(el=>el.onclick=()=>nativeSwitchTab(el.dataset.nativeGoto));
  document.querySelectorAll('[data-native-account-id]').forEach(el=>el.onclick=()=>{const i=data.accounts.findIndex(a=>a.id===el.dataset.nativeAccountId);if(i>=0){nativeHaptic('light');openAccountInsight(i)}});
  document.querySelectorAll('[data-native-account-index]').forEach(el=>el.onclick=()=>{nativeHaptic('light');openAccountInsight(Number(el.dataset.nativeAccountIndex))});
  $('nativeEmptyAddAccount')?.addEventListener('click',()=>openAccount(null));
  $('nativeTargetDate')?.addEventListener('change',e=>{data.targetDate=e.target.value;saveData()});$('nativeTargetAmount')?.addEventListener('change',e=>{data.targetAmount=Math.max(0,Number(e.target.value)||0);saveData()});
  document.querySelectorAll('[data-native-oneoff-edit]').forEach(el=>el.onclick=()=>{nativeHaptic('light');openOneOff(el.dataset.nativeOneoffEdit)});document.querySelectorAll('[data-native-oneoff-received]').forEach(el=>el.onclick=()=>{const x=data.oneOffDeposits.find(v=>v.id===el.dataset.nativeOneoffReceived);if(x){x.status='received';recordActivity('one_off_received',{oneOffId:x.id,amount:x.amount});nativeHaptic('medium');saveData()}});
  document.querySelectorAll('[data-native-transfer-id]').forEach(el=>el.onclick=()=>{const i=data.accounts.findIndex(a=>a.id===el.dataset.nativeTransferId);if(i>=0)openAccountInsight(i)});
  document.querySelectorAll('[data-native-cost-name]').forEach(el=>el.onchange=()=>{data.moveBudget.items[Number(el.dataset.nativeCostName)].name=el.value;saveData()});document.querySelectorAll('[data-native-cost-aud]').forEach(el=>el.onchange=()=>{data.moveBudget.items[Number(el.dataset.nativeCostAud)].aud=Number(el.value)||0;saveData()});document.querySelectorAll('[data-native-cost-remove]').forEach(el=>el.onclick=()=>{data.moveBudget.items.splice(Number(el.dataset.nativeCostRemove),1);saveData()});$('nativeAddCostBtn')?.addEventListener('click',()=>{data.moveBudget.items.push({name:'New cost',aud:0});saveData()});$('nativeFxRate')?.addEventListener('change',e=>{data.moveBudget.audPerGbp=Math.max(.1,Number(e.target.value)||1.9);saveData()});
  document.querySelectorAll('[data-native-switch-bank]').forEach(el=>el.onchange=()=>{data.switches[Number(el.dataset.nativeSwitchBank)].bank=el.value;saveData()});document.querySelectorAll('[data-native-switch-amount]').forEach(el=>el.onchange=()=>{data.switches[Number(el.dataset.nativeSwitchAmount)].amount=Number(el.value)||0;saveData()});document.querySelectorAll('[data-native-switch-status]').forEach(el=>el.onchange=()=>{data.switches[Number(el.dataset.nativeSwitchStatus)].status=el.value;saveData()});document.querySelectorAll('[data-native-switch-remove]').forEach(el=>el.onclick=()=>{data.switches.splice(Number(el.dataset.nativeSwitchRemove),1);saveData()});$('nativeAddBonusBtn')?.addEventListener('click',()=>{data.switches.push({bank:'New bonus',amount:0,status:'planned'});saveData()});
}

function renderNativeApp(){if(!document.documentElement.classList.contains('native-ios'))return;nativeRenderHome();nativeRenderAccounts();nativeRenderPlanner();nativeRenderShop();nativeRenderSettings();nativeBindDynamicEvents()}


function nativeSwipeBlockedTarget(target){
  if(!target?.closest)return false;

  // Elements where horizontal movement already has a specific meaning.
  if(target.closest(
    'input,select,textarea,[contenteditable="true"],canvas,'+
    '.nativeShopTabs,.nativeScenarioPresets,.nativeTabBar,'+
    '.nativeGraphSlider,.rangeButtons,.chartTooltip'
  ))return true;

  return false;
}

function nativeResetSwipeVisual({snap=true}={}){
  const page=nativeSwipe.page;
  if(page){
    page.classList.remove('nativeSwipeTracking');
    page.style.removeProperty('--native-swipe-x');

    if(snap){
      page.classList.add('nativeSwipeSnapBack');
      setTimeout(()=>page.classList.remove('nativeSwipeSnapBack'),190);
    }else{
      page.classList.remove('nativeSwipeSnapBack');
    }
  }

  nativeSwipe={
    tracking:false,
    horizontal:false,
    cancelled:false,
    startX:0,
    startY:0,
    lastX:0,
    lastY:0,
    startedAt:0,
    page:null
  };
}

function nativeSetupSwipeNavigation(){
  const pages=$('nativePages');
  if(!pages||pages.dataset.swipeReady==='1')return;
  pages.dataset.swipeReady='1';

  pages.addEventListener('touchstart',e=>{
    if(e.touches.length!==1)return;
    if(document.querySelector('dialog[open]'))return;
    if(nativePullBusy)return;
    if(nativeSwipeBlockedTarget(e.target))return;

    const touch=e.touches[0];
    nativeSwipe={
      tracking:true,
      horizontal:false,
      cancelled:false,
      startX:touch.clientX,
      startY:touch.clientY,
      lastX:touch.clientX,
      lastY:touch.clientY,
      startedAt:performance.now(),
      page:document.querySelector(`.nativePage[data-native-page="${nativeActiveTab}"]`)
    };
  },{passive:true});

  pages.addEventListener('touchmove',e=>{
    if(!nativeSwipe.tracking||nativeSwipe.cancelled||e.touches.length!==1)return;

    const touch=e.touches[0];
    nativeSwipe.lastX=touch.clientX;
    nativeSwipe.lastY=touch.clientY;

    const dx=touch.clientX-nativeSwipe.startX;
    const dy=touch.clientY-nativeSwipe.startY;
    const ax=Math.abs(dx);
    const ay=Math.abs(dy);

    // Wait until the finger has moved enough to know what the user intended.
    if(!nativeSwipe.horizontal){
      if(ay>10&&ay>ax*1.15){
        nativeSwipe.cancelled=true;
        nativeResetSwipeVisual({snap:false});
        return;
      }

      if(ax<12||ax<=ay*1.25)return;
      nativeSwipe.horizontal=true;

      // A horizontal tab swipe wins over pull-to-refresh.
      nativePullStartY=null;
      nativePullDistance=0;
      const indicator=$('nativePullIndicator');
      indicator?.classList.remove('visible');
      indicator?.style.removeProperty('--pull');

      nativeSwipe.page?.classList.add('nativeSwipeTracking');
    }

    if(!nativeSwipe.horizontal)return;

    // Once intent is clearly horizontal, stop WebKit turning it into a vertical scroll.
    e.preventDefault();

    const currentIndex=NATIVE_TABS.indexOf(nativeActiveTab);
    const atLeftEdge=currentIndex===0&&dx>0;
    const atRightEdge=currentIndex===NATIVE_TABS.length-1&&dx<0;

    // The page only follows the finger a little. At either end it gets extra resistance.
    const resistance=(atLeftEdge||atRightEdge)?.075:.18;
    const visualX=Math.max(-42,Math.min(42,dx*resistance));
    nativeSwipe.page?.style.setProperty('--native-swipe-x',`${visualX}px`);
  },{passive:false});

  const finishSwipe=async()=>{
    if(!nativeSwipe.tracking)return;

    const dx=nativeSwipe.lastX-nativeSwipe.startX;
    const elapsed=Math.max(1,performance.now()-nativeSwipe.startedAt);
    const velocity=Math.abs(dx)/elapsed;
    const horizontal=nativeSwipe.horizontal&&!nativeSwipe.cancelled;

    if(!horizontal){
      nativeResetSwipeVisual({snap:false});
      return;
    }

    const currentIndex=NATIVE_TABS.indexOf(nativeActiveTab);
    const direction=dx<0?1:-1;
    const nextIndex=currentIndex+direction;
    const hasDestination=nextIndex>=0&&nextIndex<NATIVE_TABS.length;
    const committed=hasDestination&&(Math.abs(dx)>=72||(Math.abs(dx)>=38&&velocity>=.42));

    if(!committed){
      nativeResetSwipeVisual({snap:true});
      return;
    }

    const nextTab=NATIVE_TABS[nextIndex];
    nativeResetSwipeVisual({snap:false});
    nativeSwitchTab(nextTab);
  };

  pages.addEventListener('touchend',finishSwipe,{passive:true});
  pages.addEventListener('touchcancel',()=>{
    if(nativeSwipe.tracking)nativeResetSwipeVisual({snap:true});
  },{passive:true});
}

function nativeSwitchTab(tab){
  if(!NATIVE_TABS.includes(tab))tab='home';const old=nativeActiveTab,oldIndex=NATIVE_TABS.indexOf(old),newIndex=NATIVE_TABS.indexOf(tab);nativeLastTab=old;nativeActiveTab=tab;sessionStorage.setItem('nativeActiveTab',tab);
  document.querySelectorAll('.nativePage').forEach(page=>{const active=page.dataset.nativePage===tab;page.classList.remove('nativeEnterForward','nativeEnterBack');page.classList.toggle('active',active);if(active){page.classList.add(newIndex>=oldIndex?'nativeEnterForward':'nativeEnterBack');const scroll=page.querySelector('.nativePageScroll');if(scroll&&old!==tab)scroll.scrollTop=0}});
  document.querySelectorAll('.nativeTab').forEach(btn=>{const active=btn.dataset.nativeTab===tab;btn.classList.toggle('active',active);btn.setAttribute('aria-current',active?'page':'false')});nativeHaptic('light');renderNativeApp();
}

function nativeUpdateStatusBar(){
  try{
    const StatusBar=window.Capacitor?.Plugins?.StatusBar;
    if(!StatusBar)return;
    const lightTheme=data.profile?.theme==='light';
    if(isNativeAndroid()){
      StatusBar.setOverlaysWebView({overlay:false}).catch(()=>{});
      StatusBar.setBackgroundColor({color:lightTheme?'#f6f8fb':'#0d1117'}).catch(()=>{});
    }else{
      StatusBar.setOverlaysWebView({overlay:true}).catch(()=>{});
    }
    StatusBar.setStyle({style:lightTheme?'DARK':'LIGHT'}).catch(()=>{});
  }catch{}
}

async function nativeRefreshShopAndRates({quiet=false}={}){
  const btn=$('nativeRefreshShopBtn');btn?.classList.add('nativeRefreshSpinning');if(btn)btn.disabled=true;$('nativeShopStatus').textContent='Refreshing market and shop…';
  try{await Promise.allSettled([refreshMarketRates({quiet:true}),refreshSavingsShop({quiet:true})]);renderNativeApp();const webStatus=$('shopRefreshStatus')?.textContent;if(webStatus)$('nativeShopStatus').textContent=webStatus;if(!quiet)await nativeHaptic('medium')}finally{btn?.classList.remove('nativeRefreshSpinning');if(btn)btn.disabled=false}
}

function nativeSetupPullToRefresh(){
  document.querySelectorAll('.nativePageScroll').forEach(scroller=>{
    scroller.addEventListener('touchstart',e=>{if(scroller.scrollTop<=0&&!nativePullBusy){nativePullStartY=e.touches[0]?.clientY??null;nativePullDistance=0}},{passive:true});
    scroller.addEventListener('touchmove',e=>{if(nativePullStartY===null||nativePullBusy)return;const y=e.touches[0]?.clientY??nativePullStartY;nativePullDistance=Math.max(0,Math.min(110,y-nativePullStartY));const indicator=$('nativePullIndicator');indicator.classList.toggle('visible',nativePullDistance>10);indicator.style.setProperty('--pull',`${nativePullDistance}px`);$('nativePullText').textContent=nativePullDistance>72?(nativeActiveTab==='shop'?'Release to refresh shop':'Release to sync'):'Pull to refresh'},{passive:true});
    scroller.addEventListener('touchend',async()=>{if(nativePullStartY===null)return;const trigger=nativePullDistance>72&&!nativePullBusy;nativePullStartY=null;const indicator=$('nativePullIndicator');if(trigger){nativePullBusy=true;indicator.classList.add('loading');$('nativePullText').textContent=nativeActiveTab==='shop'?'Refreshing shop…':'Syncing…';await nativeHaptic('medium');try{if(nativeActiveTab==='shop')await nativeRefreshShopAndRates({quiet:true});else await syncNow()}finally{nativePullBusy=false;nativePullDistance=0;indicator.classList.remove('loading','visible');indicator.style.removeProperty('--pull');renderNativeApp()}}else{nativePullDistance=0;indicator.classList.remove('visible');indicator.style.removeProperty('--pull')}},{passive:true});
  });
}

function nativeNotificationId(seed){let h=0;for(let i=0;i<seed.length;i++)h=((h<<5)-h+seed.charCodeAt(i))|0;return Math.abs(h%2000000000)+1000}
async function nativeScheduleAccountAlerts(){
  const LocalNotifications=window.Capacitor?.Plugins?.LocalNotifications;if(!LocalNotifications)return false;
  try{const pending=await LocalNotifications.getPending();if(pending?.notifications?.length)await LocalNotifications.cancel({notifications:pending.notifications.map(n=>({id:n.id}))})}catch{}
  const now=new Date(),notifications=[];
  for(const a of data.accounts){for(const item of [{kind:'maturity',date:a.maturity,label:'matures',days:7},{kind:'rate',date:a.rateEnd,label:'rate ends',days:7}]){const d=parseDate(item.date);if(!d)continue;const remind=new Date(d);remind.setDate(remind.getDate()-item.days);remind.setHours(9,0,0,0);if(remind>now)notifications.push({id:nativeNotificationId(`${a.id}-${item.kind}-${item.date}`),title:'Savings Hub',body:`${a.name} ${item.label} in ${item.days} days (${formatDate(item.date)}).`,schedule:{at:remind},extra:{accountId:a.id,kind:item.kind}})}}
  for(const x of data.oneOffDeposits||[]){if(x.status!=='planned')continue;const d=parseDate(x.date);if(!d)continue;const remind=new Date(d);remind.setDate(remind.getDate()-3);remind.setHours(9,0,0,0);if(remind>now)notifications.push({id:nativeNotificationId(`${x.id}-oneoff-${x.date}`),title:'Savings Hub',body:`${x.name||'One-off deposit'} is due in 3 days (${money(x.amount)}).`,schedule:{at:remind},extra:{oneOffId:x.id,kind:'oneoff'}})}
  if(notifications.length)await LocalNotifications.schedule({notifications});return true;
}
async function nativeToggleAlerts(){const LocalNotifications=window.Capacitor?.Plugins?.LocalNotifications;if(!LocalNotifications)return toggleNotifications();if(data.settings.notifications){try{const pending=await LocalNotifications.getPending();if(pending?.notifications?.length)await LocalNotifications.cancel({notifications:pending.notifications.map(n=>({id:n.id}))})}catch{}data.settings.notifications=false;saveData();await nativeHaptic('light');return}try{const permission=await LocalNotifications.requestPermissions();const granted=permission?.display==='granted';data.settings.notifications=granted;if(granted){await nativeScheduleAccountAlerts();await nativeHaptic('medium')}saveData()}catch(e){console.error(e);alert('Could not enable device reminders.')}}
async function nativeRefreshScheduledAlerts(){if(!data.settings.notifications)return;try{await nativeScheduleAccountAlerts()}catch(e){console.warn('Alert refresh failed',e)}}
function nativeSetupLifecycle(){try{const AppPlugin=window.Capacitor?.Plugins?.App;if(!AppPlugin)return;AppPlugin.addListener('appStateChange',async({isActive})=>{if(isActive){if(isDirty())await syncNow();maybeAutoRefresh();await nativeRefreshScheduledAlerts();renderNativeApp()}})}catch{}}

function nativeSetupAndroidBackButton(){
  if(!isNativeAndroid())return;
  try{
    const AppPlugin=window.Capacitor?.Plugins?.App;
    if(!AppPlugin)return;

    AppPlugin.addListener('backButton',()=>{
      // Android users expect Back to dismiss the thing in front of them first.
      const openDialogs=[...document.querySelectorAll('dialog[open]')];
      if(openDialogs.length){
        try{openDialogs[openDialogs.length-1].close()}catch{}
        nativeHaptic('light');
        return;
      }

      // From any secondary tab, Back returns to Home. A second Back exits.
      // This avoids creating a tab-history loop while keeping Android behaviour predictable.
      if(nativeActiveTab!=='home'){
        nativeSwitchTab('home');
        return;
      }

      AppPlugin.exitApp();
    });
  }catch(e){
    console.warn('Android back-button setup failed',e);
  }
}


function nativeApplyPreset(preset){
  const base=actualMonthlyTotal();graphState.monthlyCustom=true;graphState.monthlyOverride=base;graphState.pauseMonths=0;graphState.lumpSumAmount=0;graphState.lumpSumDate='';if(preset==='current'){graphState.monthlyCustom=false;graphState.monthlyOverride=null}if(preset==='plus100')graphState.monthlyOverride=base+100;if(preset==='plus250')graphState.monthlyOverride=base+250;if(preset==='pause3')graphState.pauseMonths=3;if(preset==='lump1000'){graphState.lumpSumAmount=1000;graphState.lumpSumDate=isoDate(addMonthsToDate(new Date(),1))}document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.toggle('active',x.dataset.nativePreset===preset));graphState.activeIndex=null;nativeHaptic('light');render();
}

function initNativeMobile(){
  if(!isNativeMobile())return;
  document.documentElement.classList.add('native-ios');
  document.body.classList.add('native-ios-body');
  if(isNativeAndroid()){
    document.documentElement.classList.add('native-android');
    document.body.classList.add('native-android-body');
  }else{
    document.documentElement.classList.add('native-iphone');
  }$('nativeApp').setAttribute('aria-hidden','false');document.querySelector('.wrap')?.classList.add('nativeWebsiteEngine');
  // Native bundles should never depend on an old service-worker cache.
  if('serviceWorker' in navigator)navigator.serviceWorker.getRegistrations?.().then(regs=>regs.forEach(r=>r.unregister())).catch(()=>{});
  document.querySelectorAll('.nativeTab').forEach(btn=>btn.addEventListener('click',()=>nativeSwitchTab(btn.dataset.nativeTab)));$('nativeHomeMore')?.addEventListener('click',()=>nativeSwitchTab('settings'));$('nativeAddAccountBtn')?.addEventListener('click',()=>{nativeHaptic('medium');openAccount(null)});
  $('nativeAccountSearch')?.addEventListener('input',e=>{accountListState.search=e.target.value;nativeRenderAccounts();nativeBindDynamicEvents()});$('nativeAccountType')?.addEventListener('change',e=>{accountListState.type=e.target.value;nativeRenderAccounts();nativeBindDynamicEvents()});$('nativeAccountSort')?.addEventListener('change',e=>{accountListState.sort=e.target.value;nativeRenderAccounts();nativeBindDynamicEvents()});
  $('nativeResetPlannerBtn')?.addEventListener('click',()=>{graphState.monthlyOverride=null;graphState.monthlyCustom=false;graphState.rateAdjustment=0;graphState.horizon='target';graphState.activeIndex=null;graphState.lumpSumAmount=0;graphState.lumpSumDate='';graphState.pauseMonths=0;document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.toggle('active',x.dataset.nativePreset==='current'));nativeHaptic('light');render()});
  $('nativeGraphMonthlySlider')?.addEventListener('input',e=>{graphState.monthlyOverride=Number(e.target.value)||0;graphState.monthlyCustom=true;graphState.activeIndex=null;document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.remove('active'));render()});$('nativeGraphRateSlider')?.addEventListener('input',e=>{graphState.rateAdjustment=Number(e.target.value)||0;graphState.activeIndex=null;document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.remove('active'));render()});$('nativeGraphLumpAmount')?.addEventListener('input',e=>{graphState.lumpSumAmount=Math.max(0,Number(e.target.value)||0);graphState.activeIndex=null;document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.remove('active'));render()});$('nativeGraphLumpDate')?.addEventListener('change',e=>{graphState.lumpSumDate=e.target.value;graphState.activeIndex=null;document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.remove('active'));render()});$('nativeGraphPauseMonths')?.addEventListener('change',e=>{graphState.pauseMonths=Math.max(0,Number(e.target.value)||0);graphState.activeIndex=null;document.querySelectorAll('[data-native-preset]').forEach(x=>x.classList.remove('active'));render()});document.querySelectorAll('[data-native-horizon]').forEach(btn=>btn.addEventListener('click',()=>{graphState.horizon=btn.dataset.nativeHorizon;graphState.activeIndex=null;nativeHaptic('light');render()}));document.querySelectorAll('[data-native-preset]').forEach(btn=>btn.addEventListener('click',()=>nativeApplyPreset(btn.dataset.nativePreset)));
  $('nativeAddOneOffBtn')?.addEventListener('click',()=>{nativeHaptic('medium');openOneOff()});
  document.querySelectorAll('[data-native-shop]').forEach(btn=>btn.addEventListener('click',()=>{savingsShopState.tab=btn.dataset.nativeShop;nativeHaptic('light');nativeRenderShop()}));$('nativeRefreshShopBtn')?.addEventListener('click',()=>nativeRefreshShopAndRates({quiet:false}));
  $('nativeSnapshotBtn')?.addEventListener('click',()=>{nativeHaptic('light');renderSnapshot();$('snapshotDialog').showModal()});$('nativePrivacyBtn')?.addEventListener('click',()=>{togglePrivacyMode();nativeHaptic('light');renderNativeApp()});$('nativeAppearanceBtn')?.addEventListener('click',()=>{nativeHaptic('light');openCustomise()});$('nativeAlertsBtn')?.addEventListener('click',()=>{nativeHaptic('light');nativeToggleAlerts()});$('nativeHealthBtn')?.addEventListener('click',()=>{nativeHaptic('light');openDataHealth()});$('nativeCloudBtn')?.addEventListener('click',()=>{nativeHaptic('light');$('cloudBtn').click()});$('nativeBackupBtn')?.addEventListener('click',()=>{nativeHaptic('light');exportBackup()});$('nativeImportBtn')?.addEventListener('click',()=>{nativeHaptic('light');$('importFile').click()});$('nativeRecoveryBtn')?.addEventListener('click',()=>{nativeHaptic('light');restoreLatestRecovery()});$('nativeResetDataBtn')?.addEventListener('click',()=>{nativeHaptic('heavy');resetData()});$('nativeStaleDays')?.addEventListener('change',e=>{data.settings.staleDays=Number(e.target.value)||30;saveData()});$('nativeMinGain')?.addEventListener('change',e=>{data.settings.minGain=Number(e.target.value)||10;saveData()});
  $('nativeDeleteAccountBtn')?.addEventListener('click',()=>{if(editingAccountIndex===null)return;const a=data.accounts[editingAccountIndex];if(!a)return;if(confirm(`Delete ${a.name}?`)){data.accounts.splice(editingAccountIndex,1);editingAccountIndex=null;try{$('accountDialog').close()}catch{};nativeHaptic('heavy');saveData()}});
  ['accountDialog','accountInsightDialog','oneOffDialog','snapshotDialog','customiseDialog','dataHealthDialog','cloudDialog','onboardingDialog'].forEach(id=>$(id)?.classList.add('nativeSheet'));
  nativeUpdateStatusBar();nativeSetupPullToRefresh();nativeSetupSwipeNavigation();nativeSetupLifecycle();nativeSetupAndroidBackButton();nativeRefreshScheduledAlerts();nativeActiveTab=sessionStorage.getItem('nativeActiveTab')||'home';nativeLastTab=nativeActiveTab;nativeSwitchTab(nativeActiveTab);renderNativeApp();
}

const __savingsHubWebRender=render;
render=function(){__savingsHubWebRender();if(document.documentElement.classList.contains('native-ios')){nativeUpdateStatusBar();renderNativeApp()}};
window.addEventListener('DOMContentLoaded',()=>setTimeout(initNativeMobile,80));
