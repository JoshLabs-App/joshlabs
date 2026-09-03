// 内容数据层：第二十一章，紧接第二十章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter20.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略提高新词密度，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：拿到永久居民身份后，主角开始认真考虑跟Emma的未来——"十年之约"这条
// 感情线走到求婚这一步。全新词汇领域：戒指/求婚/婚礼筹备，情感分量也是
// 全书最重的几课之一。

GAME_CONTENT.scenes.push(
  {
    id: "thinking-about-forever",
    transition: { en: "That night, you can't stop thinking about the future.", zh: "那天晚上，你满脑子都是未来的事。" },
    title: "Thinking About Forever",
    subtitle: "公寓 · 想着永远",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You've been staring at your phone for an hour. What's up?", zh: "你盯着手机看了一个小时了。怎么了？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been thinking about proposing to Emma.", zh: "我一直在想向Emma求婚这件事。", correct: true, xp: 10 },
          { text: "I've been thinking about nothing at all.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've been thinking about proposing to Emma.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Proposing? That's huge! Are you sure?", zh: "求婚？这可是大事！你确定吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I've never been more sure of anything.", zh: "我从没这么确定过任何事。", correct: true, xp: 10 },
          { text: "I'm not sure about it at all.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ I've never been more sure of anything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade apart, and now you're ready for forever.", zh: "分开了十年，现在你准备好迎接永远了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Ready for forever, exactly.", zh: "正是，准备好迎接永远了。", correct: true, xp: 10 },
          { text: "Not ready for forever, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Ready for forever, exactly.",
        next: null
      }
    }
  },
  {
    id: "asking-advice",
    title: "Asking for Advice",
    subtitle: "Ho太太家 · 请教意见",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How did you know it was the right time to propose, back then?", zh: "您当年是怎么知道求婚的时机到了的？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "How did you know? I'm asking for a reason.", zh: "您是怎么知道的？我这么问是有原因的。", correct: true, xp: 10 },
          { text: "I don't need to know how you knew.", correct: false }
        ],
        hintOnWrong: "用过去时追问 → How did you know? I'm asking for a reason.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You'll know. It's less about timing and more about certainty.", zh: "你会知道的。这与其说是时机，不如说是确定感。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Certainty over timing — that makes sense.", zh: "确定感比时机更重要——这说得通。", correct: true, xp: 10 },
          { text: "Timing over certainty — I disagree completely.", correct: false }
        ],
        hintOnWrong: "用比较级 → Certainty over timing — that makes sense.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever you choose, do it in a way that feels like you.", zh: "不管你选什么方式，都要让它像你自己的风格。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "A way that feels like me — I know exactly what that is.", zh: "像我自己的风格——我很清楚那是什么。", correct: true, xp: 10 },
          { text: "A way that feels like me sounds too hard to plan.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A way that feels like me — I know exactly what that is.",
        next: null
      }
    }
  },
  {
    id: "ring-shopping",
    transition: { en: "The next day, you visit a small jewelry shop.", zh: "第二天，你去了一家小珠宝店。" },
    title: "Ring Shopping",
    subtitle: "珠宝店 · 挑选戒指",
    avatar: "💍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you looking for an engagement ring today?", zh: "您今天是来看订婚戒指的吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm looking for the perfect one.", zh: "是的，我在找最完美的那一枚。", correct: true, xp: 10 },
          { text: "No, I'm just browsing forever.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → Yes, I'm looking for the perfect one.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you know her ring size, or should we guess?", zh: "您知道她的戒指尺寸吗，还是我们得猜？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I do, actually — I checked secretly.", zh: "我知道，其实我偷偷查过了。", correct: true, xp: 10 },
          { text: "I don't, and I've never thought about it.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I do, actually — I checked secretly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This one was made by a local designer. It suits a simple, honest style.", zh: "这一枚是本地设计师做的。适合简约、真诚的风格。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "Made locally? That makes it even more perfect.", zh: "本地做的？那就更完美了。", correct: true, xp: 10 },
          { text: "Made locally? That doesn't matter to me.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Made locally? That makes it even more perfect.",
        next: null
      }
    }
  },
  {
    id: "choosing-the-moment",
    title: "Choosing the Moment",
    subtitle: "书店门口 · 挑选求婚地点",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where are you thinking of doing it?", zh: "你打算在哪儿求婚？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm thinking of doing it at the bookstore.", zh: "我打算在书店求婚。", correct: true, xp: 10 },
          { text: "I'm thinking of doing it at a random bus stop.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → I'm thinking of doing it at the bookstore.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That's where you two really started, isn't it?", zh: "那不就是你们俩真正开始的地方吗？" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "The place where it started is the place to finish it.", zh: "开始的地方，也该是这一步发生的地方。", correct: true, xp: 10 },
          { text: "The place where it started doesn't feel right anymore.", correct: false }
        ],
        hintOnWrong: "用定语从句 → The place where it started is the place to finish it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you do it there, among the letters, it'll mean everything.", zh: "如果你在那儿求婚，在那些信件中间，会意义非凡。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If I do it there, it'll mean everything to both of us.", zh: "如果在那儿求婚，对我们俩都会意义非凡。", correct: true, xp: 10 },
          { text: "If I do it there, it'll mean nothing special.", correct: false }
        ],
        hintOnWrong: "用条件句 → If I do it there, it'll mean everything to both of us.",
        next: null
      }
    }
  },
  {
    id: "nervous-again",
    transition: { en: "Saturday evening, you wait for Emma to close up the shop.", zh: "周六傍晚，你等着Emma关店。" },
    title: "Nervous Again",
    subtitle: "书店里 · 又一次紧张",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You're acting strange tonight. Is everything okay?", zh: "你今晚有点奇怪。一切都还好吗？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Everything's more than okay, actually.", zh: "其实一切都不只是好而已。", correct: true, xp: 10 },
          { text: "Everything's terrible, actually.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Everything's more than okay, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Why are your hands shaking?", zh: "你的手怎么在抖？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "You'll understand in just a moment.", zh: "你马上就会明白的。", correct: true, xp: 10 },
          { text: "My hands never shake, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ You'll understand in just a moment.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're worrying me a little. What's going on?", zh: "你让我有点担心了。到底怎么了？", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "Something good is going on, I promise.", zh: "是件好事在发生，我保证。", correct: true, xp: 10 },
          { text: "Nothing is going on, forget I said anything.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → Something good is going on, I promise.",
        next: null
      }
    }
  },
  {
    id: "the-proposal",
    title: "The Proposal",
    subtitle: "书店里 · 求婚时刻",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Ten years ago, a letter changed my life. So did you.", zh: "十年前，一封信改变了我的人生。你也是。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "You changed mine too, from the very first day.", zh: "你也改变了我的人生，从第一天起就是。", correct: true, xp: 10 },
          { text: "You didn't really change anything for me.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → You changed mine too, from the very first day.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What are you doing? Wait — is that a ring?", zh: "你在干嘛？等等——那是戒指吗？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "It is. Will you marry me?", zh: "是的。你愿意嫁给我吗？", correct: true, xp: 10 },
          { text: "It's nothing, don't worry about it.", correct: false }
        ],
        hintOnWrong: "简单确认＋核心问句 → It is. Will you marry me?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Yes. Yes, a thousand times yes!", zh: "愿意。愿意，愿意一千次！", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "You just made me the happiest person alive.", zh: "你刚刚让我成了这世上最幸福的人。", correct: true, xp: 10 },
          { text: "I'll take that as a maybe, then.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ You just made me the happiest person alive.",
        next: null
      }
    }
  },
  {
    id: "she-said-yes",
    title: "She Said Yes",
    subtitle: "书店里 · 沉浸在幸福里",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I can't stop looking at this ring.", zh: "我一直忍不住看这枚戒指。", voice: "emma" },
        skill: "work",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "Look at it forever, it's yours now.", zh: "尽情看吧，它现在是你的了。", correct: true, xp: 10 },
          { text: "Stop looking at it, it's not real.", correct: false }
        ],
        hintOnWrong: "用短语动词（look at）→ Look at it forever, it's yours now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should call everyone. They're going to be so excited.", zh: "我们该打电话告诉大家。他们一定会特别激动。", voice: "emma" },
        grammarTag: "will-future",
        skill: "work",
        choices: [
          { text: "They're going to lose their minds, honestly.", zh: "说实话，他们一定会激动疯的。", correct: true, xp: 10 },
          { text: "They're going to be completely unbothered.", correct: false }
        ],
        hintOnWrong: "用 will/going to 表示预测 → They're going to lose their minds, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is the best night of my entire life.", zh: "这是我这辈子最好的一晚。", voice: "emma" },
        skill: "work",
        grammarTag: "comparative",
        choices: [
          { text: "The best night of both our lives.", zh: "是我们两个人这辈子最好的一晚。", correct: true, xp: 10 },
          { text: "One of many good nights, I suppose.", correct: false }
        ],
        hintOnWrong: "用最高级 → The best night of both our lives.",
        next: null
      }
    }
  },
  {
    id: "telling-everyone",
    transition: { en: "Word spreads fast through Lily's House.", zh: "消息在Lily之家很快就传开了。" },
    title: "Telling Everyone",
    subtitle: "Lily之家 · 分享喜讯",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I heard the news! When did this happen?", zh: "我听说了！这是什么时候的事？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It happened just last night.", zh: "就是昨晚发生的事。", correct: true, xp: 10 },
          { text: "It happened years ago, actually.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → It happened just last night.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This calls for the biggest celebration this house has ever seen.", zh: "这值得办一场这栋房子有史以来最大的庆祝会。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "The biggest one it's ever seen, I agree.", zh: "有史以来最大的一场，我同意。", correct: true, xp: 10 },
          { text: "A small quiet one would be enough.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → The biggest one it's ever seen, I agree.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'm so happy for you both, more than words can say.", zh: "我为你们俩感到无比开心，多到言语难以表达。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Your happiness means the world to us.", zh: "您的祝福对我们意义重大。", correct: true, xp: 10 },
          { text: "Your happiness doesn't really matter to us.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Your happiness means the world to us.",
        next: null
      }
    }
  },
  {
    id: "wedding-planning-begins",
    title: "Wedding Planning Begins",
    subtitle: "书店里 · 开始筹备婚礼",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We'll need a venue, a caterer, and a guest list, for a start.", zh: "首先我们得先定场地、餐饮，还有宾客名单。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "We'll figure it all out together.", zh: "我们会一起把这些都搞定的。", correct: true, xp: 10 },
          { text: "We'll never figure any of this out.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → We'll figure it all out together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we kept it small, it would feel more like us.", zh: "如果办得小一点，会更像我们的风格。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we kept it small, I'd love that even more.", zh: "如果办小一点，我会更喜欢。", correct: true, xp: 10 },
          { text: "If we kept it small, I'd feel disappointed.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we kept it small, I'd love that even more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A small wedding, full of people who actually matter.", zh: "一场小小的婚礼，宾客都是真正重要的人。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "People who matter is all we ever needed.", zh: "重要的人，就是我们一直需要的全部。", correct: true, xp: 10 },
          { text: "People who matter aren't that important, really.", correct: false }
        ],
        hintOnWrong: "用定语从句 → People who matter is all we ever needed.",
        next: null
      }
    }
  },
  {
    id: "picking-a-date",
    title: "Picking a Date",
    subtitle: "书店里 · 确定婚期",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What if we got married exactly ten years after we reunited?", zh: "要是我们在重逢十周年的那天结婚呢？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "What a perfect date that would be.", zh: "那真是个完美的日子。", correct: true, xp: 10 },
          { text: "What a strange date to pick.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ What a perfect date that would be.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The same airport, the same city, the same us.", zh: "同一个机场，同一座城市，还是我们俩。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "The same us, but so much further along.", zh: "还是我们俩，但已经走了这么远。", correct: true, xp: 10 },
          { text: "The same us, but honestly nothing has changed.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ The same us, but so much further along.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Ten years apart, and now a lifetime together.", zh: "分开十年，如今是相守一生。", voice: "emma" },
        skill: "work",
        grammarTag: "comparative",
        choices: [
          { text: "A lifetime together, worth every year of waiting.", zh: "相守一生，这么多年的等待都值了。", correct: true, xp: 10 },
          { text: "A lifetime together, though the wait feels wasted.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A lifetime together, worth every year of waiting.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "I've been thinking about proposing to Emma.", zh: "我一直在想向Emma求婚这件事。" },
  { en: "I've never been more sure of anything.", zh: "我从没这么确定过任何事。" },
  { en: "Ready for forever, exactly.", zh: "正是，准备好迎接永远了。" },
  { en: "How did you know? I'm asking for a reason.", zh: "您是怎么知道的？我这么问是有原因的。" },
  { en: "Certainty over timing — that makes sense.", zh: "确定感比时机更重要——这说得通。" },
  { en: "A way that feels like me — I know exactly what that is.", zh: "像我自己的风格——我很清楚那是什么。" },
  { en: "Yes, I'm looking for the perfect one.", zh: "是的，我在找最完美的那一枚。" },
  { en: "I do, actually — I checked secretly.", zh: "我知道，其实我偷偷查过了。" },
  { en: "Made locally? That makes it even more perfect.", zh: "本地做的？那就更完美了。" },
  { en: "I'm thinking of doing it at the bookstore.", zh: "我打算在书店求婚。" },
  { en: "The place where it started is the place to finish it.", zh: "开始的地方，也该是这一步发生的地方。" },
  { en: "If I do it there, it'll mean everything to both of us.", zh: "如果在那儿求婚，对我们俩都会意义非凡。" },
  { en: "Everything's more than okay, actually.", zh: "其实一切都不只是好而已。" },
  { en: "You'll understand in just a moment.", zh: "你马上就会明白的。" },
  { en: "Something good is going on, I promise.", zh: "是件好事在发生，我保证。" },
  { en: "You changed mine too, from the very first day.", zh: "你也改变了我的人生，从第一天起就是。" },
  { en: "It is. Will you marry me?", zh: "是的。你愿意嫁给我吗？" },
  { en: "You just made me the happiest person alive.", zh: "你刚刚让我成了这世上最幸福的人。" },
  { en: "Look at it forever, it's yours now.", zh: "尽情看吧，它现在是你的了。" },
  { en: "They're going to lose their minds, honestly.", zh: "说实话，他们一定会激动疯的。" },
  { en: "The best night of both our lives.", zh: "是我们两个人这辈子最好的一晚。" },
  { en: "It happened just last night.", zh: "就是昨晚发生的事。" },
  { en: "The biggest one it's ever seen, I agree.", zh: "有史以来最大的一场，我同意。" },
  { en: "Your happiness means the world to us.", zh: "您的祝福对我们意义重大。" },
  { en: "We'll figure it all out together.", zh: "我们会一起把这些都搞定的。" },
  { en: "If we kept it small, I'd love that even more.", zh: "如果办小一点，我会更喜欢。" },
  { en: "People who matter is all we ever needed.", zh: "重要的人，就是我们一直需要的全部。" },
  { en: "What a perfect date that would be.", zh: "那真是个完美的日子。" },
  { en: "The same us, but so much further along.", zh: "还是我们俩，但已经走了这么远。" },
  { en: "A lifetime together, worth every year of waiting.", zh: "相守一生，这么多年的等待都值了。" }
);
