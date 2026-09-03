// 内容数据层：第三十七章，紧接第三十六章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter36.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：怀孕晚期，两人参加一位老朋友的婚礼。全新词汇领域：请柬回复/伴娘伴郎/
// 婚礼仪式/敬酒致辞/礼物登记。

GAME_CONTENT.scenes.push(
  {
    id: "the-invitation-arrives",
    transition: { en: "A wedding invitation from an old friend arrives in the mail.", zh: "一位老朋友的婚礼请柬寄到了。" },
    title: "The Invitation Arrives",
    subtitle: "家里 · 收到请柬",
    avatar: "💌",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we RSVP for both of us, even this pregnant?", zh: "都这么大肚子了，我们还要回复两人都参加吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, I really don't want to miss this.", zh: "是的，我真的不想错过这场婚礼。", correct: true, xp: 10 },
          { text: "No, weddings have never mattered to us.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, I really don't want to miss this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The wedding is only three weeks before your due date.", zh: "婚礼距离你的预产期只有三周。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's cutting it close, but it should be fine.", zh: "这时间是有点紧，但应该没问题。", correct: true, xp: 10 },
          { text: "That's way too risky, we should skip it.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's cutting it close, but it should be fine.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll check with the doctor before we confirm.", zh: "我们确认之前先问问医生。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Good idea, better safe than sorry.", zh: "好主意，安全第一。", correct: true, xp: 10 },
          { text: "Bad idea, the doctor never needs to know.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Good idea, better safe than sorry.",
        next: null
      }
    }
  },
  {
    id: "choosing-a-gift",
    transition: { en: "They browse the couple's online gift registry.", zh: "他们浏览新人的线上礼物登记清单。" },
    title: "Choosing a Gift",
    subtitle: "家里 · 挑选礼物",
    avatar: "🎁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What's still left on their registry?", zh: "他们的登记清单上还剩什么没被认领？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "A few kitchen items and some bedding.", zh: "还有一些厨房用品和床上用品。", correct: true, xp: 10 },
          { text: "Nothing at all, everything's already taken.", correct: false }
        ],
        hintOnWrong: "wh-问题回答清单 → A few kitchen items and some bedding.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This set is nicer than the one we almost bought.", zh: "这一套比我们差点买的那套更漂亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's go with this one instead.", zh: "确实是，那我们就选这一套吧。", correct: true, xp: 10 },
          { text: "It isn't, let's stick with the other one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's go with this one instead.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Should we add a card with a personal note?", zh: "我们要不要附一张写了寄语的卡片？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, a personal note would mean a lot.", zh: "好，一句寄语会很有意义。", correct: true, xp: 10 },
          { text: "No, cards are a complete waste of paper.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, a personal note would mean a lot.",
        next: null
      }
    }
  },
  {
    id: "finding-something-to-wear",
    transition: { en: "Finding an outfit that fits her growing belly proves tricky.", zh: "找一件能穿得下渐渐隆起的肚子的衣服有点棘手。" },
    title: "Finding Something to Wear",
    subtitle: "商场 · 挑选礼服",
    avatar: "👗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you found anything that actually fits yet?", zh: "你有找到真正合身的衣服了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've found one dress that fits perfectly.", zh: "我找到了一件很合身的裙子。", correct: true, xp: 10 },
          { text: "I've never once tried anything on today.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've found one dress that fits perfectly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This color suits you more than the other options.", zh: "这个颜色比其他选择更适合你。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "You're right, I'll take this one.", zh: "你说得对，我就要这件了。", correct: true, xp: 10 },
          { text: "You're wrong, the other colors suit me better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → You're right, I'll take this one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You look absolutely beautiful in that.", zh: "你穿这件真的美极了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, that means a lot right now.", zh: "谢谢，这句话现在对我意义重大。", correct: true, xp: 10 },
          { text: "Thank you, though I don't believe you at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, that means a lot right now.",
        next: null
      }
    }
  },
  {
    id: "the-ceremony",
    transition: { en: "They take their seats as the wedding ceremony begins.", zh: "婚礼仪式开始，他们落座就位。" },
    title: "The Ceremony",
    subtitle: "婚礼现场 · 仪式",
    avatar: "💒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Doesn't the bride look absolutely stunning?", zh: "新娘是不是美得让人惊艳？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "She really does, I'm getting a little emotional.", zh: "确实是，我都有点感动了。", correct: true, xp: 10 },
          { text: "She doesn't, this dress looks quite plain.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → She really does, I'm getting a little emotional.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How long have those two been together?", zh: "他们俩在一起多久了？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They've been together for almost eight years.", zh: "他们在一起差不多八年了。", correct: true, xp: 10 },
          { text: "They've never actually been together at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They've been together for almost eight years.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Weddings always remind me of our own, don't they?", zh: "婚礼总是让我想起我们自己的婚礼，是不是？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They do, every single time.", zh: "确实是，每次都会想起。", correct: true, xp: 10 },
          { text: "They don't, our wedding feels like a blur.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They do, every single time.",
        next: null
      }
    }
  },
  {
    id: "the-reception",
    transition: { en: "After the ceremony, guests move to the reception hall.", zh: "仪式结束后，宾客们移步到宴会厅。" },
    title: "The Reception",
    subtitle: "宴会厅 · 婚宴",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which table are we assigned to?", zh: "我们被安排在哪一桌？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We're at table seven, near the dance floor.", zh: "我们在七号桌，靠近舞池。", correct: true, xp: 10 },
          { text: "We're not assigned to any table at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答信息 → We're at table seven, near the dance floor.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you comfortable, or should we get you a softer chair?", zh: "你坐着舒服吗，还是要换个更软的椅子？" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "A softer chair would actually be great, thanks.", zh: "更软一点的椅子确实会更好，谢谢。", correct: true, xp: 10 },
          { text: "A softer chair sounds completely unnecessary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → A softer chair would actually be great, thanks.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "The best man is about to give his speech.", zh: "伴郎马上要致辞了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Let's listen closely, I love a good speech.", zh: "我们仔细听吧，我很喜欢听精彩的致辞。", correct: true, xp: 10 },
          { text: "Let's ignore it, speeches are always boring.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Let's listen closely, I love a good speech.",
        next: null
      }
    }
  },
  {
    id: "the-toast",
    transition: { en: "The best man raises his glass for the toast.", zh: "伴郎举起酒杯开始祝酒。" },
    title: "The Toast",
    subtitle: "宴会厅 · 祝酒致辞",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I've known the groom since we were kids.", zh: "我从小就认识新郎了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's such a sweet way to start a toast.", zh: "用这种方式开场祝酒真是太温馨了。", correct: true, xp: 10 },
          { text: "That's odd, why mention childhood at a wedding?", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That's such a sweet way to start a toast.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If you'd told me back then he'd marry his best friend, I wouldn't have believed you.", zh: "如果那时候有人告诉我他会娶自己最好的朋友，我肯定不会相信。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "That line got a laugh from the whole room.", zh: "那句话逗笑了全场的人。", correct: true, xp: 10 },
          { text: "That line felt completely inappropriate for a wedding.", correct: false }
        ],
        hintOnWrong: "回应条件句 → That line got a laugh from the whole room.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "To the happy couple, may your love only grow.", zh: "敬这对新人，愿你们的爱与日俱增。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To the happy couple, cheers to that.", zh: "敬这对新人，为此干杯。", correct: true, xp: 10 },
          { text: "To the happy couple, though the speech ran long.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒 → To the happy couple, cheers to that.",
        next: null
      }
    }
  },
  {
    id: "catching-up-with-old-friends",
    transition: { en: "Between courses, they catch up with friends they haven't seen in years.", zh: "上菜间隙，他们和多年未见的朋友叙旧。" },
    title: "Catching Up with Old Friends",
    subtitle: "宴会厅 · 老友叙旧",
    avatar: "👥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I can't believe how long it's been since we last talked!", zh: "真不敢相信我们已经这么久没聊了！" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I know, it's been far too long.", zh: "是啊，实在是太久了。", correct: true, xp: 10 },
          { text: "I know, we just talked yesterday, actually.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → I know, it's been far too long.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You look even more radiant than I remember.", zh: "你比我记忆中的样子还要神采奕奕。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Aw, thank you, pregnancy agrees with me I guess.", zh: "哎呀，谢谢，看来我挺适合怀孕的。", correct: true, xp: 10 },
          { text: "Aw, thank you, though I feel exhausted every day.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Aw, thank you, pregnancy agrees with me I guess.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should get all our old friends together again soon.", zh: "我们应该尽快把老朋友们再聚一次。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Absolutely, let's plan something after the baby comes.", zh: "当然，我们等宝宝出生后就安排一次吧。", correct: true, xp: 10 },
          { text: "Absolutely not, reunions are always awkward.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Absolutely, let's plan something after the baby comes.",
        next: null
      }
    }
  },
  {
    id: "the-first-dance",
    transition: { en: "The newlyweds step onto the floor for their first dance.", zh: "新人走上舞池跳起了第一支舞。" },
    title: "The First Dance",
    subtitle: "宴会厅 · 第一支舞",
    avatar: "💃",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you remember our first dance at our own wedding?", zh: "你还记得我们自己婚礼上的第一支舞吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I remember every single second of it.", zh: "我记得每一秒钟。", correct: true, xp: 10 },
          { text: "I don't remember anything about that day.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I remember every single second of it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This song is even more beautiful live than on the radio.", zh: "这首歌现场听起来比在广播里更好听。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, live music just hits different.", zh: "确实如此，现场音乐就是不一样。", correct: true, xp: 10 },
          { text: "It really isn't, the radio version sounds better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, live music just hits different.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I wish I could dance with you right now.", zh: "我真希望现在能和你跳一支舞。" },
        skill: "community",
        grammarTag: "subjunctive",
        choices: [
          { text: "If I weren't this pregnant, I'd be right there.", zh: "如果我没这么大肚子，我早就上去了。", correct: true, xp: 10 },
          { text: "If I weren't this pregnant, I still wouldn't dance.", correct: false }
        ],
        hintOnWrong: "虚拟语气 → If I weren't this pregnant, I'd be right there.",
        next: null
      }
    }
  },
  {
    id: "heading-home-early",
    transition: { en: "As the night goes on, they decide to leave a little early.", zh: "夜色渐深，他们决定提前一点离开。" },
    title: "Heading Home Early",
    subtitle: "宴会厅 · 提前离场",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you getting tired? We can leave whenever you want.", zh: "你累了吗？我们随时可以走。" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "A little, but tonight was worth every minute.", zh: "有点累，但今晚的每一分钟都值得。", correct: true, xp: 10 },
          { text: "No, I could stay here all night long.", correct: false }
        ],
        hintOnWrong: "肯定回答 → A little, but tonight was worth every minute.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should say our goodbyes before we slip out.", zh: "我们该在悄悄离场前先道个别。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, let's find the couple first.", zh: "好主意，我们先找到新人。", correct: true, xp: 10 },
          { text: "Bad idea, let's just sneak out unnoticed.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, let's find the couple first.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you both for celebrating with us tonight.", zh: "谢谢你们俩今晚来陪我们庆祝。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you for having us, congratulations again.", zh: "谢谢你们邀请我们，再次恭喜。", correct: true, xp: 10 },
          { text: "Thank you, though we're honestly ready to leave.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you for having us, congratulations again.",
        next: null
      }
    }
  },
  {
    id: "reflecting-in-the-car",
    transition: { en: "On the drive home, they quietly reflect on the evening.", zh: "回家的路上，他们静静回味这一晚。" },
    title: "Reflecting in the Car",
    subtitle: "车上 · 归途回味",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Tonight made me think a lot about our own marriage.", zh: "今晚让我想了很多关于我们自己婚姻的事。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, and I'm grateful for every year of it.", zh: "我也是，我很感激这些年的每一年。", correct: true, xp: 10 },
          { text: "Me too, I mostly thought about the food.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, and I'm grateful for every year of it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "In a few weeks, we'll be starting our own new chapter.", zh: "再过几周，我们就要开启自己的新篇章了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, and I couldn't be more ready.", zh: "确实是，我已经准备好了。", correct: true, xp: 10 },
          { text: "We won't, nothing about our life will change.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → We will, and I couldn't be more ready.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even after everything, I'd choose this life with you again.", zh: "即使经历了这一切，我还是会再次选择和你一起过这样的生活。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even after everything, I'd choose you every time.", zh: "即使经历了这一切，我每次都会选择你。", correct: true, xp: 10 },
          { text: "Even after everything, I'd choose something simpler.", correct: false }
        ],
        hintOnWrong: "让步句 → Even after everything, I'd choose you every time.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "invitation", zh: "请柬，邀请函", category: "community" },
  { en: "RSVP", zh: "回复出席与否", category: "community" },
  { en: "pregnant", zh: "怀孕的", category: "community" },
  { en: "due date", zh: "预产期", category: "community" },
  { en: "cutting it close", zh: "时间很紧", category: "community" },
  { en: "confirm", zh: "确认", category: "community" },
  { en: "better safe than sorry", zh: "安全第一", category: "community" },
  { en: "registry", zh: "礼物登记清单", category: "community" },
  { en: "kitchen items", zh: "厨房用品", category: "community" },
  { en: "bedding", zh: "床上用品", category: "community" },
  { en: "set", zh: "一套", category: "community" },
  { en: "personal note", zh: "个人寄语", category: "community" },
  { en: "outfit", zh: "整套服装", category: "community" },
  { en: "belly", zh: "肚子", category: "community" },
  { en: "tricky", zh: "棘手的", category: "community" },
  { en: "fits", zh: "合身", category: "community" },
  { en: "suits", zh: "适合", category: "community" },
  { en: "options", zh: "选择", category: "community" },
  { en: "beautiful", zh: "美丽的", category: "community" },
  { en: "ceremony", zh: "仪式", category: "community" },
  { en: "bride", zh: "新娘", category: "community" },
  { en: "stunning", zh: "惊艳的", category: "community" },
  { en: "emotional", zh: "感动的", category: "community" },
  { en: "plain", zh: "朴素的", category: "community" },
  { en: "together", zh: "在一起", category: "community" },
  { en: "blur", zh: "模糊的记忆", category: "community" },
  { en: "reception", zh: "婚宴，招待会", category: "community" },
  { en: "assigned", zh: "被分配的", category: "community" },
  { en: "dance floor", zh: "舞池", category: "community" },
  { en: "softer", zh: "更软的（soft 比较级）", category: "community" },
  { en: "best man", zh: "伴郎", category: "community" },
  { en: "speech", zh: "致辞", category: "community" },
  { en: "groom", zh: "新郎", category: "community" },
  { en: "childhood", zh: "童年", category: "community" },
  { en: "line", zh: "台词，一句话", category: "community" },
  { en: "laugh", zh: "笑声", category: "community" },
  { en: "inappropriate", zh: "不合适的", category: "community" },
  { en: "happy couple", zh: "幸福的新人", category: "community" },
  { en: "catch up", zh: "叙旧", category: "community" },
  { en: "radiant", zh: "神采奕奕的", category: "community" },
  { en: "agrees with me", zh: "对我有益，适合我", category: "community" },
  { en: "reunions", zh: "重聚", category: "community" },
  { en: "awkward", zh: "尴尬的", category: "community" },
  { en: "newlyweds", zh: "新婚夫妇", category: "community" },
  { en: "first dance", zh: "第一支舞", category: "community" },
  { en: "live", zh: "现场的", category: "community" },
  { en: "hits different", zh: "感觉就是不一样（口语）", category: "community" },
  { en: "slip out", zh: "悄悄离开", category: "community" },
  { en: "sneak out", zh: "偷偷溜走", category: "community" },
  { en: "unnoticed", zh: "不被注意到", category: "community" },
  { en: "celebrating", zh: "庆祝", category: "community" },
  { en: "marriage", zh: "婚姻", category: "community" },
  { en: "grateful", zh: "感激的", category: "community" },
  { en: "new chapter", zh: "新篇章", category: "community" }
);
