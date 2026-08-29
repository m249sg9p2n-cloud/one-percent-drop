// ============================================================
// 1% DROP
// EFFECTS V5 - COMPLETE REBUILD
//
// ・Sharp PUCHUN + short heavy sub impact
// ・BLACKOUT
// ・Text emerging from darkness
// ・RARE / EPIC / LEGEND / GOD unique presentation
// ・GOD uses the same real PUCHUN
// ・Premium rarity-specific DROP CARD
// ・No old patch dependency
// ・iPhone lightweight
// ============================================================

(() => {

  "use strict";

  if (window.__ONE_PERCENT_EFFECTS_V5__) return;
  window.__ONE_PERCENT_EFFECTS_V5__ = true;


  // ============================================================
  // CONFIG
  // ============================================================

  const FX = {

    RARE:{
      color:"#48aaff",
      light:"#d7f1ff",
      dark:"#03101e",
      phrase:"A BLUE SIGN APPEARS",
      rate:"20%",
      hold:720,
      build:1450,
      particles:6
    },

    EPIC:{
      color:"#c45cff",
      light:"#ff8deb",
      dark:"#110319",
      phrase:"POWER BEYOND THE ORDINARY",
      rate:"8%",
      hold:820,
      build:1600,
      particles:9
    },

    LEGEND:{
      color:"#ffd63f",
      light:"#fff3ae",
      dark:"#181000",
      phrase:"THE LEGEND AWAKENS",
      rate:"1.9%",
      hold:950,
      build:1800,
      particles:12
    },

    GOD:{
      color:"#ffffff",
      light:"#8ff7ff",
      dark:"#000000",
      phrase:"THE WORLD HAS CHOSEN YOU",
      rate:"0.1%",
      hold:1200,
      build:2150,
      particles:16
    }

  };


  // ============================================================
  // CSS
  // ============================================================

  const style = document.createElement("style");

  style.textContent = `

  /* ============================================================
     MASTER STAGE
  ============================================================ */

  .fx5Stage{
    position:fixed;
    inset:0;
    z-index:2147483000;
    overflow:hidden;
    pointer-events:none;
    background:transparent;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  }

  .fx5Black{
    position:absolute;
    inset:0;
    z-index:1;
    background:#000;
    opacity:0;
  }

  .fx5Black.on{
    opacity:1;
  }


  /* ============================================================
     PUCHUN
  ============================================================ */

  .fx5White{
    position:absolute;
    inset:0;
    z-index:20;
    background:white;
    opacity:0;
  }

  .fx5White.fire{
    animation:fx5White 34ms steps(1,end) forwards;
  }

  @keyframes fx5White{
    0%,98%{opacity:1}
    100%{opacity:0}
  }


  .fx5Core{
    position:absolute;
    left:50%;
    top:50%;
    z-index:15;

    width:min(108vw,820px);
    aspect-ratio:1;

    border-radius:50%;

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(1.2);

    background:
      radial-gradient(
        circle,
        #fff 0%,
        #fff 3%,
        rgba(234,250,255,1) 7%,
        rgba(175,225,255,.85) 14%,
        rgba(83,160,255,.33) 30%,
        transparent 60%
      );
  }

  .fx5Core.cut{
    animation:
      fx5CoreCut
      195ms
      cubic-bezier(.76,0,.97,.35)
      forwards;
  }

  @keyframes fx5CoreCut{

    0%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(1.2);
    }

    22%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(.78);
    }

    44%{
      opacity:.98;
      transform:
        translate(-50%,-50%)
        scale(.46);
    }

    65%{
      opacity:.88;
      transform:
        translate(-50%,-50%)
        scale(.23);
    }

    83%{
      opacity:.55;
      transform:
        translate(-50%,-50%)
        scale(.07);
    }

    100%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.005);
    }

  }


  .fx5BeamH{

    position:absolute;

    left:50%;
    top:50%;

    z-index:16;

    width:185vw;
    height:13px;

    opacity:0;

    transform:
      translate(-50%,-50%);

    background:
      linear-gradient(
        to bottom,
        transparent,
        rgba(210,242,255,.35),
        #fff,
        #fff,
        rgba(210,242,255,.35),
        transparent
      );

    box-shadow:
      0 0 8px #fff,
      0 0 22px rgba(210,244,255,.9),
      0 0 52px rgba(90,170,255,.55);

  }


  .fx5BeamH.cut{

    animation:
      fx5BeamHCut
      195ms
      linear
      forwards;

  }


  @keyframes fx5BeamHCut{

    0%{
      opacity:1;
      width:185vw;
      height:13px;
    }

    45%{
      opacity:.95;
      width:100vw;
      height:8px;
    }

    75%{
      opacity:.65;
      width:35vw;
      height:3px;
    }

    100%{
      opacity:0;
      width:2px;
      height:1px;
    }

  }


  .fx5BeamV{

    position:absolute;

    left:50%;
    top:50%;

    z-index:16;

    width:6px;
    height:85vh;

    opacity:0;

    transform:
      translate(-50%,-50%);

    background:
      linear-gradient(
        to right,
        transparent,
        rgba(220,247,255,.6),
        #fff,
        rgba(220,247,255,.6),
        transparent
      );

    box-shadow:
      0 0 12px white,
      0 0 32px rgba(110,205,255,.45);

  }


  .fx5BeamV.cut{

    animation:
      fx5BeamVCut
      145ms
      linear
      forwards;

  }


  @keyframes fx5BeamVCut{

    0%{
      opacity:.85;
      height:85vh;
    }

    55%{
      opacity:.55;
      height:32vh;
    }

    100%{
      opacity:0;
      height:2px;
    }

  }


  /* ============================================================
     AFTER PUCHUN
  ============================================================ */

  .fx5Awaken{

    position:absolute;
    inset:0;

    z-index:5;

    overflow:hidden;

    background:#000;

    opacity:0;

    color:var(--fx);

  }

  .fx5Awaken.show{
    opacity:1;
  }


  /* ---- tiny point ---- */

  .fx5Point{

    position:absolute;

    left:50%;
    top:50%;

    width:3px;
    height:3px;

    border-radius:50%;

    background:#fff;

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.01);

    box-shadow:
      0 0 5px white,
      0 0 14px var(--fx),
      0 0 35px var(--fx);

  }


  .fx5Awaken.point .fx5Point{

    animation:
      fx5Point
      .8s
      cubic-bezier(.12,.8,.25,1)
      forwards;

  }


  @keyframes fx5Point{

    0%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.01);
    }

    50%{
      opacity:.8;
    }

    80%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(2.2);
    }

    100%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(1);
    }

  }


  /* ---- thin light ---- */

  .fx5Line{

    position:absolute;

    left:50%;
    top:50%;

    width:0;
    height:1px;

    transform:
      translate(-50%,-50%);

    opacity:0;

    background:
      linear-gradient(
        90deg,
        transparent,
        var(--fx),
        #fff,
        var(--fx),
        transparent
      );

    box-shadow:
      0 0 7px white,
      0 0 18px var(--fx);

  }


  .fx5Awaken.line .fx5Line{

    animation:
      fx5Line
      .72s
      cubic-bezier(.15,.78,.25,1)
      forwards;

  }


  @keyframes fx5Line{

    0%{
      width:0;
      opacity:0;
    }

    12%{
      opacity:1;
    }

    100%{
      width:min(84vw,390px);
      opacity:.7;
    }

  }


  /* ---- rings ---- */

  .fx5Ring,
  .fx5Ring2{

    position:absolute;

    left:50%;
    top:50%;

    border-radius:50%;

    opacity:0;

    color:var(--fx);

    transform:
      translate(-50%,-50%)
      scale(.2);

  }


  .fx5Ring{

    width:min(76vw,360px);
    aspect-ratio:1;

    border:1px solid currentColor;

  }


  .fx5Ring2{

    width:min(54vw,255px);
    aspect-ratio:1;

    border:1px solid currentColor;

  }


  .fx5Awaken.build .fx5Ring{

    animation:
      fx5Ring1
      2s
      ease-out
      forwards;

  }


  .fx5Awaken.build .fx5Ring2{

    animation:
      fx5Ring2
      1.8s
      ease-out
      .12s
      forwards;

  }


  @keyframes fx5Ring1{

    0%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.2)
        rotate(-30deg);
    }

    50%{
      opacity:.4;
    }

    100%{
      opacity:.13;
      transform:
        translate(-50%,-50%)
        scale(1.05)
        rotate(15deg);
    }

  }


  @keyframes fx5Ring2{

    0%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.25)
        rotate(30deg);
    }

    55%{
      opacity:.4;
    }

    100%{
      opacity:.17;
      transform:
        translate(-50%,-50%)
        scale(1)
        rotate(-12deg);
    }

  }


  /* ---- text ---- */

  .fx5Signal{

    position:absolute;

    left:50%;
    top:38%;

    width:100%;

    transform:
      translateX(-50%);

    text-align:center;

    font-size:9px;

    font-weight:900;

    letter-spacing:8px;

    color:var(--fx);

    opacity:0;

  }


  .fx5Awaken.build .fx5Signal{

    animation:
      fx5Signal
      .7s
      ease-out
      forwards;

  }


  @keyframes fx5Signal{

    from{
      opacity:0;
      letter-spacing:13px;
    }

    to{
      opacity:.75;
      letter-spacing:8px;
    }

  }


  .fx5Phrase{

    position:absolute;

    left:5%;
    right:5%;

    top:43%;

    text-align:center;

    font-family:
      Georgia,
      "Times New Roman",
      serif;

    font-size:
      clamp(18px,5.3vw,26px);

    font-weight:700;

    letter-spacing:3px;

    color:white;

    text-shadow:
      0 0 10px var(--fx),
      0 0 25px var(--fx);

  }


  .fx5Letter{

    display:inline-block;

    opacity:0;

    transform:
      translateY(12px)
      scale(.88);

    filter:blur(5px);

  }


  .fx5Awaken.build .fx5Letter{

    animation:
      fx5Letter
      .52s
      ease-out
      forwards;

    animation-delay:
      calc(var(--i) * 42ms);

  }


  @keyframes fx5Letter{

    to{
      opacity:1;

      filter:blur(0);

      transform:
        translateY(0)
        scale(1);
    }

  }


  /* ============================================================
     PARTICLES
  ============================================================ */

  .fx5Spark{

    position:absolute;

    left:50%;
    top:50%;

    width:2px;
    height:2px;

    border-radius:50%;

    background:#fff;

    box-shadow:
      0 0 7px #fff,
      0 0 15px var(--fx);

    opacity:0;

    transform:
      rotate(var(--a))
      translateX(10px);

  }


  .fx5Awaken.build .fx5Spark{

    animation:
      fx5Spark
      1.5s
      ease-out
      var(--d)
      forwards;

  }


  @keyframes fx5Spark{

    0%{
      opacity:0;

      transform:
        rotate(var(--a))
        translateX(10px)
        scale(.4);
    }

    25%{
      opacity:.9;
    }

    100%{
      opacity:0;

      transform:
        rotate(var(--a))
        translateX(var(--r))
        scale(1);
    }

  }


  /* ============================================================
     SECOND BLACKOUT
  ============================================================ */

  .fx5SecondBlack{

    position:absolute;

    inset:0;

    z-index:30;

    background:#000;

    opacity:0;

  }


  .fx5SecondBlack.hit{

    animation:
      fx5SecondBlack
      230ms
      steps(1,end)
      forwards;

  }


  @keyframes fx5SecondBlack{

    0%,68%{
      opacity:1;
    }

    69%,100%{
      opacity:0;
    }

  }


  /* ============================================================
     FINAL RARITY
  ============================================================ */

  .fx5Final{

    position:absolute;

    inset:0;

    z-index:25;

    display:flex;

    align-items:center;
    justify-content:center;

    opacity:0;

  }


  .fx5Final.hit{
    opacity:1;
  }


  .fx5FinalWord{

    position:relative;

    font-size:
      clamp(72px,23vw,125px);

    line-height:.85;

    font-weight:1000;

    letter-spacing:-2px;

    color:var(--fx);

    opacity:0;

    transform:scale(2.6);

    filter:blur(8px);

    text-shadow:
      0 0 10px var(--fx),
      0 0 30px var(--fx),
      0 0 70px var(--fx);

  }


  .fx5Final.hit
  .fx5FinalWord{

    animation:
      fx5Final
      .72s
      cubic-bezier(.12,1.25,.25,1)
      forwards;

  }


  @keyframes fx5Final{

    0%{
      opacity:0;
      transform:scale(2.6);
      filter:blur(8px);
    }

    18%{
      opacity:1;
      filter:blur(0);
    }

    55%{
      transform:scale(.88);
    }

    78%{
      transform:scale(1.06);
    }

    100%{
      opacity:1;
      transform:scale(1);
      filter:blur(0);
    }

  }


  .fx5Burst{

    position:absolute;

    left:50%;
    top:50%;

    z-index:22;

    width:8px;
    height:8px;

    border-radius:50%;

    background:#fff;

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.01);

    box-shadow:
      0 0 25px white,
      0 0 70px var(--fx);

  }


  .fx5Burst.hit{

    animation:
      fx5Burst
      .62s
      ease-out
      forwards;

  }


  @keyframes fx5Burst{

    0%{
      opacity:1;

      transform:
        translate(-50%,-50%)
        scale(.01);
    }

    50%{
      opacity:.7;
    }

    100%{
      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(110);
    }

  }


  /* ============================================================
     GOD SPECIAL
  ============================================================ */

  .fx5Awaken.GOD .fx5FinalWord{

    background:
      linear-gradient(
        90deg,
        #fff,
        #7ff5ff,
        #bd8cff,
        #ff82dc,
        #fff1a5,
        #fff
      );

    background-size:240% 100%;

    -webkit-background-clip:text;
    background-clip:text;

    color:transparent;

    text-shadow:none;

    filter:
      drop-shadow(
        0 0 12px
        rgba(255,255,255,.85)
      );

  }


  .fx5GodCrack{

    display:none;

    position:absolute;

    left:50%;
    top:50%;

    z-index:8;

    width:1px;
    height:1px;

  }


  .fx5Awaken.GOD
  .fx5GodCrack{

    display:block;

  }


  .fx5GodRay{

    position:absolute;

    left:0;
    top:0;

    width:0;
    height:2px;

    opacity:0;

    transform-origin:0 50%;

    background:
      linear-gradient(
        90deg,
        #fff,
        #85f6ff,
        #d38cff,
        #ff8edc,
        transparent
      );

    box-shadow:
      0 0 8px white,
      0 0 18px #8bf5ff;

  }


  .fx5Awaken.GOD.build
  .fx5GodRay{

    animation:
      fx5GodRay
      .85s
      ease-out
      var(--delay)
      forwards;

  }


  @keyframes fx5GodRay{

    0%{
      width:0;
      opacity:0;
    }

    15%{
      opacity:1;
    }

    100%{
      width:70vw;
      opacity:.55;
    }

  }


  /* ============================================================
     FINAL FLASH
  ============================================================ */

  .fx5Flash{

    position:absolute;

    inset:0;

    z-index:60;

    background:#fff;

    opacity:0;

  }


  .fx5Flash.hit{

    animation:
      fx5Flash
      160ms
      ease-out
      forwards;

  }


  @keyframes fx5Flash{

    from{opacity:.92}
    to{opacity:0}

  }


  /* ============================================================
     PREMIUM DROP SCREEN
  ============================================================ */

  #dropOverlay.fx5Drop{

    overflow:hidden;

    background:#02040a !important;

  }


  #dropOverlay.fx5Drop::before{

    content:"";

    position:absolute;

    left:50%;
    top:45%;

    width:min(120vw,600px);
    aspect-ratio:1;

    border-radius:50%;

    pointer-events:none;

    opacity:.25;

    transform:
      translate(-50%,-50%);

    background:
      radial-gradient(
        circle,
        var(--dropFX) 0%,
        transparent 58%
      );

    animation:
      fx5DropAura
      2.8s
      ease-in-out
      infinite alternate;

  }


  @keyframes fx5DropAura{

    from{
      opacity:.12;
      transform:
        translate(-50%,-50%)
        scale(.82);
    }

    to{
      opacity:.3;
      transform:
        translate(-50%,-50%)
        scale(1.08);
    }

  }


  #dropCard.fx5Card{

    position:relative;

    overflow:hidden;

    border:
      1px solid
      var(--dropFX) !important;

    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,.075),
        rgba(10,12,23,.97) 30%,
        rgba(3,4,9,.99)
      ) !important;

    box-shadow:
      0 0 0 1px rgba(255,255,255,.05),
      0 0 28px var(--dropGlow),
      0 30px 70px rgba(0,0,0,.8) !important;

    animation:
      fx5CardIn
      .68s
      cubic-bezier(.15,1,.28,1)
      forwards !important;

  }


  @keyframes fx5CardIn{

    0%{
      opacity:0;

      transform:
        translateY(28px)
        scale(.78);
    }

    65%{
      opacity:1;

      transform:
        translateY(-4px)
        scale(1.025);
    }

    100%{
      opacity:1;

      transform:
        translateY(0)
        scale(1);
    }

  }


  #dropCard.fx5Card::after{

    content:"";

    position:absolute;

    left:-65%;
    top:-30%;

    width:45%;
    height:160%;

    pointer-events:none;

    transform:rotate(18deg);

    background:
      linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.05),
        rgba(255,255,255,.22),
        rgba(255,255,255,.05),
        transparent
      );

    animation:
      fx5Sweep
      2.7s
      ease-in-out
      .6s
      infinite;

  }


  @keyframes fx5Sweep{

    0%,30%{
      left:-65%;
    }

    70%,100%{
      left:125%;
    }

  }


  #dropOverlay.fx5Drop .dropLabel,
  #dropOverlay.fx5Drop .dropRarity,
  #dropOverlay.fx5Drop .dropIcon,
  #dropOverlay.fx5Drop .dropName,
  #dropOverlay.fx5Drop .dropEffect,
  #dropOverlay.fx5Drop .dropChance,
  #dropOverlay.fx5Drop .dropButtons{

    opacity:0;

    transform:
      translateY(10px);

    animation:
      fx5DropPart
      .55s
      ease-out
      forwards;

  }


  #dropOverlay.fx5Drop .dropLabel{
    animation-delay:.18s;
  }

  #dropOverlay.fx5Drop .dropRarity{
    animation-delay:.34s;

    text-shadow:
      0 0 18px
      var(--dropFX);
  }

  #dropOverlay.fx5Drop .dropIcon{
    animation-delay:.55s;

    transform:
      translateY(12px)
      scale(.65);

    filter:
      drop-shadow(
        0 0 16px
        var(--dropFX)
      );
  }

  #dropOverlay.fx5Drop .dropName{
    animation-delay:.78s;
  }

  #dropOverlay.fx5Drop .dropEffect{
    animation-delay:.98s;
  }

  #dropOverlay.fx5Drop .dropChance{
    animation-delay:1.15s;
  }

  #dropOverlay.fx5Drop .dropButtons{
    animation-delay:1.32s;
  }


  @keyframes fx5DropPart{

    to{
      opacity:1;

      transform:
        translateY(0)
        scale(1);
    }

  }


  #dropOverlay.fx5Drop.GOD
  .dropRarity{

    background:
      linear-gradient(
        90deg,
        #fff,
        #7bf4ff,
        #d28cff,
        #ff82d9,
        #fff2a7,
        #fff
      );

    background-size:230% 100%;

    -webkit-background-clip:text;
    background-clip:text;

    color:transparent !important;

    animation:
      fx5DropPart
      .55s
      ease-out
      .34s
      forwards,
      fx5GodGradient
      1.5s
      linear
      .8s
      infinite;

  }


  @keyframes fx5GodGradient{

    to{
      background-position:230% 0;
    }

  }


  #dropOverlay.fx5Drop.GOD
  #dropCard{

    border-color:#fff !important;

    box-shadow:
      0 0 12px rgba(255,255,255,.75),
      0 0 32px rgba(100,235,255,.38),
      0 0 58px rgba(230,100,255,.22),
      0 30px 75px rgba(0,0,0,.88) !important;

  }

  `;

  document.head.appendChild(style);


  // ============================================================
  // AUDIO ENGINE
  // ============================================================

  let ownCtx = null;


  function getAudio(){

    try{

      if(
        typeof audioCtx !== "undefined" &&
        audioCtx
      ){

        if(audioCtx.state === "suspended"){
          audioCtx.resume();
        }

        return audioCtx;

      }

    }catch(e){}


    try{

      if(!ownCtx){

        const AC =
          window.AudioContext ||
          window.webkitAudioContext;

        if(AC){
          ownCtx = new AC();
        }

      }


      if(
        ownCtx &&
        ownCtx.state === "suspended"
      ){

        ownCtx.resume();

      }


      return ownCtx;

    }catch(e){

      return null;

    }

  }


  function oscillator(
    frequency,
    duration,
    volume,
    type="sine",
    endFrequency=null
  ){

    const ctx = getAudio();

    if(!ctx) return;


    const now =
      ctx.currentTime;


    const osc =
      ctx.createOscillator();


    const gain =
      ctx.createGain();


    osc.type = type;


    osc.frequency
    .setValueAtTime(
      frequency,
      now
    );


    if(
      endFrequency &&
      endFrequency > 0
    ){

      osc.frequency
      .exponentialRampToValueAtTime(
        endFrequency,
        now + duration
      );

    }


    gain.gain
    .setValueAtTime(
      Math.max(.001,volume),
      now
    );


    gain.gain
    .exponentialRampToValueAtTime(
      .001,
      now + duration
    );


    osc.connect(gain);

    gain.connect(
      ctx.destination
