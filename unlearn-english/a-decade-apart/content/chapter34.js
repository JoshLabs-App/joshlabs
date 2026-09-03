// 内容数据层：第三十四章，紧接第三十三章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter33.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：在宝宝出生前，两人为双方家人办了一场家宴。全新词汇领域：菜单规划/
// 餐桌摆设/招待客人/宴席闲聊。

GAME_CONTENT.scenes.push(
  {
    id: "planning-the-menu",
    transition: { en: "They plan a dinner party to bring both families together.", zh: "他们计划办一场家宴，把两家人聚到一起。" },
    title: "Planning the Menu",
    subtitle: "家里 · 规划菜单",
    avatar: "🍽️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should we cook for both of our families?", zh: "我们该给两家人做什么菜？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's make something that mixes both traditions.", zh: "我们做一道融合两边传统的菜吧。", correct: true, xp: 10 },
          { text: "It doesn't matter, food isn't important tonight.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's make something that mixes both traditions.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Does anyone have food allergies we should know about?", zh: "有没有谁对食物过敏，我们需要知道？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, my mother can't have shellfish.", zh: "有的，我妈妈不能吃贝类海鲜。", correct: true, xp: 10 },
          { text: "No, allergies have never existed in either family.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, my mother can't have shellfish.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This dish takes longer to make than the others.", zh: "这道菜做起来比其他的要花更长时间。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Then let's start on that one first.", zh: "那我们就先做那道菜吧。", correct: true, xp: 10 },
          { text: "Then let's just skip that dish entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Then let's start on that one first.",
        next: null
      }
    }
  },
  {
    id: "grocery-shopping-together",
    transition: { en: "They head to the market to gather ingredients.", zh: "他们去市场采购食材。" },
    title: "Grocery Shopping Together",
    subtitle: "菜市场 · 采购食材",
    avatar: "🛍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you find fresh ginger and green onions?", zh: "你能找到新鲜的姜和葱吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can find those in the produce section.", zh: "我能在蔬果区找到那些。", correct: true, xp: 10 },
          { text: "I can't find ginger anywhere in this whole store.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can find those in the produce section.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This cut of meat looks fresher than that one.", zh: "这块肉看起来比那块更新鲜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "You're right, let's get this one instead.", zh: "你说得对，那我们就买这块吧。", correct: true, xp: 10 },
          { text: "You're wrong, they look exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → You're right, let's get this one instead.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're going to need a bigger cart at this rate.", zh: "照这个速度我们得换个更大的购物车了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Ha, you're probably right about that.", zh: "哈哈，你说的大概没错。", correct: true, xp: 10 },
          { text: "Ha, this cart is already way too big.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Ha, you're probably right about that.",
        next: null
      }
    }
  },
  {
    id: "setting-the-table",
    transition: { en: "The night before, they set the table for a big gathering.", zh: "前一晚，他们为这场聚会摆好了桌子。" },
    title: "Setting the Table",
    subtitle: "家里 · 摆桌",
    avatar: "🍽️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many place settings do we need in total?", zh: "我们总共需要摆多少套餐具？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We need twelve settings, counting both families.", zh: "算上两家人，我们需要十二套。", correct: true, xp: 10 },
          { text: "We need zero settings, everyone will stand.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → We need twelve settings, counting both families.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should the kids sit at their own small table?", zh: "孩子们要不要坐在他们自己的小桌子？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that'll be easier for everyone.", zh: "好，这样对大家来说都更方便。", correct: true, xp: 10 },
          { text: "No, the kids should stand the entire meal.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that'll be easier for everyone.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's add some candles to make it feel special.", zh: "我们加几支蜡烛，让气氛更特别一点。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Great idea, I'll grab some from the drawer.", zh: "好主意，我去抽屉里拿几支。", correct: true, xp: 10 },
          { text: "Let's skip the candles, they're unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Great idea, I'll grab some from the drawer.",
        next: null
      }
    }
  },
  {
    id: "the-guests-arrive",
    transition: { en: "Both families arrive within minutes of each other.", zh: "两家人几乎前后脚地到了。" },
    title: "The Guests Arrive",
    subtitle: "家里 · 客人到齐",
    avatar: "🚪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome, come in, come in, make yourselves at home.", zh: "欢迎欢迎，快进来，不要拘束。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for having us, everything smells wonderful.", zh: "谢谢邀请我们，一切都闻起来太香了。", correct: true, xp: 10 },
          { text: "Thank you, though we'd rather stand by the door.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you for having us, everything smells wonderful.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can I take your coats for you?", zh: "我能帮你们把外套拿去挂起来吗？" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Yes, thank you, that's very kind of you.", zh: "好的，谢谢你，你真是太贴心了。", correct: true, xp: 10 },
          { text: "No, I'd rather wear my coat all evening.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Yes, thank you, that's very kind of you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This house looks even nicer than the last time.", zh: "这房子比上次看起来还要漂亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, we've done some renovations lately.", zh: "谢谢，我们最近做了一些装修。", correct: true, xp: 10 },
          { text: "Thank you, though nothing here has changed at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, we've done some renovations lately.",
        next: null
      }
    }
  },
  {
    id: "serving-dinner",
    transition: { en: "They bring the food out and everyone gathers around the table.", zh: "他们把菜端上桌，大家都围坐了过来。" },
    title: "Serving Dinner",
    subtitle: "餐厅 · 上菜",
    avatar: "🍲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This smells absolutely incredible, who made it?", zh: "这闻起来简直太香了，是谁做的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We made it together, actually, all afternoon.", zh: "其实是我们俩一起做的，做了一下午。", correct: true, xp: 10 },
          { text: "Nobody made it, it appeared from nowhere.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → We made it together, actually, all afternoon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Please, help yourselves before it gets cold.", zh: "大家请自便，趁热吃吧。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thank you, everything looks absolutely delicious.", zh: "谢谢，看起来一切都太好吃了。", correct: true, xp: 10 },
          { text: "Thank you, but I'd rather wait until it's cold.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thank you, everything looks absolutely delicious.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is better than the version we had at the restaurant.", zh: "这个比我们在餐厅吃的那道还要好吃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That means a lot, thank you so much.", zh: "这话对我们意义重大，非常感谢。", correct: true, xp: 10 },
          { text: "That's rude, the restaurant version was clearly better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That means a lot, thank you so much.",
        next: null
      }
    }
  },
  {
    id: "table-conversation",
    transition: { en: "Conversation flows easily as the meal continues.", zh: "用餐间，谈话气氛轻松愉快。" },
    title: "Table Conversation",
    subtitle: "餐厅 · 席间闲聊",
    avatar: "🗣️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you two picked out a name for the baby yet?", zh: "你们俩给宝宝想好名字了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've narrowed it down to a couple of names.", zh: "我们已经把范围缩小到几个名字了。", correct: true, xp: 10 },
          { text: "We've never once thought about a name.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've narrowed it down to a couple of names.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If it's a boy, what name are you considering?", zh: "如果是男孩，你们在考虑什么名字？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it's a boy, we're leaning toward a family name.", zh: "如果是男孩，我们倾向于用一个家族名字。", correct: true, xp: 10 },
          { text: "If it's a boy, we haven't thought about it.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it's a boy, we're leaning toward a family name.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This baby is going to be so loved.", zh: "这个宝宝会被这么多人疼爱。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's exactly why tonight means so much.", zh: "这正是今晚意义如此重大的原因。", correct: true, xp: 10 },
          { text: "That's why we're not excited about this at all.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's exactly why tonight means so much.",
        next: null
      }
    }
  },
  {
    id: "a-toast-to-the-family",
    transition: { en: "Before dessert, someone raises a glass for a toast.", zh: "上甜点之前，有人举杯要祝酒。" },
    title: "A Toast to the Family",
    subtitle: "餐厅 · 祝酒",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'd like to say a few words, if that's alright.", zh: "如果可以的话，我想说几句话。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, please, go right ahead.", zh: "当然可以，请说吧。", correct: true, xp: 10 },
          { text: "Sorry, we'd rather not hear any speeches.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, please, go right ahead.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "To two families becoming one, and to the baby on the way.", zh: "敬两个家庭合而为一，也敬即将到来的宝宝。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To family, and to everything ahead of us.", zh: "敬家人，也敬我们前方的一切。", correct: true, xp: 10 },
          { text: "To nothing in particular, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒词 → To family, and to everything ahead of us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Cheers, and thank you all for being here tonight.", zh: "干杯，也谢谢大家今晚能来。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Cheers, we're so grateful to have you all.", zh: "干杯，我们非常感激大家的到来。", correct: true, xp: 10 },
          { text: "Cheers, though we didn't really want anyone here.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Cheers, we're so grateful to have you all.",
        next: null
      }
    }
  },
  {
    id: "dessert-and-laughter",
    transition: { en: "Dessert brings out old family stories and a lot of laughter.", zh: "甜点端上来后，大家聊起老家事，笑声不断。" },
    title: "Dessert and Laughter",
    subtitle: "餐厅 · 甜点与欢笑",
    avatar: "🍰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Tell them the story about your first date.", zh: "跟他们讲讲你们第一次约会的故事吧。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Oh no, that story is a little embarrassing.", zh: "哦不，那个故事有点尴尬。", correct: true, xp: 10 },
          { text: "Oh no, we've never actually been on a date.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Oh no, that story is a little embarrassing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This dessert is even sweeter than I remembered.", zh: "这个甜点比我记忆中的还要甜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I might need a second slice.", zh: "确实是，我可能得再来一块。", correct: true, xp: 10 },
          { text: "It really isn't, this dessert has no flavor.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I might need a second slice.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Nights like this remind me how lucky we are.", zh: "像今晚这样的夜晚让我意识到我们有多幸运。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really do, I feel the exact same way.", zh: "确实如此，我也有一模一样的感受。", correct: true, xp: 10 },
          { text: "They don't, tonight felt pretty ordinary to me.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really do, I feel the exact same way.",
        next: null
      }
    }
  },
  {
    id: "saying-goodnight",
    transition: { en: "As the evening winds down, guests begin to say their goodbyes.", zh: "夜色渐深，客人们开始一一道别。" },
    title: "Saying Goodnight",
    subtitle: "门口 · 道别",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Thank you so much for tonight, it was wonderful.", zh: "非常感谢今晚，一切都太棒了。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for coming, it meant everything to us.", zh: "谢谢你们能来，这对我们意义非凡。", correct: true, xp: 10 },
          { text: "Thank you, though we didn't enjoy it much.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you for coming, it meant everything to us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let's do this again soon, before the baby comes.", zh: "我们要在宝宝出生前再聚一次。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Absolutely, let's plan another one next month.", zh: "当然，我们下个月再安排一次吧。", correct: true, xp: 10 },
          { text: "Let's not, once was more than enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Absolutely, let's plan another one next month.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Drive safe, and text us when you get home.", zh: "开车小心，到家了发个消息给我们。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "We will, thank you for worrying about us.", zh: "我们会的，谢谢你们为我们担心。", correct: true, xp: 10 },
          { text: "We won't, texting after driving feels pointless.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → We will, thank you for worrying about us.",
        next: null
      }
    }
  },
  {
    id: "cleaning-up-together",
    transition: { en: "Once everyone has left, the couple cleans up side by side.", zh: "客人都走了以后，夫妻俩并肩收拾屋子。" },
    title: "Cleaning Up Together",
    subtitle: "厨房 · 一起收拾",
    avatar: "🧽",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Tonight went even better than I hoped it would.", zh: "今晚比我期望的还要顺利。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I'm so glad we did this.", zh: "确实如此，我很高兴我们办了这场聚会。", correct: true, xp: 10 },
          { text: "It really didn't, tonight was a total disaster.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I'm so glad we did this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you dry while I wash these dishes?", zh: "我洗碗的时候你能擦干吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can dry, just hand them over.", zh: "我能擦干，递给我就行。", correct: true, xp: 10 },
          { text: "I can't help with dishes tonight, I'm too tired.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can dry, just hand them over.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how tired we are, tonight was worth it.", zh: "不管我们现在多累，今晚都是值得的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how tired, I'd do it again tomorrow.", zh: "不管多累，明天我还愿意再办一次。", correct: true, xp: 10 },
          { text: "No matter how tired, I regret every part of it.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how tired, I'd do it again tomorrow.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "dinner party", zh: "家宴", category: "community" },
  { en: "mixes", zh: "融合", category: "community" },
  { en: "traditions", zh: "传统（复数）", category: "community" },
  { en: "food allergies", zh: "食物过敏", category: "community" },
  { en: "shellfish", zh: "贝类海鲜", category: "community" },
  { en: "dish", zh: "菜肴", category: "community" },
  { en: "ginger", zh: "姜", category: "community" },
  { en: "green onions", zh: "葱", category: "community" },
  { en: "produce section", zh: "蔬果区", category: "community" },
  { en: "cut of meat", zh: "一块肉（部位）", category: "community" },
  { en: "fresher", zh: "更新鲜的（fresh 比较级）", category: "community" },
  { en: "cart", zh: "购物车", category: "community" },
  { en: "at this rate", zh: "照这个速度", category: "community" },
  { en: "place settings", zh: "餐具套数", category: "community" },
  { en: "in total", zh: "总共", category: "community" },
  { en: "gathering", zh: "聚会", category: "community" },
  { en: "make yourselves at home", zh: "不要拘束", category: "community" },
  { en: "smells wonderful", zh: "闻起来很香", category: "community" },
  { en: "coats", zh: "外套（复数）", category: "community" },
  { en: "kind of you", zh: "你真贴心", category: "community" },
  { en: "renovations", zh: "装修工程", category: "community" },
  { en: "incredible", zh: "令人难以置信的", category: "community" },
  { en: "help yourselves", zh: "请自便", category: "community" },
  { en: "delicious", zh: "美味的", category: "community" },
  { en: "version", zh: "版本", category: "community" },
  { en: "conversation", zh: "谈话", category: "community" },
  { en: "flows", zh: "流动，进行顺畅", category: "community" },
  { en: "picked out", zh: "挑选出了", category: "community" },
  { en: "narrowed it down", zh: "把范围缩小了", category: "community" },
  { en: "leaning toward", zh: "倾向于", category: "community" },
  { en: "family name", zh: "家族名字", category: "community" },
  { en: "loved", zh: "被爱的", category: "community" },
  { en: "raise a glass", zh: "举杯", category: "community" },
  { en: "toast", zh: "祝酒", category: "community" },
  { en: "say a few words", zh: "说几句话", category: "community" },
  { en: "if that's alright", zh: "如果可以的话", category: "community" },
  { en: "cheers", zh: "干杯", category: "community" },
  { en: "old family stories", zh: "老家事", category: "community" },
  { en: "laughter", zh: "笑声", category: "community" },
  { en: "first date", zh: "第一次约会", category: "community" },
  { en: "embarrassing", zh: "尴尬的", category: "community" },
  { en: "sweeter", zh: "更甜的（sweet 比较级）", category: "community" },
  { en: "slice", zh: "一片，一块", category: "community" },
  { en: "winds down", zh: "渐渐结束", category: "community" },
  { en: "say their goodbyes", zh: "道别", category: "community" },
  { en: "meant everything", zh: "意义非凡", category: "community" },
  { en: "drive safe", zh: "开车小心", category: "community" },
  { en: "text", zh: "发短信", category: "community" },
  { en: "worrying", zh: "担心", category: "community" },
  { en: "side by side", zh: "并肩", category: "community" },
  { en: "dry", zh: "擦干", category: "community" },
  { en: "hand them over", zh: "递过来", category: "community" },
  { en: "worth it", zh: "值得的", category: "community" },
  { en: "regret", zh: "后悔", category: "community" }
);
