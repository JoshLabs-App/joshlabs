// 内容数据层：第十七章，紧接第十六章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter16.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 第五个新 grammarTag（超出原计划的四个，视词汇/语法进度自然生长）：
//   - conditional-advanced（structure，占"一课一个新点"名额，3课内必须复现）：
//     更复杂的条件句（second conditional：if + 过去式, would + 动词原形，
//     表达假设性的现在/未来，跟L3的first conditional区分开——那个是"真的可能
//     发生"，这个是"假设、不一定发生"），第2课（if-the-city-helped）引入，
//     第2/5/8课多次复现。
// past-perfect/subjunctive/reported-speech/concession（L4其他四点）与L3四点
// 继续复现巩固。
//
// 剧情：市议会一位工作人员来访，提出可能给Lily's House一笔市政资助——
// 带来一个两难：拿了资助意味着更多规范和审查，但也意味着更稳定。大家一起
// 权衡利弊做决定，呼应"新生"主题里"成长也伴随取舍"的现实感。

GAME_CONTENT.scenes.push(
  {
    id: "a-visit-from-city-hall",
    transition: { en: "A woman in a city hall badge knocks on the door.", zh: "一位戴着市政厅工作证的女士敲了敲门。" },
    title: "A Visit from City Hall",
    subtitle: "Lily之家 · 市政厅来客",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hi, I read the article. I work with the city's community programs.", zh: "你好，我看了那篇报道。我在市政府的社区项目部门工作。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Oh, welcome! What brings you here?", zh: "哦，欢迎！是什么风把您吹来了？", correct: true, xp: 10 },
          { text: "We're not interested, sorry.", correct: false }
        ],
        hintOnWrong: "礼貌欢迎（陈述句）→ Oh, welcome! What brings you here?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The city has a small grant program for places exactly like this.", zh: "市政府有一个小额补助项目，正适合这样的地方。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A grant program? Tell me more.", zh: "补助项目？跟我多说说。", correct: true, xp: 10 },
          { text: "We don't need any grants.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A grant program? Tell me more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would you be open to hearing about it?", zh: "您愿意听我讲讲吗？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If you have time, we'd love to hear it.", zh: "如果您有时间，我们很乐意听听。", correct: true, xp: 10 },
          { text: "If you have time, we'd rather not.", correct: false }
        ],
        hintOnWrong: "用条件句 → If you have time, we'd love to hear it.",
        next: null
      }
    }
  },
  {
    id: "if-the-city-helped",
    title: "If the City Helped",
    subtitle: "Lily之家 · 假设性的讨论",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If you had this funding, what would you do with it?", zh: "如果你们拿到这笔资助，会用来做什么？" },
        skill: "community",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we had it, we'd hire a second teacher.", zh: "如果拿到了，我们会再请一位老师。", correct: true, xp: 10 },
          { text: "If we had it, we wouldn't change anything.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句（second conditional）→ If we had it, we'd hire a second teacher.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If the space were bigger, could you help more families?", zh: "如果这个地方更大一些，你们能帮到更多家庭吗？" },
        skill: "community",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If it were bigger, we could help twice as many.", zh: "如果更大一点，我们能帮到两倍的人。", correct: true, xp: 10 },
          { text: "If it were bigger, it wouldn't matter much.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If it were bigger, we could help twice as many.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's exactly the kind of thinking this grant is for.", zh: "这正是这笔补助想要支持的想法。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's good to hear, honestly.", zh: "说实话，听到这个我很高兴。", correct: true, xp: 10 },
          { text: "That doesn't really convince me.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's good to hear, honestly.",
        next: null
      }
    }
  },
  {
    id: "questions-and-doubts",
    transition: { en: "After the visitor leaves, the room grows quiet.", zh: "客人离开后，屋子里安静了下来。" },
    title: "Questions and Doubts",
    subtitle: "Lily之家 · 心里的顾虑",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I wonder what strings would be attached to city money.", zh: "我在想市政府的钱会不会附带什么条件。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "That's a fair thing to wonder about.", zh: "这确实是个值得担心的问题。", correct: true, xp: 10 },
          { text: "That's not worth thinking about at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That's a fair thing to wonder about.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we took the money, would we still feel like it's ours?", zh: "如果我们拿了这笔钱，这地方还会像是属于我们的吗？", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we took it carefully, I think it still would.", zh: "如果我们谨慎处理，我想它依然会是。", correct: true, xp: 10 },
          { text: "If we took it, it wouldn't be ours anymore.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we took it carefully, I think it still would.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Although I'm not sure yet, I'm at least willing to talk about it.", zh: "尽管我还没想清楚，但我至少愿意谈谈这件事。", voice: "emma" },
        skill: "work",
        grammarTag: "concession",
        choices: [
          { text: "Although you're unsure, that's a fair place to start.", zh: "尽管你还不确定，但这是个不错的开始。", correct: true, xp: 10 },
          { text: "Although you're unsure, let's just say no.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although you're unsure, that's a fair place to start.",
        next: null
      }
    }
  },
  {
    id: "the-proposal-meeting",
    title: "The Proposal Meeting",
    subtitle: "Lily之家 · 正式讨论",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Let's lay out everything the grant would require of us.", zh: "我们把这笔补助会要求我们做的事都列出来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's lay it all out, no surprises.", zh: "我们把一切都列清楚，别留惊喜。", correct: true, xp: 10 },
          { text: "Let's just sign it without reading.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's lay it all out, no surprises.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We'd need to report our numbers every three months.", zh: "我们得每三个月上报一次数据。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We'll manage that, it's not too much.", zh: "这个我们能应付，不算太多。", correct: true, xp: 10 },
          { text: "We'll never manage something like that.", correct: false }
        ],
        hintOnWrong: "用 will 表示能应对 → We'll manage that, it's not too much.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "In exchange, we'd get funding that's been guaranteed for three years.", zh: "作为交换，我们会得到一笔保证发放三年的资助。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "Three years guaranteed sounds worth it.", zh: "保证三年，这听起来很值得。", correct: true, xp: 10 },
          { text: "Three years guaranteed sounds too risky.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Three years guaranteed sounds worth it.",
        next: null
      }
    }
  },
  {
    id: "if-we-had-more-space",
    title: "Imagining More",
    subtitle: "Lily之家 · 想象更大的可能",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "If we expanded, we could open a second location someday.", zh: "如果我们扩张，或许有一天能开第二个地点。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we expanded, that would be incredible.", zh: "如果真扩张了，那会太棒了。", correct: true, xp: 10 },
          { text: "If we expanded, it would ruin everything.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we expanded, that would be incredible.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "But if we grew too fast, we might lose what makes this place special.", zh: "但如果我们扩张得太快，可能会失去这地方特别的地方。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If we grew too fast, we'd have to be careful.", zh: "如果扩张太快，我们就得格外小心。", correct: true, xp: 10 },
          { text: "If we grew too fast, nobody would notice.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If we grew too fast, we'd have to be careful.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Slow and steady. That's always been the plan.", zh: "慢慢来，稳稳走。这一直都是我们的计划。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's always been the right plan, too.", zh: "而且这一直都是正确的计划。", correct: true, xp: 10 },
          { text: "It's never really been much of a plan.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → It's always been the right plan, too.",
        next: null
      }
    }
  },
  {
    id: "a-difficult-choice",
    title: "A Difficult Choice",
    subtitle: "Lily之家 · 两难的抉择",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Part of me wishes things could just stay small and simple.", zh: "我心里有一部分希望一切能保持小而简单。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "I wish that too, some days.", zh: "有些日子我也希望这样。", correct: true, xp: 10 },
          { text: "I never wish for that, honestly.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → I wish that too, some days.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "But more families need help than this one small house can give.", zh: "但需要帮助的家庭，比这一栋小房子能给的要多得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "More than we can give alone, that's true.", zh: "确实比我们单独能给的要多。", correct: true, xp: 10 },
          { text: "Fewer than you think, probably.", correct: false }
        ],
        hintOnWrong: "用比较级 → More than we can give alone, that's true.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe growing up doesn't mean losing what we started with.", zh: "也许成长并不意味着失去我们最初拥有的东西。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Maybe growing up means carrying it further.", zh: "也许成长意味着把它带得更远。", correct: true, xp: 10 },
          { text: "Maybe growing up always means losing something.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Maybe growing up means carrying it further.",
        next: null
      }
    }
  },
  {
    id: "voices-around-the-table",
    title: "Voices Around the Table",
    subtitle: "Lily之家 · 大家的意见",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "As a student here, I think the grant sounds like a good thing.", zh: "作为这里的一位学员，我觉得这笔补助听起来是件好事。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Your opinion matters a lot here.", zh: "你的意见在这儿很重要。", correct: true, xp: 10 },
          { text: "Your opinion doesn't really count here.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Your opinion matters a lot here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If it helps even one more family like mine, it's worth it.", zh: "如果它能多帮到一个像我这样的家庭，就值得了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it helps just one more, that's enough reason.", zh: "如果能多帮一个人，理由就够了。", correct: true, xp: 10 },
          { text: "If it helps one more, it's still not worth it.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it helps just one more, that's enough reason.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sam, as our newest teacher, what do you think?", zh: "Sam，作为我们最新的老师，你怎么想？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "What I think is, let's take the risk together.", zh: "我的想法是，我们一起冒这个险吧。", correct: true, xp: 10 },
          { text: "What I think doesn't really matter here.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ What I think is, let's take the risk together.",
        next: null
      }
    }
  },
  {
    id: "the-decision",
    title: "The Decision",
    subtitle: "Lily之家 · 做出决定",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It sounds like we're all leaning the same way.", zh: "听起来我们的想法都差不多。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're all leaning toward yes, I think.", zh: "我觉得我们都倾向于同意。", correct: true, xp: 10 },
          { text: "We're all leaning toward no, clearly.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → We're all leaning toward yes, I think.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we accept it, we do it together, with our eyes open.", zh: "如果我们接受，就要一起做，而且要清楚地知道自己在做什么。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we accept it, we go in together.", zh: "如果接受，我们就一起进去。", correct: true, xp: 10 },
          { text: "If we accept it, that's someone else's job.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we accept it, we go in together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Then it's decided. Let's call her back tomorrow.", zh: "那就这么定了。我们明天回电话给她。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's call her first thing tomorrow.", zh: "我们明天一早就打给她。", correct: true, xp: 10 },
          { text: "Let's wait another month to decide.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's call her first thing tomorrow.",
        next: null
      }
    }
  },
  {
    id: "moving-forward",
    transition: { en: "A week later, the paperwork is signed.", zh: "一周后，文件签好了。" },
    title: "Moving Forward",
    subtitle: "Lily之家 · 向前迈进",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Congratulations. The city is proud to support this place.", zh: "恭喜。市政府很自豪能支持这个地方。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, we won't let it go to waste.", zh: "谢谢，我们不会辜负这份支持的。", correct: true, xp: 10 },
          { text: "Thank you, we probably won't use it well.", correct: false }
        ],
        hintOnWrong: "礼貌回应（陈述句）→ Thank you, we won't let it go to waste.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If you ever need anything else, my door is open.", zh: "如果你们以后还需要什么，我随时欢迎。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If we need anything, we'll be sure to ask.", zh: "如果需要什么，我们一定会去问的。", correct: true, xp: 10 },
          { text: "If we need anything, we'll figure it out alone.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we need anything, we'll be sure to ask.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is bigger than a grant. This is a real partnership.", zh: "这不只是一笔补助。这是一次真正的合作。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "A real partnership means more than money.", zh: "真正的合作意味着比金钱更多的东西。", correct: true, xp: 10 },
          { text: "A grant is really all it is, though.", correct: false }
        ],
        hintOnWrong: "用比较级 → A real partnership means more than money.",
        next: null
      }
    }
  },
  {
    id: "reflection-on-growth",
    title: "Reflection on Growth",
    subtitle: "书店里 · 关于成长的感想",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A year ago, I would never have imagined any of this.", zh: "一年前，我根本无法想象会有今天这一切。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If you'd told me, I wouldn't have believed it either.", zh: "就算你当时告诉我，我也不会相信的。", correct: true, xp: 10 },
          { text: "If you'd told me, I would have believed it instantly.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If you'd told me, I wouldn't have believed it either.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Growth is scary. But it's also kind of beautiful.", zh: "成长很吓人。但也有它美好的一面。", voice: "emma" },
        skill: "work",
        grammarTag: "concession",
        choices: [
          { text: "Although it's scary, it's beautiful too.", zh: "尽管吓人，但也很美好。", correct: true, xp: 10 },
          { text: "Although it's scary, that's all it is.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although it's scary, it's beautiful too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here's to whatever comes next.", zh: "敬接下来的一切。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "To whatever comes next, together.", zh: "敬接下来的一切，我们一起面对。", correct: true, xp: 10 },
          { text: "To whatever comes next, I guess.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ To whatever comes next, together.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Oh, welcome! What brings you here?", zh: "哦，欢迎！是什么风把您吹来了？" },
  { en: "A grant program? Tell me more.", zh: "补助项目？跟我多说说。" },
  { en: "If you have time, we'd love to hear it.", zh: "如果您有时间，我们很乐意听听。" },
  { en: "If we had it, we'd hire a second teacher.", zh: "如果拿到了，我们会再请一位老师。" },
  { en: "If it were bigger, we could help twice as many.", zh: "如果更大一点，我们能帮到两倍的人。" },
  { en: "That's good to hear, honestly.", zh: "说实话，听到这个我很高兴。" },
  { en: "That's a fair thing to wonder about.", zh: "这确实是个值得担心的问题。" },
  { en: "If we took it carefully, I think it still would.", zh: "如果我们谨慎处理，我想它依然会是。" },
  { en: "Although you're unsure, that's a fair place to start.", zh: "尽管你还不确定，但这是个不错的开始。" },
  { en: "Let's lay it all out, no surprises.", zh: "我们把一切都列清楚，别留惊喜。" },
  { en: "We'll manage that, it's not too much.", zh: "这个我们能应付，不算太多。" },
  { en: "Three years guaranteed sounds worth it.", zh: "保证三年，这听起来很值得。" },
  { en: "If we expanded, that would be incredible.", zh: "如果真扩张了，那会太棒了。" },
  { en: "If we grew too fast, we'd have to be careful.", zh: "如果扩张太快，我们就得格外小心。" },
  { en: "It's always been the right plan, too.", zh: "而且这一直都是正确的计划。" },
  { en: "I wish that too, some days.", zh: "有些日子我也希望这样。" },
  { en: "More than we can give alone, that's true.", zh: "确实比我们单独能给的要多。" },
  { en: "Maybe growing up means carrying it further.", zh: "也许成长意味着把它带得更远。" },
  { en: "Your opinion matters a lot here.", zh: "你的意见在这儿很重要。" },
  { en: "If it helps just one more, that's enough reason.", zh: "如果能多帮一个人，理由就够了。" },
  { en: "What I think is, let's take the risk together.", zh: "我的想法是，我们一起冒这个险吧。" },
  { en: "We're all leaning toward yes, I think.", zh: "我觉得我们都倾向于同意。" },
  { en: "If we accept it, we go in together.", zh: "如果接受，我们就一起进去。" },
  { en: "Let's call her first thing tomorrow.", zh: "我们明天一早就打给她。" },
  { en: "Thank you, we won't let it go to waste.", zh: "谢谢，我们不会辜负这份支持的。" },
  { en: "If we need anything, we'll be sure to ask.", zh: "如果需要什么，我们一定会去问的。" },
  { en: "A real partnership means more than money.", zh: "真正的合作意味着比金钱更多的东西。" },
  { en: "If you'd told me, I wouldn't have believed it either.", zh: "就算你当时告诉我，我也不会相信的。" },
  { en: "Although it's scary, it's beautiful too.", zh: "尽管吓人，但也很美好。" },
  { en: "To whatever comes next, together.", zh: "敬接下来的一切，我们一起面对。" }
);
