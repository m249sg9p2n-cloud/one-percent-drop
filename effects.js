// ============================================================
// 1% DROP
// EFFECTS V5 - HYBRID COMPLETE
//
// V3 PUCHUN
//   ↓
// BLACK SILENCE
//   ↓
// V5 CINEMATIC AWAKENING
//   ↓
// RARITY IMPACT
//   ↓
// PREMIUM DROP
//
// COMPLETE REPLACEMENT / NO PATCHES
// ============================================================

(() => {

"use strict";

if(window.__OP_EFFECTS_V5_HYBRID__) return;
window.__OP_EFFECTS_V5_HYBRID__ = true;


// ============================================================
// RARITY
// ============================================================

const DATA = {

  RARE:{
    color:"#43a9ff",
    light:"#d8f3ff",
    phrase:"A BLUE SIGN APPEARS",
    black:620,
    build:1450,
    particles:6
  },

  EPIC:{
    color:"#c45cff",
    light:"#f3c4ff",
    phrase:"POWER BEYOND THE ORDINARY",
    black:720,
    build:1550,
    particles:8
  },

  LEGEND:{
    color:"#ffd63e",
    light:"#fff2a0",
    phrase:"THE LEGEND AWAKENS",
    black:850,
    build:1700,
    particles:10
  },

  GOD:{
    color:"#ffffff",
    light:"#86f7ff",
    phrase:"THE WORLD HAS CHOSEN YOU",
    black:1100,
    build:1950,
    particles:12
  }

};


// ============================================================
// CSS
// ============================================================

const style=document.createElement("style");

style.textContent=`

/* =========================================================
   MASTER
========================================================= */

.op5{
  position:fixed;
  inset:0;
  z-index:2147483000;
  overflow:hidden;
  pointer-events:none;
  background:#000;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}

.op5 *{
  box-sizing:border-box;
}


/* =========================================================
   V3 STYLE PUCHUN
========================================================= */

.op5PuchunBlack{
  position:absolute;
  inset:0;
  z-index:1;
  background:#000;
}


.op5White{
  position:absolute;
  inset:0;
  z-index:30;
  background:#fff;
  opacity:0;
}

.op5White.hit{
  animation:op5White .055s steps(1,end) forwards;
}

@keyframes op5White{

  0%{
    opacity:1;
  }

  70%{
    opacity:.95;
  }

  100%{
    opacity:0;
  }

}


.op5Flare{
  position:absolute;
  left:50%;
  top:50%;

  width:145vw;
  aspect-ratio:1;

  z-index:22;

  border-radius:50%;

  opacity:0;

  transform:
    translate(-50%,-50%)
    scale(1.15);

  background:
    radial-gradient(
      circle,
      #fff 0%,
      #fff 3%,
      rgba(244,253,255,1) 7%,
      rgba(194,236,255,.96) 13%,
      rgba(116,190,255,.62) 23%,
      rgba(80,135,255,.18) 40%,
      transparent 62%
    );

  filter:brightness(1.15);
}


.op5Flare.cut{
  animation:
    op5FlareCut
    .215s
    cubic-bezier(.82,0,.98,.3)
    forwards;
}

@keyframes op5FlareCut{

  0%{
    opacity:1;

    transform:
      translate(-50%,-50%)
      scale(1.15);
  }

  20%{
    opacity:1;

    transform:
      translate(-50%,-50%)
      scale(.82);
  }

  45%{
    opacity:1;

    transform:
      translate(-50%,-50%)
      scale(.42);
  }

  68%{
    opacity:.9;

    transform:
      translate(-50%,-50%)
      scale(.16);
  }

  84%{
    opacity:.72;

    transform:
      translate(-50%,-50%)
      scale(.045);
  }

  100%{
    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.002);
  }

}


/* horizontal CRT line */

.op5CutLine{
  position:absolute;

  left:50%;
  top:50%;

  z-index:24;

  width:190vw;
  height:13px;

  opacity:0;

  transform:
    translate(-50%,-50%);

  background:
    linear-gradient(
      to bottom,
      transparent 0%,
      rgba(190,232,255,.25) 20%,
      #fff 42%,
      #fff 58%,
      rgba(190,232,255,.25) 80%,
      transparent 100%
    );

  box-shadow:
    0 0 6px #fff,
    0 0 18px rgba(205,240,255,.95),
    0 0 40px rgba(90,170,255,.5);
}


.op5CutLine.cut{
  animation:
    op5CutLine
    .215s
    linear
    forwards;
}


@keyframes op5CutLine{

  0%{
    opacity:1;
    width:190vw;
    height:13px;
  }

  30%{
    opacity:1;
    width:130vw;
    height:8px;
  }

  60%{
    opacity:.9;
    width:70vw;
    height:4px;
  }

  82%{
    opacity:.7;
    width:22vw;
    height:2px;
  }

  100%{
    opacity:0;
    width:1px;
    height:1px;
  }

}


/* short vertical flare */

.op5CutVertical{
  position:absolute;

  left:50%;
  top:50%;

  z-index:23;

  width:5px;
  height:90vh;

  opacity:0;

  transform:
    translate(-50%,-50%);

  background:
    linear-gradient(
      90deg,
      transparent,
      #fff,
      transparent
    );

  box-shadow:
    0 0 10px #fff,
    0 0 25px rgba(130,210,255,.6);
}


.op5CutVertical.cut{
  animation:
    op5Vertical
    .14s
    linear
    forwards;
}


@keyframes op5Vertical{

  0%{
    opacity:.8;
    height:90vh;
  }

  55%{
    opacity:.45;
    height:35vh;
  }

  100%{
    opacity:0;
    height:1px;
  }

}


/* =========================================================
   BLACK CINEMATIC
========================================================= */

.op5Scene{
  position:absolute;
  inset:0;

  z-index:10;

  background:#000;

  opacity:0;

  color:var(--c);
}


.op5Scene.on{
  opacity:1;
}


/* =========================================================
   TINY LIGHT POINT
========================================================= */

.op5Point{

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
    0 0 4px #fff,
    0 0 13px var(--c),
    0 0 32px var(--c);
}


.op5Scene.point .op5Point{

  animation:
    op5Point
    .82s
    cubic-bezier(.16,.75,.25,1)
    forwards;
}


@keyframes op5Point{

  0%{

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.01);

  }

  35%{

    opacity:.25;

  }

  65%{

    opacity:1;

    transform:
      translate(-50%,-50%)
      scale(2.1);

  }

  100%{

    opacity:1;

    transform:
      translate(-50%,-50%)
      scale(1);

  }

}


/* =========================================================
   HORIZONTAL AWAKENING LINE
========================================================= */

.op5AwakeLine{

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
    0 0 6px #fff,
    0 0 17px var(--c);
}


.op5Scene.line .op5AwakeLine{

  animation:
    op5AwakeLine
    .78s
    cubic-bezier(.12,.75,.2,1)
    forwards;
}


@keyframes op5AwakeLine{

  0%{

    width:0;
    opacity:0;

  }

  15%{

    opacity:.9;

  }

  100%{

    width:min(82vw,390px);
    opacity:.68;

  }

}


/* =========================================================
   RINGS
========================================================= */

.op5Ring,
.op5Ring2{

  position:absolute;

  left:50%;
  top:50%;

  border-radius:50%;

  border:
    1px solid
    var(--c);

  opacity:0;

  transform:
    translate(-50%,-50%)
    scale(.18);

}


.op5Ring{

  width:min(78vw,370px);
  aspect-ratio:1;

}


.op5Ring2{

  width:min(55vw,260px);
  aspect-ratio:1;

}


.op5Scene.build .op5Ring{

  animation:
    op5Ring
    1.9s
    ease-out
    forwards;

}


.op5Scene.build .op5Ring2{

  animation:
    op5Ring2
    1.75s
    .13s
    ease-out
    forwards;

}


@keyframes op5Ring{

  0%{

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.18)
      rotate(-35deg);

  }

  45%{

    opacity:.43;

  }

  100%{

    opacity:.13;

    transform:
      translate(-50%,-50%)
      scale(1.05)
      rotate(17deg);

  }

}


@keyframes op5Ring2{

  0%{

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(.22)
      rotate(35deg);

  }

  48%{

    opacity:.4;

  }

  100%{

    opacity:.17;

    transform:
      translate(-50%,-50%)
      scale(1)
      rotate(-14deg);

  }

}


/* =========================================================
   SIGNAL TEXT
========================================================= */

.op5Signal{

  position:absolute;

  left:0;
  right:0;

  top:37%;

  text-align:center;

  font-size:9px;

  font-weight:900;

  letter-spacing:8px;

  color:var(--c);

  opacity:0;

}


.op5Scene.build .op5Signal{

  animation:
    op5Signal
    .75s
    ease-out
    forwards;

}


@keyframes op5Signal{

  from{

    opacity:0;
    letter-spacing:14px;

  }

  to{

    opacity:.7;
    letter-spacing:8px;

  }

}


/* =========================================================
   PHRASE
========================================================= */

.op5Phrase{

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

  font-weight:700;

  font-size:
    clamp(18px,5.2vw,27px);

  letter-spacing:2px;

  text-shadow:
    0 0 10px var(--c),
    0 0 23px var(--c);

}


.op5Char{

  display:inline-block;

  opacity:0;

  filter:blur(7px);

  transform:
    translateY(11px)
    scale(.88);

}


.op5Scene.build .op5Char{

  animation:
    op5Char
    .5s
    ease-out
    forwards;

  animation-delay:
    calc(var(--i) * 40ms);

}


@keyframes op5Char{

  to{

    opacity:1;

    filter:blur(0);

    transform:
      translateY(0)
      scale(1);

  }

}


/* =========================================================
   PARTICLES
========================================================= */

.op5Spark{

  position:absolute;

  left:50%;
  top:50%;

  width:2px;
  height:2px;

  border-radius:50%;

  background:#fff;

  opacity:0;

  box-shadow:
    0 0 6px #fff,
    0 0 13px var(--c);

}


.op5Scene.build .op5Spark{

  animation:
    op5Spark
    1.35s
    var(--delay)
    ease-out
    forwards;

}


@keyframes op5Spark{

  0%{

    opacity:0;

    transform:
      rotate(var(--angle))
      translateX(8px);

  }

  25%{

    opacity:.85;

  }

  100%{

    opacity:0;

    transform:
      rotate(var(--angle))
      translateX(var(--distance));

  }

}


/* =========================================================
   SECOND BLACK
========================================================= */

.op5SecondBlack{

  position:absolute;

  inset:0;

  background:#000;

  z-index:40;

  opacity:0;

}


.op5SecondBlack.go{

  animation:
    op5SecondBlack
    .24s
    steps(1,end)
    forwards;

}


@keyframes op5SecondBlack{

  0%,72%{

    opacity:1;

  }

  73%,100%{

    opacity:0;

  }

}


/* =========================================================
   FINAL RARITY
========================================================= */

.op5Final{

  position:absolute;

  inset:0;

  z-index:35;

  display:flex;

  align-items:center;
  justify-content:center;

  opacity:0;

}


.op5Final.go{

  opacity:1;

}


.op5FinalWord{

  font-size:
    clamp(68px,22vw,120px);

  line-height:.86;

  font-weight:1000;

  letter-spacing:-2px;

  color:var(--c);

  opacity:0;

  transform:
    scale(1.75);

  filter:blur(5px);

  text-shadow:
    0 0 8px var(--c),
    0 0 22px var(--c),
    0 0 45px var(--c);

}


.op5Final.go .op5FinalWord{

  animation:
    op5FinalWord
    .72s
    cubic-bezier(.12,1.15,.25,1)
    forwards;

}


@keyframes op5FinalWord{

  0%{

    opacity:0;

    filter:blur(5px);

    transform:
      scale(1.75);

  }

  20%{

    opacity:1;

    filter:blur(0);

  }

  55%{

    transform:
      scale(.92);

  }

  78%{

    transform:
      scale(1.04);

  }

  100%{

    opacity:1;

    filter:blur(0);

    transform:
      scale(1);

  }

}


/* =========================================================
   FINAL BURST - intentionally weaker than old V5
========================================================= */

.op5Burst{

  position:absolute;

  left:50%;
  top:50%;

  width:6px;
  height:6px;

  z-index:32;

  border-radius:50%;

  opacity:0;

  background:#fff;

  transform:
    translate(-50%,-50%)
    scale(.01);

  box-shadow:
    0 0 16px #fff,
    0 0 38px var(--c);

}


.op5Burst.go{

  animation:
    op5Burst
    .48s
    ease-out
    forwards;

}


@keyframes op5Burst{

  0%{

    opacity:.75;

    transform:
      translate(-50%,-50%)
      scale(.01);

  }

  45%{

    opacity:.32;

  }

  100%{

    opacity:0;

    transform:
      translate(-50%,-50%)
      scale(58);

  }

}


/* =========================================================
   SOFT FINAL FLASH
========================================================= */

.op5FinalFlash{

  position:absolute;

  inset:0;

  z-index:60;

  opacity:0;

  background:#fff;

}


.op5FinalFlash.go{

  animation:
    op5FinalFlash
    .15s
    ease-out
    forwards;

}


@keyframes op5FinalFlash{

  0%{

    opacity:.30;

  }

  100%{

    opacity:0;

  }

}


/* =========================================================
   GOD
========================================================= */

.op5Scene.GOD .op5FinalWord{

  background:
    linear-gradient(
      90deg,
      #ffffff,
      #88f7ff,
      #a993ff,
      #fa8fe9,
      #fff2a0,
      #ffffff
    );

  background-size:
    240% 100%;

  -webkit-background-clip:text;
  background-clip:text;

  color:transparent;

  text-shadow:none;

  filter:
    drop-shadow(
      0 0 11px
      rgba(255,255,255,.85)
    );

}


.op5GodRay{

  display:none;

  position:absolute;

  left:50%;
  top:50%;

  width:0;
  height:2px;

  opacity:0;

  transform-origin:
    left center;

  background:
    linear-gradient(
      90deg,
      #fff,
      #86f7ff,
      #c994ff,
      #ff92df,
      transparent
    );

  box-shadow:
    0 0 7px #fff;

}


.op5Scene.GOD.build .op5GodRay{

  display:block;

  animation:
    op5GodRay
    .85s
    var(--delay)
    ease-out
    forwards;

}


@keyframes op5GodRay{

  0%{

    opacity:0;
    width:0;

  }

  18%{

    opacity:.9;

  }

  100%{

    opacity:.42;
    width:70vw;

  }

}


/* =========================================================
   DROP LUXURY
========================================================= */

#dropOverlay.op5Drop{

  overflow:hidden;

  background:
    #02040a !important;

  --dropColor:#fff;
  --dropGlow:rgba(255,255,255,.2);

}


#dropOverlay.op5Drop::before{

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
      var(--dropColor),
      transparent 60%
    );

  opacity:.14;

  pointer-events:none;

  animation:
    op5DropAura
    2.5s
    ease-in-out
    infinite
    alternate;

}


@keyframes op5DropAura{

  from{

    opacity:.08;

    transform:
      translate(-50%,-50%)
      scale(.84);

  }

  to{

    opacity:.23;

    transform:
      translate(-50%,-50%)
      scale(1.07);

  }

}


#dropCard.op5Card{

  position:relative;

  overflow:hidden;

  border:
    1px solid
    var(--dropColor) !important;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.08),
      rgba(12,15,30,.98) 32%,
      #030409
    ) !important;

  box-shadow:
    0 0 0 1px rgba(255,255,255,.05),
    0 0 28px var(--dropGlow),
    0 28px 68px rgba(0,0,0,.86) !important;

  animation:
    op5CardIn
    .65s
    cubic-bezier(.15,1,.28,1)
    forwards !important;

}


@keyframes op5CardIn{

  0%{

    opacity:0;

    transform:
      translateY(28px)
      scale(.8);

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


#dropCard.op5Card::after{

  content:"";

  position:absolute;

  left:-70%;
  top:-25%;

  width:42%;
  height:150%;

  transform:
    rotate(18deg);

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.04),
      rgba(255,255,255,.22),
      rgba(255,255,255,.04),
      transparent
    );

  pointer-events:none;

  animation:
    op5CardSweep
    2.8s
    .6s
    ease-in-out
    infinite;

}


@keyframes op5CardSweep{

  0%,30%{

    left:-70%;

  }

  70%,100%{

    left:130%;

  }

}


#dropOverlay.op5Drop .dropRarity{

  text-shadow:
    0 0 18px
    var(--dropColor);

}


#dropOverlay.op5Drop.GOD .dropRarity{

  background:
    linear-gradient(
      90deg,
      #fff,
      #7ff6ff,
      #c793ff,
      #ff91df,
      #fff2a0,
      #fff
    );

  background-size:
    240% 100%;

  -webkit-background-clip:text;
  background-clip:text;

  color:
    transparent !important;

  animation:
    op5GodText
    1.5s
    linear
    infinite;

}


@keyframes op5GodText{

  to{

    background-position:
      240% 0;

  }

}

`;

document.head.appendChild(style);


// ============================================================
// AUDIO ENGINE
// ============================================================

let ownAudio=null;


function getAudio(){

  try{

    if(
      typeof audioCtx!=="undefined" &&
      audioCtx
    ){

      if(audioCtx.state==="suspended"){
        audioCtx.resume();
      }

      return audioCtx;

    }

  }catch(e){}


  try{

    if(!ownAudio){

      const AC=
        window.AudioContext ||
        window.webkitAudioContext;

      if(AC){
        ownAudio=new AC();
      }

    }


    if(
      ownAudio &&
      ownAudio.state==="suspended"
    ){

      ownAudio.resume();

    }


    return ownAudio;

  }catch(e){

    return null;

  }

}


// ============================================================
// BASIC TONE
// ============================================================

function tone(
  start,
  end,
  duration,
  volume,
  type="sine"
){

  const ctx=getAudio();

  if(!ctx) return;


  const now=ctx.currentTime;

  const oscillator=
    ctx.createOscillator();

  const gain=
    ctx.createGain();


  oscillator.type=type;


  oscillator.frequency
  .setValueAtTime(
    start,
    now
  );


  if(end>0){

    oscillator.frequency
    .exponentialRampToValueAtTime(
      end,
      now+duration
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
    now+duration
  );


  oscillator.connect(gain);

  gain.connect(
    ctx.destination
  );


  oscillator.start(now);

  oscillator.stop(
    now+duration+.01
  );

}


// ============================================================
// V3 STYLE PUCHUN SOUND
//
// sharp electrical cut
// +
// very short sub impact
//
// NOT "DOOOON"
// ============================================================

function puchunSound(){

  const ctx=getAudio();

  if(!ctx) return;


  const now=ctx.currentTime;


  // --------------------------------------------------------
  // SHARP SNAP
  // --------------------------------------------------------

  const snap=
    ctx.createOscillator();

  const snapGain=
    ctx.createGain();

  const snapFilter=
    ctx.createBiquadFilter();


  snap.type="square";


  snap.frequency
  .setValueAtTime(
    1900,
    now
  );


  snap.frequency
  .exponentialRampToValueAtTime(
    105,
    now+.031
  );


  snapFilter.type=
    "bandpass";

  snapFilter.frequency.value=
    1850;

  snapFilter.Q.value=
    .62;


  snapGain.gain
  .setValueAtTime(
    .21,
    now
  );


  snapGain.gain
  .exponentialRampToValueAtTime(
    .001,
    now+.043
  );


  snap.connect(
    snapFilter
  );

  snapFilter.connect(
    snapGain
  );

  snapGain.connect(
    ctx.destination
  );


  snap.start(now);

  snap.stop(
    now+.05
  );


  // --------------------------------------------------------
  // VERY SHORT LOW IMPACT
  // --------------------------------------------------------

  tone(
    86,
    34,
    .078,
    .27,
    "sine"
  );


  // --------------------------------------------------------
  // ELECTRIC CUT NOISE
  // --------------------------------------------------------

  const length=
    Math.floor(
      ctx.sampleRate*.032
    );


  const buffer=
    ctx.createBuffer(
      1,
      length,
      ctx.sampleRate
    );


  const data=
    buffer.getChannelData(0);


  for(
    let i=0;
    i<length;
    i++
  ){

    const life=
      1-i/length;

    data[i]=
      (Math.random()*2-1)
      *
      life
      *
      life;

  }


  const source=
    ctx.createBufferSource();

  const noiseGain=
    ctx.createGain();

  const high=
    ctx.createBiquadFilter();


  source.buffer=
    buffer;


  high.type=
    "highpass";

  high.frequency.value=
    1050;


  noiseGain.gain
  .setValueAtTime(
    .13,
    now
  );


  noiseGain.gain
  .exponentialRampToValueAtTime(
    .001,
    now+.032
  );


  source.connect(high);

  high.connect(
    noiseGain
  );

  noiseGain.connect(
    ctx.destination
  );


  source.start(now);


  try{

    if(
      typeof vibrate==="function"
    ){

      vibrate(60);

    }else{

      navigator.vibrate?.(60);

    }

  }catch(e){}

}


// ============================================================
// DARK BUILD SOUND
// ============================================================

function buildSound(rarity){

  tone(
    rarity==="GOD"
      ? 46
      : 70,

    rarity==="GOD"
      ? 33
      : 48,

    .23,

    rarity==="GOD"
      ? .06
      : .035,

    "sine"
  );


  setTimeout(()=>{

    tone(
      rarity==="GOD"
        ? 460
        : rarity==="LEGEND"
        ? 420
        : rarity==="EPIC"
        ? 350
        : 310,

      220,

      .12,

      .023,

      "triangle"
    );

  },560);

}


// ============================================================
// FINAL HIT
// ============================================================

function finalHitSound(rarity){

  tone(
    rarity==="GOD"
      ? 56
      : 64,

    38,

    .105,

    rarity==="GOD"
      ? .17
      : .11,

    "sine"
  );


  tone(
    rarity==="GOD"
      ? 980
      : rarity==="LEGEND"
      ? 850
      : 720,

    300,

    .055,

    .045,

    "square"
  );


  setTimeout(()=>{

    tone(
      rarity==="GOD"
        ? 1150
        : rarity==="LEGEND"
        ? 920
        : rarity==="EPIC"
        ? 810
        : 690,

      470,

      .15,

      .04,

      "triangle"
    );

  },70);


  try{

    if(
      typeof vibrate==="function"
    ){

      vibrate(
        rarity==="GOD"
        ? [75,30,110]
        : 65
      );

    }

  }catch(e){}

}


// ============================================================
// TEXT HELPER
// ============================================================

function createLetters(text){

  return [...text]
  .map((char,index)=>{

    if(char===" "){
      return "<span>&nbsp;</span>";
    }

    return `
      <span
        class="op5Char"
        style="--i:${index}"
      >${char}</span>
    `;

  })
  .join("");

}


// ============================================================
// PARTICLES
// ============================================================

function addParticles(
  scene,
  rarity
){

  const count=
    DATA[rarity].particles;


  for(
    let i=0;
    i<count;
    i++
  ){

    const spark=
      document.createElement(
        "i"
      );


    spark.className=
      "op5Spark";


    spark.style.setProperty(
      "--angle",
      Math.random()*360+"deg"
    );


    spark.style.setProperty(
      "--distance",
      80+Math.random()*150+"px"
    );


    spark.style.setProperty(
      "--delay",
      .12+Math.random()*.55+"s"
    );


    scene.appendChild(
      spark
    );

  }

}


// ============================================================
// FULL CINEMATIC
// ============================================================

function playSequence(
  rarity,
  done
){

  rarity=
    DATA[rarity]
    ? rarity
    : "RARE";


  const cfg=
    DATA[rarity];


  document
  .querySelectorAll(
    ".op5"
  )
  .forEach(
    node=>node.remove()
  );


  const root=
    document.createElement(
      "div"
    );


  root.className=
    "op5";


  root.innerHTML=`

    <div
      class="op5PuchunBlack"
    ></div>


    <div
      class="op5Scene ${rarity}"
      style="--c:${cfg.color}"
    >

      <div
        class="op5Point"
      ></div>

      <div
        class="op5AwakeLine"
      ></div>

      <div
        class="op5Ring"
      ></div>

      <div
        class="op5Ring2"
      ></div>


      <div
        class="op5Signal"
      >
        RARITY SIGNAL DETECTED
      </div>


      <div
        class="op5Phrase"
      >
        ${createLetters(cfg.phrase)}
      </div>


      <i
        class="op5GodRay"
        style="
          transform:rotate(-20deg);
          --delay:.10s
        "
      ></i>

      <i
        class="op5GodRay"
        style="
          transform:rotate(18deg);
          --delay:.22s
        "
      ></i>

      <i
        class="op5GodRay"
        style="
          transform:rotate(145deg);
          --delay:.36s
        "
      ></i>

      <i
        class="op5GodRay"
        style="
          transform:rotate(210deg);
          --delay:.50s
        "
      ></i>


      <div
        class="op5SecondBlack"
      ></div>


      <div
        class="op5Burst"
      ></div>


      <div
        class="op5Final"
      >

        <div
          class="op5FinalWord"
        >
          ${rarity}
        </div>

      </div>


      <div
        class="op5FinalFlash"
      ></div>

    </div>


    <div
      class="op5Flare"
    ></div>


    <div
      class="op5CutLine"
    ></div>


    <div
      class="op5CutVertical"
    ></div>


    <div
      class="op5White"
    ></div>

  `;


  document.body.appendChild(
    root
  );


  const scene=
    root.querySelector(
      ".op5Scene"
    );

  const white=
    root.querySelector(
      ".op5White"
    );

  const flare=
    root.querySelector(
      ".op5Flare"
    );

  const line=
    root.querySelector(
      ".op5CutLine"
    );

  const vertical=
    root.querySelector(
      ".op5CutVertical"
    );


  addParticles(
    scene,
    rarity
  );


  // ========================================================
  // 1. Tiny delay after PUSH
  // ========================================================

  const START=245;


  // ========================================================
  // 2. PUCHUN
  // ========================================================

  setTimeout(()=>{

    white.classList.add(
      "hit"
    );


    flare.classList.add(
      "cut"
    );


    line.classList.add(
      "cut"
    );


    vertical.classList.add(
      "cut"
    );


    puchunSound();

  },START);


  // ========================================================
  // 3. TOTAL BLACK
  // ========================================================

  setTimeout(()=>{

    white.remove();
    flare.remove();
    line.remove();
    vertical.remove();

    scene.classList.add(
      "on"
    );

  },START+245);


  // ========================================================
  // 4. SILENCE / DARK WAIT
  // ========================================================

  const awake=
    START+
    245+
    cfg.black;


  // ========================================================
  // 5. LIGHT POINT
  // ========================================================

  setTimeout(()=>{

    scene.classList.add(
      "point"
    );

    buildSound(
      rarity
    );

  },awake);


  // ========================================================
  // 6. THIN LINE
  // ========================================================

  setTimeout(()=>{

    scene.classList.add(
      "line"
    );

  },awake+650);


  // ========================================================
  // 7. TEXT + RINGS
  // ========================================================

  setTimeout(()=>{

    scene.classList.add(
      "build"
    );

  },awake+1080);


  const secondBlack=
    awake+
    1080+
    cfg.build;


  // ========================================================
  // 8. SECOND BLACK
  // ========================================================

  setTimeout(()=>{

    scene
    .querySelector(
      ".op5SecondBlack"
    )
    .classList.add(
      "go"
    );

  },secondBlack);


  // ========================================================
  // 9. RARITY HIT
  // ========================================================

  setTimeout(()=>{

    scene
    .querySelector(
      ".op5Final"
    )
    .classList.add(
      "go"
    );


    scene
    .querySelector(
      ".op5Burst"
    )
    .classList.add(
      "go"
    );


    finalHitSound(
      rarity
    );

  },secondBlack+170);


  // ========================================================
  // 10. SOFT FLASH
  // ========================================================

  setTimeout(()=>{

    scene
    .querySelector(
      ".op5FinalFlash"
    )
    .classList.add(
      "go"
    );

  },secondBlack+590);


  const finalHold=
    rarity==="GOD"
    ? 1350
    : rarity==="LEGEND"
    ? 1100
    : rarity==="EPIC"
    ? 980
    : 850;


  // ========================================================
  // 11. FADE OUT
  // ========================================================

  setTimeout(()=>{

    root.style.transition=
      "opacity .25s ease";

    root.style.opacity=
      "0";

  },
  secondBlack+
  740+
  finalHold
  );


  // ========================================================
  // 12. END
  // ========================================================

  setTimeout(()=>{

    root.remove();


    if(
      typeof done==="function"
    ){

      done();

    }

  },
  secondBlack+
  1010+
  finalHold
  );

}


// ============================================================
// PREMIUM DROP
// ============================================================

function luxuryDrop(item){

  if(!item) return;


  const overlay=
    document.getElementById(
      "dropOverlay"
    );


  const card=
    document.getElementById(
      "dropCard"
    );


  if(
    !overlay ||
    !card
  ){

    return;

  }


  const colors={

    NORMAL:[
      "#d8dce8",
      "rgba(216,220,232,.15)"
    ],

    RARE:[
      "#45a7ff",
      "rgba(69,167,255,.34)"
    ],

    EPIC:[
      "#c45cff",
      "rgba(196,92,255,.38)"
    ],

    LEGEND:[
      "#ffd63e",
      "rgba(255,214,62,.45)"
    ],

    GOD:[
      "#ffffff",
      "rgba(120,240,255,.50)"
    ]

  };


  const rarity=
    item.rarity ||
    "NORMAL";


  const cfg=
    colors[rarity] ||
    colors.NORMAL;


  overlay.classList.remove(
    "NORMAL",
    "RARE",
    "EPIC",
    "LEGEND",
    "GOD"
  );


  overlay.classList.add(
    "op5Drop",
    rarity
  );


  overlay.style.setProperty(
    "--dropColor",
    cfg[0]
  );


  overlay.style.setProperty(
    "--dropGlow",
    cfg[1]
  );


  card.classList.add(
    "op5Card"
  );


  card.style.animation=
    "none";


  void card.offsetHeight;


  card.style.animation=
    "";

}


// ============================================================
// INSTALL
// ============================================================

function install(){

  // ========================================================
  // Success route only
  // ========================================================

  try{

    if(
      typeof chooseSuccessPattern===
      "function"
    ){

      chooseSuccessPattern=
        ()=>"SUCCESS";

    }

  }catch(e){}


  // ========================================================
  // RARE -> EPIC -> LEGEND
  // ========================================================

  try{

    if(
      typeof playAscensionSuccess===
      "function"
    ){

      playAscensionSuccess=
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

            }catch(error){

              console.error(
                "V5 continue error",
                error
              );

            }

          }
        );

      };

    }

  }catch(error){

    console.error(
      "V5 ascension install error",
      error
    );

  }


  // ========================================================
  // GOD CHANCE
  //
  // no old mini-puchun
  // ========================================================

  try{

    if(
      typeof startGodAscension===
      "function"
    ){

      startGodAscension=
      function(){

        try{

          ascensionClear();


          ascensionOverlay.className=
            "show";


          ascensionOverlay.style.background=
            "#000";

        }catch(e){}


        const stage=
          document.createElement(
            "div"
          );


        stage.className=
          "ascensionStage ascensionGod";


        stage.innerHTML=`

          <div
            class="ascensionSub"
          >
            0.1%
          </div>


          <div
            style="
              margin-top:14px;
              color:#aaa;
              font-size:12px;
              font-weight:900;
              letter-spacing:7px;
            "
          >
            GOD CHANCE
          </div>


          <div
            style="
              margin-top:12px;
              color:#fff;
              font-size:28px;
              font-weight:1000;
              letter-spacing:8px;
            "
          >
            ????
          </div>


          <button
            id="op5GodPush"
            class="
              ascensionPush
              ascensionRainbowPush
            "
            style="
              margin-top:34px;
            "
          >
            🌈
            <br>
            PUSH
          </button>

        `;


        ascensionOverlay.appendChild(
          stage
        );


        try{

          if(
            typeof sfxKyuiin===
            "function"
          ){

            sfxKyuiin(
              .1,
              .7
            );

          }

        }catch(e){}


        const button=
          document.getElementById(
            "op5GodPush"
          );


        if(button){

          button.onclick=
          ()=>{

            button.disabled=true;

            playGodAscensionSuccess();

          };

        }

      };

    }

  }catch(error){

    console.error(
      "V5 GOD CHANCE error",
      error
    );

  }


  // ========================================================
  // GOD SUCCESS
  // ========================================================

  try{

    if(
      typeof playGodAscensionSuccess===
      "function"
    ){

      playGodAscensionSuccess=
      function(){

        try{

          ascensionClear();

        }catch(e){}


        playSequence(
          "GOD",
          ()=>{

            try{

              const item=
                ascensionItem;


              if(
                item &&
                typeof revealSuperDropCard===
                "function"
              ){

                revealSuperDropCard(
                  item
                );

              }


              ascensionItem=null;

              ascensionFinalRarity=null;

              ascensionCurrentIndex=0;

            }catch(error){

              console.error(
                "V5 GOD finish error",
                error
              );

            }

          }
        );

      };

    }

  }catch(error){

    console.error(
      "V5 GOD install error",
      error
    );

  }


  // ========================================================
  // PREMIUM DROP
  // ========================================================

  try{

    if(
      typeof revealSuperDropCard===
      "function"
    ){

      const originalReveal=
        revealSuperDropCard;


      revealSuperDropCard=
      function(item){

        originalReveal(
          item
        );


        requestAnimationFrame(
          ()=>{

            luxuryDrop(
              item
            );

          }
        );

      };

    }

  }catch(error){

    console.error(
      "V5 DROP install error",
      error
    );

  }


  console.log(
    "1% DROP EFFECTS V5 HYBRID READY"
  );

}


// ============================================================
// START
// ============================================================

if(
  document.readyState===
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
