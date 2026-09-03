// 内容数据层：第十六章，紧接第十五章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter15.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（跟第十三/十四/十五章同一个 tier，见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 第四个新 grammarTag：
//   - concession（structure，占"一课一个新点"名额，3课内必须复现）：
//     让步/对比连接词（although/despite/however，比L2的because/so更进一步），
//     第3课（although-we-struggle）引入，第3/6/9课多次复现。
// subjunctive/past-perfect/reported-speech（L4）与L3四个点继续复现巩固。
//
// 剧情：不是一路顺风——翻修和运营的实际花费比预算的多，Lily's House遇到
// 第一次真正的危机。靠社区众筹办法撑过去，呼应"新生"主题里"新生不是一路
// 平坦"的真实感。

GAME_CONTENT.scenes.push(
  {
    id: "the-funding-gap",
    transition: { en: "Two months in, Emma looks over the numbers with a worried face.", zh: "两个月过去，Emma皱着眉看着账目。" },
    title: "The Funding Gap",
    subtitle: "书店里 · 发现资金缺口",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The heating bill was higher than we budgeted for.", zh: "取暖费比我们预算的要高。", voice: "emma" },
        skill: "work",
        grammarTag: "comparative",
        choices: [
          { text: "Higher than we planned — how much higher?", zh: "比计划的高——高多少？", correct: true, xp: 10 },
          { text: "Higher than we planned doesn't matter.", correct: false }
        ],
        hintOnWrong: "用比较级追问 → Higher than we planned — how much higher?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "By next month, we'll have spent more than we brought in.", zh: "到下个月，我们花的会比筹到的还多。", voice: "emma" },
        skill: "work",
        grammarTag: "past-perfect",
        choices: [
          { text: "We hadn't planned for this at all, had we?", zh: "我们完全没料到这一点，是吧？", correct: true, xp: 10 },
          { text: "We had planned for exactly this.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → We hadn't planned for this at all, had we?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I didn't want to worry anyone, but we need to talk about it.", zh: "我不想让大家担心，但我们得谈谈这件事。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "It's better that we talk about it now.", zh: "现在谈这个反而更好。", correct: true, xp: 10 },
          { text: "It's better if we ignore it for now.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It's better that we talk about it now.",
        next: null
      }
    }
  },
  {
    id: "hard-conversations",
    transition: { en: "That evening, everyone meets to face the problem together.", zh: "那天晚上，大家聚在一起面对这个问题。" },
    title: "Hard Conversations",
    subtitle: "Lily之家 · 难以启齿的话题",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How bad is it, really?", zh: "情况到底有多糟？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "How much time do we actually have?", zh: "我们实际上还有多少时间？", correct: true, xp: 10 },
          { text: "How is that even possible?", correct: false }
        ],
        hintOnWrong: "追问细节 → How much time do we actually have?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If nothing changes, we'll have to close by spring.", zh: "如果情况不改变，我们春天前就得关门了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, we'd better act now.", zh: "如果是真的，那我们最好现在就行动。", correct: true, xp: 10 },
          { text: "If that's true, there's nothing to do.", correct: false }
        ],
        hintOnWrong: "用条件句 → If that's true, we'd better act now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We didn't come this far to give up now.", zh: "我们不是走了这么远才要现在放弃的。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We definitely didn't come this far for nothing.", zh: "我们肯定不是白走了这么远的路。", correct: true, xp: 10 },
          { text: "Maybe it's time to give up, though.", correct: false }
        ],
        hintOnWrong: "用过去时坚定表态 → We definitely didn't come this far for nothing.",
        next: null
      }
    }
  },
  {
    id: "although-we-struggle",
    title: "Although We Struggle",
    subtitle: "Lily之家 · 尽管困难重重",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Although we're short on money, we're not short on people who care.", zh: "尽管我们缺钱，但我们不缺关心这件事的人。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Although money is tight, that matters more.", zh: "尽管手头紧张，但这一点更重要。", correct: true, xp: 10 },
          { text: "Although money is tight, nothing else matters.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although money is tight, that matters more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Despite everything, this place has already changed lives.", zh: "尽管有这么多困难，这个地方已经改变了很多人的生活。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Despite the money trouble, that's still true.", zh: "尽管有资金问题，这一点依然成立。", correct: true, xp: 10 },
          { text: "Despite the money trouble, none of that matters.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Despite the money trouble, that's still true.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "So, what do we do about it?", zh: "那，我们该怎么办呢？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "What can we actually try first?", zh: "我们实际上可以先试试什么呢？", correct: true, xp: 10 },
          { text: "What we do doesn't matter now.", correct: false }
        ],
        hintOnWrong: "追问下一步 → What can we actually try first?",
        next: null
      }
    }
  },
  {
    id: "asking-emma-for-help",
    title: "Asking for Ideas",
    subtitle: "书店里 · 集思广益",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What if we asked the newspaper's readers directly?", zh: "要是我们直接向报纸的读者求助呢？", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If we asked them, some would surely help.", zh: "如果我们求助，肯定会有人愿意帮忙。", correct: true, xp: 10 },
          { text: "If we asked them, nobody would care.", correct: false }
        ],
        hintOnWrong: "用条件句 → If we asked them, some would surely help.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Or we could throw a fundraiser, right here at the house.", zh: "或者我们可以在这栋房子里办一场募捐活动。", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "We could, and I think we should.", zh: "我们可以，而且我觉得应该这么做。", correct: true, xp: 10 },
          { text: "We couldn't organize that in time.", correct: false }
        ],
        hintOnWrong: "用 can/could 回应 → We could, and I think we should.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's do both — the article and the event.", zh: "我们两个都做——报道和活动都要。" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do both, why choose just one?", zh: "两个都做吧，何必只选一个呢？", correct: true, xp: 10 },
          { text: "Let's just pick the easier one.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's do both, why choose just one?",
        next: null
      }
    }
  },
  {
    id: "the-community-responds",
    transition: { en: "Word gets out, and the response is immediate.", zh: "消息传开了，回应来得很快。" },
    title: "The Community Responds",
    subtitle: "Lily之家 · 社区的回应",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Someone dropped off an envelope. It just says 'For Lily's House.'", zh: "有人送来了一个信封。上面只写着「给Lily之家」。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Whoever left that, they believed in us.", zh: "不管是谁留下的，他们都相信我们。", correct: true, xp: 10 },
          { text: "Whoever left that probably made a mistake.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Whoever left that, they believed in us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "One of your old students said she'd never forget what this place gave her.", zh: "你以前的一位学员说，她永远不会忘记这个地方给她的一切。" },
        skill: "community",
        grammarTag: "reported-speech",
        choices: [
          { text: "She said that? That means everything.", zh: "她这么说？这对我们意义重大。", correct: true, xp: 10 },
          { text: "She said that, but it changes nothing.", correct: false }
        ],
        hintOnWrong: "用间接引语回应 → She said that? That means everything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's not enough to fix everything, but it's a real start.", zh: "这还不够解决所有问题，但已经是个真正的开始了。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Although it's not enough, it's a real start.", zh: "尽管还不够，但这是个真正的开始。", correct: true, xp: 10 },
          { text: "Although it's not enough, it means nothing.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although it's not enough, it's a real start.",
        next: null
      }
    }
  },
  {
    id: "a-fundraiser-idea",
    title: "Planning the Fundraiser",
    subtitle: "Lily之家 · 筹划募捐活动",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We should have music, food, and stories from the students.", zh: "我们应该有音乐、食物，还有学员们的故事分享。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Stories from the students would move everyone.", zh: "学员们的故事一定会打动所有人。", correct: true, xp: 10 },
          { text: "Stories from the students seem unnecessary.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Stories from the students would move everyone.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you design a poster for it?", zh: "你能设计一张海报吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I can have one ready by tomorrow.", zh: "没问题，我明天就能弄好一张。", correct: true, xp: 10 },
          { text: "I can't design anything, sorry.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, I can have one ready by tomorrow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By the time the night comes, everything needs to be ready.", zh: "到活动那晚，一切都得准备就绪。", voice: "emma" },
        skill: "work",
        grammarTag: "past-perfect",
        choices: [
          { text: "By then, we'll have finished everything.", zh: "到那时，我们会把一切都准备好的。", correct: true, xp: 10 },
          { text: "By then, nothing will be finished.", correct: false }
        ],
        hintOnWrong: "用过去完成时/将来完成时表达 → By then, we'll have finished everything.",
        next: null
      }
    }
  },
  {
    id: "organizing-the-fundraiser",
    title: "Getting Everything Ready",
    subtitle: "Lily之家 · 紧锣密鼓地准备",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you set up the chairs in a big circle?", zh: "你能把椅子摆成一个大圈吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, a big circle it is.", zh: "没问题，就摆成大圈。", correct: true, xp: 10 },
          { text: "I can't move that many chairs alone.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, a big circle it is.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The students have already made signs for the door.", zh: "学员们已经做好了门口的标牌。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They've already made signs? That's so sweet.", zh: "他们已经做好标牌了？真是太贴心了。", correct: true, xp: 10 },
          { text: "They haven't made anything at all.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → They've already made signs? That's so sweet.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone's pitching in without being asked.", zh: "大家都不用问就主动来帮忙了。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "Nobody needs to be asked twice, it seems.", zh: "看来根本不用问第二遍。", correct: true, xp: 10 },
          { text: "Everyone needs to be asked repeatedly.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Nobody needs to be asked twice, it seems.",
        next: null
      }
    }
  },
  {
    id: "the-fundraiser-night",
    transition: { en: "Saturday night, Lily's House fills with music and voices.", zh: "周六晚上，Lily之家充满了音乐和人声。" },
    title: "The Fundraiser Night",
    subtitle: "Lily之家 · 募捐之夜",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've never seen this many people in one room.", zh: "我从没见过这么多人挤在一间屋子里。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I haven't either, and I love it.", zh: "我也没见过，我很喜欢这样。", correct: true, xp: 10 },
          { text: "I've seen way more than this, actually.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I haven't either, and I love it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "One student is about to tell her story to everyone.", zh: "有一位学员马上就要向大家讲述她的故事了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "She's about to speak — let's listen closely.", zh: "她要开始讲了——我们仔细听吧。", correct: true, xp: 10 },
          { text: "She's not ready to speak at all.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → She's about to speak — let's listen closely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By the end of the night, we'd raised more than double our goal.", zh: "到当晚结束时，我们已经筹到了超过目标两倍的钱。" },
        skill: "community",
        grammarTag: "past-perfect",
        choices: [
          { text: "We'd raised double? I can hardly believe it.", zh: "已经筹到两倍了？我简直不敢相信。", correct: true, xp: 10 },
          { text: "We'd raised nothing at all, sadly.", correct: false }
        ],
        hintOnWrong: "用过去完成时 → We'd raised double? I can hardly believe it.",
        next: null
      }
    }
  },
  {
    id: "despite-the-odds",
    title: "Despite the Odds",
    subtitle: "Lily之家 · 深夜的感慨",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Despite how scared we were a week ago, look at us now.", zh: "尽管一周前我们那么害怕，你看看我们现在。", voice: "emma" },
        skill: "work",
        grammarTag: "concession",
        choices: [
          { text: "Despite the fear, we made it through.", zh: "尽管害怕，我们还是挺过来了。", correct: true, xp: 10 },
          { text: "Despite the fear, nothing has changed.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Despite the fear, we made it through.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "However hard it gets, this community shows up.", zh: "无论有多难，这个社区都会挺身而出。", voice: "emma" },
        skill: "work",
        grammarTag: "concession",
        choices: [
          { text: "However hard, we're never really alone.", zh: "无论多难，我们其实从不孤单。", correct: true, xp: 10 },
          { text: "However hard, we're always on our own.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → However hard, we're never really alone.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I think we're going to be okay.", zh: "我觉得我们会没事的。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "We're going to be more than okay.", zh: "我们会不只是没事，会很好。", correct: true, xp: 10 },
          { text: "We're going to close soon, probably.", correct: false }
        ],
        hintOnWrong: "用 will/going to 表示预测 → We're going to be more than okay.",
        next: null
      }
    }
  },
  {
    id: "we-made-it",
    transition: { en: "The next morning, the numbers finally make sense again.", zh: "第二天早上，账目终于又能对得上了。" },
    title: "We Made It",
    subtitle: "书店里 · 危机过去了",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We're not just surviving anymore. We're actually growing.", zh: "我们不再只是勉强维持了。我们真的在成长。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're growing, and it feels incredible.", zh: "我们在成长，这感觉太棒了。", correct: true, xp: 10 },
          { text: "We're barely surviving, still.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → We're growing, and it feels incredible.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I wish I hadn't been so scared to ask for help.", zh: "我真希望自己当初没那么害怕开口求助。", voice: "emma" },
        skill: "work",
        grammarTag: "subjunctive",
        choices: [
          { text: "I wish I hadn't waited so long either.", zh: "我也希望自己没等那么久。", correct: true, xp: 10 },
          { text: "I wish we had never asked at all.", correct: false }
        ],
        hintOnWrong: "用虚拟语气 → I wish I hadn't waited so long either.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Although the hard part isn't over, I feel ready for it now.", zh: "尽管困难的部分还没过去，但我现在觉得自己已经准备好了。", voice: "emma" },
        skill: "work",
        grammarTag: "concession",
        choices: [
          { text: "Although it's not over, we're ready together.", zh: "尽管还没结束，但我们已经准备好一起面对了。", correct: true, xp: 10 },
          { text: "Although it's not over, I'd rather quit now.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although it's not over, we're ready together.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Higher than we planned — how much higher?", zh: "比计划的高——高多少？" },
  { en: "We hadn't planned for this at all, had we?", zh: "我们完全没料到这一点，是吧？" },
  { en: "It's better that we talk about it now.", zh: "现在谈这个反而更好。" },
  { en: "How much time do we actually have?", zh: "我们实际上还有多少时间？" },
  { en: "If that's true, we'd better act now.", zh: "如果是真的，那我们最好现在就行动。" },
  { en: "We definitely didn't come this far for nothing.", zh: "我们肯定不是白走了这么远的路。" },
  { en: "Although money is tight, that matters more.", zh: "尽管手头紧张，但这一点更重要。" },
  { en: "Despite the money trouble, that's still true.", zh: "尽管有资金问题，这一点依然成立。" },
  { en: "What can we actually try first?", zh: "我们实际上可以先试试什么呢？" },
  { en: "If we asked them, some would surely help.", zh: "如果我们求助，肯定会有人愿意帮忙。" },
  { en: "We could, and I think we should.", zh: "我们可以，而且我觉得应该这么做。" },
  { en: "Let's do both, why choose just one?", zh: "两个都做吧，何必只选一个呢？" },
  { en: "Whoever left that, they believed in us.", zh: "不管是谁留下的，他们都相信我们。" },
  { en: "She said that? That means everything.", zh: "她这么说？这对我们意义重大。" },
  { en: "Although it's not enough, it's a real start.", zh: "尽管还不够，但这是个真正的开始。" },
  { en: "Stories from the students would move everyone.", zh: "学员们的故事一定会打动所有人。" },
  { en: "Sure, I can have one ready by tomorrow.", zh: "没问题，我明天就能弄好一张。" },
  { en: "By then, we'll have finished everything.", zh: "到那时，我们会把一切都准备好的。" },
  { en: "Sure, a big circle it is.", zh: "没问题，就摆成大圈。" },
  { en: "They've already made signs? That's so sweet.", zh: "他们已经做好标牌了？真是太贴心了。" },
  { en: "Nobody needs to be asked twice, it seems.", zh: "看来根本不用问第二遍。" },
  { en: "I haven't either, and I love it.", zh: "我也没见过，我很喜欢这样。" },
  { en: "She's about to speak — let's listen closely.", zh: "她要开始讲了——我们仔细听吧。" },
  { en: "We'd raised double? I can hardly believe it.", zh: "已经筹到两倍了？我简直不敢相信。" },
  { en: "Despite the fear, we made it through.", zh: "尽管害怕，我们还是挺过来了。" },
  { en: "However hard, we're never really alone.", zh: "无论多难，我们其实从不孤单。" },
  { en: "We're going to be more than okay.", zh: "我们会不只是没事，会很好。" },
  { en: "We're growing, and it feels incredible.", zh: "我们在成长，这感觉太棒了。" },
  { en: "I wish I hadn't waited so long either.", zh: "我也希望自己没等那么久。" },
  { en: "Although it's not over, we're ready together.", zh: "尽管还没结束，但我们已经准备好一起面对了。" }
);
