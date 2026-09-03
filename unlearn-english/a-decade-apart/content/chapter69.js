// 内容数据层：第六十九章，紧接第六十八章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人开始每周六去逛农夫市集，认识本地摊主。全新词汇领域：
// 时令蔬果/本地摊主/试吃品尝/环保购物袋。

GAME_CONTENT.scenes.push(
  {
    id: "discovering-the-market",
    transition: { en: "They stumble upon a farmers market while out for a walk.", zh: "散步时他们偶然发现了一个农夫市集。" },
    title: "Discovering the Market",
    subtitle: "街上 · 发现市集",
    avatar: "🥕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you know this market was here every Saturday?", zh: "你知道这个市集每周六都在这儿吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I had no idea, this is a happy surprise.", zh: "我完全不知道，这真是个惊喜。", correct: true, xp: 10 },
          { text: "Yes, I've known about it for years already.", correct: false }
        ],
        hintOnWrong: "否定回答（补充信息） → I had no idea, this is a happy surprise.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This produce looks fresher than what we get at the store.", zh: "这些农产品看起来比我们平常在超市买的要新鲜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's start shopping here on weekends.", zh: "确实是，我们周末就来这儿买菜吧。", correct: true, xp: 10 },
          { text: "It doesn't, the store produce always looks better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's start shopping here on weekends.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's walk through and see what everyone's selling.", zh: "我们逛一圈，看看大家都在卖什么吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's take our time exploring.", zh: "好主意，我们慢慢逛吧。", correct: true, xp: 10 },
          { text: "Let's just buy from the first stall we see.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's take our time exploring.",
        next: null
      }
    }
  },
  {
    id: "meeting-a-local-farmer",
    transition: { en: "A friendly farmer offers them a sample of ripe strawberries.", zh: "一位友善的农户给他们递上了成熟草莓的试吃。" },
    title: "Meeting a Local Farmer",
    subtitle: "摊位 · 认识本地农户",
    avatar: "🍓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Would you like to try a sample before buying?", zh: "购买前要不要先试吃一下？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Yes, please, that would be lovely.", zh: "好的，麻烦您了，那太好了。", correct: true, xp: 10 },
          { text: "No, samples always taste terrible anyway.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Yes, please, that would be lovely.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These are sweeter than any strawberries I've ever had.", zh: "这些草莓比我吃过的任何草莓都要甜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, we'll take two baskets.", zh: "确实是，我们要两篮。", correct: true, xp: 10 },
          { text: "They're not sweet at all, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, we'll take two baskets.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I grow everything myself on a small farm nearby.", zh: "这些都是我在附近一个小农场自己种的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's wonderful, we love supporting local farmers.", zh: "太棒了，我们很乐意支持本地农户。", correct: true, xp: 10 },
          { text: "That's odd, we assumed everything came from far away.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's wonderful, we love supporting local farmers.",
        next: null
      }
    }
  },
  {
    id: "shopping-with-reusable-bags",
    transition: { en: "They pull out their reusable bags to fill with produce.", zh: "他们拿出自带的环保袋来装农产品。" },
    title: "Shopping with Reusable Bags",
    subtitle: "市集 · 用环保袋购物",
    avatar: "🛍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you remember to bring the reusable bags?", zh: "你记得带环保袋了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, they're right here in my backpack.", zh: "带了，就在我的背包里。", correct: true, xp: 10 },
          { text: "No, we've never once used reusable bags.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, they're right here in my backpack.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This bag holds more than the plastic ones we used to use.", zh: "这个袋子比我们以前用的塑料袋能装更多东西。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, and it's sturdier too.", zh: "确实是，而且也更结实。", correct: true, xp: 10 },
          { text: "It doesn't, plastic bags always held more.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, and it's sturdier too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab tomatoes, peppers, and some greens.", zh: "我们买点西红柿、辣椒和一些绿叶菜吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good list, let's find those stalls now.", zh: "好清单，我们现在就去找那些摊位吧。", correct: true, xp: 10 },
          { text: "Let's just buy random things instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good list, let's find those stalls now.",
        next: null
      }
    }
  },
  {
    id: "trying-new-produce",
    transition: { en: "A vendor introduces them to a vegetable they've never seen.", zh: "一位摊主给他们介绍了一种从未见过的蔬菜。" },
    title: "Trying New Produce",
    subtitle: "摊位 · 尝试新食材",
    avatar: "🥬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have either of you ever cooked with kohlrabi before?", zh: "你们俩有人用大头菜做过菜吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Neither of us has, but we're curious to try.", zh: "我们俩都没有，但很想尝试一下。", correct: true, xp: 10 },
          { text: "Both of us have cooked it for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → Neither of us has, but we're curious to try.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This vegetable is milder than you might expect.", zh: "这种蔬菜的味道比你想的要清淡。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Good to know, we'll grab a couple then.", zh: "很高兴知道这个，那我们就买几个吧。", correct: true, xp: 10 },
          { text: "Taste doesn't matter, let's skip it entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Good to know, we'll grab a couple then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's look up a recipe for it when we get home.", zh: "我们到家后查一下它的做法吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this could become a new favorite.", zh: "好啊，这说不定会成为我们的新宠。", correct: true, xp: 10 },
          { text: "Let's just throw it in the fridge and forget it.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm actually excited to try it.",
        next: null
      }
    }
  },
  {
    id: "the-honey-stall",
    transition: { en: "A stall selling local honey catches their attention.", zh: "一个卖本地蜂蜜的摊位吸引了他们的注意。" },
    title: "The Honey Stall",
    subtitle: "摊位 · 蜂蜜摊",
    avatar: "🍯",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This honey comes from bees just outside the city.", zh: "这些蜂蜜来自城市郊外的蜜蜂。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's fascinating, we'd love to support that.", zh: "这真有意思，我们很乐意支持这个。", correct: true, xp: 10 },
          { text: "That's boring, honey is honey everywhere.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's fascinating, we'd love to support that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This jar is bigger than the one we bought last time.", zh: "这罐比我们上次买的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's get the bigger jar, it'll last longer.", zh: "我们买大罐的吧，能用更久。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's just grab any one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's get the bigger jar, it'll last longer.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can I try a taste before deciding?", zh: "我能先尝一下再决定吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, here's a little spoon for you.", zh: "当然可以，这是给您的小勺子。", correct: true, xp: 10 },
          { text: "No, tasting isn't allowed at this stall.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/许可 → Of course, here's a little spoon for you.",
        next: null
      }
    }
  },
  {
    id: "the-toddler-picks-a-flower",
    transition: { en: "Their toddler wanders over to a small flower stand.", zh: "他们的孩子走到了一个小花摊前。" },
    title: "The Toddler Picks a Flower",
    subtitle: "花摊 · 孩子挑花",
    avatar: "🌻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which flower do you want to bring home?", zh: "你想带哪朵花回家？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They're pointing at the biggest sunflower.", zh: "他们正指着那朵最大的向日葵。", correct: true, xp: 10 },
          { text: "They don't want any flowers at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → They're pointing at the biggest sunflower.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This sunflower is taller than they are!", zh: "这朵向日葵比他们还要高！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, that's such a funny sight.", zh: "确实是，这画面真有趣。", correct: true, xp: 10 },
          { text: "It really isn't, this flower is quite short.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, that's such a funny sight.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's put this in a vase when we get home.", zh: "我们回家后把它插到花瓶里吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it'll brighten up the kitchen.", zh: "好啊，这样厨房会更明亮。", correct: true, xp: 10 },
          { text: "Let's just leave it in the car instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it'll brighten up the kitchen.",
        next: null
      }
    }
  },
  {
    id: "the-bakery-stand",
    transition: { en: "The smell of fresh bread pulls them toward a bakery stand.", zh: "新鲜面包的香气把他们吸引到了一个烘焙摊位。" },
    title: "The Bakery Stand",
    subtitle: "面包摊 · 烘焙摊位",
    avatar: "🍞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This bread was baked earlier than most, just this morning.", zh: "这面包比大多数烤得更早，今天早上刚出炉的。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's exciting, let's grab a loaf while it's fresh.", zh: "太好了，我们趁新鲜买一条吧。", correct: true, xp: 10 },
          { text: "That doesn't matter, freshness never really matters.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's exciting, let's grab a loaf while it's fresh.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have anything without gluten?", zh: "您有无麸质的面包吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we have a gluten-free option over here.", zh: "有的，这边有一款无麸质的可以选。", correct: true, xp: 10 },
          { text: "No, everything here contains gluten, sorry.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, we have a gluten-free option over here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will be gone by lunchtime, it always sells out fast.", zh: "这个到午饭时间就会卖完了，一直卖得很快。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Let's grab two loaves then, just to be safe.", zh: "那我们买两条吧，保险起见。", correct: true, xp: 10 },
          { text: "That's fine, we'll come back tomorrow instead.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Let's grab two loaves then, just to be safe.",
        next: null
      }
    }
  },
  {
    id: "a-familiar-face",
    transition: { en: "By their third visit, the vendors already recognize them.", zh: "第三次来的时候，摊主们已经认识他们了。" },
    title: "A Familiar Face",
    subtitle: "市集 · 熟悉的面孔",
    avatar: "👋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Back again this week, I see!", zh: "这周又来啦，我看到了！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're becoming regulars, honestly.", zh: "说实话，我们已经算是常客了。", correct: true, xp: 10 },
          { text: "We're never coming back after this.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → We're becoming regulars, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This little one has grown taller since we last saw them.", zh: "这个小家伙比我们上次见到时长高了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really have, it happens so fast.", zh: "确实是，长得真快。", correct: true, xp: 10 },
          { text: "They really haven't, they look exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really have, it happens so fast.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's nice to be recognized somewhere like this.", zh: "在这样的地方被认出来感觉真好。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, this feels like a real community.", zh: "确实如此，这感觉像是一个真正的社区。", correct: true, xp: 10 },
          { text: "It doesn't matter, being recognized feels awkward.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, this feels like a real community.",
        next: null
      }
    }
  },
  {
    id: "cooking-with-the-haul",
    transition: { en: "Back home, they cook dinner using everything they bought.", zh: "回到家后，他们用买来的所有食材做了晚餐。" },
    title: "Cooking with the Haul",
    subtitle: "厨房 · 用战利品做饭",
    avatar: "🍲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Everything in this meal came from the market today.", zh: "今天这顿饭的所有食材都来自市集。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's amazing, this feels extra special somehow.", zh: "太棒了，不知怎么这感觉格外特别。", correct: true, xp: 10 },
          { text: "That's odd, none of this tastes any different.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's amazing, this feels extra special somehow.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This meal tastes fresher than anything from a grocery store.", zh: "这顿饭吃起来比任何超市买的都要新鲜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, you can taste the difference.", zh: "确实如此，能尝出来这种差别。", correct: true, xp: 10 },
          { text: "It doesn't, everything tastes exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, you can taste the difference.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make this a Saturday tradition for our family.", zh: "我们把这变成我们家的周六传统吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I already love this routine.", zh: "好啊，我已经很喜欢这个日常了。", correct: true, xp: 10 },
          { text: "Let's not, once was already enough for us.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I already love this routine.",
        next: null
      }
    }
  },
  {
    id: "a-new-saturday-ritual",
    transition: { en: "Weeks later, the market has become the highlight of their weekend.", zh: "几周后，市集已经成了他们周末的重头戏。" },
    title: "A New Saturday Ritual",
    subtitle: "家里 · 新的周六仪式",
    avatar: "🌞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Saturdays have become more meaningful than I expected.", zh: "周六变得比我预想的更有意义。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really have, and I look forward to them now.", zh: "确实如此，我现在很期待周六。", correct: true, xp: 10 },
          { text: "They haven't, Saturdays feel exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really have, and I look forward to them now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've built such a nice little routine as a family.", zh: "我们全家建立了一个非常好的小小惯例。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and I hope it lasts for years.", zh: "确实如此，我希望这能持续很多年。", correct: true, xp: 10 },
          { text: "We really haven't, our weekends still feel messy.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and I hope it lasts for years.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how life changes, let's keep our Saturday mornings like this.", zh: "不管生活怎么变化，我们都要保持这样的周六早晨。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, this ritual is worth keeping.", zh: "不管怎样，这个仪式都值得坚持下去。", correct: true, xp: 10 },
          { text: "No matter what, we'll probably drop this eventually.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, this ritual is worth keeping.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "farmers market", zh: "农夫市集", category: "community" },
  { en: "stumble upon", zh: "偶然发现", category: "community" },
  { en: "happy surprise", zh: "惊喜", category: "community" },
  { en: "produce", zh: "农产品", category: "community" },
  { en: "explore", zh: "探索，闲逛", category: "community" },
  { en: "stalls", zh: "摊位（复数）", category: "community" },
  { en: "sample", zh: "试吃品尝", category: "community" },
  { en: "ripe", zh: "成熟的", category: "community" },
  { en: "baskets", zh: "篮子（复数）", category: "community" },
  { en: "small farm", zh: "小农场", category: "community" },
  { en: "supporting local farmers", zh: "支持本地农户", category: "community" },
  { en: "backpack", zh: "背包", category: "community" },
  { en: "sturdier", zh: "更结实的（sturdy 比较级）", category: "community" },
  { en: "peppers", zh: "辣椒（复数）", category: "community" },
  { en: "greens", zh: "绿叶菜", category: "community" },
  { en: "vendor", zh: "摊主", category: "community" },
  { en: "milder", zh: "更清淡的（mild 比较级）", category: "community" },
  { en: "look up", zh: "查阅", category: "community" },
  { en: "bees", zh: "蜜蜂（复数）", category: "community" },
  { en: "fascinating", zh: "有意思的", category: "community" },
  { en: "jar", zh: "罐子", category: "community" },
  { en: "last longer", zh: "用得更久", category: "community" },
  { en: "spoon", zh: "勺子", category: "community" },
  { en: "flower stand", zh: "花摊", category: "community" },
  { en: "sunflower", zh: "向日葵", category: "community" },
  { en: "funny sight", zh: "有趣的画面", category: "community" },
  { en: "vase", zh: "花瓶", category: "community" },
  { en: "brighten up", zh: "让……更明亮", category: "community" },
  { en: "bakery stand", zh: "烘焙摊位", category: "community" },
  { en: "loaf", zh: "一条面包", category: "community" },
  { en: "gluten-free", zh: "无麸质的", category: "community" },
  { en: "sells out", zh: "卖完，售罄", category: "community" },
  { en: "just to be safe", zh: "保险起见", category: "community" },
  { en: "vendors", zh: "摊主（复数）", category: "community" },
  { en: "recognize", zh: "认出", category: "community" },
  { en: "regulars", zh: "常客（复数）", category: "community" },
  { en: "grown taller", zh: "长高了", category: "community" },
  { en: "real community", zh: "真正的社区", category: "community" },
  { en: "haul", zh: "战利品", category: "community" },
  { en: "extra special", zh: "格外特别的", category: "community" },
  { en: "grocery store", zh: "杂货店，超市", category: "community" },
  { en: "Saturday tradition", zh: "周六传统", category: "community" },
  { en: "highlight", zh: "亮点，重头戏", category: "community" },
  { en: "look forward to", zh: "期待", category: "community" },
  { en: "little routine", zh: "小小的惯例", category: "community" },
  { en: "ritual", zh: "仪式", category: "community" }
);
