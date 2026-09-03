// 内容数据层：第六十一章，紧接第六十章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人带孩子去上第一堂亲子游泳课。全新词汇领域：泳池规则/水中安全/
// 漂浮踢腿/游泳装备。

GAME_CONTENT.scenes.push(
  {
    id: "signing-up-for-swim-lessons",
    transition: { en: "They decide it's time to enroll their toddler in swim lessons.", zh: "他们决定是时候给孩子报名游泳课了。" },
    title: "Signing Up for Swim Lessons",
    subtitle: "手机 · 报名游泳课",
    avatar: "🏊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you think they're old enough for this?", zh: "你觉得他们年纪够大能学这个了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, this age is actually a great time to start.", zh: "是的，这个年纪其实正是开始学的好时机。", correct: true, xp: 10 },
          { text: "No, swimming should wait until high school.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, this age is actually a great time to start.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Water safety is something we should teach them early.", zh: "水中安全是我们应该早点教给他们的东西。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, this feels important, not just fun.", zh: "同意，这不只是有趣，更是重要的事。", correct: true, xp: 10 },
          { text: "Disagreed, safety can wait for now.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, this feels important, not just fun.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's sign up for the parent-and-child class.", zh: "我们报名亲子班吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that way we're in the water too.", zh: "好主意，这样我们也能一起在水里。", correct: true, xp: 10 },
          { text: "Let's skip that, we'd rather just watch.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that way we're in the water too.",
        next: null
      }
    }
  },
  {
    id: "packing-the-swim-bag",
    transition: { en: "They pack a bag with everything needed for the pool.", zh: "他们打包了一个装满游泳所需物品的包。" },
    title: "Packing the Swim Bag",
    subtitle: "家里 · 打包泳装",
    avatar: "🎒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What do we actually need to bring?", zh: "我们实际上需要带什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Swimsuits, towels, and a swim diaper.", zh: "泳衣、毛巾，还有一个游泳专用尿布。", correct: true, xp: 10 },
          { text: "Nothing at all, the pool provides everything.", correct: false }
        ],
        hintOnWrong: "wh-问题回答清单 → Swimsuits, towels, and a swim diaper.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This swim diaper fits tighter than the regular one.", zh: "这个游泳尿布比普通的更紧一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's the point, it needs to hold in water.", zh: "这正是它的作用，得能防水。", correct: true, xp: 10 },
          { text: "That's bad, let's just use a regular diaper.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's the point, it needs to hold in water.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's also grab some floaties, just in case.", zh: "我们也拿几个浮圈，以防万一吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, extra safety never hurts.", zh: "好主意，多一份安全保障总没坏处。", correct: true, xp: 10 },
          { text: "Let's not bother, floaties seem unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, extra safety never hurts.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-swim-instructor",
    transition: { en: "A friendly instructor greets them at the edge of the pool.", zh: "一位友善的教练在泳池边迎接他们。" },
    title: "Meeting the Swim Instructor",
    subtitle: "泳池 · 见到教练",
    avatar: "🏊‍♀️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has your child ever been in a pool before?", zh: "您的孩子以前进过泳池吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They've been in a bathtub, but never a pool.", zh: "他们在浴缸里待过，但从没进过泳池。", correct: true, xp: 10 },
          { text: "They've been swimming competitively for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They've been in a bathtub, but never a pool.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This water is warmer than most public pools.", zh: "这里的水比大多数公共泳池要暖和。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's good, warmer water helps kids relax.", zh: "这很好，水温高一点能帮孩子放松。", correct: true, xp: 10 },
          { text: "That's bad, cold water is much better for kids.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's good, warmer water helps kids relax.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please hold them close for the first few minutes.", zh: "前几分钟请把他们抱紧一些。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, I won't let go at first.", zh: "当然，一开始我不会松手的。", correct: true, xp: 10 },
          { text: "Sorry, I'd rather let them float alone.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, I won't let go at first.",
        next: null
      }
    }
  },
  {
    id: "getting-in-the-water",
    transition: { en: "They slowly step into the shallow end together.", zh: "他们慢慢一起走进浅水区。" },
    title: "Getting in the Water",
    subtitle: "泳池 · 下水",
    avatar: "💧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are they crying, or are those happy sounds?", zh: "他们是在哭吗，还是开心的声音？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Those are happy sounds, they seem excited.", zh: "是开心的声音，他们看起来很兴奋。", correct: true, xp: 10 },
          { text: "They're definitely crying, let's leave right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Those are happy sounds, they seem excited.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're kicking more confidently than I expected.", zh: "他们踢水的样子比我预想的要自信多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, they seem like a natural.", zh: "确实如此，他们看起来还挺有天赋的。", correct: true, xp: 10 },
          { text: "They really aren't, they seem terrified of water.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, they seem like a natural.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's blow bubbles together to make it fun.", zh: "我们一起吹泡泡，让这变得更好玩吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, they'll probably love it.", zh: "好啊，他们大概会很喜欢。", correct: true, xp: 10 },
          { text: "Let's just stay still and not move at all.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, they'll probably love it.",
        next: null
      }
    }
  },
  {
    id: "learning-to-float",
    transition: { en: "The instructor guides them through their first floating attempt.", zh: "教练指导他们第一次尝试漂浮。" },
    title: "Learning to Float",
    subtitle: "泳池 · 学习漂浮",
    avatar: "🌊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you support their back while they lean into the water?", zh: "他们往水里靠的时候，你能托住他们的背吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I've got a firm grip on them.", zh: "可以，我抓得很稳。", correct: true, xp: 10 },
          { text: "I can't, my hands are too shaky right now.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, I've got a firm grip on them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're floating longer than they did a minute ago.", zh: "他们漂浮的时间比一分钟前要长了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, this is such great progress.", zh: "确实如此，这真是很大的进步。", correct: true, xp: 10 },
          { text: "They really aren't, they're barely floating at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, this is such great progress.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're doing great, keep that grip nice and steady.", zh: "你做得很好，继续保持稳稳的托举。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thank you, I'll hold steady just like this.", zh: "谢谢，我就这样稳稳地托着。", correct: true, xp: 10 },
          { text: "Thank you, though my arms are getting tired.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thank you, I'll hold steady just like this.",
        next: null
      }
    }
  },
  {
    id: "pool-rules",
    transition: { en: "The instructor reminds everyone of the basic pool rules.", zh: "教练提醒大家泳池的基本规则。" },
    title: "Pool Rules",
    subtitle: "泳池 · 泳池规则",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Never leave your child alone near the water.", zh: "永远不要让孩子独自靠近水边。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Understood, we'll always stay within arm's reach.", zh: "明白了，我们会一直保持在能伸手够到的距离。", correct: true, xp: 10 },
          { text: "Understood, though we'll probably step away sometimes.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Understood, we'll always stay within arm's reach.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These rules exist for a reason more important than convenience.", zh: "这些规则的存在，理由比图方便更重要。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's true, safety always matters more.", zh: "确实如此，安全永远更重要。", correct: true, xp: 10 },
          { text: "That's odd, rules like this feel unnecessary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's true, safety always matters more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll follow every rule, no exceptions.", zh: "我们会遵守每一条规则，绝无例外。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's exactly the right attitude to have.", zh: "这正是应该有的正确态度。", correct: true, xp: 10 },
          { text: "That's too strict, rules are meant to be bent.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's exactly the right attitude to have.",
        next: null
      }
    }
  },
  {
    id: "a-tearful-moment",
    transition: { en: "A splash of water in the face brings on a few tears.", zh: "一次水花溅到脸上，引来了一些眼泪。" },
    title: "A Tearful Moment",
    subtitle: "泳池 · 落泪的时刻",
    avatar: "😢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are they okay? That splash startled them.", zh: "他们没事吧？那次水花把他们吓到了。" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They're okay, just a little surprised.", zh: "他们没事，只是有点被吓到了。", correct: true, xp: 10 },
          { text: "They're not okay, we should quit swimming forever.", correct: false }
        ],
        hintOnWrong: "肯定回答 → They're okay, just a little surprised.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This happens more often than you'd think at their age.", zh: "在他们这个年纪，这种情况比你想的要常见得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's reassuring, we won't overreact then.", zh: "这让人放心，那我们就不会反应过度了。", correct: true, xp: 10 },
          { text: "That's alarming, let's stop the lesson right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's reassuring, we won't overreact then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a short break and try again in a minute.", zh: "我们先休息一下，一分钟后再试。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's give them a moment to recover.", zh: "好主意，我们给他们一点时间缓一缓。", correct: true, xp: 10 },
          { text: "Let's push through without stopping at all.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's give them a moment to recover.",
        next: null
      }
    }
  },
  {
    id: "back-in-the-water",
    transition: { en: "After a short break, they get back into the pool.", zh: "短暂休息后，他们又回到了泳池里。" },
    title: "Back in the Water",
    subtitle: "泳池 · 重新下水",
    avatar: "🏊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you ready to try again?", zh: "你准备好再试一次了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "We are, they seem calm now.", zh: "准备好了，他们现在看起来很平静。", correct: true, xp: 10 },
          { text: "We're not, let's just go home instead.", correct: false }
        ],
        hintOnWrong: "肯定回答 → We are, they seem calm now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're smiling more than I expected after that scare.", zh: "经历了那次惊吓后，他们的笑容比我预想的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, kids bounce back so fast.", zh: "确实如此，孩子恢复得真快。", correct: true, xp: 10 },
          { text: "They really aren't, they still look terrified.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, kids bounce back so fast.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This resilience is honestly impressive to watch.", zh: "说实话，看到这种韧性真的让人印象深刻。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, kids are tougher than we think.", zh: "确实如此，孩子比我们想的要坚强。", correct: true, xp: 10 },
          { text: "It isn't, resilience doesn't matter for babies.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, kids are tougher than we think.",
        next: null
      }
    }
  },
  {
    id: "the-end-of-class",
    transition: { en: "As the lesson wraps up, the instructor shares encouraging feedback.", zh: "课程接近尾声，教练给出了鼓励性的反馈。" },
    title: "The End of Class",
    subtitle: "泳池 · 课程结束",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They did better today than most kids do on their first try.", zh: "他们今天的表现比大多数孩子第一次尝试要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's wonderful to hear, we're really proud.", zh: "听到这个真好，我们真的很骄傲。", correct: true, xp: 10 },
          { text: "That's surprising, we thought they did terribly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's wonderful to hear, we're really proud.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Same time next week works for us all.", zh: "下周同一时间对我们都合适。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Perfect, we'll see you then.", zh: "太好了，那我们下次见。", correct: true, xp: 10 },
          { text: "Perfect, though we'd rather skip next week.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Perfect, we'll see you then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you for being so patient with them today.", zh: "谢谢你今天对他们这么有耐心。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, it's honestly a joy watching them learn.", zh: "不客气，看着他们学习真的是一种乐趣。", correct: true, xp: 10 },
          { text: "Of course, though patience wasn't really needed.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, it's honestly a joy watching them learn.",
        next: null
      }
    }
  },
  {
    id: "driving-home-soaked",
    transition: { en: "Wet hair and towels in tow, they drive home together.", zh: "带着湿漉漉的头发和毛巾，他们一起开车回家。" },
    title: "Driving Home Soaked",
    subtitle: "车上 · 湿漉漉地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That went so much better than I imagined it would.", zh: "结果比我想象的要好得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I'm honestly relieved.", zh: "确实如此，说实话我松了一口气。", correct: true, xp: 10 },
          { text: "It really didn't, today felt like a disaster.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I'm honestly relieved.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I love watching them try something brand new.", zh: "我很喜欢看着他们尝试全新的事物。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, moments like this are what I live for.", zh: "我也是，像这样的时刻正是我所珍视的。", correct: true, xp: 10 },
          { text: "Me too, though new things always feel stressful.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, moments like this are what I live for.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many tears there are, moments like today make it worth it.", zh: "不管有多少眼泪，像今天这样的时刻都让一切值得。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many tears, this is worth every one.", zh: "不管有多少眼泪，这一切都值得。", correct: true, xp: 10 },
          { text: "No matter how many tears, we should just quit now.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many tears, this is worth every one.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "swim lessons", zh: "游泳课", category: "community" },
  { en: "old enough", zh: "年纪足够大", category: "community" },
  { en: "water safety", zh: "水中安全", category: "community" },
  { en: "parent-and-child", zh: "亲子的", category: "community" },
  { en: "swim bag", zh: "泳装包", category: "community" },
  { en: "swimsuits", zh: "泳衣（复数）", category: "community" },
  { en: "towels", zh: "毛巾（复数）", category: "community" },
  { en: "swim diaper", zh: "游泳专用尿布", category: "community" },
  { en: "tighter", zh: "更紧的（tight 比较级）", category: "community" },
  { en: "hold in", zh: "锁住，防住", category: "community" },
  { en: "floaties", zh: "浮圈（复数）", category: "community" },
  { en: "just in case", zh: "以防万一", category: "community" },
  { en: "swim instructor", zh: "游泳教练", category: "community" },
  { en: "bathtub", zh: "浴缸", category: "community" },
  { en: "public pools", zh: "公共泳池（复数）", category: "community" },
  { en: "hold close", zh: "抱紧", category: "community" },
  { en: "let go", zh: "松手", category: "community" },
  { en: "shallow end", zh: "浅水区", category: "community" },
  { en: "happy sounds", zh: "开心的声音", category: "community" },
  { en: "kicking", zh: "踢水", category: "community" },
  { en: "a natural", zh: "有天赋的人", category: "community" },
  { en: "blow bubbles", zh: "吹泡泡", category: "community" },
  { en: "float", zh: "漂浮", category: "community" },
  { en: "support", zh: "支撑", category: "community" },
  { en: "lean into", zh: "往……靠", category: "community" },
  { en: "firm grip", zh: "稳固的抓握", category: "community" },
  { en: "progress", zh: "进步", category: "community" },
  { en: "nice and steady", zh: "稳稳当当", category: "community" },
  { en: "pool rules", zh: "泳池规则", category: "community" },
  { en: "within arm's reach", zh: "伸手可及的距离", category: "community" },
  { en: "convenience", zh: "便利", category: "community" },
  { en: "exceptions", zh: "例外（复数）", category: "community" },
  { en: "attitude", zh: "态度", category: "community" },
  { en: "splash", zh: "水花", category: "community" },
  { en: "startled", zh: "被吓到的", category: "community" },
  { en: "overreact", zh: "反应过度", category: "community" },
  { en: "alarming", zh: "令人担忧的", category: "community" },
  { en: "recover", zh: "恢复", category: "community" },
  { en: "push through", zh: "硬撑过去", category: "community" },
  { en: "bounce back", zh: "很快恢复", category: "community" },
  { en: "resilience", zh: "韧性", category: "community" },
  { en: "impressive", zh: "令人印象深刻的", category: "community" },
  { en: "feedback", zh: "反馈", category: "community" },
  { en: "same time", zh: "同一时间", category: "community" },
  { en: "a joy", zh: "一种乐趣", category: "community" },
  { en: "soaked", zh: "湿透的", category: "community" },
  { en: "in tow", zh: "随身带着", category: "community" },
  { en: "brand new", zh: "全新的", category: "community" },
  { en: "live for", zh: "为……而活", category: "community" }
);
