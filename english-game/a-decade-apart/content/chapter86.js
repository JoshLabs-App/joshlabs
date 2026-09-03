// 内容数据层：第八十六章，紧接第八十五章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人开始在家自酿康普茶。全新词汇领域：
// 红茶菌/发酵罐/二次发酵/气泡。

GAME_CONTENT.scenes.push(
  {
    id: "the-scoby-arrives",
    transition: { en: "A jar containing a strange rubbery disc arrives in the mail.", zh: "一个装着一片奇怪橡胶状圆盘的罐子邮寄到了。" },
    title: "The SCOBY Arrives",
    subtitle: "家里 · 红茶菌到货",
    avatar: "🫙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever seen anything quite like this before?", zh: "你以前有见过这种东西吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never seen anything like it, honestly.", zh: "说实话，我从没见过这种东西。", correct: true, xp: 10 },
          { text: "I've seen this exact thing every single week.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never seen anything like it, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This looks stranger than any ingredient we've ever used.", zh: "这个看起来比我们用过的任何食材都要奇怪。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but apparently it makes great tea.", zh: "确实是，不过据说它能酿出很棒的茶。", correct: true, xp: 10 },
          { text: "Appearance doesn't matter, let's throw it away now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but apparently it makes great tea.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's read the instructions carefully before we start.", zh: "开始之前我们先仔细读一下说明书吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, fermentation seems easy to get wrong.", zh: "好主意，发酵这件事似乎很容易出错。", correct: true, xp: 10 },
          { text: "Let's just wing it without reading anything.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, fermentation seems easy to get wrong.",
        next: null
      }
    }
  },
  {
    id: "brewing-the-sweet-tea",
    transition: { en: "They brew a large pot of sweet black tea to feed the culture.", zh: "他们煮了一大壶加糖的红茶来喂养这个菌种。" },
    title: "Brewing the Sweet Tea",
    subtitle: "厨房 · 煮甜茶",
    avatar: "🍵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tea needs to cool down completely before we use it.", zh: "这茶需要完全放凉之后我们才能用。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Right, warm tea could hurt the culture.", zh: "对，温热的茶可能会伤害菌种。", correct: true, xp: 10 },
          { text: "That's wrong, hot tea works even better.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Right, warm tea could hurt the culture.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we add more sugar than the recipe suggests?", zh: "我们要不要比食谱建议的多加点糖？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, let's follow the recipe exactly this time.", zh: "不，这次我们就完全按食谱来吧。", correct: true, xp: 10 },
          { text: "Yes, let's double the sugar just to be safe.", correct: false }
        ],
        hintOnWrong: "否定回答 → No, let's follow the recipe exactly this time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This kitchen smells sweeter than it usually does.", zh: "厨房现在闻起来比平时要甜。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, the whole house smells like tea.", zh: "确实是，整间屋子都是茶香。", correct: true, xp: 10 },
          { text: "Smell doesn't matter, let's open all the windows.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, the whole house smells like tea.",
        next: null
      }
    }
  },
  {
    id: "starting-the-first-ferment",
    transition: { en: "They pour the cooled tea into a large glass jar with the SCOBY.", zh: "他们把放凉的茶倒进装着红茶菌的大玻璃罐里。" },
    title: "Starting the First Ferment",
    subtitle: "厨房 · 开始一次发酵",
    avatar: "🧪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you cover this with a cloth instead of a lid?", zh: "你能用布盖住而不是用盖子吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it still needs to breathe apparently.", zh: "我能做到，据说它还是需要透气的。", correct: true, xp: 10 },
          { text: "I can't find any cloth in this kitchen.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it still needs to breathe apparently.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This needs to sit in a warmer spot than the pantry.", zh: "这个需要放在比储藏室更暖和的地方。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's put it on top of the fridge.", zh: "确实是，我们把它放在冰箱顶上吧。", correct: true, xp: 10 },
          { text: "Temperature doesn't matter, let's just leave it anywhere.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's put it on top of the fridge.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "In about a week, this will taste tangy and fizzy.", zh: "大约一周后，这会变得酸酸的、还带点气泡。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, I'm curious to see how it changes.", zh: "会的，我很好奇它会怎么变化。", correct: true, xp: 10 },
          { text: "It won't, this will taste exactly the same.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, I'm curious to see how it changes.",
        next: null
      }
    }
  },
  {
    id: "checking-the-progress",
    transition: { en: "Every couple of days, they peek at the fermenting jar on the counter.", zh: "他们每隔几天就会瞄一眼台面上正在发酵的罐子。" },
    title: "Checking the Progress",
    subtitle: "厨房 · 检查发酵进度",
    avatar: "👀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is bubbling more than it was yesterday.", zh: "这个比昨天冒的泡要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that means it's fermenting well.", zh: "确实是，说明发酵得很顺利。", correct: true, xp: 10 },
          { text: "Bubbling doesn't matter, let's just pour it out.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that means it's fermenting well.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you smell how vinegary it's becoming?", zh: "你能闻到它变得越来越有醋味了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it smells tangier every single day.", zh: "我能闻到，一天比一天更酸了。", correct: true, xp: 10 },
          { text: "I can't smell anything different at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it smells tangier every single day.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Should we taste a little bit today to check?", zh: "我们今天要不要尝一小口试试？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Sure, a small taste test can't hurt.", zh: "可以，少量试喝应该没问题。", correct: true, xp: 10 },
          { text: "No, let's never taste it until it's finished.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Sure, a small taste test can't hurt.",
        next: null
      }
    }
  },
  {
    id: "the-second-ferment",
    transition: { en: "They pour the brewed kombucha into bottles with fresh fruit.", zh: "他们把酿好的康普茶倒进瓶子里，加入新鲜水果。" },
    title: "The Second Ferment",
    subtitle: "厨房 · 二次发酵",
    avatar: "🍓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which fruit do you want to add to this bottle?", zh: "你想在这瓶里加哪种水果？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's try strawberries in this one first.", zh: "我们先在这瓶里试试草莓吧。", correct: true, xp: 10 },
          { text: "I don't want to add any fruit at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Let's try strawberries in this one first.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This second ferment creates more fizz than the first one did.", zh: "这次二次发酵产生的气泡比第一次要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, the fruit sugar really helps with that.", zh: "确实是，水果里的糖分对此很有帮助。", correct: true, xp: 10 },
          { text: "Fizz doesn't matter, let's skip this whole step.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, the fruit sugar really helps with that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's seal these bottles tightly for a few more days.", zh: "我们把这些瓶子密封好，再放几天。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, patience makes it fizzier.", zh: "好啊，耐心等待会让气泡更足。", correct: true, xp: 10 },
          { text: "Let's just open them and drink it flat.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, patience makes it fizzier.",
        next: null
      }
    }
  },
  {
    id: "a-bottle-overflows",
    transition: { en: "One bottle fizzes over dramatically when they open it too fast.", zh: "有一瓶因为打开得太快而剧烈冒泡溢了出来。" },
    title: "A Bottle Overflows",
    subtitle: "厨房 · 一瓶溢了出来",
    avatar: "💦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Whoa, that fizzed up faster than I expected!", zh: "哇，这冒泡的速度比我预想的要快！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, let's open the next one slower.", zh: "确实是，我们打开下一瓶时慢一点吧。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's shake the next one too.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, let's open the next one slower.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we chill it first, it might overflow less.", zh: "如果我们先把它冰一下，可能就不会溢出那么多了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that helps, let's chill the rest overnight.", zh: "如果有用，我们把剩下的整晚冰一下吧。", correct: true, xp: 10 },
          { text: "If that helps, let's warm them up instead.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If that helps, let's chill the rest overnight.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "At least we learned something for the next batch.", zh: "至少我们为下一批学到了经验。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "True, every mistake teaches us something new.", zh: "没错，每个失误都会教会我们一些新东西。", correct: true, xp: 10 },
          { text: "Not true, this was a complete waste of tea.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → True, every mistake teaches us something new.",
        next: null
      }
    }
  },
  {
    id: "the-first-taste",
    transition: { en: "Chilled and finally ready, they pour the first glasses to taste.", zh: "冰好之后终于可以喝了，他们倒出了第一杯来品尝。" },
    title: "The First Taste",
    subtitle: "厨房 · 第一次品尝",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tastes way more sour than store-bought kombucha.", zh: "这个尝起来比店里买的康普茶要酸得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but I actually really like it.", zh: "确实是，不过我其实挺喜欢的。", correct: true, xp: 10 },
          { text: "Sourness doesn't matter, let's pour it all out.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but I actually really like it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you taste the strawberry coming through at all?", zh: "你能尝出草莓味吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's a nice subtle sweetness.", zh: "能尝到，是一种淡淡的甜味，挺好的。", correct: true, xp: 10 },
          { text: "I can't taste anything besides plain tea.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's a nice subtle sweetness.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We actually made something that tastes this good.", zh: "我们真的做出了这么好喝的东西。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We did, I'm honestly impressed with us.", zh: "确实是，我对我们真的挺佩服的。", correct: true, xp: 10 },
          { text: "We didn't, this whole batch was a failure.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We did, I'm honestly impressed with us.",
        next: null
      }
    }
  },
  {
    id: "a-toddler-tries-a-sip",
    transition: { en: "Curious, their toddler asks for a tiny sip of the fizzy drink.", zh: "好奇的孩子想尝一小口这种带气泡的饮料。" },
    title: "A Toddler Tries a Sip",
    subtitle: "厨房 · 孩子尝一口",
    avatar: "🧒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can I try just a little tiny sip, please?", zh: "我能尝一小口吗，拜托？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Just a tiny sip, it's quite sour though.", zh: "就一小口哦，不过挺酸的。", correct: true, xp: 10 },
          { text: "Sure, drink the entire glass right now.", correct: false }
        ],
        hintOnWrong: "允许但限定量 → Just a tiny sip, it's quite sour though.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Their face just scrunched up from the sourness!", zh: "他们的脸因为酸味都皱起来了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It did, that reaction was priceless honestly.", zh: "确实是，那个表情真是太逗了。", correct: true, xp: 10 },
          { text: "It didn't, they seemed completely unaffected.", correct: false }
        ],
        hintOnWrong: "一般过去时回应 → It did, that reaction was priceless honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe we'll make a less sour batch for them next time.", zh: "也许下次我们给他们做一批酸味淡一点的。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, maybe with a sweeter fruit.", zh: "会的，也许加点更甜的水果。", correct: true, xp: 10 },
          { text: "We won't, kids don't need to try this drink.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, maybe with a sweeter fruit.",
        next: null
      }
    }
  },
  {
    id: "growing-a-new-scoby",
    transition: { en: "They notice a thin new layer forming on top of the culture.", zh: "他们注意到菌种表面又长出了一层薄薄的新膜。" },
    title: "Growing a New SCOBY",
    subtitle: "厨房 · 长出新的红茶菌",
    avatar: "🔬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this new layer thicker than the one from last month?", zh: "这层新膜比上个月那层要厚吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "It is, this batch grew a really healthy one.", zh: "是的，这批长出了很健康的一层。", correct: true, xp: 10 },
          { text: "It isn't, nothing grew here at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → It is, this batch grew a really healthy one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We could give this extra one to a friend now.", zh: "我们现在可以把这个多出来的分给朋友了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We could, they'd probably love brewing their own.", zh: "可以，他们大概会喜欢自己酿一份的。", correct: true, xp: 10 },
          { text: "We couldn't, this only works alone at home.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We could, they'd probably love brewing their own.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's pass this hobby along to someone else now.", zh: "我们现在把这个爱好传给别人吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, sharing makes it more fun.", zh: "好啊，分享让这件事更有乐趣。", correct: true, xp: 10 },
          { text: "Let's keep every SCOBY only for ourselves forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, sharing makes it more fun.",
        next: null
      }
    }
  },
  {
    id: "sharing-with-a-friend",
    transition: { en: "They hand a small jar with the extra SCOBY to a curious friend.", zh: "他们把装着多余红茶菌的小罐子递给了一位好奇的朋友。" },
    title: "Sharing with a Friend",
    subtitle: "朋友家 · 分享红茶菌",
    avatar: "🤝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you two really brew this whole thing yourselves?", zh: "你们俩真的是自己酿的这整套东西吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "We did, right on our kitchen counter.", zh: "是的，就在我们家厨房台面上做的。", correct: true, xp: 10 },
          { text: "We didn't, we bought this from a shop.", correct: false }
        ],
        hintOnWrong: "肯定回答 → We did, right on our kitchen counter.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more interesting than any gift I've gotten recently.", zh: "这比我最近收到的任何礼物都更有意思。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's kind of you, we hope you enjoy brewing.", zh: "你真客气，希望你享受酿造的过程。", correct: true, xp: 10 },
          { text: "Interest doesn't matter, just throw it away.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's kind of you, we hope you enjoy brewing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how odd it looks, this hobby brought us joy.", zh: "不管它看起来多奇怪，这个爱好给我们带来了快乐。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how odd, I hope it does the same for you.", zh: "不管多奇怪，我希望它也能给你带来同样的快乐。", correct: true, xp: 10 },
          { text: "No matter how odd, this hobby was pointless.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how odd, I hope it does the same for you.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "SCOBY", zh: "红茶菌（共生菌膜）", category: "community" },
  { en: "rubbery", zh: "橡胶状的", category: "community" },
  { en: "disc", zh: "圆盘", category: "community" },
  { en: "fermentation", zh: "发酵", category: "community" },
  { en: "black tea", zh: "红茶", category: "community" },
  { en: "sugar", zh: "糖", category: "community" },
  { en: "breathe", zh: "透气", category: "community" },
  { en: "pantry", zh: "储藏室", category: "community" },
  { en: "tangy", zh: "酸酸的", category: "community" },
  { en: "fizzy", zh: "带气泡的", category: "community" },
  { en: "bubbling", zh: "冒泡", category: "community" },
  { en: "vinegary", zh: "有醋味的", category: "community" },
  { en: "taste test", zh: "试喝，试尝", category: "community" },
  { en: "second ferment", zh: "二次发酵", category: "community" },
  { en: "strawberries", zh: "草莓（复数）", category: "community" },
  { en: "fizz", zh: "气泡", category: "community" },
  { en: "seal", zh: "密封", category: "community" },
  { en: "fizzier", zh: "气泡更多的", category: "community" },
  { en: "overflows", zh: "溢出", category: "community" },
  { en: "chill", zh: "冰镇", category: "community" },
  { en: "sour", zh: "酸的", category: "community" },
  { en: "subtle", zh: "淡淡的，微妙的", category: "community" },
  { en: "sweetness", zh: "甜味", category: "community" },
  { en: "sip", zh: "一小口", category: "community" },
  { en: "scrunched up", zh: "皱起来", category: "community" },
  { en: "priceless", zh: "无价的，特别逗的", category: "community" },
  { en: "thicker", zh: "更厚的", category: "community" },
  { en: "healthy", zh: "健康的", category: "community" },
  { en: "sharing", zh: "分享", category: "community" },
  { en: "counter", zh: "台面", category: "community" },
  { en: "odd", zh: "奇怪的", category: "community" }
);
