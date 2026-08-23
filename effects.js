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
