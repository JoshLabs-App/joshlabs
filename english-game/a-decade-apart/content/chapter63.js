// 内容数据层：第六十三章，紧接第六十二章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家三口去做牙科检查，孩子第一次看牙医。全新词汇领域：
// 牙科预约/洗牙检查/蛀牙处理/口腔卫生习惯。

GAME_CONTENT.scenes.push(
  {
    id: "booking-the-dentist",
    transition: { en: "It's been a while since anyone in the family saw a dentist.", zh: "家里已经有一阵子没人去看牙医了。" },
    title: "Booking the Dentist",
    subtitle: "电话 · 预约牙医",
    avatar: "🦷",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "When was the last time any of us saw a dentist?", zh: "我们上次看牙医是什么时候？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Honestly, it's probably been over a year.", zh: "说实话，大概已经一年多了。", correct: true, xp: 10 },
          { text: "We just went yesterday, actually.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → Honestly, it's probably been over a year.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's also time for their first dental checkup.", zh: "也该带他们做第一次牙科检查了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "You're right, let's find a family-friendly dentist.", zh: "你说得对，我们找一位适合家庭的牙医吧。", correct: true, xp: 10 },
          { text: "You're wrong, that seems way too early.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → You're right, let's find a family-friendly dentist.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book all three of us for the same morning.", zh: "我们三个人都约在同一个早上吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that saves us a whole extra trip.", zh: "好主意，这样能省下一趟额外的行程。", correct: true, xp: 10 },
          { text: "Let's book three completely different days instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that saves us a whole extra trip.",
        next: null
      }
    }
  },
  {
    id: "preparing-the-toddler",
    transition: { en: "They try to prepare their toddler for the unfamiliar visit.", zh: "他们试着让孩子提前熟悉这次陌生的看诊。" },
    title: "Preparing the Toddler",
    subtitle: "家里 · 提前准备",
    avatar: "📖",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we read them a book about visiting the dentist?", zh: "我们要不要给他们读一本关于看牙医的书？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that should make it feel less scary.", zh: "好，这样应该能让他们没那么害怕。", correct: true, xp: 10 },
          { text: "No, let's just surprise them at the office.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that should make it feel less scary.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This book explains it more simply than I could.", zh: "这本书解释得比我能说的还要简单明了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, kids' books are surprisingly good at this.", zh: "确实是，儿童书在这方面出乎意料地擅长。", correct: true, xp: 10 },
          { text: "It doesn't, this book is way too confusing.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, kids' books are surprisingly good at this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's practice opening wide like the dentist will ask.", zh: "我们练习一下像牙医要求的那样张大嘴巴吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it might make them more comfortable.", zh: "好啊，这样可能会让他们更自在一些。", correct: true, xp: 10 },
          { text: "Let's skip that, practicing seems unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it might make them more comfortable.",
        next: null
      }
    }
  },
  {
    id: "checking-in-at-the-clinic",
    transition: { en: "They check in at a bright, welcoming dental office.", zh: "他们在一间明亮温馨的牙科诊所办理登记。" },
    title: "Checking In at the Clinic",
    subtitle: "牙科诊所 · 办理登记",
    avatar: "🏥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have any of you had dental work done before?", zh: "你们之前有做过牙科治疗吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've had a few cavities filled over the years.", zh: "这些年我们补过几颗蛀牙。", correct: true, xp: 10 },
          { text: "We've never once been to a dentist before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've had a few cavities filled over the years.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This waiting room feels more playful than most clinics.", zh: "这个候诊室感觉比大多数诊所都更有趣味。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, all these fish tanks are a nice touch.", zh: "确实是，这些鱼缸真是个不错的巧思。", correct: true, xp: 10 },
          { text: "It doesn't, this room feels pretty plain.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, all these fish tanks are a nice touch.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please fill out this medical history form while you wait.", zh: "请在等待期间填写这份病史表。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, we'll get started right away.", zh: "好的，我们马上开始填写。", correct: true, xp: 10 },
          { text: "Sorry, forms aren't something we like filling out.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, we'll get started right away.",
        next: null
      }
    }
  },
  {
    id: "the-toddlers-turn",
    transition: { en: "The dentist gently examines the toddler's teeth first.", zh: "牙医先温和地检查了孩子的牙齿。" },
    title: "The Toddler's Turn",
    subtitle: "诊室 · 孩子先看",
    avatar: "🧑‍⚕️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you open wide for me, just like we practiced?", zh: "你能像我们练习的那样，给我张大嘴巴吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, and I think they're actually excited.", zh: "他们能做到，而且我觉得他们其实还挺兴奋的。", correct: true, xp: 10 },
          { text: "They can't, they're refusing to open at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, and I think they're actually excited.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Their teeth look healthier than most kids their age.", zh: "他们的牙齿比大多数同龄孩子都要健康。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's such a relief, all that brushing paid off.", zh: "这真让人松了口气，之前的刷牙习惯没白费。", correct: true, xp: 10 },
          { text: "That's disappointing, we expected worse news.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's such a relief, all that brushing paid off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You did such a great job holding still.", zh: "你保持不动做得真好。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really did, I'm so proud of them.", zh: "确实做得很好，我为他们感到骄傲。", correct: true, xp: 10 },
          { text: "They really didn't, they moved the whole time.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really did, I'm so proud of them.",
        next: null
      }
    }
  },
  {
    id: "the-adults-checkup",
    transition: { en: "Next, both parents take turns getting a cleaning and checkup.", zh: "接下来，两位家长轮流洗牙检查。" },
    title: "The Adults' Checkup",
    subtitle: "诊室 · 家长检查",
    avatar: "🪥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you floss regularly at home?", zh: "您在家规律用牙线吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Honestly, not as often as I probably should.", zh: "说实话，可能没有我应该做到的那么频繁。", correct: true, xp: 10 },
          { text: "Yes, I floss after literally every single meal.", correct: false }
        ],
        hintOnWrong: "肯定回答（带诚实说明） → Honestly, not as often as I probably should.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This cleaning feels more thorough than my last one.", zh: "这次洗牙感觉比我上次的更彻底。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, my teeth already feel so smooth.", zh: "确实是，我的牙齿已经感觉很光滑了。", correct: true, xp: 10 },
          { text: "It doesn't, this feels exactly the same as always.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, my teeth already feel so smooth.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I found one small cavity that needs filling.", zh: "我发现了一颗需要补的小蛀牙。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's manageable, let's schedule the filling soon.", zh: "这问题不大，我们尽快安排补牙吧。", correct: true, xp: 10 },
          { text: "That's terrible, let's just ignore it forever.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's manageable, let's schedule the filling soon.",
        next: null
      }
    }
  },
  {
    id: "scheduling-the-filling",
    transition: { en: "They book a follow-up appointment for the small cavity.", zh: "他们预约了一次复诊来处理那颗小蛀牙。" },
    title: "Scheduling the Filling",
    subtitle: "牙科诊所 · 预约补牙",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How long does a filling usually take?", zh: "补牙通常需要多长时间？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Usually about thirty minutes, more or less.", zh: "通常大概三十分钟左右。", correct: true, xp: 10 },
          { text: "Fillings take absolutely no time at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时长 → Usually about thirty minutes, more or less.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Will you need anesthesia for something this small?", zh: "这么小的问题您需要打麻药吗？" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll probably need a little bit, just to be safe.", zh: "为了保险起见，我大概需要一点点。", correct: true, xp: 10 },
          { text: "I'll definitely skip that, pain doesn't bother me.", correct: false }
        ],
        hintOnWrong: "回应未来时 → I'll probably need a little bit, just to be safe.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We have an opening next Thursday morning.", zh: "我们下周四早上有一个空档。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That works perfectly, let's book that slot.", zh: "那正合适，我们就订这个时间吧。", correct: true, xp: 10 },
          { text: "That's impossible, we're never free on Thursdays.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That works perfectly, let's book that slot.",
        next: null
      }
    }
  },
  {
    id: "improving-oral-hygiene",
    transition: { en: "The hygienist gives them tips for better brushing habits at home.", zh: "洁牙师给了他们一些在家更好刷牙的建议。" },
    title: "Improving Oral Hygiene",
    subtitle: "诊室 · 改善口腔卫生",
    avatar: "🦷",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you brushing for the full two minutes each time?", zh: "您每次刷牙有刷满两分钟吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Honestly, probably not, I usually rush a bit.", zh: "说实话，可能没有，我通常刷得有点快。", correct: true, xp: 10 },
          { text: "Yes, I time it perfectly every single day.", correct: false }
        ],
        hintOnWrong: "肯定回答（诚实说明） → Honestly, probably not, I usually rush a bit.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A timer or a song can help more than you'd think.", zh: "一个计时器或一首歌能带来比你想象的更大帮助。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a great tip, we'll try that at home.", zh: "这是个好建议，我们在家试试。", correct: true, xp: 10 },
          { text: "That sounds silly, timing brushing seems unnecessary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a great tip, we'll try that at home.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's set a two-minute song for brushing time at home.", zh: "我们在家设定一首两分钟的歌当刷牙时间吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it might even make brushing fun.", zh: "好啊，这甚至可能让刷牙变得有趣起来。", correct: true, xp: 10 },
          { text: "Let's not bother, two minutes is easy to guess.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it might even make brushing fun.",
        next: null
      }
    }
  },
  {
    id: "a-treat-for-being-brave",
    transition: { en: "After the appointment, they pick a small treat for being brave.", zh: "看诊结束后，他们为孩子的勇敢挑选了一份小奖励。" },
    title: "A Treat for Being Brave",
    subtitle: "诊所门口 · 勇敢的奖励",
    avatar: "🎁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You can pick a sticker from this box.", zh: "你可以从这个盒子里选一张贴纸。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can pick one, they've earned it.", zh: "他们能选一张，这是他们应得的。", correct: true, xp: 10 },
          { text: "They can't, stickers seem unnecessary for this.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/许可 → They can pick one, they've earned it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They handled that better than I ever expected.", zh: "他们处理得比我预想的要好得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really did, they were incredibly brave.", zh: "确实如此，他们真的非常勇敢。", correct: true, xp: 10 },
          { text: "They really didn't, that was a total disaster.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really did, they were incredibly brave.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This experience should make future visits much easier.", zh: "这次经历应该会让未来的看诊轻松很多。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That would be wonderful, I really hope so.", zh: "那真是太好了，我真心希望如此。", correct: true, xp: 10 },
          { text: "That won't happen, dentist visits never get easier.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That would be wonderful, I really hope so.",
        next: null
      }
    }
  },
  {
    id: "the-follow-up-visit",
    transition: { en: "The following week, one parent goes in for the small filling.", zh: "第二周，一位家长去补了那颗小蛀牙。" },
    title: "The Follow-Up Visit",
    subtitle: "牙科诊所 · 复诊",
    avatar: "😬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is going to feel a little strange for a moment.", zh: "这会让您有一小段时间感觉有点奇怪。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Okay, I'll try to just relax through it.", zh: "好的，我尽量放松地度过这段时间。", correct: true, xp: 10 },
          { text: "Okay, though strange feelings really scare me.", correct: false }
        ],
        hintOnWrong: "回应未来时 → Okay, I'll try to just relax through it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That was actually easier than I remembered it being.", zh: "这其实比我记忆中的要容易多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, I built it up more than I needed to.", zh: "确实是，我之前把它想得比实际严重多了。", correct: true, xp: 10 },
          { text: "It wasn't, that was worse than I imagined.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, I built it up more than I needed to.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're all set, no more numbness in about an hour.", zh: "都弄好了，大概一小时后麻木感就会消失。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Perfect, thank you for taking such good care of me.", zh: "太好了，谢谢您把我照顾得这么好。", correct: true, xp: 10 },
          { text: "Perfect, though I'd rather stay numb all day.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Perfect, thank you for taking such good care of me.",
        next: null
      }
    }
  },
  {
    id: "a-healthier-habit",
    transition: { en: "That night, brushing time becomes a little more fun at home.", zh: "那天晚上，家里的刷牙时间变得有趣了一些。" },
    title: "A Healthier Habit",
    subtitle: "家里 · 更健康的习惯",
    avatar: "🪥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This little song makes brushing go by faster.", zh: "这首小歌让刷牙的时间过得更快了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, and it's become a fun routine.", zh: "确实如此，这也变成了一个有趣的习惯。", correct: true, xp: 10 },
          { text: "It doesn't, brushing still feels just as slow.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, and it's become a fun routine.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've all gotten better at this since the appointment.", zh: "自从那次看诊后，我们大家都做得更好了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, small reminders really do help.", zh: "确实如此，小小的提醒真的很有帮助。", correct: true, xp: 10 },
          { text: "We really haven't, nothing has changed at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, small reminders really do help.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how small the habit, taking care of ourselves matters.", zh: "不管这个习惯有多小，照顾好自己都很重要。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how small, every healthy habit counts.", zh: "不管多小，每一个健康的习惯都算数。", correct: true, xp: 10 },
          { text: "No matter how small, habits like this don't matter.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how small, every healthy habit counts.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "dentist", zh: "牙医", category: "community" },
  { en: "dental checkup", zh: "牙科检查", category: "community" },
  { en: "family-friendly", zh: "适合家庭的", category: "community" },
  { en: "extra trip", zh: "额外的行程", category: "community" },
  { en: "unfamiliar", zh: "陌生的", category: "community" },
  { en: "less scary", zh: "没那么可怕", category: "community" },
  { en: "kids' books", zh: "儿童书", category: "community" },
  { en: "surprisingly", zh: "出乎意料地", category: "community" },
  { en: "open wide", zh: "张大嘴巴", category: "community" },
  { en: "comfortable", zh: "自在的，舒适的", category: "community" },
  { en: "dental office", zh: "牙科诊所", category: "community" },
  { en: "dental work", zh: "牙科治疗", category: "community" },
  { en: "cavities", zh: "蛀牙（复数）", category: "community" },
  { en: "filled", zh: "补过的", category: "community" },
  { en: "playful", zh: "有趣味的", category: "community" },
  { en: "fish tanks", zh: "鱼缸（复数）", category: "community" },
  { en: "nice touch", zh: "不错的巧思", category: "community" },
  { en: "plain", zh: "朴素的", category: "community" },
  { en: "examines", zh: "检查", category: "community" },
  { en: "healthier", zh: "更健康的（healthy 比较级）", category: "community" },
  { en: "brushing", zh: "刷牙", category: "community" },
  { en: "held still", zh: "保持不动了", category: "community" },
  { en: "cleaning", zh: "洁牙", category: "community" },
  { en: "floss", zh: "用牙线", category: "community" },
  { en: "regularly", zh: "规律地", category: "community" },
  { en: "thorough", zh: "彻底的", category: "community" },
  { en: "smooth", zh: "光滑的", category: "community" },
  { en: "cavity", zh: "蛀牙", category: "community" },
  { en: "manageable", zh: "可控的，不严重的", category: "community" },
  { en: "filling", zh: "补牙", category: "community" },
  { en: "anesthesia", zh: "麻药", category: "community" },
  { en: "just to be safe", zh: "为了保险起见", category: "community" },
  { en: "slot", zh: "时段", category: "community" },
  { en: "hygienist", zh: "洁牙师", category: "community" },
  { en: "oral hygiene", zh: "口腔卫生", category: "community" },
  { en: "timer", zh: "计时器", category: "community" },
  { en: "brushing time", zh: "刷牙时间", category: "community" },
  { en: "treat", zh: "小奖励", category: "community" },
  { en: "brave", zh: "勇敢的", category: "community" },
  { en: "sticker", zh: "贴纸", category: "community" },
  { en: "earned it", zh: "应得的", category: "community" },
  { en: "handled", zh: "处理了", category: "community" },
  { en: "incredibly", zh: "非常，难以置信地", category: "community" },
  { en: "future visits", zh: "未来的看诊", category: "community" },
  { en: "numbness", zh: "麻木感", category: "community" },
  { en: "built it up", zh: "把它想得更严重了", category: "community" },
  { en: "healthy habit", zh: "健康的习惯", category: "community" },
  { en: "counts", zh: "算数，有意义", category: "community" }
);
