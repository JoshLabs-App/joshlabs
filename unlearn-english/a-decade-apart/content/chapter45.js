// 内容数据层：第四十五章，紧接第四十四章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter44.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：为了保持社交和运动习惯，两人加入了一个社区业余排球联赛。全新词汇领域：
// 报名参赛/组队/赛程安排/胜负与团队精神。

GAME_CONTENT.scenes.push(
  {
    id: "spotting-the-flyer",
    transition: { en: "A flyer at the community center catches their eye.", zh: "社区中心的一张传单引起了他们的注意。" },
    title: "Spotting the Flyer",
    subtitle: "社区中心 · 发现传单",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look, they're starting a volleyball league.", zh: "看，他们要办一个排球联赛。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're definitely signing up for this.", zh: "我们一定要报名参加这个。", correct: true, xp: 10 },
          { text: "We're never doing anything like this.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → We're definitely signing up for this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you think we're good enough to join?", zh: "你觉得我们水平够加入吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "It says all skill levels are welcome.", zh: "上面写着欢迎各种水平的人加入。", correct: true, xp: 10 },
          { text: "No, this league sounds far too advanced.", correct: false }
        ],
        hintOnWrong: "肯定回答（补充信息） → It says all skill levels are welcome.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to find a few more teammates first.", zh: "我们得先再找几个队友。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "True, let's ask some friends tonight.", zh: "没错，我们今晚就问问朋友吧。", correct: true, xp: 10 },
          { text: "True, though we'd rather play completely alone.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → True, let's ask some friends tonight.",
        next: null
      }
    }
  },
  {
    id: "putting-together-a-team",
    transition: { en: "They text a few friends to see who wants to join.", zh: "他们给几个朋友发消息，看谁想加入。" },
    title: "Putting Together a Team",
    subtitle: "手机 · 组队",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How many players do we actually need on a team?", zh: "一支队伍实际需要多少名球员？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We need at least six players total.", zh: "我们总共至少需要六名球员。", correct: true, xp: 10 },
          { text: "We don't need any players at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → We need at least six players total.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you heard back from anyone yet?", zh: "有人回复你了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've heard back from three people already.", zh: "我已经收到三个人的回复了。", correct: true, xp: 10 },
          { text: "I've never once texted anyone about this.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've heard back from three people already.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "What should we name our team?", zh: "我们的队伍要叫什么名字？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Something fun, like the Bump Setters.", zh: "起个有趣点的名字，比如“垫传高手”。", correct: true, xp: 10 },
          { text: "It doesn't need a name, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Something fun, like the Bump Setters.",
        next: null
      }
    }
  },
  {
    id: "registering-the-team",
    transition: { en: "They fill out the registration form at the community center.", zh: "他们在社区中心填写了报名表。" },
    title: "Registering the Team",
    subtitle: "社区中心 · 报名注册",
    avatar: "📝",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you already have a team name picked out?", zh: "你们已经选好队名了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we're calling ourselves the Bump Setters.", zh: "选好了，我们叫“垫传高手”。", correct: true, xp: 10 },
          { text: "No, names have never mattered to us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, we're calling ourselves the Bump Setters.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The season runs for eight weeks, starting in June.", zh: "赛季从六月开始，持续八周。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That timeline works perfectly for us.", zh: "这个时间安排对我们来说正合适。", correct: true, xp: 10 },
          { text: "That timeline sounds completely unmanageable.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That timeline works perfectly for us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Games are played on Tuesday evenings.", zh: "比赛安排在周二晚上。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Tuesdays work great for our schedule.", zh: "周二对我们的日程来说非常合适。", correct: true, xp: 10 },
          { text: "Tuesdays are terrible, we're always busy then.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Tuesdays work great for our schedule.",
        next: null
      }
    }
  },
  {
    id: "the-first-practice",
    transition: { en: "The team gets together for their first practice session.", zh: "队伍第一次一起训练。" },
    title: "The First Practice",
    subtitle: "体育馆 · 首次训练",
    avatar: "🏐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you set the ball for me on this one?", zh: "这一球你能给我传一下吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, get ready to spike it.", zh: "可以，准备好扣球吧。", correct: true, xp: 10 },
          { text: "I can't, setting the ball isn't my thing.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, get ready to spike it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You're better at serving than I expected.", zh: "你的发球比我预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, I've been practicing at home actually.", zh: "谢谢，其实我一直在家练习。", correct: true, xp: 10 },
          { text: "Thanks, though I've never played before this.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, I've been practicing at home actually.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's run through a few more drills before we stop.", zh: "结束前我们再多练几个球吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds good, let's keep going a little longer.", zh: "好的，我们再多练一会儿。", correct: true, xp: 10 },
          { text: "Let's just stop now, we've done enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds good, let's keep going a little longer.",
        next: null
      }
    }
  },
  {
    id: "opening-night-jitters",
    transition: { en: "On opening night, nerves build up before the first whistle.", zh: "开幕夜，第一声哨响之前，紧张情绪逐渐累积。" },
    title: "Opening Night Jitters",
    subtitle: "体育馆 · 开幕夜的紧张",
    avatar: "😬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you nervous about our first real game?", zh: "对我们的第一场正式比赛你紧张吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "A little, but mostly I'm excited.", zh: "有一点，但主要还是兴奋。", correct: true, xp: 10 },
          { text: "No, nothing about tonight matters to me.", correct: false }
        ],
        hintOnWrong: "肯定回答 → A little, but mostly I'm excited.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This other team looks more experienced than us.", zh: "对方那支队伍看起来比我们更有经验。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Maybe, but let's just do our best anyway.", zh: "也许吧，但我们尽力就好。", correct: true, xp: 10 },
          { text: "Maybe, so let's just forfeit right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Maybe, but let's just do our best anyway.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whatever the score is tonight, let's have fun out there.", zh: "不管今晚比分如何，我们都要在场上玩得开心。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever happens, having fun is the whole point.", zh: "不管结果如何，玩得开心才是重点。", correct: true, xp: 10 },
          { text: "Whatever happens, winning is the only thing that matters.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever happens, having fun is the whole point.",
        next: null
      }
    }
  },
  {
    id: "a-close-first-set",
    transition: { en: "The first set comes down to the wire.", zh: "第一局比赛打到了最后关头。" },
    title: "A Close First Set",
    subtitle: "体育馆 · 焦灼的第一局",
    avatar: "🏐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This set is closer than I thought it would be.", zh: "这一局比我想的要焦灼多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, every point matters now.", zh: "确实如此，现在每一分都很重要。", correct: true, xp: 10 },
          { text: "It really isn't, we're way ahead already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, every point matters now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you cover the back line on the next serve?", zh: "下一个发球你能守住后场吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I'll stay right there.", zh: "可以，我会守在那儿的。", correct: true, xp: 10 },
          { text: "I can't, the back line scares me.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, I'll stay right there.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We just won that set by two points!", zh: "我们刚以两分优势赢下了那一局！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, that felt incredible!", zh: "我们做到了，感觉太棒了！", correct: true, xp: 10 },
          { text: "We didn't, we clearly lost that set.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, that felt incredible!",
        next: null
      }
    }
  },
  {
    id: "a-tough-loss",
    transition: { en: "A few weeks later, the team loses a game badly.", zh: "几周后，队伍输掉了一场比分惨烈的比赛。" },
    title: "A Tough Loss",
    subtitle: "体育馆 · 惨痛的失利",
    avatar: "😔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That was a much harder loss than usual.", zh: "这次输球比平常要难受多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, but we'll bounce back.", zh: "确实是，但我们会振作起来的。", correct: true, xp: 10 },
          { text: "It wasn't, losing never bothers us at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, but we'll bounce back.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Even after a loss like this, I still love this team.", zh: "即使输了这样的比赛，我依然喜欢这支队伍。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even after this, so do I, completely.", zh: "即使经历了这些，我也完全一样喜欢。", correct: true, xp: 10 },
          { text: "Even after this, I want to quit right now.", correct: false }
        ],
        hintOnWrong: "让步句 → Even after this, so do I, completely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's watch some film and figure out what went wrong.", zh: "我们看看录像，找出问题出在哪里吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's do that this weekend.", zh: "好主意，我们这周末就看吧。", correct: true, xp: 10 },
          { text: "Let's just forget this game ever happened.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's do that this weekend.",
        next: null
      }
    }
  },
  {
    id: "team-bonding",
    transition: { en: "After a game, the team grabs pizza together to unwind.", zh: "比赛结束后，队伍一起去吃披萨放松一下。" },
    title: "Team Bonding",
    subtitle: "餐厅 · 团队聚餐",
    avatar: "🍕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This team has become closer than I ever expected.", zh: "这支队伍变得比我预想的还要亲密。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, I'm grateful for all of you.", zh: "确实如此，我很感激你们所有人。", correct: true, xp: 10 },
          { text: "It really hasn't, we're all still strangers.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, I'm grateful for all of you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How did you two even get into volleyball?", zh: "你们俩到底是怎么开始接触排球的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We just saw a flyer and decided to try it.", zh: "我们就是看到一张传单，决定试试看。", correct: true, xp: 10 },
          { text: "Volleyball is something we've never actually played.", correct: false }
        ],
        hintOnWrong: "wh-问题回答经历 → We just saw a flyer and decided to try it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might be the best decision we made all year.", zh: "这可能是我们今年做过的最棒的决定。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It honestly might be, up there with a few others.", zh: "说实话，确实可能是，也算是这一年里的亮点之一。", correct: true, xp: 10 },
          { text: "It definitely isn't, this was a mistake.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It honestly might be, up there with a few others.",
        next: null
      }
    }
  },
  {
    id: "the-championship-game",
    transition: { en: "The final match of the season arrives — the championship game.", zh: "赛季的最后一场比赛来了——冠军赛。" },
    title: "The Championship Game",
    subtitle: "体育馆 · 冠军赛",
    avatar: "🏆",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've made it further than we ever imagined.", zh: "我们走到的这一步比我们想象的还要远。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, no matter what happens tonight.", zh: "确实如此，不管今晚结果如何。", correct: true, xp: 10 },
          { text: "We really haven't, we barely made progress.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, no matter what happens tonight.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Whatever happens, I'm proud of how far we've come.", zh: "无论结果如何，我为我们走过的路感到骄傲。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Whatever happens, this season has been amazing.", zh: "无论结果如何，这个赛季都很棒。", correct: true, xp: 10 },
          { text: "Whatever happens, none of this was worth it.", correct: false }
        ],
        hintOnWrong: "让步句 → Whatever happens, this season has been amazing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's go out there and give it everything we've got.", zh: "我们上场吧，全力以赴。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do it, together, one last time.", zh: "我们一起，最后再拼一次。", correct: true, xp: 10 },
          { text: "Let's just take it easy this time.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do it, together, one last time.",
        next: null
      }
    }
  },
  {
    id: "the-final-whistle",
    transition: { en: "The final whistle blows, and the season comes to a close.", zh: "最后一声哨响，赛季画上了句号。" },
    title: "The Final Whistle",
    subtitle: "体育馆 · 赛季落幕",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "However this ended, I'm just glad we did this.", zh: "不管结果怎样，我很高兴我们参加了这次比赛。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "However it ended, this was worth every second.", zh: "不管结果怎样，这一切都值得每一秒钟。", correct: true, xp: 10 },
          { text: "However it ended, this whole season was pointless.", correct: false }
        ],
        hintOnWrong: "让步句 → However it ended, this was worth every second.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel now that the season is finally over?", zh: "赛季终于结束了，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "A little sad, but really grateful for it all.", zh: "有点伤感，但对这一切非常感激。", correct: true, xp: 10 },
          { text: "I don't feel anything about it, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → A little sad, but really grateful for it all.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should definitely sign up again next season.", zh: "我们下个赛季一定要再报名参加。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Absolutely, count us in for next season too.", zh: "当然，下个赛季也算上我们。", correct: true, xp: 10 },
          { text: "Absolutely not, once was more than enough.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Absolutely, count us in for next season too.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "flyer", zh: "传单", category: "community" },
  { en: "community center", zh: "社区中心", category: "community" },
  { en: "volleyball", zh: "排球", category: "community" },
  { en: "league", zh: "联赛", category: "community" },
  { en: "sign up", zh: "报名参加", category: "community" },
  { en: "skill levels", zh: "水平等级", category: "community" },
  { en: "welcome", zh: "受欢迎的", category: "community" },
  { en: "teammates", zh: "队友（复数）", category: "community" },
  { en: "players", zh: "球员（复数）", category: "community" },
  { en: "at least", zh: "至少", category: "community" },
  { en: "heard back", zh: "收到了回复", category: "community" },
  { en: "team name", zh: "队名", category: "community" },
  { en: "fun", zh: "有趣的", category: "community" },
  { en: "registration form", zh: "报名表", category: "community" },
  { en: "calling ourselves", zh: "自称", category: "community" },
  { en: "season", zh: "赛季", category: "community" },
  { en: "timeline", zh: "时间安排", category: "community" },
  { en: "unmanageable", zh: "难以应付的", category: "community" },
  { en: "schedule", zh: "日程", category: "community" },
  { en: "practice", zh: "训练", category: "community" },
  { en: "set", zh: "传球（排球术语）", category: "community" },
  { en: "spike", zh: "扣球", category: "community" },
  { en: "serving", zh: "发球", category: "community" },
  { en: "drills", zh: "训练项目（复数）", category: "community" },
  { en: "opening night", zh: "开幕夜", category: "community" },
  { en: "jitters", zh: "紧张情绪", category: "community" },
  { en: "nervous", zh: "紧张的", category: "community" },
  { en: "experienced", zh: "有经验的", category: "community" },
  { en: "do our best", zh: "尽力而为", category: "community" },
  { en: "forfeit", zh: "弃权", category: "community" },
  { en: "score", zh: "比分", category: "community" },
  { en: "whole point", zh: "全部的意义", category: "community" },
  { en: "close", zh: "接近的，焦灼的", category: "community" },
  { en: "back line", zh: "后场", category: "community" },
  { en: "won", zh: "赢了的", category: "community" },
  { en: "tough loss", zh: "惨痛的失利", category: "community" },
  { en: "harder", zh: "更难的（hard 比较级）", category: "community" },
  { en: "bounce back", zh: "振作起来", category: "community" },
  { en: "film", zh: "比赛录像", category: "community" },
  { en: "went wrong", zh: "出了问题", category: "community" },
  { en: "bonding", zh: "团队联结", category: "community" },
  { en: "unwind", zh: "放松", category: "community" },
  { en: "closer", zh: "更亲密的（close 比较级）", category: "community" },
  { en: "grateful", zh: "感激的", category: "community" },
  { en: "strangers", zh: "陌生人（复数）", category: "community" },
  { en: "championship", zh: "冠军赛", category: "community" },
  { en: "made it further", zh: "走得更远", category: "community" },
  { en: "give it everything", zh: "全力以赴", category: "community" },
  { en: "final whistle", zh: "终场哨声", category: "community" },
  { en: "comes to a close", zh: "画上句号", category: "community" },
  { en: "worth every second", zh: "值得每一秒", category: "community" },
  { en: "count us in", zh: "算上我们", category: "community" }
);
