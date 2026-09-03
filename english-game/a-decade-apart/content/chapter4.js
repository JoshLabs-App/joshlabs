// 内容数据层：第四章，紧接第三章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter3.js 之后、audio-manifest.js 之前加载。
//
// Tier: L2（首次解锁一般过去时叙述，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入两个新 grammarTag：
//   - past-simple（structure，占"一课一个新点"名额，3课内必须复现）：一般过去时叙述，
//     第2课（the-interview）引入，第2/3/9/10课多次复现。
//   - connector（chunk，不占名额，5课内复现）：because/so 等简单连接词，
//     第3课引入，第6课复现。
// 新增两个 tag 已经同步加进 scripts/validate-curriculum.mjs 的分类清单。
//
// 剧情：玩家在Emma的「十封信」书店应聘兼职（呼应第一章结尾Emma开的书店），
// 面试/上班过程中在旧账本里发现"Ho"这个姓氏，跟第三章认识的邻居Ho太太撞上——
// 悬疑线从"认出街区"往前推进一步，但仍不揭晓完整往事（留给第6章）。

GAME_CONTENT.scenes.push(
  {
    id: "help-wanted",
    transition: { en: "A few days later, walking past Ten Letters Bookstore...", zh: "几天后，你路过「十封信」书店……" },
    title: "Help Wanted",
    subtitle: "书店门口 · 看到招聘启事",
    avatar: "📚",
    startNode: "n1",
    nodes: {
      n1: {
        avatar: "😊",
        npcLine: { en: "Oh! Are you looking at my hiring sign?", zh: "哦！你在看我的招聘启事吗？", voice: "emma" },
        skill: "work",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, are you hiring?", zh: "是啊，你们在招人吗？", correct: true, xp: 10 },
          { text: "No, just walking.", correct: false }
        ],
        hintOnWrong: "用 Yes/No 问句确认 → Yes, are you hiring?",
        next: "n2"
      },
      n2: {
        avatar: "😊",
        npcLine: { en: "I am! Do you have any work experience?", zh: "在招！你有工作经验吗？", voice: "emma" },
        skill: "work",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I do. Can I tell you about it?", zh: "有的。我可以跟你说说吗？", correct: true, xp: 10 },
          { text: "No, never worked.", correct: false }
        ],
        hintOnWrong: "肯定回答＋用 can 请求 → Can I tell you about it?",
        next: "n3"
      },
      n3: {
        avatar: "😊",
        npcLine: { en: "Of course! Come in, let's talk.", zh: "当然可以！进来，我们聊聊。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds great, let's go in.", zh: "太好了，我们进去吧。", correct: true, xp: 10 },
          { text: "No, thanks.", correct: false }
        ],
        hintOnWrong: "接受提议 → Sounds great, let's go in.",
        next: null
      }
    }
  },
  {
    id: "the-interview",
    title: "The Interview",
    subtitle: "书店里 · 聊聊过去的工作经历",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So, tell me — what did you do before?", zh: "那，说说看——你以前是做什么的？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "I worked at a small café.", zh: "我以前在一家小咖啡馆工作过。", correct: true, xp: 10 },
          { text: "I don't remember.", correct: false }
        ],
        hintOnWrong: "用一般过去时讲过去做过的事 → I worked at a small café.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Nice! What did you do there?", zh: "不错！你在那儿做什么？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "I made coffee and helped customers.", zh: "我做咖啡，还帮顾客服务。", correct: true, xp: 10 },
          { text: "I did nothing.", correct: false }
        ],
        hintOnWrong: "继续用过去时描述工作内容 → I made coffee and helped customers.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That sounds perfect for a bookstore too.", zh: "这经验在书店也很合适。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I hope so! I love books.", zh: "希望如此！我很喜欢书。", correct: true, xp: 10 },
          { text: "Maybe not.", correct: false }
        ],
        hintOnWrong: "表达希望（陈述句）→ I hope so! I love books.",
        next: null
      }
    }
  },
  {
    id: "interview-more",
    title: "A Few More Questions",
    subtitle: "书店里 · 为什么想来这儿",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why did you leave that job?", zh: "你为什么离开那份工作？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "I moved to Toronto, so I left.", zh: "我搬到多伦多了，所以就离职了。", correct: true, xp: 10 },
          { text: "I don't know.", correct: false }
        ],
        hintOnWrong: "用过去时+连接词 so 说明原因 → I moved to Toronto, so I left.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That makes sense. Why do you want to work here?", zh: "有道理。你为什么想来这儿工作？", voice: "emma" },
        skill: "work",
        grammarTag: "connector",
        choices: [
          { text: "Because I really love this bookstore.", zh: "因为我真的很喜欢这家书店。", correct: true, xp: 10 },
          { text: "I need money.", correct: false }
        ],
        hintOnWrong: "用 because 说明原因（固定搭配）→ Because I really love this bookstore.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's a great reason. Can you start this week?", zh: "这个理由真好。你这周能开始吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, I can start anytime.", zh: "可以，我随时都能开始。", correct: true, xp: 10 },
          { text: "Not for a month.", correct: false }
        ],
        hintOnWrong: "用 can 回答可行性 → Yes, I can start anytime.",
        next: null
      }
    }
  },
  {
    id: "got-the-job",
    title: "You're Hired!",
    subtitle: "书店里 · 被录用啦",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Great! Welcome to the team.", zh: "太好了！欢迎加入。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Thank you! I'm so excited.", zh: "谢谢！我太激动了。", correct: true, xp: 10 },
          { text: "Whatever.", correct: false }
        ],
        hintOnWrong: "表达兴奋（陈述句）→ Thank you! I'm so excited.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We'll figure out the schedule together.", zh: "我们一起来定排班吧。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds good, let's plan it now.", zh: "好呀，我们现在就定吧。", correct: true, xp: 10 },
          { text: "Later, maybe.", correct: false }
        ],
        hintOnWrong: "提议一起行动 → Sounds good, let's plan it now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Perfect. See you soon, coworker.", zh: "太好了。回见啦，同事。", voice: "emma" },
        skill: "work",
        grammarTag: "courtesy",
        choices: [
          { text: "See you soon! Thanks again.", zh: "回见！再次谢谢你。", correct: true, xp: 10 },
          { text: "Bye forever.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → See you soon! Thanks again.",
        next: null
      }
    }
  },
  {
    id: "schedule-talk",
    title: "Setting the Schedule",
    subtitle: "书店里 · 约定上班时间",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you work weekends?", zh: "你周末能上班吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, I can work Saturdays.", zh: "可以，我周六能上班。", correct: true, xp: 10 },
          { text: "No, never.", correct: false }
        ],
        hintOnWrong: "用 can 回答 → Yes, I can work Saturdays.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Great, and what about weekday mornings?", zh: "很好，那平日早上呢？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Mornings work well for me.", zh: "早上对我来说没问题。", correct: true, xp: 10 },
          { text: "I hate mornings.", correct: false }
        ],
        hintOnWrong: "简单陈述可行性 → Mornings work well for me.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Perfect. I'll write it down.", zh: "太好了。我这就写下来。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "I'll be here bright and early.", zh: "我会早早地过来的。", correct: true, xp: 10 },
          { text: "Maybe I'll come.", correct: false }
        ],
        hintOnWrong: "用 will 表示承诺 → I'll be here bright and early.",
        next: null
      }
    }
  },
  {
    id: "first-shift",
    transition: { en: "Monday morning, your first shift begins.", zh: "周一早上，你的第一次上班开始了。" },
    title: "First Shift",
    subtitle: "书店里 · 第一天上班",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Ready? Let's start with the shelves.", zh: "准备好了吗？我们从书架开始吧。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Ready! Let's do this.", zh: "准备好了！开始吧。", correct: true, xp: 10 },
          { text: "Not really.", correct: false }
        ],
        hintOnWrong: "接受提议 → Ready! Let's do this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you sort these by author's last name?", zh: "你能按作者姓氏给这些排序吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can do that easily.", zh: "没问题，这个我很容易就能做到。", correct: true, xp: 10 },
          { text: "That's too hard.", correct: false }
        ],
        hintOnWrong: "用 can 表示能力 → Sure, I can do that easily.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're a natural at this!", zh: "你干这个很有天赋！", voice: "emma" },
        skill: "work",
        grammarTag: "connector",
        choices: [
          { text: "Thanks, that's because I love organizing.", zh: "谢谢，那是因为我喜欢整理东西。", correct: true, xp: 10 },
          { text: "It's boring.", correct: false }
        ],
        hintOnWrong: "用 because 说明原因（固定搭配）→ Thanks, that's because I love organizing.",
        next: null
      }
    }
  },
  {
    id: "coworker-mention",
    title: "An Old Ledger",
    subtitle: "储藏室 · Emma提到旧账本",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This storage room came with old boxes from the last owner.", zh: "这间储藏室带着上一任房东留下的旧箱子。", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "Really? What's inside them?", zh: "真的吗？里面有什么？", correct: true, xp: 10 },
          { text: "I don't want to look.", correct: false }
        ],
        hintOnWrong: "追问细节 → What's inside them?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Old ledgers, mostly. Want to take a look?", zh: "大多是旧账本。想看看吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, can I open this one?", zh: "好呀，我能打开这本看看吗？", correct: true, xp: 10 },
          { text: "No, boring.", correct: false }
        ],
        hintOnWrong: "用 can 请求许可 → Can I open this one?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Go ahead. It's from years ago.", zh: "打开吧。这是好多年前的了。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, I'll take a quick look.", zh: "好的，我快速看一看。", correct: true, xp: 10 },
          { text: "I'll skip it.", correct: false }
        ],
        hintOnWrong: "用 will 表示马上要做 → I'll take a quick look.",
        next: null
      }
    }
  },
  {
    id: "old-records",
    title: "A Familiar Name",
    subtitle: "旧账本 · 发现一个熟悉的姓氏",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Find anything interesting?", zh: "找到什么有意思的东西了吗？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Wait, this name looks familiar.", zh: "等等，这个名字看着眼熟。", correct: true, xp: 10 },
          { text: "Nothing much.", correct: false }
        ],
        hintOnWrong: "陈述发现（陈述句）→ Wait, this name looks familiar.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Which name? Let me see.", zh: "哪个名字？我看看。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "It says 'Ho' right here.", zh: "这里写着'Ho'。", correct: true, xp: 10 },
          { text: "I can't read it.", correct: false }
        ],
        hintOnWrong: "指出具体内容（陈述句）→ It says 'Ho' right here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Ho... like your neighbor?", zh: "Ho……跟你邻居同姓？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe! Why is her name in here?", zh: "有可能！她的名字为什么会在这里？", correct: true, xp: 10 },
          { text: "Just a coincidence.", correct: false }
        ],
        hintOnWrong: "追问原因 → Why is her name in here?",
        next: null
      }
    }
  },
  {
    id: "the-name",
    title: "A Growing Mystery",
    subtitle: "书店里 · 谜团越来越大",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I don't know. This ledger is from before I bought the shop.", zh: "我不知道。这本账本是我买下这家店之前的。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "So someone else owned it first.", zh: "所以是别人先拥有的。", correct: true, xp: 10 },
          { text: "That's not possible.", correct: false }
        ],
        hintOnWrong: "用过去时描述推断 → So someone else owned it first.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Exactly. Maybe Mrs. Ho remembers something.", zh: "没错。也许Ho太太记得点什么。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "I'll ask her tomorrow.", zh: "我明天去问问她。", correct: true, xp: 10 },
          { text: "Forget about it.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll ask her tomorrow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Good idea. Keep me posted!", zh: "好主意。有消息跟我说一声！", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "I will, I promise.", zh: "我会的，我保证。", correct: true, xp: 10 },
          { text: "Maybe, maybe not.", correct: false }
        ],
        hintOnWrong: "用 will 承诺 → I will, I promise.",
        next: null
      }
    }
  },
  {
    id: "telling-sam",
    transition: { en: "At the end of your shift, you head home.", zh: "下班后，你走回家。" },
    title: "Telling Sam",
    subtitle: "公寓 · 告诉Sam这个发现",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You got a job? That's great!", zh: "你找到工作啦？太好了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I did! I worked my first shift today.", zh: "找到啦！我今天上了第一个班。", correct: true, xp: 10 },
          { text: "Not really.", correct: false }
        ],
        hintOnWrong: "用过去时说明今天做了什么 → I worked my first shift today.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Cool! Anything exciting happen?", zh: "酷！有什么有意思的事发生吗？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Yes, I found an old name in a ledger.", zh: "有，我在一本旧账本里发现了一个名字。", correct: true, xp: 10 },
          { text: "No, nothing at all.", correct: false }
        ],
        hintOnWrong: "用过去时讲述今天发生的事 → I found an old name in a ledger.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whose name?", zh: "谁的名字？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Mrs. Ho's. I'll ask her about it tomorrow.", zh: "Ho太太的。我明天去问问她。", correct: true, xp: 10 },
          { text: "I'd rather not say.", correct: false }
        ],
        hintOnWrong: "陈述句+will承诺后续行动 → Mrs. Ho's. I'll ask her about it tomorrow.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Yes, are you hiring?", zh: "是啊，你们在招人吗？" },
  { en: "Yes, I do. Can I tell you about it?", zh: "有的。我可以跟你说说吗？" },
  { en: "Sounds great, let's go in.", zh: "太好了，我们进去吧。" },
  { en: "I worked at a small café.", zh: "我以前在一家小咖啡馆工作过。" },
  { en: "I made coffee and helped customers.", zh: "我做咖啡，还帮顾客服务。" },
  { en: "I hope so! I love books.", zh: "希望如此！我很喜欢书。" },
  { en: "I moved to Toronto, so I left.", zh: "我搬到多伦多了，所以就离职了。" },
  { en: "Because I really love this bookstore.", zh: "因为我真的很喜欢这家书店。" },
  { en: "Yes, I can start anytime.", zh: "可以，我随时都能开始。" },
  { en: "Thank you! I'm so excited.", zh: "谢谢！我太激动了。" },
  { en: "Sounds good, let's plan it now.", zh: "好呀，我们现在就定吧。" },
  { en: "See you soon! Thanks again.", zh: "回见！再次谢谢你。" },
  { en: "Yes, I can work Saturdays.", zh: "可以，我周六能上班。" },
  { en: "Mornings work well for me.", zh: "早上对我来说没问题。" },
  { en: "I'll be here bright and early.", zh: "我会早早地过来的。" },
  { en: "Ready! Let's do this.", zh: "准备好了！开始吧。" },
  { en: "Sure, I can do that easily.", zh: "没问题，这个我很容易就能做到。" },
  { en: "Thanks, that's because I love organizing.", zh: "谢谢，那是因为我喜欢整理东西。" },
  { en: "Really? What's inside them?", zh: "真的吗？里面有什么？" },
  { en: "Sure, can I open this one?", zh: "好呀，我能打开这本看看吗？" },
  { en: "Okay, I'll take a quick look.", zh: "好的，我快速看一看。" },
  { en: "Wait, this name looks familiar.", zh: "等等，这个名字看着眼熟。" },
  { en: "It says 'Ho' right here.", zh: "这里写着'Ho'。" },
  { en: "Maybe! Why is her name in here?", zh: "有可能！她的名字为什么会在这里？" },
  { en: "So someone else owned it first.", zh: "所以是别人先拥有的。" },
  { en: "I'll ask her tomorrow.", zh: "我明天去问问她。" },
  { en: "I will, I promise.", zh: "我会的，我保证。" },
  { en: "I did! I worked my first shift today.", zh: "找到啦！我今天上了第一个班。" },
  { en: "Yes, I found an old name in a ledger.", zh: "有，我在一本旧账本里发现了一个名字。" },
  { en: "Mrs. Ho's. I'll ask her about it tomorrow.", zh: "Ho太太的。我明天去问问她。" }
);

Object.assign(GAME_CONTENT.skillMeta, {
  work: { label: "职场工作", labelEn: "Work", icon: "💼" }
});
