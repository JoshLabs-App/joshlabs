// 内容数据层：第十四章，紧接第十三章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter13.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（跟第十三章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 第二个新 grammarTag：
//   - subjunctive（structure，占"一课一个新点"名额，3课内必须复现）：
//     虚拟语气基础（I wish I had... / If I were you, I'd...），
//     第4课（nervous-before-teaching）引入，第4/7/9课多次复现。
// past-perfect（第十三章）继续复现，present-perfect/comparative/conditional/
// passive（L3）也继续巩固。
//
// 剧情：Lily's House开始办英语班，呼应整个游戏"用英语能力推进剧情"的核心主题——
// 玩家从"学英语的人"变成"帮别人学英语的人"。也借这个机会给一直是配角的Sam
// 一点篇幅：他其实一直在悄悄上夜校，想考教师资格。

GAME_CONTENT.scenes.push(
  {
    id: "an-idea-for-classes",
    transition: { en: "A week after opening, Lily's House already feels alive.", zh: "开放一周后，「Lily之家」已经充满了生气。" },
    title: "An Idea for Classes",
    subtitle: "Lily之家 · 一个新点子",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A few of us were talking. What if this place had English classes?", zh: "我们几个之前在聊。要是这里能有英语课呢？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we had classes, I'd love to help.", zh: "如果开课，我很乐意帮忙。", correct: true, xp: 10 },
          { text: "If we had classes, I'd rather not.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we had classes, I'd love to help.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You've already learned so much this year yourself.", zh: "你自己今年已经学了这么多了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've learned enough to pass it on now.", zh: "我学得已经够多了，现在可以传下去了。", correct: true, xp: 10 },
          { text: "I've forgotten most of it already.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've learned enough to pass it on now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's ask around and see who else wants to teach.", zh: "我们问问看还有谁想来教课。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's ask everyone tonight.", zh: "好主意，我们今晚就去问问大家。", correct: true, xp: 10 },
          { text: "Let's just decide it's you and me.", correct: false }
        ],
        hintOnWrong: "接受提议 → Good idea, let's ask everyone tonight.",
        next: null
      }
    }
  },
  {
    id: "recruiting-teachers",
    title: "Recruiting Teachers",
    subtitle: "书店里 · 招募老师",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'd love to teach a class, if you'll have me.", zh: "如果你们不嫌弃，我很想教一堂课。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If you're in, we'd be so lucky.", zh: "如果你加入，那我们真是太幸运了。", correct: true, xp: 10 },
          { text: "If you're in, that's a bit much.", correct: false }
        ],
        hintOnWrong: "用条件句 → If you're in, we'd be so lucky.",
        next: "n2"
      },
      n2: {
        avatar: "🧑",
        npcLine: { en: "I could probably help too, if it's just simple conversation.", zh: "如果只是简单对话，我大概也能帮上忙。" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "Simple conversation is exactly what's needed.", zh: "简单对话正是需要的。", correct: true, xp: 10 },
          { text: "Simple conversation isn't really teaching.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Simple conversation is exactly what's needed.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Look at that — we already have three teachers.", zh: "你看——我们已经有三位老师了。" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've already got a real team.", zh: "我们已经有了一支像样的团队了。", correct: true, xp: 10 },
          { text: "We've barely started, really.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've already got a real team.",
        next: null
      }
    }
  },
  {
    id: "the-first-lesson-plan",
    title: "Planning the First Lesson",
    subtitle: "Lily之家 · 备课",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should the first lesson be about?", zh: "第一课应该讲点什么？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "What did you learn first, back then?", zh: "你当初最先学的是什么？", correct: true, xp: 10 },
          { text: "It doesn't matter what we teach.", correct: false }
        ],
        hintOnWrong: "追问过去经历（wh-question）→ What did you learn first, back then?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Simple greetings. That's where everyone starts.", zh: "简单的问候语。每个人都是从这儿开始的。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "That's exactly where I started too.", zh: "我当初也正是从这儿开始的。", correct: true, xp: 10 },
          { text: "That seems too easy for anyone.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's exactly where I started too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By the time class starts tomorrow, we should have everything ready.", zh: "明天上课之前，我们应该把一切都准备好。", voice: "emma" },
        skill: "work",
        grammarTag: "past-perfect",
        choices: [
          { text: "By tomorrow, we'll have had a whole night to prepare.", zh: "到明天，我们会有一整晚的时间来准备。", correct: true, xp: 10 },
          { text: "By tomorrow, nothing will be ready.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → By tomorrow, we'll have had a whole night to prepare.",
        next: null
      }
    }
  },
  {
    id: "nervous-before-teaching",
    transition: { en: "The next evening, you pace nervously before the first class.", zh: "第二天傍晚，第一堂课开始前，你紧张地来回踱步。" },
    title: "Nervous Before Teaching",
    subtitle: "Lily之家 · 上课前的紧张",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You seem nervous. First time teaching?", zh: "你看起来很紧张。第一次教课？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It is, and I wish I felt more ready.", zh: "是的，我真希望自己感觉更有准备一点。", correct: true, xp: 10 },
          { text: "It is, but I feel completely calm.", correct: false }
        ],
        hintOnWrong: "用虚拟语气（wish）→ It is, and I wish I felt more ready.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If I were you, I'd just remember your own first day here.", zh: "如果我是你，我就会想想自己刚到这儿的第一天。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "If I were you, I'd say the same thing.", zh: "如果我是你，我也会这么说。", correct: true, xp: 10 },
          { text: "If I were you, I wouldn't bother.", correct: false }
        ],
        hintOnWrong: "用虚拟语气（If I were...）→ If I were you, I'd say the same thing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You'll do fine. Everyone in that room just wants to be understood.", zh: "你会做得很好的。那间屋子里的每个人，都只是想被理解。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's all I ever wanted too.", zh: "这也是我一直以来想要的。", correct: true, xp: 10 },
          { text: "That's easy for you to say.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's all I ever wanted too.",
        next: null
      }
    }
  },
  {
    id: "the-first-class",
    title: "The First Class",
    subtitle: "Lily之家 · 第一堂课",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hello! Is this the English class?", zh: "你好！这是英语课的教室吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Yes it is, welcome! Please, sit anywhere.", zh: "是的，欢迎！请随便坐。", correct: true, xp: 10 },
          { text: "Yes, but we're already full.", correct: false }
        ],
        hintOnWrong: "礼貌欢迎（陈述句）→ Yes it is, welcome! Please, sit anywhere.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "More people have come than I expected.", zh: "来的人比我预期的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "So many more than expected, in a good way.", zh: "比预期多了这么多，是好事。", correct: true, xp: 10 },
          { text: "Fewer than I hoped, honestly.", correct: false }
        ],
        hintOnWrong: "用比较级 → So many more than expected, in a good way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Okay, everyone. Let's begin with 'Hello, how are you?'", zh: "好了，各位。我们从「你好，你好吗？」开始吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's begin, everyone repeat after me.", zh: "我们开始吧，大家跟我念。", correct: true, xp: 10 },
          { text: "Let's skip the basics entirely.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's begin, everyone repeat after me.",
        next: null
      }
    }
  },
  {
    id: "a-students-story",
    transition: { en: "After class, one student lingers to talk.", zh: "下课后，一位学员留下来聊了聊。" },
    title: "A Student's Story",
    subtitle: "Lily之家 · 一位学员的故事",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "By the time we moved here, we had already lost almost everything once.", zh: "我们搬来这儿的时候，其实已经失去过几乎所有东西一次了。" },
        skill: "community",
        grammarTag: "past-perfect",
        choices: [
          { text: "You had already been through so much.", zh: "你们已经经历了太多。", correct: true, xp: 10 },
          { text: "You hadn't lost anything, really.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → You had already been through so much.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This class is the first thing that's felt like starting over.", zh: "这堂课是第一件让我感觉像是重新开始的事。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I'm honored it's felt that way.", zh: "很荣幸这堂课能给你这种感觉。", correct: true, xp: 10 },
          { text: "It's really not that big of a deal.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I'm honored it's felt that way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Someone did this for your friend's family too, didn't they?", zh: "曾经也有人为你朋友一家做过这样的事，对吧？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "They did, a long time ago.", zh: "确实有过，很久以前的事了。", correct: true, xp: 10 },
          { text: "No, that never really happened.", correct: false }
        ],
        hintOnWrong: "用过去时确认 → They did, a long time ago.",
        next: null
      }
    }
  },
  {
    id: "if-i-were-you",
    title: "If I Were You",
    subtitle: "Lily之家 · 给学员的建议",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm scared to speak English outside this room.", zh: "我在这间教室外面很害怕开口说英语。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I understand, I felt that way too.", zh: "我理解，我也曾经那样。", correct: true, xp: 10 },
          { text: "You shouldn't feel scared at all.", correct: false }
        ],
        hintOnWrong: "简单共情（陈述句）→ I understand, I felt that way too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If I were you, I'd practice with just one shopkeeper at first.", zh: "如果我是你，我会先只找一位店主练习。", voice: "emma" },
        skill: "work",
        grammarTag: "subjunctive",
        choices: [
          { text: "If I were starting again, I'd do exactly that.", zh: "如果我重新开始，我也会正好这么做。", correct: true, xp: 10 },
          { text: "If I were you, I'd give up entirely.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → If I were starting again, I'd do exactly that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "One shopkeeper. Then one neighbor. Then a whole city.", zh: "先一位店主。然后一位邻居。然后是一整座城市。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "One person at a time, that's how it works.", zh: "一次一个人，事情就是这样成的。", correct: true, xp: 10 },
          { text: "That sounds like it'll take forever.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ One person at a time, that's how it works.",
        next: null
      }
    }
  },
  {
    id: "small-victories",
    transition: { en: "A few weeks pass, and small victories start to add up.", zh: "几周过去了，一个个小小的胜利开始累积起来。" },
    title: "Small Victories",
    subtitle: "Lily之家 · 一个个小小的进步",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I ordered my coffee in English today, all by myself.", zh: "我今天自己一个人用英语点了咖啡。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "You did it! I'm so proud of you.", zh: "你做到了！我真为你骄傲。", correct: true, xp: 10 },
          { text: "That's not really a big deal.", correct: false }
        ],
        hintOnWrong: "用过去时庆祝＋陈述句 → You did it! I'm so proud of you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Every one of you has improved more than you probably notice.", zh: "你们每个人的进步，都比自己意识到的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We've improved more than we realize, it's true.", zh: "确实，我们的进步比自己意识到的要多。", correct: true, xp: 10 },
          { text: "I don't think anyone has improved much.", correct: false }
        ],
        hintOnWrong: "用比较级 → We've improved more than we realize, it's true.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This calls for a celebration, don't you think?", zh: "这值得庆祝一下吧，你说呢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It absolutely calls for one.", zh: "绝对值得庆祝。", correct: true, xp: 10 },
          { text: "I don't think it's necessary.", correct: false }
        ],
        hintOnWrong: "简单赞同（陈述句）→ It absolutely calls for one.",
        next: null
      }
    }
  },
  {
    id: "sams-surprise",
    transition: { en: "That night, Sam asks to speak with you privately.", zh: "那天晚上，Sam说想单独跟你聊聊。" },
    title: "Sam's Surprise",
    subtitle: "公寓 · Sam的秘密",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've been taking night classes. I never told you.", zh: "我一直在上夜校。我从没跟你说过。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've kept that a secret this whole time?", zh: "你这么久一直瞒着我？", correct: true, xp: 10 },
          { text: "You've never done anything like that.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've kept that a secret this whole time?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I wish I had told you sooner, honestly.", zh: "说实话，我真希望自己早点告诉你。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "I wish you'd told me too, but I understand.", zh: "我也希望你早点告诉我，但我理解。", correct: true, xp: 10 },
          { text: "I wish you had never told me at all.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → I wish you'd told me too, but I understand.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I want to become a real teacher someday. Maybe even here.", zh: "我想有一天成为一名真正的老师。也许就在这儿。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "You'll be an amazing teacher, Sam.", zh: "你会成为一名很棒的老师的，Sam。", correct: true, xp: 10 },
          { text: "You'll probably change your mind.", correct: false }
        ],
        hintOnWrong: "用 will 表示看好未来 → You'll be an amazing teacher, Sam.",
        next: null
      }
    }
  },
  {
    id: "growing-together",
    transition: { en: "The next class, Sam stands at the front for the first time.", zh: "下一堂课，Sam第一次站到了讲台前。" },
    title: "Growing Together",
    subtitle: "Lily之家 · 一起成长",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If I hadn't come to this city, none of this would have happened.", zh: "如果我当初没来这座城市，这一切都不会发生。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "None of us would be here without that.", zh: "没有那件事，我们谁都不会在这儿。", correct: true, xp: 10 },
          { text: "It would have happened anyway.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ None of us would be here without that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A teacher, a student — tonight, we're all a little of both.", zh: "老师、学生——今晚，我们都有点两者兼备。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A little of both, and I love that.", zh: "两者兼备，我很喜欢这样。", correct: true, xp: 10 },
          { text: "I'd rather just pick one role.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A little of both, and I love that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Class, please welcome our newest teacher, Sam.", zh: "同学们，请欢迎我们最新的老师，Sam。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Welcome, Sam — we're so glad you're here.", zh: "欢迎，Sam——很高兴你在这儿。", correct: true, xp: 10 },
          { text: "Welcome, Sam, I guess this is fine.", correct: false }
        ],
        hintOnWrong: "礼貌欢迎（固定短语）→ Welcome, Sam — we're so glad you're here.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "If we had classes, I'd love to help.", zh: "如果开课，我很乐意帮忙。" },
  { en: "I've learned enough to pass it on now.", zh: "我学得已经够多了，现在可以传下去了。" },
  { en: "Good idea, let's ask everyone tonight.", zh: "好主意，我们今晚就去问问大家。" },
  { en: "If you're in, we'd be so lucky.", zh: "如果你加入，那我们真是太幸运了。" },
  { en: "Simple conversation is exactly what's needed.", zh: "简单对话正是需要的。" },
  { en: "We've already got a real team.", zh: "我们已经有了一支像样的团队了。" },
  { en: "What did you learn first, back then?", zh: "你当初最先学的是什么？" },
  { en: "That's exactly where I started too.", zh: "我当初也正是从这儿开始的。" },
  { en: "By tomorrow, we'll have had a whole night to prepare.", zh: "到明天，我们会有一整晚的时间来准备。" },
  { en: "It is, and I wish I felt more ready.", zh: "是的，我真希望自己感觉更有准备一点。" },
  { en: "If I were you, I'd say the same thing.", zh: "如果我是你，我也会这么说。" },
  { en: "That's all I ever wanted too.", zh: "这也是我一直以来想要的。" },
  { en: "Yes it is, welcome! Please, sit anywhere.", zh: "是的，欢迎！请随便坐。" },
  { en: "So many more than expected, in a good way.", zh: "比预期多了这么多，是好事。" },
  { en: "Let's begin, everyone repeat after me.", zh: "我们开始吧，大家跟我念。" },
  { en: "You had already been through so much.", zh: "你们已经经历了太多。" },
  { en: "I'm honored it's felt that way.", zh: "很荣幸这堂课能给你这种感觉。" },
  { en: "They did, a long time ago.", zh: "确实有过，很久以前的事了。" },
  { en: "I understand, I felt that way too.", zh: "我理解，我也曾经那样。" },
  { en: "If I were starting again, I'd do exactly that.", zh: "如果我重新开始，我也会正好这么做。" },
  { en: "One person at a time, that's how it works.", zh: "一次一个人，事情就是这样成的。" },
  { en: "You did it! I'm so proud of you.", zh: "你做到了！我真为你骄傲。" },
  { en: "We've improved more than we realize, it's true.", zh: "确实，我们的进步比自己意识到的要多。" },
  { en: "It absolutely calls for one.", zh: "绝对值得庆祝。" },
  { en: "You've kept that a secret this whole time?", zh: "你这么久一直瞒着我？" },
  { en: "I wish you'd told me too, but I understand.", zh: "我也希望你早点告诉我，但我理解。" },
  { en: "You'll be an amazing teacher, Sam.", zh: "你会成为一名很棒的老师的，Sam。" },
  { en: "None of us would be here without that.", zh: "没有那件事，我们谁都不会在这儿。" },
  { en: "A little of both, and I love that.", zh: "两者兼备，我很喜欢这样。" },
  { en: "Welcome, Sam — we're so glad you're here.", zh: "欢迎，Sam——很高兴你在这儿。" }
);
