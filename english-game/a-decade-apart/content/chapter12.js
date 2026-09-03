// 内容数据层：第十二章，紧接第十一章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter11.js 之后、audio-manifest.js 之前加载。
// L3（第8-12章，B1）最后一章。
//
// Tier: L3（不引入新grammarTag——present-perfect/comparative/conditional/passive
// 四个L3新点已经在第8-11章全部引入完毕，本章全部复现巩固）。
//
// 剧情：**不是整部故事的收尾**（2026-09-03 Josh 拍板：目标从B1改成B2，
// 见 Story roadmap 里的说明）——本章是L1-L3阶段的情感高点：大家一起办了
// 一场聚会，感谢这一路帮助过的人，并埋下一颗新种子（把老房子变成能帮助
// 新移民的社区空间）留给L4（B2）继续写下去。真正的收尾留给B2最后一章。

GAME_CONTENT.scenes.push(
  {
    id: "planning-the-gathering",
    transition: { en: "A few days later, an idea starts to form.", zh: "几天后，一个想法渐渐成形。" },
    title: "Planning a Gathering",
    subtitle: "书店里 · 一个新想法",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So many people have helped us this year. What if we thanked them all together?", zh: "今年这么多人帮过我们。要不我们一起感谢他们？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "So many people have helped us, it's true.", zh: "确实有好多人帮过我们。", correct: true, xp: 10 },
          { text: "I don't think anyone helped much.", correct: false }
        ],
        hintOnWrong: "用现在完成时附和 → So many people have helped us, it's true.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Let's throw a small gathering, right here at the shop.", zh: "我们在店里办个小聚会吧。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "I love that idea, let's do it.", zh: "我超喜欢这个主意，就这么办。", correct: true, xp: 10 },
          { text: "That sounds like too much work.", correct: false }
        ],
        hintOnWrong: "接受提议 → I love that idea, let's do it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we plan it for Saturday, everyone should be free.", zh: "如果定在周六，大家应该都有空。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If it's Saturday, I'll invite everyone today.", zh: "如果是周六，我今天就去邀请大家。", correct: true, xp: 10 },
          { text: "If it's Saturday, I have other plans.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it's Saturday, I'll invite everyone today.",
        next: null
      }
    }
  },
  {
    id: "inviting-everyone",
    title: "Inviting Everyone",
    subtitle: "多伦多各处 · 一一发出邀请",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A gathering? Of course I'll come.", zh: "聚会？我当然会去。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Wonderful, I'll see you Saturday.", zh: "太好了，周六见。", correct: true, xp: 10 },
          { text: "I'll think about it, maybe.", correct: false }
        ],
        hintOnWrong: "用 will 确认 → Wonderful, I'll see you Saturday.",
        next: "n2"
      },
      n2: {
        avatar: "👴",
        npcLine: { en: "Can I bring my famous tea?", zh: "我能带上我那有名的茶吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, please! Everyone would love that.", zh: "太好了！大家一定会喜欢的。", correct: true, xp: 10 },
          { text: "No tea, please, thanks.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Yes, please! Everyone would love that.",
        next: "n3"
      },
      n3: {
        avatar: "🧓",
        npcLine: { en: "I've never been invited to something like this before.", zh: "我以前从没被邀请参加过这样的活动。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Well, you're invited now, Mr. Grant.", zh: "那现在你被邀请了，Grant先生。", correct: true, xp: 10 },
          { text: "It's not really a big deal.", correct: false }
        ],
        hintOnWrong: "用现在完成时呼应 → Well, you're invited now, Mr. Grant.",
        next: null
      }
    }
  },
  {
    id: "the-old-house-idea",
    title: "An Idea for the House",
    subtitle: "老房子前 · 一颗新的种子",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've been thinking about that old house.", zh: "我一直在想那栋老房子的事。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been thinking about it too.", zh: "我也一直在想这件事。", correct: true, xp: 10 },
          { text: "I've already forgotten about it.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've been thinking about it too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If the owner ever sells it, we could turn it into something special.", zh: "如果房主以后要卖，我们可以把它变成一个特别的地方。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that happens, I'll help however I can.", zh: "如果真发生了，我会尽我所能帮忙。", correct: true, xp: 10 },
          { text: "If that happens, it's not my problem.", correct: false }
        ],
        hintOnWrong: "用条件句 → If that happens, I'll help however I can.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A place where new families could be welcomed, like we were.", zh: "一个能像当年我们一样，接纳新家庭的地方。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "New families would be so lucky.", zh: "新家庭一定会很幸运的。", correct: true, xp: 10 },
          { text: "New families should find their own way.", correct: false }
        ],
        hintOnWrong: "用被动语态 → New families would be so lucky.",
        next: null
      }
    }
  },
  {
    id: "cooking-together",
    transition: { en: "Saturday morning, everyone pitches in to cook.", zh: "周六早上，大家一起动手准备食物。" },
    title: "Cooking Together",
    subtitle: "书店后院 · 一起准备聚会",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you chop these vegetables?", zh: "你能切一下这些蔬菜吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can do that.", zh: "没问题，我能做。", correct: true, xp: 10 },
          { text: "I've never chopped anything.", correct: false }
        ],
        hintOnWrong: "用 can 表示能力 → Sure, I can do that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This kitchen is smaller than mine, but it's working out fine.", zh: "这厨房比我家的小，但用起来还挺顺手的。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Smaller, but full of good energy.", zh: "是小一点，但充满了好气氛。", correct: true, xp: 10 },
          { text: "It's bigger than I expected.", correct: false }
        ],
        hintOnWrong: "用比较级 → Smaller, but full of good energy.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This has been the best morning I've had in ages.", zh: "这是我很久以来最开心的一个早晨了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Mine too, honestly.", zh: "说实话，我也是。", correct: true, xp: 10 },
          { text: "It's been a pretty normal morning.", correct: false }
        ],
        hintOnWrong: "简单附和（陈述句）→ Mine too, honestly.",
        next: null
      }
    }
  },
  {
    id: "the-gathering-begins",
    transition: { en: "By evening, the shop is full of warm light and familiar faces.", zh: "到了傍晚，书店里满是温暖的灯光和熟悉的面孔。" },
    title: "The Gathering Begins",
    subtitle: "书店里 · 大家陆续到齐",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look at everyone. This is more than I hoped for.", zh: "看看大家。这比我期望的还要多。", voice: "emma" },
        skill: "work",
        grammarTag: "comparative",
        choices: [
          { text: "It's more than any of us hoped for.", zh: "这比我们所有人期望的都要多。", correct: true, xp: 10 },
          { text: "It's less than I expected.", correct: false }
        ],
        hintOnWrong: "用比较级 → It's more than any of us hoped for.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we say a few words before we eat?", zh: "我们吃饭前要不要说几句话？", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Yes, let's say a few words first.", zh: "好，我们先说几句吧。", correct: true, xp: 10 },
          { text: "Let's just eat right away.", correct: false }
        ],
        hintOnWrong: "接受提议 → Yes, let's say a few words first.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone, thank you for being part of this story.", zh: "谢谢大家，成为了这个故事的一部分。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Thank you for writing it with us.", zh: "谢谢你和我们一起书写这个故事。", correct: true, xp: 10 },
          { text: "It was just luck, really.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Thank you for writing it with us.",
        next: null
      }
    }
  },
  {
    id: "toasts-and-memories",
    title: "Toasts and Memories",
    subtitle: "书店里 · 敬酒与回忆",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A year ago, none of us knew each other.", zh: "一年前，我们谁都不认识谁。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "And now we can't imagine life without each other.", zh: "而现在，我们已经无法想象没有彼此的生活了。", correct: true, xp: 10 },
          { text: "And it's still a little strange.", correct: false }
        ],
        hintOnWrong: "简单陈述（陈述句）→ And now we can't imagine life without each other.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "So much has changed since that first letter arrived.", zh: "自从第一封信到来，太多事情都变了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "So much has changed, and all of it good.", zh: "变了很多，而且都是好的方向。", correct: true, xp: 10 },
          { text: "Nothing has really changed at all.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → So much has changed, and all of it good.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "To all of you — the best year of my life.", zh: "敬在座各位——这是我这辈子最好的一年。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "The best year of all our lives.", zh: "是我们所有人这辈子最好的一年。", correct: true, xp: 10 },
          { text: "One of many good years, I guess.", correct: false }
        ],
        hintOnWrong: "用最高级 → The best year of all our lives.",
        next: null
      }
    }
  },
  {
    id: "a-letter-for-the-future",
    title: "A Letter for the Future",
    subtitle: "书店里 · 写给未来的一封信",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we write one more letter tonight?", zh: "我们今晚要不要再写一封信？", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Yes, let's write one together.", zh: "好，我们一起写一封吧。", correct: true, xp: 10 },
          { text: "Let's not, we're all tired.", correct: false }
        ],
        hintOnWrong: "接受提议 → Yes, let's write one together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Who should it be written to?", zh: "这封信应该写给谁呢？", voice: "emma" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "It should be written to whoever finds it next.", zh: "应该写给下一个找到它的人。", correct: true, xp: 10 },
          { text: "It shouldn't be written to anyone.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It should be written to whoever finds it next.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Perfect. Let's leave it somewhere it'll be found someday.", zh: "太好了。我们把它留在某个总有一天会被找到的地方吧。", voice: "emma" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "Someday, it'll be found by someone new.", zh: "总有一天，它会被某个新的人发现。", correct: true, xp: 10 },
          { text: "It'll probably just get lost.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Someday, it'll be found by someone new.",
        next: null
      }
    }
  },
  {
    id: "looking-ahead",
    title: "Looking Ahead",
    subtitle: "书店里 · 展望接下来",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If the house ever becomes ours, what should we do with it?", zh: "如果那栋房子以后归我们了，我们该拿它做什么呢？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it becomes ours, we'll open it to everyone.", zh: "如果归我们了，我们会把它开放给大家。", correct: true, xp: 10 },
          { text: "If it becomes ours, we'll sell it.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it becomes ours, we'll open it to everyone.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A place has been needed here for a long time.", zh: "这里其实一直都需要这样一个地方。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "It's exactly what's been needed here.", zh: "这正是这里一直需要的东西。", correct: true, xp: 10 },
          { text: "I don't think it's been needed.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It's exactly what's been needed here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Then it's decided. This is only the beginning.", zh: "那就这么定了。这只是个开始。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Only the beginning, I love that.", zh: "只是个开始，我很喜欢这句话。", correct: true, xp: 10 },
          { text: "I thought this was the end.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Only the beginning, I love that.",
        next: null
      }
    }
  },
  {
    id: "under-the-stars",
    transition: { en: "Later, you and Emma step outside for some quiet air.", zh: "后来，你和Emma走到外面透透气。" },
    title: "Under the Stars",
    subtitle: "书店外 · 安静的片刻",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's been quite a decade, hasn't it?", zh: "这十年真是够精彩的，是吧？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's been the best decade of my life.", zh: "这是我这辈子最好的十年。", correct: true, xp: 10 },
          { text: "It's been a pretty quiet decade.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → It's been the best decade of my life.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If I hadn't waited for you, none of this would exist.", zh: "如果我当初没有等你，这一切都不会存在。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I'm just so glad that you waited.", zh: "我只是很庆幸你等了。", correct: true, xp: 10 },
          { text: "You didn't have to wait, honestly.", correct: false }
        ],
        hintOnWrong: "简单表达感激（陈述句）→ I'm just so glad that you waited.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade apart, and here we finally are.", zh: "分开了十年，我们终于走到了这里。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Here we are, together at last.", zh: "我们终于在一起了。", correct: true, xp: 10 },
          { text: "Here we are, just barely.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Here we are, together at last.",
        next: null
      }
    }
  },
  {
    id: "a-year-in-toronto",
    transition: { en: "You look back at everything the past year has brought.", zh: "你回望着过去这一年带来的一切。" },
    title: "A Year in Toronto",
    subtitle: "书店外 · 回望这一年",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A stranger's kindness, an old promise, ten letters — it's all been connected.", zh: "陌生人的善意、一个古老的承诺、十封信——原来一切都是相连的。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "It really has all been connected.", zh: "确实一切都是相连的。", correct: true, xp: 10 },
          { text: "It's mostly just coincidence.", correct: false }
        ],
        hintOnWrong: "用被动语态呼应 → It really has all been connected.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "And this isn't the end of the story, is it?", zh: "而这还不是故事的结尾，对吧？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "No, it's only the beginning of the next part.", zh: "不，这只是下一段故事的开始。", correct: true, xp: 10 },
          { text: "No, but it should be, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ No, it's only the beginning of the next part.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Then let's keep writing it — one letter, one day, at a time.", zh: "那我们就继续写下去吧——一封信，一天，慢慢来。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's keep writing it, together.", zh: "我们一起继续写下去吧。", correct: true, xp: 10 },
          { text: "Let's see how things go first.", correct: false }
        ],
        hintOnWrong: "接受提议（收尾）→ Let's keep writing it, together.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "So many people have helped us, it's true.", zh: "确实有好多人帮过我们。" },
  { en: "I love that idea, let's do it.", zh: "我超喜欢这个主意，就这么办。" },
  { en: "If it's Saturday, I'll invite everyone today.", zh: "如果是周六，我今天就去邀请大家。" },
  { en: "Wonderful, I'll see you Saturday.", zh: "太好了，周六见。" },
  { en: "Yes, please! Everyone would love that.", zh: "太好了！大家一定会喜欢的。" },
  { en: "Well, you're invited now, Mr. Grant.", zh: "那现在你被邀请了，Grant先生。" },
  { en: "I've been thinking about it too.", zh: "我也一直在想这件事。" },
  { en: "If that happens, I'll help however I can.", zh: "如果真发生了，我会尽我所能帮忙。" },
  { en: "New families would be so lucky.", zh: "新家庭一定会很幸运的。" },
  { en: "Sure, I can do that.", zh: "没问题，我能做。" },
  { en: "Smaller, but full of good energy.", zh: "是小一点，但充满了好气氛。" },
  { en: "Mine too, honestly.", zh: "说实话，我也是。" },
  { en: "It's more than any of us hoped for.", zh: "这比我们所有人期望的都要多。" },
  { en: "Yes, let's say a few words first.", zh: "好，我们先说几句吧。" },
  { en: "Thank you for writing it with us.", zh: "谢谢你和我们一起书写这个故事。" },
  { en: "And now we can't imagine life without each other.", zh: "而现在，我们已经无法想象没有彼此的生活了。" },
  { en: "So much has changed, and all of it good.", zh: "变了很多，而且都是好的方向。" },
  { en: "The best year of all our lives.", zh: "是我们所有人这辈子最好的一年。" },
  { en: "Yes, let's write one together.", zh: "好，我们一起写一封吧。" },
  { en: "It should be written to whoever finds it next.", zh: "应该写给下一个找到它的人。" },
  { en: "Someday, it'll be found by someone new.", zh: "总有一天，它会被某个新的人发现。" },
  { en: "If it becomes ours, we'll open it to everyone.", zh: "如果归我们了，我们会把它开放给大家。" },
  { en: "It's exactly what's been needed here.", zh: "这正是这里一直需要的东西。" },
  { en: "Only the beginning, I love that.", zh: "只是个开始，我很喜欢这句话。" },
  { en: "It's been the best decade of my life.", zh: "这是我这辈子最好的十年。" },
  { en: "I'm just so glad that you waited.", zh: "我只是很庆幸你等了。" },
  { en: "Here we are, together at last.", zh: "我们终于在一起了。" },
  { en: "It really has all been connected.", zh: "确实一切都是相连的。" },
  { en: "No, it's only the beginning of the next part.", zh: "不，这只是下一段故事的开始。" },
  { en: "Let's keep writing it, together.", zh: "我们一起继续写下去吧。" }
);
