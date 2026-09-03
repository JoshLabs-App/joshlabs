// 内容数据层：第三十一章，紧接第三十章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter30.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：宝宝出生前，主角在职场迎来一次晋升机会。全新词汇领域：绩效评估/
// 晋升面谈/团队交接/加薪谈判。

GAME_CONTENT.scenes.push(
  {
    id: "the-performance-review",
    transition: { en: "At work, the manager calls him in for an annual review.", zh: "在公司，经理叫他进去做年度绩效评估。" },
    title: "The Performance Review",
    subtitle: "公司 · 绩效评估",
    avatar: "👔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your work this year has been outstanding.", zh: "你今年的工作表现非常出色。" },
        skill: "workplace",
        grammarTag: "present-perfect",
        choices: [
          { text: "Thank you, I've really enjoyed the challenges.", zh: "谢谢，我真的很享受这些挑战。", correct: true, xp: 10 },
          { text: "Thank you, I've never enjoyed any of this.", correct: false }
        ],
        hintOnWrong: "现在完成时 → Thank you, I've really enjoyed the challenges.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel about taking on more responsibility?", zh: "你对承担更多责任有什么想法？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "I feel ready to take that step now.", zh: "我觉得自己已经准备好迈出这一步了。", correct: true, xp: 10 },
          { text: "I feel like responsibility isn't for me.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → I feel ready to take that step now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'd like to consider you for a promotion.", zh: "我们想考虑给你升职。" },
        skill: "workplace",
        grammarTag: "will-future",
        choices: [
          { text: "That would mean a great deal to me.", zh: "这对我来说意义重大。", correct: true, xp: 10 },
          { text: "That would mean nothing to me at all.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That would mean a great deal to me.",
        next: null
      }
    }
  },
  {
    id: "sharing-the-news",
    transition: { en: "He calls his wife on his lunch break to share the news.", zh: "午休时他打电话给妻子分享这个消息。" },
    title: "Sharing the News",
    subtitle: "公司 · 午休时分享",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You'll never guess what happened at work today.", zh: "你绝对猜不到今天公司发生了什么事。" },
        skill: "workplace",
        grammarTag: "will-future",
        choices: [
          { text: "I won't guess, just tell me right now.", zh: "我不猜了，快告诉我吧。", correct: true, xp: 10 },
          { text: "I already know exactly what happened.", correct: false }
        ],
        hintOnWrong: "回应未来时表达 → I won't guess, just tell me right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're considering me for a promotion!", zh: "他们在考虑给我升职！" },
        skill: "workplace",
        grammarTag: "present-continuous",
        choices: [
          { text: "That's amazing, I'm so proud of you!", zh: "太棒了，我为你感到骄傲！", correct: true, xp: 10 },
          { text: "That's boring, I don't really care.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → That's amazing, I'm so proud of you!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This couldn't have come at a better time.", zh: "这个消息来得真是太是时候了。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "It really couldn't, with the baby coming soon.", zh: "确实太是时候了，宝宝也快出生了。", correct: true, xp: 10 },
          { text: "It really could, the timing feels terrible.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really couldn't, with the baby coming soon.",
        next: null
      }
    }
  },
  {
    id: "the-interview-panel",
    transition: { en: "A short panel interview is scheduled to confirm the promotion.", zh: "公司安排了一场简短的面试来确认这次晋升。" },
    title: "The Interview Panel",
    subtitle: "公司 · 晋升面试",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why do you think you're ready for this role?", zh: "你为什么认为自己已经准备好胜任这个职位？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "I've built strong relationships across every team.", zh: "我在各个团队之间都建立了牢固的关系。", correct: true, xp: 10 },
          { text: "I've never actually worked with any teams.", correct: false }
        ],
        hintOnWrong: "wh-问题回答理由 → I've built strong relationships across every team.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you describe a time you solved a difficult problem?", zh: "你能描述一次你解决难题的经历吗？" },
        skill: "workplace",
        grammarTag: "can-modal",
        choices: [
          { text: "I can think of a project from last spring.", zh: "我能想到去年春天的一个项目。", correct: true, xp: 10 },
          { text: "I can't remember solving any problems ever.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can think of a project from last spring.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That answer was clearer than I expected.", zh: "这个回答比我预期的更清晰。" },
        skill: "workplace",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, I prepared quite a bit for this.", zh: "谢谢，我为这个准备了不少。", correct: true, xp: 10 },
          { text: "Thank you, though I didn't prepare at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, I prepared quite a bit for this.",
        next: null
      }
    }
  },
  {
    id: "the-offer",
    transition: { en: "A week later, the manager brings him a formal offer.", zh: "一周后，经理带来了一份正式的晋升方案。" },
    title: "The Offer",
    subtitle: "公司 · 正式方案",
    avatar: "📄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The role comes with a fifteen percent raise.", zh: "这个新职位会加薪百分之十五。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "That's a generous raise, thank you so much.", zh: "这加薪很慷慨，非常感谢。", correct: true, xp: 10 },
          { text: "That's an insulting raise, I expected more.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a generous raise, thank you so much.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have any questions about the new title?", zh: "关于新的职位头衔你有什么问题吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I'm curious about the reporting structure.", zh: "有的，我想了解一下汇报结构。", correct: true, xp: 10 },
          { text: "No, titles have never mattered to me.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I'm curious about the reporting structure.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you accept, you'll start the new role in June.", zh: "如果你接受，六月就会开始新职位的工作。" },
        skill: "workplace",
        grammarTag: "conditional",
        choices: [
          { text: "If that's the timeline, I happily accept.", zh: "如果是这个时间安排，我很乐意接受。", correct: true, xp: 10 },
          { text: "If that's the timeline, I'll have to decline.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's the timeline, I happily accept.",
        next: null
      }
    }
  },
  {
    id: "negotiating-further",
    transition: { en: "He decides to ask for a bit more before signing.", zh: "在签字前，他决定再多争取一些条件。" },
    title: "Negotiating Further",
    subtitle: "公司 · 进一步谈判",
    avatar: "🤝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is there anything else you'd like to discuss?", zh: "还有什么你想讨论的吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, could we talk about extra vacation days?", zh: "有的，我们能聊聊额外的假期吗？", correct: true, xp: 10 },
          { text: "No, everything sounds perfect exactly as is.", correct: false }
        ],
        hintOnWrong: "肯定回答提要求 → Yes, could we talk about extra vacation days?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We could offer you an extra week off.", zh: "我们可以给你多一周的假期。" },
        skill: "workplace",
        grammarTag: "conditional",
        choices: [
          { text: "If that's possible, that would be wonderful.", zh: "如果可以的话，那就太好了。", correct: true, xp: 10 },
          { text: "If that's possible, I'd rather have less time off.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's possible, that would be wonderful.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's finalize everything by the end of the week.", zh: "我们本周结束前把一切都定下来吧。" },
        skill: "workplace",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds great, let's finalize it then.", zh: "好的，那我们就那时定下来吧。", correct: true, xp: 10 },
          { text: "Let's just leave everything undecided for now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds great, let's finalize it then.",
        next: null
      }
    }
  },
  {
    id: "telling-the-team",
    transition: { en: "He shares the news with his current teammates.", zh: "他把这个消息告诉了现在的团队成员。" },
    title: "Telling the Team",
    subtitle: "公司 · 告诉团队",
    avatar: "👥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We heard you're moving to a new role.", zh: "我们听说你要调到一个新职位了。" },
        skill: "workplace",
        grammarTag: "past-simple",
        choices: [
          { text: "I heard right, it's official as of today.", zh: "你们听到的没错，今天正式确定了。", correct: true, xp: 10 },
          { text: "You heard wrong, nothing has changed for me.", correct: false }
        ],
        hintOnWrong: "过去时回应 → I heard right, it's official as of today.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This team is going to miss you a lot.", zh: "这个团队会很想念你的。" },
        skill: "workplace",
        grammarTag: "will-future",
        choices: [
          { text: "I'll miss you all too, more than you know.", zh: "我也会很想念你们，比你们想象的还要多。", correct: true, xp: 10 },
          { text: "I won't miss any of you, honestly.", correct: false }
        ],
        hintOnWrong: "回应未来时 → I'll miss you all too, more than you know.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you all for everything over these years.", zh: "谢谢你们这些年来的一切。" },
        skill: "workplace",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, it's been an honor working together.", zh: "谢谢，和大家一起共事是我的荣幸。", correct: true, xp: 10 },
          { text: "Thank you, though this team taught me nothing.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you, it's been an honor working together.",
        next: null
      }
    }
  },
  {
    id: "handing-off-projects",
    transition: { en: "Before the transition, he documents his ongoing projects.", zh: "在交接之前，他把手头的项目都记录了下来。" },
    title: "Handing Off Projects",
    subtitle: "公司 · 交接项目",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you written up notes for each project?", zh: "你有没有给每个项目写好交接笔记？" },
        skill: "workplace",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've written detailed notes for most of them.", zh: "我给大部分项目都写了详细的笔记。", correct: true, xp: 10 },
          { text: "I've never written a single note in my life.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've written detailed notes for most of them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Who's taking over your client accounts?", zh: "谁来接手你的客户账户？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "A colleague from another team is taking them.", zh: "另一个团队的同事会接手它们。", correct: true, xp: 10 },
          { text: "Nobody, those accounts will just disappear.", correct: false }
        ],
        hintOnWrong: "wh-问题回答人选 → A colleague from another team is taking them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please make sure the handoff meeting is well documented.", zh: "请确保交接会议有详细的记录。" },
        skill: "workplace",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, I'll take detailed notes myself.", zh: "当然，我自己会做详细的记录。", correct: true, xp: 10 },
          { text: "Sorry, documenting meetings isn't really my thing.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, I'll take detailed notes myself.",
        next: null
      }
    }
  },
  {
    id: "the-first-day-in-the-new-role",
    transition: { en: "His first day in the new role begins with a team introduction.", zh: "新职位的第一天从团队介绍开始。" },
    title: "The First Day in the New Role",
    subtitle: "公司 · 新职位第一天",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome aboard, we're excited to have you leading us.", zh: "欢迎加入，我们很期待由你来带领我们。" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, I'm excited to work with all of you.", zh: "谢谢，我也很期待和大家一起共事。", correct: true, xp: 10 },
          { text: "Thank you, though I'd rather not lead anyone.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, I'm excited to work with all of you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What changes are you hoping to make first?", zh: "你希望首先做出什么改变？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "I'd like to understand the team before changing anything.", zh: "我想先了解团队，再考虑做出改变。", correct: true, xp: 10 },
          { text: "I'd like to change absolutely everything today.", correct: false }
        ],
        hintOnWrong: "wh-问题回答计划 → I'd like to understand the team before changing anything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This new chapter feels a little scary, doesn't it?", zh: "这个新篇章感觉有点吓人，不是吗？" },
        skill: "workplace",
        grammarTag: "statement",
        choices: [
          { text: "It does, but I'm ready for the challenge.", zh: "确实是，但我已经准备好迎接这个挑战了。", correct: true, xp: 10 },
          { text: "It doesn't, nothing about this feels new at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It does, but I'm ready for the challenge.",
        next: null
      }
    }
  },
  {
    id: "celebrating-at-home",
    transition: { en: "That night, the couple celebrates the promotion at home.", zh: "那天晚上，夫妻俩在家庆祝这次晋升。" },
    title: "Celebrating at Home",
    subtitle: "家里 · 庆祝晋升",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm so proud of everything you've accomplished.", zh: "我为你所取得的一切感到骄傲。" },
        skill: "workplace",
        grammarTag: "present-perfect",
        choices: [
          { text: "I couldn't have done it without your support.", zh: "没有你的支持我做不到这些。", correct: true, xp: 10 },
          { text: "I've accomplished absolutely nothing this whole time.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I couldn't have done it without your support.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How does the new title feel so far?", zh: "到目前为止，这个新头衔感觉怎么样？" },
        skill: "workplace",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels surreal, honestly, in the best way.", zh: "说实话，感觉有点不真实，但是是最好的那种。", correct: true, xp: 10 },
          { text: "It doesn't feel any different at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → It feels surreal, honestly, in the best way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's toast to this new chapter of our lives.", zh: "我们为人生的这个新篇章干杯吧。" },
        skill: "workplace",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's toast to us, and to everything ahead.", zh: "我们为彼此干杯，也为前方的一切干杯。", correct: true, xp: 10 },
          { text: "Let's skip the toast, it feels unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's toast to us, and to everything ahead.",
        next: null
      }
    }
  },
  {
    id: "balancing-it-all",
    transition: { en: "With the promotion settled, they talk about balancing work and the baby.", zh: "晋升尘埃落定后，他们聊起如何平衡工作和宝宝。" },
    title: "Balancing It All",
    subtitle: "家里 · 平衡生活",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you worried the new role will take too much time?", zh: "你担心新职位会占用太多时间吗？" },
        skill: "workplace",
        grammarTag: "do-question",
        choices: [
          { text: "A little, but I'll set clear boundaries.", zh: "有一点，但我会设定清晰的边界。", correct: true, xp: 10 },
          { text: "Not at all, work is the only thing that matters.", correct: false }
        ],
        hintOnWrong: "肯定回答 → A little, but I'll set clear boundaries.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we plan carefully, we can manage both.", zh: "如果我们做好规划，两边都能兼顾。" },
        skill: "workplace",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's plan it out together.", zh: "如果真是这样，我们一起来规划吧。", correct: true, xp: 10 },
          { text: "If that's true, let's not bother planning at all.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, let's plan it out together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what, our family comes first.", zh: "无论如何，我们的家庭永远是第一位的。" },
        skill: "workplace",
        grammarTag: "concession",
        choices: [
          { text: "Always, no matter what happens at work.", zh: "永远如此，无论工作上发生什么。", correct: true, xp: 10 },
          { text: "Not always, work will always come first.", correct: false }
        ],
        hintOnWrong: "让步句 → Always, no matter what happens at work.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "performance review", zh: "绩效评估", category: "workplace" },
  { en: "annual", zh: "年度的", category: "workplace" },
  { en: "outstanding", zh: "出色的", category: "workplace" },
  { en: "challenges", zh: "挑战（复数）", category: "workplace" },
  { en: "taking on", zh: "承担", category: "workplace" },
  { en: "responsibility", zh: "责任", category: "workplace" },
  { en: "ready", zh: "准备好的", category: "workplace" },
  { en: "step", zh: "一步，阶段", category: "workplace" },
  { en: "consider", zh: "考虑", category: "workplace" },
  { en: "promotion", zh: "晋升", category: "workplace" },
  { en: "mean a great deal", zh: "意义重大", category: "workplace" },
  { en: "lunch break", zh: "午休", category: "workplace" },
  { en: "guess", zh: "猜", category: "workplace" },
  { en: "considering", zh: "考虑中", category: "workplace" },
  { en: "proud", zh: "骄傲的", category: "workplace" },
  { en: "timing", zh: "时机", category: "workplace" },
  { en: "panel", zh: "面试小组", category: "workplace" },
  { en: "role", zh: "职位，角色", category: "workplace" },
  { en: "relationships", zh: "关系", category: "workplace" },
  { en: "describe", zh: "描述", category: "workplace" },
  { en: "difficult", zh: "困难的", category: "workplace" },
  { en: "clearer", zh: "更清晰的（clear 比较级）", category: "workplace" },
  { en: "prepared", zh: "准备了", category: "workplace" },
  { en: "formal", zh: "正式的", category: "workplace" },
  { en: "raise", zh: "加薪", category: "workplace" },
  { en: "generous", zh: "慷慨的", category: "workplace" },
  { en: "insulting", zh: "侮辱性的", category: "workplace" },
  { en: "title", zh: "职位头衔", category: "workplace" },
  { en: "reporting structure", zh: "汇报结构", category: "workplace" },
  { en: "accept", zh: "接受", category: "workplace" },
  { en: "timeline", zh: "时间安排", category: "workplace" },
  { en: "happily", zh: "乐意地", category: "workplace" },
  { en: "decline", zh: "拒绝", category: "workplace" },
  { en: "negotiating", zh: "谈判", category: "workplace" },
  { en: "discuss", zh: "讨论", category: "workplace" },
  { en: "vacation days", zh: "假期天数", category: "workplace" },
  { en: "offer", zh: "提供，报价", category: "workplace" },
  { en: "extra", zh: "额外的", category: "workplace" },
  { en: "wonderful", zh: "美妙的", category: "workplace" },
  { en: "finalize", zh: "敲定", category: "workplace" },
  { en: "undecided", zh: "未决定的", category: "workplace" },
  { en: "moving to", zh: "调到", category: "workplace" },
  { en: "official", zh: "正式的", category: "workplace" },
  { en: "miss", zh: "想念", category: "workplace" },
  { en: "honor", zh: "荣幸", category: "workplace" },
  { en: "handing off", zh: "交接", category: "workplace" },
  { en: "documents", zh: "记录（动词）", category: "workplace" },
  { en: "ongoing", zh: "进行中的", category: "workplace" },
  { en: "written up", zh: "写好了", category: "workplace" },
  { en: "detailed", zh: "详细的", category: "workplace" },
  { en: "colleague", zh: "同事", category: "workplace" },
  { en: "client accounts", zh: "客户账户", category: "workplace" },
  { en: "handoff meeting", zh: "交接会议", category: "workplace" },
  { en: "documented", zh: "记录下来的", category: "workplace" },
  { en: "aboard", zh: "加入（团队等）", category: "workplace" },
  { en: "leading", zh: "带领", category: "workplace" },
  { en: "chapter", zh: "篇章，阶段", category: "workplace" },
  { en: "scary", zh: "吓人的", category: "workplace" },
  { en: "accomplished", zh: "取得，完成的", category: "workplace" },
  { en: "support", zh: "支持", category: "workplace" },
  { en: "surreal", zh: "不真实的", category: "workplace" },
  { en: "toast", zh: "干杯", category: "workplace" },
  { en: "ahead", zh: "前方的", category: "workplace" },
  { en: "worried", zh: "担心的", category: "workplace" },
  { en: "boundaries", zh: "边界", category: "workplace" },
  { en: "manage", zh: "兼顾，管理", category: "workplace" },
  { en: "comes first", zh: "是第一位的", category: "workplace" }
);
