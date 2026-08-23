// ONE PERCENT DROP - ITEMS
// 回復アイテム・消耗品システム
// =====================================================
// ITEMS Ver.1
// HEALING ITEM SYSTEM
// =====================================================

(() => {

  if (window.__ONE_PERCENT_ITEMS_V1__) return;
  window.__ONE_PERCENT_ITEMS_V1__ = true;


  // =====================================================
  // SAVE KEY
  // =====================================================

  const ITEM_SAVE_KEY =
    "onePercentDropConsumablesV1";

  const GUARD_SAVE_KEY =
    "onePercentDropGuardBuffV1";


  // =====================================================
  // ITEM DATA
  // =====================================================

  const itemDefinitions = {

    potion: {
      id: "potion",
      name: "ポーション",
      icon: "🧪",
      description: "HPを20回復",
      heal: 20
    },

    highPotion: {
      id: "highPotion",
      name: "ハイポーション",
      icon: "🧪",
      description: "HPを40回復",
      heal: 40
    },

    elixir: {
      id: "elixir",
      name: "エリクサー",
      icon: "❤️",
      description: "HPを全回復",
      fullHeal: true
    },

    guardPotion: {
      id: "guardPotion",
      name: "守護薬",
      icon: "🛡️",
      description: "次の敵攻撃を50%軽減",
      guard: true
    }

  };


  // =====================================================
  // INVENTORY
  // =====================================================

  let consumables = {
    potion: 0,
    highPotion: 0,
    elixir: 0,
    guardPotion: 0
  };


  let guardBuff =
    false;


  // =====================================================
  // LOAD
  // =====================================================

  function loadItems(){

    try{

      const saved =
        localStorage.getItem(
          ITEM_SAVE_KEY
        );


      if(saved){

        const data =
          JSON.parse(saved);


        consumables = {
          ...consumables,
          ...data
        };

      }else{

        /*
          SHOP未実装なので
          初回テスト用に配布
        */

        consumables = {
          potion: 5,
          highPotion: 3,
          elixir: 1,
          guardPotion: 3
        };


        saveItems();

      }


      guardBuff =
        localStorage.getItem(
          GUARD_SAVE_KEY
        ) === "1";


    }catch(e){

      console.log(
        "ITEM LOAD ERROR",
        e
      );

    }

  }


  // =====================================================
  // SAVE
  // =====================================================

  function saveItems(){

    try{

      localStorage.setItem(
        ITEM_SAVE_KEY,
        JSON.stringify(
          consumables
        )
      );


      localStorage.setItem(
        GUARD_SAVE_KEY,
        guardBuff
          ? "1"
          : "0"
      );


    }catch(e){

      console.log(
        "ITEM SAVE ERROR",
        e
      );

    }

  }


  loadItems();


  // =====================================================
  // STYLE
  // =====================================================

  const itemStyle =
    document.createElement(
      "style"
    );


  itemStyle.textContent = `

    #itemMenuButton{

      width:100%;

      margin-top:12px;

      padding:14px;

      border:1px solid #424d72;

      border-radius:15px;

      background:
        linear-gradient(
          180deg,
          #202946,
          #11172d
        );

      color:white;

      font-size:15px;

      font-weight:1000;

      letter-spacing:1px;

      cursor:pointer;

    }


    #itemMenuButton:active{

      transform:
        translateY(2px);

    }


    #itemOverlay{

      position:fixed;

      inset:0;

      z-index:400000;

      display:none;

      align-items:center;

      justify-content:center;

      padding:18px;

      background:
        rgba(2,4,12,.96);

      color:white;

    }


    #itemOverlay.show{

      display:flex;

    }


    .itemMenuPanel{

      width:
        min(94vw,430px);

      max-height:82vh;

      overflow-y:auto;

      padding:20px;

      border-radius:22px;

      border:
        1px solid #414d73;

      background:
        linear-gradient(
          145deg,
          #171e38,
          #090e1e
        );

    }


    .itemMenuHeader{

      text-align:center;

      margin-bottom:18px;

    }


    .itemMenuTitle{

      font-size:26px;

      font-weight:1000;

    }


    .itemMenuHp{

      margin-top:7px;

      color:#69e6b5;

      font-size:13px;

      font-weight:900;

    }


    .itemCard{

      display:grid;

      grid-template-columns:
        54px 1fr auto;

      align-items:center;

      gap:11px;

      margin-top:10px;

      padding:13px;

      border-radius:15px;

      border:
        1px solid #36415f;

      background:#10172b;

    }


    .itemCardIcon{

      font-size:34px;

      text-align:center;

    }


    .itemCardName{

      font-size:15px;

      font-weight:1000;

    }


    .itemCardDescription{

      margin-top:3px;

      color:#9faac8;

      font-size:11px;

      line-height:1.35;

    }


    .itemCardCount{

      margin-top:5px;

      color:#ffe166;

      font-size:12px;

      font-weight:1000;

    }


    .itemUseButton{

      min-width:66px;

      padding:11px 8px;

      border:0;

      border-radius:11px;

      background:#ffe04d;

      color:#171100;

      font-size:12px;

      font-weight:1000;

    }


    .itemUseButton:disabled{

      background:#292f43;

      color:#6f7893;

      opacity:.65;

    }


    #itemCloseButton{

      width:100%;

      margin-top:18px;

      padding:13px;

      border:
        1px solid #414b69;

      border-radius:12px;

      background:#242b40;

      color:white;

      font-weight:1000;

    }


    .guardBuffBadge{

      margin-top:8px;

      padding:7px 10px;

      border-radius:999px;

      display:inline-block;

      color:#7beaff;

      background:
        rgba(35,175,255,.12);

      border:
        1px solid #38caff;

      font-size:11px;

      font-weight:1000;

      box-shadow:
        0 0 12px
        rgba(35,200,255,.20);

    }

  `;


  document.head.appendChild(
    itemStyle
  );


  // =====================================================
  // OVERLAY
  // =====================================================

  const itemOverlay =
    document.createElement(
      "div"
    );


  itemOverlay.id =
    "itemOverlay";


  itemOverlay.innerHTML = `

    <div class="itemMenuPanel">

      <div class="itemMenuHeader">

        <div class="itemMenuTitle">
          🎒 ITEMS
        </div>

        <div
          class="itemMenuHp"
          id="itemMenuHp"
        >
        </div>

        <div
          id="guardBuffStatus"
        >
        </div>

      </div>


      <div id="itemMenuList"></div>


      <button
        id="itemCloseButton"
        type="button"
      >
        閉じる
      </button>

    </div>

  `;


  document.body.appendChild(
    itemOverlay
  );


  // =====================================================
  // ITEM BUTTON
  // =====================================================

  const itemMenuButton =
    document.createElement(
      "button"
    );


  itemMenuButton.id =
    "itemMenuButton";

  itemMenuButton.type =
    "button";

  itemMenuButton.textContent =
    "🎒 ITEM";


  /*
    攻撃ボタン周辺に追加
  */

  const attackButton =
    document.getElementById(
      "attackBtn"
    );


  if(attackButton){

    attackButton.insertAdjacentElement(
      "afterend",
      itemMenuButton
    );

  }


  // =====================================================
  // MENU RENDER
  // =====================================================

  function renderItemMenu(){

    const hpText =
      document.getElementById(
        "itemMenuHp"
      );


    if(
      hpText &&
      typeof playerHp !== "undefined" &&
      typeof playerMaxHp !== "undefined"
    ){

      hpText.textContent =
        "HP " +
        playerHp +
        " / " +
        playerMaxHp;

    }


    const guardStatus =
      document.getElementById(
        "guardBuffStatus"
      );


    if(guardStatus){

      guardStatus.innerHTML =
        guardBuff
        ? `
          <div class="guardBuffBadge">
            🛡️ 守護薬 ACTIVE
            ・次の攻撃50%軽減
          </div>
        `
        : "";

    }


    const list =
      document.getElementById(
        "itemMenuList"
      );


    if(!list) return;


    list.innerHTML = "";


    Object.values(
      itemDefinitions
    )
    .forEach(item=>{

      const count =
        Number(
          consumables[item.id] || 0
        );


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "itemCard";


      card.innerHTML = `

        <div class="itemCardIcon">
          ${item.icon}
        </div>


        <div>

          <div class="itemCardName">
            ${item.name}
          </div>


          <div class="itemCardDescription">
            ${item.description}
          </div>


          <div class="itemCardCount">
            所持 ×${count}
          </div>

        </div>


        <button
          type="button"
          class="itemUseButton"
          ${count <= 0 ? "disabled" : ""}
        >
          使用
        </button>

      `;


      const button =
        card.querySelector(
          ".itemUseButton"
        );


      if(count > 0){

        button.addEventListener(
          "click",
          ()=>{

            useConsumable(
              item.id
            );

          }
        );

      }


      list.appendChild(
        card
      );

    });

  }


  // =====================================================
  // OPEN / CLOSE
  // =====================================================

  function openItemMenu(){

    renderItemMenu();

    itemOverlay.classList.add(
      "show"
    );

  }


  function closeItemMenu(){

    itemOverlay.classList.remove(
      "show"
    );

  }


  itemMenuButton.addEventListener(
    "click",
    openItemMenu
  );


  document
    .getElementById(
      "itemCloseButton"
    )
    .addEventListener(
      "click",
      closeItemMenu
    );


  // =====================================================
  // SIMPLE EFFECT
  // =====================================================

  function itemHealEffect(
    amountText
  ){

    if(
      typeof superFlash ===
      "function"
    ){

      superFlash(
        "#7affc1",
        150
      );

    }


    if(
      typeof vibrate ===
      "function"
    ){

      vibrate([
        35,
        25,
        60
      ]);

    }


    if(
      typeof tone ===
      "function"
    ){

      tone(
        520,
        .12,
        "sine",
        .05
      );

      tone(
        660,
        .14,
        "sine",
        .055,
        .10
      );

      tone(
        880,
        .20,
        "sine",
        .06,
        .21
      );

    }


    const message =
      document.getElementById(
        "message"
      );


    if(message){

      message.innerHTML =
        "✨ <b>" +
        amountText +
        "</b>";

    }

  }


  // =====================================================
  // USE ITEM
  // =====================================================

  function useConsumable(
    itemId
  ){

    const item =
      itemDefinitions[
        itemId
      ];


    if(!item) return;


    if(
      Number(
        consumables[itemId] || 0
      ) <= 0
    ){

      return;

    }


    // -------------------------
    // 回復アイテム
    // -------------------------

    if(
      item.heal ||
      item.fullHeal
    ){

      if(
        typeof playerHp ===
          "undefined" ||
        typeof playerMaxHp ===
          "undefined"
      ){

        return;

      }


      /*
        HP満タンなら消費しない
      */

      if(
        playerHp >=
        playerMaxHp
      ){

        const message =
          document.getElementById(
            "message"
          );


        if(message){

          message.textContent =
            "HPはすでに満タンです。";

        }


        closeItemMenu();

        return;

      }


      const before =
        playerHp;


      if(item.fullHeal){

        playerHp =
          playerMaxHp;

      }else{

        playerHp =
          Math.min(
            playerMaxHp,
            playerHp +
            item.heal
          );

      }


      const healed =
        playerHp -
        before;


      consumables[itemId]--;


      saveItems();


      itemHealEffect(
        item.icon +
        " " +
        item.name +
        "　HP +" +
        healed
      );

    }


    // -------------------------
    // 守護薬
    // -------------------------

    else if(
      item.guard
    ){

      /*
        既に発動中なら
        重ね掛け不可
      */

      if(guardBuff){

        const message =
          document.getElementById(
            "message"
          );


        if(message){

          message.textContent =
            "🛡️ 守護薬はすでに発動中です。";

        }


        closeItemMenu();

        return;

      }


      guardBuff =
        true;


      consumables[itemId]--;


      saveItems();


      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#48d8ff",
          150
        );

      }


      if(
        typeof vibrate ===
        "function"
      ){

        vibrate([
          50,
          30,
          80
        ]);

      }


      const message =
        document.getElementById(
          "message"
        );


      if(message){

        message.innerHTML =
          "🛡️ <b>守護薬発動！</b><br>" +
          "次の敵攻撃を50%軽減";

      }

    }


    /*
      GAME UI更新
    */

    if(
      typeof update ===
      "function"
    ){

      update();

    }


    if(
      typeof updateDangerSystem ===
      "function"
    ){

      updateDangerSystem();

    }


    renderItemMenu();

    closeItemMenu();

  }


  // =====================================================
  // 守護薬をダメージ計算に接続
  // =====================================================

  if(
    typeof calculateArmorDamage ===
    "function"
  ){

    const oldCalculateArmorDamage =
      calculateArmorDamage;


    calculateArmorDamage =
    function(rawDamage){

      let damage =
        oldCalculateArmorDamage(
          rawDamage
        );


      if(guardBuff){

        damage =
          Math.ceil(
            damage * .5
          );

      }


      return Math.max(
        1,
        damage
      );

    };

  }


  // =====================================================
  // 敵攻撃後に守護薬を1回消費
  // =====================================================

  if(
    typeof enemyAttack ===
    "function"
  ){

    const oldEnemyAttack =
      enemyAttack;


    enemyAttack =
    function(){

      const hadGuard =
        guardBuff;


      oldEnemyAttack();


      /*
        攻撃を受けたら解除
      */

      if(hadGuard){

        guardBuff =
          false;


        saveItems();


        setTimeout(()=>{

          if(
            typeof updateDangerSystem ===
            "function"
          ){

            updateDangerSystem();

          }


          if(
            typeof update ===
            "function"
          ){

            update();

          }

        },50);

      }

    };

  }


  // =====================================================
  // GLOBAL ACCESS
  // 後のSHOPから使う
  // =====================================================

  window.ONE_PERCENT_ITEMS = {

    getAll(){

      return {
        ...consumables
      };

    },


    add(
      itemId,
      amount=1
    ){

      if(
        !(itemId in consumables)
      ){

        return false;

      }


      consumables[itemId] +=
        Math.max(
          0,
          Math.floor(amount)
        );


      saveItems();

      renderItemMenu();

      return true;

    },


    definitions:
      itemDefinitions

  };


  // =====================================================
  // INITIAL UI
  // =====================================================

  renderItemMenu();


  console.log(
    "ITEM SYSTEM V1 READY"
  );

})();

// =====================================================
// GOLD SYSTEM Ver.1
// ステージ連動GOLD・BONUS・保存
// =====================================================

(() => {

  // 二重追加防止
  if (window.__ONE_PERCENT_GOLD_V1__) return;
  window.__ONE_PERCENT_GOLD_V1__ = true;


  // =====================================================
  // SAVE
  // =====================================================

  const GOLD_SAVE_KEY =
    "onePercentDropGoldV1";


  let playerGold =
    Number(
      localStorage.getItem(
        GOLD_SAVE_KEY
      ) || 0
    );


  function saveGold(){

    try{

      localStorage.setItem(
        GOLD_SAVE_KEY,
        String(playerGold)
      );

    }catch(e){

      console.log(
        "GOLD SAVE ERROR",
        e
      );

    }

  }


  // =====================================================
  // GOLD表示CSS
  // =====================================================

  const goldStyle =
    document.createElement(
      "style"
    );


  goldStyle.textContent = `

    #goldDisplay{

      margin-top:10px;

      padding:
        10px 14px;

      border-radius:
        14px;

      border:
        1px solid #66551d;

      background:
        linear-gradient(
          135deg,
          #282311,
          #151309
        );

      color:#ffe36a;

      font-size:14px;

      font-weight:1000;

      text-align:center;

      letter-spacing:1px;

      box-shadow:
        inset 0 0 15px
        rgba(255,210,40,.08);

    }


    #goldDisplay strong{

      margin-left:7px;

      color:#fff1a1;

      font-size:18px;

    }


    .goldGainPopup{

      position:fixed;

      left:50%;

      top:28%;

      z-index:350000;

      transform:
        translateX(-50%)
        scale(.7);

      opacity:0;

      pointer-events:none;

      padding:
        10px 18px;

      border-radius:
        999px;

      color:#251800;

      background:
        linear-gradient(
          #fff7a3,
          #ffd42d
        );

      border:
        2px solid white;

      font-size:23px;

      font-weight:1000;

      box-shadow:
        0 0 15px white,
        0 0 35px
        rgba(255,210,0,.7);

      animation:
        goldGainPop
        1.15s
        cubic-bezier(.15,1.4,.3,1)
        forwards;

    }


    @keyframes goldGainPop{

      0%{

        opacity:0;

        transform:
          translateX(-50%)
          scale(.55)
          translateY(20px);

      }


      22%{

        opacity:1;

        transform:
          translateX(-50%)
          scale(1.12)
          translateY(0);

      }


      70%{

        opacity:1;

      }


      100%{

        opacity:0;

        transform:
          translateX(-50%)
          scale(.95)
          translateY(-45px);

      }

    }


    .goldBonusText{

      display:block;

      margin-bottom:3px;

      color:#e75118;

      font-size:11px;

      letter-spacing:2px;

    }

  `;


  document.head.appendChild(
    goldStyle
  );


  // =====================================================
  // GOLD表示を作る
  // =====================================================

  const goldDisplay =
    document.createElement(
      "div"
    );


  goldDisplay.id =
    "goldDisplay";


  goldDisplay.innerHTML = `

    💰 GOLD

    <strong id="goldAmount">
      0G
    </strong>

  `;


  /*
    上部ステータスの下へ追加
  */

  const topStats =
    document.querySelector(
      ".topStats"
    );


  if(topStats){

    topStats.insertAdjacentElement(
      "afterend",
      goldDisplay
    );

  }


  // =====================================================
  // 表示更新
  // =====================================================

  function updateGoldDisplay(){

    const amount =
      document.getElementById(
        "goldAmount"
      );


    if(!amount) return;


    amount.textContent =
      playerGold.toLocaleString(
        "ja-JP"
      ) + "G";

  }


  updateGoldDisplay();


  // =====================================================
  // GOLD報酬計算
  // =====================================================

  function calculateGoldReward(){

    /*
      stageは内部では0始まりなので
      画面上のSTAGE番号へ変換
    */

    const stageNumber =
      typeof stage !== "undefined"
      ? Number(stage) + 1
      : 1;


    /*
      基本式

      30
      +
      ステージ × 12
      +
      ランダム0〜30
    */

    const randomBonus =
      typeof rand === "function"
      ? rand(0,30)
      : Math.floor(
          Math.random() * 31
        );


    let gold =
      30 +
      stageNumber * 12 +
      randomBonus;


    // -------------------------
    // GOLD BONUS抽選
    // -------------------------

    const bonusRoll =
      Math.random();


    let multiplier = 1;

    let bonusName = "";


    /*
      1%で ×3
    */

    if(
      bonusRoll < .01
    ){

      multiplier = 3;

      bonusName =
        "💰 SUPER GOLD BONUS ×3";

    }


    /*
      次の5%で ×2
    */

    else if(
      bonusRoll < .06
    ){

      multiplier = 2;

      bonusName =
        "✨ GOLD BONUS ×2";

    }


    gold *= multiplier;


    return {

      amount:
        Math.floor(gold),

      multiplier,

      bonusName,

      stageNumber

    };

  }


  // =====================================================
  // GOLD獲得演出
  // =====================================================

  function showGoldGain(
    reward
  ){

    const popup =
      document.createElement(
        "div"
      );


    popup.className =
      "goldGainPopup";


    popup.innerHTML = `

      ${
        reward.bonusName
        ? `
          <span class="goldBonusText">
            ${reward.bonusName}
          </span>
        `
        : ""
      }

      +${reward.amount.toLocaleString(
        "ja-JP"
      )}G

    `;


    document.body.appendChild(
      popup
    );


    /*
      軽いコイン音
    */

    if(
      typeof tone ===
      "function"
    ){

      tone(
        700,
        .07,
        "sine",
        .045
      );


      tone(
        920,
        .08,
        "sine",
        .05,
        .07
      );


      tone(
        1180,
        .12,
        "sine",
        .05,
        .15
      );

    }


    if(
      reward.multiplier >= 2
    ){

      if(
        typeof vibrate ===
        "function"
      ){

        vibrate(
          reward.multiplier === 3
          ? [45,25,75]
          : 40
        );

      }


      if(
        typeof superFlash ===
        "function"
      ){

        superFlash(
          "#ffe45a",
          110
        );

      }

    }


    setTimeout(()=>{

      popup.remove();

    },1250);

  }


  // =====================================================
  // GOLD追加
  // =====================================================

  function addGold(
    amount,
    showEffect=false,
    rewardData=null
  ){

    const value =
      Math.max(
        0,
        Math.floor(
          Number(amount) || 0
        )
      );


    if(value <= 0){

      return false;

    }


    playerGold +=
      value;


    saveGold();

    updateGoldDisplay();


    if(showEffect){

      showGoldGain(
        rewardData || {
          amount:value,
          multiplier:1,
          bonusName:""
        }
      );

    }


    return true;

  }


  // =====================================================
  // GOLD消費
  // SHOP用
  // =====================================================

  function spendGold(
    amount
  ){

    const value =
      Math.max(
        0,
        Math.floor(
          Number(amount) || 0
        )
      );


    if(
      value <= 0 ||
      playerGold < value
    ){

      return false;

    }


    playerGold -=
      value;


    saveGold();

    updateGoldDisplay();


    return true;

  }


  // =====================================================
  // 敵撃破時にGOLD獲得
  //
  // DROP表示が始まる瞬間を利用。
  // 同じ撃破で二重取得しないように
  // killsでガード。
  // =====================================================

  if(
    typeof showDrop ===
    "function"
  ){

    const oldShowDropGold =
      showDrop;


    let lastGoldKill =
      typeof kills !== "undefined"
      ? Number(kills)
      : 0;


    showDrop =
    function(item){

      /*
        実際の撃破数が増えていた場合だけ
        GOLDを追加
      */

      const currentKills =
        typeof kills !== "undefined"
        ? Number(kills)
        : lastGoldKill + 1;


      if(
        currentKills >
        lastGoldKill
      ){

        const defeatedCount =
          currentKills -
          lastGoldKill;


        /*
          万一一気に複数増えても対応
        */

        for(
          let i=0;
          i<defeatedCount;
          i++
        ){

          const reward =
            calculateGoldReward();


          addGold(
            reward.amount,
            true,
            reward
          );

        }


        lastGoldKill =
          currentKills;

      }


      /*
        元のDROP処理へ
      */

      return oldShowDropGold(
        item
      );

    };

  }


  // =====================================================
  // SHOPなどから使えるAPI
  // =====================================================

  window.ONE_PERCENT_GOLD = {

    get(){

      return playerGold;

    },


    add(
      amount
    ){

      return addGold(
        amount,
        false
      );

    },


    spend(
      amount
    ){

      return spendGold(
        amount
      );

    },


    canAfford(
      amount
    ){

      return (
        playerGold >=
        Number(amount || 0)
      );

    },


    refresh(){

      updateGoldDisplay();

    },


    /*
      開発テスト用
    */

    testAdd(
      amount=1000
    ){

      addGold(
        amount,
        true,
        {
          amount,
          multiplier:1,
          bonusName:
            "🛠️ DEV GOLD"
        }
      );

    }

  };


  console.log(
    "GOLD SYSTEM V1 READY"
  );

})();

// =====================================================
// SHOP SYSTEM Ver.1
// 消耗品・特殊アイテム購入
// =====================================================

(() => {

  if (window.__ONE_PERCENT_SHOP_V1__) return;
  window.__ONE_PERCENT_SHOP_V1__ = true;


  // =====================================================
  // SHOP専用SAVE
  // =====================================================

  const SHOP_SAVE_KEY =
    "onePercentDropShopItemsV1";


  let specialItems = {
    reviveStone: 0,
    gachaTicket: 0,
    fateKey: 0,
    mysteryShard: 0
  };


  function loadSpecialItems(){

    try{

      const saved =
        localStorage.getItem(
          SHOP_SAVE_KEY
        );


      if(saved){

        specialItems = {
          ...specialItems,
          ...JSON.parse(saved)
        };

      }

    }catch(e){

      console.log(
        "SHOP ITEM LOAD ERROR",
        e
      );

    }

  }


  function saveSpecialItems(){

    try{

      localStorage.setItem(
        SHOP_SAVE_KEY,
        JSON.stringify(
          specialItems
        )
      );

    }catch(e){

      console.log(
        "SHOP ITEM SAVE ERROR",
        e
      );

    }

  }


  loadSpecialItems();


  // =====================================================
  // SHOP商品
  // =====================================================

  const shopProducts = [

    {
      id:"potion",
      icon:"🧪",
      name:"ポーション",
      description:"HPを20回復",
      price:250,
      type:"consumable"
    },

    {
      id:"highPotion",
      icon:"🧪",
      name:"ハイポーション",
      description:"HPを40回復",
      price:700,
      type:"consumable"
    },

    {
      id:"elixir",
      icon:"❤️",
      name:"エリクサー",
      description:"HPを全回復",
      price:2000,
      type:"consumable"
    },

    {
      id:"reviveStone",
      icon:"🔥",
      name:"蘇生石",
      description:
        "死亡時にHP30%で復活",
      price:3500,
      type:"special"
    },

    {
      id:"gachaTicket",
      icon:"🎫",
      name:"装備ガチャチケット",
      description:
        "装備ガチャを1回引ける",
      price:2500,
      type:"special"
    },

    {
      id:"fateKey",
      icon:"🗝️",
      name:"運命の鍵",
      description:
        "特殊な扉を開く謎の鍵",
      price:5000,
      type:"special"
    },

    {
      id:"mysteryShard",
      icon:"💎",
      name:"神秘の欠片",
      description:
        "10個集めると何かが起こる…",
      price:10000,
      type:"special"
    }

  ];


  // =====================================================
  // CSS
  // =====================================================

  const shopStyle =
    document.createElement("style");


  shopStyle.textContent = `

    #shopButton{

      width:100%;

      margin-top:10px;

      padding:15px;

      border:1px solid #66531d;

      border-radius:15px;

      background:
        linear-gradient(
          180deg,
          #30270e,
          #171205
        );

      color:#ffe266;

      font-size:16px;

      font-weight:1000;

      letter-spacing:1px;

    }


    #shopOverlay{

      position:fixed;

      inset:0;

      z-index:420000;

      display:none;

      align-items:center;

      justify-content:center;

      padding:16px;

      background:
        rgba(2,4,10,.97);

      color:white;

    }


    #shopOverlay.show{

      display:flex;

    }


    .shopPanel{

      width:min(95vw,440px);

      max-height:88vh;

      overflow-y:auto;

      padding:20px;

      border-radius:23px;

      border:
        1px solid #66551f;

      background:
        linear-gradient(
          150deg,
          #1f1a0b,
          #0c0f1c
        );

      box-shadow:
        0 20px 55px
        rgba(0,0,0,.6);

    }


    .shopHeader{

      text-align:center;

      margin-bottom:17px;

    }


    .shopTitle{

      font-size:28px;

      font-weight:1000;

      color:#ffe169;

    }


    .shopGold{

      margin-top:7px;

      color:#fff1a1;

      font-size:15px;

      font-weight:1000;

    }


    .shopProduct{

      display:grid;

      grid-template-columns:
        52px 1fr auto;

      gap:10px;

      align-items:center;

      margin-top:10px;

      padding:13px;

      border-radius:15px;

      border:
        1px solid #454b64;

      background:#11172a;

    }


    .shopIcon{

      font-size:34px;

      text-align:center;

    }


    .shopName{

      font-size:14px;

      font-weight:1000;

    }


    .shopDesc{

      margin-top:3px;

      color:#99a3bf;

      font-size:11px;

      line-height:1.35;

    }


    .shopOwned{

      margin-top:5px;

      color:#63dcff;

      font-size:11px;

      font-weight:900;

    }


    .shopBuyArea{

      text-align:right;

    }


    .shopPrice{

      margin-bottom:6px;

      color:#ffe160;

      font-size:13px;

      font-weight:1000;

    }


    .shopBuyBtn{

      min-width:73px;

      padding:10px 8px;

      border:0;

      border-radius:10px;

      background:#ffe04d;

      color:#1b1300;

      font-size:11px;

      font-weight:1000;

    }


    .shopBuyBtn:disabled{

      background:#2a2f42;

      color:#747d94;

    }


    .shopNeedGold{

      margin-top:5px;

      color:#ff7a82;

      font-size:9px;

      font-weight:900;

    }


    #shopCloseButton{

      width:100%;

      margin-top:20px;

      padding:13px;

      border:
        1px solid #454c67;

      border-radius:12px;

      background:#242b3f;

      color:white;

      font-weight:1000;

    }


    .shopPurchaseFlash{

      position:fixed;

      left:50%;

      top:35%;

      z-index:500000;

      transform:
        translate(-50%,-50%);

      padding:14px 22px;

      border-radius:999px;

      background:
        linear-gradient(
          #fff7a8,
          #ffd32f
        );

      color:#211600;

      font-size:19px;

      font-weight:1000;

      pointer-events:none;

      animation:
        shopPurchasePop
        .85s
        forwards;

    }


    @keyframes shopPurchasePop{

      0%{
        opacity:0;
        transform:
          translate(-50%,-50%)
          scale(.6);
      }

      25%{
        opacity:1;
        transform:
          translate(-50%,-50%)
          scale(1.1);
      }

      100%{
        opacity:0;
        transform:
          translate(-50%,-75%)
          scale(.95);
      }

    }

  `;


  document.head.appendChild(
    shopStyle
  );


  // =====================================================
  // SHOPボタン
  // =====================================================

  const shopButton =
    document.createElement(
      "button"
    );


  shopButton.id =
    "shopButton";


  shopButton.textContent =
    "🏪 SHOP";


  /*
    ITEMボタンの下へ
  */

  const itemButton =
    document.getElementById(
      "itemMenuButton"
    );


  if(itemButton){

    itemButton.insertAdjacentElement(
      "afterend",
      shopButton
    );

  }


  // =====================================================
  // SHOP OVERLAY
  // =====================================================

  const shopOverlay =
    document.createElement(
      "div"
    );


  shopOverlay.id =
    "shopOverlay";


  shopOverlay.innerHTML = `

    <div class="shopPanel">

      <div class="shopHeader">

        <div class="shopTitle">
          🏪 SHOP
        </div>

        <div
          class="shopGold"
          id="shopGold"
        >
        </div>

      </div>


      <div id="shopProductList"></div>


      <button
        id="shopCloseButton"
        type="button"
      >
        閉じる
      </button>

    </div>

  `;


  document.body.appendChild(
    shopOverlay
  );


  // =====================================================
  // 所持数取得
  // =====================================================

  function getOwnedCount(
    product
  ){

    if(
      product.type ===
      "consumable"
    ){

      if(
        window.ONE_PERCENT_ITEMS &&
        typeof
        window.ONE_PERCENT_ITEMS
        .getAll === "function"
      ){

        const all =
          window.ONE_PERCENT_ITEMS
          .getAll();


        return Number(
          all[product.id] || 0
        );

      }


      return 0;

    }


    return Number(
      specialItems[
        product.id
      ] || 0
    );

  }


  // =====================================================
  // SHOP描画
  // =====================================================

  function renderShop(){

    const gold =
      window.ONE_PERCENT_GOLD
      ? window.ONE_PERCENT_GOLD.get()
      : 0;


    const goldText =
      document.getElementById(
        "shopGold"
      );


    if(goldText){

      goldText.textContent =
        "💰 " +
        gold.toLocaleString(
          "ja-JP"
        ) +
        "G";

    }


    const list =
      document.getElementById(
        "shopProductList"
      );


    if(!list) return;


    list.innerHTML = "";


    shopProducts.forEach(
      product=>{

        const owned =
          getOwnedCount(
            product
          );


        const canBuy =
          window.ONE_PERCENT_GOLD
          &&
          window.ONE_PERCENT_GOLD
          .canAfford(
            product.price
          );


        const missing =
          Math.max(
            0,
            product.price - gold
          );


        const card =
          document.createElement(
            "div"
          );


        card.className =
          "shopProduct";


        card.innerHTML = `

          <div class="shopIcon">
            ${product.icon}
          </div>


          <div>

            <div class="shopName">
              ${product.name}
            </div>


            <div class="shopDesc">
              ${product.description}
            </div>


            <div class="shopOwned">
              所持 ×${owned}
            </div>

          </div>


          <div class="shopBuyArea">

            <div class="shopPrice">
              ${product.price.toLocaleString(
                "ja-JP"
              )}G
            </div>


            <button
              class="shopBuyBtn"
              type="button"

              ${canBuy ? "" : "disabled"}
            >
              購入
            </button>


            ${
              !canBuy

              ? `
                <div class="shopNeedGold">
                  あと
                  ${missing.toLocaleString(
                    "ja-JP"
                  )}G
                </div>
              `

              : ""
            }

          </div>

        `;


        const button =
          card.querySelector(
            ".shopBuyBtn"
          );


        if(canBuy){

          button.addEventListener(
            "click",
            ()=>{

              buyProduct(
                product
              );

            }
          );

        }


        list.appendChild(
          card
        );

      }
    );

  }


  // =====================================================
  // 購入演出
  // =====================================================

  function showPurchaseEffect(
    product
  ){

    const pop =
      document.createElement(
        "div"
      );


    pop.className =
      "shopPurchaseFlash";


    pop.textContent =
      product.icon +
      " " +
      product.name +
      " GET!";


    document.body.appendChild(
      pop
    );


    if(
      typeof tone ===
      "function"
    ){

      tone(
        650,
        .08,
        "sine",
        .045
      );


      tone(
        900,
        .10,
        "sine",
        .05,
        .08
      );


      tone(
        1200,
        .15,
        "sine",
        .055,
        .17
      );

    }


    if(
      typeof vibrate ===
      "function"
    ){

      vibrate([
        30,
        20,
        50
      ]);

    }


    setTimeout(()=>{

      pop.remove();

    },900);

  }


  // =====================================================
  // 購入
  // =====================================================

  function buyProduct(
    product
  ){

    if(
      !window.ONE_PERCENT_GOLD
    ){
      return;
    }


    /*
      GOLD消費
    */

    const success =
      window.ONE_PERCENT_GOLD
      .spend(
        product.price
      );


    if(!success){

      renderShop();

      return;

    }


    // -------------------------
    // 回復アイテム
    // -------------------------

    if(
      product.type ===
      "consumable"
    ){

      if(
        window.ONE_PERCENT_ITEMS
      ){

        window.ONE_PERCENT_ITEMS.add(
          product.id,
          1
        );

      }

    }


    // -------------------------
    // 特殊アイテム
    // -------------------------

    else{

      specialItems[
        product.id
      ] =
        Number(
          specialItems[
            product.id
          ] || 0
        ) + 1;


      saveSpecialItems();

    }


    showPurchaseEffect(
      product
    );


    renderShop();

  }


  // =====================================================
  // OPEN / CLOSE
  // =====================================================

  function openShop(){

    renderShop();


    shopOverlay.classList.add(
      "show"
    );

  }


  function closeShop(){

    shopOverlay.classList.remove(
      "show"
    );

  }


  shopButton.addEventListener(
    "click",
    openShop
  );


  document
    .getElementById(
      "shopCloseButton"
    )
    .addEventListener(
      "click",
      closeShop
    );


  // =====================================================
  // GLOBAL API
  // 蘇生・ガチャ・鍵などで後から利用
  // =====================================================

  window.ONE_PERCENT_SPECIAL_ITEMS = {

    getAll(){

      return {
        ...specialItems
      };

    },


    get(
      id
    ){

      return Number(
        specialItems[id] || 0
      );

    },


    add(
      id,
      amount=1
    ){

      if(
        !(id in specialItems)
      ){
        return false;
      }


      specialItems[id] +=
        Math.max(
          0,
          Math.floor(amount)
        );


      saveSpecialItems();

      renderShop();

      return true;

    },


    use(
      id,
      amount=1
    ){

      const value =
        Math.max(
          1,
          Math.floor(amount)
        );


      if(
        !(id in specialItems)
        ||
        specialItems[id] <
        value
      ){

        return false;

      }


      specialItems[id] -=
        value;


      saveSpecialItems();

      renderShop();

      return true;

    }

  };


  console.log(
    "SHOP SYSTEM V1 READY"
  );

})();
