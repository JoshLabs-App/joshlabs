// 内容数据层：第八十一章，紧接第八十章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人买了一台望远镜，开始在后院观星。全新词汇领域：
// 天文/望远镜/星座/流星雨。

GAME_CONTENT.scenes.push(
  {
    id: "the-new-telescope",
    transition: { en: "A telescope arrives in a large cardboard box on the porch.", zh: "一台望远镜装在一个大纸箱里送到了门廊上。" },
    title: "The New Telescope",
    subtitle: "家里 · 新望远镜",
    avatar: "🔭",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever set up a telescope before?", zh: "你以前架设过望远镜吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never set one up, but I've read the manual.", zh: "我从没架设过，不过我读过说明书了。", correct: true, xp: 10 },
          { text: "I've set up dozens of telescopes every week.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never set one up, but I've read the manual.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This lens is heavier than I expected it to be.", zh: "这个镜片比我预想的要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's be careful carrying it outside.", zh: "确实是，我们搬出去的时候要小心点。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's just toss it around.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's be careful carrying it outside.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's set it up in the backyard tonight.", zh: "我们今晚就在后院把它架起来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, the sky looks clear tonight.", zh: "好啊，今晚天空看起来很清朗。", correct: true, xp: 10 },
          { text: "Let's just leave it in the box for now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, the sky looks clear tonight.",
        next: null
      }
    }
  },
  {
    id: "finding-the-north-star",
    transition: { en: "In the backyard, they try to locate the North Star.", zh: "在后院，他们试着找到北极星。" },
    title: "Finding the North Star",
    subtitle: "后院 · 寻找北极星",
    avatar: "⭐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you spot the Big Dipper from here?", zh: "你能从这里认出北斗七星吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's right above those trees.", zh: "我能看到，就在那些树的正上方。", correct: true, xp: 10 },
          { text: "I can't see any stars from this house.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's right above those trees.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This star looks brighter than all the others tonight.", zh: "这颗星今晚看起来比其他所有的都要亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that must be the North Star.", zh: "确实是，那一定是北极星。", correct: true, xp: 10 },
          { text: "Brightness doesn't matter, let's ignore it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that must be the North Star.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sailors used to navigate by this star alone.", zh: "水手们过去仅靠这颗星来导航。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's amazing, imagine trusting just one star.", zh: "太神奇了，想象一下只靠一颗星就能信任导航。", correct: true, xp: 10 },
          { text: "That's boring, one star can't guide anyone.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's amazing, imagine trusting just one star.",
        next: null
      }
    }
  },
  {
    id: "the-telescope-view",
    transition: { en: "Through the lens, the moon's craters suddenly come into focus.", zh: "透过镜头，月球上的环形山突然变得清晰起来。" },
    title: "The Telescope View",
    subtitle: "后院 · 望远镜视野",
    avatar: "🌕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These craters look more detailed than I ever imagined.", zh: "这些环形山看起来比我曾经想象的要更加清晰。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really do, I can see every little shadow.", zh: "确实如此，每一处小阴影我都能看到。", correct: true, xp: 10 },
          { text: "They really don't, this just looks like a blur.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really do, I can see every little shadow.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Is our toddler tall enough to look through the eyepiece?", zh: "我们家孩子够高能看到目镜里吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Almost, let's lift them up for a peek.", zh: "差不多了，我们把他们抱起来看一眼吧。", correct: true, xp: 10 },
          { text: "Not at all, let's just skip it entirely.", correct: false }
        ],
        hintOnWrong: "肯定倾向回答 → Almost, let's lift them up for a peek.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Look, look, I can see the moon so close!", zh: "快看快看，我能看到月亮离得好近！" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Isn't it amazing how close it looks?", zh: "是不是很神奇它看起来这么近？", correct: true, xp: 10 },
          { text: "It's not that close, don't get excited.", correct: false }
        ],
        hintOnWrong: "呼应孩子的兴奋 → Isn't it amazing how close it looks?",
        next: null
      }
    }
  },
  {
    id: "learning-constellations",
    transition: { en: "Using an app, they try to identify constellations overhead.", zh: "他们用一个应用尝试识别头顶的星座。" },
    title: "Learning Constellations",
    subtitle: "后院 · 认识星座",
    avatar: "✨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which constellation is that bright cluster over there?", zh: "那边那一片亮亮的星群是哪个星座？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "The app says that's Orion, the hunter.", zh: "应用说那是猎户座，猎人星座。", correct: true, xp: 10 },
          { text: "It doesn't have a name at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答 → The app says that's Orion, the hunter.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This constellation is easier to spot than I expected.", zh: "这个星座比我预想的要更容易找到。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, those three stars in a line really stand out.", zh: "确实是，那三颗排成一线的星特别显眼。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just move on.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, those three stars in a line really stand out.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Ancient people told stories about these star patterns.", zh: "古人围绕这些星群图案讲述了很多故事。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "They did, I'd love to learn a few of them.", zh: "确实是，我很想学几个这样的故事。", correct: true, xp: 10 },
          { text: "They didn't, ancient people never looked up.", correct: false }
        ],
        hintOnWrong: "一般过去时回应 → They did, I'd love to learn a few of them.",
        next: null
      }
    }
  },
  {
    id: "a-shooting-star",
    transition: { en: "A sudden streak of light flashes across the sky.", zh: "一道突然的光线划过天空。" },
    title: "A Shooting Star",
    subtitle: "后院 · 一颗流星",
    avatar: "💫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you see that, it moved faster than lightning!", zh: "你看到了吗，它划过得比闪电还快！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I saw it, make a wish quickly!", zh: "我看到了，快许个愿吧！", correct: true, xp: 10 },
          { text: "I didn't see anything unusual at all.", correct: false }
        ],
        hintOnWrong: "一般过去时回应 → I saw it, make a wish quickly!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What did you wish for just now?", zh: "你刚才许了什么愿？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I wished for more nights like this one.", zh: "我许愿希望能有更多像今晚这样的夜晚。", correct: true, xp: 10 },
          { text: "I didn't wish for anything at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答过去时 → I wished for more nights like this one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we stay longer, we might see another one.", zh: "如果我们多待一会儿，也许还能再看到一颗。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we stay, I'd love to see another too.", zh: "如果我们多待，我也很想再看到一颗。", correct: true, xp: 10 },
          { text: "If we stay, nothing else will happen.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If we stay, I'd love to see another too.",
        next: null
      }
    }
  },
  {
    id: "checking-the-meteor-shower-schedule",
    transition: { en: "That week, they learn a meteor shower peaks this weekend.", zh: "那周他们得知这个周末会有一场流星雨的高峰。" },
    title: "Checking the Meteor Shower Schedule",
    subtitle: "家里 · 查看流星雨时间表",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The meteor shower will peak around midnight on Saturday.", zh: "这场流星雨会在周六午夜前后达到高峰。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We'll definitely stay up to watch that.", zh: "我们一定要熬夜看这个。", correct: true, xp: 10 },
          { text: "We'll definitely sleep straight through it.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We'll definitely stay up to watch that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we let our toddler stay up that late?", zh: "我们要不要让孩子那么晚还不睡？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Just this once, it's a rare event.", zh: "就这一次吧，这是件难得的事。", correct: true, xp: 10 },
          { text: "Never, bedtime rules can't ever bend.", correct: false }
        ],
        hintOnWrong: "折中回答 → Just this once, it's a rare event.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's bring blankets and lie in the grass together.", zh: "我们带上毯子，一起躺在草地上吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it sounds perfectly cozy.", zh: "好啊，听起来会很惬意。", correct: true, xp: 10 },
          { text: "Let's just watch it through the window instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it sounds perfectly cozy.",
        next: null
      }
    }
  },
  {
    id: "the-meteor-shower-night",
    transition: { en: "Lying on blankets, they count streaks of light overhead.", zh: "躺在毯子上，他们数着头顶划过的道道光痕。" },
    title: "The Meteor Shower Night",
    subtitle: "后院 · 流星雨之夜",
    avatar: "🌠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many have we counted so far tonight?", zh: "我们今晚到目前为止数到多少颗了？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We've counted twelve, and it's still early.", zh: "我们数到十二颗了，而且还早呢。", correct: true, xp: 10 },
          { text: "We haven't counted a single one tonight.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → We've counted twelve, and it's still early.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more meteors than I've ever seen in one night.", zh: "这是我一夜之间见过最多的流星了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, tonight was worth every minute.", zh: "确实如此，今晚每一分钟都值得。", correct: true, xp: 10 },
          { text: "It really isn't, tonight has been disappointing.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, tonight was worth every minute.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how tired we are tomorrow, this was worth it.", zh: "不管明天有多累，今晚都是值得的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how tired, I'd do this again.", zh: "不管多累，我都愿意再来一次。", correct: true, xp: 10 },
          { text: "No matter how tired, we shouldn't have come.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how tired, I'd do this again.",
        next: null
      }
    }
  },
  {
    id: "a-sleepy-drive-inside",
    transition: { en: "Well past midnight, they carry their sleepy toddler back indoors.", zh: "过了午夜很久，他们把昏昏欲睡的孩子抱回了屋里。" },
    title: "A Sleepy Drive Inside",
    subtitle: "家里 · 昏睡着抱回屋",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They fell asleep faster than I expected out there.", zh: "他们在外面睡着的速度比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They did, the fresh air must have helped.", zh: "确实是，新鲜空气一定帮了忙。", correct: true, xp: 10 },
          { text: "They didn't, they stayed awake the entire time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They did, the fresh air must have helped.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someday they'll remember this as their first meteor shower.", zh: "将来他们会记得这是自己第一次看流星雨。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, and I hope they cherish it.", zh: "会的，希望他们能珍惜这份记忆。", correct: true, xp: 10 },
          { text: "They won't, toddlers forget everything instantly.", correct: false }
        ],
        hintOnWrong: "will 表将来 → They will, and I hope they cherish it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's plan to do this again for the next shower.", zh: "我们再计划一次，等下次流星雨再来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'll set a reminder for the date.", zh: "好啊，我会为那个日期设个提醒。", correct: true, xp: 10 },
          { text: "Let's forget about it until it happens again.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'll set a reminder for the date.",
        next: null
      }
    }
  },
  {
    id: "a-star-chart-on-the-wall",
    transition: { en: "The next day, they hang a glow-in-the-dark star chart in the nursery.", zh: "第二天，他们在婴儿房挂了一张夜光星图。" },
    title: "A Star Chart on the Wall",
    subtitle: "婴儿房 · 墙上的星图",
    avatar: "🗺️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This chart will glow once the lights go off.", zh: "灯关掉之后这张图就会发光。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, they'll love falling asleep under stars.", zh: "会的，他们会喜欢在星空下入睡的。", correct: true, xp: 10 },
          { text: "It won't, this material doesn't actually glow.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, they'll love falling asleep under stars.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you find Orion on this little chart too?", zh: "你能在这张小图上也找到猎户座吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, right there next to the moon.", zh: "我能找到，就在月亮旁边。", correct: true, xp: 10 },
          { text: "I can't find any shapes on this chart.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, right there next to the moon.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will be their whole universe every night now.", zh: "从现在起这会是他们每晚的整片宇宙。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, and what a lovely one to have.", zh: "会的，能拥有这样一片天空真美好。", correct: true, xp: 10 },
          { text: "It won't, they'll ignore it completely.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, and what a lovely one to have.",
        next: null
      }
    }
  },
  {
    id: "planning-the-next-stargazing-trip",
    transition: { en: "They start researching a dark-sky park for their next trip.", zh: "他们开始研究一个暗夜公园，作为下次出游的目的地。" },
    title: "Planning the Next Stargazing Trip",
    subtitle: "家里 · 计划下次观星之旅",
    avatar: "🏕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This park is farther from city lights than anywhere nearby.", zh: "这个公园比附近任何地方都离城市灯光更远。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's perfect, the sky should be incredibly clear.", zh: "太完美了，那里的天空应该会非常清澈。", correct: true, xp: 10 },
          { text: "Distance doesn't matter, let's just stay home instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's perfect, the sky should be incredibly clear.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we camp overnight or just drive there for the evening?", zh: "我们要露营过夜，还是傍晚开车过去就行？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Let's camp, it'll make the whole trip better.", zh: "我们露营吧，这会让整趟旅程更棒。", correct: true, xp: 10 },
          { text: "Neither one, let's cancel the whole trip.", correct: false }
        ],
        hintOnWrong: "选择性回答 → Let's camp, it'll make the whole trip better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter where we go, watching the sky together is what matters.", zh: "不管我们去哪里，一起看星空才是最重要的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter where, I'll always want that with you.", zh: "不管去哪里，我都会一直想和你一起做这件事。", correct: true, xp: 10 },
          { text: "No matter where, the location is all that counts.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter where, I'll always want that with you.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "telescope", zh: "望远镜", category: "community" },
  { en: "cardboard box", zh: "纸箱", category: "community" },
  { en: "porch", zh: "门廊", category: "community" },
  { en: "set up", zh: "架设", category: "community" },
  { en: "manual", zh: "说明书", category: "community" },
  { en: "lens", zh: "镜片", category: "community" },
  { en: "backyard", zh: "后院", category: "community" },
  { en: "North Star", zh: "北极星", category: "community" },
  { en: "Big Dipper", zh: "北斗七星", category: "community" },
  { en: "sailors", zh: "水手（复数）", category: "community" },
  { en: "navigate", zh: "导航", category: "community" },
  { en: "craters", zh: "环形山（复数）", category: "community" },
  { en: "eyepiece", zh: "目镜", category: "community" },
  { en: "peek", zh: "瞥一眼", category: "community" },
  { en: "constellation", zh: "星座", category: "community" },
  { en: "cluster", zh: "星群，星团", category: "community" },
  { en: "hunter", zh: "猎人", category: "community" },
  { en: "stand out", zh: "显眼，突出", category: "community" },
  { en: "ancient", zh: "古代的", category: "community" },
  { en: "star patterns", zh: "星群图案", category: "community" },
  { en: "shooting star", zh: "流星", category: "community" },
  { en: "streak of light", zh: "一道光", category: "community" },
  { en: "lightning", zh: "闪电", category: "community" },
  { en: "make a wish", zh: "许愿", category: "community" },
  { en: "meteor shower", zh: "流星雨", category: "community" },
  { en: "peak", zh: "达到高峰", category: "community" },
  { en: "midnight", zh: "午夜", category: "community" },
  { en: "rare event", zh: "难得的事", category: "community" },
  { en: "blankets", zh: "毯子（复数）", category: "community" },
  { en: "cozy", zh: "惬意的", category: "community" },
  { en: "count", zh: "数，计数", category: "community" },
  { en: "worth it", zh: "值得的", category: "community" },
  { en: "fresh air", zh: "新鲜空气", category: "community" },
  { en: "cherish", zh: "珍惜", category: "community" },
  { en: "glow-in-the-dark", zh: "夜光的", category: "community" },
  { en: "star chart", zh: "星图", category: "community" },
  { en: "nursery", zh: "婴儿房", category: "community" },
  { en: "universe", zh: "宇宙", category: "community" },
  { en: "dark-sky park", zh: "暗夜公园", category: "community" },
  { en: "city lights", zh: "城市灯光", category: "community" },
  { en: "camp overnight", zh: "露营过夜", category: "community" }
);
