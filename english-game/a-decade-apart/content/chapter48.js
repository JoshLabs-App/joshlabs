// 内容数据层：第四十八章，紧接第四十七章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人多年没做体检，决定找一位新的家庭医生并做年度体检。全新词汇领域：
// 挂号预约/血压体温测量/化验单/体检结果解读。

GAME_CONTENT.scenes.push(
  {
    id: "finding-a-family-doctor",
    transition: { en: "They realize it's been years since either of them saw a doctor.", zh: "他们意识到已经好几年没看过医生了。" },
    title: "Finding a Family Doctor",
    subtitle: "家里 · 找家庭医生",
    avatar: "🩺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "When was the last time you had a checkup?", zh: "你上次体检是什么时候？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Honestly, it's probably been three years.", zh: "说实话，大概已经三年了。", correct: true, xp: 10 },
          { text: "I just had one earlier this morning.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → Honestly, it's probably been three years.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should really find a family doctor.", zh: "我们真的应该找一位家庭医生了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, let's start looking today.", zh: "你说得对，我们今天就开始找吧。", correct: true, xp: 10 },
          { text: "You're wrong, doctors are only for emergencies.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, let's start looking today.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's ask around for recommendations first.", zh: "我们先问问身边人有没有推荐吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, I'll ask my coworkers.", zh: "好主意，我去问问我的同事。", correct: true, xp: 10 },
          { text: "Let's just pick a random name from a list.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, I'll ask my coworkers.",
        next: null
      }
    }
  },
  {
    id: "booking-the-appointment",
    transition: { en: "They call a clinic to book their first appointment.", zh: "他们打电话给一家诊所预约第一次就诊。" },
    title: "Booking the Appointment",
    subtitle: "电话 · 预约挂号",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is this your first time visiting our clinic?", zh: "这是您第一次来我们诊所吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, this is actually our very first visit.", zh: "是的，这其实是我们第一次来。", correct: true, xp: 10 },
          { text: "No, we've been coming here for decades.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, this is actually our very first visit.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We have an opening this Thursday afternoon.", zh: "我们这周四下午有一个空档。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thursday afternoon works perfectly for us.", zh: "周四下午对我们来说非常合适。", correct: true, xp: 10 },
          { text: "Thursday afternoon is completely impossible.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thursday afternoon works perfectly for us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please bring your health card and any medications you take.", zh: "请带上您的医保卡和您正在服用的药物。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll have everything ready.", zh: "当然，我们会准备好一切的。", correct: true, xp: 10 },
          { text: "Sorry, bringing anything sounds too complicated.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll have everything ready.",
        next: null
      }
    }
  },
  {
    id: "the-waiting-room",
    transition: { en: "They fill out paperwork in a quiet waiting room.", zh: "他们在安静的候诊室里填写文件。" },
    title: "The Waiting Room",
    subtitle: "诊所 · 候诊室",
    avatar: "🪑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you filled out the medical history form yet?", zh: "你把病史表填好了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've finished most of it already.", zh: "我大部分都已经填完了。", correct: true, xp: 10 },
          { text: "I've never once seen this form before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've finished most of it already.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This waiting room feels calmer than most clinics.", zh: "这个候诊室感觉比大多数诊所都更安静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that's a good sign, honestly.", zh: "确实是，说实话这是个好兆头。", correct: true, xp: 10 },
          { text: "It doesn't, this place feels chaotic.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that's a good sign, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "The doctor will call you in shortly.", zh: "医生很快就会叫你们进去。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we'll just wait right here.", zh: "谢谢，我们就在这儿等着。", correct: true, xp: 10 },
          { text: "Thank you, though we can't wait at all.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Thank you, we'll just wait right here.",
        next: null
      }
    }
  },
  {
    id: "the-initial-checkup",
    transition: { en: "A nurse takes basic measurements before the doctor arrives.", zh: "在医生到来之前，护士先做了一些基础测量。" },
    title: "The Initial Checkup",
    subtitle: "诊室 · 初步检查",
    avatar: "👩‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm going to check your blood pressure now.", zh: "我现在要给您量一下血压。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, I'll try to relax my arm.", zh: "好的，我会尽量放松手臂。", correct: true, xp: 10 },
          { text: "Okay, though I'd rather you skip that.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Okay, I'll try to relax my arm.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your blood pressure is a bit higher than average.", zh: "您的血压比平均值稍微高一点。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Should I be worried about that number?", zh: "我应该为这个数字感到担心吗？", correct: true, xp: 10 },
          { text: "Numbers like that never worry me at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Should I be worried about that number?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Can you step on the scale for me next?", zh: "接下来您能站到体重秤上吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, just give me a second.", zh: "可以，稍等我一下。", correct: true, xp: 10 },
          { text: "I can't, I'd rather not know my weight.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, just give me a second.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-doctor",
    transition: { en: "The doctor comes in and reviews their history together.", zh: "医生走进来，和他们一起回顾病史。" },
    title: "Meeting the Doctor",
    subtitle: "诊室 · 见医生",
    avatar: "🧑‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Does anything run in your family that I should know about?", zh: "您的家族有什么疾病史是我需要知道的吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, high blood pressure runs on my father's side.", zh: "有的，高血压在我父亲那边有家族史。", correct: true, xp: 10 },
          { text: "No, nothing has ever happened in our family.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, high blood pressure runs on my father's side.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How often do you exercise in a typical week?", zh: "您通常一周锻炼几次？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe two or three times, honestly.", zh: "说实话，大概两三次吧。", correct: true, xp: 10 },
          { text: "Exercise isn't something I've ever tried.", correct: false }
        ],
        hintOnWrong: "wh-问题回答频率 → Maybe two or three times, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's run a few blood tests just to be thorough.", zh: "为了保险起见，我们做几项血液检测吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds reasonable, let's go ahead with that.", zh: "听起来很合理，那就做吧。", correct: true, xp: 10 },
          { text: "Let's skip that, tests feel unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds reasonable, let's go ahead with that.",
        next: null
      }
    }
  },
  {
    id: "the-blood-draw",
    transition: { en: "A lab technician draws blood samples for testing.", zh: "一位化验人员抽取了血液样本用于检测。" },
    title: "The Blood Draw",
    subtitle: "化验室 · 抽血",
    avatar: "💉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you okay with needles, generally?", zh: "您一般对打针没问题吧？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, needles have never really bothered me.", zh: "没问题，打针从来没让我太在意。", correct: true, xp: 10 },
          { text: "No, needles have always terrified me completely.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, needles have never really bothered me.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This will just feel like a small pinch.", zh: "这只会有轻微的刺痛感。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, I'm ready whenever you are.", zh: "好的，你准备好就开始吧。", correct: true, xp: 10 },
          { text: "Okay, though I'd rather wait a few more minutes.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Okay, I'm ready whenever you are.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Results should be ready within a week.", zh: "结果大概一周内就能出来。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Great, we'll wait to hear back then.", zh: "太好了，我们等消息。", correct: true, xp: 10 },
          { text: "Great, though a week feels far too long.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Great, we'll wait to hear back then.",
        next: null
      }
    }
  },
  {
    id: "waiting-for-results",
    transition: { en: "A week later, they nervously wait for a call about the results.", zh: "一周后，他们紧张地等着关于结果的电话。" },
    title: "Waiting for Results",
    subtitle: "家里 · 等待结果",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you heard anything from the clinic yet?", zh: "诊所那边有消息了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I haven't heard anything yet, actually.", zh: "其实还没有任何消息。", correct: true, xp: 10 },
          { text: "I've heard everything already, twice.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I haven't heard anything yet, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'm a little more nervous than I expected to be.", zh: "我比预想的要紧张一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I feel that too, but I'm sure it's fine.", zh: "我也有同感，但我相信没事的。", correct: true, xp: 10 },
          { text: "I don't feel nervous at all, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I feel that too, but I'm sure it's fine.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever the results say, we'll handle it together.", zh: "不管结果如何，我们都会一起面对。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever they say, together, always.", zh: "不管结果如何，我们都在一起，永远如此。", correct: true, xp: 10 },
          { text: "Whatever they say, I'd rather face it alone.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever they say, together, always.",
        next: null
      }
    }
  },
  {
    id: "the-follow-up-call",
    transition: { en: "The clinic calls with the results a few days later.", zh: "几天后，诊所打来电话告知结果。" },
    title: "The Follow-Up Call",
    subtitle: "电话 · 回访电话",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your results came back mostly normal.", zh: "您的检测结果大部分正常。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's such good news to hear.", zh: "听到这个真是个好消息。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped for something exciting.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's such a relief to hear.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your cholesterol is slightly higher than we'd like.", zh: "您的胆固醇比我们希望的稍高一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Okay, what should we do about that?", zh: "好的，我们应该怎么处理呢？", correct: true, xp: 10 },
          { text: "That's fine, cholesterol doesn't matter to us.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Okay, what should we do about that?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you adjust your diet, it should improve over time.", zh: "如果调整饮食，情况应该会逐渐好转。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that helps, we'll start making changes today.", zh: "如果有帮助，我们今天就开始做出改变。", correct: true, xp: 10 },
          { text: "If that helps, we'll just ignore it for now.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that helps, we'll start making changes today.",
        next: null
      }
    }
  },
  {
    id: "making-small-changes",
    transition: { en: "They start making small changes to their diet and routine.", zh: "他们开始在饮食和作息上做一些小调整。" },
    title: "Making Small Changes",
    subtitle: "家里 · 做出小改变",
    avatar: "🥗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we start cooking with less oil?", zh: "我们要不要开始少放点油做饭？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's start with that this week.", zh: "好，我们这周就开始吧。", correct: true, xp: 10 },
          { text: "No, oil has never really mattered much.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's start with that this week.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This meal tastes lighter than what we usually make.", zh: "这顿饭吃起来比我们平常做的清淡一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, and it's actually really tasty too.", zh: "确实是，而且其实也很好吃。", correct: true, xp: 10 },
          { text: "It doesn't, this tastes exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, and it's actually really tasty too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Small changes now will matter a lot down the road.", zh: "现在的小改变以后会有很大意义。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, and future us will thank us.", zh: "确实会的，未来的我们会感谢现在的自己。", correct: true, xp: 10 },
          { text: "They won't, small changes never matter at all.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → They will, and future us will thank us.",
        next: null
      }
    }
  },
  {
    id: "a-good-habit-formed",
    transition: { en: "Months later, a follow-up visit shows real progress.", zh: "几个月后，一次复诊显示出了真实的进步。" },
    title: "A Good Habit Formed",
    subtitle: "诊所 · 复诊显效",
    avatar: "📈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your numbers have improved quite a bit since last time.", zh: "您的各项数值比上次改善了不少。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's wonderful news, all that effort paid off.", zh: "这真是好消息，所有的努力都值得了。", correct: true, xp: 10 },
          { text: "That's disappointing, we expected way more change.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That's wonderful news, all that effort paid off.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How does it feel seeing your hard work pay off like this?", zh: "看到自己的努力有了回报，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels really motivating, honestly.", zh: "说实话，感觉特别有动力。", correct: true, xp: 10 },
          { text: "It doesn't feel like anything to me.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → It feels really motivating, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy life gets, our health should always come first.", zh: "不管生活多忙，我们的健康永远都应该放在第一位。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, health comes first for us.", zh: "不管多忙，健康对我们来说永远是第一位的。", correct: true, xp: 10 },
          { text: "No matter how busy, other things matter more.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, that will never change.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "checkup", zh: "体检", category: "community" },
  { en: "family doctor", zh: "家庭医生", category: "community" },
  { en: "recommendations", zh: "推荐（复数）", category: "community" },
  { en: "coworkers", zh: "同事（复数）", category: "community" },
  { en: "clinic", zh: "诊所", category: "community" },
  { en: "appointment", zh: "预约", category: "community" },
  { en: "opening", zh: "空档时间", category: "community" },
  { en: "health card", zh: "医保卡", category: "community" },
  { en: "medications", zh: "药物（复数）", category: "community" },
  { en: "waiting room", zh: "候诊室", category: "community" },
  { en: "paperwork", zh: "文件工作", category: "community" },
  { en: "medical history", zh: "病史", category: "community" },
  { en: "calmer", zh: "更平静的（calm 比较级）", category: "community" },
  { en: "measurements", zh: "测量（复数）", category: "community" },
  { en: "blood pressure", zh: "血压", category: "community" },
  { en: "average", zh: "平均值", category: "community" },
  { en: "scale", zh: "体重秤", category: "community" },
  { en: "runs in your family", zh: "有家族史", category: "community" },
  { en: "high blood pressure", zh: "高血压", category: "community" },
  { en: "father's side", zh: "父亲那边（家族）", category: "community" },
  { en: "typical week", zh: "通常的一周", category: "community" },
  { en: "blood tests", zh: "血液检测", category: "community" },
  { en: "reasonable", zh: "合理的", category: "community" },
  { en: "lab technician", zh: "化验人员", category: "community" },
  { en: "draws", zh: "抽取", category: "community" },
  { en: "samples", zh: "样本（复数）", category: "community" },
  { en: "needles", zh: "针（复数）", category: "community" },
  { en: "terrified", zh: "极度害怕的", category: "community" },
  { en: "pinch", zh: "刺痛感", category: "community" },
  { en: "results", zh: "结果（复数）", category: "community" },
  { en: "nervously", zh: "紧张地", category: "community" },
  { en: "normal", zh: "正常的", category: "community" },
  { en: "cholesterol", zh: "胆固醇", category: "community" },
  { en: "slightly", zh: "稍微", category: "community" },
  { en: "adjust", zh: "调整", category: "community" },
  { en: "diet", zh: "饮食", category: "community" },
  { en: "improve", zh: "改善", category: "community" },
  { en: "oil", zh: "油", category: "community" },
  { en: "lighter", zh: "更清淡的（light 比较级）", category: "community" },
  { en: "tasty", zh: "美味的", category: "community" },
  { en: "down the road", zh: "以后", category: "community" },
  { en: "follow-up visit", zh: "复诊", category: "community" },
  { en: "numbers", zh: "数值（复数）", category: "community" },
  { en: "wonderful news", zh: "好消息", category: "community" },
  { en: "paid off", zh: "有了回报", category: "community" },
  { en: "hard work", zh: "努力", category: "community" },
  { en: "motivating", zh: "有激励作用的", category: "community" },
  { en: "come first", zh: "放在第一位", category: "community" }
);
