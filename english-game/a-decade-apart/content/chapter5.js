// 内容数据层：第五章，紧接第四章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter4.js 之后、audio-manifest.js 之前加载。
//
// Tier: L2（跟第四章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章不引入新 grammarTag——past-simple/connector 已经在第四章引入并复现过，
// 这里继续巩固，同时合法使用 when/how 这类L2解锁的疑问词（归到 wh-question tag下）。
// 悬疑线：开篇先兑现第四章结尾的承诺（去找Ho太太问名字），但她还没准备好，
// 提议改天一起去图书馆查——正式挂钩第6章"图书馆/档案馆"那一课，然后本章剩下
// 篇幅铺开新词汇场景（诊所问诊、万圣节街景），不再推进悬疑本身。

GAME_CONTENT.scenes.push(
  {
    id: "visiting-ho",
    transition: { en: "The next day, you knock on Mrs. Ho's door.", zh: "第二天，你敲响了Ho太太家的门。" },
    title: "A Promise Kept",
    subtitle: "Ho太太家门口 · 问起那个名字",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Oh, hello! Did you come about the photo?", zh: "哦，你好！你是为了照片来的吗？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Yes. I found the name 'Ho' in an old ledger.", zh: "是的。我在一本旧账本里发现了'Ho'这个名字。", correct: true, xp: 10 },
          { text: "No, just visiting.", correct: false }
        ],
        hintOnWrong: "用过去时讲述你发现的事 → I found the name 'Ho' in an old ledger.",
        next: "n2"
      },
      n2: {
        avatar: "😮",
        npcLine: { en: "My name? Where did you see that?", zh: "我的名字？你在哪儿看到的？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "At the bookstore where I work now.", zh: "在我现在工作的书店里。", correct: true, xp: 10 },
          { text: "I don't remember where.", correct: false }
        ],
        hintOnWrong: "简单说明地点（陈述句）→ At the bookstore where I work now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's look into it together, at the library. I need time to think first.", zh: "我们一起去图书馆查查吧。我需要先想一想。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, I'll wait until you're ready.", zh: "好的，我会等你准备好。", correct: true, xp: 10 },
          { text: "I can't wait.", correct: false }
        ],
        hintOnWrong: "用 will 表示愿意等待 → I'll wait until you're ready.",
        next: null
      }
    }
  },
  {
    id: "feeling-sick",
    transition: { en: "A few days later, you wake up with a sore throat.", zh: "几天后，你一觉醒来喉咙很痛。" },
    title: "Not Feeling Well",
    subtitle: "公寓 · 有点不舒服",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You look tired. Are you okay?", zh: "你看起来很累。你还好吗？" },
        skill: "health",
        grammarTag: "statement",
        choices: [
          { text: "Not really, my throat hurts.", zh: "不太好，我喉咙疼。", correct: true, xp: 10 },
          { text: "I'm perfect.", correct: false }
        ],
        hintOnWrong: "陈述身体状况（陈述句）→ Not really, my throat hurts.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You should see a doctor.", zh: "你应该去看医生。" },
        skill: "health",
        grammarTag: "will-future",
        choices: [
          { text: "You're right, I'll go today.", zh: "你说得对，我今天就去。", correct: true, xp: 10 },
          { text: "I'm fine, really.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll go today.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There's a clinic near the subway station.", zh: "地铁站附近有一家诊所。" },
        skill: "health",
        grammarTag: "courtesy",
        choices: [
          { text: "Thanks, I'll head there now.", zh: "谢谢，我现在就过去。", correct: true, xp: 10 },
          { text: "I don't need it.", correct: false }
        ],
        hintOnWrong: "礼貌感谢并说明行动 → Thanks, I'll head there now.",
        next: null
      }
    }
  },
  {
    id: "at-the-clinic",
    title: "Checking In",
    subtitle: "诊所 · 挂号登记",
    avatar: "🩺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hi, do you have an appointment?", zh: "你好，你预约了吗？" },
        skill: "health",
        grammarTag: "do-question",
        choices: [
          { text: "No, I don't. Can I be seen today?", zh: "没有。今天能看诊吗？", correct: true, xp: 10 },
          { text: "Yes, obviously.", correct: false }
        ],
        hintOnWrong: "否定回答＋用 can 请求 → Can I be seen today?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Sure. What's the problem today?", zh: "可以。今天哪里不舒服？" },
        skill: "health",
        grammarTag: "statement",
        choices: [
          { text: "My throat really hurts.", zh: "我喉咙很痛。", correct: true, xp: 10 },
          { text: "Nothing, really.", correct: false }
        ],
        hintOnWrong: "陈述症状（陈述句）→ My throat really hurts.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Okay, please take a seat and wait.", zh: "好的，请坐着等一下。" },
        skill: "health",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, I'll wait right here.", zh: "谢谢，我就在这儿等。", correct: true, xp: 10 },
          { text: "How long will it take?", correct: false }
        ],
        hintOnWrong: "礼貌回应＋will → Thank you, I'll wait right here.",
        next: null
      }
    }
  },
  {
    id: "seeing-the-doctor",
    title: "Seeing the Doctor",
    subtitle: "诊室 · 医生问诊",
    avatar: "👩‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So, when did the pain start?", zh: "那，疼痛是什么时候开始的？" },
        skill: "health",
        grammarTag: "past-simple",
        choices: [
          { text: "It started two days ago.", zh: "两天前开始的。", correct: true, xp: 10 },
          { text: "I don't know when.", correct: false }
        ],
        hintOnWrong: "用过去时回答何时发生 → It started two days ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I see. How are you feeling otherwise?", zh: "明白了。其他方面感觉怎么样？" },
        skill: "health",
        grammarTag: "statement",
        choices: [
          { text: "A bit tired, but okay.", zh: "有点累，但还好。", correct: true, xp: 10 },
          { text: "Terrible, obviously.", correct: false }
        ],
        hintOnWrong: "简单描述感受（陈述句）→ A bit tired, but okay.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a quick look at your throat.", zh: "我们快速看一下你的喉咙。" },
        skill: "health",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Okay, let's do that.", zh: "好的，来吧。", correct: true, xp: 10 },
          { text: "No, I'm scared.", correct: false }
        ],
        hintOnWrong: "接受提议 → Okay, let's do that.",
        next: null
      }
    }
  },
  {
    id: "the-prescription",
    title: "Doctor's Advice",
    subtitle: "诊室 · 医嘱与处方",
    avatar: "👩‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's just a small infection. Nothing serious.", zh: "只是个小感染，不严重。" },
        skill: "health",
        grammarTag: "statement",
        choices: [
          { text: "That's a relief to hear.", zh: "听到这个我就放心了。", correct: true, xp: 10 },
          { text: "That's terrible news.", correct: false }
        ],
        hintOnWrong: "表达如释重负（陈述句）→ That's a relief to hear.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you take this medicine twice a day?", zh: "你能一天吃两次这个药吗？" },
        skill: "health",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, I can do that easily.", zh: "可以，这个我很容易做到。", correct: true, xp: 10 },
          { text: "I hate medicine.", correct: false }
        ],
        hintOnWrong: "用 can 确认能做到 → Yes, I can do that easily.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Good. Feel better soon!", zh: "好的。祝你早日康复！" },
        skill: "health",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you so much, doctor.", zh: "太谢谢你了，医生。", correct: true, xp: 10 },
          { text: "Whatever, bye.", correct: false }
        ],
        hintOnWrong: "礼貌道谢 → Thank you so much, doctor.",
        next: null
      }
    }
  },
  {
    id: "christmas-prep",
    transition: { en: "The weeks pass, and December brings the first snow.", zh: "几周过去，十二月带来了第一场雪。" },
    title: "Getting Ready for Christmas",
    subtitle: "公寓 · 商量圣诞节怎么过",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Christmas is next week. Do you have plans?", zh: "下周就是圣诞节了。你有安排吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Not yet. Do you have any ideas?", zh: "还没有。你有什么想法吗？", correct: true, xp: 10 },
          { text: "I don't celebrate.", correct: false }
        ],
        hintOnWrong: "反问对方 → Do you have any ideas?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We could get a small tree for the apartment.", zh: "我们可以给公寓买一棵小圣诞树。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I love that idea!", zh: "我超喜欢这个主意！", correct: true, xp: 10 },
          { text: "That sounds like a lot of work.", correct: false }
        ],
        hintOnWrong: "表达喜欢（陈述句）→ I love that idea!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's go find one tomorrow.", zh: "我们明天去找一棵吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Perfect, let's go after work.", zh: "好，我们下班后就去吧。", correct: true, xp: 10 },
          { text: "I'm too busy.", correct: false }
        ],
        hintOnWrong: "接受提议 → Perfect, let's go after work.",
        next: null
      }
    }
  },
  {
    id: "buying-a-tree",
    title: "Buying a Tree",
    subtitle: "圣诞树摊位 · 挑选圣诞树",
    avatar: "🎄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome! Looking for something festive?", zh: "欢迎光临！在找点应景的东西吗？" },
        skill: "shopping",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm looking for a small tree.", zh: "是的，我在找一棵小圣诞树。", correct: true, xp: 10 },
          { text: "No, just browsing forever.", correct: false }
        ],
        hintOnWrong: "用现在进行时说明正在找什么 → I'm looking for a small tree.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How much do you want to spend?", zh: "你打算花多少钱？" },
        skill: "shopping",
        grammarTag: "wh-question",
        choices: [
          { text: "How much is this one?", zh: "这棵多少钱？", correct: true, xp: 10 },
          { text: "I have no budget.", correct: false }
        ],
        hintOnWrong: "用 how much 询问价格 → How much is this one?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Just $25. It's on sale.", zh: "才25块。正在打折。" },
        skill: "shopping",
        grammarTag: "will-future",
        choices: [
          { text: "Great, I'll take it.", zh: "太好了，我要这棵。", correct: true, xp: 10 },
          { text: "Too much for me.", correct: false }
        ],
        hintOnWrong: "用 will 表示当下决定 → I'll take it.",
        next: null
      }
    }
  },
  {
    id: "christmas-market",
    transition: { en: "Christmas Eve, the streets glow with lights.", zh: "平安夜，街道上到处是灯光。" },
    title: "The Christmas Market",
    subtitle: "街头 · 圣诞市集",
    avatar: "🎄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Wow, look at all these lights!", zh: "哇，看看这些灯！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "This is amazing. I love it here.", zh: "太棒了。我太喜欢这儿了。", correct: true, xp: 10 },
          { text: "This is weird.", correct: false }
        ],
        hintOnWrong: "表达赞叹（陈述句）→ This is amazing. I love it here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you want to take a photo together?", zh: "要不要一起拍张照？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's take one right here.", zh: "好呀，我们就在这儿拍一张吧。", correct: true, xp: 10 },
          { text: "No, I hate photos.", correct: false }
        ],
        hintOnWrong: "肯定回答＋提议 → Yes, let's take one right here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is a great night.", zh: "今晚真棒。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "The best one in a long time.", zh: "好久没这么开心了。", correct: true, xp: 10 },
          { text: "It's okay, I guess.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ The best one in a long time.",
        next: null
      }
    }
  },
  {
    id: "christmas-visit",
    title: "A Christmas Visit",
    subtitle: "邻居家门口 · 给Ho太太拜年问好",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Oh, hello! Merry Christmas!", zh: "哦，你好！圣诞快乐！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Merry Christmas, Mrs. Ho!", zh: "圣诞快乐，Ho太太！", correct: true, xp: 10 },
          { text: "Give me a gift now.", correct: false }
        ],
        hintOnWrong: "节日问候（陈述句）→ Merry Christmas, Mrs. Ho!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Come in, come in. Are you having a good holiday?", zh: "快进来快进来。假期过得开心吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm having a wonderful time.", zh: "是的，我玩得特别开心。", correct: true, xp: 10 },
          { text: "Not really, sorry.", correct: false }
        ],
        hintOnWrong: "用现在进行时描述当下感受 → I'm having a wonderful time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'm glad. Let's talk more next week.", zh: "真高兴。我们下周再多聊聊。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll come by after work.", zh: "我下班后过来找你。", correct: true, xp: 10 },
          { text: "Maybe sometime.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll come by after work.",
        next: null
      }
    }
  },
  {
    id: "christmas-night-end",
    title: "Walking Home",
    subtitle: "回家路上 · 圣诞夜收尾",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What a night! Did you have fun?", zh: "这一晚真棒！你玩得开心吗？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I did. We had so much fun tonight.", zh: "开心。我们今晚玩得太开心了。", correct: true, xp: 10 },
          { text: "It was okay, I guess.", correct: false }
        ],
        hintOnWrong: "用过去时总结今晚 → We had so much fun tonight.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "And next week, the library with Mrs. Ho?", zh: "那下周，跟Ho太太一起去图书馆？" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Yes, I'll finally learn more.", zh: "是的，我终于能多了解一些了。", correct: true, xp: 10 },
          { text: "I forgot about that.", correct: false }
        ],
        hintOnWrong: "用 will 表示期待的行动 → I'll finally learn more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Exciting. Get some rest tonight.", zh: "真让人期待。今晚好好休息吧。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "I will. Goodnight, Sam.", zh: "我会的。晚安，Sam。", correct: true, xp: 10 },
          { text: "I'm not tired at all.", correct: false }
        ],
        hintOnWrong: "礼貌道别 → I will. Goodnight, Sam.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Yes. I found the name 'Ho' in an old ledger.", zh: "是的。我在一本旧账本里发现了'Ho'这个名字。" },
  { en: "At the bookstore where I work now.", zh: "在我现在工作的书店里。" },
  { en: "Okay, I'll wait until you're ready.", zh: "好的，我会等你准备好。" },
  { en: "Not really, my throat hurts.", zh: "不太好，我喉咙疼。" },
  { en: "You're right, I'll go today.", zh: "你说得对，我今天就去。" },
  { en: "Thanks, I'll head there now.", zh: "谢谢，我现在就过去。" },
  { en: "No, I don't. Can I be seen today?", zh: "没有。今天能看诊吗？" },
  { en: "My throat really hurts.", zh: "我喉咙很痛。" },
  { en: "Thank you, I'll wait right here.", zh: "谢谢，我就在这儿等。" },
  { en: "It started two days ago.", zh: "两天前开始的。" },
  { en: "A bit tired, but okay.", zh: "有点累，但还好。" },
  { en: "Okay, let's do that.", zh: "好的，来吧。" },
  { en: "That's a relief to hear.", zh: "听到这个我就放心了。" },
  { en: "Yes, I can do that easily.", zh: "可以，这个我很容易做到。" },
  { en: "Thank you so much, doctor.", zh: "太谢谢你了，医生。" },
  { en: "Not yet. Do you have any ideas?", zh: "还没有。你有什么想法吗？" },
  { en: "I love that idea!", zh: "我超喜欢这个主意！" },
  { en: "Perfect, let's go after work.", zh: "好，我们下班后就去吧。" },
  { en: "Yes, I'm looking for a small tree.", zh: "是的，我在找一棵小圣诞树。" },
  { en: "How much is this one?", zh: "这件多少钱？" },
  { en: "Great, I'll take it.", zh: "太好了，我要这件。" },
  { en: "This is amazing. I love it here.", zh: "太棒了。我太喜欢这儿了。" },
  { en: "Yes, let's take one right here.", zh: "好呀，我们就在这儿拍一张吧。" },
  { en: "The best one in a long time.", zh: "好久没这么开心了。" },
  { en: "Merry Christmas, Mrs. Ho!", zh: "圣诞快乐，Ho太太！" },
  { en: "Yes, I'm having a wonderful time.", zh: "是的，我玩得特别开心。" },
  { en: "I'll come by after work.", zh: "我下班后过来找你。" },
  { en: "I did. We had so much fun tonight.", zh: "开心。我们今晚玩得太开心了。" },
  { en: "Yes, I'll finally learn more.", zh: "是的，我终于能多了解一些了。" },
  { en: "I will. Goodnight, Sam.", zh: "我会的。晚安，Sam。" }
);

Object.assign(GAME_CONTENT.skillMeta, {
  health: { label: "健康医疗", labelEn: "Health", icon: "🩺" }
});
