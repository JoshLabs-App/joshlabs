// 内容数据层：第四十二章，紧接第四十一章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter41.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：受祖母的人生启发，Emma决定把她的烘焙爱好做成一门小生意。全新词汇领域：
// 营业执照/定价/开业筹备/第一位顾客。

GAME_CONTENT.scenes.push(
  {
    id: "an-idea-takes-shape",
    transition: { en: "Inspired by her grandmother, Emma considers turning her baking hobby into a business.", zh: "受祖母的启发，Emma考虑把烘焙爱好变成一门生意。" },
    title: "An Idea Takes Shape",
    subtitle: "厨房 · 萌生想法",
    avatar: "🧁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've been thinking about selling my baking online.", zh: "我一直在考虑把我做的烘焙拿去网上卖。" },
        skill: "workplace",
        grammarTag: "present-perfect",
        choices: [
          { text: "I think that's a wonderful idea, honestly.", zh: "说实话，我觉得这是个很棒的主意。", correct: true, xp: 10 },
          { text: "I think that's a complete waste of time.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → I think that's a wonderful idea, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you really think people would pay for this?", zh: "你真觉得会有人愿意花钱买吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, everyone who's tried it loves it.", zh: "会的，每个尝过的人都喜欢。", correct: true, xp: 10 },
          { text: "No, nobody would ever pay for baked goods.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, everyone who's tried it loves it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's look into what it takes to start.", zh: "我们来研究一下开始需要做什么吧。" },
        skill: "workplace",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that this weekend.", zh: "我们这个周末就开始研究吧。", correct: true, xp: 10 },
          { text: "Let's just forget about the whole idea.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that this weekend.",
        next: null
      }
    }
  },
  {
    id: "writing-a-business-plan",
    transition: { en: "They sit down together to sketch out a simple business plan.", zh: "他们坐下来一起草拟一份简单的商业计划。" },
    title: "Writing a Business Plan",
    subtitle: "家里 · 撰写商业计划",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should we call the business?", zh: "我们应该给这门生意起什么名字？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "Something warm, like Grandma's Kitchen.", zh: "起个温暖点的名字，比如“奶奶的厨房”。", correct: true, xp: 10 },
          { text: "It doesn't need a name at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Something warm, like Grandma's Kitchen.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This name feels more personal than the other options.", zh: "这个名字比其他几个选项更有个人色彩。" },
        skill: "workplace",
        grammarTag: "comparative",
        choices: [
          { text: "It does, and it honors her memory too.", zh: "确实是，而且也是对她的一种纪念。", correct: true, xp: 10 },
          { text: "It doesn't, all the names sound the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, and it honors her memory too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to figure out pricing next.", zh: "接下来我们需要研究定价问题。" },
        skill: "workplace",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's compare prices at local bakeries.", zh: "对，我们来比较一下本地烘焙店的价格吧。", correct: true, xp: 10 },
          { text: "Right, though pricing shouldn't matter at all.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's compare prices at local bakeries.",
        next: null
      }
    }
  },
  {
    id: "registering-the-business",
    transition: { en: "They visit a government office to register the business.", zh: "他们去了一趟政府机构办理营业登记。" },
    title: "Registering the Business",
    subtitle: "政府机构 · 注册营业",
    avatar: "🏛️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you have a business name already picked out?", zh: "你已经选好营业名称了吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's called Grandma's Kitchen.", zh: "选好了，叫“奶奶的厨房”。", correct: true, xp: 10 },
          { text: "No, names have never mattered to us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's called Grandma's Kitchen.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You'll also need a food handling permit.", zh: "你们还需要一份食品处理许可证。" },
        skill: "workplace",
        grammarTag: "will-future",
        choices: [
          { text: "Got it, where do we apply for that?", zh: "明白了，我们在哪儿申请呢？", correct: true, xp: 10 },
          { text: "Got it, though permits sound unnecessary to us.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Got it, where do we apply for that?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This should take about two weeks to process.", zh: "这大概需要两周时间才能处理完。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "That's fine, we can use the time to prepare.", zh: "没问题，我们可以利用这段时间准备。", correct: true, xp: 10 },
          { text: "That's unacceptable, we need it done today.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's fine, we can use the time to prepare.",
        next: null
      }
    }
  },
  {
    id: "setting-prices",
    transition: { en: "They calculate ingredient costs to figure out fair prices.", zh: "他们计算食材成本，以确定合理的定价。" },
    title: "Setting Prices",
    subtitle: "家里 · 定价",
    avatar: "💲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much do the ingredients cost for one batch?", zh: "一批的食材成本是多少？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "About fifteen dollars for a dozen cupcakes.", zh: "大概十五块钱能做一打杯子蛋糕。", correct: true, xp: 10 },
          { text: "Ingredients cost nothing, they're always free.", correct: false }
        ],
        hintOnWrong: "wh-问题回答成本 → About fifteen dollars for a dozen cupcakes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Our prices should be fair, but not too low.", zh: "我们的定价应该公道，但也不能太低。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, we still need to make a profit.", zh: "同意，我们还是需要赚取利润的。", correct: true, xp: 10 },
          { text: "Agreed, let's just give everything away for free.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, we still need to make a profit.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This price feels more reasonable than what we first considered.", zh: "这个价格比我们最初想的更合理一些。" },
        skill: "workplace",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's go with this number.", zh: "确实是，我们就用这个数字吧。", correct: true, xp: 10 },
          { text: "It doesn't, let's double the price instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's go with this number.",
        next: null
      }
    }
  },
  {
    id: "building-a-simple-website",
    transition: { en: "A tech-savvy friend helps them put together a simple online shop.", zh: "一位懂技术的朋友帮他们搭建了一个简单的网店。" },
    title: "Building a Simple Website",
    subtitle: "家里 · 搭建网店",
    avatar: "💻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you upload photos of your best cupcakes?", zh: "你能上传你做的最好看的杯子蛋糕照片吗？" },
        skill: "workplace",
        grammarTag: "can-modal",
        choices: [
          { text: "I can upload a few right now.", zh: "我现在就能上传几张。", correct: true, xp: 10 },
          { text: "I can't, I've never actually taken any photos.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can upload a few right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This photo looks better than the others.", zh: "这张照片比其他几张更好看。" },
        skill: "workplace",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's put it on the homepage.", zh: "确实是，我们把它放到主页上吧。", correct: true, xp: 10 },
          { text: "It doesn't, let's use a blurry one instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's put it on the homepage.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once this goes live, orders could start coming in fast.", zh: "一旦上线，订单可能很快就会涌进来。" },
        skill: "workplace",
        grammarTag: "conditional",
        choices: [
          { text: "If they do, we'll figure it out together.", zh: "如果真是这样，我们就一起想办法应对。", correct: true, xp: 10 },
          { text: "If they do, we'll just ignore them all.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If they do, we'll figure it out together.",
        next: null
      }
    }
  },
  {
    id: "the-first-order",
    transition: { en: "A notification chimes: their very first online order has arrived.", zh: "一声提示音响起：他们的第一份网络订单来了。" },
    title: "The First Order",
    subtitle: "家里 · 第一笔订单",
    avatar: "🔔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We just got our very first order!", zh: "我们刚收到了第一笔订单！" },
        skill: "workplace",
        grammarTag: "past-simple",
        choices: [
          { text: "I can't believe this is actually happening.", zh: "我不敢相信这真的发生了。", correct: true, xp: 10 },
          { text: "I already knew this would happen eventually.", correct: false }
        ],
        hintOnWrong: "过去时回应 → I can't believe this is actually happening.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What did they order, and when do they need it?", zh: "他们订了什么，什么时候需要？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "Two dozen cookies, ready by Friday.", zh: "两打饼干，周五之前要好。", correct: true, xp: 10 },
          { text: "Nothing was ordered, this must be a mistake.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → Two dozen cookies, ready by Friday.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make sure this first order is absolutely perfect.", zh: "我们要确保这第一笔订单做得完美无缺。" },
        skill: "workplace",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Agreed, let's put everything we have into it.", zh: "同意，我们要全力以赴。", correct: true, xp: 10 },
          { text: "Let's just do the bare minimum this time.", correct: false }
        ],
        hintOnWrong: "接受建议 → Agreed, let's put everything we have into it.",
        next: null
      }
    }
  },
  {
    id: "a-late-night-baking-session",
    transition: { en: "The night before delivery, they bake late into the evening.", zh: "交货前一晚，他们烘焙到深夜。" },
    title: "A Late-Night Baking Session",
    subtitle: "厨房 · 深夜烘焙",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you doing okay staying up this late?", zh: "熬到这么晚你还好吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, the excitement is keeping me awake.", zh: "我还好，兴奋感让我一直清醒着。", correct: true, xp: 10 },
          { text: "No, I fell asleep an hour ago.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, the excitement is keeping me awake.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This batch smells even better than the test batch.", zh: "这一批闻起来比试做的那批还要香。" },
        skill: "workplace",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I think we nailed it.", zh: "确实如此，我觉得我们做成了。", correct: true, xp: 10 },
          { text: "It really doesn't, something's clearly gone wrong.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I think we nailed it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you help me box these up carefully?", zh: "你能帮我小心地把这些装盒吗？" },
        skill: "workplace",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I'll be extra careful with them.", zh: "我能，我会格外小心的。", correct: true, xp: 10 },
          { text: "I can't, boxing things sounds too complicated.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, I'll be extra careful with them.",
        next: null
      }
    }
  },
  {
    id: "the-first-delivery",
    transition: { en: "They personally deliver the first order to a delighted customer.", zh: "他们亲自把第一笔订单送到了一位喜出望外的顾客手中。" },
    title: "The First Delivery",
    subtitle: "顾客家门口 · 首次交货",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These look even better than the photos online.", zh: "这些实物比网上的照片看起来还要好。" },
        skill: "workplace",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you so much, we hope you love them.", zh: "太感谢了，希望您会喜欢。", correct: true, xp: 10 },
          { text: "Thank you, though the photos were much nicer.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you so much, we hope you love them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How long have you two been baking together?", zh: "你们俩一起烘焙多久了？" },
        skill: "workplace",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've actually just started this business.", zh: "我们其实刚开始做这门生意不久。", correct: true, xp: 10 },
          { text: "We've never once baked anything together.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've actually just started this business.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll definitely be ordering from you again.", zh: "我一定还会再向你们下单的。", },
        skill: "workplace",
        grammarTag: "will-future",
        choices: [
          { text: "That means so much, thank you for the support.", zh: "这对我们意义重大，谢谢您的支持。", correct: true, xp: 10 },
          { text: "That's fine, though we'd rather not have repeat customers.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That means so much, thank you for the support.",
        next: null
      }
    }
  },
  {
    id: "juggling-work-and-baking",
    transition: { en: "Balancing the new business with parenthood proves tricky some days.", zh: "有些日子里，兼顾新生意和育儿并不容易。" },
    title: "Juggling Work and Baking",
    subtitle: "家里 · 兼顾工作与育儿",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you feeling overwhelmed with everything lately?", zh: "最近这些事让你觉得应接不暇吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "A little, but I'm managing okay.", zh: "有一点，但我还应付得来。", correct: true, xp: 10 },
          { text: "Not at all, everything feels effortless.", correct: false }
        ],
        hintOnWrong: "肯定回答 → A little, but I'm managing okay.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should probably set a limit on weekly orders.", zh: "我们大概应该给每周的订单量设个上限。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, that would keep things manageable.", zh: "好主意，这样能让一切都保持可控。", correct: true, xp: 10 },
          { text: "Bad idea, let's take every order that comes in.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, that would keep things manageable.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy it gets, our family still comes first.", zh: "不管多忙，我们的家庭永远是第一位的。" },
        skill: "workplace",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, that will never change.", zh: "不管多忙，这一点永远不会改变。", correct: true, xp: 10 },
          { text: "No matter how busy, the business matters more.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, that will never change.",
        next: null
      }
    }
  },
  {
    id: "one-month-of-business",
    transition: { en: "One month in, they look back at what Grandma's Kitchen has become.", zh: "开业一个月后，他们回顾“奶奶的厨房”走过的这段路。" },
    title: "One Month of Business",
    subtitle: "家里 · 开业一个月",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've already filled over thirty orders this month.", zh: "我们这个月已经完成了三十多份订单。" },
        skill: "workplace",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's incredible, we should be proud.", zh: "太厉害了，我们应该为此感到骄傲。", correct: true, xp: 10 },
          { text: "That's disappointing, we expected way more.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That's incredible, we should be proud.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How does it feel building something of our own?", zh: "打造属于我们自己的东西，感觉怎么样？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels incredibly fulfilling, honestly.", zh: "说实话，感觉特别有成就感。", correct: true, xp: 10 },
          { text: "It doesn't feel like anything special.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → It feels incredibly fulfilling, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Somewhere, I think your grandmother is proud of this.", zh: "我觉得，你祖母在某个地方一定为此感到骄傲。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "I like to think so too, honestly.", zh: "说实话，我也愿意这样相信。", correct: true, xp: 10 },
          { text: "I doubt it, she never cared about business.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I like to think so too, honestly.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "inspired", zh: "受启发的", category: "workplace" },
  { en: "baking", zh: "烘焙", category: "workplace" },
  { en: "hobby", zh: "爱好", category: "workplace" },
  { en: "business", zh: "生意", category: "workplace" },
  { en: "selling", zh: "销售", category: "workplace" },
  { en: "would pay", zh: "会愿意付钱", category: "workplace" },
  { en: "baked goods", zh: "烘焙食品", category: "workplace" },
  { en: "look into", zh: "研究，了解", category: "workplace" },
  { en: "business plan", zh: "商业计划", category: "workplace" },
  { en: "warm", zh: "温暖的", category: "workplace" },
  { en: "personal", zh: "个人化的", category: "workplace" },
  { en: "honors", zh: "致敬，纪念", category: "workplace" },
  { en: "memory", zh: "记忆，纪念", category: "workplace" },
  { en: "pricing", zh: "定价", category: "workplace" },
  { en: "local bakeries", zh: "本地烘焙店", category: "workplace" },
  { en: "government office", zh: "政府机构", category: "workplace" },
  { en: "register", zh: "注册", category: "workplace" },
  { en: "picked out", zh: "选定了", category: "workplace" },
  { en: "food handling permit", zh: "食品处理许可证", category: "workplace" },
  { en: "apply", zh: "申请", category: "workplace" },
  { en: "process", zh: "处理（申请等）", category: "workplace" },
  { en: "prepare", zh: "准备", category: "workplace" },
  { en: "ingredients", zh: "食材", category: "workplace" },
  { en: "batch", zh: "一批", category: "workplace" },
  { en: "dozen", zh: "一打", category: "workplace" },
  { en: "cupcakes", zh: "杯子蛋糕", category: "workplace" },
  { en: "fair", zh: "公道的", category: "workplace" },
  { en: "profit", zh: "利润", category: "workplace" },
  { en: "reasonable", zh: "合理的", category: "workplace" },
  { en: "tech-savvy", zh: "精通技术的", category: "workplace" },
  { en: "online shop", zh: "网店", category: "workplace" },
  { en: "upload", zh: "上传", category: "workplace" },
  { en: "homepage", zh: "主页", category: "workplace" },
  { en: "goes live", zh: "上线", category: "workplace" },
  { en: "orders", zh: "订单（复数）", category: "workplace" },
  { en: "coming in", zh: "涌进来", category: "workplace" },
  { en: "notification", zh: "通知提示", category: "workplace" },
  { en: "chimes", zh: "响起", category: "workplace" },
  { en: "first order", zh: "第一笔订单", category: "workplace" },
  { en: "cookies", zh: "饼干", category: "workplace" },
  { en: "bare minimum", zh: "最低限度", category: "workplace" },
  { en: "excitement", zh: "兴奋感", category: "workplace" },
  { en: "test batch", zh: "试做批次", category: "workplace" },
  { en: "nailed it", zh: "做成功了（口语）", category: "workplace" },
  { en: "box up", zh: "装盒", category: "workplace" },
  { en: "delighted", zh: "喜出望外的", category: "workplace" },
  { en: "customer", zh: "顾客", category: "workplace" },
  { en: "repeat customers", zh: "回头客", category: "workplace" },
  { en: "support", zh: "支持", category: "workplace" },
  { en: "juggling", zh: "兼顾多项事务", category: "workplace" },
  { en: "parenthood", zh: "为人父母", category: "workplace" },
  { en: "overwhelmed", zh: "应接不暇的", category: "workplace" },
  { en: "set a limit", zh: "设定上限", category: "workplace" },
  { en: "manageable", zh: "可控的", category: "workplace" },
  { en: "filled", zh: "完成了（订单）", category: "workplace" },
  { en: "fulfilling", zh: "有成就感的", category: "workplace" },
  { en: "somewhere", zh: "在某个地方", category: "workplace" }
);
