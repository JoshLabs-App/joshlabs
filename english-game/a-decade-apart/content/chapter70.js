// 内容数据层：第七十章，紧接第六十九章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人决定接待一位交换生，为期一个学期。全新词汇领域：
// 交换生项目/文化适应/家庭规矩/道别与联系。

GAME_CONTENT.scenes.push(
  {
    id: "considering-hosting",
    transition: { en: "A flyer about hosting an exchange student catches their eye.", zh: "一张关于接待交换生的传单引起了他们的注意。" },
    title: "Considering Hosting",
    subtitle: "家里 · 考虑接待",
    avatar: "🌍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever thought about hosting a student?", zh: "你有没有想过接待一位学生？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've actually thought about it before, honestly.", zh: "说实话，我以前其实想过这件事。", correct: true, xp: 10 },
          { text: "I've never once considered anything like that.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've actually thought about it before, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This program places students for a whole semester.", zh: "这个项目会安排学生待一整个学期。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's a real commitment, but a good one.", zh: "这确实是个不小的承诺，但也是件好事。", correct: true, xp: 10 },
          { text: "That's way too long, let's forget about this.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's a real commitment, but a good one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's fill out the interest form and see what happens.", zh: "我们填一下意向表，看看结果如何吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, there's no harm in asking.", zh: "好啊，问问也无妨。", correct: true, xp: 10 },
          { text: "Let's not, this seems too complicated to try.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, there's no harm in asking.",
        next: null
      }
    }
  },
  {
    id: "the-interview",
    transition: { en: "A program coordinator visits to interview the family.", zh: "一位项目协调员上门对这个家庭进行面谈。" },
    title: "The Interview",
    subtitle: "家里 · 项目面谈",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why do you want to host a student?", zh: "你们为什么想接待一位学生？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We want our child to grow up seeing different cultures.", zh: "我们希望孩子能从小接触不同的文化。", correct: true, xp: 10 },
          { text: "We don't actually want to host anyone, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答理由 → We want our child to grow up seeing different cultures.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have a spare bedroom available?", zh: "你们有多余的卧室可以用吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we have a small guest room ready.", zh: "有的，我们有一间准备好的小客房。", correct: true, xp: 10 },
          { text: "No, we don't have any extra space at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, we have a small guest room ready.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll match you with a student in the next few weeks.", zh: "我们会在接下来几周内给你们匹配一位学生。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Wonderful, we'll start getting the room ready.", zh: "太好了，我们开始准备房间吧。", correct: true, xp: 10 },
          { text: "Wonderful, though we'd rather wait indefinitely.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Wonderful, we'll start getting the room ready.",
        next: null
      }
    }
  },
  {
    id: "preparing-the-room",
    transition: { en: "They set up the guest room for their future student.", zh: "他们为未来的学生布置了客房。" },
    title: "Preparing the Room",
    subtitle: "家里 · 准备房间",
    avatar: "🛏️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we add a small desk for studying?", zh: "我们要不要加一张学习用的小书桌？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's make sure they have space to work.", zh: "好，我们确保他们有学习的空间。", correct: true, xp: 10 },
          { text: "No, students never actually need to study.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's make sure they have space to work.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This room feels warmer now than it did empty.", zh: "这间屋子现在比空着的时候感觉更温馨了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I hope they feel welcome here.", zh: "确实是，希望他们在这儿感觉受欢迎。", correct: true, xp: 10 },
          { text: "It doesn't, this room still feels cold to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I hope they feel welcome here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's leave a small welcome note on the pillow.", zh: "我们在枕头上留一张小小的欢迎卡吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it's a nice personal touch.", zh: "好啊，这是个不错的贴心细节。", correct: true, xp: 10 },
          { text: "Let's skip that, notes seem unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it's a nice personal touch.",
        next: null
      }
    }
  },
  {
    id: "meeting-the-student",
    transition: { en: "A nervous but excited student arrives from overseas.", zh: "一位既紧张又兴奋的学生从海外抵达了。" },
    title: "Meeting the Student",
    subtitle: "机场 · 见到学生",
    avatar: "🧳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You must be exhausted after such a long flight.", zh: "经过这么长的飞行，你一定很累了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I am, but I'm also really excited to be here.", zh: "确实很累，但我也非常兴奋能来到这里。", correct: true, xp: 10 },
          { text: "I'm not tired at all, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I am, but I'm also really excited to be here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have any questions before we head home?", zh: "回家之前你有什么问题吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Just one, how far is your house from here?", zh: "就一个，你们家离这儿有多远？", correct: true, xp: 10 },
          { text: "No, I already know absolutely everything.", correct: false }
        ],
        hintOnWrong: "肯定回答（补充问题） → Just one, how far is your house from here?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Welcome, we're really happy to have you with us.", zh: "欢迎你，我们很高兴你能和我们在一起。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you so much for having me.", zh: "非常感谢你们愿意接待我。", correct: true, xp: 10 },
          { text: "Thank you, though I'd rather stay in a hotel.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you so much for having me.",
        next: null
      }
    }
  },
  {
    id: "house-rules",
    transition: { en: "They gently walk through a few basic house rules.", zh: "他们温和地讲解了几条基本的家规。" },
    title: "House Rules",
    subtitle: "家里 · 讲解家规",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please let us know if you'll be home late.", zh: "如果你会晚回家，请提前告诉我们一声。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, I'll always send a message.", zh: "当然，我会一直发消息告知的。", correct: true, xp: 10 },
          { text: "Sorry, sending messages seems too complicated.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, I'll always send a message.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Feel free to treat the kitchen like it's your own.", zh: "厨房你随便用，就当是自己家的一样。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, that makes me feel really welcome.", zh: "谢谢，这让我感觉非常受欢迎。", correct: true, xp: 10 },
          { text: "Thank you, though I'd rather never cook here.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, that makes me feel really welcome.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If anything ever feels wrong, please just tell us.", zh: "如果有任何事让你觉得不对劲，请一定告诉我们。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that happens, I promise I'll speak up.", zh: "如果真发生了，我保证会说出来。", correct: true, xp: 10 },
          { text: "If that happens, I'll just keep it to myself.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that happens, I promise I'll speak up.",
        next: null
      }
    }
  },
  {
    id: "a-taste-of-home",
    transition: { en: "The student offers to cook a dish from their home country.", zh: "学生主动提出要做一道家乡菜。" },
    title: "A Taste of Home",
    subtitle: "厨房 · 家乡的味道",
    avatar: "🍜",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Would you like to try one of my favorite dishes?", zh: "你们想尝尝我最喜欢的一道菜吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We'd love that, we're excited to try it.", zh: "我们很乐意，很期待尝一尝。", correct: true, xp: 10 },
          { text: "We'd rather not, new food seems risky.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We'd love that, we're excited to try it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This dish is spicier than anything we usually cook.", zh: "这道菜比我们平时做的任何菜都要辣。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's exciting, we love trying new flavors.", zh: "太棒了，我们喜欢尝试新的口味。", correct: true, xp: 10 },
          { text: "That's concerning, spicy food scares us.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's exciting, we love trying new flavors.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is honestly better than any restaurant version I've had.", zh: "说实话，这比我吃过的任何餐厅版本都要好吃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That means so much, thank you for sharing this.", zh: "这句话意义重大，谢谢你分享这道菜。", correct: true, xp: 10 },
          { text: "That's odd, restaurant food is always better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That means so much, thank you for sharing this.",
        next: null
      }
    }
  },
  {
    id: "homesickness",
    transition: { en: "One quiet evening, the student seems a little homesick.", zh: "一个安静的夜晚，学生看起来有点想家。" },
    title: "Homesickness",
    subtitle: "家里 · 想家的时候",
    avatar: "😔",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you feeling okay tonight?", zh: "你今晚还好吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I'm okay, just missing my family a little.", zh: "我还好，就是有点想家人了。", correct: true, xp: 10 },
          { text: "I'm not okay, I want to leave right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I'm okay, just missing my family a little.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Missing home is more normal than you might think.", zh: "想家其实比你想的要更普遍。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's reassuring, thank you for understanding.", zh: "这让人安心，谢谢你的理解。", correct: true, xp: 10 },
          { text: "That's odd, I thought I was the only one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's reassuring, thank you for understanding.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's call your family together, if that would help.", zh: "如果有帮助的话，我们一起给你家人打个电话吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, that would mean so much to me.", zh: "好啊，这对我意义重大。", correct: true, xp: 10 },
          { text: "Let's not, I'd rather not talk to them right now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, that would mean so much to me.",
        next: null
      }
    }
  },
  {
    id: "settling-in",
    transition: { en: "Weeks later, the student feels like part of the family.", zh: "几周后，学生已经感觉像家里的一员了。" },
    title: "Settling In",
    subtitle: "家里 · 逐渐融入",
    avatar: "❤️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've started calling this place home, honestly.", zh: "说实话，我已经开始把这里当成家了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That means everything to us, honestly.", zh: "说实话，这句话对我们意义非凡。", correct: true, xp: 10 },
          { text: "That's strange, this isn't your real home.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That means everything to us, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Our little one has become more attached to you than I expected.", zh: "我们家小家伙对你的依恋比我预想的要深。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's so sweet, I've grown attached too.", zh: "这真是太温馨了，我也变得很依恋他们。", correct: true, xp: 10 },
          { text: "That's odd, kids never really bond with guests.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's so sweet, I've grown attached too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This house feels more complete with you in it.", zh: "有了你，这个家感觉更完整了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's such a kind thing to say, thank you.", zh: "你这样说真是太贴心了，谢谢你。", correct: true, xp: 10 },
          { text: "That's not true, nothing has changed here.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's such a kind thing to say, thank you.",
        next: null
      }
    }
  },
  {
    id: "the-goodbye",
    transition: { en: "At the end of the semester, it's time to say goodbye.", zh: "学期结束了，到了道别的时候。" },
    title: "The Goodbye",
    subtitle: "机场 · 告别",
    avatar: "😢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This goodbye is harder than I ever thought it would be.", zh: "这次道别比我曾经想象的要难得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, we've grown so close to you.", zh: "确实如此，我们和你已经变得非常亲近。", correct: true, xp: 10 },
          { text: "It really isn't, goodbyes have never mattered to us.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, we've grown so close to you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Thank you for treating me like your own family.", zh: "谢谢你们把我当成自己的家人。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, you'll always be part of ours.", zh: "当然了，你永远是我们家的一员。", correct: true, xp: 10 },
          { text: "Of course, though you were never really family.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, you'll always be part of ours.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll stay in touch no matter how far apart we are.", zh: "不管相隔多远，我们都会保持联系。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter the distance, we'll always be family.", zh: "不管距离多远，我们永远都是一家人。", correct: true, xp: 10 },
          { text: "No matter the distance, we'll probably lose touch.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter the distance, we'll always be family.",
        next: null
      }
    }
  },
  {
    id: "a-changed-family",
    transition: { en: "That night, they reflect on how the experience changed them all.", zh: "那天晚上，他们感慨这段经历如何改变了全家人。" },
    title: "A Changed Family",
    subtitle: "家里 · 改变了的一家人",
    avatar: "🌟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've learned more from this than I ever expected.", zh: "我们从这段经历中学到的比我预想的要多得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, this changed how we see the world.", zh: "确实如此，这改变了我们看待世界的方式。", correct: true, xp: 10 },
          { text: "We really haven't, nothing much changed for us.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, this changed how we see the world.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Our child will grow up remembering this whole experience.", zh: "我们的孩子长大后会一直记得这整段经历。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, and I hope it shapes who they become.", zh: "他们会的，我希望这能塑造他们成为的样子。", correct: true, xp: 10 },
          { text: "They won't, they're too young to remember any of it.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → They will, and I hope it shapes who they become.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter where life takes any of us, this connection will remain.", zh: "不管我们各自的人生走向哪里，这份牵绊都会留存下去。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter where life takes us, we're grateful for this.", zh: "不管人生走向哪里，我们都感激这段经历。", correct: true, xp: 10 },
          { text: "No matter where life takes us, this will be forgotten.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter where life takes us, we're grateful for this.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "exchange student", zh: "交换生", category: "community" },
  { en: "program", zh: "项目", category: "community" },
  { en: "places", zh: "安排（学生等）", category: "community" },
  { en: "semester", zh: "学期", category: "community" },
  { en: "commitment", zh: "承诺，投入", category: "community" },
  { en: "interest form", zh: "意向表", category: "community" },
  { en: "no harm in asking", zh: "问问也无妨", category: "community" },
  { en: "coordinator", zh: "协调员", category: "community" },
  { en: "different cultures", zh: "不同的文化", category: "community" },
  { en: "spare bedroom", zh: "多余的卧室", category: "community" },
  { en: "guest room", zh: "客房", category: "community" },
  { en: "matched", zh: "匹配了的", category: "community" },
  { en: "desk", zh: "书桌", category: "community" },
  { en: "welcome note", zh: "欢迎卡", category: "community" },
  { en: "pillow", zh: "枕头", category: "community" },
  { en: "personal touch", zh: "贴心细节", category: "community" },
  { en: "nervous but excited", zh: "既紧张又兴奋", category: "community" },
  { en: "long flight", zh: "长途飞行", category: "community" },
  { en: "having me", zh: "接待我", category: "community" },
  { en: "house rules", zh: "家规", category: "community" },
  { en: "home late", zh: "晚回家", category: "community" },
  { en: "feel free", zh: "随意，不要拘束", category: "community" },
  { en: "treat like your own", zh: "当作自己的一样", category: "community" },
  { en: "speak up", zh: "说出来", category: "community" },
  { en: "favorite dishes", zh: "最喜欢的菜", category: "community" },
  { en: "spicier", zh: "更辣的（spicy 比较级）", category: "community" },
  { en: "flavors", zh: "口味（复数）", category: "community" },
  { en: "restaurant version", zh: "餐厅版本", category: "community" },
  { en: "homesick", zh: "想家的", category: "community" },
  { en: "missing", zh: "想念", category: "community" },
  { en: "more normal", zh: "更普遍", category: "community" },
  { en: "understanding", zh: "理解", category: "community" },
  { en: "calling this place home", zh: "把这里当作家", category: "community" },
  { en: "attached", zh: "依恋的", category: "community" },
  { en: "bond", zh: "建立感情", category: "community" },
  { en: "complete", zh: "完整的", category: "community" },
  { en: "kind thing to say", zh: "贴心的话", category: "community" },
  { en: "grown so close", zh: "变得如此亲近", category: "community" },
  { en: "own family", zh: "自己的家人", category: "community" },
  { en: "stay in touch", zh: "保持联系", category: "community" },
  { en: "distance", zh: "距离", category: "community" },
  { en: "lose touch", zh: "失去联系", category: "community" },
  { en: "shapes", zh: "塑造", category: "community" },
  { en: "connection", zh: "牵绊，联系", category: "community" },
  { en: "remain", zh: "留存", category: "community" }
);
