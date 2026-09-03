// 内容数据层：第二十五章，紧接第二十四章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter24.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：怀孕与备孕。全新词汇领域：验孕/产检/预产期/孕吐/婴儿房/名字讨论。

GAME_CONTENT.scenes.push(
  {
    id: "a-strange-feeling",
    transition: { en: "Months into homeownership, Emma seems unusually quiet one morning.", zh: "住进新家几个月后，一天早上Emma显得格外安静。" },
    title: "A Strange Feeling",
    subtitle: "新家 · 一种奇怪的感觉",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've been feeling a little off lately.", zh: "我最近感觉有点不对劲。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've seemed a bit different, now that you mention it.", zh: "你这么一说，我确实感觉你最近不太一样。", correct: true, xp: 10 },
          { text: "You've seemed perfectly normal to me.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've seemed a bit different, now that you mention it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we pick up a pregnancy test, just to check?", zh: "我们要不要买个验孕棒，查一下？", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's go get one right now.", zh: "我们现在就去买一个吧。", correct: true, xp: 10 },
          { text: "Let's not worry about it at all.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's go get one right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "My hands are shaking just thinking about it.", zh: "光是想到这个，我的手就在抖了。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "Mine are shaking too, honestly.", zh: "说实话，我的手也在抖。", correct: true, xp: 10 },
          { text: "Mine feel completely steady, weirdly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Mine are shaking too, honestly.",
        next: null
      }
    }
  },
  {
    id: "the-test-result",
    title: "The Test Result",
    subtitle: "浴室 · 等待结果",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The instructions say to wait exactly three minutes.", zh: "说明书上说要精确等三分钟。", voice: "emma" },
        skill: "work",
        grammarTag: "reported-speech",
        choices: [
          { text: "It said three minutes, so let's time it.", zh: "上面说三分钟，那我们计时吧。", correct: true, xp: 10 },
          { text: "It said three minutes, but let's just guess.", correct: false }
        ],
        hintOnWrong: "用间接引语回应 → It said three minutes, so let's time it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I can't look. Can you check it for me?", zh: "我不敢看。你能帮我看一下吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course I can. Here goes.", zh: "当然可以。我来看了。", correct: true, xp: 10 },
          { text: "I can't look either, honestly.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Of course I can. Here goes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Well? What does it say?", zh: "怎么样？上面显示什么？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "It says two lines. We're having a baby.", zh: "两条线。我们要有孩子了。", correct: true, xp: 10 },
          { text: "It says one line. Better luck next time.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It says two lines. We're having a baby.",
        next: null
      }
    }
  },
  {
    id: "processing-the-news",
    title: "Processing the News",
    subtitle: "客厅 · 消化这个消息",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm terrified and thrilled at exactly the same time.", zh: "我又害怕又激动，两种感觉同时出现。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Same here, in equal, overwhelming amounts.", zh: "我也是，两种感觉都汹涌得压倒一切。", correct: true, xp: 10 },
          { text: "I feel nothing at all, weirdly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Same here, in equal, overwhelming amounts.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If everything goes smoothly, we'll be parents by next spring.", zh: "如果一切顺利，明年春天我们就是父母了。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If it goes smoothly, spring can't come soon enough.", zh: "如果顺利的话，真希望春天快点到。", correct: true, xp: 10 },
          { text: "If it goes smoothly, I'd rather it took longer.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it goes smoothly, spring can't come soon enough.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should probably tell everyone soon.", zh: "我们大概应该尽快告诉大家。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Soon, but let's enjoy just knowing for now.", zh: "快了，但先让我们俩单独享受这个消息吧。", correct: true, xp: 10 },
          { text: "Soon, though I'd rather never tell anyone.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Soon, but let's enjoy just knowing for now.",
        next: null
      }
    }
  },
  {
    id: "the-first-appointment",
    transition: { en: "A few weeks later, you sit in a doctor's waiting room.", zh: "几周后，你们坐在医生的候诊室里。" },
    title: "The First Appointment",
    subtitle: "妇产科 · 第一次产检",
    avatar: "👩‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Based on your dates, we estimate the due date in April.", zh: "根据您的日期推算，预产期在四月。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "April? That's sooner than I imagined.", zh: "四月？比我想的要快。", correct: true, xp: 10 },
          { text: "April? That's much later than expected.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ April? That's sooner than I imagined.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Would you like to hear the heartbeat?", zh: "你们想听听胎心吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, more than anything.", zh: "想，比任何事都想。", correct: true, xp: 10 },
          { text: "No, we'd rather not know yet.", correct: false }
        ],
        hintOnWrong: "简单回答 → Yes, more than anything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That fast little sound is your baby's heartbeat.", zh: "这个跳得快快的小声音，就是你们宝宝的心跳。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That tiny sound just changed my whole life.", zh: "这个小小的声音，彻底改变了我的人生。", correct: true, xp: 10 },
          { text: "That tiny sound doesn't feel real yet.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That tiny sound just changed my whole life.",
        next: null
      }
    }
  },
  {
    id: "morning-sickness",
    title: "Morning Sickness",
    subtitle: "新家 · 孕吐的早晨",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How's Emma doing this morning?", zh: "Emma今天早上怎么样？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "She's not feeling great, honestly.", zh: "说实话，她感觉不太好。", correct: true, xp: 10 },
          { text: "She's feeling perfectly fine, actually.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ She's not feeling great, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If crackers help, I can bring some over.", zh: "如果饼干管用，我可以送一些过去。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If you could, that would mean so much.", zh: "如果你能，那真是太好了。", correct: true, xp: 10 },
          { text: "If you could, please don't bother.", correct: false }
        ],
        hintOnWrong: "用条件句 → If you could, that would mean so much.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Although it's rough right now, it won't last forever.", zh: "尽管现在很难熬，但不会一直这样。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Although it's rough, we're taking it day by day.", zh: "尽管很难熬，我们就一天一天地扛过去。", correct: true, xp: 10 },
          { text: "Although it's rough, nothing seems to help at all.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although it's rough, we're taking it day by day.",
        next: null
      }
    }
  },
  {
    id: "telling-the-family",
    transition: { en: "At Lily's House, you gather everyone for an announcement.", zh: "在Lily之家，你们把大家聚起来宣布消息。" },
    title: "Telling the Family",
    subtitle: "Lily之家 · 宣布喜讯",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You two look like you have something to say.", zh: "你们俩看起来有话要说啊。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We do. A very big something.", zh: "确实有。一件很重要的事。", correct: true, xp: 10 },
          { text: "We don't, actually. Never mind.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We do. A very big something.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We're expecting a baby in April.", zh: "我们四月份要迎来一个宝宝了。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "A baby! This calls for a celebration.", zh: "宝宝！这值得庆祝一下。", correct: true, xp: 10 },
          { text: "A baby? That's unfortunate timing.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ A baby! This calls for a celebration.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This house is about to have a whole new generation in it.", zh: "这栋房子马上就要迎来新的一代人了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "A new generation, right here with us.", zh: "新的一代人，就在我们身边。", correct: true, xp: 10 },
          { text: "A new generation, far away from here.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A new generation, right here with us.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-name",
    title: "Choosing a Name",
    subtitle: "新家 · 讨论名字",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What if we named her after my grandmother?", zh: "要是给她取名叫我祖母的名字呢？", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we did, it would carry so much meaning.", zh: "如果这样做，会承载太多意义了。", correct: true, xp: 10 },
          { text: "If we did, it wouldn't mean anything special.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we did, it would carry so much meaning.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Lily. It's a name that's already part of our story.", zh: "Lily。这是个已经属于我们故事的名字了。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "A name that's already part of us — perfect.", zh: "一个已经属于我们的名字——太完美了。", correct: true, xp: 10 },
          { text: "A name that's already part of us feels wrong.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A name that's already part of us — perfect.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We don't even know if it's a girl yet, and I already love that name.", zh: "我们还不知道是不是女孩，但我已经爱上了这个名字。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "Whatever we have, that name will fit somehow.", zh: "不管生的是什么，这个名字总会有办法用上。", correct: true, xp: 10 },
          { text: "Whatever we have, we should pick something else.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Whatever we have, that name will fit somehow.",
        next: null
      }
    }
  },
  {
    id: "the-nursery",
    title: "Setting Up the Nursery",
    subtitle: "新家 · 布置婴儿房",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you help me assemble this crib this weekend?", zh: "这周末你能帮我组装这个婴儿床吗？" },
        skill: "housing",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I've watched a few videos on it.", zh: "没问题，我看过几个教程视频了。", correct: true, xp: 10 },
          { text: "I can't put furniture together at all.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, I've watched a few videos on it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What color should we paint the walls?", zh: "墙壁我们该刷什么颜色？" },
        skill: "housing",
        grammarTag: "wh-question",
        choices: [
          { text: "What about a soft, neutral yellow?", zh: "用一种柔和的中性黄色怎么样？", correct: true, xp: 10 },
          { text: "What we paint the walls doesn't matter.", correct: false }
        ],
        hintOnWrong: "提议（wh-question式）→ What about a soft, neutral yellow?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This tiny room is going to hold our whole world soon.", zh: "这间小小的房间很快就要装下我们的整个世界了。" },
        skill: "housing",
        grammarTag: "will-future",
        choices: [
          { text: "It'll hold everything that matters, soon enough.", zh: "很快，它就会装下所有重要的一切。", correct: true, xp: 10 },
          { text: "It'll probably stay empty for a while yet.", correct: false }
        ],
        hintOnWrong: "用 will 表示未来 → It'll hold everything that matters, soon enough.",
        next: null
      }
    }
  },
  {
    id: "the-baby-shower",
    transition: { en: "Friends fill the backyard with balloons and gifts.", zh: "朋友们把后院装点满了气球和礼物。" },
    title: "The Baby Shower",
    subtitle: "后院 · 迎婴派对",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've all chipped in to get you the stroller you wanted.", zh: "我们大家凑钱给你买了你想要的婴儿车。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've all chipped in? I'm overwhelmed.", zh: "大家都凑了钱？我太感动了。", correct: true, xp: 10 },
          { text: "You've all wasted your money, honestly.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've all chipped in? I'm overwhelmed.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Everyone wanted to be part of welcoming this baby.", zh: "大家都想参与迎接这个宝宝。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "This baby is loved before even arriving.", zh: "这个宝宝还没出生就已经被这么多人爱着了。", correct: true, xp: 10 },
          { text: "This baby will grow up without much love.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ This baby is loved before even arriving.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This whole community is going to be her family too.", zh: "这整个社区也将会是她的家人。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "She'll grow up with so many people loving her.", zh: "她会在这么多人的爱中长大。", correct: true, xp: 10 },
          { text: "She'll grow up not knowing any of you.", correct: false }
        ],
        hintOnWrong: "用 will 表示预测 → She'll grow up with so many people loving her.",
        next: null
      }
    }
  },
  {
    id: "waiting-for-april",
    title: "Waiting for April",
    subtitle: "新家 · 等待四月的到来",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I can feel her kicking right now. Come feel this.", zh: "我现在能感觉到她在踢了。快来摸摸看。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm coming, don't let her stop.", zh: "我来了，让她别停。", correct: true, xp: 10 },
          { text: "I'm staying right here, thanks.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I'm coming, don't let her stop.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "In just a few more months, we won't be two anymore.", zh: "再过几个月，我们就不再只是两个人了。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "We'll be three, and I can't wait.", zh: "我们会变成三个人，我等不及了。", correct: true, xp: 10 },
          { text: "We'll stay two forever, probably.", correct: false }
        ],
        hintOnWrong: "用 will 表示未来 → We'll be three, and I can't wait.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade apart, a wedding, a house, and now this. Life moves fast.", zh: "分开十年、一场婚礼、一栋房子，现在又是这个。生活变化真快。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "It moves fast, and I love every second of it.", zh: "确实很快，而我热爱其中的每一秒。", correct: true, xp: 10 },
          { text: "It moves fast, and it scares me a little.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It moves fast, and I love every second of it.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "You've seemed a bit different, now that you mention it.", zh: "你这么一说，我确实感觉你最近不太一样。" },
  { en: "Let's go get one right now.", zh: "我们现在就去买一个吧。" },
  { en: "Mine are shaking too, honestly.", zh: "说实话，我的手也在抖。" },
  { en: "It said three minutes, so let's time it.", zh: "上面说三分钟，那我们计时吧。" },
  { en: "Of course I can. Here goes.", zh: "当然可以。我来看了。" },
  { en: "It says two lines. We're having a baby.", zh: "两条线。我们要有孩子了。" },
  { en: "Same here, in equal, overwhelming amounts.", zh: "我也是，两种感觉都汹涌得压倒一切。" },
  { en: "If it goes smoothly, spring can't come soon enough.", zh: "如果顺利的话，真希望春天快点到。" },
  { en: "Soon, but let's enjoy just knowing for now.", zh: "快了，但先让我们俩单独享受这个消息吧。" },
  { en: "April? That's sooner than I imagined.", zh: "四月？比我想的要快。" },
  { en: "Yes, more than anything.", zh: "想，比任何事都想。" },
  { en: "That tiny sound just changed my whole life.", zh: "这个小小的声音，彻底改变了我的人生。" },
  { en: "She's not feeling great, honestly.", zh: "说实话，她感觉不太好。" },
  { en: "If you could, that would mean so much.", zh: "如果你能，那真是太好了。" },
  { en: "Although it's rough, we're taking it day by day.", zh: "尽管很难熬，我们就一天一天地扛过去。" },
  { en: "We do. A very big something.", zh: "确实有。一件很重要的事。" },
  { en: "A baby! This calls for a celebration.", zh: "宝宝！这值得庆祝一下。" },
  { en: "A new generation, right here with us.", zh: "新的一代人，就在我们身边。" },
  { en: "If we did, it would carry so much meaning.", zh: "如果这样做，会承载太多意义了。" },
  { en: "A name that's already part of us — perfect.", zh: "一个已经属于我们的名字——太完美了。" },
  { en: "Whatever we have, that name will fit somehow.", zh: "不管生的是什么，这个名字总会有办法用上。" },
  { en: "Sure, I've watched a few videos on it.", zh: "没问题，我看过几个教程视频了。" },
  { en: "What about a soft, neutral yellow?", zh: "用一种柔和的中性黄色怎么样？" },
  { en: "It'll hold everything that matters, soon enough.", zh: "很快，它就会装下所有重要的一切。" },
  { en: "You've all chipped in? I'm overwhelmed.", zh: "大家都凑了钱？我太感动了。" },
  { en: "This baby is loved before even arriving.", zh: "这个宝宝还没出生就已经被这么多人爱着了。" },
  { en: "She'll grow up with so many people loving her.", zh: "她会在这么多人的爱中长大。" },
  { en: "I'm coming, don't let her stop.", zh: "我来了，让她别停。" },
  { en: "We'll be three, and I can't wait.", zh: "我们会变成三个人，我等不及了。" },
  { en: "It moves fast, and I love every second of it.", zh: "确实很快，而我热爱其中的每一秒。" }
);
