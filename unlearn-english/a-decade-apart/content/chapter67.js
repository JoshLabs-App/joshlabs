// 内容数据层：第六十七章，紧接第六十六章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：跑完五公里后，两人想尝试点不一样的运动，报名了室内攀岩体验课。
// 全新词汇领域：攀岩装备/路线难度/保护绳/抱石。

GAME_CONTENT.scenes.push(
  {
    id: "trying-something-new",
    transition: { en: "Riding the high from the 5K, they look for a new challenge.", zh: "沉浸在跑完五公里的兴奋中，他们想找个新挑战。" },
    title: "Trying Something New",
    subtitle: "家里 · 寻找新挑战",
    avatar: "🧗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever wanted to try rock climbing?", zh: "你有没有想过尝试攀岩？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've actually always wanted to try it.", zh: "其实我一直都想试试。", correct: true, xp: 10 },
          { text: "I've never once thought about climbing anything.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've actually always wanted to try it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's an indoor climbing gym near the studio.", zh: "陶艺工作室附近有一家室内攀岩馆。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Perfect, let's check it out this weekend.", zh: "太好了，我们这周末去看看吧。", correct: true, xp: 10 },
          { text: "That's odd, climbing sounds too dangerous.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Perfect, let's check it out this weekend.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's sign up for a beginner intro session.", zh: "我们报名一节初学者体验课吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's book that right now.", zh: "好主意，我们现在就去订。", correct: true, xp: 10 },
          { text: "Let's just show up without booking anything.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's book that right now.",
        next: null
      }
    }
  },
  {
    id: "getting-fitted-for-gear",
    transition: { en: "Staff at the gym fit them with climbing shoes and harnesses.", zh: "攀岩馆的工作人员帮他们试穿攀岩鞋和安全带。" },
    title: "Getting Fitted for Gear",
    subtitle: "攀岩馆 · 试装备",
    avatar: "🥾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These shoes should fit snugger than your regular sneakers.", zh: "这双鞋应该比你平常穿的运动鞋要更贴脚。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, tighter should give better grip.", zh: "有道理，更紧一点应该能提供更好的抓地力。", correct: true, xp: 10 },
          { text: "That's odd, loose shoes should work just fine.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, tighter should give better grip.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you double-check that your harness is buckled correctly?", zh: "你能再检查一下安全带扣得对不对吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me look at it again.", zh: "可以，我再看一下。", correct: true, xp: 10 },
          { text: "I can't, checking buckles seems unnecessary.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me look at it again.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please always have a partner check your gear before climbing.", zh: "攀爬前请务必让搭档检查一下你的装备。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, we'll always check each other first.", zh: "明白了，我们会一直先互相检查。", correct: true, xp: 10 },
          { text: "Sorry, checking each other seems unnecessary.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, we'll always check each other first.",
        next: null
      }
    }
  },
  {
    id: "learning-the-basics",
    transition: { en: "An instructor walks them through basic safety and technique.", zh: "教练带他们了解基本的安全知识和技巧。" },
    title: "Learning the Basics",
    subtitle: "攀岩馆 · 学习基础知识",
    avatar: "🧑‍🏫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How do these colored holds work exactly?", zh: "这些彩色的岩点具体是怎么运作的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Each color marks a different route and difficulty.", zh: "每种颜色代表一条不同的路线和难度。", correct: true, xp: 10 },
          { text: "Colors don't mean anything on this wall.", correct: false }
        ],
        hintOnWrong: "wh-问题回答方法 → Each color marks a different route and difficulty.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This route is easier than the one next to it.", zh: "这条路线比旁边那条要简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's start with the easier one first.", zh: "我们先从简单的这条开始吧。", correct: true, xp: 10 },
          { text: "Let's skip the easy ones entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's start with the easier one first.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Keep your weight over your feet, not your arms.", zh: "重心要放在脚上，不是手臂上。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'll focus on my legs more.", zh: "好的，我会更专注于用腿发力。", correct: true, xp: 10 },
          { text: "Sorry, using my arms feels more natural.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'll focus on my legs more.",
        next: null
      }
    }
  },
  {
    id: "the-first-climb",
    transition: { en: "One partner takes the wall while the other holds the rope.", zh: "一人先上墙攀爬，另一人负责保护绳。" },
    title: "The First Climb",
    subtitle: "攀岩馆 · 首次攀爬",
    avatar: "🧗‍♀️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you feeling steady up there?", zh: "你在上面感觉稳吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I am, this actually feels manageable.", zh: "挺稳的，这其实感觉还挺可控的。", correct: true, xp: 10 },
          { text: "I'm not, get me down immediately.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I am, this actually feels manageable.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You're climbing more confidently than I expected.", zh: "你爬得比我预想的要自信多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, I think adrenaline is helping me.", zh: "谢谢，我觉得肾上腺素在帮我发挥。", correct: true, xp: 10 },
          { text: "Thanks, though I feel completely terrified.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, I think adrenaline is helping me.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I've got you, take your time finding the next hold.", zh: "我保护着你呢，慢慢找下一个岩点。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, that actually helps me relax up here.", zh: "谢谢，这真的让我在上面放松了一些。", correct: true, xp: 10 },
          { text: "Thank you, though I'd rather rush this part.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, that actually helps me relax up here.",
        next: null
      }
    }
  },
  {
    id: "reaching-the-top",
    transition: { en: "After a slow, careful climb, one of them reaches the top.", zh: "经过缓慢而小心的攀爬，其中一人到达了顶端。" },
    title: "Reaching the Top",
    subtitle: "攀岩馆 · 登顶",
    avatar: "🏔️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I actually made it all the way to the top!", zh: "我居然爬到了最顶端！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "You did it, I'm so proud of you!", zh: "你做到了，我为你感到骄傲！", correct: true, xp: 10 },
          { text: "You didn't, you're only halfway up.", correct: false }
        ],
        hintOnWrong: "过去时回应 → You did it, I'm so proud of you!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The view from up here is better than I expected.", zh: "上面的视野比我预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, you can see the whole gym from there.", zh: "确实是，在那儿能看到整个攀岩馆。", correct: true, xp: 10 },
          { text: "It isn't, there's honestly nothing to look at.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, you can see the whole gym from there.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you lean back and let the rope lower you down?", zh: "你能往后靠，让绳子把你放下来吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, here goes, trusting the rope.", zh: "可以，来吧，我相信这根绳子。", correct: true, xp: 10 },
          { text: "I can't, I'd rather just climb back down.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, here goes, trusting the rope.",
        next: null
      }
    }
  },
  {
    id: "trying-bouldering",
    transition: { en: "They also try bouldering on a shorter wall without ropes.", zh: "他们还在一面无需保护绳的矮墙上尝试了抱石。" },
    title: "Trying Bouldering",
    subtitle: "攀岩馆 · 尝试抱石",
    avatar: "🪨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This wall is shorter, but the moves look trickier.", zh: "这面墙更矮，但动作看起来更棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, shorter walls focus more on skill.", zh: "有道理，矮墙更注重技巧本身。", correct: true, xp: 10 },
          { text: "That's odd, shorter should always mean easier.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, shorter walls focus more on skill.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There are crash pads below, so falling is safe.", zh: "下面有防摔垫，所以掉下来也是安全的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good to know, that makes this less scary.", zh: "很高兴知道这个，这样感觉没那么可怕了。", correct: true, xp: 10 },
          { text: "That's fine, falling never worries me at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good to know, that makes this less scary.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's each try this route a few times.", zh: "我们各自多试几次这条路线吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, practice should help a lot here.", zh: "好啊，在这方面多练应该会很有帮助。", correct: true, xp: 10 },
          { text: "Let's just try once and move on.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, practice should help a lot here.",
        next: null
      }
    }
  },
  {
    id: "falling-and-laughing",
    transition: { en: "A few failed attempts turn into fits of laughter.", zh: "几次失败的尝试变成了一阵阵大笑。" },
    title: "Falling and Laughing",
    subtitle: "攀岩馆 · 跌落与欢笑",
    avatar: "😂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I just fell off that same spot for the third time!", zh: "我又在同一个地方摔下来了，这已经是第三次了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That was hilarious, honestly, let's try once more.", zh: "说实话那真的太搞笑了，我们再试一次吧。", correct: true, xp: 10 },
          { text: "That was terrible, let's just give up now.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That was hilarious, honestly, let's try once more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is somehow more fun than I expected failing to be.", zh: "不知怎么，失败居然比我预想的还要有趣。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, we're laughing more than climbing.", zh: "确实如此，我们笑的时间比爬的时间还多。", correct: true, xp: 10 },
          { text: "It isn't, failing feels frustrating every time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, we're laughing more than climbing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even when we fail, this is still a great time.", zh: "即使我们失败了，这也依然是一段美好的时光。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even when we fail, I'm having a blast.", zh: "即使失败了，我也玩得很开心。", correct: true, xp: 10 },
          { text: "Even when we fail, I want to leave now.", correct: false }
        ],
        hintOnWrong: "让步句 → Even when we fail, I'm having a blast.",
        next: null
      }
    }
  },
  {
    id: "sore-but-happy",
    transition: { en: "By the end of the session, both are pleasantly exhausted.", zh: "课程结束时，两人都累得心满意足。" },
    title: "Sore but Happy",
    subtitle: "攀岩馆 · 疲惫又满足",
    avatar: "😌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My forearms are more sore than they've ever been.", zh: "我的前臂比以往任何时候都要酸痛。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but this was completely worth it.", zh: "我也是，但这完全值得。", correct: true, xp: 10 },
          { text: "Mine feel perfectly fine, actually.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but this was completely worth it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This turned out more fun than I ever imagined.", zh: "这次的效果比我想象的要有趣得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, we should make this a regular thing.", zh: "确实如此，我们应该把这变成常规活动。", correct: true, xp: 10 },
          { text: "It really didn't, this was a waste of time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, we should make this a regular thing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's come back next weekend and try harder routes.", zh: "我们下周末再来，试试更难的路线吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'm actually looking forward to it.", zh: "好啊，我其实还挺期待的。", correct: true, xp: 10 },
          { text: "Let's not, once was more than enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm actually looking forward to it.",
        next: null
      }
    }
  },
  {
    id: "a-new-shared-hobby",
    transition: { en: "Weeks later, climbing has become a regular part of their routine.", zh: "几周后，攀岩已经成了他们日常生活的固定部分。" },
    title: "A New Shared Hobby",
    subtitle: "家里 · 新的共同爱好",
    avatar: "🧗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've gotten stronger than I ever expected this fast.", zh: "我们变强的速度比我预想的要快得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, all that practice paid off.", zh: "确实如此，所有的练习都有了回报。", correct: true, xp: 10 },
          { text: "We really haven't, we've barely improved at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, all that practice paid off.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This hobby has honestly brought us closer together.", zh: "说实话，这项爱好真的让我们更亲近了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really has, I love having a shared challenge.", zh: "确实如此，我很喜欢有一个共同的挑战。", correct: true, xp: 10 },
          { text: "It hasn't, we barely spend time together climbing.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really has, I love having a shared challenge.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what new challenge comes next, let's face it together.", zh: "不管接下来有什么新挑战，我们都要一起面对。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, together, always.", zh: "无论如何，我们都在一起，永远如此。", correct: true, xp: 10 },
          { text: "No matter what, we'll probably face it apart.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, together, always.",
        next: null
      }
    }
  },
  {
    id: "teaching-the-toddler-to-climb",
    transition: { en: "On a family day, they bring their toddler to a kids' climbing area.", zh: "在一个家庭日，他们带孩子去了儿童攀爬区。" },
    title: "Teaching the Toddler to Climb",
    subtitle: "攀岩馆 · 教孩子攀爬",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you reach that low hold right there?", zh: "你能够到那个低处的岩点吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, look how proud they look already.", zh: "他们能做到，看他们已经多骄傲了。", correct: true, xp: 10 },
          { text: "They can't, they're far too small for this.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, look how proud they look already.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're more fearless up there than I ever was.", zh: "他们在上面比我曾经要无畏得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, it's amazing to watch.", zh: "确实如此，看着真是太棒了。", correct: true, xp: 10 },
          { text: "They really aren't, they seem terrified up there.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, it's amazing to watch.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might just become a whole family hobby someday.", zh: "这或许有一天会变成我们全家的共同爱好。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I'd love that, honestly, more than anything.", zh: "说实话，我非常希望如此。", correct: true, xp: 10 },
          { text: "I doubt it, this is only for us adults.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I'd love that, honestly, more than anything.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "rock climbing", zh: "攀岩", category: "community" },
  { en: "indoor", zh: "室内的", category: "community" },
  { en: "climbing gym", zh: "攀岩馆", category: "community" },
  { en: "intro session", zh: "体验课", category: "community" },
  { en: "climbing shoes", zh: "攀岩鞋", category: "community" },
  { en: "harnesses", zh: "安全带（复数）", category: "community" },
  { en: "snugger", zh: "更贴身的（snug 比较级）", category: "community" },
  { en: "sneakers", zh: "运动鞋", category: "community" },
  { en: "grip", zh: "抓地力", category: "community" },
  { en: "buckled", zh: "扣好的", category: "community" },
  { en: "gear", zh: "装备", category: "community" },
  { en: "partner", zh: "搭档", category: "community" },
  { en: "colored holds", zh: "彩色岩点", category: "community" },
  { en: "route", zh: "路线", category: "community" },
  { en: "difficulty", zh: "难度", category: "community" },
  { en: "weight", zh: "重心，重量", category: "community" },
  { en: "steady", zh: "稳定的", category: "community" },
  { en: "manageable", zh: "可控的", category: "community" },
  { en: "confidently", zh: "自信地", category: "community" },
  { en: "adrenaline", zh: "肾上腺素", category: "community" },
  { en: "hold", zh: "岩点", category: "community" },
  { en: "made it", zh: "做到了，到达了", category: "community" },
  { en: "view", zh: "视野，景色", category: "community" },
  { en: "lean back", zh: "往后靠", category: "community" },
  { en: "lower down", zh: "放下来", category: "community" },
  { en: "trusting", zh: "信任", category: "community" },
  { en: "bouldering", zh: "抱石", category: "community" },
  { en: "moves", zh: "动作（复数）", category: "community" },
  { en: "trickier", zh: "更棘手的（tricky 比较级）", category: "community" },
  { en: "crash pads", zh: "防摔垫（复数）", category: "community" },
  { en: "less scary", zh: "没那么可怕", category: "community" },
  { en: "hilarious", zh: "非常搞笑的", category: "community" },
  { en: "having a blast", zh: "玩得很开心", category: "community" },
  { en: "pleasantly", zh: "令人愉悦地", category: "community" },
  { en: "forearms", zh: "前臂（复数）", category: "community" },
  { en: "regular thing", zh: "常规的事", category: "community" },
  { en: "harder routes", zh: "更难的路线", category: "community" },
  { en: "shared hobby", zh: "共同爱好", category: "community" },
  { en: "shared challenge", zh: "共同的挑战", category: "community" },
  { en: "kids' climbing area", zh: "儿童攀爬区", category: "community" },
  { en: "fearless", zh: "无畏的", category: "community" },
  { en: "family hobby", zh: "家庭共同爱好", category: "community" }
);
