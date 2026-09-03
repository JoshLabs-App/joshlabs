// 内容数据层：第五十五章，紧接第五十四章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：忙于工作、孩子和照顾老人，两人尝试订阅生鲜配送套餐来省时间。
// 全新词汇领域：订阅套餐/配送时段/食谱卡/取消订阅。

GAME_CONTENT.scenes.push(
  {
    id: "too-busy-to-shop",
    transition: { en: "Between work, the baby, and his parents, grocery shopping keeps slipping.", zh: "工作、宝宝和照顾父母之间，买菜这件事总是被耽搁。" },
    title: "Too Busy to Shop",
    subtitle: "家里 · 忙得没空买菜",
    avatar: "🛒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've run out of basically everything again.", zh: "我们家里基本上又什么都没了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, we need a better system.", zh: "确实是，我们需要一个更好的办法。", correct: true, xp: 10 },
          { text: "We really haven't, the fridge is completely full.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, we need a better system.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we try one of those meal kit subscriptions?", zh: "我们要不要试试那种餐食套餐订阅服务？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's just try it for a month.", zh: "好，我们先试一个月吧。", correct: true, xp: 10 },
          { text: "No, subscriptions always feel like a scam.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's just try it for a month.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll save so much time on planning meals.", zh: "这样能省下很多计划饮食的时间。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's exactly what we need right now.", zh: "这正是我们现在需要的。", correct: true, xp: 10 },
          { text: "That's fine, planning meals never took much time.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's exactly what we need right now.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-plan",
    transition: { en: "They browse different subscription plans online.", zh: "他们在网上浏览不同的订阅套餐。" },
    title: "Choosing a Plan",
    subtitle: "家里 · 挑选套餐",
    avatar: "💻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many meals should we get each week?", zh: "我们每周应该订多少份餐食？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe three meals to start with.", zh: "先试三份吧。", correct: true, xp: 10 },
          { text: "We shouldn't get any meals at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → Maybe three meals to start with.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This plan is cheaper than the one with more meals.", zh: "这个套餐比含更多餐食的那个便宜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's start with the cheaper one, then.", zh: "那我们就先从便宜的开始吧。", correct: true, xp: 10 },
          { text: "Price doesn't matter, let's get the biggest plan.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's start with the cheaper one, then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You can cancel anytime with no penalty.", zh: "您可以随时取消，没有任何罚金。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "That's reassuring, let's give it a shot.", zh: "这让人放心，我们就试试吧。", correct: true, xp: 10 },
          { text: "That's suspicious, there must be a hidden catch.", correct: false }
        ],
        hintOnWrong: "回应能力/许可句 → That's reassuring, let's give it a shot.",
        next: null
      }
    }
  },
  {
    id: "picking-a-delivery-slot",
    transition: { en: "They select a delivery window that fits their schedule.", zh: "他们选择了一个适合自己日程的配送时段。" },
    title: "Picking a Delivery Slot",
    subtitle: "家里 · 选择配送时段",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which day works best for a delivery?", zh: "哪一天最适合安排配送？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Tuesday afternoons work best for us.", zh: "周二下午对我们来说最合适。", correct: true, xp: 10 },
          { text: "No day works, we're always unavailable.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → Tuesday afternoons work best for us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This time slot is earlier than we usually get home.", zh: "这个时段比我们平常到家的时间要早。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's pick a later slot instead, then.", zh: "那我们选一个更晚的时段吧。", correct: true, xp: 10 },
          { text: "That's fine, packages can just sit outside forever.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's pick a later slot instead, then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please leave the box by the front door if we're out.", zh: "如果我们不在家，请把箱子放在前门旁边。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Sure, I'll add that note to the order.", zh: "好的，我会在订单里加上这个说明。", correct: true, xp: 10 },
          { text: "Sorry, we'd rather the box just disappear.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Sure, I'll add that note to the order.",
        next: null
      }
    }
  },
  {
    id: "the-first-box-arrives",
    transition: { en: "Their first delivery box shows up right on schedule.", zh: "他们的第一箱配送准时送到了。" },
    title: "The First Box Arrives",
    subtitle: "家里 · 首箱送达",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This box is bigger than I expected it to be.", zh: "这个箱子比我预想的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, everything looks so neatly packed too.", zh: "确实是，而且里面装得整整齐齐的。", correct: true, xp: 10 },
          { text: "It isn't, this box looks tiny to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, everything looks so neatly packed too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Each recipe comes with its own card and instructions.", zh: "每份食谱都配有自己的卡片和说明。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's helpful, even I can probably follow this.", zh: "这挺有帮助的，就算是我大概也能照着做。", correct: true, xp: 10 },
          { text: "That's unnecessary, instructions never actually help.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's helpful, even I can probably follow this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's cook the first meal together tonight.", zh: "我们今晚一起做第一顿饭吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'm actually excited to try it.", zh: "好啊，我其实还挺期待试试的。", correct: true, xp: 10 },
          { text: "Let's just order takeout instead tonight.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm actually excited to try it.",
        next: null
      }
    }
  },
  {
    id: "cooking-the-first-recipe",
    transition: { en: "They follow the recipe card step by step in the kitchen.", zh: "他们在厨房里按照食谱卡一步步做菜。" },
    title: "Cooking the First Recipe",
    subtitle: "厨房 · 做第一道菜",
    avatar: "🍳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you chop these vegetables while I start the sauce?", zh: "我做酱的时候你能把这些蔬菜切一下吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, hand me the cutting board.", zh: "可以，把砧板给我。", correct: true, xp: 10 },
          { text: "I can't, chopping vegetables scares me.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, hand me the cutting board.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This recipe is simpler than I thought it would be.", zh: "这份食谱比我想的要简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, we might actually pull this off.", zh: "确实如此，我们说不定真能做成。", correct: true, xp: 10 },
          { text: "It really isn't, this seems impossible to follow.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, we might actually pull this off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This actually smells better than I expected.", zh: "这闻起来其实比我预想的要香。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, maybe we're better cooks than we thought.", zh: "确实如此，也许我们比自己想的更会做饭。", correct: true, xp: 10 },
          { text: "It really doesn't, something's clearly gone wrong.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, maybe we're better cooks than we thought.",
        next: null
      }
    }
  },
  {
    id: "adjusting-the-plan",
    transition: { en: "After a few weeks, they tweak the subscription to fit better.", zh: "几周后，他们调整了订阅方案，让它更符合需求。" },
    title: "Adjusting the Plan",
    subtitle: "家里 · 调整套餐",
    avatar: "⚙️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we switch to more kid-friendly meals?", zh: "我们要不要换成更适合小孩吃的餐食？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's pick options the baby can eat too.", zh: "好，我们选一些宝宝也能吃的选项吧。", correct: true, xp: 10 },
          { text: "No, the baby should just eat what we eat.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's pick options the baby can eat too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These new options seem more family-friendly than the old ones.", zh: "这些新选项看起来比之前的更适合家庭。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They do, let's switch to these for next week.", zh: "确实是，我们下周就换成这些吧。", correct: true, xp: 10 },
          { text: "They don't, let's just keep the old options.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They do, let's switch to these for next week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We can also skip a week if we're too busy.", zh: "如果太忙我们也可以跳过某一周。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "That's good to know, that gives us flexibility.", zh: "知道这个真好，这给了我们灵活性。", correct: true, xp: 10 },
          { text: "That's odd, subscriptions should never be flexible.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/许可 → That's good to know, that gives us flexibility.",
        next: null
      }
    }
  },
  {
    id: "a-missed-delivery",
    transition: { en: "One week, the delivery never shows up.", zh: "有一周，配送一直没有送到。" },
    title: "A Missed Delivery",
    subtitle: "家里 · 漏送了",
    avatar: "😕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did the box ever actually arrive today?", zh: "今天的箱子到底有没有送到？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, it never showed up at all.", zh: "没有，压根就没送来。", correct: true, xp: 10 },
          { text: "Yes, it arrived hours ago as usual.", correct: false }
        ],
        hintOnWrong: "否定回答 → No, it never showed up at all.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let's contact customer service about this.", zh: "我们联系一下客服吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, I'll message them right now.", zh: "好主意，我现在就给他们发消息。", correct: true, xp: 10 },
          { text: "Let's just forget about it and skip dinner.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, I'll message them right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "They offered a full refund and a free box next time.", zh: "他们提供了全额退款，还有下次一箱免费。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's fair, mistakes happen sometimes.", zh: "这样很公平，有时候难免出错。", correct: true, xp: 10 },
          { text: "That's not enough, we should cancel right now.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's fair, mistakes happen sometimes.",
        next: null
      }
    }
  },
  {
    id: "three-months-in",
    transition: { en: "Three months in, they reflect on whether it's still worth it.", zh: "三个月过去了，他们思考这项服务是否还值得。" },
    title: "Three Months In",
    subtitle: "家里 · 三个月后",
    avatar: "📊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has this actually saved us time overall?", zh: "这整体上真的帮我们省了时间吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's saved us more time than I expected.", zh: "它省下的时间比我预想的要多。", correct: true, xp: 10 },
          { text: "It's never once saved us any time at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It's saved us more time than I expected.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've also tried more new recipes than we ever would have on our own.", zh: "我们也尝试了比自己平时更多的新食谱。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's true, our meals have gotten more varied.", zh: "确实如此，我们的饮食变得更丰富了。", correct: true, xp: 10 },
          { text: "That's false, we've cooked the exact same things.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's true, our meals have gotten more varied.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I think we should keep this going for now.", zh: "我觉得我们目前应该继续保持这个订阅。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I agree, this has honestly been worth it.", zh: "我同意，说实话这确实值得。", correct: true, xp: 10 },
          { text: "I disagree, let's cancel it immediately.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I agree, this has honestly been worth it.",
        next: null
      }
    }
  },
  {
    id: "sharing-recipes",
    transition: { en: "They start sharing favorite recipe cards with friends.", zh: "他们开始把喜欢的食谱卡分享给朋友们。" },
    title: "Sharing Recipes",
    subtitle: "家里 · 分享食谱",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which recipe should we recommend to them first?", zh: "我们应该先推荐哪份食谱给他们？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Definitely the pasta one, it's our favorite.", zh: "肯定是意面那份，那是我们的最爱。", correct: true, xp: 10 },
          { text: "None of them, recipes shouldn't be shared.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Definitely the pasta one, it's our favorite.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This recipe box is fuller than it was last month.", zh: "这个食谱盒比上个月更满了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we've collected quite a few favorites.", zh: "确实是，我们已经收集了不少喜欢的食谱。", correct: true, xp: 10 },
          { text: "It isn't, we've thrown most of them away.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we've collected quite a few favorites.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's start a little recipe collection just for our family.", zh: "我们为自己的家庭开始建一个小小的食谱合集吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, our kid might love it someday.", zh: "好啊，我们的孩子将来说不定也会喜欢。", correct: true, xp: 10 },
          { text: "Let's not bother, recipes never matter that much.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, our kid might love it someday.",
        next: null
      }
    }
  },
  {
    id: "a-simple-routine",
    transition: { en: "Cooking together has quietly become one of their favorite parts of the week.", zh: "一起做饭悄悄变成了他们一周中最喜欢的时刻之一。" },
    title: "A Simple Routine",
    subtitle: "厨房 · 简单的日常",
    avatar: "🍽️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I actually look forward to cooking night now.", zh: "现在我其实还挺期待做饭之夜的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, it's become my favorite night of the week.", zh: "我也是，这变成了我一周里最喜欢的一晚。", correct: true, xp: 10 },
          { text: "Me too, though I'd rather skip it entirely.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, it's become my favorite night of the week.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've gotten better at this than I ever thought we would.", zh: "我们做菜的水平比我曾经想象的要好得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, and I'm proud of how far we've come.", zh: "确实如此，我为我们的进步感到骄傲。", correct: true, xp: 10 },
          { text: "We really haven't, we're still terrible cooks.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, and I'm proud of how far we've come.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy life gets, let's keep this night sacred.", zh: "不管生活多忙，我们都要保护好这个夜晚。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, this stays ours, always.", zh: "不管多忙，这都属于我们，永远如此。", correct: true, xp: 10 },
          { text: "No matter how busy, this will probably be the first thing to go.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, this stays ours, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "run out of", zh: "用完了", category: "community" },
  { en: "meal kit", zh: "餐食套餐", category: "community" },
  { en: "subscriptions", zh: "订阅（复数）", category: "community" },
  { en: "scam", zh: "骗局", category: "community" },
  { en: "planning meals", zh: "规划饮食", category: "community" },
  { en: "plan", zh: "套餐，计划", category: "community" },
  { en: "cheaper", zh: "更便宜的（cheap 比较级）", category: "community" },
  { en: "cancel", zh: "取消", category: "community" },
  { en: "anytime", zh: "随时", category: "community" },
  { en: "penalty", zh: "罚金", category: "community" },
  { en: "give it a shot", zh: "试一试", category: "community" },
  { en: "hidden catch", zh: "隐藏的陷阱", category: "community" },
  { en: "delivery slot", zh: "配送时段", category: "community" },
  { en: "delivery window", zh: "配送时间窗口", category: "community" },
  { en: "time slot", zh: "时段", category: "community" },
  { en: "front door", zh: "前门", category: "community" },
  { en: "add a note", zh: "添加备注", category: "community" },
  { en: "delivery box", zh: "配送箱", category: "community" },
  { en: "neatly packed", zh: "整齐打包", category: "community" },
  { en: "recipe card", zh: "食谱卡", category: "community" },
  { en: "instructions", zh: "说明", category: "community" },
  { en: "chop", zh: "切", category: "community" },
  { en: "vegetables", zh: "蔬菜", category: "community" },
  { en: "sauce", zh: "酱汁", category: "community" },
  { en: "cutting board", zh: "砧板", category: "community" },
  { en: "pull this off", zh: "做成", category: "community" },
  { en: "tweak", zh: "微调", category: "community" },
  { en: "kid-friendly", zh: "适合小孩的", category: "community" },
  { en: "family-friendly", zh: "适合家庭的", category: "community" },
  { en: "flexibility", zh: "灵活性", category: "community" },
  { en: "showed up", zh: "出现了", category: "community" },
  { en: "customer service", zh: "客服", category: "community" },
  { en: "full refund", zh: "全额退款", category: "community" },
  { en: "mistakes happen", zh: "难免出错", category: "community" },
  { en: "overall", zh: "整体上", category: "community" },
  { en: "varied", zh: "多样化的", category: "community" },
  { en: "keep this going", zh: "继续保持", category: "community" },
  { en: "recommend", zh: "推荐", category: "community" },
  { en: "recipe box", zh: "食谱盒", category: "community" },
  { en: "fuller", zh: "更满的（full 比较级）", category: "community" },
  { en: "collection", zh: "合集", category: "community" },
  { en: "look forward to", zh: "期待", category: "community" },
  { en: "cooking night", zh: "做饭之夜", category: "community" },
  { en: "sacred", zh: "神圣的，不容侵犯的", category: "community" }
);

