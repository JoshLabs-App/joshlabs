// 内容数据层：第四十九章，紧接第四十八章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：宝宝快满周岁，两人筹备第一个生日派对。全新词汇领域：主题策划/
// 请柬制作/装饰布置/生日蛋糕。

GAME_CONTENT.scenes.push(
  {
    id: "planning-the-first-birthday",
    transition: { en: "With the baby turning one soon, they start planning a party.", zh: "宝宝快满一岁了，他们开始筹备派对。" },
    title: "Planning the First Birthday",
    subtitle: "家里 · 筹备生日会",
    avatar: "🎂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we do a theme, or keep it simple?", zh: "我们要定个主题，还是保持简单？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Let's do a theme, something fun and colorful.", zh: "定个主题吧，有趣又多彩的那种。", correct: true, xp: 10 },
          { text: "No theme at all, themes are overrated.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Let's do a theme, something fun and colorful.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How many people should we invite?", zh: "我们应该邀请多少人？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Just close family and a few friends.", zh: "就近亲和几个朋友吧。", correct: true, xp: 10 },
          { text: "Nobody, first birthdays don't need guests.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Just close family and a few friends.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to book the space soon.", zh: "我们得尽快预订场地了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's call the community hall today.", zh: "对，我们今天就打电话给社区礼堂吧。", correct: true, xp: 10 },
          { text: "Right, though the space doesn't matter much.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's call the community hall today.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-theme",
    transition: { en: "They browse decorations to settle on a theme.", zh: "他们浏览装饰品来确定一个主题。" },
    title: "Choosing a Theme",
    subtitle: "商店 · 挑选主题",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This jungle theme looks more fun than the space one.", zh: "这个丛林主题看起来比太空主题更有趣。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's go with the jungle theme.", zh: "确实是，那我们就选丛林主题吧。", correct: true, xp: 10 },
          { text: "It doesn't, the space theme looks way better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's go with the jungle theme.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we match the invitations to the theme too?", zh: "请柬要不要也配合主题？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that would tie everything together nicely.", zh: "好，这样能让一切都更协调统一。", correct: true, xp: 10 },
          { text: "No, invitations should always be plain.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that would tie everything together nicely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's order the decorations online today.", zh: "我们今天就在网上订装饰品吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's order them right now.", zh: "好主意，我们现在就下单吧。", correct: true, xp: 10 },
          { text: "Let's wait a few more weeks to order.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's order them right now.",
        next: null
      }
    }
  },
  {
    id: "sending-invitations",
    transition: { en: "They design and send out invitations to friends and family.", zh: "他们设计并发出了给亲友的请柬。" },
    title: "Sending Invitations",
    subtitle: "家里 · 发送请柬",
    avatar: "💌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you finished the guest list yet?", zh: "宾客名单你列好了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've finished it, we have twenty guests total.", zh: "列好了，我们总共有二十位客人。", correct: true, xp: 10 },
          { text: "I've never once made a guest list.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've finished it, we have twenty guests total.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This design looks cuter than the last one we tried.", zh: "这个设计比我们之前试的那个更可爱。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's use this one for sure.", zh: "确实是，那我们就用这个吧。", correct: true, xp: 10 },
          { text: "It doesn't, let's go back to the old one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's use this one for sure.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please RSVP by the end of next week.", zh: "请在下周末之前回复是否出席。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll add that to the card.", zh: "当然，我们会把这个加到卡片上。", correct: true, xp: 10 },
          { text: "Sorry, deadlines feel unnecessary for a party.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll add that to the card.",
        next: null
      }
    }
  },
  {
    id: "decorating-the-space",
    transition: { en: "The night before, they decorate the community hall together.", zh: "前一晚，他们一起布置社区礼堂。" },
    title: "Decorating the Space",
    subtitle: "社区礼堂 · 布置现场",
    avatar: "🎈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you help me blow up these balloons?", zh: "你能帮我吹这些气球吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, hand me the pump.", zh: "可以，把打气筒给我。", correct: true, xp: 10 },
          { text: "I can't, balloons always make me dizzy.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, hand me the pump.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This banner looks bigger than I remembered ordering.", zh: "这条横幅比我记忆中订的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but bigger works fine for this space.", zh: "确实是，不过对这个场地来说大一点也没关系。", correct: true, xp: 10 },
          { text: "It doesn't, this banner looks tiny to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but bigger works fine for this space.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's hang the streamers along this whole wall.", zh: "我们把彩带挂满这整面墙吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it'll look amazing.", zh: "好，这样会很好看。", correct: true, xp: 10 },
          { text: "Let's just leave that wall completely bare.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it'll look amazing.",
        next: null
      }
    }
  },
  {
    id: "ordering-the-cake",
    transition: { en: "They pick up a custom cake from a local bakery.", zh: "他们从本地烘焙店取了一个定制蛋糕。" },
    title: "Ordering the Cake",
    subtitle: "烘焙店 · 取蛋糕",
    avatar: "🎂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This cake turned out better than the photo we sent.", zh: "这个蛋糕做出来比我们发的照片还要好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, this exceeded every expectation.", zh: "确实是，这超出了我们所有的预期。", correct: true, xp: 10 },
          { text: "It really didn't, this looks nothing like it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, this exceeded every expectation.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Is there also a small smash cake for the baby?", zh: "有给宝宝准备的小份专用蛋糕吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's right here in this small box.", zh: "有的，就在这个小盒子里。", correct: true, xp: 10 },
          { text: "No, babies don't need their own cake.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's right here in this small box.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please keep it in the fridge until the party starts.", zh: "请把它放在冰箱里直到派对开始。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll take good care of it.", zh: "当然，我们会好好保管的。", correct: true, xp: 10 },
          { text: "Sorry, we're planning to leave it in the car.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll take good care of it.",
        next: null
      }
    }
  },
  {
    id: "guests-start-arriving",
    transition: { en: "On the big day, guests begin arriving at the hall.", zh: "派对当天，客人们陆续到达礼堂。" },
    title: "Guests Start Arriving",
    subtitle: "社区礼堂 · 客人到场",
    avatar: "🚪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This place looks even better than I imagined!", zh: "这地方看起来比我想象的还要漂亮！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, we worked hard on the decorations.", zh: "谢谢，我们在装饰上花了不少心思。", correct: true, xp: 10 },
          { text: "Thank you, though we barely decorated at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, we worked hard on the decorations.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Where should we put this gift?", zh: "这份礼物应该放哪儿？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "You can put it on the gift table over there.", zh: "您可以放在那边的礼物桌上。", correct: true, xp: 10 },
          { text: "Gifts aren't allowed at this party.", correct: false }
        ],
        hintOnWrong: "wh-问题回答位置 → You can put it on the gift table over there.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you so much for coming, we're so glad you're here.", zh: "非常感谢你能来，我们很高兴你在这儿。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for inviting us, we wouldn't miss it.", zh: "谢谢你们邀请我们，我们绝对不会错过的。", correct: true, xp: 10 },
          { text: "Thank you, though we almost didn't come.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you for inviting us, we wouldn't miss it.",
        next: null
      }
    }
  },
  {
    id: "games-and-laughter",
    transition: { en: "The party fills with games, music, and laughter.", zh: "派对上充满了游戏、音乐和欢笑。" },
    title: "Games and Laughter",
    subtitle: "社区礼堂 · 游戏时光",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This party is even more fun than I expected.", zh: "这场派对比我预想的还要有趣。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, everyone seems to be enjoying it.", zh: "确实如此，大家看起来都很开心。", correct: true, xp: 10 },
          { text: "It really isn't, everyone looks bored.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, everyone seems to be enjoying it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The kids are laughing more than the adults right now.", zh: "现在孩子们比大人笑得还开心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, and that's exactly the point.", zh: "确实是，这正是我们想要的效果。", correct: true, xp: 10 },
          { text: "They aren't, the adults are having more fun.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, and that's exactly the point.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take some photos before things get too messy.", zh: "趁场面还没太乱，我们拍些照片吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's grab everyone together now.", zh: "好主意，我们现在就把大家聚一起吧。", correct: true, xp: 10 },
          { text: "Let's skip the photos, they never matter.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's grab everyone together now.",
        next: null
      }
    }
  },
  {
    id: "the-smash-cake-moment",
    transition: { en: "It's time for the baby to dig into the smash cake.", zh: "到了宝宝抓吃专用蛋糕的时刻。" },
    title: "The Smash Cake Moment",
    subtitle: "社区礼堂 · 抓蛋糕时刻",
    avatar: "🎂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you ready for this to get messy?", zh: "你准备好接受这场混乱了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I am, I've got the camera ready.", zh: "准备好了，相机也拿好了。", correct: true, xp: 10 },
          { text: "I'm not, let's skip this part entirely.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I am, I've got the camera ready.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're getting more cake on their face than in their mouth!", zh: "他们脸上沾的蛋糕比嘴里吃到的还多！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's exactly how it's supposed to go!", zh: "这正是它该有的样子！", correct: true, xp: 10 },
          { text: "That seems like a total waste of cake.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's exactly how it's supposed to go!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is a memory we'll treasure forever.", zh: "这将是我们永远珍藏的回忆。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It really will, I already love this photo.", zh: "确实会的，我已经很喜欢这张照片了。", correct: true, xp: 10 },
          { text: "It won't, we'll probably forget this by tomorrow.", correct: false }
        ],
        hintOnWrong: "回应未来时 → It really will, I already love this photo.",
        next: null
      }
    }
  },
  {
    id: "saying-thank-you",
    transition: { en: "As guests leave, they say a heartfelt thank-you to each one.", zh: "客人离场时，他们向每一位真诚道谢。" },
    title: "Saying Thank You",
    subtitle: "社区礼堂 · 感谢客人",
    avatar: "🙏",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Thank you for making today so wonderful.", zh: "谢谢你让今天变得这么美好。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, thank you for celebrating with us.", zh: "不客气，谢谢你和我们一起庆祝。", correct: true, xp: 10 },
          { text: "Of course, though today wasn't really special.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, thank you for celebrating with us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I can't believe our baby is already one year old.", zh: "我真不敢相信我们的宝宝已经一岁了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Neither can I, this whole year flew by.", zh: "我也不敢相信，这一年过得太快了。", correct: true, xp: 10 },
          { text: "I can believe it, this year felt endless.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Neither can I, this whole year flew by.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here's to many more birthdays just like this one.", zh: "敬未来更多像这样的生日。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To many more birthdays, side by side.", zh: "敬更多的生日，我们并肩前行。", correct: true, xp: 10 },
          { text: "To fewer birthdays like this, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒 → To many more, together, always.",
        next: null
      }
    }
  },
  {
    id: "reflecting-on-the-year",
    transition: { en: "That night, they look back on the baby's first year of life.", zh: "那天晚上，他们回顾宝宝这一年的成长。" },
    title: "Reflecting on the Year",
    subtitle: "家里 · 回顾这一年",
    avatar: "🌟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This year has changed us more than any other.", zh: "这一年比其他任何一年都更让我们发生了改变。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, and I wouldn't trade it for anything.", zh: "确实如此，我不会用它换任何东西。", correct: true, xp: 10 },
          { text: "It really hasn't, nothing has changed at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, and I wouldn't trade it for anything.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel looking back on everything we've been through?", zh: "回顾我们经历的一切，你有什么感受？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Grateful, exhausted, and completely fulfilled.", zh: "感激、疲惫，又充满成就感。", correct: true, xp: 10 },
          { text: "I don't feel anything looking back, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → Grateful, exhausted, and completely fulfilled.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever the next year brings, we're ready for it, together.", zh: "无论下一年带来什么，我们都已经准备好了，一起面对。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever comes next, hand in hand.", zh: "无论接下来发生什么，我们都手牵着手。", correct: true, xp: 10 },
          { text: "Whatever comes next, we'll probably face it apart.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever comes next, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "theme", zh: "主题", category: "community" },
  { en: "colorful", zh: "多彩的", category: "community" },
  { en: "invite", zh: "邀请", category: "community" },
  { en: "close family", zh: "近亲", category: "community" },
  { en: "community hall", zh: "社区礼堂", category: "community" },
  { en: "decorations", zh: "装饰品（复数）", category: "community" },
  { en: "jungle theme", zh: "丛林主题", category: "community" },
  { en: "invitations", zh: "请柬（复数）", category: "community" },
  { en: "tie together", zh: "使协调统一", category: "community" },
  { en: "guest list", zh: "宾客名单", category: "community" },
  { en: "guests", zh: "客人（复数）", category: "community" },
  { en: "cuter", zh: "更可爱的（cute 比较级）", category: "community" },
  { en: "design", zh: "设计", category: "community" },
  { en: "deadline", zh: "截止日期", category: "community" },
  { en: "balloons", zh: "气球（复数）", category: "community" },
  { en: "pump", zh: "打气筒", category: "community" },
  { en: "dizzy", zh: "头晕的", category: "community" },
  { en: "banner", zh: "横幅", category: "community" },
  { en: "streamers", zh: "彩带（复数）", category: "community" },
  { en: "bare", zh: "空荡荡的", category: "community" },
  { en: "custom cake", zh: "定制蛋糕", category: "community" },
  { en: "exceeded", zh: "超出了", category: "community" },
  { en: "expectation", zh: "预期", category: "community" },
  { en: "smash cake", zh: "抓吃专用蛋糕", category: "community" },
  { en: "fridge", zh: "冰箱", category: "community" },
  { en: "gift table", zh: "礼物桌", category: "community" },
  { en: "wouldn't miss it", zh: "绝不会错过", category: "community" },
  { en: "games", zh: "游戏（复数）", category: "community" },
  { en: "laughter", zh: "欢笑", category: "community" },
  { en: "adults", zh: "成年人（复数）", category: "community" },
  { en: "messy", zh: "凌乱的", category: "community" },
  { en: "dig into", zh: "开始享用", category: "community" },
  { en: "supposed to", zh: "应该", category: "community" },
  { en: "treasure", zh: "珍藏", category: "community" },
  { en: "heartfelt", zh: "真诚的", category: "community" },
  { en: "flew by", zh: "过得飞快", category: "community" },
  { en: "changed", zh: "改变了", category: "community" },
  { en: "wouldn't trade it", zh: "不会用它交换", category: "community" },
  { en: "exhausted", zh: "精疲力竭的", category: "community" },
  { en: "fulfilled", zh: "充满成就感的", category: "community" }
);
