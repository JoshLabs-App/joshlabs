// 内容数据层：第九十章，紧接第八十九章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人第一次去湖边钓鱼。全新词汇领域：
// 鱼竿/鱼饵/浮标/上钩。

GAME_CONTENT.scenes.push(
  {
    id: "packing-for-the-fishing-trip",
    transition: { en: "They load rods, tackle boxes, and a cooler into the car.", zh: "他们把鱼竿、渔具箱和冰箱都装上了车。" },
    title: "Packing for the Fishing Trip",
    subtitle: "家里 · 准备钓鱼装备",
    avatar: "🎣",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever gone fishing before this trip?", zh: "这次之前你钓过鱼吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never gone fishing, but I've always wanted to try.", zh: "我从没钓过鱼，不过我一直想试试。", correct: true, xp: 10 },
          { text: "I've gone fishing every single day this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never gone fishing, but I've always wanted to try.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This tackle box looks heavier than the cooler.", zh: "这个渔具箱看起来比冰箱要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's carry it with both hands.", zh: "确实是，我们用双手抬吧。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's just drag it along.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's carry it with both hands.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's leave early before the lake gets crowded.", zh: "我们早点出发，趁湖边人还不多。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, we'll get the best spot that way.", zh: "好主意，这样我们能占到最好的位置。", correct: true, xp: 10 },
          { text: "Let's just leave whenever we feel like it.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, we'll get the best spot that way.",
        next: null
      }
    }
  },
  {
    id: "setting-up-the-rods",
    transition: { en: "By the lake, they attach hooks, weights, and bobbers to the lines.", zh: "在湖边，他们把鱼钩、铅坠和浮标绑到了鱼线上。" },
    title: "Setting Up the Rods",
    subtitle: "湖边 · 装配鱼竿",
    avatar: "🪝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you tie this knot tighter than that one?", zh: "你能把这个结打得比那个更紧吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me try it again slowly.", zh: "我能做到，让我再慢慢试一次。", correct: true, xp: 10 },
          { text: "I can't tie any kind of knot at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me try it again slowly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This bobber is smaller than the one in the picture.", zh: "这个浮标比图片里那个要小。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but it should still float just fine.", zh: "确实是，不过它应该还是能正常浮起来。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's throw it away.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but it should still float just fine.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once the hook is on, we'll add the bait next.", zh: "鱼钩装好后，我们接下来就装鱼饵。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, I hope the worms don't wiggle too much.", zh: "会的，希望蚯蚓别扭动得太厉害。", correct: true, xp: 10 },
          { text: "We won't, let's skip the bait entirely.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, I hope the worms don't wiggle too much.",
        next: null
      }
    }
  },
  {
    id: "baiting-the-hook",
    transition: { en: "Their toddler watches, half curious and half squeamish, as they bait a hook.", zh: "孩子看着他们装鱼饵，又好奇又有点害怕。" },
    title: "Baiting the Hook",
    subtitle: "湖边 · 装鱼饵",
    avatar: "🪱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this worm wigglier than the last one we used?", zh: "这条蚯蚓比我们上次用的那条扭得更厉害吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "It is, this one clearly wants to escape.", zh: "是的，这条明显想逃跑。", correct: true, xp: 10 },
          { text: "It isn't, this worm isn't moving at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → It is, this one clearly wants to escape.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Why do we have to use real worms as bait?", zh: "为什么我们非得用真的蚯蚓当鱼饵？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Fish are drawn to their smell and movement.", zh: "鱼会被它们的气味和动作吸引。", correct: true, xp: 10 },
          { text: "Fish don't care what kind of bait we use.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → Fish are drawn to their smell and movement.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can I hold the worm just once, please?", zh: "我能拿一下这条蚯蚓吗，拜托？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, hold it gently in your palm.", zh: "可以，轻轻捧在手心里就行。", correct: true, xp: 10 },
          { text: "No, worms are never allowed near you.", correct: false }
        ],
        hintOnWrong: "允许并指导 → Sure, hold it gently in your palm.",
        next: null
      }
    }
  },
  {
    id: "casting-the-line",
    transition: { en: "With a gentle swing, they cast their fishing lines into the water.", zh: "他们轻轻一甩，把鱼线抛进了水里。" },
    title: "Casting the Line",
    subtitle: "湖边 · 抛竿",
    avatar: "🎯",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you cast it farther than I just did?", zh: "你能比我刚才抛得更远吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can try, watch this next cast.", zh: "我可以试试，看我这次抛。", correct: true, xp: 10 },
          { text: "I can't cast a line at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can try, watch this next cast.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That cast went farther than mine, nicely done!", zh: "这次抛得比我远，抛得好！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, beginner's luck must be on my side.", zh: "谢谢，大概是新手运吧。", correct: true, xp: 10 },
          { text: "Distance doesn't matter, let's just reel it in.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, beginner's luck must be on my side.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Now we just wait and watch the bobber.", zh: "现在我们只需要等待，看着浮标就行。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Patience is really the whole game here.", zh: "耐心真的是这整件事的关键。", correct: true, xp: 10 },
          { text: "Patience doesn't matter, let's yank the line now.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Patience is really the whole game here.",
        next: null
      }
    }
  },
  {
    id: "waiting-quietly",
    transition: { en: "The family sits quietly on the bank, watching ripples on the lake.", zh: "一家人静静地坐在岸边，看着湖面上的涟漪。" },
    title: "Waiting Quietly",
    subtitle: "湖边 · 静静等待",
    avatar: "🌊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is quieter here than anywhere we've been all week.", zh: "这里比我们这周去过的任何地方都要安静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I could get used to this peace.", zh: "确实是，我可能会喜欢上这份宁静。", correct: true, xp: 10 },
          { text: "Quiet doesn't matter, let's start talking loudly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I could get used to this peace.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How long do fish usually take to bite?", zh: "鱼通常要多久才会咬钩？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Sometimes minutes, sometimes hours, apparently.", zh: "有时几分钟，有时几小时，据说是这样。", correct: true, xp: 10 },
          { text: "Fish never actually bite the hook at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → Sometimes minutes, sometimes hours, apparently.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even if we catch nothing, this still feels worth it.", zh: "就算什么都钓不到，这也还是值得的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even if we don't, I'm glad we came.", zh: "就算钓不到，我也很高兴我们来了。", correct: true, xp: 10 },
          { text: "Even if we don't, this trip is a failure.", correct: false }
        ],
        hintOnWrong: "让步句 → Even if we don't, I'm glad we came.",
        next: null
      }
    }
  },
  {
    id: "the-bobber-dips",
    transition: { en: "Suddenly, one bobber jerks and sinks beneath the surface.", zh: "突然，一个浮标猛地一动，沉到了水面以下。" },
    title: "The Bobber Dips",
    subtitle: "湖边 · 浮标下沉",
    avatar: "🫧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you see that, the bobber just went under!", zh: "你看到了吗，浮标刚刚沉下去了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I saw it, grab the rod quickly!", zh: "我看到了，快抓住鱼竿！", correct: true, xp: 10 },
          { text: "I didn't see anything move at all.", correct: false }
        ],
        hintOnWrong: "一般过去时回应 → I saw it, grab the rod quickly!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This tug feels stronger than I expected it to be.", zh: "这拉力比我预想的要更强。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, this might be a big one!", zh: "确实是，这可能是条大鱼！", correct: true, xp: 10 },
          { text: "Strength doesn't matter, let's just drop the rod.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, this might be a big one!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Reel it in slowly, don't let the line go slack!", zh: "慢慢收线，别让鱼线松掉！" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, I'm reeling as steadily as I can.", zh: "明白了，我在尽量平稳地收线。", correct: true, xp: 10 },
          { text: "No thanks, I'll just yank it out fast.", correct: false }
        ],
        hintOnWrong: "礼貌回应指示 → Got it, I'm reeling as steadily as I can.",
        next: null
      }
    }
  },
  {
    id: "landing-the-fish",
    transition: { en: "With a final splash, a shining fish breaks the surface.", zh: "水花一溅，一条闪亮的鱼跃出了水面。" },
    title: "Landing the Fish",
    subtitle: "湖边 · 钓上鱼",
    avatar: "🐟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This fish is bigger than any I imagined catching!", zh: "这条鱼比我想象中能钓到的任何一条都要大！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I can't believe we caught it.", zh: "确实如此，真不敢相信我们钓到了。", correct: true, xp: 10 },
          { text: "It really isn't, this fish looks tiny.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I can't believe we caught it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you hold it still while I get the hook out?", zh: "我摘钩的时候你能扶住它别动吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, go ahead and remove it carefully.", zh: "我能扶住，你小心地把钩摘出来吧。", correct: true, xp: 10 },
          { text: "I can't hold anything slippery like this.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, go ahead and remove it carefully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Their eyes are wider than I've ever seen them!", zh: "他们的眼睛睁得比我以前见过的任何时候都大！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, this is pure excitement for them.", zh: "确实如此，这对他们来说是纯粹的兴奋。", correct: true, xp: 10 },
          { text: "They really aren't, they seem completely unbothered.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, this is pure excitement for them.",
        next: null
      }
    }
  },
  {
    id: "deciding-what-to-do-with-it",
    transition: { en: "They discuss whether to keep the fish or release it back.", zh: "他们商量着是该留下这条鱼还是把它放回水里。" },
    title: "Deciding What to Do with It",
    subtitle: "湖边 · 决定去留",
    avatar: "🤔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we keep this one or let it go?", zh: "我们要留下这条还是放它走？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Let's release it, catch and release feels right.", zh: "我们放了它吧，钓放理念感觉更合适。", correct: true, xp: 10 },
          { text: "Let's just leave it on the ground to dry.", correct: false }
        ],
        hintOnWrong: "折中回答 → Let's release it, catch and release feels right.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we let it go, it can grow even bigger.", zh: "如果我们放了它，它还能长得更大。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's give it another chance.", zh: "如果确实如此，我们再给它一次机会吧。", correct: true, xp: 10 },
          { text: "If that's true, let's keep it anyway.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If that's true, let's give it another chance.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Watch it swim away, that was pretty amazing.", zh: "看它游走了，这真是太棒了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really was, I'll remember this moment.", zh: "确实很棒，我会记住这一刻的。", correct: true, xp: 10 },
          { text: "It really wasn't, that was pretty forgettable.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really was, I'll remember this moment.",
        next: null
      }
    }
  },
  {
    id: "a-picnic-by-the-water",
    transition: { en: "They spread a blanket and share sandwiches by the shore.", zh: "他们铺开了毯子，在岸边分享三明治。" },
    title: "A Picnic by the Water",
    subtitle: "湖边 · 岸边野餐",
    avatar: "🥪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This sandwich tastes better out here than at home.", zh: "这个三明治在这吃比在家吃更好吃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, fresh air makes everything taste better.", zh: "确实是，新鲜空气让一切都更美味。", correct: true, xp: 10 },
          { text: "Taste doesn't matter, let's just eat inside next time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, fresh air makes everything taste better.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Today has been more relaxing than any weekend lately.", zh: "今天比最近任何一个周末都要放松。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It has, we needed a day like this.", zh: "确实是，我们需要这样的一天。", correct: true, xp: 10 },
          { text: "Relaxation doesn't matter, let's plan something hectic instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It has, we needed a day like this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's come back to this same spot again soon.", zh: "我们要再回到这个地方来。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this place feels like ours now.", zh: "好啊，这地方现在感觉像是我们自己的了。", correct: true, xp: 10 },
          { text: "Let's never come back to this lake again.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this place feels like ours now.",
        next: null
      }
    }
  },
  {
    id: "the-drive-home-content",
    transition: { en: "Sunburned and sleepy, they drive home as the sky turns orange.", zh: "晒黑了、有点困，他们在天空转橙的时候开车回家。" },
    title: "The Drive Home Content",
    subtitle: "车上 · 满足地回家",
    avatar: "🌅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This sunset looks more beautiful than usual tonight.", zh: "今晚这日落比平时看起来更美。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, maybe today just made everything brighter.", zh: "确实是，也许是今天让一切都变得更明亮了。", correct: true, xp: 10 },
          { text: "Beauty doesn't matter, let's just close our eyes.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, maybe today just made everything brighter.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They fell asleep faster than I've ever seen them fall asleep.", zh: "他们睡着的速度比我见过的任何时候都要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a good sign, today really tired them out.", zh: "这是个好迹象，今天确实把他们累坏了。", correct: true, xp: 10 },
          { text: "That's odd, they usually fight sleep for hours.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a good sign, today really tired them out.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many hobbies we try, simple days like this stay the best.", zh: "不管我们尝试多少爱好，像这样简单的日子始终是最好的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many, I'll always love days like this.", zh: "不管有多少个，我都会一直喜欢这样的日子。", correct: true, xp: 10 },
          { text: "No matter how many, this day was pretty forgettable.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many, I'll always love days like this.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "fishing", zh: "钓鱼", category: "community" },
  { en: "rods", zh: "鱼竿（复数）", category: "community" },
  { en: "tackle box", zh: "渔具箱", category: "community" },
  { en: "cooler", zh: "冰箱，冷藏箱", category: "community" },
  { en: "hooks", zh: "鱼钩（复数）", category: "community" },
  { en: "weights", zh: "铅坠（复数）", category: "community" },
  { en: "bobbers", zh: "浮标（复数）", category: "community" },
  { en: "lines", zh: "鱼线（复数）", category: "community" },
  { en: "knot", zh: "结", category: "community" },
  { en: "float", zh: "浮起", category: "community" },
  { en: "bait", zh: "鱼饵", category: "community" },
  { en: "worms", zh: "蚯蚓（复数）", category: "community" },
  { en: "wiggle", zh: "扭动", category: "community" },
  { en: "squeamish", zh: "有点害怕的", category: "community" },
  { en: "palm", zh: "手心", category: "community" },
  { en: "cast", zh: "抛竿", category: "community" },
  { en: "beginner's luck", zh: "新手运", category: "community" },
  { en: "reel it in", zh: "收线", category: "community" },
  { en: "ripples", zh: "涟漪（复数）", category: "community" },
  { en: "bite", zh: "（鱼）咬钩", category: "community" },
  { en: "jerks", zh: "猛地一动", category: "community" },
  { en: "sinks", zh: "下沉", category: "community" },
  { en: "tug", zh: "拉力", category: "community" },
  { en: "slack", zh: "松弛的", category: "community" },
  { en: "splash", zh: "水花", category: "community" },
  { en: "slippery", zh: "滑溜的", category: "community" },
  { en: "catch and release", zh: "钓放（钓鱼后放生）", category: "community" },
  { en: "shore", zh: "岸边", category: "community" },
  { en: "sunburned", zh: "晒黑的", category: "community" },
  { en: "sunset", zh: "日落", category: "community" }
);
