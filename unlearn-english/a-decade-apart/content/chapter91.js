// 内容数据层：第九十一章，紧接第九十章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人去了一家桌游咖啡馆度过夜晚。全新词汇领域：
// 桌游/骰子/规则说明/策略。

GAME_CONTENT.scenes.push(
  {
    id: "entering-the-board-game-cafe",
    transition: { en: "Shelves of colorful board games line every wall of the cozy café.", zh: "一排排色彩缤纷的桌游摆满了这家温馨咖啡馆的每面墙。" },
    title: "Entering the Board Game Café",
    subtitle: "桌游咖啡馆 · 走进咖啡馆",
    avatar: "🎲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever seen this many games in one place?", zh: "你以前有在一个地方见过这么多游戏吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never seen this many, it's overwhelming.", zh: "我从没见过这么多，简直让人应接不暇。", correct: true, xp: 10 },
          { text: "I've seen this many games every single day.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never seen this many, it's overwhelming.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This selection looks bigger than any store we've visited.", zh: "这个选择范围比我们去过的任何店都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, we might be here for hours.", zh: "确实是，我们可能要在这待好几个小时了。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's just grab the first box.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, we might be here for hours.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's ask the staff for a beginner recommendation.", zh: "我们问问店员推荐个适合新手的游戏吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, they'll know what's easiest.", zh: "好主意，他们会知道哪个最简单。", correct: true, xp: 10 },
          { text: "Let's just grab the hardest game on the shelf.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, they'll know what's easiest.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-game",
    transition: { en: "A friendly staff member suggests a light strategy game for families.", zh: "一位友善的店员推荐了一款适合家庭的轻策略游戏。" },
    title: "Choosing a Game",
    subtitle: "桌游咖啡馆 · 挑选游戏",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which game sounds more fun to you, this one or that one?", zh: "这个和那个，你觉得哪个听起来更有趣？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "This one, the artwork looks really charming.", zh: "这个吧，画风看起来特别有魅力。", correct: true, xp: 10 },
          { text: "Neither one sounds interesting at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → This one, the artwork looks really charming.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This box is heavier than I expected for a card game.", zh: "以一款卡牌游戏来说，这盒子比我预想的要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, there must be a lot of pieces.", zh: "确实是，里面一定有很多配件。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's just pick randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, there must be a lot of pieces.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's read the rules together before we start.", zh: "开始之前我们一起读一下规则吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, no one likes learning mid-game.", zh: "好主意，没人喜欢一边玩一边现学规则。", correct: true, xp: 10 },
          { text: "Let's just start playing without reading anything.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, no one likes learning mid-game.",
        next: null
      }
    }
  },
  {
    id: "learning-the-rules",
    transition: { en: "They spread out cards, tokens, and a small rulebook on the table.", zh: "他们把卡牌、代币和一本小规则书摊在了桌上。" },
    title: "Learning the Rules",
    subtitle: "桌游咖啡馆 · 学习规则",
    avatar: "📖",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These rules are trickier to understand than I expected.", zh: "这些规则比我预想的要更难理解。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, let's go through them slowly.", zh: "确实是，我们慢慢读一遍吧。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just guess how to play.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, let's go through them slowly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you explain how the scoring works again?", zh: "你能再解释一下计分是怎么运作的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me walk through it step by step.", zh: "我能解释，让我一步一步讲一遍。", correct: true, xp: 10 },
          { text: "I can't explain anything about this game.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me walk through it step by step.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once we understand this, the rest will be easy.", zh: "一旦我们理解了这个，剩下的就简单了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, I think we're almost there.", zh: "会的，我觉得我们快弄懂了。", correct: true, xp: 10 },
          { text: "It won't, this game will only get harder.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, I think we're almost there.",
        next: null
      }
    }
  },
  {
    id: "rolling-the-dice",
    transition: { en: "The game finally begins as they roll colorful dice across the table.", zh: "他们把彩色骰子掷向桌面，游戏终于开始了。" },
    title: "Rolling the Dice",
    subtitle: "桌游咖啡馆 · 掷骰子",
    avatar: "🎲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This roll is luckier than any I've had all night.", zh: "这次掷骰比我今晚掷过的任何一次都要幸运。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that's exactly the number I needed.", zh: "确实是，正好是我需要的那个数字。", correct: true, xp: 10 },
          { text: "Luck doesn't matter, let's just skip this turn.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that's exactly the number I needed.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you move your piece four spaces forward?", zh: "你能把你的棋子往前移四格吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me count them carefully.", zh: "我能移，让我仔细数一下。", correct: true, xp: 10 },
          { text: "I can't move any pieces on this board.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me count them carefully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Their toddler is getting more excited with every roll.", zh: "每掷一次骰子，孩子就更兴奋一分。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, dice are apparently the best part.", zh: "确实是，骰子显然是最有趣的部分。", correct: true, xp: 10 },
          { text: "Excitement doesn't matter, let's take the dice away.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, dice are apparently the best part.",
        next: null
      }
    }
  },
  {
    id: "a-strategic-decision",
    transition: { en: "Midway through, a tricky choice forces careful strategic thinking.", zh: "游戏进行到一半，一个棘手的选择需要仔细思考策略。" },
    title: "A Strategic Decision",
    subtitle: "桌游咖啡馆 · 策略抉择",
    avatar: "🧠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This decision matters more than any move so far.", zh: "这个决定比目前为止任何一步都要重要。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's think this through carefully.", zh: "确实是，我们要仔细考虑一下。", correct: true, xp: 10 },
          { text: "Importance doesn't matter, let's just pick randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's think this through carefully.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we take this path, we could win faster.", zh: "如果我们走这条路，可能会赢得更快。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's take the risk.", zh: "如果确实如此，我们就冒这个险吧。", correct: true, xp: 10 },
          { text: "If that's true, let's play it safe instead.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If that's true, let's take the risk.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This game is more strategic than I gave it credit for.", zh: "这游戏比我最初想的要更有策略性。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I'm impressed with how deep it goes.", zh: "确实是，我对它的深度挺佩服的。", correct: true, xp: 10 },
          { text: "Strategy doesn't matter, this is basically luck.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I'm impressed with how deep it goes.",
        next: null
      }
    }
  },
  {
    id: "the-toddler-wants-to-play",
    transition: { en: "Their curious toddler insists on rolling the dice for everyone.", zh: "好奇的孩子坚持要替大家掷骰子。" },
    title: "The Toddler Wants to Play",
    subtitle: "桌游咖啡馆 · 孩子也想玩",
    avatar: "🧒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can I roll the dice for you this time, please?", zh: "这次我能替你掷骰子吗，拜托？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "You can, go ahead and give it a good shake.", zh: "可以，你摇一下再掷吧。", correct: true, xp: 10 },
          { text: "No, dice are never allowed near you.", correct: false }
        ],
        hintOnWrong: "允许并鼓励 → You can, go ahead and give it a good shake.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look, they rolled a higher number than I did!", zh: "看，他们掷出的数字比我的还要高！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They did, they might just be a lucky charm.", zh: "确实是，他们可能就是幸运符。", correct: true, xp: 10 },
          { text: "Numbers don't matter, let's ignore that roll.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They did, they might just be a lucky charm.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make them the official dice roller from now on.", zh: "从现在起我们就让他们当官方掷骰手吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, they clearly love the job.", zh: "好啊，他们显然很喜欢这份工作。", correct: true, xp: 10 },
          { text: "Let's take that responsibility away from them.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, they clearly love the job.",
        next: null
      }
    }
  },
  {
    id: "a-close-finish",
    transition: { en: "As the game nears its end, the scores turn out surprisingly close.", zh: "游戏接近尾声，分数意外地十分接近。" },
    title: "A Close Finish",
    subtitle: "桌游咖啡馆 · 接近的结局",
    avatar: "🏁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This score is closer than any game we've played tonight.", zh: "这个比分比我们今晚玩的任何一局都要接近。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, this could really go either way.", zh: "确实是，这局真的谁赢都有可能。", correct: true, xp: 10 },
          { text: "Score doesn't matter, let's just stop playing now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, this could really go either way.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Who do you think is going to win this round?", zh: "你觉得这一局谁会赢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Honestly, I have no idea, it's that close.", zh: "说实话，我完全猜不出来，就是这么接近。", correct: true, xp: 10 },
          { text: "No one is going to win this game.", correct: false }
        ],
        hintOnWrong: "wh-问题回答 → Honestly, I have no idea, it's that close.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This last turn will decide the whole game.", zh: "最后这一轮会决定整局游戏。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, no pressure at all, right?", zh: "确实会，一点压力都没有，对吧？", correct: true, xp: 10 },
          { text: "It won't, the result was already decided.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, no pressure at all, right?",
        next: null
      }
    }
  },
  {
    id: "the-final-round",
    transition: { en: "Everyone leans in as the final scores are tallied on paper.", zh: "大家都凑上前，看着最后的分数被记在纸上。" },
    title: "The Final Round",
    subtitle: "桌游咖啡馆 · 最后一轮",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you count that correctly, can you check again?", zh: "你数对了吗，能再检查一遍吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me recount just to be sure.", zh: "我能再检查，让我重新数一遍确保没错。", correct: true, xp: 10 },
          { text: "I can't count anything on this table.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me recount just to be sure.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We won by only two points, that's incredible!", zh: "我们只赢了两分，太不可思议了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did, that was such a close game.", zh: "确实是，这局真的太接近了。", correct: true, xp: 10 },
          { text: "We didn't win anything at all tonight.", correct: false }
        ],
        hintOnWrong: "一般过去时回应 → We did, that was such a close game.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This was more fun than any game night we've had.", zh: "这比我们之前任何一次游戏之夜都更好玩。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really was, let's make this a regular thing.", zh: "确实如此，我们把这变成常规活动吧。", correct: true, xp: 10 },
          { text: "It really wasn't, I found tonight pretty boring.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really was, let's make this a regular thing.",
        next: null
      }
    }
  },
  {
    id: "browsing-for-next-time",
    transition: { en: "Before leaving, they browse the shelves for a game to try next.", zh: "离开前，他们浏览了货架，寻找下次想玩的游戏。" },
    title: "Browsing for Next Time",
    subtitle: "桌游咖啡馆 · 为下次挑选",
    avatar: "🛍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which game should we try on our next visit?", zh: "我们下次来该试试哪个游戏？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe this cooperative one, working together sounds fun.", zh: "也许试试这个合作类的，一起合作听起来挺有趣。", correct: true, xp: 10 },
          { text: "We shouldn't try any new games ever again.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Maybe this cooperative one, working together sounds fun.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This box looks more complex than the one we just played.", zh: "这盒子看起来比我们刚玩的那个更复杂。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but we'll grow into it eventually.", zh: "确实是，不过我们最终会慢慢适应的。", correct: true, xp: 10 },
          { text: "Complexity doesn't matter, let's avoid it forever.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but we'll grow into it eventually.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make family game night a weekly tradition now.", zh: "我们把家庭游戏之夜变成每周的传统吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, tonight was too good to be rare.", zh: "好啊，今晚太棒了，不该只是偶尔一次。", correct: true, xp: 10 },
          { text: "Let's never do this again after tonight.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, tonight was too good to be rare.",
        next: null
      }
    }
  },
  {
    id: "driving-home-happy",
    transition: { en: "In the car, their toddler chatters about winning the dice roll.", zh: "在车上，孩子叽叽喳喳地说着自己掷骰子赢的事。" },
    title: "Driving Home Happy",
    subtitle: "车上 · 开心地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're talking faster than they have all week!", zh: "他们说话的速度比这周任何时候都要快！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, tonight really got them excited.", zh: "确实是，今晚真的让他们很兴奋。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's tell them to be quiet.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, tonight really got them excited.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someday they'll remember this as their first board game.", zh: "将来他们会记得这是自己第一次玩桌游。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, and I hope they always love games.", zh: "会的，希望他们能一直喜欢游戏。", correct: true, xp: 10 },
          { text: "They won't, toddlers forget everything instantly.", correct: false }
        ],
        hintOnWrong: "will 表将来 → They will, and I hope they always love games.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many game nights we have, tonight will stay special.", zh: "不管我们有多少个游戏之夜，今晚都会一直特别。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many, I'll always remember tonight.", zh: "不管有多少个，我都会一直记得今晚。", correct: true, xp: 10 },
          { text: "No matter how many, tonight wasn't anything special.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many, I'll always remember tonight.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "board game", zh: "桌游", category: "community" },
  { en: "shelves", zh: "货架（复数）", category: "community" },
  { en: "overwhelming", zh: "让人应接不暇的", category: "community" },
  { en: "selection", zh: "选择范围", category: "community" },
  { en: "staff", zh: "店员，员工", category: "community" },
  { en: "recommendation", zh: "推荐", category: "community" },
  { en: "strategy game", zh: "策略游戏", category: "community" },
  { en: "artwork", zh: "画风，美术设计", category: "community" },
  { en: "charming", zh: "有魅力的", category: "community" },
  { en: "pieces", zh: "配件（复数）", category: "community" },
  { en: "rulebook", zh: "规则书", category: "community" },
  { en: "tokens", zh: "代币（复数）", category: "community" },
  { en: "scoring", zh: "计分", category: "community" },
  { en: "step by step", zh: "一步一步地", category: "community" },
  { en: "dice", zh: "骰子", category: "community" },
  { en: "luckier", zh: "更幸运的", category: "community" },
  { en: "spaces", zh: "格子（复数，棋盘用语）", category: "community" },
  { en: "strategic", zh: "有策略性的", category: "community" },
  { en: "path", zh: "路径", category: "community" },
  { en: "risk", zh: "风险", category: "community" },
  { en: "play it safe", zh: "求稳，稳妥行事", category: "community" },
  { en: "gave it credit for", zh: "低估了（反用表达）", category: "community" },
  { en: "shake", zh: "摇动", category: "community" },
  { en: "lucky charm", zh: "幸运符", category: "community" },
  { en: "official", zh: "官方的", category: "community" },
  { en: "close", zh: "接近的（比分）", category: "community" },
  { en: "tallied", zh: "被计算，被统计", category: "community" },
  { en: "recount", zh: "重新数", category: "community" },
  { en: "cooperative", zh: "合作类的", category: "community" },
  { en: "complex", zh: "复杂的", category: "community" }
);
