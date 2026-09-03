// 内容数据层：第七十八章，紧接第七十七章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人报名了一堂周末摄影漫步课，学习用相机捕捉城市风景。
// 全新词汇领域：光圈快门/构图取景/自然光线/照片修图。

GAME_CONTENT.scenes.push(
  {
    id: "signing-up-for-photo-walk",
    transition: { en: "A local photographer offers a beginner walk-and-shoot workshop.", zh: "一位本地摄影师开设了一堂适合初学者的摄影漫步课。" },
    title: "Signing Up for Photo Walk",
    subtitle: "手机 · 报名摄影漫步课",
    avatar: "📷",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever used a camera besides your phone?", zh: "除了手机你用过相机吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never once used a real camera before.", zh: "我以前从没用过真正的相机。", correct: true, xp: 10 },
          { text: "I've used one professionally for many years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never once used a real camera before.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This workshop lends out cameras for the day.", zh: "这堂课当天会提供相机借用。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's convenient, we don't need to buy anything.", zh: "这挺方便的，我们不用买任何东西。", correct: true, xp: 10 },
          { text: "That's unnecessary, phone cameras are always better.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's convenient, we don't need to buy anything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's sign up for the Sunday morning session.", zh: "我们报周日上午的场次吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, morning light sounds beautiful.", zh: "好啊，早晨的光线听起来很美。", correct: true, xp: 10 },
          { text: "Let's just skip mornings and sleep in instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, morning light sounds beautiful.",
        next: null
      }
    }
  },
  {
    id: "picking-up-the-cameras",
    transition: { en: "They collect borrowed cameras and get a quick orientation.", zh: "他们领取了借用的相机，并接受了简短的入门讲解。" },
    title: "Picking Up the Cameras",
    subtitle: "集合点 · 领取相机",
    avatar: "🎒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This camera is heavier than I expected it to be.", zh: "这台相机比我预想的要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I'll need to hold it with both hands.", zh: "确实是，我得用两只手拿着了。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's just hold it loosely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I'll need to hold it with both hands.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you find the shutter button on top?", zh: "你能在顶部找到快门按钮吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, right here where my finger naturally rests.", zh: "可以，就在我手指自然放的地方。", correct: true, xp: 10 },
          { text: "I can't, this camera has no buttons at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, right here where my finger naturally rests.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please keep the camera strap around your neck at all times.", zh: "请一直把相机带挂在脖子上。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, I'll keep it on the whole time.", zh: "明白了，我会一直挂着的。", correct: true, xp: 10 },
          { text: "Sorry, straps seem uncomfortable and unnecessary.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, I'll keep it on the whole time.",
        next: null
      }
    }
  },
  {
    id: "learning-the-basics",
    transition: { en: "The instructor explains a few basic camera settings.", zh: "讲师讲解了几个基本的相机设置。" },
    title: "Learning the Basics",
    subtitle: "公园 · 学习基础知识",
    avatar: "🧑‍🏫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "A wider aperture lets in more light than a narrow one.", zh: "更大的光圈比更小的光圈能进更多光。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, useful for darker scenes.", zh: "有道理，在光线暗的场景下很有用。", correct: true, xp: 10 },
          { text: "That's odd, aperture never affects light at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, useful for darker scenes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A faster shutter speed freezes motion more than a slow one.", zh: "更快的快门速度比慢速快门更能定格动态画面。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's helpful, good for photographing our toddler.", zh: "这很有帮助，很适合给我们孩子拍照。", correct: true, xp: 10 },
          { text: "Shutter speed doesn't matter for that at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's helpful, good for photographing our toddler.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's practice adjusting these settings before we start walking.", zh: "开始走之前我们先练习一下调整这些设置吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's get comfortable with the dials.", zh: "好主意，我们先熟悉一下这些旋钮。", correct: true, xp: 10 },
          { text: "Let's skip that and just figure it out later.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's get comfortable with the dials.",
        next: null
      }
    }
  },
  {
    id: "framing-the-first-shot",
    transition: { en: "They pause at a fountain to compose their first real photo.", zh: "他们在一座喷泉旁停下，构图拍下第一张真正的照片。" },
    title: "Framing the First Shot",
    subtitle: "公园 · 构图第一张照片",
    avatar: "⛲",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Try placing the fountain slightly off-center.", zh: "试着把喷泉放在稍微偏离中心的位置。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'll shift it a little to the left.", zh: "好的，我会把它往左边挪一点。", correct: true, xp: 10 },
          { text: "Sorry, centering everything feels more natural.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'll shift it a little to the left.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This angle looks better than the one from straight ahead.", zh: "这个角度比正面拍要好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, angles really do change everything.", zh: "确实是，角度真的能改变一切。", correct: true, xp: 10 },
          { text: "It doesn't, angles never actually matter much.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, angles really do change everything.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a few shots and compare them after.", zh: "我们多拍几张，之后再比较一下吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, we can pick the best one later.", zh: "好啊，之后可以选出最好的那张。", correct: true, xp: 10 },
          { text: "Let's just take one photo and move on.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, we can pick the best one later.",
        next: null
      }
    }
  },
  {
    id: "chasing-the-light",
    transition: { en: "The instructor points out how golden the morning light looks.", zh: "讲师指出早晨的光线显得多么金黄。" },
    title: "Chasing the Light",
    subtitle: "公园 · 追逐光线",
    avatar: "🌅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This morning light is softer than midday sun.", zh: "这清晨的光线比正午的阳光更柔和。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that's why photographers love this time.", zh: "确实是，这也是摄影师喜欢这个时段的原因。", correct: true, xp: 10 },
          { text: "Light doesn't matter, let's shoot at noon instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that's why photographers love this time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you position yourself so the light hits your subject?", zh: "你能站个位置，让光线照到拍摄对象上吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me move a little to the right.", zh: "可以，我往右边挪一点。", correct: true, xp: 10 },
          { text: "I can't, positioning myself sounds too complicated.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me move a little to the right.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This shot came out better than I expected it would.", zh: "这张照片拍出来比我预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, look at how the light glows.", zh: "确实如此，看看这光线多么柔美地发亮。", correct: true, xp: 10 },
          { text: "It really didn't, this photo looks completely blurry.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, look at how the light glows.",
        next: null
      }
    }
  },
  {
    id: "photographing-strangers",
    transition: { en: "The instructor encourages the group to try candid street photography.", zh: "讲师鼓励大家尝试抓拍街头人物。" },
    title: "Photographing Strangers",
    subtitle: "街上 · 抓拍陌生人",
    avatar: "🚶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we ask people before taking their picture?", zh: "拍照之前我们要不要先问一下对方？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's always ask first out of respect.", zh: "好，出于尊重我们总要先问一下。", correct: true, xp: 10 },
          { text: "No, let's just snap photos of anyone we see.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's always ask first out of respect.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more nerve-wracking than I expected it to be.", zh: "这比我预想的要更让人紧张。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but people are usually nicer than we think.", zh: "确实是，但人们通常比我们想的要友善。", correct: true, xp: 10 },
          { text: "It is, so let's just avoid this entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but people are usually nicer than we think.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That baker let us photograph him working, that was lucky.", zh: "那位面包师让我们拍他工作的样子，运气不错。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That was lucky, and honestly a great shot too.", zh: "确实幸运，说实话也是张很棒的照片。", correct: true, xp: 10 },
          { text: "That was unlucky, we should have avoided him.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That was lucky, and honestly a great shot too.",
        next: null
      }
    }
  },
  {
    id: "a-tricky-shot",
    transition: { en: "They struggle to capture a moving bicycle without blur.", zh: "他们努力想拍出一辆移动的自行车却不糊掉。" },
    title: "A Tricky Shot",
    subtitle: "街上 · 棘手的一张照片",
    avatar: "🚴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This shot is trickier than the still photos we took earlier.", zh: "这张照片比我们之前拍的静态照片要棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, moving subjects are a lot harder to capture.", zh: "确实是，移动的对象拍起来难多了。", correct: true, xp: 10 },
          { text: "It isn't, this feels exactly as easy as before.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, moving subjects are a lot harder to capture.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If you use a faster shutter speed, it might freeze better.", zh: "如果你用更快的快门速度，可能会定格得更好。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that helps, let's try adjusting it now.", zh: "如果有帮助，我们现在就调整一下试试。", correct: true, xp: 10 },
          { text: "If that helps, let's just leave the settings alone.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that helps, let's try adjusting it now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That's it, sharp and perfectly timed!", zh: "就是这样，清晰又时机完美！" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We actually got it, I'm really proud of that shot.", zh: "我们真的拍到了，我为这张照片感到骄傲。", correct: true, xp: 10 },
          { text: "That's still blurry, let's just give up on this one.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We actually got it, I'm really proud of that shot.",
        next: null
      }
    }
  },
  {
    id: "reviewing-the-photos",
    transition: { en: "Back at the studio, they scroll through everything they captured.", zh: "回到工作室，他们浏览了拍下的所有照片。" },
    title: "Reviewing the Photos",
    subtitle: "工作室 · 回顾照片",
    avatar: "🖥️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We took more photos than I ever thought we would today.", zh: "我们今天拍的照片比我曾经想的要多得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really did, it's hard to pick a favorite.", zh: "确实如此，很难挑出最喜欢的一张。", correct: true, xp: 10 },
          { text: "We really didn't, we barely took any photos.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really did, it's hard to pick a favorite.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This one turned out sharper than I remembered taking it.", zh: "这张比我记忆中拍出来的要清晰。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, this might be my favorite one.", zh: "确实如此，这可能是我最喜欢的一张。", correct: true, xp: 10 },
          { text: "It didn't, this photo looks completely blurry.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, this might be my favorite one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's print our favorites to hang up at home.", zh: "我们把最喜欢的几张洗出来挂在家里吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, that's a lovely idea.", zh: "好啊，这个主意真不错。", correct: true, xp: 10 },
          { text: "Let's just leave them on our phones forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, that's a lovely idea.",
        next: null
      }
    }
  },
  {
    id: "a-new-lens-on-the-city",
    transition: { en: "Walking home, they notice details they'd never seen before.", zh: "走回家的路上，他们注意到了以前从未察觉的细节。" },
    title: "A New Lens on the City",
    subtitle: "街上 · 用新眼光看城市",
    avatar: "🏙️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'm noticing so many details I never saw before.", zh: "我注意到了这么多以前从没发现的细节。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Same here, this city looks different today.", zh: "我也是，今天这座城市看起来不一样了。", correct: true, xp: 10 },
          { text: "I'm not noticing anything different at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → Same here, this city looks different today.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This whole day changed how I see the world around us.", zh: "这一整天改变了我看待周围世界的方式。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really did, in the best possible way.", zh: "确实如此，而且是最好的那种改变。", correct: true, xp: 10 },
          { text: "It really didn't, nothing feels any different.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It really did, in the best possible way.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep taking photos, even without a fancy camera.", zh: "我们要继续拍照，就算没有专业相机也一样。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, our phones will work just fine.", zh: "好啊，我们的手机就够用了。", correct: true, xp: 10 },
          { text: "Let's stop entirely until we buy a real camera.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, our phones will work just fine.",
        next: null
      }
    }
  },
  {
    id: "framing-a-family-portrait",
    transition: { en: "That evening, they use their new skills to frame a family photo.", zh: "那天晚上，他们用新学到的技巧拍了一张全家福。" },
    title: "Framing a Family Portrait",
    subtitle: "家里 · 拍全家福",
    avatar: "👨‍👩‍👧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Let's use natural light from the window instead of the flash.", zh: "我们用窗户的自然光，别用闪光灯吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, natural light looks so much softer.", zh: "好主意，自然光看起来柔和多了。", correct: true, xp: 10 },
          { text: "Let's just use the flash, it's simpler.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, natural light looks so much softer.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This photo turned out warmer than any we've taken before.", zh: "这张照片拍出来的色调比我们以前拍的都要温暖。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I want to frame this one.", zh: "确实如此，我想把这张裱起来。", correct: true, xp: 10 },
          { text: "It really didn't, this photo looks completely cold.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I want to frame this one.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many photos we take, this one might be my favorite.", zh: "不管我们拍多少张照片，这张可能都会是我最喜欢的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many, I feel exactly the same way.", zh: "不管拍多少张，我也有完全一样的感受。", correct: true, xp: 10 },
          { text: "No matter how many, none of them really matter.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many, I feel exactly the same way.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "photographer", zh: "摄影师", category: "community" },
  { en: "walk-and-shoot", zh: "边走边拍", category: "community" },
  { en: "workshop", zh: "工作坊，课程", category: "community" },
  { en: "camera", zh: "相机", category: "community" },
  { en: "lends out", zh: "出借", category: "community" },
  { en: "morning light", zh: "晨光", category: "community" },
  { en: "orientation", zh: "入门讲解", category: "community" },
  { en: "shutter button", zh: "快门按钮", category: "community" },
  { en: "camera strap", zh: "相机带", category: "community" },
  { en: "wider aperture", zh: "更大的光圈", category: "community" },
  { en: "narrow", zh: "窄的，小的", category: "community" },
  { en: "shutter speed", zh: "快门速度", category: "community" },
  { en: "freezes motion", zh: "定格动态画面", category: "community" },
  { en: "photographing", zh: "拍摄", category: "community" },
  { en: "dials", zh: "旋钮（复数）", category: "community" },
  { en: "fountain", zh: "喷泉", category: "community" },
  { en: "compose", zh: "构图", category: "community" },
  { en: "off-center", zh: "偏离中心", category: "community" },
  { en: "shift", zh: "挪动", category: "community" },
  { en: "angle", zh: "角度", category: "community" },
  { en: "straight ahead", zh: "正前方", category: "community" },
  { en: "shots", zh: "照片（复数）", category: "community" },
  { en: "golden light", zh: "金色的光线", category: "community" },
  { en: "midday sun", zh: "正午的阳光", category: "community" },
  { en: "position", zh: "站位，定位", category: "community" },
  { en: "subject", zh: "拍摄对象", category: "community" },
  { en: "glows", zh: "发光", category: "community" },
  { en: "candid", zh: "抓拍的", category: "community" },
  { en: "street photography", zh: "街头摄影", category: "community" },
  { en: "out of respect", zh: "出于尊重", category: "community" },
  { en: "snap", zh: "快速拍摄", category: "community" },
  { en: "baker", zh: "面包师", category: "community" },
  { en: "still photos", zh: "静态照片", category: "community" },
  { en: "moving subjects", zh: "移动的对象", category: "community" },
  { en: "sharp", zh: "清晰的", category: "community" },
  { en: "perfectly timed", zh: "时机完美的", category: "community" },
  { en: "scroll through", zh: "浏览", category: "community" },
  { en: "favorite", zh: "最喜欢的", category: "community" },
  { en: "print", zh: "洗印，打印", category: "community" },
  { en: "lens", zh: "镜头，视角", category: "community" },
  { en: "natural light", zh: "自然光", category: "community" },
  { en: "flash", zh: "闪光灯", category: "community" },
  { en: "warmer", zh: "更温暖的（warm 比较级）", category: "community" },
  { en: "frame", zh: "裱框", category: "community" }
);
