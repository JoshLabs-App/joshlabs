// 内容数据层：第九章，紧接第八章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter8.js 之后、audio-manifest.js 之前加载。
//
// Tier: L3（跟第八章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入一个新 grammarTag：
//   - comparative（structure，占"一课一个新点"名额，3课内必须复现）：
//     比较级/最高级（bigger than / the best / the brightest yet 等），
//     第1课（the-old-house）引入，第1/5/6/7/9课多次复现。
// present-perfect（第八章引入）继续复现。条件句/被动语态留给第10/11章。
//
// 剧情：终于走到照片里那栋房子（呼应第2章的老照片、第4章的旧账本、第6章的
// 剪报、第7章Uncle Lok的回忆）——现任房主友善地让他们进去看看，在墙角找到
// 一批旧信。原计划第9章是圣诞节，但第5章已经改写成圣诞节了，这里改成春节
// （Josh 2026-09-03 拍板，也跟第11章"香港移民潮"历史线呼应更自然）。
// 结尾：Ho太太读了几封信，发现其中一封写给"Emma"——直接把悬疑线跟主角
// 身边最亲近的人连起来，作为第10章的钩子。

GAME_CONTENT.scenes.push(
  {
    id: "the-old-house",
    transition: { en: "The next weekend, you and Mrs. Ho finally stand in front of the old house.", zh: "接下来的周末，你和Ho太太终于站在了那栋老房子前。" },
    title: "The Old House",
    subtitle: "门前 · 终于找到了这栋房子",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Here it is. After all these years.", zh: "就是这里。过了这么多年。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It looks smaller than I imagined.", zh: "它看起来比我想象的要小。", correct: true, xp: 10 },
          { text: "It looks exactly the same.", correct: false }
        ],
        hintOnWrong: "用比较级 → It looks smaller than I imagined.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we knock on the door?", zh: "我们要不要敲门？" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Yes, let's knock together.", zh: "好，我们一起敲吧。", correct: true, xp: 10 },
          { text: "No, let's just leave.", correct: false }
        ],
        hintOnWrong: "接受提议 → Yes, let's knock together.",
        next: "n3"
      },
      n3: {
        avatar: "🧑",
        npcLine: { en: "Hello? Can I help you two?", zh: "你好？有什么可以帮你们的吗？" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Sorry to bother you.", zh: "很抱歉打扰您了。", correct: true, xp: 10 },
          { text: "We don't need help.", correct: false }
        ],
        hintOnWrong: "礼貌开场 → Sorry to bother you.",
        next: null
      }
    }
  },
  {
    id: "inside-the-house",
    title: "Inside",
    subtitle: "门口 · 现任房主邀请进去看看",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Oh, this house? My family has lived here for ten years.", zh: "哦，这房子？我们家已经在这儿住了十年了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's been in good hands, then.", zh: "那看来它一直被照顾得很好。", correct: true, xp: 10 },
          { text: "That's not very long.", correct: false }
        ],
        hintOnWrong: "用现在完成时回应 → It's been in good hands, then.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Would you like to come in for a moment?", zh: "要不要进来待一会儿？" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "That's very kind, thank you.", zh: "您真是太好了，谢谢您。", correct: true, xp: 10 },
          { text: "No, we should go.", correct: false }
        ],
        hintOnWrong: "礼貌接受 → That's very kind, thank you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Take your time. I'll be in the kitchen.", zh: "慢慢看。我在厨房。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we won't be long.", zh: "谢谢，我们不会待很久。", correct: true, xp: 10 },
          { text: "We'll stay all day.", correct: false }
        ],
        hintOnWrong: "用 will 回应 → Thank you, we won't be long.",
        next: null
      }
    }
  },
  {
    id: "old-letters-found",
    title: "Old Letters",
    subtitle: "老角落 · 意外的发现",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look — this corner. It hasn't changed at all.", zh: "你看——这个角落。一点都没变。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It really hasn't changed a bit.", zh: "确实一点都没变。", correct: true, xp: 10 },
          { text: "Everything looks different to me.", correct: false }
        ],
        hintOnWrong: "用现在完成时附和 → It really hasn't changed a bit.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Wait... I think there's something behind this shelf.", zh: "等等……这个架子后面好像有东西。" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "What is it? Let's look closer.", zh: "是什么？我们凑近看看。", correct: true, xp: 10 },
          { text: "Leave it, it's nothing.", correct: false }
        ],
        hintOnWrong: "追问＋提议 → What is it? Let's look closer.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Old letters. So many old letters.", zh: "旧信。好多旧信啊。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "This is bigger than we expected.", zh: "这比我们预期的要大得多。", correct: true, xp: 10 },
          { text: "This is smaller than I thought.", correct: false }
        ],
        hintOnWrong: "用比较级 → This is bigger than we expected.",
        next: null
      }
    }
  },
  {
    id: "lunar-new-year-invite",
    title: "An Invitation",
    subtitle: "回家路上 · 春节邀请",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Let's take these home and read them slowly.", zh: "我们把这些带回家慢慢读吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's go home.", zh: "好主意，我们回家吧。", correct: true, xp: 10 },
          { text: "Let's read them right here.", correct: false }
        ],
        hintOnWrong: "接受提议 → Good idea, let's go home.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "By the way, Lunar New Year is next week. Will you join us?", zh: "对了，下周就是春节了。你愿意来我们家过节吗？" },
        skill: "festival",
        grammarTag: "will-future",
        choices: [
          { text: "I'd love to join you.", zh: "我很乐意加入你们。", correct: true, xp: 10 },
          { text: "I've never heard of it.", correct: false }
        ],
        hintOnWrong: "礼貌接受邀请 → I'd love to join you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Wonderful! It's the biggest celebration of the year for us.", zh: "太好了！这对我们来说是一年中最盛大的节日。" },
        skill: "festival",
        grammarTag: "comparative",
        choices: [
          { text: "I can't wait to see it.", zh: "我等不及想看看了。", correct: true, xp: 10 },
          { text: "That sounds too big for me.", correct: false }
        ],
        hintOnWrong: "表达期待（陈述句）→ I can't wait to see it.",
        next: null
      }
    }
  },
  {
    id: "preparing-for-cny",
    transition: { en: "The next week, you help decorate for the festival.", zh: "第二周，你帮忙一起布置节日装饰。" },
    title: "Preparing for the Festival",
    subtitle: "Ho太太家 · 布置春节装饰",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We need red decorations. Which one is bigger?", zh: "我们需要红色装饰。哪一个更大？" },
        skill: "festival",
        grammarTag: "comparative",
        choices: [
          { text: "This one is bigger than that one.", zh: "这个比那个大。", correct: true, xp: 10 },
          { text: "They look the same size.", correct: false }
        ],
        hintOnWrong: "用比较级 → This one is bigger than that one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Good choice. Can you help me hang it?", zh: "选得好。你能帮我挂上去吗？" },
        skill: "festival",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can reach higher than you.", zh: "没问题，我够得比你高。", correct: true, xp: 10 },
          { text: "I'm not tall enough either.", correct: false }
        ],
        hintOnWrong: "用 can + 比较级 → Sure, I can reach higher than you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Perfect. This is the best decoration we've had in years.", zh: "太好了。这是我们这些年里最好的装饰了。" },
        skill: "festival",
        grammarTag: "present-perfect",
        choices: [
          { text: "I'm glad I could help.", zh: "很高兴我能帮上忙。", correct: true, xp: 10 },
          { text: "I didn't do much.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I'm glad I could help.",
        next: null
      }
    }
  },
  {
    id: "cny-eve-dinner",
    transition: { en: "New Year's Eve, the whole family gathers around the table.", zh: "除夕夜，一家人围坐在桌前。" },
    title: "Reunion Dinner",
    subtitle: "Ho太太家 · 除夕团圆饭",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Everyone's here. Let's eat before it gets cold.", zh: "大家都到齐了。我们趁热吃吧。" },
        skill: "festival",
        grammarTag: "comparative",
        choices: [
          { text: "This table has more food than I've ever seen.", zh: "这桌菜比我见过的都多。", correct: true, xp: 10 },
          { text: "There's not much food.", correct: false }
        ],
        hintOnWrong: "用比较级 → This table has more food than I've ever seen.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Try this dish. It's my mother's recipe.", zh: "尝尝这道菜。是我妈妈的食谱。" },
        skill: "festival",
        grammarTag: "comparative",
        choices: [
          { text: "This is the best dish I've had all year.", zh: "这是我今年吃过最好吃的菜。", correct: true, xp: 10 },
          { text: "It's a bit too salty.", correct: false }
        ],
        hintOnWrong: "用最高级 → This is the best dish I've had all year.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'm so happy you're here with us tonight.", zh: "今晚你能在这儿，我真的很开心。" },
        skill: "festival",
        grammarTag: "statement",
        choices: [
          { text: "I'm happy to be here too.", zh: "我也很开心能在这儿。", correct: true, xp: 10 },
          { text: "I should probably go soon.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I'm happy to be here too.",
        next: null
      }
    }
  },
  {
    id: "cny-traditions",
    title: "New Traditions",
    subtitle: "餐桌上 · 聊聊过节的不同",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever celebrated Lunar New Year before?", zh: "你以前庆祝过春节吗？" },
        skill: "festival",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never celebrated Lunar New Year before.", zh: "我以前从没庆祝过春节。", correct: true, xp: 10 },
          { text: "I celebrate it every year.", correct: false }
        ],
        hintOnWrong: "用现在完成时（never）→ I've never celebrated Lunar New Year before.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's very different from other holidays, isn't it?", zh: "跟其他节日很不一样，对吧？" },
        skill: "festival",
        grammarTag: "comparative",
        choices: [
          { text: "It feels warmer than any holiday I know.", zh: "感觉比我知道的任何节日都要温暖。", correct: true, xp: 10 },
          { text: "It feels exactly the same.", correct: false }
        ],
        hintOnWrong: "用比较级 → It feels warmer than any holiday I know.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's the nicest thing you could say.", zh: "这是你能说出的最贴心的话了。" },
        skill: "festival",
        grammarTag: "courtesy",
        choices: [
          { text: "I mean it, thank you for having me.", zh: "我是真心的，谢谢你们邀请我。", correct: true, xp: 10 },
          { text: "I was just being polite.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → I mean it, thank you for having me.",
        next: null
      }
    }
  },
  {
    id: "red-envelopes",
    title: "Red Envelopes",
    subtitle: "客厅 · 红包习俗",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Here — a red envelope for you.", zh: "给你——一个红包。" },
        skill: "festival",
        grammarTag: "courtesy",
        choices: [
          { text: "Oh, thank you so much.", zh: "哦，太谢谢您了。", correct: true, xp: 10 },
          { text: "I don't need money.", correct: false }
        ],
        hintOnWrong: "礼貌感谢 → Oh, thank you so much.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's for good luck, not for spending right away.", zh: "这是图个好运，不是让你马上花掉的。" },
        skill: "festival",
        grammarTag: "will-future",
        choices: [
          { text: "I'll keep it somewhere special.", zh: "我会把它放在一个特别的地方。", correct: true, xp: 10 },
          { text: "I'll spend it tonight.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll keep it somewhere special.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You've brought us good luck too, you know.", zh: "其实你也给我们带来了好运，你知道吗。" },
        skill: "festival",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never felt so welcome anywhere.", zh: "我从没在哪里感到如此受欢迎。", correct: true, xp: 10 },
          { text: "I feel a little out of place.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've never felt so welcome anywhere.",
        next: null
      }
    }
  },
  {
    id: "fireworks-and-family",
    title: "Fireworks",
    subtitle: "院子里 · 烟花与家人",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Come outside — the fireworks are starting!", zh: "出来吧——烟花要开始了！" },
        skill: "festival",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm coming, don't start without me!", zh: "我来了，别没我就开始！", correct: true, xp: 10 },
          { text: "I'll stay inside.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → I'm coming, don't start without me!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look at that one — it's brighter than the last!", zh: "看那个——比上一个还亮！" },
        skill: "festival",
        grammarTag: "comparative",
        choices: [
          { text: "That's the brightest one yet.", zh: "这是目前为止最亮的一个。", correct: true, xp: 10 },
          { text: "It's not that bright.", correct: false }
        ],
        hintOnWrong: "用最高级 → That's the brightest one yet.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This has been a perfect night.", zh: "今晚真是完美的一晚。" },
        skill: "festival",
        grammarTag: "present-perfect",
        choices: [
          { text: "It really has been perfect.", zh: "确实是完美的一晚。", correct: true, xp: 10 },
          { text: "It's been okay, I guess.", correct: false }
        ],
        hintOnWrong: "用现在完成时附和 → It really has been perfect.",
        next: null
      }
    }
  },
  {
    id: "a-quiet-moment",
    transition: { en: "Later, when the fireworks fade, Mrs. Ho finds you alone.", zh: "后来，烟花渐渐散去，Ho太太找到独自一人的你。" },
    title: "A Quiet Moment",
    subtitle: "阳台上 · 深夜的对话",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I read a few of those letters tonight.", zh: "我今晚读了几封那些信。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "What did they say?", zh: "信里写了什么？", correct: true, xp: 10 },
          { text: "I don't want to know yet.", correct: false }
        ],
        hintOnWrong: "追问细节（wh-question）→ What did they say?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "One of them was addressed to someone named Emma.", zh: "其中一封是写给一个叫Emma的人的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Wait, our Emma? That can't be a coincidence.", zh: "等等，我们认识的那个Emma？这不可能是巧合。", correct: true, xp: 10 },
          { text: "That's probably a different Emma.", correct: false }
        ],
        hintOnWrong: "陈述惊讶（陈述句）→ Wait, our Emma? That can't be a coincidence.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I think it's time we showed her these letters.", zh: "我觉得是时候把这些信给她看看了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll bring her here tomorrow.", zh: "我明天带她过来。", correct: true, xp: 10 },
          { text: "Let's wait a bit longer.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll bring her here tomorrow.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "It looks smaller than I imagined.", zh: "它看起来比我想象的要小。" },
  { en: "Yes, let's knock together.", zh: "好，我们一起敲吧。" },
  { en: "Sorry to bother you.", zh: "很抱歉打扰您了。" },
  { en: "It's been in good hands, then.", zh: "那看来它一直被照顾得很好。" },
  { en: "That's very kind, thank you.", zh: "您真是太好了，谢谢您。" },
  { en: "Thank you, we won't be long.", zh: "谢谢，我们不会待很久。" },
  { en: "It really hasn't changed a bit.", zh: "确实一点都没变。" },
  { en: "What is it? Let's look closer.", zh: "是什么？我们凑近看看。" },
  { en: "This is bigger than we expected.", zh: "这比我们预期的要大得多。" },
  { en: "Good idea, let's go home.", zh: "好主意，我们回家吧。" },
  { en: "I'd love to join you.", zh: "我很乐意加入你们。" },
  { en: "I can't wait to see it.", zh: "我等不及想看看了。" },
  { en: "This one is bigger than that one.", zh: "这个比那个大。" },
  { en: "Sure, I can reach higher than you.", zh: "没问题，我够得比你高。" },
  { en: "I'm glad I could help.", zh: "很高兴我能帮上忙。" },
  { en: "This table has more food than I've ever seen.", zh: "这桌菜比我见过的都多。" },
  { en: "This is the best dish I've had all year.", zh: "这是我今年吃过最好吃的菜。" },
  { en: "I'm happy to be here too.", zh: "我也很开心能在这儿。" },
  { en: "I've never celebrated Lunar New Year before.", zh: "我以前从没庆祝过春节。" },
  { en: "It feels warmer than any holiday I know.", zh: "感觉比我知道的任何节日都要温暖。" },
  { en: "I mean it, thank you for having me.", zh: "我是真心的，谢谢你们邀请我。" },
  { en: "Oh, thank you so much.", zh: "哦，太谢谢您了。" },
  { en: "I'll keep it somewhere special.", zh: "我会把它放在一个特别的地方。" },
  { en: "I've never felt so welcome anywhere.", zh: "我从没在哪里感到如此受欢迎。" },
  { en: "I'm coming, don't start without me!", zh: "我来了，别没我就开始！" },
  { en: "That's the brightest one yet.", zh: "这是目前为止最亮的一个。" },
  { en: "It really has been perfect.", zh: "确实是完美的一晚。" },
  { en: "What did they say?", zh: "信里写了什么？" },
  { en: "Wait, our Emma? That can't be a coincidence.", zh: "等等，我们认识的那个Emma？这不可能是巧合。" },
  { en: "I'll bring her here tomorrow.", zh: "我明天带她过来。" }
);

Object.assign(GAME_CONTENT.skillMeta, {
  festival: { label: "节日文化", labelEn: "Festivals", icon: "🧧" }
});
