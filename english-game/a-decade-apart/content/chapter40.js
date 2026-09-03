// 内容数据层：第四十章，紧接第三十九章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter39.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：有了宝宝后，两人第一次认真规划退休储蓄。全新词汇领域：退休金账户/
// 投资配置/理财顾问咨询/长期规划。

GAME_CONTENT.scenes.push(
  {
    id: "thinking-about-the-future",
    transition: { en: "With a baby now, they start thinking seriously about retirement.", zh: "有了宝宝之后，他们开始认真考虑退休的事。" },
    title: "Thinking About the Future",
    subtitle: "家里 · 考虑未来",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have we ever actually set up a retirement account?", zh: "我们真的设立过退休账户吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've never really gotten around to it.", zh: "我们其实一直没顾得上。", correct: true, xp: 10 },
          { text: "We're setting one up at this exact moment.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've never really gotten around to it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's probably time we took this more seriously.", zh: "我们大概该更认真对待这件事了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, especially with a family now.", zh: "你说得对，尤其是现在有了家庭。", correct: true, xp: 10 },
          { text: "You're wrong, retirement is decades away anyway.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, especially with a family now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should book a meeting with a financial advisor.", zh: "我们应该约一位理财顾问见面。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, let's book something this week.", zh: "好主意，我们这周就约一下吧。", correct: true, xp: 10 },
          { text: "Bad idea, advisors just want our money.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, let's book something this week.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-advisor",
    transition: { en: "They sit down with a financial advisor for the first time.", zh: "他们第一次和理财顾问坐下来谈。" },
    title: "Meeting the Advisor",
    subtitle: "理财公司 · 首次咨询",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What age are you hoping to retire by?", zh: "你们希望多大年纪退休？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We're hoping for somewhere around sixty-five.", zh: "我们希望大概在六十五岁左右。", correct: true, xp: 10 },
          { text: "We're hoping to work forever, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答目标 → We're hoping for somewhere around sixty-five.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The earlier you start saving, the more it grows.", zh: "越早开始存钱，增长的空间就越大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, let's start right away then.", zh: "有道理，那我们现在就开始吧。", correct: true, xp: 10 },
          { text: "That makes no sense, timing never matters.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, let's start right away then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll put together a plan based on your goals.", zh: "我会根据你们的目标制定一份方案。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we really appreciate the help.", zh: "谢谢，我们真的很感激你的帮助。", correct: true, xp: 10 },
          { text: "Thank you, though we don't need any plan.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Thank you, we really appreciate the help.",
        next: null
      }
    }
  },
  {
    id: "understanding-investment-options",
    transition: { en: "The advisor explains different ways to invest their savings.", zh: "顾问讲解了几种不同的投资方式。" },
    title: "Understanding Investment Options",
    subtitle: "理财公司 · 了解投资选项",
    avatar: "📊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you comfortable with some risk, or would you rather play it safe?", zh: "你们能接受一定的风险，还是更愿意求稳？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A little risk is fine, we have time on our side.", zh: "一点风险没关系，我们还有时间。", correct: true, xp: 10 },
          { text: "No risk at all, we'd rather keep it under the mattress.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → A little risk is fine, we have time on our side.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This fund has performed better than the market average.", zh: "这只基金的表现比市场平均水平更好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's encouraging, tell us more about it.", zh: "这让人挺有信心的，多跟我们说说吧。", correct: true, xp: 10 },
          { text: "That's suspicious, numbers like that seem fake.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's encouraging, tell us more about it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you diversify, you'll reduce your overall risk.", zh: "如果你们分散投资，整体风险就会降低。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's diversify as much as we can.", zh: "如果真是这样，我们就尽量分散投资吧。", correct: true, xp: 10 },
          { text: "If that's true, let's put it all in one place.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, let's diversify as much as we can.",
        next: null
      }
    }
  },
  {
    id: "setting-a-monthly-contribution",
    transition: { en: "They decide how much to set aside each month.", zh: "他们商量每个月要存多少钱。" },
    title: "Setting a Monthly Contribution",
    subtitle: "理财公司 · 设定月度存款",
    avatar: "💰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How much can you comfortably contribute each month?", zh: "你们每个月能轻松存多少？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "We can probably manage about three hundred.", zh: "我们大概能存三百块左右。", correct: true, xp: 10 },
          { text: "We can't contribute anything at all right now.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → We can probably manage about three hundred.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Even a small amount adds up significantly over time.", zh: "即使是小额存款，长期下来也会积累很多。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even a small amount, then, is worth doing.", zh: "那么即使是小额，也值得去做。", correct: true, xp: 10 },
          { text: "Even a small amount feels pointless to us.", correct: false }
        ],
        hintOnWrong: "让步句 → Even a small amount, then, is worth doing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll set up automatic transfers so you never miss a month.", zh: "我们会设置自动转账，这样你们就不会漏掉哪个月。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's smart, automation makes it effortless.", zh: "这很明智，自动化让事情变得毫不费力。", correct: true, xp: 10 },
          { text: "That's risky, we'd rather do it manually.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's smart, automation makes it effortless.",
        next: null
      }
    }
  },
  {
    id: "a-check-in-six-months-later",
    transition: { en: "Six months later, they check in on how the account is growing.", zh: "六个月后，他们查看账户的增长情况。" },
    title: "A Check-In Six Months Later",
    subtitle: "理财公司 · 半年后回访",
    avatar: "📈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How has the account performed so far?", zh: "目前账户的表现怎么样？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's grown more than we expected, actually.", zh: "其实增长比我们预期的要多。", correct: true, xp: 10 },
          { text: "It's never once grown at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It's grown more than we expected, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your balance is higher than it was last quarter.", zh: "你们的余额比上一季度更高了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's great to hear, all the saving paid off.", zh: "太好了，之前所有的储蓄都有了回报。", correct: true, xp: 10 },
          { text: "That's disappointing, we expected far more growth.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's great to hear, all the saving paid off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would you like to increase your monthly contribution?", zh: "你们要不要增加每月的存款额？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Yes, let's bump it up a little.", zh: "好的，我们稍微提高一点吧。", correct: true, xp: 10 },
          { text: "No, let's actually lower it instead.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Yes, let's bump it up a little.",
        next: null
      }
    }
  },
  {
    id: "talking-about-the-future-with-family",
    transition: { en: "Over dinner, they explain their new plan to curious grandparents.", zh: "晚饭时，他们向好奇的祖父母解释了新的规划。" },
    title: "Talking About the Future with Family",
    subtitle: "家里 · 与家人分享",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why did you two decide to start this now?", zh: "你们俩为什么决定现在开始做这件事？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We wanted to be responsible for our family's future.", zh: "我们想为家庭的未来负起责任。", correct: true, xp: 10 },
          { text: "We decided because someone told us to.", correct: false }
        ],
        hintOnWrong: "wh-问题回答理由 → We wanted to be responsible for our family's future.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I wish we'd started this early like you two did.", zh: "我真希望我们也能像你们俩一样早点开始。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "It's never too late to start, honestly.", zh: "说实话，任何时候开始都不算晚。", correct: true, xp: 10 },
          { text: "You're right, it's far too late for you now.", correct: false }
        ],
        hintOnWrong: "回应虚拟语气 → It's never too late to start, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're proud of how responsible you two have become.", zh: "我们为你们俩变得这么负责任而感到骄傲。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Thank you, that really means a lot to us.", zh: "谢谢，这对我们来说意义重大。", correct: true, xp: 10 },
          { text: "Thank you, though we haven't really changed at all.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → Thank you, that really means a lot to us.",
        next: null
      }
    }
  },
  {
    id: "a-market-dip",
    transition: { en: "A rocky month in the market causes a bit of worry.", zh: "市场经历了一个动荡的月份，引发了一些担忧。" },
    title: "A Market Dip",
    subtitle: "理财公司 · 市场波动",
    avatar: "📉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we be worried about this drop in the market?", zh: "我们应该为这次市场下跌感到担心吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Not really, this is normal over time.", zh: "其实不用，长期来看这很正常。", correct: true, xp: 10 },
          { text: "Yes, let's pull all our money out right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Not really, this is normal over time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The market has always recovered from dips like this.", zh: "市场以前每次这样下跌之后都会恢复。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's reassuring, let's just stay the course.", zh: "这挺让人安心的，我们就继续保持原计划吧。", correct: true, xp: 10 },
          { text: "That's not reassuring, let's panic and sell everything.", correct: false }
        ],
        hintOnWrong: "现在完成时 → That's reassuring, let's just stay the course.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even during dips, staying consistent matters most.", zh: "即使在市场下跌期间，保持一致性才是最重要的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even during dips, we'll keep contributing steadily.", zh: "即使市场下跌，我们也会持续稳定地投入。", correct: true, xp: 10 },
          { text: "Even during dips, we'll probably just quit.", correct: false }
        ],
        hintOnWrong: "让步句 → Even during dips, we'll keep contributing steadily.",
        next: null
      }
    }
  },
  {
    id: "setting-up-a-college-fund",
    transition: { en: "While they're at it, they decide to start saving for the baby too.", zh: "既然都在做规划，他们也决定开始为宝宝存钱。" },
    title: "Setting Up a College Fund",
    subtitle: "理财公司 · 设立教育基金",
    avatar: "🎓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you considered opening an education fund too?", zh: "你们有考虑也开一个教育基金吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've actually been thinking about that too.", zh: "我们其实也一直在考虑这件事。", correct: true, xp: 10 },
          { text: "We've never once thought about that at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've actually been thinking about that too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This account grows tax-free, which helps a lot.", zh: "这个账户享受免税增长，这帮助很大。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a huge advantage, let's set it up.", zh: "这是个巨大的优势，我们就开一个吧。", correct: true, xp: 10 },
          { text: "That's not important, taxes don't matter to us.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a huge advantage, let's set it up.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This way, both generations are covered.", zh: "这样一来，两代人都有了保障。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That feels really good to say out loud.", zh: "说出这句话的感觉真的很好。", correct: true, xp: 10 },
          { text: "That feels like an unnecessary amount of planning.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That feels really good to say out loud.",
        next: null
      }
    }
  },
  {
    id: "imagining-retirement",
    transition: { en: "That night, they imagine what retirement might actually look like.", zh: "那天晚上，他们想象退休后的生活会是什么样子。" },
    title: "Imagining Retirement",
    subtitle: "家里 · 想象退休生活",
    avatar: "🌅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What do you picture us doing when we retire?", zh: "你想象我们退休后会做什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Traveling together, probably, with plenty of free time.", zh: "大概会一起旅行，有很多自由时间。", correct: true, xp: 10 },
          { text: "Nothing, retirement feels impossible to imagine.", correct: false }
        ],
        hintOnWrong: "wh-问题回答想象 → Traveling together, probably, with plenty of free time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we plan well now, that future feels within reach.", zh: "如果我们现在规划得好，那样的未来是触手可及的。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we keep this up, I really believe it.", zh: "如果我们坚持下去，我真的相信能做到。", correct: true, xp: 10 },
          { text: "If we keep this up, it still feels impossible.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If we keep this up, I really believe it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how far off it seems, it's worth planning for.", zh: "不管感觉多遥远，都值得为它做规划。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how far off, future us will thank us.", zh: "不管多遥远，未来的我们会感谢现在的自己。", correct: true, xp: 10 },
          { text: "No matter how far off, it's not worth thinking about.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how far off, future us will thank us.",
        next: null
      }
    }
  },
  {
    id: "the-annual-review",
    transition: { en: "A year later, they sit down for their first annual review.", zh: "一年后，他们进行了第一次年度财务回顾。" },
    title: "The Annual Review",
    subtitle: "理财公司 · 年度回顾",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This has been a strong first year for your savings.", zh: "对你们的储蓄来说，这是坚实的第一年。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's been better than we ever imagined.", zh: "这比我们想象的还要好。", correct: true, xp: 10 },
          { text: "It's been a complete disappointment, honestly.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It's been better than we ever imagined.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How does it feel seeing real progress like this?", zh: "看到这样真实的进步，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels incredibly motivating, honestly.", zh: "说实话，感觉特别有动力。", correct: true, xp: 10 },
          { text: "It doesn't feel like anything to me.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → It feels incredibly motivating, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here's to many more years of building this future together.", zh: "敬未来更多年一起打造这个未来。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To many more years, together, always.", zh: "敬更多年，我们一起，永远如此。", correct: true, xp: 10 },
          { text: "To fewer years of this, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒 → To many more years, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "retirement", zh: "退休", category: "community" },
  { en: "retirement account", zh: "退休账户", category: "community" },
  { en: "gotten around to it", zh: "顾得上去做", category: "community" },
  { en: "seriously", zh: "认真地", category: "community" },
  { en: "financial advisor", zh: "理财顾问", category: "community" },
  { en: "book a meeting", zh: "预约会面", category: "community" },
  { en: "retire", zh: "退休（动词）", category: "community" },
  { en: "somewhere around", zh: "大概在……左右", category: "community" },
  { en: "the earlier", zh: "越早", category: "community" },
  { en: "grows", zh: "增长", category: "community" },
  { en: "invest", zh: "投资", category: "community" },
  { en: "goals", zh: "目标（复数）", category: "community" },
  { en: "risk", zh: "风险", category: "community" },
  { en: "play it safe", zh: "求稳", category: "community" },
  { en: "time on our side", zh: "时间对我们有利", category: "community" },
  { en: "mattress", zh: "床垫", category: "community" },
  { en: "fund", zh: "基金", category: "community" },
  { en: "performed", zh: "表现（动词过去式）", category: "community" },
  { en: "market average", zh: "市场平均水平", category: "community" },
  { en: "encouraging", zh: "令人鼓舞的", category: "community" },
  { en: "suspicious", zh: "可疑的", category: "community" },
  { en: "diversify", zh: "分散投资", category: "community" },
  { en: "reduce", zh: "降低", category: "community" },
  { en: "overall", zh: "整体的", category: "community" },
  { en: "contribute", zh: "投入，贡献", category: "community" },
  { en: "comfortably", zh: "轻松地", category: "community" },
  { en: "manage", zh: "设法做到", category: "community" },
  { en: "significantly", zh: "显著地", category: "community" },
  { en: "over time", zh: "长期来看", category: "community" },
  { en: "automatic transfers", zh: "自动转账", category: "community" },
  { en: "effortless", zh: "毫不费力的", category: "community" },
  { en: "manually", zh: "手动地", category: "community" },
  { en: "check-in", zh: "回访，核查", category: "community" },
  { en: "balance", zh: "余额", category: "community" },
  { en: "quarter", zh: "季度", category: "community" },
  { en: "bump it up", zh: "提高一点", category: "community" },
  { en: "lower", zh: "降低", category: "community" },
  { en: "responsible", zh: "负责任的", category: "community" },
  { en: "never too late", zh: "永远不算晚", category: "community" },
  { en: "proud", zh: "骄傲的", category: "community" },
  { en: "market", zh: "市场", category: "community" },
  { en: "drop", zh: "下跌", category: "community" },
  { en: "recovered", zh: "恢复了", category: "community" },
  { en: "dips", zh: "下跌（复数）", category: "community" },
  { en: "stay the course", zh: "保持原计划", category: "community" },
  { en: "panic", zh: "恐慌", category: "community" },
  { en: "steadily", zh: "稳定地", category: "community" },
  { en: "education fund", zh: "教育基金", category: "community" },
  { en: "tax-free", zh: "免税的", category: "community" },
  { en: "advantage", zh: "优势", category: "community" },
  { en: "generations", zh: "代（复数）", category: "community" },
  { en: "covered", zh: "有保障的", category: "community" },
  { en: "picture", zh: "想象", category: "community" },
  { en: "within reach", zh: "触手可及", category: "community" },
  { en: "far off", zh: "遥远的", category: "community" },
  { en: "annual review", zh: "年度回顾", category: "community" },
  { en: "motivating", zh: "有激励作用的", category: "community" },
  { en: "building", zh: "打造，构建", category: "community" }
);
