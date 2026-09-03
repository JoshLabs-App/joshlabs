// 内容数据层：第五十章，紧接第四十九章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：家里空间不够用了，两人开始看房，准备换一套更大的房子。全新词汇领域：
// 房产中介/看房/出价/房屋检查。

GAME_CONTENT.scenes.push(
  {
    id: "outgrowing-the-house",
    transition: { en: "With a toddler and a growing business, the house feels too small.", zh: "带着蹒跚学步的孩子和不断扩大的生意，房子渐渐显得太小了。" },
    title: "Outgrowing the House",
    subtitle: "家里 · 空间不够了",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This house feels smaller every single month.", zh: "这房子感觉每个月都变得更小了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, we're bursting at the seams.", zh: "确实是，我们已经快住不下了。", correct: true, xp: 10 },
          { text: "It really doesn't, this house feels huge.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, we're bursting at the seams.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we start looking at bigger places?", zh: "我们要开始看更大的房子了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's start browsing listings tonight.", zh: "好，我们今晚就开始看房源吧。", correct: true, xp: 10 },
          { text: "No, we'll just live in a smaller space forever.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's start browsing listings tonight.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to talk to a real estate agent soon.", zh: "我们很快就得找一位房产中介聊聊了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "True, let's get a recommendation from a friend.", zh: "没错，我们找朋友推荐一个吧。", correct: true, xp: 10 },
          { text: "True, though agents seem completely unnecessary.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → True, let's get a recommendation from a friend.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-agent",
    transition: { en: "They meet a real estate agent to talk through what they need.", zh: "他们和一位房产中介见面，聊聊自己的需求。" },
    title: "Meeting the Agent",
    subtitle: "房产中介 · 首次咨询",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What's your budget for the new place?", zh: "你们买新房子的预算是多少？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We're hoping to stay under six hundred thousand.", zh: "我们希望控制在六十万以内。", correct: true, xp: 10 },
          { text: "Budget doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答预算 → We're hoping to stay under six hundred thousand.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How many bedrooms are you looking for?", zh: "你们想要几间卧室？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "At least three, plus a home office.", zh: "至少三间，再加一个家庭办公室。", correct: true, xp: 10 },
          { text: "We don't need any bedrooms at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答需求 → At least three, plus a home office.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll send you a few listings that match.", zh: "我会给你们发几套符合条件的房源。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Great, we'll take a look tonight.", zh: "太好了，我们今晚就看看。", correct: true, xp: 10 },
          { text: "Great, though we probably won't check them.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Great, we'll take a look tonight.",
        next: null
      }
    }
  },
  {
    id: "the-first-showing",
    transition: { en: "They tour their first potential house with the agent.", zh: "他们和中介一起去看了第一套潜在的房子。" },
    title: "The First Showing",
    subtitle: "房屋现场 · 首次看房",
    avatar: "🚪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This kitchen is bigger than the one we have now.", zh: "这个厨房比我们现在的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I love how open it feels.", zh: "确实是，我很喜欢这种开阔的感觉。", correct: true, xp: 10 },
          { text: "It really isn't, our current kitchen is bigger.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I love how open it feels.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you picture our family living here?", zh: "你能想象我们一家人住在这里吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I actually can, quite easily.", zh: "其实我可以，还挺容易想象的。", correct: true, xp: 10 },
          { text: "I can't picture that at all, honestly.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I actually can, quite easily.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's check out the backyard before we leave.", zh: "走之前我们去看看后院吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's go take a look now.", zh: "好主意，我们现在就去看看吧。", correct: true, xp: 10 },
          { text: "Let's skip the backyard, it doesn't matter.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's go take a look now.",
        next: null
      }
    }
  },
  {
    id: "comparing-two-houses",
    transition: { en: "After several showings, they narrow it down to two houses.", zh: "看了几套房子后，他们把范围缩小到了两套。" },
    title: "Comparing Two Houses",
    subtitle: "家里 · 比较两套房子",
    avatar: "🏡",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which house has the better school district?", zh: "哪套房子的学区更好？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "The second one has a much better district.", zh: "第二套的学区好得多。", correct: true, xp: 10 },
          { text: "Neither house is near any school district.", correct: false }
        ],
        hintOnWrong: "wh-问题回答比较 → The second one has a much better district.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The first house is closer to your bakery kitchen.", zh: "第一套离你的烘焙厨房更近。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's true, and that matters a lot to me.", zh: "确实如此，这对我来说很重要。", correct: true, xp: 10 },
          { text: "That's true, though distance doesn't matter.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's true, and that matters a lot to me.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is such a hard decision to make.", zh: "这真是一个很难做的决定。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, let's sleep on it tonight.", zh: "确实是，我们今晚先好好想想吧。", correct: true, xp: 10 },
          { text: "It really isn't, let's just flip a coin.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, let's sleep on it tonight.",
        next: null
      }
    }
  },
  {
    id: "making-an-offer",
    transition: { en: "After deciding, they prepare to make an offer on the house.", zh: "做出决定后，他们准备对这套房子出价。" },
    title: "Making an Offer",
    subtitle: "房产中介 · 准备出价",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much would you like to offer?", zh: "你们想出价多少？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We'd like to offer the full asking price.", zh: "我们想按全价出价。", correct: true, xp: 10 },
          { text: "We'd like to offer absolutely nothing.", correct: false }
        ],
        hintOnWrong: "wh-问题回答金额 → We'd like to offer the full asking price.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's another offer that came in higher than yours.", zh: "有另一份出价比你们的高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "If that's true, we might raise our offer.", zh: "如果真是这样，我们可能会提高出价。", correct: true, xp: 10 },
          { text: "If that's true, let's just walk away entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → If that's true, we might raise our offer.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll hear back from the sellers by tomorrow.", zh: "明天之前我们会收到卖家的回复。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, we'll try not to think about it too much.", zh: "好的，我们尽量不去多想。", correct: true, xp: 10 },
          { text: "Okay, though we won't be thinking about anything else.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Okay, we'll try not to think about it too much.",
        next: null
      }
    }
  },
  {
    id: "the-anxious-wait",
    transition: { en: "That night, they wait anxiously for news about their offer.", zh: "那天晚上，他们焦虑地等待出价的消息。" },
    title: "The Anxious Wait",
    subtitle: "家里 · 焦虑地等待",
    avatar: "😬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I keep checking my phone every five minutes.", zh: "我每隔五分钟就要看一次手机。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm doing the exact same thing, honestly.", zh: "说实话，我也在做一模一样的事。", correct: true, xp: 10 },
          { text: "I'm not checking anything at all right now.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I'm doing the exact same thing, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Whatever happens, we'll find the right house eventually.", zh: "不管结果如何，我们最终都会找到合适的房子。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever happens, that thought helps a lot.", zh: "不管结果如何，这个想法真的很有帮助。", correct: true, xp: 10 },
          { text: "Whatever happens, I can't stop worrying.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever happens, that thought helps a lot.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's just distract ourselves until we hear something.", zh: "在收到消息之前，我们分散一下注意力吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's watch something together.", zh: "好主意，我们一起看点什么吧。", correct: true, xp: 10 },
          { text: "Let's just stare at the phone instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's watch something together.",
        next: null
      }
    }
  },
  {
    id: "the-good-news",
    transition: { en: "The next morning, the agent calls with exciting news.", zh: "第二天早上，中介打来电话，带来了令人兴奋的消息。" },
    title: "The Good News",
    subtitle: "电话 · 好消息",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Congratulations, your offer was accepted!", zh: "恭喜，你们的出价被接受了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I'm honestly speechless right now.", zh: "我现在真的说不出话来。", correct: true, xp: 10 },
          { text: "I already knew this would happen anyway.", correct: false }
        ],
        hintOnWrong: "过去时回应 → I can't believe this is actually happening.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You'll need to schedule a home inspection next.", zh: "接下来你们需要预约一次房屋检查。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, we'll call an inspector this week.", zh: "对，我们这周就联系检查员。", correct: true, xp: 10 },
          { text: "Right, though inspections seem unnecessary now.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, we'll call an inspector this week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is finally, actually happening for our family.", zh: "这终于——真的要为我们一家发生了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, I'm overwhelmed with joy.", zh: "确实如此，我满心都是喜悦。", correct: true, xp: 10 },
          { text: "It really isn't, nothing feels different yet.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, I'm overwhelmed with joy.",
        next: null
      }
    }
  },
  {
    id: "the-home-inspection",
    transition: { en: "An inspector walks through the house checking for issues.", zh: "一位检查员在房子里检查有没有问题。" },
    title: "The Home Inspection",
    subtitle: "新房 · 房屋检查",
    avatar: "🔍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The roof looks newer than I expected.", zh: "这屋顶看起来比我预想的要新。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a relief, roofs are expensive to replace.", zh: "这让人松了口气，换屋顶很贵的。", correct: true, xp: 10 },
          { text: "That's odd, roofs never really matter.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a relief, roofs are expensive to replace.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's a small issue with the basement plumbing.", zh: "地下室的管道有一个小问题。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Okay, how serious of an issue is it?", zh: "好的，这问题严重吗？", correct: true, xp: 10 },
          { text: "Okay, plumbing issues never matter at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Okay, how serious of an issue is it?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Overall, this house is in better shape than most I inspect.", zh: "总的来说，这房子的状况比我检查过的大多数房子都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's great to hear, thank you for checking.", zh: "听到这个真好，谢谢你的检查。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped for a perfect score.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's great to hear, thank you for checking.",
        next: null
      }
    }
  },
  {
    id: "closing-day",
    transition: { en: "Weeks later, they sign the final paperwork at closing.", zh: "几周后，他们在交易结束时签署了最后的文件。" },
    title: "Closing Day",
    subtitle: "律师事务所 · 完成交易",
    avatar: "🔑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please sign at the bottom of each page.", zh: "请在每一页底部签名。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, just point me to the first one.", zh: "好的，告诉我第一页在哪儿就行。", correct: true, xp: 10 },
          { text: "Sorry, I'd rather not sign anything today.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, just point me to the first one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Congratulations, the house is officially yours.", zh: "恭喜，这房子正式属于你们了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I'm so overwhelmed, thank you so much.", zh: "我百感交集，非常感谢。", correct: true, xp: 10 },
          { text: "That's disappointing, we don't actually want it.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I'm so overwhelmed, thank you so much.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here are your keys, welcome to your new home.", zh: "这是你们的钥匙，欢迎来到你们的新家。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, I can't wait to start this chapter.", zh: "谢谢你，我等不及要开始这个新篇章了。", correct: true, xp: 10 },
          { text: "Thank you, though we're honestly a bit nervous.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, I can't wait to start this chapter.",
        next: null
      }
    }
  },
  {
    id: "moving-day",
    transition: { en: "Movers help them carry boxes into the new, bigger house.", zh: "搬家工人帮忙把箱子搬进了这个更大的新家。" },
    title: "Moving Day",
    subtitle: "新家 · 搬家日",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This new place already feels more like home than I expected.", zh: "这个新家已经比我预想的更有家的感觉了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, and we've barely unpacked.", zh: "确实如此，而且我们才刚开始拆箱。", correct: true, xp: 10 },
          { text: "It really doesn't, this place still feels foreign.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, and we've barely unpacked.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Where should we put the crib first?", zh: "我们应该先把婴儿床放哪儿？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's set it up in the room by ours.", zh: "我们把它摆在我们旁边的房间吧。", correct: true, xp: 10 },
          { text: "The crib doesn't need a room at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's set it up in the room by ours.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This house is going to hold so many new memories.", zh: "这座房子将会承载许多新的回忆。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It really is, and I can't wait for all of them.", zh: "确实会的，我已经迫不及待了。", correct: true, xp: 10 },
          { text: "It won't, memories only happen in the old house.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → It really is, and I can't wait for all of them.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "toddler", zh: "蹒跚学步的孩子", category: "community" },
  { en: "bursting at the seams", zh: "快装不下了", category: "community" },
  { en: "browsing", zh: "浏览", category: "community" },
  { en: "listings", zh: "房源（复数）", category: "community" },
  { en: "real estate agent", zh: "房产中介", category: "community" },
  { en: "budget", zh: "预算", category: "community" },
  { en: "bedrooms", zh: "卧室（复数）", category: "community" },
  { en: "home office", zh: "家庭办公室", category: "community" },
  { en: "match", zh: "匹配", category: "community" },
  { en: "showing", zh: "看房", category: "community" },
  { en: "open", zh: "开阔的", category: "community" },
  { en: "picture", zh: "想象", category: "community" },
  { en: "backyard", zh: "后院", category: "community" },
  { en: "narrow it down", zh: "缩小范围", category: "community" },
  { en: "school district", zh: "学区", category: "community" },
  { en: "closer", zh: "更近的（close 比较级）", category: "community" },
  { en: "sleep on it", zh: "先考虑一晚", category: "community" },
  { en: "flip a coin", zh: "抛硬币决定", category: "community" },
  { en: "offer", zh: "出价", category: "community" },
  { en: "asking price", zh: "标价", category: "community" },
  { en: "sellers", zh: "卖家（复数）", category: "community" },
  { en: "anxiously", zh: "焦虑地", category: "community" },
  { en: "distract", zh: "分散注意力", category: "community" },
  { en: "accepted", zh: "被接受的", category: "community" },
  { en: "home inspection", zh: "房屋检查", category: "community" },
  { en: "inspector", zh: "检查员", category: "community" },
  { en: "overwhelmed", zh: "感慨万千的", category: "community" },
  { en: "joy", zh: "喜悦", category: "community" },
  { en: "roof", zh: "屋顶", category: "community" },
  { en: "newer", zh: "更新的（new 比较级）", category: "community" },
  { en: "replace", zh: "更换", category: "community" },
  { en: "basement", zh: "地下室", category: "community" },
  { en: "plumbing", zh: "管道", category: "community" },
  { en: "serious", zh: "严重的", category: "community" },
  { en: "shape", zh: "状况", category: "community" },
  { en: "closing", zh: "交易完成", category: "community" },
  { en: "bottom", zh: "底部", category: "community" },
  { en: "officially", zh: "正式地", category: "community" },
  { en: "keys", zh: "钥匙（复数）", category: "community" },
  { en: "movers", zh: "搬家工人（复数）", category: "community" },
  { en: "boxes", zh: "箱子（复数）", category: "community" },
  { en: "unpacked", zh: "拆箱了的", category: "community" },
  { en: "foreign", zh: "陌生的", category: "community" },
  { en: "set it up", zh: "摆放好", category: "community" },
  { en: "hold memories", zh: "承载回忆", category: "community" }
);
