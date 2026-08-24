// ONE PERCENT DROP - FREEZE EFFECTS
// プチュン・CRT・ホログラム・昇格演出専用
// =====================================================
// FREEZE EFFECTS Ver.1
// PREMIUM GRADE UP CEREMONY
//
// ・「昇格」→ GRADE UP
// ・GRADE = 白銀
// ・UP = 金
// ・波紋短め
// ・ホログラム強化
// ・ゆっくり、重厚、プレミア感
// ・大量DOMなし
// =====================================================

(() => {

  if(window.__PREMIUM_GRADE_UP_V1__) return;
  window.__PREMIUM_GRADE_UP_V1__ = true;


  // =====================================================
  // CSS
  // =====================================================

  const style =
    document.createElement("style");


  style.textContent = `

    /* =========================================
       V10の「昇格」を見えなくする
       GRADE UPへ置き換える
    ========================================= */

    .v10Ascension{
      color:transparent !important;
      -webkit-text-fill-color:
        transparent !important;
      text-shadow:none !important;
    }


    .v10Ascension::before,
    .v10Ascension::after{
      display:none !important;
    }


    /* =========================================
       GRADE UP専用
    ========================================= */

    .gradeUpPremium{

      position:absolute;

      left:50%;
      top:50%;

      z-index:100;

      width:100%;

      text-align:center;

      transform:
        translate(-50%,-50%)
        scale(2.5);

      opacity:0;

      white-space:nowrap;

      font-family:
        "Times New Roman",
        "Georgia",
        serif;

      font-weight:700;

      letter-spacing:.12em;

      animation:
        gradeUpPremiumIn
        3.2s
        cubic-bezier(.10,.70,.16,1)
        forwards;

      will-change:
        transform,
        opacity;

    }


    @keyframes gradeUpPremiumIn{

      0%{

        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(2.7);

        filter:
          blur(14px)
          brightness(2.2);

      }


      22%{

        opacity:.20;

      }


      48%{

        opacity:.90;

        transform:
          translate(-50%,-50%)
          scale(1.15);

        filter:
          blur(2px)
          brightness(1.6);

      }


      70%{

        transform:
          translate(-50%,-50%)
          scale(.97);

      }


      82%{

        transform:
          translate(-50%,-50%)
          scale(1.03);

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


    /* =========================================
       GRADE
       白銀
    ========================================= */

    .gradeUpGrade{

      display:inline-block;

      font-size:
        clamp(68px,18vw,120px);

      background:

        linear-gradient(
          180deg,

          #ffffff 0%,
          #e5edf4 16%,
          #ffffff 30%,
          #adb8c4 48%,
          #f9fbff 65%,
          #d0d7df 82%,
          #ffffff 100%
        );

      -webkit-background-clip:text;
      background-clip:text;

      -webkit-text-fill-color:
        transparent;

      -webkit-text-stroke:
        1.5px
        rgba(255,255,255,.45);

      filter:

        drop-shadow(
          0 3px 1px
          rgba(0,0,0,.95)
        )

        drop-shadow(
          0 0 8px
          white
        )

        drop-shadow(
          0 0 24px
          rgba(180,225,255,.80)
        );

    }


    /* =========================================
       UP
       金
    ========================================= */

    .gradeUpUp{

      display:inline-block;

      margin-left:.12em;

      font-size:
        clamp(78px,21vw,140px);

      background:

        linear-gradient(
          180deg,

          #ffffff 0%,
          #fff6bd 12%,
          #ffd84c 28%,
          #fff8cc 43%,
          #b66d00 59%,
          #ffd64d 72%,
          #fff6b7 86%,
          #ffffff 100%
        );

      -webkit-background-clip:text;
      background-clip:text;

      -webkit-text-fill-color:
        transparent;

      -webkit-text-stroke:
        2px
        rgba(105,62,0,.90);

      filter:

        drop-shadow(
          0 4px 1px
          rgba(72,35,0,.95)
        )

        drop-shadow(
          0 0 8px
          white
        )

        drop-shadow(
          0 0 22px
          #ffd95a
        )

        drop-shadow(
          0 0 45px
          #ff9d00
        );

    }


    /* =========================================
       ホログラム残像
    ========================================= */

    .gradeUpPremium::before{

      content:"GRADE UP";

      position:absolute;

      left:50%;
      top:50%;

      transform:
        translate(-50%,-50%)
        translateX(-5px);

      width:max-content;

      font-size:
        clamp(74px,20vw,135px);

      font-weight:700;

      letter-spacing:.12em;

      color:#54eaff;

      opacity:.22;

      filter:
        blur(1px);

      z-index:-1;

    }


    .gradeUpPremium::after{

      content:"GRADE UP";

      position:absolute;

      left:50%;
      top:50%;

      transform:
        translate(-50%,-50%)
        translateX(5px);

      width:max-content;

      font-size:
        clamp(74px,20vw,135px);

      font-weight:700;

      letter-spacing:.12em;

      color:#ff55df;

      opacity:.20;

      filter:
        blur(1px);

      z-index:-1;

    }


    /* =========================================
       GRADE UP表面を走る光
    ========================================= */

    .gradeUpSweep{

      position:absolute;

      left:-35%;
      top:0;

      width:28%;
      height:100%;

      transform:
        skewX(-17deg);

      opacity:0;

      pointer-events:none;

      background:

        linear-gradient(
          90deg,

          transparent,

          rgba(120,230,255,.12),

          rgba(255,255,255,.85),

          rgba(255,220,120,.42),

          transparent
        );

      animation:
        gradeUpSweep
        3.8s
        ease-in-out
        forwards;

    }


    @keyframes gradeUpSweep{

      0%{
        left:-35%;
        opacity:0;
      }

      15%{
        opacity:.72;
      }

      78%{
        opacity:.55;
      }

      100%{
        left:120%;
        opacity:0;
      }

    }


    /* =========================================
       波紋短縮
       1.15秒
    ========================================= */

    .v10Ripple{

      animation:
        gradeUpRipple
        1.15s
        cubic-bezier(.10,.62,.16,1)
        forwards !important;

    }


    @keyframes gradeUpRipple{

      0%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(.1);
      }

      12%{
        opacity:1;
      }

      48%{
        opacity:.58;
      }

      100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(8.5);
      }

    }


    /* =========================================
       ホログラム量をさらに増やす
    ========================================= */

    .v10Stage{

      background:

        radial-gradient(
          circle at center,
          rgba(255,255,255,.025),
          #000 55%
        ) !important;

    }


    .v10Stage::before{

      content:"";

      position:absolute;

      inset:0;

      pointer-events:none;

      opacity:.18;

      background:

        linear-gradient(
          90deg,
          rgba(255,255,255,.035)
          1px,
          transparent 1px
        ),

        linear-gradient(
          rgba(255,255,255,.035)
          1px,
          transparent 1px
        );

      background-size:
        30px 30px;

      animation:
        gradeUpGrid
        8s
        linear
        infinite;

    }


    @keyframes gradeUpGrid{

      from{
        transform:
          scale(1.05)
          rotate(0deg);
      }

      to{
        transform:
          scale(1.12)
          rotate(.8deg);
      }

    }


    .v10Stage::after{

      content:"";

      position:absolute;

      inset:-30%;

      pointer-events:none;

      opacity:.10;

      background:

        conic-gradient(
          from 0deg,

          transparent,

          rgba(255,50,220,.42),

          transparent 18%,

          rgba(50,225,255,.38),

          transparent 37%,

          rgba(255,225,80,.35),

          transparent 56%,

          rgba(130,70,255,.40),

          transparent 77%,

          rgba(255,255,255,.24),

          transparent
        );

      animation:
        gradeUpPrism
        13s
        linear
        infinite;

    }


    @keyframes gradeUpPrism{

      from{
        transform:
          rotate(0deg)
          scale(.80);
      }

      to{
        transform:
          rotate(360deg)
          scale(1);
      }

    }

  `;


  document.head.appendChild(
    style
  );


  // =====================================================
  // V10ステージ監視
  // =====================================================

  const observer =
    new MutationObserver(()=>{

      const stage =
        document.querySelector(
          ".v10Stage"
        );


      if(!stage){
        return;
      }


      if(
        stage.dataset
        .gradeUpDone === "1"
      ){
        return;
      }


      const oldAscension =
        stage.querySelector(
          ".v10Ascension"
        );


      if(!oldAscension){
        return;
      }


      stage.dataset
        .gradeUpDone =
        "1";


      // -----------------------------------------
      // GRADE UP本体
      // -----------------------------------------

      const grade =
        document.createElement(
          "div"
        );


      grade.className =
        "gradeUpPremium";


      grade.innerHTML = `

        <span class="gradeUpGrade">
          GRADE
        </span>

        <span class="gradeUpUp">
          UP
        </span>

        <div class="gradeUpSweep"></div>

      `;


      stage.appendChild(
        grade
      );


      // -----------------------------------------
      // 少し遅れて2回目の走査光
      // -----------------------------------------

      setTimeout(()=>{

        if(!grade.isConnected){
          return;
        }


        const sweep =
          document.createElement(
            "div"
          );


        sweep.className =
          "gradeUpSweep";


        grade.appendChild(
          sweep
        );


        setTimeout(()=>{

          sweep.remove();

        },4000);


      },2200);


      // -----------------------------------------
      // さらにプレミア感を出すため
      // GRADE UP完成後に軽いキラキラ
      // -----------------------------------------

      setTimeout(()=>{

        if(!stage.isConnected){
          return;
        }


        if(
          typeof createSparkles ===
          "function"
        ){

          createSparkles(
            stage,
            "#ffffff",
            8
          );

        }

      },2500);

    });


  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  console.log(
    "PREMIUM GRADE UP V1 READY"
  );

})();


// =====================================================
// FREEZE EFFECTS Ver.2
// CLEAN GRADE UP PATCH
//
// ・旧「昇格」完全非表示
// ・V9/V10の重複文字を整理
// ・GRADE UPだけを主役にする
// ・ホログラムの重複を抑える
// =====================================================

(() => {

  if(window.__CLEAN_GRADE_UP_V2__) return;
  window.__CLEAN_GRADE_UP_V2__ = true;


  const style =
    document.createElement("style");


  style.textContent = `

    /* =========================================
       旧「昇格」文字を完全に消す
    ========================================= */

    .v10Ascension{

      display:none !important;

      opacity:0 !important;

      visibility:hidden !important;

      pointer-events:none !important;

    }


    .v10Ascension::before,
    .v10Ascension::after{

      display:none !important;

      content:none !important;

    }


    /* =========================================
       旧V9の文字演出を非表示
       背景・紋章だけ使う
    ========================================= */

    .v9PremiumText{

      display:none !important;

    }


    /* =========================================
       V10レアリティ前の重複文字を整理
    ========================================= */

    .v10RaritySmall{

      opacity:.55 !important;

      font-size:11px !important;

      letter-spacing:.5em !important;

    }


    /* =========================================
       旧ホログラム文字を弱める
       GRADE UPと競合しないようにする
    ========================================= */

    .freezeHologram{

      opacity:.45 !important;

    }


    .freezeEpicText,
    .freezeLegendText,
    .freezeGodText{

      filter:
        brightness(.75)
        saturate(.85)
        !important;

    }


    /* =========================================
       GRADE UPを最前面へ
    ========================================= */

    .gradeUpPremium{

      z-index:500 !important;

    }


    /* =========================================
       GRADE UP以外の中央文字が
       同時に出た場合は抑える
    ========================================= */

    .v10Stage
    .v10Rarity{

      z-index:80 !important;

    }


    .v10Stage
    .gradeUpPremium{

      z-index:500 !important;

    }

  `;


  document.head.appendChild(
    style
  );


  // =====================================================
  // DOM重複監視
  // =====================================================

  const observer =
    new MutationObserver(()=>{

      // -----------------------------------------
      // 旧「昇格」は出た瞬間消す
      // -----------------------------------------

      document
        .querySelectorAll(
          ".v10Ascension"
        )
        .forEach(el=>{

          el.style.display =
            "none";

        });


      // -----------------------------------------
      // V9文字も消す
      // -----------------------------------------

      document
        .querySelectorAll(
          ".v9PremiumText"
        )
        .forEach(el=>{

          el.style.display =
            "none";

        });


      // -----------------------------------------
      // GRADE UPが出ている間は
      // 旧ホログラム文字を一時弱体化
      // -----------------------------------------

      const grade =
        document.querySelector(
          ".gradeUpPremium"
        );


      if(grade){

        document
          .querySelectorAll(
            ".freezeHologram"
          )
          .forEach(holo=>{

            holo.style.opacity =
              ".22";

          });

      }

    });


  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );


  console.log(
    "CLEAN GRADE UP V2 READY"
  );

})();
