// 内容数据层：第六章，紧接第五章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter5.js 之后、audio-manifest.js 之前加载。
//
// Tier: L2（跟第四、五章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章不引入新 grammarTag。剧情里程碑：路线图里"第一次由NPC完整用过去时讲述
// 一段往事"在本章兑现（第5课 a-story-unfolds、第6课 the-story-continues 两课，
// Ho太太用连续几句过去时叙述自己的童年）——这是 NPC 输入，不受产出语法上限约束，
// 但刻意写得情感真挚、有画面感，配得上"故事第一次真正打开"这个分量。
// 悬疑线只揭晓"Ho太太一家曾住在那栋房子里"这个片段，不涉及具体史实
// （移民政策/年代细节留给第11章按 Josh 拍板的方向做过研究后再写，这里只写
// 私人化的家庭记忆，不编造真实历史背景）。结尾埋下第7章"拜访Ho太太的哥哥，
// 听他讲完整往事"的钩子。

GAME_CONTENT.scenes.push(
  {
    id: "the-library",
    transition: { en: "The following week, you and Mrs. Ho meet at the library.", zh: "第二周，你和Ho太太在图书馆见面了。" },
    title: "The Library",
    subtitle: "图书馆 · 和Ho太太一起来查资料",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Here we are. I haven't been here in years.", zh: "到了。我好多年没来这儿了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It's a beautiful building.", zh: "这栋楼真漂亮。", correct: true, xp: 10 },
          { text: "It's boring here.", correct: false }
        ],
        hintOnWrong: "简单评论（陈述句）→ It's a beautiful building.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let's find someone who can help us.", zh: "我们找个能帮忙的人吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's ask at the desk.", zh: "好主意，我们去服务台问问吧。", correct: true, xp: 10 },
          { text: "I'll wait outside.", correct: false }
        ],
        hintOnWrong: "接受提议 → Good idea, let's ask at the desk.",
        next: "n3"
      },
      n3: {
        avatar: "🧓",
        npcLine: { en: "Hello! How can I help you two today?", zh: "你们好！今天有什么可以帮忙的？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We're looking for old records about a house.", zh: "我们想查一栋房子的旧记录。", correct: true, xp: 10 },
          { text: "Nothing, just looking.", correct: false }
        ],
        hintOnWrong: "陈述来意（陈述句）→ We're looking for old records about a house.",
        next: null
      }
    }
  },
  {
    id: "asking-the-archivist",
    title: "Asking for Help",
    subtitle: "服务台 · 说明来意",
    avatar: "🧓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A house? Do you have an address?", zh: "一栋房子？你们有地址吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I do. Here it is.", zh: "有的。给你，就是这个。", correct: true, xp: 10 },
          { text: "No idea, sorry.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I do. Here it is.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This street has old records from decades ago. Let me check.", zh: "这条街有好几十年前的旧记录。我查一下。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, I'll wait here.", zh: "谢谢，我在这儿等。", correct: true, xp: 10 },
          { text: "Hurry up, please.", correct: false }
        ],
        hintOnWrong: "用 will 表示等待 → Thank you, I'll wait here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Found a folder. Can you two follow me?", zh: "找到一个文件夹了。你们俩能跟我来一下吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, we can follow you.", zh: "当然，我们跟你去。", correct: true, xp: 10 },
          { text: "No, we're too tired.", correct: false }
        ],
        hintOnWrong: "用 can 表示能一起去 → Of course, we can follow you.",
        next: null
      }
    }
  },
  {
    id: "searching-records",
    title: "Searching the Records",
    subtitle: "档案室 · 一起翻找旧记录",
    avatar: "🧓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These boxes are heavy. Can you help me carry one?", zh: "这些箱子很重。你能帮我搬一个吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can carry it.", zh: "没问题，我能搬。", correct: true, xp: 10 },
          { text: "That looks too heavy.", correct: false }
        ],
        hintOnWrong: "用 can 表示能力 → Sure, I can carry it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let's open this one first.", zh: "我们先打开这一个吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Okay, let's see what's inside.", zh: "好，我们看看里面有什么。", correct: true, xp: 10 },
          { text: "I'm not curious.", correct: false }
        ],
        hintOnWrong: "接受提议 → Okay, let's see what's inside.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Wait — this looks important.", zh: "等等——这个看起来很重要。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "What is it? Let me see.", zh: "是什么？我看看。", correct: true, xp: 10 },
          { text: "I don't care, honestly.", correct: false }
        ],
        hintOnWrong: "追问＋请求查看 → What is it? Let me see.",
        next: null
      }
    }
  },
  {
    id: "the-old-clipping",
    title: "An Old Clipping",
    subtitle: "档案室 · 一张旧剪报",
    avatar: "🧓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's a newspaper clipping. And a photo of that house.", zh: "是一张剪报。还有一张那栋房子的照片。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's the same house from my photo.", zh: "这跟我照片里是同一栋房子。", correct: true, xp: 10 },
          { text: "That's a different house.", correct: false }
        ],
        hintOnWrong: "陈述发现（陈述句）→ That's the same house from my photo.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look at this — there's a family name here too.", zh: "你看这个——这儿还有一个家族姓氏。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Really? What does it say?", zh: "真的吗？上面写的什么？", correct: true, xp: 10 },
          { text: "I can't read old paper.", correct: false }
        ],
        hintOnWrong: "追问细节 → What does it say?",
        next: "n3"
      },
      n3: {
        avatar: "😮",
        npcLine: { en: "Wait... that's my family's name.", zh: "等等……那是我家的姓。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Mrs. Ho, are you okay?", zh: "Ho太太，你还好吗？", correct: true, xp: 10 },
          { text: "That's a coincidence, probably.", correct: false }
        ],
        hintOnWrong: "关心询问 → Mrs. Ho, are you okay?",
        next: null
      }
    }
  },
  {
    id: "a-story-unfolds",
    title: "A Story Unfolds",
    subtitle: "档案室 · 一段往事的开端",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm okay. This clipping... it's about my family's old house. We lived there when I was young. We moved here from far away, and that house was the first place that felt like home.", zh: "我没事。这张剪报……说的是我家以前的老房子。我小时候我们就住在那儿。我们从很远的地方搬来这里，那栋房子是第一个让我们觉得像家的地方。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's such a beautiful memory.", zh: "这真是一段美好的回忆。", correct: true, xp: 10 },
          { text: "That's kind of sad.", correct: false }
        ],
        hintOnWrong: "回应对方的往事（陈述句）→ That's such a beautiful memory.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It was. But we didn't stay there forever.", zh: "确实是。但我们没有一直住在那儿。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "What happened after that?", zh: "后来发生了什么？", correct: true, xp: 10 },
          { text: "I don't need to know.", correct: false }
        ],
        hintOnWrong: "追问后续 → What happened after that?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's a longer story. Let's sit down somewhere quiet.", zh: "这个说来话长。我们找个安静的地方坐下吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Of course, let's find a table.", zh: "好，我们去找张桌子吧。", correct: true, xp: 10 },
          { text: "I'm in a hurry.", correct: false }
        ],
        hintOnWrong: "接受提议 → Of course, let's find a table.",
        next: null
      }
    }
  },
  {
    id: "the-story-continues",
    title: "The Story Continues",
    subtitle: "阅览室安静角落 · 往事继续",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My parents worked very hard here. They didn't speak much English at first, but they learned, little by little.", zh: "我父母在这里非常努力地工作。他们一开始英语说得不多，但一点点学会了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds so hard.", zh: "听起来真不容易。", correct: true, xp: 10 },
          { text: "That sounds easy.", correct: false }
        ],
        hintOnWrong: "表达共情（陈述句）→ That sounds so hard.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It was hard, yes. But we had good neighbors. They helped us a lot.", zh: "确实不容易。但我们有很好的邻居，帮了我们很多。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I'm glad you weren't alone.", zh: "真高兴你们不是孤零零的。", correct: true, xp: 10 },
          { text: "That's not surprising.", correct: false }
        ],
        hintOnWrong: "用过去时的否定形式回应 → I'm glad you weren't alone.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you for listening. There's more, but I think my brother remembers it better than I do.", zh: "谢谢你听我说。还有更多，但我觉得我哥哥记得比我更清楚。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Can we go talk to him?", zh: "我们能去找他聊聊吗？", correct: true, xp: 10 },
          { text: "No, that's enough for today.", correct: false }
        ],
        hintOnWrong: "用 can 提议下一步 → Can we go talk to him?",
        next: null
      }
    }
  },
  {
    id: "connecting-the-dots",
    title: "Connecting the Dots",
    subtitle: "阅览室 · 整理线索",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Yes, let's visit him soon. He lives across town.", zh: "好，我们尽快去看看他吧。他住在城另一头。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll come with you, if that's okay.", zh: "如果可以的话，我陪你一起去。", correct: true, xp: 10 },
          { text: "I'll stay home.", correct: false }
        ],
        hintOnWrong: "用 will 表示愿意陪同 → I'll come with you, if that's okay.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Of course. He'll be happy to meet you.", zh: "当然可以。他会很高兴见到你的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I can't wait to meet him.", zh: "我等不及想见他了。", correct: true, xp: 10 },
          { text: "I'm a little nervous.", correct: false }
        ],
        hintOnWrong: "表达期待（陈述句）→ I can't wait to meet him.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's head back now. It's getting late.", zh: "我们现在回去吧。天有点晚了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sure, let's go home.", zh: "好，我们回家吧。", correct: true, xp: 10 },
          { text: "Not yet, five more minutes.", correct: false }
        ],
        hintOnWrong: "接受提议 → Sure, let's go home.",
        next: null
      }
    }
  },
  {
    id: "thanking-mr-grant",
    title: "Thank You",
    subtitle: "图书馆 · 向管理员道谢",
    avatar: "🧓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I hope that clipping helped.", zh: "希望那张剪报有帮到你们。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It helped so much. Thank you.", zh: "帮了很大的忙。谢谢你。", correct: true, xp: 10 },
          { text: "Not really, sorry.", correct: false }
        ],
        hintOnWrong: "表达感激（陈述句）→ It helped so much. Thank you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Anytime. Come back if you need more.", zh: "随时欢迎。需要更多帮助就再来。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I will, thank you again.", zh: "我会的，再次谢谢你。", correct: true, xp: 10 },
          { text: "Probably not.", correct: false }
        ],
        hintOnWrong: "用 will 回应 → I will, thank you again.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Take care, you two.", zh: "你们俩多保重。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "You too! Have a good day.", zh: "你也是！祝你今天愉快。", correct: true, xp: 10 },
          { text: "Bye, whatever.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → You too! Have a good day.",
        next: null
      }
    }
  },
  {
    id: "telling-emma",
    transition: { en: "On the way home, you stop by the bookstore.", zh: "回家路上，你顺路去了一趟书店。" },
    title: "Telling Emma",
    subtitle: "书店里 · 告诉Emma这个发现",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How did it go at the library?", zh: "图书馆那边怎么样？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "We found a real connection.", zh: "我们找到了一个真正的关联。", correct: true, xp: 10 },
          { text: "We found nothing.", correct: false }
        ],
        hintOnWrong: "用过去时说明结果 → We found a real connection.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Wow, really? Tell me everything.", zh: "哇，真的吗？快跟我说说。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Mrs. Ho's family lived in that house.", zh: "Ho太太一家以前就住在那栋房子里。", correct: true, xp: 10 },
          { text: "It's a long story, never mind.", correct: false }
        ],
        hintOnWrong: "陈述关键发现（陈述句）→ Mrs. Ho's family lived in that house.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's incredible. What's next?", zh: "太不可思议了。接下来打算怎么做？", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "We'll visit her brother next.", zh: "我们接下来会去见她哥哥。", correct: true, xp: 10 },
          { text: "I have no plan.", correct: false }
        ],
        hintOnWrong: "用 will 说明打算 → We'll visit her brother next.",
        next: null
      }
    }
  },
  {
    id: "planning-the-visit",
    transition: { en: "That night, back at the apartment...", zh: "那天晚上，回到公寓……" },
    title: "Planning the Visit",
    subtitle: "公寓 · 和Sam聊今天的发现",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You seem thoughtful tonight. What's going on?", zh: "你今晚看起来若有所思。怎么了？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I learned something big today.", zh: "我今天了解到了一件大事。", correct: true, xp: 10 },
          { text: "Nothing happened.", correct: false }
        ],
        hintOnWrong: "用过去时概括今天 → I learned something big today.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Big how?", zh: "有多大？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Mrs. Ho's family has a whole history here.", zh: "Ho太太家在这里有一段完整的往事。", correct: true, xp: 10 },
          { text: "It's not important.", correct: false }
        ],
        hintOnWrong: "陈述句概括 → Mrs. Ho's family has a whole history here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Wow. Good luck with all of it.", zh: "哇。祝你顺利搞清楚这一切。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thanks. I'll figure it out soon.", zh: "谢谢。我会尽快搞清楚的。", correct: true, xp: 10 },
          { text: "I'll never figure it out.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll figure it out soon.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "It's a beautiful building.", zh: "这栋楼真漂亮。" },
  { en: "Good idea, let's ask at the desk.", zh: "好主意，我们去服务台问问吧。" },
  { en: "We're looking for old records about a house.", zh: "我们想查一栋房子的旧记录。" },
  { en: "Yes, I do. Here it is.", zh: "有的。给你，就是这个。" },
  { en: "Thank you, I'll wait here.", zh: "谢谢，我在这儿等。" },
  { en: "Of course, we can follow you.", zh: "当然，我们跟你去。" },
  { en: "Sure, I can carry it.", zh: "没问题，我能搬。" },
  { en: "Okay, let's see what's inside.", zh: "好，我们看看里面有什么。" },
  { en: "What is it? Let me see.", zh: "是什么？我看看。" },
  { en: "That's the same house from my photo.", zh: "这跟我照片里是同一栋房子。" },
  { en: "Really? What does it say?", zh: "真的吗？上面写的什么？" },
  { en: "Mrs. Ho, are you okay?", zh: "Ho太太，你还好吗？" },
  { en: "That's such a beautiful memory.", zh: "这真是一段美好的回忆。" },
  { en: "What happened after that?", zh: "后来发生了什么？" },
  { en: "Of course, let's find a table.", zh: "好，我们去找张桌子吧。" },
  { en: "That sounds so hard.", zh: "听起来真不容易。" },
  { en: "I'm glad you weren't alone.", zh: "真高兴你们不是孤零零的。" },
  { en: "Can we go talk to him?", zh: "我们能去找他聊聊吗？" },
  { en: "I'll come with you, if that's okay.", zh: "如果可以的话，我陪你一起去。" },
  { en: "I can't wait to meet him.", zh: "我等不及想见他了。" },
  { en: "Sure, let's go home.", zh: "好，我们回家吧。" },
  { en: "It helped so much. Thank you.", zh: "帮了很大的忙。谢谢你。" },
  { en: "I will, thank you again.", zh: "我会的，再次谢谢你。" },
  { en: "You too! Have a good day.", zh: "你也是！祝你今天愉快。" },
  { en: "We found a real connection.", zh: "我们找到了一个真正的关联。" },
  { en: "Mrs. Ho's family lived in that house.", zh: "Ho太太一家以前就住在那栋房子里。" },
  { en: "We'll visit her brother next.", zh: "我们接下来会去见她哥哥。" },
  { en: "I learned something big today.", zh: "我今天了解到了一件大事。" },
  { en: "Mrs. Ho's family has a whole history here.", zh: "Ho太太家在这里有一段完整的往事。" },
  { en: "Thanks. I'll figure it out soon.", zh: "谢谢。我会尽快搞清楚的。" }
);
