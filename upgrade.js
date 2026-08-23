// ONE PERCENT DROP - UPGRADE SYSTEM
// 合成・覚醒・固有スキル管理
// =====================================================
// UPGRADE SYSTEM Ver.1
// 武器覚醒倍率リニューアル
//
// 無印 = ×1
// ★1   = 元性能 ×2.5
// ★2   = 元性能 ×6.25 + 固有スキル
// =====================================================

(() => {

  if (window.__UPGRADE_SYSTEM_V1__) return;
  window.__UPGRADE_SYSTEM_V1__ = true;


  // =====================================================
  // 元攻撃力取得
  // =====================================================

  function getOriginalWeaponAtk(item){

    if(!item){
      return 0;
    }


    /*
      すでにoriginalAtkが保存されている装備
    */

    if(
      Number(item.originalAtk) > 0
    ){

      return Number(
        item.originalAtk
      );

    }


    /*
      無印装備
    */

    return Number(
      item.atk || 0
    );

  }


  // =====================================================
  // ★1
  // 元攻撃力 ×2.5
  // =====================================================

  makeStar1Atk =
  function(item){

    const original =
      getOriginalWeaponAtk(
        item
      );


    return Math.ceil(
      original * 2.5
    );

  };


  // =====================================================
  // ★2
  // 元攻撃力 ×6.25
  //
  // ★1の2.5倍なので
  // 元から見ると6.25倍
  // =====================================================

  makeStar2Atk =
  function(item){

    const original =
      getOriginalWeaponAtk(
        item
      );


    return Math.ceil(
      original * 6.25
    );

  };


  // =====================================================
  // ★2 固有スキル
  //
  // 今まではレア度ごとに同じ能力だったが、
  // 装備名ごとの専用能力を優先する
  // =====================================================

  const uniqueAwakeningSkills = {

    // =========================
    // NORMAL
    // =========================

    "木の剣":{
      type:"woodSpirit",
      name:"樹精の加護",
      text:"🌿 ダイス合計が10以下なら追加ダメージ +10"
    },

    "石のナイフ":{
      type:"stoneEdge",
      name:"岩穿ち",
      text:"🪨 偶数の出目が3個なら追加ダメージ +15"
    },

    "冒険者の剣":{
      type:"adventureSoul",
      name:"冒険者の意地",
      text:"🔥 HP50%以下なら攻撃時追加ダメージ +12"
    },


    // =========================
    // RARE
    // =========================

    "蒼鉄の剣":{
      type:"blueSteel",
      name:"蒼鉄連撃",
      text:"🔷 ダイス合計15以上で追加ダメージ +18"
    },

    "雷の短剣":{
      type:"thunderKnife",
      name:"迅雷",
      text:"⚡ 6が1個でも出れば追加ダメージ +15"
    },

    "騎士の大剣":{
      type:"knightPride",
      name:"騎士の誇り",
      text:"🛡️ ダイス合計12以上で追加ダメージ +20"
    },


    // =========================
    // EPIC
    // =========================

    "紫電剣":{
      type:"purpleThunder",
      name:"紫電一閃",
      text:"💜 6が出るたび追加ダメージ +12"
    },

    "魔導ブレード":{
      type:"magicBurst",
      name:"魔力暴走",
      text:"🔮 ゾロ目成立で追加ダメージ +25"
    },

    "鬼神の刀":{
      type:"oniRage",
      name:"鬼神乱舞",
      text:"👹 クリティカル時さらに追加ダメージ +35"
    },


    // =========================
    // LEGEND
    // =========================

    "炎龍剣":{
      type:"dragonFlame",
      name:"炎龍咆哮",
      text:"🔥 攻撃時25%で追加ダメージ +40"
    },

    "王者の聖剣":{
      type:"kingJudgment",
      name:"王者の裁き",
      text:"👑 ダイス合計15以上で追加ダメージ +45"
    },

    "天雷剣":{
      type:"heavenThunder",
      name:"天雷",
      text:"⚡ 6が2個以上なら追加ダメージ +60"
    },


    // =========================
    // GOD
    // =========================

    "神滅剣・アポカリプス":{
      type:"apocalypse",
      name:"神滅",
      text:"🌈 毎攻撃 ダイス合計の75%を追加ダメージ"
    },

    "終焉の魔剣":{
      type:"endOfWorld",
      name:"終焉",
      text:"💀 敵HP30%以下なら追加ダメージ +80"
    },

    "創世神の剣":{
      type:"genesis",
      name:"創世",
      text:"✨ 毎攻撃 固定追加ダメージ +50"
    }

  };


  // =====================================================
  // 固有スキル取得
  // =====================================================

  const oldGetAwakeningAbility =
    getAwakeningAbility;


  getAwakeningAbility =
  function(item){

    const baseName =
      typeof getBaseName ===
      "function"
      ? getBaseName(item)
      : item.name;


    /*
      装備専用スキルがある場合
    */

    if(
      uniqueAwakeningSkills[
        baseName
      ]
    ){

      return {
        ...uniqueAwakeningSkills[
          baseName
        ]
      };

    }


    /*
      固有設定がない装備は
      今までの覚醒能力を維持
    */

    return oldGetAwakeningAbility(
      item
    );

  };


  // =====================================================
  // 既存★1・★2について
  //
  // セーブ済み装備は勝手に書き換えない。
  // 今後合成した装備から新倍率を使用。
  //
  // 後で必要なら既存装備の
  // 再計算機能を追加可能。
  // =====================================================


  console.log(
    "UPGRADE SYSTEM V1 READY"
  );

})();
// =====================================================
// UPGRADE SYSTEM Ver.2
// 合成処理そのものを新倍率へ変更
//
// 無印 → ★1 = 元攻撃力 ×2.5
// ★1   → ★2 = 元攻撃力 ×6.25 + 固有スキル
// =====================================================

(() => {

  if(window.__UPGRADE_SYSTEM_V2__) return;
  window.__UPGRADE_SYSTEM_V2__ = true;


  function upgradeBaseAtk(item){

    return Number(
      item.originalAtk ||
      item.atk ||
      0
    );

  }


  // =====================================================
  // 合成本体を上書き
  // =====================================================

  synthesizeItem =
  function(item){

    const stars =
      getStars(item);


    // ★2より上は現在作らない
    if(stars >= 2){
      return;
    }


    const count =
      synthesisCount(item);


    // 同段階を10個必要
    if(count < 10){
      return;
    }


    // ===================================================
    // 現在装備中か確認
    // ===================================================

    const wasEquipped =

      getBaseName(weapon) ===
      getBaseName(item)

      &&

      getStars(weapon) ===
      stars;


    // ===================================================
    // 同じ装備10個消費
    // ===================================================

    let removed = 0;


    inventory =
      inventory.filter(x=>{

        if(
          removed < 10 &&
          sameSynthesisItem(
            x,
            item
          )
        ){

          removed++;

          return false;

        }


        return true;

      });


    let evolved;


    // ===================================================
    // 無印 → ★1
    //
    // 元攻撃力 ×2.5
    // ===================================================

    if(stars === 0){

      const originalAtk =
        upgradeBaseAtk(item);


      const newAtk =
        Math.ceil(
          originalAtk * 2.5
        );


      evolved = {

        ...item,

        baseName:
          getBaseName(item),

        originalAtk:
          originalAtk,

        stars:1,

        atk:
          newAtk

      };


      delete evolved.count;


      inventory.push(
        evolved
      );


      if(wasEquipped){

        weapon =
          evolved;

      }


      saveGame();


      /*
        今までの★1演出は
        そのまま利用
      */

      showLimitBreak(
        evolved
      );

    }


    // ===================================================
    // ★1 → ★2
    //
    // 元攻撃力 ×6.25
    // + 固有覚醒スキル
    // ===================================================

    else{

      const originalAtk =
        Number(
          item.originalAtk ||
          (
            Number(item.atk || 0)
            / 2.5
          )
        );


      const newAtk =
        Math.ceil(
          originalAtk * 6.25
        );


      const ability =
        getAwakeningAbility(
          item
        );


      evolved = {

        ...item,

        baseName:
          getBaseName(item),

        originalAtk:
          originalAtk,

        stars:2,

        awakened:true,

        atk:
          newAtk,

        awakeningType:
          ability.type,

        awakeningName:
          ability.name,

        awakeningText:
          ability.text

      };


      delete evolved.count;


      inventory.push(
        evolved
      );


      if(wasEquipped){

        weapon =
          evolved;

      }


      saveGame();


      /*
        今までの★2覚醒演出
      */

      showAwakening(
        evolved
      );

    }


    update();

  };


  console.log(
    "UPGRADE SYSTEM V2 ACTIVE"
  );

})();
