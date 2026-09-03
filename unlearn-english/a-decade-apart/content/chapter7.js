// 内容数据层：第七章，紧接第六章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter6.js 之后、audio-manifest.js 之前加载。
// 这是 L2（第4-7章）的最后一章。
//
// Tier: L2（跟第四、五、六章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章不引入新 grammarTag。剧情里程碑：路线图"拜访年长的证人/亲戚，
// 听TA讲完整的往事——揭晓部分真相"在本章兑现。Uncle Lok（Ho太太的哥哥）
// 用连续几段过去时叙述（第3/4/5课，NPC输入不受产出上限约束）讲述家族
// 早年在这座城市落脚的故事：经济上不容易、靠社区互助熬过来、也因此养成了
// "写信保持联系"的传统——跟主线"十年之约"的书信主题自然呼应，但不涉及
// 具体移民政策/年代等真实史实（这些留给第11章按 Josh 拍板的方向做研究后
// 再写，这里只写私人化的家庭记忆）。
// L2 到本章结束，第8章起进入 L3（现在完成时/条件句/被动语态）。

GAME_CONTENT.scenes.push(
  {
    id: "crossing-town",
    transition: { en: "The next weekend, you and Mrs. Ho take the bus across town.", zh: "接下来的周末，你和Ho太太坐公交去了城的另一头。" },
    title: "Crossing Town",
    subtitle: "公交车上 · 前往Uncle Lok家",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Thank you for coming with me today.", zh: "谢谢你今天陪我一起来。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Of course, I wanted to come.", zh: "当然啦，我想来的。", correct: true, xp: 10 },
          { text: "It's not a big deal.", correct: false }
        ],
        hintOnWrong: "表达真心（陈述句）→ Of course, I wanted to come.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you nervous? I am, a little.", zh: "你紧张吗？我有点紧张。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A little, but it's exciting too.", zh: "有点，但也挺让人期待的。", correct: true, xp: 10 },
          { text: "Not at all, whatever.", correct: false }
        ],
        hintOnWrong: "简单表达心情（陈述句）→ A little, but it's exciting too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is our stop. Let's get off here.", zh: "到站了。我们在这儿下车吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Okay, let's go.", zh: "好，我们走吧。", correct: true, xp: 10 },
          { text: "Already? That's fast.", correct: false }
        ],
        hintOnWrong: "接受提议 → Okay, let's go.",
        next: null
      }
    }
  },
  {
    id: "meeting-uncle-lok",
    title: "Meeting Uncle Lok",
    subtitle: "门口 · 见到Ho太太的哥哥",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So this is the young man you told me about!", zh: "这就是你跟我说的那个年轻人啊！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Hello, it's an honor to meet you.", zh: "您好，很荣幸见到您。", correct: true, xp: 10 },
          { text: "Yes, that's me, whatever.", correct: false }
        ],
        hintOnWrong: "礼貌问候（陈述句）→ Hello, it's an honor to meet you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Come in, come in. Can I get you some tea?", zh: "快进来快进来。要不要喝点茶？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, please. Thank you.", zh: "好的，谢谢您。", correct: true, xp: 10 },
          { text: "No, I don't drink tea.", correct: false }
        ],
        hintOnWrong: "礼貌接受 → Yes, please. Thank you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sit, sit. Make yourself at home.", zh: "坐吧坐吧。就当自己家一样。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, your home is lovely.", zh: "谢谢您，您家真漂亮。", correct: true, xp: 10 },
          { text: "It's a small place.", correct: false }
        ],
        hintOnWrong: "礼貌称赞 → Thank you, your home is lovely.",
        next: null
      }
    }
  },
  {
    id: "tea-and-memories",
    title: "Tea and Memories",
    subtitle: "客厅 · 往事的开端",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My sister tells me you found our family's name in an old ledger.", zh: "我妹妹跟我说，你在一本旧账本里找到了我们家的姓氏。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Yes, and an old photo too.", zh: "是的，还有一张旧照片。", correct: true, xp: 10 },
          { text: "No, that's not right.", correct: false }
        ],
        hintOnWrong: "陈述句补充信息 → Yes, and an old photo too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I remember that house. Let me tell you about it.", zh: "我记得那栋房子。我跟你说说吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Please, I'd love to hear it.", zh: "请说吧，我很想听。", correct: true, xp: 10 },
          { text: "Only if it's short.", correct: false }
        ],
        hintOnWrong: "礼貌请求对方继续 → Please, I'd love to hear it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We arrived here with very little money. Our parents worked two jobs each. It wasn't easy, but that little house became our whole world.", zh: "我们刚到这里时身上没多少钱。我们父母各打两份工。日子不容易，但那栋小房子成了我们的整个世界。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That sounds like a hard beginning.", zh: "听起来是个艰难的开始。", correct: true, xp: 10 },
          { text: "That must have taken real strength.", correct: false }
        ],
        hintOnWrong: "简单共情回应（陈述句）→ That sounds like a hard beginning.",
        next: null
      }
    }
  },
  {
    id: "the-full-story-part1",
    title: "The Full Story, Part One",
    subtitle: "客厅 · 靠社区互助熬过来",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It was hard, yes. But we weren't alone. Neighbors shared food with us. Someone taught our mother English on weekends.", zh: "确实不容易。但我们不是孤军奋战。邻居们跟我们分享食物。有人在周末教我们妈妈英语。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "People really took care of each other.", zh: "大家真的会互相照顾。", correct: true, xp: 10 },
          { text: "That happens everywhere.", correct: false }
        ],
        hintOnWrong: "用过去时呼应叙述（陈述句）→ People really took care of each other.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Exactly. And that's why we always write letters — to remember who helped us.", zh: "没错。这也是为什么我们一直保持写信的传统——为了记住谁曾经帮过我们。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Is that why letters matter so much to you?", zh: "这就是为什么信件对你们这么重要吗？", correct: true, xp: 10 },
          { text: "I never write letters, sorry.", correct: false }
        ],
        hintOnWrong: "追问确认（wh-question式的yes/no问句）→ Is that why letters matter so much to you?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Yes. Some of those old letters are still in that house, I think.", zh: "是的。我想那些旧信里有一些应该还留在那栋房子里。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Can we go check the house sometime?", zh: "我们能找时间去看看那栋房子吗？", correct: true, xp: 10 },
          { text: "That house is probably gone.", correct: false }
        ],
        hintOnWrong: "用 can 提议下一步 → Can we go check the house sometime?",
        next: null
      }
    }
  },
  {
    id: "the-full-story-part2",
    title: "The Full Story, Part Two",
    subtitle: "客厅 · 为什么后来搬走了",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We can. But first, let me finish. We didn't want to leave that house. We had to — the rent became too high for us.", zh: "可以呀。但先让我讲完。我们并不想搬走。我们是不得不搬——房租变得我们负担不起了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's such a hard choice to make.", zh: "这真是个艰难的抉择。", correct: true, xp: 10 },
          { text: "That's not fair at all.", correct: false }
        ],
        hintOnWrong: "简单共情（陈述句）→ That's such a hard choice to make.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It was. But we promised each other something before we left.", zh: "确实是。但我们离开之前，彼此许下了一个承诺。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "What did you promise?", zh: "你们承诺了什么？", correct: true, xp: 10 },
          { text: "I don't need details.", correct: false }
        ],
        hintOnWrong: "追问细节 → What did you promise?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We promised to come back one day, together, as a family.", zh: "我们承诺有一天要一起回去，一家人一起。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a promise worth keeping.", zh: "这是个值得坚守的承诺。", correct: true, xp: 10 },
          { text: "Promises don't always work out.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's a promise worth keeping.",
        next: null
      }
    }
  },
  {
    id: "an-old-name-revealed",
    title: "An Old Name",
    subtitle: "客厅 · 一个新的线索",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "One neighbor helped us more than anyone. A young woman who ran a small shop nearby.", zh: "有一位邻居帮了我们特别多。是一个在附近开小店的年轻女人。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Do you remember her name?", zh: "您还记得她的名字吗？", correct: true, xp: 10 },
          { text: "That's not important now.", correct: false }
        ],
        hintOnWrong: "追问细节（do-question式）→ Do you remember her name?",
        next: "n2"
      },
      n2: {
        avatar: "🤔",
        npcLine: { en: "It's been so long... but I think her shop sold books.", zh: "太久了……但我记得她的店是卖书的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Emma's shop sells books too.", zh: "Emma的店也是卖书的。", correct: true, xp: 10 },
          { text: "That's probably not related.", correct: false }
        ],
        hintOnWrong: "陈述关联（陈述句）→ Emma's shop sells books too.",
        next: "n3"
      },
      n3: {
        avatar: "😮",
        npcLine: { en: "Wait — could it be the same shop? Ten Letters?", zh: "等等——会不会就是同一家店？十封信？" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll ask Emma about it tomorrow.", zh: "我明天去问问Emma。", correct: true, xp: 10 },
          { text: "It's probably just a coincidence.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll ask Emma about it tomorrow.",
        next: null
      }
    }
  },
  {
    id: "why-it-matters",
    title: "Why It Matters",
    subtitle: "客厅 · Uncle Lok的心里话",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This all matters because my sister carried this story alone for years.", zh: "这一切之所以重要，是因为我妹妹多年来一直独自承担着这段往事。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "She doesn't have to carry it alone anymore.", zh: "她不用再独自承担了。", correct: true, xp: 10 },
          { text: "That sounds dramatic.", correct: false }
        ],
        hintOnWrong: "温暖回应（陈述句）→ She doesn't have to carry it alone anymore.",
        next: "n2"
      },
      n2: {
        avatar: "🥹",
        npcLine: { en: "Thank you for saying that.", zh: "谢谢你这么说。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for trusting me with it.", zh: "谢谢您愿意信任我，跟我说这些。", correct: true, xp: 10 },
          { text: "It's really no problem.", correct: false }
        ],
        hintOnWrong: "礼貌回应感激 → Thank you for trusting me with it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's go visit that house together soon, all three of us.", zh: "我们三个尽快一起去看看那栋房子吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "I'd love that. Let's plan it.", zh: "我很愿意。我们来定个计划吧。", correct: true, xp: 10 },
          { text: "Maybe some other time.", correct: false }
        ],
        hintOnWrong: "接受提议 → I'd love that. Let's plan it.",
        next: null
      }
    }
  },
  {
    id: "thanking-uncle-lok",
    title: "Saying Goodbye",
    subtitle: "门口 · 向Uncle Lok道别",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It was wonderful to finally meet you.", zh: "终于见到你了，真是太好了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "The pleasure was all mine.", zh: "这份荣幸都是我的。", correct: true, xp: 10 },
          { text: "You too, I guess.", correct: false }
        ],
        hintOnWrong: "礼貌回应（固定表达）→ The pleasure was all mine.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Come back anytime, both of you.", zh: "你们俩随时都可以再来。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, I promise.", zh: "我们会的，我保证。", correct: true, xp: 10 },
          { text: "Maybe, we'll see.", correct: false }
        ],
        hintOnWrong: "用 will 承诺 → We will, I promise.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Safe travels home.", zh: "回家路上小心。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, take care!", zh: "谢谢您，您也保重！", correct: true, xp: 10 },
          { text: "Bye, see you never.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → Thank you, take care!",
        next: null
      }
    }
  },
  {
    id: "processing-together",
    transition: { en: "On the bus ride home, neither of you says much at first.", zh: "回家的公交车上，一开始你们俩都没怎么说话。" },
    title: "Processing Together",
    subtitle: "公交车上 · 一起消化这段往事",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That was a lot to hear today.", zh: "今天听到的这些真不少。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It was, but I'm glad I heard it.", zh: "确实，但我很高兴我听到了这些。", correct: true, xp: 10 },
          { text: "It was kind of boring.", correct: false }
        ],
        hintOnWrong: "简单感想（陈述句）→ It was, but I'm glad I heard it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Thank you for helping me find this.", zh: "谢谢你帮我找到了这些。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We found it together.", zh: "是我们一起找到的。", correct: true, xp: 10 },
          { text: "It was mostly luck.", correct: false }
        ],
        hintOnWrong: "用过去时回应（陈述句）→ We found it together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's visit the house next weekend, like he said.", zh: "我们下周末就去看看那栋房子吧，像他说的那样。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Yes, let's make a plan.", zh: "好，我们来定个计划。", correct: true, xp: 10 },
          { text: "Let's wait a little longer.", correct: false }
        ],
        hintOnWrong: "接受提议 → Yes, let's make a plan.",
        next: null
      }
    }
  },
  {
    id: "sharing-the-news",
    transition: { en: "That evening, you can't wait to tell Emma and Sam.", zh: "那天晚上，你迫不及待想告诉Emma和Sam。" },
    title: "Sharing the News",
    subtitle: "书店里 · 告诉Emma这个新线索",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You look like you have a story to tell.", zh: "你看起来有故事要讲啊。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I do. A big one.", zh: "是的。一个大故事。", correct: true, xp: 10 },
          { text: "Not really, never mind.", correct: false }
        ],
        hintOnWrong: "简单陈述（陈述句）→ I do. A big one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Did the shop that helped Mrs. Ho's family sell books, by any chance?", zh: "帮过Ho太太一家的那家店，会不会正好是卖书的？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "Yes, it did. Maybe it was this one.", zh: "是的，没错。也许就是这家店。", correct: true, xp: 10 },
          { text: "No, it sold shoes.", correct: false }
        ],
        hintOnWrong: "用过去时确认（陈述句）→ Yes, it did. Maybe it was this one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That would explain a lot. Let's find out together.", zh: "那就能解释很多事了。我们一起查清楚吧。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's start tomorrow.", zh: "我们明天就开始吧。", correct: true, xp: 10 },
          { text: "Let's forget about it.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's start tomorrow.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Of course, I wanted to come.", zh: "当然啦，我想来的。" },
  { en: "A little, but it's exciting too.", zh: "有点，但也挺让人期待的。" },
  { en: "Okay, let's go.", zh: "好，我们走吧。" },
  { en: "Hello, it's an honor to meet you.", zh: "您好，很荣幸见到您。" },
  { en: "Yes, please. Thank you.", zh: "好的，谢谢您。" },
  { en: "Thank you, your home is lovely.", zh: "谢谢您，您家真漂亮。" },
  { en: "Yes, and an old photo too.", zh: "是的，还有一张旧照片。" },
  { en: "Please, I'd love to hear it.", zh: "请说吧，我很想听。" },
  { en: "That sounds like a hard beginning.", zh: "听起来是个艰难的开始。" },
  { en: "People really took care of each other.", zh: "大家真的会互相照顾。" },
  { en: "Is that why letters matter so much to you?", zh: "这就是为什么信件对你们这么重要吗？" },
  { en: "Can we go check the house sometime?", zh: "我们能找时间去看看那栋房子吗？" },
  { en: "That's such a hard choice to make.", zh: "这真是个艰难的抉择。" },
  { en: "What did you promise?", zh: "你们承诺了什么？" },
  { en: "That's a promise worth keeping.", zh: "这是个值得坚守的承诺。" },
  { en: "Do you remember her name?", zh: "您还记得她的名字吗？" },
  { en: "Emma's shop sells books too.", zh: "Emma的店也是卖书的。" },
  { en: "I'll ask Emma about it tomorrow.", zh: "我明天去问问Emma。" },
  { en: "She doesn't have to carry it alone anymore.", zh: "她不用再独自承担了。" },
  { en: "Thank you for trusting me with it.", zh: "谢谢您愿意信任我，跟我说这些。" },
  { en: "I'd love that. Let's plan it.", zh: "我很愿意。我们来定个计划吧。" },
  { en: "The pleasure was all mine.", zh: "这份荣幸都是我的。" },
  { en: "We will, I promise.", zh: "我们会的，我保证。" },
  { en: "Thank you, take care!", zh: "谢谢您，您也保重！" },
  { en: "It was, but I'm glad I heard it.", zh: "确实，但我很高兴我听到了这些。" },
  { en: "We found it together.", zh: "是我们一起找到的。" },
  { en: "Yes, let's make a plan.", zh: "好，我们来定个计划。" },
  { en: "I do. A big one.", zh: "是的。一个大故事。" },
  { en: "Yes, it did. Maybe it was this one.", zh: "是的，没错。也许就是这家店。" },
  { en: "Let's start tomorrow.", zh: "我们明天就开始吧。" }
);
