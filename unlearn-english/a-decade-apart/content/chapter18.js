// 内容数据层：第十八章，紧接第十七章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter17.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 第六个新 grammarTag：
//   - relative-clause（structure，占"一课一个新点"名额，3课内必须复现）：
//     限定性定语从句（the man who.../a neighborhood that...），
//     第1课（scouting-a-second-spot）引入，第1/4/7课多次复现。
// conditional-advanced（第十七章）与其余L4/L3各点继续复现巩固。
//
// 剧情：呼应第17章"如果我们扩张，也许有一天能开第二个地点"的伏笔——
// 大家开始认真物色第二个社区空间，选址过程带出更多新面孔和新街区。

GAME_CONTENT.scenes.push(
  {
    id: "scouting-a-second-spot",
    transition: { en: "With the grant secured, talk turns to expansion.", zh: "拿到资助后，话题转向了扩张。" },
    title: "Scouting a Second Spot",
    subtitle: "东区 · 物色第二个地点",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There's a landlord who rents out old shops near the east side.", zh: "东区那边有个房东，专门出租一些老店面。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "A landlord who rents old shops sounds promising.", zh: "一个专租老店面的房东听起来挺有希望的。", correct: true, xp: 10 },
          { text: "A landlord who rents old shops sounds risky.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A landlord who rents old shops sounds promising.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The east side is a neighborhood that really needs this.", zh: "东区正是一个真正需要这种地方的街区。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "A neighborhood that needs it is exactly where we belong.", zh: "一个需要它的街区，正是我们该去的地方。", correct: true, xp: 10 },
          { text: "A neighborhood that needs it isn't our concern.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A neighborhood that needs it is exactly where we belong.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Should we go take a look this weekend?", zh: "我们这周末要不要去看看？", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's go take a look together.", zh: "我们一起去看看吧。", correct: true, xp: 10 },
          { text: "Let's not bother looking yet.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's go take a look together.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-landlord",
    title: "Meeting the Landlord",
    subtitle: "东区 · 见到房东",
    avatar: "👨‍🦳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You're the ones who called about the old bakery space?", zh: "你们就是打电话问那间旧面包店铺面的人？" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "Yes, we're the ones who called yesterday.", zh: "是的，我们就是昨天打电话的人。", correct: true, xp: 10 },
          { text: "No, that must be someone else.", correct: false }
        ],
        hintOnWrong: "用定语从句 → Yes, we're the ones who called yesterday.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's small, but the light in here is beautiful.", zh: "地方不大，但这儿的采光很漂亮。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "The light really is beautiful, isn't it?", zh: "光线确实很漂亮，对吧？", correct: true, xp: 10 },
          { text: "The light doesn't matter much to us.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ The light really is beautiful, isn't it?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can I ask what you'd use this space for?", zh: "我能问问你们打算怎么用这块地方吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, I can explain it all.", zh: "当然可以，我可以都跟您说说。", correct: true, xp: 10 },
          { text: "I can't really say right now.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Of course, I can explain it all.",
        next: null
      }
    }
  },
  {
    id: "explaining-the-vision",
    title: "Explaining the Vision",
    subtitle: "东区 · 说明这里的用途",
    avatar: "👨‍🦳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So it's a place where people learn English for free?", zh: "所以这是一个人们可以免费学英语的地方？" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "Yes, a place where anyone is welcome.", zh: "对，一个任何人都受欢迎的地方。", correct: true, xp: 10 },
          { text: "No, a place where nobody is welcome.", correct: false }
        ],
        hintOnWrong: "用定语从句 → Yes, a place where anyone is welcome.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My own parents were immigrants. This would have meant a lot to them.", zh: "我父母当年也是移民。这样的地方对他们来说会意义重大。" },
        skill: "community",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If they were here now, they'd understand completely.", zh: "如果他们现在在这儿，一定会完全理解的。", correct: true, xp: 10 },
          { text: "If they were here now, they wouldn't care at all.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If they were here now, they'd understand completely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll give you a fair price. Consider it done.", zh: "我给你们一个公道的价格。就这么定了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we'll take great care of it.", zh: "谢谢，我们会好好爱护这里的。", correct: true, xp: 10 },
          { text: "Thank you, we'll probably neglect it.", correct: false }
        ],
        hintOnWrong: "用 will 表示承诺 → Thank you, we'll take great care of it.",
        next: null
      }
    }
  },
  {
    id: "telling-the-others",
    transition: { en: "You rush back to share the news.", zh: "你急忙赶回去分享这个消息。" },
    title: "Telling the Others",
    subtitle: "Lily之家 · 分享好消息",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We found a place? Already?", zh: "找到地方了？这么快？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've already found the perfect place.", zh: "我们已经找到了一个完美的地方。", correct: true, xp: 10 },
          { text: "We haven't found anything at all.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've already found the perfect place.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Who's going to run the second location day to day?", zh: "第二个地点日常谁来管呢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Who wants to take that on?", zh: "谁愿意接下这个任务？", correct: true, xp: 10 },
          { text: "Who cares who runs it?", correct: false }
        ],
        hintOnWrong: "追问细节 → Who wants to take that on?",
        next: "n3"
      },
      n3: {
        avatar: "🧑",
        npcLine: { en: "I'd like to try, if everyone trusts me with it.", zh: "如果大家信得过我，我想试试。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If you're willing, we trust you completely.", zh: "如果你愿意，我们完全信任你。", correct: true, xp: 10 },
          { text: "If you're willing, we'll think about it.", correct: false }
        ],
        hintOnWrong: "用条件句 → If you're willing, we trust you completely.",
        next: null
      }
    }
  },
  {
    id: "sam-steps-up",
    title: "Sam Steps Up",
    subtitle: "东区 · Sam挑起大梁",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A year ago, I was the guy who never spoke up in class.", zh: "一年前，我还是那个课堂上从不主动发言的人。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "The guy who never spoke up is long gone now.", zh: "那个从不发言的人早就不在了。", correct: true, xp: 10 },
          { text: "The guy who never spoke up is still here.", correct: false }
        ],
        hintOnWrong: "用定语从句 → The guy who never spoke up is long gone now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Now I'm the one who's running a whole location.", zh: "现在我是负责整个分点的人了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "You're the one who's earned this, truly.", zh: "你才是真正配得上这一切的人。", correct: true, xp: 10 },
          { text: "You're the one who's rushing into this.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → You're the one who's earned this, truly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I won't let you all down. I promise.", zh: "我不会让大家失望的。我保证。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "You won't. We already believe in you.", zh: "你不会的。我们已经相信你了。", correct: true, xp: 10 },
          { text: "You probably will, but that's okay.", correct: false }
        ],
        hintOnWrong: "用 will 表示信心 → You won't. We already believe in you.",
        next: null
      }
    }
  },
  {
    id: "fixing-up-the-second-space",
    transition: { en: "The next weeks are full of paint, sawdust, and laughter.", zh: "接下来几周充满了油漆味、木屑和笑声。" },
    title: "Fixing Up the Space",
    subtitle: "东区 · 整理新地方",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is the wall where we should hang the welcome sign.", zh: "这面墙就是该挂欢迎标牌的地方。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "This is the wall where everyone will see it first.", zh: "这面墙是大家会第一眼看到的地方。", correct: true, xp: 10 },
          { text: "This is the wall where nobody will look.", correct: false }
        ],
        hintOnWrong: "用定语从句 → This is the wall where everyone will see it first.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you help me carry this bookshelf inside?", zh: "你能帮我把这个书架搬进去吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, let's carry it in together.", zh: "没问题，我们一起搬进去吧。", correct: true, xp: 10 },
          { text: "I can't lift anything heavy today.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, let's carry it in together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's starting to look like somewhere people would want to be.", zh: "它开始看起来像是个人们会想来的地方了。" },
        skill: "community",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If I were new here, I'd want to be here too.", zh: "如果我是新来的，我也会想来这儿。", correct: true, xp: 10 },
          { text: "If I were new here, I'd rather stay away.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If I were new here, I'd want to be here too.",
        next: null
      }
    }
  },
  {
    id: "the-first-visitors",
    title: "The First Visitors",
    subtitle: "东区 · 第一批访客",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this the place that was in the newspaper?", zh: "这是不是报纸上写的那个地方？" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "Yes, this is the place that was in the paper.", zh: "对，这就是报纸上写的那个地方。", correct: true, xp: 10 },
          { text: "No, you're thinking of somewhere else.", correct: false }
        ],
        hintOnWrong: "用定语从句 → Yes, this is the place that was in the paper.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My neighbor is the woman who told me about it.", zh: "我邻居就是跟我说起这地方的那个人。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "Whoever told you, please thank them for us.", zh: "不管是谁告诉你的，请替我们谢谢她。", correct: true, xp: 10 },
          { text: "Whoever told you was probably mistaken.", correct: false }
        ],
        hintOnWrong: "用定语从句回应 → Whoever told you, please thank them for us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "When does the first class start here?", zh: "这儿的第一堂课什么时候开始？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It starts this Saturday morning.", zh: "这周六早上就开始。", correct: true, xp: 10 },
          { text: "It doesn't have a start date yet.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ It starts this Saturday morning.",
        next: null
      }
    }
  },
  {
    id: "two-houses-one-story",
    title: "Two Houses, One Story",
    subtitle: "Lily之家 · 两个地点，一个故事",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's strange to think we're in two places at once now.", zh: "想到我们现在同时在两个地方，感觉挺奇妙的。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Strange, but wonderful too.", zh: "奇妙，但也很美好。", correct: true, xp: 10 },
          { text: "Strange, and honestly a bit much.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Strange, but wonderful too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Although they're different buildings, they feel like the same home.", zh: "尽管是不同的建筑，但感觉像是同一个家。", voice: "emma" },
        skill: "work",
        grammarTag: "concession",
        choices: [
          { text: "Although they're apart, the spirit is the same.", zh: "尽管相隔两地，但精神是一样的。", correct: true, xp: 10 },
          { text: "Although they're apart, nothing connects them.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although they're apart, the spirit is the same.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Two houses, one story. I like the sound of that.", zh: "两栋房子，一个故事。我喜欢这个说法。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "One story that keeps growing.", zh: "一个不断成长的故事。", correct: true, xp: 10 },
          { text: "One story that's already finished.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ One story that keeps growing.",
        next: null
      }
    }
  },
  {
    id: "a-letter-to-sam",
    title: "A Letter to Sam",
    subtitle: "东区 · 写给Sam的信",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We wrote you a letter, for your first day running things alone.", zh: "我们给你写了封信，庆祝你第一天独自挑大梁。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "You wrote me a letter? I'm speechless.", zh: "你们给我写了信？我都说不出话了。", correct: true, xp: 10 },
          { text: "You wrote me a letter, and I lost it.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → You wrote me a letter? I'm speechless.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's from all of us who've watched you grow.", zh: "这是所有看着你成长的人写给你的。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "All of us who watched you are so proud.", zh: "所有看着你成长的人都为你骄傲。", correct: true, xp: 10 },
          { text: "All of us who watched you feel nothing special.", correct: false }
        ],
        hintOnWrong: "用定语从句 → All of us who watched you are so proud.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Keep it somewhere close. Ten Letters started with just one.", zh: "把它放在身边吧。「十封信」当年也是从一封开始的。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "This one will always be close to me.", zh: "这一封会一直被我珍藏在身边。", correct: true, xp: 10 },
          { text: "This one probably won't matter much later.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ This one will always be close to me.",
        next: null
      }
    }
  },
  {
    id: "the-east-side-opening",
    transition: { en: "On opening day, the little bakery-turned-classroom fills up fast.", zh: "开放当天，这间由面包店改造的教室很快就坐满了。" },
    title: "The East Side Opening",
    subtitle: "东区 · 正式开放",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome, everyone. My name is Sam, and I'll be your teacher.", zh: "欢迎大家。我叫Sam，我会是大家的老师。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We're so glad you'll be teaching us.", zh: "我们很高兴能由你来教我们。", correct: true, xp: 10 },
          { text: "We didn't know who'd be teaching us.", correct: false }
        ],
        hintOnWrong: "用 will 回应 → We're so glad you'll be teaching us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This building is one that has seen a lot of new beginnings.", zh: "这栋楼见证过很多新的开始。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "A building that's seen beginnings deserves one more.", zh: "一栋见证过开始的楼，值得再多迎来一个。", correct: true, xp: 10 },
          { text: "A building that's seen beginnings means nothing special.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A building that's seen beginnings deserves one more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's begin, everyone. Hello, how are you?", zh: "我们开始吧，各位。你好，你好吗？" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's begin — hello, how are you?", zh: "我们开始吧——你好，你好吗？", correct: true, xp: 10 },
          { text: "Let's wait a little longer to start.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's begin — hello, how are you?",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "A landlord who rents old shops sounds promising.", zh: "一个专租老店面的房东听起来挺有希望的。" },
  { en: "A neighborhood that needs it is exactly where we belong.", zh: "一个需要它的街区，正是我们该去的地方。" },
  { en: "Let's go take a look together.", zh: "我们一起去看看吧。" },
  { en: "Yes, we're the ones who called yesterday.", zh: "是的，我们就是昨天打电话的人。" },
  { en: "The light really is beautiful, isn't it?", zh: "光线确实很漂亮，对吧？" },
  { en: "Of course, I can explain it all.", zh: "当然可以，我可以都跟您说说。" },
  { en: "Yes, a place where anyone is welcome.", zh: "对，一个任何人都受欢迎的地方。" },
  { en: "If they were here now, they'd understand completely.", zh: "如果他们现在在这儿，一定会完全理解的。" },
  { en: "Thank you, we'll take great care of it.", zh: "谢谢，我们会好好爱护这里的。" },
  { en: "We've already found the perfect place.", zh: "我们已经找到了一个完美的地方。" },
  { en: "Who wants to take that on?", zh: "谁愿意接下这个任务？" },
  { en: "If you're willing, we trust you completely.", zh: "如果你愿意，我们完全信任你。" },
  { en: "The guy who never spoke up is long gone now.", zh: "那个从不发言的人早就不在了。" },
  { en: "You're the one who's earned this, truly.", zh: "你才是真正配得上这一切的人。" },
  { en: "You won't. We already believe in you.", zh: "你不会的。我们已经相信你了。" },
  { en: "This is the wall where everyone will see it first.", zh: "这面墙是大家会第一眼看到的地方。" },
  { en: "Sure, let's carry it in together.", zh: "没问题，我们一起搬进去吧。" },
  { en: "If I were new here, I'd want to be here too.", zh: "如果我是新来的，我也会想来这儿。" },
  { en: "Yes, this is the place that was in the paper.", zh: "对，这就是报纸上写的那个地方。" },
  { en: "Whoever told you, please thank them for us.", zh: "不管是谁告诉你的，请替我们谢谢她。" },
  { en: "It starts this Saturday morning.", zh: "这周六早上就开始。" },
  { en: "Strange, but wonderful too.", zh: "奇妙，但也很美好。" },
  { en: "Although they're apart, the spirit is the same.", zh: "尽管相隔两地，但精神是一样的。" },
  { en: "One story that keeps growing.", zh: "一个不断成长的故事。" },
  { en: "You wrote me a letter? I'm speechless.", zh: "你们给我写了信？我都说不出话了。" },
  { en: "All of us who watched you are so proud.", zh: "所有看着你成长的人都为你骄傲。" },
  { en: "This one will always be close to me.", zh: "这一封会一直被我珍藏在身边。" },
  { en: "We're so glad you'll be teaching us.", zh: "我们很高兴能由你来教我们。" },
  { en: "A building that's seen beginnings deserves one more.", zh: "一栋见证过开始的楼，值得再多迎来一个。" },
  { en: "Let's begin — hello, how are you?", zh: "我们开始吧——你好，你好吗？" }
);
