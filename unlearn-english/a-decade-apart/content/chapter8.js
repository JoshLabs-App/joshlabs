// 内容数据层：第八章，紧接第七章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter7.js 之后、audio-manifest.js 之前加载。
// 这是 L3（第8-12章，B1）的第一章。
//
// Tier: L3（见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入一个新 grammarTag：
//   - present-perfect（structure，占"一课一个新点"名额，3课内必须复现）：
//     现在完成时（have/has + 过去分词，ever/never/already/yet 等信号词），
//     第1课（a-slow-morning）引入，第1/2课内多次复现。
// 比较级/条件句/被动语态是L3的其他新语法点，按路线图分别留给第9/10/11章
// （避免一章塞太多新点，一课最多1个新structure）。
// 剧情：书店日常闲聊+聊新闻时事的寒暄套路，悬疑线本章暂缓（上一章已经
// 推进到"可能是同一家店"这条线索，留着让Emma自己去查旧记录，第9章再回来）。

GAME_CONTENT.scenes.push(
  {
    id: "a-slow-morning",
    transition: { en: "A quiet Tuesday morning at the bookstore.", zh: "周二早上，书店里很安静。" },
    title: "A Slow Morning",
    subtitle: "书店里 · 慢悠悠的早晨",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's a slow morning. Have you ever worked somewhere this quiet?", zh: "今天早上很清闲。你以前有在这么安静的地方工作过吗？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never worked somewhere this quiet.", zh: "我从来没在这么安静的地方工作过。", correct: true, xp: 10 },
          { text: "I like loud places.", correct: false }
        ],
        hintOnWrong: "用现在完成时（never）回应经历 → I've never worked somewhere this quiet.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you read any of these books yet?", zh: "这些书你已经读过哪些了吗？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've already read three of them.", zh: "我已经读过其中三本了。", correct: true, xp: 10 },
          { text: "I don't like reading.", correct: false }
        ],
        hintOnWrong: "用现在完成时（already）→ I've already read three of them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Impressive! What's your favorite so far?", zh: "厉害！目前为止你最喜欢哪本？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "This one is my favorite so far.", zh: "目前这本是我的最爱。", correct: true, xp: 10 },
          { text: "I don't have a favorite.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ This one is my favorite so far.",
        next: null
      }
    }
  },
  {
    id: "morning-news",
    title: "Morning News",
    subtitle: "书店里 · 聊聊今天的新闻",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you see the news this morning?", zh: "你今天早上看新闻了吗？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "No, I haven't checked it yet.", zh: "没有，我还没看呢。", correct: true, xp: 10 },
          { text: "Yes, it's always boring.", correct: false }
        ],
        hintOnWrong: "用现在完成时（yet）→ No, I haven't checked it yet.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's a new café opening downtown.", zh: "市中心要开一家新咖啡馆了。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "That sounds exciting.", zh: "听起来很棒。", correct: true, xp: 10 },
          { text: "I don't care about cafés.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That sounds exciting.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Have you tried the coffee shop next door?", zh: "你试过隔壁那家咖啡店吗？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "Yes, I've tried it twice.", zh: "试过，我去过两次了。", correct: true, xp: 10 },
          { text: "No, and I never will.", correct: false }
        ],
        hintOnWrong: "用现在完成时（tried it twice）→ Yes, I've tried it twice.",
        next: null
      }
    }
  },
  {
    id: "the-morning-rush",
    title: "The Morning Rush",
    subtitle: "书店里 · 突然忙起来了",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Whoa, lots of customers all at once!", zh: "哇，一下子来了好多顾客！", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I'll help the ones by the door.", zh: "我去帮门口那几位。", correct: true, xp: 10 },
          { text: "I'll just watch.", correct: false }
        ],
        hintOnWrong: "用 will 表示马上要做 → I'll help the ones by the door.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you handle the register while I restock?", zh: "我去补货的时候，你能顾一下收银台吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can handle it.", zh: "没问题，我能顾好。", correct: true, xp: 10 },
          { text: "I've never used a register.", correct: false }
        ],
        hintOnWrong: "用 can 表示能力 → Sure, I can handle it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thanks. You're a lifesaver today.", zh: "谢谢。你今天真是帮了大忙。", voice: "emma" },
        skill: "work",
        grammarTag: "courtesy",
        choices: [
          { text: "Anytime, happy to help.", zh: "随时，很乐意帮忙。", correct: true, xp: 10 },
          { text: "It's not a big deal.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Anytime, happy to help.",
        next: null
      }
    }
  },
  {
    id: "lunch-break-chat",
    transition: { en: "Things quiet down again around noon.", zh: "到了中午，店里又渐渐安静下来。" },
    title: "Lunch Break",
    subtitle: "书店后院 · 午休闲聊",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you had lunch yet?", zh: "你吃过午饭了吗？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "Not yet, have you?", zh: "还没呢，你吃了吗？", correct: true, xp: 10 },
          { text: "I never eat lunch.", correct: false }
        ],
        hintOnWrong: "用现在完成时反问 → Not yet, have you?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let's order something and eat together.", zh: "我们点点吃的，一起吃吧。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds perfect, let's do that.", zh: "太好了，就这么办。", correct: true, xp: 10 },
          { text: "I'd rather eat alone.", correct: false }
        ],
        hintOnWrong: "接受提议 → Sounds perfect, let's do that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "So, how's your English improving?", zh: "那，你的英语进步得怎么样了？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "It's getting better every week.", zh: "每周都在进步。", correct: true, xp: 10 },
          { text: "It's not improving at all.", correct: false }
        ],
        hintOnWrong: "简单陈述进步（陈述句）→ It's getting better every week.",
        next: null
      }
    }
  },
  {
    id: "a-customer-question",
    title: "A Customer's Question",
    subtitle: "书店里 · 帮顾客找书",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Excuse me, do you have any books about Toronto's history?", zh: "打扰一下，你们有关于多伦多历史的书吗？" },
        skill: "work",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we do. Follow me.", zh: "有的，跟我来。", correct: true, xp: 10 },
          { text: "No idea, sorry.", correct: false }
        ],
        hintOnWrong: "肯定回答＋邀请 → Yes, we do. Follow me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you read this one? It's really popular.", zh: "你读过这本吗？特别受欢迎。" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "I haven't read it, but I've heard great things.", zh: "我还没读过，但听说过很多好评。", correct: true, xp: 10 },
          { text: "I don't like popular books.", correct: false }
        ],
        hintOnWrong: "用现在完成时（haven't/heard）→ I haven't read it, but I've heard great things.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Great, I'll take it. Thank you for your help.", zh: "太好了，我要这本。谢谢你的帮忙。" },
        skill: "work",
        grammarTag: "courtesy",
        choices: [
          { text: "You're welcome, enjoy the book!", zh: "不客气，祝你阅读愉快！", correct: true, xp: 10 },
          { text: "No problem, whatever.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → You're welcome, enjoy the book!",
        next: null
      }
    }
  },
  {
    id: "closing-up",
    transition: { en: "As the sun sets, it's almost closing time.", zh: "夕阳西下，快到打烊的时候了。" },
    title: "Closing Up",
    subtitle: "书店里 · 打烊前的收尾",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you lock the front door?", zh: "你能把前门锁上吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I'll lock it now.", zh: "没问题，我现在就去锁。", correct: true, xp: 10 },
          { text: "I've never used that lock.", correct: false }
        ],
        hintOnWrong: "用 can 回应＋will → Sure, I'll lock it now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have we sold a lot today?", zh: "我们今天卖出去不少吧？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've sold more than usual.", zh: "我们卖得比平时多。", correct: true, xp: 10 },
          { text: "We haven't sold anything.", correct: false }
        ],
        hintOnWrong: "用现在完成时总结一天 → We've sold more than usual.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Great teamwork today. See you tomorrow.", zh: "今天配合得真好。明天见。", voice: "emma" },
        skill: "work",
        grammarTag: "courtesy",
        choices: [
          { text: "See you tomorrow, Emma!", zh: "明天见，Emma！", correct: true, xp: 10 },
          { text: "Bye, whatever.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → See you tomorrow, Emma!",
        next: null
      }
    }
  },
  {
    id: "walking-with-emma",
    transition: { en: "Emma offers to walk part of the way home with you.", zh: "Emma提出陪你走一段回家的路。" },
    title: "Walking Together",
    subtitle: "街上 · 和Emma一起走一段",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you found the house from that photo yet?", zh: "你找到照片里那栋房子了吗？", voice: "emma" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Not yet, but we're close.", zh: "还没，但我们快找到了。", correct: true, xp: 10 },
          { text: "I've given up on it.", correct: false }
        ],
        hintOnWrong: "用现在完成时（not yet）→ Not yet, but we're close.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let me know if I can help with anything.", zh: "有什么我能帮忙的，跟我说一声。", voice: "emma" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I will, thank you so much.", zh: "我会的，太谢谢你了。", correct: true, xp: 10 },
          { text: "You can't help with this.", correct: false }
        ],
        hintOnWrong: "用 will 回应 → I will, thank you so much.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is my turn. Good night!", zh: "我该往这边走了。晚安！", voice: "emma" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Good night, see you soon!", zh: "晚安，回头见！", correct: true, xp: 10 },
          { text: "Wait, don't go yet.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → Good night, see you soon!",
        next: null
      }
    }
  },
  {
    id: "sam-asks-about-work",
    transition: { en: "Back at the apartment, Sam is cooking dinner.", zh: "回到公寓，Sam正在做晚饭。" },
    title: "How Was Work?",
    subtitle: "公寓 · Sam问起今天工作",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How was work today?", zh: "今天工作怎么样？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Busy, but a good kind of busy.", zh: "很忙，但是那种令人满足的忙。", correct: true, xp: 10 },
          { text: "Terrible, don't ask.", correct: false }
        ],
        hintOnWrong: "简单描述（陈述句）→ Busy, but a good kind of busy.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you told Emma about Mrs. Ho's brother yet?", zh: "你跟Emma说过Ho太太哥哥的事了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Yes, I've already told her everything.", zh: "说过了，我已经把一切都告诉她了。", correct: true, xp: 10 },
          { text: "No, I forgot completely.", correct: false }
        ],
        hintOnWrong: "用现在完成时（already）→ Yes, I've already told her everything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This mystery keeps getting bigger.", zh: "这个谜团越来越大了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does.", zh: "确实是这样。", correct: true, xp: 10 },
          { text: "Not really, it's simple.", correct: false }
        ],
        hintOnWrong: "简单附和（陈述句）→ It really does.",
        next: null
      }
    }
  },
  {
    id: "dinner-with-sam",
    title: "Dinner with Sam",
    subtitle: "公寓 · 一起吃晚饭",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Dinner's ready. Are you hungry?", zh: "晚饭好了。你饿了吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Starving, this smells amazing.", zh: "饿坏了，闻起来太香了。", correct: true, xp: 10 },
          { text: "Not hungry at all.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Starving, this smells amazing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you ever cooked a full meal by yourself?", zh: "你自己一个人做过一整顿饭吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've cooked a few simple meals.", zh: "我做过几顿简单的饭。", correct: true, xp: 10 },
          { text: "I've never cooked in my life.", correct: false }
        ],
        hintOnWrong: "用现在完成时（cooked a few）→ I've cooked a few simple meals.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe you can cook for us next week.", zh: "也许你下周可以给我们做一顿。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can try, no promises.", zh: "我可以试试，先不保证好吃。", correct: true, xp: 10 },
          { text: "I can't cook anything.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → I can try, no promises.",
        next: null
      }
    }
  },
  {
    id: "end-of-day",
    title: "End of the Day",
    subtitle: "公寓 · 一天的收尾",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's been a long day, huh?", zh: "今天真是漫长的一天，是吧？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's been long, but a good one.", zh: "确实漫长，但是很不错的一天。", correct: true, xp: 10 },
          { text: "It's been the worst day ever.", correct: false }
        ],
        hintOnWrong: "用现在完成时总结（陈述句）→ It's been long, but a good one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What's your plan for tomorrow?", zh: "你明天有什么打算？" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll visit the house with Mrs. Ho.", zh: "我会跟Ho太太一起去看那栋房子。", correct: true, xp: 10 },
          { text: "I have no plan at all.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll visit the house with Mrs. Ho.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Good luck. Sleep well tonight.", zh: "祝你顺利。今晚好好睡一觉。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thanks, you too, Sam.", zh: "谢谢，你也是，Sam。", correct: true, xp: 10 },
          { text: "I never sleep well.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → Thanks, you too, Sam.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "I've never worked somewhere this quiet.", zh: "我从来没在这么安静的地方工作过。" },
  { en: "I've already read three of them.", zh: "我已经读过其中三本了。" },
  { en: "This one is my favorite so far.", zh: "目前这本是我的最爱。" },
  { en: "No, I haven't checked it yet.", zh: "没有，我还没看呢。" },
  { en: "That sounds exciting.", zh: "听起来很棒。" },
  { en: "Yes, I've tried it twice.", zh: "试过，我去过两次了。" },
  { en: "I'll help the ones by the door.", zh: "我去帮门口那几位。" },
  { en: "Sure, I can handle it.", zh: "没问题，我能顾好。" },
  { en: "Anytime, happy to help.", zh: "随时，很乐意帮忙。" },
  { en: "Not yet, have you?", zh: "还没呢，你吃了吗？" },
  { en: "Sounds perfect, let's do that.", zh: "太好了，就这么办。" },
  { en: "It's getting better every week.", zh: "每周都在进步。" },
  { en: "Yes, we do. Follow me.", zh: "有的，跟我来。" },
  { en: "I haven't read it, but I've heard great things.", zh: "我还没读过，但听说过很多好评。" },
  { en: "You're welcome, enjoy the book!", zh: "不客气，祝你阅读愉快！" },
  { en: "Sure, I'll lock it now.", zh: "没问题，我现在就去锁。" },
  { en: "We've sold more than usual.", zh: "我们卖得比平时多。" },
  { en: "See you tomorrow, Emma!", zh: "明天见，Emma！" },
  { en: "Not yet, but we're close.", zh: "还没，但我们快找到了。" },
  { en: "I will, thank you so much.", zh: "我会的，太谢谢你了。" },
  { en: "Good night, see you soon!", zh: "晚安，回头见！" },
  { en: "Busy, but a good kind of busy.", zh: "很忙，但是那种令人满足的忙。" },
  { en: "Yes, I've already told her everything.", zh: "说过了，我已经把一切都告诉她了。" },
  { en: "It really does.", zh: "确实是这样。" },
  { en: "Starving, this smells amazing.", zh: "饿坏了，闻起来太香了。" },
  { en: "I've cooked a few simple meals.", zh: "我做过几顿简单的饭。" },
  { en: "I can try, no promises.", zh: "我可以试试，先不保证好吃。" },
  { en: "It's been long, but a good one.", zh: "确实漫长，但是很不错的一天。" },
  { en: "I'll visit the house with Mrs. Ho.", zh: "我会跟Ho太太一起去看那栋房子。" },
  { en: "Thanks, you too, Sam.", zh: "谢谢，你也是，Sam。" }
);
