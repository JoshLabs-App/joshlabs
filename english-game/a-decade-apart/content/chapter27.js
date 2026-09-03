// 内容数据层：第二十七章，紧接第二十六章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter26.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：宝宝出生前，两人决定养成健身习惯。全新词汇领域：健身房会员/私教/
// 体测/器械/团课/伤病恢复。

GAME_CONTENT.scenes.push(
  {
    id: "joining-a-gym",
    transition: { en: "Before the baby arrives, they decide to get in shape together.", zh: "在宝宝出生前，两人决定一起锻炼身体。" },
    title: "Joining a Gym",
    subtitle: "健身房 · 办理会员",
    avatar: "🏋️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you looking to sign up for a membership today?", zh: "你们今天是想办理会员吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we'd like to join together.", zh: "是的，我们想一起加入。", correct: true, xp: 10 },
          { text: "No, we've already joined elsewhere.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, we'd like to join together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We offer monthly plans and annual plans.", zh: "我们有月付和年付两种方案。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "The annual plan sounds like a better deal.", zh: "年付方案听起来更划算。", correct: true, xp: 10 },
          { text: "Neither plan sounds worth it to us.", correct: false }
        ],
        hintOnWrong: "陈述句表达偏好 → The annual plan sounds like a better deal.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Have you worked out at a gym before?", zh: "你们以前在健身房锻炼过吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've never really worked out before.", zh: "我们以前几乎没怎么锻炼过。", correct: true, xp: 10 },
          { text: "We're working out here right now.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've never really worked out before.",
        next: null
      }
    }
  },
  {
    id: "meeting-a-trainer",
    transition: { en: "A staff member introduces them to a personal trainer.", zh: "一位工作人员把他们介绍给一名私人教练。" },
    title: "Meeting a Trainer",
    subtitle: "健身房 · 私人教练",
    avatar: "💪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What are your fitness goals?", zh: "你们的健身目标是什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We just want to build some healthy habits.", zh: "我们只是想养成一些健康的习惯。", correct: true, xp: 10 },
          { text: "We don't really have any goals.", correct: false }
        ],
        hintOnWrong: "wh-问题回答目标 → We just want to build some healthy habits.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you do ten push-ups in a row?", zh: "你能连续做十个俯卧撑吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can probably do a few, not ten.", zh: "我大概能做几个，十个不行。", correct: true, xp: 10 },
          { text: "I can't move my arms at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can probably do a few, not ten.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll design a program based on your level.", zh: "我会根据你们的水平设计一套训练计划。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That would be really helpful, thank you.", zh: "那真的会很有帮助，谢谢你。", correct: true, xp: 10 },
          { text: "We'd rather just guess on our own.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That would be really helpful, thank you.",
        next: null
      }
    }
  },
  {
    id: "the-fitness-assessment",
    transition: { en: "The trainer runs a quick assessment to set a baseline.", zh: "教练做了一次简单的体测来确定基础水平。" },
    title: "The Fitness Assessment",
    subtitle: "健身房 · 体能测试",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Let's check your grip strength and your flexibility first.", zh: "我们先测一下你的握力和柔韧性。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds good, let's get started.", zh: "好的，我们开始吧。", correct: true, xp: 10 },
          { text: "Let's skip all of that testing.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds good, let's get started.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your flexibility is better than most beginners.", zh: "你的柔韧性比大多数新手都要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's nice to hear, I do stretch often.", zh: "听到这个真好，我确实经常拉伸。", correct: true, xp: 10 },
          { text: "That's surprising, I never stretch at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's nice to hear, I do stretch often.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you train consistently, you'll see results within weeks.", zh: "如果坚持训练，几周内就能看到效果。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, I'm definitely staying consistent.", zh: "如果真是这样，我一定会坚持下去。", correct: true, xp: 10 },
          { text: "If that's true, I'll probably quit anyway.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, I'm definitely staying consistent.",
        next: null
      }
    }
  },
  {
    id: "learning-the-machines",
    transition: { en: "The trainer walks them through the equipment floor.", zh: "教练带着他们熟悉器械区。" },
    title: "Learning the Machines",
    subtitle: "健身房 · 认识器械",
    avatar: "🏋️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This machine works your legs and your core.", zh: "这台器械能锻炼你的腿部和核心肌群。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I could definitely use stronger legs.", zh: "我确实需要更强壮的腿。", correct: true, xp: 10 },
          { text: "My legs are already the strongest part of me.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I could definitely use stronger legs.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you adjusting the seat before you start?", zh: "开始前你要调整一下座椅吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm adjusting it right now.", zh: "是的，我正在调整。", correct: true, xp: 10 },
          { text: "Yes, I adjusted it years ago.", correct: false }
        ],
        hintOnWrong: "现在进行时 → Yes, I'm adjusting it right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please keep your back straight during this exercise.", zh: "做这个动作时请保持背部挺直。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, I'll keep it straight.", zh: "当然，我会保持挺直的。", correct: true, xp: 10 },
          { text: "Sorry, straight backs aren't really my thing.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, I'll keep it straight.",
        next: null
      }
    }
  },
  {
    id: "a-group-class",
    transition: { en: "They decide to try a group fitness class together.", zh: "他们决定一起试试团体健身课。" },
    title: "A Group Class",
    subtitle: "健身房 · 团体课",
    avatar: "🧘",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever taken a spin class before?", zh: "你以前上过动感单车课吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've taken one, but it was ages ago.", zh: "上过一次，但那是很久以前了。", correct: true, xp: 10 },
          { text: "I'm taking one at this exact moment.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've taken one, but it was ages ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This class is more intense than yoga.", zh: "这堂课比瑜伽课强度更大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's fine, I like a challenge.", zh: "没关系，我喜欢挑战。", correct: true, xp: 10 },
          { text: "That's fine, I hate any kind of effort.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's fine, I like a challenge.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Remember to drink water and pace yourself.", zh: "记得多喝水，控制好自己的节奏。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "I will, and I'll take breaks if I need to.", zh: "我会的，需要的话我也会休息一下。", correct: true, xp: 10 },
          { text: "I will, but breaks are a waste of time.", correct: false }
        ],
        hintOnWrong: "用连接词 → I will, and I'll take breaks if I need to.",
        next: null
      }
    }
  },
  {
    id: "tracking-progress",
    transition: { en: "A few weeks in, they check how far they've come.", zh: "几周后，他们查看自己的进步情况。" },
    title: "Tracking Progress",
    subtitle: "健身房 · 记录进步",
    avatar: "📈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You've gotten noticeably stronger since your first week.", zh: "从第一周到现在，你明显变强了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've definitely felt the difference lately.", zh: "我最近确实感觉到了变化。", correct: true, xp: 10 },
          { text: "I've felt exactly the same the whole time.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've definitely felt the difference lately.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How many times a week are you training?", zh: "你现在一周训练几次？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'm training about four times a week.", zh: "我现在大概一周训练四次。", correct: true, xp: 10 },
          { text: "Training isn't something I do at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → I'm training about four times a week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Your resting heart rate has dropped quite a bit.", zh: "你的静息心率已经降低了不少。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's a great sign, I'm relieved to hear it.", zh: "这是个好迹象，听到这个我松了口气。", correct: true, xp: 10 },
          { text: "That's a bad sign, I'm worried about it now.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That's a great sign, I'm relieved to hear it.",
        next: null
      }
    }
  },
  {
    id: "a-setback",
    transition: { en: "A minor injury interrupts their routine.", zh: "一次轻微受伤打断了他们的训练计划。" },
    title: "A Setback",
    subtitle: "健身房 · 小伤病",
    avatar: "🤕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What happened to your shoulder?", zh: "你的肩膀怎么了？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I strained it lifting too much weight.", zh: "我举太重的重量拉伤了它。", correct: true, xp: 10 },
          { text: "Nothing happened, my shoulder is perfectly fine.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → I strained it lifting too much weight.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If you rest it properly, it should heal fast.", zh: "如果好好休息，应该很快就能痊愈。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, I'll rest it this whole week.", zh: "如果真是这样，我这一整周都会休息。", correct: true, xp: 10 },
          { text: "If that's true, I'll ignore it completely.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, I'll rest it this whole week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Try lighter exercises until the pain is gone.", zh: "在疼痛消失之前先做一些强度较轻的运动。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "Okay, and I'll ask the trainer for options.", zh: "好的，我也会向教练咨询一下选择。", correct: true, xp: 10 },
          { text: "Okay, but lighter exercises sound pointless to me.", correct: false }
        ],
        hintOnWrong: "用连接词 → Okay, and I'll ask the trainer for options.",
        next: null
      }
    }
  },
  {
    id: "adjusting-the-plan",
    transition: { en: "The trainer helps them modify the routine around the injury.", zh: "教练帮他们围绕伤情调整了训练计划。" },
    title: "Adjusting the Plan",
    subtitle: "健身房 · 调整计划",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We should focus on your lower body for now.", zh: "我们现在应该先专注练下半身。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That makes sense, my legs need work anyway.", zh: "有道理，反正我的腿也需要加强。", correct: true, xp: 10 },
          { text: "That makes no sense, my legs are useless.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That makes sense, my legs need work anyway.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do these squats feel okay on your shoulder?", zh: "做这些深蹲你的肩膀感觉还好吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, my shoulder feels totally fine here.", zh: "是的，我的肩膀在这个动作里完全没问题。", correct: true, xp: 10 },
          { text: "No, I've never done a squat in my life.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, my shoulder feels totally fine here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll add the shoulder work back in gradually.", zh: "我们会逐渐把肩膀训练加回来。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That sounds like a smart, careful approach.", zh: "这听起来是个明智又谨慎的做法。", correct: true, xp: 10 },
          { text: "That sounds way too slow for me.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That sounds like a smart, careful approach.",
        next: null
      }
    }
  },
  {
    id: "a-milestone",
    transition: { en: "Months later, they hit a milestone they're proud of.", zh: "几个月后，他们达成了一个值得骄傲的里程碑。" },
    title: "A Milestone",
    subtitle: "健身房 · 里程碑",
    avatar: "🏆",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You've hit your goal weight for the squat.", zh: "你的深蹲已经达到目标重量了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I can't believe I've actually done it.", zh: "我真不敢相信自己真的做到了。", correct: true, xp: 10 },
          { text: "I've never once tried the squat before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I can't believe I've actually done it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How does it feel to reach this goal?", zh: "达成这个目标感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels amazing, all the work paid off.", zh: "感觉太棒了，所有的努力都值得了。", correct: true, xp: 10 },
          { text: "It doesn't feel like anything at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → It feels amazing, all the work paid off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Congratulations, that's genuinely impressive progress.", zh: "恭喜你，这真的是了不起的进步。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, I couldn't have done it without your help.", zh: "谢谢你，没有你的帮助我做不到这些。", correct: true, xp: 10 },
          { text: "Thank you, though I did all of it myself.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you, I couldn't have done it without your help.",
        next: null
      }
    }
  },
  {
    id: "making-it-a-habit",
    transition: { en: "With the baby due soon, they talk about keeping the habit alive.", zh: "宝宝快出生了，他们聊起该如何保持这个习惯。" },
    title: "Making It a Habit",
    subtitle: "健身房 · 保持习惯",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Once the baby comes, how will we keep exercising?", zh: "宝宝出生以后，我们要怎么继续锻炼？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We'll probably take turns watching the baby.", zh: "我们大概会轮流照看宝宝。", correct: true, xp: 10 },
          { text: "We'll probably just stop exercising forever.", correct: false }
        ],
        hintOnWrong: "wh-问题回答计划 → We'll probably take turns watching the baby.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The gym has a daycare room for members.", zh: "健身房给会员提供了一间托儿室。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's perfect, that solves our whole problem.", zh: "太完美了，这解决了我们所有的问题。", correct: true, xp: 10 },
          { text: "That's useless, we would never use that room.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's perfect, that solves our whole problem.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep this up together, no matter what.", zh: "不管怎样，我们一起坚持下去吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's keep this up together, always.", zh: "我们一起坚持下去，永远如此。", correct: true, xp: 10 },
          { text: "Let's just give this up right now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's keep this up together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "membership", zh: "会员资格", category: "community" },
  { en: "sign up", zh: "报名，注册", category: "community" },
  { en: "monthly", zh: "每月的", category: "community" },
  { en: "annual", zh: "每年的", category: "community" },
  { en: "deal", zh: "划算的交易", category: "community" },
  { en: "worked out", zh: "锻炼过", category: "community" },
  { en: "fitness", zh: "健身", category: "community" },
  { en: "goals", zh: "目标", category: "community" },
  { en: "habits", zh: "习惯", category: "community" },
  { en: "push-ups", zh: "俯卧撑", category: "community" },
  { en: "in a row", zh: "连续地", category: "community" },
  { en: "design", zh: "设计", category: "community" },
  { en: "program", zh: "计划，项目", category: "community" },
  { en: "level", zh: "水平", category: "community" },
  { en: "helpful", zh: "有帮助的", category: "community" },
  { en: "assessment", zh: "评估，测试", category: "community" },
  { en: "grip", zh: "握力", category: "community" },
  { en: "strength", zh: "力量", category: "community" },
  { en: "flexibility", zh: "柔韧性", category: "community" },
  { en: "beginners", zh: "初学者", category: "community" },
  { en: "stretch", zh: "拉伸", category: "community" },
  { en: "consistently", zh: "持续地", category: "community" },
  { en: "results", zh: "效果，结果", category: "community" },
  { en: "within", zh: "在……之内", category: "community" },
  { en: "consistent", zh: "坚持不懈的", category: "community" },
  { en: "equipment", zh: "器材", category: "community" },
  { en: "floor", zh: "场地，楼层", category: "community" },
  { en: "machine", zh: "器械", category: "community" },
  { en: "core", zh: "核心肌群", category: "community" },
  { en: "could use", zh: "需要，用得着", category: "community" },
  { en: "adjusting", zh: "调整", category: "community" },
  { en: "seat", zh: "座椅", category: "community" },
  { en: "exercise", zh: "运动，锻炼", category: "community" },
  { en: "spin class", zh: "动感单车课", category: "community" },
  { en: "ages ago", zh: "很久以前", category: "community" },
  { en: "intense", zh: "高强度的", category: "community" },
  { en: "yoga", zh: "瑜伽", category: "community" },
  { en: "challenge", zh: "挑战", category: "community" },
  { en: "pace", zh: "控制节奏", category: "community" },
  { en: "breaks", zh: "休息", category: "community" },
  { en: "noticeably", zh: "明显地", category: "community" },
  { en: "lately", zh: "最近", category: "community" },
  { en: "training", zh: "训练", category: "community" },
  { en: "resting heart rate", zh: "静息心率", category: "community" },
  { en: "dropped", zh: "下降了", category: "community" },
  { en: "relieved", zh: "松了口气的", category: "community" },
  { en: "shoulder", zh: "肩膀", category: "community" },
  { en: "strained", zh: "拉伤了", category: "community" },
  { en: "lifting", zh: "举重", category: "community" },
  { en: "properly", zh: "妥善地", category: "community" },
  { en: "heal", zh: "痊愈", category: "community" },
  { en: "lighter", zh: "更轻的", category: "community" },
  { en: "pain", zh: "疼痛", category: "community" },
  { en: "options", zh: "选择方案", category: "community" },
  { en: "lower body", zh: "下半身", category: "community" },
  { en: "squats", zh: "深蹲", category: "community" },
  { en: "gradually", zh: "逐渐地", category: "community" },
  { en: "careful", zh: "谨慎的", category: "community" },
  { en: "approach", zh: "方法，方式", category: "community" },
  { en: "milestone", zh: "里程碑", category: "community" },
  { en: "goal weight", zh: "目标重量", category: "community" },
  { en: "genuinely", zh: "真诚地，真的", category: "community" },
  { en: "impressive", zh: "令人印象深刻的", category: "community" },
  { en: "progress", zh: "进步", category: "community" },
  { en: "take turns", zh: "轮流", category: "community" },
  { en: "daycare", zh: "托儿服务", category: "community" },
  { en: "solves", zh: "解决", category: "community" },
  { en: "keep this up", zh: "坚持下去", category: "community" },
  { en: "no matter what", zh: "无论如何", category: "community" }
);
