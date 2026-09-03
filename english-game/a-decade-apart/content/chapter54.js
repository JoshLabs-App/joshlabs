// 内容数据层：第五十四章，紧接第五十三章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：他的父亲摔了一跤，两人开始研究居家照护选项。全新词汇领域：
// 居家照护/辅助设备/护理员面试/家庭会议。

GAME_CONTENT.scenes.push(
  {
    id: "a-concerning-call",
    transition: { en: "His mother calls to say his father took a fall at home.", zh: "他母亲打来电话，说他父亲在家摔了一跤。" },
    title: "A Concerning Call",
    subtitle: "电话 · 令人担忧的消息",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your father fell in the kitchen this morning.", zh: "你父亲今天早上在厨房摔倒了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Is he okay? I'm coming over right now.", zh: "他没事吧？我现在就过去。", correct: true, xp: 10 },
          { text: "That's fine, falls happen sometimes.", correct: false }
        ],
        hintOnWrong: "过去时表达关心的回应 → Is he okay? I'm coming over right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "He's okay, just a little shaken and bruised.", zh: "他没事，就是有点被吓到，身上有点淤青。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a relief, but we should still be careful.", zh: "这让人松了口气，但我们还是要多加小心。", correct: true, xp: 10 },
          { text: "That's fine, we don't need to worry at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a relief, but we should still be careful.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should talk about getting some help around the house.", zh: "我们应该谈谈请人帮忙照顾家里的事。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, let's look into our options.", zh: "你说得对，我们研究一下有什么选择吧。", correct: true, xp: 10 },
          { text: "You're wrong, they don't need any help.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, let's look into our options.",
        next: null
      }
    }
  },
  {
    id: "researching-home-care",
    transition: { en: "They spend an evening researching home care services.", zh: "他们花了一个晚上研究居家照护服务。" },
    title: "Researching Home Care",
    subtitle: "家里 · 研究居家照护",
    avatar: "💻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What kind of help do they actually need?", zh: "他们实际上需要什么样的帮助？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Someone to check in a few times a week.", zh: "需要有人每周去看看几次。", correct: true, xp: 10 },
          { text: "They need nothing at all, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答需求 → Someone to check in a few times a week.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This agency has more experience than the others we found.", zh: "这家机构比我们找到的其他几家更有经验。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's reassuring, let's contact them first.", zh: "这让人安心，我们先联系他们吧。", correct: true, xp: 10 },
          { text: "Experience doesn't matter, let's just pick randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's reassuring, let's contact them first.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to talk to your parents about this too.", zh: "我们也需要跟你父母谈谈这件事。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's approach it gently with them.", zh: "对，跟他们谈的时候我们要委婉一点。", correct: true, xp: 10 },
          { text: "Right, though their opinion doesn't matter here.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's approach it gently with them.",
        next: null
      }
    }
  },
  {
    id: "the-family-meeting",
    transition: { en: "They sit down with his parents for an honest conversation.", zh: "他们和他的父母坐下来进行了一次坦诚的谈话。" },
    title: "The Family Meeting",
    subtitle: "父母家 · 家庭会议",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We're not trying to take away your independence.", zh: "我们不是想剥夺你们的独立自主。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "We know, we just want you both to be safe.", zh: "我们知道，我们只是希望你们俩都安全。", correct: true, xp: 10 },
          { text: "We're doing exactly that, actually.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → We know, we just want you both to be safe.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you feel comfortable with someone visiting a few times a week?", zh: "每周有人来看看你们几次，你们能接受吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I think that would actually be nice.", zh: "我觉得那其实挺好的。", correct: true, xp: 10 },
          { text: "No, strangers should never come here.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I think that would actually be nice.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's try it for a month and see how it feels.", zh: "我们先试一个月，看看感觉怎么样。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "That sounds fair, let's give it a try.", zh: "这听起来很公平，我们试试吧。", correct: true, xp: 10 },
          { text: "Let's just decide forever right now.", correct: false }
        ],
        hintOnWrong: "接受建议 → That sounds fair, let's give it a try.",
        next: null
      }
    }
  },
  {
    id: "interviewing-caregivers",
    transition: { en: "The agency sends a few potential caregivers to meet.", zh: "机构安排了几位候选护理员来见面。" },
    title: "Interviewing Caregivers",
    subtitle: "父母家 · 护理员面试",
    avatar: "🧑‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many years of experience do you have?", zh: "您有多少年的经验？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I have about eight years, mostly with seniors.", zh: "我大概有八年经验，主要是照顾老年人。", correct: true, xp: 10 },
          { text: "Experience isn't something I have at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答经验 → I have about eight years, mostly with seniors.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This candidate seems more patient than the last one.", zh: "这位候选人看起来比上一位更有耐心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "She does, I really like her approach.", zh: "确实是，我很喜欢她的方式。", correct: true, xp: 10 },
          { text: "She doesn't, they both seem identical to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → She does, I really like her approach.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would you be comfortable helping with light housework too?", zh: "您愿意也帮忙做一些轻松的家务吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Of course, that's part of the job for me.", zh: "当然，对我来说这也是工作的一部分。", correct: true, xp: 10 },
          { text: "No, housework is completely out of the question.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Of course, that's part of the job for me.",
        next: null
      }
    }
  },
  {
    id: "installing-safety-features",
    transition: { en: "They add grab bars and better lighting around the house.", zh: "他们在房子里加装了扶手，改善了照明。" },
    title: "Installing Safety Features",
    subtitle: "父母家 · 安装安全设施",
    avatar: "🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you install this grab bar by the bathtub?", zh: "你能在浴缸旁边装这个扶手吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, give me a few minutes.", zh: "可以，给我几分钟。", correct: true, xp: 10 },
          { text: "I can't, I've never installed anything before.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, give me a few minutes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This lighting is brighter than what they had before.", zh: "这个照明比他们之前用的要亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that should help them see better at night.", zh: "确实是，这应该能帮他们晚上看得更清楚。", correct: true, xp: 10 },
          { text: "It isn't, this lighting looks exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that should help them see better at night.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's also remove that loose rug by the stairs.", zh: "我们也把楼梯旁那块松动的地毯拿走吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, that's exactly the kind of hazard we need to fix.", zh: "好主意，这正是我们要解决的隐患。", correct: true, xp: 10 },
          { text: "Let's leave it, rugs are never actually dangerous.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, that's exactly the kind of hazard we need to fix.",
        next: null
      }
    }
  },
  {
    id: "the-first-visit",
    transition: { en: "The caregiver's first visit goes better than anyone expected.", zh: "护理员第一次上门比大家预想的都顺利。" },
    title: "The First Visit",
    subtitle: "父母家 · 首次探访",
    avatar: "🧑‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How did today's visit go?", zh: "今天的探访情况怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It went really well, better than I hoped.", zh: "非常顺利，比我期望的还要好。", correct: true, xp: 10 },
          { text: "It didn't go at all, nobody showed up.", correct: false }
        ],
        hintOnWrong: "wh-问题回答结果 → It went really well, better than I hoped.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your dad seemed more relaxed than I expected too.", zh: "你爸爸看起来也比我预想的要放松。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "He really was, they got along right away.", zh: "确实是，他们一见面就相处得很好。", correct: true, xp: 10 },
          { text: "He really wasn't, he seemed uncomfortable the whole time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → He really was, they got along right away.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe this will end up being easier than we feared.", zh: "也许这最终会比我们担心的要容易得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I hope so, that would be such a relief.", zh: "希望如此，那真会让人松一口气。", correct: true, xp: 10 },
          { text: "I doubt it, this will only get harder.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I hope so, that would be such a relief.",
        next: null
      }
    }
  },
  {
    id: "an-honest-conversation",
    transition: { en: "That night, he opens up to Emma about how the whole situation feels.", zh: "那天晚上，他向Emma坦露了对整件事的真实感受。" },
    title: "An Honest Conversation",
    subtitle: "家里 · 坦诚交流",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Seeing my dad fall really scared me, honestly.", zh: "说实话，看到我爸摔倒真的把我吓到了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's completely understandable, I'd feel the same.", zh: "这完全可以理解，我也会有同样的感受。", correct: true, xp: 10 },
          { text: "That's strange, falls shouldn't scare anyone.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's completely understandable, I'd feel the same.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's strange watching your parents need help like this.", zh: "看到父母需要这样的帮助，感觉很奇怪。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, the roles feel reversed somehow.", zh: "确实是，感觉角色好像颠倒了过来。", correct: true, xp: 10 },
          { text: "It really isn't, nothing about this feels strange.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, the roles feel reversed somehow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even though this is hard, I'm glad we're facing it together.", zh: "尽管这很难，但我很高兴我们能一起面对。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even though it's hard, I feel the same way.", zh: "尽管很难，我也有同样的感受。", correct: true, xp: 10 },
          { text: "Even though it's hard, I'd rather handle it alone.", correct: false }
        ],
        hintOnWrong: "让步句 → Even though it's hard, I feel the same way.",
        next: null
      }
    }
  },
  {
    id: "a-month-later",
    transition: { en: "A month later, they check in on how the new routine is going.", zh: "一个月后，他们了解新作息进行得如何。" },
    title: "A Month Later",
    subtitle: "父母家 · 一个月后",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has anything felt difficult about this arrangement?", zh: "这个安排有什么让你们觉得困难的地方吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Honestly, it's been easier than we expected.", zh: "说实话，比我们预想的要容易。", correct: true, xp: 10 },
          { text: "It's been a complete disaster from the start.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → Honestly, it's been easier than we expected.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your dad has been walking more confidently lately.", zh: "你爸最近走路更有信心了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's wonderful, all the changes really helped.", zh: "太好了，所有这些改变真的有帮助。", correct: true, xp: 10 },
          { text: "That's disappointing, nothing has improved at all.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That's wonderful, all the changes really helped.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This feels like something we did right for the whole family.", zh: "这感觉像是我们为全家人做对了的一件事。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, and I'm proud of us for it.", zh: "确实如此，我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "It doesn't, we probably did this all wrong.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, and I'm proud of us for it.",
        next: null
      }
    }
  },
  {
    id: "bringing-the-baby-along",
    transition: { en: "They start bringing their toddler along on visits to the grandparents.", zh: "他们开始带着自己的孩子一起去看爷爷奶奶。" },
    title: "Bringing the Baby Along",
    subtitle: "父母家 · 带上孩子",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your dad's face lights up every time he sees the baby.", zh: "每次看到宝宝，你爸的脸都会亮起来。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, this visit means everything to him.", zh: "确实如此，这次探访对他意义重大。", correct: true, xp: 10 },
          { text: "It doesn't, he barely notices the baby at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, this visit means everything to him.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These visits seem to be helping him more than the exercises.", zh: "这些探访对他的帮助似乎比那些锻炼还要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I believe it, family is powerful medicine too.", zh: "我相信这个，家人也是一种强大的良药。", correct: true, xp: 10 },
          { text: "I doubt it, visits never really help anyone.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I believe it, family is powerful medicine too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep bringing them every single week.", zh: "我们每周都继续带他们来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this matters more than almost anything.", zh: "好的，这比几乎任何事都重要。", correct: true, xp: 10 },
          { text: "Let's cut back, weekly visits sound excessive.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this matters more than almost anything.",
        next: null
      }
    }
  },
  {
    id: "grateful-for-more-time",
    transition: { en: "That evening, he reflects on how grateful he is for this extra time.", zh: "那天晚上，他感慨自己有多感激这段额外的时光。" },
    title: "Grateful for More Time",
    subtitle: "家里 · 感激这段时光",
    avatar: "🌟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That scary phone call ended up leading to something good.", zh: "那通吓人的电话最终却带来了一些好事。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really did, in a strange kind of way.", zh: "确实如此，以一种奇特的方式。", correct: true, xp: 10 },
          { text: "It really didn't, nothing good came from that.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It really did, in a strange kind of way.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel about everything that's changed this year?", zh: "对今年发生的这一切变化，你有什么感受？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Grateful, honestly, for every extra moment with them.", zh: "说实话，很感激能和他们多待的每一刻。", correct: true, xp: 10 },
          { text: "I don't feel anything about it at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → Grateful, honestly, for every extra moment with them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how much time we have left, we won't waste a single day.", zh: "不管我们还剩多少时间，我们都不会浪费一天。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how much time, we'll make it count.", zh: "不管还有多少时间，我们都会好好珍惜。", correct: true, xp: 10 },
          { text: "No matter how much time, we'll probably still waste it.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how much time, we'll make it count.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "fell", zh: "摔倒了（fall 过去式）", category: "community" },
  { en: "shaken", zh: "被吓到的", category: "community" },
  { en: "bruised", zh: "有淤青的", category: "community" },
  { en: "home care", zh: "居家照护", category: "community" },
  { en: "services", zh: "服务（复数）", category: "community" },
  { en: "check in", zh: "看望，探访", category: "community" },
  { en: "agency", zh: "机构", category: "community" },
  { en: "contact", zh: "联系", category: "community" },
  { en: "approach", zh: "对待，处理方式", category: "community" },
  { en: "gently", zh: "温和地，委婉地", category: "community" },
  { en: "independence", zh: "独立自主", category: "community" },
  { en: "comfortable", zh: "能接受的，舒适的", category: "community" },
  { en: "fair", zh: "公平的", category: "community" },
  { en: "give it a try", zh: "试一试", category: "community" },
  { en: "caregivers", zh: "护理员（复数）", category: "community" },
  { en: "seniors", zh: "老年人（复数）", category: "community" },
  { en: "candidate", zh: "候选人", category: "community" },
  { en: "light housework", zh: "轻松的家务", category: "community" },
  { en: "out of the question", zh: "不可能的事", category: "community" },
  { en: "grab bar", zh: "扶手", category: "community" },
  { en: "install", zh: "安装", category: "community" },
  { en: "bathtub", zh: "浴缸", category: "community" },
  { en: "brighter", zh: "更亮的（bright 比较级）", category: "community" },
  { en: "loose rug", zh: "松动的地毯", category: "community" },
  { en: "hazard", zh: "隐患", category: "community" },
  { en: "went well", zh: "进行得顺利", category: "community" },
  { en: "got along", zh: "相处得好", category: "community" },
  { en: "feared", zh: "担心过的", category: "community" },
  { en: "scared", zh: "吓到的", category: "community" },
  { en: "understandable", zh: "可以理解的", category: "community" },
  { en: "roles reversed", zh: "角色颠倒", category: "community" },
  { en: "arrangement", zh: "安排", category: "community" },
  { en: "confidently", zh: "有信心地", category: "community" },
  { en: "lights up", zh: "亮起来", category: "community" },
  { en: "exercises", zh: "锻炼（复数）", category: "community" },
  { en: "powerful medicine", zh: "强大的良药", category: "community" },
  { en: "cut back", zh: "削减", category: "community" },
  { en: "excessive", zh: "过度的", category: "community" },
  { en: "led to", zh: "带来了", category: "community" },
  { en: "extra moment", zh: "额外的时刻", category: "community" },
  { en: "make it count", zh: "好好珍惜", category: "community" }
);
