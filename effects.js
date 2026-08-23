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
