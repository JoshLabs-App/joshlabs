// 内容数据层：第九十四章，紧接第九十三章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人去枫糖农场参观了熬糖过程。全新词汇领域：
// 枫树/树液/熬煮/糖浆。
// 这一章会让累计词汇量突破4000词，正式达到B2终结目标。

GAME_CONTENT.scenes.push(
  {
    id: "arriving-at-the-sugar-shack",
    transition: { en: "Steam rises from a small wooden building deep in the maple woods.", zh: "枫树林深处一座小木屋里正冒着蒸汽。" },
    title: "Arriving at the Sugar Shack",
    subtitle: "枫糖农场 · 抵达糖屋",
    avatar: "🍁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever seen how maple syrup is actually made?", zh: "你以前有见过枫糖浆到底是怎么做出来的吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never seen it, only bought bottles at stores.", zh: "我从没见过，只在店里买过瓶装的。", correct: true, xp: 10 },
          { text: "I've seen this process every single week for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never seen it, only bought bottles at stores.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This building looks older than any barn we've visited.", zh: "这座建筑比我们参观过的任何谷仓都要老。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, it must have quite a history.", zh: "确实是，它一定有不少历史了。", correct: true, xp: 10 },
          { text: "Age doesn't matter, let's just walk right past it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, it must have quite a history.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's follow the smell of sweetness inside.", zh: "我们跟着甜香味走进去吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, my nose is already leading me there.", zh: "好主意，我的鼻子已经在带路了。", correct: true, xp: 10 },
          { text: "Let's ignore the smell and go the other way.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, my nose is already leading me there.",
        next: null
      }
    }
  },
  {
    id: "tapping-a-maple-tree",
    transition: { en: "A guide shows them how a small spile taps into a maple trunk.", zh: "向导给他们演示了一根小引流管是怎么插进枫树树干的。" },
    title: "Tapping a Maple Tree",
    subtitle: "枫树林 · 给枫树钻孔取汁",
    avatar: "🌳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you see the sap slowly dripping into the bucket?", zh: "你能看到树液正慢慢滴进桶里吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, drop by drop, it's mesmerizing.", zh: "我能看到，一滴一滴的，看得让人着迷。", correct: true, xp: 10 },
          { text: "I can't see any liquid moving at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, drop by drop, it's mesmerizing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This sap looks thinner than I expected maple syrup to be.", zh: "这树液比我预想的枫糖浆要稀得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, it's basically just sweet water right now.", zh: "确实是，现在基本上就是甜水。", correct: true, xp: 10 },
          { text: "Thickness doesn't matter, let's drink it right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, it's basically just sweet water right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once we boil it down, it'll become real syrup.", zh: "等我们把它熬煮浓缩，就会变成真正的糖浆。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, I'm curious how long that takes.", zh: "会的，我很好奇要花多久。", correct: true, xp: 10 },
          { text: "It won't, this will always taste like water.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, I'm curious how long that takes.",
        next: null
      }
    }
  },
  {
    id: "inside-the-sugar-shack",
    transition: { en: "Steam billows from a long, shallow pan bubbling over a wood fire.", zh: "一口在柴火上咕嘟冒泡的长浅锅腾起阵阵蒸汽。" },
    title: "Inside the Sugar Shack",
    subtitle: "糖屋内 · 熬煮枫糖",
    avatar: "🔥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This room is hotter than any kitchen we've cooked in.", zh: "这间屋子比我们做过饭的任何厨房都要热。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, all that boiling really warms things up.", zh: "确实是，一直熬煮真的会让屋子变暖。", correct: true, xp: 10 },
          { text: "Heat doesn't matter, let's stand right over the pan.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, all that boiling really warms things up.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Why do we need to boil the sap for so many hours?", zh: "为什么我们需要把树液熬煮这么多个小时？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It takes forty gallons of sap to make one of syrup.", zh: "要四十加仑树液才能熬出一加仑糖浆。", correct: true, xp: 10 },
          { text: "Boiling time doesn't actually change anything at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → It takes forty gallons of sap to make one of syrup.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This liquid is turning darker with every passing minute.", zh: "这液体每过一分钟就变得更深一些。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It is, that color change is fascinating to watch.", zh: "确实是，看着颜色变化真是很有意思。", correct: true, xp: 10 },
          { text: "It isn't, this liquid looks exactly the same.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → It is, that color change is fascinating to watch.",
        next: null
      }
    }
  },
  {
    id: "testing-the-syrup",
    transition: { en: "The farmer dips a thermometer into the bubbling amber liquid.", zh: "农场主把温度计浸入了冒泡的琥珀色液体里。" },
    title: "Testing the Syrup",
    subtitle: "糖屋内 · 检测糖浆",
    avatar: "🌡️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this syrup ready yet, or does it need more time?", zh: "这糖浆好了吗，还是还需要点时间？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Almost there, just a few more degrees to go.", zh: "快好了，还差几度就到了。", correct: true, xp: 10 },
          { text: "It doesn't need any more time at all.", correct: false }
        ],
        hintOnWrong: "折中回答 → Almost there, just a few more degrees to go.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This syrup is thicker now than it was an hour ago.", zh: "这糖浆现在比一小时前要浓稠多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, you can really see the change.", zh: "确实是，能明显看出变化。", correct: true, xp: 10 },
          { text: "Thickness doesn't matter, let's just bottle it now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, you can really see the change.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you smell how sweet the whole room has become?", zh: "你能闻到整个房间现在变得多甜吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's almost overwhelming at this point.", zh: "我能闻到，这时候几乎有点浓得受不了。", correct: true, xp: 10 },
          { text: "I can't smell anything different at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's almost overwhelming at this point.",
        next: null
      }
    }
  },
  {
    id: "tasting-fresh-syrup",
    transition: { en: "They dip small wooden spoons into the freshly finished syrup.", zh: "他们用小木勺蘸了蘸刚熬好的糖浆。" },
    title: "Tasting Fresh Syrup",
    subtitle: "糖屋内 · 品尝新鲜糖浆",
    avatar: "🥄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tastes richer than any bottle we've ever bought.", zh: "这尝起来比我们买过的任何瓶装糖浆都要浓郁。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, nothing compares to this freshness.", zh: "确实如此，没什么能比得上这份新鲜。", correct: true, xp: 10 },
          { text: "It really doesn't, bottled syrup tastes better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, nothing compares to this freshness.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Their whole face is lighting up from that first taste!", zh: "他们尝了第一口整张脸都亮了起来！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I can see that, syrup this fresh wins every time.", zh: "我看得出来，这么新鲜的糖浆总能赢得人心。", correct: true, xp: 10 },
          { text: "I don't see any change on their face.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I can see that, syrup this fresh wins every time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should definitely buy a bottle to bring home.", zh: "我们绝对应该买一瓶带回家。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Definitely, let's grab the biggest one they have.", zh: "当然，我们买他们家最大的那瓶吧。", correct: true, xp: 10 },
          { text: "Definitely not, let's leave without buying any.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Definitely, let's grab the biggest one they have.",
        next: null
      }
    }
  },
  {
    id: "maple-snow-taffy",
    transition: { en: "They pour hot syrup onto fresh snow, watching it turn into chewy taffy.", zh: "他们把热糖浆倒在新雪上，看着它变成有嚼劲的太妃糖。" },
    title: "Maple Snow Taffy",
    subtitle: "户外 · 雪上枫糖",
    avatar: "🍬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is hardening faster than I expected it to.", zh: "这变硬的速度比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, the cold snow works incredibly fast.", zh: "确实是，冷雪的效果快得惊人。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just wait an hour.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, the cold snow works incredibly fast.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you twirl it around this little wooden stick?", zh: "你能把它绕在这根小木棍上吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, this is oddly satisfying to do.", zh: "我能做到，这样做莫名地让人满足。", correct: true, xp: 10 },
          { text: "I can't twirl anything around a stick.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, this is oddly satisfying to do.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is chewier than any candy I've had before.", zh: "这比我以前吃过的任何糖果都更有嚼劲。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, my jaw is getting a real workout.", zh: "确实是，我的下巴都在认真运动了。", correct: true, xp: 10 },
          { text: "Chewiness doesn't matter, let's swallow it whole.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, my jaw is getting a real workout.",
        next: null
      }
    }
  },
  {
    id: "a-toddler-covered-in-syrup",
    transition: { en: "Their sticky-fingered toddler grins with syrup all over their cheeks.", zh: "孩子满脸沾着糖浆，手指也黏糊糊的，笑得很开心。" },
    title: "A Toddler Covered in Syrup",
    subtitle: "户外 · 满脸糖浆的孩子",
    avatar: "🧒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are they sticky than any time I've seen them before?", zh: "他们现在是不是比我以前见过的任何时候都要黏？", },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They definitely are, syrup is everywhere on them.", zh: "绝对是，他们身上到处都是糖浆。", correct: true, xp: 10 },
          { text: "They aren't sticky at all right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → They definitely are, syrup is everywhere on them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This might be the messiest they've ever been.", zh: "这可能是他们有史以来最狼狈的一次。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It might be, but they look so happy about it.", zh: "很有可能，不过他们看起来很开心。", correct: true, xp: 10 },
          { text: "It can't be, they always stay perfectly clean.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It might be, but they look so happy about it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a quick photo before we clean them up.", zh: "我们先拍张照，再帮他们清理干净吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this moment is too good to miss.", zh: "好啊，这一刻太珍贵了不能错过。", correct: true, xp: 10 },
          { text: "Let's skip the photo and clean them up now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this moment is too good to miss.",
        next: null
      }
    }
  },
  {
    id: "buying-a-bottle-to-take-home",
    transition: { en: "At the little farm store, glass bottles of syrup line the shelves.", zh: "在小小的农场商店里，一瓶瓶玻璃装的糖浆摆满了货架。" },
    title: "Buying a Bottle to Take Home",
    subtitle: "农场商店 · 买瓶糖浆带回家",
    avatar: "🍾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which grade of syrup should we bring home with us?", zh: "我们该带哪个等级的糖浆回家？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's get the darker one, it has more flavor.", zh: "我们买颜色深一点的吧，风味更浓。", correct: true, xp: 10 },
          { text: "We shouldn't buy any syrup at all today.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Let's get the darker one, it has more flavor.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This bottle is pricier than I expected for its size.", zh: "以这个大小来说，这瓶比我预想的要贵。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but real maple syrup is worth it.", zh: "确实是，不过纯枫糖浆值这个价。", correct: true, xp: 10 },
          { text: "Price doesn't matter, let's just buy ten bottles.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but real maple syrup is worth it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will taste better on pancakes than anything from a store.", zh: "这个抹在薄煎饼上会比任何店里买的都好吃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It will, I can't wait for breakfast tomorrow.", zh: "会的，我已经等不及明天的早餐了。", correct: true, xp: 10 },
          { text: "It won't, store syrup will always taste the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It will, I can't wait for breakfast tomorrow.",
        next: null
      }
    }
  },
  {
    id: "driving-home-sticky-and-happy",
    transition: { en: "The car smells sweet the whole ride home from their sticky hands.", zh: "回家的路上，车里因为他们黏糊糊的小手一路都弥漫着甜味。" },
    title: "Driving Home Sticky and Happy",
    subtitle: "车上 · 黏糊糊又开心地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This car smells sweeter than it ever has before.", zh: "这车比以前任何时候都要闻起来更甜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I don't think I mind it at all.", zh: "确实是，我一点都不介意。", correct: true, xp: 10 },
          { text: "Smell doesn't matter, let's open every window.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I don't think I mind it at all.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someday they'll remember this as their first sugar shack visit.", zh: "将来他们会记得这是自己第一次去糖屋参观。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, and I hope they always love maple season.", zh: "会的，希望他们能一直喜欢枫糖季。", correct: true, xp: 10 },
          { text: "They won't, toddlers forget everything instantly.", correct: false }
        ],
        hintOnWrong: "will 表将来 → They will, and I hope they always love maple season.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how sticky today got, this was completely worth it.", zh: "不管今天有多黏糊糊，这都是完全值得的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how sticky, I'd do this again next year.", zh: "不管多黏，明年我都愿意再来一次。", correct: true, xp: 10 },
          { text: "No matter how sticky, we shouldn't have come at all.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how sticky, I'd do this again next year.",
        next: null
      }
    }
  },
  {
    id: "breakfast-with-fresh-syrup",
    transition: { en: "The next morning, they drizzle their fresh syrup over warm pancakes.", zh: "第二天早上，他们把新鲜糖浆淋在了热腾腾的薄煎饼上。" },
    title: "Breakfast with Fresh Syrup",
    subtitle: "厨房 · 用新鲜糖浆吃早餐",
    avatar: "🥞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This breakfast tastes better than any we've had in months.", zh: "这顿早餐比我们几个月来吃过的任何一顿都好吃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, that farm trip was worth every minute.", zh: "确实如此，那趟农场之旅每一分钟都值得。", correct: true, xp: 10 },
          { text: "It really doesn't, this tastes pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, that farm trip was worth every minute.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you believe we watched this syrup get made ourselves?", zh: "你能相信这糖浆是我们亲眼看着做出来的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, it makes breakfast feel special.", zh: "我真的不敢相信，这让早餐都变得特别了。", correct: true, xp: 10 },
          { text: "I can believe it, this feels totally ordinary.", correct: false }
        ],
        hintOnWrong: "用 can 表惊讶 → I honestly can't, it makes breakfast feel special.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make maple season a family tradition every single year.", zh: "我们把枫糖季定成每年的家庭传统吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this deserves to happen every spring.", zh: "好啊，每年春天都该有这个安排。", correct: true, xp: 10 },
          { text: "Let's never visit a sugar shack again after this.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this deserves to happen every spring.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "maple woods", zh: "枫树林", category: "community" },
  { en: "sugar shack", zh: "糖屋", category: "community" },
  { en: "steam", zh: "蒸汽", category: "community" },
  { en: "maple syrup", zh: "枫糖浆", category: "community" },
  { en: "barn", zh: "谷仓", category: "community" },
  { en: "sweetness", zh: "甜味", category: "community" },
  { en: "spile", zh: "引流管（取树液用具）", category: "community" },
  { en: "trunk", zh: "树干", category: "community" },
  { en: "sap", zh: "树液", category: "community" },
  { en: "dripping", zh: "滴落", category: "community" },
  { en: "bucket", zh: "桶", category: "community" },
  { en: "mesmerizing", zh: "让人着迷的", category: "community" },
  { en: "boil it down", zh: "熬煮浓缩", category: "community" },
  { en: "billows", zh: "翻腾（蒸汽等）", category: "community" },
  { en: "pan", zh: "浅锅", category: "community" },
  { en: "wood fire", zh: "柴火", category: "community" },
  { en: "gallons", zh: "加仑（复数）", category: "community" },
  { en: "amber", zh: "琥珀色", category: "community" },
  { en: "degrees", zh: "度数（复数）", category: "community" },
  { en: "grade", zh: "等级", category: "community" },
  { en: "pricier", zh: "更贵的", category: "community" },
  { en: "flavor", zh: "风味", category: "community" },
  { en: "taffy", zh: "太妃糖", category: "community" },
  { en: "hardening", zh: "变硬", category: "community" },
  { en: "twirl", zh: "缠绕，转动", category: "community" },
  { en: "chewy", zh: "有嚼劲的", category: "community" },
  { en: "jaw", zh: "下巴", category: "community" },
  { en: "sticky", zh: "黏糊糊的", category: "community" },
  { en: "messiest", zh: "最狼狈的（messy 最高级）", category: "community" },
  { en: "pancakes", zh: "薄煎饼（复数）", category: "community" }
);
