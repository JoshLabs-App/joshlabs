// 内容数据层：第二十六章，紧接第二十五章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter25.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：考驾照、买车。全新词汇领域：驾校/路考/保险/试驾/贷款购车——
// 为即将到来的宝宝准备一辆车。

GAME_CONTENT.scenes.push(
  {
    id: "deciding-to-drive",
    transition: { en: "With a baby on the way, the subject of a car comes up.", zh: "随着宝宝即将出生，买车这件事被提上了日程。" },
    title: "Deciding to Drive",
    subtitle: "新家 · 该不该买车",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Neither of us has ever gotten a driver's license.", zh: "我们俩谁都从没考过驾照。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Neither of us has, but maybe it's time.", zh: "确实都没有，但也许是时候了。", correct: true, xp: 10 },
          { text: "Neither of us needs one, honestly.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → Neither of us has, but maybe it's time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "With a stroller and diaper bags, we'll need a car eventually.", zh: "带着婴儿车和尿布包，我们迟早会需要一辆车。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We'll definitely need one before too long.", zh: "我们肯定很快就会需要一辆车。", correct: true, xp: 10 },
          { text: "We'll never really need a car, honestly.", correct: false }
        ],
        hintOnWrong: "用 will 表示未来 → We'll definitely need one before too long.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's sign up for driving lessons this week.", zh: "我们这周就报名驾驶课吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's sign up together, right now.", zh: "我们现在就一起报名吧。", correct: true, xp: 10 },
          { text: "Let's put it off for another year.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's sign up together, right now.",
        next: null
      }
    }
  },
  {
    id: "driving-lessons",
    title: "Driving Lessons",
    subtitle: "驾校 · 第一堂课",
    avatar: "🧑‍🏫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Adjust your mirrors before you even start the engine.", zh: "发动引擎之前先调好后视镜。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Mirrors first, got it.", zh: "先调后视镜，明白了。", correct: true, xp: 10 },
          { text: "I'll skip the mirrors this time.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Mirrors first, got it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Now, slowly ease off the brake and onto the gas.", zh: "现在，慢慢松开刹车，轻踩油门。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Slowly, okay. Here we go.", zh: "慢慢来，好的。开始了。", correct: true, xp: 10 },
          { text: "Slowly is boring, let's go fast.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Slowly, okay. Here we go.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Not bad for a first try. You're a natural.", zh: "第一次开成这样不错。你很有天赋。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "A natural? I'm relieved to hear that.", zh: "有天赋？听到这话我松了口气。", correct: true, xp: 10 },
          { text: "A natural? I nearly hit that cone.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ A natural? I'm relieved to hear that.",
        next: null
      }
    }
  },
  {
    id: "the-written-test",
    title: "The Written Test",
    subtitle: "考场 · 笔试",
    avatar: "👨‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "You'll need to score at least eighty percent to pass.", zh: "您需要至少达到百分之八十才能通过。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "I'll aim for a hundred, just to be safe.", zh: "我争取拿满分，稳妥一点。", correct: true, xp: 10 },
          { text: "I'll aim for the lowest possible score.", correct: false }
        ],
        hintOnWrong: "用 will 表示打算 → I'll aim for a hundred, just to be safe.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you studied the road sign chapter closely?", zh: "您仔细看过交通标志那一章吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've studied it more than any other chapter.", zh: "这一章我看得比其他都仔细。", correct: true, xp: 10 },
          { text: "I've never opened that chapter at all.", correct: false }
        ],
        hintOnWrong: "用现在完成时 → I've studied it more than any other chapter.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You scored ninety-five. Congratulations, you passed.", zh: "您得了九十五分。恭喜，通过了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I passed? I can finally breathe again.", zh: "通过了？我终于能松口气了。", correct: true, xp: 10 },
          { text: "I passed, but I don't really care.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I passed? I can finally breathe again.",
        next: null
      }
    }
  },
  {
    id: "the-road-test",
    transition: { en: "Weeks of practice later, it's finally time for the road test.", zh: "经过几周练习，终于到了路考的日子。" },
    title: "The Road Test",
    subtitle: "考场 · 路考",
    avatar: "👩‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please signal before you change lanes.", zh: "变道前请打转向灯。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, signaling now.", zh: "好的，正在打灯。", correct: true, xp: 10 },
          { text: "I'd rather not signal, honestly.", correct: false }
        ],
        hintOnWrong: "礼貌配合 → Of course, signaling now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Come to a complete stop at the sign ahead.", zh: "在前面的停车标志前完全停稳。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Stopping completely, right here.", zh: "完全停下，就在这儿。", correct: true, xp: 10 },
          { text: "I'll just roll through it a little.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Stopping completely, right here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's the test complete. You passed with flying colors.", zh: "测试完成了。您通过得非常出色。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "I did? This might be the best day ever.", zh: "真的吗？这可能是最好的一天了。", correct: true, xp: 10 },
          { text: "I did, but the whole test felt shaky.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ I did? This might be the best day ever.",
        next: null
      }
    }
  },
  {
    id: "car-shopping",
    title: "Car Shopping",
    subtitle: "汽车经销商 · 挑车",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you looking for something new or used?", zh: "您是想要新车还是二手车？" },
        skill: "banking",
        grammarTag: "do-question",
        choices: [
          { text: "Used, if it's still reliable.", zh: "二手的，如果还可靠的话。", correct: true, xp: 10 },
          { text: "New, and money doesn't matter.", correct: false }
        ],
        hintOnWrong: "简单回答 → Used, if it's still reliable.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This model has great safety ratings for families.", zh: "这款车对家庭来说安全评级很高。" },
        skill: "banking",
        grammarTag: "statement",
        choices: [
          { text: "Safety ratings matter most to us right now.", zh: "现在安全评级对我们来说最重要。", correct: true, xp: 10 },
          { text: "Safety ratings don't concern us at all.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Safety ratings matter most to us right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Would you like to take it for a test drive?", zh: "您想试驾一下吗？" },
        skill: "banking",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's take it around the block.", zh: "好的，我们绕街区开一圈吧。", correct: true, xp: 10 },
          { text: "No, I'll just buy it blindly.", correct: false }
        ],
        hintOnWrong: "简单回答＋提议 → Yes, let's take it around the block.",
        next: null
      }
    }
  },
  {
    id: "the-test-drive",
    title: "The Test Drive",
    subtitle: "试驾 · 上路体验",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How does the steering feel to you?", zh: "转向手感怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It feels smoother than I expected.", zh: "比我预期的要顺滑。", correct: true, xp: 10 },
          { text: "It feels the same as every other car.", correct: false }
        ],
        hintOnWrong: "简单回答（陈述句）→ It feels smoother than I expected.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's plenty of trunk space for a stroller back there.", zh: "后备箱空间足够放一辆婴儿车。" },
        skill: "housing",
        grammarTag: "statement",
        choices: [
          { text: "Plenty of space — that settles it for me.", zh: "空间足够——这一点让我定下心来了。", correct: true, xp: 10 },
          { text: "Plenty of space we'll never actually use.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Plenty of space — that settles it for me.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "So, what do you think? Is this the one?", zh: "那，你怎么想？就是这辆了吗？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I think this is exactly the one.", zh: "我觉得就是这辆了。", correct: true, xp: 10 },
          { text: "I think we should keep looking elsewhere.", correct: false }
        ],
        hintOnWrong: "简单表态（陈述句）→ I think this is exactly the one.",
        next: null
      }
    }
  },
  {
    id: "financing-the-car",
    title: "Financing the Car",
    subtitle: "汽车经销商 · 车贷",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Would you like to pay in full or finance monthly?", zh: "您想一次付清，还是按月分期？" },
        skill: "banking",
        grammarTag: "do-question",
        choices: [
          { text: "We'd like to finance it monthly.", zh: "我们想按月分期。", correct: true, xp: 10 },
          { text: "We'd like to skip payment entirely.", correct: false }
        ],
        hintOnWrong: "简单回答 → We'd like to finance it monthly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If you put more down now, your payments will be lower later.", zh: "如果您现在多付一些首付，以后每月还款会更低。" },
        skill: "banking",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, let's put down more.", zh: "如果是这样，那我们多付一些首付吧。", correct: true, xp: 10 },
          { text: "If that's true, let's put down nothing.", correct: false }
        ],
        hintOnWrong: "用条件句 → If that's true, let's put down more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Sign here, and the car is officially yours.", zh: "在这儿签字，这辆车就正式是您的了。" },
        skill: "banking",
        grammarTag: "please-request",
        choices: [
          { text: "Signing right now, no hesitation.", zh: "现在就签，毫不犹豫。", correct: true, xp: 10 },
          { text: "I need another week to think it over.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Signing right now, no hesitation.",
        next: null
      }
    }
  },
  {
    id: "buying-insurance",
    title: "Buying Insurance",
    subtitle: "保险公司 · 买车险",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Would you like basic coverage or full coverage?", zh: "您想要基础险还是全险？" },
        skill: "banking",
        grammarTag: "do-question",
        choices: [
          { text: "Full coverage, better safe than sorry.", zh: "全险吧，安全总比后悔好。", correct: true, xp: 10 },
          { text: "No coverage at all, we'll take our chances.", correct: false }
        ],
        hintOnWrong: "简单回答 → Full coverage, better safe than sorry.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Since neither of you has had a ticket, your rate is quite low.", zh: "由于你们俩都没有违章记录，费率相当低。" },
        skill: "banking",
        grammarTag: "concession",
        choices: [
          { text: "Since it's low, that's a relief to hear.", zh: "既然费率低，那真是让人松了口气。", correct: true, xp: 10 },
          { text: "Since it's low, something must be wrong.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Since it's low, that's a relief to hear.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're fully insured and ready to drive off the lot.", zh: "您已经全额投保，可以把车开走了。" },
        skill: "banking",
        grammarTag: "passive",
        choices: [
          { text: "Fully insured, and finally free to drive.", zh: "全额投保了，终于能开车走了。", correct: true, xp: 10 },
          { text: "Fully insured, though I'm still nervous to drive.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Fully insured, and finally free to drive.",
        next: null
      }
    }
  },
  {
    id: "the-first-drive-home",
    transition: { en: "You pull out of the lot in your very own car.", zh: "你们开着自己的车，驶离了停车场。" },
    title: "The First Drive Home",
    subtitle: "车里 · 第一次自己开车回家",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I still can't believe we're actually driving right now.", zh: "我到现在还是不敢相信我们真的在开车了。", voice: "emma" },
        skill: "work",
        grammarTag: "present-continuous",
        choices: [
          { text: "We're really driving, and it feels amazing.", zh: "我们真的在开车，感觉太棒了。", correct: true, xp: 10 },
          { text: "We're not really driving anywhere important.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ We're really driving, and it feels amazing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we take the long way home, just to enjoy it?", zh: "我们要不要绕远路回家，就为了多享受一下？", voice: "emma" },
        skill: "work",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's take the longest way possible.", zh: "我们就走最远的那条路吧。", correct: true, xp: 10 },
          { text: "Let's take the shortest route, please.", correct: false }
        ],
        hintOnWrong: "接受提议 → Let's take the longest way possible.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Next stop: bringing our baby home in this very car.", zh: "下一站：坐着这辆车把我们的宝宝接回家。", voice: "emma" },
        skill: "work",
        grammarTag: "will-future",
        choices: [
          { text: "This car will carry our whole family soon.", zh: "很快，这辆车就会载着我们一家人。", correct: true, xp: 10 },
          { text: "This car will probably sit unused for years.", correct: false }
        ],
        hintOnWrong: "用 will 表示未来 → This car will carry our whole family soon.",
        next: null
      }
    }
  },
  {
    id: "installing-the-car-seat",
    title: "Installing the Car Seat",
    subtitle: "车里 · 安装儿童安全座椅",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you help me figure out these straps?", zh: "你能帮我弄清楚这些安全带怎么用吗？" },
        skill: "community",
        grammarTag: "phrasal-verb",
        choices: [
          { text: "Let me figure it out with you.", zh: "我跟你一起弄清楚。", correct: true, xp: 10 },
          { text: "I've never figured anything like that out.", correct: false }
        ],
        hintOnWrong: "用短语动词（figure out）→ Let me figure it out with you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This seat is supposed to click when it's secure.", zh: "这个座椅装稳固之后应该会发出咔哒声。" },
        skill: "community",
        grammarTag: "passive",
        choices: [
          { text: "There it is, it's clicked into place.", zh: "好了，咔哒一声装好了。", correct: true, xp: 10 },
          { text: "There's no click at all, something's wrong.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ There it is, it's clicked into place.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This car is finally, truly ready for our family.", zh: "这辆车终于真正为我们一家人准备好了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Ready for all three of us, at last.", zh: "终于为我们三个人准备好了。", correct: true, xp: 10 },
          { text: "Ready for nobody, if I'm honest.", correct: false }
        ],
        hintOnWrong: "简单回应（陈述句）→ Ready for all three of us, at last.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "Neither of us has, but maybe it's time.", zh: "确实都没有，但也许是时候了。" },
  { en: "We'll definitely need one before too long.", zh: "我们肯定很快就会需要一辆车。" },
  { en: "Let's sign up together, right now.", zh: "我们现在就一起报名吧。" },
  { en: "Mirrors first, got it.", zh: "先调后视镜，明白了。" },
  { en: "Slowly, okay. Here we go.", zh: "慢慢来，好的。开始了。" },
  { en: "A natural? I'm relieved to hear that.", zh: "有天赋？听到这话我松了口气。" },
  { en: "I'll aim for a hundred, just to be safe.", zh: "我争取拿满分，稳妥一点。" },
  { en: "I've studied it more than any other chapter.", zh: "这一章我看得比其他都仔细。" },
  { en: "I passed? I can finally breathe again.", zh: "通过了？我终于能松口气了。" },
  { en: "Of course, signaling now.", zh: "好的，正在打灯。" },
  { en: "Stopping completely, right here.", zh: "完全停下，就在这儿。" },
  { en: "I did? This might be the best day ever.", zh: "真的吗？这可能是最好的一天了。" },
  { en: "Used, if it's still reliable.", zh: "二手的，如果还可靠的话。" },
  { en: "Safety ratings matter most to us right now.", zh: "现在安全评级对我们来说最重要。" },
  { en: "Yes, let's take it around the block.", zh: "好的，我们绕街区开一圈吧。" },
  { en: "It feels smoother than I expected.", zh: "比我预期的要顺滑。" },
  { en: "Plenty of space — that settles it for me.", zh: "空间足够——这一点让我定下心来了。" },
  { en: "I think this is exactly the one.", zh: "我觉得就是这辆了。" },
  { en: "We'd like to finance it monthly.", zh: "我们想按月分期。" },
  { en: "If that's true, let's put down more.", zh: "如果是这样，那我们多付一些首付吧。" },
  { en: "Signing right now, no hesitation.", zh: "现在就签，毫不犹豫。" },
  { en: "Full coverage, better safe than sorry.", zh: "全险吧，安全总比后悔好。" },
  { en: "Since it's low, that's a relief to hear.", zh: "既然费率低，那真是让人松了口气。" },
  { en: "Fully insured, and finally free to drive.", zh: "全额投保了，终于能开车走了。" },
  { en: "We're really driving, and it feels amazing.", zh: "我们真的在开车，感觉太棒了。" },
  { en: "Let's take the longest way possible.", zh: "我们就走最远的那条路吧。" },
  { en: "This car will carry our whole family soon.", zh: "很快，这辆车就会载着我们一家人。" },
  { en: "Let me figure it out with you.", zh: "我跟你一起弄清楚。" },
  { en: "There it is, it's clicked into place.", zh: "好了，咔哒一声装好了。" },
  { en: "Ready for all three of us, at last.", zh: "终于为我们三个人准备好了。" }
);
