// 内容数据层：第十五章，紧接第十四章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter14.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（跟第十三、十四章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 第三个新 grammarTag：
//   - reported-speech（structure，占"一课一个新点"名额，3课内必须复现）：
//     间接引语（she said that... / he told me he had...），
//     第2课（the-interview）引入，第2/3/6课多次复现。
// subjunctive/past-perfect（L4）与 present-perfect/comparative/conditional/
// passive（L3）继续复现巩固。
//
// 剧情：本地社区报的记者听说了Lily's House的故事，想写一篇报道——报道
// 发表后引来意外的社区回响，为第16章埋下新的发展空间。

GAME_CONTENT.scenes.push(
  {
    id: "a-reporter-calls",
    transition: { en: "One afternoon, the phone at Lily's House rings.", zh: "一天下午，Lily之家的电话响了。" },
    title: "A Reporter Calls",
    subtitle: "Lily之家 · 一通意外的电话",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Hi, I'm a reporter with the local paper. I heard about this place.", zh: "你好，我是本地报社的记者。我听说了这个地方。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Oh wow, who told you about us?", zh: "哦哇，是谁跟你说起我们的？", correct: true, xp: 10 },
          { text: "We don't want any visitors.", correct: false }
        ],
        hintOnWrong: "用过去时追问 → Oh wow, who told you about us?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A student of yours mentioned it to a friend of mine.", zh: "你们的一位学员跟我一个朋友提起过。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Word travels fast around here, I guess.", zh: "看来这儿的消息传得挺快的。", correct: true, xp: 10 },
          { text: "That's not possible, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Word travels fast around here, I guess.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would it be okay if I came by this week to talk?", zh: "这周我过去聊聊，方便吗？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If you'd like to come, we'd be happy to talk.", zh: "如果你想来，我们很乐意聊聊。", correct: true, xp: 10 },
          { text: "If you come, we won't have time.", correct: false }
        ],
        hintOnWrong: "用条件句 → If you'd like to come, we'd be happy to talk.",
        next: null
      }
    }
  },
  {
    id: "the-interview",
    title: "The Interview",
    subtitle: "Lily之家 · 采访开始",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "One of your students told me she'd never felt so welcome anywhere.", zh: "你们的一位学员告诉我，她从没在哪里感到如此受欢迎。" },
        skill: "community",
        grammarTag: "reported-speech",
        choices: [
          { text: "She said that to me too, once.", zh: "她也曾这样跟我说过。", correct: true, xp: 10 },
          { text: "She never said anything like that.", correct: false }
        ],
        hintOnWrong: "用间接引语 → She said that to me too, once.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Mrs. Ho told me this place used to be just a house with a story.", zh: "Ho太太告诉我，这地方以前只是一栋有故事的房子。" },
        skill: "community",
        grammarTag: "reported-speech",
        choices: [
          { text: "She told the truth — it really was just that.", zh: "她说的是实话——它原本确实只是那样。", correct: true, xp: 10 },
          { text: "She didn't tell you the truth, actually.", correct: false }
        ],
        hintOnWrong: "用间接引语回应 → She told the truth — it really was just that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you tell me how this all started?", zh: "你能跟我讲讲这一切是怎么开始的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can tell you the whole story.", zh: "当然，我可以把整个故事都跟你说说。", correct: true, xp: 10 },
          { text: "I can't really explain it simply.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, I can tell you the whole story.",
        next: null
      }
    }
  },
  {
    id: "questions-about-the-past",
    title: "Questions About the Past",
    subtitle: "Lily之家 · 问起过去的事",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Emma mentioned that her grandmother had helped families here decades ago.", zh: "Emma提到，她祖母几十年前曾在这儿帮助过很多家庭。" },
        skill: "work",
        grammarTag: "reported-speech",
        choices: [
          { text: "She mentioned that to me too, actually.", zh: "其实她也跟我提过这事。", correct: true, xp: 10 },
          { text: "She never mentioned anything like that.", correct: false }
        ],
        hintOnWrong: "用间接引语 → She mentioned that to me too, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Is it okay if I include some of the family history?", zh: "我可以把一部分家族历史写进去吗？" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Some of it, yes — but not all of it.", zh: "可以写一部分——但不是全部。", correct: true, xp: 10 },
          { text: "No, none of it should be shared.", correct: false }
        ],
        hintOnWrong: "有保留地同意 → Some of it, yes — but not all of it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I understand. Some things are meant to stay private.", zh: "我理解。有些事情本就该保持私密。" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "Some things are better left untold.", zh: "有些事最好还是别说出来。", correct: true, xp: 10 },
          { text: "Nothing here should stay private.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Some things are better left untold.",
        next: null
      }
    }
  },
  {
    id: "careful-with-words",
    transition: { en: "After the reporter leaves, Emma looks thoughtful.", zh: "记者离开后，Emma看起来若有所思。" },
    title: "Careful with Words",
    subtitle: "书店里 · 该说到什么程度",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I wish I'd said less about my grandmother.", zh: "我真希望自己少说点关于我祖母的事。", voice: "emma" },
        skill: "work",
        grammarTag: "subjunctive",
        choices: [
          { text: "I wish I had chosen my words more carefully too.", zh: "我也希望自己当时能更谨慎地选择措辞。", correct: true, xp: 10 },
          { text: "I wish you had said even more, honestly.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → I wish I had chosen my words more carefully too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "But maybe her story deserves to be told.", zh: "但也许她的故事值得被讲出来。" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "It really does deserve to be told.", zh: "确实值得被讲出来。", correct: true, xp: 10 },
          { text: "It should probably stay hidden forever.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It really does deserve to be told.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's trust the reporter to be careful with it.", zh: "我们就相信这位记者会谨慎处理吧。" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's trust her, she seemed thoughtful.", zh: "我们相信她吧，她看起来挺细心的。", correct: true, xp: 10 },
          { text: "Let's call and take it all back.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's trust her, she seemed thoughtful.",
        next: null
      }
    }
  },
  {
    id: "the-article-drafted",
    transition: { en: "A few days later, the reporter sends a draft to read.", zh: "几天后，记者发来了一份草稿让大家看看。" },
    title: "The Article, Drafted",
    subtitle: "书店里 · 收到初稿",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "She's already sent the draft. Should we read it together?", zh: "她已经把草稿发过来了。我们要不要一起读？", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "She's already sent it? Let's read it now.", zh: "她已经发过来了？我们现在就读吧。", correct: true, xp: 10 },
          { text: "She hasn't sent anything yet.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → She's already sent it? Let's read it now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The title is 'A House That Remembers.'", zh: "标题是《一栋会记得的房子》。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "That title gives me chills, honestly.", zh: "说实话，这个标题让我起了鸡皮疙瘩。", correct: true, xp: 10 },
          { text: "That title doesn't mean anything.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That title gives me chills, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If this gets published, more people will know our story.", zh: "如果这篇发表了，会有更多人知道我们的故事。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If it's published, that's more than okay with me.", zh: "如果发表了，我完全没问题。", correct: true, xp: 10 },
          { text: "If it's published, I'll ask her to stop.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it's published, that's more than okay with me.",
        next: null
      }
    }
  },
  {
    id: "reading-the-draft",
    title: "Reading the Draft",
    subtitle: "书店里 · 一起读草稿",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "She wrote that a decade apart became a lifetime together.", zh: "她写道，分开了十年，最终成了一辈子的相守。" },
        skill: "community",
        grammarTag: "reported-speech",
        choices: [
          { text: "She wrote exactly what it felt like.", zh: "她写出了那种感觉本身。", correct: true, xp: 10 },
          { text: "She wrote something completely wrong.", correct: false }
        ],
        hintOnWrong: "用间接引语呼应 → She wrote exactly what it felt like.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This part about Lily... it's more moving than I expected.", zh: "关于Lily的这部分……比我预期的更感人。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "More moving than any of us expected, really.", zh: "确实比我们所有人预期的都更感人。", correct: true, xp: 10 },
          { text: "Less moving than I hoped, honestly.", correct: false }
        ],
        hintOnWrong: "用比较级 → More moving than any of us expected, really.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I think it's ready. What does everyone think?", zh: "我觉得可以了。大家觉得呢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I think it's ready too.", zh: "我也觉得可以了。", correct: true, xp: 10 },
          { text: "I think it needs a lot more work.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ I think it's ready too.",
        next: null
      }
    }
  },
  {
    id: "a-line-that-mattered",
    title: "A Line That Mattered",
    subtitle: "书店里 · 一句戳中人心的话",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "One line says, 'They had nothing, and they built everything.'", zh: "有一句写着，「他们一无所有，却建起了一切。」" },
        skill: "community",
        grammarTag: "past-perfect",
        choices: [
          { text: "We had nothing, and it still felt like enough.", zh: "我们一无所有，但那已经足够了。", correct: true, xp: 10 },
          { text: "We had everything back then, actually.", correct: false }
        ],
        hintOnWrong: "用过去完成时呼应 → We had nothing, and it still felt like enough.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That line is going to stay with me for a long time.", zh: "这句话会在我心里留很久。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It'll stay with all of us, I think.", zh: "我觉得它会留在我们所有人心里。", correct: true, xp: 10 },
          { text: "It'll probably be forgotten by tomorrow.", correct: false }
        ],
        hintOnWrong: "用 will 表示未来的持续 → It'll stay with all of us, I think.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Print it. Send it in exactly as it is.", zh: "发表吧。就这样原样发出去。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Send it exactly as it is, I agree.", zh: "我同意，就这样原样发出去吧。", correct: true, xp: 10 },
          { text: "Let's change everything about it first.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Send it exactly as it is, I agree.",
        next: null
      }
    }
  },
  {
    id: "the-article-publishes",
    transition: { en: "Sunday morning, the article appears in print.", zh: "周日早上，这篇报道刊登了出来。" },
    title: "The Article Publishes",
    subtitle: "Lily之家 · 报道见报了",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's here! Look, we're on the front page.", zh: "登出来啦！你看，我们上头版了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "The front page? I can't believe it.", zh: "头版？我简直不敢相信。", correct: true, xp: 10 },
          { text: "The front page doesn't matter much.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ The front page? I can't believe it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My phone hasn't stopped ringing all morning.", zh: "我的手机一上午都没停过。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Mine hasn't stopped either.", zh: "我的也没停过。", correct: true, xp: 10 },
          { text: "Mine has been completely silent.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → Mine hasn't stopped either.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "People are asking how they can help.", zh: "有人在问怎么才能帮上忙。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "People are reaching out from everywhere.", zh: "各地的人都在联系我们。", correct: true, xp: 10 },
          { text: "Nobody is really asking anything.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → People are reaching out from everywhere.",
        next: null
      }
    }
  },
  {
    id: "unexpected-response",
    title: "An Unexpected Response",
    subtitle: "Lily之家 · 意外的回响",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A local business offered to donate desks and chairs.", zh: "一家本地商户提出想捐些桌椅。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That offer means more than they know.", zh: "这份心意比他们想的还要珍贵。", correct: true, xp: 10 },
          { text: "That offer doesn't help us at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That offer means more than they know.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someone said they'd never thought about newcomers this way before.", zh: "有人说，他们以前从没这样想过新移民的处境。" },
        skill: "community",
        grammarTag: "reported-speech",
        choices: [
          { text: "They said that? That's exactly the point.", zh: "他们这么说？这正是关键所在。", correct: true, xp: 10 },
          { text: "They said that, but it doesn't matter.", correct: false }
        ],
        hintOnWrong: "用间接引语回应 → They said that? That's exactly the point.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is bigger than any of us imagined.", zh: "这比我们所有人想象的都要大得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Bigger than we ever imagined, truly.", zh: "确实比我们想的要大得多。", correct: true, xp: 10 },
          { text: "Smaller than I expected, honestly.", correct: false }
        ],
        hintOnWrong: "用比较级 → Bigger than we ever imagined, truly.",
        next: null
      }
    }
  },
  {
    id: "more-than-we-expected",
    title: "More Than We Expected",
    subtitle: "书店里 · 收尾反思",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A month ago, this was just an idea over dinner.", zh: "一个月前，这还只是饭桌上的一个想法。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "And now it's changing lives already.", zh: "而现在它已经在改变生活了。", correct: true, xp: 10 },
          { text: "And now it's still just an idea.", correct: false }
        ],
        hintOnWrong: "简单陈述（陈述句）→ And now it's changing lives already.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I wish Lily could see what her one small shop became.", zh: "我真希望Lily能看到她当年那家小店变成了什么样子。", voice: "emma" },
        skill: "work",
        grammarTag: "subjunctive",
        choices: [
          { text: "I wish she could see it too, more than anything.", zh: "我也非常希望她能看到这一切。", correct: true, xp: 10 },
          { text: "I wish she had never opened it at all.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → I wish she could see it too, more than anything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe, in a way, she already has.", zh: "或许，从某种意义上说，她已经看到了。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "In a way, she really has, hasn't she?", zh: "从某种意义上，她确实已经看到了，对吧？", correct: true, xp: 10 },
          { text: "In no way has she seen any of it.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → In a way, she really has, hasn't she?",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Oh wow, who told you about us?", zh: "哦哇，是谁跟你说起我们的？" },
  { en: "Word travels fast around here, I guess.", zh: "看来这儿的消息传得挺快的。" },
  { en: "If you'd like to come, we'd be happy to talk.", zh: "如果你想来，我们很乐意聊聊。" },
  { en: "She said that to me too, once.", zh: "她也曾这样跟我说过。" },
  { en: "She told the truth — it really was just that.", zh: "她说的是实话——它原本确实只是那样。" },
  { en: "Sure, I can tell you the whole story.", zh: "当然，我可以把整个故事都跟你说说。" },
  { en: "She mentioned that to me too, actually.", zh: "其实她也跟我提过这事。" },
  { en: "Some of it, yes — but not all of it.", zh: "可以写一部分——但不是全部。" },
  { en: "Some things are better left untold.", zh: "有些事最好还是别说出来。" },
  { en: "I wish I had chosen my words more carefully too.", zh: "我也希望自己当时能更谨慎地选择措辞。" },
  { en: "It really does deserve to be told.", zh: "确实值得被讲出来。" },
  { en: "Let's trust her, she seemed thoughtful.", zh: "我们相信她吧，她看起来挺细心的。" },
  { en: "She's already sent it? Let's read it now.", zh: "她已经发过来了？我们现在就读吧。" },
  { en: "That title gives me chills, honestly.", zh: "说实话，这个标题让我起了鸡皮疙瘩。" },
  { en: "If it's published, that's more than okay with me.", zh: "如果发表了，我完全没问题。" },
  { en: "She wrote exactly what it felt like.", zh: "她写出了那种感觉本身。" },
  { en: "More moving than any of us expected, really.", zh: "确实比我们所有人预期的都更感人。" },
  { en: "I think it's ready too.", zh: "我也觉得可以了。" },
  { en: "We had nothing, and it still felt like enough.", zh: "我们一无所有，但那已经足够了。" },
  { en: "It'll stay with all of us, I think.", zh: "我觉得它会留在我们所有人心里。" },
  { en: "Send it exactly as it is, I agree.", zh: "我同意，就这样原样发出去吧。" },
  { en: "The front page? I can't believe it.", zh: "头版？我简直不敢相信。" },
  { en: "Mine hasn't stopped either.", zh: "我的也没停过。" },
  { en: "People are reaching out from everywhere.", zh: "各地的人都在联系我们。" },
  { en: "That offer means more than they know.", zh: "这份心意比他们想的还要珍贵。" },
  { en: "They said that? That's exactly the point.", zh: "他们这么说？这正是关键所在。" },
  { en: "Bigger than we ever imagined, truly.", zh: "确实比我们想的要大得多。" },
  { en: "And now it's changing lives already.", zh: "而现在它已经在改变生活了。" },
  { en: "I wish she could see it too, more than anything.", zh: "我也非常希望她能看到这一切。" },
  { en: "In a way, she really has, hasn't she?", zh: "从某种意义上，她确实已经看到了，对吧？" }
);
