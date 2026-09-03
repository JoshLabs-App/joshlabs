// 内容数据层：第二十九章，紧接第二十八章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter28.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：宝宝出生前，一家人还决定领养一只狗陪伴成长。全新词汇领域：
// 收容所领养/兽医体检/训练/磨合期。

GAME_CONTENT.scenes.push(
  {
    id: "visiting-the-shelter",
    transition: { en: "On a quiet weekend, they visit an animal shelter.", zh: "一个安静的周末，他们去了一家动物收容所。" },
    title: "Visiting the Shelter",
    subtitle: "收容所 · 参观",
    avatar: "🐕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you hoping to adopt a puppy or an older dog?", zh: "你们是想领养幼犬还是成年犬？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "An older dog might actually suit us better.", zh: "成年犬可能其实更适合我们。", correct: true, xp: 10 },
          { text: "A puppy would be way too calm for us.", correct: false }
        ],
        hintOnWrong: "陈述句表达偏好 → An older dog might actually suit us better.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you had a dog before?", zh: "你们以前养过狗吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've never had one, but we've read a lot.", zh: "我们从没养过，但看了很多资料。", correct: true, xp: 10 },
          { text: "We're having one at this exact moment.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've never had one, but we've read a lot.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This dog is calmer than most of the others here.", zh: "这只狗比这里的大多数狗都要安静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Calmer sounds perfect with a baby on the way.", zh: "宝宝快出生了，安静一点正合适。", correct: true, xp: 10 },
          { text: "Calmer sounds boring, we want an energetic one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Calmer sounds perfect with a baby on the way.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-dog",
    transition: { en: "A volunteer brings the dog out to meet them.", zh: "一位志愿者把这只狗带出来见他们。" },
    title: "Meeting the Dog",
    subtitle: "收容所 · 初次见面",
    avatar: "🐕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What's his name and how old is he?", zh: "他叫什么名字，多大了？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "His name is Biscuit, and he's about four.", zh: "他叫比斯吉，大概四岁。", correct: true, xp: 10 },
          { text: "His name doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → His name is Biscuit, and he's about four.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you sit down here so he gets used to you?", zh: "你能坐在这里让他熟悉一下你吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can definitely sit here for a while.", zh: "我完全可以在这儿坐一会儿。", correct: true, xp: 10 },
          { text: "I can't sit still for even a minute.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can definitely sit here for a while.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "He's sniffing your hand, that's a good sign.", zh: "他在闻你的手，这是个好迹象。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "He's warming up to me already.", zh: "他已经开始对我有好感了。", correct: true, xp: 10 },
          { text: "He's ignoring me completely right now.", correct: false }
        ],
        hintOnWrong: "现在进行时 → He's warming up to me already.",
        next: null
      }
    }
  },
  {
    id: "the-adoption-interview",
    transition: { en: "A staff member asks a few questions before approving the adoption.", zh: "一位工作人员在批准领养前问了几个问题。" },
    title: "The Adoption Interview",
    subtitle: "收容所 · 领养面谈",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you have a fenced yard at home?", zh: "你们家里有围栏院子吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we have a small fenced yard.", zh: "是的，我们有一个小的围栏院子。", correct: true, xp: 10 },
          { text: "No, we live inside an active volcano.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, we have a small fenced yard.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If he has anxiety, will you commit to training?", zh: "如果他有焦虑情绪，你们会坚持训练吗？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that happens, we'll absolutely commit to training.", zh: "如果真是那样，我们一定会坚持训练。", correct: true, xp: 10 },
          { text: "If that happens, we'll just give up on him.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that happens, we'll absolutely commit to training.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll follow up with a home visit next week.", zh: "我们下周会安排一次家访跟进。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's fine, we'll be ready for the visit.", zh: "没问题，我们会为家访做好准备。", correct: true, xp: 10 },
          { text: "That's odd, a visit seems unnecessary to us.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's fine, we'll be ready for the visit.",
        next: null
      }
    }
  },
  {
    id: "the-vet-checkup",
    transition: { en: "Before bringing him home, they take him for a vet checkup.", zh: "带他回家前，他们先带他去做兽医体检。" },
    title: "The Vet Checkup",
    subtitle: "兽医院 · 体检",
    avatar: "🐾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has he had all of his vaccinations?", zh: "他所有的疫苗都打过了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "He's had most, but he's due for one more.", zh: "大部分都打了，但还差一针。", correct: true, xp: 10 },
          { text: "He's having a vaccination this very second.", correct: false }
        ],
        hintOnWrong: "现在完成时 → He's had most, but he's due for one more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "His weight is actually pretty healthy for his size.", zh: "以他的体型来说，他的体重其实挺健康的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's great news, I was a little worried.", zh: "这真是个好消息，我之前还有点担心。", correct: true, xp: 10 },
          { text: "That's bad news, we expected him to be thinner.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's great news, I was a little worried.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please bring him back if he seems off in any way.", zh: "如果他有任何不对劲的地方，请带他回来。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll keep a close eye on him.", zh: "当然，我们会密切留意他的状态。", correct: true, xp: 10 },
          { text: "Of course, though we probably won't notice anything.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll keep a close eye on him.",
        next: null
      }
    }
  },
  {
    id: "the-first-night-home",
    transition: { en: "The dog's first night in the new house is a little rough.", zh: "这只狗在新家的第一晚有点不顺利。" },
    title: "The First Night Home",
    subtitle: "新家 · 第一晚",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "He's whining and pacing by the door.", zh: "他在门边呜咽着来回走动。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "He's probably just nervous in a new place.", zh: "他可能只是在陌生的地方感到紧张。", correct: true, xp: 10 },
          { text: "He's clearly enjoying every second of this.", correct: false }
        ],
        hintOnWrong: "现在进行时 → He's probably just nervous in a new place.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we let him sleep in our room tonight?", zh: "我们今晚要不要让他睡在我们房间？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, just for tonight, that should help.", zh: "好，就今晚，这样应该会有帮助。", correct: true, xp: 10 },
          { text: "No, he should sleep outside in the yard.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, just for tonight, that should help.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we stay calm, he'll settle down eventually.", zh: "如果我们保持冷静，他最终会安定下来。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's just be patient.", zh: "如果真是这样，那我们就耐心一点吧。", correct: true, xp: 10 },
          { text: "If that's true, let's give up right now.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, let's just be patient.",
        next: null
      }
    }
  },
  {
    id: "obedience-class",
    transition: { en: "They sign the dog up for a basic obedience class.", zh: "他们给他报了一个基础服从训练课程。" },
    title: "Obedience Class",
    subtitle: "训练课 · 服从训练",
    avatar: "🎓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Does he know any commands already?", zh: "他已经会一些指令了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, he already knows sit and stay.", zh: "会的，他已经会坐下和等待了。", correct: true, xp: 10 },
          { text: "No, he doesn't understand a single word.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, he already knows sit and stay.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Consistency matters more than the exact commands you use.", zh: "一致性比你用的具体指令更重要。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, we'll try to stay consistent.", zh: "有道理，我们会尽量保持一致。", correct: true, xp: 10 },
          { text: "That makes no sense, exact words matter most.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, we'll try to stay consistent.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Great job today, and keep practicing at home.", zh: "今天表现很好，回家继续练习。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "Thanks, and we'll practice every single day.", zh: "谢谢，我们会每天都练习的。", correct: true, xp: 10 },
          { text: "Thanks, but practicing at home sounds tiring.", correct: false }
        ],
        hintOnWrong: "用连接词 → Thanks, and we'll practice every single day.",
        next: null
      }
    }
  },
  {
    id: "a-chewed-up-shoe",
    transition: { en: "They come home to find a chewed-up shoe.", zh: "他们回家发现一只鞋被咬烂了。" },
    title: "A Chewed-Up Shoe",
    subtitle: "新家 · 磨合期",
    avatar: "👟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What happened to your shoe?", zh: "你的鞋子怎么了？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "He chewed it up while we were out.", zh: "我们出门的时候他把它咬烂了。", correct: true, xp: 10 },
          { text: "Nothing happened, my shoe is perfectly fine.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → He chewed it up while we were out.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should buy him some proper chew toys.", zh: "我们应该给他买一些正经的咬胶玩具。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, let's get some this weekend.", zh: "好主意，我们这周末就去买。", correct: true, xp: 10 },
          { text: "Bad idea, he doesn't need any toys.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, let's get some this weekend.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Try not to be too upset, it's a common phase.", zh: "别太生气了，这是很常见的一个阶段。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "You're right, and it's just an old shoe anyway.", zh: "你说得对，反正也只是一只旧鞋子。", correct: true, xp: 10 },
          { text: "You're right, but I'm still furious about it.", correct: false }
        ],
        hintOnWrong: "用连接词 → You're right, and it's just an old shoe anyway.",
        next: null
      }
    }
  },
  {
    id: "puppy-proofing-again",
    transition: { en: "With both a baby and a dog coming, they baby-proof and dog-proof the house together.", zh: "宝宝和狗都快到位了，他们一起把家里做了防护。" },
    title: "Puppy-Proofing Again",
    subtitle: "新家 · 加强防护",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We already baby-proofed the outlets last month.", zh: "我们上个月已经给插座做了婴儿防护。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Good, now let's dog-proof the low cabinets too.", zh: "很好，我们再把低处的柜子也做好狗狗防护。", correct: true, xp: 10 },
          { text: "Good, the low cabinets don't need any changes.", correct: false }
        ],
        hintOnWrong: "过去时陈述 → Good, now let's dog-proof the low cabinets too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you move the trash can somewhere he can't reach?", zh: "你能把垃圾桶挪到他够不到的地方吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can move it under the sink right now.", zh: "我现在就能把它挪到水槽下面。", correct: true, xp: 10 },
          { text: "I can't be bothered to move anything today.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can move it under the sink right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This house is getting ready for two new family members.", zh: "这个家正在为两位新家庭成员做准备。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It really is, and we couldn't be more excited.", zh: "确实如此，我们非常激动。", correct: true, xp: 10 },
          { text: "It really isn't, nothing has changed here at all.", correct: false }
        ],
        hintOnWrong: "现在进行时 → It really is, and we couldn't be more excited.",
        next: null
      }
    }
  },
  {
    id: "introducing-the-dog-to-the-crib",
    transition: { en: "They let the dog sniff around the finished nursery.", zh: "他们让狗在装修好的婴儿房里到处闻一闻。" },
    title: "Introducing the Dog to the Crib",
    subtitle: "婴儿房 · 提前适应",
    avatar: "🐕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Let him sniff the crib so he gets curious, not scared.", zh: "让他闻闻婴儿床，这样他会好奇而不是害怕。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that slowly, one step at a time.", zh: "我们慢慢来，一步一步地进行。", correct: true, xp: 10 },
          { text: "Let's just keep him out of this room forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that slowly, one step at a time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "He seems calm and pretty curious about the room.", zh: "他看起来很平静，对这个房间也挺好奇的。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, I was worried he'd be anxious.", zh: "这让我安心多了，我之前担心他会焦虑。", correct: true, xp: 10 },
          { text: "That's concerning, calm dogs worry me the most.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, I was worried he'd be anxious.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll keep practicing this every few days before the baby comes.", zh: "在宝宝出生前，我们会每隔几天就这样练习一次。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That sounds like a really solid plan.", zh: "这听起来是个非常靠谱的计划。", correct: true, xp: 10 },
          { text: "That sounds like way too much effort.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That sounds like a really solid plan.",
        next: null
      }
    }
  },
  {
    id: "one-big-family",
    transition: { en: "The couple looks around at the nursery, the dog, and each other.", zh: "夫妻俩看看婴儿房，看看狗，又看看彼此。" },
    title: "One Big Family",
    subtitle: "新家 · 一家人",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've come such a long way since we met, haven't we?", zh: "从我们相遇到现在，我们已经走了很长的路，不是吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and I wouldn't change a thing.", zh: "确实是这样，我什么都不想改变。", correct: true, xp: 10 },
          { text: "We really haven't, everything feels exactly the same.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and I wouldn't change a thing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How does it feel knowing our family is about to grow?", zh: "想到我们的家庭即将壮大，你感觉如何？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels overwhelming in the best possible way.", zh: "感觉难以置信，但是是最美好的那种。", correct: true, xp: 10 },
          { text: "It doesn't feel like anything special to me.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → It feels overwhelming in the best possible way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's promise to figure it all out together, no matter what.", zh: "我们约定好，不管发生什么都要一起面对。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's promise that, together, always.", zh: "我们约定好，永远在一起面对。", correct: true, xp: 10 },
          { text: "Let's not make any promises right now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's promise that, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "shelter", zh: "收容所", category: "community" },
  { en: "adopt", zh: "领养", category: "community" },
  { en: "puppy", zh: "幼犬", category: "community" },
  { en: "older", zh: "年纪更大的", category: "community" },
  { en: "suit", zh: "适合", category: "community" },
  { en: "calmer", zh: "更安静的（calm 比较级）", category: "community" },
  { en: "energetic", zh: "精力充沛的", category: "community" },
  { en: "volunteer", zh: "志愿者", category: "community" },
  { en: "used to", zh: "习惯于", category: "community" },
  { en: "sniffing", zh: "闻（现在分词）", category: "community" },
  { en: "sign", zh: "迹象", category: "community" },
  { en: "warming up to", zh: "开始喜欢上", category: "community" },
  { en: "ignoring", zh: "忽视", category: "community" },
  { en: "fenced", zh: "有围栏的", category: "community" },
  { en: "yard", zh: "院子", category: "community" },
  { en: "anxiety", zh: "焦虑", category: "community" },
  { en: "commit", zh: "承诺，投入", category: "community" },
  { en: "follow up", zh: "跟进", category: "community" },
  { en: "home visit", zh: "家访", category: "community" },
  { en: "vaccinations", zh: "疫苗接种", category: "community" },
  { en: "due for", zh: "该做……了", category: "community" },
  { en: "healthy", zh: "健康的", category: "community" },
  { en: "size", zh: "体型，尺寸", category: "community" },
  { en: "seems off", zh: "看起来不对劲", category: "community" },
  { en: "keep a close eye on", zh: "密切关注", category: "community" },
  { en: "whining", zh: "呜咽", category: "community" },
  { en: "pacing", zh: "来回走动", category: "community" },
  { en: "nervous", zh: "紧张的", category: "community" },
  { en: "settle down", zh: "安定下来", category: "community" },
  { en: "eventually", zh: "最终", category: "community" },
  { en: "patient", zh: "耐心的", category: "community" },
  { en: "commands", zh: "指令（复数）", category: "community" },
  { en: "sit", zh: "坐下（指令）", category: "community" },
  { en: "stay", zh: "等待（指令）", category: "community" },
  { en: "consistency", zh: "一致性", category: "community" },
  { en: "practicing", zh: "练习", category: "community" },
  { en: "chewed", zh: "咬（过去式）", category: "community" },
  { en: "chew toys", zh: "咬胶玩具", category: "community" },
  { en: "upset", zh: "生气的，难过的", category: "community" },
  { en: "common", zh: "常见的", category: "community" },
  { en: "phase", zh: "阶段", category: "community" },
  { en: "baby-proofed", zh: "做了婴儿防护", category: "community" },
  { en: "outlets", zh: "插座（复数）", category: "community" },
  { en: "dog-proof", zh: "做狗狗防护", category: "community" },
  { en: "cabinets", zh: "柜子", category: "community" },
  { en: "trash can", zh: "垃圾桶", category: "community" },
  { en: "reach", zh: "够到", category: "community" },
  { en: "getting ready", zh: "在做准备", category: "community" },
  { en: "family members", zh: "家庭成员", category: "community" },
  { en: "curious", zh: "好奇的", category: "community" },
  { en: "scared", zh: "害怕的", category: "community" },
  { en: "reassuring", zh: "令人安心的", category: "community" },
  { en: "solid", zh: "靠谱的，坚实的", category: "community" },
  { en: "come such a long way", zh: "走过了很长的路", category: "community" },
  { en: "overwhelming", zh: "难以承受的（多为褒义）", category: "community" },
  { en: "promise", zh: "承诺", category: "community" },
  { en: "figure it out", zh: "想办法解决", category: "community" }
);
