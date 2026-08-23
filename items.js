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
