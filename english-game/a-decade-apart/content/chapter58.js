// 内容数据层：第五十八章，紧接第五十七章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：Emma要回去接更多订单，他们开始给孩子找日托/学前班。全新词汇领域：
// 日托参观/入托材料/分离焦虑/接送安排。

GAME_CONTENT.scenes.push(
  {
    id: "considering-daycare",
    transition: { en: "With work picking up, they start considering daycare options.", zh: "随着工作越来越忙，他们开始考虑日托的选择。" },
    title: "Considering Daycare",
    subtitle: "家里 · 考虑日托",
    avatar: "🏫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you think they're ready for daycare?", zh: "你觉得他们准备好去日托了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I think so, they love being around other kids.", zh: "我觉得可以，他们喜欢和其他小朋友在一起。", correct: true, xp: 10 },
          { text: "No, daycare should never happen at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I think so, they love being around other kids.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should tour a few places before deciding.", zh: "我们决定之前应该先参观几家。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, let's book some tours this week.", zh: "同意，我们这周就预约几家参观吧。", correct: true, xp: 10 },
          { text: "Disagreed, let's just pick the closest one.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, let's book some tours this week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to apply soon, spots fill up fast.", zh: "我们得尽快申请，名额很快就会满。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's start the applications today.", zh: "对，我们今天就开始申请吧。", correct: true, xp: 10 },
          { text: "Right, though we can probably wait months.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's start the applications today.",
        next: null
      }
    }
  },
  {
    id: "touring-a-daycare",
    transition: { en: "They visit a daycare center to see it in person.", zh: "他们参观了一家日托中心，实地看看情况。" },
    title: "Touring a Daycare",
    subtitle: "日托中心 · 实地参观",
    avatar: "🧸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many children do you have per caregiver?", zh: "你们每位护理员负责多少个孩子？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We keep it to about four children per adult.", zh: "我们保持每位成人负责大约四个孩子。", correct: true, xp: 10 },
          { text: "We don't count that, it doesn't matter.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → We keep it to about four children per adult.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This classroom feels brighter than the last place we saw.", zh: "这间教室比我们看的上一家感觉更明亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, and it feels really welcoming too.", zh: "确实是，感觉也很温馨。", correct: true, xp: 10 },
          { text: "It doesn't, this room looks pretty dim.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, and it feels really welcoming too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's ask about their daily schedule before we leave.", zh: "走之前我们问问他们的日常安排吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's ask right now.", zh: "好主意，我们现在就问。", correct: true, xp: 10 },
          { text: "Let's skip that question, it doesn't matter.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's ask right now.",
        next: null
      }
    }
  },
  {
    id: "filling-out-the-application",
    transition: { en: "They fill out the enrollment paperwork that evening.", zh: "那天晚上，他们填写了入托申请表。" },
    title: "Filling Out the Application",
    subtitle: "家里 · 填写申请",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Does this form ask about allergies too?", zh: "这份表格也问过敏情况吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, there's a whole section for that.", zh: "是的，专门有一个部分问这个。", correct: true, xp: 10 },
          { text: "No, allergies aren't mentioned anywhere.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, there's a whole section for that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This application is longer than the passport form was.", zh: "这份申请表比之前的护照表格还要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's just take it one page at a time.", zh: "确实是，我们就一页一页来吧。", correct: true, xp: 10 },
          { text: "It isn't, this form looks very short.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's just take it one page at a time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll also need proof of vaccinations.", zh: "我们还需要提供疫苗接种证明。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Got it, we have those records at home.", zh: "明白了，我们家里有这些记录。", correct: true, xp: 10 },
          { text: "Got it, though we've never had those records.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Got it, we have those records at home.",
        next: null
      }
    }
  },
  {
    id: "packing-the-daycare-bag",
    transition: { en: "The night before the first day, they pack a daycare bag.", zh: "上学第一天前的晚上，他们打包了一个日托包。" },
    title: "Packing the Daycare Bag",
    subtitle: "家里 · 打包日托包",
    avatar: "🎒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should we pack for their first day?", zh: "第一天我们应该给他们打包什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "An extra outfit, snacks, and their favorite toy.", zh: "一套换洗衣服、点心，还有他们最喜欢的玩具。", correct: true, xp: 10 },
          { text: "Nothing at all, they don't need anything.", correct: false }
        ],
        hintOnWrong: "wh-问题回答清单 → An extra outfit, snacks, and their favorite toy.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you label everything with their name?", zh: "你能把所有东西都写上他们的名字吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I'll do that right now.", zh: "可以，我现在就去做。", correct: true, xp: 10 },
          { text: "I can't, labeling things sounds too complicated.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, I'll do that right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's lay their clothes out tonight too.", zh: "我们今晚也把衣服准备好吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that'll save time in the morning.", zh: "好主意，这样早上能省点时间。", correct: true, xp: 10 },
          { text: "Let's just figure it out tomorrow morning.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that'll save time in the morning.",
        next: null
      }
    }
  },
  {
    id: "the-first-drop-off",
    transition: { en: "The first drop-off morning is harder than they expected.", zh: "第一次送去日托的早上比他们预想的要难熬。" },
    title: "The First Drop-Off",
    subtitle: "日托中心 · 首次送托",
    avatar: "😢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is harder than I imagined it would be.", zh: "这比我想象的要难熬多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, but they'll be okay soon.", zh: "确实如此，但他们很快就会好起来的。", correct: true, xp: 10 },
          { text: "It isn't, this feels completely easy for me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, but they'll be okay soon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Most kids calm down within a few minutes of the parents leaving.", zh: "大多数孩子在父母离开后几分钟内就会平静下来。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, thank you for telling us.", zh: "这让人安心，谢谢你告诉我们。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped they'd cry all day.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, thank you for telling us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll call you if anything comes up.", zh: "有什么情况我们会打电话给您。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we'll keep our phones nearby.", zh: "谢谢，我们会把手机放在身边。", correct: true, xp: 10 },
          { text: "Thank you, though we'll turn our phones off.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Thank you, we'll keep our phones nearby.",
        next: null
      }
    }
  },
  {
    id: "the-longest-morning",
    transition: { en: "At work, he can't stop checking his phone for updates.", zh: "在公司，他忍不住一直查看手机看有没有消息。" },
    title: "The Longest Morning",
    subtitle: "公司 · 漫长的早晨",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm checking my phone every two minutes, honestly.", zh: "说实话，我每两分钟就查一次手机。", },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm doing the exact same thing right now.", zh: "我现在也在做一模一样的事。", correct: true, xp: 10 },
          { text: "I'm not checking my phone at all, honestly.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I'm doing the exact same thing right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This morning is passing more slowly than any morning I remember.", zh: "今天早上比我记忆中的任何一个早上都过得慢。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, let's just distract ourselves at work.", zh: "确实如此，我们工作时分散一下注意力吧。", correct: true, xp: 10 },
          { text: "It isn't, this morning is flying by.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, let's just distract ourselves at work.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No news is good news, I keep telling myself.", zh: "没消息就是好消息，我一直这样告诉自己。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's true, let's try to trust that today.", zh: "确实如此，我们今天就试着相信这一点吧。", correct: true, xp: 10 },
          { text: "That's not true, no news usually means bad news.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's true, let's try to trust that today.",
        next: null
      }
    }
  },
  {
    id: "the-pickup",
    transition: { en: "That afternoon, they arrive together to pick up their toddler.", zh: "那天下午，他们一起去接自己的孩子。" },
    title: "The Pickup",
    subtitle: "日托中心 · 接孩子",
    avatar: "🏫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How was their first day, honestly?", zh: "说实话，他们第一天过得怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It went better than we could have hoped.", zh: "比我们期望的还要好。", correct: true, xp: 10 },
          { text: "It went nowhere, nothing happened at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答结果 → It went better than we could have hoped.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They stopped crying more quickly than most new kids do.", zh: "他们停止哭泣的速度比大多数新来的孩子都要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's such a relief, they're tougher than I thought.", zh: "这真让人松了口气，他们比我想的更坚强。", correct: true, xp: 10 },
          { text: "That's disappointing, we wanted more attention on them.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's such a relief, they're tougher than I thought.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "They even made a new friend today.", zh: "他们今天还交了一个新朋友。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's wonderful, I love hearing that.", zh: "太好了，听到这个真开心。", correct: true, xp: 10 },
          { text: "That's odd, friends shouldn't matter this early.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's wonderful, I love hearing that.",
        next: null
      }
    }
  },
  {
    id: "settling-into-a-routine",
    transition: { en: "Within a couple of weeks, daycare becomes part of the daily rhythm.", zh: "几周之内，日托就成了日常生活的一部分。" },
    title: "Settling into a Routine",
    subtitle: "家里 · 融入日常节奏",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Mornings are running more smoothly than that first week.", zh: "早晨现在比第一周顺利多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, we've finally found our rhythm.", zh: "确实如此，我们终于找到了自己的节奏。", correct: true, xp: 10 },
          { text: "They aren't, every morning still feels chaotic.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, we've finally found our rhythm.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Who's handling drop-off and who's handling pickup this week?", zh: "这周谁负责送、谁负责接？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'll do drop-off, you handle pickup.", zh: "我负责送，你负责接。", correct: true, xp: 10 },
          { text: "Neither of us is doing either this week.", correct: false }
        ],
        hintOnWrong: "wh-问题回答分工 → I'll do drop-off, you handle pickup.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This whole arrangement is working out better than expected.", zh: "整个安排的效果比预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I'm proud of how far we've come.", zh: "确实如此，我为我们走过的路感到骄傲。", correct: true, xp: 10 },
          { text: "It really isn't, this arrangement is falling apart.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I'm proud of how far we've come.",
        next: null
      }
    }
  },
  {
    id: "a-proud-parent-moment",
    transition: { en: "At pickup one day, a teacher shares a small but proud moment.", zh: "有一天接孩子时，一位老师分享了一个虽小却令人骄傲的瞬间。" },
    title: "A Proud Parent Moment",
    subtitle: "日托中心 · 骄傲的瞬间",
    avatar: "🌟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They shared their toy with another child today.", zh: "他们今天把玩具分享给了另一个孩子。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's amazing, I'm so proud of them.", zh: "太棒了，我为他们感到骄傲。", correct: true, xp: 10 },
          { text: "That's odd, sharing seems unlike them.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's amazing, I'm so proud of them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They've grown so much more social than they were a month ago.", zh: "他们比一个月前变得更加合群了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really have, daycare has been so good for them.", zh: "确实如此，日托对他们真的很有好处。", correct: true, xp: 10 },
          { text: "They really haven't, they seem exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really have, daycare has been so good for them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sending them here was one of our better decisions this year.", zh: "把他们送到这儿来是我们今年做得比较好的决定之一。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really was, I have zero regrets about it.", zh: "确实是，我对此完全没有后悔。", correct: true, xp: 10 },
          { text: "It really wasn't, we should have kept them home.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really was, I have zero regrets about it.",
        next: null
      }
    }
  },
  {
    id: "grateful-for-the-village",
    transition: { en: "That night, they talk about everyone helping raise their child.", zh: "那天晚上，他们聊起了所有帮忙抚养孩子的人。" },
    title: "Grateful for the Village",
    subtitle: "家里 · 感激这份支持",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've had so much help raising them this year.", zh: "今年我们在养育他们的过程中得到了这么多帮助。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and I'm grateful for every bit of it.", zh: "确实如此，每一份帮助我都心怀感激。", correct: true, xp: 10 },
          { text: "We really haven't, we've done this all alone.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and I'm grateful for every bit of it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It really does take a village, doesn't it?", zh: "养育一个孩子真的需要一整个村庄的支持，不是吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, and we've been lucky to find ours.", zh: "确实如此，我们很幸运找到了属于我们的支持网络。", correct: true, xp: 10 },
          { text: "It doesn't, we could have done this completely alone.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, and we've been lucky to find ours.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how much help we get, this journey is still ours.", zh: "不管我们得到多少帮助，这段旅程终究是属于我们的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how much help, we're grateful for every step.", zh: "不管得到多少帮助，我们都感激每一步。", correct: true, xp: 10 },
          { text: "No matter how much help, this journey feels like a burden.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how much help, we're grateful for every step.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "daycare", zh: "日托", category: "community" },
  { en: "options", zh: "选择（复数）", category: "community" },
  { en: "around", zh: "在……周围", category: "community" },
  { en: "tour", zh: "参观", category: "community" },
  { en: "spots", zh: "名额（复数）", category: "community" },
  { en: "fill up", zh: "满员", category: "community" },
  { en: "applications", zh: "申请（复数）", category: "community" },
  { en: "daycare center", zh: "日托中心", category: "community" },
  { en: "per", zh: "每", category: "community" },
  { en: "classroom", zh: "教室", category: "community" },
  { en: "welcoming", zh: "温馨的", category: "community" },
  { en: "daily schedule", zh: "日常安排", category: "community" },
  { en: "enrollment", zh: "入托，注册", category: "community" },
  { en: "allergies", zh: "过敏", category: "community" },
  { en: "one page at a time", zh: "一页一页地", category: "community" },
  { en: "proof", zh: "证明", category: "community" },
  { en: "vaccinations", zh: "疫苗接种", category: "community" },
  { en: "records", zh: "记录（复数）", category: "community" },
  { en: "daycare bag", zh: "日托包", category: "community" },
  { en: "extra outfit", zh: "换洗衣服", category: "community" },
  { en: "snacks", zh: "点心（复数）", category: "community" },
  { en: "label", zh: "贴标签", category: "community" },
  { en: "lay out", zh: "摆放好", category: "community" },
  { en: "drop-off", zh: "送去（日托）", category: "community" },
  { en: "calm down", zh: "平静下来", category: "community" },
  { en: "comes up", zh: "出现（问题）", category: "community" },
  { en: "passing", zh: "过去（时间）", category: "community" },
  { en: "flying by", zh: "过得飞快", category: "community" },
  { en: "no news is good news", zh: "没消息就是好消息", category: "community" },
  { en: "pickup", zh: "接（孩子）", category: "community" },
  { en: "tougher", zh: "更坚强的（tough 比较级）", category: "community" },
  { en: "attention", zh: "关注", category: "community" },
  { en: "new friend", zh: "新朋友", category: "community" },
  { en: "rhythm", zh: "节奏", category: "community" },
  { en: "working out", zh: "进展", category: "community" },
  { en: "falling apart", zh: "分崩离析", category: "community" },
  { en: "shared", zh: "分享了", category: "community" },
  { en: "social", zh: "合群的，社交的", category: "community" },
  { en: "better decisions", zh: "更好的决定", category: "community" },
  { en: "zero regrets", zh: "毫无后悔", category: "community" },
  { en: "village", zh: "村庄", category: "community" },
  { en: "lucky", zh: "幸运的", category: "community" },
  { en: "journey", zh: "旅程", category: "community" },
  { en: "burden", zh: "负担", category: "community" }
);
