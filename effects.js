// ONE PERCENT DROP - EFFECTS
// 今後の追加演出はこのファイルに入れる
// =====================================================
// EFFECTS Ver.1
// 超巨大「昇格」IMPACT
// =====================================================

(() => {

  // 二重読み込み防止
  if (window.__BIG_RANKUP_EFFECT__) return;
  window.__BIG_RANKUP_EFFECT__ = true;


  const style = document.createElement("style");

  style.textContent = `

    /* =========================================
       通常の「昇格」
       画面をぶち抜くサイズへ
    ========================================= */

    .brainImpactWord{

      font-size:
        clamp(105px, 29vw, 135px) !important;

      font-weight:1000 !important;

      letter-spacing:
        10px !important;

      line-height:
        .9 !important;

      -webkit-text-stroke:
        2px rgba(255,255,255,.85);

      transform:
        translate(-50%,-50%)
        scale(4.6)
        rotate(-7deg);

      opacity:0;

      animation:
        megaRankUpSlam
        .62s
        cubic-bezier(.08,1.55,.18,1)
        forwards !important;

      will-change:
        transform,
        opacity;

    }


    /* =========================================
       超巨大叩きつけ
    ========================================= */

    @keyframes megaRankUpSlam{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(4.6)
          rotate(-8deg);

      }


      20%{

        opacity:1;

      }


      42%{

        transform:
          translate(-50%,-50%)
          scale(.76)
          rotate(3deg);

      }


      58%{

        transform:
          translate(-50%,-50%)
          scale(1.22)
          rotate(-2deg);

      }


      73%{

        transform:
          translate(-50%,-50%)
          scale(.94)
          rotate(1deg);

      }


      100%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1)
          rotate(0deg);

      }

    }


    /* =========================================
       EPIC昇格
       紫＋白をさらに強化
    ========================================= */

    .brainImpactEpic{

      color:#ffffff !important;

      -webkit-text-stroke:
        3px #9e2cff;

      text-shadow:

        0 0 4px #ffffff,

        0 0 12px #ffffff,

        0 0 25px #ed8cff,

        0 0 45px #c83dff,

        0 0 75px #792bff !important;

    }


    /* =========================================
       LEGEND昇格
       金＋白＋橙
    ========================================= */

    .brainImpactLegend{

      color:#fffbd0 !important;

      -webkit-text-stroke:
        3px #ffae00;

      text-shadow:

        0 0 5px #ffffff,

        0 0 14px #ffffff,

        0 0 28px #fff000,

        0 0 50px #ffbb00,

        0 0 80px #ff6200 !important;

    }


    /* =========================================
       復活昇格

       2段文字なので
       通常昇格より少しだけ小さく
    ========================================= */

    .brainImpactRevival{

      font-size:
        clamp(70px, 21vw, 92px) !important;

      letter-spacing:
        5px !important;

      line-height:
        1.05 !important;

      -webkit-text-stroke:
        2px #c440ff;

      text-shadow:

        0 0 5px white,

        0 0 18px white,

        0 0 38px #ffe75a,

        0 0 65px #d53cff !important;

    }


    /* =========================================
       GOD「神域解放」

       GODは昇格と別物なので
       専用サイズ
    ========================================= */

    .brainGodRelease{

      font-size:
        clamp(72px, 22vw, 98px) !important;

      letter-spacing:
        5px !important;

      line-height:
        1 !important;

      -webkit-text-stroke:
        2px rgba(255,255,255,.9);

      text-shadow:

        0 0 5px white,

        0 0 18px white,

        0 0 35px #fff000,

        0 0 60px #ff35dd,

        0 0 82px #00eaff !important;

    }

  `;


  document.head.appendChild(style);


  console.log(
    "MEGA RANK UP EFFECT READY"
  );

})();

// =====================================================
// EFFECTS Ver.3
// ASCENSION RHYTHM OVERDRIVE
// 昇格衝撃 + 気持ちいいリズム強化
// =====================================================

(() => {

  if (window.__ASCENSION_RHYTHM_V3__) return;
  window.__ASCENSION_RHYTHM_V3__ = true;


  // =====================================================
  // 軽量アクセント音
  // =====================================================

  function fxClick(delay=0){

    if(typeof tone !== "function") return;

    tone(
      520,
      .035,
      "square",
      .03,
      delay
    );

  }


  function fxBassHit(
    delay=0,
    power=1
  ){

    if(
      typeof sfxKick === "function"
    ){

      sfxKick(
        delay,
        .17 * power
      );

    }


    if(
      typeof tone === "function"
    ){

      tone(
        55,
        .22,
        "sine",
        .065 * power,
        delay
      );

    }

  }


  function fxSpark(
    delay=0,
    power=1
  ){

    if(
      typeof sfxKyuiin === "function"
    ){

      sfxKyuiin(
        delay,
        .72 * power
      );

    }

  }


  // =====================================================
  // EPIC用リズム
  //
  // ドン・タッ・ドン・ドドン → キュイン
  // =====================================================

  function epicRhythm(){

    fxBassHit(
      0,
      .9
    );

    if(
      typeof sfxHat === "function"
    ){
      sfxHat(.11);
    }

    fxBassHit(
      .23,
      .95
    );

    if(
      typeof sfxSnare === "function"
    ){
      sfxSnare(.39);
    }

    fxBassHit(
      .54,
      1
    );

    fxBassHit(
      .67,
      1.08
    );


    if(
      typeof sfxRiser === "function"
    ){

      sfxRiser(
        .08,
        .63
      );

    }


    fxSpark(
      .61,
      .9
    );

  }


  // =====================================================
  // LEGEND用リズム
  //
  // 重い4拍 → 加速 → 金キュイン
  // =====================================================

  function legendRhythm(){

    fxBassHit(
      0,
      1
    );

    if(
      typeof sfxHat === "function"
    ){
      sfxHat(.10);
    }

    fxBassHit(
      .25,
      1.02
    );

    if(
      typeof sfxSnare === "function"
    ){
      sfxSnare(.42);
    }

    fxBassHit(
      .57,
      1.05
    );

    fxBassHit(
      .70,
      1.10
    );

    fxBassHit(
      .82,
      1.15
    );


    if(
      typeof sfxRiser === "function"
    ){

      sfxRiser(
        .10,
        .78
      );

    }


    fxSpark(
      .70,
      1.05
    );

  }


  // =====================================================
  // GOD用リズム
  //
  // 四つ打ち → 倍テン → PUSH前で溜め
  // =====================================================

  function godRhythm(){

    fxBassHit(
      0,
      1.02
    );

    fxBassHit(
      .28,
      1.04
    );

    fxBassHit(
      .56,
      1.06
    );

    fxBassHit(
      .84,
      1.08
    );


    fxBassHit(
      1.02,
      .95
    );

    fxBassHit(
      1.17,
      1
    );

    fxBassHit(
      1.32,
      1.05
    );

    fxBassHit(
      1.47,
      1.10
    );


    if(
      typeof sfxHat === "function"
    ){

      sfxHat(.14);
      sfxHat(.42);
      sfxHat(.70);
      sfxHat(.98);

      sfxHat(1.10);
      sfxHat(1.25);
      sfxHat(1.40);

    }


    if(
      typeof sfxRiser === "function"
    ){

      sfxRiser(
        .18,
        1.28
      );

    }


    fxSpark(
      1.30,
      1.05
    );

  }


  // =====================================================
  // SUCCESS FINISH
  // =====================================================

  function epicFinish(){

    if(
      typeof sfxHeavyImpact ===
      "function"
    ){
      sfxHeavyImpact(0);
    }


    fxSpark(
      .08,
      1
    );


    if(
      typeof sfxChime === "function"
    ){
      sfxChime(.28);
    }

  }


  function legendFinish(){

    if(
      typeof sfxHeavyImpact ===
      "function"
    ){
      sfxHeavyImpact(0);
    }


    fxBassHit(
      .06,
      1.18
    );


    fxSpark(
      .08,
      1.15
    );


    if(
      typeof tone === "function"
    ){

      tone(
        523,
        .15,
        "sine",
        .065,
        .32
      );

      tone(
        659,
        .16,
        "sine",
        .07,
        .43
      );

      tone(
        784,
        .18,
        "sine",
        .075,
        .54
      );

      tone(
        1046,
        .30,
        "sine",
        .08,
        .67
      );

    }

  }


  function godFinish(){

    if(
      typeof sfxHeavyImpact ===
      "function"
    ){
      sfxHeavyImpact(0);
    }


    fxBassHit(
      .05,
      1.25
    );


    fxSpark(
      .08,
      1.25
    );


    if(
      typeof tone === "function"
    ){

      tone(
        523,
        .18,
        "sine",
        .07,
        .28
      );

      tone(
        659,
        .18,
        "sine",
        .075,
        .38
      );

      tone(
        784,
        .20,
        "sine",
        .08,
        .48
      );

      tone(
        1046,
        .24,
        "sine",
        .085,
        .60
      );

      tone(
        1318,
        .38,
        "sine",
        .085,
        .74
      );

    }

  }


  // =====================================================
  // brainImpactWord監視
  //
  // 「昇格」が出たタイミングで
  // リズムを自動発動
  // =====================================================

  const rankObserver =
    new MutationObserver(()=>{

      const words =
        document.querySelectorAll(
          ".brainImpactWord"
        );


      words.forEach(word=>{

        if(
          word.dataset
          .rhythmDone === "1"
        ){
          return;
        }


        word.dataset.rhythmDone =
          "1";


        const isLegend =
          word.classList.contains(
            "brainImpactLegend"
          );


        const isGod =
          word.classList.contains(
            "brainGodRelease"
          );


        const isRevival =
          word.classList.contains(
            "brainImpactRevival"
          );


        // -----------------------------
        // GOD
        // -----------------------------

        if(isGod){

          godRhythm();


          setTimeout(()=>{

            godFinish();

          },650);


          return;
        }


        // -----------------------------
        // LEGEND
        // -----------------------------

        if(isLegend){

          legendRhythm();


          setTimeout(()=>{

            legendFinish();

          },500);


          return;
        }


        // -----------------------------
        // 復活昇格
        // -----------------------------

        if(isRevival){

          fxBassHit(
            0,
            .95
          );


          setTimeout(()=>{

            fxBassHit(
              0,
              1.05
            );

            fxSpark(
              .04,
              1
            );

          },250);


          setTimeout(()=>{

            epicFinish();

          },520);


          return;
        }


        // -----------------------------
        // EPIC
        // -----------------------------

        epicRhythm();


        setTimeout(()=>{

          epicFinish();

        },500);

      });

    });


  rankObserver.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  // =====================================================
  // PUSHボタンにも音を追加
  // =====================================================

  document.addEventListener(
    "pointerdown",
    e=>{

      const btn =
        e.target.closest(
          ".ascensionPush"
        );


      if(!btn) return;


      /*
        押した瞬間は
        大音量にせず「カチッ」
      */

      fxClick();


      if(
        typeof vibrate ===
        "function"
      ){

        vibrate(18);

      }

    },
    true
  );


  console.log(
    "ASCENSION RHYTHM OVERDRIVE V3 READY"
  );

})();

// =====================================================
// EFFECTS Ver.4
// PUCHUN FREEZE + HOLOGRAM SYSTEM
//
// EPIC   : プチュン → 紫HOLOGRAM → 昇格
// LEGEND : EPIC気配 → プチュン → 金HOLOGRAM → 昇格
// GOD    : RARE → プチュン → 長時間暗転 → 虹HOLOGRAM → GOD
//
// iPhone軽量設計
// =====================================================

(() => {

  // 二重貼り防止
  if(window.__PUCHUN_HOLOGRAM_V4__) return;
  window.__PUCHUN_HOLOGRAM_V4__ = true;


  // =====================================================
  // CSS
  // =====================================================

  const style =
    document.createElement("style");


  style.textContent = `

    /* -------------------------
       FREEZE全面レイヤー
    ------------------------- */

    .freezeStage{

      position:fixed;
      inset:0;

      z-index:950000;

      display:flex;
      align-items:center;
      justify-content:center;

      overflow:hidden;

      background:#000;

      color:white;

      pointer-events:none;

    }


    /* -------------------------
       HOLOGRAM
    ------------------------- */

    .freezeHologram{

      position:relative;

      z-index:3;

      text-align:center;

      font-weight:1000;

      letter-spacing:8px;

      opacity:0;

      transform:
        perspective(500px)
        rotateY(-9deg)
        scale(.88);

      animation:
        freezeHologramIn
        .72s
        ease-out
        forwards;

      will-change:
        transform,
        opacity;

    }


    @keyframes freezeHologramIn{

      0%{
        opacity:0;
        transform:
          perspective(500px)
          rotateY(-13deg)
          scale(.74);
      }

      30%{
        opacity:.45;
      }

      55%{
        opacity:1;
        transform:
          perspective(500px)
          rotateY(4deg)
          scale(1.04);
      }

      100%{
        opacity:.92;
        transform:
          perspective(500px)
          rotateY(0deg)
          scale(1);
      }

    }


    /* -------------------------
       走査線

       1枚だけなので軽い
    ------------------------- */

    .freezeScan{

      position:absolute;
      inset:0;

      z-index:2;

      opacity:.24;

      background:
        repeating-linear-gradient(
          to bottom,
          transparent 0px,
          transparent 5px,
          rgba(255,255,255,.18) 6px,
          transparent 7px
        );

      animation:
        freezeScanMove
        .55s linear
        infinite;

      pointer-events:none;

    }


    @keyframes freezeScanMove{

      from{
        transform:translateY(-8px);
      }

      to{
        transform:translateY(8px);
      }

    }


    /* -------------------------
       中央光
    ------------------------- */

    .freezeGlow{

      position:absolute;

      left:50%;
      top:50%;

      width:72vw;
      height:72vw;

      max-width:430px;
      max-height:430px;

      transform:
        translate(-50%,-50%);

      border-radius:50%;

      opacity:.62;

      pointer-events:none;

    }


    .freezeEpicGlow{

      background:
        radial-gradient(
          circle,
          rgba(255,255,255,.95) 0%,
          rgba(220,110,255,.60) 10%,
          rgba(130,40,255,.25) 34%,
          transparent 68%
        );

    }


    .freezeLegendGlow{

      background:
        radial-gradient(
          circle,
          rgba(255,255,255,.96) 0%,
          rgba(255,230,80,.65) 10%,
          rgba(255,135,0,.27) 36%,
          transparent 70%
        );

    }


    .freezeGodGlow{

      background:
        radial-gradient(
          circle,
          rgba(255,255,255,1) 0%,
          rgba(255,235,40,.57) 12%,
          rgba(255,50,210,.34) 28%,
          rgba(0,220,255,.28) 46%,
          transparent 72%
        );

    }


    /* -------------------------
       HOLOGRAM文字色
    ------------------------- */

    .freezeEpicText{

      color:#f0bcff;

      font-size:
        clamp(58px,18vw,88px);

      text-shadow:
        0 0 8px white,
        0 0 18px #e06aff,
        0 0 36px #8a3cff;

    }


    .freezeLegendText{

      color:#fff5a0;

      font-size:
        clamp(58px,18vw,88px);

      text-shadow:
        0 0 8px white,
        0 0 20px #ffe100,
        0 0 40px #ff8a00;

    }


    .freezeGodText{

      color:white;

      font-size:
        clamp(74px,23vw,112px);

      text-shadow:
        0 0 8px white,
        0 0 20px #fff000,
        0 0 38px #ff36dd,
        0 0 55px #00eaff;

    }


    /* -------------------------
       0.1%
    ------------------------- */

    .freezeProbability{

      margin-bottom:14px;

      font-size:14px;

      font-weight:1000;

      letter-spacing:10px;

      color:white;

      opacity:.85;

    }


    /* -------------------------
       細い光線
    ------------------------- */

    .freezeLine{

      position:absolute;

      left:50%;
      top:50%;

      width:8px;
      height:2px;

      transform:
        translate(-50%,-50%);

      background:white;

      opacity:0;

      animation:
        freezeLineOpen
        .65s
        ease-out
        forwards;

      box-shadow:
        0 0 10px white,
        0 0 25px currentColor;

    }


    @keyframes freezeLineOpen{

      0%{
        width:5px;
        opacity:0;
      }

      25%{
        opacity:1;
      }

      100%{
        width:82%;
        opacity:.95;
      }

    }


    /* -------------------------
       GOD虹背景

       conic 1枚のみ
    ------------------------- */

    .freezeGodRainbow{

      position:absolute;

      inset:-25%;

      opacity:.26;

      background:
        conic-gradient(
          #ff1744,
          #ffe600,
          #00e676,
          #00e5ff,
          #704cff,
          #e040fb,
          #ff1744
        );

      transform:scale(.82);

      animation:
        freezeGodRainbowOpen
        .9s
        ease-out
        forwards;

    }


    @keyframes freezeGodRainbowOpen{

      from{
        opacity:0;
        transform:scale(.55);
      }

      to{
        opacity:.33;
        transform:scale(1.02);
      }

    }

  `;


  document.head.appendChild(
    style
  );


  // =====================================================
  // STATE
  // =====================================================

  let activeFreezeLayer =
    null;


  // =====================================================
  // FREEZE画面削除
  // =====================================================

  function clearFreeze(){

    if(activeFreezeLayer){

      activeFreezeLayer.remove();

      activeFreezeLayer =
        null;

    }

  }


  // =====================================================
  // 黒画面作成
  // =====================================================

  function createFreezeStage(){

    clearFreeze();


    const layer =
      document.createElement(
        "div"
      );


    layer.className =
      "freezeStage";


    document.body.appendChild(
      layer
    );


    activeFreezeLayer =
      layer;


    return layer;

  }


  // =====================================================
  // プチュン音
  //
  // 原音コピーではなく
  // 「断絶感」を作る短いSE
  // =====================================================

  function playPuchun(){

    if(
      typeof initAudio ===
      "function"
    ){

      initAudio();

    }


    /*
      高いクリック
    */

    if(
      typeof tone ===
      "function"
    ){

      tone(
        950,
        .025,
        "square",
        .04
      );


      /*
        直後に低く落ちる
      */

      tone(
        72,
        .09,
        "sine",
        .07,
        .025
      );

    }


    if(
      typeof vibrate ===
      "function"
    ){

      vibrate(35);

    }

  }


  // =====================================================
  // 心拍
  // =====================================================

  function freezeHeartbeat(
    power=1
  ){

    if(
      typeof sfxKick ===
      "function"
    ){

      sfxKick(
        0,
        .12 * power
      );

    }


    if(
      typeof tone ===
      "function"
    ){

      tone(
        48,
        .24,
        "sine",
        .055 * power
      );

    }


    if(
      typeof vibrate ===
      "function"
    ){

      vibrate(
        Math.round(
          25 * power
        )
      );

    }

  }


  // =====================================================
  // HOLOGRAM
  // =====================================================

  function showFreezeHologram(
    type,
    text,
    sub=""
  ){

    const stage =
      activeFreezeLayer ||
      createFreezeStage();


    /*
      glow
    */

    const glow =
      document.createElement(
        "div"
      );


    glow.className =
      "freezeGlow " +

      (
        type==="EPIC"
        ? "freezeEpicGlow"

        : type==="LEGEND"
        ? "freezeLegendGlow"

        : "freezeGodGlow"
      );


    /*
      scan
    */

    const scan =
      document.createElement(
        "div"
      );


    scan.className =
      "freezeScan";


    /*
      hologram
    */

    const holo =
      document.createElement(
        "div"
      );


    holo.className =
      "freezeHologram " +

      (
        type==="EPIC"
        ? "freezeEpicText"

        : type==="LEGEND"
        ? "freezeLegendText"

        : "freezeGodText"
      );


    holo.innerHTML = `

      ${
        sub
        ? `
          <div class="freezeProbability">
            ${sub}
          </div>
        `
        : ""
      }

      ${text}

    `;


    stage.appendChild(
      glow
    );


    stage.appendChild(
      scan
    );


    if(type==="GOD"){

      const rainbow =
        document.createElement(
          "div"
        );


      rainbow.className =
        "freezeGodRainbow";


      stage.appendChild(
        rainbow
      );

    }


    stage.appendChild(
      holo
    );

  }


  // =====================================================
  // 細い光
  // =====================================================

  function freezeLine(
    color
  ){

    if(!activeFreezeLayer){
      return;
    }


    const line =
      document.createElement(
        "div"
      );


    line.className =
      "freezeLine";


    line.style.color =
      color;


    activeFreezeLayer.appendChild(
      line
    );

  }


  // =====================================================
  // EPIC FREEZE
  // =====================================================

  function playEpicFreeze(
    done
  ){

    createFreezeStage();


    playPuchun();


    /*
      0.9秒しっかり黒
    */

    setTimeout(()=>{

      freezeHeartbeat(.8);

    },900);


    /*
      紫の一本線
    */

    setTimeout(()=>{

      freezeLine(
        "#bd4cff"
      );

    },1250);


    /*
      EPIC HOLOGRAM
    */

    setTimeout(()=>{

      showFreezeHologram(
        "EPIC",
        "EPIC"
      );


      if(
        typeof sfxRiser ===
        "function"
      ){

        sfxRiser(
          0,
          .55
        );

      }

    },1580);


    /*
      爆発へ
    */

    setTimeout(()=>{

      clearFreeze();


      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#ffffff",
          150
        );

      }


      if(done){
        done();
      }

    },2300);

  }


  // =====================================================
  // LEGEND FREEZE
  // =====================================================

  function playLegendFreeze(
    done
  ){

    createFreezeStage();


    playPuchun();


    /*
      EPICより長い完全暗転
    */

    setTimeout(()=>{

      freezeHeartbeat(
        .95
      );

    },1150);


    setTimeout(()=>{

      freezeHeartbeat(
        1.05
      );

    },1600);


    setTimeout(()=>{

      freezeLine(
        "#ffd600"
      );

    },1950);


    /*
      金HOLOGRAM
    */

    setTimeout(()=>{

      showFreezeHologram(
        "LEGEND",
        "LEGEND"
      );


      if(
        typeof sfxRiser ===
        "function"
      ){

        sfxRiser(
          0,
          .68
        );

      }

    },2250);


    /*
      少し見せてから爆発
    */

    setTimeout(()=>{

      clearFreeze();


      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#ffffff",
          170
        );

      }


      if(
        typeof sfxHeavyImpact ===
        "function"
      ){

        sfxHeavyImpact(0);

      }


      if(done){
        done();
      }

    },3150);

  }


  // =====================================================
  // GOD FREEZE
  //
  // 一番長い。
  // RAREから直接別世界へ。
  // =====================================================

  function playGodFreeze(
    done
  ){

    createFreezeStage();


    playPuchun();


    /*
      1.5秒近く
      本当に何も見せない
    */

    setTimeout(()=>{

      freezeHeartbeat(
        1
      );

    },1450);


    /*
      まだ黒
    */

    setTimeout(()=>{

      freezeHeartbeat(
        1.08
      );

    },2050);


    /*
      虹の一本線
    */

    setTimeout(()=>{

      freezeLine(
        "#ffffff"
      );

    },2450);


    /*
      0.1% HOLOGRAM
    */

    setTimeout(()=>{

      showFreezeHologram(
        "GOD",
        "0.1%"
      );

    },2820);


    /*
      一度また完全に消す
      ↓
      二段目プチュン
    */

    setTimeout(()=>{

      createFreezeStage();


      playPuchun();

    },3550);


    /*
      二段目の無音
    */

    setTimeout(()=>{

      freezeHeartbeat(
        1.15
      );

    },4400);


    /*
      GOD HOLOGRAM
    */

    setTimeout(()=>{

      showFreezeHologram(
        "GOD",
        "GOD",
        "SYSTEM FREEZE"
      );


      if(
        typeof sfxRiser ===
        "function"
      ){

        sfxRiser(
          0,
          .85
        );

      }

    },4780);


    /*
      最終開放
    */

    setTimeout(()=>{

      clearFreeze();


      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#ffffff",
          190
        );

      }


      if(
        typeof sfxHeavyImpact ===
        "function"
      ){

        sfxHeavyImpact(0);

      }


      if(
        typeof sfxKyuiin ===
        "function"
      ){

        sfxKyuiin(
          .08,
          1.10
        );

      }


      if(
        typeof vibrate ===
        "function"
      ){

        vibrate([
          90,
          30,
          130
        ]);

      }


      if(done){
        done();
      }

    },5700);

  }


  // =====================================================
  // 現在の昇格成功を保存
  // =====================================================

  const previousAscensionSuccess =
    playAscensionSuccess;


  // =====================================================
  // EPIC / LEGEND
  // PUSH成功後をFREEZEへ
  // =====================================================

  playAscensionSuccess =
  function(
    fromRarity,
    toRarity,
    premium=false
  ){

    /*
      EPIC
    */

    if(
      toRarity ===
      "EPIC"
    ){

      playEpicFreeze(()=>{

        previousAscensionSuccess(
          fromRarity,
          toRarity,
          premium
        );

      });


      return;

    }


    /*
      LEGEND
    */

    if(
      toRarity ===
      "LEGEND"
    ){

      /*
        一瞬EPICの気配を
        見せてから切る
      */

      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#a83cff",
          100
        );

      }


      setTimeout(()=>{

        playLegendFreeze(()=>{

          previousAscensionSuccess(
            fromRarity,
            toRarity,
            premium
          );

        });

      },360);


      return;

    }


    previousAscensionSuccess(
      fromRarity,
      toRarity,
      premium
    );

  };


  // =====================================================
  // GOD
  //
  // 既存の
  // RARE→GOD CHANCEは維持。
  // PUSH後を大型FREEZEに変更。
  // =====================================================

  const previousGodReveal =
    revealDirectGod;


  revealDirectGod =
  function(item){

    playGodFreeze(()=>{

      previousGodReveal(
        item
      );

    });

  };


  // =====================================================
  // 復活昇格にも
  // 「長い間」を少し追加
  // =====================================================

  const previousRevival =
    playAscensionRevival;


  playAscensionRevival =
  function(
    fromRarity,
    toRarity
  ){

    /*
      既存FAILEDを開始
    */

    previousRevival(
      fromRarity,
      toRarity
    );


    /*
      復活途中に追加プチュン
      ただしGODほど長くしない
    */

    setTimeout(()=>{

      createFreezeStage();


      playPuchun();


      setTimeout(()=>{

        freezeHeartbeat(.9);

      },900);


      setTimeout(()=>{

        clearFreeze();

      },1450);


    },1100);

  };


  // =====================================================
  // SAFETY
  // 長時間残ったFREEZEを掃除
  // =====================================================

  setInterval(()=>{

    if(
      activeFreezeLayer &&
      !document.body.contains(
        ascensionOverlay
      )
    ){

      clearFreeze();

    }

  },5000);


  console.log(
    "PUCHUN FREEZE + HOLOGRAM V4 READY"
  );

})();

// =====================================================
// EFFECTS Ver.5
// PUCHUN FREEZE ENHANCEMENT PATCH
//
// Ver.4は削除不要
//
// ・既存プチュンをそのまま使用
// ・ホログラム強化
// ・RGBズレ
// ・走査線強化
// ・瞬間ノイズ
// ・画面故障感
// ・心拍追加
// ・EPIC / LEGEND / GODで格差
// ・既存関数の上書きなし
// ・iPhone軽量優先
// =====================================================

(() => {

  if(
    window.__PUCHUN_V5_ENHANCEMENT__
  ){
    return;
  }

  window.__PUCHUN_V5_ENHANCEMENT__ =
    true;


  // =====================================================
  // CSS
  // =====================================================

  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    /* =========================================
       Ver.4ホログラムをさらに立体化
    ========================================= */

    .freezeHologram{

      position:relative !important;

      animation:
        v5HoloUpgrade
        .72s
        cubic-bezier(.15,.8,.2,1)
        forwards !important;

    }


    @keyframes v5HoloUpgrade{

      0%{

        opacity:0;

        transform:
          perspective(550px)
          rotateY(-17deg)
          scale(.72);

      }


      18%{

        opacity:.25;

      }


      27%{

        opacity:.88;

        transform:
          perspective(550px)
          rotateY(7deg)
          scale(.96);

      }


      34%{

        opacity:.30;

      }


      42%{

        opacity:1;

      }


      55%{

        transform:
          perspective(550px)
          rotateY(-3deg)
          scale(1.04);

      }


      100%{

        opacity:.96;

        transform:
          perspective(550px)
          rotateY(0deg)
          scale(1);

      }

    }


    /* =========================================
       RGB色ズレ

       DOMを増やさず
       text-shadowだけで疑似表現
    ========================================= */

    .freezeEpicText{

      text-shadow:

        -4px 0 0
        rgba(0,230,255,.48),

        4px 0 0
        rgba(255,40,210,.42),

        0 0 8px white,

        0 0 22px #dc55ff,

        0 0 42px #762cff !important;

    }


    .freezeLegendText{

      text-shadow:

        -3px 0 0
        rgba(255,60,40,.38),

        3px 0 0
        rgba(255,245,70,.40),

        0 0 8px white,

        0 0 22px #ffe000,

        0 0 45px #ff8700 !important;

    }


    .freezeGodText{

      text-shadow:

        -5px 0 0
        rgba(0,234,255,.55),

        5px 0 0
        rgba(255,40,220,.52),

        0 0 8px white,

        0 0 22px #fff000,

        0 0 42px #ff32da,

        0 0 62px #00eaff !important;

    }


    /* =========================================
       走査線を少し強化
    ========================================= */

    .freezeScan{

      opacity:.30 !important;

      background:

        repeating-linear-gradient(

          to bottom,

          transparent 0px,

          transparent 5px,

          rgba(255,255,255,.20)
          6px,

          transparent
          7px

        ) !important;

      animation:
        v5ScanUpgrade
        .46s
        linear
        infinite !important;

    }


    @keyframes v5ScanUpgrade{

      from{

        transform:
          translateY(-12px);

      }

      to{

        transform:
          translateY(12px);

      }

    }


    /* =========================================
       一瞬だけ映像がズレる
    ========================================= */

    .v5FreezeGlitch{

      animation:
        v5FreezeGlitch
        .27s
        steps(2,end);

    }


    @keyframes v5FreezeGlitch{

      0%{

        transform:
          translateX(0);

        filter:
          brightness(1);

      }


      20%{

        transform:
          translateX(-5px);

        filter:
          brightness(.5);

      }


      40%{

        transform:
          translateX(6px);

        filter:
          brightness(1.7);

      }


      60%{

        transform:
          translateX(-3px);

        filter:
          brightness(.25);

      }


      80%{

        transform:
          translateX(2px);

      }


      100%{

        transform:
          translateX(0);

        filter:
          brightness(1);

      }

    }


    /* =========================================
       ノイズ横線

       1個だけ生成
    ========================================= */

    .v5FreezeNoise{

      position:absolute;

      left:0;

      top:48%;

      width:100%;

      height:7%;

      z-index:999999;

      pointer-events:none;

      background:
        rgba(255,255,255,.85);

      mix-blend-mode:
        screen;

      opacity:0;

      animation:
        v5FreezeNoise
        .30s
        steps(3,end)
        forwards;

    }


    @keyframes v5FreezeNoise{

      0%{

        opacity:0;

        transform:
          translateY(-45px);

      }


      25%{

        opacity:.65;

      }


      50%{

        height:2%;

        transform:
          translateY(15px);

      }


      75%{

        opacity:.35;

        transform:
          translateY(40px);

      }


      100%{

        opacity:0;

        transform:
          translateY(65px);

      }

    }


    /* =========================================
       瞬間全消灯

       黒をさらに黒く見せる
    ========================================= */

    .v5TotalBlackout{

      position:absolute;

      inset:0;

      z-index:999998;

      background:#000;

      opacity:1;

      pointer-events:none;

      animation:
        v5TotalBlackout
        .26s
        forwards;

    }


    @keyframes v5TotalBlackout{

      0%{
        opacity:1;
      }

      65%{
        opacity:1;
      }

      100%{
        opacity:0;
      }

    }


    /* =========================================
       GOD専用

       虹の奥に黒を残して
       明るすぎないようにする
    ========================================= */

    .freezeGodRainbow{

      opacity:.22 !important;

      animation:
        v5GodRainbowUpgrade
        1.1s
        ease-out
        forwards !important;

    }


    @keyframes v5GodRainbowUpgrade{

      0%{

        opacity:0;

        transform:
          scale(.45)
          rotate(-4deg);

      }


      55%{

        opacity:.15;

      }


      100%{

        opacity:.30;

        transform:
          scale(1.02)
          rotate(3deg);

      }

    }


    /* =========================================
       GOD 0.1%用

       少し不安定な点滅
    ========================================= */

    .freezeProbability{

      animation:
        v5ProbabilityFlicker
        .72s
        steps(2,end)
        infinite;

    }


    @keyframes v5ProbabilityFlicker{

      0%{
        opacity:.85;
      }

      18%{
        opacity:.32;
      }

      26%{
        opacity:1;
      }

      70%{
        opacity:.82;
      }

      76%{
        opacity:.20;
      }

      100%{
        opacity:.90;
      }

    }

  `;


  document.head.appendChild(
    style
  );


  // =====================================================
  // 共通：ノイズ1発
  // =====================================================

  function v5NoiseBurst(
    stage
  ){

    if(!stage) return;


    const noise =
      document.createElement(
        "div"
      );


    noise.className =
      "v5FreezeNoise";


    stage.appendChild(
      noise
    );


    setTimeout(()=>{

      if(noise.isConnected){

        noise.remove();

      }

    },350);

  }


  // =====================================================
  // 共通：全消灯1発
  // =====================================================

  function v5BlackoutPulse(
    stage
  ){

    if(!stage) return;


    const black =
      document.createElement(
        "div"
      );


    black.className =
      "v5TotalBlackout";


    stage.appendChild(
      black
    );


    setTimeout(()=>{

      if(black.isConnected){

        black.remove();

      }

    },320);

  }


  // =====================================================
  // 共通：低い心拍
  // =====================================================

  function v5DeepHeartbeat(
    power=1
  ){

    if(
      typeof sfxKick ===
      "function"
    ){

      sfxKick(
        0,
        .09 * power
      );

    }


    if(
      typeof tone ===
      "function"
    ){

      tone(
        44,
        .27,
        "sine",
        .048 * power
      );

    }


    if(
      typeof vibrate ===
      "function"
    ){

      vibrate(
        Math.round(
          20 * power
        )
      );

    }

  }


  // =====================================================
  // FREEZE STAGE監視
  //
  // Ver.4が黒画面を作った瞬間だけ
  // 追加演出する
  // =====================================================

  const freezeStageObserver =
    new MutationObserver(
      mutations=>{

        mutations.forEach(
          mutation=>{

            mutation.addedNodes
            .forEach(node=>{

              if(
                !(node instanceof
                  HTMLElement)
              ){
                return;
              }


              if(
                !node.classList
                ?.contains(
                  "freezeStage"
                )
              ){
                return;
              }


              /*
                同じ画面に2回実行しない
              */

              if(
                node.dataset
                .v5Enhanced === "1"
              ){
                return;
              }


              node.dataset
              .v5Enhanced =
                "1";


              /*
                プチュン直後

                すぐ何かを出すのではなく、
                黒を見せる。
              */


              /*
                約0.35秒後
                一瞬だけノイズ
              */

              setTimeout(()=>{

                if(
                  !node.isConnected
                ){
                  return;
                }


                v5NoiseBurst(
                  node
                );

              },350);


              /*
                さらに遅れて
                本当に画面が死んだような
                全消灯
              */

              setTimeout(()=>{

                if(
                  !node.isConnected
                ){
                  return;
                }


                v5BlackoutPulse(
                  node
                );

              },700);


              /*
                その後に心拍
              */

              setTimeout(()=>{

                if(
                  !node.isConnected
                ){
                  return;
                }


                v5DeepHeartbeat(
                  .82
                );

              },980);

            });

          }

        );

      }
    );


  freezeStageObserver.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  // =====================================================
  // HOLOGRAM出現監視
  // =====================================================

  const holoObserver =
    new MutationObserver(()=>{

      const holos =
        document.querySelectorAll(
          ".freezeHologram"
        );


      holos.forEach(holo=>{

        if(
          holo.dataset
          .v5HoloDone === "1"
        ){
          return;
        }


        holo.dataset.v5HoloDone =
          "1";


        /*
          HOLOGRAM出現時に
          一瞬だけ映像を壊す
        */

        holo.classList.add(
          "v5FreezeGlitch"
        );


        setTimeout(()=>{

          holo.classList.remove(
            "v5FreezeGlitch"
          );

        },300);


        /*
          レア度判定
        */

        const epic =
          holo.classList.contains(
            "freezeEpicText"
          );


        const legend =
          holo.classList.contains(
            "freezeLegendText"
          );


        const god =
          holo.classList.contains(
            "freezeGodText"
          );


        // -----------------------------------------
        // EPIC
        // -----------------------------------------

        if(epic){

          /*
            EPICは1回だけ心拍
          */

          v5DeepHeartbeat(
            .85
          );


          if(
            typeof tone ===
            "function"
          ){

            tone(
              620,
              .08,
              "sine",
              .025
            );

          }

        }


        // -----------------------------------------
        // LEGEND
        // -----------------------------------------

        else if(legend){

          /*
            金ホログラムは
            二連心拍
          */

          v5DeepHeartbeat(
            1
          );


          setTimeout(()=>{

            v5DeepHeartbeat(
              1.07
            );

          },370);


          /*
            一瞬ノイズ
          */

          setTimeout(()=>{

            const stage =
              holo.closest(
                ".freezeStage"
              );


            v5NoiseBurst(
              stage
            );

          },210);

        }


        // -----------------------------------------
        // GOD
        // -----------------------------------------

        else if(god){

          /*
            GODだけ三連
          */

          v5DeepHeartbeat(
            1.03
          );


          setTimeout(()=>{

            v5DeepHeartbeat(
              1.10
            );

          },420);


          setTimeout(()=>{

            v5DeepHeartbeat(
              1.18
            );

          },900);


          /*
            GOD出現直後
            一度全消灯
          */

          setTimeout(()=>{

            const stage =
              holo.closest(
                ".freezeStage"
              );


            v5BlackoutPulse(
              stage
            );

          },260);


          /*
            さらにノイズ
          */

          setTimeout(()=>{

            const stage =
              holo.closest(
                ".freezeStage"
              );


            v5NoiseBurst(
              stage
            );

          },580);

        }

      });

    });


  holoObserver.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  // =====================================================
  // PUSH前の異変
  //
  // 既存処理には触らず、
  // 押した瞬間だけ短く異常化。
  // =====================================================

  document.addEventListener(
    "pointerdown",
    event=>{

      const button =
        event.target.closest(
          ".ascensionPush"
        );


      if(!button){
        return;
      }


      const game =
        document.getElementById(
          "game"
        );


      if(game){

        game.classList.add(
          "v5FreezeGlitch"
        );


        setTimeout(()=>{

          game.classList.remove(
            "v5FreezeGlitch"
          );

        },250);

      }


      /*
        PUSHした瞬間は
        派手な音を出さず、
        小さい切断音だけ。
      */

      if(
        typeof tone ===
        "function"
      ){

        tone(
          330,
          .03,
          "square",
          .018
        );

      }

    },
    true
  );


  console.log(
    "PUCHUN V5 ENHANCEMENT PATCH READY"
  );

})();
