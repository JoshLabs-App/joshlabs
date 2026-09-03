// 内容数据层：第八十三章，紧接第八十二章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人在家尝试自制蜡烛。全新词汇领域：
// 蜡烛制作/蜂蜡/香精油/烛芯。

GAME_CONTENT.scenes.push(
  {
    id: "the-candle-making-kit",
    transition: { en: "A candle-making kit arrives, filled with wax, wicks, and oils.", zh: "一套蜡烛制作套装送到了，里面装着蜡、烛芯和香精油。" },
    title: "The Candle-Making Kit",
    subtitle: "家里 · 蜡烛制作套装",
    avatar: "🕯️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever melted wax before tonight?", zh: "你以前有融过蜡吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never melted wax, this is a first for me.", zh: "我从没融过蜡，这对我来说是第一次。", correct: true, xp: 10 },
          { text: "I've melted wax hundreds of times every week.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never melted wax, this is a first for me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This soy wax feels softer than the beeswax we saw.", zh: "这种大豆蜡摸起来比我们看过的蜂蜡要软。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, it should melt more evenly too.", zh: "确实是，它应该也会熔化得更均匀。", correct: true, xp: 10 },
          { text: "Texture doesn't matter, let's just melt it all together.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, it should melt more evenly too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's read the instructions before we start heating anything.", zh: "我们开始加热之前先读一下说明书吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, safety first with hot wax.", zh: "很有道理，热蜡这件事安全第一。", correct: true, xp: 10 },
          { text: "Let's just heat it and figure it out later.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, safety first with hot wax.",
        next: null
      }
    }
  },
  {
    id: "melting-the-wax",
    transition: { en: "They set up a double boiler and watch the wax slowly liquefy.", zh: "他们架起了一个双层锅，看着蜡慢慢融化成液体。" },
    title: "Melting the Wax",
    subtitle: "厨房 · 融化蜡块",
    avatar: "🔥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is melting slower than I expected it to.", zh: "这融化的速度比我预想的要慢。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but low heat keeps it from burning.", zh: "确实是，不过小火能防止它烧焦。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just crank up the heat.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but low heat keeps it from burning.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you check the temperature with this little thermometer?", zh: "你能用这个小温度计量一下温度吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's almost at the right temperature.", zh: "我可以量，已经快到合适的温度了。", correct: true, xp: 10 },
          { text: "I can't read a thermometer at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's almost at the right temperature.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once it's fully melted, we'll add the fragrance oil.", zh: "等它完全融化，我们就加香精油。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, I already picked the lavender scent.", zh: "会的，我已经选了薰衣草香味。", correct: true, xp: 10 },
          { text: "We won't, let's skip the fragrance entirely.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, I already picked the lavender scent.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-scent",
    transition: { en: "Little bottles of fragrance oil line the counter, each labeled differently.", zh: "一排排小瓶香精油摆在台面上，各自贴着不同的标签。" },
    title: "Choosing a Scent",
    subtitle: "厨房 · 挑选香味",
    avatar: "🌸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which scent do you want for our first candle?", zh: "我们的第一支蜡烛你想要什么香味？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'd love something warm, like vanilla and cinnamon.", zh: "我想要暖调的香味，像香草和肉桂那样的。", correct: true, xp: 10 },
          { text: "I don't want any scent added at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → I'd love something warm, like vanilla and cinnamon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This scent is stronger than the sample we smelled earlier.", zh: "这个香味比我们之前闻的样品要浓。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's use a little less this time.", zh: "确实是，这次我们少放一点吧。", correct: true, xp: 10 },
          { text: "Strength doesn't matter, let's just pour it all in.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's use a little less this time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This whole kitchen smells amazing right now.", zh: "现在整个厨房闻起来都好香。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It does, I could stay in here all night.", zh: "确实是，我能在这里待一整晚。", correct: true, xp: 10 },
          { text: "It doesn't, this kitchen smells terrible.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It does, I could stay in here all night.",
        next: null
      }
    }
  },
  {
    id: "setting-the-wick",
    transition: { en: "They carefully center a cotton wick inside each small glass jar.", zh: "他们仔细地把棉质烛芯居中放进每个小玻璃罐里。" },
    title: "Setting the Wick",
    subtitle: "厨房 · 固定烛芯",
    avatar: "🧵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this wick centered enough in the jar?", zh: "这根烛芯在罐子里居中够了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Almost, let's nudge it just a bit left.", zh: "差不多了，我们再往左推一点点吧。", correct: true, xp: 10 },
          { text: "It doesn't matter where the wick sits.", correct: false }
        ],
        hintOnWrong: "折中回答 → Almost, let's nudge it just a bit left.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This wick clip is trickier to use than I expected.", zh: "这个烛芯夹比我预想的要更难用。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but I think I've got it now.", zh: "确实是，不过我觉得我现在弄好了。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just skip this step.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but I think I've got it now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If the wick isn't straight, the candle won't burn evenly.", zh: "如果烛芯不直，蜡烛就不会烧得均匀。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it's crooked, let's fix it before pouring.", zh: "如果歪了，我们倒蜡之前就把它弄直。", correct: true, xp: 10 },
          { text: "If it's crooked, that shouldn't matter at all.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If it's crooked, let's fix it before pouring.",
        next: null
      }
    }
  },
  {
    id: "pouring-the-wax",
    transition: { en: "Slowly, they pour the warm scented wax into the little jars.", zh: "他们慢慢地把温热的香蜡倒进小罐子里。" },
    title: "Pouring the Wax",
    subtitle: "厨房 · 倒入蜡液",
    avatar: "🫗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you pour it slower so it doesn't splash?", zh: "你能倒得慢一点，别让它溅出来吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, steady hands, here we go.", zh: "我可以，稳住手，来吧。", correct: true, xp: 10 },
          { text: "I can't pour anything slowly at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, steady hands, here we go.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This jar is filling up faster than the last one.", zh: "这个罐子灌得比上一个要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I'm pouring a bit more steadily now.", zh: "确实是，我现在倒得更稳一些了。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just dump the rest in.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I'm pouring a bit more steadily now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Now we'll let these cool for a few hours.", zh: "现在我们要让这些静置冷却几个小时。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, patience is the hardest part.", zh: "会的，耐心等待是最难的部分。", correct: true, xp: 10 },
          { text: "We won't, let's use them right away.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, patience is the hardest part.",
        next: null
      }
    }
  },
  {
    id: "waiting-for-the-candles-to-set",
    transition: { en: "The candles sit undisturbed on the counter overnight.", zh: "蜡烛整晚都静静地放在台面上，没人去动。" },
    title: "Waiting for the Candles to Set",
    subtitle: "厨房 · 等待蜡烛凝固",
    avatar: "⏳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we peek at them before we go to bed?", zh: "我们睡觉前要不要瞄一眼？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Just a quick peek, then we'll leave them alone.", zh: "就瞄一眼，然后我们就不动它们了。", correct: true, xp: 10 },
          { text: "No, we should stir them every hour tonight.", correct: false }
        ],
        hintOnWrong: "折中回答 → Just a quick peek, then we'll leave them alone.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These are cooling slower than I thought they would.", zh: "这些冷却的速度比我预想的要慢。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's fine, good things take a little time.", zh: "没关系，好东西总需要一点时间。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's throw them in the freezer.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's fine, good things take a little time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By morning, these will be completely solid.", zh: "到早上，这些就会完全凝固了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, I can't wait to see them finished.", zh: "会的，我等不及要看到成品了。", correct: true, xp: 10 },
          { text: "They won't, wax never actually hardens fully.", correct: false }
        ],
        hintOnWrong: "will 表将来 → They will, I can't wait to see them finished.",
        next: null
      }
    }
  },
  {
    id: "the-finished-candles",
    transition: { en: "The next morning, three finished candles sit smooth and solid.", zh: "第二天早上，三支成品蜡烛光滑而坚实地摆在那里。" },
    title: "The Finished Candles",
    subtitle: "厨房 · 成品蜡烛",
    avatar: "🕯️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These turned out better than I ever expected.", zh: "这些做出来比我曾经预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really did, look how smooth the tops are.", zh: "确实如此，看看顶面多光滑。", correct: true, xp: 10 },
          { text: "They really didn't, these look messy and uneven.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really did, look how smooth the tops are.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we trim the wicks before lighting one?", zh: "点燃之前我们要不要先修剪一下烛芯？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, a shorter wick burns more evenly.", zh: "要，短一点的烛芯燃烧得更均匀。", correct: true, xp: 10 },
          { text: "No, let's light it exactly as it is.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, a shorter wick burns more evenly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's light this one tonight and see how it burns.", zh: "我们今晚点这一支，看看它燃烧得怎么样。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'm excited to finally see it.", zh: "好啊，我很期待终于能看到效果。", correct: true, xp: 10 },
          { text: "Let's just leave them unlit on the shelf forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm excited to finally see it.",
        next: null
      }
    }
  },
  {
    id: "a-cozy-evening-glow",
    transition: { en: "That evening, the homemade candle flickers softly on the table.", zh: "那天晚上，自制的蜡烛在桌上轻轻摇曳着微光。" },
    title: "A Cozy Evening Glow",
    subtitle: "家里 · 温馨的夜晚光影",
    avatar: "✨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This flame is steadier than I expected for a first try.", zh: "以第一次尝试来说，这火苗比我预想的要稳定。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, the wick size must have been just right.", zh: "确实是，烛芯的粗细一定刚刚好。", correct: true, xp: 10 },
          { text: "Steadiness doesn't matter, let's blow it out already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, the wick size must have been just right.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The whole room smells warmer than usual tonight.", zh: "今晚整个房间闻起来比平时更暖。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I could get used to this.", zh: "确实如此，我可能会习惯这样的感觉。", correct: true, xp: 10 },
          { text: "Smell doesn't matter, let's open the windows now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I could get used to this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There's something special about making our own light.", zh: "自己动手制造光源这件事有种特别的意义。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "There really is, this feels earned somehow.", zh: "确实是，这感觉像是我们赢得的东西。", correct: true, xp: 10 },
          { text: "There isn't, it's just a candle after all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → There really is, this feels earned somehow.",
        next: null
      }
    }
  },
  {
    id: "making-candles-as-gifts",
    transition: { en: "They decide to make a bigger batch as holiday gifts.", zh: "他们决定多做一批，当作节日礼物。" },
    title: "Making Candles as Gifts",
    subtitle: "厨房 · 制作礼物蜡烛",
    avatar: "🎁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many candles should we make for everyone?", zh: "我们要给大家做多少支蜡烛？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe a dozen, one for each family we know.", zh: "大概十二支吧，认识的每个家庭一支。", correct: true, xp: 10 },
          { text: "We shouldn't make any candles for anyone.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → Maybe a dozen, one for each family we know.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This batch is going faster now that we know the steps.", zh: "现在我们熟悉步骤了，这批做得更快了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, practice really does make a difference.", zh: "确实是，多练习真的很有用。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's slow everything down.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, practice really does make a difference.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's tie a little ribbon around each jar.", zh: "我们给每个罐子系一根小丝带吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it'll make them feel more personal.", zh: "好啊，这会让它们显得更用心。", correct: true, xp: 10 },
          { text: "Let's skip decorating and just hand them out plain.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it'll make them feel more personal.",
        next: null
      }
    }
  },
  {
    id: "giving-the-first-gift",
    transition: { en: "They hand a finished candle to a delighted neighbor.", zh: "他们把一支成品蜡烛递给了一位惊喜的邻居。" },
    title: "Giving the First Gift",
    subtitle: "邻居家 · 送出第一份礼物",
    avatar: "💝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you two really make this candle by hand?", zh: "你们俩真的是手工做的这支蜡烛吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "We did, right in our own kitchen.", zh: "是的，就在我们自己的厨房做的。", correct: true, xp: 10 },
          { text: "We didn't, we bought this at a store.", correct: false }
        ],
        hintOnWrong: "肯定回答 → We did, right in our own kitchen.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more personal than any candle I've ever received.", zh: "这比我收到过的任何蜡烛都更有心意。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That means so much, we're glad you love it.", zh: "这话对我们意义太大了，很高兴你喜欢。", correct: true, xp: 10 },
          { text: "Personal touches don't matter, it's just wax.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That means so much, we're glad you love it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how simple, homemade gifts feel the warmest.", zh: "不管多简单，手作礼物总让人感觉最温暖。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how simple, we made it just for you.", zh: "不管多简单，我们就是专门为你做的。", correct: true, xp: 10 },
          { text: "No matter how simple, store-bought is always better.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how simple, we made it just for you.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "candle-making", zh: "蜡烛制作", category: "community" },
  { en: "wax", zh: "蜡", category: "community" },
  { en: "wick", zh: "烛芯", category: "community" },
  { en: "fragrance oil", zh: "香精油", category: "community" },
  { en: "melted", zh: "融化的", category: "community" },
  { en: "soy wax", zh: "大豆蜡", category: "community" },
  { en: "beeswax", zh: "蜂蜡", category: "community" },
  { en: "double boiler", zh: "双层锅", category: "community" },
  { en: "liquefy", zh: "液化", category: "community" },
  { en: "low heat", zh: "小火", category: "community" },
  { en: "thermometer", zh: "温度计", category: "community" },
  { en: "scent", zh: "香味", category: "community" },
  { en: "vanilla", zh: "香草", category: "community" },
  { en: "cinnamon", zh: "肉桂", category: "community" },
  { en: "lavender", zh: "薰衣草", category: "community" },
  { en: "cotton", zh: "棉质的", category: "community" },
  { en: "centered", zh: "居中的", category: "community" },
  { en: "wick clip", zh: "烛芯夹", category: "community" },
  { en: "crooked", zh: "歪的", category: "community" },
  { en: "splash", zh: "溅出", category: "community" },
  { en: "steady", zh: "稳定的", category: "community" },
  { en: "cool", zh: "冷却", category: "community" },
  { en: "undisturbed", zh: "不受打扰的", category: "community" },
  { en: "solid", zh: "凝固的，固态的", category: "community" },
  { en: "trim", zh: "修剪", category: "community" },
  { en: "flicker", zh: "闪烁", category: "community" },
  { en: "flame", zh: "火苗", category: "community" },
  { en: "batch", zh: "一批", category: "community" },
  { en: "ribbon", zh: "丝带", category: "community" },
  { en: "personal", zh: "个人化的，有心意的", category: "community" },
  { en: "by hand", zh: "手工地", category: "community" },
  { en: "homemade", zh: "自制的", category: "community" }
);
