// 内容数据层：第六十五章，紧接第六十四章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人报名了一次陶艺体验课，作为难得的二人时光。全新词汇领域：
// 陶轮拉坯/塑形上釉/烧窑/成品展示。

GAME_CONTENT.scenes.push(
  {
    id: "booking-a-date-night",
    transition: { en: "They look for a fun date night idea that isn't dinner and a movie.", zh: "他们想找一个不同于晚餐加电影的有趣约会点子。" },
    title: "Booking a Date Night",
    subtitle: "手机 · 寻找约会灵感",
    avatar: "🏺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This pottery studio offers a beginner class on Fridays.", zh: "这家陶艺工作室周五有初学者课程。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds different, let's actually try it.", zh: "这听起来挺特别的，我们真去试试吧。", correct: true, xp: 10 },
          { text: "That sounds boring, let's just order dinner again.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds different, let's actually try it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you ever tried working with clay before?", zh: "你以前尝试过用陶土创作吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never tried it, but I'm curious.", zh: "我从没试过，但挺好奇的。", correct: true, xp: 10 },
          { text: "I've done this every weekend for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never tried it, but I'm curious.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book two spots for this Friday.", zh: "我们订两个位子，就这周五吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'll book it right now.", zh: "好啊，我现在就去订。", correct: true, xp: 10 },
          { text: "Let's wait a few more months first.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'll book it right now.",
        next: null
      }
    }
  },
  {
    id: "arriving-at-the-studio",
    transition: { en: "They arrive at a cozy studio filled with finished pottery.", zh: "他们抵达一间摆满成品陶艺的温馨工作室。" },
    title: "Arriving at the Studio",
    subtitle: "陶艺工作室 · 抵达现场",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This place is more relaxed than I expected.", zh: "这地方比我预想的要放松许多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I already feel calmer just being here.", zh: "确实是，光是在这儿我就感觉平静了不少。", correct: true, xp: 10 },
          { text: "It isn't, this place feels stressful already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I already feel calmer just being here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look at all these finished pieces on the shelves.", zh: "看看架子上这些完成的作品。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "These are gorgeous, I hope ours look half this good.", zh: "这些太美了，希望我们做的能有它们一半好看。", correct: true, xp: 10 },
          { text: "These look boring, honestly, not impressive at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → These are gorgeous, I hope ours look half this good.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab an apron before we start.", zh: "我们开始前先拿件围裙吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, clay sounds like it gets messy.", zh: "好主意，陶土听起来会弄得很脏。", correct: true, xp: 10 },
          { text: "Let's skip that, we won't get dirty at all.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, clay sounds like it gets messy.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-instructor",
    transition: { en: "A warm instructor shows them to the pottery wheels.", zh: "一位亲切的讲师带他们来到陶轮前。" },
    title: "Meeting the Instructor",
    subtitle: "陶艺工作室 · 认识讲师",
    avatar: "🧑‍🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have either of you used a pottery wheel before?", zh: "你们俩有人用过陶轮吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Neither of us has, we're both complete beginners.", zh: "我们俩都没有，都是彻底的新手。", correct: true, xp: 10 },
          { text: "Both of us have used it since childhood.", correct: false }
        ],
        hintOnWrong: "现在完成时 → Neither of us has, we're both complete beginners.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This wheel spins faster than you might expect at first.", zh: "这个陶轮转起来可能比你一开始想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Good to know, we'll start slow and careful.", zh: "很高兴知道这个，我们会慢慢来、小心一点。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just spin it wildly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Good to know, we'll start slow and careful.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please keep your hands wet while you shape the clay.", zh: "塑形的时候请保持双手湿润。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, we'll keep the water nearby.", zh: "明白了，我们会把水放在旁边。", correct: true, xp: 10 },
          { text: "Sorry, we'd rather keep our hands dry.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, we'll keep the water nearby.",
        next: null
      }
    }
  },
  {
    id: "the-first-attempt",
    transition: { en: "Their first attempt at the wheel collapses into a lump.", zh: "他们第一次在陶轮上的尝试塌成了一团。" },
    title: "The First Attempt",
    subtitle: "陶艺工作室 · 首次尝试",
    avatar: "😅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Mine just collapsed into a shapeless blob.", zh: "我做的直接塌成了一团没有形状的泥。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Mine did too, this is harder than it looks.", zh: "我做的也是，这比看起来要难多了。", correct: true, xp: 10 },
          { text: "Mine turned out perfect on the very first try.", correct: false }
        ],
        hintOnWrong: "过去时回应 → Mine did too, this is harder than it looks.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more frustrating than I expected it to be.", zh: "这比我预想的要更让人沮丧。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but let's laugh about it and try again.", zh: "确实是，但我们就笑笑，再试一次吧。", correct: true, xp: 10 },
          { text: "It is, so let's just give up right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but let's laugh about it and try again.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone's first attempt looks like this, honestly.", zh: "说实话，每个人的第一次尝试都是这样的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, we don't feel so bad now.", zh: "这让人安心，我们现在没那么沮丧了。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped we'd be naturals.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, we don't feel so bad now.",
        next: null
      }
    }
  },
  {
    id: "finding-a-rhythm",
    transition: { en: "By the third attempt, something finally starts taking shape.", zh: "到了第三次尝试，终于有点成形的样子了。" },
    title: "Finding a Rhythm",
    subtitle: "陶艺工作室 · 找到节奏",
    avatar: "🏺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is actually starting to look like a bowl!", zh: "这个现在真的开始有碗的样子了！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It's really coming together, I'm impressed with us.", zh: "确实开始成形了，我真为我们感到骄傲。", correct: true, xp: 10 },
          { text: "It's not really looking like anything at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → It's really coming together, I'm impressed with us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your hands are steadier now than they were ten minutes ago.", zh: "你的手现在比十分钟前要稳多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, I think I finally found the rhythm.", zh: "确实是，我觉得我终于找到节奏了。", correct: true, xp: 10 },
          { text: "They aren't, I'm shakier than when we started.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, I think I finally found the rhythm.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's slow down and center the clay carefully.", zh: "我们放慢速度，仔细把陶土居中吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, patience seems to be the whole trick.", zh: "好主意，耐心似乎就是全部的诀窍。", correct: true, xp: 10 },
          { text: "Let's just rush through this part instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, patience seems to be the whole trick.",
        next: null
      }
    }
  },
  {
    id: "shaping-the-final-piece",
    transition: { en: "With guidance, they each finish shaping a small bowl.", zh: "在指导下，他们各自做完了一个小碗的塑形。" },
    title: "Shaping the Final Piece",
    subtitle: "陶艺工作室 · 完成塑形",
    avatar: "🍶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe we actually made these ourselves?", zh: "你能相信这些真的是我们自己做的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, I'm so proud of this bowl.", zh: "说实话我不敢相信，我为这个碗感到骄傲。", correct: true, xp: 10 },
          { text: "I can believe it, this looks totally ordinary.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I honestly can't, I'm so proud of this bowl.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Yours turned out smoother than mine, honestly.", zh: "说实话，你做的比我的要光滑多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Maybe, but yours has more character to it.", zh: "也许吧，但你的更有特色。", correct: true, xp: 10 },
          { text: "That's true, yours is clearly worse than mine.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Maybe, but yours has more character to it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Now we choose a glaze color for the final firing.", zh: "现在我们要为最后的烧窑选一种釉色。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Let's pick colors that go well together.", zh: "我们选两种搭配起来好看的颜色吧。", correct: true, xp: 10 },
          { text: "Color doesn't matter, let's grab any random one.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Let's pick colors that go well together.",
        next: null
      }
    }
  },
  {
    id: "choosing-the-glaze",
    transition: { en: "They browse a wall of glaze samples to pick their colors.", zh: "他们浏览了一整面墙的釉色样品来挑选颜色。" },
    title: "Choosing the Glaze",
    subtitle: "陶艺工作室 · 挑选釉色",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This blue is deeper than the one you picked last time.", zh: "这种蓝色比你上次选的要深一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, and I actually like it even more.", zh: "确实是，而且我其实更喜欢这个。", correct: true, xp: 10 },
          { text: "It isn't, these two colors look identical.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, and I actually like it even more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Which glaze should we put on the inside of the bowl?", zh: "我们碗内侧应该上哪种釉？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's use a lighter shade for the inside.", zh: "内侧用浅一点的颜色吧。", correct: true, xp: 10 },
          { text: "The inside doesn't need any glaze at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's use a lighter shade for the inside.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will take about two weeks to fire and cool.", zh: "烧制加冷却大概需要两周时间。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's fine, good things are worth waiting for.", zh: "没关系，好东西值得等待。", correct: true, xp: 10 },
          { text: "That's too long, we need it done today.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's fine, good things are worth waiting for.",
        next: null
      }
    }
  },
  {
    id: "the-two-week-wait",
    transition: { en: "They wonder aloud what the finished pieces will look like.", zh: "他们大声猜测着成品会是什么样子。" },
    title: "The Two-Week Wait",
    subtitle: "家里 · 两周的等待",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I wonder if the color will look different after firing.", zh: "我在想烧制后颜色会不会看起来不一样。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Probably, glazes always change in the kiln.", zh: "大概会，釉色在窑里总是会有变化。", correct: true, xp: 10 },
          { text: "Definitely not, colors never change at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Probably, glazes always change in the kiln.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This wait feels longer than it actually is.", zh: "这次等待感觉比实际时间要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, good things always feel far away.", zh: "确实是，好事总是感觉很遥远。", correct: true, xp: 10 },
          { text: "It doesn't, two weeks feel like nothing at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, good things always feel far away.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's plan a small celebration when we pick them up.", zh: "我们取件的时候小庆祝一下吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, maybe dinner out that night.", zh: "好啊，也许那晚出去吃顿饭。", correct: true, xp: 10 },
          { text: "Let's not bother, picking them up is nothing special.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, maybe dinner out that night.",
        next: null
      }
    }
  },
  {
    id: "picking-up-the-pieces",
    transition: { en: "Two weeks later, they return to collect their finished bowls.", zh: "两周后，他们回来领取烧好的碗。" },
    title: "Picking Up the Pieces",
    subtitle: "陶艺工作室 · 取件",
    avatar: "🏺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These came out even better than I imagined.", zh: "这些成品比我想象的还要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really did, I can't stop staring at them.", zh: "确实如此，我怎么看都看不够。", correct: true, xp: 10 },
          { text: "They really didn't, these look completely ruined.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really did, I can't stop staring at them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The glaze turned out more vibrant than I expected.", zh: "釉色的效果比我预想的要鲜艳。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, the color is stunning in the light.", zh: "确实如此，在光线下颜色美极了。", correct: true, xp: 10 },
          { text: "It really didn't, the color looks pretty dull.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, the color is stunning in the light.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's use these bowls for breakfast tomorrow.", zh: "我们明天早餐就用这两个碗吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I've been waiting to use mine.", zh: "好啊，我一直等着用我这个呢。", correct: true, xp: 10 },
          { text: "Let's just put them on a shelf forever instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I've been waiting to use mine.",
        next: null
      }
    }
  },
  {
    id: "a-piece-of-that-night",
    transition: { en: "Every morning after, the bowls quietly remind them of that night.", zh: "从那以后每天早上，这两个碗都默默提醒着他们那个夜晚。" },
    title: "A Piece of That Night",
    subtitle: "家里 · 那晚的印记",
    avatar: "🍳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This bowl has become more meaningful than I expected.", zh: "这个碗变得比我预想的更有意义。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, it holds a whole memory now.", zh: "确实如此，它现在承载了一整段回忆。", correct: true, xp: 10 },
          { text: "It hasn't, it's honestly just a plain old bowl.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, it holds a whole memory now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should try a new hobby together more often.", zh: "我们应该更经常地一起尝试新爱好。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, nights like this bring us closer.", zh: "同意，像这样的夜晚能让我们更亲近。", correct: true, xp: 10 },
          { text: "Disagreed, our usual routine works just fine.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, nights like this bring us closer.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy life gets, let's keep making time for us.", zh: "不管生活多忙，我们都要继续为彼此留出时间。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, this is one thing worth protecting.", zh: "不管多忙，这是一件值得守护的事。", correct: true, xp: 10 },
          { text: "No matter how busy, date nights will probably stop.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, we'll always make time for this.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "date night", zh: "约会之夜", category: "community" },
  { en: "pottery studio", zh: "陶艺工作室", category: "community" },
  { en: "beginner class", zh: "初学者课程", category: "community" },
  { en: "clay", zh: "陶土", category: "community" },
  { en: "curious", zh: "好奇的", category: "community" },
  { en: "spots", zh: "名额（复数）", category: "community" },
  { en: "cozy", zh: "温馨的", category: "community" },
  { en: "finished pieces", zh: "成品作品", category: "community" },
  { en: "gorgeous", zh: "美极了的", category: "community" },
  { en: "apron", zh: "围裙", category: "community" },
  { en: "messy", zh: "凌乱的", category: "community" },
  { en: "pottery wheel", zh: "陶轮", category: "community" },
  { en: "complete beginners", zh: "彻底的新手（复数）", category: "community" },
  { en: "spins", zh: "旋转", category: "community" },
  { en: "shape", zh: "塑形", category: "community" },
  { en: "collapsed", zh: "塌了", category: "community" },
  { en: "shapeless blob", zh: "没有形状的泥团", category: "community" },
  { en: "frustrating", zh: "令人沮丧的", category: "community" },
  { en: "naturals", zh: "天生擅长的人（复数）", category: "community" },
  { en: "coming together", zh: "逐渐成形", category: "community" },
  { en: "impressed", zh: "印象深刻的", category: "community" },
  { en: "steadier", zh: "更稳的（steady 比较级）", category: "community" },
  { en: "center", zh: "居中", category: "community" },
  { en: "whole trick", zh: "全部的诀窍", category: "community" },
  { en: "guidance", zh: "指导", category: "community" },
  { en: "character", zh: "特色，个性", category: "community" },
  { en: "glaze", zh: "釉，上釉", category: "community" },
  { en: "final firing", zh: "最后的烧窑", category: "community" },
  { en: "go well together", zh: "搭配起来好看", category: "community" },
  { en: "glaze samples", zh: "釉色样品", category: "community" },
  { en: "deeper", zh: "更深的（deep 比较级）", category: "community" },
  { en: "shade", zh: "色调", category: "community" },
  { en: "fire and cool", zh: "烧制并冷却", category: "community" },
  { en: "worth waiting for", zh: "值得等待", category: "community" },
  { en: "kiln", zh: "窑", category: "community" },
  { en: "far away", zh: "遥远的", category: "community" },
  { en: "small celebration", zh: "小庆祝", category: "community" },
  { en: "vibrant", zh: "鲜艳的", category: "community" },
  { en: "stunning", zh: "惊艳的", category: "community" },
  { en: "dull", zh: "暗淡的", category: "community" },
  { en: "meaningful", zh: "有意义的", category: "community" },
  { en: "holds a memory", zh: "承载着一段回忆", category: "community" },
  { en: "new hobby", zh: "新爱好", category: "community" },
  { en: "bring us closer", zh: "让我们更亲近", category: "community" }
);
