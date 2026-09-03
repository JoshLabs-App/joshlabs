// 内容数据层：第三十九章，紧接第三十八章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter38.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：宝宝出生后的头几周，两人适应新生儿的照顾节奏。全新词汇领域：
// 新生儿护理/喂养/儿科随访/睡眠不足。

GAME_CONTENT.scenes.push(
  {
    id: "bringing-the-baby-home",
    transition: { en: "Two days later, they carry the baby through their own front door.", zh: "两天后，他们把宝宝抱进了自己家门。" },
    title: "Bringing the Baby Home",
    subtitle: "家里 · 抱宝宝回家",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This house feels completely different now, doesn't it?", zh: "这个家现在感觉完全不一样了，不是吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, in the best possible way.", zh: "确实是，而且是最好的那种不一样。", correct: true, xp: 10 },
          { text: "It doesn't feel any different at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, in the best possible way.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you set up the bassinet in our room?", zh: "你能把婴儿床摆在我们房间吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can set it up right now.", zh: "我现在就能摆好。", correct: true, xp: 10 },
          { text: "I can't, we don't own a bassinet.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can set it up right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Our dog seems curious but calm about the baby.", zh: "我们家狗对宝宝好像既好奇又平静。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, all that training paid off.", zh: "这让人安心，之前的训练真的有用了。", correct: true, xp: 10 },
          { text: "That's concerning, we should send the dog away.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, all that training paid off.",
        next: null
      }
    }
  },
  {
    id: "learning-to-swaddle",
    transition: { en: "A nurse's instructions on swaddling come in handy that first night.", zh: "第一晚，护士教的襁褓包法派上了用场。" },
    title: "Learning to Swaddle",
    subtitle: "家里 · 学习包襁褓",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you remember how the nurse folded the blanket?", zh: "你还记得护士是怎么折毯子的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can remember most of it, I think.", zh: "我大概能记得大部分。", correct: true, xp: 10 },
          { text: "I can't remember anything she showed us.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can remember most of it, I think.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This swaddle is tighter than the last attempt.", zh: "这次包的襁褓比上次更紧了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, and it seems to be working.", zh: "确实是，而且看起来很有效。", correct: true, xp: 10 },
          { text: "It isn't, this one is actually looser.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, and it seems to be working.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Look, they're finally settling down.", zh: "看，他们终于安静下来了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "They're finally calming down, thank goodness.", zh: "他们终于平静下来了，谢天谢地。", correct: true, xp: 10 },
          { text: "They're getting more upset by the second.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → They're finally calming down, thank goodness.",
        next: null
      }
    }
  },
  {
    id: "middle-of-the-night-feedings",
    transition: { en: "At 3 a.m., the baby wakes up hungry again.", zh: "凌晨三点，宝宝又饿醒了。" },
    title: "Middle-of-the-Night Feedings",
    subtitle: "卧室 · 深夜喂奶",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is it your turn or mine this time?", zh: "这次轮到你还是我？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It's my turn, go back to sleep.", zh: "轮到我了，你继续睡吧。", correct: true, xp: 10 },
          { text: "It's nobody's turn, let's ignore the crying.", correct: false }
        ],
        hintOnWrong: "wh-问题回答归属 → It's my turn, go back to sleep.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How many hours of sleep did you get last night?", zh: "你昨晚睡了几个小时？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I probably got about three hours, total.", zh: "我大概总共睡了三个小时。", correct: true, xp: 10 },
          { text: "I got a full eight hours, easily.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时长 → I probably got about three hours, total.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We've both become experts at surviving on little sleep.", zh: "我们俩都成了靠少量睡眠撑下去的专家了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, though I could use more coffee.", zh: "确实如此，不过我需要更多咖啡。", correct: true, xp: 10 },
          { text: "We really haven't, sleep has never been an issue.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, though I could use more coffee.",
        next: null
      }
    }
  },
  {
    id: "the-first-pediatrician-visit",
    transition: { en: "They take the baby for the first pediatrician checkup.", zh: "他们带宝宝去做第一次儿科体检。" },
    title: "The First Pediatrician Visit",
    subtitle: "儿科诊所 · 首次体检",
    avatar: "🩺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How has feeding been going so far?", zh: "目前喂养情况怎么样？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's been going smoothly, actually.", zh: "其实进行得很顺利。", correct: true, xp: 10 },
          { text: "It's never once gone well at all.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → It's been going smoothly, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Their weight is right on track for this age.", zh: "他们这个年龄段的体重完全符合标准。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's such a relief to hear.", zh: "听到这个真的松了一口气。", correct: true, xp: 10 },
          { text: "That's concerning, we expected more weight gain.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's such a relief to hear.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Do you have any questions before you go?", zh: "离开前你们有什么问题吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, actually, when should we expect a smile?", zh: "有的，宝宝大概什么时候会笑？", correct: true, xp: 10 },
          { text: "No, we understand everything perfectly already.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, actually, when should we expect a smile?",
        next: null
      }
    }
  },
  {
    id: "sleep-deprivation",
    transition: { en: "By the end of the first week, exhaustion sets in.", zh: "第一周快结束时，疲惫感袭来。" },
    title: "Sleep Deprivation",
    subtitle: "家里 · 睡眠不足",
    avatar: "😴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I feel more tired than I've ever felt in my life.", zh: "我感觉比这辈子任何时候都累。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Me too, but somehow it's worth it.", zh: "我也是，但不知怎么地这一切都值得。", correct: true, xp: 10 },
          { text: "Me too, and I regret every part of this.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Me too, but somehow it's worth it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we take turns napping this afternoon?", zh: "今天下午我们要不要轮流小睡一下？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's split the afternoon in half.", zh: "好，我们把下午分成两半吧。", correct: true, xp: 10 },
          { text: "No, naps are a complete waste of time.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's split the afternoon in half.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even on the hardest days, I wouldn't trade this for anything.", zh: "即使是最难熬的日子，我也不会用这一切换任何东西。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even on the hardest days, I feel the same way.", zh: "即使是最难熬的日子，我也有同样的感受。", correct: true, xp: 10 },
          { text: "Even on the hardest days, I'd trade this in a second.", correct: false }
        ],
        hintOnWrong: "让步句 → Even on the hardest days, I feel the same way.",
        next: null
      }
    }
  },
  {
    id: "visitors-drop-by",
    transition: { en: "Grandparents stop by to meet the baby for the first time.", zh: "祖父母第一次来看宝宝。" },
    title: "Visitors Drop By",
    subtitle: "家里 · 亲友来访",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Oh, they have your nose, don't they?", zh: "哦，他们的鼻子长得像你，是不是？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Everyone keeps saying that, actually.", zh: "其实大家都这么说。", correct: true, xp: 10 },
          { text: "Nobody has ever said that before.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Everyone keeps saying that, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Would you like us to bring dinner over this week?", zh: "这周要不要我们给你们送饭过来？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That would be an enormous help, thank you.", zh: "那真的会帮上大忙，谢谢你们。", correct: true, xp: 10 },
          { text: "That would be completely unnecessary, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That would be an enormous help, thank you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let us know if you need anything at all.", zh: "有什么需要就告诉我们。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "We will, and thank you for everything.", zh: "我们会的，谢谢你们的一切。", correct: true, xp: 10 },
          { text: "We will, but we probably won't need help.", correct: false }
        ],
        hintOnWrong: "用连接词 → We will, and thank you for everything.",
        next: null
      }
    }
  },
  {
    id: "the-first-bath",
    transition: { en: "That evening, they attempt the baby's first bath at home.", zh: "那天晚上，他们尝试给宝宝在家洗第一次澡。" },
    title: "The First Bath",
    subtitle: "浴室 · 第一次洗澡",
    avatar: "🛁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you check the water temperature first?", zh: "你能先检查一下水温吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can check it right now with my wrist.", zh: "我现在就用手腕试一下水温。", correct: true, xp: 10 },
          { text: "I can't check temperature, I don't know how.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can check it right now with my wrist.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They seem calmer in the water than I expected.", zh: "他们在水里看起来比我预想的更平静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, this is going better than I thought.", zh: "确实是，这比我想的顺利多了。", correct: true, xp: 10 },
          { text: "They really aren't, this is a total disaster.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, this is going better than I thought.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please hand me the towel when we're done.", zh: "洗完之后请把毛巾递给我。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Sure, I've got it ready right here.", zh: "好的，我已经准备好了。", correct: true, xp: 10 },
          { text: "Sorry, I forgot to get a towel at all.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Sure, I've got it ready right here.",
        next: null
      }
    }
  },
  {
    id: "finding-a-rhythm",
    transition: { en: "By the second week, a rough routine starts to form.", zh: "到了第二周，一个大致的作息节奏开始形成。" },
    title: "Finding a Rhythm",
    subtitle: "家里 · 摸索节奏",
    avatar: "🕐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I think we're finally getting the hang of this.", zh: "我觉得我们终于开始摸到门道了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "We really are, it feels less chaotic now.", zh: "确实如此，现在感觉没那么混乱了。", correct: true, xp: 10 },
          { text: "We're not, everything still feels impossible.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → We really are, it feels less chaotic now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This week has been easier than last week, honestly.", zh: "说实话，这周比上周轻松多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It has, we're finally settling into this.", zh: "确实如此，我们终于开始适应了。", correct: true, xp: 10 },
          { text: "It hasn't, every single week feels the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It has, we're finally settling into this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should probably write down what's working for us.", zh: "我们大概应该把有效的方法记下来。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, future us will thank us.", zh: "好主意，以后的我们会感谢现在的自己。", correct: true, xp: 10 },
          { text: "Bad idea, we'll never need to remember this.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, future us will thank us.",
        next: null
      }
    }
  },
  {
    id: "a-quiet-morning",
    transition: { en: "One rare quiet morning, the baby sleeps a little longer.", zh: "一个难得安静的早晨，宝宝多睡了一会儿。" },
    title: "A Quiet Morning",
    subtitle: "家里 · 难得的清晨",
    avatar: "☕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe we actually get to drink hot coffee?", zh: "你能相信我们居然能喝到热咖啡吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can't believe it, this feels like luxury.", zh: "我不敢相信，这感觉像奢侈品一样。", correct: true, xp: 10 },
          { text: "I can believe it, this happens every single day.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I can't believe it, this feels like luxury.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Moments like this remind me how far we've come.", zh: "像这样的时刻让我意识到我们已经走了多远。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They really do, more than you know.", zh: "确实如此，比你想的还要多。", correct: true, xp: 10 },
          { text: "They remind me of nothing in particular.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They remind me of that too, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how hard it gets, this is the best thing we've ever done.", zh: "不管有多难，这都是我们做过的最棒的事。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how hard, I agree completely.", zh: "不管有多难，我完全同意。", correct: true, xp: 10 },
          { text: "No matter how hard, I'm starting to have doubts.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how hard, I agree completely.",
        next: null
      }
    }
  },
  {
    id: "one-month-old",
    transition: { en: "The baby turns one month old, and they pause to celebrate quietly.", zh: "宝宝满月了，他们安静地庆祝了一下。" },
    title: "One Month Old",
    subtitle: "家里 · 满月",
    avatar: "🎂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I can't believe a whole month has already passed.", zh: "我真不敢相信整整一个月已经过去了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I know, it's gone by so fast.", zh: "我知道，过得真快。", correct: true, xp: 10 },
          { text: "I know, this month felt like forever.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → I know, it's gone by so fast.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel looking back on this first month?", zh: "回顾这第一个月，你有什么感受？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Exhausted, proud, and completely in love.", zh: "疲惫、骄傲，还有满满的爱。", correct: true, xp: 10 },
          { text: "I don't feel anything looking back at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → Exhausted, proud, and completely in love.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here's to many more months just like this one.", zh: "敬未来更多像这样的月份。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To many more, together, always.", zh: "敬更多这样的时光，我们一起，永远如此。", correct: true, xp: 10 },
          { text: "To fewer months like this one, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒 → To many more, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "front door", zh: "前门", category: "community" },
  { en: "bassinet", zh: "婴儿摇篮床", category: "community" },
  { en: "curious", zh: "好奇的", category: "community" },
  { en: "reassuring", zh: "令人安心的", category: "community" },
  { en: "paid off", zh: "有了回报", category: "community" },
  { en: "swaddling", zh: "包襁褓", category: "community" },
  { en: "come in handy", zh: "派上用场", category: "community" },
  { en: "fold", zh: "折叠", category: "community" },
  { en: "swaddle", zh: "襁褓（名词）", category: "community" },
  { en: "attempt", zh: "尝试", category: "community" },
  { en: "looser", zh: "更松的（loose 比较级）", category: "community" },
  { en: "calming down", zh: "平静下来", category: "community" },
  { en: "thank goodness", zh: "谢天谢地", category: "community" },
  { en: "hungry", zh: "饥饿的", category: "community" },
  { en: "turn", zh: "轮到", category: "community" },
  { en: "go back to sleep", zh: "继续睡", category: "community" },
  { en: "experts", zh: "专家（复数）", category: "community" },
  { en: "surviving", zh: "撑下去", category: "community" },
  { en: "pediatrician", zh: "儿科医生", category: "community" },
  { en: "checkup", zh: "体检", category: "community" },
  { en: "feeding", zh: "喂养", category: "community" },
  { en: "smoothly", zh: "顺利地", category: "community" },
  { en: "on track", zh: "符合标准，走在正轨上", category: "community" },
  { en: "relief", zh: "如释重负", category: "community" },
  { en: "weight gain", zh: "体重增长", category: "community" },
  { en: "smile", zh: "微笑", category: "community" },
  { en: "sleep deprivation", zh: "睡眠不足", category: "community" },
  { en: "somehow", zh: "不知怎么地", category: "community" },
  { en: "split", zh: "分开", category: "community" },
  { en: "in half", zh: "一半", category: "community" },
  { en: "hardest days", zh: "最难熬的日子", category: "community" },
  { en: "trade", zh: "交换", category: "community" },
  { en: "grandparents", zh: "祖父母", category: "community" },
  { en: "nose", zh: "鼻子", category: "community" },
  { en: "enormous", zh: "巨大的", category: "community" },
  { en: "let us know", zh: "告诉我们", category: "community" },
  { en: "bath", zh: "洗澡", category: "community" },
  { en: "water temperature", zh: "水温", category: "community" },
  { en: "wrist", zh: "手腕", category: "community" },
  { en: "towel", zh: "毛巾", category: "community" },
  { en: "rhythm", zh: "节奏", category: "community" },
  { en: "getting the hang of", zh: "摸到门道", category: "community" },
  { en: "chaotic", zh: "混乱的", category: "community" },
  { en: "settling into", zh: "逐渐适应", category: "community" },
  { en: "future us", zh: "未来的我们", category: "community" },
  { en: "luxury", zh: "奢侈品", category: "community" },
  { en: "how far we've come", zh: "我们已经走了多远", category: "community" },
  { en: "doubts", zh: "疑虑", category: "community" },
  { en: "one month old", zh: "满月", category: "community" },
  { en: "gone by", zh: "过去了", category: "community" },
  { en: "looking back", zh: "回顾", category: "community" },
  { en: "in love", zh: "充满爱意的", category: "community" },
  { en: "here's to", zh: "敬……（祝酒）", category: "community" }
);
