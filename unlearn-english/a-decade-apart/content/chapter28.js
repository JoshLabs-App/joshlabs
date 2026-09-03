// 内容数据层：第二十八章，紧接第二十七章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter27.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：为迎接宝宝，翻新家里的一间空房间。全新词汇领域：装修承包商/预算/
// 涂料/地板/家具组装/验收。

GAME_CONTENT.scenes.push(
  {
    id: "meeting-the-contractor",
    transition: { en: "They invite a contractor over to look at the spare room.", zh: "他们请了一位承包商来看那间空房间。" },
    title: "Meeting the Contractor",
    subtitle: "装修 · 见承包商",
    avatar: "🧰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What kind of renovation are you planning?", zh: "你们打算做什么样的装修？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We're turning this room into a nursery.", zh: "我们要把这个房间改成婴儿房。", correct: true, xp: 10 },
          { text: "We're not planning any renovation at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答计划 → We're turning this room into a nursery.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you have a budget in mind?", zh: "你们心里有预算数字吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, we're hoping to stay under five thousand.", zh: "有的，我们希望控制在五千以内。", correct: true, xp: 10 },
          { text: "No, money doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, we're hoping to stay under five thousand.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'll put together an estimate by Friday.", zh: "我会在周五之前给你们一份报价。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That works great, we'll wait to hear from you.", zh: "那太好了，我们等你的消息。", correct: true, xp: 10 },
          { text: "That's too slow, we needed it yesterday.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That works great, we'll wait to hear from you.",
        next: null
      }
    }
  },
  {
    id: "choosing-paint",
    transition: { en: "They visit a hardware store to pick paint colors.", zh: "他们去五金店挑选油漆颜色。" },
    title: "Choosing Paint",
    subtitle: "装修 · 挑油漆",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you looking for a bright color or something neutral?", zh: "你们想要鲜艳的颜色还是中性色？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Something neutral would be safer for now.", zh: "现在选中性色会更保险一些。", correct: true, xp: 10 },
          { text: "Something neutral sounds much too boring.", correct: false }
        ],
        hintOnWrong: "陈述句表达偏好 → Something neutral would be safer for now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This paint is more durable than the cheaper brand.", zh: "这种油漆比便宜的牌子更耐用。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Durable is worth the extra cost to us.", zh: "耐用对我们来说值这个额外花费。", correct: true, xp: 10 },
          { text: "Durable doesn't matter, we'll repaint every year.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Durable is worth the extra cost to us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "How many gallons do you think you'll need?", zh: "你们觉得需要买几加仑？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I think two gallons should cover it.", zh: "我觉得两加仑应该够用了。", correct: true, xp: 10 },
          { text: "I think paint is something we don't need.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → I think two gallons should cover it.",
        next: null
      }
    }
  },
  {
    id: "removing-old-flooring",
    transition: { en: "Work begins by tearing out the old carpet.", zh: "工程从撕掉旧地毯开始。" },
    title: "Removing Old Flooring",
    subtitle: "装修 · 拆旧地板",
    avatar: "🔨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This carpet has been here since the house was built.", zh: "这块地毯从这房子建成就一直在这儿了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "It's definitely been here far too long.", zh: "它在这儿的时间确实太久了。", correct: true, xp: 10 },
          { text: "It's never actually been here before.", correct: false }
        ],
        hintOnWrong: "现在完成时 → It's definitely been here far too long.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Watch out for nails as you pull it up.", zh: "拉起地毯的时候要小心钉子。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Thanks for the warning, I'll wear gloves.", zh: "谢谢提醒，我会戴上手套的。", correct: true, xp: 10 },
          { text: "Thanks, but gloves seem unnecessary here.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Thanks for the warning, I'll wear gloves.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once the carpet is gone, we'll check the subfloor.", zh: "地毯拆掉之后，我们会检查一下底层地板。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "Sounds good, and let me know what you find.", zh: "好的，如果发现什么问题告诉我一声。", correct: true, xp: 10 },
          { text: "Sounds good, but I don't want to know.", correct: false }
        ],
        hintOnWrong: "用连接词 → Sounds good, and let me know what you find.",
        next: null
      }
    }
  },
  {
    id: "a-surprise-under-the-carpet",
    transition: { en: "The subfloor reveals an unexpected problem.", zh: "底层地板暴露出一个意外的问题。" },
    title: "A Surprise Under the Carpet",
    subtitle: "装修 · 意外发现",
    avatar: "😳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There's some water damage on this section of the floor.", zh: "地板这一部分有一些水损。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's concerning, how bad is the damage?", zh: "这挺让人担心的，损坏有多严重？", correct: true, xp: 10 },
          { text: "That's fine, water damage never matters.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's concerning, how bad is the damage?",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we replace this section now, it won't spread.", zh: "如果现在就更换这一部分，问题就不会扩散。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's the fix, let's do it right away.", zh: "如果这样能解决，那我们马上就做。", correct: true, xp: 10 },
          { text: "If that's the fix, let's just ignore it.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's the fix, let's do it right away.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will add a bit to the original estimate.", zh: "这会比原来的报价多花一点钱。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's understandable, we'd rather fix it properly.", zh: "这可以理解，我们更希望把它彻底修好。", correct: true, xp: 10 },
          { text: "That's unacceptable, we won't pay a cent more.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's understandable, we'd rather fix it properly.",
        next: null
      }
    }
  },
  {
    id: "installing-new-flooring",
    transition: { en: "New laminate flooring goes in over a few days.", zh: "新的复合地板花了几天时间铺设完成。" },
    title: "Installing New Flooring",
    subtitle: "装修 · 铺新地板",
    avatar: "🪵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you happy with how the flooring looks so far?", zh: "目前地板的样子你们满意吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, it's coming together beautifully.", zh: "是的，效果非常好。", correct: true, xp: 10 },
          { text: "No, we haven't looked at it once.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, it's coming together beautifully.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This laminate is easier to clean than carpet.", zh: "这种复合地板比地毯更容易清洁。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Easier to clean matters a lot with a baby coming.", zh: "宝宝快出生了，好清洁真的很重要。", correct: true, xp: 10 },
          { text: "Easier to clean doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Easier to clean matters a lot with a baby coming.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Give it twenty-four hours before moving furniture on it.", zh: "在上面放家具之前请等二十四小时。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, we'll wait a full day before that.", zh: "明白了，我们会等满一整天再放。", correct: true, xp: 10 },
          { text: "Got it, though waiting sounds pointless to me.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, we'll wait a full day before that.",
        next: null
      }
    }
  },
  {
    id: "painting-day",
    transition: { en: "The couple spends a Saturday painting the room themselves.", zh: "夫妻俩花了一个周六自己粉刷房间。" },
    title: "Painting Day",
    subtitle: "装修 · 刷油漆",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever painted a room before?", zh: "你以前刷过房间吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've painted one room, years ago.", zh: "我几年前刷过一个房间。", correct: true, xp: 10 },
          { text: "I'm painting a room right this second.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've painted one room, years ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you taping the edges before we start?", zh: "开始之前你要贴一下边缘的胶带吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm taping them right now.", zh: "是的，我正在贴胶带。", correct: true, xp: 10 },
          { text: "Yes, I taped them last summer.", correct: false }
        ],
        hintOnWrong: "现在进行时 → Yes, I'm taping them right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's do two coats to make sure it's even.", zh: "我们刷两层，确保颜色均匀。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Sounds smart, two coats it is.", zh: "听起来很明智，那就刷两层吧。", correct: true, xp: 10 },
          { text: "Let's just do one coat and hope for the best.", correct: false }
        ],
        hintOnWrong: "接受建议 → Sounds smart, two coats it is.",
        next: null
      }
    }
  },
  {
    id: "assembling-the-crib",
    transition: { en: "A crib arrives in a large flat box.", zh: "婴儿床装在一个又大又扁的箱子里送到了。" },
    title: "Assembling the Crib",
    subtitle: "装修 · 组装婴儿床",
    avatar: "🛠️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you find the instruction manual in the box?", zh: "你能在箱子里找到说明书吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can see it right here on top.", zh: "我能看到它就在最上面。", correct: true, xp: 10 },
          { text: "I can't find any manual anywhere.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can see it right here on top.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This piece is heavier than it looks.", zh: "这块板子比看起来要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "You're right, let's lift it together.", zh: "你说得对，我们一起抬吧。", correct: true, xp: 10 },
          { text: "You're wrong, it feels perfectly light.", correct: false }
        ],
        hintOnWrong: "回应比较句 → You're right, let's lift it together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Make sure every screw is tightened before we test it.", zh: "测试之前要确保每颗螺丝都拧紧了。" },
        skill: "community",
        grammarTag: "connector",
        choices: [
          { text: "Will do, and I'll double-check each one.", zh: "会的，我也会再检查一遍每一颗。", correct: true, xp: 10 },
          { text: "Will do, but checking screws is a waste of time.", correct: false }
        ],
        hintOnWrong: "用连接词 → Will do, and I'll double-check each one.",
        next: null
      }
    }
  },
  {
    id: "hanging-curtains",
    transition: { en: "They add blackout curtains for better sleep.", zh: "他们装上遮光窗帘，方便宝宝睡觉。" },
    title: "Hanging Curtains",
    subtitle: "装修 · 挂窗帘",
    avatar: "🪟",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Why did you choose blackout curtains for this room?", zh: "你们为什么给这间房选了遮光窗帘？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "We chose them so the baby can nap during the day.", zh: "我们选它是为了让宝宝白天也能睡着。", correct: true, xp: 10 },
          { text: "We chose them because color didn't matter.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → We chose them so the baby can nap during the day.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Could you hold the rod steady while I hang this?", zh: "我挂窗帘的时候你能扶稳窗帘杆吗？" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Sure, I've got it steady for you.", zh: "好的，我给你扶稳了。", correct: true, xp: 10 },
          { text: "Sorry, holding things isn't really my job.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Sure, I've got it steady for you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "These curtains block almost all of the light.", zh: "这些窗帘几乎能挡住所有的光线。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Perfect, that's exactly what we wanted.", zh: "太好了，这正是我们想要的。", correct: true, xp: 10 },
          { text: "Perfect, though we wanted more light in here.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Perfect, that's exactly what we wanted.",
        next: null
      }
    }
  },
  {
    id: "the-final-walkthrough",
    transition: { en: "The contractor does a final walkthrough with them.", zh: "承包商和他们一起做最后的验收。" },
    title: "The Final Walkthrough",
    subtitle: "装修 · 最终验收",
    avatar: "🧰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you noticed any issues since the paint dried?", zh: "油漆干了之后你们有发现什么问题吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We haven't noticed anything wrong at all.", zh: "我们完全没发现什么问题。", correct: true, xp: 10 },
          { text: "We've noticed problems in every single corner.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We haven't noticed anything wrong at all.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This room turned out even better than we planned.", zh: "这间房间的效果比我们计划的还要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, thank you for the great work.", zh: "确实如此，谢谢你的出色工作。", correct: true, xp: 10 },
          { text: "It really didn't, we're quite disappointed honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, thank you for the great work.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Thank you both for trusting me with this project.", zh: "谢谢你们俩把这个项目交给我。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Thank you, we couldn't be happier with the result.", zh: "谢谢你，我们对结果非常满意。", correct: true, xp: 10 },
          { text: "Thank you, though we're not happy at all.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Thank you, we couldn't be happier with the result.",
        next: null
      }
    }
  },
  {
    id: "the-nursery-is-ready",
    transition: { en: "They stand in the finished nursery for the first time.", zh: "他们第一次站在装修完成的婴儿房里。" },
    title: "The Nursery Is Ready",
    subtitle: "装修 · 婴儿房完工",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe this room is actually finished?", zh: "你能相信这间房间真的完工了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can barely believe how much has changed.", zh: "我几乎不敢相信变化有这么大。", correct: true, xp: 10 },
          { text: "I can't tell that anything has changed here.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/程度 → I can barely believe how much has changed.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's finally starting to feel real, isn't it?", zh: "这终于开始感觉真实了，不是吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, we're actually parents soon.", zh: "确实是这样，我们很快就要当父母了。", correct: true, xp: 10 },
          { text: "It really isn't, nothing feels different at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, we're actually parents soon.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a picture before we fill it with toys.", zh: "在这里堆满玩具之前，我们拍张照片吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's take a picture right now.", zh: "我们现在就拍张照片吧。", correct: true, xp: 10 },
          { text: "Let's skip the picture, it doesn't matter.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's take a picture right now.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "contractor", zh: "承包商", category: "community" },
  { en: "renovation", zh: "装修，翻新", category: "community" },
  { en: "planning", zh: "计划中的", category: "community" },
  { en: "nursery", zh: "婴儿房", category: "community" },
  { en: "budget", zh: "预算", category: "community" },
  { en: "hoping", zh: "希望着", category: "community" },
  { en: "estimate", zh: "报价，估算", category: "community" },
  { en: "hardware store", zh: "五金店", category: "community" },
  { en: "bright", zh: "鲜艳的", category: "community" },
  { en: "neutral", zh: "中性的", category: "community" },
  { en: "safer", zh: "更安全的", category: "community" },
  { en: "durable", zh: "耐用的", category: "community" },
  { en: "cheaper", zh: "更便宜的", category: "community" },
  { en: "brand", zh: "品牌", category: "community" },
  { en: "extra", zh: "额外的", category: "community" },
  { en: "cost", zh: "花费", category: "community" },
  { en: "gallons", zh: "加仑（复数）", category: "community" },
  { en: "cover it", zh: "够用，覆盖", category: "community" },
  { en: "carpet", zh: "地毯", category: "community" },
  { en: "built", zh: "建成的", category: "community" },
  { en: "nails", zh: "钉子", category: "community" },
  { en: "pull it up", zh: "拉起来", category: "community" },
  { en: "warning", zh: "警告，提醒", category: "community" },
  { en: "gloves", zh: "手套", category: "community" },
  { en: "subfloor", zh: "底层地板", category: "community" },
  { en: "water damage", zh: "水损", category: "community" },
  { en: "section", zh: "部分，区域", category: "community" },
  { en: "concerning", zh: "令人担忧的", category: "community" },
  { en: "spread", zh: "扩散", category: "community" },
  { en: "add", zh: "增加", category: "community" },
  { en: "original", zh: "原本的", category: "community" },
  { en: "understandable", zh: "可以理解的", category: "community" },
  { en: "laminate", zh: "复合地板", category: "community" },
  { en: "coming together", zh: "逐渐成形", category: "community" },
  { en: "beautifully", zh: "漂亮地", category: "community" },
  { en: "furniture", zh: "家具", category: "community" },
  { en: "painted", zh: "刷过漆的", category: "community" },
  { en: "taping", zh: "贴胶带", category: "community" },
  { en: "edges", zh: "边缘", category: "community" },
  { en: "coats", zh: "涂层（复数）", category: "community" },
  { en: "even", zh: "均匀的", category: "community" },
  { en: "crib", zh: "婴儿床", category: "community" },
  { en: "flat", zh: "扁平的", category: "community" },
  { en: "instruction manual", zh: "说明书", category: "community" },
  { en: "piece", zh: "部件", category: "community" },
  { en: "heavier", zh: "更重的", category: "community" },
  { en: "lift", zh: "抬起", category: "community" },
  { en: "screw", zh: "螺丝", category: "community" },
  { en: "tightened", zh: "拧紧的", category: "community" },
  { en: "double-check", zh: "再检查一遍", category: "community" },
  { en: "blackout curtains", zh: "遮光窗帘", category: "community" },
  { en: "nap", zh: "打盹，午睡", category: "community" },
  { en: "rod", zh: "窗帘杆", category: "community" },
  { en: "steady", zh: "稳定的", category: "community" },
  { en: "block", zh: "阻挡", category: "community" },
  { en: "walkthrough", zh: "验收，走查", category: "community" },
  { en: "noticed", zh: "注意到了", category: "community" },
  { en: "issues", zh: "问题", category: "community" },
  { en: "dried", zh: "干了的", category: "community" },
  { en: "turned out", zh: "结果是", category: "community" },
  { en: "trusting", zh: "信任", category: "community" },
  { en: "project", zh: "项目", category: "community" },
  { en: "result", zh: "结果", category: "community" },
  { en: "finished", zh: "完工的", category: "community" },
  { en: "changed", zh: "变化了", category: "community" },
  { en: "feel real", zh: "感觉真实", category: "community" },
  { en: "parents", zh: "父母", category: "community" },
  { en: "toys", zh: "玩具", category: "community" }
);
