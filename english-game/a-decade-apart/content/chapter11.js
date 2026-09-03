// 内容数据层：第十一章，紧接第十章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter10.js 之后、audio-manifest.js 之前加载。
// L3（第8-12章）倒数第二章。
//
// Tier: L3（跟第八/九/十章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L3 最后一个新 grammarTag：
//   - passive（structure，占"一课一个新点"名额，3课内必须复现）：
//     被动语态（was written / was known for / was kept 等），
//     第1课（reading-together）引入，第1/3/4/5/6/8/10课多次复现。
// present-perfect / comparative / conditional 继续复现。
//
// **历史背景（Josh 2026-09-03拍板：挂靠真实的香港移民潮，动笔前做了网络查证，
// 不是凭印象编）**：
//   - 1984年《中英联合声明》宣布香港1997年将回归中国，触发了移民潮的开端；
//     许多香港家庭对回归后的未来感到不安。
//   - 1989年天安门事件后，这种不安进一步加剧，移民数字持续攀升，1994年左右达到高峰。
//   - 1984-1997年间约有33.5万香港人移民加拿大，多伦多和温哥华是最主要的落脚地；
//     多伦多的华人人口在1986-1991年间翻了一倍。
//   来源：BC知识网络"An Untold History"、Wikipedia "Hong Kong Canadians"条目、
//   Quartz报道 "Hong Kong is about to see a Tiananmen-era wave of migration"（2020）。
//   故事里只用了"1984年、家庭因回归的不确定感而做出移民决定"这一条主线史实，
//   没有虚构具体的移民政策细节或年代数字——Ho家/Uncle Lok的具体经历（打两份工、
//   靠邻居互助、写信传统）是私人化的虚构叙事，建立在真实的大背景之上，不是在
//   编造历史本身。
//
// 剧情：三人一起读完剩下的信，揭晓当年（1984年前后）Ho家因担忧回归后的未来
// 决定移民，靠着Lily（Emma的祖母）等邻居的帮助落脚——Lily当年开的小店也叫
// "Ten Letters"，Emma给自己书店取的名字，是在不知情的情况下呼应了祖母的传统。
// 两家的缘分早于这一代人的重逢。L3到本章结束，第12章是L1-L3阶段性的情感
// 高点（不是最终收尾——最终收尾留给L4/B2最后一章，见路线图说明）。

GAME_CONTENT.scenes.push(
  {
    id: "reading-together",
    title: "Reading Together",
    subtitle: "客厅 · 继续读信",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There are more pages here. Should we keep reading?", zh: "这儿还有更多信纸。我们要不要继续读？" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Yes, let's keep reading together.", zh: "好，我们一起继续读吧。", correct: true, xp: 10 },
          { text: "Let's stop for today.", correct: false }
        ],
        hintOnWrong: "接受提议 → Yes, let's keep reading together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This next part was written in 1984.", zh: "接下来这部分是1984年写的。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "It was written right when everything changed.", zh: "正是一切发生变化的时候写的。", correct: true, xp: 10 },
          { text: "It was written just for fun.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It was written right when everything changed.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "1984 — that's when Hong Kong's future was decided.", zh: "1984年——那是香港的未来被决定的一年。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "That's when so much was decided for so many families.", zh: "那是为无数家庭决定命运的一年。", correct: true, xp: 10 },
          { text: "That doesn't sound important.", correct: false }
        ],
        hintOnWrong: "用被动语态 → That's when so much was decided for so many families.",
        next: null
      }
    }
  },
  {
    id: "why-they-left-hk",
    title: "Why We Left",
    subtitle: "客厅 · 移民的原因",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My parents were scared about what would happen after 1997.", zh: "我父母很担心1997年之后会发生什么。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "So many decisions were made so quickly.", zh: "那么多决定都被匆忙做出来了。", correct: true, xp: 10 },
          { text: "That doesn't sound so bad.", correct: false }
        ],
        hintOnWrong: "用被动语态 → So many decisions were made so quickly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "So many people left. It changed the whole neighborhood.", zh: "很多人都离开了。整个社区都变了样。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's heartbreaking to imagine.", zh: "想想都让人心碎。", correct: true, xp: 10 },
          { text: "That sounds exaggerated.", correct: false }
        ],
        hintOnWrong: "简单共情（陈述句）→ That's heartbreaking to imagine.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "But we made a choice, and here we are.", zh: "但我们做了选择，也就有了今天的我们。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "And it brought us all together.", zh: "而这一切把我们都联系在了一起。", correct: true, xp: 10 },
          { text: "And it was all for nothing.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → And it brought us all together.",
        next: null
      }
    }
  },
  {
    id: "the-journey",
    title: "The Journey",
    subtitle: "客厅 · 当年的旅程",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The trip here was long and quiet. Nobody spoke much.", zh: "来这儿的旅程又长又安静。谁都没怎么说话。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds like such a hard trip.", zh: "听起来是段特别艰难的旅程。", correct: true, xp: 10 },
          { text: "That sounds like an easy trip.", correct: false }
        ],
        hintOnWrong: "简单共情（陈述句）→ That sounds like such a hard trip.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Everything we owned was packed into two suitcases.", zh: "我们所有的家当都装进了两只行李箱里。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "Two suitcases for a whole life.", zh: "两只箱子装下了整个人生。", correct: true, xp: 10 },
          { text: "That doesn't seem like much.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ Two suitcases for a whole life.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "But we were welcomed here, eventually.", zh: "但最终，我们在这里被接纳了。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "I'm glad you were welcomed here.", zh: "我很高兴你们最终在这里被接纳了。", correct: true, xp: 10 },
          { text: "That took a long time, I bet.", correct: false }
        ],
        hintOnWrong: "用被动语态 → I'm glad you were welcomed here.",
        next: null
      }
    }
  },
  {
    id: "settling-in-toronto",
    title: "Settling In",
    subtitle: "客厅 · 落脚多伦多",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The first place we lived was found by a kind stranger.", zh: "我们住的第一个地方，是一个好心的陌生人帮我们找到的。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "A kind stranger changed everything, then.", zh: "那么一个好心的陌生人改变了一切。", correct: true, xp: 10 },
          { text: "That stranger sounds suspicious.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A kind stranger changed everything, then.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Her name was Lily. She ran a tiny shop nearby.", zh: "她叫Lily。她在附近开了一家小店。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Lily again — she's everywhere in this story.", zh: "又是Lily——她在这个故事里无处不在。", correct: true, xp: 10 },
          { text: "That's just a common name.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ Lily again — she's everywhere in this story.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "She was known for helping every new family on the street.", zh: "她以帮助街上每一户新搬来的家庭而出名。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "She was known for her kindness, it seems.", zh: "看来她是以善良闻名的。", correct: true, xp: 10 },
          { text: "She was known for being strict.", correct: false }
        ],
        hintOnWrong: "用被动语态 → She was known for her kindness, it seems.",
        next: null
      }
    }
  },
  {
    id: "the-bookshop-connection",
    title: "The Bookshop Connection",
    subtitle: "客厅 · Emma的书店渊源",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My grandmother's shop... it was called Ten Letters too.", zh: "我祖母的店……当年也叫「十封信」。", voice: "emma" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "It was named after the letters she wrote, wasn't it?", zh: "是以她写的那些信命名的，对吧？", correct: true, xp: 10 },
          { text: "That's just a coincidence, probably.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It was named after the letters she wrote, wasn't it?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Yes. She wrote to every family she helped.", zh: "是的。她给每一个她帮过的家庭都写过信。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "That's the tradition you kept alive.", zh: "这就是你一直延续下来的传统。", correct: true, xp: 10 },
          { text: "That's a strange tradition.", correct: false }
        ],
        hintOnWrong: "用过去时回应（陈述句）→ That's the tradition you kept alive.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I named my shop after hers without even knowing the full story.", zh: "我给我的店取名的时候，都还不知道完整的故事。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Some things find their way back around.", zh: "有些事情终究会兜兜转转回到原点。", correct: true, xp: 10 },
          { text: "That's just a strange coincidence.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ Some things find their way back around.",
        next: null
      }
    }
  },
  {
    id: "full-circle",
    title: "Full Circle",
    subtitle: "客厅 · 一切都连起来了",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So this whole time, our families were connected.", zh: "所以一直以来，我们两家都是有联系的。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "We were connected before we even knew it.", zh: "我们在还不知道之前，就已经有联系了。", correct: true, xp: 10 },
          { text: "We were strangers this whole time.", correct: false }
        ],
        hintOnWrong: "用被动语态 → We were connected before we even knew it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It feels like fate, doesn't it?", zh: "感觉像是命运，对吧？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does feel like fate.", zh: "确实感觉像是命运。", correct: true, xp: 10 },
          { text: "I don't believe in fate.", correct: false }
        ],
        hintOnWrong: "简单附和（陈述句）→ It really does feel like fate.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There's one letter left. The last one.", zh: "还剩一封信。最后一封。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's read the last one together.", zh: "我们一起读最后一封吧。", correct: true, xp: 10 },
          { text: "Let's save it for another day.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's read the last one together.",
        next: null
      }
    }
  },
  {
    id: "reading-the-last-letter",
    title: "The Last Letter",
    subtitle: "客厅 · 最后一封信",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This letter was written the night before Lily left Hong Kong.", zh: "这封信是Lily离开香港前一晚写的。", voice: "emma" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "That night was probably very hard.", zh: "那一晚大概非常难熬。", correct: true, xp: 10 },
          { text: "That night was probably easy.", correct: false }
        ],
        hintOnWrong: "简单推测（陈述句）→ That night was probably very hard.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "She wrote, 'I hope this new place learns to love you as I have.'", zh: "她写道：'希望这个新地方能像我一样爱上你们。'", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "It clearly has, all these years later.", zh: "这么多年过去，它显然做到了。", correct: true, xp: 10 },
          { text: "It clearly hasn't, unfortunately.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → It clearly has, all these years later.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "She also wrote a promise — almost the same one you two made.", zh: "她还写下了一个承诺——跟你们俩许下的几乎一模一样。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "What a promise to pass down.", zh: "多么了不起的一个传承下来的承诺啊。", correct: true, xp: 10 },
          { text: "What a strange coincidence.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ What a promise to pass down.",
        next: null
      }
    }
  },
  {
    id: "a-shared-history",
    title: "A Shared History",
    subtitle: "客厅 · 共同的往事",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Ten years ago, you made a promise to come back to Toronto.", zh: "十年前，你许下了要回到多伦多的承诺。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "And I kept that promise.", zh: "而我做到了。", correct: true, xp: 10 },
          { text: "And I almost forgot it.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → And I kept that promise.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Emma's family's promise was kept too, in its own way.", zh: "Emma家的承诺，也以它自己的方式被兑现了。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "Every promise here was kept somehow.", zh: "这里的每一个承诺，都以某种方式被兑现了。", correct: true, xp: 10 },
          { text: "Some promises were broken, though.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Every promise here was kept somehow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe that's what Ten Letters was always about.", zh: "也许「十封信」一直以来说的就是这个。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Letters that were never really lost.", zh: "那些从未真正遗失的信。", correct: true, xp: 10 },
          { text: "Letters that don't mean much now.", correct: false }
        ],
        hintOnWrong: "用被动语态收尾 → Letters that were never really lost.",
        next: null
      }
    }
  },
  {
    id: "a-new-beginning",
    title: "A New Beginning",
    subtitle: "客厅 · 新的开始",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So, what happens now?", zh: "那，现在打算怎么办？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Now we keep writing the story.", zh: "现在我们继续把这个故事写下去。", correct: true, xp: 10 },
          { text: "Now we forget about it.", correct: false }
        ],
        hintOnWrong: "简单陈述（陈述句）→ Now we keep writing the story.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'd like all of us to have dinner together soon.", zh: "我希望我们所有人能尽快一起吃顿饭。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "I'll cook, if everyone's up for it.", zh: "我来做饭，如果大家都愿意的话。", correct: true, xp: 10 },
          { text: "I'll order takeout instead.", correct: false }
        ],
        hintOnWrong: "用条件句 → I'll cook, if everyone's up for it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Deal. Welcome to the family, both of you.", zh: "说定了。欢迎你们俩加入这个大家庭。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It's an honor to be part of this.", zh: "能成为其中一员，是我的荣幸。", correct: true, xp: 10 },
          { text: "I wasn't expecting that.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It's an honor to be part of this.",
        next: null
      }
    }
  },
  {
    id: "letters-and-legacy",
    transition: { en: "That night, back at the apartment, Sam is waiting up.", zh: "那天晚上，回到公寓，Sam还醒着等你。" },
    title: "Letters and Legacy",
    subtitle: "公寓 · 一切尘埃落定",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So? How did it go?", zh: "怎么样？进展如何？" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It went better than I ever imagined.", zh: "比我想象的还要顺利。", correct: true, xp: 10 },
          { text: "It went about as expected.", correct: false }
        ],
        hintOnWrong: "用比较级 → It went better than I ever imagined.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This whole mystery... it was never really about a house, was it?", zh: "这整个谜团……其实从来都不是关于一栋房子的，对吧？" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "No, it was about the people who lived in it.", zh: "不，是关于住在里面的人。", correct: true, xp: 10 },
          { text: "No, it was about the money.", correct: false }
        ],
        hintOnWrong: "用被动语态 → No, it was about the people who lived in it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade apart, and somehow it all came back together.", zh: "分开了十年，却又以某种方式重新聚在了一起。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "A decade apart, and worth every bit of the wait.", zh: "分开了十年，但每一刻的等待都值得。", correct: true, xp: 10 },
          { text: "A decade apart, and mostly a waste of time.", correct: false }
        ],
        hintOnWrong: "简单总结（陈述句）→ A decade apart, and worth every bit of the wait.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Yes, let's keep reading together.", zh: "好，我们一起继续读吧。" },
  { en: "It was written right when everything changed.", zh: "正是一切发生变化的时候写的。" },
  { en: "That's when so much was decided for so many families.", zh: "那是为无数家庭决定命运的一年。" },
  { en: "So many decisions were made so quickly.", zh: "那么多决定都被匆忙做出来了。" },
  { en: "That's heartbreaking to imagine.", zh: "想想都让人心碎。" },
  { en: "And it brought us all together.", zh: "而这一切把我们都联系在了一起。" },
  { en: "That sounds like such a hard trip.", zh: "听起来是段特别艰难的旅程。" },
  { en: "Two suitcases for a whole life.", zh: "两只箱子装下了整个人生。" },
  { en: "I'm glad you were welcomed here.", zh: "我很高兴你们最终在这里被接纳了。" },
  { en: "A kind stranger changed everything, then.", zh: "那么一个好心的陌生人改变了一切。" },
  { en: "Lily again — she's everywhere in this story.", zh: "又是Lily——她在这个故事里无处不在。" },
  { en: "She was known for her kindness, it seems.", zh: "看来她是以善良闻名的。" },
  { en: "It was named after the letters she wrote, wasn't it?", zh: "是以她写的那些信命名的，对吧？" },
  { en: "That's the tradition you kept alive.", zh: "这就是你一直延续下来的传统。" },
  { en: "Some things find their way back around.", zh: "有些事情终究会兜兜转转回到原点。" },
  { en: "We were connected before we even knew it.", zh: "我们在还不知道之前，就已经有联系了。" },
  { en: "It really does feel like fate.", zh: "确实感觉像是命运。" },
  { en: "Let's read the last one together.", zh: "我们一起读最后一封吧。" },
  { en: "That night was probably very hard.", zh: "那一晚大概非常难熬。" },
  { en: "It clearly has, all these years later.", zh: "这么多年过去，它显然做到了。" },
  { en: "What a promise to pass down.", zh: "多么了不起的一个传承下来的承诺啊。" },
  { en: "And I kept that promise.", zh: "而我做到了。" },
  { en: "Every promise here was kept somehow.", zh: "这里的每一个承诺，都以某种方式被兑现了。" },
  { en: "Letters that were never really lost.", zh: "那些从未真正遗失的信。" },
  { en: "Now we keep writing the story.", zh: "现在我们继续把这个故事写下去。" },
  { en: "I'll cook, if everyone's up for it.", zh: "我来做饭，如果大家都愿意的话。" },
  { en: "It's an honor to be part of this.", zh: "能成为其中一员，是我的荣幸。" },
  { en: "It went better than I ever imagined.", zh: "比我想象的还要顺利。" },
  { en: "No, it was about the people who lived in it.", zh: "不，是关于住在里面的人。" },
  { en: "A decade apart, and worth every bit of the wait.", zh: "分开了十年，但每一刻的等待都值得。" }
);
