// 内容数据层：第八十章，紧接第七十九章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人去水族馆度过了一个周末。全新词汇领域：
// 海洋生物/触摸池/水母展区/喂食表演。

GAME_CONTENT.scenes.push(
  {
    id: "planning-the-aquarium-visit",
    transition: { en: "They plan a weekend trip to the city aquarium.", zh: "他们计划周末去市里的水族馆玩。" },
    title: "Planning the Aquarium Visit",
    subtitle: "家里 · 计划水族馆之行",
    avatar: "🐠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Has our toddler ever seen a real shark before?", zh: "我们家孩子见过真正的鲨鱼吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They've never seen one, only in picture books.", zh: "他们从没见过，只在绘本里看过。", correct: true, xp: 10 },
          { text: "They've seen sharks every single week this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They've never seen one, only in picture books.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This aquarium has a touch tank for kids.", zh: "这家水族馆有个给孩子准备的触摸池。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds exciting, they'll love touching things.", zh: "这听起来很有意思，他们会喜欢摸东西的。", correct: true, xp: 10 },
          { text: "That sounds unsanitary, let's avoid that area.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds exciting, they'll love touching things.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's go early to beat the weekend crowds.", zh: "我们早点去，避开周末的人流吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's leave right when it opens.", zh: "好主意，我们开门就去吧。", correct: true, xp: 10 },
          { text: "Let's just go in the middle of the afternoon.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's leave right when it opens.",
        next: null
      }
    }
  },
  {
    id: "the-shark-tunnel",
    transition: { en: "They walk through a glass tunnel surrounded by swimming sharks.", zh: "他们走过一条玻璃隧道，四周环绕着游动的鲨鱼。" },
    title: "The Shark Tunnel",
    subtitle: "水族馆 · 鲨鱼隧道",
    avatar: "🦈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These sharks are closer than I ever expected to get.", zh: "这些鲨鱼离得比我曾经预想的要近得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, this glass is doing a lot of work.", zh: "确实是，这玻璃真是起到了大作用。", correct: true, xp: 10 },
          { text: "They aren't, this glass feels far too thin.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, this glass is doing a lot of work.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look up, there's one swimming right above us!", zh: "往上看，有一条就在我们头顶上游着！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I see it, this is honestly incredible.", zh: "我看到了，这真的太震撼了。", correct: true, xp: 10 },
          { text: "I don't see anything up there at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I see it, this is honestly incredible.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Their eyes are wider than I've ever seen them.", zh: "他们的眼睛睁得比我以前见过的任何时候都大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, this is pure wonder for them.", zh: "确实如此，这对他们来说完全是种惊奇。", correct: true, xp: 10 },
          { text: "They really aren't, they look completely bored.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, this is pure wonder for them.",
        next: null
      }
    }
  },
  {
    id: "the-touch-tank",
    transition: { en: "At the touch tank, they gently feel starfish and sea cucumbers.", zh: "在触摸池，他们轻轻触摸了海星和海参。" },
    title: "The Touch Tank",
    subtitle: "水族馆 · 触摸池",
    avatar: "⭐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you use just two fingers to touch it gently?", zh: "你能只用两根手指轻轻摸它吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, look how carefully they're doing it.", zh: "他们能做到，看他们摸得多小心。", correct: true, xp: 10 },
          { text: "They can't, they keep grabbing everything roughly.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, look how carefully they're doing it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This starfish feels rougher than I expected it to feel.", zh: "这只海星摸起来比我预想的要粗糙。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I thought they'd feel much smoother.", zh: "确实是，我以为会摸起来更光滑一些。", correct: true, xp: 10 },
          { text: "Texture doesn't matter, let's just move on.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I thought they'd feel much smoother.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please always keep sea creatures underwater while touching.", zh: "触摸时请一定要让海洋生物一直待在水下。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Understood, we'll keep our hands in the water.", zh: "明白了，我们会把手一直放在水里的。", correct: true, xp: 10 },
          { text: "Sorry, we'd rather lift them out to look closer.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Understood, we'll keep our hands in the water.",
        next: null
      }
    }
  },
  {
    id: "the-jellyfish-exhibit",
    transition: { en: "A glowing jellyfish exhibit captivates everyone in the room.", zh: "一个发光的水母展区吸引了房间里所有人的目光。" },
    title: "The Jellyfish Exhibit",
    subtitle: "水族馆 · 水母展区",
    avatar: "🎐",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These jellyfish move more gracefully than anything I've ever seen.", zh: "这些水母移动的姿态比我见过的任何东西都要优雅。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really do, it's almost hypnotic to watch.", zh: "确实如此，看着几乎有种催眠的感觉。", correct: true, xp: 10 },
          { text: "They really don't, they just float around aimlessly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really do, it's almost hypnotic to watch.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This tank is glowing brighter than the last one we saw.", zh: "这个水箱发光比我们看过的上一个要更亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, the colors keep shifting too.", zh: "确实是，颜色也一直在变化。", correct: true, xp: 10 },
          { text: "It isn't, this tank looks completely dark.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, the colors keep shifting too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's sit here for a minute and just watch.", zh: "我们在这儿坐一会儿，静静看着吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this is oddly relaxing.", zh: "好啊，这莫名地让人很放松。", correct: true, xp: 10 },
          { text: "Let's just rush through to the next exhibit.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this is oddly relaxing.",
        next: null
      }
    }
  },
  {
    id: "the-penguin-feeding",
    transition: { en: "A keeper announces it's almost time for penguin feeding.", zh: "一位饲养员宣布快到企鹅喂食的时间了。" },
    title: "The Penguin Feeding",
    subtitle: "水族馆 · 企鹅喂食",
    avatar: "🐧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "These penguins are noisier than I expected them to be.", zh: "这些企鹅比我预想的要更吵闹。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, but it's honestly kind of charming.", zh: "确实是，不过说实话还挺有魅力的。", correct: true, xp: 10 },
          { text: "They aren't, they're completely silent right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, but it's honestly kind of charming.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This one is waddling faster than the others toward the fish.", zh: "这只朝着鱼摇摇摆摆走得比其他企鹅要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that one is clearly the hungriest.", zh: "确实是，那只显然是最饿的。", correct: true, xp: 10 },
          { text: "It isn't, all of them are moving at the same speed.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that one is clearly the hungriest.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Our toddler is laughing harder than I've ever heard them laugh.", zh: "我们家孩子笑得比我听过的任何时候都要大声。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, this is the best part of the day.", zh: "确实如此，这是今天最棒的部分。", correct: true, xp: 10 },
          { text: "They really aren't, they seem completely uninterested.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, this is the best part of the day.",
        next: null
      }
    }
  },
  {
    id: "a-tired-toddler",
    transition: { en: "By early afternoon, their toddler is fading fast.", zh: "到了下午早些时候，他们家孩子明显开始撑不住了。" },
    title: "A Tired Toddler",
    subtitle: "水族馆 · 疲惫的孩子",
    avatar: "😴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're getting sleepier than I expected this early.", zh: "才这么早他们就比我预想的要困了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, all this excitement wore them out.", zh: "确实是，今天这些兴奋的活动把他们累坏了。", correct: true, xp: 10 },
          { text: "They aren't, they're wide awake and full of energy.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, all this excitement wore them out.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we take a break in the café for a while?", zh: "我们要不要在咖啡厅休息一会儿？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's rest and get them a snack.", zh: "好，我们休息一下，给他们买点零食吧。", correct: true, xp: 10 },
          { text: "No, let's keep pushing through the whole aquarium.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's rest and get them a snack.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's save the rest of the aquarium for another visit.", zh: "剩下的部分我们留到下次再来看吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, there's no need to rush today.", zh: "好啊，今天不用赶时间。", correct: true, xp: 10 },
          { text: "Let's push through no matter how tired they are.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, there's no need to rush today.",
        next: null
      }
    }
  },
  {
    id: "the-gift-shop",
    transition: { en: "On the way out, they stop by the gift shop for a souvenir.", zh: "出门前，他们顺路去了礼品店买纪念品。" },
    title: "The Gift Shop",
    subtitle: "水族馆 · 礼品店",
    avatar: "🧸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which stuffed animal do you want to bring home?", zh: "你想带哪个毛绒玩具回家？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They're pointing at the little shark, of course.", zh: "他们当然是指着那只小鲨鱼啦。", correct: true, xp: 10 },
          { text: "They don't want any toy at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → They're pointing at the little shark, of course.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This shark toy is softer than I expected it to be.", zh: "这只鲨鱼玩具比我预想的要软。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, perfect for cuddling at bedtime.", zh: "确实是，睡前抱着正合适。", correct: true, xp: 10 },
          { text: "Softness doesn't matter, let's grab something else.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, perfect for cuddling at bedtime.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will be a nice reminder of today.", zh: "这会是今天的一个不错的纪念。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It will, I hope they keep it forever.", zh: "会的，我希望他们能一直留着。", correct: true, xp: 10 },
          { text: "It won't, toys like this get lost immediately.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It will, I hope they keep it forever.",
        next: null
      }
    }
  },
  {
    id: "driving-home-sleepy",
    transition: { en: "Their toddler drifts off within minutes of leaving the parking lot.", zh: "离开停车场没几分钟，孩子就睡着了。" },
    title: "Driving Home Sleepy",
    subtitle: "车上 · 昏昏欲睡地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They fell asleep faster than I've ever seen them fall asleep.", zh: "他们睡着的速度比我见过的任何时候都要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a good sign, today really wore them out.", zh: "这是个好迹象，今天确实把他们累坏了。", correct: true, xp: 10 },
          { text: "That's odd, they usually fight sleep for hours.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a good sign, today really wore them out.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Today turned out more magical than I ever expected it to be.", zh: "今天比我曾经想象的要更加神奇。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, watching them discover it all was priceless.", zh: "确实如此，看着他们发现这一切真是无价的。", correct: true, xp: 10 },
          { text: "It really didn't, today felt pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, watching them discover it all was priceless.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many times we come back, this will always feel special.", zh: "不管我们再来多少次，这里都永远会感觉特别。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many times, this place will feel special.", zh: "不管多少次，这里都会让人觉得特别。", correct: true, xp: 10 },
          { text: "No matter how many times, it'll get boring eventually.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many times, this place will feel special.",
        next: null
      }
    }
  },
  {
    id: "a-drawing-of-the-day",
    transition: { en: "That evening, their toddler draws a wobbly picture of a shark.", zh: "那天晚上，孩子画了一幅歪歪扭扭的鲨鱼画。" },
    title: "A Drawing of the Day",
    subtitle: "家里 · 一天的画作",
    avatar: "🖍️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe they remembered every detail like that?", zh: "你能相信他们把每个细节都记得这么清楚吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, kids remember more than we think.", zh: "我真不敢相信，孩子记住的比我们想的要多。", correct: true, xp: 10 },
          { text: "I can believe it, this drawing shows nothing at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I honestly can't, kids remember more than we think.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This drawing means more to me than any photo we took today.", zh: "这幅画对我的意义比我们今天拍的任何照片都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I want to keep this one forever.", zh: "确实如此，我想把这幅永远留着。", correct: true, xp: 10 },
          { text: "It doesn't, photos are always more valuable.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I want to keep this one forever.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's put this on the fridge where we'll see it every day.", zh: "我们把它贴在冰箱上，这样每天都能看到。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this deserves a place of honor.", zh: "好啊，这值得一个特别的位置。", correct: true, xp: 10 },
          { text: "Let's just put it in a drawer somewhere.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this deserves a place of honor.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "aquarium", zh: "水族馆", category: "community" },
  { en: "shark", zh: "鲨鱼", category: "community" },
  { en: "picture books", zh: "绘本（复数）", category: "community" },
  { en: "touch tank", zh: "触摸池", category: "community" },
  { en: "unsanitary", zh: "不卫生的", category: "community" },
  { en: "beat the crowds", zh: "避开人流", category: "community" },
  { en: "glass tunnel", zh: "玻璃隧道", category: "community" },
  { en: "swimming", zh: "游动的", category: "community" },
  { en: "look up", zh: "往上看", category: "community" },
  { en: "wonder", zh: "惊奇", category: "community" },
  { en: "starfish", zh: "海星", category: "community" },
  { en: "sea cucumbers", zh: "海参（复数）", category: "community" },
  { en: "gently", zh: "轻轻地", category: "community" },
  { en: "rougher", zh: "更粗糙的（rough 比较级）", category: "community" },
  { en: "texture", zh: "质感", category: "community" },
  { en: "sea creatures", zh: "海洋生物", category: "community" },
  { en: "underwater", zh: "水下", category: "community" },
  { en: "jellyfish", zh: "水母", category: "community" },
  { en: "exhibit", zh: "展区", category: "community" },
  { en: "captivates", zh: "吸引住", category: "community" },
  { en: "gracefully", zh: "优雅地", category: "community" },
  { en: "hypnotic", zh: "催眠般的", category: "community" },
  { en: "glowing", zh: "发光的", category: "community" },
  { en: "shifting", zh: "变化中的", category: "community" },
  { en: "penguin", zh: "企鹅", category: "community" },
  { en: "keeper", zh: "饲养员", category: "community" },
  { en: "noisier", zh: "更吵闹的（noisy 比较级）", category: "community" },
  { en: "charming", zh: "有魅力的", category: "community" },
  { en: "waddling", zh: "摇摇摆摆走", category: "community" },
  { en: "hungriest", zh: "最饿的（hungry 最高级）", category: "community" },
  { en: "sleepier", zh: "更困的（sleepy 比较级）", category: "community" },
  { en: "wore them out", zh: "把他们累坏了", category: "community" },
  { en: "café", zh: "咖啡厅", category: "community" },
  { en: "snack", zh: "零食", category: "community" },
  { en: "another visit", zh: "下一次到访", category: "community" },
  { en: "gift shop", zh: "礼品店", category: "community" },
  { en: "souvenir", zh: "纪念品", category: "community" },
  { en: "stuffed animal", zh: "毛绒玩具", category: "community" },
  { en: "cuddling", zh: "抱着", category: "community" },
  { en: "bedtime", zh: "睡前时间", category: "community" },
  { en: "reminder", zh: "提醒物，纪念", category: "community" },
  { en: "parking lot", zh: "停车场", category: "community" },
  { en: "fell asleep", zh: "睡着了", category: "community" },
  { en: "magical", zh: "神奇的", category: "community" },
  { en: "discover", zh: "发现", category: "community" },
  { en: "place of honor", zh: "特别的位置", category: "community" }
);
