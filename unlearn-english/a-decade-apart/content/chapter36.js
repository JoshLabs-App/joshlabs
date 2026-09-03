// 内容数据层：第三十六章，紧接第三十五章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter35.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：宝宝出生前最后一次二人自驾游，去朋友的湖边度假屋。全新词汇领域：
// 自驾游规划/湖边度假屋/皮划艇/篝火夜谈。

GAME_CONTENT.scenes.push(
  {
    id: "planning-the-getaway",
    transition: { en: "Before the baby arrives, they plan one last road trip together.", zh: "在宝宝出生前，他们计划最后一次两人自驾游。" },
    title: "Planning the Getaway",
    subtitle: "家里 · 规划出行",
    avatar: "🗺️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A friend offered us her cottage by the lake.", zh: "一个朋友把她湖边的度假屋借给我们了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's so generous, we should say yes.", zh: "她真是太大方了，我们应该答应。", correct: true, xp: 10 },
          { text: "That's odd, we should probably say no.", correct: false }
        ],
        hintOnWrong: "过去时陈述回应 → That's so generous, we should say yes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How long is the drive up there?", zh: "开车到那里要多久？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It's about three hours, give or take.", zh: "大概三个小时左右。", correct: true, xp: 10 },
          { text: "It's not a drive, it's a five-minute walk.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时长 → It's about three hours, give or take.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to pack for warm days and cool nights.", zh: "我们需要准备白天暖和、晚上凉爽的衣物。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Good point, I'll pack layers for both.", zh: "有道理，我会为两种情况都准备好衣物。", correct: true, xp: 10 },
          { text: "Good point, though I'll just pack nothing warm.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Good point, I'll pack layers for both.",
        next: null
      }
    }
  },
  {
    id: "hitting-the-road",
    transition: { en: "Early Saturday morning, they load the car and head out.", zh: "周六一大早，他们装好车出发了。" },
    title: "Hitting the Road",
    subtitle: "车上 · 出发上路",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you remember to pack the cooler?", zh: "你记得带保温箱了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's already in the trunk.", zh: "是的，已经放在后备箱了。", correct: true, xp: 10 },
          { text: "No, coolers have never mattered to us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's already in the trunk.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This route looks more scenic than the highway.", zh: "这条路线看起来比高速公路更有风景。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's take this route, then, we're in no rush.", zh: "那我们走这条路吧，反正也不赶时间。", correct: true, xp: 10 },
          { text: "Let's take the highway, scenery doesn't matter.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's take this route, then, we're in no rush.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'm so ready to just relax for a few days.", zh: "我真的很想好好放松几天了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Same here, this trip couldn't come at a better time.", zh: "我也是，这趟旅行来得正是时候。", correct: true, xp: 10 },
          { text: "Same here, though I'd rather keep working instead.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → Same here, this trip couldn't come at a better time.",
        next: null
      }
    }
  },
  {
    id: "arriving-at-the-cottage",
    transition: { en: "They pull into the driveway of a cozy lakeside cottage.", zh: "他们把车开进了一间温馨湖边小屋的车道。" },
    title: "Arriving at the Cottage",
    subtitle: "度假屋 · 抵达",
    avatar: "🏡",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This view is even better than the photos showed.", zh: "这景色比照片上看到的还要美。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I can't stop staring at it.", zh: "确实如此，我怎么看都看不够。", correct: true, xp: 10 },
          { text: "It really isn't, the photos looked much nicer.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I can't stop staring at it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you help me unload the car?", zh: "你能帮我把车上的东西卸下来吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can grab these bags right now.", zh: "我现在就能把这些包拿下来。", correct: true, xp: 10 },
          { text: "I can't lift anything, I'm too tired to move.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can grab these bags right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's pick a bedroom before we unpack.", zh: "我们收拾行李前先选一间卧室吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds good, let's check them both out.", zh: "好的，我们两间都去看看吧。", correct: true, xp: 10 },
          { text: "Let's just sleep in the car instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds good, let's check them both out.",
        next: null
      }
    }
  },
  {
    id: "trying-kayaking",
    transition: { en: "That afternoon, they borrow kayaks and head onto the lake.", zh: "那天下午，他们借了皮划艇下湖去了。" },
    title: "Trying Kayaking",
    subtitle: "湖上 · 皮划艇",
    avatar: "🛶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever been kayaking before?", zh: "你以前划过皮划艇吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've tried it once, years ago.", zh: "我几年前试过一次。", correct: true, xp: 10 },
          { text: "I'm kayaking right at this very second.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've tried it once, years ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This lake is calmer than I expected today.", zh: "今天这个湖比我预想的要平静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, perfect conditions for us.", zh: "确实如此，条件对我们来说太完美了。", correct: true, xp: 10 },
          { text: "It really isn't, the waves are terrifying.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, perfect conditions for us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Are you paddling toward that little island?", zh: "你是要划向那个小岛吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm heading straight for it now.", zh: "是的，我现在正朝那儿划去。", correct: true, xp: 10 },
          { text: "Yes, I paddled there last summer already.", correct: false }
        ],
        hintOnWrong: "现在进行时 → Yes, I'm heading straight for it now.",
        next: null
      }
    }
  },
  {
    id: "a-lazy-afternoon",
    transition: { en: "They spend the rest of the afternoon lounging on the dock.", zh: "剩下的下午他们都在码头上悠闲地度过。" },
    title: "A Lazy Afternoon",
    subtitle: "码头 · 悠闲午后",
    avatar: "☀️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This might be the most relaxed I've felt in months.", zh: "这可能是我几个月来感觉最放松的一次。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've felt the exact same way all day.", zh: "我一整天都有一模一样的感受。", correct: true, xp: 10 },
          { text: "I've never once felt relaxed in my life.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've felt the exact same way all day.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Once the baby comes, quiet afternoons like this will be rare.", zh: "宝宝出生后，这样安静的午后会变得很少见。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's exactly why we should enjoy this moment.", zh: "这正是我们要好好珍惜这一刻的原因。", correct: true, xp: 10 },
          { text: "That's why we shouldn't have come here at all.", correct: false }
        ],
        hintOnWrong: "回应未来时 → That's exactly why we should enjoy this moment.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's just stay here and do absolutely nothing.", zh: "我们就待在这儿，什么都不做吧。", },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Deal, let's do nothing for the rest of the day.", zh: "成交，今天剩下的时间我们就什么都不做。", correct: true, xp: 10 },
          { text: "Let's go find something productive to do instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Deal, let's do nothing for the rest of the day.",
        next: null
      }
    }
  },
  {
    id: "cooking-over-the-fire",
    transition: { en: "As evening falls, they cook dinner over an open fire.", zh: "夜幕降临，他们在篝火上做晚饭。" },
    title: "Cooking over the Fire",
    subtitle: "篝火旁 · 做饭",
    avatar: "🔥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you turn the skewers while I set the table?", zh: "我摆桌子的时候你能翻一下烤串吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can turn them, no problem at all.", zh: "我能翻，没问题。", correct: true, xp: 10 },
          { text: "I can't cook anything, fire scares me.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can turn them, no problem at all.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Everything tastes better cooked over a real fire.", zh: "用真正的篝火做的东西吃起来更香。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, there's something special about it.", zh: "确实如此，这样做出来的东西有种特别的味道。", correct: true, xp: 10 },
          { text: "It doesn't, this tastes exactly like at home.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, there's something special about it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Watch out, that pan is hotter than it looks.", zh: "小心点，那个平底锅比看起来要烫。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks for the warning, I'll be careful.", zh: "谢谢提醒，我会小心的。", correct: true, xp: 10 },
          { text: "Thanks, though I'll just grab it with my hands.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks for the warning, I'll be careful.",
        next: null
      }
    }
  },
  {
    id: "stargazing",
    transition: { en: "After dinner, they lie back and look up at the stars.", zh: "晚饭后，他们躺下来仰望星空。" },
    title: "Stargazing",
    subtitle: "码头 · 看星星",
    avatar: "🌌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You can see so many more stars out here.", zh: "在这儿能看到多得多的星星。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "You can, the city never lets us see this.", zh: "确实能，在城市里我们从没能看到过这些。", correct: true, xp: 10 },
          { text: "You can't, this sky looks exactly like home.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → You can, the city never lets us see this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What do you think our lives will look like in a year?", zh: "你觉得一年后我们的生活会是什么样子？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Busier, but happier, I think.", zh: "我觉得会更忙，但也更幸福。", correct: true, xp: 10 },
          { text: "Exactly the same as it is right now.", correct: false }
        ],
        hintOnWrong: "wh-问题回答预测 → Busier, but happier, I think.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy things get, let's find nights like this.", zh: "不管以后有多忙，我们都要找出这样的夜晚。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, we'll always make time for this.", zh: "不管多忙，我们都会为这样的时刻抽出时间。", correct: true, xp: 10 },
          { text: "No matter how busy, nights like this won't matter.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, we'll always make time for this.",
        next: null
      }
    }
  },
  {
    id: "a-rainy-morning",
    transition: { en: "The next morning brings unexpected rain against the windows.", zh: "第二天早上，窗外下起了意料之外的雨。" },
    title: "A Rainy Morning",
    subtitle: "度假屋 · 下雨的清晨",
    avatar: "🌧️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If it keeps raining, what should we do instead?", zh: "如果一直下雨，我们应该做点什么呢？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it does, let's just play cards inside.", zh: "如果一直下，我们就在屋里打牌吧。", correct: true, xp: 10 },
          { text: "If it does, let's paddle out into the storm.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it does, let's just play cards inside.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is actually kind of nice, listening to the rain.", zh: "其实听雨声也挺不错的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, it feels calm and peaceful.", zh: "确实是，感觉很平静安宁。", correct: true, xp: 10 },
          { text: "It really isn't, rain always ruins everything.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, it feels calm and peaceful.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even the rainy days here feel special somehow.", zh: "就连这里下雨的日子都有种特别的感觉。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even the rain, I have to admit, feels nice.", zh: "即使是下雨，我也不得不承认感觉很好。", correct: true, xp: 10 },
          { text: "Even the rain proves this trip was a mistake.", correct: false }
        ],
        hintOnWrong: "让步句 → Even the rain, I have to admit, feels nice.",
        next: null
      }
    }
  },
  {
    id: "packing-up",
    transition: { en: "On the final day, they pack the car and tidy the cottage.", zh: "最后一天，他们收拾车子，整理好度假屋。" },
    title: "Packing Up",
    subtitle: "度假屋 · 收拾离开",
    avatar: "🧳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have we left everything the way we found it?", zh: "我们有把一切都恢复成原来的样子吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've double-checked, and everything looks good.", zh: "我又检查了一遍，一切都没问题。", correct: true, xp: 10 },
          { text: "I've never once checked anything in this cottage.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've double-checked, and everything looks good.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This trip went by faster than I wanted it to.", zh: "这趟旅行过得比我希望的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I already miss it.", zh: "确实如此，我已经开始想念了。", correct: true, xp: 10 },
          { text: "It really didn't, this trip felt endless.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I already miss it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll definitely come back here someday.", zh: "我们以后一定会再回来的。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, maybe with a little one next time.", zh: "一定会的，也许下次会带着小宝宝一起来。", correct: true, xp: 10 },
          { text: "We won't, once was more than enough.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → We will, maybe with a little one next time.",
        next: null
      }
    }
  },
  {
    id: "the-drive-home",
    transition: { en: "On the drive home, they reflect quietly on the last few days.", zh: "回家的路上，他们静静地回味这几天。" },
    title: "The Drive Home",
    subtitle: "车上 · 归途",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I think we really needed this trip.", zh: "我觉得我们真的很需要这趟旅行。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We did, more than I even realized.", zh: "确实需要，比我意识到的还要需要。", correct: true, xp: 10 },
          { text: "We didn't, this trip felt like a waste.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We did, more than I even realized.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel about everything that's coming next?", zh: "对于接下来即将到来的一切，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I feel calm, and honestly, really excited.", zh: "我感觉很平静，说实话，也非常期待。", correct: true, xp: 10 },
          { text: "I feel nothing at all about any of it.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → I feel calm, and honestly, really excited.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever happens next, we're doing this together.", zh: "不管接下来发生什么，我们都会一起面对。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever happens, together, always.", zh: "不管发生什么，我们都一起面对，永远如此。", correct: true, xp: 10 },
          { text: "Whatever happens, we'll probably face it apart.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever happens, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "getaway", zh: "短途出行", category: "community" },
  { en: "cottage", zh: "湖边度假屋", category: "community" },
  { en: "lake", zh: "湖", category: "community" },
  { en: "generous", zh: "大方的", category: "community" },
  { en: "give or take", zh: "大概，左右", category: "community" },
  { en: "layers", zh: "分层衣物", category: "community" },
  { en: "loaded", zh: "装载了的", category: "community" },
  { en: "cooler", zh: "保温箱", category: "community" },
  { en: "trunk", zh: "后备箱", category: "community" },
  { en: "route", zh: "路线", category: "community" },
  { en: "scenic", zh: "风景优美的", category: "community" },
  { en: "highway", zh: "高速公路", category: "community" },
  { en: "no rush", zh: "不赶时间", category: "community" },
  { en: "pull into", zh: "开进", category: "community" },
  { en: "lakeside", zh: "湖边的", category: "community" },
  { en: "view", zh: "景色", category: "community" },
  { en: "staring", zh: "凝视", category: "community" },
  { en: "unload", zh: "卸下", category: "community" },
  { en: "bags", zh: "包（复数）", category: "community" },
  { en: "unpack", zh: "打开行李", category: "community" },
  { en: "kayaking", zh: "划皮划艇", category: "community" },
  { en: "kayaks", zh: "皮划艇（复数）", category: "community" },
  { en: "conditions", zh: "条件", category: "community" },
  { en: "waves", zh: "波浪", category: "community" },
  { en: "terrifying", zh: "吓人的", category: "community" },
  { en: "paddling", zh: "划桨", category: "community" },
  { en: "island", zh: "小岛", category: "community" },
  { en: "heading", zh: "朝……前进", category: "community" },
  { en: "lounging", zh: "悠闲地待着", category: "community" },
  { en: "dock", zh: "码头", category: "community" },
  { en: "relaxed", zh: "放松的", category: "community" },
  { en: "rare", zh: "少见的", category: "community" },
  { en: "moment", zh: "时刻", category: "community" },
  { en: "deal", zh: "成交，一言为定", category: "community" },
  { en: "productive", zh: "有成效的", category: "community" },
  { en: "open fire", zh: "篝火", category: "community" },
  { en: "skewers", zh: "烤串", category: "community" },
  { en: "tastes", zh: "尝起来", category: "community" },
  { en: "pan", zh: "平底锅", category: "community" },
  { en: "hotter", zh: "更烫的（hot 比较级）", category: "community" },
  { en: "stargazing", zh: "看星星", category: "community" },
  { en: "stars", zh: "星星", category: "community" },
  { en: "busier", zh: "更忙的（busy 比较级）", category: "community" },
  { en: "happier", zh: "更幸福的（happy 比较级）", category: "community" },
  { en: "rainy", zh: "多雨的", category: "community" },
  { en: "windows", zh: "窗户（复数）", category: "community" },
  { en: "play cards", zh: "打牌", category: "community" },
  { en: "peaceful", zh: "平静的", category: "community" },
  { en: "ruins", zh: "破坏", category: "community" },
  { en: "somehow", zh: "不知怎么地", category: "community" },
  { en: "tidy", zh: "整理", category: "community" },
  { en: "went by", zh: "过去了", category: "community" },
  { en: "endless", zh: "无尽的", category: "community" },
  { en: "little one", zh: "小宝贝", category: "community" },
  { en: "reflect", zh: "回味，反思", category: "community" },
  { en: "realized", zh: "意识到了", category: "community" },
  { en: "whatever happens", zh: "不管发生什么", category: "community" },
  { en: "apart", zh: "分开地", category: "community" }
);
