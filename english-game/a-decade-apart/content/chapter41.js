// 内容数据层：第四十一章，紧接第四十章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter40.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：Emma的祖母去世，两人一起出席葬礼，互相支持、悼念，并带着孩子
// 认识家族的根。全新词汇领域：慰问用语/葬礼流程/追悼词/家族回忆。
// 处理态度：全程保持庄重、克制、真诚，不使用轻佻语气，聚焦于陪伴与支持。

GAME_CONTENT.scenes.push(
  {
    id: "the-phone-call",
    transition: { en: "One evening, Emma receives a call with sad news about her grandmother.", zh: "一天晚上，Emma接到一通电话，得知祖母去世的消息。" },
    title: "The Phone Call",
    subtitle: "家里 · 一通电话",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My grandmother passed away this morning.", zh: "我祖母今天早上去世了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I'm so sorry, I'm right here with you.", zh: "我很难过，我就在你身边。", correct: true, xp: 10 },
          { text: "That's fine, these things happen sometimes.", correct: false }
        ],
        hintOnWrong: "过去时表达慰问 → I'm so sorry, I'm right here with you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I don't really know what I need right now.", zh: "我现在真的不知道自己需要什么。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's okay, you don't need to know right now.", zh: "没关系，你现在不需要知道。", correct: true, xp: 10 },
          { text: "That's odd, you should figure it out quickly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's okay, you don't need to know right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you just hold me for a while?", zh: "你能就这样抱着我一会儿吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, I can hold you as long as you need.", zh: "当然可以，你需要多久我就抱多久。", correct: true, xp: 10 },
          { text: "I can't right now, I have things to do.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → Of course, I can hold you as long as you need.",
        next: null
      }
    }
  },
  {
    id: "making-arrangements",
    transition: { en: "The next day, they help Emma's family with funeral arrangements.", zh: "第二天，他们帮忙Emma的家人处理葬礼安排。" },
    title: "Making Arrangements",
    subtitle: "家里 · 处理安排",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you decided on a date for the service yet?", zh: "你们定好追悼仪式的日期了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've settled on this coming Saturday.", zh: "我们定在这个周六了。", correct: true, xp: 10 },
          { text: "We've never once discussed the date.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've settled on this coming Saturday.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you help me call some of the relatives?", zh: "你能帮我打电话通知一些亲戚吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, I can start calling right now.", zh: "当然可以，我现在就开始打。", correct: true, xp: 10 },
          { text: "Sorry, calling people isn't something I want to do.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → Of course, I can start calling right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you for handling all of this with me.", zh: "谢谢你和我一起处理这一切。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, we're in this together.", zh: "当然了，我们要一起面对。", correct: true, xp: 10 },
          { text: "Of course, though this isn't really my responsibility.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, we're in this together.",
        next: null
      }
    }
  },
  {
    id: "choosing-what-to-wear",
    transition: { en: "The morning of the service, they get ready quietly together.", zh: "追悼仪式当天早上，他们安静地一起准备。" },
    title: "Choosing What to Wear",
    subtitle: "家里 · 安静准备",
    avatar: "🖤",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you think this is appropriate for today?", zh: "你觉得今天穿这个合适吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that looks perfectly appropriate to me.", zh: "是的，在我看来这很合适。", correct: true, xp: 10 },
          { text: "No, that looks far too bright for today.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that looks perfectly appropriate to me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I keep thinking about the last time we visited her.", zh: "我一直在想我们上次去看她的情景。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm thinking about that too, honestly.", zh: "说实话，我也一直在想那次。", correct: true, xp: 10 },
          { text: "I'm not thinking about anything at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I'm thinking about that too, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever happens today, I'll stay close to you.", zh: "不管今天发生什么，我都会陪在你身边。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever happens, thank you for being here.", zh: "不管发生什么，谢谢你在我身边。", correct: true, xp: 10 },
          { text: "Whatever happens, I'd rather you kept your distance.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever happens, thank you for being here.",
        next: null
      }
    }
  },
  {
    id: "arriving-at-the-service",
    transition: { en: "Family and friends gather quietly at the funeral home.", zh: "亲友们安静地聚集在殡仪馆。" },
    title: "Arriving at the Service",
    subtitle: "殡仪馆 · 到达现场",
    avatar: "🕊️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "So many people came to pay their respects.", zh: "有这么多人来表达哀悼。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That says a lot about the life she lived.", zh: "这说明了她过去的人生有多么充实。", correct: true, xp: 10 },
          { text: "That seems unnecessary, honestly, for a small service.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That says a lot about the life she lived.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'm so sorry for your loss.", zh: "请节哀，我为你的失去感到难过。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, that means a lot to us.", zh: "谢谢你，这对我们意义重大。", correct: true, xp: 10 },
          { text: "Thank you, though we're actually doing just fine.", correct: false }
        ],
        hintOnWrong: "礼貌回应慰问 → Thank you, that means a lot to us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please, let us know if you need anything at all.", zh: "有什么需要请一定告诉我们。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thank you, just having you here helps.", zh: "谢谢，你能来就已经帮了很大忙。", correct: true, xp: 10 },
          { text: "Thank you, though we don't need anything from anyone.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thank you, just having you here helps.",
        next: null
      }
    }
  },
  {
    id: "the-eulogy",
    transition: { en: "Emma's father steps up to share a eulogy for his mother.", zh: "Emma的父亲上台为他的母亲致悼词。" },
    title: "The Eulogy",
    subtitle: "殡仪馆 · 追悼词",
    avatar: "🎙️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My mother taught me more than she ever knew.", zh: "我母亲教给我的，比她自己意识到的还要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "What a beautiful way to remember her.", zh: "这真是一种美好的怀念方式。", correct: true, xp: 10 },
          { text: "That's a strange thing to say at a funeral.", correct: false }
        ],
        hintOnWrong: "回应比较句 → What a beautiful way to remember her.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "She always believed family came before everything else.", zh: "她一直相信家庭比其他一切都重要。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "You could feel that in everything she did.", zh: "在她所做的每一件事里都能感受到这一点。", correct: true, xp: 10 },
          { text: "That's surprising, she never seemed to care much.", correct: false }
        ],
        hintOnWrong: "过去时回应 → You could feel that in everything she did.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even now, I feel her presence in this room.", zh: "即使是现在，我也能感受到她在这个房间里的存在。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even now, I feel it too, honestly.", zh: "说实话，即使是现在，我也有同样的感受。", correct: true, xp: 10 },
          { text: "Even now, I don't feel anything at all.", correct: false }
        ],
        hintOnWrong: "让步句 → Even now, I feel it too, honestly.",
        next: null
      }
    }
  },
  {
    id: "sharing-memories",
    transition: { en: "Afterward, family members quietly share favorite memories of her.", zh: "仪式过后，家人们静静地分享着关于她的美好回忆。" },
    title: "Sharing Memories",
    subtitle: "殡仪馆 · 分享回忆",
    avatar: "💭",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you remember how she always made too much food?", zh: "你还记得她总是做太多菜吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I remember, and it was always delicious.", zh: "我记得，而且每次都很好吃。", correct: true, xp: 10 },
          { text: "I don't remember her cooking at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I remember, and it was always delicious.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "She had a way of making everyone feel welcome.", zh: "她总有办法让每个人都感到宾至如归。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "She really did, I felt that from the first day.", zh: "确实是这样，我从第一天起就感受到了。", correct: true, xp: 10 },
          { text: "She really didn't, I always felt out of place.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → She really did, I felt that from the first day.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I wish our baby could have met her.", zh: "我真希望我们的宝宝能见到她。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "If they had, she would have loved this baby so much.", zh: "如果见到了，她一定会非常爱这个宝宝。", correct: true, xp: 10 },
          { text: "If they had, it wouldn't have made any difference.", correct: false }
        ],
        hintOnWrong: "虚拟语气 → If they had, she would have loved this baby so much.",
        next: null
      }
    }
  },
  {
    id: "supporting-each-other",
    transition: { en: "Emma quietly steps outside, and he follows to be with her.", zh: "Emma悄悄走出去，他跟了出去陪着她。" },
    title: "Supporting Each Other",
    subtitle: "殡仪馆外 · 互相支持",
    avatar: "🤝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I just needed a moment to breathe.", zh: "我只是需要一点时间喘口气。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's completely understandable, take all the time you need.", zh: "这完全可以理解，你需要多久都可以。", correct: true, xp: 10 },
          { text: "That's strange, you should be inside with everyone.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's completely understandable, take all the time you need.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Thank you for not leaving my side today.", zh: "谢谢你今天一直没有离开我身边。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Always, I'll never leave your side.", zh: "永远如此，我永远不会离开你身边。", correct: true, xp: 10 },
          { text: "You're welcome, though it wasn't really a big deal.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Always, I'll never leave your side.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I love you, and I'm grateful we're facing this together.", zh: "我爱你，也很感激我们能一起面对这些。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I love you too, more than words can say.", zh: "我也爱你，这份爱难以用言语表达。", correct: true, xp: 10 },
          { text: "I love you too, though today feels distant somehow.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I love you too, more than words can say.",
        next: null
      }
    }
  },
  {
    id: "meeting-relatives",
    transition: { en: "They introduce the baby to relatives Emma hasn't seen in years.", zh: "他们把宝宝介绍给Emma多年未见的亲戚们。" },
    title: "Meeting Relatives",
    subtitle: "殡仪馆 · 见亲戚",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this the baby we've all been hearing about?", zh: "这就是我们一直听说的那个宝宝吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It is, we're so glad you get to meet them.", zh: "没错，很高兴你能见到他们。", correct: true, xp: 10 },
          { text: "It isn't, this baby belongs to someone else.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → It is, we're so glad you get to meet them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your great-grandmother would have adored this little one.", zh: "你的曾祖母一定会非常疼爱这个小家伙。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "I believe she would have, without a doubt.", zh: "我相信她一定会，毫无疑问。", correct: true, xp: 10 },
          { text: "I doubt it, she never liked babies much.", correct: false }
        ],
        hintOnWrong: "虚拟语气回应 → I believe she would have, without a doubt.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's good to see this family staying close, even now.", zh: "看到这个家族即使在这种时候依然团结在一起，真好。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even now, family is what matters most.", zh: "即使是现在，家人才是最重要的。", correct: true, xp: 10 },
          { text: "Even now, we're mostly just going through the motions.", correct: false }
        ],
        hintOnWrong: "让步句 → Even now, family is what matters most.",
        next: null
      }
    }
  },
  {
    id: "the-drive-home-that-evening",
    transition: { en: "That evening, they drive home quietly, holding hands at every red light.", zh: "那天晚上，他们静静地开车回家，每次遇到红灯都会牵着手。" },
    title: "The Drive Home That Evening",
    subtitle: "车上 · 归途",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Today was harder than I expected it to be.", zh: "今天比我预想的要难熬。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, but you got through it.", zh: "确实是，但你熬过来了。", correct: true, xp: 10 },
          { text: "It really wasn't, today felt easy to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, but you got through it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How are you feeling now that it's over?", zh: "现在一切都结束了，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Sad, but also strangely at peace.", zh: "很难过，但也有种奇怪的平静感。", correct: true, xp: 10 },
          { text: "I don't feel anything about it at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → Sad, but also strangely at peace.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "She's gone, but everything she gave us stays with us.", zh: "她走了，但她给予我们的一切都会一直陪伴着我们。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, forever, in the way we love.", zh: "确实如此，它会一直存在，藏在我们爱人的方式里。", correct: true, xp: 10 },
          { text: "It really doesn't, memories tend to fade quickly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, forever, in the way we love.",
        next: null
      }
    }
  },
  {
    id: "a-few-weeks-later",
    transition: { en: "A few weeks later, they visit the cemetery together, quietly at peace.", zh: "几周后，他们一起去墓地探望，心中已渐渐平静。" },
    title: "A Few Weeks Later",
    subtitle: "墓地 · 静静探望",
    avatar: "🌸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I brought some flowers from her favorite garden.", zh: "我带来了一些她最喜欢的花园里的花。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's such a lovely thing to do.", zh: "这真是件很美好的事。", correct: true, xp: 10 },
          { text: "That's strange, flowers don't really mean anything.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's such a lovely thing to do.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've healed more than I thought we would by now.", zh: "到现在为止，我们的疗愈比我预想的要好。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, one day at a time.", zh: "确实如此，一天天慢慢来的。", correct: true, xp: 10 },
          { text: "We really haven't, nothing has gotten any easier.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, one day at a time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how much time passes, we'll always remember her.", zh: "不管过去多少时间，我们都会一直记得她。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how much time, we'll carry her with us.", zh: "不管过去多少时间，我们都会带着她一同前行。", correct: true, xp: 10 },
          { text: "No matter how much time, we'll probably forget eventually.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how much time, we'll carry her with us.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "grandmother", zh: "祖母，外祖母", category: "community" },
  { en: "passed away", zh: "去世了", category: "community" },
  { en: "sad news", zh: "悲伤的消息", category: "community" },
  { en: "arrangements", zh: "安排", category: "community" },
  { en: "service", zh: "追悼仪式", category: "community" },
  { en: "settled on", zh: "定下了", category: "community" },
  { en: "relatives", zh: "亲戚（复数）", category: "community" },
  { en: "handling", zh: "处理", category: "community" },
  { en: "in this together", zh: "一起面对", category: "community" },
  { en: "appropriate", zh: "合适的", category: "community" },
  { en: "keep close", zh: "陪伴在身边", category: "community" },
  { en: "funeral home", zh: "殡仪馆", category: "community" },
  { en: "pay their respects", zh: "表达哀悼", category: "community" },
  { en: "loss", zh: "失去，逝去", category: "community" },
  { en: "eulogy", zh: "追悼词", category: "community" },
  { en: "beautiful way", zh: "美好的方式", category: "community" },
  { en: "believed", zh: "相信过", category: "community" },
  { en: "presence", zh: "存在，在场", category: "community" },
  { en: "memories", zh: "回忆（复数）", category: "community" },
  { en: "delicious", zh: "美味的", category: "community" },
  { en: "made everyone feel welcome", zh: "让每个人都感到宾至如归", category: "community" },
  { en: "out of place", zh: "格格不入", category: "community" },
  { en: "adored", zh: "疼爱过", category: "community" },
  { en: "without a doubt", zh: "毫无疑问", category: "community" },
  { en: "staying close", zh: "保持亲近", category: "community" },
  { en: "going through the motions", zh: "机械地应付", category: "community" },
  { en: "harder", zh: "更难的（hard 比较级）", category: "community" },
  { en: "got through it", zh: "熬过来了", category: "community" },
  { en: "at peace", zh: "内心平静的", category: "community" },
  { en: "gone", zh: "已经离去的", category: "community" },
  { en: "stays with us", zh: "一直陪伴着我们", category: "community" },
  { en: "fade", zh: "淡去", category: "community" },
  { en: "cemetery", zh: "墓地", category: "community" },
  { en: "flowers", zh: "花（复数）", category: "community" },
  { en: "favorite garden", zh: "最喜欢的花园", category: "community" },
  { en: "lovely", zh: "美好的", category: "community" },
  { en: "healed", zh: "疗愈了", category: "community" },
  { en: "one day at a time", zh: "一天天慢慢来", category: "community" },
  { en: "carry", zh: "带着", category: "community" }
);
