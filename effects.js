// =====================================================
// ONE PERCENT DROP
// EFFECTS V3
//
// PUCHUN CUT
// ↓
// BLACKOUT
// ↓
// DARK TEXT REVEAL
// ↓
// RARITY AWAKENING
// ↓
// PREMIUM DROP CARD
//
// Mobile / iPhone lightweight version
// =====================================================

(() => {

  if (window.__ONE_PERCENT_EFFECTS_V3__) return;
  window.__ONE_PERCENT_EFFECTS_V3__ = true;

  // =====================================================
  // RARITY DATA
  // =====================================================

  const RARITY = {

    RARE: {
      main: "#45a7ff",
      sub: "#b9e7ff",
      dark: "#07172b",
      label: "RARE",
      message: "THE BLUE LIGHT AWAKENS",
      chance: "20%"
    },

    EPIC: {
      main: "#c557ff",
      sub: "#ff75e8",
      dark: "#180822",
      label: "EPIC",
      message: "A HIGHER POWER EMERGES",
      chance: "8%"
    },

    LEGEND: {
      main: "#ffd63d",
      sub: "#fff1a3",
      dark: "#241700",
      label: "LEGEND",
      message: "THE LEGEND HAS AWAKENED",
      chance: "1.9%"
    },

    GOD: {
      main: "#ffffff",
      sub: "#88f7ff",
      dark: "#020205",
      label: "GOD",
      message: "THE WORLD CHOOSES YOU",
      chance: "0.1%"
    }

  };


  // =====================================================
  // CSS
  // =====================================================

  const style = document.createElement("style");

  style.textContent = `

  /* =====================================================
     MASTER EFFECT STAGE
  ===================================================== */

  .opV3Stage{
    position:fixed;
    inset:0;
    z-index:2147483000;
    overflow:hidden;
    pointer-events:none;
    background:transparent;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  }


  /* =====================================================
     PUCHUN
  ===================================================== */

  .opV3Black{
    position:absolute;
    inset:0;
    background:#000;
    opacity:0;
    z-index:1;
  }

  .opV3Black.on{
    opacity:1;
  }


  .opV3White{
    position:absolute;
    inset:0;
    background:#fff;
    opacity:0;
    z-index:10;
  }

  .opV3White.fire{
    animation:opV3WhiteFire 34ms steps(1,end) forwards;
  }

  @keyframes opV3WhiteFire{

    0%,99%{
      opacity:1;
    }

    100%{
      opacity:0;
    }

  }


  .opV3Flare{
    position:absolute;

    left:50%;
    top:50%;

    width:min(105vw,850px);
    aspect-ratio:1;

    border-radius:50%;

    transform:
      translate(-50%,-50%)
      scale(1.18);

    opacity:0;

    z-index:7;

    background:
      radial-gradient(
        circle,
        #fff 0%,
        #fff 3%,
        rgba(230,249,255,1) 7%,
        rgba(160,220,255,.8) 15%,
        rgba(70,145,255,.28) 32%,
        transparent 62%
      );
  }


  .opV3Flare.cut{
    animation:
      opV3FlareCut
      195ms
      cubic-bezier(.78,0,.98,.38)
      forwards;
  }


  @keyframes opV3FlareCut{

    0%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(1.2);
    }

    18%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(.82);
    }

    38%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scale(.52);
    }

    60%{
      opacity:.94;
      transform:
        translate(-50%,-50%)
        scale(.27);
    }

    80%{
      opacity:.62;
      transform:
        translate(-50%,-50%)
        scale(.09);
    }

    100%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.005);
    }

  }


  .opV3BeamH{
    position:absolute;

    left:50%;
    top:50%;

    width:180vw;
    height:13px;

    transform:
      translate(-50%,-50%)
      scaleX(1);

    opacity:0;

    z-index:8;

    background:
      linear-gradient(
        to bottom,
        transparent,
        rgba(205,240,255,.4),
        #fff,
        #fff,
        rgba(190,230,255,.45),
        transparent
      );

    box-shadow:
      0 0 8px #fff,
      0 0 22px rgba(205,240,255,.9),
      0 0 55px rgba(75,165,255,.55);
  }


  .opV3BeamH.cut{
    animation:
      opV3BeamHCut
      195ms
      linear
      forwards;
  }


  @keyframes opV3BeamHCut{

    0%{
      opacity:1;
      transform:
        translate(-50%,-50%)
        scaleX(1);
    }

    50%{
      opacity:.9;
      height:7px;
      transform:
        translate(-50%,-50%)
        scaleX(.52);
    }

    82%{
      opacity:.45;
      height:3px;
      transform:
        translate(-50%,-50%)
        scaleX(.14);
    }

    100%{
      opacity:0;
      height:1px;
      transform:
        translate(-50%,-50%)
        scaleX(.01);
    }

  }


  .opV3BeamV{
    position:absolute;

    left:50%;
    top:50%;

    width:7px;
    height:90vh;

    transform:
      translate(-50%,-50%);

    opacity:0;

    z-index:8;

    background:
      linear-gradient(
        to right,
        transparent,
        rgba(220,245,255,.7),
        #fff,
        rgba(220,245,255,.7),
        transparent
      );

    box-shadow:
      0 0 15px #fff,
      0 0 35px rgba(120,200,255,.5);
  }


  .opV3BeamV.cut{
    animation:
      opV3BeamVCut
      145ms
      linear
      forwards;
  }


  @keyframes opV3BeamVCut{

    0%{
      opacity:.85;
      transform:
        translate(-50%,-50%)
        scaleY(1);
    }

    60%{
      opacity:.55;
      transform:
        translate(-50%,-50%)
        scaleY(.35);
    }

    100%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scaleY(.02);
    }

  }


  /* =====================================================
     DARK REVEAL
  ===================================================== */

  .opV3Reveal{
    position:absolute;
    inset:0;

    z-index:3;

    display:flex;
    align-items:center;
    justify-content:center;

    opacity:0;
  }


  .opV3Reveal.show{
    opacity:1;
  }


  .opV3Aura{
    position:absolute;

    left:50%;
    top:50%;

    width:75vw;
    max-width:390px;

    aspect-ratio:1;

    border-radius:50%;

    transform:
      translate(-50%,-50%)
      scale(.12);

    opacity:0;

    background:
      radial-gradient(
        circle,
        var(--rarityMain) 0%,
        rgba(255,255,255,.15) 15%,
        transparent 65%
      );

    animation:
      opV3AuraWake
      2s
      ease-out
      forwards;
  }


  @keyframes opV3AuraWake{

    0%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.08);
    }

    35%{
      opacity:.15;
    }

    70%{
      opacity:.42;
    }

    100%{
      opacity:.16;
      transform:
        translate(-50%,-50%)
        scale(1.15);
    }

  }


  .opV3Ring{
    position:absolute;

    left:50%;
    top:50%;

    width:min(70vw,330px);
    aspect-ratio:1;

    border-radius:50%;

    border:
      1px solid
      var(--rarityMain);

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.4);

    animation:
      opV3RingWake
      1.5s
      ease-out
      .35s
      forwards;
  }


  @keyframes opV3RingWake{

    0%{
      opacity:0;
      transform:
        translate(-50%,-50%)
        scale(.35);
    }

    45%{
      opacity:.65;
    }

    100%{
      opacity:.18;
      transform:
        translate(-50%,-50%)
        scale(1.1);
    }

  }


  .opV3TextWrap{
    position:relative;
    z-index:5;

    width:100%;

    text-align:center;

    padding:20px;

    transform:translateY(8px);
  }


  .opV3PreText{
    font-size:11px;

    font-weight:800;

    letter-spacing:6px;

    color:rgba(255,255,255,.52);

    opacity:0;

    transform:translateY(8px);

    animation:
      opV3SmallText
      .85s
      ease-out
      forwards;
  }


  @keyframes opV3SmallText{

    to{
      opacity:1;
      transform:translateY(0);
    }

  }


  .opV3Message{
    margin-top:16px;

    font-family:
      Georgia,
      "Times New Roman",
      serif;

    font-size:clamp(17px,5vw,25px);

    font-weight:700;

    letter-spacing:3px;

    color:white;

    opacity:0;

    transform:
      scale(.96)
      translateY(10px);

    text-shadow:
      0 0 14px var(--rarityMain);

    animation:
      opV3MessageIn
      1.15s
      cubic-bezier(.2,.8,.2,1)
      .35s
      forwards;
  }


  @keyframes opV3MessageIn{

    to{
      opacity:1;
      transform:
        scale(1)
        translateY(0);
    }

  }


  .opV3Line{
    width:0;
    height:1px;

    margin:20px auto 0;

    background:
      linear-gradient(
        90deg,
        transparent,
        var(--rarityMain),
        #fff,
        var(--rarityMain),
        transparent
      );

    box-shadow:
      0 0 12px var(--rarityMain);

    animation:
      opV3LineOpen
      .8s
      ease-out
      .75s
      forwards;
  }


  @keyframes opV3LineOpen{

    to{
      width:min(70vw,300px);
    }

  }


  .opV3Rarity{
    margin-top:21px;

    font-size:clamp(52px,16vw,82px);

    font-weight:1000;

    letter-spacing:4px;

    color:var(--rarityMain);

    opacity:0;

    transform:
      scale(1.55);

    text-shadow:
      0 0 10px var(--rarityMain),
      0 0 30px var(--rarityMain);

    animation:
      opV3RarityHit
      .55s
      cubic-bezier(.16,1.2,.28,1)
      1.2s
      forwards;
  }


  @keyframes opV3RarityHit{

    0%{
      opacity:0;
      transform:scale(1.65);
    }

    55%{
      opacity:1;
      transform:scale(.94);
    }

    100%{
      opacity:1;
      transform:scale(1);
    }

  }


  .opV3Chance{
    margin-top:7px;

    font-size:13px;

    font-weight:900;

    letter-spacing:4px;

    color:white;

    opacity:0;

    animation:
      opV3ChanceIn
      .6s
      ease-out
      1.5s
      forwards;
  }


  @keyframes opV3ChanceIn{

    to{
      opacity:.85;
    }

  }


  /* =====================================================
     GOD SPECIAL
  ===================================================== */

  .opV3Reveal.GOD .opV3Rarity{

    background:
      linear-gradient(
        90deg,
        #fff,
        #75f5ff,
        #c783ff,
        #ff72d8,
        #fff3a8,
        #fff
      );

    background-size:250% 100%;

    -webkit-background-clip:text;
    background-clip:text;

    color:transparent;

    animation:
      opV3RarityHit
      .62s
      cubic-bezier(.16,1.2,.28,1)
      1.35s
      forwards,
      opV3GodFlow
      1.6s
      linear
      1.35s
      infinite;
  }


  @keyframes opV3GodFlow{

    to{
      background-position:250% 0;
    }

  }


  .opV3Reveal.GOD .opV3Ring{

    border-color:#fff;

    box-shadow:
      0 0 16px rgba(100,240,255,.6),
      inset 0 0 16px rgba(255,100,230,.25);

  }


  /* =====================================================
     PREMIUM DROP RESULT
  ===================================================== */

  #dropOverlay.opV3Drop{
    overflow:hidden;
    background:#03050c !important;
  }


  #dropOverlay.opV3Drop::before{
    content:"";

    position:absolute;
    inset:-20%;

    pointer-events:none;

    opacity:.22;

    background:
      radial-gradient(
        circle at 50% 45%,
        var(--dropMain),
        transparent 42%
      );

    animation:
      opV3DropAura
      2.6s
      ease-in-out
      infinite alternate;
  }


  @keyframes opV3DropAura{

    from{
      transform:scale(.88);
      opacity:.12;
    }

    to{
      transform:scale(1.08);
      opacity:.3;
    }

  }


  #dropCard.opV3PremiumCard{

    position:relative;

    overflow:hidden;

    border:
      1px solid
      var(--dropMain) !important;

    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,.075),
        rgba(8,10,20,.96) 28%,
        rgba(3,4,10,.98)
      ) !important;

    box-shadow:
      0 0 0 1px rgba(255,255,255,.06),
      0 0 24px var(--dropGlow),
      0 28px 65px rgba(0,0,0,.75) !important;

    animation:
      opV3DropCardIn
      .65s
      cubic-bezier(.16,1,.3,1)
      forwards !important;
  }


  @keyframes opV3DropCardIn{

    0%{
      opacity:0;
      transform:
        translateY(28px)
        scale(.84);
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


  #dropCard.opV3PremiumCard::before{

    content:"";

    position:absolute;

    left:-40%;
    top:-45%;

    width:180%;
    height:70%;

    transform:rotate(-12deg);

    background:
      linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.04),
        rgba(255,255,255,.18),
        rgba(255,255,255,.04),
        transparent
      );

    animation:
      opV3CardSweep
      2.4s
      ease-in-out
      .5s
      infinite;
  }


  @keyframes opV3CardSweep{

    0%,30%{
      transform:
        translateX(-65%)
        rotate(-12deg);
    }

    75%,100%{
      transform:
        translateX(65%)
        rotate(-12deg);
    }

  }


  #dropOverlay.opV3Drop .dropLabel{
    opacity:0;
    animation:
      opV3DropPart
      .5s
      ease-out
      .25s
      forwards;
  }


  #dropOverlay.opV3Drop .dropRarity{
    opacity:0;
    transform:translateY(8px);
    text-shadow:
      0 0 16px var(--dropMain);

    animation:
      opV3DropPart
      .55s
      ease-out
      .38s
      forwards;
  }


  #dropOverlay.opV3Drop .dropIcon{
    opacity:0;

    transform:
      scale(.65)
      translateY(10px);

    filter:
      drop-shadow(
        0 0 18px
        var(--dropMain)
      );

    animation:
      opV3DropIcon
      .7s
      cubic-bezier(.16,1.2,.3,1)
      .58s
      forwards;
  }


  #dropOverlay.opV3Drop .dropName{
    opacity:0;
    animation:
      opV3DropPart
      .55s
      ease-out
      .82s
      forwards;
  }


  #dropOverlay.opV3Drop .dropEffect{
    opacity:0;
    animation:
      opV3DropPart
      .55s
      ease-out
      1.02s
      forwards;
  }


  #dropOverlay.opV3Drop .dropChance{
    opacity:0;
    animation:
      opV3DropPart
      .55s
      ease-out
      1.18s
      forwards;
  }


  #dropOverlay.opV3Drop .dropButtons{
    opacity:0;
    transform:translateY(8px);

    animation:
      opV3DropPart
      .55s
      ease-out
      1.35s
      forwards;
  }


  @keyframes opV3DropPart{

    to{
      opacity:1;
      transform:translateY(0);
    }

  }


  @keyframes opV3DropIcon{

    0%{
      opacity:0;
      transform:
        scale(.5)
        translateY(12px);
    }

    70%{
      opacity:1;
      transform:
        scale(1.12)
        translateY(-3px);
    }

    100%{
      opacity:1;
      transform:
        scale(1)
        translateY(0);
    }

  }


  /* GOD result is deliberately special */

  #dropOverlay.opV3Drop.GOD{
    background:#000 !important;
  }


  #dropOverlay.opV3Drop.GOD::before{

    opacity:.34;

    background:
      radial-gradient(
        circle at 50% 45%,
        rgba(255,255,255,.45),
        rgba(82,235,255,.18) 18%,
        rgba(223,92,255,.12) 32%,
        transparent 55%
      );

  }


  #dropOverlay.opV3Drop.GOD
  #dropCard{

    border-color:#fff !important;

    box-shadow:
      0 0 12px rgba(255,255,255,.8),
      0 0 30px rgba(80,230,255,.45),
      0 0 55px rgba(225,80,255,.25),
      0 30px 70px rgba(0,0,0,.8) !important;

  }


  #dropOverlay.opV3Drop.GOD
  .dropRarity{

    background:
      linear-gradient(
        90deg,
        #fff,
        #7ff3ff,
        #d99bff,
        #ff86d8,
        #fff4a8,
        #fff
      );

    background-size:240%;

    -webkit-background-clip:text;
    background-clip:text;

    color:transparent !important;

    animation:
      opV3DropPart
      .55s
      ease-out
      .38s
      forwards,
      opV3GodFlow
      1.5s
      linear
      .7s
      infinite;
  }

  `;

  document.head.appendChild(style);


  // =====================================================
  // AUDIO
  // Sharp "cut" + instantaneous sub impact
  // No long BOOM tail
  // =====================================================

  function puchunSoundV3(){

    try{
      if(typeof initAudio === "function"){
        initAudio();
      }
    }catch(e){}


    if(
      typeof audioCtx === "undefined" ||
      !audioCtx
    ){

      if(typeof tone === "function"){
        tone(82,.07,"square",.14);
      }

      return;
    }


    const ctx = audioCtx;
    const now = ctx.currentTime;


    // -----------------------------------------------------
    // 1. HARD ELECTRIC SNAP
    // -----------------------------------------------------

    const snap = ctx.createOscillator();
    const snapGain = ctx.createGain();
    const snapFilter = ctx.createBiquadFilter();

    snap.type = "square";

    snap.frequency.setValueAtTime(
      1650,
      now
    );

    snap.frequency.exponentialRampToValueAtTime(
      110,
      now + .032
    );

    snapFilter.type = "bandpass";
    snapFilter.frequency.value = 1850;
    snapFilter.Q.value = .6;

    snapGain.gain.setValueAtTime(
      .19,
      now
    );

    snapGain.gain.exponentialRampToValueAtTime(
      .001,
      now + .048
    );

    snap.connect(snapFilter);
    snapFilter.connect(snapGain);
    snapGain.connect(ctx.destination);

    snap.start(now);
    snap.stop(now + .052);


    // -----------------------------------------------------
    // 2. SUB IMPACT
    // Short, heavy, no tail
    // -----------------------------------------------------

    const sub = ctx.createOscillator();
    const subGain = ctx.createGain();

    sub.type = "sine";

    sub.frequency.setValueAtTime(
      92,
      now
    );

    sub.frequency.exponentialRampToValueAtTime(
      34,
      now + .075
    );

    subGain.gain.setValueAtTime(
      .24,
      now
    );

    subGain.gain.exponentialRampToValueAtTime(
      .001,
      now + .095
    );

    sub.connect(subGain);
    subGain.connect(ctx.destination);

    sub.start(now);
    sub.stop(now + .10);


    // -----------------------------------------------------
    // 3. SHORT IMPULSE NOISE
    // -----------------------------------------------------

    const duration = .035;

    const buffer =
      ctx.createBuffer(
        1,
        Math.floor(ctx.sampleRate * duration),
        ctx.sampleRate
      );

    const data =
      buffer.getChannelData(0);

    for(let i=0;i<data.length;i++){

      const life =
        1 - i/data.length;

      data[i] =
        (Math.random()*2-1)
        *
        life
        *
        life;

    }

    const noise =
      ctx.createBufferSource();

    const noiseGain =
      ctx.createGain();

    const noiseFilter =
      ctx.createBiquadFilter();

    noise.buffer = buffer;

    noiseFilter.type =
      "highpass";

    noiseFilter.frequency.value =
      900;

    noiseGain.gain.setValueAtTime(
      .11,
      now
    );

    noiseGain.gain.exponentialRampToValueAtTime(
      .001,
      now + duration
    );

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);


    // -----------------------------------------------------
    // vibration = instant shock
    // -----------------------------------------------------

    try{

      if(typeof vibrate === "function"){
        vibrate(75);
      }

    }catch(e){}

  }


  // =====================================================
  // REVEAL SOUND
  // =====================================================

  function revealSound(rarity){

    try{

      if(typeof tone !== "function") return;

      if(rarity === "RARE"){

        tone(190,.20,"sine",.035);

        setTimeout(()=>{
          tone(480,.12,"sine",.05);
        },850);

      }


      if(rarity === "EPIC"){

        tone(105,.26,"sine",.045);

        setTimeout(()=>{
          tone(520,.16,"sine",.055);
        },700);

        setTimeout(()=>{
          tone(760,.18,"sine",.06);
        },1150);

      }


      if(rarity === "LEGEND"){

        tone(76,.30,"sine",.055);

        setTimeout(()=>{
          tone(420,.16,"sine",.055);
        },620);

        setTimeout(()=>{
          tone(720,.18,"sine",.07);
        },1050);

        setTimeout(()=>{
          tone(980,.14,"sine",.075);
        },1300);

      }


      if(rarity === "GOD"){

        tone(45,.32,"sine",.07);

        setTimeout(()=>{
          tone(330,.22,"sine",.055);
        },700);

        setTimeout(()=>{
          tone(660,.22,"sine",.07);
        },1100);

        setTimeout(()=>{
          tone(1040,.20,"sine",.08);
        },1450);

      }

    }catch(e){}

  }


  // =====================================================
  // PUCHUN + BLACK REVEAL
  // =====================================================

  function playV3Sequence(
    rarity,
    done
  ){

    const data =
      RARITY[rarity] ||
      RARITY.RARE;


    const old =
      document.querySelector(
        ".opV3Stage"
      );

    if(old){
      old.remove();
    }


    const stage =
      document.createElement("div");

    stage.className =
      "opV3Stage";


    const black =
      document.createElement("div");

    black.className =
      "opV3Black";


    const white =
      document.createElement("div");

    white.className =
      "opV3White";


    const flare =
      document.createElement("div");

    flare.className =
      "opV3Flare";


    const beamH =
      document.createElement("div");

    beamH.className =
      "opV3BeamH";


    const beamV =
      document.createElement("div");

    beamV.className =
      "opV3BeamV";


    const reveal =
      document.createElement("div");

    reveal.className =
      "opV3Reveal " +
      rarity;


    reveal.style.setProperty(
      "--rarityMain",
      data.main
    );


    reveal.style.setProperty(
      "--raritySub",
      data.sub
    );


    reveal.innerHTML = `

      <div class="opV3Aura"></div>

      <div class="opV3Ring"></div>

      <div class="opV3TextWrap">

        <div class="opV3PreText">
          RARITY AWAKENING
        </div>

        <div class="opV3Message">
          ${data.message}
        </div>

        <div class="opV3Line"></div>

        <div class="opV3Rarity">
          ${data.label}
        </div>

        <div class="opV3Chance">
          DROP RATE ${data.chance}
        </div>

      </div>

    `;


    stage.append(
      black,
      reveal,
      flare,
      beamH,
      beamV,
      white
    );


    document.body.appendChild(stage);


    // ---------------------------------------------
    // PUSH -> tiny delay
    // ---------------------------------------------

    const PRE =
      300;


    setTimeout(()=>{

      white.classList.add(
        "fire"
      );

      puchunSoundV3();

    },PRE);


    // ---------------------------------------------
    // POWER OFF
    // ---------------------------------------------

    setTimeout(()=>{

      black.classList.add(
        "on"
      );

      flare.classList.add(
        "cut"
      );

      beamH.classList.add(
        "cut"
      );

      beamV.classList.add(
        "cut"
      );

    },PRE + 34);


    // ---------------------------------------------
    // PURE BLACK
    // ---------------------------------------------

    setTimeout(()=>{

      flare.remove();
      beamH.remove();
      beamV.remove();
      white.remove();

    },PRE + 280);


    // ---------------------------------------------
    // DARK SILENCE
    // GOD waits longer
    // ---------------------------------------------

    const darkHold =
      rarity === "GOD"
      ? 1450
      : rarity === "LEGEND"
      ? 1100
      : 850;


    setTimeout(()=>{

      reveal.classList.add(
        "show"
      );

      revealSound(
        rarity
      );

    },PRE + 280 + darkHold);


    // ---------------------------------------------
    // Finish reveal
    // ---------------------------------------------

    const revealLength =
      rarity === "GOD"
      ? 2650
      : rarity === "LEGEND"
      ? 2400
      : 2200;


    setTimeout(()=>{

      stage.style.transition =
        "opacity .24s ease";

      stage.style.opacity =
        "0";

    },
    PRE +
    280 +
    darkHold +
    revealLength
    );


    setTimeout(()=>{

      stage.remove();

      if(
        typeof done ===
        "function"
      ){
        done();
      }

    },
    PRE +
    280 +
    darkHold +
    revealLength +
    260
    );

  }


  // =====================================================
  // NORMAL ASCENSION
  // =====================================================

  if(
    typeof playAscensionSuccess ===
    "function"
  ){

    const originalAscensionSuccess =
      playAscensionSuccess;


    playAscensionSuccess =
    function(
      fromRarity,
      toRarity,
      premium=false
    ){

      playV3Sequence(
        toRarity,
        ()=>{

          originalAscensionSuccess(
            fromRarity,
            toRarity,
            premium
          );

        }
      );

    };

  }


  // =====================================================
  // GOD PUSH SUCCESS
  // GOD now uses exactly the same PUCHUN system
  // =====================================================

  if(
    typeof playGodAscensionSuccess ===
    "function"
  ){

    const originalGodSuccess =
      playGodAscensionSuccess;


    playGodAscensionSuccess =
    function(){

      playV3Sequence(
        "GOD",
        ()=>{

          originalGodSuccess();

        }
      );

    };

  }


  // =====================================================
  // PREMIUM DROP CARD
  // =====================================================

  function applyDropLuxury(
    item
  ){

    if(!item) return;


    const overlay =
      document.getElementById(
        "dropOverlay"
      );


    const card =
      document.getElementById(
        "dropCard"
      );


    if(
      !overlay ||
      !card
    ){
      return;
    }


    const rarity =
      item.rarity ||
      "NORMAL";


    const data =
      RARITY[rarity] || {
        main:"#d8dce8",
        sub:"#ffffff"
      };


    overlay.classList.remove(
      "RARE",
      "EPIC",
      "LEGEND",
      "GOD"
    );


    overlay.classList.add(
      "opV3Drop",
      rarity
    );


    overlay.style.setProperty(
      "--dropMain",
      data.main
    );


    const glow =

      rarity === "GOD"
      ? "rgba(110,235,255,.48)"

      : rarity === "LEGEND"
      ? "rgba(255,214,61,.42)"

      : rarity === "EPIC"
      ? "rgba(197,87,255,.36)"

      : rarity === "RARE"
      ? "rgba(69,167,255,.30)"

      : "rgba(220,225,240,.18)";


    overlay.style.setProperty(
      "--dropGlow",
      glow
    );


    card.classList.add(
      "opV3PremiumCard"
    );


    // restart stagger animations
    card
      .querySelectorAll(
        ".dropLabel,.dropRarity,.dropIcon,.dropName,.dropEffect,.dropChance,.dropButtons"
      )
      .forEach(el=>{

        el.style.animation = "none";

        void el.offsetHeight;

        el.style.animation = "";

      });


    // result impact
    setTimeout(()=>{

      try{

        if(typeof vibrate === "function"){

          if(rarity === "GOD"){
            vibrate([
              70,
              30,
              100,
              40,
              150
            ]);
          }

          else if(
            rarity === "LEGEND"
          ){
            vibrate([
              55,
              35,
              100
            ]);
          }

          else{
            vibrate(40);
          }

        }

      }catch(e){}

    },430);

  }


  if(
    typeof revealSuperDropCard ===
    "function"
  ){

    const originalRevealDrop =
      revealSuperDropCard;


    revealSuperDropCard =
    function(item){

      originalRevealDrop(
        item
      );


      requestAnimationFrame(()=>{

        applyDropLuxury(
          item
        );

      });

    };

  }


  // =====================================================
  // Also catch ordinary DROP screens
  // =====================================================

  if(
    typeof showDrop ===
    "function"
  ){

    const originalShowDrop =
      showDrop;


    showDrop =
    function(item){

      originalShowDrop(
        item
      );


      setTimeout(()=>{

        const overlay =
          document.getElementById(
            "dropOverlay"
          );


        if(
          overlay &&
          overlay.classList.contains(
            "show"
          )
        ){

          applyDropLuxury(
            item
          );

        }

      },30);

    };

  }


  console.log(
    "ONE PERCENT DROP EFFECTS V3 READY"
  );

})();
