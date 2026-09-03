// 内容数据层：第三十二章，紧接第三十一章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter31.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：产假前，两人一起去社区食物银行做志愿者。全新词汇领域：志愿者报名/
// 分拣捐赠物资/派发餐食/社区服务反思。

GAME_CONTENT.scenes.push(
  {
    id: "signing-up-to-volunteer",
    transition: { en: "Before the baby comes, they sign up to volunteer at a food bank.", zh: "在宝宝出生前，他们报名去一家食物银行做志愿者。" },
    title: "Signing Up to Volunteer",
    subtitle: "食物银行 · 报名",
    avatar: "🥫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you volunteered anywhere before?", zh: "你以前在别的地方做过志愿者吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've volunteered a little, back in university.", zh: "我在大学的时候做过一点志愿者工作。", correct: true, xp: 10 },
          { text: "I'm volunteering here for the very first time ever.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've volunteered a little, back in university.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What days are you both available to help?", zh: "你们俩哪几天有空来帮忙？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We're free on Saturday mornings, mostly.", zh: "我们大部分时候周六早上有空。", correct: true, xp: 10 },
          { text: "We're never free on any day of the week.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → We're free on Saturday mornings, mostly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll send you an orientation schedule by email.", zh: "我们会通过邮件把入职培训安排发给你们。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, we'll keep an eye on our inbox.", zh: "好的，我们会留意邮箱的。", correct: true, xp: 10 },
          { text: "Perfect, though we never check our email.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Perfect, we'll keep an eye on our inbox.",
        next: null
      }
    }
  },
  {
    id: "the-orientation",
    transition: { en: "A coordinator walks new volunteers through the basics.", zh: "一位协调员给新志愿者讲解基本流程。" },
    title: "The Orientation",
    subtitle: "食物银行 · 入职培训",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please wash your hands before handling any food.", zh: "接触食物前请先洗手。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, I'll wash them right now.", zh: "当然，我现在就去洗。", correct: true, xp: 10 },
          { text: "Sorry, washing hands seems unnecessary here.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, I'll wash them right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This shift usually serves about two hundred families.", zh: "这一班通常会服务大约两百个家庭。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a lot of families, I'm glad we're here.", zh: "这可真不少家庭，还好我们来了。", correct: true, xp: 10 },
          { text: "That's too many families, we should probably leave.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a lot of families, I'm glad we're here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's start you off sorting canned goods.", zh: "我们先安排你们做罐头食品的分类。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds good, show us where to start.", zh: "好的，告诉我们从哪儿开始。", correct: true, xp: 10 },
          { text: "Let's skip sorting, it sounds too boring.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds good, show us where to start.",
        next: null
      }
    }
  },
  {
    id: "sorting-donations",
    transition: { en: "They spend the morning sorting boxes of donated food.", zh: "他们花了一上午分拣捐赠的食物箱。" },
    title: "Sorting Donations",
    subtitle: "食物银行 · 分拣捐赠",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you checking the expiration dates as you go?", zh: "你分拣的时候有没有检查保质期？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm checking every single date.", zh: "是的，我在检查每一个日期。", correct: true, xp: 10 },
          { text: "Yes, I checked one date last week.", correct: false }
        ],
        hintOnWrong: "现在进行时 → Yes, I'm checking every single date.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This box is heavier than the last one.", zh: "这箱比上一箱要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's carry it together this time.", zh: "确实是，这次我们一起抬吧。", correct: true, xp: 10 },
          { text: "It isn't, this box feels lighter than air.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's carry it together this time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Where should the expired items go?", zh: "过期的物品应该放哪儿？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They should go in the discard bin over there.", zh: "应该放到那边的废弃箱里。", correct: true, xp: 10 },
          { text: "They should go straight back on the shelf.", correct: false }
        ],
        hintOnWrong: "wh-问题回答位置 → They should go in the discard bin over there.",
        next: null
      }
    }
  },
  {
    id: "packing-food-boxes",
    transition: { en: "After sorting, they help pack boxes for families.", zh: "分拣完之后，他们帮忙给各个家庭打包食物箱。" },
    title: "Packing Food Boxes",
    subtitle: "食物银行 · 打包食物箱",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Each box needs one protein, two vegetables, and a grain.", zh: "每箱需要一份蛋白质、两份蔬菜和一份谷物。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Got it, I'll follow that pattern for each one.", zh: "明白了，我每一箱都会按这个搭配来。", correct: true, xp: 10 },
          { text: "Got it, though I'll just add whatever I want.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Got it, I'll follow that pattern for each one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you double-check this box before it goes out?", zh: "这箱出去之前你能再检查一遍吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can check it right now, no problem.", zh: "我现在就能检查，没问题。", correct: true, xp: 10 },
          { text: "I can't check anything, I'm far too busy.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can check it right now, no problem.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We've packed almost fifty boxes already.", zh: "我们已经打包了差不多五十箱了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's incredible, we're moving faster than I thought.", zh: "太厉害了，我们的速度比我想的还快。", correct: true, xp: 10 },
          { text: "That's disappointing, we're moving way too slowly.", correct: false }
        ],
        hintOnWrong: "现在完成时 → That's incredible, we're moving faster than I thought.",
        next: null
      }
    }
  },
  {
    id: "meeting-a-family",
    transition: { en: "A family arrives to pick up their food box.", zh: "一个家庭前来领取食物箱。" },
    title: "Meeting a Family",
    subtitle: "食物银行 · 遇见一个家庭",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Thank you so much, this really helps us this month.", zh: "太感谢了，这个月真的帮了我们大忙。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, we're happy to help however we can.", zh: "不客气，我们很乐意尽力帮忙。", correct: true, xp: 10 },
          { text: "Of course, though helping wasn't really our plan.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, we're happy to help however we can.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have kids of your own?", zh: "你们自己有孩子吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Not yet, but we're expecting one soon.", zh: "还没有，不过我们很快就要有一个了。", correct: true, xp: 10 },
          { text: "No, and we never plan to have any.", correct: false }
        ],
        hintOnWrong: "肯定回答但补充信息 → Not yet, but we're expecting one soon.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Congratulations, and good luck with everything ahead.", zh: "恭喜你们，也祝你们前方一切顺利。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you so much, that means a lot.", zh: "非常感谢，这对我们意义重大。", correct: true, xp: 10 },
          { text: "Thank you, though luck doesn't matter to us.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you so much, that means a lot.",
        next: null
      }
    }
  },
  {
    id: "serving-a-hot-meal",
    transition: { en: "In the afternoon, they help serve a hot meal service.", zh: "下午，他们帮忙提供热食服务。" },
    title: "Serving a Hot Meal",
    subtitle: "食物银行 · 热食服务",
    avatar: "🍲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Could you serve the soup while I hand out bread?", zh: "我发面包的时候你能盛汤吗？" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Sure, I'll take care of the soup.", zh: "好的，汤我来负责。", correct: true, xp: 10 },
          { text: "Sorry, serving soup isn't something I want to do.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Sure, I'll take care of the soup.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This line is longer than it was an hour ago.", zh: "这条队伍比一小时前更长了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's pick up the pace a bit.", zh: "确实是，我们加快点速度吧。", correct: true, xp: 10 },
          { text: "It isn't, the line looks shorter to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's pick up the pace a bit.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone's been so patient waiting in this line.", zh: "大家在队伍里等待都非常有耐心。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They really have, it's touching to see.", zh: "确实如此，看着挺让人感动的。", correct: true, xp: 10 },
          { text: "They really haven't, everyone seems furious.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They really have, it's touching to see.",
        next: null
      }
    }
  },
  {
    id: "a-tired-but-good-day",
    transition: { en: "By the end of the shift, they're exhausted but glad they came.", zh: "轮班结束时，他们又累又高兴自己来了。" },
    title: "A Tired but Good Day",
    subtitle: "食物银行 · 疲惫又满足",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How are you feeling after a full day of this?", zh: "忙了一整天，你现在感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'm exhausted, but it was worth every minute.", zh: "我很累，但每一分钟都值得。", correct: true, xp: 10 },
          { text: "I'm not tired at all, this was way too easy.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → I'm exhausted, but it was worth every minute.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We made a real difference for a lot of families today.", zh: "今天我们真的为很多家庭带来了改变。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We really did, and it felt amazing.", zh: "确实如此，感觉很棒。", correct: true, xp: 10 },
          { text: "We really didn't, nothing we did mattered.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We really did, and it felt amazing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Although it was tiring, I'd do it again tomorrow.", zh: "虽然很累，但明天我还会愿意再来一次。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Although it was tiring, I feel the same way.", zh: "虽然很累，但我也有同样的感受。", correct: true, xp: 10 },
          { text: "Although it was tiring, I never want to return.", correct: false }
        ],
        hintOnWrong: "让步句 → Although it was tiring, I feel the same way.",
        next: null
      }
    }
  },
  {
    id: "making-it-a-monthly-thing",
    transition: { en: "In the car home, they talk about volunteering regularly.", zh: "回家的车上，他们聊起要不要定期去做志愿者。" },
    title: "Making It a Monthly Thing",
    subtitle: "车上 · 定期计划",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we come back and do this once a month?", zh: "我们要不要每个月都回来做一次？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's commit to once a month.", zh: "好，我们就定每月一次吧。", correct: true, xp: 10 },
          { text: "No, once was already more than enough.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's commit to once a month.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we bring the baby someday, they'll grow up seeing this.", zh: "如果以后带着宝宝一起来，他们从小就能看到这些。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, that means even more to me.", zh: "如果真是这样，那对我来说意义更大了。", correct: true, xp: 10 },
          { text: "If that's true, I'd rather keep the baby home.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, that means even more to me.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is going to become a real family tradition.", zh: "这会成为我们家真正的传统。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I love that idea, I really do.", zh: "我很喜欢这个主意，真的很喜欢。", correct: true, xp: 10 },
          { text: "I hate that idea, traditions feel pointless to me.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → I love that idea, I really do.",
        next: null
      }
    }
  },
  {
    id: "reflecting-on-the-day",
    transition: { en: "That evening, they reflect on the day over dinner.", zh: "那天晚上，他们在晚餐时聊起这一天的感受。" },
    title: "Reflecting on the Day",
    subtitle: "家里 · 晚间反思",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What surprised you most about today?", zh: "今天最让你意外的是什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "How grateful everyone was, honestly.", zh: "说实话，是大家的感激之情。", correct: true, xp: 10 },
          { text: "Nothing surprised me about today at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → How grateful everyone was, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It made me think about how lucky we are.", zh: "这让我意识到我们有多幸运。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It made me feel exactly the same way.", zh: "我也有一模一样的感受。", correct: true, xp: 10 },
          { text: "It made me feel nothing at all, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It made me feel exactly the same way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I want our child to grow up with this kind of heart.", zh: "我希望我们的孩子长大后也拥有这样一颗心。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "So do I, more than almost anything else.", zh: "我也是，这比几乎任何事都更重要。", correct: true, xp: 10 },
          { text: "I don't, other things matter far more to me.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → So do I, more than almost anything else.",
        next: null
      }
    }
  },
  {
    id: "the-second-visit",
    transition: { en: "A month later, they return for their second shift, now more confident.", zh: "一个月后，他们回来参加第二次轮班，比之前更自信了。" },
    title: "The Second Visit",
    subtitle: "食物银行 · 第二次到访",
    avatar: "🥫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome back, you two already know the routine.", zh: "欢迎回来，你们俩已经熟悉流程了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We do, and it feels good to be back.", zh: "确实是，能回来感觉很好。", correct: true, xp: 10 },
          { text: "We don't, we've forgotten everything already.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We do, and it feels good to be back.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You two are much faster than you were last time.", zh: "你们俩比上次快多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Practice really does make a difference.", zh: "练习确实会带来不同。", correct: true, xp: 10 },
          { text: "We're actually much slower than last time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Practice really does make a difference.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy life gets, this is worth the time.", zh: "无论生活有多忙，这件事都值得花时间。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy we get, we'll always make time.", zh: "无论多忙，我们都会一直抽出时间来。", correct: true, xp: 10 },
          { text: "No matter how busy we get, this won't matter.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy we get, we'll always make time.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "food bank", zh: "食物银行", category: "community" },
  { en: "volunteered", zh: "做过志愿者", category: "community" },
  { en: "university", zh: "大学", category: "community" },
  { en: "available", zh: "有空的", category: "community" },
  { en: "mostly", zh: "大部分时候", category: "community" },
  { en: "orientation", zh: "入职培训", category: "community" },
  { en: "schedule", zh: "安排，日程", category: "community" },
  { en: "inbox", zh: "收件箱", category: "community" },
  { en: "coordinator", zh: "协调员", category: "community" },
  { en: "handling", zh: "接触，处理", category: "community" },
  { en: "shift", zh: "轮班", category: "community" },
  { en: "serves", zh: "服务（人数）", category: "community" },
  { en: "families", zh: "家庭（复数）", category: "community" },
  { en: "sorting", zh: "分拣", category: "community" },
  { en: "canned goods", zh: "罐头食品", category: "community" },
  { en: "donated", zh: "捐赠的", category: "community" },
  { en: "expiration dates", zh: "保质期", category: "community" },
  { en: "carry", zh: "搬运", category: "community" },
  { en: "expired", zh: "过期的", category: "community" },
  { en: "discard bin", zh: "废弃箱", category: "community" },
  { en: "shelf", zh: "货架", category: "community" },
  { en: "protein", zh: "蛋白质", category: "community" },
  { en: "vegetables", zh: "蔬菜", category: "community" },
  { en: "grain", zh: "谷物", category: "community" },
  { en: "pattern", zh: "规律，模式", category: "community" },
  { en: "packed", zh: "打包了", category: "community" },
  { en: "incredible", zh: "令人难以置信的", category: "community" },
  { en: "pick up", zh: "领取", category: "community" },
  { en: "however we can", zh: "尽我们所能", category: "community" },
  { en: "kids", zh: "孩子（口语）", category: "community" },
  { en: "good luck", zh: "祝好运", category: "community" },
  { en: "hand out", zh: "分发", category: "community" },
  { en: "bread", zh: "面包", category: "community" },
  { en: "soup", zh: "汤", category: "community" },
  { en: "line", zh: "队伍", category: "community" },
  { en: "pick up the pace", zh: "加快速度", category: "community" },
  { en: "patient", zh: "有耐心的", category: "community" },
  { en: "touching", zh: "感人的", category: "community" },
  { en: "exhausted", zh: "精疲力竭的", category: "community" },
  { en: "worth", zh: "值得的", category: "community" },
  { en: "made a difference", zh: "带来了改变", category: "community" },
  { en: "tiring", zh: "累人的", category: "community" },
  { en: "commit", zh: "承诺", category: "community" },
  { en: "grow up", zh: "长大", category: "community" },
  { en: "tradition", zh: "传统", category: "community" },
  { en: "reflect", zh: "反思", category: "community" },
  { en: "surprised", zh: "感到意外的", category: "community" },
  { en: "grateful", zh: "感激的", category: "community" },
  { en: "lucky", zh: "幸运的", category: "community" },
  { en: "heart", zh: "内心，善心", category: "community" },
  { en: "routine", zh: "常规流程", category: "community" },
  { en: "practice", zh: "练习", category: "community" },
  { en: "make a difference", zh: "带来改变", category: "community" },
  { en: "no matter how", zh: "无论多么", category: "community" }
);
