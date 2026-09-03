// 内容数据层：第八十五章，紧接第八十四章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人在家尝试自制奶酪。全新词汇领域：
// 凝乳/奶酪布/发酵/熟成。

GAME_CONTENT.scenes.push(
  {
    id: "the-cheese-making-kit",
    transition: { en: "A cheese-making kit arrives with cultures, rennet, and cheesecloth.", zh: "一套奶酪制作套装送到了，里面有菌种、凝乳酶和奶酪布。" },
    title: "The Cheese-Making Kit",
    subtitle: "厨房 · 奶酪制作套装",
    avatar: "🧀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever made cheese from scratch before?", zh: "你以前从零开始做过奶酪吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never made cheese, only bought it from stores.", zh: "我从没做过奶酪，只在店里买过。", correct: true, xp: 10 },
          { text: "I've made cheese every single day this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never made cheese, only bought it from stores.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This recipe looks trickier than the yogurt one we tried.", zh: "这个食谱看起来比我们试过的酸奶食谱更棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but let's give it a shot anyway.", zh: "确实是，不过我们还是试试吧。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's skip this recipe entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but let's give it a shot anyway.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's warm the milk slowly on low heat first.", zh: "我们先小火慢慢把牛奶加热吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, patience matters with cheese.", zh: "好主意，做奶酪需要耐心。", correct: true, xp: 10 },
          { text: "Let's just blast it on high heat instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, patience matters with cheese.",
        next: null
      }
    }
  },
  {
    id: "adding-the-culture",
    transition: { en: "They sprinkle a packet of starter culture into the warm milk.", zh: "他们把一包发酵菌种撒进了温热的牛奶里。" },
    title: "Adding the Culture",
    subtitle: "厨房 · 加入菌种",
    avatar: "🥛",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you stir this gently without breaking the surface too much?", zh: "你能轻轻搅拌，别把表面搅得太乱吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, slow circles should do it.", zh: "我能做到，慢慢画圈就行。", correct: true, xp: 10 },
          { text: "I can't stir anything gently at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, slow circles should do it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This milk needs to rest longer than I expected.", zh: "这牛奶需要静置的时间比我预想的要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, an hour should be about right.", zh: "确实是，大概一小时就差不多了。", correct: true, xp: 10 },
          { text: "Time doesn't matter, let's rush this step.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, an hour should be about right.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once the culture works, we'll add the rennet next.", zh: "菌种起作用之后，我们接下来就加凝乳酶。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, this is the exciting part.", zh: "会的，这是最令人期待的部分。", correct: true, xp: 10 },
          { text: "We won't, let's skip the rennet completely.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, this is the exciting part.",
        next: null
      }
    }
  },
  {
    id: "watching-the-curds-form",
    transition: { en: "Slowly, the milk begins separating into soft curds and clear whey.", zh: "牛奶慢慢开始分离成软软的凝乳和清澈的乳清。" },
    title: "Watching the Curds Form",
    subtitle: "厨房 · 观察凝乳形成",
    avatar: "🥣",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is separating faster than I thought it would.", zh: "这个分离得比我想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, the rennet must be working well.", zh: "确实是，凝乳酶一定在起作用。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just stir it more.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, the rennet must be working well.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look, this part is turning into soft little clumps.", zh: "看，这部分正在变成软软的小凝块。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I see it, those must be the curds forming.", zh: "我看到了，那一定是正在形成的凝乳。", correct: true, xp: 10 },
          { text: "I don't see any change happening at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I see it, those must be the curds forming.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "The whey looks clearer than I expected it to be.", zh: "这乳清比我预想的要更清澈。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that's a good sign apparently.", zh: "确实是，据说这是个好迹象。", correct: true, xp: 10 },
          { text: "Clarity doesn't matter, let's throw it all away.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that's a good sign apparently.",
        next: null
      }
    }
  },
  {
    id: "straining-with-cheesecloth",
    transition: { en: "They pour the mixture through cheesecloth stretched over a bowl.", zh: "他们把混合物倒进撑在碗上的奶酪布里过滤。" },
    title: "Straining with Cheesecloth",
    subtitle: "厨房 · 用奶酪布过滤",
    avatar: "🧻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you hold the cloth steady while I pour?", zh: "我倒的时候你能把布扶稳吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, go ahead and pour slowly.", zh: "我能扶稳，你慢慢倒吧。", correct: true, xp: 10 },
          { text: "I can't hold anything steady right now.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, go ahead and pour slowly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This cloth is straining out more whey than I expected.", zh: "这块布滤出的乳清比我预想的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, look how much liquid is left behind.", zh: "确实是，看留下了多少液体。", correct: true, xp: 10 },
          { text: "Amount doesn't matter, let's just squeeze it dry.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, look how much liquid is left behind.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's hang this over the sink for an hour.", zh: "我们把它挂在水槽上方晾一个小时吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, gravity will do the rest.", zh: "好啊，剩下的交给重力就行。", correct: true, xp: 10 },
          { text: "Let's just squeeze it hard right now instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, gravity will do the rest.",
        next: null
      }
    }
  },
  {
    id: "seasoning-the-cheese",
    transition: { en: "Once drained, they mix in salt, herbs, and cracked pepper.", zh: "沥干之后，他们拌入了盐、香草和碎黑胡椒。" },
    title: "Seasoning the Cheese",
    subtitle: "厨房 · 给奶酪调味",
    avatar: "🧂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much salt do you think we should add?", zh: "你觉得我们该加多少盐？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Just a pinch, we can always add more.", zh: "一小撮就行，后面还可以再加。", correct: true, xp: 10 },
          { text: "We shouldn't add any salt at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → Just a pinch, we can always add more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This tastes creamier than I imagined homemade cheese would.", zh: "这尝起来比我想象的自制奶酪要更绵密。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I'm genuinely impressed with it.", zh: "确实如此，我真的对它很满意。", correct: true, xp: 10 },
          { text: "It really doesn't, this tastes pretty bland.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I'm genuinely impressed with it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's try adding some fresh chives too.", zh: "我们也加点新鲜香葱试试吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it'll add a nice bite.", zh: "好啊，这会增添一点清爽的口感。", correct: true, xp: 10 },
          { text: "Let's leave it completely plain instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it'll add a nice bite.",
        next: null
      }
    }
  },
  {
    id: "a-toddler-tastes-it",
    transition: { en: "Their toddler cautiously tries a tiny spoonful of the fresh cheese.", zh: "孩子小心翼翼地尝了一小勺新鲜奶酪。" },
    title: "A Toddler Tastes It",
    subtitle: "厨房 · 孩子尝奶酪",
    avatar: "😋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you like it, is it good?", zh: "你喜欢吗，好吃吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They're nodding, that's a very good sign.", zh: "他们在点头，这是个很好的信号。", correct: true, xp: 10 },
          { text: "They hated it and spit it out immediately.", correct: false }
        ],
        hintOnWrong: "肯定倾向回答 → They're nodding, that's a very good sign.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're asking for a second spoonful already!", zh: "他们已经又要了一勺了！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "That's the best review we could ask for.", zh: "这是我们能得到的最好评价了。", correct: true, xp: 10 },
          { text: "That means they didn't like it at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → That's the best review we could ask for.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This turned out better than any cheese we've bought.", zh: "这做出来比我们买过的任何奶酪都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I'm so proud of us.", zh: "确实如此，我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "It really didn't, store cheese tastes better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I'm so proud of us.",
        next: null
      }
    }
  },
  {
    id: "trying-a-harder-cheese",
    transition: { en: "Encouraged, they attempt a firmer cheese that needs to age.", zh: "备受鼓舞，他们尝试做一种需要熟成的更硬的奶酪。" },
    title: "Trying a Harder Cheese",
    subtitle: "厨房 · 尝试更硬的奶酪",
    avatar: "🧈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This cheese needs pressing longer than the soft one did.", zh: "这种奶酪需要压制的时间比软奶酪更长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's set a timer for tomorrow.", zh: "确实是，我们设个明天的提醒吧。", correct: true, xp: 10 },
          { text: "Time doesn't matter, let's unwrap it right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's set a timer for tomorrow.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we press it firmly, the texture will hold better.", zh: "如果我们压得紧实一些，质地会保持得更好。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's add more weight on top.", zh: "如果是这样，我们再加点重物压上去吧。", correct: true, xp: 10 },
          { text: "If that's true, let's just leave it loose.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If that's true, let's add more weight on top.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will need to age in the fridge for weeks.", zh: "这个需要在冰箱里熟成好几周。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, good things really do take time.", zh: "会的，好东西确实需要时间。", correct: true, xp: 10 },
          { text: "It won't, we should eat it right away instead.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, good things really do take time.",
        next: null
      }
    }
  },
  {
    id: "checking-on-the-aging-cheese",
    transition: { en: "Weeks later, they peek inside the fridge to check on their cheese.", zh: "几周后，他们打开冰箱查看熟成中的奶酪。" },
    title: "Checking on the Aging Cheese",
    subtitle: "厨房 · 查看熟成中的奶酪",
    avatar: "🧊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This rind looks firmer than it did last week.", zh: "这层外皮比上周要更结实了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, the aging process is really working.", zh: "确实是，熟成过程真的在起作用。", correct: true, xp: 10 },
          { text: "Firmness doesn't matter, let's just eat it now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, the aging process is really working.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have we ever waited this long for food before?", zh: "我们以前有为食物等这么久吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We haven't, this patience feels new to us.", zh: "还没有过，这种耐心对我们来说挺新鲜的。", correct: true, xp: 10 },
          { text: "We've waited for hours for every single meal.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We haven't, this patience feels new to us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Just one more week, and then we can finally taste it.", zh: "再等一周，我们就终于能尝到了。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can hardly wait for that day to come.", zh: "我几乎等不及那一天到来了。", correct: true, xp: 10 },
          { text: "I can't wait any longer, let's eat it today.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/耐心 → I can hardly wait for that day to come.",
        next: null
      }
    }
  },
  {
    id: "the-cheese-tasting",
    transition: { en: "The wait is finally over, and they slice into the aged wheel.", zh: "等待终于结束了，他们切开了熟成的奶酪轮。" },
    title: "The Cheese Tasting",
    subtitle: "厨房 · 品尝奶酪",
    avatar: "🔪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This flavor is sharper than I ever expected homemade cheese to be.", zh: "这个味道比我曾经预想的自制奶酪要更浓郁。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, aging made a huge difference.", zh: "确实如此，熟成带来了巨大的变化。", correct: true, xp: 10 },
          { text: "It really isn't, this tastes exactly like milk.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, aging made a huge difference.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you believe we made this ourselves, start to finish?", zh: "你能相信这是我们从头到尾自己做的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, this feels like an achievement.", zh: "我真的不敢相信，这感觉像是一项成就。", correct: true, xp: 10 },
          { text: "I can believe it, this tastes completely ordinary.", correct: false }
        ],
        hintOnWrong: "用 can 表惊讶 → I honestly can't, this feels like an achievement.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's invite friends over to try our next batch.", zh: "我们邀请朋友来尝尝下一批吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, they'll never believe we made it.", zh: "好啊，他们绝对不会相信是我们做的。", correct: true, xp: 10 },
          { text: "Let's keep this a secret from everyone forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, they'll never believe we made it.",
        next: null
      }
    }
  },
  {
    id: "planning-the-next-batch",
    transition: { en: "Inspired, they start planning to try a smoked cheese next.", zh: "受到鼓舞，他们开始计划接下来尝试一种烟熏奶酪。" },
    title: "Planning the Next Batch",
    subtitle: "厨房 · 计划下一批",
    avatar: "💨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What kind of cheese should we try making next?", zh: "我们接下来该尝试做哪种奶酪？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe something smoked, that sounds interesting.", zh: "也许试试烟熏口味的，听起来很有意思。", correct: true, xp: 10 },
          { text: "We shouldn't make any cheese ever again.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → Maybe something smoked, that sounds interesting.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This hobby has become more rewarding than I expected.", zh: "这个爱好比我预想的要更有成就感。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It has, I look forward to it every week now.", zh: "确实如此，我现在每周都期待它。", correct: true, xp: 10 },
          { text: "Reward doesn't matter, let's just stop entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It has, I look forward to it every week now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how long it takes, this is worth doing together.", zh: "不管要花多久，这件事都值得我们一起做。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how long, I'll always want to learn with you.", zh: "不管要多久，我都愿意和你一起学。", correct: true, xp: 10 },
          { text: "No matter how long, this hobby isn't worth the effort.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how long, I'll always want to learn with you.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "cheese-making", zh: "奶酪制作", category: "community" },
  { en: "cultures", zh: "菌种（复数）", category: "community" },
  { en: "rennet", zh: "凝乳酶", category: "community" },
  { en: "cheesecloth", zh: "奶酪布", category: "community" },
  { en: "from scratch", zh: "从零开始", category: "community" },
  { en: "starter culture", zh: "发酵菌种", category: "community" },
  { en: "circles", zh: "圈（搅拌动作）", category: "community" },
  { en: "curds", zh: "凝乳", category: "community" },
  { en: "whey", zh: "乳清", category: "community" },
  { en: "clumps", zh: "凝块（复数）", category: "community" },
  { en: "straining", zh: "过滤", category: "community" },
  { en: "gravity", zh: "重力", category: "community" },
  { en: "drained", zh: "沥干的", category: "community" },
  { en: "herbs", zh: "香草（复数）", category: "community" },
  { en: "cracked pepper", zh: "碎黑胡椒", category: "community" },
  { en: "pinch", zh: "一小撮", category: "community" },
  { en: "creamier", zh: "更绵密的", category: "community" },
  { en: "chives", zh: "香葱", category: "community" },
  { en: "cautiously", zh: "小心翼翼地", category: "community" },
  { en: "spoonful", zh: "一勺", category: "community" },
  { en: "nodding", zh: "点头", category: "community" },
  { en: "review", zh: "评价", category: "community" },
  { en: "pressing", zh: "压制", category: "community" },
  { en: "weight", zh: "重物", category: "community" },
  { en: "age", zh: "熟成", category: "community" },
  { en: "rind", zh: "外皮", category: "community" },
  { en: "aging process", zh: "熟成过程", category: "community" },
  { en: "sharper", zh: "更浓郁的", category: "community" },
  { en: "achievement", zh: "成就", category: "community" },
  { en: "smoked", zh: "烟熏的", category: "community" },
  { en: "rewarding", zh: "有成就感的", category: "community" }
);
