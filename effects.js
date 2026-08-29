// ============================================================
// 1% DROP - EFFECTS V5 COMPLETE REBUILD
// standalone / lightweight / iPhone friendly
// ============================================================
(() => {
  "use strict";

  if (window.__ONE_PERCENT_EFFECTS_V5__) return;
  window.__ONE_PERCENT_EFFECTS_V5__ = true;

  // ============================================================
  // RARITY SETTINGS
  // ============================================================

  const R = {
    RARE: {
      c: "#45a7ff",
      c2: "#bfe5ff",
      phrase: "A BLUE SIGN APPEARS",
      hold: 650
    },

    EPIC: {
      c: "#c367ff",
      c2: "#f1b6ff",
      phrase: "POWER BEYOND THE ORDINARY",
      hold: 760
    },

    LEGEND: {
      c: "#ffd83d",
      c2: "#fff0a5",
      phrase: "THE LEGEND AWAKENS",
      hold: 900
    },

    GOD: {
      c: "#ffffff",
      c2: "#8ff7ff",
      phrase: "THE WORLD HAS CHOSEN YOU",
      hold: 1150
    }
  };


  // ============================================================
  // CSS
  // ============================================================

  const css = `

  .v5fx{
    position:fixed;
    inset:0;
    z-index:2147483000;
    background:#000;
    overflow:hidden;
    pointer-events:none;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  }

  .v5fx *{
    box-sizing:border-box;
  }


  /* ============================================================
     PUCHUN
  ============================================================ */

  .v5white{
    position:absolute;
    inset:0;
    background:#fff;
    opacity:0;
    z-index:20;
  }

  .v5white.go{
    animation:v5white .045s steps(1) forwards;
  }

  @keyframes v5white{
    0%,70%{opacity:1}
    100%{opacity:0}
  }


  .v5core{
    position:absolute;
    left:50%;
    top:50%;

    width:min(110vw,760px);
    aspect-ratio:1;

    border-radius:50%;

    transform:
      translate(-50%,-50%)
      scale(1.15);

    opacity:0;
    z-index:16;

    background:
      radial-gradient(
        circle,
        #fff 0 3%,
        rgba(225,248,255,1) 6%,
        rgba(125,210,255,.8) 13%,
        rgba(80,145,255,.25) 30%,
        transparent 60%
      );
  }

  .v5core.go{
    animation:
      v5core
      .19s
      cubic-bezier(.8,0,1,.3)
      forwards;
  }

  @keyframes v5core{

    0%{
      opacity:1;

      transform:
        translate(-50%,-50%)
        scale(1.15);
    }

    35%{
      opacity:1;

      transform:
        translate(-50%,-50%)
        scale(.55);
    }

    70%{
      opacity:.8;

      transform:
        translate(-50%,-50%)
        scale(.12);
    }

    100%{
      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(.005);
    }
  }


  .v5beam{
    position:absolute;
    left:50%;
    top:50%;

    width:180vw;
    height:10px;

    z-index:17;

    opacity:0;

    transform:
      translate(-50%,-50%);

    background:
      linear-gradient(
        transparent,
        #fff,
        transparent
      );

    box-shadow:
      0 0 9px #fff,
      0 0 30px #9ddfff;
  }

  .v5beam.go{
    animation:v5beam .18s linear forwards;
  }

  @keyframes v5beam{

    0%{
      opacity:1;
      width:180vw;
      height:10px;
    }

    60%{
      opacity:.7;
      width:55vw;
      height:4px;
    }

    100%{
      opacity:0;
      width:1px;
      height:1px;
    }
  }


  /* ============================================================
     DARK REVEAL
  ============================================================ */

  .v5scene{
    position:absolute;
    inset:0;

    opacity:0;

    color:var(--c);

    background:
      radial-gradient(
        circle at 50% 50%,
        color-mix(
          in srgb,
          var(--c) 8%,
          transparent
        ),
        transparent 44%
      ),
      #000;
  }

  .v5scene.on{
    opacity:1;
  }


  .v5point{
    position:absolute;
    left:50%;
    top:50%;

    width:3px;
    height:3px;

    border-radius:50%;

    background:#fff;

    transform:
      translate(-50%,-50%)
      scale(.01);

    opacity:0;

    box-shadow:
      0 0 5px #fff,
      0 0 18px var(--c),
      0 0 40px var(--c);
  }

  .v5scene.point .v5point{
    animation:v5point .8s ease-out forwards;
  }

  @keyframes v5point{

    0%{
      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(.01);
    }

    55%{
      opacity:1;
    }

    100%{
      opacity:1;

      transform:
        translate(-50%,-50%)
        scale(1.4);
    }
  }


  .v5line{
    position:absolute;
    left:50%;
    top:50%;

    width:0;
    height:1px;

    opacity:0;

    transform:
      translate(-50%,-50%);

    background:
      linear-gradient(
        90deg,
        transparent,
        var(--c),
        #fff,
        var(--c),
        transparent
      );

    box-shadow:
      0 0 9px #fff,
      0 0 22px var(--c);
  }

  .v5scene.line .v5line{
    animation:v5line .7s ease-out forwards;
  }

  @keyframes v5line{

    0%{
      width:0;
      opacity:0;
    }

    15%{
      opacity:1;
    }

    100%{
      width:min(82vw,390px);
      opacity:.7;
    }
  }


  /* ============================================================
     RINGS
  ============================================================ */

  .v5ring,
  .v5ring2{
    position:absolute;
    left:50%;
    top:50%;

    border-radius:50%;

    border:
      1px solid
      var(--c);

    transform:
      translate(-50%,-50%)
      scale(.15);

    opacity:0;
  }

  .v5ring{
    width:min(78vw,370px);
    aspect-ratio:1;
  }

  .v5ring2{
    width:min(54vw,255px);
    aspect-ratio:1;
  }

  .v5scene.build .v5ring{
    animation:v5ring 1.8s ease-out forwards;
  }

  .v5scene.build .v5ring2{
    animation:v5ring2 1.6s .12s ease-out forwards;
  }

  @keyframes v5ring{

    0%{
      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(.15)
        rotate(-35deg);
    }

    45%{
      opacity:.45;
    }

    100%{
      opacity:.14;

      transform:
        translate(-50%,-50%)
        scale(1.05)
        rotate(20deg);
    }
  }

  @keyframes v5ring2{

    0%{
      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(.2)
        rotate(30deg);
    }

    45%{
      opacity:.5;
    }

    100%{
      opacity:.18;

      transform:
        translate(-50%,-50%)
        scale(1)
        rotate(-15deg);
    }
  }


  /* ============================================================
     TEXT
  ============================================================ */

  .v5small{
    position:absolute;

    left:0;
    right:0;
    top:37%;

    text-align:center;

    font-size:9px;
    font-weight:900;

    letter-spacing:7px;

    color:var(--c);

    opacity:0;
  }

  .v5scene.build .v5small{
    animation:v5small .6s ease-out forwards;
  }

  @keyframes v5small{

    from{
      opacity:0;
      letter-spacing:13px;
    }

    to{
      opacity:.72;
      letter-spacing:7px;
    }
  }


  .v5phrase{
    position:absolute;

    left:6%;
    right:6%;
    top:43%;

    text-align:center;

    color:#fff;

    font-family:
      Georgia,
      "Times New Roman",
      serif;

    font-size:
      clamp(18px,5vw,27px);

    font-weight:700;

    letter-spacing:2px;

    text-shadow:
      0 0 12px var(--c),
      0 0 28px var(--c);
  }


  .v5char{
    display:inline-block;

    opacity:0;

    filter:blur(6px);

    transform:
      translateY(10px)
      scale(.9);
  }

  .v5scene.build .v5char{
    animation:v5char .46s ease-out forwards;

    animation-delay:
      calc(var(--i) * 38ms);
  }

  @keyframes v5char{

    to{
      opacity:1;
      filter:blur(0);
      transform:none;
    }
  }


  /* ============================================================
     LIGHT PARTICLES
  ============================================================ */

  .v5spark{
    position:absolute;

    left:50%;
    top:50%;

    width:2px;
    height:2px;

    border-radius:50%;

    background:#fff;

    box-shadow:
      0 0 8px #fff,
      0 0 14px var(--c);

    opacity:0;

    transform:
      rotate(var(--a))
      translateX(12px);
  }

  .v5scene.build .v5spark{
    animation:
      v5spark
      1.3s
      var(--d)
      ease-out
      forwards;
  }

  @keyframes v5spark{

    0%{
      opacity:0;

      transform:
        rotate(var(--a))
        translateX(12px);
    }

    20%{
      opacity:.9;
    }

    100%{
      opacity:0;

      transform:
        rotate(var(--a))
        translateX(var(--r));
    }
  }


  /* ============================================================
     SECOND BLACKOUT
  ============================================================ */

  .v5cut{
    position:absolute;
    inset:0;

    background:#000;

    opacity:0;

    z-index:30;
  }

  .v5cut.go{
    animation:v5cut .24s steps(1) forwards;
  }

  @keyframes v5cut{

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

  .v5final{
    position:absolute;
    inset:0;

    z-index:25;

    display:flex;

    align-items:center;
    justify-content:center;

    opacity:0;
  }

  .v5final.go{
    opacity:1;
  }


  .v5word{
    font-size:
      clamp(68px,22vw,120px);

    font-weight:1000;

    line-height:.85;

    letter-spacing:-2px;

    color:var(--c);

    opacity:0;

    filter:blur(8px);

    transform:scale(2.4);

    text-shadow:
      0 0 12px var(--c),
      0 0 35px var(--c),
      0 0 70px var(--c);
  }

  .v5final.go .v5word{
    animation:
      v5word
      .7s
      cubic-bezier(.12,1.2,.25,1)
      forwards;
  }

  @keyframes v5word{

    0%{
      opacity:0;
      filter:blur(8px);
      transform:scale(2.4);
    }

    20%{
      opacity:1;
      filter:blur(0);
    }

    60%{
      transform:scale(.9);
    }

    80%{
      transform:scale(1.06);
    }

    100%{
      opacity:1;
      filter:blur(0);
      transform:scale(1);
    }
  }


  .v5burst{
    position:absolute;

    left:50%;
    top:50%;

    width:8px;
    height:8px;

    border-radius:50%;

    background:#fff;

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.01);

    box-shadow:
      0 0 25px #fff,
      0 0 80px var(--c);
  }

  .v5burst.go{
    animation:v5burst .6s ease-out forwards;
  }

  @keyframes v5burst{

    0%{
      opacity:1;

      transform:
        translate(-50%,-50%)
        scale(.01);
    }

    55%{
      opacity:.65;
    }

    100%{
      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(105);
    }
  }


  .v5flash{
    position:absolute;
    inset:0;

    background:#fff;

    z-index:60;

    opacity:0;
  }

  .v5flash.go{
    animation:v5flash .16s ease-out forwards;
  }

  @keyframes v5flash{

    from{
      opacity:.95;
    }

    to{
      opacity:0;
    }
  }


  /* ============================================================
     GOD SPECIAL
  ============================================================ */

  .v5scene.GOD .v5word{

    background:
      linear-gradient(
        90deg,
        #fff,
        #7ff6ff,
        #bd8cff,
        #ff8add,
        #fff2a0,
        #fff
      );

    background-size:
      240% 100%;

    -webkit-background-clip:text;
    background-clip:text;

    color:transparent;

    text-shadow:none;

    filter:
      drop-shadow(
        0 0 12px
        rgba(255,255,255,.9)
      );
  }

  .v5scene.GOD .v5ring,
  .v5scene.GOD .v5ring2{
    border-color:#fff;
  }


  .v5godray{
    display:none;

    position:absolute;

    left:50%;
    top:50%;

    width:0;
    height:2px;

    opacity:0;

    transform-origin:
      0 50%;

    background:
      linear-gradient(
        90deg,
        #fff,
        #7ff6ff,
        #c88cff,
        #ff8add,
        transparent
      );

    box-shadow:
      0 0 8px #fff;
  }

  .v5scene.GOD.build .v5godray{
    display:block;

    animation:
      v5godray
      .8s
      var(--d)
      ease-out
      forwards;
  }

  @keyframes v5godray{

    0%{
      width:0;
      opacity:0;
    }

    18%{
      opacity:1;
    }

    100%{
      width:70vw;
      opacity:.55;
    }
  }


  /* ============================================================
     PREMIUM DROP CARD
  ============================================================ */

  #dropOverlay.v5drop{
    overflow:hidden;

    background:
      #02040a !important;

    --dc:#fff;
    --dg:rgba(255,255,255,.2);
  }


  #dropOverlay.v5drop:before{
    content:"";

    position:absolute;

    left:50%;
    top:44%;

    width:min(120vw,620px);
    aspect-ratio:1;

    border-radius:50%;

    transform:
      translate(-50%,-50%);

    background:
      radial-gradient(
        circle,
        var(--dc),
        transparent 60%
      );

    opacity:.16;

    pointer-events:none;

    animation:
      v5aura
      2.4s
      ease-in-out
      infinite
      alternate;
  }

  @keyframes v5aura{

    from{
      opacity:.09;

      transform:
        translate(-50%,-50%)
        scale(.82);
    }

    to{
      opacity:.25;

      transform:
        translate(-50%,-50%)
        scale(1.08);
    }
  }


  #dropCard.v5card{
    position:relative;

    overflow:hidden;

    border:
      1px solid
      var(--dc) !important;

    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,.08),
        rgba(11,14,28,.98) 32%,
        #030409
      ) !important;

    box-shadow:
      0 0 0 1px rgba(255,255,255,.05),
      0 0 30px var(--dg),
      0 28px 70px rgba(0,0,0,.85) !important;

    animation:
      v5card
      .65s
      cubic-bezier(.15,1,.28,1)
      forwards !important;
  }

  @keyframes v5card{

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
      transform:none;
    }
  }


  #dropCard.v5card:after{
    content:"";

    position:absolute;

    left:-70%;
    top:-25%;

    width:42%;
    height:150%;

    transform:rotate(18deg);

    background:
      linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.04),
        rgba(255,255,255,.23),
        rgba(255,255,255,.04),
        transparent
      );

    animation:
      v5sweep
      2.7s
      .55s
      ease-in-out
      infinite;

    pointer-events:none;
  }

  @keyframes v5sweep{

    0%,30%{
      left:-70%;
    }

    70%,100%{
      left:130%;
    }
  }


  #dropOverlay.v5drop .dropRarity{
    text-shadow:
      0 0 18px
      var(--dc);
  }


  #dropOverlay.v5drop.GOD .dropRarity{

    background:
      linear-gradient(
        90deg,
        #fff,
        #7ff6ff,
        #c88cff,
        #ff8add,
        #fff2a0,
        #fff
      );

    background-size:
      230% 100%;

    -webkit-background-clip:text;
    background-clip:text;

    color:
      transparent !important;

    animation:
      v5grad
      1.4s
      linear
      infinite;
  }

  @keyframes v5grad{

    to{
      background-position:
        230% 0;
    }
  }

  `;


  const st =
    document.createElement(
      "style"
    );

  st.id =
    "one-percent-effects-v5-style";

  st.textContent =
    css;

  document.head.appendChild(
    st
  );


  // ============================================================
  // AUDIO
  // ============================================================

  let ownAC = null;


  function ac(){

    try{

      if(
        typeof audioCtx !==
        "undefined" &&
        audioCtx
      ){

        if(
          audioCtx.state ===
          "suspended"
        ){

          audioCtx.resume();
        }

        return audioCtx;
      }

    }catch(e){}


    try{

      if(!ownAC){

        const A =
          window.AudioContext ||
          window.webkitAudioContext;

        if(A){
          ownAC = new A();
        }
      }


      if(
        ownAC &&
        ownAC.state ===
        "suspended"
      ){

        ownAC.resume();
      }


      return ownAC;

    }catch(e){

      return null;
    }
  }


  function osc(
    f1,
    f2,
    d,
    v,
    type="sine"
  ){

    const c = ac();

    if(!c) return;


    const t =
      c.currentTime;


    const o =
      c.createOscillator();


    const g =
      c.createGain();


    o.type =
      type;


    o.frequency.setValueAtTime(
      f1,
      t
    );


    if(f2 > 0){

      o.frequency
      .exponentialRampToValueAtTime(
        f2,
        t + d
      );
    }


    g.gain.setValueAtTime(
      Math.max(.001,v),
      t
    );


    g.gain
    .exponentialRampToValueAtTime(
      .001,
      t + d
    );


    o.connect(g);

    g.connect(
      c.destination
    );


    o.start(t);

    o.stop(
      t + d + .01
    );
  }


  // ============================================================
  // PUCHUN SOUND
  // sharp cut + instant sub bass
  // ============================================================

  function puchun(){

    const c = ac();

    if(!c) return;


    const t =
      c.currentTime;


    const o =
      c.createOscillator();


    const g =
      c.createGain();


    const f =
      c.createBiquadFilter();


    o.type =
      "square";


    o.frequency
    .setValueAtTime(
      1750,
      t
    );


    o.frequency
    .exponentialRampToValueAtTime(
      115,
      t + .032
    );


    f.type =
      "bandpass";

    f.frequency.value =
      1750;

    f.Q.value =
      .55;


    g.gain.setValueAtTime(
      .18,
      t
    );


    g.gain
    .exponentialRampToValueAtTime(
      .001,
      t + .045
    );


    o.connect(f);

    f.connect(g);

    g.connect(
      c.destination
    );


    o.start(t);

    o.stop(
      t + .05
    );


    // Instant low-frequency impact

    osc(
      68,
      38,
      .09,
      .26,
      "sine"
    );


    // Electric snap noise

    const len =
      Math.floor(
        c.sampleRate * .035
      );


    const b =
      c.createBuffer(
        1,
        len,
        c.sampleRate
      );


    const d =
      b.getChannelData(0);


    for(
      let i=0;
      i<len;
      i++
    ){

      const q =
        1 - i/len;

      d[i] =
        (Math.random()*2-1)
        *
        q
        *
        q;
    }


    const s =
      c.createBufferSource();


    const ng =
      c.createGain();


    const hp =
      c.createBiquadFilter();


    s.buffer =
      b;


    hp.type =
      "highpass";

    hp.frequency.value =
      900;


    ng.gain.setValueAtTime(
      .1,
      t
    );


    ng.gain
    .exponentialRampToValueAtTime(
      .001,
      t + .035
    );


    s.connect(hp);

    hp.connect(ng);

    ng.connect(
      c.destination
    );


    s.start(t);


    try{

      if(
        typeof vibrate ===
        "function"
      ){

        vibrate(65);

      }else{

        navigator.vibrate?.(65);
      }

    }catch(e){}
  }


  function buildSound(r){

    osc(
      r === "GOD"
        ? 48
        : 72,

      r === "GOD"
        ? 34
        : 50,

      .22,

      r === "GOD"
        ? .06
        : .035,

      "sine"
    );


    setTimeout(()=>{

      osc(
        r === "LEGEND" ||
        r === "GOD"
          ? 430
          : 330,

        220,
        .13,
        .025,
        "triangle"
      );

    },560);
  }


  function hitSound(r){

    osc(
      r === "GOD"
        ? 54
        : 64,

      38,
      .11,

      r === "GOD"
        ? .16
        : .11,

      "sine"
    );


    osc(
      r === "GOD"
        ? 960
        : 760,

      300,
      .065,
      .05,
      "square"
    );


    setTimeout(()=>{

      osc(
        r === "GOD"
          ? 1100
          : r === "LEGEND"
          ? 920
          : 780,

        450,
        .15,
        .04,
        "triangle"
      );

    },70);


    try{

      const p =
        r === "GOD"
          ? [80,30,120]
          : 70;


      if(
        typeof vibrate ===
        "function"
      ){

        vibrate(p);

      }else{

        navigator.vibrate?.(p);
      }

    }catch(e){}
  }


  // ============================================================
  // HELPERS
  // ============================================================

  const chars =
    txt =>
      [...txt]
      .map(
        (x,i)=>
          x === " "
            ? "<span>&nbsp;</span>"
            : `<span class="v5char" style="--i:${i}">${x}</span>`
      )
      .join("");


  // ============================================================
  // MAIN CINEMATIC
  // ============================================================

  function playSequence(
    rarity,
    done
  ){

    const cfg =
      R[rarity] ||
      R.RARE;


    document
    .querySelectorAll(
      ".v5fx"
    )
    .forEach(
      x=>x.remove()
    );


    const root =
      document.createElement(
        "div"
      );


    root.className =
      "v5fx";


    root.innerHTML = `

      <div
        class="v5scene ${rarity}"
        style="
          --c:${cfg.c};
          --c2:${cfg.c2}
        "
      >

        <div class="v5point"></div>

        <div class="v5line"></div>

        <div class="v5ring"></div>

        <div class="v5ring2"></div>


        <i
          class="v5godray"
          style="
            transform:rotate(-18deg);
            --d:.1s
          "
        ></i>

        <i
          class="v5godray"
          style="
            transform:rotate(22deg);
            --d:.24s
          "
        ></i>

        <i
          class="v5godray"
          style="
            transform:rotate(148deg);
            --d:.38s
          "
        ></i>

        <i
          class="v5godray"
          style="
            transform:rotate(205deg);
            --d:.52s
          "
        ></i>


        <div class="v5small">
          RARITY SIGNAL DETECTED
        </div>


        <div class="v5phrase">
          ${chars(cfg.phrase)}
        </div>


        <div class="v5cut"></div>

        <div class="v5burst"></div>


        <div class="v5final">

          <div class="v5word">
            ${rarity}
          </div>

        </div>


        <div class="v5flash"></div>

      </div>


      <div class="v5core"></div>

      <div class="v5beam"></div>

      <div class="v5white"></div>

    `;


    document.body.appendChild(
      root
    );


    const scene =
      root.querySelector(
        ".v5scene"
      );


    const white =
      root.querySelector(
        ".v5white"
      );


    const core =
      root.querySelector(
        ".v5core"
      );


    const beam =
      root.querySelector(
        ".v5beam"
      );


    // ==========================================================
    // Lightweight particles
    // ==========================================================

    const n =
      rarity === "GOD"
        ? 14
        : rarity === "LEGEND"
        ? 11
        : rarity === "EPIC"
        ? 8
        : 6;


    for(
      let i=0;
      i<n;
      i++
    ){

      const s =
        document.createElement(
          "i"
        );


      s.className =
        "v5spark";


      s.style.cssText = `
        --a:${Math.random()*360}deg;
        --r:${80+Math.random()*150}px;
        --d:${.1+Math.random()*.6}s
      `;


      scene.appendChild(s);
    }


    // ==========================================================
    // 1. PUSH -> PUCHUN
    // ==========================================================

    const pre = 260;


    setTimeout(()=>{

      white.classList.add(
        "go"
      );

      puchun();

    },pre);


    // ==========================================================
    // 2. CRT collapse
    // ==========================================================

    setTimeout(()=>{

      core.classList.add(
        "go"
      );

      beam.classList.add(
        "go"
      );

    },pre + 35);


    // ==========================================================
    // 3. Full blackout
    // ==========================================================

    setTimeout(()=>{

      scene.classList.add(
        "on"
      );


      white.remove();

      core.remove();

      beam.remove();

    },pre + 275);


    const b =
      pre +
      275 +
      cfg.hold;


    // ==========================================================
    // 4. Tiny light
    // ==========================================================

    setTimeout(()=>{

      scene.classList.add(
        "point"
      );

      buildSound(
        rarity
      );

    },b);


    // ==========================================================
    // 5. Horizontal line
    // ==========================================================

    setTimeout(()=>{

      scene.classList.add(
        "line"
      );

    },b + 620);


    // ==========================================================
    // 6. Rings + text
    // ==========================================================

    setTimeout(()=>{

      scene.classList.add(
        "build"
      );

    },b + 1030);


    const cut =
      b +
      1030 +
      (
        rarity === "GOD"
          ? 1950
          : rarity === "LEGEND"
          ? 1700
          : 1500
      );


    // ==========================================================
    // 7. Second blackout
    // ==========================================================

    setTimeout(()=>{

      scene
      .querySelector(
        ".v5cut"
      )
      .classList.add(
        "go"
      );

    },cut);


    // ==========================================================
    // 8. Rarity SLAM
    // ==========================================================

    setTimeout(()=>{

      scene
      .querySelector(
        ".v5final"
      )
      .classList.add(
        "go"
      );


      scene
      .querySelector(
        ".v5burst"
      )
      .classList.add(
        "go"
      );


      hitSound(
        rarity
      );

    },cut + 165);


    // ==========================================================
    // 9. Flash
    // ==========================================================

    setTimeout(()=>{

      scene
      .querySelector(
        ".v5flash"
      )
      .classList.add(
        "go"
      );

    },cut + 610);


    const hold =
      rarity === "GOD"
        ? 1250
        : rarity === "LEGEND"
        ? 1050
        : 900;


    // ==========================================================
    // 10. Fade out
    // ==========================================================

    setTimeout(()=>{

      root.style.transition =
        "opacity .24s";

      root.style.opacity =
        "0";

    },
    cut +
    760 +
    hold
    );


    // ==========================================================
    // 11. Continue game
    // ==========================================================

    setTimeout(()=>{

      root.remove();


      if(
        typeof done ===
        "function"
      ){

        done();
      }

    },
    cut +
    1020 +
    hold
    );
  }


  // ============================================================
  // PREMIUM DROP
  // ============================================================

  function luxury(item){

    if(!item) return;


    const o =
      document.getElementById(
        "dropOverlay"
      );


    const c =
      document.getElementById(
        "dropCard"
      );


    if(
      !o ||
      !c
    ){

      return;
    }


    const m =
      {

        NORMAL:[
          "#d8dce8",
          "rgba(216,220,232,.16)"
        ],

        RARE:[
          "#45a7ff",
          "rgba(69,167,255,.34)"
        ],

        EPIC:[
          "#c367ff",
          "rgba(195,103,255,.38)"
        ],

        LEGEND:[
          "#ffd83d",
          "rgba(255,216,61,.45)"
        ],

        GOD:[
          "#ffffff",
          "rgba(120,240,255,.5)"
        ]

      }[item.rarity] ||
      [
        "#fff",
        "rgba(255,255,255,.2)"
      ];


    o.classList.remove(
      "NORMAL",
      "RARE",
      "EPIC",
      "LEGEND",
      "GOD"
    );


    o.classList.add(
      "v5drop",
      item.rarity
    );


    o.style.setProperty(
      "--dc",
      m[0]
    );


    o.style.setProperty(
      "--dg",
      m[1]
    );


    c.classList.add(
      "v5card"
    );


    c.style.animation =
      "none";


    void c.offsetHeight;


    c.style.animation =
      "";
  }


  // ============================================================
  // INSTALL INTO CURRENT GAME
  // ============================================================

  function install(){

    // ----------------------------------------------------------
    // Disable old revival success route
    // ----------------------------------------------------------

    try{

      if(
        typeof chooseSuccessPattern ===
        "function"
      ){

        chooseSuccessPattern =
          () => "SUCCESS";
      }

    }catch(e){}


    // ==========================================================
    // RARE -> EPIC
    // EPIC -> LEGEND
    // ==========================================================

    try{

      if(
        typeof playAscensionSuccess ===
        "function"
      ){

        playAscensionSuccess =
          function(
            fromRarity,
            toRarity,
            premium=false
          ){

            try{

              ascensionClear();

            }catch(e){}


            playSequence(
              toRarity,
              ()=>{

                try{

                  ascensionCurrentIndex++;

                  continueAscension();

                }catch(e){

                  console.error(
                    "V5 ascension continue",
                    e
                  );
                }
              }
            );
          };
      }

    }catch(e){

      console.error(
        "V5 install playAscensionSuccess",
        e
      );
    }


    // ==========================================================
    // GOD CHANCE
    // Removes old simple GOD mini-puchun
    // ==========================================================

    try{

      if(
        typeof startGodAscension ===
        "function"
      ){

        startGodAscension =
          function(){

            try{

              ascensionClear();

              ascensionOverlay.className =
                "show";

              ascensionOverlay.style.background =
                "#000";

            }catch(e){}


            const s =
              document.createElement(
                "div"
              );


            s.className =
              "ascensionStage ascensionGod";


            s.innerHTML = `

              <div class="ascensionSub">
                0.1%
              </div>

              <div
                style="
                  margin-top:14px;
                  font-size:13px;
                  font-weight:900;
                  letter-spacing:7px;
                  color:#aaa;
                "
              >
                GOD CHANCE
              </div>

              <div
                style="
                  margin-top:10px;
                  font-size:28px;
                  font-weight:1000;
                  letter-spacing:8px;
                  color:white;
                "
              >
                ????
              </div>

              <button
                id="v5GodPush"
                class="
                  ascensionPush
                  ascensionRainbowPush
                "
                style="
                  margin-top:34px
                "
              >
                🌈
                <br>
                PUSH
              </button>

            `;


            ascensionOverlay
            .appendChild(
              s
            );


            try{

              sfxKyuiin(
                .1,
                .7
              );

            }catch(e){}


            const b =
              document.getElementById(
                "v5GodPush"
              );


            if(b){

              b.onclick =
                ()=>{

                  b.disabled =
                    true;

                  playGodAscensionSuccess();
                };
            }
          };
      }

    }catch(e){

      console.error(
        "V5 install startGodAscension",
        e
      );
    }


    // ==========================================================
    // GOD SUCCESS
    // ==========================================================

    try{

      if(
        typeof playGodAscensionSuccess ===
        "function"
      ){

        playGodAscensionSuccess =
          function(){

            try{

              ascensionClear();

            }catch(e){}


            playSequence(
              "GOD",
              ()=>{

                try{

                  const item =
                    ascensionItem;


                  if(
                    item &&
                    typeof revealSuperDropCard ===
                    "function"
                  ){

                    revealSuperDropCard(
                      item
                    );
                  }


                  ascensionItem =
                    null;

                  ascensionFinalRarity =
                    null;

                  ascensionCurrentIndex =
                    0;

                }catch(e){

                  console.error(
                    "V5 GOD finish",
                    e
                  );
                }
              }
            );
          };
      }

    }catch(e){

      console.error(
        "V5 install GOD",
        e
      );
    }


    // ==========================================================
    // PREMIUM DROP CARD
    // ==========================================================

    try{

      if(
        typeof revealSuperDropCard ===
        "function"
      ){

        const old =
          revealSuperDropCard;


        revealSuperDropCard =
          function(item){

            old(item);


            requestAnimationFrame(
              ()=>{

                luxury(
                  item
                );
              }
            );
          };
      }

    }catch(e){

      console.error(
        "V5 install reveal",
        e
      );
    }


    console.log(
      "1% DROP EFFECTS V5 COMPLETE READY"
    );
  }


  // ============================================================
  // START
  // ============================================================

  if(
    document.readyState ===
    "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      install,
      {
        once:true
      }
    );

  }else{

    setTimeout(
      install,
      0
    );
  }

})();
