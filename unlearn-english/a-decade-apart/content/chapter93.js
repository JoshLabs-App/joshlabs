// 内容数据层：第九十三章，紧接第九十二章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人去了天文馆看穹幕电影。全新词汇领域：
// 穹顶银幕/投影仪/太阳系/星云。
// 这一章预计会让累计词汇量突破4000词，达到B2终结目标。

GAME_CONTENT.scenes.push(
  {
    id: "arriving-at-the-planetarium",
    transition: { en: "They walk into a domed building humming with quiet anticipation.", zh: "他们走进一座圆顶建筑，四周弥漫着安静的期待感。" },
    title: "Arriving at the Planetarium",
    subtitle: "天文馆 · 抵达天文馆",
    avatar: "🪐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever been inside a planetarium before?", zh: "你以前进过天文馆吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never been inside one, I'm quite curious.", zh: "我从没进去过，挺好奇的。", correct: true, xp: 10 },
          { text: "I've been inside one every single week this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never been inside one, I'm quite curious.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This dome looks bigger than any ceiling we've stood under.", zh: "这个穹顶比我们站过的任何天花板都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I wonder what it'll show us.", zh: "确实是，我很好奇它会给我们展示什么。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's just look at the floor.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I wonder what it'll show us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's find seats near the middle of the theater.", zh: "我们找靠近影厅中间的座位吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, the view should be best from there.", zh: "好主意，那里的视野应该最好。", correct: true, xp: 10 },
          { text: "Let's sit right against the back wall instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, the view should be best from there.",
        next: null
      }
    }
  },
  {
    id: "the-show-begins",
    transition: { en: "The lights dim, and stars slowly bloom across the curved screen.", zh: "灯光渐暗，星星在弯曲的银幕上慢慢绽放。" },
    title: "The Show Begins",
    subtitle: "天文馆 · 影片开始",
    avatar: "✨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This looks more real than any picture I've seen of space.", zh: "这看起来比我见过的任何太空照片都更真实。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I feel like I'm actually up there.", zh: "确实是，我感觉自己好像真的身在其中。", correct: true, xp: 10 },
          { text: "Realism doesn't matter, let's just close our eyes.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I feel like I'm actually up there.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you see how the projector fills the whole ceiling?", zh: "你能看到投影仪是怎么铺满整个穹顶的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's honestly a bit dizzying.", zh: "我能看到，说实话有点让人晕。", correct: true, xp: 10 },
          { text: "I can't see anything on the ceiling at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's honestly a bit dizzying.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This whole room is turning into outer space right now.", zh: "整个房间现在正在变成外太空。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It is, I've never seen anything like it.", zh: "确实是，我从没见过这样的场景。", correct: true, xp: 10 },
          { text: "It isn't, this still looks like a normal room.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → It is, I've never seen anything like it.",
        next: null
      }
    }
  },
  {
    id: "touring-the-solar-system",
    transition: { en: "A narrator guides them past glowing planets one by one.", zh: "一位讲解员带他们逐一飞过发光的行星。" },
    title: "Touring the Solar System",
    subtitle: "天文馆 · 太阳系巡游",
    avatar: "🌍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which planet do you think looks the most beautiful?", zh: "你觉得哪颗行星看起来最美？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Saturn, those rings are absolutely stunning.", zh: "土星吧，那些光环真是美极了。", correct: true, xp: 10 },
          { text: "None of them look interesting at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Saturn, those rings are absolutely stunning.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This planet is bigger than every other one combined.", zh: "这颗行星比其他所有行星加起来都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, Jupiter really is enormous.", zh: "确实是，木星真的太庞大了。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's skip past it quickly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, Jupiter really is enormous.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Our whole planet looks smaller than I ever imagined from here.", zh: "从这里看，我们整个星球比我曾经想象的要小得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, it puts everything into perspective.", zh: "确实是，这让人重新看待一切。", correct: true, xp: 10 },
          { text: "Size doesn't matter, Earth is still the biggest.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, it puts everything into perspective.",
        next: null
      }
    }
  },
  {
    id: "a-toddler-reaches-for-stars",
    transition: { en: "Their toddler stretches tiny hands up toward the glowing dome.", zh: "孩子伸出小手，朝着发光的穹顶够去。" },
    title: "A Toddler Reaches for Stars",
    subtitle: "天文馆 · 孩子伸手够星星",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can I touch the stars, they look so close?", zh: "我能摸到星星吗，它们看起来好近？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Not quite, but you can pretend to touch them.", zh: "还不太行，不过你可以假装摸摸看。", correct: true, xp: 10 },
          { text: "Sure, reach right through the screen and grab one.", correct: false }
        ],
        hintOnWrong: "拒绝但引导 → Not quite, but you can pretend to touch them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is the most amazed I've ever seen them look.", zh: "这是我见过他们看起来最惊叹的一次。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, this trip is worth it just for that.", zh: "确实如此，光凭这一点这趟就值了。", correct: true, xp: 10 },
          { text: "Amazement doesn't matter, let's just leave already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, this trip is worth it just for that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might be the moment they fall in love with space.", zh: "这可能就是他们爱上太空的那一刻。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It might be, wouldn't that be wonderful?", zh: "很有可能，那不是太美好了吗？", correct: true, xp: 10 },
          { text: "It can't be, kids forget things instantly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It might be, wouldn't that be wonderful?",
        next: null
      }
    }
  },
  {
    id: "the-nebula-scene",
    transition: { en: "Swirling clouds of purple and orange light fill the entire dome.", zh: "紫色和橙色的光云在整个穹顶中盘旋交织。" },
    title: "The Nebula Scene",
    subtitle: "天文馆 · 星云画面",
    avatar: "🌌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This nebula is more colorful than anything I've ever seen.", zh: "这片星云比我见过的任何东西都要绚丽。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I could watch this forever.", zh: "确实如此，我可以一直看着它。", correct: true, xp: 10 },
          { text: "Color doesn't matter, let's fast forward past it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I could watch this forever.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you know that stars are actually born inside these clouds?", zh: "你知道恒星其实是在这些云团里诞生的吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I didn't, that's a genuinely fascinating fact.", zh: "我不知道，这真是个非常有意思的知识。", correct: true, xp: 10 },
          { text: "I did, everyone already knows that fact.", correct: false }
        ],
        hintOnWrong: "否定但表兴趣 → I didn't, that's a genuinely fascinating fact.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This whole universe suddenly feels bigger than I ever realized.", zh: "整个宇宙突然感觉比我曾经意识到的要大得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, it's humbling in the best way.", zh: "确实是，这让人以最好的方式感到谦卑。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's think about something else.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, it's humbling in the best way.",
        next: null
      }
    }
  },
  {
    id: "after-the-show",
    transition: { en: "The lights slowly rise, and the theater returns to a plain ceiling.", zh: "灯光渐渐亮起，影厅恢复成了一个普通的天花板。" },
    title: "After the Show",
    subtitle: "天文馆 · 电影结束后",
    avatar: "💡",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This ceiling looks plainer now than it did during the show.", zh: "这个天花板现在看起来比放映时要朴素多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, hard to believe it's the same room.", zh: "确实是，很难相信是同一个房间。", correct: true, xp: 10 },
          { text: "Appearance doesn't matter, let's just leave right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, hard to believe it's the same room.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What was your favorite part of the whole show?", zh: "整场影片里你最喜欢哪部分？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Definitely the nebula, those colors were incredible.", zh: "绝对是星云，那些颜色太震撼了。", correct: true, xp: 10 },
          { text: "I didn't have any favorite part at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Definitely the nebula, those colors were incredible.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's visit the gift shop before we head home.", zh: "回家之前我们去礼品店看看吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I want a little souvenir.", zh: "好啊，我想买个小纪念品。", correct: true, xp: 10 },
          { text: "Let's skip the shop and just leave.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I want a little souvenir.",
        next: null
      }
    }
  },
  {
    id: "the-gift-shop-globe",
    transition: { en: "A glowing model of the solar system catches their eye in the shop.", zh: "店里一个会发光的太阳系模型吸引了他们的目光。" },
    title: "The Gift Shop Globe",
    subtitle: "礼品店 · 太阳系模型",
    avatar: "🌐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This model is more detailed than the poster we saw earlier.", zh: "这个模型比我们之前看到的海报要更精细。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, you can even see the little rings.", zh: "确实是，甚至能看到那些小光环。", correct: true, xp: 10 },
          { text: "Detail doesn't matter, let's just grab a magnet.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, you can even see the little rings.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we get this for their room at home?", zh: "我们要不要给他们的房间买这个？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, they'll love falling asleep under it.", zh: "要，他们会喜欢在它下面入睡的。", correct: true, xp: 10 },
          { text: "No, let's leave it here on the shelf.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, they'll love falling asleep under it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will remind them of today every single night.", zh: "这会让他们每晚都想起今天。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, what a lovely thing to have.", zh: "会的，能拥有这样的东西真美好。", correct: true, xp: 10 },
          { text: "It won't, they'll forget about today by tomorrow.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, what a lovely thing to have.",
        next: null
      }
    }
  },
  {
    id: "driving-home-under-real-stars",
    transition: { en: "On the drive home, real stars appear scattered across the night sky.", zh: "回家的路上，真正的星星散布在夜空中。" },
    title: "Driving Home Under Real Stars",
    subtitle: "车上 · 在真实星空下回家",
    avatar: "🌃",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These real stars look dimmer than the ones inside the dome.", zh: "这些真实的星星看起来比穹顶里那些要暗淡一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They do, but they're actually really out there.", zh: "确实是，不过它们是真的存在于那里。", correct: true, xp: 10 },
          { text: "Brightness doesn't matter, the show was fake anyway.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They do, but they're actually really out there.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you point out any constellations we learned about tonight?", zh: "你能指出今晚我们学到的任何星座吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, that group over there is Orion.", zh: "我能指出来，那边那一群就是猎户座。", correct: true, xp: 10 },
          { text: "I can't recognize any shapes up there.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, that group over there is Orion.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many times we look up, the sky never gets old.", zh: "不管我们抬头看多少次，天空都不会让人厌倦。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many times, I'll always look up.", zh: "不管多少次，我都会一直抬头看的。", correct: true, xp: 10 },
          { text: "No matter how many times, it eventually gets boring.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many times, I'll always look up.",
        next: null
      }
    }
  },
  {
    id: "hanging-the-glowing-globe",
    transition: { en: "That night, they hang the new solar system model above the crib.", zh: "那天晚上，他们把新的太阳系模型挂在了婴儿床上方。" },
    title: "Hanging the Glowing Globe",
    subtitle: "婴儿房 · 挂起发光模型",
    avatar: "🪀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This looks even better in the dark than it did in the shop.", zh: "这个在暗处看起来比在店里还要好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, the glow is so soft and calming.", zh: "确实是，光晕柔和又让人平静。", correct: true, xp: 10 },
          { text: "Looks don't matter, let's leave the lights on.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, the glow is so soft and calming.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This will be the last thing they see before sleep now.", zh: "从现在起这会是他们入睡前看到的最后一样东西。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, and what a peaceful thing to see.", zh: "会的，能看到这样平静的东西真好。", correct: true, xp: 10 },
          { text: "It won't, they never look up before sleeping.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, and what a peaceful thing to see.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This was such a full, wonder-filled day for our family.", zh: "对我们全家来说，今天真是充实又充满惊奇的一天。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really was, I'll remember today for a long time.", zh: "确实如此，我会记得今天很久很久。", correct: true, xp: 10 },
          { text: "It really wasn't, today felt pretty forgettable.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really was, I'll remember today for a long time.",
        next: null
      }
    }
  },
  {
    id: "reflecting-on-the-day",
    transition: { en: "Before bed, the couple sits together thinking about the vastness of it all.", zh: "睡前，夫妻俩坐在一起，思索着这一切的浩瀚。" },
    title: "Reflecting on the Day",
    subtitle: "家里 · 回想这一天",
    avatar: "🌠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Today made me feel smaller than I've ever felt before.", zh: "今天让我感觉自己比以往任何时候都要渺小。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Me too, but in a good, humbling way.", zh: "我也是，不过是那种很好的、让人谦卑的方式。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's not think about it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Me too, but in a good, humbling way.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have we ever talked about the universe like this before?", zh: "我们以前有像这样谈论过宇宙吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We haven't, tonight feels like a first for us.", zh: "还没有过，今晚对我们来说感觉是第一次。", correct: true, xp: 10 },
          { text: "We've talked about this every single night for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We haven't, tonight feels like a first for us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how vast the universe is, this little family feels like everything.", zh: "不管宇宙有多浩瀚，这个小家对我来说就是一切。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how vast, you and our child are my whole world.", zh: "不管有多浩瀚，你和我们的孩子就是我的整个世界。", correct: true, xp: 10 },
          { text: "No matter how vast, our little family barely matters.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how vast, you and our child are my whole world.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "planetarium", zh: "天文馆", category: "community" },
  { en: "domed", zh: "圆顶的", category: "community" },
  { en: "anticipation", zh: "期待", category: "community" },
  { en: "dome", zh: "穹顶", category: "community" },
  { en: "theater", zh: "影厅，剧场", category: "community" },
  { en: "bloom", zh: "绽放", category: "community" },
  { en: "curved screen", zh: "弯曲的银幕", category: "community" },
  { en: "projector", zh: "投影仪", category: "community" },
  { en: "dizzying", zh: "让人晕眩的", category: "community" },
  { en: "outer space", zh: "外太空", category: "community" },
  { en: "narrator", zh: "讲解员，旁白", category: "community" },
  { en: "solar system", zh: "太阳系", category: "community" },
  { en: "rings", zh: "光环（复数）", category: "community" },
  { en: "stunning", zh: "美极了的", category: "community" },
  { en: "enormous", zh: "庞大的", category: "community" },
  { en: "perspective", zh: "视角，看待方式", category: "community" },
  { en: "amazed", zh: "惊叹的", category: "community" },
  { en: "nebula", zh: "星云", category: "community" },
  { en: "swirling", zh: "盘旋的", category: "community" },
  { en: "fascinating", zh: "极有趣的", category: "community" },
  { en: "humbling", zh: "让人谦卑的", category: "community" },
  { en: "plainer", zh: "更朴素的", category: "community" },
  { en: "poster", zh: "海报", category: "community" },
  { en: "magnet", zh: "磁铁", category: "community" },
  { en: "scattered", zh: "散布的", category: "community" },
  { en: "dimmer", zh: "更暗淡的", category: "community" },
  { en: "crib", zh: "婴儿床", category: "community" },
  { en: "glow", zh: "光晕", category: "community" },
  { en: "vastness", zh: "浩瀚", category: "community" },
  { en: "vast", zh: "浩瀚的", category: "community" }
);
