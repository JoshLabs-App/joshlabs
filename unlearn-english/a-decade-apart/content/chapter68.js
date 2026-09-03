// 内容数据层：第六十八章，紧接第六十七章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人和朋友们一起去玩密室逃脱，庆祝一次小小的团聚。全新词汇领域：
// 解谜线索/密码锁/团队分工/倒计时。

GAME_CONTENT.scenes.push(
  {
    id: "planning-the-outing",
    transition: { en: "A group of old friends plans a night out at an escape room.", zh: "一群老朋友计划去密室逃脱玩一晚上。" },
    title: "Planning the Outing",
    subtitle: "群聊 · 计划外出",
    avatar: "🔐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has anyone here done an escape room before?", zh: "这里有人玩过密室逃脱吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've done one, years ago with coworkers.", zh: "我几年前和同事玩过一次。", correct: true, xp: 10 },
          { text: "I've never once heard of escape rooms before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've done one, years ago with coworkers.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This one has a mystery theme with a sixty-minute limit.", zh: "这一间是悬疑主题，限时六十分钟。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds thrilling, let's book six spots.", zh: "听起来很刺激，我们订六个位子吧。", correct: true, xp: 10 },
          { text: "That sounds boring, let's skip that theme.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds thrilling, let's book six spots.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab dinner beforehand too.", zh: "我们提前一起去吃个晚饭吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it'll make the whole night special.", zh: "好啊，这样能让整个晚上更特别。", correct: true, xp: 10 },
          { text: "Let's skip dinner and just show up hungry.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it'll make the whole night special.",
        next: null
      }
    }
  },
  {
    id: "arriving-at-the-venue",
    transition: { en: "The group arrives at a dimly lit escape room lobby.", zh: "大家抵达了灯光昏暗的密室逃脱大堂。" },
    title: "Arriving at the Venue",
    subtitle: "密室逃脱馆 · 抵达现场",
    avatar: "🕵️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This place feels spookier than I expected already.", zh: "这地方比我预想的还要更阴森一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I love the atmosphere already.", zh: "确实是，我已经很喜欢这种氛围了。", correct: true, xp: 10 },
          { text: "It doesn't, this feels perfectly ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I love the atmosphere already.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You'll have sixty minutes once the door locks.", zh: "门锁上之后，你们有六十分钟时间。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Got it, we'll try to use every minute wisely.", zh: "明白了，我们会尽量善用每一分钟。", correct: true, xp: 10 },
          { text: "Got it, though sixty minutes should be plenty extra.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Got it, we'll try to use every minute wisely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's split into pairs to search different corners.", zh: "我们分成两人一组，分头搜索不同的角落吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's cover more ground that way.", zh: "好主意，这样能覆盖更多区域。", correct: true, xp: 10 },
          { text: "Let's just all stand in one corner together.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's cover more ground that way.",
        next: null
      }
    }
  },
  {
    id: "the-first-clue",
    transition: { en: "A hidden clue appears behind a bookshelf almost immediately.", zh: "一条隐藏线索几乎立刻就出现在了书架后面。" },
    title: "The First Clue",
    subtitle: "密室 · 第一条线索",
    avatar: "🔍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you read what's written on this piece of paper?", zh: "你能读出这张纸上写的是什么吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's a series of numbers.", zh: "可以，是一串数字。", correct: true, xp: 10 },
          { text: "I can't, the writing is completely invisible.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's a series of numbers.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This clue is trickier than I expected right off the bat.", zh: "这条线索一开始就比我预想的更棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's look at it from another angle.", zh: "确实是，我们换个角度看看吧。", correct: true, xp: 10 },
          { text: "It isn't, this seems way too obvious.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's look at it from another angle.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's write down every number we find.", zh: "我们找到的每一个数字都记下来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's keep track on this notepad.", zh: "好主意，我们用这个记事本记下来。", correct: true, xp: 10 },
          { text: "Let's just try to remember everything by heart.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's keep track on this notepad.",
        next: null
      }
    }
  },
  {
    id: "the-locked-drawer",
    transition: { en: "A locked drawer with a number pad blocks their next move.", zh: "一个带密码锁的抽屉挡住了他们的下一步。" },
    title: "The Locked Drawer",
    subtitle: "密室 · 上锁的抽屉",
    avatar: "🔒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What number should we try on this lock?", zh: "我们应该在这把锁上试哪个数字？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's try the numbers we found earlier.", zh: "我们试试刚才找到的那些数字吧。", correct: true, xp: 10 },
          { text: "Numbers don't matter, let's just guess randomly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's try the numbers we found earlier.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That combination is wrong, but we're closer than before.", zh: "这个组合是错的，但我们比之前更接近了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's rearrange the numbers and try again.", zh: "我们把数字重新排列一下再试试吧。", correct: true, xp: 10 },
          { text: "Let's just give up on this drawer entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's rearrange the numbers and try again.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It clicked, we actually got it open!", zh: "咔哒一声，我们真的把它打开了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, that felt incredibly satisfying.", zh: "我们做到了，感觉太有成就感了。", correct: true, xp: 10 },
          { text: "We didn't, that lock is still completely stuck.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, that felt incredibly satisfying.",
        next: null
      }
    }
  },
  {
    id: "teamwork-under-pressure",
    transition: { en: "With the clock ticking, everyone works faster together.", zh: "随着时间流逝，大家一起加快了速度。" },
    title: "Teamwork Under Pressure",
    subtitle: "密室 · 高压下的团队合作",
    avatar: "⏱️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We're working better together than I expected.", zh: "我们合作得比我预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really are, everyone's contributing something.", zh: "确实如此，每个人都在贡献力量。", correct: true, xp: 10 },
          { text: "We really aren't, everyone's working alone here.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really are, everyone's contributing something.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more stressful with the timer counting down.", zh: "看着计时器倒数，感觉压力更大了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but the pressure is honestly kind of fun.", zh: "确实是，但说实话这种压力挺有意思的。", correct: true, xp: 10 },
          { text: "It isn't, the timer doesn't bother me at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but the pressure is honestly kind of fun.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's check in with the other group for updates.", zh: "我们跟另一组核对一下进展吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's shout over and compare notes.", zh: "好主意，我们喊过去比对一下线索吧。", correct: true, xp: 10 },
          { text: "Let's just ignore the other group entirely.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's shout over and compare notes.",
        next: null
      }
    }
  },
  {
    id: "a-tricky-puzzle",
    transition: { en: "One puzzle stumps the whole group for several long minutes.", zh: "有一道谜题让全组人卡了好几分钟。" },
    title: "A Tricky Puzzle",
    subtitle: "密室 · 棘手的谜题",
    avatar: "🧩",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've been staring at this for five minutes with no idea.", zh: "我盯着这个看了五分钟，完全没头绪。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been just as stuck, let's think out loud together.", zh: "我也一样卡住了，我们一起大声说出想法吧。", correct: true, xp: 10 },
          { text: "I've never had trouble with anything like this.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've been just as stuck, let's think out loud together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we combine these two clues, it might make sense.", zh: "如果我们把这两条线索结合起来，也许就说得通了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that works, you're a genius, honestly.", zh: "如果真的行，你真是天才，说真的。", correct: true, xp: 10 },
          { text: "If that works, I'll never believe it.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that works, you're a genius, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's it, we finally cracked it!", zh: "就是这样，我们终于解开了！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We did it, everyone cheer for a second!", zh: "我们做到了，大家一起欢呼一下吧！", correct: true, xp: 10 },
          { text: "That's wrong, we're still completely stuck.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We did it, everyone cheer for a second!",
        next: null
      }
    }
  },
  {
    id: "the-final-countdown",
    transition: { en: "With ten minutes left, the pressure ramps up.", zh: "还剩十分钟，压力骤然升高。" },
    title: "The Final Countdown",
    subtitle: "密室 · 最后倒计时",
    avatar: "⏳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We only have ten minutes left on the clock!", zh: "我们只剩十分钟了！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Then let's stay calm and focus on the last lock.", zh: "那我们保持冷静，专注解开最后一把锁吧。", correct: true, xp: 10 },
          { text: "Then let's just panic and run around randomly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Then let's stay calm and focus on the last lock.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We're moving faster now than we were an hour ago.", zh: "我们现在的速度比一小时前要快多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We are, the pressure is bringing out our best.", zh: "确实是，压力让我们发挥出了最好的水平。", correct: true, xp: 10 },
          { text: "We aren't, we're actually slowing down now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We are, the pressure is bringing out our best.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you hear that? The lock just clicked open!", zh: "你听到了吗？锁刚咔哒一声开了！" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can hear it, let's go, go, go!", zh: "我听到了，快走快走快走！", correct: true, xp: 10 },
          { text: "I can't hear anything, let's just wait here.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can hear it, let's go, go, go!",
        next: null
      }
    }
  },
  {
    id: "escaping-in-time",
    transition: { en: "The door swings open with seconds to spare.", zh: "门在最后几秒钟内打开了。" },
    title: "Escaping in Time",
    subtitle: "密室 · 及时逃出",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We actually made it out with time to spare!", zh: "我们真的赶在时间结束前逃出来了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We really did, I can't believe we pulled it off.", zh: "确实做到了，真不敢相信我们成功了。", correct: true, xp: 10 },
          { text: "We didn't, we ran out of time completely.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We really did, I can't believe we pulled it off.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This felt more rewarding than I expected an escape room to be.", zh: "这次的成就感比我预想的密室逃脱要强得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, teamwork made it so much better.", zh: "确实如此，团队合作让一切都变得更棒了。", correct: true, xp: 10 },
          { text: "It really didn't, this felt pretty forgettable.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, teamwork made it so much better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a group photo before we leave.", zh: "走之前我们拍张合照吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this moment deserves a photo.", zh: "好啊，这一刻值得拍照留念。", correct: true, xp: 10 },
          { text: "Let's skip it, photos never matter much.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this moment deserves a photo.",
        next: null
      }
    }
  },
  {
    id: "recapping-over-drinks",
    transition: { en: "The group heads to a nearby bar to recap the whole experience.", zh: "大家去了附近一家酒吧，回顾整段经历。" },
    title: "Recapping over Drinks",
    subtitle: "酒吧 · 回顾经历",
    avatar: "🍻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which clue confused you the most tonight?", zh: "今晚哪条线索让你最困惑？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Honestly, that locked drawer nearly broke me.", zh: "说实话，那个上锁的抽屉差点把我逼疯了。", correct: true, xp: 10 },
          { text: "Nothing confused me at all tonight, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答经历 → Honestly, that locked drawer nearly broke me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We worked together better tonight than any group I've been in.", zh: "今晚我们的配合比我参加过的任何一组都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That means a lot, we make a great team.", zh: "这话意义重大，我们真是个很棒的团队。", correct: true, xp: 10 },
          { text: "That's odd, tonight felt pretty disorganized to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That means a lot, we make a great team.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should try a harder room next time.", zh: "我们下次应该挑战一个更难的密室。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Absolutely, let's find the hardest one in the city.", zh: "当然，我们找这座城市里最难的那间吧。", correct: true, xp: 10 },
          { text: "Absolutely not, this one was already too hard.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Absolutely, let's find the hardest one in the city.",
        next: null
      }
    }
  },
  {
    id: "a-good-kind-of-tired",
    transition: { en: "Driving home, they reflect on a fun, memorable night with friends.", zh: "开车回家的路上，他们回味着和朋友们度过的有趣又难忘的一晚。" },
    title: "A Good Kind of Tired",
    subtitle: "车上 · 满足的疲惫",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Tonight was more fun than I've had in a long time.", zh: "今晚是我很长时间以来玩得最开心的一次。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really was, nights like this remind me why we do this.", zh: "确实如此，像这样的夜晚让我想起我们为什么要这样做。", correct: true, xp: 10 },
          { text: "It really wasn't, tonight felt pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really was, nights like this remind me why we do this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should make time for friends like this more often.", zh: "我们应该更经常抽出时间和朋友们这样聚聚。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, life gets busy, but this matters too.", zh: "同意，生活很忙，但这件事也很重要。", correct: true, xp: 10 },
          { text: "Disagreed, our current schedule is already perfect.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, life gets busy, but this matters too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy things get, let's keep making memories like this.", zh: "不管生活多忙，我们都要继续创造这样的回忆。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, this is always worth it.", zh: "不管多忙，这永远都值得。", correct: true, xp: 10 },
          { text: "No matter how busy, we'll probably stop doing this.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, this is always worth it.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "escape room", zh: "密室逃脱", category: "community" },
  { en: "mystery theme", zh: "悬疑主题", category: "community" },
  { en: "time limit", zh: "时间限制", category: "community" },
  { en: "thrilling", zh: "刺激的", category: "community" },
  { en: "beforehand", zh: "提前", category: "community" },
  { en: "dimly lit", zh: "灯光昏暗的", category: "community" },
  { en: "lobby", zh: "大堂", category: "community" },
  { en: "spookier", zh: "更阴森的（spooky 比较级）", category: "community" },
  { en: "atmosphere", zh: "氛围", category: "community" },
  { en: "wisely", zh: "明智地", category: "community" },
  { en: "split into pairs", zh: "分成两人一组", category: "community" },
  { en: "cover more ground", zh: "覆盖更多区域", category: "community" },
  { en: "hidden clue", zh: "隐藏线索", category: "community" },
  { en: "bookshelf", zh: "书架", category: "community" },
  { en: "series of numbers", zh: "一串数字", category: "community" },
  { en: "right off the bat", zh: "一开始就", category: "community" },
  { en: "another angle", zh: "另一个角度", category: "community" },
  { en: "notepad", zh: "记事本", category: "community" },
  { en: "by heart", zh: "凭记忆", category: "community" },
  { en: "locked drawer", zh: "上锁的抽屉", category: "community" },
  { en: "number pad", zh: "数字键盘", category: "community" },
  { en: "combination", zh: "组合", category: "community" },
  { en: "rearrange", zh: "重新排列", category: "community" },
  { en: "satisfying", zh: "有成就感的", category: "community" },
  { en: "clock ticking", zh: "时间流逝", category: "community" },
  { en: "contributing", zh: "贡献", category: "community" },
  { en: "timer", zh: "计时器", category: "community" },
  { en: "counting down", zh: "倒数", category: "community" },
  { en: "compare notes", zh: "比对线索", category: "community" },
  { en: "stumps", zh: "让人困惑，难倒", category: "community" },
  { en: "think out loud", zh: "大声说出想法", category: "community" },
  { en: "combine", zh: "结合", category: "community" },
  { en: "genius", zh: "天才", category: "community" },
  { en: "cracked it", zh: "解开了", category: "community" },
  { en: "final countdown", zh: "最后倒计时", category: "community" },
  { en: "ramps up", zh: "骤然升高", category: "community" },
  { en: "bringing out our best", zh: "让我们发挥出最好水平", category: "community" },
  { en: "with time to spare", zh: "还剩余一些时间", category: "community" },
  { en: "pulled it off", zh: "成功做到了", category: "community" },
  { en: "rewarding", zh: "有成就感的", category: "community" },
  { en: "group photo", zh: "合照", category: "community" },
  { en: "recap", zh: "回顾", category: "community" },
  { en: "broke me", zh: "差点把我逼疯了", category: "community" },
  { en: "disorganized", zh: "混乱的，没条理的", category: "community" },
  { en: "good kind of tired", zh: "满足的疲惫", category: "community" }
);
