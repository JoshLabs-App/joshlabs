// 内容数据层：第四十三章，紧接第四十二章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter42.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：受祖母去世的触动，加上现在有了孩子和小生意，两人决定立遗嘱。
// 全新词汇领域：遗嘱条款/监护人指定/遗产分配/律师咨询。

GAME_CONTENT.scenes.push(
  {
    id: "a-difficult-conversation",
    transition: { en: "After everything this year, they realize it's time to make a will.", zh: "经历了今年这一切后，他们意识到该立遗嘱了。" },
    title: "A Difficult Conversation",
    subtitle: "家里 · 一次艰难的对话",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We really should have a will, especially now.", zh: "我们真的应该立一份遗嘱，尤其是现在。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, it's overdue at this point.", zh: "你说得对，这事早就该做了。", correct: true, xp: 10 },
          { text: "You're wrong, wills are only for old people.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, it's overdue at this point.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's not an easy topic, but it matters a lot.", zh: "这不是个轻松的话题，但它非常重要。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It does, especially with a child depending on us.", zh: "确实如此，尤其是我们的孩子还要靠我们。", correct: true, xp: 10 },
          { text: "It doesn't, this topic never really matters.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It does, especially with a child depending on us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book a meeting with an estate lawyer.", zh: "我们来约一位遗产律师谈谈吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that sometime this week.", zh: "我们这周就找时间约吧。", correct: true, xp: 10 },
          { text: "Let's just put this off forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that sometime this week.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-lawyer",
    transition: { en: "They sit down with an estate lawyer for the first time.", zh: "他们第一次和一位遗产律师坐下来谈。" },
    title: "Meeting the Lawyer",
    subtitle: "律师事务所 · 首次咨询",
    avatar: "⚖️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you have any assets we should know about?", zh: "你们有什么资产是我们应该知道的吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, our house and a small business.", zh: "有的，我们的房子和一门小生意。", correct: true, xp: 10 },
          { text: "No, we own absolutely nothing at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, our house and a small business.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you thought about who would raise your child?", zh: "你们考虑过谁来抚养你们的孩子吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've actually talked about that quite a bit.", zh: "我们其实已经聊过不少这个话题了。", correct: true, xp: 10 },
          { text: "We've never once considered that question.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've actually talked about that quite a bit.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is one of the most important decisions in a will.", zh: "这是遗嘱中最重要的决定之一。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We understand, and we've already decided.", zh: "我们理解，而且我们已经决定好了。", correct: true, xp: 10 },
          { text: "We understand, though we'd rather skip that part.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We understand, and we've already decided.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-guardian",
    transition: { en: "They discuss who should raise their child if anything ever happened.", zh: "他们讨论万一发生不测，谁来抚养他们的孩子。" },
    title: "Choosing a Guardian",
    subtitle: "家里 · 指定监护人",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Who do you trust most to raise our child?", zh: "你最信任谁来抚养我们的孩子？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Honestly, I trust my sister the most.", zh: "说实话，我最信任我姐姐。", correct: true, xp: 10 },
          { text: "I don't trust anyone with that at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答理由 → Honestly, I trust my sister the most.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "She's more patient than anyone else in our family.", zh: "她比我们家里其他任何人都更有耐心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "She really is, and she loves kids too.", zh: "确实如此，而且她也很喜欢小孩。", correct: true, xp: 10 },
          { text: "She really isn't, she has no patience at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → She really is, and she loves kids too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we chose her, would you feel completely at peace?", zh: "如果我们选她，你会感到完全放心吗？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we chose her, I'd feel totally at peace.", zh: "如果选她，我会觉得完全放心。", correct: true, xp: 10 },
          { text: "If we chose her, I'd still feel worried.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If we chose her, I'd feel totally at peace.",
        next: null
      }
    }
  },
  {
    id: "dividing-assets",
    transition: { en: "The lawyer walks them through how to divide their assets.", zh: "律师引导他们了解如何分配资产。" },
    title: "Dividing Assets",
    subtitle: "律师事务所 · 分配资产",
    avatar: "📄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should everything go to your child eventually?", zh: "所有东西最终都应该留给你们的孩子吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, with some set aside for family too.", zh: "是的，也会留一些给家人。", correct: true, xp: 10 },
          { text: "No, our child shouldn't inherit anything at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, with some set aside for family too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What about the business, if something happened to both of you?", zh: "如果你们俩都出了意外，生意该怎么处理？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We'd want it passed to a trusted family member.", zh: "我们希望把它交给一位信得过的家人。", correct: true, xp: 10 },
          { text: "The business doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答安排 → We'd want it passed to a trusted family member.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This plan is clearer than what most couples come in with.", zh: "这个方案比大多数来这儿的夫妻都要清晰。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, we tried to think it through carefully.", zh: "谢谢，我们尽量把它考虑周全了。", correct: true, xp: 10 },
          { text: "Thank you, though we barely thought about it at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, we tried to think it through carefully.",
        next: null
      }
    }
  },
  {
    id: "writing-personal-wishes",
    transition: { en: "They add a few personal wishes beyond just the legal details.", zh: "除了法律细节，他们还加入了一些个人心愿。" },
    title: "Writing Personal Wishes",
    subtitle: "律师事务所 · 写下心愿",
    avatar: "💌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you want to include a letter for your child?", zh: "你们想为孩子附上一封信吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I've actually already started writing one.", zh: "想的，我其实已经开始写了。", correct: true, xp: 10 },
          { text: "No, letters seem completely unnecessary to us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I've actually already started writing one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What would you want them to know most?", zh: "你最想让他们知道什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "That they were loved more than they could ever know.", zh: "他们被爱着，爱到超乎他们的想象。", correct: true, xp: 10 },
          { text: "I don't want them to know anything at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答想法 → That they were loved more than they could ever know.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Writing this down makes it feel more real, doesn't it?", zh: "把这些写下来让一切感觉更真实了，不是吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It does, in a heavy but important way.", zh: "确实如此，是一种沉重但重要的真实感。", correct: true, xp: 10 },
          { text: "It doesn't, this still feels distant to me.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It does, in a heavy but important way.",
        next: null
      }
    }
  },
  {
    id: "signing-the-documents",
    transition: { en: "After weeks of planning, it's finally time to sign the paperwork.", zh: "经过几周的筹划，终于到了签署文件的时候。" },
    title: "Signing the Documents",
    subtitle: "律师事务所 · 签署文件",
    avatar: "✍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please sign here, and initial each page after that.", zh: "请在这里签名，之后每一页都要签姓名首字母。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, just show me where to start.", zh: "好的，告诉我从哪儿开始就行。", correct: true, xp: 10 },
          { text: "Sorry, signing documents isn't something I do.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, just show me where to start.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This feels heavier than I expected it to feel.", zh: "这种感觉比我预想的要沉重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but it's also a relief in a way.", zh: "确实如此，但某种程度上也是一种解脱。", correct: true, xp: 10 },
          { text: "It doesn't, this feels completely meaningless.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but it's also a relief in a way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Congratulations, your affairs are now officially in order.", zh: "恭喜你们，你们的事务现在正式安排妥当了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, that's a huge weight off our shoulders.", zh: "谢谢，这真的让我们卸下了一块大石头。", correct: true, xp: 10 },
          { text: "Thank you, though it doesn't change anything for us.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, that's a huge weight off our shoulders.",
        next: null
      }
    }
  },
  {
    id: "telling-the-guardian",
    transition: { en: "They call Emma's sister to share the news and ask her officially.", zh: "他们打电话给Emma的姐姐，正式告诉她这个决定。" },
    title: "Telling the Guardian",
    subtitle: "电话 · 告知监护人",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We'd like to ask you something important.", zh: "我们想问你一件重要的事。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Of course, anything, I'm listening.", zh: "当然，什么都可以，我在听。", correct: true, xp: 10 },
          { text: "Actually, I'd rather not hear it right now.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Of course, anything, I'm listening.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We'd be honored if you'd be our child's guardian.", zh: "如果你愿意做我们孩子的监护人，我们会非常荣幸。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If you're asking, of course I'll say yes.", zh: "如果是你们问，我当然会答应。", correct: true, xp: 10 },
          { text: "If you're asking, I'll have to say no.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If you're asking, of course I'll say yes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you, that means more to us than you know.", zh: "谢谢你，这对我们的意义超乎你的想象。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, I love that child already.", zh: "当然了，我已经爱上这个孩子了。", correct: true, xp: 10 },
          { text: "Of course, though I hope it never comes to that.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, I love that child already.",
        next: null
      }
    }
  },
  {
    id: "storing-the-documents-safely",
    transition: { en: "That evening, they decide where to safely keep the paperwork.", zh: "那天晚上，他们商量该把文件安全地存放在哪里。" },
    title: "Storing the Documents Safely",
    subtitle: "家里 · 妥善保存文件",
    avatar: "🗄️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where should we keep the original copies?", zh: "我们应该把原件放在哪里？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Somewhere fireproof, like a safety deposit box.", zh: "找个防火的地方，比如保险箱。", correct: true, xp: 10 },
          { text: "It doesn't matter, we can just leave them anywhere.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Somewhere fireproof, like a safety deposit box.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your sister should know exactly where to find them.", zh: "你姐姐应该确切知道去哪儿找到这些文件。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, I'll tell her the location today.", zh: "你说得对，我今天就告诉她地点。", correct: true, xp: 10 },
          { text: "You're wrong, she doesn't need to know anything.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, I'll tell her the location today.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should review this again every few years.", zh: "我们应该每隔几年就再检查一次。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, things change, and this should too.", zh: "同意，情况会变化，这份文件也应该随之更新。", correct: true, xp: 10 },
          { text: "Agreed, though we'll probably just forget about it.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, things change, and this should too.",
        next: null
      }
    }
  },
  {
    id: "a-strange-sense-of-peace",
    transition: { en: "That night, an unexpected calm settles over them.", zh: "那天晚上，一种意想不到的平静笼罩了他们。" },
    title: "A Strange Sense of Peace",
    subtitle: "家里 · 意外的平静",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I feel more at ease than I have in weeks.", zh: "我感觉比这几周以来任何时候都更轻松。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I feel that too, it's a strange kind of relief.", zh: "我也有同感，这是一种奇怪的解脱感。", correct: true, xp: 10 },
          { text: "I don't feel any different, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I feel that too, it's a strange kind of relief.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've protected our family, no matter what happens.", zh: "无论发生什么，我们都保护好了我们的家人。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what happens, that's what matters most.", zh: "不管发生什么，这才是最重要的。", correct: true, xp: 10 },
          { text: "No matter what happens, nothing feels protected.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what happens, that's what matters most.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Facing this together made it so much easier.", zh: "一起面对这件事让一切轻松了许多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I couldn't have done it alone.", zh: "确实如此，我一个人根本做不到。", correct: true, xp: 10 },
          { text: "It really didn't, this was harder together.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I couldn't have done it alone.",
        next: null
      }
    }
  },
  {
    id: "looking-forward",
    transition: { en: "With this behind them, they turn their attention back to everyday life.", zh: "把这件事放下之后，他们把注意力重新放回日常生活。" },
    title: "Looking Forward",
    subtitle: "家里 · 展望未来",
    avatar: "🌅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This year taught us so much about what really matters.", zh: "这一年教会了我们许多关于什么才真正重要的道理。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really did, more than any year before it.", zh: "确实如此，比之前任何一年都要多。", correct: true, xp: 10 },
          { text: "It really didn't, this year taught us nothing.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It really did, more than any year before it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel about everything still ahead of us?", zh: "对于前方仍未到来的一切，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Hopeful, and grateful for everything we've built.", zh: "充满希望，也感激我们一路建立的一切。", correct: true, xp: 10 },
          { text: "I feel nothing about the future at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → Hopeful, and grateful for everything we've built.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever comes next, we'll face it the way we always have — together.", zh: "无论接下来发生什么，我们都会像一直以来那样一起面对。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever comes next, together, always.", zh: "无论接下来发生什么，我们都在一起，永远如此。", correct: true, xp: 10 },
          { text: "Whatever comes next, we'll probably face it apart.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever comes next, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "will", zh: "遗嘱", category: "community" },
  { en: "overdue", zh: "早该做的", category: "community" },
  { en: "topic", zh: "话题", category: "community" },
  { en: "depending on", zh: "依靠", category: "community" },
  { en: "estate lawyer", zh: "遗产律师", category: "community" },
  { en: "put off", zh: "拖延", category: "community" },
  { en: "assets", zh: "资产（复数）", category: "community" },
  { en: "raise", zh: "抚养", category: "community" },
  { en: "important decisions", zh: "重要决定", category: "community" },
  { en: "guardian", zh: "监护人", category: "community" },
  { en: "trust", zh: "信任", category: "community" },
  { en: "patient", zh: "有耐心的", category: "community" },
  { en: "at peace", zh: "感到放心的", category: "community" },
  { en: "divide", zh: "分配", category: "community" },
  { en: "set aside", zh: "留出", category: "community" },
  { en: "inherit", zh: "继承", category: "community" },
  { en: "passed to", zh: "传给", category: "community" },
  { en: "trusted", zh: "值得信赖的", category: "community" },
  { en: "family member", zh: "家庭成员", category: "community" },
  { en: "clearer", zh: "更清晰的（clear 比较级）", category: "community" },
  { en: "think it through", zh: "考虑周全", category: "community" },
  { en: "personal wishes", zh: "个人心愿", category: "community" },
  { en: "letter", zh: "信", category: "community" },
  { en: "loved", zh: "被爱着", category: "community" },
  { en: "heavy", zh: "沉重的", category: "community" },
  { en: "distant", zh: "遥远的，疏远的", category: "community" },
  { en: "paperwork", zh: "文件工作", category: "community" },
  { en: "initial", zh: "签姓名首字母", category: "community" },
  { en: "heavier", zh: "更沉重的（heavy 比较级）", category: "community" },
  { en: "relief", zh: "解脱，宽慰", category: "community" },
  { en: "affairs", zh: "事务", category: "community" },
  { en: "in order", zh: "妥善安排的", category: "community" },
  { en: "weight off our shoulders", zh: "卸下一块大石头", category: "community" },
  { en: "honored", zh: "感到荣幸的", category: "community" },
  { en: "fireproof", zh: "防火的", category: "community" },
  { en: "safety deposit box", zh: "保险箱", category: "community" },
  { en: "location", zh: "位置", category: "community" },
  { en: "review", zh: "重新检查", category: "community" },
  { en: "at ease", zh: "轻松的，安心的", category: "community" },
  { en: "protected", zh: "保护好了的", category: "community" },
  { en: "facing", zh: "面对", category: "community" },
  { en: "hopeful", zh: "充满希望的", category: "community" }
);
