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

// =====================================================
// EFFECTS Ver.7
// CRT CROSS POWER-CUT PATCH
//
// 参考イメージ：
// 突然消えるプチュン演出03（白/フレア）
//
// Ver.4〜6 削除不要
//
// PUSH
// ↓
// プッツン！！！！
// ↓
// 白フレア
// ↓
// 十字へ収束
// ↓
// 十字が縮む
// ↓
// 光点
// ↓
// 完全ブラックアウト
// ↓
// 既存FREEZE / HOLOGRAMへ
//
// iPhone軽量設計
// =====================================================

(() => {

  if(window.__CRT_CROSS_POWER_CUT_V7__) return;
  window.__CRT_CROSS_POWER_CUT_V7__ = true;


  // =====================================================
  // CSS
  //
  // Ver.6のcrtPuchunScreenを
  // 上から十字収束へ変更
  // =====================================================

  const style =
    document.createElement("style");


  style.textContent = `

    /* =========================================
       CRT全面

       Ver.6の横収束アニメーションを停止して
       V7の十字収束に変更
    ========================================= */

    .crtPuchunScreen{

      background:
        radial-gradient(
          ellipse at center,
          rgba(255,255,255,.22) 0%,
          rgba(220,240,255,.10) 20%,
          rgba(90,150,255,.035) 46%,
          rgba(0,0,0,.18) 72%,
          rgba(0,0,0,.45) 100%
        ) !important;

      transform:none !important;

      animation:
        v7CrtWholeScreen
        .82s
        linear
        forwards !important;

      will-change:
        opacity,
        filter;

    }


    /* =========================================
       横方向の白フレア

       ::before
    ========================================= */

    .crtPuchunScreen::before{

      content:"" !important;

      position:absolute !important;

      left:50% !important;
      top:50% !important;

      width:130vw !important;
      height:9px !important;

      transform:
        translate(-50%,-50%)
        scaleX(1) !important;

      transform-origin:center !important;

      opacity:0 !important;

      background:
        linear-gradient(
          to bottom,

          transparent 0%,

          rgba(255,255,255,.32) 14%,

          rgba(220,245,255,.95) 34%,

          #ffffff 48%,

          #ffffff 52%,

          rgba(215,242,255,.92) 66%,

          rgba(255,255,255,.28) 84%,

          transparent 100%
        ) !important;

      box-shadow:
        0 0 8px white,
        0 0 22px rgba(220,245,255,.95),
        0 0 48px rgba(165,220,255,.55) !important;

      border-radius:50% !important;

      animation:
        v7HorizontalCollapse
        .82s
        cubic-bezier(.68,0,.32,1)
        forwards !important;

    }


    /* =========================================
       縦方向の白フレア

       ::after
    ========================================= */

    .crtPuchunScreen::after{

      content:"" !important;

      position:absolute !important;

      left:50% !important;
      top:50% !important;

      width:9px !important;
      height:130vh !important;

      transform:
        translate(-50%,-50%)
        scaleY(1) !important;

      transform-origin:center !important;

      opacity:0 !important;

      background:
        linear-gradient(
          to right,

          transparent 0%,

          rgba(255,255,255,.32) 14%,

          rgba(220,245,255,.95) 34%,

          #ffffff 48%,

          #ffffff 52%,

          rgba(215,242,255,.92) 66%,

          rgba(255,255,255,.28) 84%,

          transparent 100%
        ) !important;

      box-shadow:
        0 0 8px white,
        0 0 22px rgba(220,245,255,.95),
        0 0 48px rgba(165,220,255,.55) !important;

      border-radius:50% !important;

      animation:
        v7VerticalCollapse
        .82s
        cubic-bezier(.68,0,.32,1)
        forwards !important;

    }


    /* =========================================
       画面全体

       最初にブワッと発光
       ↓
       一気に電源断
    ========================================= */

    @keyframes v7CrtWholeScreen{

      0%{

        opacity:1;

        filter:
          brightness(1);

      }


      7%{

        opacity:1;

        filter:
          brightness(2.2);

      }


      13%{

        filter:
          brightness(.72);

      }


      20%{

        filter:
          brightness(1.35);

      }


      72%{

        opacity:1;

        filter:
          brightness(1);

      }


      84%{

        opacity:1;

        filter:
          brightness(.35);

      }


      100%{

        opacity:0;

        filter:
          brightness(0);

      }

    }


    /* =========================================
       横線

       長い線
       ↓
       十字
       ↓
       中央へ
    ========================================= */

    @keyframes v7HorizontalCollapse{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scaleX(1.15);

      }


      8%{

        opacity:1;

      }


      22%{

        opacity:1;

        height:12px;

        transform:
          translate(-50%,-50%)
          scaleX(1);

      }


      48%{

        opacity:1;

        height:7px;

        transform:
          translate(-50%,-50%)
          scaleX(.52);

      }


      67%{

        opacity:1;

        height:5px;

        transform:
          translate(-50%,-50%)
          scaleX(.18);

      }


      80%{

        opacity:1;

        height:4px;

        transform:
          translate(-50%,-50%)
          scaleX(.045);

      }


      91%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scaleX(.012);

      }


      100%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scaleX(0);

      }

    }


    /* =========================================
       縦線

       同時に中央へ収束
    ========================================= */

    @keyframes v7VerticalCollapse{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scaleY(1.15);

      }


      8%{

        opacity:1;

      }


      22%{

        opacity:1;

        width:12px;

        transform:
          translate(-50%,-50%)
          scaleY(1);

      }


      48%{

        opacity:1;

        width:7px;

        transform:
          translate(-50%,-50%)
          scaleY(.52);

      }


      67%{

        opacity:1;

        width:5px;

        transform:
          translate(-50%,-50%)
          scaleY(.18);

      }


      80%{

        opacity:1;

        width:4px;

        transform:
          translate(-50%,-50%)
          scaleY(.045);

      }


      91%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scaleY(.012);

      }


      100%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scaleY(0);

      }

    }


    /* =========================================
       最後の光点

       observerから1個だけ追加
    ========================================= */

    .v7CrtFinalDot{

      position:fixed;

      left:50%;
      top:50%;

      z-index:10000000;

      width:18px;
      height:18px;

      transform:
        translate(-50%,-50%)
        scale(0);

      border-radius:50%;

      pointer-events:none;

      opacity:0;

      background:white;

      box-shadow:
        0 0 8px white,
        0 0 22px #d8f4ff,
        0 0 50px rgba(150,220,255,.65);

      animation:
        v7FinalDot
        .28s
        ease-out
        forwards;

    }


    @keyframes v7FinalDot{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(1.25);

      }


      18%{

        opacity:1;

      }


      45%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(.72);

      }


      75%{

        opacity:.85;

        transform:
          translate(-50%,-50%)
          scale(.24);

      }


      100%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(0);

      }

    }

  `;


  document.head.appendChild(style);


  // =====================================================
  // 超強烈
  // 「プッツン！！！！」
  //
  // Ver.6の電源落ち音へ
  // さらに最初の1発を追加
  // =====================================================

  function v7PowerCutSnap(){

    if(
      typeof initAudio ===
      "function"
    ){

      initAudio();

    }


    if(
      typeof audioCtx ===
      "undefined" ||
      !audioCtx
    ){

      return;

    }


    const now =
      audioCtx.currentTime;


    // ===================================================
    // ① バチッ！！
    // ===================================================

    const bufferLength =
      Math.floor(
        audioCtx.sampleRate *
        .055
      );


    const buffer =
      audioCtx.createBuffer(
        1,
        bufferLength,
        audioCtx.sampleRate
      );


    const data =
      buffer.getChannelData(0);


    for(
      let i=0;
      i<bufferLength;
      i++
    ){

      const life =
        1 -
        i /
        bufferLength;


      data[i] =
        (
          Math.random()*2 - 1
        )
        *
        life *
        life;

    }


    const noise =
      audioCtx.createBufferSource();


    const noiseGain =
      audioCtx.createGain();


    const noiseFilter =
      audioCtx.createBiquadFilter();


    noise.buffer =
      buffer;


    noiseFilter.type =
      "bandpass";


    noiseFilter.frequency
      .setValueAtTime(
        1100,
        now
      );


    noiseFilter.Q
      .setValueAtTime(
        .7,
        now
      );


    noiseGain.gain
      .setValueAtTime(
        .10,
        now
      );


    noiseGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .06
      );


    noise.connect(
      noiseFilter
    );


    noiseFilter.connect(
      noiseGain
    );


    noiseGain.connect(
      audioCtx.destination
    );


    noise.start(now);


    // ===================================================
    // ② 「プッ」
    // 硬い瞬間音
    // ===================================================

    const snap =
      audioCtx.createOscillator();


    const snapGain =
      audioCtx.createGain();


    snap.type =
      "square";


    snap.frequency
      .setValueAtTime(
        780,
        now
      );


    snap.frequency
      .exponentialRampToValueAtTime(
        95,
        now + .065
      );


    snapGain.gain
      .setValueAtTime(
        .095,
        now
      );


    snapGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .075
      );


    snap.connect(
      snapGain
    );


    snapGain.connect(
      audioCtx.destination
    );


    snap.start(now);


    snap.stop(
      now + .08
    );


    // ===================================================
    // ③ 「ツン！！！！」
    // 低音衝撃
    // ===================================================

    const impact =
      audioCtx.createOscillator();


    const impactGain =
      audioCtx.createGain();


    impact.type =
      "sine";


    impact.frequency
      .setValueAtTime(
        125,
        now + .015
      );


    impact.frequency
      .exponentialRampToValueAtTime(
        34,
        now + .14
      );


    impactGain.gain
      .setValueAtTime(
        .11,
        now + .015
      );


    impactGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .15
      );


    impact.connect(
      impactGain
    );


    impactGain.connect(
      audioCtx.destination
    );


    impact.start(
      now + .015
    );


    impact.stop(
      now + .16
    );


    // ===================================================
    // ④ ごく短い電気の余韻
    //
    // ジ……
    //
    // すぐ無音にする
    // ===================================================

    const tail =
      audioCtx.createOscillator();


    const tailGain =
      audioCtx.createGain();


    tail.type =
      "sine";


    tail.frequency
      .setValueAtTime(
        1700,
        now + .05
      );


    tail.frequency
      .exponentialRampToValueAtTime(
        320,
        now + .23
      );


    tailGain.gain
      .setValueAtTime(
        .027,
        now + .05
      );


    tailGain.gain
      .exponentialRampToValueAtTime(
        .001,
        now + .24
      );


    tail.connect(
      tailGain
    );


    tailGain.connect(
      audioCtx.destination
    );


    tail.start(
      now + .05
    );


    tail.stop(
      now + .25
    );


    // ===================================================
    // 振動
    //
    // 一発で切断された感じ
    // ===================================================

    if(
      typeof vibrate ===
      "function"
    ){

      vibrate([
        45,
        18,
        75
      ]);

    }

  }


  // =====================================================
  // Ver.6のCRT発生を監視
  //
  // 既存コードを一切上書きしない
  // =====================================================

  const v7Observer =
    new MutationObserver(
      mutations=>{

        mutations.forEach(
          mutation=>{

            mutation.addedNodes
            .forEach(node=>{

              if(
                !(node instanceof HTMLElement)
              ){

                return;

              }


              if(
                !node.classList
                ?.contains(
                  "crtPuchunScreen"
                )
              ){

                return;

              }


              if(
                node.dataset
                .v7CrossDone === "1"
              ){

                return;

              }


              node.dataset
              .v7CrossDone =
                "1";


              // =========================================
              // 電源断一発音
              // =========================================

              v7PowerCutSnap();


              // =========================================
              // 十字がほぼ点になるタイミングで
              // 最後の光点
              // =========================================

              setTimeout(()=>{

                if(
                  !document.body
                ){
                  return;
                }


                const dot =
                  document.createElement(
                    "div"
                  );


                dot.className =
                  "v7CrtFinalDot";


                document.body.appendChild(
                  dot
                );


                setTimeout(()=>{

                  if(dot.isConnected){

                    dot.remove();

                  }

                },320);


              },590);

            });

          }

        );

      }
    );


  v7Observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  console.log(
    "CRT CROSS POWER CUT V7 READY"
  );

})();

// =====================================================
// EFFECTS Ver.8
// SUSPENSE FREEZE PATCH
//
// V4〜V7 削除不要
//
// 狙い：
// プッツン！！！！
// ↓
// 十字CRT収束
// ↓
// 完全暗転
// ↓
// 「壊れた？」と思う長い間
// ↓
// ドクン……
// ↓
// さらに間
// ↓
// ホログラム / 昇格を見せる
//
// ※大量パーティクルなし
// ※iPhone軽量優先
// =====================================================

(() => {

  if(window.__SUSPENSE_FREEZE_V8__) return;
  window.__SUSPENSE_FREEZE_V8__ = true;


  // =====================================================
  // CSS
  // =====================================================

  const style =
    document.createElement("style");

  style.textContent = `

    /* -----------------------------------------
       V7のCRTを少しゆっくりにする

       速すぎず、
       でも「ため」は暗転側で作る
    ----------------------------------------- */

    .crtPuchunScreen{

      animation-duration:
        1.35s !important;

    }


    .crtPuchunScreen::before,
    .crtPuchunScreen::after{

      animation-duration:
        1.35s !important;

    }


    /* -----------------------------------------
       完全暗転専用

       CRTが消えた後も
       最前面を真っ黒に保つ
    ----------------------------------------- */

    .v8SuspenseBlack{

      position:fixed;

      inset:0;

      z-index:20000000;

      background:#000;

      pointer-events:none;

      opacity:1;

    }


    /* -----------------------------------------
       心拍時だけ中央がほんの少し光る

       派手にしないのが重要
    ----------------------------------------- */

    .v8SuspenseBlack::after{

      content:"";

      position:absolute;

      left:50%;
      top:50%;

      width:140px;
      height:140px;

      transform:
        translate(-50%,-50%)
        scale(.35);

      border-radius:50%;

      background:
        radial-gradient(
          circle,
          rgba(255,255,255,.11) 0%,
          rgba(255,255,255,.025) 32%,
          transparent 70%
        );

      opacity:0;

      pointer-events:none;

    }


    .v8SuspenseBlack.v8Beat::after{

      animation:
        v8BeatLight
        .32s
        ease-out;

    }


    @keyframes v8BeatLight{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.30);

      }

      18%{

        opacity:.75;

      }

      100%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(1.15);

      }

    }


    /* -----------------------------------------
       黒幕が最後に開く

       フェードではなく
       一瞬で世界が戻る
    ----------------------------------------- */

    .v8SuspenseRelease{

      animation:
        v8Release
        .10s
        linear
        forwards;

    }


    @keyframes v8Release{

      0%{
        opacity:1;
      }

      70%{
        opacity:1;
      }

      100%{
        opacity:0;
      }

    }

  `;

  document.head.appendChild(style);


  // =====================================================
  // STATE
  // =====================================================

  let suspenseRunning = false;


  // =====================================================
  // レアリティ判定
  //
  // freezeStageの中身を少し待って確認
  // =====================================================

  function detectFreezeRarity(){

    const stage =
      document.querySelector(
        ".freezeStage"
      );


    if(!stage){
      return "EPIC";
    }


    if(
      stage.querySelector(
        ".freezeGodText"
      )
    ){
      return "GOD";
    }


    if(
      stage.querySelector(
        ".freezeLegendText"
      )
    ){
      return "LEGEND";
    }


    if(
      stage.querySelector(
        ".freezeEpicText"
      )
    ){
      return "EPIC";
    }


    /*
      ホログラムがまだ出ていない場合。

      GOD虹があればGOD。
    */

    if(
      stage.querySelector(
        ".freezeGodRainbow"
      )
    ){
      return "GOD";
    }


    return "EPIC";

  }


  // =====================================================
  // 心拍
  // =====================================================

  function v8Heartbeat(
    black,
    power=1
  ){

    if(!black?.isConnected){
      return;
    }


    /*
      光を一瞬だけ出す
    */

    black.classList.remove(
      "v8Beat"
    );


    void black.offsetWidth;


    black.classList.add(
      "v8Beat"
    );


    /*
      低音
    */

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
        42,
        .32,
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
          28 * power
        )
      );

    }

  }


  // =====================================================
  // 黒幕を解除
  // =====================================================

  function releaseSuspense(
    black
  ){

    if(!black?.isConnected){
      suspenseRunning = false;
      return;
    }


    black.classList.add(
      "v8SuspenseRelease"
    );


    /*
      黒幕が切れた瞬間に
      白フラッシュ
    */

    setTimeout(()=>{

      if(black.isConnected){
        black.remove();
      }


      suspenseRunning =
        false;


      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#ffffff",
          115
        );

      }

    },110);

  }


  // =====================================================
  // SUSPENSE本体
  // =====================================================

  function startSuspense(){

    /*
      GOD二段目などは
      前の暗転が終わってから
      新しく開始できる
    */

    if(suspenseRunning){
      return;
    }


    suspenseRunning =
      true;


    /*
      CRTの十字収束を
      ちゃんと最後まで見せる。

      1.35秒後に黒幕開始。
    */

    setTimeout(()=>{

      const black =
        document.createElement(
          "div"
        );


      black.className =
        "v8SuspenseBlack";


      document.body.appendChild(
        black
      );


      /*
        少し待ってレアリティ確認
      */

      setTimeout(()=>{

        const rarity =
          detectFreezeRarity();


        // =====================================
        // EPIC
        //
        // CRT後
        // 1.5秒完全無音
        // ↓
        // ドクン
        // ↓
        // 0.55秒
        // ↓
        // 解放
        // =====================================

        if(rarity==="EPIC"){

          setTimeout(()=>{

            v8Heartbeat(
              black,
              .82
            );

          },1500);


          setTimeout(()=>{

            releaseSuspense(
              black
            );

          },2050);


          return;
        }


        // =====================================
        // LEGEND
        //
        // CRT後
        // 2.2秒完全暗転
        // ↓
        // ドクン
        // ↓
        // 0.65秒
        // ↓
        // ドクン
        // ↓
        // 0.65秒
        // ↓
        // 解放
        // =====================================

        if(rarity==="LEGEND"){

          setTimeout(()=>{

            v8Heartbeat(
              black,
              .98
            );

          },2200);


          setTimeout(()=>{

            v8Heartbeat(
              black,
              1.08
            );

          },2850);


          setTimeout(()=>{

            releaseSuspense(
              black
            );

          },3500);


          return;
        }


        // =====================================
        // GOD
        //
        // CRT後
        // 3秒完全暗転
        // ↓
        // ドクン……
        // ↓
        // 0.8秒
        // ↓
        // ドクン……
        // ↓
        // 0.8秒
        // ↓
        // 解放
        //
        // V4の二段プチュンは
        // そのまま残る
        // =====================================

        setTimeout(()=>{

          v8Heartbeat(
            black,
            1.05
          );

        },3000);


        setTimeout(()=>{

          v8Heartbeat(
            black,
            1.15
          );

        },3800);


        setTimeout(()=>{

          releaseSuspense(
            black
          );

        },4600);


      },100);

    },1350);

  }


  // =====================================================
  // V7 CRTを監視
  //
  // crtPuchunScreen が出た
  // ＝プッツン開始
  // =====================================================

  const observer =
    new MutationObserver(
      mutations=>{

        mutations.forEach(
          mutation=>{

            mutation.addedNodes
            .forEach(node=>{

              if(
                !(node instanceof HTMLElement)
              ){
                return;
              }


              if(
                !node.classList
                ?.contains(
                  "crtPuchunScreen"
                )
              ){
                return;
              }


              if(
                node.dataset
                .v8SuspenseDone === "1"
              ){
                return;
              }


              node.dataset
                .v8SuspenseDone =
                "1";


              startSuspense();

            });

          }

        );

      }
    );


  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  // =====================================================
  // 保険
  //
  // 黒画面が万一残っても
  // 永久に操作不能にはしない
  // =====================================================

  setInterval(()=>{

    const black =
      document.querySelector(
        ".v8SuspenseBlack"
      );


    if(
      black &&
      !document.querySelector(
        ".freezeStage"
      )
    ){

      setTimeout(()=>{

        if(
          black.isConnected &&
          !document.querySelector(
            ".freezeStage"
          )
        ){

          black.remove();

          suspenseRunning =
            false;

        }

      },5000);

    }

  },3000);


  console.log(
    "SUSPENSE FREEZE V8 READY"
  );

})();

// =====================================================
// EFFECTS Ver.9
// PREMIUM CEREMONY
//
// ・重厚感
// ・長い間
// ・ゆっくり形成されるホログラム
// ・LEGEND / GOD 紋章演出
// ・黒背景を長く使う
// ・最終爆発だけ派手に
// ・iPhone軽量
// =====================================================

(() => {

  if(window.__PREMIUM_CEREMONY_V9__) return;
  window.__PREMIUM_CEREMONY_V9__ = true;


  // =====================================================
  // CSS
  // =====================================================

  const style =
    document.createElement("style");

  style.textContent = `

    .v9CeremonyLayer{
      position:fixed;
      inset:0;
      z-index:21000000;

      display:flex;
      align-items:center;
      justify-content:center;

      overflow:hidden;

      pointer-events:none;

      background:#000;

      color:white;
    }


    /* -----------------------------------------
       中央紋章
    ----------------------------------------- */

    .v9Sigil{

      position:absolute;

      left:50%;
      top:50%;

      width:210px;
      height:210px;

      transform:
        translate(-50%,-50%)
        scale(.35)
        rotate(-18deg);

      border-radius:50%;

      opacity:0;

      animation:
        v9SigilForm
        2.4s
        cubic-bezier(.15,.7,.18,1)
        forwards;

      will-change:
        transform,
        opacity;

    }


    .v9Sigil::before,
    .v9Sigil::after{

      content:"";

      position:absolute;

      inset:18px;

      border-radius:50%;

      border:2px solid currentColor;

      opacity:.75;

    }


    .v9Sigil::after{

      inset:44px;

      border-style:dashed;

      opacity:.55;

    }


    @keyframes v9SigilForm{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.35)
          rotate(-18deg);

      }


      30%{

        opacity:.25;

      }


      65%{

        opacity:.75;

        transform:
          translate(-50%,-50%)
          scale(.92)
          rotate(6deg);

      }


      100%{

        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1)
          rotate(0deg);

      }

    }


    /* -----------------------------------------
       光輪
    ----------------------------------------- */

    .v9Halo{

      position:absolute;

      left:50%;
      top:50%;

      width:320px;
      height:320px;

      transform:
        translate(-50%,-50%)
        scale(.55);

      border-radius:50%;

      border:1px solid currentColor;

      opacity:0;

      animation:
        v9HaloOpen
        2.8s
        ease-out
        forwards;

    }


    @keyframes v9HaloOpen{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.55);

      }


      45%{

        opacity:.28;

      }


      100%{

        opacity:.65;

        transform:
          translate(-50%,-50%)
          scale(1.12);

      }

    }


    /* -----------------------------------------
       プレミア文字
    ----------------------------------------- */

    .v9PremiumText{

      position:relative;

      z-index:5;

      text-align:center;

      opacity:0;

      transform:
        scale(.82);

      animation:
        v9PremiumTextIn
        2.1s
        ease-out
        forwards;

    }


    @keyframes v9PremiumTextIn{

      0%{
        opacity:0;
        transform:scale(.82);
      }

      35%{
        opacity:.20;
      }

      70%{
        opacity:.82;
      }

      100%{
        opacity:1;
        transform:scale(1);
      }

    }


    .v9Epic{
      color:#f3d6ff;
      text-shadow:
        0 0 8px white,
        0 0 20px #b347ff,
        0 0 40px #641dba;
    }


    .v9Legend{
      color:#fff4ba;
      text-shadow:
        0 0 8px white,
        0 0 22px #ffd600,
        0 0 45px #b64c00;
    }


    .v9God{
      color:white;
      text-shadow:
        0 0 8px white,
        0 0 22px #fff5a8,
        0 0 42px #ff51dc,
        0 0 60px #36e4ff;
    }


    /* -----------------------------------------
       プレミアスキャン
    ----------------------------------------- */

    .v9Scan{

      position:absolute;
      inset:0;

      opacity:.12;

      background:
        repeating-linear-gradient(
          to bottom,
          transparent 0px,
          transparent 8px,
          rgba(255,255,255,.15) 9px,
          transparent 10px
        );

      animation:
        v9ScanMove
        1.25s linear infinite;

    }


    @keyframes v9ScanMove{

      from{
        transform:translateY(-12px);
      }

      to{
        transform:translateY(12px);
      }

    }


    /* -----------------------------------------
       最終解放フラッシュ
    ----------------------------------------- */

    .v9ReleaseFlash{

      position:absolute;
      inset:0;

      background:white;

      opacity:0;

      animation:
        v9ReleaseFlash
        .48s
        ease-out
        forwards;

    }


    @keyframes v9ReleaseFlash{

      0%{
        opacity:0;
      }

      30%{
        opacity:1;
      }

      100%{
        opacity:0;
      }

    }

  `;

  document.head.appendChild(style);


  // =====================================================
  // STATE
  // =====================================================

  let activeCeremony = null;


  function clearV9(){

    if(activeCeremony){

      activeCeremony.remove();
      activeCeremony = null;

    }

  }


  // =====================================================
  // プレミア儀式開始
  // =====================================================

  function startV9Ceremony(
    rarity
  ){

    clearV9();


    const layer =
      document.createElement("div");

    layer.className =
      "v9CeremonyLayer";


    const scan =
      document.createElement("div");

    scan.className =
      "v9Scan";


    const sigil =
      document.createElement("div");

    sigil.className =
      "v9Sigil";


    const halo =
      document.createElement("div");

    halo.className =
      "v9Halo";


    const text =
      document.createElement("div");

    text.className =
      "v9PremiumText";


    if(rarity==="EPIC"){

      sigil.style.color =
        "#b64cff";

      halo.style.color =
        "#9b3cff";

      text.classList.add(
        "v9Epic"
      );

      text.innerHTML = `
        <div style="
          font-size:14px;
          letter-spacing:8px;
          margin-bottom:12px;
        ">
          AWAKENING
        </div>

        <div style="
          font-size:76px;
          font-weight:1000;
        ">
          EPIC
        </div>
      `;

    }


    else if(rarity==="LEGEND"){

      sigil.style.color =
        "#ffd600";

      halo.style.color =
        "#ffb000";

      text.classList.add(
        "v9Legend"
      );

      text.innerHTML = `
        <div style="
          font-size:14px;
          letter-spacing:8px;
          margin-bottom:12px;
        ">
          PREMIUM ASCENSION
        </div>

        <div style="
          font-size:76px;
          font-weight:1000;
        ">
          LEGEND
        </div>
      `;

    }


    else{

      sigil.style.color =
        "#ffffff";

      halo.style.color =
        "#ffffff";

      text.classList.add(
        "v9God"
      );

      text.innerHTML = `
        <div style="
          font-size:14px;
          letter-spacing:9px;
          margin-bottom:12px;
        ">
          DIVINE ACCESS
        </div>

        <div style="
          font-size:94px;
          font-weight:1000;
        ">
          GOD
        </div>
      `;

    }


    layer.appendChild(scan);
    layer.appendChild(halo);
    layer.appendChild(sigil);
    layer.appendChild(text);


    document.body.appendChild(
      layer
    );


    activeCeremony =
      layer;


    // -----------------------------------------
    // 重厚な低音
    // -----------------------------------------

    if(
      typeof tone ===
      "function"
    ){

      tone(
        38,
        .65,
        "sine",
        .04
      );

    }


    if(
      typeof vibrate ===
      "function"
    ){

      vibrate(30);

    }


    // -----------------------------------------
    // 第二心拍
    // -----------------------------------------

    setTimeout(()=>{

      if(!layer.isConnected){
        return;
      }


      if(
        typeof sfxKick ===
        "function"
      ){

        sfxKick(
          0,
          rarity==="GOD"
          ? .14
          : .11
        );

      }


      if(
        typeof tone ===
        "function"
      ){

        tone(
          44,
          .40,
          "sine",
          rarity==="GOD"
          ? .06
          : .045
        );

      }

    },1500);


    // -----------------------------------------
    // 第三段階
    // -----------------------------------------

    setTimeout(()=>{

      if(!layer.isConnected){
        return;
      }


      if(
        typeof sfxRiser ===
        "function"
      ){

        sfxRiser(
          0,
          rarity==="GOD"
          ? 1.2
          : .85
        );

      }

    },2500);


    // -----------------------------------------
    // 最終解放
    // -----------------------------------------

    setTimeout(()=>{

      if(!layer.isConnected){
        return;
      }


      const flash =
        document.createElement(
          "div"
        );


      flash.className =
        "v9ReleaseFlash";


      layer.appendChild(
        flash
      );


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
          .05,
          rarity==="GOD"
          ? 1.2
          : 1
        );

      }


      if(
        typeof vibrate ===
        "function"
      ){

        vibrate(
          rarity==="GOD"
          ? [100,40,140]
          : [70,30,100]
        );

      }

    },3400);


    // -----------------------------------------
    // 解放
    // -----------------------------------------

    setTimeout(()=>{

      clearV9();

    },3950);

  }


  // =====================================================
  // V8黒幕解除後を監視
  // =====================================================

  const observer =
    new MutationObserver(()=>{

      const freeze =
        document.querySelector(
          ".freezeStage"
        );


      if(!freeze){
        return;
      }


      if(
        freeze.dataset
        .v9CeremonyDone === "1"
      ){
        return;
      }


      /*
        ホログラムが出た時点で
        レアリティを判断
      */

      let rarity = null;


      if(
        freeze.querySelector(
          ".freezeGodText"
        )
      ){

        rarity =
          "GOD";

      }


      else if(
        freeze.querySelector(
          ".freezeLegendText"
        )
      ){

        rarity =
          "LEGEND";

      }


      else if(
        freeze.querySelector(
          ".freezeEpicText"
        )
      ){

        rarity =
          "EPIC";

      }


      if(!rarity){
        return;
      }


      freeze.dataset
        .v9CeremonyDone =
        "1";


      /*
        ホログラムを一度しっかり見せてから
        プレミア儀式へ
      */

      setTimeout(()=>{

        startV9Ceremony(
          rarity
        );

      },900);

    });


  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  console.log(
    "PREMIUM CEREMONY V9 READY"
  );

})();

// =====================================================
// EFFECTS Ver.10
// ASCENSION FINALE PREMIUM
//
// 超長尺・重厚・ゴージャス版
//
// 流れ
// CRTプッツン
// ↓
// V8暗転
// ↓
// ホログラム形成
// ↓
// 波紋
// ↓
// 超巨大「昇格」
// ↓
// ホログラム増量
// ↓
// キラキラ
// ↓
// レアリティ降臨
// ↓
// 余韻
// ↓
// ドロップ詳細へ
//
// V4〜V9は削除不要
// =====================================================

(() => {

  if (window.__ASCENSION_PREMIUM_V10__) return;
  window.__ASCENSION_PREMIUM_V10__ = true;


  // =====================================================
  // CSS
  // =====================================================

  const style = document.createElement("style");

  style.textContent = `

    /* =================================================
       V10 全画面ステージ
    ================================================= */

    .v10Stage{

      position:fixed;
      inset:0;

      z-index:30000000;

      overflow:hidden;

      pointer-events:none;

      background:#000;

      display:flex;
      align-items:center;
      justify-content:center;

      opacity:1;

      isolation:isolate;
    }


    /* =================================================
       背景の超薄いホログラム
    ================================================= */

    .v10Aura{

      position:absolute;

      left:50%;
      top:50%;

      width:150vmax;
      height:150vmax;

      transform:
        translate(-50%,-50%)
        scale(.25);

      border-radius:50%;

      opacity:0;

      filter:blur(10px);

      animation:
        v10AuraBirth
        4.2s
        cubic-bezier(.18,.65,.20,1)
        forwards;
    }


    @keyframes v10AuraBirth{

      0%{
        opacity:0;
        transform:
          translate(-50%,-50%)
          scale(.20);
      }

      30%{
        opacity:.05;
      }

      65%{
        opacity:.13;
      }

      100%{
        opacity:.20;
        transform:
          translate(-50%,-50%)
          scale(.72);
      }
    }


    /* =================================================
       中央紋章
    ================================================= */

    .v10Emblem{

      position:absolute;

      left:50%;
      top:50%;

      width:230px;
      height:230px;

      transform:
        translate(-50%,-50%)
        scale(.15)
        rotate(-40deg);

      opacity:0;

      border:
        2px solid currentColor;

      border-radius:50%;

      box-shadow:
        0 0 12px currentColor,
        inset 0 0 16px currentColor;

      animation:
        v10EmblemBirth
        3.6s
        cubic-bezier(.12,.72,.20,1)
        forwards;
    }


    .v10Emblem::before{

      content:"";

      position:absolute;

      inset:22px;

      border:
        1px solid currentColor;

      border-radius:50%;

      opacity:.65;

      animation:
        v10EmblemSpin
        12s
        linear
        infinite;
    }


    .v10Emblem::after{

      content:"✦";

      position:absolute;

      inset:0;

      display:flex;
      align-items:center;
      justify-content:center;

      font-size:74px;

      color:currentColor;

      text-shadow:
        0 0 10px currentColor,
        0 0 28px currentColor;

      opacity:.85;
    }


    @keyframes v10EmblemBirth{

      0%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.15)
          rotate(-40deg);
      }

      25%{
        opacity:.12;
      }

      55%{
        opacity:.40;
      }

      80%{
        opacity:.78;
      }

      100%{
        opacity:.92;

        transform:
          translate(-50%,-50%)
          scale(1)
          rotate(0deg);
      }
    }


    @keyframes v10EmblemSpin{

      from{
        transform:rotate(0deg);
      }

      to{
        transform:rotate(360deg);
      }
    }


    /* =================================================
       外周ホログラムリング
    ================================================= */

    .v10Ring{

      position:absolute;

      left:50%;
      top:50%;

      border:
        1px solid currentColor;

      border-radius:50%;

      opacity:0;

      transform:
        translate(-50%,-50%)
        scale(.35);

      box-shadow:
        0 0 10px currentColor;

      animation:
        v10RingBirth
        3.8s
        ease-out
        forwards;
    }


    .v10Ring1{
      width:300px;
      height:300px;
    }


    .v10Ring2{
      width:365px;
      height:365px;

      animation-delay:.45s;
    }


    .v10Ring3{
      width:430px;
      height:430px;

      animation-delay:.9s;
    }


    @keyframes v10RingBirth{

      0%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.35);
      }

      40%{
        opacity:.08;
      }

      75%{
        opacity:.32;
      }

      100%{
        opacity:.48;

        transform:
          translate(-50%,-50%)
          scale(1);
      }
    }


    /* =================================================
       波紋
    ================================================= */

    .v10Ripple{

      position:absolute;

      left:50%;
      top:50%;

      width:80px;
      height:80px;

      border-radius:50%;

      border:
        3px solid currentColor;

      transform:
        translate(-50%,-50%)
        scale(.1);

      opacity:0;

      animation:
        v10RippleExpand
        2.3s
        cubic-bezier(.12,.60,.18,1)
        forwards;
    }


    @keyframes v10RippleExpand{

      0%{
        opacity:0;
        transform:
          translate(-50%,-50%)
          scale(.1);
      }

      12%{
        opacity:.95;
      }

      60%{
        opacity:.45;
      }

      100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(8);
      }
    }


    /* =================================================
       超巨大「昇格」
    ================================================= */

    .v10Ascension{

      position:absolute;

      left:50%;
      top:50%;

      transform:
        translate(-50%,-50%)
        scale(2.8);

      white-space:nowrap;

      font-weight:1000;

      font-size:
        clamp(92px, 27vw, 190px);

      letter-spacing:.08em;

      color:white;

      opacity:0;

      text-shadow:
        0 0 8px white,
        0 0 22px currentColor,
        0 0 48px currentColor,
        0 0 90px currentColor;

      filter:
        brightness(1.4);

      animation:
        v10AscensionDrop
        2.6s
        cubic-bezier(.10,.72,.15,1)
        forwards;

      will-change:
        transform,
        opacity;
    }


    @keyframes v10AscensionDrop{

      0%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(3.2);

        filter:
          blur(12px)
          brightness(2);
      }

      22%{
        opacity:.25;
      }

      48%{
        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1.15);

        filter:
          blur(0)
          brightness(1.8);
      }

      68%{
        transform:
          translate(-50%,-50%)
          scale(.96);
      }

      78%{
        transform:
          translate(-50%,-50%)
          scale(1.02);
      }

      100%{
        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1);

        filter:
          brightness(1.15);
      }
    }


    /* =================================================
       昇格を消す
    ================================================= */

    .v10AscensionOut{

      animation:
        v10AscensionOut
        1.1s
        ease-in
        forwards !important;
    }


    @keyframes v10AscensionOut{

      from{
        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1);
      }

      to{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(1.18);

        filter:
          blur(8px);
      }
    }


    /* =================================================
       キラキラ
    ================================================= */

    .v10Spark{

      position:absolute;

      left:50%;
      top:50%;

      width:7px;
      height:7px;

      pointer-events:none;

      opacity:0;

      transform:
        translate(-50%,-50%)
        rotate(45deg);

      background:white;

      box-shadow:
        0 0 8px white,
        0 0 18px currentColor;

      animation:
        v10Sparkle
        2.4s
        ease-in-out
        forwards;
    }


    .v10Spark::before{

      content:"";

      position:absolute;

      left:50%;
      top:50%;

      width:2px;
      height:28px;

      transform:
        translate(-50%,-50%);

      background:white;
    }


    .v10Spark::after{

      content:"";

      position:absolute;

      left:50%;
      top:50%;

      width:28px;
      height:2px;

      transform:
        translate(-50%,-50%);

      background:white;
    }


    @keyframes v10Sparkle{

      0%{
        opacity:0;
        scale:.2;
      }

      30%{
        opacity:1;
        scale:1;
      }

      60%{
        opacity:.85;
        scale:.65;
      }

      100%{
        opacity:0;
        scale:.15;
      }
    }


    /* =================================================
       最終レアリティ
    ================================================= */

    .v10Rarity{

      position:absolute;

      left:50%;
      top:50%;

      width:100%;

      transform:
        translate(-50%,-50%)
        scale(.68);

      text-align:center;

      opacity:0;

      animation:
        v10RarityReveal
        3.4s
        cubic-bezier(.15,.70,.18,1)
        forwards;
    }


    .v10RaritySmall{

      font-size:13px;

      letter-spacing:
        .65em;

      margin-bottom:16px;

      opacity:.72;
    }


    .v10RarityMain{

      font-size:
        clamp(74px, 22vw, 150px);

      line-height:.9;

      font-weight:1000;

      letter-spacing:.02em;
    }


    @keyframes v10RarityReveal{

      0%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.68);

        filter:
          blur(14px)
          brightness(2);
      }

      35%{
        opacity:.20;
      }

      65%{
        opacity:.82;
      }

      100%{
        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(1);

        filter:
          blur(0)
          brightness(1);
      }
    }


    /* =================================================
       EPIC
    ================================================= */

    .v10Epic{

      color:#f5dcff;

      text-shadow:
        0 0 8px white,
        0 0 22px #d46cff,
        0 0 50px #8427e8,
        0 0 90px #3c0c75;
    }


    /* =================================================
       LEGEND
    ================================================= */

    .v10Legend{

      color:#fff4bd;

      text-shadow:
        0 0 8px white,
        0 0 20px #ffe067,
        0 0 48px #ffad19,
        0 0 90px #9d3a00;
    }


    /* =================================================
       GOD
    ================================================= */

    .v10God{

      color:white;

      text-shadow:
        0 0 10px white,
        0 0 24px #fff59a,
        0 0 48px #ff72df,
        0 0 70px #52eaff,
        0 0 110px #ffffff;
    }


    /* =================================================
       最後の中央集光
    ================================================= */

    .v10FinalLight{

      position:absolute;

      left:50%;
      top:50%;

      width:150vmax;
      height:150vmax;

      transform:
        translate(-50%,-50%)
        scale(1);

      border-radius:50%;

      opacity:0;

      background:
        radial-gradient(
          circle,
          white 0%,
          rgba(255,255,255,.88) 4%,
          rgba(255,255,255,.20) 17%,
          transparent 45%
        );

      animation:
        v10FinalGather
        1.8s
        ease-in
        forwards;
    }


    @keyframes v10FinalGather{

      0%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(1);
      }

      55%{
        opacity:.45;
      }

      82%{
        opacity:.85;

        transform:
          translate(-50%,-50%)
          scale(.20);
      }

      100%{
        opacity:1;

        transform:
          translate(-50%,-50%)
          scale(.025);
      }
    }


    /* =================================================
       最終白飛び
    ================================================= */

    .v10WhiteOut{

      position:absolute;

      inset:0;

      background:white;

      opacity:0;

      animation:
        v10WhiteOut
        .75s
        ease-out
        forwards;
    }


    @keyframes v10WhiteOut{

      0%{
        opacity:0;
      }

      40%{
        opacity:1;
      }

      100%{
        opacity:0;
      }
    }

  `;

  document.head.appendChild(style);


  // =====================================================
  // HELPERS
  // =====================================================

  const wait = ms =>
    new Promise(resolve =>
      setTimeout(resolve, ms)
    );


  let v10Running = false;


  function v10Beat(power = 1){

    if(typeof sfxKick === "function"){
      sfxKick(
        0,
        .10 * power
      );
    }

    if(typeof tone === "function"){
      tone(
        38,
        .45,
        "sine",
        .05 * power
      );
    }

    if(typeof vibrate === "function"){
      vibrate(
        Math.round(
          25 * power
        )
      );
    }
  }


  // =====================================================
  // キラキラ生成
  // 最大12個
  // =====================================================

  function createSparkles(
    stage,
    color,
    amount = 10
  ){

    amount =
      Math.min(amount,12);


    for(let i=0;i<amount;i++){

      const spark =
        document.createElement("div");

      spark.className =
        "v10Spark";

      spark.style.color =
        color;

      const angle =
        Math.random() *
        Math.PI * 2;

      const distance =
        90 +
        Math.random() * 150;

      const x =
        Math.cos(angle) *
        distance;

      const y =
        Math.sin(angle) *
        distance;


      spark.style.marginLeft =
        `${x}px`;

      spark.style.marginTop =
        `${y}px`;

      spark.style.animationDelay =
        `${Math.random() * .8}s`;


      stage.appendChild(spark);


      setTimeout(()=>{

        spark.remove();

      },3400);

    }
  }


  // =====================================================
  // 波紋
  // =====================================================

  function createRipple(
    stage,
    color
  ){

    const ripple =
      document.createElement("div");

    ripple.className =
      "v10Ripple";

    ripple.style.color =
      color;

    stage.appendChild(ripple);


    setTimeout(()=>{

      ripple.remove();

    },2400);
  }


  // =====================================================
  // 最終演出
  // =====================================================

  async function playV10(
    rarity
  ){

    if(v10Running) return;

    v10Running = true;


    // V9が残っていたら非表示
    const oldV9 =
      document.querySelector(
        ".v9CeremonyLayer"
      );

    if(oldV9){
      oldV9.style.display =
        "none";
    }


    const stage =
      document.createElement("div");

    stage.className =
      "v10Stage";


    // ===================================================
    // 色設定
    // ===================================================

    let color;
    let aura;
    let subtitle;


    if(rarity === "LEGEND"){

      color =
        "#ffd65a";

      aura =
        "radial-gradient(circle,#7c4200 0%,#261000 32%,#000 68%)";

      subtitle =
        "PREMIUM ASCENSION";

    }

    else if(rarity === "GOD"){

      color =
        "#ffffff";

      aura =
        "conic-gradient(from 0deg,#ff5fd8,#5cecff,#fff59b,#ff5fd8)";

      subtitle =
        "DIVINE ASCENSION";

    }

    else{

      color =
        "#c968ff";

      aura =
        "radial-gradient(circle,#47106b 0%,#160522 35%,#000 70%)";

      subtitle =
        "ASCENSION";

    }


    // ===================================================
    // 背景オーラ
    // ===================================================

    const auraEl =
      document.createElement("div");

    auraEl.className =
      "v10Aura";

    auraEl.style.background =
      aura;


    // ===================================================
    // 紋章
    // ===================================================

    const emblem =
      document.createElement("div");

    emblem.className =
      "v10Emblem";

    emblem.style.color =
      color;


    // ===================================================
    // リング
    // ===================================================

    const ring1 =
      document.createElement("div");

    ring1.className =
      "v10Ring v10Ring1";

    ring1.style.color =
      color;


    const ring2 =
      document.createElement("div");

    ring2.className =
      "v10Ring v10Ring2";

    ring2.style.color =
      color;


    const ring3 =
      document.createElement("div");

    ring3.className =
      "v10Ring v10Ring3";

    ring3.style.color =
      color;


    stage.append(
      auraEl,
      ring3,
      ring2,
      ring1,
      emblem
    );


    document.body.appendChild(
      stage
    );


    // ===================================================
    // PHASE 1
    //
    // いきなり何も出さない。
    // 真っ黒を見せる。
    // ===================================================

    await wait(1300);


    v10Beat(.72);


    // ===================================================
    // PHASE 2
    //
    // 紋章形成を眺める
    // ===================================================

    await wait(1700);


    v10Beat(.88);


    await wait(1300);


    // ===================================================
    // PHASE 3
    //
    // 波紋
    // ===================================================

    createRipple(
      stage,
      color
    );


    if(typeof tone === "function"){

      tone(
        95,
        .8,
        "sine",
        .035
      );
    }


    await wait(1800);


    // ===================================================
    // PHASE 4
    //
    // まだ一瞬待つ
    // ===================================================

    await wait(700);


    // ===================================================
    // PHASE 5
    //
    // 超巨大「昇格」
    // ===================================================

    const ascension =
      document.createElement("div");

    ascension.className =
      "v10Ascension";

    ascension.style.color =
      color;

    ascension.textContent =
      "昇格";


    stage.appendChild(
      ascension
    );


    if(typeof sfxHeavyImpact === "function"){

      sfxHeavyImpact(0);

    }

    else{

      v10Beat(1.25);

    }


    if(typeof vibrate === "function"){

      vibrate([
        80,
        45,
        120
      ]);

    }


    // ===================================================
    // 「昇格」をちゃんと見せる
    // ===================================================

    await wait(2700);


    // ===================================================
    // PHASE 6
    //
    // ホログラム増量
    // ===================================================

    createSparkles(
      stage,
      color,
      rarity === "GOD"
        ? 12
        : 10
    );


    createRipple(
      stage,
      color
    );


    await wait(1000);


    createSparkles(
      stage,
      color,
      rarity === "GOD"
        ? 12
        : 8
    );


    // 昇格をゆっくり消す
    ascension.classList.add(
      "v10AscensionOut"
    );


    await wait(1200);


    ascension.remove();


    // ===================================================
    // PHASE 7
    //
    // ここでも急いでレアリティを出さない
    // ===================================================

    await wait(900);


    // ===================================================
    // PHASE 8
    //
    // レアリティ降臨
    // ===================================================

    const rarityEl =
      document.createElement("div");

    rarityEl.className =
      "v10Rarity";


    let rarityClass;


    if(rarity === "GOD"){

      rarityClass =
        "v10God";

    }

    else if(rarity === "LEGEND"){

      rarityClass =
        "v10Legend";

    }

    else{

      rarityClass =
        "v10Epic";

    }


    rarityEl.innerHTML = `

      <div class="
        v10RaritySmall
        ${rarityClass}
      ">
        ${subtitle}
      </div>

      <div class="
        v10RarityMain
        ${rarityClass}
      ">
        ${rarity}
      </div>

    `;


    stage.appendChild(
      rarityEl
    );


    v10Beat(
      rarity === "GOD"
        ? 1.30
        : 1.05
    );


    // ===================================================
    // レアリティ形成中にキラキラ
    // ===================================================

    await wait(1500);


    createSparkles(
      stage,
      color,
      rarity === "GOD"
        ? 12
        : 10
    );


    await wait(2000);


    // ===================================================
    // PHASE 9
    //
    // 完成状態を何もせず見せる
    // ===================================================

    await wait(
      rarity === "GOD"
        ? 2300
        : rarity === "LEGEND"
          ? 1900
          : 1500
    );


    // ===================================================
    // PHASE 10
    //
    // 中央へ光を集める
    // ===================================================

    const finalLight =
      document.createElement("div");

    finalLight.className =
      "v10FinalLight";


    stage.appendChild(
      finalLight
    );


    if(typeof tone === "function"){

      tone(
        240,
        1.6,
        "sine",
        .025
      );

    }


    await wait(1750);


    // ===================================================
    // PHASE 11
    //
    // 最後だけ一気に解放
    // ===================================================

    const white =
      document.createElement("div");

    white.className =
      "v10WhiteOut";


    stage.appendChild(
      white
    );


    if(typeof sfxKyuiin === "function"){

      sfxKyuiin(
        0,
        rarity === "GOD"
          ? 1.3
          : 1
      );

    }


    if(typeof sfxHeavyImpact === "function"){

      sfxHeavyImpact(.08);

    }


    if(typeof vibrate === "function"){

      vibrate(
        rarity === "GOD"
          ? [120,60,160]
          : [80,40,110]
      );

    }


    await wait(720);


    // ===================================================
    // PHASE 12
    //
    // V10終了
    //
    // 下にある既存の
    // ドロップアイテム詳細を見せる
    // ===================================================

    stage.remove();


    if(oldV9){
      oldV9.remove();
    }


    v10Running = false;

  }


  // =====================================================
  // V8 → V9付近を監視
  //
  // freezeStage内のレアリティ確定後に
  // V10開始
  // =====================================================

  const observer =
    new MutationObserver(()=>{

      if(v10Running){
        return;
      }


      const freeze =
        document.querySelector(
          ".freezeStage"
        );


      if(!freeze){
        return;
      }


      if(
        freeze.dataset
          .v10Done === "1"
      ){
        return;
      }


      let rarity = null;


      if(
        freeze.querySelector(
          ".freezeGodText"
        )
      ){

        rarity =
          "GOD";

      }

      else if(
        freeze.querySelector(
          ".freezeLegendText"
        )
      ){

        rarity =
          "LEGEND";

      }

      else if(
        freeze.querySelector(
          ".freezeEpicText"
        )
      ){

        rarity =
          "EPIC";

      }


      if(!rarity){
        return;
      }


      freeze.dataset
        .v10Done =
        "1";


      /*
        既存ホログラムを一瞬見せてから
        V10の儀式へ
      */

      setTimeout(()=>{

        playV10(
          rarity
        );

      },1200);

  });


  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  console.log(
    "ASCENSION FINALE PREMIUM V10 READY"
  );

})();





