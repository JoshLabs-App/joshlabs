// 内容数据层：第五十九章，紧接第五十八章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：为了以防万一，两人一起报名参加婴幼儿急救和心肺复苏认证课程。
// 全新词汇领域：急救课程/心肺复苏步骤/异物窒息处理/证书考核。

GAME_CONTENT.scenes.push(
  {
    id: "signing-up-for-the-class",
    transition: { en: "A scare with a choking toy convinces them to get certified.", zh: "一次玩具卡喉的惊吓让他们决定去考急救证。" },
    title: "Signing Up for the Class",
    subtitle: "手机 · 报名课程",
    avatar: "🩹",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That choking scare really shook us both up.", zh: "那次卡喉的惊吓真的把我们俩都吓坏了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It did, we should learn first aid properly.", zh: "确实如此，我们应该好好学一学急救知识。", correct: true, xp: 10 },
          { text: "It didn't, that wasn't scary at all.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It did, we should learn first aid properly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's an infant CPR class at the community center.", zh: "社区中心有一节婴儿心肺复苏课程。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Perfect, let's sign up for that right now.", zh: "太好了，我们现在就报名吧。", correct: true, xp: 10 },
          { text: "That's unnecessary, we already know everything.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Perfect, let's sign up for that right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll both need to attend the whole session.", zh: "我们俩都需要参加整节课。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's clear our schedules for that day.", zh: "对，我们把那天的日程都空出来吧。", correct: true, xp: 10 },
          { text: "Right, though only one of us really needs to go.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's clear our schedules for that day.",
        next: null
      }
    }
  },
  {
    id: "the-instructor-introduction",
    transition: { en: "A calm, experienced instructor welcomes the class.", zh: "一位沉着有经验的讲师迎接了这个班的学员。" },
    title: "The Instructor Introduction",
    subtitle: "教室 · 讲师介绍",
    avatar: "🧑‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have any of you taken a first aid class before?", zh: "你们中有人以前上过急救课吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've never taken one, this is our first time.", zh: "我们从没上过，这是我们第一次。", correct: true, xp: 10 },
          { text: "We've taken this exact class ten times.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've never taken one, this is our first time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This training could actually save a life someday.", zh: "这次培训未来某天可能真的能救人一命。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's exactly why we're here today.", zh: "这正是我们今天来这里的原因。", correct: true, xp: 10 },
          { text: "That's overdramatic, this training seems pointless.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's exactly why we're here today.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please practice on the dummies, not on each other.", zh: "请在模拟人身上练习，不要互相练习。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Understood, we'll stick to the dummies.", zh: "明白了，我们会用模拟人练习的。", correct: true, xp: 10 },
          { text: "Sorry, we already practiced on each other.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Understood, we'll stick to the dummies.",
        next: null
      }
    }
  },
  {
    id: "learning-chest-compressions",
    transition: { en: "They practice chest compressions on infant training dummies.", zh: "他们在婴儿模拟人身上练习胸外按压。" },
    title: "Learning Chest Compressions",
    subtitle: "教室 · 学习胸外按压",
    avatar: "🫀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you use two fingers, not your whole hand?", zh: "你能用两根手指按压，而不是整只手吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, that makes more sense for a baby.", zh: "可以，这对婴儿来说更合理。", correct: true, xp: 10 },
          { text: "I can't, two fingers seems too weak.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, that makes more sense for a baby.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your rhythm is more consistent than it was a minute ago.", zh: "你的节奏比一分钟前更稳定了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, I'm starting to feel the pattern now.", zh: "谢谢，我现在开始找到感觉了。", correct: true, xp: 10 },
          { text: "Thanks, though I feel completely lost still.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, I'm starting to feel the pattern now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Count out loud, it helps keep the pace steady.", zh: "大声数数，这样有助于保持稳定的节奏。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'll count each one out loud.", zh: "好的，我会大声数每一下。", correct: true, xp: 10 },
          { text: "Sorry, counting out loud feels silly.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'll count each one out loud.",
        next: null
      }
    }
  },
  {
    id: "the-choking-scenario",
    transition: { en: "The instructor walks through how to respond to choking.", zh: "讲师讲解了遇到异物卡喉时应该如何应对。" },
    title: "The Choking Scenario",
    subtitle: "教室 · 异物窒息演练",
    avatar: "🚨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What's the first thing you should check for?", zh: "你首先应该检查什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Whether they can still cough or make sounds.", zh: "看他们是否还能咳嗽或发出声音。", correct: true, xp: 10 },
          { text: "Nothing, you should just panic immediately.", correct: false }
        ],
        hintOnWrong: "wh-问题回答步骤 → Whether they can still cough or make sounds.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This back blow technique is different from what I imagined.", zh: "这种拍背手法和我想象的不一样。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I'm glad we're learning it correctly.", zh: "确实是，很高兴我们能学到正确的方法。", correct: true, xp: 10 },
          { text: "It isn't, this is exactly what I expected.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I'm glad we're learning it correctly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Alternate between back blows and chest thrusts.", zh: "交替进行拍背和胸部冲击。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, back and forth until it clears.", zh: "明白了，交替进行直到异物排出。", correct: true, xp: 10 },
          { text: "Sorry, that sounds too complicated to remember.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, back and forth until it clears.",
        next: null
      }
    }
  },
  {
    id: "practicing-on-dummies",
    transition: { en: "They take turns practicing the full sequence on the dummies.", zh: "他们轮流在模拟人身上练习完整的流程。" },
    title: "Practicing on Dummies",
    subtitle: "教室 · 模拟人练习",
    avatar: "🧸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you feeling more confident with each try?", zh: "每练一次你有没有觉得更有自信了？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I am, this is finally starting to click.", zh: "有的，这终于开始有点感觉了。", correct: true, xp: 10 },
          { text: "I'm not, I feel less confident each time.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I am, this is finally starting to click.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your technique is smoother than it was earlier.", zh: "你的手法比刚才更流畅了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, repetition really seems to help.", zh: "谢谢，反复练习确实很有帮助。", correct: true, xp: 10 },
          { text: "Thank you, though I feel exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, repetition really seems to help.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's run through the whole sequence one more time.", zh: "我们再完整地走一遍整个流程吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, practice makes it stick.", zh: "好的，多练习才能记牢。", correct: true, xp: 10 },
          { text: "Let's skip it, we've practiced enough already.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, practice makes it stick.",
        next: null
      }
    }
  },
  {
    id: "a-nervous-moment",
    transition: { en: "During the practical exam, nerves briefly take over.", zh: "实操考核时，紧张情绪一度占了上风。" },
    title: "A Nervous Moment",
    subtitle: "教室 · 紧张的时刻",
    avatar: "😬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I completely blanked for a second there.", zh: "我刚才有那么一秒完全脑子一片空白。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's normal, just take a breath and restart.", zh: "这很正常，深呼吸一下重新开始吧。", correct: true, xp: 10 },
          { text: "That's a disaster, you should probably fail.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's normal, just take a breath and restart.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Everyone gets nervous during exams like this.", zh: "所有人在这种考试中都会紧张。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, I feel a little better now.", zh: "这让人安心，我现在感觉好一点了。", correct: true, xp: 10 },
          { text: "That's odd, nerves shouldn't happen to anyone.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, I feel a little better now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Take your time, there's no rush at all.", zh: "慢慢来，一点都不用赶。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thank you, that actually helps me relax.", zh: "谢谢，这真的让我放松了一些。", correct: true, xp: 10 },
          { text: "Thank you, though I'd rather rush through it.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thank you, that actually helps me relax.",
        next: null
      }
    }
  },
  {
    id: "passing-the-exam",
    transition: { en: "Both of them complete the practical exam successfully.", zh: "他们俩都顺利通过了实操考核。" },
    title: "Passing the Exam",
    subtitle: "教室 · 通过考核",
    avatar: "✅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You both passed with excellent technique.", zh: "你们俩都以出色的手法通过了考核。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I can't believe we actually did it.", zh: "我真不敢相信我们真的做到了。", correct: true, xp: 10 },
          { text: "I already knew we would pass easily.", correct: false }
        ],
        hintOnWrong: "过去时回应 → I can't believe we actually did it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You both look more relaxed than you did an hour ago.", zh: "你们俩看起来都比一小时前放松多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really are, that was more stressful than expected.", zh: "确实如此，这比预想的更让人紧张。", correct: true, xp: 10 },
          { text: "We really aren't, that was completely stress-free.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really are, that was more stressful than expected.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Your certificates will be mailed within two weeks.", zh: "您的证书会在两周内寄出。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we'll watch for it in the mail.", zh: "谢谢，我们会留意邮件的。", correct: true, xp: 10 },
          { text: "Thank you, though certificates don't matter much.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Thank you, we'll watch for it in the mail.",
        next: null
      }
    }
  },
  {
    id: "restocking-the-first-aid-kit",
    transition: { en: "That weekend, they update the first aid kit at home.", zh: "那个周末，他们更新了家里的急救箱。" },
    title: "Restocking the First Aid Kit",
    subtitle: "家里 · 补充急救箱",
    avatar: "🧰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have we checked what's expired in this kit?", zh: "我们检查过这个箱子里有什么东西过期了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We haven't checked in a while, actually.", zh: "其实我们有一阵子没检查了。", correct: true, xp: 10 },
          { text: "We've checked it every single day this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We haven't checked in a while, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This new kit is more complete than the old one.", zh: "这个新的急救箱比旧的更齐全。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's keep it somewhere easy to reach.", zh: "确实是，我们把它放在容易拿到的地方吧。", correct: true, xp: 10 },
          { text: "It isn't, the old kit had everything we need.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's keep it somewhere easy to reach.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's set a reminder to check it every six months.", zh: "我们设个提醒，每六个月检查一次吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that'll keep us on top of it.", zh: "好主意，这样我们就能一直保持更新。", correct: true, xp: 10 },
          { text: "Let's not bother, we'll remember on our own.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that'll keep us on top of it.",
        next: null
      }
    }
  },
  {
    id: "sharing-what-they-learned",
    transition: { en: "They walk through the basics with the new caregiver too.", zh: "他们也向新来的护理员讲解了基础知识。" },
    title: "Sharing What They Learned",
    subtitle: "家里 · 分享所学",
    avatar: "🗣️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you know what to do if they start choking?", zh: "如果他们开始卡喉，你知道该怎么做吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I do now, thanks to this training.", zh: "现在知道了，多亏了这次培训。", correct: true, xp: 10 },
          { text: "I don't, and I don't need to know either.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I do now, thanks to this training.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This knowledge feels more important than I ever realized.", zh: "这些知识比我曾经意识到的要重要得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I'm glad we finally learned it.", zh: "确实如此，很高兴我们终于学到了这些。", correct: true, xp: 10 },
          { text: "It doesn't, this knowledge feels unnecessary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I'm glad we finally learned it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone who cares for kids should know this stuff.", zh: "每个照顾孩子的人都应该懂这些知识。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I completely agree, it should be required for everyone.", zh: "我完全同意，这应该成为所有人的必修课。", correct: true, xp: 10 },
          { text: "I disagree, only doctors need to know this.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I completely agree, it should be required for everyone.",
        next: null
      }
    }
  },
  {
    id: "hoping-never-to-need-it",
    transition: { en: "That night, they talk about hoping they'll never need what they learned.", zh: "那天晚上，他们聊起希望自己永远用不上学到的这些知识。" },
    title: "Hoping Never to Need It",
    subtitle: "家里 · 希望永远用不上",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I hope we never have to use any of this.", zh: "我希望我们永远都用不上这些知识。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, but I'm glad we know it now.", zh: "我也是，但很高兴我们现在懂了。", correct: true, xp: 10 },
          { text: "Me too, so let's just forget everything.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, but I'm glad we know it now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Being prepared feels safer than hoping for the best.", zh: "有所准备比一味期望顺利要安心得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, this brings a lot of peace of mind.", zh: "确实如此，这带来了很多安心感。", correct: true, xp: 10 },
          { text: "It doesn't, preparation is always a waste of time.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, this brings a lot of peace of mind.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what happens, we're ready to protect this family.", zh: "不管发生什么，我们都已经准备好保护这个家。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what happens, we've got each other's backs.", zh: "不管发生什么，我们都会互相照应。", correct: true, xp: 10 },
          { text: "No matter what happens, we're probably not ready.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what happens, we've got each other's backs.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "choking", zh: "卡喉，窒息", category: "community" },
  { en: "scare", zh: "惊吓", category: "community" },
  { en: "shook up", zh: "吓坏了的", category: "community" },
  { en: "first aid", zh: "急救", category: "community" },
  { en: "infant CPR", zh: "婴儿心肺复苏", category: "community" },
  { en: "attend", zh: "参加", category: "community" },
  { en: "session", zh: "课程，环节", category: "community" },
  { en: "instructor", zh: "讲师", category: "community" },
  { en: "training", zh: "培训", category: "community" },
  { en: "save a life", zh: "救人一命", category: "community" },
  { en: "overdramatic", zh: "过度戏剧化的", category: "community" },
  { en: "dummies", zh: "模拟人（复数）", category: "community" },
  { en: "chest compressions", zh: "胸外按压", category: "community" },
  { en: "two fingers", zh: "两根手指", category: "community" },
  { en: "pattern", zh: "规律，模式", category: "community" },
  { en: "count out loud", zh: "大声数数", category: "community" },
  { en: "keep the pace", zh: "保持节奏", category: "community" },
  { en: "scenario", zh: "情景，场景", category: "community" },
  { en: "cough", zh: "咳嗽", category: "community" },
  { en: "back blow", zh: "拍背", category: "community" },
  { en: "technique", zh: "手法，技巧", category: "community" },
  { en: "alternate", zh: "交替", category: "community" },
  { en: "chest thrusts", zh: "胸部冲击", category: "community" },
  { en: "clears", zh: "排出，清除", category: "community" },
  { en: "confident", zh: "自信的", category: "community" },
  { en: "click", zh: "有感觉了，想通了", category: "community" },
  { en: "smoother", zh: "更流畅的（smooth 比较级）", category: "community" },
  { en: "repetition", zh: "反复练习", category: "community" },
  { en: "sequence", zh: "流程，顺序", category: "community" },
  { en: "blanked", zh: "脑子一片空白", category: "community" },
  { en: "restart", zh: "重新开始", category: "community" },
  { en: "no rush", zh: "不用赶", category: "community" },
  { en: "excellent", zh: "出色的", category: "community" },
  { en: "stressful", zh: "紧张的，有压力的", category: "community" },
  { en: "certificates", zh: "证书（复数）", category: "community" },
  { en: "first aid kit", zh: "急救箱", category: "community" },
  { en: "expired", zh: "过期的", category: "community" },
  { en: "complete", zh: "齐全的", category: "community" },
  { en: "easy to reach", zh: "容易拿到的", category: "community" },
  { en: "on top of it", zh: "保持更新，跟上进度", category: "community" },
  { en: "knowledge", zh: "知识", category: "community" },
  { en: "required", zh: "必需的", category: "community" },
  { en: "prepared", zh: "有准备的", category: "community" },
  { en: "peace of mind", zh: "安心感", category: "community" },
  { en: "each other's backs", zh: "互相照应", category: "community" }
);
