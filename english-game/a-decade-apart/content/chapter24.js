// 内容数据层：第二十四章，紧接第二十三章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter23.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：买第一套房。全新词汇领域：房产经纪/看房/验房/贷款利率/报价/过户。

GAME_CONTENT.scenes.push(
  {
    id: "deciding-to-buy",
    transition: { en: "Married life settles in, and a new question arises.", zh: "婚后的生活渐渐安定下来，一个新的问题出现了。" },
    title: "Deciding to Buy",
    subtitle: "公寓 · 该不该买房",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Our landlord just raised the rent again.", zh: "房东又涨房租了。", voice: "emma" },
        skill: "housing",
        grammarTag: "past-simple",
        choices: [
          { text: "He raised it again? That's the third time.", zh: "又涨了？这已经是第三次了。", correct: true, xp: 10 },
          { text: "He raised it, and I don't mind at all.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → He raised it again? That's the third time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Maybe it's time we thought about buying our own place.", zh: "也许是时候考虑买自己的房子了。", voice: "emma" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "Maybe it really is time.", zh: "也许真是时候了。", correct: true, xp: 10 },
          { text: "Maybe it's never going to be time.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Maybe it really is time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we saved carefully, we could afford a small place.", zh: "如果我们省着点存钱，能负担得起一个小地方。", voice: "emma" },
        skill: "housing",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we saved carefully, I think we could.", zh: "如果省着点存，我觉得可以。", correct: true, xp: 10 },
          { text: "If we saved carefully, it still wouldn't be enough.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we saved carefully, I think we could.",
        next: null
      }
    }
  },
  {
    id: "meeting-a-realtor",
    title: "Meeting a Realtor",
    subtitle: "房产中介 · 见经纪人",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What kind of neighborhood are you looking for?", zh: "您想找什么样的社区？" },
        skill: "housing",
        grammarTag: "wh-question",
        choices: [
          { text: "Somewhere quiet, close to the bookstore.", zh: "安静一点的地方，离书店近。", correct: true, xp: 10 },
          { text: "Somewhere doesn't matter, honestly.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ Somewhere quiet, close to the bookstore.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What's your budget range, roughly speaking?", zh: "大致来说，您的预算范围是多少？" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "We've set a firm budget already.", zh: "我们已经定好了明确的预算。", correct: true, xp: 10 },
          { text: "We haven't thought about money at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We've set a firm budget already.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I've found a few listings that might fit what you need.", zh: "我找到了几套可能符合你们需求的房源。" },
        skill: "housing",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've already found some? Let's see them.", zh: "已经找到了？我们看看吧。", correct: true, xp: 10 },
          { text: "You've found nothing useful, probably.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've already found some? Let's see them.",
        next: null
      }
    }
  },
  {
    id: "house-hunting-again",
    title: "House Hunting, Again",
    subtitle: "看房 · 走进第一间",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This house has three bedrooms and a small backyard.", zh: "这栋房子有三间卧室和一个小后院。" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "A backyard sounds nice, honestly.", zh: "说实话，有个后院挺不错的。", correct: true, xp: 10 },
          { text: "A backyard sounds like too much work.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A backyard sounds nice, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The kitchen was renovated just two years ago.", zh: "厨房两年前刚翻修过。" },
        skill: "housing",
        grammarTag: "passive",
        choices: [
          { text: "Recently renovated? Even better.", zh: "最近才翻修的？那更好了。", correct: true, xp: 10 },
          { text: "Recently renovated? That worries me.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Recently renovated? Even better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "What do you two think so far?", zh: "你们俩目前觉得怎么样？" },
        skill: "housing",
        grammarTag: "wh-question",
        choices: [
          { text: "What we think is, we love it already.", zh: "我们的想法是，我们已经很喜欢了。", correct: true, xp: 10 },
          { text: "What we think doesn't matter yet.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ What we think is, we love it already.",
        next: null
      }
    }
  },
  {
    id: "the-home-inspection",
    transition: { en: "Before making an offer, you hire an inspector.", zh: "在出价之前，你们请了一位验房师。" },
    title: "The Home Inspection",
    subtitle: "验房 · 检查房屋状况",
    avatar: "🧑‍🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Overall, the structure is solid, with a few minor issues.", zh: "整体来说，结构很牢固，有几个小问题。" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "Minor issues we can live with, then.", zh: "那小问题我们可以接受。", correct: true, xp: 10 },
          { text: "Minor issues that will ruin everything.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Minor issues we can live with, then.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The furnace is older and might need replacing soon.", zh: "暖炉比较老了，可能很快就得换。" },
        skill: "housing",
        grammarTag: "comparative",
        choices: [
          { text: "Older, so let's budget for a new one.", zh: "比较老，那我们就把换新的算进预算吧。", correct: true, xp: 10 },
          { text: "Older, but I'll just ignore that completely.", correct: false }
        ],
        hintOnWrong: "用比较级 → Older, so let's budget for a new one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Nothing here should stop you from making an offer.", zh: "这里没什么问题会阻止你们出价的。" },
        skill: "housing",
        grammarTag: "passive",
        choices: [
          { text: "Nothing should stop us — let's move forward.", zh: "没什么能阻止我们——我们继续推进吧。", correct: true, xp: 10 },
          { text: "Something should probably stop us, actually.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Nothing should stop us — let's move forward.",
        next: null
      }
    }
  },
  {
    id: "applying-for-a-mortgage",
    title: "Applying for a Mortgage",
    subtitle: "银行 · 申请房贷",
    avatar: "👨‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your interest rate will depend on your credit history.", zh: "您的利率会取决于您的信用记录。" },
        skill: "banking",
        grammarTag: "will-future",
        choices: [
          { text: "That'll work in our favor, I believe.", zh: "我相信这会对我们有利。", correct: true, xp: 10 },
          { text: "That'll work against us, definitely.", correct: false }
        ],
        hintOnWrong: "用 will 回应 → That'll work in our favor, I believe.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How much of a down payment can you provide?", zh: "您能付多少首付？" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "We can put down twenty percent.", zh: "我们能付百分之二十的首付。", correct: true, xp: 10 },
          { text: "We can't provide any down payment.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We can put down twenty percent.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You've been approved for the mortgage amount you requested.", zh: "您申请的贷款金额已经批准了。" },
        skill: "banking",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've been approved? That's incredible news.", zh: "批准了？这真是太棒的消息了。", correct: true, xp: 10 },
          { text: "We've been rejected again, probably.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've been approved? That's incredible news.",
        next: null
      }
    }
  },
  {
    id: "making-an-offer",
    title: "Making an Offer",
    subtitle: "房产中介 · 提交报价",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If you offer slightly above asking, you'll likely win the bid.", zh: "如果报价略高于要价，你们很可能会赢得竞价。" },
        skill: "housing",
        grammarTag: "conditional",
        choices: [
          { text: "If that helps, we'll offer a bit more.", zh: "如果这样有用，我们就多加一点。", correct: true, xp: 10 },
          { text: "If that helps, we'll offer far less instead.", correct: false }
        ],
        hintOnWrong: "用条件句 → If that helps, we'll offer a bit more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's another buyer who's also very interested.", zh: "还有另一位买家也很感兴趣。" },
        skill: "housing",
        grammarTag: "relative-clause",
        choices: [
          { text: "A buyer who wants it too? Let's move fast.", zh: "也有买家想要？那我们得快点行动了。", correct: true, xp: 10 },
          { text: "A buyer who wants it too doesn't concern us.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A buyer who wants it too? Let's move fast.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Congratulations, your offer was accepted!", zh: "恭喜，你们的报价被接受了！" },
        skill: "housing",
        grammarTag: "passive",
        choices: [
          { text: "It was accepted? We actually did it!", zh: "被接受了？我们真的做到了！", correct: true, xp: 10 },
          { text: "It was rejected again, unfortunately.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It was accepted? We actually did it!",
        next: null
      }
    }
  },
  {
    id: "signing-papers",
    title: "Signing the Papers",
    subtitle: "律师事务所 · 签署文件",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please review these closing documents before you sign.", zh: "请在签字前先审阅这些成交文件。" },
        skill: "housing",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll take our time reading.", zh: "当然，我们会仔细阅读。", correct: true, xp: 10 },
          { text: "We'd rather sign without reading.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, we'll take our time reading.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The keys will officially be yours after this signature.", zh: "这个签名之后，钥匙就正式归你们了。" },
        skill: "housing",
        grammarTag: "will-future",
        choices: [
          { text: "After this? My hand is shaking already.", zh: "这个签完就行？我的手已经在抖了。", correct: true, xp: 10 },
          { text: "After this? I feel completely unmoved.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ After this? My hand is shaking already.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's official. Welcome to homeownership.", zh: "正式生效了。欢迎成为房主。" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "Homeowners, at last, together.", zh: "我们终于一起成了房主。", correct: true, xp: 10 },
          { text: "Homeowners, though it doesn't feel real yet.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Homeowners, at last, together.",
        next: null
      }
    }
  },
  {
    id: "getting-the-keys",
    transition: { en: "That afternoon, you stand outside your very own front door.", zh: "那天下午，你们站在了属于自己的家门前。" },
    title: "Getting the Keys",
    subtitle: "新家门口 · 拿到钥匙",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you want to carry me over the threshold?", zh: "你要不要把我抱过门槛？", voice: "emma" },
        skill: "work",
        grammarTag: "do-question",
        choices: [
          { text: "I've been waiting to ask you that myself.", zh: "我正想问你这句话呢。", correct: true, xp: 10 },
          { text: "I'd rather you walk in on your own.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've been waiting to ask you that myself.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This empty living room is about to become our whole life.", zh: "这间空荡荡的客厅马上就要变成我们的整个生活了。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "It's about to become everything to us.", zh: "它马上就要成为我们的一切了。", correct: true, xp: 10 },
          { text: "It's about to stay empty forever.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → It's about to become everything to us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Our first house. I can hardly believe it's real.", zh: "我们的第一套房子。我简直不敢相信这是真的。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Real, and completely ours.", zh: "是真的，而且完全是我们的了。", correct: true, xp: 10 },
          { text: "Real, though it still feels borrowed.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Real, and completely ours.",
        next: null
      }
    }
  },
  {
    id: "planning-the-move",
    title: "Planning the Move",
    subtitle: "公寓 · 筹备搬家",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we hire movers, or do this ourselves?", zh: "我们要请搬家公司，还是自己来？" },
        skill: "housing",
        grammarTag: "do-question",
        choices: [
          { text: "Do we really want to lift furniture ourselves?", zh: "我们真的想自己搬家具吗？", correct: true, xp: 10 },
          { text: "Do we own any furniture worth moving?", correct: false }
        ],
        hintOnWrong: "反问对方（do-question）→ Do we really want to lift furniture ourselves?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we hired movers, we'd save our backs at least.", zh: "如果请搬家公司，至少能保住我们的腰。" },
        skill: "housing",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we hired movers, that'd be worth the cost.", zh: "如果请搬家公司，这钱花得值。", correct: true, xp: 10 },
          { text: "If we hired movers, it'd be a total waste.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we hired movers, that'd be worth the cost.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book a moving company for next Saturday.", zh: "我们订个下周六的搬家公司吧。" },
        skill: "housing",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's book them right now, before they fill up.", zh: "我们现在就订，免得约满了。", correct: true, xp: 10 },
          { text: "Let's wait until the very last minute.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's book them right now, before they fill up.",
        next: null
      }
    }
  },
  {
    id: "settling-into-the-new-house",
    transition: { en: "By evening, boxes fill every room of the new house.", zh: "到了傍晚，新房子的每个房间都堆满了箱子。" },
    title: "Settling In",
    subtitle: "新家 · 安顿下来",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've unpacked the kitchen, but the rest can wait.", zh: "我已经把厨房收拾好了，剩下的可以慢慢来。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "The kitchen's done? That's the important part.", zh: "厨房弄好了？那是最重要的部分。", correct: true, xp: 10 },
          { text: "The kitchen's done, but who cares about that.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → The kitchen's done? That's the important part.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Where should we hang the picture from our wedding?", zh: "我们婚礼那张照片该挂哪儿？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "Where else but right by the front door?", zh: "还能挂哪儿，就挂在门口旁边吧。", correct: true, xp: 10 },
          { text: "Where we hang it doesn't matter to me.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Where else but right by the front door?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This messy, half-unpacked house already feels like home.", zh: "这个乱糟糟、还没收拾完的家，已经有家的感觉了。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "It already feels like home to me too.", zh: "对我来说也已经有家的感觉了。", correct: true, xp: 10 },
          { text: "It still feels like someone else's place.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It already feels like home to me too.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "He raised it again? That's the third time.", zh: "又涨了？这已经是第三次了。" },
  { en: "Maybe it really is time.", zh: "也许真是时候了。" },
  { en: "If we saved carefully, I think we could.", zh: "如果省着点存，我觉得可以。" },
  { en: "Somewhere quiet, close to the bookstore.", zh: "安静一点的地方，离书店近。" },
  { en: "We've set a firm budget already.", zh: "我们已经定好了明确的预算。" },
  { en: "You've already found some? Let's see them.", zh: "已经找到了？我们看看吧。" },
  { en: "A backyard sounds nice, honestly.", zh: "说实话，有个后院挺不错的。" },
  { en: "Recently renovated? Even better.", zh: "最近才翻修的？那更好了。" },
  { en: "What we think is, we love it already.", zh: "我们的想法是，我们已经很喜欢了。" },
  { en: "Minor issues we can live with, then.", zh: "那小问题我们可以接受。" },
  { en: "Older, so let's budget for a new one.", zh: "比较老，那我们就把换新的算进预算吧。" },
  { en: "Nothing should stop us — let's move forward.", zh: "没什么能阻止我们——我们继续推进吧。" },
  { en: "That'll work in our favor, I believe.", zh: "我相信这会对我们有利。" },
  { en: "We can put down twenty percent.", zh: "我们能付百分之二十的首付。" },
  { en: "We've been approved? That's incredible news.", zh: "批准了？这真是太棒的消息了。" },
  { en: "If that helps, we'll offer a bit more.", zh: "如果这样有用，我们就多加一点。" },
  { en: "A buyer who wants it too? Let's move fast.", zh: "也有买家想要？那我们得快点行动了。" },
  { en: "It was accepted? We actually did it!", zh: "被接受了？我们真的做到了！" },
  { en: "Of course, we'll take our time reading.", zh: "当然，我们会仔细阅读。" },
  { en: "After this? My hand is shaking already.", zh: "这个签完就行？我的手已经在抖了。" },
  { en: "Homeowners, at last, together.", zh: "我们终于一起成了房主。" },
  { en: "I've been waiting to ask you that myself.", zh: "我正想问你这句话呢。" },
  { en: "It's about to become everything to us.", zh: "它马上就要成为我们的一切了。" },
  { en: "Real, and completely ours.", zh: "是真的，而且完全是我们的了。" },
  { en: "Do we really want to lift furniture ourselves?", zh: "我们真的想自己搬家具吗？" },
  { en: "If we hired movers, that'd be worth the cost.", zh: "如果请搬家公司，这钱花得值。" },
  { en: "Let's book them right now, before they fill up.", zh: "我们现在就订，免得约满了。" },
  { en: "The kitchen's done? That's the important part.", zh: "厨房弄好了？那是最重要的部分。" },
  { en: "Where else but right by the front door?", zh: "还能挂哪儿，就挂在门口旁边吧。" },
  { en: "It already feels like home to me too.", zh: "对我来说也已经有家的感觉了。" }
);
