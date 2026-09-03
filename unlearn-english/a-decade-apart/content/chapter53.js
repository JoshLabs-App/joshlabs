// 内容数据层：第五十三章，紧接第五十二章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人的护照快过期了，还要给宝宝办第一本护照。全新词汇领域：
// 护照续签/证件照片/申请材料/领事馆窗口。

GAME_CONTENT.scenes.push(
  {
    id: "checking-expiration-dates",
    transition: { en: "While planning a trip, they check their passport expiration dates.", zh: "在计划旅行时，他们查看了自己护照的到期日期。" },
    title: "Checking Expiration Dates",
    subtitle: "家里 · 检查有效期",
    avatar: "📘",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My passport actually expires in three months.", zh: "我的护照其实三个月后就到期了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We should renew it before we book anything.", zh: "我们在订任何票之前应该先续签。", correct: true, xp: 10 },
          { text: "That's fine, expiration dates never matter much.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We should renew it before we book anything.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Does our baby even have a passport yet?", zh: "我们的宝宝有护照了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, we've never actually applied for one.", zh: "还没有，我们从没申请过。", correct: true, xp: 10 },
          { text: "Yes, babies are born with passports already.", correct: false }
        ],
        hintOnWrong: "否定回答（补充理由） → No, we've never actually applied for one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's handle all three passports at once.", zh: "我们一次性把三本护照都办了吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's book an appointment today.", zh: "好主意，我们今天就预约吧。", correct: true, xp: 10 },
          { text: "Let's just deal with one at a time, slowly.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's book an appointment today.",
        next: null
      }
    }
  },
  {
    id: "gathering-documents",
    transition: { en: "They gather the paperwork needed for all three applications.", zh: "他们收集三份申请所需的文件。" },
    title: "Gathering Documents",
    subtitle: "家里 · 收集材料",
    avatar: "📄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you found the baby's birth certificate yet?", zh: "宝宝的出生证明你找到了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've found it, it's right here in this folder.", zh: "找到了，就在这个文件夹里。", correct: true, xp: 10 },
          { text: "I've never once seen that document before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've found it, it's right here in this folder.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This checklist is longer than I expected.", zh: "这份清单比我预想的要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's go through it item by item.", zh: "确实是，我们一项一项来吧。", correct: true, xp: 10 },
          { text: "It isn't, this checklist looks pretty short.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's go through it item by item.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll also need two pieces of ID each.", zh: "我们每个人还需要两份身份证件。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Got it, I'll pull those out now.", zh: "明白了，我现在就把它们找出来。", correct: true, xp: 10 },
          { text: "Got it, though we probably don't have any.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Got it, I'll pull those out now.",
        next: null
      }
    }
  },
  {
    id: "the-passport-photos",
    transition: { en: "They visit a shop for official passport photos.", zh: "他们去了一家店拍摄官方护照照片。" },
    title: "The Passport Photos",
    subtitle: "照相馆 · 拍证件照",
    avatar: "📸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you keep a neutral expression for this photo?", zh: "拍照时你能保持面无表情吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, though it's harder than it sounds.", zh: "我能，不过比听起来要难。", correct: true, xp: 10 },
          { text: "I can't, smiling is impossible for me to avoid.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, though it's harder than it sounds.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Getting the baby to hold still is harder than I imagined.", zh: "让宝宝保持不动比我想象的要难。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, this might take a few tries.", zh: "确实如此，这可能得试好几次。", correct: true, xp: 10 },
          { text: "It really isn't, they're sitting perfectly still.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, this might take a few tries.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Got it, this one meets all the requirements.", zh: "拍到了，这张符合所有要求。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Finally, I was starting to lose hope.", zh: "终于啊，我都快没信心了。", correct: true, xp: 10 },
          { text: "Finally, though we didn't even need a photo.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Finally, I was starting to lose hope.",
        next: null
      }
    }
  },
  {
    id: "filling-out-forms",
    transition: { en: "That evening, they fill out three separate application forms.", zh: "那天晚上，他们填写了三份独立的申请表。" },
    title: "Filling Out Forms",
    subtitle: "家里 · 填写表格",
    avatar: "✍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Does this section ask for our home address?", zh: "这个部分是问我们的家庭住址吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it wants the full mailing address.", zh: "是的，它需要完整的邮寄地址。", correct: true, xp: 10 },
          { text: "No, addresses aren't required on this form.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it wants the full mailing address.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This form is more detailed than the old one.", zh: "这份表格比旧版更详细。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's just take it slow and careful.", zh: "确实是，我们就慢慢来，仔细填吧。", correct: true, xp: 10 },
          { text: "It isn't, let's just rush through it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's just take it slow and careful.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need a guarantor to sign the baby's application.", zh: "宝宝的申请需要一位保证人签字。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's ask a family friend to help.", zh: "对，我们请一位家庭朋友帮忙吧。", correct: true, xp: 10 },
          { text: "Right, though guarantors seem unnecessary here.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's ask a family friend to help.",
        next: null
      }
    }
  },
  {
    id: "the-passport-office",
    transition: { en: "They arrive at the passport office for their appointment.", zh: "他们到达护照办事处赴约。" },
    title: "The Passport Office",
    subtitle: "护照办事处 · 现场办理",
    avatar: "🏛️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you have all three applications with you?", zh: "三份申请材料你们都带齐了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, everything is right here in this folder.", zh: "带齐了，都在这个文件夹里。", correct: true, xp: 10 },
          { text: "No, we forgot to bring anything at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, everything is right here in this folder.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This line is moving faster than I expected.", zh: "这条队伍移动得比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that's a relief, honestly.", zh: "确实是，说实话这让人松了口气。", correct: true, xp: 10 },
          { text: "It isn't, this line hasn't moved at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that's a relief, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please have a seat, we'll call your number shortly.", zh: "请坐一下，我们很快会叫您的号码。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thank you, we don't mind waiting at all.", zh: "谢谢，我们完全不介意等待。", correct: true, xp: 10 },
          { text: "Thank you, though waiting isn't something we do.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thank you, we'll wait right over there.",
        next: null
      }
    }
  },
  {
    id: "the-clerk-review",
    transition: { en: "A clerk carefully reviews their applications and documents.", zh: "一位工作人员仔细审核了他们的申请和文件。" },
    title: "The Clerk Review",
    subtitle: "护照办事处 · 窗口审核",
    avatar: "🧑‍💼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you signed the back of each photo?", zh: "每张照片背面您都签字了吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've signed all of them, actually.", zh: "其实我们都已经签好了。", correct: true, xp: 10 },
          { text: "We've never signed anything on these photos.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've signed all of them, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Everything looks in order, which is more than I expected.", zh: "一切都井井有条，比我预想的还要顺利。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's such a relief, thank you for reviewing it.", zh: "这真让人松了口气，谢谢您的审核。", correct: true, xp: 10 },
          { text: "That's disappointing, we thought something was missing.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's great to hear, thank you for checking.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Your new passports should arrive within three weeks.", zh: "您的新护照大概三周内就能寄到。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Perfect, that gives us plenty of time.", zh: "太好了，这样时间很充裕。", correct: true, xp: 10 },
          { text: "Perfect, though three weeks feels far too long.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Perfect, that gives us plenty of time.",
        next: null
      }
    }
  },
  {
    id: "waiting-for-the-mail",
    transition: { en: "Each day, they check the mailbox hoping for the passports.", zh: "每天他们都盼着信箱里能出现护照。" },
    title: "Waiting for the Mail",
    subtitle: "家里 · 等待邮件",
    avatar: "📬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has anything come in the mail today?", zh: "今天邮件里有什么来吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Nothing's come yet, just some regular bills.", zh: "还没什么来，就一些普通账单。", correct: true, xp: 10 },
          { text: "Everything has already arrived by now.", correct: false }
        ],
        hintOnWrong: "现在完成时 → Nothing's come yet, just some regular bills.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I'm checking the tracking number again.", zh: "我又在查快递追踪号了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "You've checked that about ten times today.", zh: "你今天已经查了大概十次了。", correct: true, xp: 10 },
          { text: "You've never checked that once, I'm sure.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → You've checked that about ten times today.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If they don't come this week, let's call and check.", zh: "如果这周还没到，我们就打电话查一下吧。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that happens, let's call on Friday.", zh: "如果真是那样，我们周五就打电话吧。", correct: true, xp: 10 },
          { text: "If that happens, let's just forget about it.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that happens, let's call on Friday.",
        next: null
      }
    }
  },
  {
    id: "they-finally-arrive",
    transition: { en: "A padded envelope finally arrives with three brand-new passports.", zh: "一个厚厚的信封终于送到了，里面装着三本崭新的护照。" },
    title: "They Finally Arrive",
    subtitle: "家里 · 护照到了",
    avatar: "📦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're here, all three of them!", zh: "到了，三本都到了！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Finally, I've been waiting for this all week.", zh: "终于啊，我这一整周都在等这个。", correct: true, xp: 10 },
          { text: "Finally, though we don't actually need them.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Finally, I've been waiting for this all week.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The baby's photo turned out cuter than any of ours.", zh: "宝宝的照片比我们俩的都可爱。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, that photo is adorable.", zh: "确实如此，那张照片太可爱了。", correct: true, xp: 10 },
          { text: "It really didn't, that photo looks blurry.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, that photo is adorable.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Now we can finally book that trip we talked about.", zh: "现在我们终于可以订之前聊到的那趟旅行了。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "We can, let's start looking at flights tonight.", zh: "确实可以，我们今晚就开始查机票吧。", correct: true, xp: 10 },
          { text: "We can't, passports don't actually help with trips.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → We can, let's start looking at flights tonight.",
        next: null
      }
    }
  },
  {
    id: "planning-the-trip",
    transition: { en: "With passports in hand, they finally plan a family trip abroad.", zh: "护照拿到手了，他们终于开始规划一次全家出国旅行。" },
    title: "Planning the Trip",
    subtitle: "家里 · 规划旅行",
    avatar: "🗺️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where should our baby's first trip abroad be?", zh: "宝宝的第一次出国旅行应该去哪儿？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Somewhere close, maybe just across the border.", zh: "近一点的地方，也许就跨个边境。", correct: true, xp: 10 },
          { text: "Nowhere, first trips are always a bad idea.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Somewhere close, maybe just across the border.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Traveling with a baby is more work than traveling alone.", zh: "带着宝宝旅行比一个人旅行要费劲得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but it'll be worth it, definitely.", zh: "确实是，但绝对值得。", correct: true, xp: 10 },
          { text: "It isn't, babies never make anything harder.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but it'll be worth it, definitely.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make a checklist so we don't forget anything.", zh: "我们列个清单，这样就不会漏掉什么了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's start writing it tonight.", zh: "好主意，我们今晚就开始写吧。", correct: true, xp: 10 },
          { text: "Let's just pack randomly and hope for the best.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's start writing it tonight.",
        next: null
      }
    }
  },
  {
    id: "a-full-circle-moment",
    transition: { en: "That night, he looks at his own passport and thinks back to where it all began.", zh: "那天晚上，他看着自己的护照，回想起这一切开始的地方。" },
    title: "A Full-Circle Moment",
    subtitle: "家里 · 圆满的回望",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you remember the first time you used this passport?", zh: "你还记得第一次用这本护照是什么时候吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I remember it perfectly, it was that first trip here.", zh: "我记得很清楚，是我第一次来这里的那趟旅行。", correct: true, xp: 10 },
          { text: "I don't remember using a passport ever.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I remember it perfectly, it was that first trip here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "So much has changed since that very first stamp.", zh: "从那第一个印章开始，已经发生了这么多变化。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It really has, everything led to this moment.", zh: "确实如此，一切都指向了这一刻。", correct: true, xp: 10 },
          { text: "It really hasn't, nothing feels different at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It really has, everything led to this moment.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter where this next passport takes us, I'm ready for it.", zh: "无论这本新护照会带我们去哪里，我都已经准备好了。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter where it takes us, together, always.", zh: "无论它带我们去哪里，我们都一起，永远如此。", correct: true, xp: 10 },
          { text: "No matter where it takes us, I'd rather stay home.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter where it takes us, together, always.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "expiration dates", zh: "到期日期", category: "community" },
  { en: "expires", zh: "到期", category: "community" },
  { en: "renew", zh: "续签", category: "community" },
  { en: "book", zh: "预订", category: "community" },
  { en: "applied", zh: "申请过的", category: "community" },
  { en: "at once", zh: "一次性地", category: "community" },
  { en: "birth certificate", zh: "出生证明", category: "community" },
  { en: "folder", zh: "文件夹", category: "community" },
  { en: "checklist", zh: "清单", category: "community" },
  { en: "item by item", zh: "一项一项地", category: "community" },
  { en: "pieces of ID", zh: "身份证件", category: "community" },
  { en: "official", zh: "官方的", category: "community" },
  { en: "neutral expression", zh: "面无表情", category: "community" },
  { en: "hold still", zh: "保持不动", category: "community" },
  { en: "requirements", zh: "要求（复数）", category: "community" },
  { en: "lose hope", zh: "失去信心", category: "community" },
  { en: "section", zh: "部分", category: "community" },
  { en: "mailing address", zh: "邮寄地址", category: "community" },
  { en: "detailed", zh: "详细的", category: "community" },
  { en: "guarantor", zh: "保证人", category: "community" },
  { en: "family friend", zh: "家庭朋友", category: "community" },
  { en: "passport office", zh: "护照办事处", category: "community" },
  { en: "moving", zh: "移动着", category: "community" },
  { en: "call your number", zh: "叫号", category: "community" },
  { en: "clerk", zh: "工作人员", category: "community" },
  { en: "reviews", zh: "审核", category: "community" },
  { en: "signed", zh: "签字了的", category: "community" },
  { en: "in order", zh: "井井有条的", category: "community" },
  { en: "missing", zh: "缺失的", category: "community" },
  { en: "mailbox", zh: "信箱", category: "community" },
  { en: "regular bills", zh: "普通账单", category: "community" },
  { en: "tracking number", zh: "快递追踪号", category: "community" },
  { en: "padded envelope", zh: "厚信封", category: "community" },
  { en: "brand-new", zh: "崭新的", category: "community" },
  { en: "adorable", zh: "可爱迷人的", category: "community" },
  { en: "flights", zh: "航班（复数）", category: "community" },
  { en: "abroad", zh: "国外", category: "community" },
  { en: "border", zh: "边境", category: "community" },
  { en: "traveling", zh: "旅行", category: "community" },
  { en: "worth it", zh: "值得的", category: "community" },
  { en: "full-circle", zh: "圆满的，兜了一圈的", category: "community" },
  { en: "stamp", zh: "印章", category: "community" },
  { en: "led to", zh: "指向了", category: "community" }
);
