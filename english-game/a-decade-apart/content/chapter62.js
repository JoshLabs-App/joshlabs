// 内容数据层：第六十二章，紧接第六十一章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人带孩子办了图书馆借书证，加入了每周的故事会。全新词汇领域：
// 图书馆办证/借还书规则/故事会/儿童绘本。

GAME_CONTENT.scenes.push(
  {
    id: "visiting-the-library",
    transition: { en: "They visit the local library to get a card for their child.", zh: "他们去当地图书馆给孩子办一张借书证。" },
    title: "Visiting the Library",
    subtitle: "图书馆 · 首次到访",
    avatar: "📚",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do children need their own library card here?", zh: "在这儿小朋友需要办自己的借书证吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, even babies can have their own card.", zh: "需要的，就算是婴儿也能有自己的卡。", correct: true, xp: 10 },
          { text: "No, children aren't allowed inside libraries.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, even babies can have their own card.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This children's section is bigger than I expected.", zh: "这个儿童区比我预想的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, and it looks so colorful too.", zh: "确实是，而且看起来也很多彩。", correct: true, xp: 10 },
          { text: "It isn't, this section looks tiny to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, and it looks so colorful too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's fill out the application at the front desk.", zh: "我们去前台填写申请表吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's head over there now.", zh: "好主意，我们现在就过去。", correct: true, xp: 10 },
          { text: "Let's skip that, we don't need a card.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's head over there now.",
        next: null
      }
    }
  },
  {
    id: "getting-the-library-card",
    transition: { en: "A librarian helps them set up a new library card.", zh: "一位图书管理员帮他们办理了新的借书证。" },
    title: "Getting the Library Card",
    subtitle: "图书馆 · 办理借书证",
    avatar: "🪪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you have proof of your home address?", zh: "您有家庭住址的证明吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, here's a bill with our address on it.", zh: "有的，这是一张有我们地址的账单。", correct: true, xp: 10 },
          { text: "No, addresses have never mattered to us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, here's a bill with our address on it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This card lets you borrow more books than the basic one.", zh: "这张卡能借的书比基础卡要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's great, let's get that one then.", zh: "太好了，那我们就办这种吧。", correct: true, xp: 10 },
          { text: "That doesn't matter, we'll never borrow much.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's great, let's get that one then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You'll get an email reminder before books are due.", zh: "书快到期时您会收到一封提醒邮件。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, that'll help us avoid late fees.", zh: "太好了，这样能帮我们避免滞纳金。", correct: true, xp: 10 },
          { text: "Perfect, though we never check our email.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Perfect, that'll help us avoid late fees.",
        next: null
      }
    }
  },
  {
    id: "choosing-books",
    transition: { en: "They browse the picture book shelves together.", zh: "他们一起浏览绘本书架。" },
    title: "Choosing Books",
    subtitle: "图书馆 · 挑选绘本",
    avatar: "🖼️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which book should we pick first?", zh: "我们应该先选哪本书？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "The one with the bright animal pictures.", zh: "那本有鲜艳动物图片的吧。", correct: true, xp: 10 },
          { text: "None of them, books are boring anyway.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → The one with the bright animal pictures.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This story is simpler than the one we read last week.", zh: "这个故事比我们上周读的那个更简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that might be easier for them to follow.", zh: "确实是，这样他们可能更容易理解。", correct: true, xp: 10 },
          { text: "It isn't, that story was actually much simpler.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that might be easier for them to follow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab five books for this week.", zh: "我们这周借五本书吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, variety keeps things interesting.", zh: "好，多样化能让读书更有趣。", correct: true, xp: 10 },
          { text: "Let's just grab one and call it a day.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, variety keeps things interesting.",
        next: null
      }
    }
  },
  {
    id: "discovering-story-time",
    transition: { en: "A poster on the wall mentions a weekly story time.", zh: "墙上一张海报提到了每周的故事会。" },
    title: "Discovering Story Time",
    subtitle: "图书馆 · 发现故事会",
    avatar: "📅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever heard of story time here?", zh: "你听说过这里的故事会吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never heard of it, but let's check it out.", zh: "我没听说过，不过我们去看看吧。", correct: true, xp: 10 },
          { text: "I've been going every week for years already.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never heard of it, but let's check it out.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This program looks more fun than I expected.", zh: "这个活动看起来比我预想的更好玩。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, songs and stories sound perfect for them.", zh: "确实是，儿歌和故事对他们来说正合适。", correct: true, xp: 10 },
          { text: "It doesn't, this looks pretty boring, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, songs and stories sound perfect for them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's come back for it this Saturday.", zh: "我们这周六再来参加吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'll mark it on the calendar.", zh: "好啊，我把它标在日历上。", correct: true, xp: 10 },
          { text: "Let's skip it, one visit was probably enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'll mark it on the calendar.",
        next: null
      }
    }
  },
  {
    id: "the-first-story-time",
    transition: { en: "They join a circle of families for their first story time.", zh: "他们加入了一圈家庭，参加了第一次故事会。" },
    title: "The First Story Time",
    subtitle: "图书馆 · 首次故事会",
    avatar: "🧸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This circle is bigger than I imagined it would be.", zh: "这个圈子比我想象的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, so many families come to this.", zh: "确实是，好多家庭都来参加这个活动。", correct: true, xp: 10 },
          { text: "It isn't, we're pretty much the only ones here.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, so many families come to this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are they clapping along with the song?", zh: "他们在跟着歌曲拍手吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They are, look at that little smile.", zh: "是的，看看那个小小的笑容。", correct: true, xp: 10 },
          { text: "They aren't, they seem completely uninterested.", correct: false }
        ],
        hintOnWrong: "肯定回答 → They are, look at that little smile.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's join in on the next song too.", zh: "我们也一起唱下一首歌吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this is honestly kind of fun.", zh: "好啊，说实话这真的挺好玩的。", correct: true, xp: 10 },
          { text: "Let's just watch quietly from the back instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this is honestly kind of fun.",
        next: null
      }
    }
  },
  {
    id: "making-a-new-friend",
    transition: { en: "After story time, they chat with another set of parents.", zh: "故事会结束后，他们和另一对父母聊了起来。" },
    title: "Making a New Friend",
    subtitle: "图书馆 · 认识新朋友",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How old is your little one?", zh: "你们家宝宝多大了？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They just turned one a few months ago.", zh: "他们几个月前刚满一岁。", correct: true, xp: 10 },
          { text: "Age isn't something we keep track of.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → They just turned one a few months ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They seem more social here than at home, honestly.", zh: "说实话，他们在这儿比在家更合群。", },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Same with ours, kids love being around others.", zh: "我们家也一样，孩子喜欢和其他人在一起。", correct: true, xp: 10 },
          { text: "That's odd, home should always feel more comfortable.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Same with ours, kids love being around others.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should set up a playdate sometime.", zh: "我们应该找时间安排一次一起玩的约会。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We'd love that, let's exchange numbers.", zh: "我们很乐意，我们交换一下电话号码吧。", correct: true, xp: 10 },
          { text: "That's unnecessary, they don't need friends yet.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We'd love that, let's exchange numbers.",
        next: null
      }
    }
  },
  {
    id: "returning-the-books",
    transition: { en: "A week later, they return their first batch of borrowed books.", zh: "一周后，他们归还了第一批借的书。" },
    title: "Returning the Books",
    subtitle: "图书馆 · 归还图书",
    avatar: "📖",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have we read every single one of these books?", zh: "这些书我们都读过了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've read all of them, some more than once.", zh: "都读过了，有些还读了不止一次。", correct: true, xp: 10 },
          { text: "We've never opened a single one of them.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've read all of them, some more than once.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This one was requested more often than the others.", zh: "这一本被要求读的次数比其他几本都多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, let's check that one out again.", zh: "确实是，我们再借一次这本吧。", correct: true, xp: 10 },
          { text: "It wasn't, we barely opened this one at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, let's check that one out again.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's pick five new ones before we leave.", zh: "走之前我们再选五本新的吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's browse the shelves again.", zh: "好主意，我们再逛逛书架吧。", correct: true, xp: 10 },
          { text: "Let's just leave without checking anything else out.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's browse the shelves again.",
        next: null
      }
    }
  },
  {
    id: "a-favorite-story",
    transition: { en: "One book quickly becomes an obsession at bedtime.", zh: "有一本书很快就成了睡前的心头好。" },
    title: "A Favorite Story",
    subtitle: "家里 · 最爱的故事",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe they want this same book every single night?", zh: "你能相信他们每晚都想读这同一本书吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I remember loving one book that much too.", zh: "我能理解，我记得我小时候也这么爱过一本书。", correct: true, xp: 10 },
          { text: "I can't, that seems completely unreasonable.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/共情 → I can, I remember loving one book that much too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I've read this page more times than I can count.", zh: "这一页我读的次数已经数不清了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Same here, I've practically memorized it.", zh: "我也是，我基本上都背下来了。", correct: true, xp: 10 },
          { text: "Same here, though I've only read it once.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Same here, I've practically memorized it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even though we've read this a hundred times, I still enjoy it.", zh: "尽管这本书我们已经读了上百遍，我依然乐在其中。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even though it's repetitive, I feel the same way.", zh: "尽管有点重复，我也有同样的感受。", correct: true, xp: 10 },
          { text: "Even though it's repetitive, I've completely lost patience.", correct: false }
        ],
        hintOnWrong: "让步句 → Even though it's repetitive, I feel the same way.",
        next: null
      }
    }
  },
  {
    id: "a-lost-library-book",
    transition: { en: "They discover a library book has gone missing at the worst time.", zh: "他们发现一本图书馆的书在最不巧的时候不见了。" },
    title: "A Lost Library Book",
    subtitle: "家里 · 图书失踪",
    avatar: "😅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you seen that blue book anywhere?", zh: "你看到那本蓝色的书了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I haven't seen it since last week, actually.", zh: "其实我从上周开始就没见过它了。", correct: true, xp: 10 },
          { text: "I've had it in my hands this whole time.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I haven't seen it since last week, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This search is taking longer than I expected.", zh: "这次找书花的时间比我预想的要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's check under the couch cushions.", zh: "确实是，我们查查沙发垫子底下吧。", correct: true, xp: 10 },
          { text: "It isn't, let's just give up looking already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's check under the couch cushions.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we can't find it, we'll just pay the replacement fee.", zh: "如果实在找不到，我们就付赔偿费吧。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it comes to that, we'll handle it responsibly.", zh: "如果真到那一步，我们会负责任地处理。", correct: true, xp: 10 },
          { text: "If it comes to that, let's just avoid the library forever.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it comes to that, we'll handle it responsibly.",
        next: null
      }
    }
  },
  {
    id: "a-love-for-books",
    transition: { en: "Months later, they notice how much their child now loves books.", zh: "几个月后，他们注意到自己的孩子已经变得多么喜爱读书。" },
    title: "A Love for Books",
    subtitle: "家里 · 对书的热爱",
    avatar: "❤️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They've started bringing books to us on their own now.", zh: "他们现在已经开始自己主动把书拿给我们了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They really have, that melts my heart every time.", zh: "确实是，这每次都让我心都化了。", correct: true, xp: 10 },
          { text: "They really haven't, they've never touched a book.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They really have, that melts my heart every time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This little habit means more to me than I expected.", zh: "这个小小的习惯对我来说比我预想的意义更大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, this feels like such a gift.", zh: "确实如此，这感觉像是一份珍贵的礼物。", correct: true, xp: 10 },
          { text: "It doesn't, reading habits never really matter.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, this feels like such a gift.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what they grow up to love, I hope books stay part of it.", zh: "不管他们长大后喜欢什么，我希望书籍都能一直是其中的一部分。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, I hope that too, always.", zh: "不管怎样，我也一直这样希望着。", correct: true, xp: 10 },
          { text: "No matter what, books probably won't matter later.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, I hope that too, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "library card", zh: "借书证", category: "community" },
  { en: "children's section", zh: "儿童区", category: "community" },
  { en: "front desk", zh: "前台", category: "community" },
  { en: "librarian", zh: "图书管理员", category: "community" },
  { en: "proof of address", zh: "地址证明", category: "community" },
  { en: "bill", zh: "账单", category: "community" },
  { en: "borrow", zh: "借", category: "community" },
  { en: "email reminder", zh: "邮件提醒", category: "community" },
  { en: "due", zh: "到期的", category: "community" },
  { en: "late fees", zh: "滞纳金", category: "community" },
  { en: "picture book", zh: "绘本", category: "community" },
  { en: "shelves", zh: "书架（复数）", category: "community" },
  { en: "animal pictures", zh: "动物图片", category: "community" },
  { en: "follow", zh: "跟上，理解", category: "community" },
  { en: "variety", zh: "多样性", category: "community" },
  { en: "poster", zh: "海报", category: "community" },
  { en: "story time", zh: "故事会", category: "community" },
  { en: "check it out", zh: "去看看", category: "community" },
  { en: "program", zh: "活动，项目", category: "community" },
  { en: "songs", zh: "儿歌（复数）", category: "community" },
  { en: "mark it", zh: "标记它", category: "community" },
  { en: "calendar", zh: "日历", category: "community" },
  { en: "circle", zh: "圈子", category: "community" },
  { en: "clapping", zh: "拍手", category: "community" },
  { en: "join in", zh: "一起参与", category: "community" },
  { en: "little one", zh: "小宝贝", category: "community" },
  { en: "turned one", zh: "满一岁", category: "community" },
  { en: "playdate", zh: "一起玩的约会", category: "community" },
  { en: "exchange numbers", zh: "交换电话号码", category: "community" },
  { en: "borrowed", zh: "借来的", category: "community" },
  { en: "requested", zh: "被要求的", category: "community" },
  { en: "check out", zh: "借（图书）", category: "community" },
  { en: "obsession", zh: "痴迷的事物", category: "community" },
  { en: "unreasonable", zh: "不合理的", category: "community" },
  { en: "memorized", zh: "记住了的", category: "community" },
  { en: "repetitive", zh: "重复的", category: "community" },
  { en: "lost patience", zh: "失去耐心", category: "community" },
  { en: "search", zh: "寻找", category: "community" },
  { en: "couch cushions", zh: "沙发垫子", category: "community" },
  { en: "replacement fee", zh: "赔偿费", category: "community" },
  { en: "responsibly", zh: "负责任地", category: "community" },
  { en: "on their own", zh: "自己主动地", category: "community" },
  { en: "melts my heart", zh: "让我心都化了", category: "community" },
  { en: "gift", zh: "礼物", category: "community" }
);
