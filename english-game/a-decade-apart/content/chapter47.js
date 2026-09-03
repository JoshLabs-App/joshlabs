// 内容数据层：第四十七章，紧接第四十六章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：为了宝宝的安全，两人安装家庭安防系统。全新词汇领域：摄像头/传感器/
// 报警系统/门锁升级。

GAME_CONTENT.scenes.push(
  {
    id: "considering-security",
    transition: { en: "After a break-in nearby, they consider a home security system.", zh: "附近发生入室盗窃后，他们考虑安装家庭安防系统。" },
    title: "Considering Security",
    subtitle: "家里 · 考虑安防",
    avatar: "🔒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you hear about the break-in two streets over?", zh: "你听说两条街外那起入室盗窃了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that's actually what worried me too.", zh: "听说了，其实这也让我担心。", correct: true, xp: 10 },
          { text: "No, and I don't want to know either.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that's actually what worried me too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should look into a security system.", zh: "我们应该研究一下安防系统。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, especially with the baby home now.", zh: "同意，尤其是现在宝宝也在家了。", correct: true, xp: 10 },
          { text: "Disagreed, security systems seem excessive.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, especially with the baby home now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's compare a few different companies.", zh: "我们比较几家不同的公司吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's start looking tonight.", zh: "我们今晚就开始看吧。", correct: true, xp: 10 },
          { text: "Let's just pick whichever one is cheapest.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's start looking tonight.",
        next: null
      }
    }
  },
  {
    id: "the-sales-visit",
    transition: { en: "A technician visits to walk them through options.", zh: "一位技术人员上门为他们介绍方案。" },
    title: "The Sales Visit",
    subtitle: "家里 · 销售上门",
    avatar: "🧑‍🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many entry points does your home have?", zh: "您家有多少个出入口？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We have a front door, back door, and a garage.", zh: "我们有前门、后门，还有一个车库。", correct: true, xp: 10 },
          { text: "Our home doesn't have any entry points.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → We have a front door, back door, and a garage.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This camera has better night vision than the basic model.", zh: "这款摄像头的夜视效果比基础款更好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Better night vision sounds worth the upgrade.", zh: "更好的夜视功能听起来值得升级。", correct: true, xp: 10 },
          { text: "Night vision doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Better night vision sounds worth the upgrade.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll install everything within a single afternoon.", zh: "我们会在一个下午之内安装完所有设备。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's fast, when can we schedule it?", zh: "这速度挺快的，我们什么时候能预约？", correct: true, xp: 10 },
          { text: "That's too fast, we'd rather wait months.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's fast, when can we schedule it?",
        next: null
      }
    }
  },
  {
    id: "installation-day",
    transition: { en: "The technician returns to install cameras and sensors.", zh: "技术人员回来安装摄像头和传感器。" },
    title: "Installation Day",
    subtitle: "家里 · 安装日",
    avatar: "🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you show me where the control panel goes?", zh: "你能告诉我控制面板放哪儿吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can show you, right this way.", zh: "我能告诉你，这边请。", correct: true, xp: 10 },
          { text: "I can't, I don't know where anything goes.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can show you, right this way.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This sensor detects motion more accurately than older models.", zh: "这个传感器检测动作比旧款更精准。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "More accurate sounds like a real improvement.", zh: "更精准听起来确实是个提升。", correct: true, xp: 10 },
          { text: "Accuracy doesn't really matter for this.", correct: false }
        ],
        hintOnWrong: "回应比较句 → More accurate sounds like a real improvement.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please avoid touching the panel until setup is finished.", zh: "在设置完成前请不要触碰面板。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll stay out of the way.", zh: "当然，我们不会打扰的。", correct: true, xp: 10 },
          { text: "Sorry, I already pressed a few buttons.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll stay out of the way.",
        next: null
      }
    }
  },
  {
    id: "learning-the-app",
    transition: { en: "The technician shows them how to use the companion app.", zh: "技术人员教他们如何使用配套应用。" },
    title: "Learning the App",
    subtitle: "家里 · 学习使用应用",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you downloaded the app on your phones yet?", zh: "你们的手机上下载这个应用了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've just downloaded it, actually.", zh: "我们其实刚下载好。", correct: true, xp: 10 },
          { text: "We've never once used an app before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've just downloaded it, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This interface is simpler than most other systems.", zh: "这个界面比大多数其他系统更简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Simpler is exactly what we were hoping for.", zh: "更简单正是我们希望的。", correct: true, xp: 10 },
          { text: "Simpler feels boring, we wanted more features.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Simpler is exactly what we were hoping for.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You'll get a notification whenever motion is detected.", zh: "只要检测到动作，你们就会收到通知。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Good, that will give us real peace of mind.", zh: "很好，这会给我们真正的安心感。", correct: true, xp: 10 },
          { text: "Good, though we'd rather not know anything.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Good, that will give us real peace of mind.",
        next: null
      }
    }
  },
  {
    id: "a-false-alarm",
    transition: { en: "That first night, the alarm suddenly goes off.", zh: "第一晚，警报突然响了起来。" },
    title: "A False Alarm",
    subtitle: "家里 · 误报警",
    avatar: "🚨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What just triggered the alarm?", zh: "刚才是什么触发了警报？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It was probably just the cat walking by.", zh: "大概只是猫走过去了。", correct: true, xp: 10 },
          { text: "Nothing triggered it, we're just imagining things.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → It was probably just the cat walking by.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should adjust the sensitivity so this doesn't happen again.", zh: "我们应该调整灵敏度，避免再发生这种情况。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, let's lower it a bit tomorrow.", zh: "好主意，我们明天把它调低一点。", correct: true, xp: 10 },
          { text: "Bad idea, higher sensitivity is always better.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, let's lower it a bit tomorrow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That definitely woke the whole house up.", zh: "这肯定把全家人都吵醒了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really did, let's go check on the baby.", zh: "确实是，我们去看看宝宝吧。", correct: true, xp: 10 },
          { text: "It really didn't, nobody woke up at all.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It really did, let's go check on the baby.",
        next: null
      }
    }
  },
  {
    id: "adding-a-video-doorbell",
    transition: { en: "A few weeks later, they add a video doorbell to the front porch.", zh: "几周后，他们在前门廊加装了视频门铃。" },
    title: "Adding a Video Doorbell",
    subtitle: "家里 · 安装视频门铃",
    avatar: "🔔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you see who's at the door from your phone?", zh: "你能从手机上看到门口是谁吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can see clearly, even at night.", zh: "我能看得很清楚，即使晚上也一样。", correct: true, xp: 10 },
          { text: "I can't see anything on the screen.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can see clearly, even at night.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This doorbell records more clearly than I expected.", zh: "这个门铃录像的清晰度比我预想的要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, the picture is impressively sharp.", zh: "确实如此，画面清晰得让人印象深刻。", correct: true, xp: 10 },
          { text: "It really doesn't, the video looks blurry.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, the picture is impressively sharp.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Now we can answer the door even when we're not home.", zh: "现在即使我们不在家也能应门了。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "We can, that's such a useful feature.", zh: "确实可以，这个功能真的很实用。", correct: true, xp: 10 },
          { text: "We can't, this doorbell doesn't do that.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → We can, that's such a useful feature.",
        next: null
      }
    }
  },
  {
    id: "the-smart-lock",
    transition: { en: "They also upgrade the front door to a smart lock.", zh: "他们还把前门升级成了智能锁。" },
    title: "The Smart Lock",
    subtitle: "家里 · 智能门锁",
    avatar: "🔑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How does this lock work exactly?", zh: "这个锁具体是怎么工作的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "You just enter a code or use the app.", zh: "只需要输入密码或者用应用就行。", correct: true, xp: 10 },
          { text: "It doesn't actually work at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答方法 → You just enter a code or use the app.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more convenient than fumbling for keys.", zh: "这比在包里摸钥匙方便多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, especially with a baby in my arms.", zh: "确实如此，尤其是我怀里还抱着宝宝的时候。", correct: true, xp: 10 },
          { text: "It really isn't, keys were always easier.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, especially with a baby in my arms.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We can give the babysitter a temporary code too.", zh: "我们也可以给保姆一个临时密码。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "We can, that solves a real problem for us.", zh: "确实可以，这解决了我们的一个实际问题。", correct: true, xp: 10 },
          { text: "We can't, temporary codes don't exist for this.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → We can, that solves a real problem for us.",
        next: null
      }
    }
  },
  {
    id: "testing-the-system",
    transition: { en: "They run a full test of the system before trusting it completely.", zh: "在完全信任之前，他们对系统做了一次全面测试。" },
    title: "Testing the System",
    subtitle: "家里 · 全面测试",
    avatar: "✅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we test every sensor in the house today?", zh: "我们今天要测试家里每一个传感器吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's be thorough about this.", zh: "好的，我们仔细一点测试吧。", correct: true, xp: 10 },
          { text: "No, one test should cover everything.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's be thorough about this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Every sensor responded faster than I expected.", zh: "每个传感器的响应速度都比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's reassuring, I feel much safer now.", zh: "这让人安心，我现在感觉安全多了。", correct: true, xp: 10 },
          { text: "That's concerning, fast responses seem suspicious.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's reassuring, I feel much safer now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I finally feel like our home is truly protected.", zh: "我终于感觉我们的家真正得到了保护。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I feel that too, and it's a huge relief.", zh: "我也有同样的感受，这真是一种巨大的解脱。", correct: true, xp: 10 },
          { text: "I don't feel that way at all, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I feel that too, and it's a huge relief.",
        next: null
      }
    }
  },
  {
    id: "an-actual-alert",
    transition: { en: "Weeks later, they get a real alert while out running errands.", zh: "几周后，他们在外出办事时收到一条真实的警报。" },
    title: "An Actual Alert",
    subtitle: "外出中 · 真实警报",
    avatar: "📲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My phone just showed motion at the back door.", zh: "我的手机刚显示后门有动静。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Let's check the camera footage right now.", zh: "我们马上看一下摄像头画面吧。", correct: true, xp: 10 },
          { text: "Let's just ignore it, it's probably nothing.", correct: false }
        ],
        hintOnWrong: "过去时回应 → Let's check the camera footage right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It was just the delivery driver dropping off a package.", zh: "只是送货员放了一个包裹而已。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "What a relief, I was worried for a second.", zh: "真是松了口气，我刚才紧张了一下。", correct: true, xp: 10 },
          { text: "That's terrifying, we should call the police.", correct: false }
        ],
        hintOnWrong: "过去时回应 → What a relief, I was worried for a second.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This system is proving useful more than I expected.", zh: "这套系统比我预想的更加实用。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, this was money well spent.", zh: "确实如此，这笔钱花得很值。", correct: true, xp: 10 },
          { text: "It really isn't, this alert was a total waste.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, this was money well spent.",
        next: null
      }
    }
  },
  {
    id: "peace-of-mind",
    transition: { en: "That night, they reflect on how much calmer they feel now.", zh: "那天晚上，他们感慨自己现在感觉安心多了。" },
    title: "Peace of Mind",
    subtitle: "家里 · 内心安宁",
    avatar: "😌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I sleep so much better knowing the system is on.", zh: "知道系统开着，我睡得踏实多了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Same here, it's such a relief every night.", zh: "我也是，每晚都感觉安心不少。", correct: true, xp: 10 },
          { text: "I actually sleep worse because of it, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Same here, it's such a relief every night.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Even with everything else going on, this feels like one less worry.", zh: "即使还有很多其他事情，这至少少了一个担忧。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even with everything else, I agree completely.", zh: "即使还有很多其他事情，我也完全同意。", correct: true, xp: 10 },
          { text: "Even with everything else, this feels like more worry.", correct: false }
        ],
        hintOnWrong: "让步句 → Even with everything else, I agree completely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Protecting this family will always be worth the investment.", zh: "保护这个家永远值得这份投入。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It always will, no matter the cost.", zh: "永远都值得，无论花多少钱。", correct: true, xp: 10 },
          { text: "It won't, we probably overspent on this.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → It always will, no matter the cost.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "break-in", zh: "入室盗窃", category: "community" },
  { en: "worried", zh: "担心的", category: "community" },
  { en: "security system", zh: "安防系统", category: "community" },
  { en: "excessive", zh: "过度的", category: "community" },
  { en: "companies", zh: "公司（复数）", category: "community" },
  { en: "entry points", zh: "出入口", category: "community" },
  { en: "garage", zh: "车库", category: "community" },
  { en: "camera", zh: "摄像头", category: "community" },
  { en: "night vision", zh: "夜视功能", category: "community" },
  { en: "basic model", zh: "基础款", category: "community" },
  { en: "upgrade", zh: "升级", category: "community" },
  { en: "install", zh: "安装", category: "community" },
  { en: "schedule", zh: "预约", category: "community" },
  { en: "control panel", zh: "控制面板", category: "community" },
  { en: "sensor", zh: "传感器", category: "community" },
  { en: "detects", zh: "检测", category: "community" },
  { en: "motion", zh: "动作，移动", category: "community" },
  { en: "accurately", zh: "精准地", category: "community" },
  { en: "avoid", zh: "避免", category: "community" },
  { en: "setup", zh: "设置", category: "community" },
  { en: "stay out of the way", zh: "不打扰，避开", category: "community" },
  { en: "companion app", zh: "配套应用", category: "community" },
  { en: "downloaded", zh: "下载了的", category: "community" },
  { en: "interface", zh: "界面", category: "community" },
  { en: "simpler", zh: "更简单的（simple 比较级）", category: "community" },
  { en: "features", zh: "功能（复数）", category: "community" },
  { en: "notification", zh: "通知", category: "community" },
  { en: "peace of mind", zh: "安心感", category: "community" },
  { en: "false alarm", zh: "误报警", category: "community" },
  { en: "triggered", zh: "触发了", category: "community" },
  { en: "sensitivity", zh: "灵敏度", category: "community" },
  { en: "woke up", zh: "吵醒了", category: "community" },
  { en: "video doorbell", zh: "视频门铃", category: "community" },
  { en: "porch", zh: "门廊", category: "community" },
  { en: "records", zh: "录制", category: "community" },
  { en: "sharp", zh: "清晰的", category: "community" },
  { en: "blurry", zh: "模糊的", category: "community" },
  { en: "answer the door", zh: "应门", category: "community" },
  { en: "smart lock", zh: "智能门锁", category: "community" },
  { en: "code", zh: "密码", category: "community" },
  { en: "convenient", zh: "方便的", category: "community" },
  { en: "fumbling", zh: "摸索", category: "community" },
  { en: "babysitter", zh: "保姆", category: "community" },
  { en: "temporary", zh: "临时的", category: "community" },
  { en: "thorough", zh: "彻底的，仔细的", category: "community" },
  { en: "responded", zh: "响应了", category: "community" },
  { en: "reassuring", zh: "令人安心的", category: "community" },
  { en: "protected", zh: "受保护的", category: "community" },
  { en: "running errands", zh: "外出办事", category: "community" },
  { en: "footage", zh: "监控画面", category: "community" },
  { en: "delivery driver", zh: "送货员", category: "community" },
  { en: "package", zh: "包裹", category: "community" },
  { en: "proving useful", zh: "证明很实用", category: "community" },
  { en: "money well spent", zh: "钱花得值", category: "community" },
  { en: "investment", zh: "投入，投资", category: "community" }
);
