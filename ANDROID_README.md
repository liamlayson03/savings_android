# Savings Hub Android V6.1

This is the Android port of the tested Savings Hub iOS V6.1 build.

## What is preserved

- Same Supabase project/profile format.
- V5.0.1 first-login cloud safety.
- RC2 >£500 what-if projection fix.
- Account intelligence and actual history.
- One-off deposits and maturity planning.
- Savings Shop + live refresh.
- Home / Accounts / Planner / Shop / Settings.
- Swipe left/right between tabs.
- Pull-to-refresh.
- Local maturity/rate/one-off reminders.
- Recovery snapshots and backup/import.

## Android-specific behaviour

- Android system back:
  - closes an open sheet/dialog first;
  - from Accounts/Planner/Shop/Settings returns to Home;
  - from Home exits the app.
- Status bar is non-overlay to avoid content sitting underneath Android system UI.
- Android/Roboto system typography.
- Slightly tighter native transitions and touch targets.
- Debug APK from GitHub Actions is already signed with the Android debug key and can be sideloaded directly.

## Build with GitHub Actions

Create a new private GitHub repository, push this whole folder, then:

Actions → **Build Savings Hub Android V6.1 APK** → Run workflow

Download the artifact:

`SavingsHub-Android-V6.1-apk`

Inside is:

`SavingsHub-Android-V6.1.apk`

## Installing on Android

Transfer the APK to the Android phone, open it, and allow **Install unknown apps** for the browser/file manager if Android asks.

For a public Google Play release, do not ship the debug APK. Create a proper release keystore/signing workflow and build an Android App Bundle (AAB).
