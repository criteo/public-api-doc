// Self-contained "AI Label Placement Lab" playground, ported from the internal
// design artifact. It runs in a srcDoc iframe so its CSS and scripts cannot
// collide with the docs site. Images live in
// /images/retailer-integration/docs/ai-label-placement/.
export const AiLabelPlayground = ({ height = "900px" }) => {
  const html = `<!doctype html><html data-theme="light"><head><script>document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#']");if(!a)return;e.preventDefault();var h=a.getAttribute("href");if(h&&h.length>1){try{location.hash=h}catch(_){}}},true)</script><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>
<title>AI Label Placement Lab</title>
<style>
:root{
  --bg:#f5f6f9;--panel:#ffffff;--ink:#151922;--muted:#5b6475;--line:#e2e5ec;--accent:#3b5bfd;--accent-ink:#ffffff;
  --ok:#15803d;--ok-bg:#e3f6ea;--warn:#b45309;--warn-bg:#fdf0d8;--bad:#c62828;--bad-bg:#fde6e6;
  --chip:#eceff5;--stage:#e4e8f0;--shadow:0 1px 2px rgba(20,25,40,.06),0 8px 24px rgba(20,25,40,.06);
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --bg:#0e1117;--panel:#161b25;--ink:#e9ecf3;--muted:#9aa3b6;--line:#262d3b;--accent:#7d95ff;--accent-ink:#0b0f1a;
    --ok:#4ade80;--ok-bg:#12301f;--warn:#fbbf24;--warn-bg:#3a2a0c;--bad:#f87171;--bad-bg:#3a1517;
    --chip:#202737;--stage:#0a0d13;--shadow:none;color-scheme:dark;
  }
}
:root[data-theme="dark"]{
    --bg:#0e1117;--panel:#161b25;--ink:#e9ecf3;--muted:#9aa3b6;--line:#262d3b;--accent:#7d95ff;--accent-ink:#0b0f1a;
    --ok:#4ade80;--ok-bg:#12301f;--warn:#fbbf24;--warn-bg:#3a2a0c;--bad:#f87171;--bad-bg:#3a1517;
    --chip:#202737;--stage:#0a0d13;--shadow:none;color-scheme:dark;
}
*{box-sizing:border-box}
html,body{margin:0}
body{background:var(--bg);color:var(--ink);font:14px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
button,input,select{font:inherit;color:inherit}
.app[hidden],#rec[hidden]{display:none}
nav.tabs{display:inline-flex;background:var(--chip);border-radius:10px;padding:3px;gap:2px;align-self:center}
nav.tabs a{padding:6px 14px;border-radius:8px;color:var(--muted);text-decoration:none;font-size:13px;font-weight:550}
nav.tabs a[aria-current=page]{background:var(--panel);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.15)}
nav.tabs a:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
#rec{max-width:1120px;margin:0 auto;padding:8px 24px 64px}
#rec h2{font-size:26px;letter-spacing:-.02em;margin:18px 0 6px;font-weight:700}
#rec .lead{color:var(--muted);max-width:68ch;margin:0 0 18px;font-size:15px}
#rec h3.sh{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:34px 0 12px;font-weight:650}
.rctl{position:sticky;top:0;z-index:20;display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;padding:10px 14px;margin:0 -14px 6px;background:var(--bg);border-bottom:1px solid var(--line)}
.rctl .g{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.rctl .g>span{font-size:12px;color:var(--muted);font-weight:600}
.rctl .seg button{padding:5px 11px}
.rctl .chk{margin:0;padding:0}
#rec{max-width:1360px}
.fpick{margin:0 0 14px}
.fpick label{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:650;margin:0 0 6px}
.fpick select{all:unset;box-sizing:border-box;display:block;width:100%;max-width:560px;cursor:pointer;font-size:19px;font-weight:650;letter-spacing:-.01em;padding:13px 46px 13px 16px;border-radius:12px;border:2px solid var(--accent);background:var(--panel) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath d='M5 9l7 7 7-7' fill='none' stroke='%237d95ff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right 16px center;box-shadow:var(--shadow)}
.fpick select:focus-visible{outline:3px solid color-mix(in srgb,var(--accent) 40%,transparent);outline-offset:2px}
.fbox{background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);overflow:hidden}
.fopts{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:flex-end;justify-content:flex-start}
.fopts .o{display:flex;flex-direction:column;gap:2px}
.fopts .o>span{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:650}
.fopts select{all:unset;box-sizing:border-box;cursor:pointer;font-size:13px;padding:6px 28px 6px 10px;border-radius:9px;background:var(--chip) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath d='M5 9l7 7 7-7' fill='none' stroke='%239aa3b6' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right 9px center;min-width:112px;white-space:nowrap}
#rWords{width:200px}
.fopts select:focus-visible,.fopts .seg button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.fopts .seg button{padding:5px 11px;font-size:13px}
.fopts .seg button:disabled{cursor:not-allowed;opacity:.4}
.fopts .seg button[aria-pressed=true]:disabled{opacity:.85}
.fzoom{padding:8px 18px 0;font-size:12px;color:var(--muted)}
.fitem .hint{font-size:12px;color:var(--muted)}
.rglobal{margin:0 18px 18px;padding:16px 18px;border-radius:12px;background:var(--chip)}
.rglobal h5{margin:0;font-size:15px}
.rglobal .rsub{margin:0 0 10px;font-size:12.5px;color:var(--muted)}
.rglobal p{margin:0 0 8px;font-size:13.5px;color:var(--ink);max-width:78ch}
.rglobal .h2nd{margin-top:20px}
.rglobal ul{margin:6px 0 0;padding:0 0 0 18px;font-size:13.5px;color:var(--muted);display:grid;gap:5px;max-width:78ch}
.rglobal li b{color:var(--ink)}
@media (max-width:640px){.rglobal{margin:0 14px 14px}.fopts{justify-content:flex-start}.fpick select{font-size:17px}}
.rlay{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:24px;align-items:start;margin-top:14px}
.rmain{min-width:0}
.rside{position:sticky;top:16px;max-height:calc(100vh - 32px);overflow:auto;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:6px 16px 12px;box-shadow:var(--shadow)}
.rside h3{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:12px 0 2px;font-weight:650}
.rside .sub{font-size:12px;color:var(--muted);margin:0 0 6px}
.pitem{padding:10px 0;border-top:1px solid var(--line)}
.pitem:first-of-type{border-top:0}
.pitem h4{margin:0 0 3px;font-size:13.5px;display:flex;align-items:center}
.pitem .n{display:inline-grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--chip);font-size:11px;font-weight:700;margin-right:8px;flex:none}
.pitem p{margin:0;font-size:12.5px;color:var(--muted)}
.pitem .app-note{margin-top:5px;font-size:12px;color:var(--ink)}
.fsel{display:flex;flex-wrap:wrap;gap:8px 18px;margin:0 0 14px}
.fsel .fg{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.fsel .fg>span{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:650;margin-right:2px}
.fsel button{all:unset;cursor:pointer;padding:6px 12px;border-radius:99px;border:1px solid var(--line);background:var(--panel);font-size:13px}
.fsel button:hover{border-color:var(--accent)}
.fsel button[aria-pressed=true]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent);font-weight:600}
.fsel button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
@media (max-width:980px){.rlay{grid-template-columns:minmax(0,1fr)}.rside{position:static;max-height:none}}
.pcard{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow)}
.pcard .n{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--chip);font-size:12px;font-weight:700;margin-right:8px}
.pcard h4{margin:0 0 6px;font-size:14px;display:flex;align-items:center}
.pcard p{margin:0;font-size:13px;color:var(--muted)}
.pcard .app-note{margin-top:8px;font-size:12px;color:var(--ink);border-top:1px dashed var(--line);padding-top:8px}
.fgroup{margin-top:8px}
.fgroup>p{margin:-6px 0 14px;color:var(--muted);font-size:13px}
.fcard{background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);margin:0 0 18px;overflow:hidden}
.fhead{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:flex-start;padding:14px 18px 10px}
.fnote{margin:0;padding:0 18px 12px;font-size:12.5px;color:var(--muted);max-width:90ch}
.fopts select:disabled{cursor:not-allowed;opacity:.6}
.fhead h4{margin:0;font-size:16px;letter-spacing:-.01em}
.fhead small{color:var(--muted);display:block;font-size:12px}
.fpv{background:var(--stage);padding:14px;display:flex;justify-content:center;overflow:hidden;position:relative;min-height:80px}
.fpv .fwrap{position:relative;overflow:hidden;border-radius:4px;background:#fff0}
.fpv .fscale{transform-origin:0 0;position:absolute;left:0;top:0}
.fpv iframe{border:0;display:block;background:transparent}
.fpv .ph{position:absolute;inset:0;display:grid;place-items:center;color:var(--muted);font-size:12px}
.fwhy{padding:12px 18px 16px;display:grid;gap:6px}
.fwhy .where{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-weight:650}
.pill{font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;border-radius:99px;padding:2px 9px}
.pill.rec{background:var(--ok-bg);color:var(--ok)}
.pill.bk{background:var(--chip);color:var(--muted)}
.fwhy p{margin:0;color:var(--muted);font-size:13.5px;max-width:80ch}
.fwhy .tags{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:2px}
.fwhy .tags span{font-size:11px;background:var(--chip);border-radius:6px;padding:2px 7px;color:var(--muted)}
.fwhy a.open{margin-left:auto;font-size:13px;color:var(--accent);text-decoration:none;font-weight:600}
.fwhy a.open:hover{text-decoration:underline}
.method{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px 18px;font-size:13.5px;color:var(--muted);max-width:90ch}
.method b{color:var(--ink)}
@media (max-width:640px){#rec{padding:4px 16px 48px}.rctl{position:static;margin:0 -16px 6px;padding:10px 16px}.fhead{padding:12px 14px 8px}.fwhy{padding:10px 14px 14px}.fpv{padding:10px}}
header.top{display:flex;align-items:baseline;gap:14px;padding:18px 24px 6px;flex-wrap:wrap}
header.top h1{font-size:18px;margin:0;font-weight:650;letter-spacing:-.01em}
header.top p{margin:0;color:var(--muted)}
.app{display:grid;grid-template-columns:320px minmax(0,1fr);gap:20px;padding:12px 24px 32px;align-items:start}
@media (max-width:980px){.app{grid-template-columns:1fr;padding:12px 16px 28px}}
.panel{background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}
aside.side{padding:6px 0;position:sticky;top:12px;max-height:calc(100vh - 24px);overflow:auto}
@media (max-width:980px){aside.side{position:static;max-height:none}}
.sec{padding:14px 16px;border-bottom:1px solid var(--line)}
.sec:last-child{border-bottom:0}
.sec h3{margin:0 0 10px;font-size:11px;font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)}
.sel{width:100%;padding:9px 34px 9px 11px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--ink);font-weight:600;cursor:pointer;appearance:none;-webkit-appearance:none;
  background-image:linear-gradient(45deg,transparent 50%,var(--muted) 50%),linear-gradient(135deg,var(--muted) 50%,transparent 50%);background-position:calc(100% - 17px) 54%,calc(100% - 12px) 54%;background-size:5px 5px,5px 5px;background-repeat:no-repeat}
.sel:hover,.sel:focus-visible{border-color:var(--accent);outline:none}
.fmtsub{margin:8px 2px 0;color:var(--muted);font-size:12.5px}
.pgrp{margin-bottom:10px}
.pgl{font-size:12px;color:var(--muted);margin-bottom:5px}
.pgrid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.pgrid button{all:unset;box-sizing:border-box;cursor:pointer;text-align:center;padding:7px 8px;border:1px solid var(--line);border-radius:9px;font-size:13px}
.pgrid button:hover{border-color:var(--accent)}
.pgrid button[aria-pressed=true]{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) inset;background:color-mix(in srgb,var(--accent) 7%,var(--panel));font-weight:600}
.up{border:1px solid var(--line);border-radius:10px;padding:9px 10px;margin-bottom:8px;background:var(--panel)}
.up.drag{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 7%,var(--panel))}
.up b{display:block;font-weight:600}
.up small{display:block;color:var(--muted);font-size:12px}
.up-row{display:flex;gap:8px;align-items:center;margin-top:8px}
.upbtn{cursor:pointer;padding:5px 11px;border-radius:8px;background:var(--chip);font-size:13px;font-weight:600;white-space:nowrap}
.upbtn:hover{outline:1px solid var(--accent)}
.upbtn:focus-within{outline:2px solid var(--accent)}
.upname{flex:1;min-width:0;font-size:12.5px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.uprm{all:unset;cursor:pointer;color:var(--accent);font-size:12.5px;font-weight:600}
.uperr{color:var(--bad);font-size:12.5px;margin-top:4px}
.uperr:empty{display:none}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.fmt{display:grid;gap:6px}
.fmt button{all:unset;box-sizing:border-box;cursor:pointer;display:block;width:100%;padding:9px 11px;border:1px solid var(--line);border-radius:10px;background:var(--panel)}
.fmt button:hover{border-color:var(--accent)}
.fmt button[aria-pressed=true]{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) inset;background:color-mix(in srgb,var(--accent) 7%,var(--panel))}
.fmt b{display:block;font-weight:600}
.fmt small{color:var(--muted);font-size:12px}
.opt{display:grid;gap:6px}
.opt label{display:flex;gap:9px;align-items:flex-start;padding:8px 10px;border:1px solid var(--line);border-radius:10px;cursor:pointer}
.opt label:has(input:checked){border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) inset;background:color-mix(in srgb,var(--accent) 7%,var(--panel))}
.opt input{margin-top:3px;accent-color:var(--accent)}
.opt span small{display:block;color:var(--muted);font-size:12px}
.fixed{padding:8px 10px;border:1px dashed var(--line);border-radius:10px;color:var(--muted)}
.row{display:flex;align-items:center;gap:10px;margin:8px 0}
.row>label{flex:0 0 92px;color:var(--muted)}
.row input[type=range]{flex:1;accent-color:var(--accent)}
.row output{flex:0 0 46px;text-align:right;font-variant-numeric:tabular-nums}
.seg{display:inline-flex;background:var(--chip);border-radius:9px;padding:2px;gap:2px}
.seg button{all:unset;cursor:pointer;padding:5px 10px;border-radius:7px;font-size:13px}
[hidden]{display:none!important}
textarea.txt{resize:vertical;font:inherit;line-height:1.4}
.txt{width:100%;margin-top:8px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--ink)}
.txt:focus-visible{border-color:var(--accent);outline:none}
.seg.wide{display:flex;width:100%;margin-bottom:10px}
.seg.wide button{flex:1;text-align:center}
.seg button[aria-pressed=true]{background:var(--panel);box-shadow:0 1px 2px rgba(0,0,0,.15);font-weight:600}
.chk{display:flex;gap:9px;align-items:flex-start;margin:8px 0;cursor:pointer}
.chk input{margin-top:3px;accent-color:var(--accent)}
.chk small{display:block;color:var(--muted);font-size:12px}
.note{font-size:12.5px;color:var(--muted);background:var(--chip);border-radius:10px;padding:9px 11px;margin-top:8px}
.note b{color:var(--ink)}
.legend{font-size:12px;color:var(--muted)}
main.work{min-width:0;display:grid;gap:16px}
.toolbar{padding:12px 14px;display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center}
.wbox{display:flex;align-items:center;gap:8px}
.wbox input[type=number]{width:78px;padding:6px 8px;border:1px solid var(--line);border-radius:8px;background:var(--panel)}
.wbox input[type=range]{width:min(360px,40vw);accent-color:var(--accent)}
.presets{display:flex;flex-wrap:wrap;gap:6px}
.presets button{all:unset;cursor:pointer;padding:4px 9px;border-radius:999px;background:var(--chip);font-size:12.5px;font-variant-numeric:tabular-nums}
.presets button:hover{outline:1px solid var(--accent)}
.presets button[aria-pressed=true]{background:var(--accent);color:var(--accent-ink)}
.stagewrap{padding:14px;overflow:auto}
.stage{background:var(--stage);border-radius:10px;padding:18px;overflow:auto;min-height:260px}
.vp{position:relative;margin:0 auto;display:block}
.scaler{transform-origin:0 0;position:absolute;left:0;top:0}
.scaler iframe{display:block;border:0;background:#f3f4f7;box-shadow:0 2px 14px rgba(0,0,0,.22);border-radius:2px}
.grip{position:absolute;top:0;width:14px;cursor:ew-resize;display:flex;align-items:center;justify-content:center;touch-action:none}
.grip::before{content:"";width:4px;height:44px;border-radius:3px;background:var(--muted);opacity:.55}
.grip:hover::before{opacity:1;background:var(--accent)}
.dimsbar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}
.dimchip{background:var(--chip);border-radius:999px;padding:4px 12px;font-size:13px;font-variant-numeric:tabular-nums}
.dimchip b{font-weight:600;color:var(--muted);margin-right:4px}
.stagebar{display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-bottom:10px;color:var(--muted);font-size:12.5px}
.stagebar .chk{margin:0}
.foot{color:var(--muted);font-size:12.5px;padding:0 4px}
</style>

<header class="top">
  <h1>AI label placement lab</h1>
  <nav class="tabs" id="viewTabs" aria-label="View"><a href="#recommended" data-view="recommended">Recommended placements</a><a href="#playground" data-view="playground">Playground</a></nav>
  <p id="topNote">Pick a format and a placement, then resize the viewport to see where the “AI generated” label collides with anything important.</p>
</header>

<section id="rec" hidden aria-label="Recommended placements">
  <h2>Recommended AI badge placement</h2>
  <p class="lead">The round AI badge is always visible; a click or tap reveals the full wording. “Contains synthetic performer(s)” is always shown in full. Choose a format to see where it goes, and try the disclosures.</p>
  <div class="rlay">
    <div class="rmain">
      <div class="fpick"><label for="fSelect">Format</label><select id="fSelect"></select></div>
      <div class="fbox">
        <div class="fhead">
          <div class="fopts" role="group" aria-label="Preview options">
            <div class="o"><span>Device</span><div class="seg" id="rDev"><button data-v="desktop">Desktop</button><button data-v="mobile">Mobile</button></div></div>
            <div class="o" id="rMobWrap" hidden><span>Mobile layout</span><select id="rMob" aria-label="Mobile layout"><option value="grid">Grid</option><option value="horizontal">Horizontal image</option></select></div>
            <div class="o"><span>Disclosure</span><select id="rWords" aria-label="Disclosure"></select></div>
            <div class="o" id="rSizeWrap" hidden><span>Version</span><select id="rSize" aria-label="Version"><option value="standard">Standard</option><option value="compact">Compact</option></select></div>
            <div class="o"><span>Color mode</span><select id="rLook" aria-label="Color mode"></select></div>
          </div></div>
        <p class="fnote" id="rNote" hidden>The color mode is not passed in the ad response for Legacy Onsite Display and IAB formats, so the badge is rendered in Dark by default. The rendering can be chosen for creatives that do not pass the desired color mode.</p>
        <div id="rFormats"></div>
        <div class="rglobal"><h5>Positioning</h5><div class="rsub">Top-right of the branding zone; a cohesive default, with room for judgement</div>
          <p>Our recommendation is to place the badge in the <b>top-right corner of the branding zone</b> on almost every standard Onsite Display format. One consistent position is easier for people to spot and keeps the solution cohesive across formats. Depending on the case, a retailer may choose another placement:</p>
          <ul>
            <li><b>Formats inside a grid:</b> keep the badge within the boundaries of the format, so it cannot clash with the elements around it.</li>
            <li><b>Formats with space around them,</b> placed in the flow of the page: the badge can sit outside the format, preferably close to the content it refers to.</li>
            <li><b>Some layouts</b> may suit a different position within the product zone.</li>
          </ul>
          <h5 class="h2nd">Rendering</h5><div class="rsub">We provide the guidance; the retailer chooses the final look</div>
          <p>The rendering of the disclosure can be chosen by the retailer, as long as it follows our guiding principles.</p>
          <ul>
            <li><b>Round AI badge (go-to recommendation):</b> it provides direct clarity, and reveals the disclosure text on click or tap.</li>
            <li><b>Sparkle + "AI info":</b> retailers are free to go for this option for “AI generated” and “AI modified”, as it is also a recommendation coming from the IAB.</li>
            <li><b>“Contains synthetic performer(s)”:</b> shown in full next to the monochrome sparkle, always visible. It is never hidden behind a hover or tap. A compact version (text only, 10px, one line) is available for the tightest spaces, such as the 160×600.</li>
          </ul></div>
      </div>
    </div>
    <aside class="rside" id="rPrinc" aria-label="Guiding principles"></aside>
  </div>
</section>
<div class="app">
  <aside class="side panel" aria-label="Controls">
    <div class="sec"><h3>Format</h3><select id="fmtSel" class="sel" aria-label="Format"></select><p class="fmtsub" id="fmtSub"></p></div>
    <div class="sec"><h3>Label placement</h3><div id="placeBox"></div><div class="note" id="specNote"></div></div>
    <div class="sec" id="upSec"><h3>Your creative</h3><div id="upBox"></div>
      <p class="legend" style="margin:6px 2px 0">Replaces the sample creative of this format only. Your images stay in this browser and are not sent anywhere.</p></div>
    <div class="sec" id="mobSec"><h3>Mobile asset</h3><div class="opt" id="mobBox"></div></div>
    <div class="sec">
      <h3>Label</h3>
      <div class="seg wide" id="styleSeg"><button data-v="capsule">Text capsule</button><button data-v="round">Round AI badge</button></div>
      <select id="labelSel" class="sel" aria-label="Label text"></select>
      <input id="labelText" class="txt" type="text" maxlength="140" spellcheck="false" aria-label="Label text (editable)">
<div id="capsuleCtl">
      <div class="row" style="margin-top:12px"><label>Text</label>
        <div class="seg" id="caseSeg"><button data-v="upper">UPPERCASE</button><button data-v="lower" title="Lowercase, keeping the capital T / AI">Lowercase</button></div>
      </div>
      <div class="row" id="verRow" hidden><label>Version</label>
        <div class="seg" id="verSeg"><button data-v="standard">Standard</button><button data-v="compact" title="Text only, 10px, on one line: the smallest the “Contains synthetic performer(s)” disclosure can be shown">Compact</button></div>
      </div>
      <label class="chk"><input type="checkbox" id="icon"><span>Show icon<small>A sparkle in front of the text. The IAB framework recommends the Unicode sparkle (✨).</small></span></label>
      <div class="row" id="iconStyleRow"><label>Icon</label>
        <div class="seg" id="iconSeg"><button data-v="unicode" title="The Unicode sparkle character, as recommended by the IAB framework">✨ Unicode</button><button data-v="spark" title="A monochrome drawn sparkle that follows the text colour">Drawn</button></div>
      </div>
      <div class="legend" style="margin:6px 2px 10px">12px Roboto Regular in the same overlay as the more-info text. The switch above changes how the presets are written: UPPERCASE, or lowercase with a capital “T” / “AI”. “Custom text” is always shown exactly as you type it. It goes onto two lines, then wraps, only when it is wider than its container.</div>
</div>
      <div id="roundCtl" hidden>
        <div class="row" style="margin-top:12px"><label>Colour</label>
          <div class="seg" id="rbSeg"><button data-v="dark">Dark</button><button data-v="dark50">Dark 50%</button><button data-v="light">Light</button><button data-v="light50">Light 50%</button><button data-v="dark80">Dark 80%</button><button data-v="light80">Light 80%</button></div>
        </div>
        <div class="row"><label for="rbSize">Size</label><input id="rbSize" type="range" min="18" max="48" step="1"><output id="rbSizeO"></output></div>
        <label class="chk"><input type="checkbox" id="tipOpen"><span>Keep the text revealed<small>Shows what a click, tap or Enter reveals, without interacting.</small></span></label>
        <div class="legend" style="margin:6px 2px 10px">The text chosen above is what the badge reveals on click or tap. Europe and the UK: “AI generated” or “AI modified”. Some US clients: “Contains synthetic performer(s)”.</div>
      </div>
      <div class="row"><label for="lm">Margin</label><input id="lm" type="range" min="0" max="32" step="1"><output id="lmo"></output></div>
    </div>
    <div class="sec" id="ovSec">
      <h3>Overlay</h3>
      <label class="chk"><input type="checkbox" id="ovOn"><span>Expand an overlay from the badge<small>Hover or tap the badge to read the full caption. Pair it with a short badge text such as “AI info”.</small></span></label>
      <div id="ovBox" hidden>
        <label class="chk"><input type="checkbox" id="ovOpen"><span>Keep it open<small>Shows the overlay without hovering, to review it.</small></span></label>
        <select id="ovSel" class="sel" aria-label="Overlay text"></select>
        <input id="ovTitle" class="txt" type="text" maxlength="80" spellcheck="false" placeholder="Title (optional)" aria-label="Overlay title">
        <input id="ovHead" class="txt" type="text" maxlength="100" spellcheck="false" placeholder="Heading" aria-label="Overlay heading">
        <textarea id="ovBody" class="txt" rows="3" maxlength="400" spellcheck="false" placeholder="Caption text" aria-label="Overlay caption text"></textarea>
        <input id="ovLink" class="txt" type="text" maxlength="60" spellcheck="false" placeholder="Link text (optional)" aria-label="Overlay link text">
      </div>
    </div>
    <div class="sec">
      <h3>Preview state</h3>
      <div class="row"><label>Format mode</label>
        <div class="seg" id="modeSeg"><button data-v="light">Light</button><button data-v="dark">Dark</button></div>
      </div>
      <label class="chk" id="expRow"><input type="checkbox" id="expanded"><span>Show add-ons expanded<small>The more-info text open, as on hover/tap. The ⓘ icon is always visible.</small></span></label>
      <label class="chk" id="safeRow"><input type="checkbox" id="safe"><span>Show safe zones<small>Dashed boxes where the format defines a safe zone.</small></span></label>
      <label class="chk" id="legalRow"><input type="checkbox" id="legal"><span>Show legal text<small>On formats that have a legal text component.</small></span></label>
    </div>
  </aside>

  <main class="work">
    <section class="panel toolbar" aria-label="Viewport">
      <div class="wbox">
        <label for="wnum"><b>Viewport</b></label>
        <input id="wnum" type="number" min="360" max="1800" step="1"> <span>px</span>
        <input id="wrange" type="range" min="360" max="1700" step="1" aria-label="Viewport width">
      </div>
      <div class="presets" id="presets"></div>
    </section>

    <section class="panel stagewrap">
      <div class="dimsbar" aria-live="polite">
        <span class="dimchip"><b>Format</b> <span id="dimFormat">–</span></span>
        <span class="dimchip"><b>Branding zone</b> <span id="dimZone">–</span></span>
      </div>
      <div class="stagebar">
        <span id="zoomInfo"></span>
        <label class="chk"><input type="checkbox" id="fit"><span>Fit to window</span></label>
        <span>Drag the handle on the right edge to resize.</span>
      </div>
      <div class="stage" id="stage">
        <div class="vp" id="vp">
          <div class="scaler" id="scaler"><iframe id="frame" title="Format preview"></iframe></div>
          <div class="grip" id="grip" title="Drag to resize"></div>
        </div>
      </div>
    </section>

    <p class="foot">Layouts are rebuilt from the CodePens and the written specs (same CSS rules and media queries, with static product tiles instead of the Slick carousel).</p>
  </main>
</div>

<script>
/* ------------------------------------------------------------------ */
/* Label text presets (the label is rendered text, not an image)       */
/* ------------------------------------------------------------------ */
/* The round AI badge (provided artwork, trimmed and sized for display). "50" = the translucent versions. */
const RB_IMG = {dark:"/images/retailer-integration/docs/ai-label-placement/dark-4708661f.png", dark50:"/images/retailer-integration/docs/ai-label-placement/dark50-f5c70c00.png", light:"/images/retailer-integration/docs/ai-label-placement/light-e040081f.png", light50:"/images/retailer-integration/docs/ai-label-placement/light50-22b19e85.png"};
RB_IMG.dark80="/images/retailer-integration/docs/ai-label-placement/rb-img-dark80-843b5988.png"; RB_IMG.light80="/images/retailer-integration/docs/ai-label-placement/rb-img-light80-9c758edb.png";   // spec colours: #6A6A6A / #FFFFFF at 80%, white / black "AI"
const LABEL_TEXTS = [
  ["ai-generated","AI generated"],
  ["ai-modified","AI modified"],
  ["synth-perf","Contains synthetic performer(s)"],
  ["synthetic","This ad contains a synthetic performer",18],    // 18 = characters on the first line: "This ad contains a"
  ["ai-info","AI info"],
  ["ai","AI"]
];

/* ------------------------------------------------------------------ */
/* Creative assets used by the pens                                    */
/* ------------------------------------------------------------------ */
const IMG = {
  gridDesk: "/images/retailer-integration/docs/ai-label-placement/griddesk-a271aa25.png",
  horiz:    "/images/retailer-integration/docs/ai-label-placement/horiz-63a7ac67.jpg",
  spotDesk: "/images/retailer-integration/docs/ai-label-placement/spotdesk-5919bd1e.jpg",
  spotMob:  "/images/retailer-integration/docs/ai-label-placement/spotmob-3670487b.jpg",
  spotMR:   "/images/retailer-integration/docs/ai-label-placement/spotmr-7b538c5d.jpg",
  tall:     "/images/retailer-integration/docs/ai-label-placement/tall-02f8132b.png"   // 310×500 asset, safe zone drawn in (also used by Showcase)
};
/* Display Panel creatives (embedded so the page stays a single file) */
const DP_IMG = {
  a: "/images/retailer-integration/docs/ai-label-placement/a-3e2ddae1.jpg",   // 1400x200 desktop
  b: "/images/retailer-integration/docs/ai-label-placement/b-f7f97a7c.jpg",   // 1400x300 desktop
  m: "/images/retailer-integration/docs/ai-label-placement/m-2c9fb7cd.jpg"    // 1350x900 mobile
};
/* IAB creatives at their native sizes (embedded so the page stays a single file) */
const IAB_IMG = {
  "300x250": "/images/retailer-integration/docs/ai-label-placement/300x250-752e9d1a.jpg",
  "728x90":  "/images/retailer-integration/docs/ai-label-placement/728x90-73d71ff7.jpg",
  "160x600": "/images/retailer-integration/docs/ai-label-placement/160x600-b457ee3b.jpg"
};
const INFO_TXT = "This is the more info add-on. This text can be up to 180 characters long including spaces.This is the more info add-on. This text can be up to 180 characters long including spaces.".slice(0,180);
const LEGAL_TXT = "This is the legal text add-on. This text can be up to 90 characters long including spaces.";

/* ------------------------------------------------------------------ */
/* CSS shared by every preview document                                */
/* ------------------------------------------------------------------ */
const BASE_CSS = \`
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg-page:#f3f4f7;--bg-card:#e5e7f0;--border-radius:10px;
--light-bg:#fff;--light-icon:#6a6a6a;--light-text:#000;--dark-bg:#6a6a6a;--dark-icon:#fff;--dark-text:#fff;
--cd-arrow-size:20px;--cd-arrow-stroke:3px;--cd-arrow-offset:8px;--cd-rating-size:14px;--cd-product-content-width:100%;
--cd-cta-font-size:11px;--cd-cta-pad-y:10px;--cd-cta-pad-x:10px;--cd-cta-gap-top:8px}
body{font-family:Roboto,system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg-page);padding:24px}
#ai-label{position:absolute;z-index:99999;pointer-events:none;left:0;top:0;box-sizing:border-box;display:flex;align-items:center;gap:3px;width:max-content;padding:5px 8px;border-radius:999px;text-transform:uppercase;font:500 12px/normal Roboto,system-ui,-apple-system,"Segoe UI",sans-serif;text-align:center;overflow-wrap:break-word;background:#fff;color:#2b2b2b;opacity:.92}
#ai-label.raw{text-transform:none}
#ai-label.regular{font-weight:400}
#ai-label.round.flat{filter:none}
#ai-label.solid{opacity:1;background:rgba(255,255,255,.8);color:#000;box-shadow:none}
#ai-label.solid .ico{color:#6a6a6a}
#ai-label.solid.tone-dark{background:rgba(106,106,106,.8);color:#fff}
#ai-label.solid.tone-dark .ico{color:#fff}
#ai-label .ico{flex:none;display:inline-flex;align-items:center;justify-content:center;height:14px;min-width:14px;font:400 12px/1 "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif;text-transform:none}
#ai-label .ico svg{width:14px;height:14px;fill:currentColor}
#ai-label.no-ico .ico{display:none}
#ai-label .ico-inl{display:none;vertical-align:-1px;margin-right:3px;font:400 12px/1 "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif;text-transform:none}
#ai-label .ico-inl svg{width:14px;height:14px;fill:currentColor;vertical-align:-2px}
#ai-label.ico-in .ico{display:none}
#ai-label.ico-in .ico-inl{display:inline-block}
#ai-label.no-ico .ico-inl{display:none}
#ai-label .lbl-text{min-width:0}
#ai-label.round{display:block;padding:0;border-radius:50%;background:none;opacity:1;overflow:visible;line-height:0;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))}
#ai-label.round .ico,#ai-label.round .lbl-text{display:none!important}
#ai-label .rb{display:none;width:100%;height:100%;object-fit:contain;pointer-events:none;-webkit-user-drag:none;user-select:none}
#ai-label.round .rb{display:block}
#ai-label.round:focus-visible{outline:2px solid #4c8dff;outline-offset:2px}
#ai-tip{position:absolute;z-index:100000;box-sizing:border-box;width:max-content;padding:7px 11px;border-radius:8px;background:#23262b;color:#fff;font:400 12px/1.3 Roboto,system-ui,-apple-system,"Segoe UI",sans-serif;text-align:left;text-transform:none;box-shadow:0 4px 14px rgba(0,0,0,.32)}
#ai-tip[hidden]{display:none}
#ai-tip::before{content:"";position:absolute;top:-4px;left:calc(var(--cx,14px) - 4px);width:8px;height:8px;background:inherit;transform:rotate(45deg);border-radius:1px}
#ai-tip.up::before{top:auto;bottom:-4px}
#ai-tip.light{background:#fff;color:#14171c;box-shadow:0 4px 14px rgba(0,0,0,.3),0 0 0 1px rgba(0,0,0,.08)}
#ai-label.ov-on{pointer-events:auto;cursor:pointer;transition:opacity .12s}
#ai-label.ov-on:hover,#ai-label.ov-open{opacity:1}
#ai-label.ov-on:focus-visible{outline:2px solid #4c8dff;outline-offset:2px}
#ai-ov{position:absolute;z-index:100000;box-sizing:border-box;width:max-content;max-width:280px;padding:12px 14px 14px;border-radius:12px;background:#fff;color:#14171c;font:400 12px/1.4 Roboto,system-ui,-apple-system,"Segoe UI",sans-serif;text-align:left;text-transform:none;box-shadow:0 8px 28px rgba(0,0,0,.26),0 0 0 1px rgba(0,0,0,.07)}
#ai-ov[hidden]{display:none}
#ai-ov .ov-top{display:flex;align-items:flex-start;gap:8px;margin-bottom:4px}
#ai-ov .ov-title{flex:1;font:700 13px/1.3 Roboto,system-ui,sans-serif;padding-top:2px}
#ai-ov .ov-x{all:unset;box-sizing:border-box;cursor:pointer;margin-left:auto;width:22px;height:22px;display:grid;place-items:center;border-radius:50%;color:inherit;flex:none}
#ai-ov .ov-x:hover{background:rgba(127,127,127,.22)}
#ai-ov .ov-x:focus-visible{outline:2px solid #4c8dff}
#ai-ov .ov-x svg{width:14px;height:14px}
#ai-ov .ov-head{font:500 13px/1.3 Roboto,system-ui,sans-serif;margin:4px 0 3px}
#ai-ov .ov-body{color:#5a6068}
#ai-ov .ov-link{display:inline-block;margin-top:8px;font-weight:500;color:#1a5fb4;text-decoration:underline}
#ai-ov.dark{background:#2b2e34;color:#fff;box-shadow:0 8px 28px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.1)}
#ai-ov.dark .ov-body{color:#b9bfc9}
#ai-ov.dark .ov-link{color:#8ab4f8}
#ai-label.tone-dark{background:#767676;color:#fff;opacity:1}
body.no-legal .rm-legal-text-container,body.no-legal .cd-footer-legal,body.no-legal .cd-mobile-legal-more,body.no-legal .bd-legal,body.no-legal .bd-mobile-legal,body.no-legal .rm-option-legal{display:none!important}
.safe-zone{position:absolute;pointer-events:none;z-index:3}
.show-safe .safe-zone.ghost{outline:none;box-shadow:none}
.show-safe .safe-zone:not(.ghost){outline:1.5px dashed rgba(255,255,255,.95);outline-offset:-1px;box-shadow:inset 0 0 0 1.5px rgba(0,0,0,.35)}
\`;

/* Filler product cards + product-tile bits shared by the grid pens */
const GRID_FILLER_CSS = \`
.product-grid{max-width:1400px}
.products{display:flex;flex-wrap:wrap;gap:12px;min-width:300px;justify-content:space-between}
.product{background:var(--bg-card);border-radius:var(--border-radius);padding:10px;min-height:440px;max-height:510px;display:flex;cursor:pointer}
.product-content{display:flex;flex-direction:column;height:100%;width:100%;gap:10px;padding:12px}
.product-image{width:100%;min-width:80px;background:#d0d1e0;border-radius:6px;aspect-ratio:4/3}
.product-info{display:flex;flex-direction:column;justify-content:flex-end;flex:1}
.product-header{height:20%;background:#d4d4dd;border-radius:4px}
.rating{font-size:18px;margin:6px 0;color:#ffb400}
.product-footer{height:20%;background:#c4c6d8;border-radius:6px}
\`;

/* Info add-on / legal / CTA overlay shared by Duet, Shelf and Grid Solo.  U = unit class */
const overlayCss = U => \`
.\${U}{padding:0;position:relative;background:#fff;border-radius:0}
.rm-creative-container{position:relative;width:100%;height:100%;overflow:hidden}
.rm-info-add-on-container{width:100%;position:absolute;top:0;left:0;min-height:36px;display:flex;align-items:center;padding:5px 5px 5px 40px;background:transparent;opacity:.8}
.info-add-on-icon{position:absolute;left:10px;top:12px;width:18px;height:18px;border-radius:50%;background:#f8e5cd;opacity:.8;color:var(--light-icon);display:grid;place-items:center;font-size:11px;font-weight:700;line-height:1}
.info-add-on-text{color:var(--light-text);font-size:12px;max-width:180ch;margin:0;text-align:left;line-height:normal;display:none}
.\${U}.expanded .info-add-on-icon{display:grid;background:var(--light-icon);color:var(--dark-icon)}
.\${U}.expanded .rm-info-add-on-container{background:var(--light-bg)}
.\${U}.expanded .info-add-on-text{display:block}
.\${U}.darkcommand.expanded .rm-info-add-on-container{background:var(--dark-bg)}
.\${U}.darkcommand .info-add-on-text{color:var(--dark-text)}
.\${U}.darkcommand.expanded .info-add-on-icon{background:var(--light-icon);color:var(--dark-icon)}
.rm-legal-text-container{width:100%;position:relative;padding:5px;background:var(--light-bg);opacity:.8;display:flex;align-items:center}
.legal-copy{color:var(--light-text);font-size:12px;max-width:90ch;margin:0;text-align:left;line-height:normal}
.\${U}.darkcommand .rm-legal-text-container{background:var(--dark-bg)}
.\${U}.darkcommand .legal-copy{color:var(--dark-text)}
.rm-call-to-action-container.rm-legal-container{position:absolute;bottom:0;left:0;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}
.rm-call-to-action{width:150px;height:30px;font-size:12px;color:#fff;background:#394f20;border-radius:3px;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;margin:0 auto 5px}
\`;

/* Right-hand product carousel (static first tile) used by Duet / Shelf / CD Spotlight */
const PRODUCT_CSS = \`
.cd-product-zone{position:relative;overflow:hidden;min-width:0;background:#fff;height:100%;display:flex;justify-content:center;align-items:center}
.cd-product-tile{width:100%;height:100%;display:flex;align-items:stretch;justify-content:center;padding:15px;border:solid 1px #e5e7f0}
.cd-product-content{display:flex;width:var(--cd-product-content-width);min-width:0;height:100%;flex-direction:column;align-items:flex-start;padding:12px}
.cd-product-image-placeholder{flex:0 0 auto;width:100%;height:55%;background:#e0e3ea;border-radius:6px;margin-right:16px;margin-bottom:16px}
.cd-product-info{width:100%;flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}
.cd-product-title-placeholder,.cd-product-subtitle-placeholder{height:24px;background:#e5e7f0;border-radius:4px;margin-bottom:6px;width:100%}
.cd-product-rating{font-size:var(--cd-rating-size);color:#666;margin:4px 0 8px;line-height:1}
.cd-product-cta{align-self:flex-start;margin-top:var(--cd-cta-gap-top);padding:var(--cd-cta-pad-y) var(--cd-cta-pad-x);border-radius:6px;border:none;background:#808080;color:#fff;font-size:var(--cd-cta-font-size);font-weight:700;letter-spacing:.4px;line-height:1}
.slick-arrow{position:absolute;top:50%;transform:translateY(-50%);width:var(--cd-arrow-size);height:var(--cd-arrow-size);padding:0;margin:0;border:0;background:transparent;z-index:9;opacity:.8;font-size:0;line-height:0;text-indent:-9999px;overflow:visible}
.slick-arrow::before{content:"";position:absolute;top:50%;left:50%;width:var(--cd-arrow-size);height:var(--cd-arrow-size);transform:translate(-50%,-50%) rotate(45deg)}
.slick-prev{left:var(--cd-arrow-offset)}.slick-prev::before{border-bottom:var(--cd-arrow-stroke) solid #3a3a3a;border-left:var(--cd-arrow-stroke) solid #3a3a3a}
.slick-next{right:var(--cd-arrow-offset)}.slick-next::before{border-top:var(--cd-arrow-stroke) solid #3a3a3a;border-right:var(--cd-arrow-stroke) solid #3a3a3a}
\`;
const TILE = r => \`<div class="cd-product-tile"><div class="cd-product-content"><div class="cd-product-image-placeholder"></div><div class="cd-product-info"><div class="cd-product-title-placeholder"></div><div class="cd-product-subtitle-placeholder"></div><div class="cd-product-rating">\${r}</div><button class="cd-product-cta">ADD TO CART</button></div></div></div>\`;
const FILLERS = n => Array.from({length:n},(_,i)=>\`<div class="product"><div class="product-content"><div class="product-image"></div><div class="product-info"><div class="product-header"></div><div class="rating">\${["★★★★☆","★★★☆☆","★★★★★"][i%3]}</div><div class="product-footer"></div></div></div></div>\`).join("");

/* The ≤540px layout block of the Duet / Shelf pens (U = unit class) */
const gridMobileCss = U => \`
@media (max-width:540px){
.products:not(.mobile-grid-layout) .rm-creative.desktop,.products:not(.mobile-grid-layout) .rm-call-to-action.desktop,.products:not(.mobile-grid-layout) .more-less-control.mobile,.products:not(.mobile-grid-layout) .legal-copy.desktop,.products:not(.mobile-grid-layout) .slick-arrow{display:none!important}
.products:not(.mobile-grid-layout) .\${U}{flex-direction:column;margin-bottom:6px;max-height:revert}
.products:not(.mobile-grid-layout) .rm-container.top,.products:not(.mobile-grid-layout) .rm-container.bottom,.products:not(.mobile-grid-layout) .rm-creative.mobile{width:100%}
.products:not(.mobile-grid-layout) .rm-creative-container{height:revert;margin-bottom:8px}
.products:not(.mobile-grid-layout) .cd-product-zone{height:auto;padding-bottom:10px}
.products:not(.mobile-grid-layout) .cd-product-tile{margin-left:6px;margin-right:6px;box-sizing:border-box;height:auto;padding:15px;border:solid 1px #e5e7f0}
.products:not(.mobile-grid-layout) .cd-product-content{flex-direction:row;width:100%!important}
.products:not(.mobile-grid-layout) .cd-product-image-placeholder{width:30%;flex:revert;min-height:100px;height:auto;margin-right:16px}
.products:not(.mobile-grid-layout) .legal-copy-and-info.mobile{display:block;color:var(--light-text);font-size:10px;max-width:270ch;margin:0;text-align:left;line-height:normal}
.products:not(.mobile-grid-layout) .rm-legal-text-container{padding:0 12px;height:revert;display:flex;flex-direction:column;align-items:flex-start;position:revert}
.products:not(.mobile-grid-layout) .rm-legal-text-container,.products:not(.mobile-grid-layout) .info-add-on-text,.products:not(.mobile-grid-layout) .legal-copy{background:transparent!important;color:#000!important}
.products:not(.mobile-grid-layout) .rm-call-to-action-container.rm-legal-container{position:relative;bottom:auto;left:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}
.products:not(.mobile-grid-layout) .rm-call-to-action{display:flex;position:revert;margin:0 auto;transform:translateY(-10px)}
.products:not(.mobile-grid-layout) .rm-info-container{margin:0 0 8px 0}
.products:not(.mobile-grid-layout) .more-less-control.mobile{display:block!important;color:var(--light-text);font-size:10px;margin:0;text-align:left;line-height:normal;text-decoration:underline}
.products:not(.mobile-grid-layout) .rm-creative.mobile{display:block;object-fit:contain}
.mobile-grid-layout{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.mobile-grid-layout .\${U}{grid-column:1/-1}
.product-grid.layout{width:100%}
.mobile-grid-layout .product{width:100%;min-height:450px;max-height:525px;min-width:183px}
.mobile-grid-layout .rm-creative.mobile-grid{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;max-height:none;object-fit:cover;object-position:center center;pointer-events:none}
.mobile-grid-layout .rm-creative.mobile,.mobile-grid-layout .legal-copy-and-info.mobile,.mobile-grid-layout .more-less-control.mobile{display:none}
.mobile-grid-layout .rm-legal-text-container{position:absolute}
.mobile-grid-layout .legal-copy.desktop{display:block}
.mobile-grid-layout .rm-info-container{margin:0}
.mobile-grid-layout .rm-info-add-on-container{display:flex}
.mobile-grid-layout .\${U}[data-viewport="mobile"] .info-add-on-icon{display:grid;background:var(--dark-icon);color:var(--light-icon)}
.mobile-grid-layout .\${U}.darkcommand[data-viewport="mobile"] .info-add-on-icon{background:var(--light-icon);color:var(--dark-icon)}
.mobile-grid-layout .\${U}.expanded[data-viewport="mobile"] .info-add-on-icon{background:var(--light-icon);color:var(--dark-icon)}
.mobile-grid-layout .rm-call-to-action-container.rm-legal-container .rm-legal-text-container{position:relative;bottom:auto;left:auto;order:2}
.mobile-grid-layout .rm-call-to-action-container.rm-legal-container .rm-call-to-action{position:relative;transform:none;margin:0 auto 5px;order:1}
.mobile-grid-layout .rm-container.left,.mobile-grid-layout .rm-container.right{width:50%;position:relative}
.mobile-grid-layout .rm-call-to-action.mobile{display:none!important}
}\`;
const GRID_DESK_IMG = \`
@media (min-width:540px){
.rm-creative.mobile,.legal-copy-and-info.mobile,.more-less-control.mobile,.rm-call-to-action.mobile{display:none!important}
.rm-creative.desktop{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;max-height:none;object-fit:cover;object-position:center center;pointer-events:none}
.cd-product-tile{border:none}
}
@media (min-width:540px) and (max-width:540px){}
\`;

/* ------------------------------------------------------------------ */
/* Format definitions                                                  */
/* ------------------------------------------------------------------ */
const MOB_GRID = [
  {id:"a",label:"Mobile grid",hint:"Square creative in a 2-col grid (≤540px)"},
  {id:"b",label:"Horizontal mobile",hint:"1280×400 image above CTA / legal (≤540px)"}
];

const GRID_IMP = [
  ["Call to action",".rm-call-to-action"],
  ["Legal text",".rm-legal-text-container"],
  ["Info icon (i)",".info-add-on-icon"],
  ["Info add-on bar",".rm-info-add-on-container",".info-add-on-text"]
];

const gridHtml = (U, left, withRight, rail, tiles=1) => {
  const cta = \`<div class="rm-call-to-action desktop">Shop Now</div>\`;
  const creative = \`<div class="rm-creative-container"><img class="rm-creative desktop mobile-grid" src="\${IMG.gridDesk}" alt=""><img class="rm-creative mobile" src="\${IMG.horiz}" alt=""></div>\`;
  const info = \`<div class="rm-info-container"><div class="rm-info-add-on-container"><span class="info-add-on-icon">i</span><p class="info-add-on-text">\${INFO_TXT}</p></div><div class="rm-call-to-action-container rm-legal-container">\${cta}<div class="rm-legal-text-container"><p class="legal-copy desktop">\${LEGAL_TXT}</p><p class="legal-copy-and-info mobile">\${LEGAL_TXT}</p><p class="more-less-control mobile">See More</p></div></div></div>\`;
  const leftCol = withRight
    ? \`<div class="rm-container left top">\${creative}\${info}</div>\`
    : \`\${creative}\${info}\`;
  const right = withRight
    ? \`<div class="rm-container right bottom"><div class="cd-product-zone">\${tiles>1
        ? \`<div class="cd-track">\${["★★★★★","★★★★☆","★★★★★","★★★☆☆"].slice(0,tiles).map(TILE).join("")}</div><ul class="cd-dots">\${Array.from({length:tiles},(_,i)=>\`<li class="\${i?"":"on"}"></li>\`).join("")}</ul>\`
        : TILE("★★★★★")}<button class="slick-arrow slick-prev slick-disabled">prev</button><button class="slick-arrow slick-next">next</button></div><div class="rm-call-to-action mobile">Shop Now</div></div>\`
    : "";
  const unit = \`<div class="product sponsored \${U}">\${leftCol}\${right}</div>\`;
  const grid = \`<div class="product-grid"><div class="products">\${unit}\${FILLERS(11)}</div></div>\`;
  return rail ? \`<div class="main">\${rail}\${grid}</div>\` : grid;
};
const RAIL = \`<div class="left-hand-rail">\${[3,4,3].map(n=>\`<div class="rail-section"><div class="rail-header"></div>\${Array.from({length:n},()=>'<div class="rail-item"></div>').join("")}</div>\`).join("")}</div>\`;

const iab=(id,name,w,h,src)=>({id,group:"IAB",name,sub:\`Simple image · \${w}×\${h}\`,spec:"",notes:"",mobileOpts:null,
  meta:{kind:"simple",unit:".iab",zone:".iab",mobMax:0,imp:[]},
  css:\`body{display:block;padding:24px}.iab{position:relative;width:\${w}px;height:\${h}px;margin:0 auto;overflow:hidden;background:#000}.iab img{display:block;width:100%;height:100%;object-fit:cover}\`,
  html:\`<div class="iab" data-type="IAB"><img src="\${src}" alt=""></div>\`});
const FORMATS = [
 /* ---------------- CD Spotlight ---------------- */
 {
  id:"cd-spotlight", group:"Evolved Onsite Display", name:"CD Spotlight", sub:"Commerce Display · branding + product carousel",
  spec:"Below the format (left or right), or top right of the branding zone. Mobile horizontal: top right of the branding zone.",
  notes:"We might need to reassess CTA and legal placements. Dark/light mode should follow — is there a generic UI label, or is it designed how we want?",
  mobileOpts:null,
  meta:{kind:"cds",unit:".rm-format",zone:".cd-branding-zone",mobMax:640,
    imp:[["CTA","button.cd-footer-cta"],["Legal text",".cd-footer-legal"],["Legal + See more (mobile)",".cd-mobile-legal-more"],
         ["Info icon (i)",".info-add-on-icon"],["Info add-on bar",".rm-info-add-on-container",".info-add-on-text"],
         ["Product tile",".cd-product-tile"],["Carousel arrow",".slick-arrow"]]},
  css:\`
:root{--cd-creative-height:200px;--cd-footer-height:30px;--cd-desktop-render-w:1400px;--cd-desktop-render-h:450px;--cd-border-desktop:1px;--cd-border-mobile:2px;--cd-arrow-offset:16px;--cd-product-content-width:80%;--cd-prod-img:150px;--cd-cta-pad-y:8px;--cd-cta-pad-x:12px}
body{display:block;padding:0}
.rm-format.cd-spotlight{position:relative;display:flex;flex-wrap:wrap;width:100%;max-width:1400px;margin:40px auto;background:transparent;overflow:visible}
.rm-format.cd-spotlight::before{content:"";position:absolute;top:0;left:0;right:0;height:var(--cd-creative-height);border:var(--cd-border-desktop) solid #ccc;pointer-events:none}
.cd-branding-zone,.cd-product-zone{flex:0 0 50%;max-width:50%;background:#fff;height:var(--cd-creative-height)}
.cd-footer-bar,.cd-mobile-legal-more{flex:0 0 100%;max-width:100%}
.cd-mobile-legal-more{display:none}
.cd-branding-zone{position:relative;display:block;text-decoration:none;color:inherit}
.cd-branding-image-wrapper,.cd-desktop-placeholder{position:relative;width:100%;height:100%;overflow:hidden}
.cd-background-desktop{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:var(--cd-desktop-render-w);height:var(--cd-desktop-render-h);max-width:none;max-height:none;object-fit:cover;object-position:center center;pointer-events:none}
.cd-background-mobile{display:none}
.rm-info-add-on-container{position:absolute;top:0;left:0;padding:6px 10px 6px 36px;display:flex;align-items:center;gap:8px;min-height:32px;background:transparent;opacity:.8;width:100%}
.info-add-on-icon{position:absolute;left:10px;width:18px;height:18px;border-radius:999px;background:#f8e5cd;color:var(--light-icon);display:grid;place-items:center;font-size:11px;font-weight:700;line-height:1}
.info-add-on-text{display:none;color:#000;font-size:12px;line-height:1.3;margin:0;max-width:180ch}
.rm-info-add-on-container.hovered{background:var(--light-bg)}
.rm-info-add-on-container.hovered .info-add-on-text{display:block}
.cd-spotlight.darkcommand .rm-info-add-on-container.hovered{background:var(--dark-bg)}
.cd-spotlight.darkcommand .info-add-on-text{color:#fff}
.cd-spotlight.darkcommand .info-add-on-icon{background:#fff;color:var(--light-icon)}
\${PRODUCT_CSS}
.cd-product-tile{padding:10px 20px;align-items:center}
.cd-product-content{align-items:center;flex-direction:row;height:auto}
.cd-product-image-placeholder{flex:0 0 var(--cd-prod-img);width:var(--cd-prod-img);height:var(--cd-prod-img);margin:0 16px 0 0}
.cd-product-title-placeholder,.cd-product-subtitle-placeholder{height:12px}
.cd-product-title-placeholder{width:60%}.cd-product-subtitle-placeholder{width:50%}
.cd-footer-bar{height:var(--cd-footer-height);display:flex;align-items:center;justify-content:flex-start;gap:10px;margin-top:10px;background:transparent}
.cd-footer-cta{width:150px;height:30px;margin:0;padding:0 12px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border:none;background:#000;color:#fff;font-size:12px;line-height:1;flex:0 0 auto}
.cd-footer-legal{margin:0;line-height:1.2;font-size:12px;color:#000;flex:1 1 auto;min-width:0}
.cd-spotlight.darkcommand .cd-footer-legal{color:#000}
@media (max-width:768px){.cd-mobile-legal-more{display:block}.cd-footer-legal{display:none}
.cd-mobile-legal-more-text{margin:0;font-size:12px;line-height:1.2}
.cd-mobile-toggle{display:inline-block;margin-top:2px;padding:0;border:0;background:transparent;color:inherit;text-decoration:underline;font-size:12px;line-height:1.2}}
@media (min-width:1152px){:root{--cd-desktop-render-w:1400px;--cd-desktop-render-h:450px}}
@media (max-width:1151px) and (min-width:769px){:root{--cd-desktop-render-w:933.33px;--cd-desktop-render-h:300px;--cd-product-content-width:92%;--cd-arrow-size:18px;--cd-arrow-offset:12px;--cd-prod-img:140px}}
@media (max-width:768px) and (min-width:641px){
.rm-format.cd-spotlight{flex-direction:column;flex-wrap:nowrap!important;max-width:none;background:#fff}
.rm-format.cd-spotlight::before{display:none}
.cd-branding-zone{order:1}.cd-mobile-legal-more{order:2}.cd-product-zone{order:3}.cd-footer-bar{order:4}
.cd-branding-zone,.cd-product-zone,.cd-footer-bar,.cd-mobile-legal-more{flex:0 0 auto!important;max-width:100%!important;width:100%!important}
.cd-branding-zone{height:var(--cd-creative-height)!important}
.cd-mobile-legal-more{margin:0;padding:8px 10px 4px;background:rgba(255,255,255,.8);color:#000}
.cd-product-zone{height:auto!important;padding:10px;overflow:hidden}
.cd-product-tile{height:auto!important}
.cd-footer-bar{margin:0;padding:10px;height:auto;display:flex;justify-content:center;align-items:center}
}
@media (max-width:640px){
:root{--cd-prod-img:110px;--cd-cta-font-size:10px;--cd-cta-pad-y:6px;--cd-cta-pad-x:10px;--cd-cta-gap-top:6px}
.rm-format.cd-spotlight{flex-direction:column;flex-wrap:nowrap!important;max-width:none;border:var(--cd-border-mobile) solid #ccc;background:#fff}
.rm-format.cd-spotlight::before{display:none}
.cd-branding-zone{order:1}.cd-mobile-legal-more{order:2}.cd-product-zone{order:3}.cd-footer-bar{order:4}
.cd-branding-zone,.cd-product-zone,.cd-footer-bar,.cd-mobile-legal-more{flex:0 0 auto;max-width:100%;width:100%;height:auto}
.cd-background-desktop{display:none}
.cd-background-mobile{display:block;position:static;transform:none;width:100%;height:auto;object-fit:contain}
.cd-mobile-legal-more{margin:0;padding:8px 10px 4px;background:rgba(255,255,255,.8);color:#000}
.cd-spotlight.darkcommand .cd-mobile-legal-more{background:rgba(106,106,106,.8);color:#fff}
.cd-product-zone{padding:10px 10px 20px;background:#fff;overflow:hidden}
.cd-product-tile{height:auto;padding:0;align-items:flex-start}
.cd-product-content{width:100%;margin:0;padding:10px;border:1px solid #e5e7eb;background:#fff}
.cd-product-zone .slick-arrow{display:none!important}
.cd-footer-bar{height:auto;margin:0;padding-bottom:10px;display:flex;justify-content:center;gap:0}
.cd-footer-cta{width:150px;height:30px}
}\`,
  html:\`<div class="rm-format cd-spotlight" data-type="CDS">
<a href="#" class="cd-branding-zone"><div class="cd-branding-image-wrapper"><div class="cd-desktop-placeholder">
<img class="cd-background-desktop" src="\${IMG.spotDesk}" alt=""><img class="cd-background-mobile" src="\${IMG.spotMob}" alt=""></div>
<div class="rm-info-add-on-container"><span class="info-add-on-icon">i</span><p class="info-add-on-text">\${INFO_TXT}</p></div></div></a>
<div class="cd-product-zone">\${TILE("★★★★★")}<button class="slick-arrow slick-prev">prev</button><button class="slick-arrow slick-next">next</button></div>
<div class="cd-footer-bar"><button class="cd-footer-cta">Call to action</button><p class="cd-footer-legal">\${LEGAL_TXT}</p></div>
<div class="cd-mobile-legal-more"><p class="cd-mobile-legal-more-text">\${LEGAL_TXT}</p><button class="cd-mobile-toggle" type="button">See more</button></div></div>\`
 },

 /* ---------------- CD Grid Shelf ---------------- */
 {
  id:"cd-shelf", group:"Evolved Onsite Display", name:"CD Grid Shelf", sub:"Commerce Display · full-width shelf in a grid",
  spec:"Top right of the branding zone.", notes:"",
  mobileOpts:MOB_GRID,
  meta:{kind:"grid",unit:".cdgs",zone:".rm-creative-container",mobMax:540,vpMax:539,imp:GRID_IMP},
  css:\`body{display:flex;flex-direction:column;align-items:center;justify-content:center}
.product-grid{width:95%}
\${GRID_FILLER_CSS}
.cdgs{width:100%;border:2px solid gray}
.product{width:calc(25% - 12px)}
@media (max-width:1340px){.product{width:calc(33.33% - 10px)}}
@media (min-width:992px) and (max-width:1340px){.product{min-height:300px}.product-image{height:50%}}
@media (max-width:992px){.product{width:calc(33.33% - 10px)}}
@media (max-width:768px){.product{width:calc(50% - 10px)}}
@media (min-width:641px) and (max-width:767px){.product{min-height:510px}}
@media (min-width:541px) and (max-width:640px){.product{min-height:370px;max-height:390px}}
@media (max-width:540px){.product{width:100%;min-height:250px;max-height:350px;gap:0}.product-content{flex-direction:row}.product-image{width:45%}.product-info{height:100%;justify-content:center}}
@media (max-width:440px){.product{max-height:190px;min-height:revert}.product-image{height:80%}}
.cdgs.product{width:100%}
\${overlayCss("cdgs")}
.rm-container.left{width:25%;position:relative}.rm-container.right{width:75%}
\${PRODUCT_CSS}
.cd-product-tile{padding:15px}
.cd-product-content{padding:12px}
@media (min-width:540px) and (max-width:1340px){.rm-container.left{width:33.33%}.rm-container.right{width:66.67%}.cd-product-image-placeholder{height:50%}}
@media (min-width:540px) and (max-width:767px){.rm-container.left,.rm-container.right{width:50%}}
/* Carousel mirrors the pen's Slick config: 3 tiles >1341px, 2 tiles ≤1341px, 1 tile ≤768px, 1 + peek and dots on mobile */
.slick-disabled{opacity:.25}
.cd-track{display:flex;width:100%;height:100%}
.cd-track .cd-product-tile{flex:0 0 33.3333%;width:33.3333%;min-width:0}
.cd-dots{display:none;list-style:none;justify-content:center;gap:6px;position:absolute;left:0;right:0;bottom:0;padding:0 0 4px}
.cd-dots li{width:8px;height:8px;border-radius:50%;background:#000;opacity:.3}
.cd-dots li.on{opacity:.9}
@media (max-width:1341px){.cd-track .cd-product-tile{flex-basis:50%;width:50%}}
@media (max-width:768px){.cd-track .cd-product-tile{flex-basis:100%;width:100%}}
@media (max-width:540px){
.products:not(.mobile-grid-layout) .cd-track .cd-product-tile{flex-basis:80%;width:80%}
.products:not(.mobile-grid-layout) .cd-product-zone{padding-bottom:26px}
.products:not(.mobile-grid-layout) .cd-dots{display:flex}
}
\${GRID_DESK_IMG}
\${gridMobileCss("cdgs")}\`,
  html:gridHtml("cdgs",true,true,"",4)
 },

 /* ---------------- Grid Duet ---------------- */
 {
  id:"grid-duet", group:"Evolved Onsite Display", name:"CD Grid Duet", sub:"Commerce Display",
  spec:"Top right of the branding zone.",
  notes:"Built from the pen titled “Commerce Display Grid Duet” (called “BD Grid Duet” in the placement list).",
  mobileOpts:MOB_GRID,
  meta:{kind:"grid",unit:".cdgd",zone:".rm-creative-container",mobMax:540,vpMax:539,imp:GRID_IMP},
  css:\`body{display:flex;flex-direction:column;align-items:center;justify-content:center}
.product-grid{width:95%}
\${GRID_FILLER_CSS}
@media (min-width:1341px){.product{width:calc(25% - 12px);flex:0 0 calc(25% - 12px)}.cdgd{width:calc(50% - 6px);flex:0 0 calc(50% - 6px)}}
@media (max-width:1340px){.product{width:calc(33.33% - 12px);flex:0 0 calc(33.33% - 12px)}.cdgd{width:calc(66.66% - 6px);flex:0 0 calc(66.66% - 6px)}}
@media (max-width:992px){.product{width:calc(33.33% - 10px);flex:0 0 calc(33.33% - 10px)}.cdgd{width:calc(66.66% - 5px);flex:0 0 calc(66.66% - 5px)}}
@media (max-width:768px){.product{width:calc(50% - 10px);flex:0 0 calc(50% - 10px)}.cdgd{width:100%;flex:0 0 100%}}
@media (min-width:641px) and (max-width:767px){.product{min-height:510px}}
@media (min-width:541px) and (max-width:640px){.product{min-height:370px;max-height:390px}}
@media (max-width:540px){.product{width:100%;flex:0 0 100%;min-height:250px;max-height:350px;gap:0}.product-content{flex-direction:row}.product-image{width:45%}.product-info{height:100%;justify-content:center}}
@media (max-width:440px){.product{max-height:190px;min-height:revert}.product-image{height:80%}}
\${overlayCss("cdgd")}
.rm-container.left{width:50%;position:relative}.rm-container.right{width:50%}
\${PRODUCT_CSS}
\${GRID_DESK_IMG}
\${gridMobileCss("cdgd")}\`,
  html:gridHtml("cdgd",true,true,"")
 },

 /* ---------------- BD Grid Solo ---------------- */
 {
  id:"bd-grid-solo", group:"Evolved Onsite Display", name:"BD Grid Solo", sub:"Branding Display · single card in a grid",
  spec:"Top right of the branding zone.", notes:"",
  mobileOpts:[{id:"a",label:"Medium rectangle",hint:"1200×1000 creative in a 2-col grid (≤540px)"},{id:"b",label:"Horizontal mobile",hint:"1280×400 image above CTA / legal (≤540px)"}],
  meta:{kind:"grid",unit:".bd-grid-solo",zone:".rm-creative-container",mobMax:540,vpMax:540,imp:GRID_IMP},
  css:\`body{display:block}
.main{display:flex}
.left-hand-rail{width:100%;max-width:200px;margin-right:24px;padding:12px;display:flex;flex-direction:column;gap:16px}
.rail-section{display:flex;flex-direction:column;gap:16px}
.rail-header{height:24px;width:70%;background:#e0e0e0;border-radius:4px}
.rail-item{height:24px;width:60%;background:#d6d2e9;border-radius:4px}
.product-grid{min-width:328px}
\${GRID_FILLER_CSS}
.product{width:calc(25% - 12px)}
@media (max-width:1340px){.product{width:calc(33.33% - 10px)}}
@media (max-width:992px){.product{width:calc(50% - 10px)}}
@media (max-width:540px){.product{width:100%;max-height:350px;min-height:250px;gap:0}.product-content{flex-direction:row}.product-image{width:45%}.product-info{height:100%;justify-content:center}}
@media (max-width:440px){.product{max-height:190px;min-height:160px}.product-image{height:80%}}
\${overlayCss("bd-grid-solo")}
.bd-grid-solo{background:var(--bg-card)}
@media (min-width:541px){
.rm-creative.mobile,.legal-copy-and-info.mobile,.more-less-control.mobile{display:none}
.rm-creative.desktop{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;max-height:none;object-fit:cover;object-position:center center;pointer-events:none}
}
@media (max-width:540px){
.rm-creative.mobile-grid,.rm-creative.desktop,.legal-copy-and-info.mobile,.more-less-control.mobile{display:none}
.products{padding:8px}
.product.bd-grid-solo{min-height:revert;max-height:revert;flex-direction:column}
.legal-copy-and-info.mobile{display:block;color:var(--light-text);font-size:10px;max-width:270ch;margin:0;text-align:left;line-height:normal}
.rm-creative.mobile{display:block;object-fit:contain;width:100%}
.rm-legal-text-container{height:revert;display:flex;flex-direction:column;align-items:flex-start}
.rm-call-to-action,.rm-legal-text-container{position:revert}
.rm-info-container{margin:8px 0}
.rm-call-to-action-container.rm-legal-container{position:relative;bottom:auto;left:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}
.rm-call-to-action{transform:revert;margin-right:10px;display:flex;margin-top:8px;position:revert}
.more-less-control.mobile{color:var(--light-text);font-size:10px;margin:0;text-align:left;line-height:normal;text-decoration:underline;display:block}
.mobile-grid-layout{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.product-grid.layout{width:100%}
.mobile-grid-layout .product{width:100%;min-height:450px;max-height:525px;min-width:183px}
.mobile-grid-layout .rm-creative.mobile-grid{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;max-height:none;object-fit:cover;object-position:center center;pointer-events:none}
.mobile-grid-layout .rm-creative.mobile,.mobile-grid-layout .legal-copy-and-info.mobile,.mobile-grid-layout .more-less-control.mobile{display:none}
.mobile-grid-layout .rm-legal-text-container{position:absolute}
.mobile-grid-layout .legal-copy.desktop{display:block}
.mobile-grid-layout .rm-info-container{margin:0}
.mobile-grid-layout .rm-info-add-on-container{display:flex}
.mobile-grid-layout .bd-grid-solo[data-viewport="mobile"] .info-add-on-icon{display:grid;background:var(--dark-icon);color:var(--light-icon)}
.mobile-grid-layout .bd-grid-solo.expanded[data-viewport="mobile"] .info-add-on-icon{background:var(--light-icon);color:var(--dark-icon)}
.mobile-grid-layout .rm-call-to-action-container.rm-legal-container{position:absolute;bottom:0;left:0;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}
.mobile-grid-layout .rm-call-to-action-container.rm-legal-container .rm-legal-text-container{position:relative;bottom:auto;left:auto;order:2}
.mobile-grid-layout .rm-call-to-action-container.rm-legal-container .rm-call-to-action{position:relative;transform:none;margin:0 auto 5px;order:1}
}
@media (min-width:541px) and (max-width:639px){.left-hand-rail{display:block;margin-right:0;padding:0;max-width:87px}.rail-header{margin-top:10px}.product-grid{max-width:85%}}
@media (max-width:540px){.left-hand-rail{display:none}}\`,
  html:gridHtml("bd-grid-solo",false,false,RAIL)
 },

 /* ---------------- BD Spotlight Solo ---------------- */
 {
  id:"bd-spotlight-solo", group:"Evolved Onsite Display", name:"BD Spotlight Solo", sub:"Branding Display · banner with CTA + legal footer",
  spec:"Below the branding zone (left or right), or top right of the branding zone.", notes:"",
  mobileOpts:[{id:"a",label:"Horizontal mobile",hint:"1280×400 (≤575px)"},{id:"b",label:"Medium rectangle",hint:"1200×1000 (≤575px)"}],
  meta:{kind:"bds",unit:".bd-solo",zone:".bd-creative",mobMax:575,
    mobSrc:{a:IMG.spotMob,b:IMG.spotMR},
    imp:[["CTA",".bd-cta"],["Legal text",".bd-legal-desktop"],["Legal text (mobile)",".bd-mobile-text"],["See more toggle",".bd-mobile-toggle"],
         ["Info icon (i)",".bd-info-icon"],["Info add-on bar",".bd-info",".bd-info-text"]]},
  css:\`:root{--bd-max-w:1400px;--bd-desktop-h:200px;--bd-footer-h:46px;--bd-cta-w:150px;--bd-cta-h:30px;--bd-footer-left-pad:30px;--bd-footer-gap:10px;--bd-info-bg-light:rgba(255,255,255,.8);--bd-info-bg-dark:rgba(106,106,106,.8);--bd-text-light:#000;--bd-text-dark:#fff;--bd-icon-light:#6a6a6a;--bd-icon-dark:#fff}
body{margin:0;padding:24px;margin-top:2%}
.bd-solo{width:100%;max-width:var(--bd-max-w);margin:0 auto;background:transparent}
.bd-branding{display:block;text-decoration:none;color:inherit}
.bd-creative{position:relative;width:100%;max-width:var(--bd-max-w);height:var(--bd-desktop-h);overflow:hidden;background:#fff}
.bd-img-desktop{position:absolute;top:50%;left:50%;width:var(--bd-max-w);height:var(--bd-desktop-h);transform:translate(-50%,-50%);object-fit:cover;object-position:center center;pointer-events:none}
.bd-img-mobile{display:none;width:100%;height:auto;object-fit:contain;pointer-events:none}
.bd-info{position:absolute;top:0;left:0;width:100%;min-height:32px;padding:6px 10px 6px 36px;background:transparent;display:block}
.bd-info-icon{position:absolute;top:8px;left:10px;width:18px;height:18px;border-radius:999px;display:grid;place-items:center;font-size:11px;font-weight:700;line-height:1;background:#f8e5cd;color:var(--bd-icon-light)}
.bd-info-text{margin:0;display:none;font-size:12px;line-height:1.3;color:var(--bd-text-light);max-width:180ch}
.bd-info.hovered{background:var(--bd-info-bg-light)}
.bd-info.hovered .bd-info-text{display:block}
.bd-solo.is-dark .bd-info-icon{background:var(--bd-icon-dark);color:var(--bd-icon-light)}
.bd-solo.is-dark .bd-info.hovered{background:var(--bd-info-bg-dark)}
.bd-solo.is-dark .bd-info-text{color:var(--bd-text-dark)}
.bd-footer{height:var(--bd-footer-h);background:transparent;display:flex;align-items:center}
.bd-footer-inner{width:100%;max-width:var(--bd-max-w);margin:0 auto;padding-left:var(--bd-footer-left-pad);display:flex;align-items:center;gap:var(--bd-footer-gap)}
.bd-cta{width:var(--bd-cta-w);height:var(--bd-cta-h);border:0;border-radius:2px;background:#000;color:#fff;font-size:12px;font-weight:400}
.bd-legal{margin:0;font-size:12px;line-height:1.2;color:#000}
.bd-mobile-legal{display:none}
.bd-mobile-text{margin:0;font-size:12px;line-height:1.2}
.bd-mobile-toggle{display:inline-block;margin-top:2px;padding:0;border:0;background:transparent;color:inherit;text-decoration:underline;font-size:12px;line-height:1.2}
@media (max-width:575px){
.bd-creative{height:auto;overflow:visible}
.bd-img-desktop{display:none}
.bd-img-mobile{display:block;width:100%;height:auto;object-fit:contain}
.bd-legal-desktop{display:none}
.bd-mobile-legal{display:block;background:#fff}
.bd-footer{height:var(--bd-footer-h);background:#fff}
.bd-footer-inner{padding-left:12px;padding-right:12px;justify-content:flex-start;align-items:center;gap:var(--bd-footer-gap)}
.bd-mobile-legal{margin-top:calc(var(--bd-footer-h) * -1);padding:8px 12px 10px}
.bd-mobile-text,.bd-mobile-toggle{margin-left:calc(var(--bd-cta-w) + var(--bd-footer-gap));max-width:calc(100% - (var(--bd-cta-w) + var(--bd-footer-gap)))}
}\`,
  html:\`<div class="bd-solo" data-type="BD_SOLO"><a class="bd-branding" href="#"><div class="bd-creative">
<img class="bd-img bd-img-desktop" src="\${IMG.spotDesk}" alt=""><img class="bd-img bd-img-mobile" src="\${IMG.spotMob}" alt="">
<div class="bd-info"><span class="bd-info-icon">i</span><p class="bd-info-text">\${INFO_TXT}</p></div></div></a>
<div class="bd-footer"><div class="bd-footer-inner"><button class="bd-cta" type="button">Call to action</button><p class="bd-legal bd-legal-desktop">\${LEGAL_TXT}</p></div></div>
<div class="bd-mobile-legal"><p class="bd-mobile-text">\${LEGAL_TXT}</p><button class="bd-mobile-toggle" type="button">See more</button></div></div>\`
 },

 /* ======================= Additional formats ======================= */

 /* ---------------- Flagship (desktop) ---------------- */
 {
  id:"flagship", group:"Legacy Onsite Display", name:"Flagship", sub:"Desktop branding image + 1-SKU carousel (mobile = Branded Header)",
  notes:"", mobileOpts:null,
  meta:{kind:"simple",unit:".rm-format",zone:".rm-desktop-creative",mobMax:767,
    imp:[["Sponsored tag",".sponsored"],["Product tile",".product-tile"]]},
  css:\`body{display:block;padding:0 8px}
.rm-format[data-type="FS"]{position:relative;height:200px;overflow:hidden;background:#fff;max-width:1400px;min-width:729px;margin:40px auto 0;display:flex;justify-content:space-between;border:1px solid #000}
.rm-desktop-creative{position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;flex-shrink:0}
.rm-desktopImage{object-fit:none;width:100%;max-width:576px;height:200px;display:block}
.product-tile{display:flex;align-items:center;justify-content:center;height:200px;padding:10px 20px;margin:auto}
.product-image-wrapper{flex-shrink:0;width:180px;height:100%;display:flex;align-items:center;justify-content:center;margin-right:20px;margin-bottom:70px}
.product-image-wrapper .ph{width:100%;height:100%;background:#e0e3ea;border-radius:8px}
.product-info{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-bottom:30px}
.product-name{font-size:15px;font-weight:500;margin:0 0 6px;color:#111;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;letter-spacing:.5px}
.product-rating{font-size:14px;color:#90432a;margin:0 0 6px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}
.product-price{font-size:15px;font-weight:600;color:#000;margin:2px 0 0;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}
.slick-carousel{width:calc(100% - 576px);padding:15px;border-radius:5px;background:#fff;position:relative;display:flex;align-items:center;justify-content:center}
.sponsored{position:absolute;bottom:5px;right:10px;font-size:10px;line-height:130%;text-align:right;letter-spacing:.5px;font-weight:400;font-family:sans-serif}
@media (min-width:1153px){.rm-desktop-creative{width:576px;max-width:576px}.rm-product-container{flex-grow:1;height:200px}}
@media (max-width:1152px) and (min-width:768px){.rm-desktop-creative,.rm-product-container{width:50%;max-width:50%}}
@media (max-width:767px){.rm-format[data-type="FS"]{width:728px;margin:40px auto 0}.rm-desktop-creative{width:384px;max-width:384px}.rm-desktopImage{width:384px;height:200px}.rm-product-container{width:344px;flex-grow:0}}\`,
  html:\`<div class="rm-format" data-type="FS" role="region" aria-label="advertisement"><div class="rm-desktop-creative"><div class="rm-desktopImage-container"><img class="rm-desktopImage" src="/images/retailer-integration/docs/ai-label-placement/src-70eba14b.png" alt=""></div></div>
<div class="rm-product-container slick-carousel"><div class="product-tile"><div class="product-image-wrapper"><div class="ph"></div></div><div class="product-info"><div class="product-name">Elegant Watch</div><div class="product-rating">★★★★☆</div><div class="product-price">$49.99</div></div></div></div>
<div class="sponsored">Sponsored</div></div>\`
 },

 /* ---------------- Showcase ---------------- */
 {
  id:"showcase", group:"Legacy Onsite Display", name:"Showcase", sub:"Branding column with CTA + legal, 3 product tiles",
  notes:"", mobileOpts:null,
  meta:{kind:"simple",unit:".rm-format",zone:".rm-desktop-creative",mobMax:767,
    imp:[["CTA",".rm-option"],["Legal text",".rm-option-legal"],["Product tile",".product-tile"]]},
  css:\`body{display:block;padding:0 8px}
.rm-format[data-type="SC"]{display:flex;flex-direction:column;position:relative;max-width:1400px;margin:5% auto 0;border:1px solid #ddd;overflow:hidden;min-height:350px;height:clamp(300px,40vw,520px)}
.rm-main-container{display:flex;flex-direction:row;width:100%;min-width:720px;min-height:350px;height:100%}
.rm-desktop-creative{position:relative;width:25%;background-color:lightblue;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100%;box-sizing:border-box;overflow:hidden;padding:0}
.rm-desktop-creative img{width:100%;height:100%;max-width:310px;max-height:500px;object-fit:none;object-position:center;display:block}
.rm-option-container{position:absolute;bottom:7px;width:100%;text-align:center;font-family:Roboto,Arial,Helvetica,sans-serif;display:flex;flex-direction:column;align-items:center;padding:0 10px}
.rm-option{width:150px;height:30px;font-size:12px;display:flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;background-color:#FF6F00;color:#001F4D;border:none;border-radius:20px;margin-bottom:5px}
.rm-option-legal{font-size:10px;line-height:1.2;color:#FF6F00;padding:0 10px;text-align:center;max-width:calc(95% - 20px)}
.rm-product-container{width:75%;display:flex;justify-content:space-between;align-items:stretch;background-color:#fff;height:100%}
.product-tile{display:flex;flex-direction:column;justify-content:center;align-items:center;width:32%;min-width:180px;text-align:center;min-height:200px;border-right:1px solid #ddd}
.product-tile:last-child{border-right:none}
.rm-product-wrapper{display:flex;flex-direction:column;align-items:center}
.rm-product-image-wrapper{width:100%;height:150px;margin-bottom:15px;max-width:230px}
.rm-product-image-wrapper .ph{width:100%;height:100%;background:#e0e3ea;border-radius:8px}
.rm-brand-name{font-size:16px;margin-bottom:5px;font-family:Montserrat,Verdana,Arial,sans-serif;font-weight:700}
.rm-star-rating{font-size:12px;color:#e87211;margin-bottom:5px}
.rm-product-name{text-transform:capitalize;font-size:13px;color:#353c3e;font-family:Montserrat,Verdana,Arial,sans-serif;margin-bottom:5px;letter-spacing:.4px}
.rm-price{color:#000;font-weight:500;font-size:12px;font-family:Montserrat,Verdana,Arial,sans-serif;letter-spacing:.3px;margin-bottom:12px}
.rm-add-to-cart{width:110px;height:30px;background:transparent;color:#A52A2A;border:1px solid #A52A2A;border-radius:20px;font-family:Roboto,sans-serif;font-size:12px;font-weight:bold;padding:5px 15px}\`,
  html:\`<div class="rm-format" data-type="SC" role="region" aria-label="advertisement"><div class="rm-main-container"><div class="rm-desktop-creative"><img src="/images/retailer-integration/docs/ai-label-placement/tall-02f8132b.png" alt="">
<div class="rm-option-container"><a href="#" class="rm-option">Shop Now</a><div class="rm-option-legal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel metus erat. Fusce in.</div></div></div>
<div class="rm-product-container">\${[["Panerai","Luminor Marina","$7,549.99"],["Rolex","Submariner","$9,999.99"],["Omega","Seamaster","$6,299.99"]].map(p=>\`<div class="product-tile"><div class="rm-product-wrapper"><div class="rm-product-image-wrapper"><div class="ph"></div></div><div class="rm-product-info-wrapper"><div class="rm-brand-name">\${p[0]}</div><div class="rm-product-name">\${p[1]}</div><div class="rm-star-rating">★★★★☆</div><div class="rm-price">\${p[2]}</div><button class="rm-add-to-cart">Add to Cart</button></div></div></div>\`).join("")}</div></div></div>\`
 },

 /* ---------------- Butterfly ---------------- */
 {
  id:"butterfly", group:"Legacy Onsite Display", name:"Butterfly", sub:"Branding half with SKU buttons + CTA, product half (mobile = Interactive Header)",
  notes:"The branding half has a defined safety zone (shown as a dashed box).", mobileOpts:null, hasSafe:true,
  meta:{kind:"simple",unit:".rm-format",zone:".rm-desktop-creative",mobMax:480,
    imp:[["Safe zone",".rm-safety-zone"],["Product buttons",".rm-selectorButton"],["CTA",".rm-cta-button"]]},
  css:\`body{display:block;padding:0 8px}
.rm-format[data-type="BF"]{display:flex;flex-direction:row;max-width:680px;margin:30px auto;border:1px solid #ddd;min-height:420px;min-width:360px;box-sizing:border-box;height:clamp(300px,35vw,450px);font-family:sans-serif}
.rm-desktop-creative{width:50%;height:100%;position:relative;background-image:url('/images/retailer-integration/docs/ai-label-placement/inline-691d9faa.png');background-position:center top;background-repeat:no-repeat;background-color:#cce3f6;display:flex;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden}
.rm-safety-zone{width:180px;height:140px;position:absolute;top:10%;left:50%;transform:translateX(-50%);background:transparent;z-index:2}
.rm-desktop-selectorButtons{position:absolute;display:flex;flex-direction:column;gap:10px;left:50%;z-index:2;top:calc(50% + 50px);transform:translate(-50%,-50%)}
.rm-selectorButton{width:150px;height:30px;font-size:12px;background:transparent;color:#fff;border:2px solid #fff;border-radius:20px;text-align:center;line-height:26px;padding:0}
.rm-selectorButton.active{background:#fff;color:#605d83}
.rm-cta-button{width:150px;height:30px;font-size:12px;text-align:center;line-height:30px;background:#605d83;color:#fff;text-decoration:none;border-radius:20px;margin-bottom:7px;position:absolute;bottom:0;left:50%;transform:translateX(-50%);z-index:2}
.rm-product-container{width:50%;height:100%;background:#fff;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box}
.rm-product-wrapper{display:flex;flex-direction:column;align-items:center;text-align:center}
.rm-product-image-wrapper .ph{width:200px;max-width:100%;height:200px;margin:0 auto 15px;background:#e0e3ea;border-radius:15px}
.rm-brand-name{font-size:20px;font-weight:bold;color:#1f2336;margin-bottom:10px}
.rm-product-name{font-size:16px;color:#353c3e;margin-bottom:10px}
.rm-star-rating{font-size:14px;color:#b44b3f;margin-bottom:10px}
.rm-price{font-size:14px;font-weight:bold;margin-bottom:10px}
.rm-add-to-cart{width:110px;height:30px;background:transparent;color:#605d83;border:2px solid #605d83;border-radius:20px;font-size:12px;text-align:center;line-height:24px;padding:0}\`,
  html:\`<div class="rm-format" data-type="BF" role="region" aria-label="advertisement"><div class="rm-desktop-creative"><div class="rm-safety-zone safe-zone"></div>
<div class="rm-desktop-selectorButtons">\${[1,2,3,4,5].map(i=>\`<button class="rm-selectorButton\${i===1?" active":""}">Product \${i}</button>\`).join("")}</div><a href="#" class="rm-cta-button">Shop Now</a></div>
<div class="rm-product-container"><div class="rm-product-wrapper"><div class="rm-product-image-wrapper"><div class="ph"></div></div><div class="rm-product-info-wrapper"><div class="rm-brand-name">On</div><div class="rm-product-name">Cloudmonster 2</div><div class="rm-star-rating">★★★★☆</div><div class="rm-price">$259.99</div><button class="rm-add-to-cart">Add to Cart</button></div></div></div></div>\`
 },

 /* ---------------- Branded Header (from the docs spec; mobile version of Flagship / Showcase) ---------------- */
 {
  id:"branded-header", group:"Legacy Onsite Display", name:"Branded Header", sub:"Mobile: 1242×300 branding zone + carousel of up to 5 SKUs (from the spec)",
  notes:"Built from the written spec on the docs page (no CodePen): 2px border, 10px padding, 80%/20% peek, 10px dots.", mobileOpts:null,
  meta:{kind:"simple",unit:".bh",zone:".bh-brand",mobMax:9999,
    imp:[["Product card",".bh-card"],["Carousel dots",".bh-dots li"]]},
  css:\`body{display:block;padding:16px}
.bh{width:100%;border:2px solid #8a8f9c;background:#fff}
.bh-brand{position:relative;aspect-ratio:1242/300;overflow:hidden;background:#ccd}
.bh-brand img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.bh-products{padding:10px;overflow:hidden}
.bh-track{display:flex}
.bh-tile{flex:0 0 80%;padding-right:10px}
.bh-card{border:1px solid #e5e7eb;border-radius:6px;padding:10px;display:flex;gap:12px;align-items:center;height:100%}
.bh-img{flex:0 0 30%;aspect-ratio:1;background:#e0e3ea;border-radius:6px}
.bh-info{flex:1;min-width:0}
.bh-bar{height:12px;background:#e5e7f0;border-radius:4px;margin-bottom:6px}
.bh-btn{display:inline-block;margin-top:6px;padding:7px 10px;border-radius:6px;background:#808080;color:#fff;font-size:11px;font-weight:700;letter-spacing:.4px}
.bh-dots{list-style:none;display:flex;justify-content:center;gap:10px;margin:10px 0}
.bh-dots li{width:10px;height:10px;border-radius:50%;background:#000;opacity:.25}
.bh-dots li.on{opacity:.9}\`,
  html:\`<div class="bh" data-type="BH"><div class="bh-brand"><img src="\${IMG.spotMob}" alt=""></div><div class="bh-products"><div class="bh-track">\${[1,2,3,4,5].map(()=>\`<div class="bh-tile"><div class="bh-card"><div class="bh-img"></div><div class="bh-info"><div class="bh-bar"></div><div class="bh-bar" style="width:60%"></div><span class="bh-btn">ADD TO CART</span></div></div></div>\`).join("")}</div><ul class="bh-dots">\${[1,2,3,4,5].map(i=>\`<li class="\${i===1?"on":""}"></li>\`).join("")}</ul></div></div>\`
 },

 /* ---------------- Interactive Header (from the docs spec; mobile version of Butterfly) ---------------- */
 {
  id:"interactive-header", group:"Legacy Onsite Display", name:"Interactive Header", sub:"Mobile: branding zone with logo + up to 4 SKU buttons, selected SKU below (from the spec)",
  notes:"Built from the written spec (no CodePen). The logo is 460×300; the 4 buttons sit in a 2×2 grid, 1vw apart.", mobileOpts:null,
  meta:{kind:"simple",unit:".ih",zone:".ih-brand",mobMax:9999,
    imp:[["Logo",".ih-logo"],["Product button",".ih-btn"],["Product zone",".ih-product"]]},
  css:\`body{display:block;padding:16px}
.ih{width:100%;background:#fff}
.ih-brand{position:relative;aspect-ratio:1242/300;display:flex;border:2px solid #8a8f9c;background:url("/images/retailer-integration/docs/ai-label-placement/inline-ff9d4aa5.jpg") center/cover no-repeat;overflow:hidden}
.ih-logo{flex:0 0 37.04%;display:flex;align-items:center;justify-content:center}
.ih-logo img{display:block;width:100%;height:100%;object-fit:contain}
.ih-buttons{flex:1;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:1vw;padding:1vw}
.ih-btn{display:flex;align-items:center;justify-content:center;text-align:center;font:2.3vw/1 sans-serif;background:#fff;color:#605d83;border-radius:999px;padding:0 4px}
.ih-btn.on{background:#605d83;color:#fff}
.ih-product{border:2px solid #8a8f9c;border-top:0;padding:12px;display:flex;gap:14px;align-items:center}
.ih-pimg{flex:0 0 30%;aspect-ratio:1;background:#e0e3ea;border-radius:8px}
.ih-pinfo{flex:1;min-width:0}
.ih-bar{height:12px;background:#e5e7f0;border-radius:4px;margin-bottom:6px}\`,
  html:\`<div class="ih" data-type="IH"><div class="ih-brand"><div class="ih-logo"><img src="/images/retailer-integration/docs/ai-label-placement/src-cd5f5294.png" alt=""></div><div class="ih-buttons">\${[1,2,3,4].map(i=>\`<div class="ih-btn\${i===1?" on":""}">Product \${i}</div>\`).join("")}</div></div><div class="ih-product"><div class="ih-pimg"></div><div class="ih-pinfo"><div class="ih-bar"></div><div class="ih-bar" style="width:60%"></div><div class="ih-bar" style="width:40%"></div></div></div></div>\`
 },

 /* ---------------- Digital Shelf Talker (from the docs spec) ---------------- */
 {
  id:"dst", group:"Legacy Onsite Display", name:"Digital Shelf Talker", sub:"Vertical branding tile inside the product grid (from the spec)",
  notes:"Built from the written spec (no CodePen). Desktop: one product-tile in size, 150×30 CTA 7px from the bottom. The 310×500 image has its 180×320 safe zone drawn in (lighter box, top-centre); the label is still checked against it. Mobile (≤540px): 1242×300 banner, no CTA.", mobileOpts:null,
  meta:{kind:"simple",unit:".dst",zone:".dst-brand",mobMax:540,
    imp:[["CTA",".dst-cta"],["Safe zone",".dst .safe-zone"]]},
  css:\`body{display:block}
.product-grid{width:95%;max-width:1400px;margin:0 auto}
\${GRID_FILLER_CSS}
.product{width:calc(25% - 12px)}
@media (max-width:1340px){.product{width:calc(33.33% - 10px)}}
@media (max-width:992px){.product{width:calc(50% - 10px)}}
@media (max-width:540px){.product{width:100%;max-height:350px;min-height:250px;gap:0}.product-content{flex-direction:row}.product-image{width:45%}.product-info{height:100%;justify-content:center}}
@media (max-width:440px){.product{max-height:190px;min-height:160px}.product-image{height:80%}}
.product.dst{padding:0;position:relative;overflow:hidden;background:#ffff00}
.dst-brand{position:relative;flex:1 1 auto;width:100%}
.dst-img{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:100%;min-width:100%;object-fit:cover}
.dst-mob{display:none}
.dst-cta{position:absolute;left:50%;bottom:7px;transform:translateX(-50%);width:150px;height:30px;font:400 12px Roboto,sans-serif;color:#fff;background:#2a3279;display:flex;align-items:center;justify-content:center;border-radius:3px;z-index:2}
.dst .safe-zone{left:50%;top:0;width:180px;height:320px;transform:translateX(-50%)}
@media (max-width:540px){
.product.dst{min-height:0;max-height:none;display:block}
.dst-brand{height:auto;aspect-ratio:1242/300}
.dst-img.dst-desk,.dst-cta,.dst .safe-zone{display:none}
.dst-mob{display:block;position:absolute;inset:0;transform:none;width:100%;height:100%;object-fit:cover}
}\`,
  html:\`<div class="product-grid"><div class="products"><div class="product sponsored dst" data-type="ST"><div class="dst-brand"><img class="dst-img dst-desk" src="\${IMG.tall}" alt=""><img class="dst-img dst-mob" src="\${IMG.spotMob}" alt=""><div class="safe-zone ghost"></div><div class="dst-cta">Shop Now</div></div></div>\${FILLERS(11)}</div></div>\`
 },

 /* ---------------- Display Panel (from the docs spec) ---------------- */
 {
  id:"display-panel", group:"Legacy Onsite Display", name:"Display Panel", sub:"Full-width banner, cropped by placement width (from the spec)",
  notes:"Built from the written spec (no CodePen). ≥1400px full image; 750–1400px cropped on both sides to the safe zone; <750px switches to the mobile banner (1350×900 asset).", optTitle:"Desktop asset", mobileOpts:[{id:"a",label:"1400×200",hint:"Safe zone 750×200"},{id:"b",label:"1400×300",hint:"Safe zone 750×300"}], hasSafe:true,
  meta:{kind:"simple",unit:".dp",zone:".dp",mobMax:749,
    imp:[["Safe zone",".dp-safe"]]},
  css:\`body{display:block}
.dp-wrap{container-type:inline-size;width:100%;max-width:1400px;margin:40px auto 0}
.dp{position:relative;width:100%;height:200px;overflow:hidden;background:#000}
.dp[data-opt="b"]{height:300px}
.dp-desk{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1400px;max-width:none;display:block}
.dp-desk.b{display:none}
.dp[data-opt="b"] .dp-desk.a{display:none}
.dp[data-opt="b"] .dp-desk.b{display:block}
.dp-mob{display:none}
.dp .dp-safe{left:50%;top:0;width:750px;height:200px;transform:translateX(-50%)}
.dp[data-opt="b"] .dp-safe{height:300px}
@container (max-width:749px){
.dp,.dp[data-opt="b"]{height:auto}
.dp-desk,.dp .dp-safe{display:none!important}
.dp-mob{display:block;width:100%;aspect-ratio:1350/900;object-fit:cover}
}\`,
  html:\`<div class="dp-wrap"><div class="dp" data-type="DP" data-opt="a"><img class="dp-desk a" src="\${DP_IMG.a}" alt=""><img class="dp-desk b" src="\${DP_IMG.b}" alt=""><img class="dp-mob" src="\${DP_IMG.m}" alt=""><div class="safe-zone dp-safe"></div></div></div>\`
 }

,
 /* ---------------- IAB: simple image sizes ---------------- */
 iab("iab-300x250","Medium Rectangle 300×250",300,250,IAB_IMG["300x250"]),
 iab("iab-728x90","Leaderboard 728×90",728,90,IAB_IMG["728x90"]),
 iab("iab-160x600","Wide Skyscraper 160×600",160,600,IAB_IMG["160x600"])
];
FORMATS.forEach(f=>{f.meta.info=f.meta.kind==="simple"?null:f.meta.kind==="bds"?[".bd-info",".bd-info-text"]:[".rm-info-add-on-container",".info-add-on-text"]});
const PRODUCT_ZONES = {
  "cd-spotlight":["  .cd-product-zone",[["Product image",".cd-product-image-placeholder"],["Product text",".cd-product-title-placeholder,.cd-product-subtitle-placeholder,.cd-product-rating"],["Add to cart button",".cd-product-cta"],["Carousel arrow",".slick-arrow"]]],
  "cd-shelf":["  .cd-product-zone",[["Product image",".cd-product-image-placeholder"],["Product text",".cd-product-title-placeholder,.cd-product-subtitle-placeholder,.cd-product-rating"],["Add to cart button",".cd-product-cta"],["Carousel arrow",".slick-arrow"],["Carousel dots",".cd-dots li"]]],
  "grid-duet":["  .cd-product-zone",[["Product image",".cd-product-image-placeholder"],["Product text",".cd-product-title-placeholder,.cd-product-subtitle-placeholder,.cd-product-rating"],["Add to cart button",".cd-product-cta"],["Carousel arrow",".slick-arrow"]]],
  "flagship":[".rm-product-container",[["Product image",".product-image-wrapper .ph"],["Product info",".product-info"],["Sponsored tag",".sponsored"]]],
  "showcase":[".rm-product-container",[["Product image",".rm-product-image-wrapper .ph"],["Product info",".rm-product-info-wrapper"]]],
  "butterfly":[".rm-product-container",[["Product image",".rm-product-image-wrapper .ph"],["Product info",".rm-product-info-wrapper"]]],
  "branded-header":[".bh-products",[["Product card",".bh-card"],["Carousel dots",".bh-dots li"]]],
  "interactive-header":[".ih-product",[["Product image",".ih-pimg"],["Product text",".ih-pinfo"]]]
};
FORMATS.forEach(f=>{
  const pz=PRODUCT_ZONES[f.id]; if(pz){f.meta.product=pz[0].trim();f.meta.pimp=pz[1];f.hasProduct=true}
  f.defaultPlacement = f.id==="interactive-header" ? "in-tl" : f.group==="IAB" ? "in-br" : "in-tr";   // top left for Interactive Header, bottom right for the IAB sizes, top right everywhere else
  const k=f.meta.kind;
  f.meta.legal = f.id==="showcase" ? [".rm-option-legal"] : k==="grid" ? [".rm-legal-text-container"] : k==="cds" ? [".cd-footer-legal",".cd-mobile-legal-more"] : k==="bds" ? [".bd-legal-desktop",".bd-mobile-legal"] : [];
  f.hasLegal = f.meta.legal.length>0;
});
const FMT = Object.fromEntries(FORMATS.map(f=>[f.id,f]));
/* Upload slots: the sample creative(s) each format shows, one slot per kind of image. \`sel\` = where it appears in the preview. */
const GRID_SLOTS=[
  {id:"grid",label:"Grid creative",hint:"Square, about 1500×1500. Used on desktop and in the mobile grid.",sel:".rm-creative.mobile-grid"},
  {id:"horizontal",label:"Horizontal mobile creative",hint:"About 1280×400. Used in the horizontal mobile layout.",sel:".rm-creative.mobile"}
];
const UPLOAD_SLOTS={
  "cd-spotlight":[{id:"desktop",label:"Desktop creative",hint:"Branding image, about 1400×450.",sel:".cd-background-desktop"},{id:"mobile",label:"Mobile creative",hint:"Shown at 640px and below.",sel:".cd-background-mobile"}],
  "cd-shelf":GRID_SLOTS,"grid-duet":GRID_SLOTS,"bd-grid-solo":GRID_SLOTS,
  "bd-spotlight-solo":[{id:"desktop",label:"Desktop creative",hint:"Banner, about 1400×200.",sel:".bd-img-desktop"},{id:"mobile",label:"Mobile creative",hint:"1280×400 or 1200×1000. Shown at 575px and below.",sel:".bd-img-mobile"}],
  "flagship":[{id:"creative",label:"Creative",hint:"576×200.",sel:".rm-desktopImage"}],
  "showcase":[{id:"creative",label:"Creative",hint:"310×500.",sel:".rm-desktop-creative img"}],
  "butterfly":[{id:"creative",label:"Creative",hint:"310×500, used as the background.",sel:".rm-desktop-creative",bg:true}],
  "branded-header":[{id:"creative",label:"Creative",hint:"1242×300.",sel:".bh-brand img"}],
  "interactive-header":[{id:"creative",label:"Background",hint:"1242×300.",sel:".ih-brand",bg:true}],
  "dst":[{id:"desktop",label:"Desktop creative",hint:"310×500.",sel:".dst-desk"},{id:"mobile",label:"Mobile creative",hint:"1242×300. Shown at 540px and below.",sel:".dst-mob"}],
  "display-panel":[{id:"a",label:"Desktop 1400×200",hint:"Used when the 1400×200 asset is selected.",sel:".dp-desk.a"},{id:"b",label:"Desktop 1400×300",hint:"Used when the 1400×300 asset is selected.",sel:".dp-desk.b"},{id:"mobile",label:"Mobile creative",hint:"1350×900. Shown below 750px.",sel:".dp-mob"}],
  "iab-300x250":[{id:"creative",label:"Creative",hint:"300×250.",sel:".iab img"}],
  "iab-728x90":[{id:"creative",label:"Creative",hint:"728×90.",sel:".iab img"}],
  "iab-160x600":[{id:"creative",label:"Creative",hint:"160×600.",sel:".iab img"}]
};
FORMATS.forEach(f=>{ f.uploads=UPLOAD_SLOTS[f.id]||[]; f.meta.assets=f.uploads; });

/* ------------------------------------------------------------------ */
/* Runtime injected into every preview document                        */
/* ------------------------------------------------------------------ */
function runtime(M){
  const q = s => document.querySelector(s), qa = s => [...document.querySelectorAll(s)];
  const label = document.getElementById("ai-label");
  // label = [sparkle icon][text]; the icon can be switched off, the text can be upper/lower case
  // Icon styles: the Unicode sparkle character (U+2728, what the IAB AI transparency framework recommends), or a drawn monochrome sparkle.
  const ICON_MARK={
    unicode:()=>"\\u2728",
    spark:()=>'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6 12 12 18 14 12 16 10 22 8 16 2 14 8 12Z"/><path d="M19 1 20.1 3.9 23 5 20.1 6.1 19 9 17.9 6.1 15 5 17.9 3.9Z"/></svg>'
  };
  let iconStyle="unicode";
  const icoInl=()=>'<span class="ico-inl" aria-hidden="true">'+ICON_MARK[iconStyle]()+'</span>';
  label.innerHTML='<span class="ico" aria-hidden="true">'+ICON_MARK.unicode()+'</span><span class="lbl-text"></span><img class="rb" alt="" draggable="false">';
  function setIconStyle(st){ if(!ICON_MARK[st]||st===iconStyle) return; iconStyle=st; label.querySelector(".ico").innerHTML=ICON_MARK[st](); }
  const tx = label.querySelector(".lbl-text"), rbImg = label.querySelector(".rb");
  let cfg = {placement:"tr",w:110,margin:8,expanded:true,dark:false,mobileOpt:"a",tone:"dark",safe:true,legal:true,text:"AI generated",brk:null,icon:false,raw:false,regular:false,assets:{},assetsVer:0,iconStyle:"unicode",ov:false,ovOpen:false,ovContent:{},badge:"capsule",rbSrc:"",rbSize:24,rbVariant:"dark",tipOpen:false};
  tx.textContent=cfg.text;
  const unit = q(M.unit);

  function R(el){const r=el.getBoundingClientRect();return {x:r.left+scrollX,y:r.top+scrollY,w:r.width,h:r.height}}
  function vis(el){const r=el.getBoundingClientRect();if(!(r.width>0&&r.height>0))return false;const cs=getComputedStyle(el);return cs.visibility!=="hidden"&&cs.display!=="none"}

  function updateImg(){
    const products=q(".products"); if(!products) return;
    if(innerWidth<=540 && !products.classList.contains("mobile-grid-layout")) return;
    const c=q(".rm-creative-container"); const img=c&&c.querySelector(".rm-creative.desktop,.rm-creative.mobile-grid"); if(!img) return;
    const w=c.clientWidth,h=c.clientHeight; img.style.width="";img.style.height="";
    if(w>180&&w<270&&h>500&&h/w<2.78){img.style.height=h+"px";img.style.width="auto";return}
    if(w>500&&h>=332&&w/h<=1.5){img.style.width=w+"px";img.style.height="auto";return}
    let s=null; if(w>270&&h>500)s=750; else if(w>180&&h>300)s=500; else if(w>140&&h>257)s=300;
    if(s){s=Math.max(s,Math.ceil(w),Math.ceil(h));img.style.width=s+"px";img.style.height=s+"px"}   // always cover the whole branding zone
  }

  // Uploaded creatives replace this format's sample image(s). The originals are remembered so "Remove" restores them.
  let assetsVer=-1;
  function applyAssets(){
    if(cfg.assetsVer===assetsVer) return; assetsVer=cfg.assetsVer;
    for(const a of (M.assets||[])){
      const url=cfg.assets&&cfg.assets[a.id];
      for(const el of qa(a.sel)){
        if(a.bg){
          if(url){ if(el.dataset.origBg===undefined) el.dataset.origBg=el.style.backgroundImage; el.style.backgroundImage='url("'+url+'")'; el.style.backgroundSize="cover"; el.style.backgroundPosition="center"; }
          else if(el.dataset.origBg!==undefined){ el.style.backgroundImage=el.dataset.origBg; el.style.backgroundSize=""; el.style.backgroundPosition=""; delete el.dataset.origBg; }
        }else{
          if(url){ if(el.dataset.origSrc===undefined) el.dataset.origSrc=el.getAttribute("src")||""; el.setAttribute("src",url); }
          else if(el.dataset.origSrc!==undefined){ el.setAttribute("src",el.dataset.origSrc); delete el.dataset.origSrc; }
        }
      }
    }
  }
  function sync(){
    applyAssets();
    const w=innerWidth;
    unit.classList.toggle("darkcommand",cfg.dark);
    unit.classList.toggle("is-dark",cfg.dark);
    unit.classList.toggle("expanded",cfg.expanded);
    document.body.classList.toggle("show-safe",!!cfg.safe);
    unit.dataset.opt=cfg.mobileOpt;
    document.body.classList.toggle("no-legal",cfg.legal===false);
    if(M.kind==="grid"){
      unit.dataset.viewport = w<=M.vpMax ? "mobile" : "desktop";
      const g = w<=540 && cfg.mobileOpt==="a";
      const products=q(".products");
      products.classList.toggle("mobile-grid-layout",g);
      products.parentNode.classList.toggle("layout",g);
      updateImg();
    } else if(M.kind==="bds"){
      const mi=q(".bd-img-mobile"), s=M.mobSrc[cfg.mobileOpt], ov=cfg.assets&&cfg.assets.mobile;
      if(mi&&s&&!ov&&mi.getAttribute("src")!==s) mi.setAttribute("src",s);
      q(".bd-info").classList.toggle("hovered",cfg.expanded);
    } else if(M.kind==="cds"){
      q(".rm-info-add-on-container").classList.toggle("hovered",cfg.expanded);
    }
  }

  // Small controls the label must never sit on top of. Large areas (logo, product image, safe zones…) are only flagged, not avoided.
  const HARD=/icon|cta|legal|button|add to cart|arrow|dots|sponsored|see more/i;
  function obstacles(where){
    const list=(where==="pz"&&M.pimp)?M.pimp:M.imp, out=[];
    for(const [name,sel,gate] of list){
      if(!HARD.test(name)) continue;
      if(gate && !qa(gate).some(vis)) continue;
      for(const el of qa(sel)) if(vis(el)) out.push(R(el));
    }
    return out;
  }

  function setText(lines,inlineIcon){
    tx.textContent="";
    if(inlineIcon) tx.insertAdjacentHTML("beforeend",icoInl());          // icon at the start of the first line
    lines.forEach((t,i)=>{ if(i) tx.appendChild(document.createElement("br")); tx.appendChild(document.createTextNode(t)); });
  }
  // The two-line version of the text: the preset's own break ("This ad contains a / synthetic performer"),
  // or, for any other text, the space that splits it most evenly.
  function splitTwo(text,brk){
    if(brk&&brk<text.length){ const a=text.slice(0,brk).trim(), b=text.slice(brk).trim(); if(a&&b) return [a,b]; }
    let best=-1, diff=Infinity;
    for(let i=1;i<text.length-1;i++) if(text[i]===" "){ const d=Math.abs(i-(text.length-1-i)); if(d<diff){diff=d;best=i} }
    return best<0 ? null : [text.slice(0,best).trim(), text.slice(best+1).trim()];
  }
  // When the text has to wrap naturally, trim the box to its widest line so the capsule hugs the text.
  function fitWrapped(){
    label.style.width="";
    const lb=label.getBoundingClientRect();
    const range=document.createRange(); range.selectNodeContents(tx);
    const widest=Math.max(0,...[...range.getClientRects()].map(r=>r.width));
    if(widest>0){
      const chrome=lb.width-tx.getBoundingClientRect().width, target=Math.ceil(widest+chrome)+1;   // padding + icon + gap
      if(target<lb.width-0.5){
        label.style.width=target+"px";
        if(label.getBoundingClientRect().height>lb.height+0.5) label.style.width="";
      }
    }
    return label.getBoundingClientRect();
  }
  // Shape the label for a given available width W:
  //   1) the full text on one line, if it fits;  2) otherwise two fixed lines;  3) only if even that doesn't fit, natural wrapping.
  // The text is always centred inside the capsule.
  function twoLines(){ return (cfg.brk||cfg.text.length>24) ? splitTwo(cfg.text,cfg.brk) : null; }
  const PAD=8, PAD_MIN=5;                                  // side padding (px): normal, and the least it may shrink to
  // Optical balance: the sparkle's box has empty space inside it, which makes the left margin look wider than the right.
  // Measure where the icon's visible pixels start and where the last letter's end, and trim the left padding by the difference.
  const inkCache={};
  function inkInsets(ch,font){
    const key=font+"|"+ch; if(inkCache[key]) return inkCache[key];
    const S=4, W=64*S, H=40*S, c=document.createElement("canvas"); c.width=W; c.height=H;
    const g=c.getContext("2d",{willReadFrequently:true});
    g.font=font.replace(/(\\d+(?:\\.\\d+)?)px/,(m,n)=>(n*S)+"px"); g.textBaseline="alphabetic"; g.fillStyle="#000";
    const x0=16*S; g.fillText(ch,x0,28*S);
    const advS=g.measureText(ch).width, d=g.getImageData(0,0,W,H).data;
    let minX=W, maxX=-1;
    for(let y=0;y<H;y++) for(let x=0;x<W;x++) if(d[(y*W+x)*4+3]>235){ if(x<minX)minX=x; if(x>maxX)maxX=x; }
    const r = maxX<0 ? {left:0,right:0,adv:advS/S} : {left:(minX-x0)/S, right:(x0+advS-(maxX+1))/S, adv:advS/S};
    return inkCache[key]=r;
  }
  const EMOJI_FONT='400 12px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  function iconComp(){
    if(!cfg.icon||label.classList.contains("ico-in")) return 0;          // (the inline icon sits inside the first line)
    const shown=(cfg.raw?cfg.text:cfg.text.toUpperCase()).trim(); if(!shown) return 0;
    const rb=inkInsets(shown.slice(-1),(cfg.regular?400:500)+" 12px Roboto, system-ui, sans-serif").right;
    let off;
    if(iconStyle==="unicode"){ const m=inkInsets("\\u2728",EMOJI_FONT); off=(Math.max(14,m.adv)-m.adv)/2+m.left; }
    else off=2/24*14;                                                      // the drawn sparkle starts 2 of its 24 units in
    return Math.max(-3,Math.min(5,off-rb+0.5));   // +0.5: the thin outer tips of a sparkle read as part of its edge
  }
  function setPad(p){
    const base=p==null?PAD:p, c=iconComp();
    label.style.paddingRight=p==null?"":base+"px";
    label.style.paddingLeft=(p==null&&!c)?"":Math.max(3,base-c).toFixed(2)+"px";
  }
  // fonts arrive after the first layout: measure again once they have
  if(document.fonts&&document.fonts.load) Promise.all([document.fonts.load("500 12px Roboto"),document.fonts.load("400 12px Roboto")]).then(()=>{for(const k in inkCache)delete inkCache[k];layout()}).catch(()=>{});
  // The "clean" shapes, in order of preference. "compact" = may slim the side padding; "inline" = icon at the start of the first line.
  function cleanVariants(){
    const two=twoLines(), v=[{lines:[cfg.text]}];
    if(two){
      v.push({lines:two}, {lines:two,compact:true});
      if(cfg.icon) v.push({lines:two,inline:true}, {lines:two,inline:true,compact:true});
    }
    return v;
  }
  function apply(v,pad){
    label.classList.toggle("ico-in",!!v.inline);
    setText(v.lines,v.inline&&cfg.icon);
    setPad(pad===PAD?null:pad);
    label.style.width=""; label.style.maxWidth="none"; label.style.whiteSpace="nowrap";
    return label.getBoundingClientRect();
  }
  // Shape the label for a given available width W, trying in turn:
  //   one line · two lines · two lines with slimmer side padding · (icon on) two lines with the icon inline · natural wrapping.
  // The text is always centred inside the capsule.
  function shape(W,minW){
    if(cfg.oneLine) return apply({lines:[cfg.text]},PAD);   // one line whatever the width: it may spill past the format
    for(const v of cleanVariants()){
      let r=apply(v,PAD);
      if(r.width<=W+0.5) return r;
      if(v.compact){
        const cut=Math.ceil((r.width-W)/2);
        if(PAD-cut>=PAD_MIN){ r=apply(v,PAD-cut); if(r.width<=W+0.5) return r; }
      }
    }
    label.classList.remove("ico-in"); setPad(null);
    setText([cfg.text]); label.style.whiteSpace="normal"; label.style.maxWidth=Math.max(minW,W)+"px";   // natural wrapping
    return fitWrapped();
  }

  function roundBox(){                       // the round badge: a fixed-size circle
    label.style.paddingLeft=label.style.paddingRight=""; label.style.maxWidth="none"; label.style.whiteSpace="nowrap";
    label.style.width=cfg.rbSize+"px"; label.style.height=cfg.rbSize+"px";
    return label.getBoundingClientRect();
  }
  function layout(){
    const round=cfg.badge==="round";
    if(round&&cfg.rbSrc&&rbImg.getAttribute("src")!==cfg.rbSrc) rbImg.setAttribute("src",cfg.rbSrc);
    setIconStyle(cfg.iconStyle);
    label.style.fontSize=cfg.fontSize?cfg.fontSize+"px":"";
    label.className=(round?"round ":"")+"tone-"+cfg.tone+(cfg.raw?" raw":"")+(cfg.regular?" regular":"")+(cfg.solid?" solid":"")+(String(cfg.rbVariant).slice(-2)==="80"?" flat":"")+(cfg.icon?"":" no-ico")+((cfg.ov||isRound())?" ov-on":"")+((ovIsOpen()||tipIsOpen())?" ov-open":"");
    const m=cfg.margin, gap=Math.max(m,4);
    const [where,pos]=cfg.placement.split("-");           // in|out|pz , tl|tr|bl|br
    const top=pos[0]==="t", left=pos[1]==="l";
    const z=R(q(M.zone));
    let box = where==="out" ? R(unit) : z;
    if(where==="pz"){const pe=M.product&&q(M.product), pr=pe&&R(pe); if(pr&&pr.w>0&&pr.h>0) box=pr;}   // product zone (falls back to the branding zone if absent)

    // The label is text in an overlay: as wide as its text needs, and it wraps onto new lines when the room runs out.
    // minW = the narrowest it can get (its longest word); lo..hi = the horizontal room it may use.
    let minW, prefW=Infinity;
    label.style.left="0px"; label.style.top="0px";
    if(round){ minW=prefW=cfg.rbSize; label.classList.remove("ico-in"); }
    else{
      label.style.height="";
      label.classList.remove("ico-in"); setPad(null); label.style.maxWidth="none"; label.style.whiteSpace="normal"; setText([cfg.text]); label.style.width="min-content";
      minW=Math.ceil(label.getBoundingClientRect().width); label.style.width="";
      // prefW = the narrowest of the clean shapes (full text on one line, or the two fixed lines).
      for(const v of cleanVariants()) prefW=Math.min(prefW,apply(v,v.compact?PAD_MIN:PAD).width);
      label.classList.remove("ico-in"); setPad(null); label.style.whiteSpace="normal"; setText([cfg.text]);
    }
    let lo=box.x+m, hi=box.x+box.w-m;
    // Beside an obstacle the label may only shrink down to a clean shape; if the whole container can't fit one anyway, natural wrapping is allowed.
    const need = prefW<=(hi-lo)+0.5 ? Math.ceil(prefW) : minW;
    let topLimit=-Infinity, bottomLimit=Infinity;
    const obs = where==="out" ? [] : obstacles(where);
    let lw=0, lh=0, x=0, y=0;
    for(let i=0;i<8;i++){
      const lb=round?roundBox():shape(hi-lo,minW); lw=lb.width; lh=lb.height;
      x = left ? lo : hi-lw;
      if(cfg.centerX) x = box.x+(box.w-lw)/2;                // centred across the zone / format
      if(where==="out"){ y = top ? box.y-lh-m : box.y+box.h+m; break; }   // above / below the whole format
      if(top){
        y = box.y+m;
        // The more-info text pushes the label down: it sits just below the text block.
        const t=where==="in"&&M.info&&q(M.info[1]);
        if(t&&vis(t)){const b=R(q(M.info[0]));y=Math.max(y,b.y+b.h+m)}
        y = Math.max(y,topLimit);
      }else{
        y = box.y+box.h-lh-m;
        // Legal text at the bottom pushes the label up: it sits just above the legal block.
        for(let pass=0;pass<2;pass++) for(const sel of (where==="in"?(M.legal||[]):[])) for(const el of qa(sel)){
          if(!vis(el)) continue;
          const r=R(el);
          if(r.y>=box.y+box.h) continue;                      // legal text lives below the branding zone: nothing to avoid
          if(x<r.x+r.w && x+lw>r.x && y+lh>r.y) y=Math.max(box.y+m, r.y-lh-m);
        }
        y = Math.max(box.y+m, Math.min(y,bottomLimit-lh));
      }
      // Is a small control (the ⓘ icon, a CTA, a button…) under the label?
      const hit=obs.find(o=>x<o.x+o.w && x+lw>o.x && y<o.y+o.h && y+lh>o.y);
      if(!hit) break;
      // 1) make room sideways: the label shrinks (wrapping onto another line) to stay clear of it…
      const mid=(lo+hi)/2, oc=hit.x+hit.w/2;
      if(oc<=mid){ const nlo=hit.x+hit.w+gap; if(hi-nlo>=need){lo=nlo;continue} }
      else       { const nhi=hit.x-gap;        if(nhi-lo>=need){hi=nhi;continue} }
      // 2) …and if there isn't enough width beside it, jump below / above it.
      if(top) topLimit=Math.max(topLimit,hit.y+hit.h+gap); else bottomLimit=Math.min(bottomLimit,hit.y-gap);
    }
    label.style.left=x+"px"; label.style.top=y+"px";
    ovRender();
    return {place:cfg.placement,x,y,w:lw,h:lh,zone:z};
  }


  window.__apply = c => {Object.assign(cfg,c)};
  window.__measure = () => {
    sync(); const L=layout();
    const lr={l:L.x,t:L.y,r:L.x+L.w,b:L.y+L.h};
    const hits=[];
    const list=(cfg.placement.startsWith("pz-")&&M.pimp)?M.pimp:M.imp;
    for(const [name,sel,gate] of list){
      if(gate && !qa(gate).some(vis)) continue;
      for(const el of qa(sel)){
        if(!vis(el)) continue;
        const r=R(el);
        const ow=Math.min(lr.r,r.x+r.w)-Math.max(lr.l,r.x), oh=Math.min(lr.b,r.y+r.h)-Math.max(lr.t,r.y);
        if(ow>0&&oh>0){hits.push({name,kind:"clash",area:Math.round(ow*oh),ow:Math.round(ow),oh:Math.round(oh)}); }
      }
    }
    const vw=document.documentElement.clientWidth;
    if(L.x<0||L.x+L.w>vw+0.5) hits.push({name:"Cut off by the viewport edge",kind:"clash",area:0});
    // merge repeats (e.g. several tiles)
    const merged=new Map();
    for(const h of hits){const k=h.kind+"|"+h.name;const p=merged.get(k);if(p){p.count=(p.count||1)+1;p.area=(p.area||0)+(h.area||0);if(h.gap!=null)p.gap=Math.min(p.gap,h.gap)}else merged.set(k,{...h,count:1})}
    const out=[...merged.values()];
    const state=out.length?"clash":"ok";
    const ur=R(unit);
    return {state,hits:out,place:L.place,forced:L.forced,label:{x:L.x,y:L.y,w:L.w,h:L.h},zone:L.zone,unitBottom:ur.y+ur.h,unitW:ur.w,zoneW:L.zone.w,ovBottom:(ovIsOpen()?(R(ov).y+R(ov).h):tipIsOpen()?(R(tip).y+R(tip).h):0),docH:document.documentElement.scrollHeight,vw,mobile:innerWidth<=M.mobMax};
  };

  // ---- optional overlay: the badge opens a panel with the full caption (hover on desktop, tap on touch, Enter/Space) ----
  const ov=document.createElement("div"); ov.id="ai-ov"; ov.setAttribute("role","dialog"); ov.hidden=true; document.body.appendChild(ov);
  let ovPinned=false, ovHover=false, ovTimer=null, ovKey="";
  const tip=document.createElement("div"); tip.id="ai-tip"; tip.setAttribute("role","tooltip"); tip.hidden=true; document.body.appendChild(tip);
  const isRound=()=>cfg.badge==="round"||!!cfg.tipOnly;   // the click-to-reveal tooltip: the round badge, or any badge with tipOnly
  function ovIsOpen(){ return !isRound() && !!cfg.ov && (!!cfg.ovOpen||ovPinned||ovHover); }
  function tipIsOpen(){ return isRound() && (!!cfg.tipOpen||ovPinned||ovHover); }
  function tipPlace(){                       // the revealed wording, with a small pointer to the badge
    const vw=document.documentElement.clientWidth, [where,pos]=cfg.placement.split("-"), top=pos[0]==="t", left=pos[1]==="l";
    tip.textContent=cfg.tipText||cfg.text; tip.classList.toggle("light",String(cfg.rbVariant).indexOf("light")===0); tip.classList.toggle("up",!top);
    tip.style.maxWidth=Math.max(120,Math.min(240,vw-16))+"px"; tip.style.left="0px"; tip.style.top="0px";
    const L=R(label), pr=tip.getBoundingClientRect(), pw=pr.width, ph=pr.height;
    let x=left?L.x:L.x+L.w-pw; x=Math.max(scrollX+8,Math.min(x,scrollX+vw-pw-8));
    const y=Math.max(8,top?L.y+L.h+8:L.y-ph-8);
    tip.style.left=x+"px"; tip.style.top=y+"px";
    tip.style.setProperty("--cx",Math.max(10,Math.min(pw-10,L.x+L.w/2-x))+"px");
  }
  function ovBuild(){
    const c=cfg.ovContent||{}, key=JSON.stringify(c); if(key===ovKey) return; ovKey=key;
    ov.textContent="";
    const top=document.createElement("div"); top.className="ov-top";
    if(c.title){const t=document.createElement("div"); t.className="ov-title"; t.textContent=c.title; top.appendChild(t); ov.setAttribute("aria-label",c.title);}
    const x=document.createElement("button"); x.type="button"; x.className="ov-x"; x.setAttribute("aria-label","Close");
    x.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    x.onclick=e=>{e.stopPropagation();ovPinned=false;ovHover=false;ovRender()};
    top.appendChild(x); ov.appendChild(top);
    if(c.head){const h=document.createElement("div"); h.className="ov-head"; h.textContent=c.head; ov.appendChild(h);}
    if(c.body){const b=document.createElement("div"); b.className="ov-body"; b.textContent=c.body; ov.appendChild(b);}
    if(c.link){const a=document.createElement("a"); a.className="ov-link"; a.href="#"; a.textContent=c.link; ov.appendChild(a);}
  }
  function ovPlace(){
    const vw=document.documentElement.clientWidth, [where,pos]=cfg.placement.split("-"), top=pos[0]==="t", left=pos[1]==="l";
    ov.style.maxWidth=Math.max(160,Math.min(280,vw-16))+"px"; ov.style.left="0px"; ov.style.top="0px";
    const L=R(label), pr=ov.getBoundingClientRect(), pw=pr.width, ph=pr.height;
    let x=left?L.x:L.x+L.w-pw; x=Math.max(scrollX+8,Math.min(x,scrollX+vw-pw-8));
    let y=top?L.y+L.h+6:L.y-ph-6; y=Math.max(8,y);
    ov.style.left=x+"px"; ov.style.top=y+"px";
  }
  function ovRender(){
    const round=isRound(), interactive=round||!!cfg.ov;
    label.style.pointerEvents=interactive?"auto":""; label.style.cursor=interactive?"pointer":"";
    if(interactive){label.setAttribute("role","button");label.setAttribute("tabindex","0");label.setAttribute("aria-haspopup",round?"true":"dialog"); if(round) label.setAttribute("aria-label",cfg.tipText||cfg.text); else label.removeAttribute("aria-label")}
    else{["role","tabindex","aria-haspopup","aria-expanded","aria-label"].forEach(a=>label.removeAttribute(a));ovPinned=false;ovHover=false}
    const open=ovIsOpen(), tOpen=tipIsOpen(); ov.hidden=!open; tip.hidden=!tOpen; ov.classList.toggle("dark",cfg.tone==="dark");
    label.classList.toggle("ov-on",interactive); label.classList.toggle("ov-open",open||tOpen);
    if(interactive) label.setAttribute("aria-expanded",String(open||tOpen));
    if(open){ovBuild(); ovPlace()}
    if(tOpen) tipPlace();
  }
  const ovLeave=()=>{clearTimeout(ovTimer); ovTimer=setTimeout(()=>{ovHover=false;ovRender()},220)};
  const ovEnter=e=>{ if(!(cfg.ov||isRound())||e.pointerType==="touch") return; clearTimeout(ovTimer); ovHover=true; ovRender(); };
  label.addEventListener("pointerenter",ovEnter); label.addEventListener("pointerleave",ovLeave);
  ov.addEventListener("pointerenter",ovEnter); ov.addEventListener("pointerleave",ovLeave);
  tip.addEventListener("pointerenter",ovEnter); tip.addEventListener("pointerleave",ovLeave);
  label.addEventListener("click",e=>{ if(!(cfg.ov||isRound())) return; e.stopPropagation(); ovPinned=!ovPinned; if(!ovPinned) ovHover=false; ovRender(); });
  label.addEventListener("keydown",e=>{ if((cfg.ov||isRound())&&(e.key==="Enter"||e.key===" ")){e.preventDefault();ovPinned=!ovPinned;if(!ovPinned)ovHover=false;ovRender()} });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&(ovPinned||ovHover)){ovPinned=false;ovHover=false;ovRender()} });
  document.addEventListener("click",e=>{ if(ovPinned&&!label.contains(e.target)&&!ov.contains(e.target)&&!tip.contains(e.target)){ovPinned=false;ovRender()} });

  // Never navigate inside the preview (the pens use href="#", which would reload the tool in the frame).
  document.addEventListener("click",e=>{
    const t=e.target;
    if(t.closest&&t.closest(".info-add-on-icon,.bd-info-icon")){parent.postMessage({type:"ai-label-toggle-expanded"},"*")}
    if(t.closest&&t.closest("a")) e.preventDefault();
  },true);
  document.addEventListener("load",()=>layout(),true);      // an image finished loading (e.g. an upload): place the label again
  window.addEventListener("resize",()=>{sync();layout()});
  window.addEventListener("load",()=>{sync();layout()});
  new ResizeObserver(()=>{layout()}).observe(document.body);
  sync(); layout();
}

function buildDoc(f){
  const meta=JSON.stringify(f.meta);
  return \`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap">
<style>\${BASE_CSS}\${f.css}</style></head><body><div id="pre" style="height:64px;flex:none"></div>\${f.html}
<div id="ai-label"></div>
<script>(\${runtime.toString()})(\${meta});<\\/script></body></html>\`;
}

/* ------------------------------------------------------------------ */
/* Parent app                                                          */
/* ------------------------------------------------------------------ */
const $ = s => document.querySelector(s);
const MIN_VP=360;   // narrower viewports are not realistic for this review
const PRESETS=[360,375,414,540,541,640,768,992,1152,1340,1440,1600];

const DEFAULTS={format:"cd-spotlight",placement:"in-tr",w:1200,text:"AI generated",badge:"capsule",rbVariant:"dark",rbSize:24,tipOpen:false,icon:false,iconStyle:"unicode",lower:false,ov:false,ovOpen:false,ovTitle:"How this ad was made",ovHead:"Created with AI",ovBody:"The images in this ad were generated with AI.",ovLink:"Learn more about AI in ads",margin:4,fmtDark:true,expanded:false,safe:true,legal:true,mobileOpt:"a",fit:true,compact:false};
let S={...DEFAULTS};
try{Object.assign(S,JSON.parse(localStorage.getItem("ai-label-lab-v10")||"{}"))}catch(e){}
try{const h=new URLSearchParams(location.hash.slice(1));
  if(h.get("f")&&FMT[h.get("f")])S.format=h.get("f"); if(h.get("p"))S.placement=h.get("p"); if(h.get("w"))S.w=+h.get("w")||S.w;
}catch(e){}
if(typeof S.text!=="string"||!S.text.trim())S.text=DEFAULTS.text;
S.w=Math.max(360,+S.w||DEFAULTS.w);   // never start narrower than the minimum viewport
if(S.badge!=="round")S.badge="capsule"; if(!RB_IMG[S.rbVariant])S.rbVariant="dark";
if(!["unicode","spark"].includes(S.iconStyle))S.iconStyle="unicode";   // only the two sparkle styles exist
const OLD_P={tr:"in-tr","below-left":"out-bl","below-right":"out-br"};
S.placement=OLD_P[S.placement]||(/^(in|out|pz)-(tl|tr|bl|br)$/.test(S.placement)?S.placement:"in-tr");
function save(){try{localStorage.setItem("ai-label-lab-v10",JSON.stringify(S))}catch(e){}
  if(VIEW==="playground")try{history.replaceState(null,"","#f="+S.format+"&p="+S.placement+"&w="+S.w)}catch(e){}}

const frame=$("#frame");
let loadedFormat=null, last=null;

function fmt(){return FMT[S.format]}
function resolveTone(){return S.fmtDark?"dark":"light"}   // label follows the format colour mode
function breakFor(t){const h=LABEL_TEXTS.find(([,x])=>x===t);return h&&h[2]||null}
/* ---------- uploaded creatives: one set per format, kept in this browser (memory + IndexedDB) ---------- */
const ASSETS={};   // { formatId: { slotId: {url (data:), name, w, h} } }
let ASSET_VER=0, idb=null;
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function assetUrls(){const m={},cur=ASSETS[S.format]||{};for(const k in cur)m[k]=cur[k].url;return m}
function idbOpen(){return new Promise(res=>{try{const r=indexedDB.open("ai-label-lab-assets",1);r.onupgradeneeded=()=>r.result.createObjectStore("a");r.onsuccess=()=>res(r.result);r.onerror=()=>res(null);r.onblocked=()=>res(null)}catch(e){res(null)}})}
function idbPut(k,v){return new Promise(res=>{if(!idb)return res(false);try{const t=idb.transaction("a","readwrite");t.objectStore("a").put(v,k);t.oncomplete=()=>res(true);t.onerror=()=>res(false)}catch(e){res(false)}})}
function idbDel(k){return new Promise(res=>{if(!idb)return res(false);try{const t=idb.transaction("a","readwrite");t.objectStore("a").delete(k);t.oncomplete=()=>res(true);t.onerror=()=>res(false)}catch(e){res(false)}})}
function idbAll(){return new Promise(res=>{if(!idb)return res([]);try{const out=[],c=idb.transaction("a").objectStore("a").openCursor();c.onsuccess=()=>{const cur=c.result;if(cur){out.push([cur.key,cur.value]);cur.continue()}else res(out)};c.onerror=()=>res(out)}catch(e){res([])}})}
function remeasureSoon(){measure();[300,1000,2200].forEach(ms=>setTimeout(measure,ms))}
function renderUploads(){
  const f=fmt(), box=$("#upBox");
  $("#upSec").style.display=f.uploads.length?"":"none";
  box.innerHTML=f.uploads.map(sl=>{
    const cur=(ASSETS[f.id]||{})[sl.id];
    return \`<div class="up" data-slot="\${sl.id}"><b>\${esc(sl.label)}</b><small>\${esc(sl.hint)}</small>
      <div class="up-row"><label class="upbtn"><input class="sr" type="file" accept="image/*" id="up_\${f.id}_\${sl.id}">\${cur?"Replace":"Upload image"}</label>
      <span class="upname" title="\${cur?esc(cur.name):""}">\${cur?esc(cur.name)+" · "+cur.w+"×"+cur.h:"Sample creative"}</span>\${cur?\`<button type="button" class="uprm" data-rm="\${sl.id}">Remove</button>\`:""}</div>
      <div class="uperr" role="status"></div></div>\`;
  }).join("");
  box.querySelectorAll(".up").forEach(row=>{
    const sid=row.dataset.slot, inp=row.querySelector("input");
    inp.onchange=()=>{if(inp.files&&inp.files[0])takeFile(f.id,sid,inp.files[0],row);inp.value=""};
    row.ondragover=e=>{e.preventDefault();row.classList.add("drag")};
    row.ondragleave=()=>row.classList.remove("drag");
    row.ondrop=e=>{e.preventDefault();row.classList.remove("drag");const fl=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(fl)takeFile(f.id,sid,fl,row)};
    const rm=row.querySelector("[data-rm]"); if(rm) rm.onclick=()=>removeAsset(f.id,sid);
  });
}
function takeFile(fid,sid,file,row){
  const err=row.querySelector(".uperr"); err.textContent="";
  if(!/^image\\//.test(file.type)){err.textContent="Choose an image file (PNG, JPG, GIF, WebP or SVG).";return}
  if(file.size>12*1024*1024){err.textContent="That image is over 12MB. Use a smaller file.";return}
  const fr=new FileReader();
  fr.onerror=()=>{err.textContent="That file could not be read."};
  fr.onload=()=>{
    const url=fr.result, img=new Image();
    img.onerror=()=>{err.textContent="That image could not be displayed. Try another file."};
    img.onload=()=>{
      const rec={url,name:file.name,w:img.naturalWidth,h:img.naturalHeight};
      (ASSETS[fid]=ASSETS[fid]||{})[sid]=rec; ASSET_VER++;
      idbPut(fid+"/"+sid,rec);
      if(fid===S.format){renderUploads();remeasureSoon()}
    };
    img.src=url;
  };
  fr.readAsDataURL(file);
}
function removeAsset(fid,sid){
  if(ASSETS[fid]){delete ASSETS[fid][sid]}
  ASSET_VER++; idbDel(fid+"/"+sid);
  if(fid===S.format){renderUploads();remeasureSoon()}
}
async function loadAssets(){
  try{
    idb=await Promise.race([idbOpen(),new Promise(r=>setTimeout(()=>r(null),2000))]);
    for(const [k,v] of await idbAll()){const [fid,sid]=String(k).split("/"); if(FMT[fid]&&v&&v.url)(ASSETS[fid]=ASSETS[fid]||{})[sid]=v}
    ASSET_VER++; renderUploads(); remeasureSoon();
  }catch(e){}
}
/* ---------- overlay content presets ---------- */
const OV_PRESETS=[
  ["generated","Created with AI",{title:"How this ad was made",head:"Created with AI",body:"The images in this ad were generated with AI.",link:"Learn more about AI in ads"}],
  ["modified","Edited with AI",{title:"How this ad was made",head:"Edited with AI",body:"Some images or text in this ad were edited with AI.",link:"Learn more about AI in ads"}],
  ["synthetic","Synthetic performer",{title:"How this ad was made",head:"Contains a synthetic performer",body:"A digital person created with AI appears in this ad. The person shown does not exist.",link:"Learn more about AI in ads"}]
];
const ovMatch=()=>OV_PRESETS.find(([,,c])=>c.title===S.ovTitle&&c.head===S.ovHead&&c.body===S.ovBody&&c.link===S.ovLink);
function renderOvCtl(){
  const sel=$("#ovSel");
  sel.innerHTML=OV_PRESETS.map(([id,n])=>\`<option value="\${id}">\${n}</option>\`).join("")+\`<option value="custom">Custom text…</option>\`;
  const m=ovMatch(); sel.value=m?m[0]:"custom";
  $("#ovTitle").value=S.ovTitle; $("#ovHead").value=S.ovHead; $("#ovBody").value=S.ovBody; $("#ovLink").value=S.ovLink;
}
function frameCfg(){return {placement:S.placement,text:S.text,brk:breakFor(S.text),badge:S.badge,rbSrc:RB_IMG[S.rbVariant],rbVariant:S.rbVariant,rbSize:S.rbSize,tipOpen:S.tipOpen,icon:S.icon,raw:S.lower||!LABEL_TEXTS.some(([,t])=>t===S.text),regular:true,fontSize:(S.compact&&S.badge==="capsule"&&S.text==="Contains synthetic performer(s)")?10:0,oneLine:false,centerX:false,solid:false,margin:S.margin,expanded:S.expanded,dark:S.fmtDark,mobileOpt:S.mobileOpt,tone:resolveTone(),safe:S.safe,legal:S.legal,assets:assetUrls(),assetsVer:ASSET_VER,iconStyle:S.iconStyle,ov:S.ov,ovOpen:S.ovOpen,ovContent:{title:S.ovTitle,head:S.ovHead,body:S.ovBody,link:S.ovLink}}}

function loadInto(el,f){
  return new Promise(res=>{
    const done=()=>{el.removeEventListener("load",done);setTimeout(res,30)};
    el.addEventListener("load",done);
    el.srcdoc=buildDoc(f);
  });
}

/* ---------- sidebar rendering ---------- */
function renderFormats(){
  const sel=$("#fmtSel");
  const groups=[...new Set(FORMATS.map(f=>f.group))];
  sel.innerHTML=groups.map(g=>\`<optgroup label="\${g}">\${FORMATS.filter(f=>f.group===g).map(f=>\`<option value="\${f.id}">\${f.name}</option>\`).join("")}</optgroup>\`).join("");
  sel.value=S.format;
  sel.onchange=()=>setFormat(sel.value);
  $("#fmtSub").textContent=fmt().sub;
}
const PLACES=[
  {grp:"In the branding zone",items:[["in-tl","Top left"],["in-tr","Top right"],["in-bl","Bottom left"],["in-br","Bottom right"]]},
  {grp:"Outside of the format",items:[["out-tl","Top left"],["out-tr","Top right"],["out-bl","Bottom left"],["out-br","Bottom right"]]}
];
function renderPlacements(){
  const f=fmt(),box=$("#placeBox");
  const groups=f.hasProduct?[...PLACES,{grp:"In the product zone",items:[["pz-tl","Top left"],["pz-tr","Top right"],["pz-bl","Bottom left"],["pz-br","Bottom right"]]}]:PLACES;
  box.innerHTML=groups.map(g=>\`<div class="pgrp"><div class="pgl">\${g.grp}</div><div class="pgrid">\${g.items.map(([id,l])=>\`<button type="button" data-p="\${id}" aria-pressed="\${id===S.placement}">\${l}</button>\`).join("")}</div></div>\`).join("");
  box.querySelectorAll("button").forEach(b=>b.onclick=()=>{S.placement=b.dataset.p;changed()});
  const bits=[];
  if(f.spec)bits.push(\`<b>From the canvas</b> · \${f.spec}\`);
  if(f.notes)bits.push(\`<b>Note</b> · \${f.notes}\`);
  $("#specNote").innerHTML=bits.join("<br><br>"); $("#specNote").style.display=bits.length?"":"none";
  $("#expRow").style.display=f.meta.info?"":"none";
  $("#legalRow").style.display=f.hasLegal?"":"none";
  $("#safeRow").style.display=f.hasSafe?"":"none";
}
function renderMobile(){
  const f=fmt();
  $("#mobSec").style.display=f.mobileOpts?"":"none";
  $("#mobSec h3").textContent=f.optTitle||"Mobile asset";
  if(!f.mobileOpts)return;
  $("#mobBox").innerHTML=f.mobileOpts.map(o=>\`<label><input type="radio" name="mo" value="\${o.id}" \${o.id===S.mobileOpt?"checked":""}><span>\${o.label}<small>\${o.hint}</small></span></label>\`).join("");
  $("#mobBox").querySelectorAll("input").forEach(i=>i.onchange=()=>{S.mobileOpt=i.value;changed()});
}
function renderLegib(){ $("#lmo").textContent=S.margin+"px"; }
function renderLabelCtl(){
  const sel=$("#labelSel");
  sel.innerHTML=LABEL_TEXTS.map(([id,t])=>\`<option value="\${id}">\${t}</option>\`).join("")+\`<option value="custom">Custom text…</option>\`;
  const hit=LABEL_TEXTS.find(([,t])=>t===S.text); sel.value=hit?hit[0]:"custom"; $("#labelText").value=S.text;
}
function syncControls(){
  $("#lm").value=S.margin;
  [...$("#modeSeg").children].forEach(b=>b.setAttribute("aria-pressed",(b.dataset.v==="dark")===S.fmtDark));
  document.querySelectorAll("#placeBox button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.p===S.placement));
  const isPreset=LABEL_TEXTS.some(([,t])=>t===S.text);
  [...$("#caseSeg").children].forEach(b=>b.setAttribute("aria-pressed",(b.dataset.v==="lower")===S.lower));
  $("#caseSeg").style.opacity=isPreset?"":".45"; $("#caseSeg").title=isPreset?"":"Custom text is always shown exactly as typed";
  const rd=S.badge==="round";
  [...$("#styleSeg").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===S.badge));
  $("#capsuleCtl").hidden=rd; $("#roundCtl").hidden=!rd; $("#ovSec").hidden=rd;
  [...$("#rbSeg").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===S.rbVariant));
  $("#rbSize").value=S.rbSize; $("#rbSizeO").textContent=S.rbSize+"px"; $("#tipOpen").checked=S.tipOpen;
  {const syn=S.text==="Contains synthetic performer(s)"&&S.badge==="capsule"; $("#verRow").hidden=!syn; [...$("#verSeg").children].forEach(b=>b.setAttribute("aria-pressed",(b.dataset.v==="compact")===!!S.compact))}
  $("#icon").checked=S.icon; $("#iconStyleRow").hidden=!S.icon;
  [...$("#iconSeg").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===S.iconStyle));
  $("#ovOn").checked=S.ov; $("#ovBox").hidden=!S.ov; $("#ovOpen").checked=S.ovOpen;
  $("#expanded").checked=S.expanded;$("#safe").checked=S.safe;$("#legal").checked=S.legal;$("#fit").checked=S.fit;
  renderLegib();
}

/* ---------- viewport ---------- */
function vpAvail(){return Math.max(160,$("#stage").clientWidth-36)}
function scaleFor(w){return S.fit?Math.min(1,vpAvail()/w):1}
function applySize(h){
  const w=S.w,k=scaleFor(w);
  const H=h||(+frame.dataset.h||600);
  frame.style.width=w+"px";frame.style.height=H+"px";
  $("#scaler").style.transform=\`scale(\${k})\`;
  const vp=$("#vp");vp.style.width=w*k+"px";vp.style.height=H*k+"px";
  $("#grip").style.left=(w*k+4)+"px";$("#grip").style.height=Math.min(H*k,260)+"px";
  $("#zoomInfo").textContent=\`\${w}px wide\`+(k<1?\` · shown at \${Math.round(k*100)}%\`:"");
  $("#wnum").value=w;$("#wrange").value=Math.min(1700,Math.max(MIN_VP,w));
  document.querySelectorAll("#presets button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.w===w));
}
function setWidth(w){S.w=Math.max(MIN_VP,Math.min(1800,Math.round(w)||S.w));applySize();measure();save()}

/* ---------- measuring ---------- */
function measure(){
  const win=frame.contentWindow; if(!win||!win.__measure||loadedFormat!==S.format)return;
  win.__apply(frameCfg());
  const r=win.__measure();
  last=r;
  const k=scaleFor(S.w);
  // At least tall enough for the ad, and otherwise as tall as the window allows (the header + toolbar take ~260px).
  const fillH=Math.floor(Math.max(380,window.innerHeight-260)/k);
  const H=Math.min(2400,Math.max(Math.ceil(r.unitBottom+110),Math.ceil((r.ovBottom||0)+16),fillH));
  frame.dataset.h=H; frame.style.height=H+"px";
  $("#vp").style.height=H*k+"px";$("#grip").style.height=Math.min(H*k,260)+"px";
  $("#dimFormat").textContent=Math.round(r.unitW)+"px wide"; $("#dimZone").textContent=Math.round(r.zoneW)+"px wide";
}

/* ---------- state changes ---------- */
function changed(){syncControls();measure();save()}
async function setFormat(id,keepPlacement){
  S.format=id;const f=fmt();
  if(!keepPlacement||(S.placement.startsWith("pz-")&&!f.hasProduct))S.placement=f.defaultPlacement;
  if(!f.mobileOpts)S.mobileOpt="a";
  renderFormats();renderPlacements();renderMobile();renderUploads();syncControls();save();
  loadedFormat=null;
  await loadInto(frame,f);loadedFormat=f.id;
  applySize();measure();
  setTimeout(measure,400);setTimeout(measure,1200); // images finishing
}

/* ---------- wiring ---------- */
$("#caseSeg").onclick=e=>{const b=e.target.closest("button");if(b){S.lower=b.dataset.v==="lower";changed()}};
$("#iconSeg").onclick=e=>{const b=e.target.closest("button");if(b){S.iconStyle=b.dataset.v;changed()}};
$("#ovOn").onchange=e=>{S.ov=e.target.checked;changed()};
$("#ovOpen").onchange=e=>{S.ovOpen=e.target.checked;changed()};
$("#ovSel").onchange=e=>{
  const hit=OV_PRESETS.find(([id])=>id===e.target.value);
  if(hit){const c=hit[2];S.ovTitle=c.title;S.ovHead=c.head;S.ovBody=c.body;S.ovLink=c.link;renderOvCtl();changed()} else {$("#ovHead").focus()}
};
[["#ovTitle","ovTitle"],["#ovHead","ovHead"],["#ovBody","ovBody"],["#ovLink","ovLink"]].forEach(([id,k])=>{
  $(id).oninput=e=>{S[k]=e.target.value;const m=ovMatch();$("#ovSel").value=m?m[0]:"custom";measure();save()};
});
$("#styleSeg").onclick=e=>{const b=e.target.closest("button");if(b){S.badge=b.dataset.v;changed()}};
$("#rbSeg").onclick=e=>{const b=e.target.closest("button");if(b){S.rbVariant=b.dataset.v;changed()}};
$("#rbSize").oninput=e=>{S.rbSize=+e.target.value;$("#rbSizeO").textContent=S.rbSize+"px";changed()};
$("#tipOpen").onchange=e=>{S.tipOpen=e.target.checked;changed()};
$("#verSeg").onclick=e=>{const b=e.target.closest("button");if(b){S.compact=b.dataset.v==="compact";S.icon=!S.compact;S.iconStyle="spark";S.lower=true;changed()}};
$("#icon").onchange=e=>{S.icon=e.target.checked;changed()};
$("#labelSel").onchange=e=>{
  const hit=LABEL_TEXTS.find(([id])=>id===e.target.value);
  if(hit){S.text=hit[1];$("#labelText").value=S.text;changed()} else {$("#labelText").focus()}
};
$("#labelText").oninput=e=>{
  S.text=e.target.value||" ";
  const hit=LABEL_TEXTS.find(([,t])=>t===S.text); $("#labelSel").value=hit?hit[0]:"custom";
  syncControls();measure();save();
};
$("#lm").oninput=e=>{S.margin=+e.target.value;renderLegib();measure();save()};
$("#modeSeg").onclick=e=>{const b=e.target.closest("button");if(b){S.fmtDark=b.dataset.v==="dark";changed()}};
$("#safe").onchange=e=>{S.safe=e.target.checked;changed()};
$("#expanded").onchange=e=>{S.expanded=e.target.checked;changed()};
$("#legal").onchange=e=>{S.legal=e.target.checked;changed()};
$("#fit").onchange=e=>{S.fit=e.target.checked;applySize();save()};
$("#wnum").onchange=e=>setWidth(+e.target.value);
$("#wrange").oninput=e=>setWidth(+e.target.value);
$("#presets").innerHTML=PRESETS.map(w=>\`<button data-w="\${w}">\${w}</button>\`).join("");
$("#presets").onclick=e=>{const b=e.target.closest("button");if(b)setWidth(+b.dataset.w)};
window.addEventListener("resize",()=>{applySize();measure()});
window.addEventListener("message",e=>{
  if(e.data&&e.data.type==="ai-label-toggle-expanded"&&(e.source===frame.contentWindow)){S.expanded=!S.expanded;changed()}
});

// drag handle
// A drag only exists while the primary button is actually held. Every way it can end (release anywhere, lost capture,
// cancelled pointer, window losing focus, or a move event that reports no button pressed) clears it, so it can never
// "stick" and start following the cursor on a later hover.
(()=>{
  const g=$("#grip");let drag=null;
  const end=()=>{
    if(!drag)return;
    try{g.releasePointerCapture(drag.id)}catch(e){}
    drag=null;document.body.style.userSelect="";frame.style.pointerEvents="";save();
  };
  g.addEventListener("pointerdown",e=>{
    if(e.button!==0)return;
    try{g.setPointerCapture(e.pointerId)}catch(err){}   // if capture fails the window-level guards below still end the drag
    drag={id:e.pointerId,x:e.clientX,w:S.w,k:scaleFor(S.w)};
    document.body.style.userSelect="none";
    frame.style.pointerEvents="none";      // the preview must not swallow the mouse-up while dragging over it
  });
  g.addEventListener("pointermove",e=>{
    if(!drag)return;
    if(!(e.buttons&1)){end();return}        // button already released: this is just a hover, not a drag
    S.w=Math.max(MIN_VP,Math.min(1800,Math.round(drag.w+(e.clientX-drag.x)/drag.k)));applySize();measure();
  });
  g.addEventListener("pointerup",end);
  g.addEventListener("pointercancel",end);
  g.addEventListener("lostpointercapture",end);
  window.addEventListener("pointerup",end);
  window.addEventListener("blur",end);
})();

/* ================================================================== */
/* Recommended placements view                                         */
/* ================================================================== */
const PRINCIPLES=[
  ["Placement","Ensure the badge is immediately visible within the ad, ideally in a consistent corner or designated area, close to the AI-generated content it refers to.",()=>PNOTE[0]()],
  ["Visibility","The disclosure must be recognizable without requiring user interaction (e.g., hover, click, or carousel navigation). Additional explanatory information may be made available through interaction.",()=>PNOTE[1]()],
  ["Disclosure format","Support either a text label or a standardized AI icon (e.g., the IAB-recommended monochrome sparkle ✨), where permitted by applicable legislation.",()=>PNOTE[2]()],
  ["Typography","For text-based labels, use a clear, legible font, preferably sans-serif medium or semibold. Avoid condensed or ultra-light typefaces.",()=>PNOTE[3]()],
  ["Implementation","Prefer an HTML/CSS-based badge over an image-based asset to support responsive rendering and prevent text truncation or clipping.",()=>PNOTE[4]()],
  ["Spacing","Allocate sufficient space to prevent the badge from overlapping CTAs, product information, or other essential ad elements.",()=>PNOTE[5]()],
  ["Font and icon size","Ensure readability at the final rendered dimensions across desktop and mobile. A minimum font size of 12px is recommended for text labels.",()=>PNOTE[6]()],
  ["Color contrast","Maintain a minimum contrast ratio of 4.5:1 for standard text. Icons must also provide sufficient contrast against their effective background, including transparency or overlays.",()=>PNOTE[7]()],
  ["Color adaptation","Where supported, provide light and dark variants to ensure optimal readability against different creative backgrounds.",()=>PNOTE[8]()],
  ["Accessibility","Provide meaningful screen-reader text for visual disclosures. If the badge is interactive, ensure it supports touch interaction on mobile and keyboard navigation.",()=>PNOTE[9]()],
  ["Disclosure wording","Use the text or icon required or permitted by applicable local legislation, or follow the guidance provided by your Criteo point of contact.",()=>PNOTE[10]()]
];
// The "Here" notes describe what the preview currently shows, so they follow the selected format, disclosure and version.
function pState(){const id=RS.fmt, f=FMT[id], syn=rSyn(), narrow=id==="iab-160x600", cp=syn&&(narrow||RS.size==="compact"), pl=rPlace(id);
  return {id,f,syn,narrow,cp,pl,where:PLACE_NAME[pl].toLowerCase(),locked:rLocked(f)}}
const PNOTE=[
  ()=>{const o=pState(); return \`On this format the badge sits \${o.syn&&o.narrow?"at the top, centred across the format":o.where}. The top-right corner of the branding zone is used on almost every format, and the badge only moves when something else owns that corner.\`},
  ()=>pState().syn?"The badge and its full text are always on screen. Nothing opens on hover or tap.":"The badge is always on screen. Only the wording opens on click or tap.",
  ()=>{const o=pState(); return !o.syn?\`Round badge with “AI”; a click or tap reveals “\${RS.text}”.\`:o.cp?"The full text “Contains synthetic performer(s)” on its own, without the sparkle (compact version).":"The monochrome sparkle with the full text “Contains synthetic performer(s)”, always visible."},
  ()=>{const o=pState(); return !o.syn?"The round badge is the “AI” lettering in an image. The revealed text is set in Roboto Regular, 12px.":\`Roboto Regular, \${o.cp?10:12}px.\`},
  ()=>pState().syn?"The badge is live HTML/CSS text, with a drawn SVG sparkle in the standard version. It wraps or resizes without clipping.":"The badge is a fixed-size image that scales cleanly and never clips; the revealed wording is live HTML text.",
  ()=>{const o=pState(); const extra=o.id==="interactive-header"?(o.syn?" Here it may cover part of the logo and the lower product buttons.":" Here it sits over the logo image, by design."):(o.syn&&o.id==="dst"?" Here it slightly overlaps the safe zone.":(o.syn&&o.id==="display-panel"&&!o.cp?" Here it slightly overlaps the safe zone.":"")); return "Placements were checked on the simulated desktop (1200px) and mobile (430px) previews for overlaps with the CTA, logo, product tiles, legal text and ⓘ controls."+extra},
  ()=>{const o=pState(); return !o.syn?"The badge is 24px on every format and the revealed text is 12px.":o.cp?"10px text and no icon: below the recommended 12px minimum, so it is only meant for the tightest spaces"+(o.narrow?" (the only version that fits this format).":"."):"12px text with a 14px sparkle."},
  ()=>{const o=pState(); const dk=o.locked||RS.look==="dark"; const c=o.syn?(dk?"white text and icon on #6A6A6A":"black text on white, with a #6A6A6A icon"):(dk?"a white “AI” on a #6A6A6A circle":"a black “AI” on a white circle"); return \`\${c.charAt(0).toUpperCase()+c.slice(1)}, at 80% opacity. The creative shows through, so contrast can fall below 4.5:1 on busy or bright backgrounds: check it against each creative.\`},
  ()=>pState().locked?"Dark only on this format: the color mode is not passed with the ad, so the badge is rendered in Dark by default.":"Light and dark variants. Switch the color mode above.",
  ()=>pState().syn?"The text is always visible and read like normal page content. There is nothing to operate by keyboard or touch.":"The badge is a focusable button that announces the full wording; Enter, Space or a tap reveals it, Escape closes it.",
  ()=>"Three disclosures: “AI generated” or “AI modified” (Europe, UK and similar) and “Contains synthetic performer(s)” (some US clients), which must always appear in full, not as a second layer on hover or tap."
];
const PLACE_NAME={"in-tl":"Top left of the branding zone","in-tr":"Top right of the branding zone","in-bl":"Bottom left of the branding zone","in-br":"Bottom right of the branding zone",
  "out-tl":"Top left, just above the format","out-tr":"Top right, just above the format","out-bl":"Bottom left, just below the format","out-br":"Bottom right, just below the format"};
// "Contains synthetic performer(s)" is always shown in full, so it is wider than the badge: where it would cover the logo or the safe zone it moves just outside the format
const RSYN={"interactive-header":"in-bl"};
const rSyn=()=>RS.text===RWORDS[2];
const rPlace=id=>(rSyn()&&RSYN[id])||REC[id][0][0];
const R_TOP="The corner readers scan first for an ad marker, and the same corner on most formats. ";
/* [placement, why, [principle numbers]] for the recommended and the backup option of every format */
const REC={
  "cd-spotlight":[["in-tr",R_TOP+"It stays clear of the logo, ⓘ, CTA and carousel controls at every width tested.",[1,6]]],
  "cd-shelf":[["in-tr",R_TOP+"The bottom corners are not an option here: they run into the CTA.",[1,6]]],
  "grid-duet":[["in-tr",R_TOP+"The bottom corners overlap the CTA, so the badge stays at the top.",[1,6]]],
  "bd-grid-solo":[["in-tr",R_TOP+"The bottom corners overlap the CTA.",[1,6]]],
  "bd-spotlight-solo":[["in-tr",R_TOP+"Nothing else competes for it.",[1,6]]],
  "flagship":[["in-tr","Top right, the same corner as its Evolved counterpart, CD Spotlight. Clear of the sponsored tag and product tile at every width tested.",[1,6]]],
  "showcase":[["in-tr",R_TOP+"Nothing inside the creative competes for it.",[1,6]]],
  "butterfly":[["in-tr",R_TOP+"Both bottom corners sit inside the safe zone, so the badge stays at the top.",[1,6]]],
  "branded-header":[["in-tr",R_TOP+"Clear of the logo and CTA at every width.",[1,6]]],
  "interactive-header":[["in-bl","Bottom left of the branding zone, over the logo image and close to the brand it refers to. The product buttons stay clear.",[1,6]]],
  "dst":[["in-tr",R_TOP+"Nothing else competes for it.",[1,6]]],
  "display-panel":[["in-tr",R_TOP+"Nothing else competes for it.",[1,6]]],
  "iab-300x250":[["in-tr","Top right, the same corner as the onsite formats. Clear of the creative’s content at every width tested.",[1,6]]],
  "iab-728x90":[["in-tr","Top right, the same corner as the onsite formats. Clear of the creative’s content at every width tested.",[1,6]]],
  "iab-160x600":[["in-tr","Top right, the same corner as the onsite formats. Clear of the creative’s content at every width tested.",[1,6]]]
};
const R_KEY="ai-label-rec-v2";
const RS=Object.assign({text:"AI generated",look:"dark",style:"round",dev:"desktop",fmt:"cd-spotlight",expanded:false,mob:"grid",size:"standard"},(()=>{try{return JSON.parse(localStorage.getItem(R_KEY)||"{}")}catch(e){return {}}})());
const RWORDS=["AI generated","AI modified","Contains synthetic performer(s)"];
const RLOOKS=[["dark","Dark"],["light","Light"]];   // the round badge always uses its 50% artwork
if(!RWORDS.includes(RS.text))RS.text=RWORDS[0];
RS.look=String(RS.look).indexOf("light")===0?"light":"dark";
if(!["desktop","mobile"].includes(RS.dev))RS.dev="desktop";
if(!["standard","compact"].includes(RS.size))RS.size="standard";
RS.expanded=false;
const RCARD={}; // formatId -> {el, frame, ready, loading}
function rSave(){try{localStorage.setItem(R_KEY,JSON.stringify(RS))}catch(e){}}
const rLocked=f=>f.group!=="Evolved Onsite Display";   // only the Evolved formats receive the color mode with the ad
const rTone=()=>rLocked(FMT[RS.fmt])||RS.look.indexOf("light")!==0?"dark":"light";   // the creative follows the badge: dark badge on the dark creative, light on light
function rCfg(f){
  const tone=rTone(), dark=tone==="dark";
  const base=Object.assign(frameCfg(),{placement:rPlace(f.id),margin:4,expanded:RS.expanded,dark,tone,safe:false,mobileOpt:(R_GRID3.includes(f.id)&&rDev(f)==="mobile"&&RS.mob==="horizontal")?"b":"a",tipOpen:false,ovOpen:false,regular:true});
  if(RS.text===RWORDS[2])   // "Contains synthetic performer(s)": monochrome sparkle + the full text, always visible (never a second layer)
    {const narrow=f.id==="iab-160x600", cp=narrow||RS.size==="compact";   // compact = text only, 10px, one line; the 160x600 can only take this one
      return Object.assign(base,{badge:"capsule",text:RS.text,brk:null,icon:!cp,iconStyle:"spark",raw:true,solid:true,oneLine:narrow||f.id==="interactive-header",centerX:narrow,fontSize:cp?10:0,ov:false,tipOnly:false,tipText:"",rbVariant:tone})}
  return Object.assign(base,{badge:"round",text:RS.text,brk:breakFor(RS.text),rbSrc:RB_IMG[tone+"80"],rbVariant:tone+"80",rbSize:24,icon:false,raw:false,solid:false,oneLine:false,centerX:false,fontSize:0,ov:false,tipOnly:false,tipText:""});
}
/* Desktop-only formats are replaced by a mobile format on phones; the two headers are the mobile formats. */
const R_DESK=["flagship","showcase","butterfly"], R_MOB=["branded-header","interactive-header"];
const R_GRID3=["cd-shelf","grid-duet","bd-grid-solo"];   // the grid formats also have a horizontal-image mobile layout
const R_MOBW=430;   // a common large phone width (e.g. iPhone Pro Max), still inside the ≤540px mobile layouts
const rDev=f=>R_DESK.includes(f.id)?"desktop":R_MOB.includes(f.id)?"mobile":RS.dev;
function rWidth(f){ if(rDev(f)==="mobile"&&f.group!=="IAB")return R_MOBW; if(f.group==="IAB"){const m=f.id.match(/(\\d+)x(\\d+)/);return +m[1]+60} return 1200 }
function rLayout(id){
  const c=RCARD[id], f=FMT[id]; if(!c||!c.ready||c.el.hidden)return;
  const pv=c.el.querySelector(".fpv"), wrap=c.el.querySelector(".fwrap"), sc=c.el.querySelector(".fscale");
  const tw=rWidth(f), avail=pv.clientWidth-28, k=Math.min(1,avail/tw);
  const win=c.frame.contentWindow; if(!win||!win.__measure)return;
  c.frame.style.width=tw+"px"; win.__apply(rCfg(f)); const r=win.__measure();
  const crop=rPlace(id).startsWith("out-t")?0:40, bottom=Math.max(r.unitBottom+22,(r.ovBottom||0)+12);
  const H=Math.ceil(bottom), vis=Math.max(60,H-crop);
  c.frame.style.height=H+"px"; sc.style.transform=\`scale(\${k}) translateY(\${-crop}px)\`;
  wrap.style.width=Math.round(tw*k)+"px"; wrap.style.height=Math.round(vis*k)+"px";
  const z=c.el.querySelector(".fzoom"); z.hidden=k>=0.995; z.textContent=\`Shown at \${Math.round(k*100)}% to fit the available space. Simulated viewport: \${tw}px wide.\`;
}
async function rLoad(id){
  const c=RCARD[id]; if(!c||c.ready||c.loading)return; c.loading=true;
  const f=FMT[id]; c.frame.style.width=rWidth(f)+"px"; c.frame.style.height="400px";
  await loadInto(c.frame,f); c.ready=true; c.el.querySelector(".ph").remove();
  try{const d=c.frame.contentDocument, again=()=>{clearTimeout(c.t);c.t=setTimeout(()=>rLayout(id),80)};   // the revealed text may need more room
    d.addEventListener("click",again);d.addEventListener("keydown",again);
    [d.getElementById("ai-label"),d.getElementById("ai-tip")].forEach(el=>["pointerenter","pointerleave"].forEach(t=>el.addEventListener(t,again)))}catch(e){}
  rLayout(id); setTimeout(()=>rLayout(id),500); setTimeout(()=>rLayout(id),1400);
}
function rRenderWhy(id){
  const o=REC[id][0].slice(), c=RCARD[id], f=FMT[id], pl=rPlace(id);
  if(pl!==o[0]){o[0]=pl;o[1]="The full text is always shown, so it is wider than the badge and would cover the "+(id==="interactive-header"?"logo":"safe zone")+" of this format. It sits just outside the format, at the top right, where nothing competes for it."}
  if(rSyn()&&id==="interactive-header")o[1]="Bottom left, over the logo image and close to the brand it refers to. The full text stays on a single line, so it may cover part of the logo and the lower product buttons.";
  c.el.querySelector(".fwhy").innerHTML=
    \`<div class="where"><span class="pill rec">Recommended</span><span>\${PLACE_NAME[o[0]]}</span>\`+
    \`<a class="open" href="#f=\${id}&p=\${o[0]}&w=\${rDev(f)==="mobile"?R_MOBW:1200}" data-pg="\${id}|\${o[0]}">Open in playground →</a></div>\`+
    \`<p>\${esc(o[1])}\${rSyn()&&id==="iab-160x600"?" This narrow format gets a compact version: the full text on a single line, set in 10px, without the sparkle icon, and centred across the top.":""}</p><p class="hint">\${RS.text===RWORDS[2]?"This disclosure is always shown in full, it is never revealed on hover or tap.":"Hover or click the badge to read the wording."} Where the format has an ⓘ icon, click it to open the more-info text and see the badge move below it.</p>\`;
}
let rBuilt=false;
function rBuild(){
  if(rBuilt)return; rBuilt=true;
  $("#rPrinc").innerHTML=\`<h3>Guiding principles</h3><p class="sub">AI Disclosure Badge — Implementation Guidelines. Every principle applies to every format.</p>\`+PRINCIPLES.map(([t,txt,app],i)=>\`<div class="pitem"><h4><span class="n">\${i+1}</span>\${esc(t)}</h4><p>\${esc(txt)}</p><div class="app-note"><b>Here:</b> \${esc(app())}</div></div>\`).join("");
  const groups=[...new Set(FORMATS.map(f=>f.group))];
  $("#fSelect").innerHTML=groups.map(g=>\`<optgroup label="\${esc(g)}">\${FORMATS.filter(f=>f.group===g).map(f=>\`<option value="\${f.id}">\${esc(f.name)}</option>\`).join("")}</optgroup>\`).join("");
  $("#fSelect").onchange=e=>rSelect(e.target.value);
  $("#rWords").innerHTML=RWORDS.map(t=>\`<option>\${esc(t)}</option>\`).join("");
  $("#rFormats").innerHTML=FORMATS.map(f=>
    \`<article class="fitem" id="r-\${f.id}" hidden>\`+
    \`<div class="fzoom" hidden></div><div class="fpv"><div class="fwrap"><div class="fscale"><iframe title="\${esc(f.name)} with the AI badge"></iframe></div></div><div class="ph">Loading preview…</div></div>\`+
    \`<div class="fwhy"></div></article>\`).join("");
  FORMATS.forEach(f=>{
    const el=$("#r-"+f.id); RCARD[f.id]={el,frame:el.querySelector("iframe"),ready:false,loading:false};
    el.dataset.id=f.id; rRenderWhy(f.id);
  });
  $("#rFormats").addEventListener("click",e=>{const a=e.target.closest("a[data-pg]");if(!a)return;e.preventDefault();const [id,p]=a.dataset.pg.split("|");
    S.format=id;S.placement=p;S.fmtDark=rTone()==="dark";if(rDev(FMT[id])==="mobile")S.w=R_MOBW; if(R_GRID3.includes(id))S.mobileOpt=(rDev(FMT[id])==="mobile"&&RS.mob==="horizontal")?"b":"a";
    if(RS.text!==RWORDS[2]){S.badge="round";S.rbVariant=rTone()+"80";S.text=RS.text}
    else{const cp=id==="iab-160x600"||RS.size==="compact";S.badge="capsule";S.text=RS.text;S.lower=true;S.icon=!cp;S.compact=cp;S.iconStyle="spark";S.ov=false}
    setView("playground");setFormat(id,true)});
  window.addEventListener("resize",()=>{clearTimeout(rBuild.t);rBuild.t=setTimeout(rLayoutAll,120)});
  window.addEventListener("message",e=>{   // the ⓘ icon inside a preview opens / closes the more-info text
    if(e.data&&e.data.type==="ai-label-toggle-expanded"&&Object.values(RCARD).some(c=>c.frame.contentWindow===e.source)){RS.expanded=!RS.expanded;rLayoutAll()}
  });
  rSelect(RS.fmt);
}
function rLayoutAll(){rLayout(RS.fmt)}
function rSelect(id){
  if(!FMT[id])id=FORMATS[0].id; RS.fmt=id; RS.expanded=false; RS.dev="desktop"; RS.mob="grid"; RS.size="standard"; rSave();   // every format opens on desktop when it has one
  $("#fSelect").value=id; rSync();
  FORMATS.forEach(f=>{RCARD[f.id].el.hidden=f.id!==id});
  rLoad(id).then(()=>rLayout(id)); rLayout(id);
}
function rSync(){
  $("#rLook").innerHTML=RLOOKS.map(([k,n])=>\`<option value="\${k}">\${n}</option>\`).join("");
  {const f=FMT[RS.fmt], narrow=RS.fmt==="iab-160x600"; $("#rSizeWrap").hidden=!rSyn(); $("#rSize").value=narrow?"compact":RS.size; $("#rSize").disabled=narrow; $("#rSize").title=narrow?"The compact version is the only one that fits this narrow format.":""}
  if(rBuilt)document.querySelectorAll("#rPrinc .app-note").forEach((el,i)=>{el.innerHTML="<b>Here:</b> "+esc(PRINCIPLES[i][2]())});
  $("#rMobWrap").hidden=!(R_GRID3.includes(RS.fmt)&&rDev(FMT[RS.fmt])==="mobile"); $("#rMob").value=RS.mob;
  const lk=rLocked(FMT[RS.fmt]); $("#rLook").value=lk?"dark":RS.look; $("#rLook").disabled=lk; $("#rLook").title=lk?"Dark by default: this format does not receive the color mode with the ad.":""; $("#rNote").hidden=!lk; $("#rWords").value=RS.text;
  const ef=rDev(FMT[RS.fmt]), locked=R_DESK.includes(RS.fmt)||R_MOB.includes(RS.fmt);
  [...$("#rDev").children].forEach(b=>{b.setAttribute("aria-pressed",b.dataset.v===ef);b.disabled=locked;b.title=b.disabled?(R_DESK.includes(RS.fmt)?"This format is desktop only. On mobile it is replaced by Branded Header or Interactive Header.":"This format is mobile only."):""});
}
function rChanged(){rSync();rSave();FORMATS.forEach(f=>RCARD[f.id]&&rRenderWhy(f.id));rLayoutAll()}
$("#rWords").onchange=e=>{RS.text=e.target.value;rChanged()};
$("#rSize").onchange=e=>{RS.size=e.target.value;rChanged()};
$("#rLook").onchange=e=>{RS.look=e.target.value;rChanged()};
$("#rMob").onchange=e=>{RS.mob=e.target.value;rChanged()};
$("#rDev").onclick=e=>{const b=e.target.closest("button");if(b&&!b.disabled){RS.dev=b.dataset.v;rChanged();FORMATS.forEach(f=>RCARD[f.id]&&rRenderWhy(f.id))}};

/* ---------- views: Recommended placements | Playground ---------- */
let VIEW=viewFromHash();
function viewFromHash(){const h=location.hash;return (h===""||h==="#"||/^#recommended/.test(h))?"recommended":"playground"}
function setView(v){
  VIEW=v; const rec=v==="recommended";
  $(".app").hidden=rec; $("#rec").hidden=!rec; $("#topNote").hidden=rec;
  document.querySelectorAll("#viewTabs a").forEach(a=>{if(a.dataset.view===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  try{ if(rec)history.replaceState(null,"","#recommended"); }catch(e){}
  if(rec){rBuild();rSync();setTimeout(rLayoutAll,60)} else {save();setTimeout(()=>{applySize();measure()},0)}
}
window.addEventListener("hashchange",()=>{const v=viewFromHash();if(v!==VIEW)setView(v)});

renderFormats();renderPlacements();renderMobile();renderLabelCtl();renderOvCtl();syncControls();
setView(VIEW);
setFormat(S.format,true);
loadAssets();
</script>

</body></html>`;
  return (
    <iframe
      title="AI Label Placement Lab"
      srcDoc={html}
      loading="lazy"
      style={{ width: "100%", height, border: "1px solid #d9dce3", borderRadius: "12px" }}
    ></iframe>
  );
};
