// 内容数据层：第七十七章，紧接第七十六章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人报名了一堂意大利手工面条制作课。全新词汇领域：
// 揉面擀面/面粉配比/酱汁搭配/成品摆盘。

GAME_CONTENT.scenes.push(
  {
    id: "signing-up-for-pasta-class",
    transition: { en: "A cooking school advertises a hands-on pasta-making class.", zh: "一家烹饪学校宣传了一堂动手做意面的课程。" },
    title: "Signing Up for Pasta Class",
    subtitle: "手机 · 报名意面课",
    avatar: "🍝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever made pasta completely from scratch?", zh: "你有完全从头做过意面吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never once made it from scratch.", zh: "我从没从头做过。", correct: true, xp: 10 },
          { text: "I've made it from scratch every week for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never once made it from scratch.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This class covers dough, sauce, and plating.", zh: "这堂课涵盖面团、酱汁和摆盘。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds thorough, let's sign up together.", zh: "这听起来很全面，我们一起报名吧。", correct: true, xp: 10 },
          { text: "That sounds unnecessary, let's just eat instant noodles.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds thorough, let's sign up together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book the Saturday morning session.", zh: "我们订周六上午的场次吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, mornings work well for us.", zh: "好啊，早上对我们来说合适。", correct: true, xp: 10 },
          { text: "Let's just pick a random weekday evening instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, mornings work well for us.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-chef",
    transition: { en: "A passionate Italian chef welcomes the class into the kitchen.", zh: "一位充满热情的意大利厨师把大家迎进了厨房。" },
    title: "Meeting the Chef",
    subtitle: "厨房教室 · 认识主厨",
    avatar: "👨‍🍳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Good pasta starts with just flour, eggs, and patience.", zh: "好的意面只需要面粉、鸡蛋和耐心。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds simple, but I bet it takes practice.", zh: "听起来挺简单，但我猜需要多加练习。", correct: true, xp: 10 },
          { text: "That sounds fake, real pasta needs fancy machines.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds simple, but I bet it takes practice.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This flour feels finer than what we usually buy.", zh: "这种面粉比我们平常买的要更细腻。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that should make a smoother dough.", zh: "确实是，这样应该能做出更顺滑的面团。", correct: true, xp: 10 },
          { text: "Texture doesn't matter, any flour works the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that should make a smoother dough.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please wash your hands before we start kneading.", zh: "开始揉面前请先洗手。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll go wash up right now.", zh: "当然，我们现在就去洗手。", correct: true, xp: 10 },
          { text: "Sorry, washing hands seems unnecessary for cooking.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll go wash up right now.",
        next: null
      }
    }
  },
  {
    id: "kneading-the-dough",
    transition: { en: "They take turns kneading a sticky ball of dough on the counter.", zh: "他们轮流在台面上揉一团黏糊糊的面团。" },
    title: "Kneading the Dough",
    subtitle: "厨房教室 · 揉面",
    avatar: "🥖",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This dough is stickier than I expected it to be.", zh: "这面团比我预想的要黏得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's add a little more flour.", zh: "确实是，我们再加点面粉吧。", correct: true, xp: 10 },
          { text: "Stickiness doesn't matter, let's just leave it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's add a little more flour.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you feel it getting smoother as you knead?", zh: "你能感觉到揉着揉着它变得更顺滑了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, this is honestly kind of satisfying.", zh: "能感觉到，说实话这挺有成就感的。", correct: true, xp: 10 },
          { text: "I can't, this still feels exactly the same.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, this is honestly kind of satisfying.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let this rest for thirty minutes before rolling it out.", zh: "擀面之前先让它醒发三十分钟。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, we'll set a timer for that.", zh: "好的，我们设个计时器。", correct: true, xp: 10 },
          { text: "Sorry, we'd rather skip resting it entirely.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, we'll set a timer for that.",
        next: null
      }
    }
  },
  {
    id: "rolling-out-the-pasta",
    transition: { en: "They feed the rested dough through a hand-cranked pasta roller.", zh: "他们把醒好的面团送进一台手摇压面机。" },
    title: "Rolling Out the Pasta",
    subtitle: "厨房教室 · 擀面",
    avatar: "🍜",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This sheet is thinner than the last one we made.", zh: "这张面皮比我们上一张做的要薄。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we're getting better with each try.", zh: "确实是，我们每次都做得更好了。", correct: true, xp: 10 },
          { text: "It isn't, this sheet looks exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we're getting better with each try.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you turn the crank while I feed the dough in?", zh: "我送面团的时候你能摇一下手柄吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, just tell me when to slow down.", zh: "可以，告诉我什么时候该放慢就行。", correct: true, xp: 10 },
          { text: "I can't, my arm is already too tired.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, just tell me when to slow down.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's cut this into long, thin noodles now.", zh: "我们现在把它切成又长又细的面条吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I've been waiting for this part.", zh: "好啊，我一直在等这一步。", correct: true, xp: 10 },
          { text: "Let's leave it as one giant sheet instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I've been waiting for this part.",
        next: null
      }
    }
  },
  {
    id: "making-the-sauce",
    transition: { en: "While the pasta rests, they start a simple tomato sauce.", zh: "趁面条静置的时候，他们开始做一款简单的番茄酱汁。" },
    title: "Making the Sauce",
    subtitle: "厨房教室 · 做酱汁",
    avatar: "🍅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This sauce needs less garlic than you might think.", zh: "这个酱汁需要的大蒜比你想的要少。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Good to know, let's add it a little at a time.", zh: "很高兴知道这个，我们一点一点加吧。", correct: true, xp: 10 },
          { text: "More garlic is always better, let's dump it all in.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Good to know, let's add it a little at a time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Taste it now and tell me what it needs.", zh: "现在尝一下，告诉我还需要加点什么。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I think it needs a little more salt.", zh: "好的，我觉得需要再多加点盐。", correct: true, xp: 10 },
          { text: "Sorry, tasting food while cooking feels wrong.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I think it needs a little more salt.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This smells better than any sauce we've made at home.", zh: "这闻起来比我们在家做的任何酱汁都要香。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I want to remember this recipe.", zh: "确实如此，我要记住这个食谱。", correct: true, xp: 10 },
          { text: "It really doesn't, our sauce at home is always better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I want to remember this recipe.",
        next: null
      }
    }
  },
  {
    id: "cooking-the-noodles",
    transition: { en: "The fresh noodles hit boiling water for just a couple of minutes.", zh: "新鲜面条只需要在沸水中煮几分钟。" },
    title: "Cooking the Noodles",
    subtitle: "厨房教室 · 煮面",
    avatar: "🍲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Fresh pasta cooks much faster than dried pasta does.", zh: "新鲜意面煮的速度比干意面要快得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's good to know, let's watch it closely.", zh: "很高兴知道这个，我们仔细看着点吧。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just walk away.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's good to know, let's watch it closely.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's ready when it floats to the top.", zh: "当它浮到水面上就熟了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "There it goes, let's pull it out now.", zh: "浮起来了，我们现在就捞出来吧。", correct: true, xp: 10 },
          { text: "That's fine, let's just leave it boiling forever.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → There it goes, let's pull it out now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Save some pasta water before draining it.", zh: "沥水前留一些煮面水。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, I'll scoop some out right now.", zh: "明白了，我现在就舀一点出来。", correct: true, xp: 10 },
          { text: "Sorry, pasta water seems completely useless.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, I'll scoop some out right now.",
        next: null
      }
    }
  },
  {
    id: "plating-the-dish",
    transition: { en: "The chef demonstrates how to twirl noodles into a neat plated pile.", zh: "主厨示范了如何把面条卷成整齐的一堆摆盘。" },
    title: "Plating the Dish",
    subtitle: "厨房教室 · 摆盘",
    avatar: "🍽️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This twirling technique looks harder than it actually is.", zh: "这个卷面技巧看起来比实际做起来要难。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's give it a try and see for ourselves.", zh: "我们试试看吧，自己感受一下。", correct: true, xp: 10 },
          { text: "Let's just pile it on messily instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's give it a try and see for ourselves.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Yours looks more elegant than mine, honestly.", zh: "说实话，你摆的看起来比我的更精致。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "No way, yours has its own kind of charm.", zh: "才不是呢，你的也有自己的一种魅力。", correct: true, xp: 10 },
          { text: "That's true, mine looks like a total mess.", correct: false }
        ],
        hintOnWrong: "回应比较句 → No way, yours has its own kind of charm.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Add a little fresh basil right on top.", zh: "在最上面加一点新鲜罗勒叶。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Perfect, that'll add a nice pop of color.", zh: "太好了，这样能增添一抹亮色。", correct: true, xp: 10 },
          { text: "Sorry, basil seems unnecessary for this dish.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Perfect, that'll add a nice pop of color.",
        next: null
      }
    }
  },
  {
    id: "tasting-their-creation",
    transition: { en: "The whole class sits down together to taste what they made.", zh: "全班一起坐下品尝自己做的成果。" },
    title: "Tasting Their Creation",
    subtitle: "厨房教室 · 品尝成果",
    avatar: "😋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tastes better than any pasta I've ever ordered at a restaurant.", zh: "这味道比我在餐厅点过的任何意面都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, this beats any restaurant, honestly.", zh: "确实如此，说实话这比任何餐厅都好吃。", correct: true, xp: 10 },
          { text: "It really doesn't, restaurant pasta always wins.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I can't believe we made this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The texture is chewier than store-bought pasta too.", zh: "口感也比买来的意面更有嚼劲。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, and honestly that's exactly how I like it.", zh: "确实是，说实话我就喜欢这种口感。", correct: true, xp: 10 },
          { text: "It isn't, this tastes exactly like the boxed stuff.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, and honestly that's exactly how I like it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We actually made a full meal from scratch, together.", zh: "我们真的一起从头做出了一顿完整的饭。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did, and I'm honestly really proud of us.", zh: "确实是，说实话我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "We didn't, most of this was actually pre-made.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did, and I'm honestly really proud of us.",
        next: null
      }
    }
  },
  {
    id: "taking-the-recipe-home",
    transition: { en: "They leave with a printed recipe card and a bag of flour.", zh: "他们带着一张打印的食谱卡和一袋面粉离开了。" },
    title: "Taking the Recipe Home",
    subtitle: "厨房教室 · 带食谱回家",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we try making this again at home next weekend?", zh: "我们下周末要不要在家再做一次？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's definitely give it a try.", zh: "好，我们一定要试一试。", correct: true, xp: 10 },
          { text: "No, once was already more than enough.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's definitely give it a try.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Doing it at home will probably be trickier without help.", zh: "在家没人帮忙做，大概会更棘手一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Probably, but we'll figure it out together.", zh: "大概会，但我们会一起想办法解决的。", correct: true, xp: 10 },
          { text: "Probably, so let's just never try it again.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Probably, but we'll figure it out together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's invite friends over when we make it.", zh: "我们做的时候把朋友们请过来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, homemade pasta night sounds fun.", zh: "好啊，自制意面之夜听起来很有意思。", correct: true, xp: 10 },
          { text: "Let's just keep it to ourselves this time.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, homemade pasta night sounds fun.",
        next: null
      }
    }
  },
  {
    id: "a-new-favorite-tradition",
    transition: { en: "Homemade pasta night quietly becomes a monthly favorite.", zh: "自制意面之夜悄悄成了每月最爱的活动。" },
    title: "A New Favorite Tradition",
    subtitle: "家里 · 新的最爱传统",
    avatar: "🍝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've made this three times now, and it's gotten easier each time.", zh: "我们已经做了三次了，一次比一次容易。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, practice is honestly paying off.", zh: "确实如此，说实话练习真的有了回报。", correct: true, xp: 10 },
          { text: "We really haven't, it feels harder each time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, practice is honestly paying off.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This has become one of our favorite things to do together.", zh: "这已经成了我们最喜欢一起做的事情之一。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It really has, I love that we found this.", zh: "确实如此，很高兴我们发现了这件事。", correct: true, xp: 10 },
          { text: "It really hasn't, this still feels like a chore.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It really has, I love that we found this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many times we make it, this still feels special.", zh: "不管我们做了多少次，这依然感觉很特别。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many times, I hope it always does.", zh: "不管多少次，我希望它永远都是如此。", correct: true, xp: 10 },
          { text: "No matter how many times, it's getting boring now.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many times, I hope it always does.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "pasta-making", zh: "做意面", category: "community" },
  { en: "hands-on", zh: "动手实践的", category: "community" },
  { en: "from scratch", zh: "从头开始", category: "community" },
  { en: "dough", zh: "面团", category: "community" },
  { en: "plating", zh: "摆盘", category: "community" },
  { en: "chef", zh: "主厨", category: "community" },
  { en: "passionate", zh: "充满热情的", category: "community" },
  { en: "flour", zh: "面粉", category: "community" },
  { en: "patience", zh: "耐心", category: "community" },
  { en: "finer", zh: "更细腻的（fine 比较级）", category: "community" },
  { en: "kneading", zh: "揉面", category: "community" },
  { en: "sticky", zh: "黏的", category: "community" },
  { en: "counter", zh: "台面", category: "community" },
  { en: "rest", zh: "醒发", category: "community" },
  { en: "rolling out", zh: "擀开", category: "community" },
  { en: "pasta roller", zh: "压面机", category: "community" },
  { en: "sheet", zh: "面皮", category: "community" },
  { en: "crank", zh: "手柄", category: "community" },
  { en: "feed in", zh: "送进去", category: "community" },
  { en: "noodles", zh: "面条", category: "community" },
  { en: "tomato sauce", zh: "番茄酱汁", category: "community" },
  { en: "garlic", zh: "大蒜", category: "community" },
  { en: "a little at a time", zh: "一点一点地", category: "community" },
  { en: "boiling water", zh: "沸水", category: "community" },
  { en: "dried pasta", zh: "干意面", category: "community" },
  { en: "floats", zh: "漂浮", category: "community" },
  { en: "pasta water", zh: "煮面水", category: "community" },
  { en: "draining", zh: "沥水", category: "community" },
  { en: "scoop", zh: "舀", category: "community" },
  { en: "twirling", zh: "卷绕", category: "community" },
  { en: "technique", zh: "技巧", category: "community" },
  { en: "elegant", zh: "精致的", category: "community" },
  { en: "charm", zh: "魅力", category: "community" },
  { en: "basil", zh: "罗勒叶", category: "community" },
  { en: "pop of color", zh: "一抹亮色", category: "community" },
  { en: "creation", zh: "成果，创作", category: "community" },
  { en: "chewier", zh: "更有嚼劲的（chewy 比较级）", category: "community" },
  { en: "store-bought", zh: "买来的", category: "community" },
  { en: "full meal", zh: "完整的一顿饭", category: "community" },
  { en: "recipe card", zh: "食谱卡", category: "community" },
  { en: "homemade", zh: "自制的", category: "community" },
  { en: "figure it out", zh: "想办法解决", category: "community" },
  { en: "monthly favorite", zh: "每月最爱", category: "community" }
);
