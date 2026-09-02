// 内容数据层：第二章，紧接第一章的故事继续——同一个 GAME_CONTENT 对象，
// 直接往 scenes/vocabBank/skillMeta 里追加，不是新开一个游戏。
// index.html 里这个文件排在 chapter1.js 之后、main.js 之前加载。
//
// Tier: L1（跟第一章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章刻意不引入任何新 grammarTag——L1 这个级别横跨第1-3章，第二章只做新词汇场景
// （银行开户/租房/超市/wifi/邻里寒暄），全部复现第一章已经教过的10个语法点，
// 重点把第一章复现不够的 do-question / can-modal / will-future / present-continuous
// 挪到前几课优先接上（见第2/3/4/5课）。

GAME_CONTENT.scenes.push(
  {
    id: "old-photograph",
    title: "The Old Photograph",
    subtitle: "旧照片 · 信封里的线索",
    avatar: "👩",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look — it's an old photo. And an address.", zh: "你看——是一张旧照片，还有一个地址。" },
        skill: "greeting",
        grammarTag: "statement",
        choices: [
          { text: "Wow, this is old.", zh: "哇，这个好旧啊。", correct: true, xp: 10 },
          { text: "I don't like it.", correct: false }
        ],
        hintOnWrong: "表达惊讶（陈述句）→ Wow, this is old.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I don't recognize this address. Do you?", zh: "这个地址我不认识。你呢？" },
        skill: "greeting",
        grammarTag: "do-question",
        choices: [
          { text: "No. Do you know this street?", zh: "不认识。你知道这条街吗？", correct: true, xp: 10 },
          { text: "I live here.", correct: false }
        ],
        hintOnWrong: "反问对方 → Do you know this street?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No idea. But I know someone who might.", zh: "不知道。但我认识一个可能知道的人。" },
        skill: "greeting",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's go ask them.", zh: "我们去问问吧。", correct: true, xp: 10 },
          { text: "Goodbye.", correct: false }
        ],
        hintOnWrong: "提议一起行动 → Let's go ask them.",
        next: null
      }
    }
  },
  {
    id: "bank-account",
    title: "Opening an Account",
    subtitle: "枫叶银行 · 开一个新账户",
    avatar: "🏦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome! How can I help you today?", zh: "欢迎光临！今天需要什么帮助？" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "I want to open an account.", zh: "我想开一个账户。", correct: true, xp: 10 },
          { text: "I don't have money.", correct: false }
        ],
        hintOnWrong: "陈述需求（陈述句）→ I want to open an account.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Sure! Do you have your passport?", zh: "好的！你带护照了吗？" },
        skill: "banking",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, do you need my address too?", zh: "带了，你还需要我的地址吗？", correct: true, xp: 10 },
          { text: "No, I don't like it.", correct: false }
        ],
        hintOnWrong: "反问确认还需要什么 → Do you need my address too?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Just your passport is fine. One moment, please.", zh: "护照就够了。请稍等。" },
        skill: "banking",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, take your time.", zh: "谢谢，你慢慢来。", correct: true, xp: 10 },
          { text: "Hurry up.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you, take your time.",
        next: null
      }
    }
  },
  {
    id: "debit-card",
    title: "The Debit Card",
    subtitle: "枫叶银行 · 办一张借记卡",
    avatar: "🏦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "All done! Can I get you a debit card too?", zh: "都办好了！要不要顺便办一张借记卡？" },
        skill: "banking",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, can I choose the design?", zh: "要，我能自己选卡面设计吗？", correct: true, xp: 10 },
          { text: "No, I have enough.", correct: false }
        ],
        hintOnWrong: "用 can 提出请求 → Can I choose the design?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Of course! Here are your options.", zh: "当然可以！这些是你的选项。" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "I like this one.", zh: "我喜欢这个。", correct: true, xp: 10 },
          { text: "I don't know.", correct: false }
        ],
        hintOnWrong: "表达喜好（陈述句）→ I like this one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Great choice! It'll arrive by mail next week.", zh: "选得好！它下周会寄到你家。" },
        skill: "banking",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, I'll watch for it.", zh: "太好了，我会留意的。", correct: true, xp: 10 },
          { text: "I don't need it.", correct: false }
        ],
        hintOnWrong: "用 will 表示以后会做的事 → I'll watch for it.",
        next: null
      }
    }
  },
  {
    id: "house-hunting",
    title: "House Hunting",
    subtitle: "小公寓 · 看房",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is the living room. What do you think?", zh: "这是客厅。你觉得怎么样？" },
        skill: "housing",
        grammarTag: "wh-question",
        choices: [
          { text: "Nice! Where's the kitchen?", zh: "不错！厨房在哪儿？", correct: true, xp: 10 },
          { text: "I don't like it.", correct: false }
        ],
        hintOnWrong: "追问位置 → Where's the kitchen?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Right here. The rent is $900 a month.", zh: "就在这儿。房租一个月900块。" },
        skill: "housing",
        grammarTag: "do-question",
        choices: [
          { text: "Do you need a deposit?", zh: "需要押金吗？", correct: true, xp: 10 },
          { text: "I have no money.", correct: false }
        ],
        hintOnWrong: "问细节 → Do you need a deposit?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Just one month's rent. It's a great deal.", zh: "一个月房租就行。这价格很划算。" },
        skill: "housing",
        grammarTag: "will-future",
        choices: [
          { text: "I'll take it!", zh: "我租下了！", correct: true, xp: 10 },
          { text: "Maybe not.", correct: false }
        ],
        hintOnWrong: "用 will 表示当下的决定 → I'll take it!",
        next: null
      }
    }
  },
  {
    id: "new-roommate",
    title: "A New Roommate",
    subtitle: "新室友 · 认识一下",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hi! I'm Sam, your new roommate.", zh: "嗨！我是Sam，你的新室友。" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "Nice to meet you, Sam!", zh: "很高兴认识你，Sam！", correct: true, xp: 10 },
          { text: "Goodbye, Sam.", correct: false }
        ],
        hintOnWrong: "礼貌问候 → Nice to meet you, Sam!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'm cooking dinner. What are you doing?", zh: "我在做晚饭。你在干嘛呢？" },
        skill: "housing",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm unpacking my boxes.", zh: "我在整理我的箱子。", correct: true, xp: 10 },
          { text: "I don't know.", correct: false }
        ],
        hintOnWrong: "描述正在做的事 → I'm unpacking my boxes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's have dinner together, then.", zh: "那我们一起吃晚饭吧。" },
        skill: "housing",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds great, thank you!", zh: "太好了，谢谢！", correct: true, xp: 10 },
          { text: "No, thanks.", correct: false }
        ],
        hintOnWrong: "愉快接受 → Sounds great, thank you!",
        next: null
      }
    }
  },
  {
    id: "grocery-run",
    title: "Grocery Run",
    subtitle: "街角超市 · 买菜",
    avatar: "🛒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can I help you find something?", zh: "需要帮你找什么吗？" },
        skill: "shopping",
        grammarTag: "wh-question",
        choices: [
          { text: "Yes, where's the milk?", zh: "嗯，牛奶在哪儿？", correct: true, xp: 10 },
          { text: "I like pizza.", correct: false }
        ],
        hintOnWrong: "问位置 → Where's the milk?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Aisle three, on the left.", zh: "三号过道，左边。" },
        skill: "shopping",
        grammarTag: "courtesy",
        choices: [
          { text: "Thanks, I'll find it.", zh: "谢谢，我去找找。", correct: true, xp: 10 },
          { text: "I don't know.", correct: false }
        ],
        hintOnWrong: "道谢并说明行动 → Thanks, I'll find it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Do you need anything else?", zh: "还需要别的吗？" },
        skill: "shopping",
        grammarTag: "do-question",
        choices: [
          { text: "Do you have eggs too?", zh: "你们也有鸡蛋吗？", correct: true, xp: 10 },
          { text: "No idea.", correct: false }
        ],
        hintOnWrong: "追问其他商品 → Do you have eggs too?",
        next: null
      }
    }
  },
  {
    id: "checkout",
    title: "At the Checkout",
    subtitle: "收银台 · 结账",
    avatar: "🧾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you find everything?", zh: "都找到了吗？" },
        skill: "shopping",
        grammarTag: "statement",
        choices: [
          { text: "Yes, I'm ready to pay.", zh: "找到了，我准备付款了。", correct: true, xp: 10 },
          { text: "No, sorry.", correct: false }
        ],
        hintOnWrong: "回应并说明状态（陈述句）→ Yes, I'm ready to pay.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That'll be $32.50. Cash or card?", zh: "一共32.5块。付现金还是刷卡？" },
        skill: "shopping",
        grammarTag: "please-request",
        choices: [
          { text: "Card, please.", zh: "刷卡，谢谢。", correct: true, xp: 10 },
          { text: "I have no money.", correct: false }
        ],
        hintOnWrong: "礼貌回答 → Card, please.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No problem. Do you have a rewards card?", zh: "没问题。你有会员卡吗？" },
        skill: "shopping",
        grammarTag: "can-modal",
        choices: [
          { text: "No, but can I sign up?", zh: "没有，但我能现场办一张吗？", correct: true, xp: 10 },
          { text: "I don't want one.", correct: false }
        ],
        hintOnWrong: "用 can 提出请求 → Can I sign up?",
        next: null
      }
    }
  },
  {
    id: "wifi-password",
    title: "Wifi Password",
    subtitle: "回到家 · 问wifi密码",
    avatar: "📶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How was the store?", zh: "超市怎么样？" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "It's a nice store.", zh: "是个不错的超市。", correct: true, xp: 10 },
          { text: "I don't know.", correct: false }
        ],
        hintOnWrong: "简单评价（陈述句）→ It's a nice store.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "By the way, do you need the wifi password?", zh: "对了，你需要wifi密码吗？" },
        skill: "housing",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, can you write it down?", zh: "要，你能写下来给我吗？", correct: true, xp: 10 },
          { text: "I don't use wifi.", correct: false }
        ],
        hintOnWrong: "用 can 请求帮忙 → Can you write it down?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sure, here you go.", zh: "没问题，给你。" },
        skill: "housing",
        grammarTag: "courtesy",
        choices: [
          { text: "Thanks, that's really helpful.", zh: "谢谢，帮大忙了。", correct: true, xp: 10 },
          { text: "Too slow.", correct: false }
        ],
        hintOnWrong: "表达感谢 → Thanks, that's really helpful.",
        next: null
      }
    }
  },
  {
    id: "hallway-chat",
    title: "In the Hallway",
    subtitle: "走廊里 · 遇见邻居",
    avatar: "🍁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hey there! How's it going?", zh: "嘿！最近怎么样？" },
        skill: "greeting",
        grammarTag: "statement",
        choices: [
          { text: "Pretty good, thanks!", zh: "还不错，谢谢！", correct: true, xp: 10 },
          { text: "Goodbye.", correct: false }
        ],
        hintOnWrong: "回应寒暄（陈述句）→ Pretty good, thanks!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's getting cold outside, isn't it?", zh: "外面越来越冷了，是吧？" },
        skill: "greeting",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, it's getting cold fast.", zh: "是啊，冷得很快。", correct: true, xp: 10 },
          { text: "It's very hot.", correct: false }
        ],
        hintOnWrong: "描述正在变化的天气 → It's getting cold fast.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Well, see you around!", zh: "好啦，回头见！" },
        skill: "greeting",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "See you! Let's grab coffee sometime.", zh: "回见！改天一起喝杯咖啡吧。", correct: true, xp: 10 },
          { text: "No, never.", correct: false }
        ],
        hintOnWrong: "提议以后一起做点什么 → Let's grab coffee sometime.",
        next: null
      }
    }
  },
  {
    id: "the-address",
    title: "Late at Night",
    subtitle: "深夜 · 研究地址",
    avatar: "👩",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So, what does the address say?", zh: "那，地址上写的是哪儿？" },
        skill: "direction",
        grammarTag: "statement",
        choices: [
          { text: "It's a street near the lake.", zh: "是湖边的一条街。", correct: true, xp: 10 },
          { text: "I have no idea.", correct: false }
        ],
        hintOnWrong: "陈述信息 → It's a street near the lake.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Near the lake? Do you know that area?", zh: "湖边？你了解那一带吗？" },
        skill: "direction",
        grammarTag: "do-question",
        choices: [
          { text: "Not really. Where exactly is it?", zh: "不太了解。具体在哪儿呢？", correct: true, xp: 10 },
          { text: "I know everything.", correct: false }
        ],
        hintOnWrong: "追问具体位置 → Where exactly is it?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's go find out tomorrow.", zh: "我们明天去看看吧。" },
        skill: "direction",
        grammarTag: "will-future",
        choices: [
          { text: "I'll be ready in the morning.", zh: "我早上就准备好。", correct: true, xp: 10 },
          { text: "Never.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll be ready in the morning.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Wow, this is old.", zh: "哇，这个好旧啊。" },
  { en: "No. Do you know this street?", zh: "不认识。你知道这条街吗？" },
  { en: "Let's go ask them.", zh: "我们去问问吧。" },
  { en: "I want to open an account.", zh: "我想开一个账户。" },
  { en: "Yes, do you need my address too?", zh: "带了，你还需要我的地址吗？" },
  { en: "Thank you, take your time.", zh: "谢谢，你慢慢来。" },
  { en: "Yes, can I choose the design?", zh: "要，我能自己选卡面设计吗？" },
  { en: "I like this one.", zh: "我喜欢这个。" },
  { en: "Perfect, I'll watch for it.", zh: "太好了，我会留意的。" },
  { en: "Nice! Where's the kitchen?", zh: "不错！厨房在哪儿？" },
  { en: "Do you need a deposit?", zh: "需要押金吗？" },
  { en: "I'll take it!", zh: "我租下了！" },
  { en: "Nice to meet you, Sam!", zh: "很高兴认识你，Sam！" },
  { en: "I'm unpacking my boxes.", zh: "我在整理我的箱子。" },
  { en: "Sounds great, thank you!", zh: "太好了，谢谢！" },
  { en: "Yes, where's the milk?", zh: "嗯，牛奶在哪儿？" },
  { en: "Thanks, I'll find it.", zh: "谢谢，我去找找。" },
  { en: "Do you have eggs too?", zh: "你们也有鸡蛋吗？" },
  { en: "Yes, I'm ready to pay.", zh: "找到了，我准备付款了。" },
  { en: "Card, please.", zh: "刷卡，谢谢。" },
  { en: "No, but can I sign up?", zh: "没有，但我能现场办一张吗？" },
  { en: "It's a nice store.", zh: "是个不错的超市。" },
  { en: "Yes, can you write it down?", zh: "要，你能写下来给我吗？" },
  { en: "Thanks, that's really helpful.", zh: "谢谢，帮大忙了。" },
  { en: "Pretty good, thanks!", zh: "还不错，谢谢！" },
  { en: "Yes, it's getting cold fast.", zh: "是啊，冷得很快。" },
  { en: "See you! Let's grab coffee sometime.", zh: "回见！改天一起喝杯咖啡吧。" },
  { en: "It's a street near the lake.", zh: "是湖边的一条街。" },
  { en: "Not really. Where exactly is it?", zh: "不太了解。具体在哪儿呢？" },
  { en: "I'll be ready in the morning.", zh: "我早上就准备好。" }
);

Object.assign(GAME_CONTENT.skillMeta, {
  banking: { label: "银行理财", labelEn: "Banking", icon: "🏦" },
  housing: { label: "住房生活", labelEn: "Housing", icon: "🏠" }
});
