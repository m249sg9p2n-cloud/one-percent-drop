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
// =====================================================
// UPGRADE SYSTEM Ver.3
// 既存覚醒装備の新倍率への自動移行
//
// ★1 = 元攻撃力 ×2.5
// ★2 = 元攻撃力 ×6.25 + 固有スキル
// =====================================================

(() => {

  if (window.__UPGRADE_MIGRATION_V3__) return;
  window.__UPGRADE_MIGRATION_V3__ = true;


  const MIGRATION_KEY =
    "onePercentUpgradeMigrationV3";


  // =====================================================
  // 元攻撃力を推定
  // =====================================================

  function findOriginalAtk(item){

    if(!item) return 0;


    // すでに元攻撃力が保存されている
    if(
      Number(item.originalAtk) > 0
    ){

      return Number(
        item.originalAtk
      );

    }


    const stars =
      typeof getStars === "function"
      ? getStars(item)
      : Number(item.stars || 0);


    // 無印ならそのまま
    if(stars === 0){

      return Number(
        item.atk || 0
      );

    }


    /*
      既存★1・★2は、
      装備名から元データを探す
    */

    const baseName =
      typeof getBaseName === "function"
      ? getBaseName(item)
      : (
          item.baseName ||
          item.name
        );


    // lootから探す
    if(
      typeof loot !== "undefined"
    ){

      for(
        const rarity of
        Object.keys(loot)
      ){

        const found =
          loot[rarity]
          .find(x=>
            x.name === baseName
          );


        if(found){

          return Number(
            found.atk || 0
          );

        }

      }

    }


    /*
      lootから見つからない特殊武器用。

      最後の保険として
      既存性能から逆算。
    */

    if(stars === 1){

      return Math.max(
        1,
        Math.round(
          Number(item.atk || 0) /
          1.35
        )
      );

    }


    if(stars === 2){

      return Math.max(
        1,
        Math.round(
          Number(item.atk || 0) /
          2
        )
      );

    }


    return Number(
      item.atk || 0
    );

  }


  // =====================================================
  // 1個の装備を新ルールへ変換
  // =====================================================

  function migrateWeapon(item){

    if(!item){
      return item;
    }


    /*
      防具は今回は対象外
    */

    if(
      item.type === "armor"
    ){

      return item;

    }


    const stars =
      typeof getStars === "function"
      ? getStars(item)
      : Number(item.stars || 0);


    if(stars <= 0){

      return item;

    }


    const originalAtk =
      findOriginalAtk(
        item
      );


    if(originalAtk <= 0){

      return item;

    }


    const migrated = {
      ...item,

      originalAtk:
        originalAtk
    };


    // ===================================================
    // ★1
    // ===================================================

    if(stars === 1){

      migrated.atk =
        Math.ceil(
          originalAtk * 2.5
        );


      migrated.stars =
        1;


      return migrated;

    }


    // ===================================================
    // ★2
    // ===================================================

    if(stars >= 2){

      migrated.atk =
        Math.ceil(
          originalAtk * 6.25
        );


      migrated.stars =
        2;


      migrated.awakened =
        true;


      /*
        新しい固有スキルを付与
      */

      if(
        typeof getAwakeningAbility ===
        "function"
      ){

        const ability =
          getAwakeningAbility(
            migrated
          );


        if(ability){

          migrated.awakeningType =
            ability.type;

          migrated.awakeningName =
            ability.name;

          migrated.awakeningText =
            ability.text;

        }

      }


      return migrated;

    }


    return migrated;

  }


  // =====================================================
  // 全所持武器を変換
  // =====================================================

  function migrateAllWeapons(){

    /*
      すでに移行済みなら何もしない
    */

    if(
      localStorage.getItem(
        MIGRATION_KEY
      ) === "1"
    ){

      return;

    }


    let changed = false;


    // -------------------------
    // INVENTORY
    // -------------------------

    if(
      typeof inventory !==
      "undefined" &&
      Array.isArray(inventory)
    ){

      inventory =
        inventory.map(item=>{

          const stars =
            typeof getStars ===
            "function"
            ? getStars(item)
            : Number(
                item.stars || 0
              );


          if(
            stars > 0 &&
            item.type !== "armor"
          ){

            changed = true;

            return migrateWeapon(
              item
            );

          }


          return item;

        });

    }


    // -------------------------
    // 装備中武器
    // -------------------------

    if(
      typeof weapon !==
      "undefined" &&
      weapon
    ){

      const stars =
        typeof getStars ===
        "function"
        ? getStars(weapon)
        : Number(
            weapon.stars || 0
          );


      if(stars > 0){

        weapon =
          migrateWeapon(
            weapon
          );


        changed = true;

      }

    }


    // -------------------------
    // 保存
    // -------------------------

    if(changed){

      if(
        typeof saveGame ===
        "function"
      ){

        saveGame();

      }


      if(
        typeof update ===
        "function"
      ){

        update();

      }

    }


    /*
      移行済みフラグ
    */

    localStorage.setItem(
      MIGRATION_KEY,
      "1"
    );


    console.log(
      "OLD WEAPONS MIGRATED TO NEW AWAKENING SYSTEM"
    );

  }


  // =====================================================
  // 読み込み完了後に一度だけ実行
  // =====================================================

  setTimeout(()=>{

    migrateAllWeapons();

  },500);


  // =====================================================
  // DEV用
  //
  // もし後から倍率を変更して
  // 再移行したくなった時用
  // =====================================================

  window.ONE_PERCENT_UPGRADE = {

    remigrate(){

      localStorage.removeItem(
        MIGRATION_KEY
      );


      migrateAllWeapons();

    }

  };


  console.log(
    "UPGRADE MIGRATION V3 READY"
  );

})();
