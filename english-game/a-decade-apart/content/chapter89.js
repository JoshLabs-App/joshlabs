// 内容数据层：第八十九章，紧接第八十八章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人去果园摘苹果，还压了苹果汁。全新词汇领域：
// 果园/果篮/榨汁机/发酵苹果酒。

GAME_CONTENT.scenes.push(
  {
    id: "arriving-at-the-orchard",
    transition: { en: "They arrive at a family orchard on a crisp autumn morning.", zh: "在一个清爽的秋日早晨，他们来到了一家果园。" },
    title: "Arriving at the Orchard",
    subtitle: "果园 · 抵达果园",
    avatar: "🍎",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever picked apples straight from a tree?", zh: "你以前有直接从树上摘过苹果吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never picked any, only bought them at stores.", zh: "我从没摘过，只在店里买过。", correct: true, xp: 10 },
          { text: "I've picked apples every single day this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never picked any, only bought them at stores.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These rows look longer than any orchard I've seen in photos.", zh: "这些行列比我在照片里见过的任何果园都要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They do, we could be here all afternoon.", zh: "确实是，我们可能要在这待一整个下午了。", correct: true, xp: 10 },
          { text: "Length doesn't matter, let's just pick five apples.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They do, we could be here all afternoon.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab some baskets before we start picking.", zh: "开始摘之前我们先拿几个果篮吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, we'll need somewhere to put them.", zh: "好主意，我们总得有地方放苹果。", correct: true, xp: 10 },
          { text: "Let's just carry them all in our arms.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, we'll need somewhere to put them.",
        next: null
      }
    }
  },
  {
    id: "picking-apples-together",
    transition: { en: "Their toddler reaches up eagerly toward a low, red apple.", zh: "孩子伸手急切地够向一颗低处的红苹果。" },
    title: "Picking Apples Together",
    subtitle: "果园 · 一起摘苹果",
    avatar: "🧺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you reach that one on the lower branch?", zh: "你能够到低处树枝上那颗吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, just barely on their tiptoes.", zh: "他们能够到，踮着脚刚刚好够到。", correct: true, xp: 10 },
          { text: "They can't reach anything from the ground.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, just barely on their tiptoes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This apple feels heavier than it looks.", zh: "这颗苹果摸起来比看上去要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, it must be really ripe.", zh: "确实是，它一定很熟了。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's just toss it in.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, it must be really ripe.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Look how quickly this basket is filling up!", zh: "看这个果篮装得多快！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I see it, we're a pretty good team.", zh: "我看到了，我们配合得挺不错的。", correct: true, xp: 10 },
          { text: "I don't see any apples in that basket.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I see it, we're a pretty good team.",
        next: null
      }
    }
  },
  {
    id: "comparing-apple-varieties",
    transition: { en: "Signs along the rows label different apple varieties by name.", zh: "行列旁的标牌标注着不同苹果品种的名称。" },
    title: "Comparing Apple Varieties",
    subtitle: "果园 · 比较苹果品种",
    avatar: "🏷️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which variety do you think tastes the sweetest?", zh: "你觉得哪个品种尝起来最甜？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Probably this one, it smells amazing already.", zh: "大概是这种吧，闻起来就已经很香了。", correct: true, xp: 10 },
          { text: "None of them have any taste at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Probably this one, it smells amazing already.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This variety is crunchier than the ones we usually buy.", zh: "这个品种比我们平时买的要更脆。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I could get used to this kind.", zh: "确实是，我可能会喜欢上这个品种。", correct: true, xp: 10 },
          { text: "Crunch doesn't matter, let's just grab any apple.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I could get used to this kind.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's pick a mix so we can compare them all.", zh: "我们挑几种混合一下，这样可以都比较一下。", },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, variety makes it more fun.", zh: "好啊，多样化会更有趣一些。", correct: true, xp: 10 },
          { text: "Let's just pick one kind and stick with it.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, variety makes it more fun.",
        next: null
      }
    }
  },
  {
    id: "weighing-the-baskets",
    transition: { en: "At the barn, a farmhand weighs their heavy baskets on a scale.", zh: "在谷仓里，一位农场工人用秤称了他们沉甸甸的果篮。" },
    title: "Weighing the Baskets",
    subtitle: "谷仓 · 称重果篮",
    avatar: "⚖️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many pounds do you think we picked today?", zh: "你觉得我们今天摘了多少磅？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe thirty pounds, we filled two full baskets.", zh: "大概三十磅吧，我们装满了两整篮。", correct: true, xp: 10 },
          { text: "We didn't pick any apples at all today.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → Maybe thirty pounds, we filled two full baskets.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This basket weighs more than I expected it to.", zh: "这个果篮比我预想的要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, we really got carried away picking.", zh: "确实是，我们摘得太投入了。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's dump some apples out.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, we really got carried away picking.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll never eat all of these before they go bad.", zh: "这么多苹果我们根本吃不完，会坏掉的。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We won't, but we could press some into cider.", zh: "确实吃不完，不过我们可以压一些苹果汁。", correct: true, xp: 10 },
          { text: "We will finish all of them by tonight easily.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We won't, but we could press some into cider.",
        next: null
      }
    }
  },
  {
    id: "trying-the-cider-press",
    transition: { en: "They try the orchard's old wooden cider press for the first time.", zh: "他们第一次尝试使用果园里那台老式木制榨汁机。" },
    title: "Trying the Cider Press",
    subtitle: "谷仓 · 尝试榨汁机",
    avatar: "🧃",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This crank is harder to turn than I expected.", zh: "这个摇柄比我预想的要更难转动。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's take turns cranking it.", zh: "确实是，我们轮流来转吧。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just give up.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's take turns cranking it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you smell how sweet this juice already is?", zh: "你能闻到这果汁已经有多甜了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it smells incredible right now.", zh: "我能闻到，现在闻起来棒极了。", correct: true, xp: 10 },
          { text: "I can't smell anything from the press.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it smells incredible right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is producing more juice than I thought apples could hold.", zh: "这榨出的汁比我以为苹果能装的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, apples are mostly water it seems.", zh: "确实是，看来苹果大部分是水分。", correct: true, xp: 10 },
          { text: "Amount doesn't matter, let's stop cranking now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, apples are mostly water it seems.",
        next: null
      }
    }
  },
  {
    id: "tasting-fresh-cider",
    transition: { en: "They pour the freshly pressed juice into small paper cups.", zh: "他们把刚压好的果汁倒进了小纸杯里。" },
    title: "Tasting Fresh Cider",
    subtitle: "谷仓 · 品尝鲜榨苹果汁",
    avatar: "🥤",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tastes fresher than any juice from a bottle.", zh: "这尝起来比瓶装果汁要新鲜得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, nothing compares to this.", zh: "确实如此，没什么能比得上这个。", correct: true, xp: 10 },
          { text: "It really doesn't, bottled juice tastes better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, nothing compares to this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Their whole face is lighting up from that first sip!", zh: "他们喝了第一口整张脸都亮了起来！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I can see that, they clearly love it.", zh: "我看得出来，他们显然很喜欢。", correct: true, xp: 10 },
          { text: "I don't see any change on their face.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I can see that, they clearly love it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should bottle some to bring home with us.", zh: "我们应该装一些瓶带回家。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Definitely, let's fill a jug before we leave.", zh: "当然，我们走之前装满一壶吧。", correct: true, xp: 10 },
          { text: "Definitely not, let's leave every drop here.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Definitely, let's fill a jug before we leave.",
        next: null
      }
    }
  },
  {
    id: "a-hayride-around-the-farm",
    transition: { en: "They climb onto a wagon for a bumpy hayride around the farm.", zh: "他们爬上了一辆干草车，绕着农场颠簸兜风。" },
    title: "A Hayride Around the Farm",
    subtitle: "农场 · 干草车兜风",
    avatar: "🌾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This ride is bumpier than I expected it to be.", zh: "这趟车程比我预想的要更颠簸。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, hold on tight to the rail.", zh: "确实是，扶紧栏杆吧。", correct: true, xp: 10 },
          { text: "Bumpiness doesn't matter, let's stand up now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, hold on tight to the rail.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you having fun back there on the hay?", zh: "你们在后面坐干草上玩得开心吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They are, they haven't stopped smiling.", zh: "很开心，他们一直笑个不停。", correct: true, xp: 10 },
          { text: "They aren't, they want to get off right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → They are, they haven't stopped smiling.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This view of the orchard is prettier from up here.", zh: "从这里看果园的风景更美。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, the whole valley looks golden.", zh: "确实是，整个山谷看起来一片金黄。", correct: true, xp: 10 },
          { text: "Beauty doesn't matter, let's just look at our phones.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, the whole valley looks golden.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-pumpkin",
    transition: { en: "Near the exit, a patch of pumpkins catches their toddler's eye.", zh: "出口附近，一片南瓜地吸引了孩子的目光。" },
    title: "Choosing a Pumpkin",
    subtitle: "南瓜地 · 挑选南瓜",
    avatar: "🎃",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which pumpkin do you want to bring home with us?", zh: "你想带哪个南瓜回家？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They're pointing at the biggest one, of course.", zh: "他们当然是指着最大的那个啦。", correct: true, xp: 10 },
          { text: "They don't want any pumpkin at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → They're pointing at the biggest one, of course.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This one is rounder than the others in the patch.", zh: "这个比南瓜地里其他的要更圆。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, it'll look great on our porch.", zh: "确实是，放在我们门廊上会很好看。", correct: true, xp: 10 },
          { text: "Shape doesn't matter, let's just grab any one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, it'll look great on our porch.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This has been such a full, happy day for us.", zh: "对我们来说，今天真是充实又快乐的一天。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really has, I don't want it to end.", zh: "确实如此，我真不想这天就这样结束。", correct: true, xp: 10 },
          { text: "It really hasn't, today felt pretty dull.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really has, I don't want it to end.",
        next: null
      }
    }
  },
  {
    id: "loading-up-the-car",
    transition: { en: "They pack apples, cider jugs, and the pumpkin into the trunk.", zh: "他们把苹果、苹果汁壶和南瓜都装进了后备箱。" },
    title: "Loading Up the Car",
    subtitle: "停车场 · 装车",
    avatar: "🚙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This trunk is fuller than it's ever been before.", zh: "这个后备箱比以前任何时候都要装得满。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we really went all in today.", zh: "确实是，我们今天真是尽兴了。", correct: true, xp: 10 },
          { text: "Fullness doesn't matter, let's buy even more apples.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we really went all in today.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What should we make first with all these apples?", zh: "用这么多苹果我们该先做什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's start with a big apple pie tonight.", zh: "我们今晚先做一个大苹果派吧。", correct: true, xp: 10 },
          { text: "We shouldn't make anything with these apples.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Let's start with a big apple pie tonight.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many apples we brought, it'll never feel like too many.", zh: "不管我们带了多少苹果，都不会觉得太多。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many, we'll find a use for them.", zh: "不管有多少，我们都能想到用处。", correct: true, xp: 10 },
          { text: "No matter how many, half of these will spoil.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many, we'll find a use for them.",
        next: null
      }
    }
  },
  {
    id: "baking-the-first-apple-pie",
    transition: { en: "That evening, the kitchen fills with the smell of cinnamon and baked apples.", zh: "那天晚上，厨房里弥漫着肉桂和烤苹果的香气。" },
    title: "Baking the First Apple Pie",
    subtitle: "厨房 · 烤第一个苹果派",
    avatar: "🥧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This kitchen smells better than it has in weeks.", zh: "这厨房闻起来比过去几周都要香。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I could smell this forever.", zh: "确实是，我可以永远闻着这个味道。", correct: true, xp: 10 },
          { text: "Smell doesn't matter, let's open the windows.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I could smell this forever.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This pie came out better than any we've ever made.", zh: "这个派做出来比我们做过的任何一个都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, fresh apples made all the difference.", zh: "确实如此，新鲜的苹果带来了全然不同的效果。", correct: true, xp: 10 },
          { text: "It really didn't, this pie tastes pretty bland.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, fresh apples made all the difference.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make this an autumn tradition every single year.", zh: "我们把这个定成每年秋天的传统吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, today was too good not to repeat.", zh: "好啊，今天太美好了，值得每年重复。", correct: true, xp: 10 },
          { text: "Let's never do this trip again after today.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, today was too good not to repeat.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "orchard", zh: "果园", category: "community" },
  { en: "crisp", zh: "清爽的", category: "community" },
  { en: "rows", zh: "行列（复数）", category: "community" },
  { en: "baskets", zh: "果篮（复数）", category: "community" },
  { en: "tiptoes", zh: "脚尖", category: "community" },
  { en: "ripe", zh: "熟的", category: "community" },
  { en: "varieties", zh: "品种（复数）", category: "community" },
  { en: "crunchier", zh: "更脆的", category: "community" },
  { en: "farmhand", zh: "农场工人", category: "community" },
  { en: "scale", zh: "秤", category: "community" },
  { en: "pounds", zh: "磅（复数）", category: "community" },
  { en: "carried away", zh: "太投入，忘乎所以", category: "community" },
  { en: "cider press", zh: "榨汁机", category: "community" },
  { en: "crank", zh: "摇柄", category: "community" },
  { en: "cider", zh: "苹果汁，苹果酒", category: "community" },
  { en: "paper cups", zh: "纸杯（复数）", category: "community" },
  { en: "jug", zh: "壶", category: "community" },
  { en: "hayride", zh: "干草车兜风", category: "community" },
  { en: "wagon", zh: "马车，货车", category: "community" },
  { en: "bumpier", zh: "更颠簸的", category: "community" },
  { en: "rail", zh: "栏杆", category: "community" },
  { en: "valley", zh: "山谷", category: "community" },
  { en: "golden", zh: "金黄色的", category: "community" },
  { en: "pumpkin", zh: "南瓜", category: "community" },
  { en: "patch", zh: "地块", category: "community" },
  { en: "rounder", zh: "更圆的", category: "community" },
  { en: "trunk", zh: "后备箱", category: "community" },
  { en: "fuller", zh: "更满的", category: "community" },
  { en: "went all in", zh: "尽兴，全情投入", category: "community" },
  { en: "spoil", zh: "变坏，腐烂", category: "community" }
);
