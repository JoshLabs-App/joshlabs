// 内容数据层：第三十八章，紧接第三十七章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter37.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：一个深夜，宫缩开始，两人赶往医院。全新词汇领域：宫缩计时/急诊入院/
// 产房流程/助产士沟通。

GAME_CONTENT.scenes.push(
  {
    id: "the-contractions-start",
    transition: { en: "Late one night, she wakes up with a strange tightening feeling.", zh: "深夜，她突然感到一阵奇怪的紧绷感醒了过来。" },
    title: "The Contractions Start",
    subtitle: "卧室 · 宫缩开始",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I think I'm having contractions.", zh: "我觉得我在宫缩了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Okay, I'm timing them starting right now.", zh: "好，我现在就开始给它们计时。", correct: true, xp: 10 },
          { text: "Okay, I'm going back to sleep now.", correct: false }
        ],
        hintOnWrong: "现在进行时 → Okay, I'm timing them starting right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How far apart are they so far?", zh: "目前两次之间间隔多久？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "About eight minutes apart, I think.", zh: "我觉得大概间隔八分钟。", correct: true, xp: 10 },
          { text: "They aren't apart at all, they're constant.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → About eight minutes apart, I think.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If they get closer together, we should head to the hospital.", zh: "如果间隔越来越短，我们就该去医院了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that happens, let's grab the hospital bag.", zh: "如果真是那样，我们就拿上待产包吧。", correct: true, xp: 10 },
          { text: "If that happens, let's just wait a few more days.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that happens, let's grab the hospital bag.",
        next: null
      }
    }
  },
  {
    id: "calling-the-doctor",
    transition: { en: "They call the on-call doctor for guidance.", zh: "他们打电话给值班医生寻求指导。" },
    title: "Calling the Doctor",
    subtitle: "电话 · 联系值班医生",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How often are the contractions coming now?", zh: "现在宫缩多久来一次？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They're coming about every five minutes.", zh: "大概每五分钟一次。", correct: true, xp: 10 },
          { text: "They aren't coming at all right now.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → They're coming about every five minutes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's time to come in, don't wait any longer.", zh: "该来医院了，别再等了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Okay, we're leaving for the hospital right now.", zh: "好的，我们现在就出发去医院。", correct: true, xp: 10 },
          { text: "Okay, we'll head there sometime tomorrow.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Okay, we're leaving for the hospital right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Drive safely, and try to stay calm.", zh: "开车小心，尽量保持冷静。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "We will, thank you for your help.", zh: "我们会的，谢谢你的帮助。", correct: true, xp: 10 },
          { text: "We won't, calm feels impossible right now.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → We will, thank you for your help.",
        next: null
      }
    }
  },
  {
    id: "the-drive-to-the-hospital",
    transition: { en: "They rush to the car in the middle of the night.", zh: "深夜里他们冲向车子。" },
    title: "The Drive to the Hospital",
    subtitle: "车上 · 赶往医院",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you okay? Just breathe through it.", zh: "你还好吗？跟着呼吸就好。" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I'm okay, just drive a little faster please.", zh: "我没事，麻烦开快一点。", correct: true, xp: 10 },
          { text: "I'm okay, there's no need to hurry at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I'm okay, just drive a little faster please.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This traffic is worse than I expected at this hour.", zh: "这个点的交通比我预想的还要糟糕。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's take the side street instead.", zh: "确实是，我们走小路吧。", correct: true, xp: 10 },
          { text: "It isn't, this traffic looks perfectly light.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's take the side street instead.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're almost there, just a few more minutes.", zh: "我们快到了，再坚持几分钟。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good, I don't think I can wait much longer.", zh: "太好了，我觉得我撑不了太久了。", correct: true, xp: 10 },
          { text: "Good, though I could wait for hours if needed.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good, I don't think I can wait much longer.",
        next: null
      }
    }
  },
  {
    id: "checking-in-at-the-er",
    transition: { en: "They rush through the doors of the emergency entrance.", zh: "他们冲进了急诊入口的大门。" },
    title: "Checking In at the ER",
    subtitle: "急诊 · 办理入院",
    avatar: "🏥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How far along are you, and how frequent are the contractions?", zh: "您现在孕几周，宫缩频率如何？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Thirty-nine weeks, and about four minutes apart.", zh: "三十九周了，大概每四分钟一次。", correct: true, xp: 10 },
          { text: "I have no idea how far along I am.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → Thirty-nine weeks, and about four minutes apart.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Please have a seat, a nurse will call you shortly.", zh: "请坐一下，护士很快会叫您的名字。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thank you, we'll wait right over there.", zh: "谢谢，我们就在那边等着。", correct: true, xp: 10 },
          { text: "Thank you, but waiting isn't an option right now.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thank you, we'll wait right over there.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're getting a wheelchair for you right away.", zh: "我们马上给您准备轮椅。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, that would help a lot right now.", zh: "谢谢，现在这真的很有帮助。", correct: true, xp: 10 },
          { text: "Thank you, though I'd rather just walk instead.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Thank you, that would help a lot right now.",
        next: null
      }
    }
  },
  {
    id: "getting-settled-in-the-delivery-room",
    transition: { en: "A nurse leads them to a delivery room and helps her settle in.", zh: "一位护士带他们到产房，帮她安顿好。" },
    title: "Getting Settled in the Delivery Room",
    subtitle: "产房 · 安顿下来",
    avatar: "🛏️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm going to check how dilated you are now.", zh: "我现在要检查一下您的宫口开了多少。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, I'll try to relax while you check.", zh: "好的，检查的时候我会尽量放松。", correct: true, xp: 10 },
          { text: "Okay, though I'd rather you skip that entirely.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Okay, I'll try to relax while you check.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You're already more dilated than most people at this stage.", zh: "您现在开的口比这个阶段大多数人都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's good news, isn't it?", zh: "这是好消息吧？", correct: true, xp: 10 },
          { text: "That's bad news, something must be wrong.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's good news, isn't it?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you squeeze my hand during the next one?", zh: "下一次宫缩的时候你能握着我的手吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I'm right here with you.", zh: "我能，我一直在你身边。", correct: true, xp: 10 },
          { text: "I can't, I need to step outside for air.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, I'm right here with you.",
        next: null
      }
    }
  },
  {
    id: "breathing-through-labor",
    transition: { en: "As labor intensifies, the midwife coaches her through each contraction.", zh: "随着产程加剧，助产士指导她度过每一次宫缩。" },
    title: "Breathing Through Labor",
    subtitle: "产房 · 呼吸法",
    avatar: "🧘‍♀️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Breathe in slowly, and let it out just as slowly.", zh: "慢慢吸气，再同样慢慢地呼出来。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'm trying my best to focus.", zh: "好，我在尽力集中精神。", correct: true, xp: 10 },
          { text: "Okay, though breathing feels impossible right now.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'm trying my best to focus.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You're doing better than you think you are.", zh: "你做得比你自己想象的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, that really helps to hear.", zh: "谢谢，听到这个真的很有帮助。", correct: true, xp: 10 },
          { text: "Thank you, though I feel like I'm failing.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, that really helps to hear.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'm right here, and I'm not going anywhere.", zh: "我就在这里，哪儿也不去。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I know, and that means everything to me.", zh: "我知道，这对我意义非凡。", correct: true, xp: 10 },
          { text: "I know, though I wish you'd leave right now.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I know, and that means everything to me.",
        next: null
      }
    }
  },
  {
    id: "the-final-push",
    transition: { en: "The midwife signals that it's time to push.", zh: "助产士示意该开始用力了。" },
    title: "The Final Push",
    subtitle: "产房 · 最后关头",
    avatar: "💪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "On the next contraction, I need you to push hard.", zh: "下一次宫缩时，我需要您用力。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'm ready, tell me when.", zh: "好的，我准备好了，告诉我什么时候。", correct: true, xp: 10 },
          { text: "Sorry, pushing isn't something I want to do.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'm ready, tell me when.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You can do this, you're almost there.", zh: "你能做到的，就快成功了。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can do this, I know I can.", zh: "我能做到的，我知道我可以。", correct: true, xp: 10 },
          { text: "I can't do this, I want to stop now.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can do this, I know I can.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "One more big push, and your baby will be here.", zh: "再用一次力，宝宝就要出生了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, this is it, here we go.", zh: "好，就是现在了，开始吧。", correct: true, xp: 10 },
          { text: "Okay, though I'd rather wait a bit longer.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Okay, this is it, here we go.",
        next: null
      }
    }
  },
  {
    id: "the-baby-arrives",
    transition: { en: "A tiny cry fills the room as the baby is born.", zh: "一声细小的啼哭充满了整个房间，宝宝出生了。" },
    title: "The Baby Arrives",
    subtitle: "产房 · 宝宝降生",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Congratulations, it's a healthy baby.", zh: "恭喜，是个健康的宝宝。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I can't believe this is really happening.", zh: "我真不敢相信这真的发生了。", correct: true, xp: 10 },
          { text: "I already knew this would happen exactly like this.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I can't believe this is really happening.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Would you like to hold your baby now?", zh: "您现在想抱抱宝宝吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Yes, please, I've been waiting for this moment.", zh: "好的，请给我，我一直在等这一刻。", correct: true, xp: 10 },
          { text: "No, not yet, I'd rather wait a while.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Yes, please, I've been waiting for this moment.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is the most amazing moment of my entire life.", zh: "这是我这辈子最美妙的时刻。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, for me too.", zh: "确实如此，对我来说也是。", correct: true, xp: 10 },
          { text: "It really isn't, I've had better moments.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, for me too.",
        next: null
      }
    }
  },
  {
    id: "the-first-hour",
    transition: { en: "In the quiet hour after birth, the new family holds each other close.", zh: "分娩后安静的第一个小时，这个新家庭紧紧地拥抱在一起。" },
    title: "The First Hour",
    subtitle: "产房 · 第一个小时",
    avatar: "👨‍👩‍👦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How are you feeling right now, honestly?", zh: "老实说，你现在感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Exhausted, but happier than I've ever been.", zh: "很累，但比以往任何时候都幸福。", correct: true, xp: 10 },
          { text: "I feel exactly the same as before.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → Exhausted, but happier than I've ever been.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look at those tiny fingers and toes.", zh: "看看这些小小的手指和脚趾。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They're so tiny, I can't get over it.", zh: "太小了，我怎么看都看不够。", correct: true, xp: 10 },
          { text: "They look completely normal, nothing special at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They're so tiny, I can't get over it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everything we've been through led us to this moment.", zh: "我们经历的一切都指向了这一刻。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It has, and it was all worth it.", zh: "确实如此，一切都值得。", correct: true, xp: 10 },
          { text: "It hasn't, none of it led anywhere.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It has, and it was all worth it.",
        next: null
      }
    }
  },
  {
    id: "choosing-the-name",
    transition: { en: "As the sun rises, they finally settle on a name.", zh: "太阳升起时，他们终于确定了名字。" },
    title: "Choosing the Name",
    subtitle: "产房 · 定下名字",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are we finally deciding on the name?", zh: "我们终于要定下名字了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I think we both already know it.", zh: "是的，我觉得我们俩其实早就知道了。", correct: true, xp: 10 },
          { text: "No, we'll just pick something random later.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I think we both already know it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This name suits them perfectly, doesn't it?", zh: "这个名字非常适合他们，不是吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, it feels just right.", zh: "确实如此，感觉恰到好处。", correct: true, xp: 10 },
          { text: "It really doesn't, let's think of something else.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, it feels just right.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Welcome to the world, we've been waiting for you.", zh: "欢迎来到这个世界，我们一直在等你。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've been waiting so long, and here you are.", zh: "我们等了这么久，你终于来了。", correct: true, xp: 10 },
          { text: "We've never once waited for you at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've been waiting so long, and here you are.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "contractions", zh: "宫缩", category: "community" },
  { en: "tightening", zh: "紧绷", category: "community" },
  { en: "timing", zh: "计时", category: "community" },
  { en: "apart", zh: "间隔", category: "community" },
  { en: "closer together", zh: "间隔更短", category: "community" },
  { en: "hospital bag", zh: "待产包", category: "community" },
  { en: "on-call", zh: "值班的", category: "community" },
  { en: "guidance", zh: "指导", category: "community" },
  { en: "any longer", zh: "再……下去", category: "community" },
  { en: "drive safely", zh: "开车小心", category: "community" },
  { en: "breathe", zh: "呼吸", category: "community" },
  { en: "traffic", zh: "交通", category: "community" },
  { en: "side street", zh: "小路", category: "community" },
  { en: "almost there", zh: "快到了", category: "community" },
  { en: "emergency entrance", zh: "急诊入口", category: "community" },
  { en: "how far along", zh: "怀孕几周了", category: "community" },
  { en: "frequent", zh: "频繁的", category: "community" },
  { en: "have a seat", zh: "请坐", category: "community" },
  { en: "shortly", zh: "很快", category: "community" },
  { en: "wheelchair", zh: "轮椅", category: "community" },
  { en: "right away", zh: "马上", category: "community" },
  { en: "delivery room", zh: "产房", category: "community" },
  { en: "settle in", zh: "安顿下来", category: "community" },
  { en: "dilated", zh: "宫口扩张的", category: "community" },
  { en: "stage", zh: "阶段", category: "community" },
  { en: "squeeze", zh: "握紧", category: "community" },
  { en: "step outside", zh: "走出去", category: "community" },
  { en: "labor", zh: "产程，分娩", category: "community" },
  { en: "intensifies", zh: "加剧", category: "community" },
  { en: "midwife", zh: "助产士", category: "community" },
  { en: "coaches", zh: "指导（动词）", category: "community" },
  { en: "breathe in", zh: "吸气", category: "community" },
  { en: "focus", zh: "集中精神", category: "community" },
  { en: "failing", zh: "失败中的", category: "community" },
  { en: "signals", zh: "示意", category: "community" },
  { en: "push", zh: "用力（分娩）", category: "community" },
  { en: "here we go", zh: "开始吧", category: "community" },
  { en: "cry", zh: "啼哭", category: "community" },
  { en: "healthy", zh: "健康的", category: "community" },
  { en: "hold", zh: "抱着", category: "community" },
  { en: "waiting for this moment", zh: "等待这一刻", category: "community" },
  { en: "amazing", zh: "美妙的", category: "community" },
  { en: "entire life", zh: "一生", category: "community" },
  { en: "exhausted", zh: "精疲力竭的", category: "community" },
  { en: "tiny", zh: "很小的", category: "community" },
  { en: "fingers", zh: "手指（复数）", category: "community" },
  { en: "toes", zh: "脚趾（复数）", category: "community" },
  { en: "can't get over it", zh: "怎么都看不够/难以置信", category: "community" },
  { en: "led us to", zh: "带我们走向了", category: "community" },
  { en: "deciding", zh: "决定", category: "community" },
  { en: "suits them", zh: "适合他们", category: "community" },
  { en: "just right", zh: "恰到好处", category: "community" },
  { en: "welcome to the world", zh: "欢迎来到这个世界", category: "community" }
);
