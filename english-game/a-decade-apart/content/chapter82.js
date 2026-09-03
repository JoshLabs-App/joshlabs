// 内容数据层：第八十二章，紧接第八十一章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人在后院开始养蜂。全新词汇领域：
// 蜂箱/蜂后/花蜜/采蜜。

GAME_CONTENT.scenes.push(
  {
    id: "the-beekeeping-class",
    transition: { en: "They sign up for a weekend beekeeping class at a local farm.", zh: "他们报名参加了当地农场的周末养蜂课。" },
    title: "The Beekeeping Class",
    subtitle: "农场 · 养蜂课",
    avatar: "🐝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever been stung by a bee before?", zh: "你以前被蜜蜂蜇过吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been stung once, but it wasn't too bad.", zh: "我被蜇过一次，不过还不算太糟。", correct: true, xp: 10 },
          { text: "I've been stung every single day this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've been stung once, but it wasn't too bad.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This protective suit looks bulkier than I expected.", zh: "这套防护服看起来比我预想的要更笨重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but I feel safer wearing it.", zh: "确实是，不过穿着它我感觉更安全。", correct: true, xp: 10 },
          { text: "Comfort doesn't matter, let's skip wearing it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but I feel safer wearing it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's stay calm and move slowly around the hives.", zh: "我们在蜂箱周围要保持冷静、动作放慢。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, sudden movements might startle them.", zh: "好主意，突然的动作可能会惊到它们。", correct: true, xp: 10 },
          { text: "Let's just run past them as fast as possible.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, sudden movements might startle them.",
        next: null
      }
    }
  },
  {
    id: "finding-the-queen",
    transition: { en: "The instructor helps them spot the queen bee inside the hive.", zh: "老师帮他们在蜂箱里找到了蜂后。" },
    title: "Finding the Queen",
    subtitle: "农场 · 寻找蜂后",
    avatar: "👑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you spot the queen among all these bees?", zh: "你能在这么多蜜蜂里找到蜂后吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, she's the one with the longer body.", zh: "我能找到，就是那只身体比较长的。", correct: true, xp: 10 },
          { text: "I can't tell any of these bees apart.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, she's the one with the longer body.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The queen lays more eggs than any other bee in the hive.", zh: "蜂后产的卵比蜂箱里任何其他蜜蜂都要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "She does, thousands a day sometimes.", zh: "确实如此，有时一天能产上千颗。", correct: true, xp: 10 },
          { text: "Egg-laying doesn't matter, let's ignore that.", correct: false }
        ],
        hintOnWrong: "回应比较句 → She does, thousands a day sometimes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Worker bees take care of her their whole lives.", zh: "工蜂们一生都在照顾她。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's fascinating, the whole hive works around her.", zh: "太有意思了，整个蜂群都是围绕她运转的。", correct: true, xp: 10 },
          { text: "That's boring, worker bees do nothing important.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's fascinating, the whole hive works around her.",
        next: null
      }
    }
  },
  {
    id: "building-their-own-hive",
    transition: { en: "At home, they assemble their very first wooden beehive.", zh: "在家里，他们组装了自己第一个木制蜂箱。" },
    title: "Building Their Own Hive",
    subtitle: "后院 · 搭建自家蜂箱",
    avatar: "🔨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where should we place the hive in the yard?", zh: "我们该把蜂箱放在院子的哪里？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Somewhere sunny but away from the walking path.", zh: "找个阳光充足但远离走道的地方。", correct: true, xp: 10 },
          { text: "It doesn't matter where at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答地点 → Somewhere sunny but away from the walking path.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This box is trickier to assemble than the instructions suggested.", zh: "这个箱子组装起来比说明书说的要更棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's read the steps again slowly.", zh: "确实是，我们再慢慢读一遍步骤吧。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just guess randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's read the steps again slowly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once it's finished, we'll order our first bee colony.", zh: "等做完之后，我们就订购第一批蜂群。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, I'm actually getting excited now.", zh: "会的，我现在真的开始期待了。", correct: true, xp: 10 },
          { text: "We won't, let's just leave the box empty.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, I'm actually getting excited now.",
        next: null
      }
    }
  },
  {
    id: "the-bees-arrive",
    transition: { en: "A small wooden package of buzzing bees arrives by mail.", zh: "一个装着嗡嗡作响的蜜蜂的小木箱通过邮寄到货了。" },
    title: "The Bees Arrive",
    subtitle: "家门口 · 蜜蜂到货",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This package is buzzing louder than I imagined it would.", zh: "这个箱子嗡嗡响得比我想象的要大声。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, there must be thousands inside.", zh: "确实是，里面一定有成千上万只。", correct: true, xp: 10 },
          { text: "Volume doesn't matter, let's just toss it aside.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, there must be thousands inside.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we release them into the hive right away?", zh: "我们要不要马上把它们放进蜂箱？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, but let's move slowly and calmly.", zh: "好，不过我们动作要慢一点、保持冷静。", correct: true, xp: 10 },
          { text: "No, let's just leave them in the box forever.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, but let's move slowly and calmly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Welcome home, little bees, we'll take good care of you.", zh: "欢迎回家，小蜜蜂们，我们会好好照顾你们的。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We really will, this is the start of something new.", zh: "我们真的会，这是新事物的开始。", correct: true, xp: 10 },
          { text: "We won't, this whole idea seems pointless now.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We really will, this is the start of something new.",
        next: null
      }
    }
  },
  {
    id: "watching-the-bees-work",
    transition: { en: "Every evening, they watch bees fly in and out of the hive.", zh: "每天傍晚，他们都会看着蜜蜂进出蜂箱。" },
    title: "Watching the Bees Work",
    subtitle: "后院 · 观察蜜蜂工作",
    avatar: "🌼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These bees are busier in the morning than in the evening.", zh: "这些蜜蜂早上比傍晚要忙碌得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, that's when the flowers are freshest.", zh: "确实是，那时候花朵最新鲜。", correct: true, xp: 10 },
          { text: "Timing doesn't matter, they're always the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, that's when the flowers are freshest.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look, that one's legs are covered in yellow pollen!", zh: "看，那只的腿上沾满了黄色花粉！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I see it, she's carrying a full load home.", zh: "我看到了，她带着满满一包花粉回家呢。", correct: true, xp: 10 },
          { text: "I don't see any pollen on any bee.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I see it, she's carrying a full load home.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This hive is turning nectar into honey right now.", zh: "这个蜂箱现在正在把花蜜酿成蜂蜜。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It is, imagine how much work that takes.", zh: "是的，想想这需要多少工夫。", correct: true, xp: 10 },
          { text: "It isn't, this hive is completely empty.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → It is, imagine how much work that takes.",
        next: null
      }
    }
  },
  {
    id: "a-toddler-questions-the-bees",
    transition: { en: "Their curious toddler asks endless questions about the hive.", zh: "好奇的孩子对蜂箱问个不停。" },
    title: "A Toddler Questions the Bees",
    subtitle: "后院 · 孩子问蜂箱的问题",
    avatar: "❓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why do the bees keep going in and out?", zh: "为什么蜜蜂一直进进出出？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They're bringing flower nectar back to the hive.", zh: "它们在把花蜜带回蜂箱。", correct: true, xp: 10 },
          { text: "They just enjoy flying around for no reason.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → They're bringing flower nectar back to the hive.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do bees ever get tired from all that flying?", zh: "蜜蜂飞这么多会不会累？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They probably do, but they rarely stop working.", zh: "它们大概会累，不过它们很少停下工作。", correct: true, xp: 10 },
          { text: "They never get tired, bees don't feel anything.", correct: false }
        ],
        hintOnWrong: "折中回答 → They probably do, but they rarely stop working.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can we see the honey they made yet?", zh: "我们现在能看到它们酿的蜂蜜了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Not yet, we'll have to wait a few more weeks.", zh: "还不行，我们还得再等几周。", correct: true, xp: 10 },
          { text: "We can see it right now, it's already full.", correct: false }
        ],
        hintOnWrong: "用 can 表可能性/否定 → Not yet, we'll have to wait a few more weeks.",
        next: null
      }
    }
  },
  {
    id: "checking-the-frames",
    transition: { en: "Weeks later, they open the hive to inspect the honeycomb frames.", zh: "几周后，他们打开蜂箱检查蜂巢框架。" },
    title: "Checking the Frames",
    subtitle: "后院 · 检查蜂巢框架",
    avatar: "🍯",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This frame is heavier than the one we checked last time.", zh: "这个框架比我们上次检查的那个要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that means it's full of honey.", zh: "确实是，说明里面装满了蜂蜜。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's put it right back.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that means it's full of honey.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look at all these tiny golden hexagon cells.", zh: "快看这些细小的金色六边形蜂房。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They're so perfectly shaped, it's amazing.", zh: "它们的形状太完美了，真让人惊叹。", correct: true, xp: 10 },
          { text: "They're just random shapes, nothing special.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They're so perfectly shaped, it's amazing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If this frame is full, we can harvest it next week.", zh: "如果这个框架满了，我们下周就能采蜜了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it's full, I can't wait to taste it.", zh: "如果满了，我等不及要尝尝了。", correct: true, xp: 10 },
          { text: "If it's full, we should just throw it away.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If it's full, I can't wait to taste it.",
        next: null
      }
    }
  },
  {
    id: "the-honey-harvest",
    transition: { en: "The whole family gathers to extract honey for the first time.", zh: "全家人聚在一起第一次采蜜。" },
    title: "The Honey Harvest",
    subtitle: "车库 · 第一次采蜜",
    avatar: "🍯",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This honey tastes sweeter than anything I've bought at a store.", zh: "这蜂蜜比我在商店买的任何蜂蜜都要甜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I'm so proud of our little hive.", zh: "确实如此，我为我们的小蜂箱感到骄傲。", correct: true, xp: 10 },
          { text: "It really doesn't, store honey tastes better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I'm so proud of our little hive.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How many jars did we fill from just one hive?", zh: "光是一个蜂箱我们就装满了多少罐？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We filled six jars, more than I expected.", zh: "我们装满了六罐，比我预想的要多。", correct: true, xp: 10 },
          { text: "We didn't fill any jars at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → We filled six jars, more than I expected.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's give a jar to each of our neighbors.", zh: "我们给每位邻居送一罐吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, they'll be so surprised.", zh: "好啊，他们一定会很惊喜的。", correct: true, xp: 10 },
          { text: "Let's keep every single jar just for ourselves.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, they'll be so surprised.",
        next: null
      }
    }
  },
  {
    id: "sharing-honey-with-neighbors",
    transition: { en: "They knock on doors, handing out small jars of golden honey.", zh: "他们挨家挨户敲门，分送一小罐一小罐的金色蜂蜜。" },
    title: "Sharing Honey with Neighbors",
    subtitle: "街坊 · 分享自家蜂蜜",
    avatar: "🚪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You made this yourselves, from your own backyard bees?", zh: "这是你们自己做的，用自家后院的蜜蜂？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "We did, it's been such a fun project.", zh: "是的，这是个特别有趣的项目。", correct: true, xp: 10 },
          { text: "We didn't, we just bought this at a store.", correct: false }
        ],
        hintOnWrong: "肯定回答 → We did, it's been such a fun project.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more thoughtful than any gift I've received all year.", zh: "这比我今年收到的任何礼物都更用心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That means a lot, we're glad you like it.", zh: "这话对我们意义很大，很高兴你喜欢。", correct: true, xp: 10 },
          { text: "Thoughtfulness doesn't matter, it's just honey.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That means a lot, we're glad you like it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how small the jar, this feels really special.", zh: "不管罐子有多小，这份心意都特别珍贵。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how small, we made it with love.", zh: "不管多小，都是我们用心做的。", correct: true, xp: 10 },
          { text: "No matter how small, it isn't worth much.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how small, we made it with love.",
        next: null
      }
    }
  },
  {
    id: "preparing-the-hive-for-winter",
    transition: { en: "As autumn arrives, they prepare the hive for the coming winter.", zh: "秋天到来时，他们开始为即将到来的冬天准备蜂箱。" },
    title: "Preparing the Hive for Winter",
    subtitle: "后院 · 为过冬做准备",
    avatar: "❄️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We should leave enough honey for the bees to survive winter.", zh: "我们应该给蜜蜂留够蜂蜜好让它们过冬。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, we shouldn't take it all for ourselves.", zh: "你说得对，我们不应该全都留给自己。", correct: true, xp: 10 },
          { text: "That's silly, bees don't need honey to survive.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, we shouldn't take it all for ourselves.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This hive will be quieter than it was all summer.", zh: "这个蜂箱会比整个夏天都要安静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It will, but they're still working inside.", zh: "会的，不过它们里面还在忙活。", correct: true, xp: 10 },
          { text: "It won't, winter changes nothing at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It will, but they're still working inside.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By next spring, we'll have a whole new season of honey.", zh: "到明年春天，我们又会有一整季新蜂蜜了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, and I already can't wait for it.", zh: "会的，我已经等不及了。", correct: true, xp: 10 },
          { text: "We won't, this hobby is probably over now.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, and I already can't wait for it.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "beekeeping", zh: "养蜂", category: "community" },
  { en: "stung", zh: "被蜇（sting 过去分词）", category: "community" },
  { en: "protective suit", zh: "防护服", category: "community" },
  { en: "bulkier", zh: "更笨重的", category: "community" },
  { en: "hives", zh: "蜂箱（复数）", category: "community" },
  { en: "startle", zh: "惊吓", category: "community" },
  { en: "queen bee", zh: "蜂后", category: "community" },
  { en: "worker bees", zh: "工蜂（复数）", category: "community" },
  { en: "lays eggs", zh: "产卵", category: "community" },
  { en: "fascinating", zh: "极有趣的", category: "community" },
  { en: "assemble", zh: "组装", category: "community" },
  { en: "wooden", zh: "木制的", category: "community" },
  { en: "trickier", zh: "更棘手的", category: "community" },
  { en: "bee colony", zh: "蜂群", category: "community" },
  { en: "buzzing", zh: "嗡嗡作响的", category: "community" },
  { en: "release", zh: "放出，释放", category: "community" },
  { en: "pollen", zh: "花粉", category: "community" },
  { en: "nectar", zh: "花蜜", category: "community" },
  { en: "honey", zh: "蜂蜜", category: "community" },
  { en: "curious", zh: "好奇的", category: "community" },
  { en: "honeycomb", zh: "蜂巢", category: "community" },
  { en: "frames", zh: "框架（养蜂用语）", category: "community" },
  { en: "hexagon cells", zh: "六边形蜂房", category: "community" },
  { en: "harvest", zh: "采收", category: "community" },
  { en: "extract", zh: "提取，萃取", category: "community" },
  { en: "jars", zh: "罐子（复数）", category: "community" },
  { en: "golden", zh: "金色的", category: "community" },
  { en: "thoughtful", zh: "用心的", category: "community" },
  { en: "autumn", zh: "秋天", category: "community" },
  { en: "survive", zh: "存活", category: "community" },
  { en: "quieter", zh: "更安静的", category: "community" },
  { en: "hobby", zh: "爱好", category: "community" }
);
