// 内容数据层：第七十一章，紧接第七十章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人开始尝试地理藏宝（geocaching）作为周末家庭活动。全新词汇领域：
// GPS坐标/寻宝日志/隐藏容器/交换小物件。

GAME_CONTENT.scenes.push(
  {
    id: "discovering-geocaching",
    transition: { en: "A neighbor mentions a hobby called geocaching that uses GPS.", zh: "一位邻居提到一种用GPS的爱好，叫地理藏宝。" },
    title: "Discovering Geocaching",
    subtitle: "家里 · 发现新爱好",
    avatar: "🗺️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever heard of geocaching before?", zh: "你以前听说过地理藏宝吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never heard of it, but it sounds fun.", zh: "我从没听过，不过听起来挺有意思的。", correct: true, xp: 10 },
          { text: "I've done this every single day for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never heard of it, but it sounds fun.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "People hide small containers, and you find them using coordinates.", zh: "大家会藏小容器，你用坐标去寻找它们。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds like a real-life treasure hunt.", zh: "这听起来像是现实版的寻宝游戏。", correct: true, xp: 10 },
          { text: "That sounds pointless, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds like a real-life treasure hunt.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's download the app and try one this weekend.", zh: "我们下载这个应用，这周末试一次吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'm actually curious now.", zh: "好啊，我现在其实挺好奇的。", correct: true, xp: 10 },
          { text: "Let's not, this seems too complicated to try.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm actually curious now.",
        next: null
      }
    }
  },
  {
    id: "picking-the-first-cache",
    transition: { en: "They browse the app for a beginner-friendly cache nearby.", zh: "他们在应用上寻找一个附近适合初学者的藏宝点。" },
    title: "Picking the First Cache",
    subtitle: "家里 · 挑选第一个藏宝点",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This one is closer than the others on the list.", zh: "这个比清单上其他的要近。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's start with that one, it's convenient.", zh: "我们从这个开始吧，比较方便。", correct: true, xp: 10 },
          { text: "Distance doesn't matter, let's pick the farthest one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's start with that one, it's convenient.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This difficulty level looks easier than the others.", zh: "这个难度看起来比其他的要简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Perfect, let's start easy for our first try.", zh: "太好了，我们第一次先从简单的开始吧。", correct: true, xp: 10 },
          { text: "Let's skip the easy ones, we want a challenge.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Perfect, let's start easy for our first try.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's pack a small trinket to leave behind, too.", zh: "我们也带上一个小玩意儿留在那儿吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that's part of the fun, apparently.", zh: "好主意，据说这也是乐趣的一部分。", correct: true, xp: 10 },
          { text: "Let's not bother, we'll just take without giving.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that's part of the fun, apparently.",
        next: null
      }
    }
  },
  {
    id: "following-the-coordinates",
    transition: { en: "They walk through a park, phone in hand, following the GPS arrow.", zh: "他们穿过公园，手拿手机跟着GPS箭头走。" },
    title: "Following the Coordinates",
    subtitle: "公园 · 跟随坐标",
    avatar: "🧭",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The arrow says we're getting closer!", zh: "箭头显示我们越来越近了！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're almost there, let's keep going!", zh: "我们快到了，继续走吧！", correct: true, xp: 10 },
          { text: "We're getting farther away, let's turn back.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → We're almost there, let's keep going!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This park is bigger than I remembered it being.", zh: "这个公园比我记忆中的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, there's more to explore than I thought.", zh: "确实是，能探索的地方比我想的要多。", correct: true, xp: 10 },
          { text: "It isn't, this park feels tiny to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, there's more to explore than I thought.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you check the hint if we get stuck?", zh: "如果我们卡住了，你能查一下提示吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let's use it only if we're desperate.", zh: "可以，只有真没办法了才用它吧。", correct: true, xp: 10 },
          { text: "I can't, hints seem like cheating to me.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let's use it only if we're desperate.",
        next: null
      }
    }
  },
  {
    id: "searching-around-a-tree",
    transition: { en: "The GPS points them to a suspicious cluster of rocks near a tree.", zh: "GPS指向了一棵树旁边一堆可疑的石头。" },
    title: "Searching Around a Tree",
    subtitle: "公园 · 树旁搜寻",
    avatar: "🌳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This spot looks more promising than anywhere else.", zh: "这个地方比其他任何地方都更有希望。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's search this area carefully.", zh: "确实是，我们仔细搜索这片区域吧。", correct: true, xp: 10 },
          { text: "It doesn't, let's just wander off randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's search this area carefully.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These caches are often hidden more cleverly than you'd expect.", zh: "这些藏宝点隐藏的方式通常比你想的要巧妙。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, let's check under things too.", zh: "有道理，我们也检查一下东西下面吧。", correct: true, xp: 10 },
          { text: "That's odd, hiding spots should always be obvious.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, let's check under things too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Wait, this rock feels lighter than a real rock should.", zh: "等等，这块石头感觉比真石头要轻。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's it, this must be a fake rock container.", zh: "就是这个，这肯定是个假石头容器。", correct: true, xp: 10 },
          { text: "That's normal, all rocks feel exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's it, this must be a fake rock container.",
        next: null
      }
    }
  },
  {
    id: "finding-the-cache",
    transition: { en: "Inside, they find a small logbook and a handful of tiny trinkets.", zh: "打开容器，他们发现了一本小日志和一把小玩意儿。" },
    title: "Finding the Cache",
    subtitle: "公园 · 找到藏宝",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We actually found it, I can't believe this!", zh: "我们真的找到了，我简直不敢相信！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, this feels incredible!", zh: "我们做到了，这感觉太棒了！", correct: true, xp: 10 },
          { text: "We didn't, this container is completely empty.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, this feels incredible!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we sign the logbook before we leave?", zh: "我们走之前要不要在日志上签名？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's write today's date and our names.", zh: "好的，我们写上今天的日期和名字吧。", correct: true, xp: 10 },
          { text: "No, signing seems unnecessary for this.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's write today's date and our names.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's leave our small trinket and take one to trade.", zh: "我们留下自己带的小玩意儿，换一个带走吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, trading is part of the tradition.", zh: "好啊，交换是这个活动传统的一部分。", correct: true, xp: 10 },
          { text: "Let's just take everything and leave nothing.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, trading is part of the tradition.",
        next: null
      }
    }
  },
  {
    id: "the-toddlers-excitement",
    transition: { en: "Their toddler squeals with delight at finding the hidden box.", zh: "他们的孩子发现藏宝盒后兴奋得尖叫起来。" },
    title: "The Toddler's Excitement",
    subtitle: "公园 · 孩子的兴奋",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're more excited about this than I expected.", zh: "他们对这个的兴奋程度比我预想的要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, treasure hunts are magical at this age.", zh: "确实如此，寻宝游戏在这个年纪真的很神奇。", correct: true, xp: 10 },
          { text: "They really aren't, they seem completely bored.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, treasure hunts are magical at this age.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you pick out a trinket to keep for yourself?", zh: "你能挑一个小玩意儿留给自己吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, watch how carefully they're choosing.", zh: "他们能做到，看他们选得多认真。", correct: true, xp: 10 },
          { text: "They can't, they're too young to choose anything.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, watch how carefully they're choosing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might become their new favorite family activity.", zh: "这可能会成为他们新的最爱的家庭活动。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I hope so, this feels like a keeper.", zh: "我希望如此，这个活动感觉值得保留。", correct: true, xp: 10 },
          { text: "I doubt it, this will get boring fast.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I hope so, this feels like a keeper.",
        next: null
      }
    }
  },
  {
    id: "a-trickier-hunt",
    transition: { en: "Their second cache of the day proves much harder to find.", zh: "当天的第二个藏宝点找起来困难多了。" },
    title: "A Trickier Hunt",
    subtitle: "公园 · 更棘手的搜寻",
    avatar: "🤔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This one is definitely harder than the last cache.", zh: "这一个肯定比上一个藏宝点要难。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but that makes it more satisfying.", zh: "确实如此，但这样找到会更有成就感。", correct: true, xp: 10 },
          { text: "It is, so let's just give up right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but that makes it more satisfying.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we reread the hint, we might find a clue we missed.", zh: "如果我们重新读一遍提示，也许能发现漏掉的线索。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that helps, let's read it together carefully.", zh: "如果有帮助，我们一起仔细读一遍吧。", correct: true, xp: 10 },
          { text: "If that helps, let's just skip reading it entirely.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that helps, let's read it together carefully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There it is, hidden inside a hollow branch!", zh: "找到了，藏在一根中空的树枝里！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That was clever, I never would have guessed.", zh: "这想法太巧妙了，我绝对猜不到。", correct: true, xp: 10 },
          { text: "That was obvious, anyone could have found it.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That was clever, I never would have guessed.",
        next: null
      }
    }
  },
  {
    id: "logging-their-finds",
    transition: { en: "Back home, they log their finds on the app for other players.", zh: "回家后，他们在应用上记录了自己的发现，供其他玩家参考。" },
    title: "Logging Their Finds",
    subtitle: "家里 · 记录成果",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we leave a note about how we found each cache?", zh: "我们要不要留言说明是怎么找到每个藏宝点的？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that might help the next person who searches.", zh: "好，这可能对下一位来寻找的人有帮助。", correct: true, xp: 10 },
          { text: "No, other players never actually read those notes.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that might help the next person who searches.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We found two caches today, more than I expected for our first try.", zh: "我们今天找到了两个藏宝点，比我预想的第一次成果要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a great start, I'm really proud of us.", zh: "这是个很好的开始，我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "That's disappointing, we expected to find at least ten.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a great start, I'm really proud of us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's mark our favorite spots to visit again.", zh: "我们把喜欢的地点标记出来，下次再来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's save this park for sure.", zh: "好主意，这个公园我们一定要保存起来。", correct: true, xp: 10 },
          { text: "Let's just forget where we went entirely.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's save this park for sure.",
        next: null
      }
    }
  },
  {
    id: "a-new-way-to-explore",
    transition: { en: "Over the following weeks, geocaching leads them to hidden corners of the city.", zh: "接下来的几周里，地理藏宝带他们发现了城市里许多隐秘的角落。" },
    title: "A New Way to Explore",
    subtitle: "城市各处 · 全新的探索方式",
    avatar: "🏙️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've discovered more hidden spots than we ever knew existed.", zh: "我们发现的隐秘地点比我们曾经知道的要多得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, this city feels new again.", zh: "确实如此，这座城市感觉焕然一新了。", correct: true, xp: 10 },
          { text: "We really haven't, we've found absolutely nothing.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, this city feels new again.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This hobby has honestly become better than I ever expected.", zh: "说实话，这个爱好变得比我曾经预想的要好得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, I look forward to it every week.", zh: "确实如此，我每周都很期待。", correct: true, xp: 10 },
          { text: "It hasn't, this feels boring most of the time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, I look forward to it every week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many caches we find, the search itself is the real fun.", zh: "不管我们找到多少藏宝点，寻找的过程本身才是真正的乐趣所在。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many, the adventure matters most.", zh: "不管有多少，这段冒险本身才最重要。", correct: true, xp: 10 },
          { text: "No matter how many, only the number really counts.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many, the adventure matters most.",
        next: null
      }
    }
  },
  {
    id: "hiding-their-own-cache",
    transition: { en: "Inspired, they decide to hide their own cache for others to find.", zh: "受到启发，他们决定自己藏一个宝，让其他人来寻找。" },
    title: "Hiding Their Own Cache",
    subtitle: "公园 · 藏下属于自己的宝藏",
    avatar: "🎁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where should we hide our first cache?", zh: "我们的第一个藏宝点应该藏在哪儿？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Somewhere near the bench by the old oak tree.", zh: "就藏在老橡树旁边的长椅附近吧。", correct: true, xp: 10 },
          { text: "It doesn't matter, let's hide it in our house.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Somewhere near the bench by the old oak tree.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This container should be sturdier than a simple box.", zh: "这个容器应该比一个简单的盒子更结实。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "You're right, let's use a waterproof one instead.", zh: "你说得对，我们改用一个防水的吧。", correct: true, xp: 10 },
          { text: "Durability doesn't matter, any old box will do.", correct: false }
        ],
        hintOnWrong: "回应比较句 → You're right, let's use a waterproof one instead.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's give it a fun, mysterious name.", zh: "我们给它起个有趣又神秘的名字吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this part is honestly the funnest.", zh: "好啊，说实话这部分最好玩了。", correct: true, xp: 10 },
          { text: "Let's just call it something boring and plain.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this part is honestly the funnest.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "geocaching", zh: "地理藏宝", category: "community" },
  { en: "GPS", zh: "全球定位系统", category: "community" },
  { en: "containers", zh: "容器（复数）", category: "community" },
  { en: "coordinates", zh: "坐标", category: "community" },
  { en: "real-life", zh: "现实生活中的", category: "community" },
  { en: "treasure hunt", zh: "寻宝游戏", category: "community" },
  { en: "download", zh: "下载", category: "community" },
  { en: "beginner-friendly", zh: "适合初学者的", category: "community" },
  { en: "convenient", zh: "方便的", category: "community" },
  { en: "difficulty level", zh: "难度等级", category: "community" },
  { en: "trinket", zh: "小玩意儿", category: "community" },
  { en: "leave behind", zh: "留下", category: "community" },
  { en: "apparently", zh: "据说，显然", category: "community" },
  { en: "arrow", zh: "箭头", category: "community" },
  { en: "getting closer", zh: "越来越近", category: "community" },
  { en: "hint", zh: "提示", category: "community" },
  { en: "desperate", zh: "走投无路的", category: "community" },
  { en: "cheating", zh: "作弊", category: "community" },
  { en: "cluster of rocks", zh: "一堆石头", category: "community" },
  { en: "promising", zh: "有希望的", category: "community" },
  { en: "cleverly", zh: "巧妙地", category: "community" },
  { en: "fake rock", zh: "假石头", category: "community" },
  { en: "logbook", zh: "日志本", category: "community" },
  { en: "handful", zh: "一把", category: "community" },
  { en: "incredible", zh: "难以置信的，太棒了", category: "community" },
  { en: "sign", zh: "签名", category: "community" },
  { en: "trade", zh: "交换", category: "community" },
  { en: "tradition", zh: "传统", category: "community" },
  { en: "squeals", zh: "尖叫", category: "community" },
  { en: "delight", zh: "喜悦", category: "community" },
  { en: "magical", zh: "神奇的", category: "community" },
  { en: "keeper", zh: "值得保留的东西", category: "community" },
  { en: "reread", zh: "重新读", category: "community" },
  { en: "hollow branch", zh: "中空的树枝", category: "community" },
  { en: "clever", zh: "巧妙的", category: "community" },
  { en: "log", zh: "记录", category: "community" },
  { en: "great start", zh: "很好的开始", category: "community" },
  { en: "mark", zh: "标记", category: "community" },
  { en: "hidden corners", zh: "隐秘的角落", category: "community" },
  { en: "adventure", zh: "冒险", category: "community" },
  { en: "bench", zh: "长椅", category: "community" },
  { en: "oak tree", zh: "橡树", category: "community" },
  { en: "waterproof", zh: "防水的", category: "community" },
  { en: "mysterious", zh: "神秘的", category: "community" }
);
