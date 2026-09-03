// 内容数据层：第十章，紧接第九章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter9.js 之后、audio-manifest.js 之前加载。
//
// Tier: L3（跟第八、九章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入一个新 grammarTag：
//   - conditional（structure，占"一课一个新点"名额，3课内必须复现）：
//     条件句（if... , ...will...，first conditional），
//     第1课（watching-hockey）引入，第1/2/6/9课多次复现。
// present-perfect / comparative 继续复现。被动语态留给第11章。
//
// 剧情：第9章结尾"一封信写给Emma"的钩子在本章兑现——玩家带Emma去见Ho太太，
// 三人一起看那些旧信，确认Emma的书店前身、当年帮助过Ho家的年轻女子，
// 极可能就是Emma的祖辈或家族长辈（具体是谁、什么关系，留一点悬念给第11章
// 完整揭晓，不在这里一次性说完）。中间穿插"酒吧看冰球"这个加拿大文化场景
// 作为轻松的过渡日常（悬疑不是每一课都要推进，日常场景负责铺词汇广度）。

GAME_CONTENT.scenes.push(
  {
    id: "watching-hockey",
    transition: { en: "That weekend, Sam invites you to watch a hockey game.", zh: "那个周末，Sam邀请你一起看冰球比赛。" },
    title: "Watching Hockey",
    subtitle: "酒吧 · 看冰球比赛",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hockey is Canada's favorite sport. Have you ever watched a game?", zh: "冰球是加拿大人最喜欢的运动。你看过比赛吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never watched hockey before.", zh: "我以前从没看过冰球。", correct: true, xp: 10 },
          { text: "I watch it every single day.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've never watched hockey before.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If our team scores, everyone here will go crazy.", zh: "如果我们的队进球了，这儿的人都会疯掉的。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If they score, I'll cheer too.", zh: "如果他们进球，我也会一起欢呼。", correct: true, xp: 10 },
          { text: "I probably won't notice.", correct: false }
        ],
        hintOnWrong: "用条件句 → If they score, I'll cheer too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "The game is about to start. Grab a seat!", zh: "比赛快开始了。快找个位置坐下！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm sitting right here, ready to watch.", zh: "我就坐这儿，准备看比赛了。", correct: true, xp: 10 },
          { text: "I'll stand in the back.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → I'm sitting right here, ready to watch.",
        next: null
      }
    }
  },
  {
    id: "the-big-goal",
    title: "The Big Goal",
    subtitle: "酒吧 · 关键的一球",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If we win this period, we'll be in first place.", zh: "如果这一节我们赢了，我们就会排名第一。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we win, we'll celebrate all night.", zh: "如果我们赢了，我们会庆祝一整晚。", correct: true, xp: 10 },
          { text: "We'll probably lose anyway.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we win, we'll celebrate all night.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "GOAL! Did you see that shot?", zh: "进球啦！你看到那一射了吗？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I saw it! That was amazing!", zh: "我看到了！太精彩了！", correct: true, xp: 10 },
          { text: "I missed it, sorry.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → I saw it! That was amazing!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is officially the best game I've been to.", zh: "这正式成为我看过最精彩的比赛了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Best one I've seen too.", zh: "也是我看过最好的一场。", correct: true, xp: 10 },
          { text: "I've seen better games.", correct: false }
        ],
        hintOnWrong: "用最高级 → Best one I've seen too.",
        next: null
      }
    }
  },
  {
    id: "calling-emma",
    transition: { en: "During a break in the game, you check your phone.", zh: "比赛中场休息时，你看了看手机。" },
    title: "A Message from Mrs. Ho",
    subtitle: "酒吧 · Ho太太发来消息",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "\"I found something important in the letters. Can you bring Emma tomorrow?\"", zh: "「我在信里发现了很重要的东西。你明天能带Emma一起来吗？」" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, I can bring her tomorrow.", zh: "好的，我明天可以带她来。", correct: true, xp: 10 },
          { text: "No, she's too busy.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Yes, I can bring her tomorrow.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Sam, sorry — I have to make a quick call.", zh: "Sam，抱歉——我得赶紧打个电话。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "No worries, go ahead.", zh: "没事，你去吧。", correct: true, xp: 10 },
          { text: "Can't it wait?", correct: false }
        ],
        hintOnWrong: "礼貌回应（陈述句）→ No worries, go ahead.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Emma, are you free tomorrow morning?", zh: "Emma，你明天早上有空吗？" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I'm free. Is everything okay?", zh: "我有空。一切都还好吗？", correct: true, xp: 10 },
          { text: "I'm busy all day, sorry.", correct: false }
        ],
        hintOnWrong: "简单回应＋关心（陈述句）→ I'm free. Is everything okay?",
        next: null
      }
    }
  },
  {
    id: "explaining-to-emma",
    title: "Explaining Everything",
    subtitle: "电话里 · 跟Emma解释这一切",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Wait, slow down. Mrs. Ho's family knew someone from a bookshop?", zh: "等等，慢点说。Ho太太一家认识一个书店的人？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "Yes, someone who helped them a lot.", zh: "是的，一个帮了他们很多忙的人。", correct: true, xp: 10 },
          { text: "No, I made that part up.", correct: false }
        ],
        hintOnWrong: "用过去时确认 → Yes, someone who helped them a lot.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "And one of the letters has my name on it?", zh: "而且其中一封信上写着我的名字？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's had your name on it this whole time.", zh: "这封信从一开始就写着你的名字。", correct: true, xp: 10 },
          { text: "It's just a different Emma.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → It's had your name on it this whole time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If that's true, this changes everything.", zh: "如果这是真的，这会改变一切。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If it's true, we'll find out tomorrow.", zh: "如果是真的，我们明天就能知道了。", correct: true, xp: 10 },
          { text: "It's probably not true.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it's true, we'll find out tomorrow.",
        next: null
      }
    }
  },
  {
    id: "back-to-the-game",
    title: "Back to the Game",
    subtitle: "酒吧 · 回到比赛现场",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Everything okay? You look distracted.", zh: "一切还好吗？你看起来有点心不在焉。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I'm okay, just a lot on my mind.", zh: "我没事，就是想的事有点多。", correct: true, xp: 10 },
          { text: "Nothing, I'm totally fine.", correct: false }
        ],
        hintOnWrong: "简单陈述（陈述句）→ I'm okay, just a lot on my mind.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Want to talk about it, or just watch the game?", zh: "想聊聊，还是就先看比赛？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's just watch for now.", zh: "我们先看比赛吧。", correct: true, xp: 10 },
          { text: "I need to leave right now.", correct: false }
        ],
        hintOnWrong: "简单提议 → Let's just watch for now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Fair enough. If they win tonight, drinks are on me.", zh: "行吧。如果他们今晚赢了，这轮我请客。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If they win, I'm holding you to that.", zh: "如果他们赢了，我可要记住你这句话。", correct: true, xp: 10 },
          { text: "I don't think they'll win.", correct: false }
        ],
        hintOnWrong: "用条件句 → If they win, I'm holding you to that.",
        next: null
      }
    }
  },
  {
    id: "morning-nerves",
    transition: { en: "The next morning, you meet Emma outside Mrs. Ho's building.", zh: "第二天早上，你和Emma在Ho太太家楼下碰头。" },
    title: "Morning Nerves",
    subtitle: "楼下 · 见面前的紧张",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've never been this nervous before.", zh: "我从没这么紧张过。", voice: "emma" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's okay, I've got your hand.", zh: "没事的，我牵着你的手呢。", correct: true, xp: 10 },
          { text: "You should calm down.", correct: false }
        ],
        hintOnWrong: "用现在完成时回应 → It's okay, I've got your hand.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If this is really about my family, I need to know everything.", zh: "如果这真的跟我家有关，我需要知道一切。", voice: "emma" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it's about your family, we'll learn it together.", zh: "如果跟你家有关，我们会一起了解清楚。", correct: true, xp: 10 },
          { text: "If it's your family, that's your problem.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it's about your family, we'll learn it together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Okay. Let's go up.", zh: "好。我们上去吧。", voice: "emma" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's go up together.", zh: "我们一起上去吧。", correct: true, xp: 10 },
          { text: "You should go up first.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's go up together.",
        next: null
      }
    }
  },
  {
    id: "three-together",
    title: "Three Together",
    subtitle: "Ho太太家 · 三人一起看信",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Emma, thank you for coming. Please, sit.", zh: "Emma，谢谢你能来。请坐。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for having me.", zh: "谢谢您邀请我。", correct: true, xp: 10 },
          { text: "I almost didn't come.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you for having me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This letter has your family name on it. Do you recognize it?", zh: "这封信上写着你的姓氏。你认得出来吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that's my grandmother's handwriting.", zh: "是的，这是我祖母的笔迹。", correct: true, xp: 10 },
          { text: "No, I've never seen it.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that's my grandmother's handwriting.",
        next: "n3"
      },
      n3: {
        avatar: "😮",
        npcLine: { en: "Your grandmother? Then it really was her shop.", zh: "你祖母？那当年真的是她的店。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really was, all along.", zh: "确实是，一直都是。", correct: true, xp: 10 },
          { text: "That seems unlikely.", correct: false }
        ],
        hintOnWrong: "用过去时确认（陈述句）→ It really was, all along.",
        next: null
      }
    }
  },
  {
    id: "emmas-reaction",
    title: "Emma's Reaction",
    subtitle: "客厅 · Emma消化这个消息",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My grandmother never told me she helped a family like yours.", zh: "我祖母从没跟我说过她帮过像你们这样的一家人。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "Maybe she's never told anyone.", zh: "也许她从没跟任何人说过。", correct: true, xp: 10 },
          { text: "Maybe she just forgot about it.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → Maybe she's never told anyone.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If she were still here, I'd love to hear the whole story.", zh: "如果她还在，我真想听听完整的故事。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Maybe these letters can tell us more.", zh: "也许这些信能告诉我们更多。", correct: true, xp: 10 },
          { text: "We'll never really know now.", correct: false }
        ],
        hintOnWrong: "陈述可能性（陈述句）→ Maybe these letters can tell us more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There's one more letter I haven't opened yet.", zh: "还有一封信我还没拆开。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "Let's open it together, right now.", zh: "我们现在就一起打开吧。", correct: true, xp: 10 },
          { text: "Let's save it for later.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's open it together, right now.",
        next: null
      }
    }
  },
  {
    id: "the-unopened-letter",
    title: "The Unopened Letter",
    subtitle: "客厅 · 那封还没拆开的信",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If we open it, there's no going back.", zh: "如果我们打开它，就没有回头路了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we don't open it, we'll always wonder.", zh: "如果我们不打开，我们会一直好奇下去。", correct: true, xp: 10 },
          { text: "If we open it, nothing will change.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we don't open it, we'll always wonder.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Emma, would you like to be the one to open it?", zh: "Emma，你愿意由你来打开它吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, I think I can do this.", zh: "好，我觉得我能做到。", correct: true, xp: 10 },
          { text: "No, someone else should do it.", correct: false }
        ],
        hintOnWrong: "用 can 表达能力 → Yes, I think I can do this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Take your time. We're right here with you.", zh: "慢慢来。我们就在这儿陪着你。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, both of you.", zh: "谢谢你们俩。", correct: true, xp: 10 },
          { text: "I'd rather do this alone.", correct: false }
        ],
        hintOnWrong: "简单感谢（陈述句）→ Thank you, both of you.",
        next: null
      }
    }
  },
  {
    id: "one-step-closer",
    title: "One Step Closer",
    subtitle: "客厅 · 离真相更近了一步",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's addressed to my grandmother, from someone named Lily.", zh: "这封信是写给我祖母的，寄信人叫Lily。", voice: "emma" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Lily — that name sounds familiar.", zh: "Lily——这个名字听着有点耳熟。", correct: true, xp: 10 },
          { text: "I've never heard that name.", correct: false }
        ],
        hintOnWrong: "简单反应（陈述句）→ Lily — that name sounds familiar.",
        next: "n2"
      },
      n2: {
        avatar: "😮",
        npcLine: { en: "Lily... that was my mother's name.", zh: "Lily……那是我母亲的名字。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Your mother wrote this letter?", zh: "这封信是你妈妈写的？", correct: true, xp: 10 },
          { text: "That must be a different Lily.", correct: false }
        ],
        hintOnWrong: "确认信息（陈述句/问句）→ Your mother wrote this letter?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If this is what I think it is, our families have known each other for decades.", zh: "如果我想的没错，我们两家已经认识了好几十年了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, that's incredible.", zh: "如果是真的，这太不可思议了。", correct: true, xp: 10 },
          { text: "If that's true, I don't care.", correct: false }
        ],
        hintOnWrong: "用条件句 → If that's true, that's incredible.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "I've never watched hockey before.", zh: "我以前从没看过冰球。" },
  { en: "If they score, I'll cheer too.", zh: "如果他们进球，我也会一起欢呼。" },
  { en: "I'm sitting right here, ready to watch.", zh: "我就坐这儿，准备看比赛了。" },
  { en: "If we win, we'll celebrate all night.", zh: "如果我们赢了，我们会庆祝一整晚。" },
  { en: "I saw it! That was amazing!", zh: "我看到了！太精彩了！" },
  { en: "Best one I've seen too.", zh: "也是我看过最好的一场。" },
  { en: "Yes, I can bring her tomorrow.", zh: "好的，我明天可以带她来。" },
  { en: "No worries, go ahead.", zh: "没事，你去吧。" },
  { en: "I'm free. Is everything okay?", zh: "我有空。一切都还好吗？" },
  { en: "Yes, someone who helped them a lot.", zh: "是的，一个帮了他们很多忙的人。" },
  { en: "It's had your name on it this whole time.", zh: "这封信从一开始就写着你的名字。" },
  { en: "If it's true, we'll find out tomorrow.", zh: "如果是真的，我们明天就能知道了。" },
  { en: "I'm okay, just a lot on my mind.", zh: "我没事，就是想的事有点多。" },
  { en: "Let's just watch for now.", zh: "我们先看比赛吧。" },
  { en: "If they win, I'm holding you to that.", zh: "如果他们赢了，我可要记住你这句话。" },
  { en: "It's okay, I've got your hand.", zh: "没事的，我牵着你的手呢。" },
  { en: "If it's about your family, we'll learn it together.", zh: "如果跟你家有关，我们会一起了解清楚。" },
  { en: "Let's go up together.", zh: "我们一起上去吧。" },
  { en: "Thank you for having me.", zh: "谢谢您邀请我。" },
  { en: "Yes, that's my grandmother's handwriting.", zh: "是的，这是我祖母的笔迹。" },
  { en: "It really was, all along.", zh: "确实是，一直都是。" },
  { en: "Maybe she's never told anyone.", zh: "也许她从没跟任何人说过。" },
  { en: "Maybe these letters can tell us more.", zh: "也许这些信能告诉我们更多。" },
  { en: "Let's open it together, right now.", zh: "我们现在就一起打开吧。" },
  { en: "If we don't open it, we'll always wonder.", zh: "如果我们不打开，我们会一直好奇下去。" },
  { en: "Yes, I think I can do this.", zh: "好，我觉得我能做到。" },
  { en: "Thank you, both of you.", zh: "谢谢你们俩。" },
  { en: "Lily — that name sounds familiar.", zh: "Lily——这个名字听着有点耳熟。" },
  { en: "Your mother wrote this letter?", zh: "这封信是你妈妈写的？" },
  { en: "If that's true, that's incredible.", zh: "如果是真的，这太不可思议了。" }
);
