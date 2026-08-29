// =====================================================
// ONE PERCENT DROP
// PUCHUN REPRODUCTION Ver.2
//
// Reference:
// 30fps / 39frames
//
// 0.000 - 0.667 : normal
// 0.700         : full white flash
// 0.733 - 0.900 : flare collapse
// 0.933         : blackout
//
// 「白飛び → 急収束 → プッツン → 黒」
// =====================================================

(() => {

  if(window.__PUCHUN_REPRO_V2__) return;
  window.__PUCHUN_REPRO_V2__ = true;


  // =====================================================
  // SETTINGS
  // =====================================================

  const PRE_DELAY = 320;

  // 白飛び1フレーム相当
  const WHITE_FRAME = 34;

  // フレア収束：約6フレーム
  const COLLAPSE_TIME = 200;

  // 完全黒の溜め
  // 参考映像より長くしてゲーム演出向けにする
  const BLACK_HOLD = 1800;


  // =====================================================
  // CSS
  // =====================================================

  const style =
    document.createElement("style");


  style.textContent = `

    .puchunV2{

      position:fixed;
      inset:0;

      z-index:99999999;

      pointer-events:none;

      overflow:hidden;

      background:transparent;

    }


    /* =========================================
       1フレーム白飛び
    ========================================= */

    .puchunV2White{

      position:absolute;
      inset:0;

      background:#fff;

      opacity:0;

      z-index:6;

    }


    .puchunV2White.fire{

      animation:
        puchunV2White
        34ms
        steps(1,end)
        forwards;

    }


    @keyframes puchunV2White{

      0%{
        opacity:1;
      }

      99%{
        opacity:1;
      }

      100%{
        opacity:0;
      }

    }


    /* =========================================
       黒背景

       白飛び直後に一瞬で黒へ
    ========================================= */

    .puchunV2Black{

      position:absolute;
      inset:0;

      background:#000;

      opacity:0;

      z-index:1;

    }


    .puchunV2Black.on{

      opacity:1;

    }


    /* =========================================
       中央フレア本体
    ========================================= */

    .puchunV2Flare{

      position:absolute;

      left:50%;
      top:50%;

      width:100vw;
      height:100vw;

      max-width:820px;
      max-height:820px;

      transform:
        translate(-50%,-50%)
        scale(1);

      opacity:0;

      z-index:4;

      border-radius:50%;

      background:

        radial-gradient(
          ellipse at center,

          rgba(255,255,255,1) 0%,

          rgba(255,255,255,1) 3%,

          rgba(235,250,255,.96) 6%,

          rgba(190,230,255,.72) 12%,

          rgba(120,190,255,.30) 23%,

          rgba(80,130,255,.10) 36%,

          transparent 60%
        );

      filter:
        brightness(1.25);

    }


    .puchunV2Flare.collapse{

      animation:
        puchunV2Collapse
        200ms
        cubic-bezier(.72,0,.95,.38)
        forwards;

    }


    @keyframes puchunV2Collapse{

      /*
        0.733付近
        白飛び直後の巨大フレア
      */

      0%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1.18);

        filter:
          brightness(1.7)
          blur(1px);

      }


      /*
        0.767
      */

      17%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(.80);

      }


      /*
        0.800
      */

      34%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(.57);

      }


      /*
        0.833
      */

      51%{

        opacity:.92;

        transform:
          translate(-50%,-50%)
          scale(.39);

      }


      /*
        0.867
      */

      68%{

        opacity:.80;

        transform:
          translate(-50%,-50%)
          scale(.22);

      }


      /*
        0.900
      */

      85%{

        opacity:.48;

        transform:
          translate(-50%,-50%)
          scale(.075);

      }


      /*
        0.933
        完全消灯
      */

      100%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.01);

      }

    }


    /* =========================================
       横方向の強烈な光芒
    ========================================= */

    .puchunV2H{

      position:absolute;

      left:50%;
      top:50%;

      width:170vw;
      height:14px;

      transform:
        translate(-50%,-50%)
        scaleX(1);

      opacity:0;

      z-index:5;

      background:

        linear-gradient(
          to bottom,

          transparent,

          rgba(205,240,255,.18),

          rgba(240,252,255,.86),

          #fff,

          #fff,

          rgba(225,246,255,.75),

          transparent
        );

      box-shadow:

        0 0 10px #fff,

        0 0 25px
        rgba(220,245,255,.95),

        0 0 60px
        rgba(125,205,255,.62);

    }


    .puchunV2H.collapse{

      animation:
        puchunV2HCollapse
        200ms
        linear
        forwards;

    }


    @keyframes puchunV2HCollapse{

      0%{

        opacity:1;

        height:16px;

        transform:
          translate(-50%,-50%)
          scaleX(1);

      }

      35%{

        opacity:.95;

        height:10px;

        transform:
          translate(-50%,-50%)
          scaleX(.72);

      }

      68%{

        opacity:.65;

        height:5px;

        transform:
          translate(-50%,-50%)
          scaleX(.34);

      }

      88%{

        opacity:.30;

        height:2px;

        transform:
          translate(-50%,-50%)
          scaleX(.09);

      }

      100%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scaleX(.01);

      }

    }


    /* =========================================
       縦の星型光

       十字収束ではなく
       「星の光芒」として短く残す
    ========================================= */

    .puchunV2V{

      position:absolute;

      left:50%;
      top:50%;

      width:9px;
      height:120vh;

      transform:
        translate(-50%,-50%)
        scaleY(1);

      opacity:0;

      z-index:5;

      background:

        linear-gradient(
          to right,

          transparent,

          rgba(220,245,255,.65),

          #fff,

          rgba(220,245,255,.65),

          transparent
        );

      box-shadow:
        0 0 18px white,
        0 0 45px rgba(160,220,255,.55);

    }


    .puchunV2V.collapse{

      animation:
        puchunV2VCollapse
        166ms
        linear
        forwards;

    }


    @keyframes puchunV2VCollapse{

      0%{
        opacity:.90;
        transform:
          translate(-50%,-50%)
          scaleY(1);
      }

      45%{
        opacity:.65;
        transform:
          translate(-50%,-50%)
          scaleY(.50);
      }

      75%{
        opacity:.25;
        transform:
          translate(-50%,-50%)
          scaleY(.16);
      }

      100%{
        opacity:0;
        transform:
          translate(-50%,-50%)
          scaleY(.02);
      }

    }

  `;


  document.head.appendChild(style);


  // =====================================================
  // SOUND
  //
  // 「プッツン！！！！」
  // 原音ではなく合成音
  // =====================================================

  function puchunV2Sound(){

    if(typeof initAudio === "function"){

      try{
        initAudio();
      }catch(e){}

    }


    if(
      typeof audioCtx === "undefined" ||
      !audioCtx
    ){

      if(typeof tone === "function"){

        tone(
          95,
          .09,
          "square",
          .11
        );

      }

      return;
    }


    const now =
      audioCtx.currentTime;


    // =========================================
    // 高域の硬い「プッ」
    // =========================================

    const snap =
      audioCtx.createOscillator();

    const snapGain =
      audioCtx.createGain();

    const snapFilter =
      audioCtx.createBiquadFilter();


    snap.type =
      "square";


    snap.frequency
      .setValueAtTime(
        1250,
        now
      );


    snap.frequency
      .exponentialRampToValueAtTime(
        95,
        now + .045
      );


    snapFilter.type =
      "lowpass";


    snapFilter.frequency
      .setValueAtTime(
        3400,
        now
      );


    snapGain.gain
      .setValueAtTime(
        .13,
        now
      );


    snapGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .055
      );


    snap.connect(
      snapFilter
    );

    snapFilter.connect(
      snapGain
    );

    snapGain.connect(
      audioCtx.destination
    );


    snap.start(now);

    snap.stop(
      now + .06
    );


    // =========================================
    // 低域「ツン」
    // =========================================

    const low =
      audioCtx.createOscillator();

    const lowGain =
      audioCtx.createGain();


    low.type =
      "triangle";


    low.frequency
      .setValueAtTime(
        145,
        now
      );


    low.frequency
      .exponentialRampToValueAtTime(
        36,
        now + .12
      );


    lowGain.gain
      .setValueAtTime(
        .10,
        now
      );


    lowGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .13
      );


    low.connect(
      lowGain
    );

    lowGain.connect(
      audioCtx.destination
    );


    low.start(now);

    low.stop(
      now + .14
    );


    // =========================================
    // 非常に短い電源ノイズ
    // =========================================

    const noiseLength =
      Math.floor(
        audioCtx.sampleRate *
        .045
      );


    const buffer =
      audioCtx.createBuffer(
        1,
        noiseLength,
        audioCtx.sampleRate
      );


    const data =
      buffer.getChannelData(0);


    for(
      let i=0;
      i<noiseLength;
      i++
    ){

      const life =
        1 -
        i/noiseLength;


      data[i] =
        (Math.random()*2-1)
        *
        life *
        life;

    }


    const noise =
      audioCtx.createBufferSource();

    const noiseGain =
      audioCtx.createGain();

    const band =
      audioCtx.createBiquadFilter();


    noise.buffer =
      buffer;


    band.type =
      "bandpass";

    band.frequency.value =
      1600;

    band.Q.value =
      .8;


    noiseGain.gain
      .setValueAtTime(
        .075,
        now
      );


    noiseGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .05
      );


    noise.connect(band);

    band.connect(noiseGain);

    noiseGain.connect(
      audioCtx.destination
    );


    noise.start(now);


    if(typeof vibrate === "function"){

      vibrate(65);

    }

  }


  // =====================================================
  // EFFECT
  // =====================================================

  function playPuchunV2(done){

    if(
      document.querySelector(
        ".puchunV2"
      )
    ){
      return;
    }


    const stage =
      document.createElement("div");

    stage.className =
      "puchunV2";


    const black =
      document.createElement("div");

    black.className =
      "puchunV2Black";


    const white =
      document.createElement("div");

    white.className =
      "puchunV2White";


    const flare =
      document.createElement("div");

    flare.className =
      "puchunV2Flare";


    const h =
      document.createElement("div");

    h.className =
      "puchunV2H";


    const v =
      document.createElement("div");

    v.className =
      "puchunV2V";


    stage.append(
      black,
      flare,
      h,
      v,
      white
    );


    document.body.appendChild(
      stage
    );


    // =========================================
    // PUSH後の短い「何も起きない」
    // =========================================

    setTimeout(()=>{

      // ---------------------------------------
      // 参考動画フレーム21相当
      // ほぼ全面白
      // ---------------------------------------

      white.classList.add(
        "fire"
      );


      // プッツン音は
      // 白ピークで鳴らす
      puchunV2Sound();


    },PRE_DELAY);


    // =========================================
    // 約1フレーム後
    //
    // 白 → 黒
    // 同時に巨大フレア
    // =========================================

    setTimeout(()=>{

      black.classList.add(
        "on"
      );


      flare.classList.add(
        "collapse"
      );


      h.classList.add(
        "collapse"
      );


      v.classList.add(
        "collapse"
      );


    },PRE_DELAY + WHITE_FRAME);


    // =========================================
    // フレア完全消灯
    // =========================================

    setTimeout(()=>{

      flare.remove();
      h.remove();
      v.remove();
      white.remove();

    },
    PRE_DELAY
    + WHITE_FRAME
    + COLLAPSE_TIME
    + 30
    );


    // =========================================
    // 完全ブラックアウト
    //
    // ここをゲーム用に長く保持
    // =========================================

    setTimeout(()=>{

      stage.remove();


      if(typeof done === "function"){

        done();

      }

    },
    PRE_DELAY
    + WHITE_FRAME
    + COLLAPSE_TIME
    + BLACK_HOLD
    );

  }


  // =====================================================
  // NORMAL ASCENSION SUCCESS
  // =====================================================

  if(
    typeof playAscensionSuccess ===
    "function"
  ){

    const originalSuccess =
      playAscensionSuccess;


    playAscensionSuccess =
    function(
      fromRarity,
      toRarity,
      premium=false
    ){

      playPuchunV2(()=>{

        originalSuccess(
          fromRarity,
          toRarity,
          premium
        );

      });

    };

  }


  // =====================================================
  // GOD PUSH SUCCESS
  // =====================================================

  if(
    typeof playGodAscensionSuccess ===
    "function"
  ){

    const originalGodSuccess =
      playGodAscensionSuccess;


    playGodAscensionSuccess =
    function(){

      playPuchunV2(()=>{

        originalGodSuccess();

      });

    };

  }


  console.log(
    "PUCHUN REPRODUCTION V2 READY"
  );

})();
