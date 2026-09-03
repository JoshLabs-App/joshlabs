// 内容数据层：第三十章，紧接第二十九章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter29.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：报税季到来，两人第一次以夫妻身份联合报税。全新词汇领域：报税表格/
// 抵扣项/退税/会计师咨询。

GAME_CONTENT.scenes.push(
  {
    id: "tax-season-begins",
    transition: { en: "Spring arrives, and with it, tax season.", zh: "春天到了，报税季也随之而来。" },
    title: "Tax Season Begins",
    subtitle: "报税 · 准备开始",
    avatar: "🧾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are we filing jointly this year, since we're married now?", zh: "既然我们结婚了，今年是不是要联合报税？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, filing jointly should save us money.", zh: "是的，联合报税应该能帮我们省钱。", correct: true, xp: 10 },
          { text: "No, married couples can't file taxes together.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, filing jointly should save us money.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you gathered your income slips yet?", zh: "你收集好收入单据了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've gathered most, but a few are missing.", zh: "大部分都收集好了，但有几张还没找到。", correct: true, xp: 10 },
          { text: "I'm gathering them at this exact moment.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've gathered most, but a few are missing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should probably hire an accountant this year.", zh: "今年我们大概应该请个会计师。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a good idea, our situation's more complicated now.", zh: "这是个好主意，我们的情况现在更复杂了。", correct: true, xp: 10 },
          { text: "That's unnecessary, taxes are always simple for us.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a good idea, our situation's more complicated now.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-accountant",
    transition: { en: "They sit down with an accountant for the first time.", zh: "他们第一次和一位会计师坐下来谈。" },
    title: "Meeting the Accountant",
    subtitle: "会计事务所 · 首次咨询",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you buy a house or have a child last year?", zh: "你们去年买房了或者有孩子了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, but we're expecting a baby this year.", zh: "没有，不过我们今年会迎来一个宝宝。", correct: true, xp: 10 },
          { text: "No, and nothing has changed in years.", correct: false }
        ],
        hintOnWrong: "肯定回答但补充信息 → No, but we're expecting a baby this year.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This deduction could lower what you owe significantly.", zh: "这项抵扣能大幅降低你们要缴的税。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it helps that much, let's definitely claim it.", zh: "如果能有这么大帮助，那我们一定要申报它。", correct: true, xp: 10 },
          { text: "If it helps that much, let's skip it anyway.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it helps that much, let's definitely claim it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll have everything ready for you by next week.", zh: "下周之前我会把一切都准备好给你们。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, we really appreciate your help with this.", zh: "太好了，非常感谢你在这方面的帮助。", correct: true, xp: 10 },
          { text: "Perfect, though we don't actually need any help.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Perfect, we really appreciate your help with this.",
        next: null
      }
    }
  },
  {
    id: "sorting-receipts",
    transition: { en: "That weekend, they sort through a shoebox of receipts.", zh: "那个周末，他们整理了一鞋盒的收据。" },
    title: "Sorting Receipts",
    subtitle: "家里 · 整理收据",
    avatar: "🧾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why do we have so many receipts from last spring?", zh: "为什么我们有这么多去年春天的收据？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We probably saved them for the renovation deductions.", zh: "我们大概是为了装修抵扣才留下的。", correct: true, xp: 10 },
          { text: "We probably saved them for no reason at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → We probably saved them for the renovation deductions.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This pile is more organized than that one over there.", zh: "这一堆比那边那一堆整理得更好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's use this pile as our system, then.", zh: "那我们就用这一堆的方式来整理吧。", correct: true, xp: 10 },
          { text: "Let's ignore that and mix them all together.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's use this pile as our system, then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you scan these while I make some coffee?", zh: "我去泡咖啡的时候你能把这些扫描一下吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can start scanning them right now.", zh: "我现在就能开始扫描。", correct: true, xp: 10 },
          { text: "I can't scan anything, the scanner is broken.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can start scanning them right now.",
        next: null
      }
    }
  },
  {
    id: "the-work-from-home-deduction",
    transition: { en: "They discuss whether working from home counts for a deduction.", zh: "他们讨论在家办公是否能算作一项抵扣。" },
    title: "The Work-From-Home Deduction",
    subtitle: "家里 · 居家办公抵扣",
    avatar: "💻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many days a week do you work from home?", zh: "你一周有几天在家办公？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I work from home about three days a week.", zh: "我一周大概有三天在家办公。", correct: true, xp: 10 },
          { text: "Working from home isn't something I do.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → I work from home about three days a week.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you kept track of your home office expenses?", zh: "你有记录居家办公的开销吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've kept a rough record on my phone.", zh: "我在手机上大概记了一下。", correct: true, xp: 10 },
          { text: "I've never once thought about tracking that.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've kept a rough record on my phone.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This could add up to a nice deduction.", zh: "这累积起来可能是一笔不错的抵扣。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's great, every bit helps this year.", zh: "太好了，今年每一点都有帮助。", correct: true, xp: 10 },
          { text: "That's pointless, small amounts never matter.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's great, every bit helps this year.",
        next: null
      }
    }
  },
  {
    id: "double-checking-the-numbers",
    transition: { en: "The accountant reviews the draft return with them.", zh: "会计师和他们一起审核报税草稿。" },
    title: "Double-Checking the Numbers",
    subtitle: "会计事务所 · 核对数字",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Does this total match what you expected?", zh: "这个总数和你预期的一致吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's actually pretty close to what I expected.", zh: "是的，和我预期的其实挺接近的。", correct: true, xp: 10 },
          { text: "No, taxes are something I never think about.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's actually pretty close to what I expected.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This number is higher than I originally estimated.", zh: "这个数字比我最初估算的要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Higher is fine, as long as it's accurate.", zh: "只要准确，高一点也没关系。", correct: true, xp: 10 },
          { text: "Higher is unacceptable, please just make it lower.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Higher is fine, as long as it's accurate.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If everything checks out, I'll submit it tomorrow.", zh: "如果一切都没问题，我明天就提交。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it all looks right, please go ahead.", zh: "如果一切都没问题，那就请提交吧。", correct: true, xp: 10 },
          { text: "If it all looks right, let's wait another month.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it all looks right, please go ahead.",
        next: null
      }
    }
  },
  {
    id: "submitting-the-return",
    transition: { en: "With everything confirmed, they submit the joint tax return.", zh: "一切确认无误后，他们提交了联合报税表。" },
    title: "Submitting the Return",
    subtitle: "会计事务所 · 提交报税",
    avatar: "🧾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm submitting it online right now.", zh: "我现在正在网上提交。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Great, let me know once it goes through.", zh: "太好了，提交成功了告诉我一声。", correct: true, xp: 10 },
          { text: "Great, though I don't care when it's done.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → Great, let me know once it goes through.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's submitted, and you should get a confirmation email.", zh: "已经提交了，你们应该会收到一封确认邮件。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "Great, and thank you for handling everything so well.", zh: "太好了，也谢谢你把一切都处理得这么好。", correct: true, xp: 10 },
          { text: "Great, but I doubt we'll get any email.", correct: false }
        ],
        hintOnWrong: "用连接词 → Great, and thank you for handling everything so well.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "How long does it usually take to hear back?", zh: "通常要多久才能收到回复？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It usually takes a few weeks, I believe.", zh: "我记得通常要几周时间。", correct: true, xp: 10 },
          { text: "It usually takes about ten seconds total.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时长 → It usually takes a few weeks, I believe.",
        next: null
      }
    }
  },
  {
    id: "the-refund-notice",
    transition: { en: "A few weeks later, a notice arrives about their refund.", zh: "几周后，一封关于退税的通知到了。" },
    title: "The Refund Notice",
    subtitle: "家里 · 退税通知",
    avatar: "📬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've been approved for a refund!", zh: "我们的退税已经获批了！" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been hoping for good news all week.", zh: "我这一整周都盼着有好消息。", correct: true, xp: 10 },
          { text: "I've never once hoped for anything like this.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've been hoping for good news all week.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This refund is bigger than we expected.", zh: "这笔退税比我们预期的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Bigger is always a pleasant surprise.", zh: "多一点总是个惊喜。", correct: true, xp: 10 },
          { text: "Bigger sounds suspicious, something must be wrong.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Bigger is always a pleasant surprise.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "What should we do with the extra money?", zh: "我们要怎么用这笔多出来的钱？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's put it toward the baby's savings.", zh: "我们把它存进宝宝的储蓄里吧。", correct: true, xp: 10 },
          { text: "It doesn't matter, money isn't important to us.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's put it toward the baby's savings.",
        next: null
      }
    }
  },
  {
    id: "planning-for-next-year",
    transition: { en: "They talk about staying organized for next tax season.", zh: "他们聊起如何为明年的报税季提前做好准备。" },
    title: "Planning for Next Year",
    subtitle: "家里 · 提前规划",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we keep a folder for receipts all year round?", zh: "我们要不要一年到头都留一个文件夹放收据？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that would save us a lot of stress.", zh: "好，那样能省掉我们不少压力。", correct: true, xp: 10 },
          { text: "No, a shoebox works better for us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that would save us a lot of stress.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we track expenses monthly, next year will be easier.", zh: "如果我们每月记录开销，明年就会更轻松。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's start doing that now.", zh: "如果真是这样，我们现在就开始吧。", correct: true, xp: 10 },
          { text: "If that's true, let's wait until next spring.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, let's start doing that now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll keep the same accountant for next year too.", zh: "明年我们也会继续找同一位会计师。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Good call, she made this whole process easy.", zh: "这个决定不错，她让整个过程都很轻松。", correct: true, xp: 10 },
          { text: "Bad call, we should find someone new instead.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Good call, she made this whole process easy.",
        next: null
      }
    }
  },
  {
    id: "budgeting-the-refund",
    transition: { en: "They sit down to decide exactly how to use the refund.", zh: "他们坐下来商量退税该怎么用。" },
    title: "Budgeting the Refund",
    subtitle: "家里 · 分配退税",
    avatar: "💰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much should we put toward the baby fund?", zh: "我们应该拿出多少放进宝宝基金？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's put about half of it toward that.", zh: "我们把大约一半放进去吧。", correct: true, xp: 10 },
          { text: "None of it, the baby fund doesn't need anything.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's put about half of it toward that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should save the rest for emergencies.", zh: "剩下的我们应该留着应急用。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's smart, we could use a bigger cushion.", zh: "这很明智，我们确实需要更多的应急储备。", correct: true, xp: 10 },
          { text: "That's silly, emergencies never actually happen.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's smart, we could use a bigger cushion.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This year has honestly gone better than we imagined.", zh: "老实说，今年比我们想象的顺利多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, and I'm grateful for that.", zh: "确实如此，我对此心存感激。", correct: true, xp: 10 },
          { text: "It really hasn't, this year's been a disaster.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, and I'm grateful for that.",
        next: null
      }
    }
  },
  {
    id: "a-quiet-evening",
    transition: { en: "That evening, they relax now that tax season is finally over.", zh: "那天晚上，报税季终于结束，他们放松下来。" },
    title: "A Quiet Evening",
    subtitle: "家里 · 安静的夜晚",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm just glad tax season is finally behind us.", zh: "我真高兴报税季终于过去了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, that felt like a real accomplishment.", zh: "我也是，感觉像完成了一件大事。", correct: true, xp: 10 },
          { text: "Me too, though nothing was actually finished.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, that felt like a real accomplishment.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've handled a lot together this past year.", zh: "过去这一年我们一起处理了很多事情。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and we make a good team.", zh: "确实如此，我们真是很棒的搭档。", correct: true, xp: 10 },
          { text: "We really haven't, we've done nothing together.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and we make a good team.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's just relax tonight and not think about anything else.", zh: "我们今晚就好好放松，什么都别想了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's relax tonight, we've earned it.", zh: "我们今晚好好放松吧，这是我们应得的。", correct: true, xp: 10 },
          { text: "Let's start planning next year's taxes instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's relax tonight, we've earned it.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "tax season", zh: "报税季", category: "community" },
  { en: "filing jointly", zh: "联合报税", category: "community" },
  { en: "married", zh: "已婚的", category: "community" },
  { en: "income slips", zh: "收入单据", category: "community" },
  { en: "missing", zh: "缺失的", category: "community" },
  { en: "hire", zh: "聘请", category: "community" },
  { en: "accountant", zh: "会计师", category: "community" },
  { en: "situation", zh: "情况", category: "community" },
  { en: "complicated", zh: "复杂的", category: "community" },
  { en: "expecting", zh: "怀孕的，期待着", category: "community" },
  { en: "deduction", zh: "抵扣项", category: "community" },
  { en: "lower", zh: "降低", category: "community" },
  { en: "owe", zh: "欠（钱、税）", category: "community" },
  { en: "significantly", zh: "显著地", category: "community" },
  { en: "claim", zh: "申报", category: "community" },
  { en: "appreciate", zh: "感激", category: "community" },
  { en: "shoebox", zh: "鞋盒", category: "community" },
  { en: "receipts", zh: "收据（复数）", category: "community" },
  { en: "pile", zh: "一堆", category: "community" },
  { en: "organized", zh: "有条理的", category: "community" },
  { en: "system", zh: "方式，系统", category: "community" },
  { en: "scan", zh: "扫描", category: "community" },
  { en: "work from home", zh: "在家办公", category: "community" },
  { en: "kept track of", zh: "记录了", category: "community" },
  { en: "home office", zh: "家庭办公室", category: "community" },
  { en: "expenses", zh: "开销", category: "community" },
  { en: "rough record", zh: "大致的记录", category: "community" },
  { en: "add up", zh: "累积", category: "community" },
  { en: "every bit helps", zh: "每一点都有帮助", category: "community" },
  { en: "total", zh: "总数", category: "community" },
  { en: "originally", zh: "最初", category: "community" },
  { en: "estimated", zh: "估算的", category: "community" },
  { en: "accurate", zh: "准确的", category: "community" },
  { en: "checks out", zh: "核对无误", category: "community" },
  { en: "submit", zh: "提交", category: "community" },
  { en: "goes through", zh: "通过，成功提交", category: "community" },
  { en: "confirmation email", zh: "确认邮件", category: "community" },
  { en: "hear back", zh: "收到回复", category: "community" },
  { en: "refund", zh: "退税", category: "community" },
  { en: "approved", zh: "获批的", category: "community" },
  { en: "pleasant surprise", zh: "惊喜", category: "community" },
  { en: "suspicious", zh: "可疑的", category: "community" },
  { en: "savings", zh: "储蓄", category: "community" },
  { en: "folder", zh: "文件夹", category: "community" },
  { en: "stress", zh: "压力", category: "community" },
  { en: "track", zh: "追踪，记录", category: "community" },
  { en: "good call", zh: "明智的决定", category: "community" },
  { en: "baby fund", zh: "宝宝基金", category: "community" },
  { en: "emergencies", zh: "紧急情况", category: "community" },
  { en: "cushion", zh: "缓冲，储备", category: "community" },
  { en: "grateful", zh: "感激的", category: "community" },
  { en: "behind us", zh: "已经过去", category: "community" },
  { en: "accomplishment", zh: "成就", category: "community" },
  { en: "handled", zh: "处理了", category: "community" },
  { en: "team", zh: "团队", category: "community" },
  { en: "earned it", zh: "应得的", category: "community" }
);
