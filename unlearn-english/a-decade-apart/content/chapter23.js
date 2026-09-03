// 内容数据层：第二十三章，紧接第二十二章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter22.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：蜜月旅行。全新词汇领域：订机票/办登机/行李托运/酒店入住/货币兑换/
// 旅游观光——跟第一章"入境"呼应，但这次是从加拿大出发去别处度假。

GAME_CONTENT.scenes.push(
  {
    id: "booking-the-trip",
    transition: { en: "A week after the wedding, you sit down to plan a honeymoon.", zh: "婚礼后一周，你们坐下来计划蜜月旅行。" },
    title: "Booking the Trip",
    subtitle: "书店里 · 订蜜月行程",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where should we go for our honeymoon?", zh: "我们蜜月去哪儿好呢？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "Where do you feel like going?", zh: "你想去哪儿？", correct: true, xp: 10 },
          { text: "Where we go doesn't matter to me.", correct: false }
        ],
        hintOnWrong: "追问对方想法（wh-question）→ Where do you feel like going?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we booked flights today, we could save quite a bit.", zh: "如果我们今天订机票，能省不少钱。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we booked today, let's do it right now.", zh: "如果今天订划算，那我们现在就订吧。", correct: true, xp: 10 },
          { text: "If we booked today, we'd probably regret it.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we booked today, let's do it right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This airline has a direct flight with no layovers.", zh: "这家航空公司有直飞航班，不用转机。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "No layovers sounds perfect to me.", zh: "不用转机对我来说太完美了。", correct: true, xp: 10 },
          { text: "No layovers sounds boring, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ No layovers sounds perfect to me.",
        next: null
      }
    }
  },
  {
    id: "packing-bags",
    title: "Packing Bags",
    subtitle: "公寓 · 收拾行李",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you checked the airline's baggage allowance?", zh: "你查过航空公司的行李额度了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've already checked it twice.", zh: "我已经查过两遍了。", correct: true, xp: 10 },
          { text: "I've never once checked it.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've already checked it twice.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your suitcase looks like it might go over the weight limit.", zh: "你的行李箱看起来可能会超重。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It might, so let's weigh it now.", zh: "有可能，那我们现在就称一下吧。", correct: true, xp: 10 },
          { text: "It might, but I don't really care.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It might, so let's weigh it now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Don't forget your passport and boarding pass.", zh: "别忘了护照和登机牌。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They're already in my carry-on.", zh: "它们已经在我的随身行李里了。", correct: true, xp: 10 },
          { text: "I forgot both of those completely.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ They're already in my carry-on.",
        next: null
      }
    }
  },
  {
    id: "checking-in",
    transition: { en: "At the airport, you approach the check-in counter.", zh: "在机场，你们走向值机柜台。" },
    title: "Checking In",
    subtitle: "机场 · 办理登机",
    avatar: "👨‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can I see your passports and booking confirmation, please?", zh: "可以看一下您的护照和订票确认单吗？" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, here they are.", zh: "当然，给您。", correct: true, xp: 10 },
          { text: "We don't have any of that.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, here they are.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Would you like a window seat or an aisle seat?", zh: "您想要靠窗还是靠过道的座位？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "A window seat, if that's available.", zh: "靠窗的，如果还有的话。", correct: true, xp: 10 },
          { text: "Neither, I'd like to stand the whole flight.", correct: false }
        ],
        hintOnWrong: "简单回答 → A window seat, if that's available.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Your gate closes thirty minutes before departure.", zh: "登机口在起飞前三十分钟关闭。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thirty minutes, got it. We'll be there early.", zh: "三十分钟，明白了。我们会早点到的。", correct: true, xp: 10 },
          { text: "Thirty minutes seems like plenty of time to wander.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Thirty minutes, got it. We'll be there early.",
        next: null
      }
    }
  },
  {
    id: "at-security",
    title: "Through Security",
    subtitle: "机场 · 安检",
    avatar: "👮",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please remove your shoes and place your bag on the belt.", zh: "请脱鞋，把包放到传送带上。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Sure, one moment please.", zh: "好的，请稍等。", correct: true, xp: 10 },
          { text: "I'd rather keep my shoes on.", correct: false }
        ],
        hintOnWrong: "礼貌配合 → Sure, one moment please.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have any liquids over 100 milliliters?", zh: "您有超过100毫升的液体吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, I don't have anything like that.", zh: "没有，我没带这类东西。", correct: true, xp: 10 },
          { text: "Yes, I have several full bottles.", correct: false }
        ],
        hintOnWrong: "否定回答 → No, I don't have anything like that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "All clear. Enjoy your trip!", zh: "都没问题。祝您旅途愉快！" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you so much, you too.", zh: "太谢谢您了，您也是。", correct: true, xp: 10 },
          { text: "Finally, that took forever.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you so much, you too.",
        next: null
      }
    }
  },
  {
    id: "in-the-air",
    transition: { en: "Once the plane levels off, you both relax for the first time all day.", zh: "飞机平飞后，你们俩这一天第一次真正放松下来。" },
    title: "In the Air",
    subtitle: "飞机上 · 万米高空",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Would you like chicken or pasta for your meal?", zh: "您的正餐想要鸡肉还是意面？", voice: "emma" },
        skill: "work",
        grammarTag: "do-question",
        choices: [
          { text: "Pasta sounds good to me, thanks.", zh: "意面听起来不错，谢谢。", correct: true, xp: 10 },
          { text: "Neither, I'll just skip the meal.", correct: false }
        ],
        hintOnWrong: "简单回答 → Pasta sounds good to me, thanks.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I can't believe we're actually on our way.", zh: "我简直不敢相信我们真的在路上了。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're really doing this, aren't we?", zh: "我们真的在做这件事了，对吧？", correct: true, xp: 10 },
          { text: "We're not really going anywhere, are we?", correct: false }
        ],
        hintOnWrong: "用现在进行时 → We're really doing this, aren't we?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Ten hours until we land. What should we watch?", zh: "还有十小时才降落。我们看点什么？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "What do you feel like watching?", zh: "你想看什么？", correct: true, xp: 10 },
          { text: "What we watch is a waste of time.", correct: false }
        ],
        hintOnWrong: "追问对方意见 → What do you feel like watching?",
        next: null
      }
    }
  },
  {
    id: "arriving-abroad",
    transition: { en: "After landing, you clear customs in an unfamiliar country.", zh: "落地后，你们在一个陌生的国家过了海关。" },
    title: "Arriving Abroad",
    subtitle: "海关 · 抵达异国",
    avatar: "👮",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What is the purpose of your visit?", zh: "您此行的目的是什么？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We're here on our honeymoon.", zh: "我们是来度蜜月的。", correct: true, xp: 10 },
          { text: "We're not sure, honestly.", correct: false }
        ],
        hintOnWrong: "简单说明（陈述句）→ We're here on our honeymoon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Congratulations! How long will you be staying?", zh: "恭喜！您打算待多久？" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We'll be staying for about ten days.", zh: "我们大概会待十天左右。", correct: true, xp: 10 },
          { text: "We'll never leave, probably.", correct: false }
        ],
        hintOnWrong: "用 will 回答 → We'll be staying for about ten days.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Welcome, and enjoy your stay.", zh: "欢迎光临，祝您旅途愉快。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, we're so excited to be here.", zh: "谢谢，能来这儿我们太激动了。", correct: true, xp: 10 },
          { text: "Thank you, though we'd rather be home.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you, we're so excited to be here.",
        next: null
      }
    }
  },
  {
    id: "checking-into-the-hotel",
    title: "Checking Into the Hotel",
    subtitle: "酒店 · 办理入住",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome! Do you have a reservation with us?", zh: "欢迎光临！您有在我们这儿预订吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's under my wife's name.", zh: "有的，是在我妻子名下订的。", correct: true, xp: 10 },
          { text: "No, we just walked in randomly.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's under my wife's name.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've upgraded your room for your honeymoon. Congratulations.", zh: "我们把您的房间升级了，祝贺新婚。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've upgraded it? That's so kind of you.", zh: "您升级了？您真是太好了。", correct: true, xp: 10 },
          { text: "You've made a mistake, probably.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've upgraded it? That's so kind of you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Breakfast is served until ten, and checkout is at noon.", zh: "早餐供应到十点，退房时间是中午十二点。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "Good to know, thank you for explaining.", zh: "知道了，谢谢您的说明。", correct: true, xp: 10 },
          { text: "That schedule doesn't work for us at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Good to know, thank you for explaining.",
        next: null
      }
    }
  },
  {
    id: "exchanging-currency",
    title: "Exchanging Currency",
    subtitle: "货币兑换处 · 换外币",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much would you like to exchange today?", zh: "您今天想换多少钱？" },
        skill: "banking",
        grammarTag: "wh-question",
        choices: [
          { text: "How much is the exchange rate today?", zh: "今天的汇率是多少？", correct: true, xp: 10 },
          { text: "How much money doesn't concern me.", correct: false }
        ],
        hintOnWrong: "追问汇率 → How much is the exchange rate today?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's a small commission fee on every exchange.", zh: "每笔兑换都有一点手续费。" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "That's fine, small fees don't bother me.", zh: "没关系，小额手续费我不介意。", correct: true, xp: 10 },
          { text: "That's outrageous, I refuse to pay it.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's fine, small fees don't bother me.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here's your cash, all in smaller bills as you asked.", zh: "这是您的现金，都按您说的换成了小面额。" },
        skill: "banking",
        grammarTag: "reported-speech",
        choices: [
          { text: "I asked for that, and you delivered perfectly.", zh: "我确实是这么要求的，您办得太好了。", correct: true, xp: 10 },
          { text: "I never asked for smaller bills at all.", correct: false }
        ],
        hintOnWrong: "用间接引语呼应 → I asked for that, and you delivered perfectly.",
        next: null
      }
    }
  },
  {
    id: "exploring-the-old-town",
    transition: { en: "That evening, you wander through the old town together.", zh: "那天傍晚，你们俩一起漫步在老城区。" },
    title: "Exploring the Old Town",
    subtitle: "老城区 · 漫步观光",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This street is older than both our countries combined.", zh: "这条街比我们两个国家加起来的历史都要长。", voice: "emma" },
        skill: "work",
        grammarTag: "comparative",
        choices: [
          { text: "Older than that? I can hardly imagine it.", zh: "比那还老？我简直难以想象。", correct: true, xp: 10 },
          { text: "Newer than that, probably, honestly.", correct: false }
        ],
        hintOnWrong: "用比较级 → Older than that? I can hardly imagine it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we get lost on purpose for a while?", zh: "我们要不要故意迷路一会儿？", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's get completely lost together.", zh: "我们就一起彻底迷路吧。", correct: true, xp: 10 },
          { text: "Let's follow the map exactly, please.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's get completely lost together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I never want this trip to end.", zh: "我真希望这趟旅行永远不要结束。", voice: "emma" },
        skill: "work",
        grammarTag: "subjunctive",
        choices: [
          { text: "I wish it never had to end either.", zh: "我也希望它永远不用结束。", correct: true, xp: 10 },
          { text: "I wish it would end sooner, honestly.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → I wish it never had to end either.",
        next: null
      }
    }
  },
  {
    id: "the-flight-home",
    transition: { en: "Ten days later, you board the flight back to Toronto.", zh: "十天后，你们登上了返回多伦多的航班。" },
    title: "The Flight Home",
    subtitle: "机场 · 返程",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Ready to go back to real life?", zh: "准备好回到真实生活了吗？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Ready, and grateful for this whole trip.", zh: "准备好了，而且对这趟旅行满怀感激。", correct: true, xp: 10 },
          { text: "Not ready at all, let's just stay here.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Ready, and grateful for this whole trip.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've made a decade's worth of memories in just ten days.", zh: "我们十天里攒下了够一辈子回味的回忆。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've made memories that'll last forever.", zh: "我们攒下的回忆会永远留在心里。", correct: true, xp: 10 },
          { text: "We've made memories nobody will care about.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've made memories that'll last forever.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Home isn't a place. It's whoever's sitting next to me.", zh: "家不是一个地方。家是坐在我身边的人。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "Home is whoever's beside you, exactly.", zh: "家就是在你身边的那个人，正是如此。", correct: true, xp: 10 },
          { text: "Home is definitely just a place, though.", correct: false }
        ],
        hintOnWrong: "用定语从句 → Home is whoever's beside you, exactly.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Where do you feel like going?", zh: "你想去哪儿？" },
  { en: "If we booked today, let's do it right now.", zh: "如果今天订划算，那我们现在就订吧。" },
  { en: "No layovers sounds perfect to me.", zh: "不用转机对我来说太完美了。" },
  { en: "I've already checked it twice.", zh: "我已经查过两遍了。" },
  { en: "It might, so let's weigh it now.", zh: "有可能，那我们现在就称一下吧。" },
  { en: "They're already in my carry-on.", zh: "它们已经在我的随身行李里了。" },
  { en: "Of course, here they are.", zh: "当然，给您。" },
  { en: "A window seat, if that's available.", zh: "靠窗的，如果还有的话。" },
  { en: "Thirty minutes, got it. We'll be there early.", zh: "三十分钟，明白了。我们会早点到的。" },
  { en: "Sure, one moment please.", zh: "好的，请稍等。" },
  { en: "No, I don't have anything like that.", zh: "没有，我没带这类东西。" },
  { en: "Thank you so much, you too.", zh: "太谢谢您了，您也是。" },
  { en: "Pasta sounds good to me, thanks.", zh: "意面听起来不错，谢谢。" },
  { en: "We're really doing this, aren't we?", zh: "我们真的在做这件事了，对吧？" },
  { en: "What do you feel like watching?", zh: "你想看什么？" },
  { en: "We're here on our honeymoon.", zh: "我们是来度蜜月的。" },
  { en: "We'll be staying for about ten days.", zh: "我们大概会待十天左右。" },
  { en: "Thank you, we're so excited to be here.", zh: "谢谢，能来这儿我们太激动了。" },
  { en: "Yes, it's under my wife's name.", zh: "有的，是在我妻子名下订的。" },
  { en: "You've upgraded it? That's so kind of you.", zh: "您升级了？您真是太好了。" },
  { en: "Good to know, thank you for explaining.", zh: "知道了，谢谢您的说明。" },
  { en: "How much is the exchange rate today?", zh: "今天的汇率是多少？" },
  { en: "That's fine, small fees don't bother me.", zh: "没关系，小额手续费我不介意。" },
  { en: "I asked for that, and you delivered perfectly.", zh: "我确实是这么要求的，您办得太好了。" },
  { en: "Older than that? I can hardly imagine it.", zh: "比那还老？我简直难以想象。" },
  { en: "Let's get completely lost together.", zh: "我们就一起彻底迷路吧。" },
  { en: "I wish it never had to end either.", zh: "我也希望它永远不用结束。" },
  { en: "Ready, and grateful for this whole trip.", zh: "准备好了，而且对这趟旅行满怀感激。" },
  { en: "We've made memories that'll last forever.", zh: "我们攒下的回忆会永远留在心里。" },
  { en: "Home is whoever's beside you, exactly.", zh: "家就是在你身边的那个人，正是如此。" }
);
