// 内容数据层：第七十六章，紧接第七十五章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人加入了本地酒吧每周的知识问答之夜。全新词汇领域：
// 分组竞赛/答题板/题目类别/最终得分。

GAME_CONTENT.scenes.push(
  {
    id: "noticing-the-sign",
    transition: { en: "A chalkboard sign outside a pub advertises weekly trivia night.", zh: "酒吧外一块黑板宣传每周的知识问答之夜。" },
    title: "Noticing the Sign",
    subtitle: "酒吧外 · 发现告示",
    avatar: "🍺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever done trivia night before?", zh: "你以前参加过知识问答之夜吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never done it, but I love random facts.", zh: "我从没参加过，不过我很喜欢各种冷知识。", correct: true, xp: 10 },
          { text: "I've done this every single week for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never done it, but I love random facts.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Teams can have up to six players.", zh: "每队最多可以有六名玩家。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "That's plenty, let's invite a couple more friends.", zh: "这人数够用了，我们再邀请几个朋友吧。", correct: true, xp: 10 },
          { text: "That's too many, let's just go by ourselves.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/规则 → That's plenty, let's invite a couple more friends.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's come back next Thursday and give it a try.", zh: "我们下周四回来试试看吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'm actually excited already.", zh: "好啊，我已经很期待了。", correct: true, xp: 10 },
          { text: "Let's forget about it, trivia sounds too stressful.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm actually excited already.",
        next: null
      }
    }
  },
  {
    id: "forming-a-team",
    transition: { en: "They gather a small group of friends and pick a team name.", zh: "他们召集了一小群朋友，起了一个队名。" },
    title: "Forming a Team",
    subtitle: "群聊 · 组队",
    avatar: "👥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should we name our team?", zh: "我们队应该叫什么名字？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Something punny, like Quiz Pro Quo.", zh: "起个带点谐音梗的名字，比如“问答有理”。", correct: true, xp: 10 },
          { text: "It doesn't need a name, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Something punny, like Quiz Pro Quo.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This name is funnier than the one we used last time.", zh: "这个名字比我们上次用的要更好笑。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's go with this one for sure.", zh: "确实是，那我们就用这个吧。", correct: true, xp: 10 },
          { text: "It isn't, let's just keep the old boring name.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's go with this one for sure.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's split up who's good at which categories.", zh: "我们分一下谁擅长哪个类别吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, I'm strong in movies and music.", zh: "好主意，我在电影和音乐方面比较强。", correct: true, xp: 10 },
          { text: "Let's not plan anything, we'll just wing it.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, I'm strong in movies and music.",
        next: null
      }
    }
  },
  {
    id: "the-first-round",
    transition: { en: "The host reads out the first round of questions.", zh: "主持人念出了第一轮的题目。" },
    title: "The First Round",
    subtitle: "酒吧 · 第一轮问答",
    avatar: "🎙️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This category is history, does anyone know a lot about that?", zh: "这个类别是历史，有人对这个很了解吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, actually, history happens to be my thing.", zh: "有的，其实历史正好是我擅长的。", correct: true, xp: 10 },
          { text: "No, none of us know anything about history.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, actually, history happens to be my thing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This question is trickier than I expected round one to be.", zh: "这道题比我预想的第一轮要棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's think about it together.", zh: "确实是，我们一起想想吧。", correct: true, xp: 10 },
          { text: "It isn't, this question feels far too easy.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's think about it together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's write our answer down before time runs out.", zh: "我们赶在时间结束前写下答案吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, quick, we're almost out of time.", zh: "好，快点，我们快没时间了。", correct: true, xp: 10 },
          { text: "Let's just leave the answer blank instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, quick, we're almost out of time.",
        next: null
      }
    }
  },
  {
    id: "a-lucky-guess",
    transition: { en: "A wild guess on a science question surprisingly lands correct.", zh: "一次关于科学题的乱猜居然出乎意料地答对了。" },
    title: "A Lucky Guess",
    subtitle: "酒吧 · 幸运的猜测",
    avatar: "🍀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That was a total guess, and we actually got it right!", zh: "那完全是瞎猜的，我们居然还答对了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, I can't believe that worked!", zh: "我们做到了，真不敢相信居然对了！", correct: true, xp: 10 },
          { text: "We didn't, that answer was actually wrong.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, I can't believe that worked!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We're doing better than I ever expected for our first time.", zh: "对于我们第一次来说，表现比我预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really are, maybe we're naturals at this.", zh: "确实如此，也许我们对这个还挺有天赋的。", correct: true, xp: 10 },
          { text: "We really aren't, we're doing terribly, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really are, maybe we're naturals at this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's not get overconfident, there's still a lot of trivia left.", zh: "我们别太自满，后面还有很多题呢。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good point, let's stay focused for the rest.", zh: "说得有道理，接下来我们要保持专注。", correct: true, xp: 10 },
          { text: "Let's just relax completely for the rest of the night.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good point, let's stay focused for the rest.",
        next: null
      }
    }
  },
  {
    id: "the-music-round",
    transition: { en: "Short song clips play during the music category round.", zh: "音乐类别环节播放了几段简短的歌曲片段。" },
    title: "The Music Round",
    subtitle: "酒吧 · 音乐环节",
    avatar: "🎵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you recognize this song from the intro?", zh: "从这段前奏你能认出这首歌吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I do, this song is from the nineties.", zh: "认得出来，这是九十年代的歌。", correct: true, xp: 10 },
          { text: "I don't, this song sounds completely unfamiliar.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I do, this song is from the nineties.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This round is more fun than the history round was.", zh: "这一轮比历史环节要更有趣。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, music trivia is my favorite kind.", zh: "确实是，音乐类问答是我最喜欢的类型。", correct: true, xp: 10 },
          { text: "It isn't, this round feels much more boring.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, music trivia is my favorite kind.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We got every single question right in this round!", zh: "这一轮的每一道题我们都答对了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did, this is honestly our best round yet.", zh: "确实做到了，说实话这是我们目前最好的一轮。", correct: true, xp: 10 },
          { text: "We didn't, we missed almost every question.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did, this is honestly our best round yet.",
        next: null
      }
    }
  },
  {
    id: "a-tricky-tiebreaker",
    transition: { en: "Two teams end up tied, leading to a nerve-wracking tiebreaker.", zh: "两支队伍打平了，进入了令人紧张的加时赛。" },
    title: "A Tricky Tiebreaker",
    subtitle: "酒吧 · 加时赛",
    avatar: "😰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tiebreaker feels more intense than the whole game combined.", zh: "这次加时赛比整场比赛加起来还要紧张。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, my heart is honestly racing right now.", zh: "确实是，说实话我的心跳现在都加快了。", correct: true, xp: 10 },
          { text: "It doesn't, this feels completely relaxed to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, my heart is honestly racing right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we're closest without going over, we win.", zh: "如果我们的答案在不超过的情况下最接近，我们就赢了。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's the rule, let's guess carefully.", zh: "如果规则是这样，我们就仔细猜吧。", correct: true, xp: 10 },
          { text: "If that's the rule, let's just guess a huge number.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's the rule, let's guess carefully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're closer than the other team, we actually won!", zh: "我们比另一队更接近，我们真的赢了！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We are, I honestly can't believe it!", zh: "确实是，我真不敢相信！", correct: true, xp: 10 },
          { text: "We aren't, the other team clearly beat us.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We are, I honestly can't believe it!",
        next: null
      }
    }
  },
  {
    id: "claiming-the-prize",
    transition: { en: "The host announces their team as the winner of the night.", zh: "主持人宣布他们的队伍是今晚的优胜者。" },
    title: "Claiming the Prize",
    subtitle: "酒吧 · 领取奖品",
    avatar: "🏆",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Congratulations, your team wins a gift card tonight!", zh: "恭喜，你们队今晚赢得了一张礼品卡！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's amazing, we can't believe our luck!", zh: "太棒了，我们简直不敢相信自己的运气！", correct: true, xp: 10 },
          { text: "That's disappointing, we expected something better.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's amazing, we can't believe our luck!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This win feels sweeter than I expected our first time to feel.", zh: "对于我们的第一次来说，这次获胜比我预想的更让人满足。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, beginner's luck can be amazing.", zh: "确实如此，新手运有时候真的很厉害。", correct: true, xp: 10 },
          { text: "It doesn't, winning never really feels satisfying.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, beginner's luck can be amazing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's celebrate with a round of drinks for everyone.", zh: "我们给大家点一轮饮料庆祝一下吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, we've definitely earned it.", zh: "好啊，我们绝对是应得的。", correct: true, xp: 10 },
          { text: "Let's just save the gift card and go home.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, we've definitely earned it.",
        next: null
      }
    }
  },
  {
    id: "a-new-weekly-plan",
    transition: { en: "Buzzing from the win, they talk about making it a regular thing.", zh: "沉浸在胜利的喜悦中，他们聊起要不要把这变成固定活动。" },
    title: "A New Weekly Plan",
    subtitle: "酒吧 · 定下每周计划",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we make this a regular Thursday thing?", zh: "我们要把这变成固定的周四活动吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's mark it on the calendar right now.", zh: "好，我们现在就标在日历上吧。", correct: true, xp: 10 },
          { text: "No, once was already more than enough.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's mark it on the calendar right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This has honestly become more fun than I expected weekly outings to be.", zh: "说实话，这比我预想的每周活动要有趣得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, I already look forward to next week.", zh: "确实如此，我已经开始期待下周了。", correct: true, xp: 10 },
          { text: "It hasn't, this feels like a chore already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, I already look forward to next week.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how we do next time, tonight was a great start.", zh: "不管下次我们表现如何，今晚都是个很好的开始。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, tonight was honestly perfect.", zh: "不管怎样，今晚说实话真的很完美。", correct: true, xp: 10 },
          { text: "No matter what, we probably won't come back.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, tonight was honestly perfect.",
        next: null
      }
    }
  },
  {
    id: "studying-for-fun",
    transition: { en: "In the following weeks, they start jokingly quizzing each other at home.", zh: "接下来几周，他们开始在家里开玩笑地互相考问。" },
    title: "Studying for Fun",
    subtitle: "家里 · 为了好玩而学习",
    avatar: "📚",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did you know the human body has more bones as a baby than as an adult?", zh: "你知道人体作为婴儿时的骨头比成年后要多吗？" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I didn't know that, that's a fun fact.", zh: "我不知道，这真是个有趣的冷知识。", correct: true, xp: 10 },
          { text: "I already knew that, everyone knows that.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I didn't know that, that's a fun fact.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've been learning more random facts than I ever expected we would.", zh: "我们学到的冷知识比我曾经预想的要多得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, this hobby is oddly educational.", zh: "确实如此，这个爱好意外地挺有教育意义的。", correct: true, xp: 10 },
          { text: "We really haven't, we've forgotten everything already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, this hobby is oddly educational.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep quizzing each other before next Thursday.", zh: "下周四之前我们继续互相考一考吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, practice can only help us win again.", zh: "好啊，多练习总能帮我们再赢一次。", correct: true, xp: 10 },
          { text: "Let's not, we already know everything we need.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, practice can only help us win again.",
        next: null
      }
    }
  },
  {
    id: "a-friendly-rivalry",
    transition: { en: "A rival team starts to recognize them each week at the pub.", zh: "一支对手队伍开始每周在酒吧认出他们了。" },
    title: "A Friendly Rivalry",
    subtitle: "酒吧 · 友好的竞争",
    avatar: "😄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You two again, you're getting harder to beat each week.", zh: "又是你们俩，你们一周比一周更难被打败了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We're trying, honestly, and it's been fun.", zh: "说实话，我们也在努力，而且过程很有趣。", correct: true, xp: 10 },
          { text: "We're not trying at all, we're just lucky.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We're trying, honestly, and it's been fun.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This rivalry has made trivia night even more exciting than before.", zh: "这份竞争让知识问答之夜比以前更精彩了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really has, I love having someone to compete with.", zh: "确实如此，我很喜欢有对手一起较量。", correct: true, xp: 10 },
          { text: "It hasn't, competition just makes everything worse.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really has, I love having someone to compete with.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter who wins next week, this has become one of my favorite nights.", zh: "不管下周谁赢，这已经成了我最喜欢的夜晚之一。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter who wins, I feel exactly the same way.", zh: "不管谁赢，我也有完全一样的感受。", correct: true, xp: 10 },
          { text: "No matter who wins, only winning really matters.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter who wins, I feel exactly the same way.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "chalkboard", zh: "黑板", category: "community" },
  { en: "trivia night", zh: "知识问答之夜", category: "community" },
  { en: "random facts", zh: "冷知识（复数）", category: "community" },
  { en: "teams", zh: "队伍（复数）", category: "community" },
  { en: "plenty", zh: "足够，很多", category: "community" },
  { en: "punny", zh: "带谐音梗的", category: "community" },
  { en: "funnier", zh: "更好笑的（funny 比较级）", category: "community" },
  { en: "categories", zh: "类别（复数）", category: "community" },
  { en: "host", zh: "主持人", category: "community" },
  { en: "round", zh: "一轮", category: "community" },
  { en: "my thing", zh: "我擅长的事", category: "community" },
  { en: "time runs out", zh: "时间用完", category: "community" },
  { en: "wild guess", zh: "乱猜", category: "community" },
  { en: "science question", zh: "科学题", category: "community" },
  { en: "naturals", zh: "有天赋的人（复数）", category: "community" },
  { en: "overconfident", zh: "过度自信的", category: "community" },
  { en: "stay focused", zh: "保持专注", category: "community" },
  { en: "song clips", zh: "歌曲片段（复数）", category: "community" },
  { en: "intro", zh: "前奏", category: "community" },
  { en: "unfamiliar", zh: "陌生的", category: "community" },
  { en: "missed", zh: "错过，答错", category: "community" },
  { en: "tiebreaker", zh: "加时赛，平局决胜", category: "community" },
  { en: "nerve-wracking", zh: "令人紧张的", category: "community" },
  { en: "intense", zh: "紧张激烈的", category: "community" },
  { en: "heart racing", zh: "心跳加快", category: "community" },
  { en: "closest", zh: "最接近的", category: "community" },
  { en: "gift card", zh: "礼品卡", category: "community" },
  { en: "sweeter", zh: "更甜美的（sweet 比较级）", category: "community" },
  { en: "round of drinks", zh: "一轮饮料", category: "community" },
  { en: "earned it", zh: "应得的", category: "community" },
  { en: "buzzing", zh: "沉浸在兴奋中", category: "community" },
  { en: "weekly outings", zh: "每周的外出活动", category: "community" },
  { en: "great start", zh: "很好的开始", category: "community" },
  { en: "quizzing", zh: "互相考问", category: "community" },
  { en: "fun fact", zh: "有趣的冷知识", category: "community" },
  { en: "oddly educational", zh: "意外地有教育意义", category: "community" },
  { en: "rival team", zh: "对手队伍", category: "community" },
  { en: "harder to beat", zh: "更难被打败", category: "community" },
  { en: "rivalry", zh: "竞争关系", category: "community" },
  { en: "compete with", zh: "与……较量", category: "community" }
);
