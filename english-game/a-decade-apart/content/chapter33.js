// 内容数据层：第三十三章，紧接第三十二章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter32.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：预产期临近时，多伦多遭遇一场暴风雪。全新词汇领域：天气预警/
// 停电应急/铲雪/紧急物资准备。

GAME_CONTENT.scenes.push(
  {
    id: "the-storm-warning",
    transition: { en: "A severe winter storm warning is issued for the city.", zh: "市里发布了一条严重暴风雪预警。" },
    title: "The Storm Warning",
    subtitle: "家里 · 暴风雪预警",
    avatar: "🌨️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're calling for thirty centimeters of snow tonight.", zh: "他们预报今晚会下三十厘米的雪。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a lot of snow, we should prepare.", zh: "这雪量可不少，我们应该做好准备。", correct: true, xp: 10 },
          { text: "That's barely any snow, we can ignore it.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a lot of snow, we should prepare.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you checked if we have enough candles?", zh: "你检查过我们蜡烛够不够了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've checked, and we have plenty.", zh: "我检查过了，我们蜡烛很充足。", correct: true, xp: 10 },
          { text: "I'm checking that at this exact moment.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've checked, and we have plenty.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should charge our phones before the power goes out.", zh: "我们应该在停电之前把手机充满电。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good thinking, I'll plug mine in now.", zh: "想得周到，我现在就去充。", correct: true, xp: 10 },
          { text: "Bad thinking, our phones are already full.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good thinking, I'll plug mine in now.",
        next: null
      }
    }
  },
  {
    id: "stocking-up",
    transition: { en: "They make a quick trip to the store before it closes early.", zh: "他们赶在商店提前关门前去买了点东西。" },
    title: "Stocking Up",
    subtitle: "超市 · 采购应急物资",
    avatar: "🛒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What do we still need to buy before we leave?", zh: "我们走之前还需要买什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We still need bottled water and batteries.", zh: "我们还需要瓶装水和电池。", correct: true, xp: 10 },
          { text: "We don't need to buy anything at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答清单 → We still need bottled water and batteries.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This line is much longer than usual today.", zh: "今天这条队伍比平时长多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, everyone's preparing for the storm.", zh: "确实是，大家都在为暴风雪做准备。", correct: true, xp: 10 },
          { text: "It isn't, this line looks shorter than usual.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, everyone's preparing for the storm.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab some extra blankets while we're here.", zh: "我们既然在这儿，就多拿几条毯子吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, let's grab a few more.", zh: "好主意，我们再多拿几条吧。", correct: true, xp: 10 },
          { text: "Let's skip the blankets, we have enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, let's grab a few more.",
        next: null
      }
    }
  },
  {
    id: "the-power-goes-out",
    transition: { en: "That night, the lights suddenly flicker and go dark.", zh: "那天晚上，灯突然闪了一下就熄灭了。" },
    title: "The Power Goes Out",
    subtitle: "家里 · 突然停电",
    avatar: "🕯️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The power just went out across the whole street.", zh: "整条街刚刚都停电了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really did, let's light the candles.", zh: "确实是，我们点上蜡烛吧。", correct: true, xp: 10 },
          { text: "It really didn't, everything looks fine to me.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It really did, let's light the candles.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you feeling okay in the dark and cold?", zh: "在黑暗和寒冷中你还好吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I'm doing fine, just a bit cold.", zh: "还好，就是有点冷。", correct: true, xp: 10 },
          { text: "No, darkness has never bothered me at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I'm doing fine, just a bit cold.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If the power stays off, we'll use the fireplace.", zh: "如果电一直没来，我们就用壁炉取暖。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it stays off, that sounds like a good plan.", zh: "如果一直没电，这个计划听起来不错。", correct: true, xp: 10 },
          { text: "If it stays off, let's just sit in the cold.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it stays off, that sounds like a good plan.",
        next: null
      }
    }
  },
  {
    id: "waiting-it-out",
    transition: { en: "They wrap up in blankets and wait for the storm to pass.", zh: "他们裹着毯子，等待暴风雪过去。" },
    title: "Waiting It Out",
    subtitle: "家里 · 等待风暴过去",
    avatar: "🛋️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This feels a bit like camping indoors, doesn't it?", zh: "这感觉有点像在室内露营，不是吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, it's kind of cozy.", zh: "确实是，感觉还挺温馨的。", correct: true, xp: 10 },
          { text: "It doesn't feel like anything special.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, it's kind of cozy.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How long do you think the storm will last?", zh: "你觉得这场暴风雪会持续多久？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I think it'll last through most of the night.", zh: "我觉得它会持续大半个晚上。", correct: true, xp: 10 },
          { text: "I think it already ended an hour ago.", correct: false }
        ],
        hintOnWrong: "wh-问题回答预测 → I think it'll last through most of the night.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's tell stories by candlelight until we're tired.", zh: "我们就着烛光讲故事，讲到困了为止。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "I love that idea, let's start now.", zh: "我很喜欢这个主意，我们现在就开始吧。", correct: true, xp: 10 },
          { text: "Let's just sit in silence instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → I love that idea, let's start now.",
        next: null
      }
    }
  },
  {
    id: "morning-after",
    transition: { en: "By morning, the storm has passed and the power is back.", zh: "到了早上，暴风雪已经过去，电也来了。" },
    title: "Morning After",
    subtitle: "家里 · 风暴过后",
    avatar: "☀️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The power's finally back on, and the sun is out.", zh: "电终于来了，太阳也出来了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Finally, I really missed having lights.", zh: "终于啊，我真的很想念有灯光的日子。", correct: true, xp: 10 },
          { text: "Finally, though I preferred it without power.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Finally, I really missed having lights.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look how much snow piled up outside.", zh: "看看外面堆了多少雪。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Wow, that's way more than I expected.", zh: "哇，比我预想的多多了。", correct: true, xp: 10 },
          { text: "Wow, that's much less than I expected.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Wow, that's way more than I expected.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're going to need to shovel the whole driveway.", zh: "我们得把整条车道都铲一遍雪。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We are, let's grab the shovels and start.", zh: "确实需要，我们拿铲子开始吧。", correct: true, xp: 10 },
          { text: "We're not, the snow can just melt on its own.", correct: false }
        ],
        hintOnWrong: "回应未来时 → We are, let's grab the shovels and start.",
        next: null
      }
    }
  },
  {
    id: "shoveling-the-driveway",
    transition: { en: "They bundle up and start shoveling the driveway together.", zh: "他们裹得严严实实，一起开始铲车道上的雪。" },
    title: "Shoveling the Driveway",
    subtitle: "车道 · 铲雪",
    avatar: "🧤",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you doing okay with the heavy lifting?", zh: "搬这些重活你还好吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I'm managing, but let's take breaks.", zh: "还好，不过我们中途休息一下吧。", correct: true, xp: 10 },
          { text: "No, heavy lifting has never bothered me once.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I'm managing, but let's take breaks.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This side of the driveway is icier than the other.", zh: "车道这一边比另一边更结冰。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's put down some salt here first.", zh: "确实是，我们先在这边撒点盐吧。", correct: true, xp: 10 },
          { text: "It isn't, both sides look exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's put down some salt here first.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Careful, you shouldn't lift too much with the baby coming.", zh: "小心点，宝宝快出生了，你不该抬太重的东西。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "You're right, and I'll let you handle the heavy parts.", zh: "你说得对，重的部分就让你来吧。", correct: true, xp: 10 },
          { text: "You're right, but I'll keep lifting anyway.", correct: false }
        ],
        hintOnWrong: "用连接词 → You're right, and I'll let you handle the heavy parts.",
        next: null
      }
    }
  },
  {
    id: "checking-on-neighbors",
    transition: { en: "They walk over to check on an elderly neighbor.", zh: "他们走过去看看一位年长的邻居。" },
    title: "Checking on Neighbors",
    subtitle: "邻居家 · 互相照应",
    avatar: "🏘️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We wanted to make sure you got through the storm okay.", zh: "我们想确认一下您暴风雪期间没事。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's so kind, thank you for checking on me.", zh: "你们真是太好了，谢谢来看我。", correct: true, xp: 10 },
          { text: "That's unnecessary, I never needed any help.", correct: false }
        ],
        hintOnWrong: "过去时表达关心的回应 → That's so kind, thank you for checking on me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you need any help shoveling your walkway?", zh: "您需要帮忙铲一下人行道上的雪吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, please, that would be a huge help.", zh: "好的，麻烦你们了，这真的帮了大忙。", correct: true, xp: 10 },
          { text: "No, I actually enjoy the extra exercise alone.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, please, that would be a huge help.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You two are wonderful neighbors, truly.", zh: "你们俩真是很棒的邻居。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, we're happy to help anytime.", zh: "谢谢您，我们随时都乐意帮忙。", correct: true, xp: 10 },
          { text: "Thank you, though helping isn't really our thing.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you, we're happy to help anytime.",
        next: null
      }
    }
  },
  {
    id: "a-close-call",
    transition: { en: "On the walk back, one of them slips on a patch of ice.", zh: "回家的路上，其中一人在一块冰上滑了一下。" },
    title: "A Close Call",
    subtitle: "路上 · 有惊无险",
    avatar: "😬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you okay? That looked like a bad fall.", zh: "你没事吧？那一下看起来摔得挺重。" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I'm okay, just a little shaken up.", zh: "我没事，就是有点被吓到了。", correct: true, xp: 10 },
          { text: "I'm not okay, call an ambulance right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I'm okay, just a little shaken up.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should be extra careful walking on ice like this.", zh: "在这种冰面上走路我们应该格外小心。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, let's walk more slowly from here.", zh: "你说得对，接下来我们走慢一点吧。", correct: true, xp: 10 },
          { text: "You're wrong, walking fast is always safer.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, let's walk more slowly from here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "With the baby coming, we really can't take chances.", zh: "宝宝快出生了，我们真的不能冒险。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "You're right, we can't be careless anymore.", zh: "你说得对，我们不能再粗心大意了。", correct: true, xp: 10 },
          { text: "You're wrong, we can take all the risks we want.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/许可 → You're right, we can't be careless anymore.",
        next: null
      }
    }
  },
  {
    id: "warming-up-with-cocoa",
    transition: { en: "Back home, they warm up with hot cocoa.", zh: "回到家后，他们喝着热可可暖和身子。" },
    title: "Warming Up with Cocoa",
    subtitle: "家里 · 热可可取暖",
    avatar: "☕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Nothing beats hot cocoa after a day like that.", zh: "经历了这样的一天，没有什么比热可可更好了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Absolutely nothing, this is exactly what we needed.", zh: "绝对没有，这正是我们需要的。", correct: true, xp: 10 },
          { text: "Actually, cold water would be better right now.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Absolutely nothing, this is exactly what we needed.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This whole day turned into quite an adventure.", zh: "这一整天变成了一场不小的冒险。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really did, one we won't forget soon.", zh: "确实如此，这一天我们不会很快忘记。", correct: true, xp: 10 },
          { text: "It really didn't, today felt completely ordinary.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really did, one we won't forget soon.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even in the storm, I felt safe with you.", zh: "即使在暴风雪里，和你在一起我也感到安心。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even in the storm, I felt exactly the same.", zh: "即使在暴风雪里，我的感受也完全一样。", correct: true, xp: 10 },
          { text: "Even in the storm, I felt scared the whole time.", correct: false }
        ],
        hintOnWrong: "让步句 → Even in the storm, I felt exactly the same.",
        next: null
      }
    }
  },
  {
    id: "grateful-for-the-quiet",
    transition: { en: "That night, they sit together, grateful the storm brought them closer.", zh: "那天晚上，他们坐在一起，感激这场暴风雪让彼此更亲近。" },
    title: "Grateful for the Quiet",
    subtitle: "家里 · 感激这份安静",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Days like today remind me what really matters.", zh: "像今天这样的日子让我想起什么才是真正重要的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They remind me of that too, honestly.", zh: "说实话，我也有同样的感受。", correct: true, xp: 10 },
          { text: "They remind me of nothing important at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They remind me of that too, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How are you feeling about everything coming next?", zh: "对接下来即将到来的一切，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I feel ready, especially after a day like this.", zh: "我感觉自己准备好了，尤其是经历了今天这样的一天。", correct: true, xp: 10 },
          { text: "I feel completely unprepared for anything at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → I feel ready, especially after a day like this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's remember today, no matter what happens next.", zh: "不管接下来发生什么，我们都要记住今天。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's remember today, always.", zh: "我们要永远记住今天。", correct: true, xp: 10 },
          { text: "Let's just forget about today completely.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's remember today, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "severe", zh: "严重的", category: "community" },
  { en: "storm warning", zh: "暴风雪预警", category: "community" },
  { en: "issued", zh: "发布了的", category: "community" },
  { en: "centimeters", zh: "厘米", category: "community" },
  { en: "prepare", zh: "准备", category: "community" },
  { en: "candles", zh: "蜡烛", category: "community" },
  { en: "plenty", zh: "充足", category: "community" },
  { en: "charge", zh: "充电", category: "community" },
  { en: "power goes out", zh: "停电", category: "community" },
  { en: "plug in", zh: "插上电源", category: "community" },
  { en: "bottled water", zh: "瓶装水", category: "community" },
  { en: "batteries", zh: "电池", category: "community" },
  { en: "usual", zh: "平常的", category: "community" },
  { en: "preparing", zh: "在准备", category: "community" },
  { en: "grab", zh: "拿，抓取", category: "community" },
  { en: "blankets", zh: "毯子（复数）", category: "community" },
  { en: "flicker", zh: "闪烁", category: "community" },
  { en: "street", zh: "街道", category: "community" },
  { en: "light the candles", zh: "点上蜡烛", category: "community" },
  { en: "fireplace", zh: "壁炉", category: "community" },
  { en: "wrap up", zh: "裹起来", category: "community" },
  { en: "camping", zh: "露营", category: "community" },
  { en: "indoors", zh: "室内", category: "community" },
  { en: "cozy", zh: "温馨的", category: "community" },
  { en: "last", zh: "持续", category: "community" },
  { en: "candlelight", zh: "烛光", category: "community" },
  { en: "piled up", zh: "堆积起来", category: "community" },
  { en: "shovel", zh: "铲雪", category: "community" },
  { en: "driveway", zh: "车道", category: "community" },
  { en: "bundle up", zh: "裹得严严实实", category: "community" },
  { en: "heavy lifting", zh: "搬重物", category: "community" },
  { en: "managing", zh: "应付得来", category: "community" },
  { en: "icier", zh: "更结冰的（icy 比较级）", category: "community" },
  { en: "salt", zh: "盐", category: "community" },
  { en: "elderly", zh: "年长的", category: "community" },
  { en: "got through", zh: "熬过了", category: "community" },
  { en: "walkway", zh: "人行道", category: "community" },
  { en: "huge help", zh: "大帮助", category: "community" },
  { en: "neighbors", zh: "邻居（复数）", category: "community" },
  { en: "slips", zh: "滑倒", category: "community" },
  { en: "patch of ice", zh: "一块冰", category: "community" },
  { en: "fall", zh: "摔倒", category: "community" },
  { en: "shaken up", zh: "被吓到的", category: "community" },
  { en: "extra careful", zh: "格外小心", category: "community" },
  { en: "take chances", zh: "冒险", category: "community" },
  { en: "careless", zh: "粗心的", category: "community" },
  { en: "hot cocoa", zh: "热可可", category: "community" },
  { en: "beats", zh: "胜过", category: "community" },
  { en: "adventure", zh: "冒险经历", category: "community" },
  { en: "forget", zh: "忘记", category: "community" },
  { en: "safe", zh: "安全的", category: "community" },
  { en: "remind", zh: "提醒", category: "community" },
  { en: "matters", zh: "重要", category: "community" },
  { en: "unprepared", zh: "没准备好的", category: "community" },
  { en: "remember", zh: "记住", category: "community" }
);
