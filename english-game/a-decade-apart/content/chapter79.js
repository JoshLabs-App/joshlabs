// 内容数据层：第七十九章，紧接第七十八章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人尝试了一堂亲子空手道体验课。全新词汇领域：
// 道服腰带/基本招式/鞠躬礼仪/破板测试。

GAME_CONTENT.scenes.push(
  {
    id: "trying-karate",
    transition: { en: "A karate studio nearby offers a free trial class for families.", zh: "附近一家空手道馆提供免费的亲子体验课。" },
    title: "Trying Karate",
    subtitle: "手机 · 尝试空手道",
    avatar: "🥋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you think our toddler is ready for something like this?", zh: "你觉得我们家孩子准备好试这个了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I think so, kids' classes are usually pretty gentle.", zh: "我觉得可以，儿童课程通常都挺温和的。", correct: true, xp: 10 },
          { text: "No, martial arts are only for adults.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I think so, kids' classes are usually pretty gentle.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This studio teaches discipline as much as physical skills.", zh: "这家道馆教纪律的分量不亚于身体技巧。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's appealing, structure could be good for them.", zh: "这挺吸引人的，结构感对他们可能有好处。", correct: true, xp: 10 },
          { text: "That's boring, kids just need to run around.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's appealing, structure could be good for them.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's all try the family trial class together.", zh: "我们一起试试这堂亲子体验课吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this could be fun for all of us.", zh: "好啊，这对我们大家来说都会很有意思。", correct: true, xp: 10 },
          { text: "Let's not, only kids should join classes like this.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this could be fun for all of us.",
        next: null
      }
    }
  },
  {
    id: "putting-on-the-gi",
    transition: { en: "They change into borrowed uniforms, feeling a bit silly.", zh: "他们换上借来的道服，感觉有点滑稽。" },
    title: "Putting on the Gi",
    subtitle: "更衣室 · 穿上道服",
    avatar: "🎽",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This uniform feels stiffer than regular clothes.", zh: "这套道服比平常的衣服要硬挺一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, but it looks pretty official.", zh: "确实是，不过看起来挺正式的。", correct: true, xp: 10 },
          { text: "Stiffness doesn't matter, let's just wear our own clothes.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, but it looks pretty official.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you help me tie this belt correctly?", zh: "你能帮我把这条腰带系对吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me show you the knot.", zh: "可以，我来教你这个结。", correct: true, xp: 10 },
          { text: "I can't, belts are impossible to figure out.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me show you the knot.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We all look more official than I expected.", zh: "我们都比我预想的看起来更专业了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really do, we look like a real family team.", zh: "确实是，我们看起来像真正的一家人小团队。", correct: true, xp: 10 },
          { text: "We really don't, we all look ridiculous.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really do, we look like a real family team.",
        next: null
      }
    }
  },
  {
    id: "the-bowing-ceremony",
    transition: { en: "The instructor teaches proper bowing before class begins.", zh: "上课前教练教了正确的鞠躬礼仪。" },
    title: "The Bowing Ceremony",
    subtitle: "道馆 · 鞠躬礼仪",
    avatar: "🙇",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Please bow whenever you enter or leave the mat.", zh: "进出垫子时请一定要鞠躬。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Understood, we'll remember to bow every time.", zh: "明白了，我们会每次都记得鞠躬的。", correct: true, xp: 10 },
          { text: "Sorry, bowing seems too formal for us.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Understood, we'll remember to bow every time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This ceremony feels more meaningful than I expected.", zh: "这个仪式比我预想的更有意义。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, respect really is at the heart of this.", zh: "确实是，尊重确实是这一切的核心。", correct: true, xp: 10 },
          { text: "It doesn't, this feels completely unnecessary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, respect really is at the heart of this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Look at our little one bowing so seriously.", zh: "看我们家小朋友鞠躬得多认真。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's adorable, they're taking this so seriously.", zh: "太可爱了，他们对这个真的很认真。", correct: true, xp: 10 },
          { text: "That's odd, they should just skip this part.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's adorable, they're taking this so seriously.",
        next: null
      }
    }
  },
  {
    id: "learning-the-stance",
    transition: { en: "Everyone practices standing in a low, balanced fighting stance.", zh: "大家都在练习一个低而平衡的格斗站姿。" },
    title: "Learning the Stance",
    subtitle: "道馆 · 学习站姿",
    avatar: "🧍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This stance is harder to hold than it looks.", zh: "这个站姿比看起来要难保持。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, my legs are already shaking a little.", zh: "确实是，我的腿已经开始有点抖了。", correct: true, xp: 10 },
          { text: "It isn't, this feels completely effortless.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, my legs are already shaking a little.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Keep your knees bent and your weight balanced.", zh: "膝盖保持弯曲，重心保持平衡。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'll try to stay low like this.", zh: "好的，我会尽量保持这么低。", correct: true, xp: 10 },
          { text: "Sorry, I'd rather just stand up straight.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'll try to stay low like this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You're holding this better than you did a minute ago.", zh: "你现在保持得比一分钟前要好了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, I think I'm finding my balance.", zh: "谢谢，我觉得我开始找到平衡感了。", correct: true, xp: 10 },
          { text: "Thanks, though I feel exactly the same as before.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, I think I'm finding my balance.",
        next: null
      }
    }
  },
  {
    id: "practicing-punches",
    transition: { en: "They line up to practice basic punches into the air.", zh: "他们排成一列，练习朝空中出拳的基本动作。" },
    title: "Practicing Punches",
    subtitle: "道馆 · 练习出拳",
    avatar: "👊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Snap your punch back faster than you throw it out.", zh: "收拳的速度要比出拳的速度更快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Got it, that actually feels more natural.", zh: "明白了，这样其实感觉更自然。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just punch slowly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Got it, that actually feels more natural.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your form is looking sharper than it was a few minutes ago.", zh: "你的动作比几分钟前要利落多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thanks, I'm honestly starting to enjoy this.", zh: "谢谢，说实话我开始喜欢上这个了。", correct: true, xp: 10 },
          { text: "Thanks, though nothing has really changed.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thanks, I'm honestly starting to enjoy this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's count out loud together while we punch.", zh: "我们一起大声数数出拳吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it helps us stay in rhythm.", zh: "好啊，这有助于我们保持节奏。", correct: true, xp: 10 },
          { text: "Let's just punch silently instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, it helps us stay in rhythm.",
        next: null
      }
    }
  },
  {
    id: "the-board-break-demo",
    transition: { en: "The instructor demonstrates a board break to a round of gasps.", zh: "教练示范了破板动作，引来大家一阵惊呼。" },
    title: "The Board Break Demo",
    subtitle: "道馆 · 破板演示",
    avatar: "🪵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That board broke more easily than I expected it to.", zh: "那块板碎得比我预想的要容易。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, though I bet it still takes real skill.", zh: "确实是，不过我猜这还是需要真本事的。", correct: true, xp: 10 },
          { text: "It didn't, that board was completely unbreakable.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, though I bet it still takes real skill.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This requires more focus than raw strength, honestly.", zh: "说实话，这需要的专注度比蛮力更多。", },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, focus over force, I like that.", zh: "有道理，专注胜过蛮力，我喜欢这个理念。", correct: true, xp: 10 },
          { text: "That's odd, strength should always matter most.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, focus over force, I like that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Maybe someday we'll be ready to try that ourselves.", zh: "也许有一天我们自己也能准备好试一试。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Maybe so, that would be such a cool goal.", zh: "也许吧，那会是个很酷的目标。", correct: true, xp: 10 },
          { text: "Definitely not, that seems way too scary.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Maybe so, that would be such a cool goal.",
        next: null
      }
    }
  },
  {
    id: "the-toddlers-first-kick",
    transition: { en: "With gentle guidance, the toddler attempts a wobbly first kick.", zh: "在温和的引导下，孩子尝试了摇摇晃晃的第一次踢腿。" },
    title: "The Toddler's First Kick",
    subtitle: "道馆 · 孩子的第一次踢腿",
    avatar: "🦵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe they actually kept their balance?", zh: "你能相信他们居然保持住平衡了吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, that was impressive for their age.", zh: "我真不敢相信，以他们这个年纪来说太厉害了。", correct: true, xp: 10 },
          { text: "I can believe it, that was completely expected.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I honestly can't, that was impressive for their age.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're smiling more than I've seen them smile all week.", zh: "他们的笑容比这周任何时候都要灿烂。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, this is bringing them so much joy.", zh: "确实如此，这给他们带来了这么多快乐。", correct: true, xp: 10 },
          { text: "They really aren't, they look completely uninterested.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, this is bringing them so much joy.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might just become their new favorite activity.", zh: "这或许会成为他们新的最爱活动。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I hope so, watching them light up like this is priceless.", zh: "我希望如此，看着他们这样容光焕发真是无价的。", correct: true, xp: 10 },
          { text: "I doubt it, this will get boring within a week.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I hope so, watching them light up like this is priceless.",
        next: null
      }
    }
  },
  {
    id: "sore-but-smiling",
    transition: { en: "By the end of class, everyone is tired but grinning.", zh: "课程结束时，大家都又累又笑得开心。" },
    title: "Sore but Smiling",
    subtitle: "道馆 · 疲惫又开心",
    avatar: "😊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My arms are more tired than they've been in ages.", zh: "我的手臂比很久以来任何时候都要累。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but that was honestly a great workout.", zh: "我也是，但说实话这真是一次很棒的锻炼。", correct: true, xp: 10 },
          { text: "Mine feel perfectly fine, actually.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but that was honestly a great workout.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This turned out more fun than I ever expected it to be.", zh: "这次的体验比我曾经想象的要有趣得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, we should keep coming back.", zh: "确实如此，我们应该继续来上课。", correct: true, xp: 10 },
          { text: "It really didn't, once was more than enough.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, we should keep coming back.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's sign up as a family for the beginner program.", zh: "我们全家一起报名初级班吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this could be our new family thing.", zh: "好啊，这可能会成为我们家新的固定活动。", correct: true, xp: 10 },
          { text: "Let's not, this was fun but only as a one-time thing.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this could be our new family thing.",
        next: null
      }
    }
  },
  {
    id: "a-family-tradition-begins",
    transition: { en: "Weeks later, karate class becomes a weekly family ritual.", zh: "几周后，空手道课已经成了每周固定的家庭活动。" },
    title: "A Family Tradition Begins",
    subtitle: "道馆 · 新家庭传统的开始",
    avatar: "🥋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've all gotten more disciplined than I expected we would.", zh: "我们都比我预想的更有纪律性了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, this class taught us more than kicks.", zh: "确实如此，这堂课教会我们的不只是踢腿。", correct: true, xp: 10 },
          { text: "We really haven't, nothing about us has changed.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, this class taught us more than kicks.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Our child looks up to us more since we started training together.", zh: "自从我们一起训练以来，我们的孩子更崇拜我们了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's true, and I love that we're learning together.", zh: "确实如此，我很喜欢我们一起学习的感觉。", correct: true, xp: 10 },
          { text: "That's not true, they don't notice this at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's true, and I love that we're learning together.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how far we get in this, I'll always remember our first bow.", zh: "不管我们在这条路上走多远，我都会永远记得我们的第一次鞠躬。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how far, that memory will always be special.", zh: "不管走多远，那份回忆永远都会很特别。", correct: true, xp: 10 },
          { text: "No matter how far, that first day won't matter later.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how far, that memory will always be special.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "karate", zh: "空手道", category: "community" },
  { en: "trial class", zh: "体验课", category: "community" },
  { en: "gentle", zh: "温和的", category: "community" },
  { en: "discipline", zh: "纪律", category: "community" },
  { en: "physical skills", zh: "身体技巧", category: "community" },
  { en: "appealing", zh: "吸引人的", category: "community" },
  { en: "structure", zh: "结构感，条理", category: "community" },
  { en: "gi", zh: "道服", category: "community" },
  { en: "uniform", zh: "制服", category: "community" },
  { en: "stiffer", zh: "更硬挺的（stiff 比较级）", category: "community" },
  { en: "official", zh: "正式的", category: "community" },
  { en: "belt", zh: "腰带", category: "community" },
  { en: "knot", zh: "结", category: "community" },
  { en: "bowing", zh: "鞠躬", category: "community" },
  { en: "ceremony", zh: "仪式", category: "community" },
  { en: "mat", zh: "垫子", category: "community" },
  { en: "meaningful", zh: "有意义的", category: "community" },
  { en: "respect", zh: "尊重", category: "community" },
  { en: "at the heart of", zh: "……的核心", category: "community" },
  { en: "seriously", zh: "认真地", category: "community" },
  { en: "stance", zh: "站姿", category: "community" },
  { en: "balanced", zh: "平衡的", category: "community" },
  { en: "fighting stance", zh: "格斗站姿", category: "community" },
  { en: "knees bent", zh: "膝盖弯曲", category: "community" },
  { en: "punches", zh: "拳法（复数）", category: "community" },
  { en: "snap back", zh: "收回", category: "community" },
  { en: "natural", zh: "自然的", category: "community" },
  { en: "sharper", zh: "更利落的（sharp 比较级）", category: "community" },
  { en: "in rhythm", zh: "有节奏地", category: "community" },
  { en: "board break", zh: "破板", category: "community" },
  { en: "demo", zh: "演示", category: "community" },
  { en: "gasps", zh: "惊呼（复数）", category: "community" },
  { en: "unbreakable", zh: "打不碎的", category: "community" },
  { en: "raw strength", zh: "蛮力", category: "community" },
  { en: "focus over force", zh: "专注胜过蛮力", category: "community" },
  { en: "wobbly", zh: "摇摇晃晃的", category: "community" },
  { en: "kept their balance", zh: "保持住了平衡", category: "community" },
  { en: "impressive", zh: "令人印象深刻的", category: "community" },
  { en: "priceless", zh: "无价的", category: "community" },
  { en: "workout", zh: "锻炼", category: "community" },
  { en: "beginner program", zh: "初级班", category: "community" },
  { en: "disciplined", zh: "有纪律的", category: "community" },
  { en: "looks up to", zh: "崇拜", category: "community" }
);
