// 内容数据层：第五十一章，紧接第五十章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：车子出现异响，两人第一次自己处理汽车保养和维修。全新词汇领域：
// 机械师沟通/保养项目/故障诊断/维修报价。

GAME_CONTENT.scenes.push(
  {
    id: "a-strange-noise",
    transition: { en: "The car starts making a strange noise on the way to work.", zh: "上班路上，车子开始发出奇怪的声音。" },
    title: "A Strange Noise",
    subtitle: "车上 · 奇怪的声音",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you hear that clicking sound too?", zh: "你也听到那个咔哒声了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's been going on for a few minutes.", zh: "是的，已经响了好几分钟了。", correct: true, xp: 10 },
          { text: "No, the car sounds completely silent to me.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's been going on for a few minutes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This sound is worse than it was yesterday.", zh: "这个声音比昨天更严重了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we should get it checked soon.", zh: "确实是，我们应该尽快检查一下。", correct: true, xp: 10 },
          { text: "It isn't, this sound has always been there.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we should get it checked soon.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book a mechanic appointment this week.", zh: "我们这周预约一下机械师吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's call them this afternoon.", zh: "好主意，我们今天下午就打电话吧。", correct: true, xp: 10 },
          { text: "Let's just ignore it and hope it goes away.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's call them this afternoon.",
        next: null
      }
    }
  },
  {
    id: "describing-the-problem",
    transition: { en: "At the shop, they try to describe the noise to the mechanic.", zh: "在修车厂，他们试着向机械师描述这个声音。" },
    title: "Describing the Problem",
    subtitle: "修车厂 · 描述问题",
    avatar: "🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "When does the noise happen, mostly?", zh: "这个声音大部分是什么时候出现的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Mostly when I turn the steering wheel.", zh: "大部分是我转方向盘的时候。", correct: true, xp: 10 },
          { text: "It never happens at any particular time.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时机 → Mostly when I turn the steering wheel.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you describe what the sound is like?", zh: "你能描述一下这个声音是什么样的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's a sharp clicking sound.", zh: "可以，是一种尖锐的咔哒声。", correct: true, xp: 10 },
          { text: "I can't describe sounds, that's impossible for me.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's a sharp clicking sound.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll take it for a quick test drive to hear it.", zh: "我会开去简单试驾一下，听听这个声音。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Sounds good, let us know what you find.", zh: "好的，有发现告诉我们一声。", correct: true, xp: 10 },
          { text: "Sounds unnecessary, just guess what it is.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Sounds good, let us know what you find.",
        next: null
      }
    }
  },
  {
    id: "the-diagnosis",
    transition: { en: "The mechanic returns with news about what's causing the noise.", zh: "机械师回来告知了造成噪音的原因。" },
    title: "The Diagnosis",
    subtitle: "修车厂 · 故障诊断",
    avatar: "🧑‍🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It looks like a worn-out wheel bearing.", zh: "看起来是轮毂轴承磨损了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Okay, how serious is that problem exactly?", zh: "好的，这个问题具体有多严重？", correct: true, xp: 10 },
          { text: "Okay, wheel bearings never matter much.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Okay, how serious is that problem exactly?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This part is more expensive to fix than a simple oil change.", zh: "修这个零件比换机油要贵得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, safety parts usually cost more.", zh: "有道理，安全部件通常更贵一些。", correct: true, xp: 10 },
          { text: "That's odd, all repairs should cost the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, safety parts usually cost more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we don't fix it now, it could get worse.", zh: "如果我们现在不修，情况可能会恶化。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's fix it today.", zh: "如果真是这样，我们今天就修吧。", correct: true, xp: 10 },
          { text: "If that's true, let's wait a few more months.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, let's fix it today.",
        next: null
      }
    }
  },
  {
    id: "getting-a-quote",
    transition: { en: "The mechanic hands them a written repair quote.", zh: "机械师给了他们一份书面维修报价。" },
    title: "Getting a Quote",
    subtitle: "修车厂 · 维修报价",
    avatar: "📄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much will the repair cost in total?", zh: "总共维修要花多少钱？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "About four hundred dollars, including labor.", zh: "大概四百块，包括人工费。", correct: true, xp: 10 },
          { text: "The repair costs absolutely nothing at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答金额 → About four hundred dollars, including labor.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This quote is actually lower than I expected.", zh: "这个报价其实比我预想的要低。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a relief, let's go ahead with it.", zh: "这让人松了口气，我们就修吧。", correct: true, xp: 10 },
          { text: "That's suspicious, prices this low seem fake.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a relief, let's go ahead with it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would you like us to check anything else while it's here?", zh: "趁车在这儿，您想让我们检查点别的吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Sure, could you check the brakes too?", zh: "好的，能麻烦也检查一下刹车吗？", correct: true, xp: 10 },
          { text: "No, one problem at a time is plenty.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Sure, could you check the brakes too?",
        next: null
      }
    }
  },
  {
    id: "waiting-at-the-shop",
    transition: { en: "They wait at the shop while the repair is completed.", zh: "他们在修车厂等待维修完成。" },
    title: "Waiting at the Shop",
    subtitle: "修车厂 · 等待维修",
    avatar: "🪑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How long is this repair usually going to take?", zh: "这次维修通常需要多长时间？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Probably about two hours, they said.", zh: "他们说大概两个小时左右。", correct: true, xp: 10 },
          { text: "It takes zero time, cars fix themselves.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时长 → Probably about two hours, they said.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This waiting area is nicer than most shops I've been to.", zh: "这个等候区比我去过的大多数修车厂都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, at least there's free coffee.", zh: "确实是，至少还有免费咖啡。", correct: true, xp: 10 },
          { text: "It really isn't, this place feels awful.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, at least there's free coffee.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab a coffee while we wait.", zh: "我们等的时候去拿杯咖啡吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's go check the machine.", zh: "好主意，我们去看看那台咖啡机吧。", correct: true, xp: 10 },
          { text: "Let's just sit here and stare at the wall.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's go check the machine.",
        next: null
      }
    }
  },
  {
    id: "the-repair-is-done",
    transition: { en: "The mechanic returns to let them know the car is ready.", zh: "机械师回来告诉他们车已经修好了。" },
    title: "The Repair Is Done",
    subtitle: "修车厂 · 维修完成",
    avatar: "✅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your car is all set, and the noise is gone.", zh: "您的车已经修好了，那个噪音也没有了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's fantastic, thank you for fixing it.", zh: "太好了，谢谢您把它修好。", correct: true, xp: 10 },
          { text: "That's disappointing, we wanted the noise to stay.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's fantastic, thank you for fixing it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We also topped off your fluids while it was here.", zh: "趁车在这儿，我们也把各种液体加满了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Thank you, we really appreciate the extra care.", zh: "谢谢，我们很感激你们这份额外的用心。", correct: true, xp: 10 },
          { text: "Thank you, though we didn't ask for that.", correct: false }
        ],
        hintOnWrong: "过去时表达感谢的回应 → Thank you, we really appreciate the extra care.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This car should run more smoothly now.", zh: "现在这车应该开起来更顺畅了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's great, let's take it for a test drive.", zh: "太好了，我们去试驾一下吧。", correct: true, xp: 10 },
          { text: "That's fine, smoothness never really matters.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's great, let's take it for a test drive.",
        next: null
      }
    }
  },
  {
    id: "setting-up-maintenance-reminders",
    transition: { en: "They decide to stay on top of maintenance from now on.", zh: "他们决定从此以后好好跟上保养的节奏。" },
    title: "Setting Up Maintenance Reminders",
    subtitle: "家里 · 设置保养提醒",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How often should we get an oil change?", zh: "我们应该多久换一次机油？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Every six months, or every eight thousand kilometers.", zh: "每六个月，或者每行驶八千公里。", correct: true, xp: 10 },
          { text: "Oil changes are something we never need.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → Every six months, or every eight thousand kilometers.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should set a reminder on our phones.", zh: "我们应该在手机上设个提醒。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, I'll set it up right now.", zh: "好主意，我现在就设置。", correct: true, xp: 10 },
          { text: "Bad idea, we'll just remember on our own.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, I'll set it up right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Staying ahead of problems saves money in the long run.", zh: "提前预防问题从长远来看能省钱。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's true, prevention beats repair every time.", zh: "确实如此，预防永远胜过维修。", correct: true, xp: 10 },
          { text: "That's not true, waiting always costs less.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's true, prevention beats repair every time.",
        next: null
      }
    }
  },
  {
    id: "a-flat-tire",
    transition: { en: "Weeks later, they discover a flat tire in the driveway.", zh: "几周后，他们在车道上发现一个轮胎瘪了。" },
    title: "A Flat Tire",
    subtitle: "车道 · 轮胎瘪了",
    avatar: "🛞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you know how to change a tire?", zh: "你知道怎么换轮胎吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I actually learned years ago.", zh: "知道，其实我很多年前就学过。", correct: true, xp: 10 },
          { text: "No, and I've never even tried before.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I actually learned years ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This spare tire looks smaller than the others.", zh: "这个备用轮胎看起来比其他轮胎小。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but it should get us to a shop.", zh: "确实是，但应该能撑到我们到修车厂。", correct: true, xp: 10 },
          { text: "It isn't, all four tires look identical.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but it should get us to a shop.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you hand me the wrench from the trunk?", zh: "你能把后备箱里的扳手递给我吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, one second, I'll grab it.", zh: "可以，等一下，我去拿。", correct: true, xp: 10 },
          { text: "I can't, I have no idea where that is.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, one second, I'll grab it.",
        next: null
      }
    }
  },
  {
    id: "buying-new-tires",
    transition: { en: "After the flat, they decide it's finally time for new tires.", zh: "瘪胎事件之后，他们决定终于该换新轮胎了。" },
    title: "Buying New Tires",
    subtitle: "轮胎店 · 购买新轮胎",
    avatar: "🛞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These tires are rated for more kilometers than your old ones.", zh: "这些轮胎的额定里程比你们的旧轮胎更长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That sounds great, let's go with that brand.", zh: "听起来不错，我们就选这个牌子吧。", correct: true, xp: 10 },
          { text: "That doesn't sound great, kilometers never matter.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That sounds great, let's go with that brand.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you want all four tires replaced today?", zh: "您今天要换全部四个轮胎吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's do all four while we're here.", zh: "好的，既然来了就都换了吧。", correct: true, xp: 10 },
          { text: "No, we only need one tire replaced.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's do all four while we're here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This car will handle so much better on new tires.", zh: "换了新轮胎，这车的操控会好很多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I can already tell the difference, honestly.", zh: "说实话，我已经能感觉到不同了。", correct: true, xp: 10 },
          { text: "I can't tell any difference at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I can already tell the difference, honestly.",
        next: null
      }
    }
  },
  {
    id: "a-worthwhile-investment",
    transition: { en: "That evening, they reflect on finally taking care of the car properly.", zh: "那天晚上，他们感慨终于好好照顾了这辆车。" },
    title: "A Worthwhile Investment",
    subtitle: "家里 · 值得的投入",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This car has been more reliable than I expected lately.", zh: "最近这车比我预想的更可靠了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, staying on top of it paid off.", zh: "确实如此，及时保养真的有回报。", correct: true, xp: 10 },
          { text: "It really hasn't, this car breaks down constantly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, staying on top of it paid off.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've learned so much about basic car care this year.", zh: "今年我们学到了很多基本的汽车保养知识。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and it's saved us money too.", zh: "确实如此，而且也帮我们省了钱。", correct: true, xp: 10 },
          { text: "We really haven't, we've learned nothing at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and it's saved us money too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Taking care of the little things really does matter.", zh: "照顾好这些小事确实很重要。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, in more ways than one.", zh: "确实如此，而且体现在很多方面。", correct: true, xp: 10 },
          { text: "It doesn't, small things never really matter.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, in more ways than one.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "strange noise", zh: "奇怪的声音", category: "community" },
  { en: "clicking sound", zh: "咔哒声", category: "community" },
  { en: "going on", zh: "持续发生", category: "community" },
  { en: "mechanic", zh: "机械师", category: "community" },
  { en: "steering wheel", zh: "方向盘", category: "community" },
  { en: "sharp", zh: "尖锐的", category: "community" },
  { en: "test drive", zh: "试驾", category: "community" },
  { en: "worn-out", zh: "磨损的", category: "community" },
  { en: "wheel bearing", zh: "轮毂轴承", category: "community" },
  { en: "expensive", zh: "昂贵的", category: "community" },
  { en: "oil change", zh: "换机油", category: "community" },
  { en: "safety parts", zh: "安全部件", category: "community" },
  { en: "quote", zh: "报价", category: "community" },
  { en: "in total", zh: "总共", category: "community" },
  { en: "including", zh: "包括", category: "community" },
  { en: "labor", zh: "人工费", category: "community" },
  { en: "brakes", zh: "刹车", category: "community" },
  { en: "waiting area", zh: "等候区", category: "community" },
  { en: "free coffee", zh: "免费咖啡", category: "community" },
  { en: "coffee machine", zh: "咖啡机", category: "community" },
  { en: "all set", zh: "都弄好了", category: "community" },
  { en: "gone", zh: "消失了的", category: "community" },
  { en: "topped off", zh: "加满了的", category: "community" },
  { en: "fluids", zh: "各种液体（复数）", category: "community" },
  { en: "extra care", zh: "额外的用心", category: "community" },
  { en: "run smoothly", zh: "运行顺畅", category: "community" },
  { en: "maintenance", zh: "保养", category: "community" },
  { en: "reminders", zh: "提醒（复数）", category: "community" },
  { en: "kilometers", zh: "公里（复数）", category: "community" },
  { en: "staying ahead", zh: "提前预防", category: "community" },
  { en: "in the long run", zh: "从长远来看", category: "community" },
  { en: "prevention", zh: "预防", category: "community" },
  { en: "flat tire", zh: "瘪胎", category: "community" },
  { en: "change a tire", zh: "换轮胎", category: "community" },
  { en: "spare tire", zh: "备用轮胎", category: "community" },
  { en: "identical", zh: "一模一样的", category: "community" },
  { en: "wrench", zh: "扳手", category: "community" },
  { en: "tires", zh: "轮胎（复数）", category: "community" },
  { en: "rated", zh: "额定的", category: "community" },
  { en: "brand", zh: "品牌", category: "community" },
  { en: "handle", zh: "操控", category: "community" },
  { en: "tell the difference", zh: "感觉出不同", category: "community" },
  { en: "reliable", zh: "可靠的", category: "community" },
  { en: "breaks down", zh: "抛锚", category: "community" },
  { en: "basic car care", zh: "基本汽车保养", category: "community" },
  { en: "in more ways than one", zh: "体现在多个方面", category: "community" }
);
