// 内容数据层：第二十章，紧接第十九章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter19.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag——L4七个语法点已在第13-19章全部引入完毕，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// **场景领域切换（Josh 2026-09-03拍板）**：前19章一直围着"Lily's House
// 社区空间"这个圈子打转，核心高频词已经用得差不多了，新词密度自然放缓
// （第12-19章平均每章只新增约46词）。这一章切换到一个完全没碰过的新领域——
// 永久居民/入籍申请流程——跟主角"当年拿着护照入境"（第1章）首尾呼应，
// 又能带出一整块此前没用过的词汇（申请、文件、资格、面试、宣誓、仪式等），
// 目标是提高单章新词密度，减少到B2门槛还需要的章节数。

GAME_CONTENT.scenes.push(
  {
    id: "a-big-decision",
    transition: { en: "One evening, a letter about your immigration status arrives.", zh: "一天晚上，一封关于你移民身份的信寄到了。" },
    title: "A Big Decision",
    subtitle: "公寓 · 一个重要的决定",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You've been here long enough to apply for permanent residency now.", zh: "你在这儿住的时间已经够长，现在可以申请永久居民身份了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been thinking about that too, actually.", zh: "其实我也一直在想这件事。", correct: true, xp: 10 },
          { text: "I've never once thought about it.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've been thinking about that too, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's a long process, but it's worth doing properly.", zh: "这个过程挺长的，但值得好好走一遍。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Long or not, I'm ready to start.", zh: "不管多长，我都准备好开始了。", correct: true, xp: 10 },
          { text: "If it's long, I'd rather skip it.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ Long or not, I'm ready to start.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you apply now, you could have your status by next year.", zh: "如果你现在申请，明年就可能拿到身份了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, I'll start this week.", zh: "如果真是这样，我这周就开始。", correct: true, xp: 10 },
          { text: "If that's true, I'll wait another year.", correct: false }
        ],
        hintOnWrong: "用条件句 → If that's true, I'll start this week.",
        next: null
      }
    }
  },
  {
    id: "researching-the-process",
    title: "Researching the Process",
    subtitle: "图书馆 · 查询申请流程",
    avatar: "🧓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There's a whole checklist of eligibility requirements online.", zh: "网上有一整份资格要求清单。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A checklist helps, at least I know where to start.", zh: "有清单就好办了，至少我知道从哪儿开始。", correct: true, xp: 10 },
          { text: "A checklist just makes it more confusing.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A checklist helps, at least I know where to start.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You'll need proof of residence, income, and language ability.", zh: "你需要居住证明、收入证明，还有语言能力证明。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll gather all of that this week.", zh: "我这周就把这些都准备好。", correct: true, xp: 10 },
          { text: "I'll never manage to find all that.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll gather all of that this week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Have you already passed a language test before?", zh: "你以前已经通过语言考试了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I haven't taken one yet, but I will.", zh: "我还没考过，但我会去考的。", correct: true, xp: 10 },
          { text: "I've taken it and failed every time.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I haven't taken one yet, but I will.",
        next: null
      }
    }
  },
  {
    id: "gathering-documents",
    title: "Gathering Documents",
    subtitle: "公寓 · 收集申请材料",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you find your old lease agreements from the past few years?", zh: "你能找到过去几年的租房合同吗？", voice: "emma" },
        skill: "housing",
        grammarTag: "can-modal",
        choices: [
          { text: "I can dig those out tonight.", zh: "我今晚就能把这些找出来。", correct: true, xp: 10 },
          { text: "I can't find any of my old papers.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → I can dig those out tonight.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Don't forget your bank statements and pay stubs, too.", zh: "别忘了银行流水和工资单也要。", voice: "emma" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "Right, I'll print those out tomorrow.", zh: "对，我明天就把这些打印出来。", correct: true, xp: 10 },
          { text: "Right, I'll ignore those completely.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Right, I'll print those out tomorrow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This folder is getting thicker than I expected.", zh: "这个文件夹比我想的要厚多了。", voice: "emma" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thicker than expected, but it's all there.", zh: "确实比想的厚，但都齐了。", correct: true, xp: 10 },
          { text: "Thinner than expected, we're missing things.", correct: false }
        ],
        hintOnWrong: "用比较级 → Thicker than expected, but it's all there.",
        next: null
      }
    }
  },
  {
    id: "the-immigration-office",
    transition: { en: "A week later, you visit an immigration consultant's office.", zh: "一周后，你去了一家移民顾问事务所。" },
    title: "The Immigration Office",
    subtitle: "移民顾问事务所 · 咨询",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Welcome. Do you have an appointment today?", zh: "欢迎光临。您今天有预约吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I do. It's under my name.", zh: "有的。是在我名下预约的。", correct: true, xp: 10 },
          { text: "No, I just walked in randomly.", correct: false }
        ],
        hintOnWrong: "肯定回答（do-question）→ Yes, I do. It's under my name.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have a seat. The consultant will review your file shortly.", zh: "请坐。顾问很快就会审核您的材料。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, I'll wait patiently.", zh: "谢谢，我会耐心等的。", correct: true, xp: 10 },
          { text: "Thank you, I'll come back later.", correct: false }
        ],
        hintOnWrong: "用 will 表示等待 → Thank you, I'll wait patiently.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Your file is in order. This looks straightforward.", zh: "您的材料没问题。这个申请看起来很顺利。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Straightforward is exactly what I hoped for.", zh: "顺利正是我希望听到的。", correct: true, xp: 10 },
          { text: "Straightforward sounds too good to be true.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Straightforward is exactly what I hoped for.",
        next: null
      }
    }
  },
  {
    id: "the-application-form",
    title: "The Application Form",
    subtitle: "移民顾问事务所 · 填写申请表",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Fill in your personal details on this section first.", zh: "先在这一部分填写您的个人信息。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Got it, starting with my personal details.", zh: "明白了，先从个人信息开始。", correct: true, xp: 10 },
          { text: "I'd rather skip this section entirely.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Got it, starting with my personal details.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Make sure every date matches the documents you brought.", zh: "确保每个日期都跟您带来的文件对得上。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll double-check every single date.", zh: "我会把每个日期都仔细核对一遍。", correct: true, xp: 10 },
          { text: "I'll just guess the dates roughly.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll double-check every single date.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There's also a small application fee to pay today.", zh: "今天还需要缴纳一笔申请费。" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "No problem, I came prepared for that.", zh: "没问题，我已经准备好了。", correct: true, xp: 10 },
          { text: "No problem, I'll pay it never.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ No problem, I came prepared for that.",
        next: null
      }
    }
  },
  {
    id: "interview-prep",
    transition: { en: "Two months later, a letter invites you to an interview.", zh: "两个月后，一封信邀请你去参加面谈。" },
    title: "Preparing for the Interview",
    subtitle: "书店里 · 准备面谈",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They might ask about your work history and community ties.", zh: "他们可能会问你的工作经历和社区联系。", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "I can talk about both for hours.", zh: "这两个我能聊上好几个小时。", correct: true, xp: 10 },
          { text: "I can't remember any of my history.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → I can talk about both for hours.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If they ask why you want to stay, what will you say?", zh: "如果他们问你为什么想留下，你会怎么说？", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If they ask, I'll tell them the whole story.", zh: "如果他们问，我会把整个故事告诉他们。", correct: true, xp: 10 },
          { text: "If they ask, I won't know what to say.", correct: false }
        ],
        hintOnWrong: "用条件句 → If they ask, I'll tell them the whole story.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Just be honest. That's always the best answer.", zh: "诚实就好。这永远是最好的回答。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "Honest is the only way I know how.", zh: "诚实是我唯一会的方式。", correct: true, xp: 10 },
          { text: "Honest sounds risky to me, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Honest is the only way I know how.",
        next: null
      }
    }
  },
  {
    id: "the-interview",
    title: "The Interview",
    subtitle: "移民局 · 正式面谈",
    avatar: "👨‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you tell me why you'd like to stay in Canada?", zh: "您能说说为什么想留在加拿大吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Yes, I can tell you exactly why.", zh: "可以，我可以准确地告诉您原因。", correct: true, xp: 10 },
          { text: "I can't really explain my reasons.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Yes, I can tell you exactly why.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This place is where I found my community, my work, and my home.", zh: "这里是我找到社区、工作和家的地方。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "A place where I found everything that matters.", zh: "一个我找到了所有重要事物的地方。", correct: true, xp: 10 },
          { text: "A place where I found nothing worth keeping.", correct: false }
        ],
        hintOnWrong: "用定语从句 → A place where I found everything that matters.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's a genuine answer. Thank you for your time today.", zh: "这是个真诚的回答。谢谢您今天抽空前来。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for hearing me out.", zh: "谢谢您听我说完。", correct: true, xp: 10 },
          { text: "Thank you, whatever happens next.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you for hearing me out.",
        next: null
      }
    }
  },
  {
    id: "the-wait",
    title: "The Wait",
    subtitle: "公寓 · 等待结果",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Any news yet on the application?", zh: "申请那边有消息了吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Nothing yet, but I'm trying to be patient.", zh: "还没有，但我在努力保持耐心。", correct: true, xp: 10 },
          { text: "Nothing yet, and I've given up hope.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Nothing yet, but I'm trying to be patient.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It usually takes a few months to process, I've read.", zh: "我看资料说通常要处理几个月。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've read the same thing, so I'm prepared to wait.", zh: "我也看到过同样的说法，所以我做好了等待的准备。", correct: true, xp: 10 },
          { text: "I've never read anything about the timeline.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've read the same thing, so I'm prepared to wait.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Although waiting is hard, you've done everything right.", zh: "尽管等待很煎熬，但你该做的都做对了。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Although it's hard, I know I did my best.", zh: "尽管很煎熬，但我知道自己尽力了。", correct: true, xp: 10 },
          { text: "Although it's hard, I probably did it wrong.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although it's hard, I know I did my best.",
        next: null
      }
    }
  },
  {
    id: "the-approval",
    transition: { en: "One ordinary afternoon, an email changes everything.", zh: "一个普通的下午，一封邮件改变了一切。" },
    title: "The Approval",
    subtitle: "书店里 · 好消息到了",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your phone just buzzed like crazy. What is it?", zh: "你手机刚才疯狂震动。是什么？", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "It's the email I've been waiting for.", zh: "是我一直在等的那封邮件。", correct: true, xp: 10 },
          { text: "It's nothing, just an old reminder.", correct: false }
        ],
        hintOnWrong: "用过去时说明 → It's the email I've been waiting for.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Well? Don't leave me hanging, what does it say?", zh: "怎么样？别吊我胃口，上面写了什么？", voice: "emma" },
        skill: "work",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "It says I've been approved!", zh: "上面写着我被批准了！", correct: true, xp: 10 },
          { text: "It says the application was denied.", correct: false }
        ],
        hintOnWrong: "用短语动词（approve）回应 → It says I've been approved!",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You did it! I'm so unbelievably happy for you.", zh: "你做到了！我为你高兴得难以置信。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it. This was never just me.", zh: "是我们做到的。这从来都不只是我一个人的事。", correct: true, xp: 10 },
          { text: "I did it entirely alone, honestly.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → We did it. This was never just me.",
        next: null
      }
    }
  },
  {
    id: "planning-the-ceremony",
    title: "Planning the Ceremony",
    subtitle: "书店里 · 筹备仪式",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There's a small ceremony next month to receive your card.", zh: "下个月有一个小仪式来领取你的身份卡。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A real ceremony? I wasn't expecting that.", zh: "还有正式的仪式？我倒是没想到。", correct: true, xp: 10 },
          { text: "A real ceremony sounds unnecessary to me.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A real ceremony? I wasn't expecting that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can we all come and watch you take this step?", zh: "我们大家都能来看你走完这一步吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course you can, I'd want nobody else.", zh: "当然可以，我谁都不想少。", correct: true, xp: 10 },
          { text: "I'd rather nobody came at all.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Of course you can, I'd want nobody else.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade apart, and now this is officially home.", zh: "分开了十年，而现在，这里正式成了家。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "More than home. It's everything I hoped for.", zh: "不只是家。这是我曾希望的一切。", correct: true, xp: 10 },
          { text: "Less than home, if I'm honest.", correct: false }
        ],
        hintOnWrong: "用比较级 → More than home. It's everything I hoped for.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "I've been thinking about that too, actually.", zh: "其实我也一直在想这件事。" },
  { en: "Long or not, I'm ready to start.", zh: "不管多长，我都准备好开始了。" },
  { en: "If that's true, I'll start this week.", zh: "如果真是这样，我这周就开始。" },
  { en: "A checklist helps, at least I know where to start.", zh: "有清单就好办了，至少我知道从哪儿开始。" },
  { en: "I'll gather all of that this week.", zh: "我这周就把这些都准备好。" },
  { en: "I haven't taken one yet, but I will.", zh: "我还没考过，但我会去考的。" },
  { en: "I can dig those out tonight.", zh: "我今晚就能把这些找出来。" },
  { en: "Right, I'll print those out tomorrow.", zh: "对，我明天就把这些打印出来。" },
  { en: "Thicker than expected, but it's all there.", zh: "确实比想的厚，但都齐了。" },
  { en: "Yes, I do. It's under my name.", zh: "有的。是在我名下预约的。" },
  { en: "Thank you, I'll wait patiently.", zh: "谢谢，我会耐心等的。" },
  { en: "Straightforward is exactly what I hoped for.", zh: "顺利正是我希望听到的。" },
  { en: "Got it, starting with my personal details.", zh: "明白了，先从个人信息开始。" },
  { en: "I'll double-check every single date.", zh: "我会把每个日期都仔细核对一遍。" },
  { en: "No problem, I came prepared for that.", zh: "没问题，我已经准备好了。" },
  { en: "I can talk about both for hours.", zh: "这两个我能聊上好几个小时。" },
  { en: "If they ask, I'll tell them the whole story.", zh: "如果他们问，我会把整个故事告诉他们。" },
  { en: "Honest is the only way I know how.", zh: "诚实是我唯一会的方式。" },
  { en: "Yes, I can tell you exactly why.", zh: "可以，我可以准确地告诉您原因。" },
  { en: "A place where I found everything that matters.", zh: "一个我找到了所有重要事物的地方。" },
  { en: "Thank you for hearing me out.", zh: "谢谢您听我说完。" },
  { en: "Nothing yet, but I'm trying to be patient.", zh: "还没有，但我在努力保持耐心。" },
  { en: "I've read the same thing, so I'm prepared to wait.", zh: "我也看到过同样的说法，所以我做好了等待的准备。" },
  { en: "Although it's hard, I know I did my best.", zh: "尽管很煎熬，但我知道自己尽力了。" },
  { en: "It's the email I've been waiting for.", zh: "是我一直在等的那封邮件。" },
  { en: "It says I've been approved!", zh: "上面写着我被批准了！" },
  { en: "We did it. This was never just me.", zh: "是我们做到的。这从来都不只是我一个人的事。" },
  { en: "A real ceremony? I wasn't expecting that.", zh: "还有正式的仪式？我倒是没想到。" },
  { en: "Of course you can, I'd want nobody else.", zh: "当然可以，我谁都不想少。" },
  { en: "More than home. It's everything I hoped for.", zh: "不只是家。这是我曾希望的一切。" }
);
