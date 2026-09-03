// 内容数据层：第七十五章，紧接第七十四章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一群朋友聚会去玩飞斧，庆祝滑雪之旅成功。全新词汇领域：
// 安全讲解/靶心/投掷技巧/记分。

GAME_CONTENT.scenes.push(
  {
    id: "booking-axe-throwing",
    transition: { en: "Friends suggest axe throwing as their next group outing.", zh: "朋友们提议把飞斧作为下一次聚会活动。" },
    title: "Booking Axe Throwing",
    subtitle: "群聊 · 预约飞斧",
    avatar: "🪓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has anyone here actually thrown an axe before?", zh: "这里有人真的投过飞斧吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never thrown one, but I'm curious.", zh: "我从没投过，不过挺好奇的。", correct: true, xp: 10 },
          { text: "I've thrown axes competitively for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never thrown one, but I'm curious.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This place gives a full safety briefing before you start.", zh: "这家店在开始前会给一次完整的安全讲解。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, safety first, always.", zh: "这让人安心，安全永远第一。", correct: true, xp: 10 },
          { text: "That's boring, let's skip the safety part.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, safety first, always.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book a lane for six people this Saturday.", zh: "我们订一个能容纳六人的场地，就这周六吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this could be a lot of fun.", zh: "好啊，这可能会很好玩。", correct: true, xp: 10 },
          { text: "Let's wait a few more months to decide.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'll book it right now.",
        next: null
      }
    }
  },
  {
    id: "the-safety-briefing",
    transition: { en: "A staff member walks the group through the safety rules.", zh: "一位工作人员向大家讲解了安全规则。" },
    title: "The Safety Briefing",
    subtitle: "飞斧馆 · 安全讲解",
    avatar: "🦺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please never step past this line when someone is throwing.", zh: "有人在投掷时，请千万不要越过这条线。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Understood, I'll always stay well behind it.", zh: "明白了，我会一直待在线后面的。", correct: true, xp: 10 },
          { text: "Sorry, that line seems unnecessary to follow.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Understood, I'll always stay well behind it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This axe is heavier than I expected it to be.", zh: "这把斧头比我预想的要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I'll need both hands for this.", zh: "确实是，我这次要用两只手了。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's just throw it fast.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I'll need both hands for this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Always wait for a clear signal before retrieving your axe.", zh: "取回你的斧头前一定要等待明确的信号。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, I'll wait for the all-clear.", zh: "明白了，我会等待安全信号的。", correct: true, xp: 10 },
          { text: "Sorry, I'd rather just grab it whenever.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, I'll wait for the all-clear.",
        next: null
      }
    }
  },
  {
    id: "the-first-throw",
    transition: { en: "The first attempt sails wide, missing the target entirely.", zh: "第一次投掷偏得很远，完全没打中靶。" },
    title: "The First Throw",
    subtitle: "飞斧馆 · 首次投掷",
    avatar: "🎯",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That went completely wide of the target!", zh: "那一斧完全偏离靶子了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It did, my aim needs a lot of work.", zh: "确实是，我的瞄准需要好好练一练。", correct: true, xp: 10 },
          { text: "It didn't, that landed right in the center.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It did, my aim needs a lot of work.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is harder than it looks in the videos.", zh: "这比视频里看起来要难得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, let's just keep practicing.", zh: "确实如此，我们继续多练几次吧。", correct: true, xp: 10 },
          { text: "It really isn't, this feels completely simple.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, let's just keep practicing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Keep your eyes on the target, not on the axe.", zh: "眼睛要盯着靶子，不要盯着斧头。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'll focus on the target this time.", zh: "好的，这次我会盯着靶子。", correct: true, xp: 10 },
          { text: "Sorry, I'd rather just close my eyes entirely.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'll focus on the target this time.",
        next: null
      }
    }
  },
  {
    id: "improving-the-throw",
    transition: { en: "After a few tries, the throws start landing closer to the board.", zh: "试了几次后，投掷开始更靠近靶板了。" },
    title: "Improving the Throw",
    subtitle: "飞斧馆 · 逐渐进步",
    avatar: "🪓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That one actually stuck in the wood!", zh: "那一斧真的钉进木头里了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It did, that felt really satisfying.", zh: "确实是，那种感觉真的很有成就感。", correct: true, xp: 10 },
          { text: "It didn't, that bounced off completely.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It did, that felt really satisfying.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your form is looking more consistent than it was earlier.", zh: "你的动作比刚才要稳定多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, I think I finally found a rhythm.", zh: "谢谢，我觉得我终于找到节奏了。", correct: true, xp: 10 },
          { text: "Thanks, though nothing has changed at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, I think I finally found a rhythm.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's each take five more throws before we score.", zh: "计分之前我们每人再投五次吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, more practice can only help.", zh: "好啊，多练习总没坏处。", correct: true, xp: 10 },
          { text: "Let's just start scoring right away instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, more practice can only help.",
        next: null
      }
    }
  },
  {
    id: "hitting-the-bullseye",
    transition: { en: "A surprise throw lands dead center for the first time.", zh: "一次意外的投掷第一次正中靶心。" },
    title: "Hitting the Bullseye",
    subtitle: "飞斧馆 · 正中靶心",
    avatar: "🎯",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I actually hit the bullseye, I can't believe it!", zh: "我居然正中靶心了，简直不敢相信！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "You did it, that was an amazing throw!", zh: "你做到了，那一投太厉害了！", correct: true, xp: 10 },
          { text: "You didn't, that hit the very edge.", correct: false }
        ],
        hintOnWrong: "过去时回应 → You did it, that was an amazing throw!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That felt more like luck than actual skill, honestly.", zh: "说实话，那感觉更像是运气，不是真本事。", },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Maybe, but I'll take it either way!", zh: "也许吧，但不管怎样我都收下这次成功！", correct: true, xp: 10 },
          { text: "That's true, skill has nothing to do with it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Maybe, but I'll take it either way!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's see if you can do that again.", zh: "我们看看你能不能再做到一次。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's find out, no pressure at all.", zh: "试试看吧，完全没压力。", correct: true, xp: 10 },
          { text: "Let's not risk it, I'll quit while I'm ahead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's find out, no pressure at all.",
        next: null
      }
    }
  },
  {
    id: "friendly-competition",
    transition: { en: "The group turns their session into a lighthearted tournament.", zh: "大家把这次活动变成了一场轻松的小比赛。" },
    title: "Friendly Competition",
    subtitle: "飞斧馆 · 友好的比赛",
    avatar: "🏆",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we keep score for the rest of the session?", zh: "剩下的时间我们要记分吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's make this a friendly little contest.", zh: "好啊，我们把这变成一场友好的小比赛吧。", correct: true, xp: 10 },
          { text: "No, scores would just ruin all the fun.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's make this a friendly little contest.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You're doing better than everyone else right now.", zh: "你现在的表现比其他所有人都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's just beginner's luck, honestly.", zh: "这只是新手运气罢了，说实话。", correct: true, xp: 10 },
          { text: "That's expected, I'm clearly the best here.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's just beginner's luck, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is more fun than I expected friendly competition to be.", zh: "这次友好比赛比我预想的要有趣得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, this whole night has been a blast.", zh: "确实如此，整晚都玩得很开心。", correct: true, xp: 10 },
          { text: "It really isn't, competition always feels tense.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, this whole night has been a blast.",
        next: null
      }
    }
  },
  {
    id: "the-final-round",
    transition: { en: "The final round comes down to two close competitors.", zh: "最后一轮比赛落在了两位势均力敌的选手之间。" },
    title: "The Final Round",
    subtitle: "飞斧馆 · 最后一轮",
    avatar: "🔥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This score is closer than any round we've had tonight.", zh: "这个比分比今晚任何一轮都要接近。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, every throw counts now.", zh: "确实是，现在每一投都很重要。", correct: true, xp: 10 },
          { text: "It isn't, this round isn't close at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, every throw counts now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "No matter who wins, this was still an amazing night.", zh: "不管谁赢，今晚都还是很棒的一晚。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter who wins, I agree completely.", zh: "不管谁赢，我完全同意。", correct: true, xp: 10 },
          { text: "No matter who wins, winning is all that matters.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter who wins, I agree completely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's it, we finally have our winner!", zh: "结束了，我们终于有优胜者了！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Congratulations, that was well deserved.", zh: "恭喜，这是你应得的。", correct: true, xp: 10 },
          { text: "That's disappointing, the result feels unfair.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Congratulations, that was well deserved.",
        next: null
      }
    }
  },
  {
    id: "trading-stories",
    transition: { en: "Over food afterward, everyone shares their favorite moment of the night.", zh: "赛后大家一起吃东西，分享今晚各自最喜欢的瞬间。" },
    title: "Trading Stories",
    subtitle: "餐厅 · 分享故事",
    avatar: "🍕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What was your favorite moment from tonight?", zh: "今晚你最喜欢的瞬间是什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Definitely that surprise bullseye earlier.", zh: "肯定是之前那次意外的靶心。", correct: true, xp: 10 },
          { text: "Nothing tonight was memorable, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答经历 → Definitely that surprise bullseye earlier.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We laughed more tonight than we have in months.", zh: "今晚我们笑的次数比过去几个月都多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really did, this group makes everything fun.", zh: "确实如此，这个团体让一切都变得有趣。", correct: true, xp: 10 },
          { text: "We really didn't, tonight felt pretty quiet.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really did, this group makes everything fun.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's plan another activity like this again soon.", zh: "我们尽快再计划一次这样的活动吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, maybe archery next time.", zh: "好啊，下次也许可以玩射箭。", correct: true, xp: 10 },
          { text: "Let's not, once was more than enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, maybe archery next time.",
        next: null
      }
    }
  },
  {
    id: "driving-home-satisfied",
    transition: { en: "Driving home, they feel pleasantly worn out from the whole evening.", zh: "开车回家的路上，他们感到一种整晚下来令人愉悦的疲惫。" },
    title: "Driving Home Satisfied",
    subtitle: "车上 · 满足地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Tonight was more fun than I ever expected axe throwing to be.", zh: "今晚比我曾经想象的飞斧活动要有趣得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really was, we should try this again soon.", zh: "确实如此，我们应该尽快再试一次。", correct: true, xp: 10 },
          { text: "It really wasn't, tonight felt pretty forgettable.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really was, we should try this again soon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I love how our group always finds something fun to try.", zh: "我很喜欢我们这群人总能找到有趣的事情尝试。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, that's honestly what I love most about them.", zh: "我也是，说实话这正是我最喜欢他们的一点。", correct: true, xp: 10 },
          { text: "Me too, though most activities are pretty boring.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, that's honestly what I love most about them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what we try next, let's keep making these memories.", zh: "不管我们下次尝试什么，都要继续创造这样的回忆。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, these nights are always worth it.", zh: "不管是什么，这样的夜晚永远都值得。", correct: true, xp: 10 },
          { text: "No matter what, we'll probably stop doing this.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, these nights are always worth it.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "axe throwing", zh: "飞斧", category: "community" },
  { en: "group outing", zh: "团体聚会", category: "community" },
  { en: "safety briefing", zh: "安全讲解", category: "community" },
  { en: "lane", zh: "场地，赛道", category: "community" },
  { en: "staff member", zh: "工作人员", category: "community" },
  { en: "step past", zh: "越过", category: "community" },
  { en: "well behind", zh: "远远落后于（此处指线后）", category: "community" },
  { en: "heavier", zh: "更重的（heavy 比较级）", category: "community" },
  { en: "both hands", zh: "双手", category: "community" },
  { en: "clear signal", zh: "明确的信号", category: "community" },
  { en: "retrieving", zh: "取回", category: "community" },
  { en: "all-clear", zh: "安全信号", category: "community" },
  { en: "sails wide", zh: "偏得很远", category: "community" },
  { en: "target", zh: "靶子", category: "community" },
  { en: "aim", zh: "瞄准", category: "community" },
  { en: "keep your eyes on", zh: "眼睛盯着", category: "community" },
  { en: "stuck", zh: "钉进了", category: "community" },
  { en: "bounced off", zh: "弹开了", category: "community" },
  { en: "form", zh: "动作姿势", category: "community" },
  { en: "consistent", zh: "稳定的", category: "community" },
  { en: "score", zh: "计分", category: "community" },
  { en: "bullseye", zh: "靶心", category: "community" },
  { en: "dead center", zh: "正中心", category: "community" },
  { en: "edge", zh: "边缘", category: "community" },
  { en: "luck", zh: "运气", category: "community" },
  { en: "skill", zh: "技巧，本事", category: "community" },
  { en: "either way", zh: "不管怎样", category: "community" },
  { en: "no pressure", zh: "没有压力", category: "community" },
  { en: "quit while I'm ahead", zh: "见好就收", category: "community" },
  { en: "keep score", zh: "记分", category: "community" },
  { en: "friendly contest", zh: "友好的比赛", category: "community" },
  { en: "beginner's luck", zh: "新手运气", category: "community" },
  { en: "a blast", zh: "非常愉快的经历", category: "community" },
  { en: "tense", zh: "紧张的", category: "community" },
  { en: "final round", zh: "最后一轮", category: "community" },
  { en: "counts", zh: "算数，重要", category: "community" },
  { en: "well deserved", zh: "应得的", category: "community" },
  { en: "unfair", zh: "不公平的", category: "community" },
  { en: "favorite moment", zh: "最喜欢的瞬间", category: "community" },
  { en: "memorable", zh: "难忘的", category: "community" },
  { en: "archery", zh: "射箭", category: "community" },
  { en: "pleasantly worn out", zh: "令人愉悦的疲惫", category: "community" },
  { en: "forgettable", zh: "容易被遗忘的", category: "community" }
);

