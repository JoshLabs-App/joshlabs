// 内容数据层：第三章，紧接第二章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter2.js 之后、audio-manifest.js 之前加载。
//
// Tier: L1（跟第一、二章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// L1 横跨第1-3章，本章同样不引入任何新 grammarTag——全部复现第一章已经教过的
// 10 个语法点，专注在新场景（邻居/洗衣房/公交月票/感恩节晚餐）铺词汇广度。
// 悬疑线：Ho太太认出照片里的街区/房子，但克制住不让她在本章讲出完整往事
// （过去时叙述这个"第一次"按路线图留给第6章的NPC，本章只让她欲言又止）。

GAME_CONTENT.scenes.push(
  {
    id: "elderly-neighbor",
    transition: { en: "The next morning, on your way out...", zh: "第二天早上，你正准备出门……" },
    title: "A Familiar Face",
    subtitle: "楼道里 · 认识一位邻居",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Good morning! You're new here, aren't you?", zh: "早上好！你是新搬来的吧？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good morning! Yes, I'm new here.", zh: "早上好！是的，我刚搬来。", correct: true, xp: 10 },
          { text: "Goodbye.", correct: false }
        ],
        hintOnWrong: "礼貌回应并说明情况（陈述句）→ Good morning! Yes, I'm new here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Welcome to the building! Do you need anything?", zh: "欢迎搬进来！需要点什么帮忙吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Thanks! Do you know where the laundry room is?", zh: "谢谢！你知道洗衣房在哪儿吗？", correct: true, xp: 10 },
          { text: "I have everything.", correct: false }
        ],
        hintOnWrong: "反问对方 → Do you know where the laundry room is?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Of course, it's in the basement. Let's take a look.", zh: "当然知道，在地下室。我带你去看看吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sure, let's go check it out.", zh: "好呀，我们去看看吧。", correct: true, xp: 10 },
          { text: "No, never.", correct: false }
        ],
        hintOnWrong: "接受提议、一起行动 → Sure, let's go check it out.",
        next: null
      }
    }
  },
  {
    id: "laundromat",
    title: "The Laundry Room",
    subtitle: "地下室 · 投币洗衣房",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This machine takes quarters. Do you have some?", zh: "这台机器要投硬币。你有零钱吗？" },
        skill: "housing",
        grammarTag: "can-modal",
        choices: [
          { text: "Not many. Can I get change somewhere?", zh: "不太多。我可以在哪儿换零钱吗？", correct: true, xp: 10 },
          { text: "I don't do laundry.", correct: false }
        ],
        hintOnWrong: "用 can 提出请求 → Can I get change somewhere?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's a change machine right by the door.", zh: "门边就有一台换零钱机。" },
        skill: "housing",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, I'll get some now.", zh: "太好了，我现在就去换。", correct: true, xp: 10 },
          { text: "I don't need it.", correct: false }
        ],
        hintOnWrong: "用 will 表示马上要做的事 → I'll get some now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "All set? The dryers are over there.", zh: "都弄好了吗？烘干机在那边。" },
        skill: "housing",
        grammarTag: "courtesy",
        choices: [
          { text: "All set. Thanks so much for your help.", zh: "弄好了。太谢谢你的帮忙了。", correct: true, xp: 10 },
          { text: "Too slow.", correct: false }
        ],
        hintOnWrong: "礼貌表达感谢 → Thanks so much for your help.",
        next: null
      }
    }
  },
  {
    id: "bus-pass",
    title: "Getting a Bus Pass",
    subtitle: "地铁站 · 办公交月票",
    avatar: "🚌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hi there! What can I get for you?", zh: "你好！需要点什么？" },
        skill: "direction",
        grammarTag: "please-request",
        choices: [
          { text: "A monthly pass, please.", zh: "一张月票，谢谢。", correct: true, xp: 10 },
          { text: "I don't like buses.", correct: false }
        ],
        hintOnWrong: "礼貌提出需求 → A monthly pass, please.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Sure. Do you have ID?", zh: "好的。你带证件了吗？" },
        skill: "direction",
        grammarTag: "do-question",
        choices: [
          { text: "Yes. Does it work on the subway too?", zh: "带了。它地铁也能用吗？", correct: true, xp: 10 },
          { text: "No idea.", correct: false }
        ],
        hintOnWrong: "反问确认适用范围 → Does it work on the subway too?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Both bus and subway. It's $156 this month.", zh: "公交地铁都能用。这个月是156块。" },
        skill: "direction",
        grammarTag: "statement",
        choices: [
          { text: "That works for me.", zh: "这个价格我能接受。", correct: true, xp: 10 },
          { text: "Too expensive, sorry.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ That works for me.",
        next: null
      }
    }
  },
  {
    id: "showing-the-photo",
    transition: { en: "That evening, you run into Mrs. Ho again.", zh: "那天傍晚，你又遇到了Ho太太。" },
    title: "Showing the Photo",
    subtitle: "楼道里 · 给Ho太太看老照片",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Oh, hello again! What's that in your hand?", zh: "哦，又见面啦！你手里拿的是什么？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It's an old photo. Look.", zh: "是一张老照片。你看。", correct: true, xp: 10 },
          { text: "It's nothing.", correct: false }
        ],
        hintOnWrong: "陈述句介绍手上的东西 → It's an old photo. Look.",
        next: "n2"
      },
      n2: {
        avatar: "🤔",
        npcLine: { en: "Let me see... wait, I think I know this street.", zh: "我看看……等等，这条街我好像认识。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Really? Where is it exactly?", zh: "真的吗？具体是在哪儿？", correct: true, xp: 10 },
          { text: "I don't care.", correct: false }
        ],
        hintOnWrong: "追问具体地点 → Where is it exactly?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Near the old bakery, by the lake. Can you come for dinner? I'll tell you more.", zh: "在老面包店附近，靠湖边。你能来吃个晚饭吗？我再跟你细说。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes! Can I bring anything?", zh: "好呀！我要带点什么过去吗？", correct: true, xp: 10 },
          { text: "No, I'm busy forever.", correct: false }
        ],
        hintOnWrong: "用 can 询问是否需要帮忙 → Can I bring anything?",
        next: null
      }
    }
  },
  {
    id: "asking-sam",
    title: "Asking Sam",
    subtitle: "公寓 · 问Sam该带什么",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Dinner with Mrs. Ho? That's nice. It's almost Thanksgiving!", zh: "去Ho太太家吃饭？真不错。快到感恩节了！" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "Oh right, that's soon!", zh: "哦对，快到了！", correct: true, xp: 10 },
          { text: "I don't want turkey.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Oh right, that's soon!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's in October, not November like the US. Big dinner with turkey!", zh: "是十月过，不是像美国那样十一月。要吃一顿丰盛的火鸡大餐！" },
        skill: "housing",
        grammarTag: "can-modal",
        choices: [
          { text: "Interesting! Can I bring dessert?", zh: "有意思！我可以带甜点去吗？", correct: true, xp: 10 },
          { text: "I don't cook.", correct: false }
        ],
        hintOnWrong: "用 can 提议带点什么 → Can I bring dessert?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sure, pumpkin pie is always a hit. Let's go pick one up.", zh: "可以呀，南瓜派一直很受欢迎。我们去买一个吧。" },
        skill: "housing",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Great idea, let's go now.", zh: "好主意，我们现在就去吧。", correct: true, xp: 10 },
          { text: "Not interested.", correct: false }
        ],
        hintOnWrong: "接受提议 → Great idea, let's go now.",
        next: null
      }
    }
  },
  {
    id: "wine-and-pie",
    title: "Picking Up a Pie",
    subtitle: "面包店 · 买南瓜派",
    avatar: "🥧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hi! Are you looking for something special?", zh: "你好！在找什么特别的东西吗？" },
        skill: "shopping",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm looking for a pumpkin pie.", zh: "是的，我在找一个南瓜派。", correct: true, xp: 10 },
          { text: "No, just looking around forever.", correct: false }
        ],
        hintOnWrong: "用现在进行时说明正在找什么 → I'm looking for a pumpkin pie.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We have one fresh one left, actually.", zh: "正好还剩一个新鲜的。" },
        skill: "shopping",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, I'll grab that one.", zh: "太好了，我要那个。", correct: true, xp: 10 },
          { text: "No, forget it.", correct: false }
        ],
        hintOnWrong: "用 will 表示当下的决定 → I'll grab that one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here you go! Anything else?", zh: "给你！还需要别的吗？" },
        skill: "shopping",
        grammarTag: "courtesy",
        choices: [
          { text: "No, that's all. Thank you!", zh: "不用了，就这些。谢谢！", correct: true, xp: 10 },
          { text: "Give me everything.", correct: false }
        ],
        hintOnWrong: "礼貌收尾 → No, that's all. Thank you!",
        next: null
      }
    }
  },
  {
    id: "thanksgiving-arrival",
    transition: { en: "Saturday evening, you arrive at Mrs. Ho's door.", zh: "周六傍晚，你到了Ho太太家门口。" },
    title: "Arriving for Dinner",
    subtitle: "Ho太太家 · 感恩节晚餐",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You made it! Are you hungry?", zh: "你来啦！饿了吗？" },
        skill: "dining",
        grammarTag: "short-answer",
        choices: [
          { text: "Yes, very! Thanks for having me.", zh: "嗯，很饿！谢谢你邀请我。", correct: true, xp: 10 },
          { text: "No, not really.", correct: false }
        ],
        hintOnWrong: "简短肯定回答＋礼貌语 → Yes, very! Thanks for having me.",
        next: "n2"
      },
      n2: {
        avatar: "🧑",
        npcLine: { en: "This is my son, David. He's visiting for the holiday.", zh: "这是我儿子David。他回来过节。" },
        skill: "dining",
        grammarTag: "statement",
        choices: [
          { text: "Nice to meet you, David.", zh: "很高兴认识你，David。", correct: true, xp: 10 },
          { text: "I don't know you.", correct: false }
        ],
        hintOnWrong: "礼貌问候（陈述句）→ Nice to meet you, David.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Come in, come in. Dinner's almost ready.", zh: "快进来快进来。饭马上就好了。" },
        skill: "dining",
        grammarTag: "courtesy",
        choices: [
          { text: "Smells amazing, thank you.", zh: "闻起来太香了，谢谢。", correct: true, xp: 10 },
          { text: "I'm not hungry.", correct: false }
        ],
        hintOnWrong: "礼貌称赞 → Smells amazing, thank you.",
        next: null
      }
    }
  },
  {
    id: "turkey-table",
    title: "At the Table",
    subtitle: "餐桌上 · 感恩节话题",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So, do you like Toronto so far?", zh: "所以，你喜欢多伦多吗，目前为止？" },
        skill: "dining",
        grammarTag: "do-question",
        choices: [
          { text: "I love it. Everyone is so kind.", zh: "很喜欢。这里的人都很友善。", correct: true, xp: 10 },
          { text: "Not really, sorry.", correct: false }
        ],
        hintOnWrong: "回答并说明理由 → I love it. Everyone is so kind.",
        next: "n2"
      },
      n2: {
        avatar: "👵",
        npcLine: { en: "In Canada, we celebrate Thanksgiving in October, not November.", zh: "在加拿大，我们感恩节是十月过，不是十一月。" },
        skill: "dining",
        grammarTag: "statement",
        choices: [
          { text: "Oh, interesting! I love learning new things.", zh: "哦，有意思！我喜欢学新东西。", correct: true, xp: 10 },
          { text: "I don't care.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Oh, interesting! I love learning new things.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's closer to harvest time here. Anyway — eat, eat!", zh: "因为这里收获季更早一些。好啦——吃吧吃吧！" },
        skill: "dining",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's eat before it gets cold.", zh: "我们趁热吃吧。", correct: true, xp: 10 },
          { text: "I'll eat later.", correct: false }
        ],
        hintOnWrong: "提议一起行动 → Let's eat before it gets cold.",
        next: null
      }
    }
  },
  {
    id: "the-story-begins",
    transition: { en: "After dinner, David steps out to take a call.", zh: "晚饭后，David出去接了个电话。" },
    title: "A Story, Almost Told",
    subtitle: "客厅 · 欲言又止的往事",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Now... about that photo. That house belongs to someone I once knew.", zh: "现在……说说那张照片吧。那栋房子是我曾经认识的一个人的。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Who is that?", zh: "那是谁呢？", correct: true, xp: 10 },
          { text: "I don't want to know.", correct: false }
        ],
        hintOnWrong: "追问是谁 → Who is that?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That's... a long story. Maybe too long for tonight.", zh: "这个……说来话长。今晚可能讲不完。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "That's okay. Can we talk again soon?", zh: "没关系。我们能改天再聊吗？", correct: true, xp: 10 },
          { text: "Forget it, then.", correct: false }
        ],
        hintOnWrong: "用 can 提议下次再聊 → Can we talk again soon?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Of course, dear. Come by anytime.", zh: "当然可以，亲爱的。随时过来找我。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I will. Thank you, Mrs. Ho.", zh: "我会的。谢谢你，Ho太太。", correct: true, xp: 10 },
          { text: "Maybe not.", correct: false }
        ],
        hintOnWrong: "用 will 承诺以后会做 → I will. Thank you, Mrs. Ho.",
        next: null
      }
    }
  },
  {
    id: "back-at-the-apartment",
    transition: { en: "Walking home, your mind is racing.", zh: "走回家的路上，你思绪万千。" },
    title: "Back at the Apartment",
    subtitle: "公寓 · 和Sam聊聊今晚",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You're back! How was dinner?", zh: "你回来啦！晚饭怎么样？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It's wonderful, and a little mysterious.", zh: "很棒，而且有点神秘。", correct: true, xp: 10 },
          { text: "It's boring.", correct: false }
        ],
        hintOnWrong: "简单评价（陈述句）→ It's wonderful, and a little mysterious.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Mysterious? What do you mean?", zh: "神秘？什么意思？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "She knows the house in the photo.", zh: "她认识照片里那栋房子。", correct: true, xp: 10 },
          { text: "I don't want to talk.", correct: false }
        ],
        hintOnWrong: "陈述新发现（陈述句）→ She knows the house in the photo.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Wow. What's the plan now?", zh: "哇。那现在打算怎么办？" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll visit her again soon.", zh: "我会尽快再去找她。", correct: true, xp: 10 },
          { text: "Nothing, I guess.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll visit her again soon.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Good morning! Yes, I'm new here.", zh: "早上好！是的，我刚搬来。" },
  { en: "Thanks! Do you know where the laundry room is?", zh: "谢谢！你知道洗衣房在哪儿吗？" },
  { en: "Sure, let's go check it out.", zh: "好呀，我们去看看吧。" },
  { en: "Not many. Can I get change somewhere?", zh: "不太多。我可以在哪儿换零钱吗？" },
  { en: "Perfect, I'll get some now.", zh: "太好了，我现在就去换。" },
  { en: "All set. Thanks so much for your help.", zh: "弄好了。太谢谢你的帮忙了。" },
  { en: "A monthly pass, please.", zh: "一张月票，谢谢。" },
  { en: "Yes. Does it work on the subway too?", zh: "带了。它地铁也能用吗？" },
  { en: "That works for me.", zh: "这个价格我能接受。" },
  { en: "It's an old photo. Look.", zh: "是一张老照片。你看。" },
  { en: "Really? Where is it exactly?", zh: "真的吗？具体是在哪儿？" },
  { en: "Yes! Can I bring anything?", zh: "好呀！我要带点什么过去吗？" },
  { en: "Oh right, that's soon!", zh: "哦对，快到了！" },
  { en: "Interesting! Can I bring dessert?", zh: "有意思！我可以带甜点去吗？" },
  { en: "Great idea, let's go now.", zh: "好主意，我们现在就去吧。" },
  { en: "Yes, I'm looking for a pumpkin pie.", zh: "是的，我在找一个南瓜派。" },
  { en: "Perfect, I'll grab that one.", zh: "太好了，我要那个。" },
  { en: "No, that's all. Thank you!", zh: "不用了，就这些。谢谢！" },
  { en: "Yes, very! Thanks for having me.", zh: "嗯，很饿！谢谢你邀请我。" },
  { en: "Nice to meet you, David.", zh: "很高兴认识你，David。" },
  { en: "Smells amazing, thank you.", zh: "闻起来太香了，谢谢。" },
  { en: "I love it. Everyone is so kind.", zh: "很喜欢。这里的人都很友善。" },
  { en: "Oh, interesting! I love learning new things.", zh: "哦，有意思！我喜欢学新东西。" },
  { en: "Let's eat before it gets cold.", zh: "我们趁热吃吧。" },
  { en: "Who is that?", zh: "那是谁呢？" },
  { en: "That's okay. Can we talk again soon?", zh: "没关系。我们能改天再聊吗？" },
  { en: "I will. Thank you, Mrs. Ho.", zh: "我会的。谢谢你，Ho太太。" },
  { en: "It's wonderful, and a little mysterious.", zh: "很棒，而且有点神秘。" },
  { en: "She knows the house in the photo.", zh: "她认识照片里那栋房子。" },
  { en: "I'll visit her again soon.", zh: "我会尽快再去找她。" }
);

Object.assign(GAME_CONTENT.skillMeta, {
  community: { label: "邻里社交", labelEn: "Community", icon: "🏘️" }
});
