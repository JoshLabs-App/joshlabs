// 内容数据层：第六十六章，紧接第六十五章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人报名了一场慈善五公里跑步活动，为期数周地训练。全新词汇领域：
// 赛事报名/训练计划/配速/终点冲刺。

GAME_CONTENT.scenes.push(
  {
    id: "seeing-the-flyer",
    transition: { en: "A flyer for a charity 5K catches their attention at the community center.", zh: "社区中心一张慈善五公里跑的传单引起了他们的注意。" },
    title: "Seeing the Flyer",
    subtitle: "社区中心 · 看到传单",
    avatar: "🏃",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This run raises money for the local children's hospital.", zh: "这场跑步为当地儿童医院筹款。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a great cause, let's sign up together.", zh: "这是个很棒的公益事业，我们一起报名吧。", correct: true, xp: 10 },
          { text: "That's fine, but running sounds too difficult.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a great cause, let's sign up together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have either of us ever run five kilometers before?", zh: "我们俩有人跑过五公里吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Neither of us has, but there's a first time.", zh: "我们俩都没有，但凡事总有第一次。", correct: true, xp: 10 },
          { text: "Both of us have run marathons before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → Neither of us has, but there's a first time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's give ourselves eight weeks to train.", zh: "我们给自己八周时间来训练吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that sounds like enough time.", zh: "好主意，这个时间听起来够用。", correct: true, xp: 10 },
          { text: "Let's just show up without training at all.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that sounds like enough time.",
        next: null
      }
    }
  },
  {
    id: "registering-for-the-race",
    transition: { en: "They fill out the online registration together.", zh: "他们一起填写了网上报名表。" },
    title: "Registering for the Race",
    subtitle: "手机 · 报名活动",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you want to run together or at your own pace?", zh: "你想和我一起跑还是按自己的节奏跑？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I'd love to run together, at least at first.", zh: "至少一开始，我很想和你一起跑。", correct: true, xp: 10 },
          { text: "I'd rather never see you during the race.", correct: false }
        ],
        hintOnWrong: "肯定回答（补充意愿） → I'd love to run together, at least at first.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This registration fee is lower than I expected.", zh: "这个报名费比我预想的要低。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's great, more money can go to the cause.", zh: "太好了，这样能有更多钱用于公益事业。", correct: true, xp: 10 },
          { text: "That's disappointing, we wanted to pay more.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's great, more money can go to the cause.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll get a free T-shirt just for signing up.", zh: "报名就能免费获得一件T恤。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Nice, let's pick our sizes right now.", zh: "太好了，我们现在就选尺码吧。", correct: true, xp: 10 },
          { text: "Nice, though we don't want free shirts.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Nice, let's pick our sizes right now.",
        next: null
      }
    }
  },
  {
    id: "the-first-training-run",
    transition: { en: "Their first training run leaves them both out of breath quickly.", zh: "第一次训练跑步很快就让他们俩都气喘吁吁。" },
    title: "The First Training Run",
    subtitle: "公园 · 首次训练",
    avatar: "😮‍💨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We're already more tired than I expected.", zh: "我们现在已经比我预想的要累了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We are, let's walk for a minute and catch our breath.", zh: "确实是，我们走一分钟，喘口气吧。", correct: true, xp: 10 },
          { text: "We are, so let's just quit right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We are, let's walk for a minute and catch our breath.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This first run was harder than I imagined it would be.", zh: "这第一次训练比我想象的要难得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, but we'll only get stronger from here.", zh: "确实是，但从这之后我们只会越来越强。", correct: true, xp: 10 },
          { text: "It was, so let's just give up on this idea.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, but we'll only get stronger from here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone starts somewhere, this is normal.", zh: "每个人都是从某个起点开始的，这很正常。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a relief, we're not the only ones struggling.", zh: "这真让人松了口气，挣扎的不止我们俩。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped to be experts already.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, I feel a little better now.",
        next: null
      }
    }
  },
  {
    id: "building-a-training-schedule",
    transition: { en: "They map out a simple training schedule for the weeks ahead.", zh: "他们规划了未来几周的简单训练计划。" },
    title: "Building a Training Schedule",
    subtitle: "家里 · 制定训练计划",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many days a week should we train?", zh: "我们每周应该训练几天？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe three days, with rest in between.", zh: "也许三天，中间要休息。", correct: true, xp: 10 },
          { text: "We shouldn't train on any days at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → Maybe three days, with rest in between.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This plan increases our distance more gradually than I expected.", zh: "这个计划增加距离的方式比我预想的要循序渐进。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's good, gradual seems safer than rushing.", zh: "这样很好，循序渐进听起来比急于求成更安全。", correct: true, xp: 10 },
          { text: "That's bad, let's just increase the distance fast.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's good, gradual seems safer than rushing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's mark our runs on the calendar together.", zh: "我们把训练日一起标在日历上吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that'll keep us accountable.", zh: "好主意，这样能让我们互相监督。", correct: true, xp: 10 },
          { text: "Let's not plan it, we'll just wing it.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that'll keep us accountable.",
        next: null
      }
    }
  },
  {
    id: "a-rainy-training-day",
    transition: { en: "Rain threatens to interrupt their scheduled run.", zh: "一场雨险些打断了他们计划好的训练。" },
    title: "A Rainy Training Day",
    subtitle: "家里 · 雨天训练",
    avatar: "🌧️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we skip today's run because of the rain?", zh: "我们要因为下雨跳过今天的训练吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, let's just wear jackets and go anyway.", zh: "不要，我们穿上外套照样去跑吧。", correct: true, xp: 10 },
          { text: "Yes, let's skip every rainy day from now on.", correct: false }
        ],
        hintOnWrong: "否定回答 → No, let's just wear jackets and go anyway.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Running in the rain feels more refreshing than I expected.", zh: "在雨中跑步比我预想的更让人神清气爽。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, this is oddly enjoyable, honestly.", zh: "确实是，说实话这莫名地挺享受的。", correct: true, xp: 10 },
          { text: "It doesn't, this is completely miserable.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, this is oddly enjoyable, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're more committed to this than I thought we'd be.", zh: "我们对这件事的坚持程度比我预想的要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really are, and it feels good to show up.", zh: "确实如此，能坚持出现感觉真好。", correct: true, xp: 10 },
          { text: "We really aren't, we've skipped most of our runs.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really are, and it feels good to show up.",
        next: null
      }
    }
  },
  {
    id: "hitting-a-wall",
    transition: { en: "A tough week leaves both of them wanting to quit.", zh: "艰难的一周让他们俩都产生了放弃的念头。" },
    title: "Hitting a Wall",
    subtitle: "公园 · 遇到瓶颈",
    avatar: "😩",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I don't think I can finish this run today.", zh: "我觉得我今天跑不完这段路了。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "You can, let's just slow down together.", zh: "你可以的，我们一起放慢速度吧。", correct: true, xp: 10 },
          { text: "You can't, so let's stop training entirely.", correct: false }
        ],
        hintOnWrong: "用 can 表能力鼓励 → You can, let's just slow down together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This week has been harder than any week before it.", zh: "这周比之前任何一周都要难。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It has, but hard weeks don't erase our progress.", zh: "确实是，但艰难的一周并不会抹去我们的进步。", correct: true, xp: 10 },
          { text: "It has, so let's just give up altogether.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It has, but hard weeks don't erase our progress.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even on hard days, showing up still counts.", zh: "即使是艰难的日子，坚持出现依然算数。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even on hard days, we're still doing this.", zh: "即使在艰难的日子里，我们也依然在坚持。", correct: true, xp: 10 },
          { text: "Even on hard days, showing up doesn't matter.", correct: false }
        ],
        hintOnWrong: "让步句 → Even on hard days, we're still doing this.",
        next: null
      }
    }
  },
  {
    id: "a-breakthrough-run",
    transition: { en: "One morning, the whole distance finally feels effortless.", zh: "一天早上，整段距离终于感觉毫不费力了。" },
    title: "A Breakthrough Run",
    subtitle: "公园 · 突破的一跑",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We just finished the full distance without stopping!", zh: "我们刚全程跑完，中途一次都没停！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We actually did it, I'm honestly shocked.", zh: "我们真的做到了，说实话我很震惊。", correct: true, xp: 10 },
          { text: "We didn't, that felt like a total failure.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We actually did it, I'm honestly shocked.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That felt so much easier than the first week.", zh: "这次感觉比第一周轻松多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, we've come such a long way.", zh: "确实如此，我们真的进步了很多。", correct: true, xp: 10 },
          { text: "It really didn't, this felt just as hard as before.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, we've come such a long way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "All those hard training days were worth it.", zh: "所有那些艰难的训练日都值得了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really were, and I'd do it all again.", zh: "确实如此，我愿意再来一遍。", correct: true, xp: 10 },
          { text: "They really weren't, we shouldn't have bothered.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really were, every single one of them.",
        next: null
      }
    }
  },
  {
    id: "race-day-morning",
    transition: { en: "Race day arrives with nerves, excitement, and a big crowd.", zh: "比赛日带着紧张、兴奋和一大群人一起到来。" },
    title: "Race Day Morning",
    subtitle: "赛道起点 · 比赛日清晨",
    avatar: "🎽",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This crowd is bigger than I expected for a local race.", zh: "对一场本地赛事来说，这人群比我预想的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, this energy is honestly contagious.", zh: "确实是，这种气氛真的很有感染力。", correct: true, xp: 10 },
          { text: "It isn't, barely anyone showed up today.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, this energy is honestly contagious.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you feeling ready for this?", zh: "你觉得自己准备好了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I am, nervous, but ready.", zh: "准备好了，虽然紧张，但也准备好了。", correct: true, xp: 10 },
          { text: "I'm not, let's just go home instead.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I am, nervous, but ready.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's just enjoy this, no matter our time.", zh: "不管成绩如何，我们就享受这个过程吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, finishing together is what matters.", zh: "好啊，一起完成才是最重要的。", correct: true, xp: 10 },
          { text: "Let's obsess over beating everyone else instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, finishing together is what matters.",
        next: null
      }
    }
  },
  {
    id: "the-final-stretch",
    transition: { en: "With the finish line in sight, they push through the last stretch.", zh: "终点线就在眼前，他们咬牙冲过最后一段路。" },
    title: "The Final Stretch",
    subtitle: "赛道 · 冲刺终点",
    avatar: "🏁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We can see the finish line up ahead!", zh: "我们能看到前面的终点线了！" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "We can, let's push through to the end.", zh: "确实能看到，我们咬牙坚持到最后吧。", correct: true, xp: 10 },
          { text: "We can't, the finish line is nowhere in sight.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → We can, let's push through to the end.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My legs feel heavier than they did an hour ago.", zh: "我的腿比一小时前要沉重多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but we're almost there, keep going.", zh: "我也是，但我们快到了，继续加油。", correct: true, xp: 10 },
          { text: "Mine feel lighter than they've ever felt.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but we're almost there, keep going.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's cross the finish line holding hands.", zh: "我们牵着手冲过终点线吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, together, just like everything else.", zh: "好啊，我们一起，就像其他一切一样。", correct: true, xp: 10 },
          { text: "Let's race each other to the finish instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, together, just like everything else.",
        next: null
      }
    }
  },
  {
    id: "crossing-the-finish-line",
    transition: { en: "They cross the finish line together, exhausted and elated.", zh: "他们一起冲过终点线，又累又兴奋。" },
    title: "Crossing the Finish Line",
    subtitle: "终点 · 冲过终点",
    avatar: "🏆",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We actually did it, we finished the whole race!", zh: "我们真的做到了，我们跑完了全程！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I can't believe we finished, I'm so proud of us.", zh: "我真不敢相信我们完成了，我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "I already knew this would happen anyway.", correct: false }
        ],
        hintOnWrong: "过去时回应 → I can't believe we finished, I'm so proud of us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This medal means more to me than I expected it to.", zh: "这枚奖牌对我的意义比我预想的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, this represents so much hard work.", zh: "确实如此，这代表了这么多的努力。", correct: true, xp: 10 },
          { text: "It doesn't, this medal means nothing to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, this represents so much hard work.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how sore we are tomorrow, this was worth it.", zh: "不管明天我们有多酸痛，这一切都值得。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how sore, I'd do this again in a heartbeat.", zh: "不管有多酸痛，我会毫不犹豫地再来一次。", correct: true, xp: 10 },
          { text: "No matter how sore, I'll never run again.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how sore, I'd do this again in a heartbeat.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "charity", zh: "慈善的", category: "community" },
  { en: "raises money", zh: "筹款", category: "community" },
  { en: "children's hospital", zh: "儿童医院", category: "community" },
  { en: "great cause", zh: "很棒的公益事业", category: "community" },
  { en: "kilometers", zh: "公里（复数）", category: "community" },
  { en: "first time", zh: "第一次", category: "community" },
  { en: "train", zh: "训练", category: "community" },
  { en: "registration", zh: "报名", category: "community" },
  { en: "own pace", zh: "自己的节奏", category: "community" },
  { en: "registration fee", zh: "报名费", category: "community" },
  { en: "T-shirt", zh: "T恤", category: "community" },
  { en: "sizes", zh: "尺码（复数）", category: "community" },
  { en: "training run", zh: "训练跑步", category: "community" },
  { en: "out of breath", zh: "气喘吁吁", category: "community" },
  { en: "catch our breath", zh: "喘口气", category: "community" },
  { en: "get stronger", zh: "变得更强", category: "community" },
  { en: "starts somewhere", zh: "都是从某处开始", category: "community" },
  { en: "training schedule", zh: "训练计划", category: "community" },
  { en: "rest", zh: "休息", category: "community" },
  { en: "gradually", zh: "循序渐进地", category: "community" },
  { en: "rushing", zh: "急于求成", category: "community" },
  { en: "accountable", zh: "互相监督的，负责的", category: "community" },
  { en: "wing it", zh: "临场发挥", category: "community" },
  { en: "jackets", zh: "外套（复数）", category: "community" },
  { en: "refreshing", zh: "令人神清气爽的", category: "community" },
  { en: "oddly", zh: "莫名地", category: "community" },
  { en: "miserable", zh: "痛苦的", category: "community" },
  { en: "committed", zh: "投入的，坚持的", category: "community" },
  { en: "hitting a wall", zh: "遇到瓶颈", category: "community" },
  { en: "erase", zh: "抹去", category: "community" },
  { en: "altogether", zh: "完全，彻底", category: "community" },
  { en: "counts", zh: "算数", category: "community" },
  { en: "breakthrough", zh: "突破", category: "community" },
  { en: "full distance", zh: "全程", category: "community" },
  { en: "shocked", zh: "震惊的", category: "community" },
  { en: "come such a long way", zh: "取得了很大进步", category: "community" },
  { en: "race day", zh: "比赛日", category: "community" },
  { en: "crowd", zh: "人群", category: "community" },
  { en: "contagious", zh: "有感染力的", category: "community" },
  { en: "finish line", zh: "终点线", category: "community" },
  { en: "final stretch", zh: "最后一段路", category: "community" },
  { en: "push through", zh: "咬牙坚持", category: "community" },
  { en: "legs", zh: "腿", category: "community" },
  { en: "cross", zh: "跨过", category: "community" },
  { en: "medal", zh: "奖牌", category: "community" },
  { en: "represents", zh: "代表", category: "community" },
  { en: "sore", zh: "酸痛的", category: "community" },
  { en: "in a heartbeat", zh: "毫不犹豫地", category: "community" }
);
