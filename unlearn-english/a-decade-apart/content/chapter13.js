// 内容数据层：第十三章，紧接第十二章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter12.js 之后、audio-manifest.js 之前加载。
// 这是 L4（B2，第13章起，"真相与新生"）的第一章。
//
// Tier: L4（见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 第一个新 grammarTag：
//   - past-perfect（structure，占"一课一个新点"名额，3课内必须复现）：
//     过去完成时（had already / by the time... had...），
//     第1课（the-owner-calls）引入，第1/5/6课多次复现。
// present-perfect/comparative/conditional/passive（L3）继续复现巩固。
//
// 剧情：呼应第12章结尾埋下的种子——现任房主决定卖掉老房子，大家真的要把它
// 变成帮助新移民的社区空间了。第7课出现第一个真正的"受益家庭"，呼应几十年前
// Lily帮助Ho家的那条线，主题从"揭开过去"转向"创造新的开始"。

GAME_CONTENT.scenes.push(
  {
    id: "the-owner-calls",
    transition: { en: "Two weeks after the gathering, Mrs. Ho gets an unexpected call.", zh: "聚会两周后，Ho太太接到了一个意外的电话。" },
    title: "An Unexpected Call",
    subtitle: "Ho太太家 · 房主打来电话",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "By the time she called, she had already decided to sell the house.", zh: "她打电话来的时候，已经决定要卖掉那栋房子了。" },
        skill: "community",
        grammarTag: "past-perfect",
        choices: [
          { text: "She had already decided? That's fast.", zh: "她已经决定了？这么快。", correct: true, xp: 10 },
          { text: "She hasn't decided anything yet.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → She had already decided? That's fast.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Her family is moving out of the city. She thought of us first.", zh: "她一家要搬出这座城市了。她第一个想到了我们。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That was so kind of her to think of us.", zh: "她能想到我们真是太好了。", correct: true, xp: 10 },
          { text: "That's a strange thing to do.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That was so kind of her to think of us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we want it, we have until the end of the month to decide.", zh: "如果我们想要，得在月底前决定。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we want it, we'd better act fast.", zh: "如果我们想要，那就得抓紧行动了。", correct: true, xp: 10 },
          { text: "If we want it, there's no rush at all.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we want it, we'd better act fast.",
        next: null
      }
    }
  },
  {
    id: "a-family-meeting",
    transition: { en: "That evening, everyone gathers at the bookshop to talk.", zh: "那天晚上，大家聚在书店商量这件事。" },
    title: "A Family Meeting",
    subtitle: "书店里 · 一起商量",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Okay, everyone. Are we really doing this?", zh: "好了，大家。我们真的要做这件事吗？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I think we really are.", zh: "我觉得我们真的要做。", correct: true, xp: 10 },
          { text: "I think we should wait years.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ I think we really are.",
        next: "n2"
      },
      n2: {
        avatar: "👴",
        npcLine: { en: "I've already spoken to a few old friends. They want to help.", zh: "我已经跟几个老朋友说过了。他们都愿意帮忙。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've already started, wow.", zh: "你已经开始张罗了，真厉害。", correct: true, xp: 10 },
          { text: "You've already given up, then?", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've already started, wow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's put this to a vote. All in favor?", zh: "我们来投个票吧。赞成的举手？" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's vote — I'm in favor.", zh: "我们投票吧——我赞成。", correct: true, xp: 10 },
          { text: "Let's not decide today.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's vote — I'm in favor.",
        next: null
      }
    }
  },
  {
    id: "making-a-plan",
    title: "Making a Plan",
    subtitle: "书店里 · 制定计划",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "First, we need a budget. How much can we raise?", zh: "首先，我们需要一个预算。我们能筹到多少钱？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "How much do we actually need?", zh: "我们实际上需要多少呢？", correct: true, xp: 10 },
          { text: "I don't want to talk numbers.", correct: false }
        ],
        hintOnWrong: "追问细节 → How much do we actually need?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we all contribute a little, it could work.", zh: "如果我们大家都出一点力，应该行得通。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If everyone helps, it'll definitely work.", zh: "如果大家都帮忙，肯定能行。", correct: true, xp: 10 },
          { text: "If everyone helps, it still won't work.", correct: false }
        ],
        hintOnWrong: "用条件句 → If everyone helps, it'll definitely work.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We had talked about this for years, but we'd never really tried.", zh: "我们已经谈论这件事好多年了，但从没真正尝试过。", voice: "emma" },
        skill: "work",
        grammarTag: "past-perfect",
        choices: [
          { text: "We'd talked about it for years, but this feels different.", zh: "我们已经聊了好多年，但这次感觉不一样。", correct: true, xp: 10 },
          { text: "We've never mentioned this before.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → We'd talked about it for years, but this feels different.",
        next: null
      }
    }
  },
  {
    id: "visiting-the-bank",
    transition: { en: "The next morning, you and Emma visit the bank together.", zh: "第二天早上，你和Emma一起去了银行。" },
    title: "Visiting the Bank",
    subtitle: "银行 · 申请一笔贷款",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So, you'd like a loan for a community project?", zh: "所以，你们想为一个社区项目申请贷款？" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "Yes, exactly. It means a lot to us.", zh: "是的，没错。这对我们意义重大。", correct: true, xp: 10 },
          { text: "No, it's just for fun.", correct: false }
        ],
        hintOnWrong: "简单确认（陈述句）→ Yes, exactly. It means a lot to us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you tell me more about the project?", zh: "能跟我多说说这个项目吗？" },
        skill: "banking",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, I can explain everything.", zh: "当然可以，我可以把一切都说清楚。", correct: true, xp: 10 },
          { text: "I can't really explain it well.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Of course, I can explain everything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is one of the best proposals I've seen this year.", zh: "这是我今年看过最好的提案之一。" },
        skill: "banking",
        grammarTag: "comparative",
        choices: [
          { text: "That means so much, thank you.", zh: "这对我们意义重大，谢谢您。", correct: true, xp: 10 },
          { text: "I doubt that's really true.", correct: false }
        ],
        hintOnWrong: "简单感谢（陈述句）→ That means so much, thank you.",
        next: null
      }
    }
  },
  {
    id: "the-inspection",
    transition: { en: "With the loan approved, it's time to inspect the house.", zh: "贷款批下来了，是时候去检查一下这栋房子了。" },
    title: "The Inspection",
    subtitle: "老房子 · 检查房屋状况",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "By the time we arrived, the roof had already started leaking.", zh: "我们到的时候，屋顶已经开始漏水了。" },
        skill: "housing",
        grammarTag: "past-perfect",
        choices: [
          { text: "It had already gotten worse than we thought.", zh: "情况已经比我们想的更糟了。", correct: true, xp: 10 },
          { text: "It had already been fully repaired.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → It had already gotten worse than we thought.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The good news is, the foundation is solid.", zh: "好消息是，地基很牢固。" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "That's a relief, honestly.", zh: "说实话，这真让人松了口气。", correct: true, xp: 10 },
          { text: "That's not good news at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's a relief, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It'll take work, but it can definitely be saved.", zh: "会花点功夫，但绝对能修好。" },
        skill: "housing",
        grammarTag: "passive",
        choices: [
          { text: "As long as it can be saved, I'm happy.", zh: "只要能修好，我就开心了。", correct: true, xp: 10 },
          { text: "It probably can't be saved at all.", correct: false }
        ],
        hintOnWrong: "用被动语态 → As long as it can be saved, I'm happy.",
        next: null
      }
    }
  },
  {
    id: "renovation-begins",
    transition: { en: "By the weekend, the renovation has already begun.", zh: "到了周末，翻修工作已经开始了。" },
    title: "Renovation Begins",
    subtitle: "老房子 · 开始翻修",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Everyone had shown up before I even got here.", zh: "我还没到，大家就都已经到了。" },
        skill: "community",
        grammarTag: "past-perfect",
        choices: [
          { text: "Everyone had already started without you.", zh: "大家没等你就已经开始了。", correct: true, xp: 10 },
          { text: "Nobody had shown up at all.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → Everyone had already started without you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you help carry these boards?", zh: "你能帮忙搬一下这些木板吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, hand them over.", zh: "没问题，递给我吧。", correct: true, xp: 10 },
          { text: "I can't lift anything today.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, hand them over.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This place already feels warmer than before.", zh: "这地方已经比之前暖多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does feel warmer already.", zh: "确实已经暖多了。", correct: true, xp: 10 },
          { text: "It still feels cold to me.", correct: false }
        ],
        hintOnWrong: "用比较级 → It really does feel warmer already.",
        next: null
      }
    }
  },
  {
    id: "unexpected-visitor",
    transition: { en: "While you're painting a wall, someone knocks on the open door.", zh: "你正在刷墙的时候，有人敲了敲敞开的门。" },
    title: "An Unexpected Visitor",
    subtitle: "老房子 · 一位不速之客",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Sorry — is this place open? I just moved here and I saw the lights on.", zh: "不好意思——这里是开放的吗？我刚搬来，看到这儿亮着灯。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Come in, please. When did you move here?", zh: "请进。你什么时候搬来的？", correct: true, xp: 10 },
          { text: "Sorry, we're closed to visitors.", correct: false }
        ],
        hintOnWrong: "用过去时追问 → Come in, please. When did you move here?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Just last week. We haven't met anyone here yet.", zh: "上周刚到。我们在这儿还没认识什么人呢。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Well, you've met someone now.", zh: "那现在你们认识了。", correct: true, xp: 10 },
          { text: "You'll probably never meet anyone.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → Well, you've met someone now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "What is this place going to be, exactly?", zh: "这地方具体会变成什么呢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "A place for people just like you.", zh: "一个专为像你这样的人准备的地方。", correct: true, xp: 10 },
          { text: "I honestly have no idea.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ A place for people just like you.",
        next: null
      }
    }
  },
  {
    id: "helping-the-newcomers",
    title: "Helping the Newcomers",
    subtitle: "老房子 · 帮助新来的家庭",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Honestly, we haven't found our way around the city yet.", zh: "说实话，我们对这座城市还不太熟。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We hadn't either, once.", zh: "我们也曾经不熟。", correct: true, xp: 10 },
          { text: "That's not our problem, sorry.", correct: false }
        ],
        hintOnWrong: "用过去完成时呼应 → We hadn't either, once.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Could you show us where to buy groceries nearby?", zh: "你能带我们看看附近哪儿能买菜吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, I can show you right now.", zh: "当然，我现在就可以带你们去。", correct: true, xp: 10 },
          { text: "I can't leave right now, sorry.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Of course, I can show you right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're being so kind. We really appreciate it.", zh: "你人真好。我们真的很感激。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It's exactly what someone once did for us.", zh: "这正是曾经有人为我们做过的事。", correct: true, xp: 10 },
          { text: "It's really no big deal, forget it.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It's exactly what someone once did for us.",
        next: null
      }
    }
  },
  {
    id: "the-name-of-the-place",
    transition: { en: "That night, the group discusses what to call this new place.", zh: "那天晚上，大家讨论该给这个新地方取什么名字。" },
    title: "The Name of the Place",
    subtitle: "老房子 · 该取什么名字",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should we call it?", zh: "我们该叫它什么呢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "What does everyone think?", zh: "大家都是怎么想的？", correct: true, xp: 10 },
          { text: "I don't think it needs a name.", correct: false }
        ],
        hintOnWrong: "追问意见 → What does everyone think?",
        next: "n2"
      },
      n2: {
        avatar: "😊",
        npcLine: { en: "It was Lily's kindness that started all of this.", zh: "是Lily的善意开启了这一切。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "Then it should carry her name somehow.", zh: "那它应该以某种方式带上她的名字。", correct: true, xp: 10 },
          { text: "Then it shouldn't be named after anyone.", correct: false }
        ],
        hintOnWrong: "简单表达意见（陈述句）→ Then it should carry her name somehow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Lily's House. Simple, and true.", zh: "「Lily之家」。简单，而且贴切。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Lily's House — I love it.", zh: "「Lily之家」——我很喜欢。", correct: true, xp: 10 },
          { text: "Lily's House sounds a bit plain.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Lily's House — I love it.",
        next: null
      }
    }
  },
  {
    id: "a-soft-opening",
    transition: { en: "A month later, the doors of Lily's House open for the first time.", zh: "一个月后，「Lily之家」第一次敞开了大门。" },
    title: "A Soft Opening",
    subtitle: "Lily之家 · 第一次开放",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's not finished yet, but it's ready enough to open.", zh: "还没完全弄好，但已经够开放了。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "It's ready enough, and that's what matters.", zh: "已经够好了，这才是最重要的。", correct: true, xp: 10 },
          { text: "It should have been finished by now.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It's ready enough, and that's what matters.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look — the new family from down the street is here.", zh: "你看——街那头那户新家庭来了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Let's welcome them properly.", zh: "我们好好欢迎他们吧。", correct: true, xp: 10 },
          { text: "Let's pretend we don't see them.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's welcome them properly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade ago, someone had already started this story without knowing it.", zh: "十年前，有人在不知情的情况下，就已经开启了这个故事。" },
        skill: "community",
        grammarTag: "past-perfect",
        choices: [
          { text: "And we're the ones finishing it.", zh: "而我们是把它继续写下去的人。", correct: true, xp: 10 },
          { text: "And it means nothing to us now.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ And we're the ones finishing it.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "She had already decided? That's fast.", zh: "她已经决定了？这么快。" },
  { en: "That was so kind of her to think of us.", zh: "她能想到我们真是太好了。" },
  { en: "If we want it, we'd better act fast.", zh: "如果我们想要，那就得抓紧行动了。" },
  { en: "I think we really are.", zh: "我觉得我们真的要做。" },
  { en: "You've already started, wow.", zh: "你已经开始张罗了，真厉害。" },
  { en: "Let's vote — I'm in favor.", zh: "我们投票吧——我赞成。" },
  { en: "How much do we actually need?", zh: "我们实际上需要多少呢？" },
  { en: "If everyone helps, it'll definitely work.", zh: "如果大家都帮忙，肯定能行。" },
  { en: "We'd talked about it for years, but this feels different.", zh: "我们已经聊了好多年，但这次感觉不一样。" },
  { en: "Yes, exactly. It means a lot to us.", zh: "是的，没错。这对我们意义重大。" },
  { en: "Of course, I can explain everything.", zh: "当然可以，我可以把一切都说清楚。" },
  { en: "That means so much, thank you.", zh: "这对我们意义重大，谢谢您。" },
  { en: "It had already gotten worse than we thought.", zh: "情况已经比我们想的更糟了。" },
  { en: "That's a relief, honestly.", zh: "说实话，这真让人松了口气。" },
  { en: "As long as it can be saved, I'm happy.", zh: "只要能修好，我就开心了。" },
  { en: "Everyone had already started without you.", zh: "大家没等你就已经开始了。" },
  { en: "Sure, hand them over.", zh: "没问题，递给我吧。" },
  { en: "It really does feel warmer already.", zh: "确实已经暖多了。" },
  { en: "Come in, please. When did you move here?", zh: "请进。你什么时候搬来的？" },
  { en: "Well, you've met someone now.", zh: "那现在你们认识了。" },
  { en: "A place for people just like you.", zh: "一个专为像你这样的人准备的地方。" },
  { en: "We hadn't either, once.", zh: "我们也曾经不熟。" },
  { en: "Of course, I can show you right now.", zh: "当然，我现在就可以带你们去。" },
  { en: "It's exactly what someone once did for us.", zh: "这正是曾经有人为我们做过的事。" },
  { en: "What does everyone think?", zh: "大家都是怎么想的？" },
  { en: "Then it should carry her name somehow.", zh: "那它应该以某种方式带上她的名字。" },
  { en: "Lily's House — I love it.", zh: "「Lily之家」——我很喜欢。" },
  { en: "It's ready enough, and that's what matters.", zh: "已经够好了，这才是最重要的。" },
  { en: "Let's welcome them properly.", zh: "我们好好欢迎他们吧。" },
  { en: "And we're the ones finishing it.", zh: "而我们是把它继续写下去的人。" }
);
