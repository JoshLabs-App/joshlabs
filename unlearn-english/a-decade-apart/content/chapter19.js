// 内容数据层：第十九章，紧接第十八章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter18.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（见 skills/joshlabs-dev/references/projects/english-game.md）
// 本章引入 L4 原计划的最后一个新 grammarTag：
//   - phrasal-verb（chunk，不占"一课一个新点"名额，5课内复现——短语动词是
//     固定搭配、整块记忆，认知负担低，跟courtesy/lets-suggestion同类）：
//     常见短语动词（look into / figure out / come across / carry on /
//     look forward to 等），第1课（a-filmmaker-visits）引入，第1/4课复现。
// relative-clause/conditional-advanced 等其余L4点与L3各点继续复现巩固。
// **至此L4原计划四点+自然生长出的两点（conditional-advanced、
// relative-clause）+这一课的phrasal-verb，L4语法范围基本铺满。**
//
// 剧情：一位纪录片导演听说了Lily's House的故事，想拍一部短片——呼应第15章
// 的"报纸报道"这条线，把故事进一步带向更广的公众视野。

GAME_CONTENT.scenes.push(
  {
    id: "a-filmmaker-visits",
    transition: { en: "A woman with a camera bag introduces herself at the door.", zh: "一位背着相机包的女士在门口自我介绍。" },
    title: "A Filmmaker Visits",
    subtitle: "Lily之家 · 纪录片导演来访",
    avatar: "🎥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I came across your story in the newspaper. It stuck with me.", zh: "我在报纸上偶然读到了你们的故事。一直记在心里。" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "I'm glad you came across it.", zh: "很高兴你偶然读到了它。", correct: true, xp: 10 },
          { text: "I'm sorry you came across it.", correct: false }
        ],
        hintOnWrong: "用短语动词（come across）→ I'm glad you came across it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'd like to look into making a short documentary.", zh: "我想调查一下，拍一部短纪录片。" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "We'd love for you to look into it.", zh: "我们很乐意让您调查一下。", correct: true, xp: 10 },
          { text: "Please don't look into anything here.", correct: false }
        ],
        hintOnWrong: "用短语动词（look into）→ We'd love for you to look into it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would everyone be comfortable being filmed?", zh: "大家愿意被拍摄吗？" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If they agree, I'm comfortable with it.", zh: "如果他们同意，我没问题。", correct: true, xp: 10 },
          { text: "If they agree, I'll still say no.", correct: false }
        ],
        hintOnWrong: "用条件句 → If they agree, I'm comfortable with it.",
        next: null
      }
    }
  },
  {
    id: "asking-around",
    title: "Asking Around",
    subtitle: "Lily之家 · 征求大家的意见",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we bring this up at the next class?", zh: "我们要不要在下堂课上提一下这事？", voice: "emma" },
        skill: "work",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "Let's bring it up gently, no pressure.", zh: "我们委婉地提一下吧，不给压力。", correct: true, xp: 10 },
          { text: "Let's bring it up and demand answers.", correct: false }
        ],
        hintOnWrong: "用短语动词（bring up）→ Let's bring it up gently, no pressure.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Some people who've dealt with hard pasts might not want cameras.", zh: "有些经历过艰难过去的人可能不想面对镜头。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "People who feel that way should be respected.", zh: "有这种感受的人应该被尊重。", correct: true, xp: 10 },
          { text: "People who feel that way should just film anyway.", correct: false }
        ],
        hintOnWrong: "用定语从句 → People who feel that way should be respected.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Nobody should feel pressured to take part.", zh: "谁都不该被逼着参与。", voice: "emma" },
        skill: "work",
        grammarTag: "passive",
        choices: [
          { text: "Nobody should be pressured, agreed.", zh: "谁都不该被逼，同意。", correct: true, xp: 10 },
          { text: "Everyone should be pressured a little.", correct: false }
        ],
        hintOnWrong: "用被动语态 → Nobody should be pressured, agreed.",
        next: null
      }
    }
  },
  {
    id: "volunteering-a-story",
    title: "Volunteering a Story",
    subtitle: "Lily之家 · 有人主动愿意讲述",
    avatar: "🧑‍🦱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'd like to be part of it, actually. I want people to know.", zh: "其实我想参与。我希望大家能知道。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We'd be honored to include your story.", zh: "能收录你的故事，我们感到很荣幸。", correct: true, xp: 10 },
          { text: "We'd rather not include your story.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We'd be honored to include your story.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It took me years to figure out how to talk about it.", zh: "我花了好几年才想明白该怎么讲这件事。" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "You've figured it out beautifully now.", zh: "你现在已经想得很清楚了。", correct: true, xp: 10 },
          { text: "You still haven't figured anything out.", correct: false }
        ],
        hintOnWrong: "用短语动词（figure out）→ You've figured it out beautifully now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If it helps even one person, it's worth telling.", zh: "如果能帮到哪怕一个人，讲出来就值得。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it helps one, it's already worth it.", zh: "如果能帮到一个人，就已经值得了。", correct: true, xp: 10 },
          { text: "If it helps one, that's still not enough.", correct: false }
        ],
        hintOnWrong: "用条件句 → If it helps one, it's already worth it.",
        next: null
      }
    }
  },
  {
    id: "filming-day-one",
    transition: { en: "The following week, cameras arrive at Lily's House.", zh: "第二周，摄影机来到了Lily之家。" },
    title: "Filming, Day One",
    subtitle: "Lily之家 · 拍摄第一天",
    avatar: "🎥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Just carry on like we're not here. Act natural.", zh: "就当我们不存在，照常进行就好。放自然点。" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "We'll try to carry on as usual.", zh: "我们会尽量照常进行的。", correct: true, xp: 10 },
          { text: "We'll try to stop everything instead.", correct: false }
        ],
        hintOnWrong: "用短语动词（carry on）→ We'll try to carry on as usual.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is the room where the first class happened.", zh: "这就是第一堂课发生的那间屋子。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "The room where it all began, still standing.", zh: "一切开始的那间屋子，依然屹立在这儿。", correct: true, xp: 10 },
          { text: "The room where it all began, torn down now.", correct: false }
        ],
        hintOnWrong: "用定语从句 → The room where it all began, still standing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone's a little nervous, but it's going well so far.", zh: "大家都有点紧张，但目前进展还不错。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Nervous, but going well — I'll take that.", zh: "紧张归紧张，但进展不错——我能接受。", correct: true, xp: 10 },
          { text: "Nervous, and going terribly, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Nervous, but going well — I'll take that.",
        next: null
      }
    }
  },
  {
    id: "interviewing-mrs-ho",
    title: "Interviewing Mrs. Ho",
    subtitle: "Lily之家 · 采访Ho太太",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you tell us about the house in the old photo?", zh: "您能跟我们说说那张老照片里的房子吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Of course, I can tell you everything.", zh: "当然，我可以把一切都告诉你们。", correct: true, xp: 10 },
          { text: "I can't talk about that on camera.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Of course, I can tell you everything.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That photo was taken the year we arrived here.", zh: "那张照片是我们刚到这儿那年拍的。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "It was taken at the very beginning, then.", zh: "那就是最初拍下的了。", correct: true, xp: 10 },
          { text: "It was taken much more recently, actually.", correct: false }
        ],
        hintOnWrong: "用被动语态 → It was taken at the very beginning, then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If I'd known then what I know now, I'd have worried less.", zh: "如果当年就知道现在知道的这些，我会少担心很多。" },
        skill: "community",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If I were you back then, I'd have felt the same.", zh: "如果当年我是您，我也会有一样的感受。", correct: true, xp: 10 },
          { text: "If I were you back then, I'd feel nothing.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If I were you back then, I'd have felt the same.",
        next: null
      }
    }
  },
  {
    id: "emma-on-camera",
    title: "Emma on Camera",
    subtitle: "书店里 · Emma接受采访",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What was it like to learn your grandmother's story?", zh: "了解到你祖母的故事时，是什么感觉？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "What was it like? Overwhelming, honestly.", zh: "什么感觉？说实话，是一种难以承受的震撼。", correct: true, xp: 10 },
          { text: "What was it like? I didn't feel anything.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ What was it like? Overwhelming, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I've had to sit with a lot of feelings I didn't expect.", zh: "我不得不去消化很多没预料到的情绪。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "You've handled it with so much grace.", zh: "你处理得非常从容优雅。", correct: true, xp: 10 },
          { text: "You've barely dealt with any of it.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → You've handled it with so much grace.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I look forward to whoever finds this film someday.", zh: "我很期待将来某一天有人看到这部影片。", voice: "emma" },
        skill: "work",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "I look forward to that too, truly.", zh: "我也真心期待那一天。", correct: true, xp: 10 },
          { text: "I don't look forward to that at all.", correct: false }
        ],
        hintOnWrong: "用短语动词（look forward to）→ I look forward to that too, truly.",
        next: null
      }
    }
  },
  {
    id: "sam-and-the-east-side",
    transition: { en: "The crew travels to the east side to film Sam's classroom.", zh: "摄制组去了东区拍摄Sam的教室。" },
    title: "Sam and the East Side",
    subtitle: "东区 · 拍摄Sam的课堂",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How do you deal with a full room of nervous new students?", zh: "面对满屋子紧张的新学员，你是怎么应对的？" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "I deal with it by staying calm myself.", zh: "我通过让自己保持冷静来应对。", correct: true, xp: 10 },
          { text: "I deal with it by ignoring them completely.", correct: false }
        ],
        hintOnWrong: "用短语动词（deal with）→ I deal with it by staying calm myself.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you ever run into your old students around town?", zh: "你会在城里偶遇以前的学员吗？" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "I run into them all the time, actually.", zh: "其实我经常遇到他们。", correct: true, xp: 10 },
          { text: "I never run into anyone I know.", correct: false }
        ],
        hintOnWrong: "用短语动词（run into）→ I run into them all the time, actually.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's the moment I remember why I started this.", zh: "那就是让我想起自己为什么开始做这件事的时刻。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Those moments are why any of this matters.", zh: "正是这些时刻让这一切都有了意义。", correct: true, xp: 10 },
          { text: "Those moments don't really change anything.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Those moments are why any of this matters.",
        next: null
      }
    }
  },
  {
    id: "the-rough-cut",
    transition: { en: "A month later, the filmmaker returns with a rough cut.", zh: "一个月后，导演带着初剪回来了。" },
    title: "The Rough Cut",
    subtitle: "Lily之家 · 看初剪版",
    avatar: "🎥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's not finished, but I wanted you to see where it's headed.", zh: "还没做完，但我想让大家先看看方向对不对。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We're excited to see where it's headed.", zh: "我们很期待看看它的方向。", correct: true, xp: 10 },
          { text: "We'd rather not see it unfinished.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We're excited to see where it's headed.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I called it 'Ten Letters, One Home.'", zh: "我给它取名叫《十封信，一个家》。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That title fits perfectly.", zh: "这个标题太贴切了。", correct: true, xp: 10 },
          { text: "That title doesn't fit at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ That title fits perfectly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Although it's only twelve minutes, it says everything.", zh: "尽管只有十二分钟，但它说尽了一切。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Although it's short, it says everything.", zh: "尽管很短，但说尽了一切。", correct: true, xp: 10 },
          { text: "Although it's short, it says nothing at all.", correct: false }
        ],
        hintOnWrong: "用让步连接词 → Although it's short, it says everything.",
        next: null
      }
    }
  },
  {
    id: "watching-together",
    title: "Watching Together",
    subtitle: "Lily之家 · 一起观看",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There's a shot of the old letters that made me cry.", zh: "有一个拍那些旧信的镜头，让我哭了。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "The shot that made you cry made me cry too.", zh: "让你哭的那个镜头也让我哭了。", correct: true, xp: 10 },
          { text: "The shot that made you cry felt boring to me.", correct: false }
        ],
        hintOnWrong: "用定语从句 → The shot that made you cry made me cry too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Watching it back, I finally see how far we've come.", zh: "回看这一切，我终于看清我们走了多远。", voice: "emma" },
        skill: "work",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've come further than I ever imagined.", zh: "我们走的路比我想象的要远得多。", correct: true, xp: 10 },
          { text: "We've barely moved at all, honestly.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've come further than I ever imagined.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Whoever sees this film will know they're not alone either.", zh: "无论谁看到这部片子，都会明白自己也不是孤单一人。", voice: "emma" },
        skill: "work",
        grammarTag: "relative-clause",
        choices: [
          { text: "Whoever sees it will feel less alone.", zh: "无论谁看到它，都会感觉不那么孤单。", correct: true, xp: 10 },
          { text: "Whoever sees it will feel even more alone.", correct: false }
        ],
        hintOnWrong: "用定语从句 → Whoever sees it will feel less alone.",
        next: null
      }
    }
  },
  {
    id: "sharing-it-wider",
    title: "Sharing It Wider",
    subtitle: "书店里 · 让更多人看到",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A film festival wants to show it. Should we send it in?", zh: "有个电影节想放映它。我们要不要投过去？", voice: "emma" },
        skill: "work",
        grammarTag: "conditional",
        choices: [
          { text: "If they want it, let's send it in.", zh: "如果他们想要，那就投过去吧。", correct: true, xp: 10 },
          { text: "If they want it, let's hold it back.", correct: false }
        ],
        hintOnWrong: "用条件句 → If they want it, let's send it in.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If it were shown wider, more houses like ours could start.", zh: "如果能被更多人看到，或许会有更多像我们这样的地方开起来。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If it were shown wider, that would be the real win.", zh: "如果能被更多人看到，那才是真正的胜利。", correct: true, xp: 10 },
          { text: "If it were shown wider, nothing would really change.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If it were shown wider, that would be the real win.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's send it in and see what happens next.", zh: "我们投过去吧，看看接下来会发生什么。", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's send it and see what unfolds.", zh: "投过去吧，看看接下来会怎样。", correct: true, xp: 10 },
          { text: "Let's not send anything at all.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's send it and see what unfolds.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "I'm glad you came across it.", zh: "很高兴你偶然读到了它。" },
  { en: "We'd love for you to look into it.", zh: "我们很乐意让您调查一下。" },
  { en: "If they agree, I'm comfortable with it.", zh: "如果他们同意，我没问题。" },
  { en: "Let's bring it up gently, no pressure.", zh: "我们委婉地提一下吧，不给压力。" },
  { en: "People who feel that way should be respected.", zh: "有这种感受的人应该被尊重。" },
  { en: "Nobody should be pressured, agreed.", zh: "谁都不该被逼，同意。" },
  { en: "We'd be honored to include your story.", zh: "能收录你的故事，我们感到很荣幸。" },
  { en: "You've figured it out beautifully now.", zh: "你现在已经想得很清楚了。" },
  { en: "If it helps one, it's already worth it.", zh: "如果能帮到一个人，就已经值得了。" },
  { en: "We'll try to carry on as usual.", zh: "我们会尽量照常进行的。" },
  { en: "The room where it all began, still standing.", zh: "一切开始的那间屋子，依然屹立在这儿。" },
  { en: "Nervous, but going well — I'll take that.", zh: "紧张归紧张，但进展不错——我能接受。" },
  { en: "Of course, I can tell you everything.", zh: "当然，我可以把一切都告诉你们。" },
  { en: "It was taken at the very beginning, then.", zh: "那就是最初拍下的了。" },
  { en: "If I were you back then, I'd have felt the same.", zh: "如果当年我是您，我也会有一样的感受。" },
  { en: "What was it like? Overwhelming, honestly.", zh: "什么感觉？说实话，是一种难以承受的震撼。" },
  { en: "You've handled it with so much grace.", zh: "你处理得非常从容优雅。" },
  { en: "I look forward to that too, truly.", zh: "我也真心期待那一天。" },
  { en: "I deal with it by staying calm myself.", zh: "我通过让自己保持冷静来应对。" },
  { en: "I run into them all the time, actually.", zh: "其实我经常遇到他们。" },
  { en: "Those moments are why any of this matters.", zh: "正是这些时刻让这一切都有了意义。" },
  { en: "We're excited to see where it's headed.", zh: "我们很期待看看它的方向。" },
  { en: "That title fits perfectly.", zh: "这个标题太贴切了。" },
  { en: "Although it's short, it says everything.", zh: "尽管很短，但说尽了一切。" },
  { en: "The shot that made you cry made me cry too.", zh: "让你哭的那个镜头也让我哭了。" },
  { en: "We've come further than I ever imagined.", zh: "我们走的路比我想象的要远得多。" },
  { en: "Whoever sees it will feel less alone.", zh: "无论谁看到它，都会感觉不那么孤单。" },
  { en: "If they want it, let's send it in.", zh: "如果他们想要，那就投过去吧。" },
  { en: "If it were shown wider, that would be the real win.", zh: "如果能被更多人看到，那才是真正的胜利。" },
  { en: "Let's send it and see what unfolds.", zh: "投过去吧，看看接下来会怎样。" }
);
