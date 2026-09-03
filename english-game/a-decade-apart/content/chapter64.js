// 内容数据层：第六十四章，紧接第六十三章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一位邻居搬家，两人决定收养她的猫，给家里的狗添个伴。全新词汇领域：
// 猫咪习性/猫狗磨合/抓板猫砂/宠物用品采购。

GAME_CONTENT.scenes.push(
  {
    id: "the-neighbors-news",
    transition: { en: "A neighbor mentions she's moving and can't take her cat.", zh: "一位邻居提到她要搬家，没法带走她的猫。" },
    title: "The Neighbor's News",
    subtitle: "门口 · 邻居的消息",
    avatar: "🐱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm moving overseas, and I can't bring my cat.", zh: "我要搬到国外去，没办法带上我的猫。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can't imagine how hard that must be.", zh: "我无法想象那该有多难。", correct: true, xp: 10 },
          { text: "I can imagine that being pretty easy, actually.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/共情 → I can't imagine how hard that must be.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Would you two ever consider taking her in?", zh: "你们俩会考虑收养她吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We'd need to talk it over, but maybe.", zh: "我们需要商量一下，但也许可以。", correct: true, xp: 10 },
          { text: "Absolutely not, we already have enough pets.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We'd need to talk it over, but maybe.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "She's such a gentle, calm cat, honestly.", zh: "说实话，她是一只非常温和安静的猫。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, especially with a toddler around.", zh: "这挺让人放心的，尤其是家里有个学步的孩子。", correct: true, xp: 10 },
          { text: "That's concerning, gentle cats sound suspicious.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, especially with a toddler around.",
        next: null
      }
    }
  },
  {
    id: "talking-it-over",
    transition: { en: "That night, they discuss whether to take in the cat.", zh: "那天晚上，他们讨论要不要收养这只猫。" },
    title: "Talking It Over",
    subtitle: "家里 · 商量决定",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you think our dog would get along with a cat?", zh: "你觉得我们家的狗会和猫相处得来吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I think so, he's pretty calm with new animals.", zh: "我觉得可以，他对新动物一向挺淡定的。", correct: true, xp: 10 },
          { text: "No, he's never met an animal he liked.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I think so, he's pretty calm with new animals.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Two pets will be more work than one.", zh: "养两只宠物比养一只要更费心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It will, but I think we can handle it.", zh: "确实会，但我觉得我们能应付得来。", correct: true, xp: 10 },
          { text: "It won't, two pets are always easier than one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It will, but I think we can handle it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's say yes, she deserves a good home.", zh: "我们答应吧，她值得拥有一个好归宿。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do it, we'll figure out the details.", zh: "好，我们就这么做，细节再想办法。", correct: true, xp: 10 },
          { text: "Let's say no, this feels like too much.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do it, we'll figure out the details.",
        next: null
      }
    }
  },
  {
    id: "shopping-for-cat-supplies",
    transition: { en: "They shop for everything a cat might need.", zh: "他们采购了猫咪可能需要的一切用品。" },
    title: "Shopping for Cat Supplies",
    subtitle: "宠物店 · 采购猫咪用品",
    avatar: "🛒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What does a cat actually need that a dog doesn't?", zh: "猫真正需要而狗不需要的东西有什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "A litter box and a scratching post, mainly.", zh: "主要是猫砂盆和抓板。", correct: true, xp: 10 },
          { text: "Cats and dogs need exactly the same things.", correct: false }
        ],
        hintOnWrong: "wh-问题回答清单 → A litter box and a scratching post, mainly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This litter box is bigger than the one she has now.", zh: "这个猫砂盆比她现在用的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's fine, more space should be more comfortable.", zh: "没关系，空间更大应该会更舒服。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's get the tiniest one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's fine, more space should be more comfortable.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab a scratching post before we forget.", zh: "我们趁还没忘记，赶紧拿个抓板吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, that'll protect our furniture too.", zh: "好主意，这样也能保护我们的家具。", correct: true, xp: 10 },
          { text: "Let's skip that, furniture doesn't matter much.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, that'll protect our furniture too.",
        next: null
      }
    }
  },
  {
    id: "bringing-the-cat-home",
    transition: { en: "The neighbor drops off the cat, along with her favorite toys.", zh: "邻居送来了猫咪，还带了她最喜欢的玩具。" },
    title: "Bringing the Cat Home",
    subtitle: "家里 · 接猫回家",
    avatar: "🐈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "She seems more nervous than I expected in a new place.", zh: "在新地方，她看起来比我预想的更紧张。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's normal, let's give her some quiet space.", zh: "这很正常，我们给她留点安静的空间吧。", correct: true, xp: 10 },
          { text: "That's odd, cats should feel comfortable instantly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's normal, let's give her some quiet space.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we keep the dog in another room for now?", zh: "我们现在要不要把狗关在另一个房间？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's introduce them slowly, over a few days.", zh: "好，我们花几天慢慢介绍他们认识吧。", correct: true, xp: 10 },
          { text: "No, let's just let them meet right away.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's introduce them slowly, over a few days.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's set up a cozy corner just for her.", zh: "我们给她布置一个温馨的小角落吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, somewhere she can hide if needed.", zh: "好啊，找个她需要时能躲起来的地方。", correct: true, xp: 10 },
          { text: "Let's not bother, she can just sleep anywhere.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, somewhere she can hide if needed.",
        next: null
      }
    }
  },
  {
    id: "the-first-sniff",
    transition: { en: "After a few days, they let the two animals meet through a cracked door.", zh: "几天后，他们让两只动物隔着一道门缝初次见面。" },
    title: "The First Sniff",
    subtitle: "家里 · 第一次接触",
    avatar: "🐕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is he being gentle, or is he too excited?", zh: "他是在温柔相待，还是太兴奋了？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "He's being gentle, actually, tail wagging slowly.", zh: "他其实很温柔，尾巴慢慢摇着。", correct: true, xp: 10 },
          { text: "He's being way too rough, let's separate them.", correct: false }
        ],
        hintOnWrong: "肯定回答 → He's being gentle, actually, tail wagging slowly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "She's calmer about this than I thought she'd be.", zh: "她对这件事的镇定程度比我预想的要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "She really is, this is going better than expected.", zh: "确实如此，这比预想的顺利多了。", correct: true, xp: 10 },
          { text: "She really isn't, she looks terrified right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → She really is, this is going better than expected.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep these short introductions going every day.", zh: "我们每天都继续这样短暂的见面吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, slow and steady seems to be working.", zh: "好啊，慢慢来的方式看起来很有效。", correct: true, xp: 10 },
          { text: "Let's just let them live together immediately.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, slow and steady seems to be working.",
        next: null
      }
    }
  },
  {
    id: "a-hiss-and-a-bark",
    transition: { en: "One introduction goes sideways with a hiss and a bark.", zh: "有一次见面出了岔子，一声嘶叫伴着一声犬吠。" },
    title: "A Hiss and a Bark",
    subtitle: "家里 · 一次小冲突",
    avatar: "😾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That escalated more quickly than I expected.", zh: "这次升级的速度比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, let's give them both some space now.", zh: "确实是，我们现在给他们俩都留点空间吧。", correct: true, xp: 10 },
          { text: "It didn't, that was actually pretty calm.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, let's give them both some space now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Setbacks like this are more common than people admit.", zh: "像这样的小挫折比大家承认的要常见得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's reassuring, we won't panic about it then.", zh: "这让人安心，那我们就不会为此惊慌了。", correct: true, xp: 10 },
          { text: "That's alarming, let's give up on this entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's reassuring, we won't panic about it then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's slow things down and start over tomorrow.", zh: "我们放慢速度，明天重新开始吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, patience matters more than speed here.", zh: "好主意，在这件事上耐心比速度更重要。", correct: true, xp: 10 },
          { text: "Let's push forward faster instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, patience matters more than speed here.",
        next: null
      }
    }
  },
  {
    id: "small-progress",
    transition: { en: "A week later, the two animals nap in the same room.", zh: "一周后，两只动物在同一个房间里打盹了。" },
    title: "Small Progress",
    subtitle: "家里 · 小小的进步",
    avatar: "😺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe they're actually in the same room?", zh: "你能相信他们居然待在同一个房间了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't believe it, this is huge progress.", zh: "我真不敢相信，这是很大的进步。", correct: true, xp: 10 },
          { text: "I can believe it, this was always going to happen.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I honestly can't believe it, this is huge progress.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're getting more comfortable around each other every day.", zh: "他们每天都对彼此更自在一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, patience is finally paying off.", zh: "确实如此，耐心终于有了回报。", correct: true, xp: 10 },
          { text: "They really aren't, nothing has changed at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, patience is finally paying off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This slow approach was clearly the right call.", zh: "这种循序渐进的方式显然是正确的做法。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really was, I'm glad we didn't rush it.", zh: "确实如此，很高兴我们没有操之过急。", correct: true, xp: 10 },
          { text: "It really wasn't, we should have rushed it more.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really was, I'm glad we didn't rush it.",
        next: null
      }
    }
  },
  {
    id: "the-toddler-meets-the-cat",
    transition: { en: "Their toddler carefully reaches out to pet the cat for the first time.", zh: "他们的孩子第一次小心翼翼地伸手摸猫。" },
    title: "The Toddler Meets the Cat",
    subtitle: "家里 · 孩子初见猫咪",
    avatar: "👶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you pet her gently, just like this?", zh: "你能像这样轻轻地摸她吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, look how careful they're being.", zh: "他们能做到，看他们多小心。", correct: true, xp: 10 },
          { text: "They can't, they're being far too rough.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, look how careful they're being.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "She's letting the toddler pet her more than I expected.", zh: "她让孩子摸她的时间比我预想的要长。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "She really is, she's more patient than I thought.", zh: "确实如此，她比我想的更有耐心。", correct: true, xp: 10 },
          { text: "She really isn't, she's already run away twice.", correct: false }
        ],
        hintOnWrong: "回应比较句 → She really is, she's more patient than I thought.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This moment feels more precious than I could have imagined.", zh: "这一刻感觉比我能想象的还要珍贵。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I want to remember this forever.", zh: "确实如此，我想永远记住这一刻。", correct: true, xp: 10 },
          { text: "It doesn't, this moment feels pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I want to remember this forever.",
        next: null
      }
    }
  },
  {
    id: "an-unlikely-friendship",
    transition: { en: "Weeks later, the dog and cat nap curled up together.", zh: "几周后，狗和猫蜷在一起打起了盹。" },
    title: "An Unlikely Friendship",
    subtitle: "家里 · 意外的友谊",
    avatar: "🥰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look at them, they're actually curled up together!", zh: "快看他们，他们居然蜷在一起了！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm getting my phone, I have to capture this.", zh: "我去拿手机，我必须拍下这一幕。", correct: true, xp: 10 },
          { text: "I'm not surprised, animals never get along.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I'm getting my phone, I have to capture this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These two have become closer than we ever expected.", zh: "他们俩变得比我们预想的还要亲密。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really have, and it's honestly adorable.", zh: "确实如此，说实话真的太可爱了。", correct: true, xp: 10 },
          { text: "They really haven't, they still avoid each other.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really have, and it's honestly adorable.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This house feels more like a real home with both of them here.", zh: "有了他们俩，这个家感觉更像一个真正的家了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, this family feels complete now.", zh: "确实如此，这个家庭现在感觉完整了。", correct: true, xp: 10 },
          { text: "It doesn't, nothing feels different at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, this family feels complete now.",
        next: null
      }
    }
  },
  {
    id: "a-goodbye-message",
    transition: { en: "They send a photo update to their former neighbor overseas.", zh: "他们给远在海外的前邻居发去了一张近照。" },
    title: "A Goodbye Message",
    subtitle: "手机 · 报平安",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "She's happier here than I ever could have made her.", zh: "她在这儿比我曾经能给她的还要幸福。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That means so much, thank you for trusting us.", zh: "这句话对我们意义重大，谢谢你信任我们。", correct: true, xp: 10 },
          { text: "That's a strange thing to say, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That means so much, thank you for trusting us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Thank you both for giving her such a wonderful life.", zh: "谢谢你们俩给了她如此美好的生活。" },
        skill: "community",
        grammarTag: "courtesy",
        choices: [
          { text: "Of course, she's brought us so much joy too.", zh: "不客气，她也给我们带来了很多快乐。", correct: true, xp: 10 },
          { text: "Of course, though she hasn't really added much.", correct: false }
        ],
        hintOnWrong: "礼貌回应 → Of course, she's brought us so much joy too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how far away you are, she'll always be part of your story too.", zh: "不管你在多远的地方，她也永远是你人生故事的一部分。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how far, we'll send updates often.", zh: "不管多远，我们都会经常给你发近况。", correct: true, xp: 10 },
          { text: "No matter how far, we'll probably forget about it.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how far, we'll send updates often.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "overseas", zh: "海外", category: "community" },
  { en: "take in", zh: "收养", category: "community" },
  { en: "talk it over", zh: "商量", category: "community" },
  { en: "gentle", zh: "温和的", category: "community" },
  { en: "calm", zh: "冷静的，安静的", category: "community" },
  { en: "get along", zh: "相处融洽", category: "community" },
  { en: "handle it", zh: "应付得来", category: "community" },
  { en: "deserves", zh: "值得拥有", category: "community" },
  { en: "cat supplies", zh: "猫咪用品", category: "community" },
  { en: "litter box", zh: "猫砂盆", category: "community" },
  { en: "scratching post", zh: "抓板", category: "community" },
  { en: "furniture", zh: "家具", category: "community" },
  { en: "drops off", zh: "送来", category: "community" },
  { en: "favorite toys", zh: "最喜欢的玩具", category: "community" },
  { en: "quiet space", zh: "安静的空间", category: "community" },
  { en: "introduce", zh: "介绍认识", category: "community" },
  { en: "cozy corner", zh: "温馨的小角落", category: "community" },
  { en: "sniff", zh: "闻，嗅", category: "community" },
  { en: "cracked door", zh: "门缝", category: "community" },
  { en: "tail wagging", zh: "摇尾巴", category: "community" },
  { en: "hiss", zh: "嘶叫", category: "community" },
  { en: "bark", zh: "犬吠", category: "community" },
  { en: "escalated", zh: "升级了", category: "community" },
  { en: "setbacks", zh: "小挫折（复数）", category: "community" },
  { en: "admit", zh: "承认", category: "community" },
  { en: "panic", zh: "惊慌", category: "community" },
  { en: "slow things down", zh: "放慢速度", category: "community" },
  { en: "start over", zh: "重新开始", category: "community" },
  { en: "nap", zh: "打盹", category: "community" },
  { en: "huge progress", zh: "很大的进步", category: "community" },
  { en: "paying off", zh: "有了回报", category: "community" },
  { en: "the right call", zh: "正确的决定", category: "community" },
  { en: "pet", zh: "抚摸", category: "community" },
  { en: "precious", zh: "珍贵的", category: "community" },
  { en: "curled up", zh: "蜷缩在一起", category: "community" },
  { en: "capture", zh: "捕捉，拍下", category: "community" },
  { en: "closer", zh: "更亲密的（close 比较级）", category: "community" },
  { en: "adorable", zh: "可爱迷人的", category: "community" },
  { en: "complete", zh: "完整的", category: "community" },
  { en: "photo update", zh: "近照更新", category: "community" },
  { en: "former neighbor", zh: "前邻居", category: "community" },
  { en: "trusting", zh: "信任", category: "community" },
  { en: "brought joy", zh: "带来了快乐", category: "community" },
  { en: "part of your story", zh: "你人生故事的一部分", category: "community" },
  { en: "updates", zh: "近况（复数）", category: "community" }
);
