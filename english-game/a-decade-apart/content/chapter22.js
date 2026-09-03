// 内容数据层：第二十二章，紧接第二十一章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter21.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：婚礼当天。全新词汇领域：司仪/花束/誓词/敬酒/初舞等婚礼仪式词汇。

GAME_CONTENT.scenes.push(
  {
    id: "wedding-morning",
    transition: { en: "The morning of the wedding, everyone rushes to help.", zh: "婚礼当天早上，大家都赶来帮忙。" },
    title: "Wedding Morning",
    subtitle: "书店里 · 婚礼当天早晨",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "The florist just dropped off the bouquets.", zh: "花商刚把花束送到了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "The bouquets arrived just in time.", zh: "花束正好及时送到了。", correct: true, xp: 10 },
          { text: "The bouquets never arrived at all.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → The bouquets arrived just in time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you help set up the chairs before the guests arrive?", zh: "客人到之前，你能帮忙摆好椅子吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Sure, I'll have them set up in minutes.", zh: "没问题，我几分钟就能摆好。", correct: true, xp: 10 },
          { text: "I can't move chairs in this suit.", correct: false }
        ],
        hintOnWrong: "用 can 回应 → Sure, I'll have them set up in minutes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Nervous, or just excited?", zh: "是紧张，还是纯粹兴奋？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Both, in about equal measure.", zh: "两者都有，差不多各占一半。", correct: true, xp: 10 },
          { text: "Neither, I feel completely numb.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Both, in about equal measure.",
        next: null
      }
    }
  },
  {
    id: "getting-dressed",
    title: "Getting Dressed",
    subtitle: "后台 · 换上礼服",
    avatar: "👴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This tie has been in our family for three generations.", zh: "这条领带已经在我们家传了三代人了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Three generations? I'm honored to wear it.", zh: "三代人？我很荣幸能戴上它。", correct: true, xp: 10 },
          { text: "Three generations sounds like too much pressure.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → Three generations? I'm honored to wear it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "You look sharp. She's a lucky woman.", zh: "你看起来真精神。她真是个幸运的女人。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I'm the lucky one, honestly.", zh: "说实话，我才是幸运的那个。", correct: true, xp: 10 },
          { text: "Luck has nothing to do with it.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I'm the lucky one, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's almost time. Are you ready to walk out there?", zh: "快到时间了。你准备好走出去了吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I've never been more ready for anything.", zh: "我从没为任何事这么准备好过。", correct: true, xp: 10 },
          { text: "I don't think I'll ever be ready.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ I've never been more ready for anything.",
        next: null
      }
    }
  },
  {
    id: "the-ceremony-begins",
    transition: { en: "The small garden behind the bookstore fills with familiar faces.", zh: "书店后面的小花园里挤满了熟悉的面孔。" },
    title: "The Ceremony Begins",
    subtitle: "书店后花园 · 仪式开始",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We are gathered here today to witness this union.", zh: "我们今天齐聚在这里，见证这段结合。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "We're honored to be witnesses to it.", zh: "能作为见证人，我们感到很荣幸。", correct: true, xp: 10 },
          { text: "We'd rather not be witnesses to this.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We're honored to be witnesses to it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The officiant asked everyone to please take their seats.", zh: "司仪请大家就座。" },
        skill: "community",
        grammarTag: "reported-speech",
        choices: [
          { text: "She asked us to sit, so let's sit.", zh: "她请我们坐下，那我们就坐吧。", correct: true, xp: 10 },
          { text: "She asked us to sit, but I'll stand.", correct: false }
        ],
        hintOnWrong: "用间接引语回应 → She asked us to sit, so let's sit.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Here comes the bride.", zh: "新娘来了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "There she is. She's breathtaking.", zh: "她来了。美得令人屏息。", correct: true, xp: 10 },
          { text: "There she is. Right on schedule.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ There she is. She's breathtaking.",
        next: null
      }
    }
  },
  {
    id: "exchanging-vows",
    title: "Exchanging Vows",
    subtitle: "花园 · 交换誓词",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I promise to choose you, again and again, every single day.", zh: "我承诺，我会一次又一次地选择你，每一天都是。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm choosing you too, for the rest of my life.", zh: "我也在选择你，用我余生的每一天。", correct: true, xp: 10 },
          { text: "I'm choosing this suit, mostly.", correct: false }
        ],
        hintOnWrong: "用现在进行时 → I'm choosing you too, for the rest of my life.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If ten years couldn't keep us apart, nothing ever will.", zh: "如果十年都没能让我们分开，那以后也不会有什么能做到了。", voice: "emma" },
        skill: "work",
        grammarTag: "conditional-advanced",
        choices: [
          { text: "If a decade couldn't stop us, nothing can.", zh: "如果十年都拦不住我们，那什么都拦不住了。", correct: true, xp: 10 },
          { text: "If a decade couldn't stop us, something eventually will.", correct: false }
        ],
        hintOnWrong: "用更复杂的条件句 → If a decade couldn't stop us, nothing can.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By the power vested in me, I now pronounce you married.", zh: "以我被赋予的权力，我现在宣布你们结为夫妻。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "We're officially married. I can hardly believe it.", zh: "我们正式结婚了。我简直不敢相信。", correct: true, xp: 10 },
          { text: "We're officially married, and it feels ordinary.", correct: false }
        ],
        hintOnWrong: "简单感叹（陈述句）→ We're officially married. I can hardly believe it.",
        next: null
      }
    }
  },
  {
    id: "the-first-kiss",
    title: "The First Kiss",
    subtitle: "花园 · 第一个吻",
    avatar: "👵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You may now kiss the bride.", zh: "你现在可以亲吻新娘了。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I've been waiting all day for this.", zh: "我等这一刻等了一整天了。", correct: true, xp: 10 },
          { text: "I'd rather wait a little longer, actually.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ I've been waiting all day for this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Everyone cheered so loudly the whole street could hear it.", zh: "大家欢呼得那么响，整条街都能听到。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "The whole street heard it, and I loved that.", zh: "整条街都听到了，我很喜欢这样。", correct: true, xp: 10 },
          { text: "The whole street heard it, which embarrassed me.", correct: false }
        ],
        hintOnWrong: "用过去时回应 → The whole street heard it, and I loved that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Congratulations, Mr. and Mrs.! Let's head to the reception.", zh: "恭喜二位！我们去婚宴现场吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's go celebrate properly now.", zh: "我们现在好好庆祝一下吧。", correct: true, xp: 10 },
          { text: "Let's skip the reception entirely.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's go celebrate properly now.",
        next: null
      }
    }
  },
  {
    id: "the-toast",
    transition: { en: "Inside, tables are set with candles and name cards.", zh: "屋里，桌子上摆着蜡烛和座位卡。" },
    title: "The Toast",
    subtitle: "婚宴 · 敬酒致辞",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "As the best man, I've prepared a few words.", zh: "作为伴郎，我准备了几句话。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've all been waiting to hear them.", zh: "我们都一直等着听呢。", correct: true, xp: 10 },
          { text: "We've all been dreading this moment.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → We've all been waiting to hear them.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "To the couple who taught us all what waiting is worth.", zh: "敬这对教会我们等待的意义的新人。" },
        skill: "community",
        grammarTag: "relative-clause",
        choices: [
          { text: "To the couple who taught us so much, cheers.", zh: "敬这对教会我们良多的新人，干杯。", correct: true, xp: 10 },
          { text: "To the couple who taught us nothing, cheers.", correct: false }
        ],
        hintOnWrong: "用定语从句 → To the couple who taught us so much, cheers.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Raise your glasses, everyone. To love that waited ten years!", zh: "大家举杯吧。敬等待了十年的爱情！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To love that waited, and was worth it.", zh: "敬这份等待的爱，值得！", correct: true, xp: 10 },
          { text: "To love that waited far too long.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ To love that waited, and was worth it.",
        next: null
      }
    }
  },
  {
    id: "the-first-dance",
    title: "The First Dance",
    subtitle: "婚宴 · 初舞",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "May I have this dance?", zh: "可以请你跳这支舞吗？", voice: "emma" },
        skill: "work",
        grammarTag: "can-modal",
        choices: [
          { text: "You may have every dance tonight.", zh: "今晚每一支舞都归你了。", correct: true, xp: 10 },
          { text: "I'd rather sit this one out.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ You may have every dance tonight.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'm terrible at dancing, just so you know.", zh: "我跳舞很烂，先跟你说一声。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "So am I. We'll be terrible together.", zh: "我也是。我们就一起烂到底吧。", correct: true, xp: 10 },
          { text: "I'm actually a professional dancer.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ So am I. We'll be terrible together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is exactly how I imagined this moment.", zh: "这正是我想象中的这一刻。", voice: "emma" },
        skill: "work",
        grammarTag: "past-simple",
        choices: [
          { text: "It's even better than I imagined.", zh: "比我想象的还要好。", correct: true, xp: 10 },
          { text: "It's nothing like I imagined, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ It's even better than I imagined.",
        next: null
      }
    }
  },
  {
    id: "the-guest-book",
    title: "The Guest Book",
    subtitle: "婚宴 · 签到本上的祝福",
    avatar: "🧓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I wrote something in your guest book. It's a bit long.", zh: "我在你们的签到本上写了些话。有点长。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Long is perfect. I'll read every word.", zh: "长才好呢。每个字我都会读。", correct: true, xp: 10 },
          { text: "Long is unnecessary, honestly.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Long is perfect. I'll read every word.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This whole day feels like a letter finally being answered.", zh: "今天这一整天，感觉像是一封信终于得到了回音。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "A letter answered after ten long years.", zh: "一封等了十年才得到回音的信。", correct: true, xp: 10 },
          { text: "A letter that was never really answered.", correct: false }
        ],
        hintOnWrong: "用被动语态 → A letter answered after ten long years.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you for letting all of us be part of your story.", zh: "谢谢你们让我们都成为了你们故事的一部分。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you for being part of this day.", zh: "谢谢你们成为这一天的一部分。", correct: true, xp: 10 },
          { text: "Thank you, but it was never about you.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Thank you for being part of this day.",
        next: null
      }
    }
  },
  {
    id: "the-send-off",
    transition: { en: "As the night winds down, guests gather at the door with sparklers.", zh: "夜色渐深，宾客们拿着仙女棒聚在门口。" },
    title: "The Send-Off",
    subtitle: "婚宴 · 送别仪式",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Everyone's lined up outside, waiting to see you two off.", zh: "大家都在外面排好队，等着送你们俩离开。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "They're waiting for us? That's so sweet.", zh: "他们在等我们？真是太贴心了。", correct: true, xp: 10 },
          { text: "They're waiting for us? Tell them to leave.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ They're waiting for us? That's so sweet.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Don't forget to catch the bouquet before you go.", zh: "走之前别忘了接住花束。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "I won't forget, I promise.", zh: "我不会忘的，我保证。", correct: true, xp: 10 },
          { text: "I'd rather skip that tradition.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I won't forget, I promise.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Ready to start our life together, Mr. Husband?", zh: "准备好开始我们的共同生活了吗，老公先生？", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "More ready than I've ever been, Mrs. Wife.", zh: "从没这么准备好过，老婆太太。", correct: true, xp: 10 },
          { text: "Not ready at all, if I'm honest.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ More ready than I've ever been, Mrs. Wife.",
        next: null
      }
    }
  },
  {
    id: "the-next-morning",
    transition: { en: "The morning after, you wake up as a married man.", zh: "第二天早上，你以已婚人士的身份醒来。" },
    title: "The Next Morning",
    subtitle: "公寓 · 婚礼后的清晨",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Good morning, husband. How does it feel?", zh: "早安，老公。感觉怎么样？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels like the beginning of everything.", zh: "感觉像是一切的开始。", correct: true, xp: 10 },
          { text: "It feels exactly like yesterday, honestly.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ It feels like the beginning of everything.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "So, what does forever look like from here?", zh: "那，从这里开始，永远会是什么样子？", voice: "emma" },
        skill: "work",
        grammarTag: "wh-question",
        choices: [
          { text: "Forever looks like this, exactly like this.", zh: "永远就是这样子，正是这样。", correct: true, xp: 10 },
          { text: "Forever looks uncertain, I have to admit.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ Forever looks like this, exactly like this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "A decade apart, a lifetime together. Not a bad trade.", zh: "分开十年，相守一生。这笔交易不亏。", voice: "emma" },
        skill: "work",
        grammarTag: "statement",
        choices: [
          { text: "The best trade either of us ever made.", zh: "这是我们俩这辈子做过最好的交易。", correct: true, xp: 10 },
          { text: "A trade I'm still not sure was worth it.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ The best trade either of us ever made.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "The bouquets arrived just in time.", zh: "花束正好及时送到了。" },
  { en: "Sure, I'll have them set up in minutes.", zh: "没问题，我几分钟就能摆好。" },
  { en: "Both, in about equal measure.", zh: "两者都有，差不多各占一半。" },
  { en: "Three generations? I'm honored to wear it.", zh: "三代人？我很荣幸能戴上它。" },
  { en: "I'm the lucky one, honestly.", zh: "说实话，我才是幸运的那个。" },
  { en: "I've never been more ready for anything.", zh: "我从没为任何事这么准备好过。" },
  { en: "We're honored to be witnesses to it.", zh: "能作为见证人，我们感到很荣幸。" },
  { en: "She asked us to sit, so let's sit.", zh: "她请我们坐下，那我们就坐吧。" },
  { en: "There she is. She's breathtaking.", zh: "她来了。美得令人屏息。" },
  { en: "I'm choosing you too, for the rest of my life.", zh: "我也在选择你，用我余生的每一天。" },
  { en: "If a decade couldn't stop us, nothing can.", zh: "如果十年都拦不住我们，那什么都拦不住了。" },
  { en: "We're officially married. I can hardly believe it.", zh: "我们正式结婚了。我简直不敢相信。" },
  { en: "I've been waiting all day for this.", zh: "我等这一刻等了一整天了。" },
  { en: "The whole street heard it, and I loved that.", zh: "整条街都听到了，我很喜欢这样。" },
  { en: "Let's go celebrate properly now.", zh: "我们现在好好庆祝一下吧。" },
  { en: "We've all been waiting to hear them.", zh: "我们都一直等着听呢。" },
  { en: "To the couple who taught us so much, cheers.", zh: "敬这对教会我们良多的新人，干杯。" },
  { en: "To love that waited, and was worth it.", zh: "敬这份等待的爱，值得！" },
  { en: "You may have every dance tonight.", zh: "今晚每一支舞都归你了。" },
  { en: "So am I. We'll be terrible together.", zh: "我也是。我们就一起烂到底吧。" },
  { en: "It's even better than I imagined.", zh: "比我想象的还要好。" },
  { en: "Long is perfect. I'll read every word.", zh: "长才好呢。每个字我都会读。" },
  { en: "A letter answered after ten long years.", zh: "一封等了十年才得到回音的信。" },
  { en: "Thank you for being part of this day.", zh: "谢谢你们成为这一天的一部分。" },
  { en: "They're waiting for us? That's so sweet.", zh: "他们在等我们？真是太贴心了。" },
  { en: "I won't forget, I promise.", zh: "我不会忘的，我保证。" },
  { en: "More ready than I've ever been, Mrs. Wife.", zh: "从没这么准备好过，老婆太太。" },
  { en: "It feels like the beginning of everything.", zh: "感觉像是一切的开始。" },
  { en: "Forever looks like this, exactly like this.", zh: "永远就是这样子，正是这样。" },
  { en: "The best trade either of us ever made.", zh: "这是我们俩这辈子做过最好的交易。" }
);
