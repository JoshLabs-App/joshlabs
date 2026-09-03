// 内容数据层：第六十章，紧接第五十九章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：受社区花园经历启发，两人决定在家开始堆肥、减少垃圾。全新词汇领域：
// 堆肥箱/垃圾分类/可回收物/环保习惯。

GAME_CONTENT.scenes.push(
  {
    id: "noticing-the-waste",
    transition: { en: "Taking out the trash, they notice how much food waste they throw away.", zh: "倒垃圾时，他们注意到自己扔掉了多少食物垃圾。" },
    title: "Noticing the Waste",
    subtitle: "厨房 · 注意到浪费",
    avatar: "🗑️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This bag is heavier than it should be for one week.", zh: "这个袋子对一周的垃圾来说太重了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we're throwing away too much food.", zh: "确实是，我们扔掉的食物太多了。", correct: true, xp: 10 },
          { text: "It isn't, this feels perfectly normal to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we're throwing away too much food.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should probably start composting our food scraps.", zh: "我们大概应该开始把食物残渣堆肥。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, we learned a lot about that at the garden.", zh: "好主意，我们在花园那边学到了不少相关知识。", correct: true, xp: 10 },
          { text: "Bad idea, composting sounds messy and difficult.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, we learned a lot about that at the garden.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's buy a small compost bin this weekend.", zh: "我们这周末买一个小堆肥箱吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I've been wanting to try it.", zh: "好啊，我一直想试试。", correct: true, xp: 10 },
          { text: "Let's just keep throwing everything away.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I've been wanting to try it.",
        next: null
      }
    }
  },
  {
    id: "buying-a-compost-bin",
    transition: { en: "They browse compost bins at a hardware store.", zh: "他们在五金店浏览堆肥箱。" },
    title: "Buying a Compost Bin",
    subtitle: "五金店 · 购买堆肥箱",
    avatar: "🛒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This countertop bin is smaller than the outdoor one.", zh: "这个台面堆肥箱比室外那个要小。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's get the small one for the kitchen first.", zh: "我们先买这个小的放厨房吧。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's just grab any bin.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's get the small one for the kitchen first.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Does this bin have a filter to control the smell?", zh: "这个箱子有过滤器来控制气味吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it comes with a charcoal filter.", zh: "有的，它配了一个活性炭过滤器。", correct: true, xp: 10 },
          { text: "No, smell has never been a concern for us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it comes with a charcoal filter.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll also need bags that are compostable themselves.", zh: "我们还需要一些本身可堆肥的垃圾袋。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's grab a box of those too.", zh: "对，我们也拿一盒吧。", correct: true, xp: 10 },
          { text: "Right, though regular bags should work fine.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's grab a box of those too.",
        next: null
      }
    }
  },
  {
    id: "learning-what-can-be-composted",
    transition: { en: "They research what can and can't go into the compost.", zh: "他们研究了哪些东西能堆肥，哪些不能。" },
    title: "Learning What Can Be Composted",
    subtitle: "家里 · 学习堆肥规则",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can we put eggshells and coffee grounds in there?", zh: "我们能把蛋壳和咖啡渣放进去吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "We can, those are both great for compost.", zh: "可以，这两样都很适合堆肥。", correct: true, xp: 10 },
          { text: "We can't, nothing organic belongs in there.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/许可 → We can, those are both great for compost.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Meat and dairy are trickier to compost than vegetables.", zh: "肉类和乳制品比蔬菜更难堆肥。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, let's avoid those for now.", zh: "有道理，那我们现在先避开这些吧。", correct: true, xp: 10 },
          { text: "That's odd, meat should compost the fastest.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, let's avoid those for now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's print out a simple list for the fridge.", zh: "我们打印一份简单的清单贴在冰箱上吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that'll help us remember the rules.", zh: "好主意，这样能帮我们记住规则。", correct: true, xp: 10 },
          { text: "Let's just guess every time instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that'll help us remember the rules.",
        next: null
      }
    }
  },
  {
    id: "sorting-recyclables",
    transition: { en: "They also set up a clearer system for recycling.", zh: "他们还建立了一个更清晰的回收系统。" },
    title: "Sorting Recyclables",
    subtitle: "厨房 · 分类回收",
    avatar: "♻️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Does this plastic actually get recycled here?", zh: "这种塑料在这儿真的会被回收吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, but only if we rinse it out first.", zh: "会的，但前提是我们要先冲洗干净。", correct: true, xp: 10 },
          { text: "No, all plastic just gets thrown away anyway.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, but only if we rinse it out first.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This new bin system is more organized than before.", zh: "这套新的分类箱系统比之前更有条理了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I think we'll actually stick with it.", zh: "确实是，我觉得我们这次真的能坚持下去。", correct: true, xp: 10 },
          { text: "It isn't, the old system was much better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I think we'll actually stick with it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's label each bin clearly so nothing gets mixed up.", zh: "我们把每个箱子都标清楚，这样就不会弄混了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, I'll make the labels tonight.", zh: "好主意，我今晚就来做标签。", correct: true, xp: 10 },
          { text: "Let's not bother, we'll remember somehow.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, I'll make the labels tonight.",
        next: null
      }
    }
  },
  {
    id: "the-first-few-weeks",
    transition: { en: "A few weeks in, the new habits start to feel natural.", zh: "几周之后，这些新习惯开始变得自然起来。" },
    title: "The First Few Weeks",
    subtitle: "厨房 · 最初几周",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you noticed our regular trash has gotten lighter?", zh: "你有没有注意到我们的普通垃圾变轻了？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've noticed, it's honestly a huge difference.", zh: "注意到了，说实话这差别真的很大。", correct: true, xp: 10 },
          { text: "I've never once noticed anything different at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've noticed, it's honestly a huge difference.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Sorting everything is faster now than it was the first week.", zh: "现在分类比第一周要快多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we've finally gotten the hang of it.", zh: "确实是，我们终于摸到门道了。", correct: true, xp: 10 },
          { text: "It isn't, sorting still takes forever every time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we've finally gotten the hang of it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is starting to feel like second nature.", zh: "这开始变得像本能一样自然了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, I don't even think about it now.", zh: "确实如此，我现在都不用刻意去想了。", correct: true, xp: 10 },
          { text: "It really isn't, this still feels like a chore.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, I don't even think about it now.",
        next: null
      }
    }
  },
  {
    id: "an-unexpected-smell",
    transition: { en: "One evening, an unpleasant smell reveals a mistake in the compost bin.", zh: "一天晚上，一股难闻的气味暴露出堆肥箱出了问题。" },
    title: "An Unexpected Smell",
    subtitle: "厨房 · 意外的气味",
    avatar: "🤢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Something in here smells worse than usual.", zh: "这里面有什么东西闻起来比平常更难闻。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's check what we put in yesterday.", zh: "确实是，我们检查一下昨天放了什么进去吧。", correct: true, xp: 10 },
          { text: "It doesn't, everything smells completely normal.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's check what we put in yesterday.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I think we accidentally put some meat scraps in there.", zh: "我觉得我们不小心把一些肉类残渣放进去了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That explains it, let's fix that mistake now.", zh: "这就说得通了，我们现在把这个错误改过来吧。", correct: true, xp: 10 },
          { text: "That's fine, meat should be totally okay in there.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That explains it, let's fix that mistake now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's double-check the list before adding anything from now on.", zh: "从现在起，添加任何东西之前都先检查一下清单。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, mistakes happen, we'll be more careful.", zh: "好主意，难免出错，我们以后会更小心。", correct: true, xp: 10 },
          { text: "Let's just give up on composting entirely.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, mistakes happen, we'll be more careful.",
        next: null
      }
    }
  },
  {
    id: "using-the-finished-compost",
    transition: { en: "Months later, the compost is finally ready to use in the garden.", zh: "几个月后，堆肥终于可以用在花园里了。" },
    title: "Using the Finished Compost",
    subtitle: "花园 · 使用成熟堆肥",
    avatar: "🌱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This compost looks richer than anything we bought before.", zh: "这堆肥看起来比我们之前买的任何肥料都更肥沃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I can't believe we made this.", zh: "确实如此，真不敢相信这是我们自己做的。", correct: true, xp: 10 },
          { text: "It really doesn't, this looks like plain dirt.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I can't believe we made this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "All those scraps actually turned into something useful.", zh: "所有那些残渣真的变成了有用的东西。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "They really did, that feels pretty amazing.", zh: "确实如此，这感觉真的很了不起。", correct: true, xp: 10 },
          { text: "They didn't, this whole thing was pointless.", correct: false }
        ],
        hintOnWrong: "过去时回应 → They really did, that feels pretty amazing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's spread this on our garden plot this weekend.", zh: "我们这周末把它铺到花园地块上吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, our vegetables will love it.", zh: "好啊，我们的蔬菜肯定会喜欢的。", correct: true, xp: 10 },
          { text: "Let's just throw it away instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, our vegetables will love it.",
        next: null
      }
    }
  },
  {
    id: "cutting-down-on-plastic",
    transition: { en: "Inspired, they look for more ways to cut down on waste.", zh: "受到启发，他们寻找更多减少浪费的方法。" },
    title: "Cutting Down on Plastic",
    subtitle: "家里 · 减少塑料使用",
    avatar: "🛍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we switch to reusable grocery bags?", zh: "我们要不要换成可重复使用的购物袋？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's keep a few in the car always.", zh: "好，我们车里一直放几个吧。", correct: true, xp: 10 },
          { text: "No, plastic bags are honestly just as good.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's keep a few in the car always.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These glass containers are more durable than plastic ones.", zh: "这些玻璃容器比塑料容器更耐用。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, and they don't stain like plastic does.", zh: "确实如此，而且它们也不像塑料那样会染色。", correct: true, xp: 10 },
          { text: "They aren't, plastic containers last forever.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, and they don't stain like plastic does.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Small changes like this really do add up.", zh: "像这样的小改变真的会积少成多。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really do, and it's satisfying to see.", zh: "确实如此，看着这一切也挺让人满足的。", correct: true, xp: 10 },
          { text: "They don't, small changes never matter at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really do, and it's satisfying to see.",
        next: null
      }
    }
  },
  {
    id: "teaching-the-toddler",
    transition: { en: "They start teaching their toddler to sort scraps too.", zh: "他们开始教自己的孩子学着分类残渣。" },
    title: "Teaching the Toddler",
    subtitle: "厨房 · 教孩子分类",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you put the banana peel in the green bin?", zh: "你能把香蕉皮放进绿色箱子吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, and they actually love helping with this.", zh: "他们能做到，而且他们其实很喜欢帮忙做这件事。", correct: true, xp: 10 },
          { text: "They can't, they're far too young to help at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, and they actually love helping with this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're getting better at this than I expected already.", zh: "他们做这件事的水平已经比我预想的要好了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, kids pick things up so fast.", zh: "确实是，小孩子学东西真的很快。", correct: true, xp: 10 },
          { text: "They really aren't, they still get confused every time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, kids pick things up so fast.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's nice knowing they're growing up caring about this too.", zh: "看到他们从小也开始关心这些事，感觉真好。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, this feels like a lesson worth teaching.", zh: "确实如此，这是一个值得教给他们的道理。", correct: true, xp: 10 },
          { text: "It doesn't matter, kids won't remember this stuff.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, this feels like a lesson worth teaching.",
        next: null
      }
    }
  },
  {
    id: "a-small-difference",
    transition: { en: "That evening, they reflect on how much has quietly changed.", zh: "那天晚上，他们感慨这些悄然发生的变化。" },
    title: "A Small Difference",
    subtitle: "家里 · 微小的改变",
    avatar: "🌍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've cut our trash down more than I ever expected.", zh: "我们减少的垃圾量比我曾经预想的要多得多。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and it started with one small change.", zh: "确实如此，而这一切都始于一个小小的改变。", correct: true, xp: 10 },
          { text: "We really haven't, nothing about our habits changed.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and it started with one small change.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "One family probably can't fix everything, but it still matters.", zh: "一个家庭大概无法解决所有问题，但这依然重要。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, small actions still add up.", zh: "确实重要，小小的行动依然会积累起来。", correct: true, xp: 10 },
          { text: "It doesn't, one family's effort is meaningless.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, small actions still add up.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how small the change, we're glad we made it.", zh: "不管这个改变有多小，我们都很高兴自己做出了它。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how small, it's a change worth keeping.", zh: "不管多小，这都是一个值得坚持下去的改变。", correct: true, xp: 10 },
          { text: "No matter how small, it probably wasn't worth it.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how small, it's a change worth keeping.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "food waste", zh: "食物垃圾", category: "community" },
  { en: "throw away", zh: "扔掉", category: "community" },
  { en: "composting", zh: "堆肥", category: "community" },
  { en: "food scraps", zh: "食物残渣", category: "community" },
  { en: "compost bin", zh: "堆肥箱", category: "community" },
  { en: "countertop", zh: "台面", category: "community" },
  { en: "outdoor", zh: "室外的", category: "community" },
  { en: "filter", zh: "过滤器", category: "community" },
  { en: "charcoal", zh: "活性炭", category: "community" },
  { en: "compostable", zh: "可堆肥的", category: "community" },
  { en: "eggshells", zh: "蛋壳（复数）", category: "community" },
  { en: "coffee grounds", zh: "咖啡渣", category: "community" },
  { en: "organic", zh: "有机的", category: "community" },
  { en: "trickier", zh: "更棘手的（tricky 比较级）", category: "community" },
  { en: "dairy", zh: "乳制品", category: "community" },
  { en: "avoid", zh: "避免", category: "community" },
  { en: "recyclables", zh: "可回收物", category: "community" },
  { en: "plastic", zh: "塑料", category: "community" },
  { en: "recycled", zh: "被回收的", category: "community" },
  { en: "rinse out", zh: "冲洗干净", category: "community" },
  { en: "organized", zh: "有条理的", category: "community" },
  { en: "labels", zh: "标签（复数）", category: "community" },
  { en: "mixed up", zh: "弄混", category: "community" },
  { en: "regular trash", zh: "普通垃圾", category: "community" },
  { en: "lighter", zh: "更轻的（light 比较级）", category: "community" },
  { en: "second nature", zh: "本能一样自然", category: "community" },
  { en: "chore", zh: "家务活", category: "community" },
  { en: "unpleasant", zh: "难闻的，不愉快的", category: "community" },
  { en: "worse", zh: "更糟糕的（bad 比较级）", category: "community" },
  { en: "accidentally", zh: "不小心地", category: "community" },
  { en: "meat scraps", zh: "肉类残渣", category: "community" },
  { en: "explains it", zh: "说得通了", category: "community" },
  { en: "double-check", zh: "再检查一遍", category: "community" },
  { en: "richer", zh: "更肥沃的（rich 比较级）", category: "community" },
  { en: "turned into", zh: "变成了", category: "community" },
  { en: "useful", zh: "有用的", category: "community" },
  { en: "spread", zh: "铺开", category: "community" },
  { en: "reusable", zh: "可重复使用的", category: "community" },
  { en: "grocery bags", zh: "购物袋（复数）", category: "community" },
  { en: "glass containers", zh: "玻璃容器", category: "community" },
  { en: "durable", zh: "耐用的", category: "community" },
  { en: "stain", zh: "染色", category: "community" },
  { en: "satisfying", zh: "令人满足的", category: "community" },
  { en: "banana peel", zh: "香蕉皮", category: "community" },
  { en: "pick things up", zh: "学东西", category: "community" },
  { en: "worth teaching", zh: "值得教的", category: "community" },
  { en: "cut down", zh: "减少", category: "community" },
  { en: "small actions", zh: "小小的行动", category: "community" },
  { en: "meaningless", zh: "毫无意义的", category: "community" }
);
