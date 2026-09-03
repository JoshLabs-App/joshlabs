// 内容数据层：第五十二章，紧接第五十一章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人决定一起学弹吉他，找了个老师上课。全新词汇领域：乐器采购/
// 乐理入门/练习曲目/小型汇报演出。

GAME_CONTENT.scenes.push(
  {
    id: "deciding-to-learn-guitar",
    transition: { en: "On a whim, they decide to finally learn an instrument together.", zh: "一时兴起，他们决定终于一起学一门乐器。" },
    title: "Deciding to Learn Guitar",
    subtitle: "家里 · 决定学吉他",
    avatar: "🎸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've always wanted to learn guitar, honestly.", zh: "说实话，我一直都想学吉他。", },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've wanted that too, let's finally do it.", zh: "我也一直想学，我们终于做这件事吧。", correct: true, xp: 10 },
          { text: "I've never once thought about learning that.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've wanted that too, let's finally do it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you think we're too old to start now?", zh: "你觉得我们现在开始学是不是太老了？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, plenty of people start later than us.", zh: "不会，很多人开始学的时候比我们还晚呢。", correct: true, xp: 10 },
          { text: "Yes, learning anything new is pointless now.", correct: false }
        ],
        hintOnWrong: "否定回答（补充理由） → No, plenty of people start later than us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's find a teacher and get started.", zh: "我们找个老师开始学吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's search for lessons this weekend.", zh: "我们这周末就去找课程吧。", correct: true, xp: 10 },
          { text: "Let's just watch videos instead of lessons.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's search for lessons this weekend.",
        next: null
      }
    }
  },
  {
    id: "buying-their-first-guitars",
    transition: { en: "They visit a music shop to buy their first guitars.", zh: "他们去了一家乐器店买第一把吉他。" },
    title: "Buying Their First Guitars",
    subtitle: "乐器店 · 购买吉他",
    avatar: "🎵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which guitar feels more comfortable in your hands?", zh: "哪把吉他握在手里感觉更舒服？" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "This smaller one feels much more comfortable.", zh: "这把小一点的感觉舒服多了。", correct: true, xp: 10 },
          { text: "Comfort doesn't matter, let's just pick randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → This smaller one feels much more comfortable.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you want steel strings or nylon strings?", zh: "您想要钢弦还是尼龙弦？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I think nylon sounds gentler for beginners.", zh: "我觉得尼龙弦对初学者来说声音更柔和。", correct: true, xp: 10 },
          { text: "Strings don't matter, all guitars sound the same.", correct: false }
        ],
        hintOnWrong: "肯定回答（补充信息） → I think nylon sounds gentler for beginners.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll also need a tuner and some picks.", zh: "我们还需要一个调音器和几个拨片。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's grab those before we leave.", zh: "对，我们走之前把那些也带上吧。", correct: true, xp: 10 },
          { text: "Right, though we probably won't need those.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's grab those before we leave.",
        next: null
      }
    }
  },
  {
    id: "the-first-lesson",
    transition: { en: "Their teacher walks them through the very basics.", zh: "他们的老师带他们了解最基础的知识。" },
    title: "The First Lesson",
    subtitle: "音乐教室 · 第一堂课",
    avatar: "🎼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you press down on these three strings for me?", zh: "你能帮我按住这三根弦吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, though my fingers hurt already.", zh: "可以，不过我的手指已经有点疼了。", correct: true, xp: 10 },
          { text: "I can't, my fingers don't bend that way.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, though my fingers hurt already.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This chord is easier than the one you just tried.", zh: "这个和弦比你刚才试的那个更简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a relief, my fingers needed a break.", zh: "这让人松了口气，我的手指也需要休息一下。", correct: true, xp: 10 },
          { text: "That's disappointing, I wanted something harder.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a relief, my fingers needed a break.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Practice this chord every day, even for five minutes.", zh: "每天都练习这个和弦，哪怕只有五分钟。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "I will, I'll set a reminder for it.", zh: "我会的，我会为此设个提醒。", correct: true, xp: 10 },
          { text: "I won't, five minutes seems too short to bother.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → I will, I'll set a reminder for it.",
        next: null
      }
    }
  },
  {
    id: "practicing-at-home",
    transition: { en: "That week, they practice chords in the living room every evening.", zh: "那一周，他们每晚都在客厅练习和弦。" },
    title: "Practicing at Home",
    subtitle: "家里 · 在家练习",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you getting the hang of that chord change?", zh: "那个和弦切换你开始上手了吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm getting there, slowly but surely.", zh: "我在慢慢进步，虽然速度不快但很稳。", correct: true, xp: 10 },
          { text: "I'm giving up on this entirely, honestly.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I'm getting there, slowly but surely.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You've actually gotten better than me at this one.", zh: "这个和弦你其实已经比我弹得好了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Maybe, but you're way ahead on the other chords.", zh: "也许吧，但其他和弦你领先多了。", correct: true, xp: 10 },
          { text: "That's impossible, I've never once practiced.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Maybe, but you're way ahead on the other chords.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's try playing something together tonight.", zh: "我们今晚试着一起弹点什么吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, even if it sounds terrible.", zh: "好，就算听起来很糟糕也没关系。", correct: true, xp: 10 },
          { text: "Let's not, playing together sounds embarrassing.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, even if it sounds terrible.",
        next: null
      }
    }
  },
  {
    id: "learning-to-read-tabs",
    transition: { en: "The teacher introduces them to reading guitar tabs.", zh: "老师教他们如何看吉他谱。" },
    title: "Learning to Read Tabs",
    subtitle: "音乐教室 · 学看谱",
    avatar: "📄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do these numbers tell you which fret to press?", zh: "这些数字是告诉你要按哪个品格吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, each number matches a specific fret.", zh: "是的，每个数字对应一个具体的品格。", correct: true, xp: 10 },
          { text: "No, the numbers mean absolutely nothing.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, each number matches a specific fret.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more confusing than sheet music, honestly.", zh: "说实话，这比五线谱还让人困惑。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is at first, but it gets easier.", zh: "一开始确实是，但会越来越容易。", correct: true, xp: 10 },
          { text: "It isn't, this makes perfect sense already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is at first, but it gets easier.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once it clicks, you'll never forget how to read it.", zh: "一旦你想通了，就再也不会忘记怎么看谱了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, I just need to keep practicing.", zh: "如果真是这样，我只需要继续练习就好。", correct: true, xp: 10 },
          { text: "If that's true, I'll give up right now.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, I just need to keep practicing.",
        next: null
      }
    }
  },
  {
    id: "a-frustrating-week",
    transition: { en: "A tricky chord change leaves them both frustrated one evening.", zh: "一个棘手的和弦切换让两人在一个晚上都感到很沮丧。" },
    title: "A Frustrating Week",
    subtitle: "家里 · 挫折的一周",
    avatar: "😤",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've been stuck on this same chord for days.", zh: "这个和弦我已经卡了好几天了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been stuck too, we can figure it out together.", zh: "我也一直卡在这儿，我们一起想办法吧。", correct: true, xp: 10 },
          { text: "I've never once had trouble with this chord.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've been stuck too, we can figure it out together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Even though this is frustrating, we shouldn't give up.", zh: "尽管这令人沮丧，我们也不应该放弃。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even though it's hard, I don't want to quit either.", zh: "尽管很难，我也不想放弃。", correct: true, xp: 10 },
          { text: "Even though it's hard, I'm ready to give up.", correct: false }
        ],
        hintOnWrong: "让步句 → Even though it's hard, I don't want to quit either.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a short break and come back to it tomorrow.", zh: "我们先休息一下，明天再回来练这个吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's clear our heads for a bit.", zh: "好主意，我们先放空一下脑子。", correct: true, xp: 10 },
          { text: "Let's just keep grinding until it's perfect.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's clear our heads for a bit.",
        next: null
      }
    }
  },
  {
    id: "the-first-full-song",
    transition: { en: "After weeks of practice, they play through their first full song.", zh: "练习了好几周后，他们第一次完整弹完一首歌。" },
    title: "The First Full Song",
    subtitle: "家里 · 第一首完整曲子",
    avatar: "🎶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We actually got through the whole song that time!", zh: "这次我们真的完整弹完了整首歌！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, I'm honestly a little emotional.", zh: "我们做到了，说实话我有点感动。", correct: true, xp: 10 },
          { text: "We didn't, that was a complete disaster.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, I'm honestly a little emotional.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That sounded so much better than last week.", zh: "这次听起来比上周好多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, all that practice paid off.", zh: "确实如此，所有的练习都有了回报。", correct: true, xp: 10 },
          { text: "It really didn't, last week sounded better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, all that practice paid off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's record this and send it to our teacher.", zh: "我们录下来发给老师吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, they'll be so proud.", zh: "好啊，老师一定会很骄傲的。", correct: true, xp: 10 },
          { text: "Let's not, recordings always sound embarrassing.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, they'll be so proud.",
        next: null
      }
    }
  },
  {
    id: "the-recital",
    transition: { en: "Their teacher invites them to a small student recital.", zh: "老师邀请他们参加一场小型学员汇报演出。" },
    title: "The Recital",
    subtitle: "音乐教室 · 汇报演出",
    avatar: "🎤",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you nervous about playing in front of people?", zh: "在别人面前弹奏你紧张吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "A little, but I've prepared as much as I can.", zh: "有一点，但我已经尽力准备了。", correct: true, xp: 10 },
          { text: "No, performing has never bothered me at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → A little, but I've prepared as much as I can.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There are much younger students performing tonight too.", zh: "今晚还有年纪小得多的学生也要表演。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's inspiring, age really doesn't matter here.", zh: "这挺鼓舞人心的，年龄在这儿真的不重要。", correct: true, xp: 10 },
          { text: "That's embarrassing, we shouldn't be here at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's inspiring, age really doesn't matter here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're up next, are you ready?", zh: "下一个轮到你们了，准备好了吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We're ready, let's just have fun with it.", zh: "准备好了，我们就享受这个过程吧。", correct: true, xp: 10 },
          { text: "We're not ready, let's leave right now.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We're ready, let's just have fun with it.",
        next: null
      }
    }
  },
  {
    id: "on-stage",
    transition: { en: "They step onto a small stage to play their song together.", zh: "他们走上小舞台，一起弹奏他们的曲子。" },
    title: "On Stage",
    subtitle: "音乐教室 · 舞台上",
    avatar: "🎸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My hands are shaking more than I expected.", zh: "我的手抖得比我预想的要厉害。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but let's just start playing.", zh: "我也是，但我们就开始弹吧。", correct: true, xp: 10 },
          { text: "Mine aren't shaking at all, I feel calm.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but let's just start playing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We made it through without a single mistake!", zh: "我们一个错误都没犯地完整弹完了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We actually did it, I can't believe it.", zh: "我们真的做到了，我简直不敢相信。", correct: true, xp: 10 },
          { text: "We didn't, that performance was a disaster.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We actually did it, I can't believe it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "The applause afterward felt more rewarding than I imagined.", zh: "演出后的掌声比我想象的更让人有成就感。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, this was worth every hard practice.", zh: "确实如此，之前每一次辛苦的练习都值得了。", correct: true, xp: 10 },
          { text: "It really didn't, the applause felt awkward.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, this was worth every hard practice.",
        next: null
      }
    }
  },
  {
    id: "already-planning-the-next-song",
    transition: { en: "On the drive home, they're already excited about learning more.", zh: "回家的路上，他们已经迫不及待想学更多了。" },
    title: "Already Planning the Next Song",
    subtitle: "车上 · 期待下一首",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What song should we learn next?", zh: "我们下一首要学什么歌？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Something a bit more challenging, maybe.", zh: "也许可以学点更有挑战性的。", correct: true, xp: 10 },
          { text: "Nothing, we should probably stop learning now.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Something a bit more challenging, maybe.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've come further than I ever thought we would.", zh: "我们进步的程度超出了我曾经的想象。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and it's just the beginning.", zh: "确实如此，而且这只是个开始。", correct: true, xp: 10 },
          { text: "We really haven't, we've barely improved at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and it's just the beginning.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy life gets, let's keep making music together.", zh: "不管生活多忙，我们都要继续一起弹奏音乐。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, this is worth the time.", zh: "不管多忙，这都值得花时间。", correct: true, xp: 10 },
          { text: "No matter how busy, we'll probably quit soon.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, this is worth the time.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "instrument", zh: "乐器", category: "community" },
  { en: "on a whim", zh: "一时兴起", category: "community" },
  { en: "plenty of", zh: "很多", category: "community" },
  { en: "teacher", zh: "老师", category: "community" },
  { en: "music shop", zh: "乐器店", category: "community" },
  { en: "guitars", zh: "吉他（复数）", category: "community" },
  { en: "comfortable", zh: "舒适的", category: "community" },
  { en: "steel strings", zh: "钢弦", category: "community" },
  { en: "nylon strings", zh: "尼龙弦", category: "community" },
  { en: "gentler", zh: "更柔和的（gentle 比较级）", category: "community" },
  { en: "beginners", zh: "初学者（复数）", category: "community" },
  { en: "tuner", zh: "调音器", category: "community" },
  { en: "picks", zh: "拨片（复数）", category: "community" },
  { en: "press down", zh: "按住", category: "community" },
  { en: "chord", zh: "和弦", category: "community" },
  { en: "fingers", zh: "手指（复数）", category: "community" },
  { en: "hurt", zh: "疼", category: "community" },
  { en: "break", zh: "休息", category: "community" },
  { en: "getting the hang of", zh: "开始上手", category: "community" },
  { en: "chord change", zh: "和弦切换", category: "community" },
  { en: "slowly but surely", zh: "虽慢但稳", category: "community" },
  { en: "ahead", zh: "领先", category: "community" },
  { en: "tabs", zh: "吉他谱", category: "community" },
  { en: "fret", zh: "品格（吉他）", category: "community" },
  { en: "specific", zh: "具体的", category: "community" },
  { en: "sheet music", zh: "五线谱", category: "community" },
  { en: "clicks", zh: "想通了，顿悟", category: "community" },
  { en: "stuck", zh: "卡住的", category: "community" },
  { en: "figure it out", zh: "想办法解决", category: "community" },
  { en: "frustrating", zh: "令人沮丧的", category: "community" },
  { en: "clear our heads", zh: "放空脑子", category: "community" },
  { en: "grinding", zh: "苦练", category: "community" },
  { en: "full song", zh: "完整的一首歌", category: "community" },
  { en: "emotional", zh: "感动的", category: "community" },
  { en: "record", zh: "录制", category: "community" },
  { en: "recital", zh: "汇报演出", category: "community" },
  { en: "performing", zh: "表演", category: "community" },
  { en: "inspiring", zh: "鼓舞人心的", category: "community" },
  { en: "up next", zh: "下一个轮到", category: "community" },
  { en: "on stage", zh: "在舞台上", category: "community" },
  { en: "shaking", zh: "颤抖", category: "community" },
  { en: "without a single mistake", zh: "一个错误都没有", category: "community" },
  { en: "applause", zh: "掌声", category: "community" },
  { en: "rewarding", zh: "有成就感的", category: "community" },
  { en: "challenging", zh: "有挑战性的", category: "community" },
  { en: "come further", zh: "取得了更多进步", category: "community" },
  { en: "just the beginning", zh: "只是个开始", category: "community" }
);
