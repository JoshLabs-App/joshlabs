// 内容数据层：第八十四章，紧接第八十三章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人在车库尝试木工，做一个鸟屋。全新词汇领域：
// 木工工具/打磨/钉子/鸟屋。

GAME_CONTENT.scenes.push(
  {
    id: "the-woodworking-project",
    transition: { en: "They pick up a beginner birdhouse kit at the hardware store.", zh: "他们在五金店买了一套初学者鸟屋套装。" },
    title: "The Woodworking Project",
    subtitle: "五金店 · 木工项目",
    avatar: "🪵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever built anything out of wood before?", zh: "你以前用木头做过什么东西吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never built anything, but I'm willing to try.", zh: "我从没做过，不过我愿意试一试。", correct: true, xp: 10 },
          { text: "I've built houses out of wood every week.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never built anything, but I'm willing to try.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This kit looks simpler than the ones I saw online.", zh: "这套套装比我在网上看到的要更简单。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, perfect for a first attempt.", zh: "确实是，很适合第一次尝试。", correct: true, xp: 10 },
          { text: "Simplicity doesn't matter, let's buy the hardest one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, perfect for a first attempt.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab safety glasses before we start cutting.", zh: "开始切割之前我们先拿好护目镜吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, safety first with sharp tools.", zh: "好主意，用锋利工具安全第一。", correct: true, xp: 10 },
          { text: "Let's just skip the glasses, we'll be fine.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, safety first with sharp tools.",
        next: null
      }
    }
  },
  {
    id: "sanding-the-boards",
    transition: { en: "In the garage, they sand rough wooden boards until smooth.", zh: "在车库里，他们打磨粗糙的木板，直到变得光滑。" },
    title: "Sanding the Boards",
    subtitle: "车库 · 打磨木板",
    avatar: "🪚",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This board feels rougher than the others in the kit.", zh: "这块木板比套装里其他的要粗糙。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's give it a few extra passes.", zh: "确实是，我们多打磨几遍吧。", correct: true, xp: 10 },
          { text: "Texture doesn't matter, let's move on already.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's give it a few extra passes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you feel any splinters left on this edge?", zh: "你能摸到这条边上还有木刺吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can feel a few, let's sand it once more.", zh: "我摸到了一些，我们再打磨一次吧。", correct: true, xp: 10 },
          { text: "I can't feel anything, this edge is perfect.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can feel a few, let's sand it once more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is getting smoother with every pass we make.", zh: "每打磨一遍它就变得更光滑一些。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It is, this feels satisfying to do.", zh: "确实是，做这件事让人很有成就感。", correct: true, xp: 10 },
          { text: "It isn't, this board looks exactly the same.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → It is, this feels satisfying to do.",
        next: null
      }
    }
  },
  {
    id: "measuring-and-marking",
    transition: { en: "They measure each board carefully before making any cuts.", zh: "动手切割之前，他们仔细测量了每块木板。" },
    title: "Measuring and Marking",
    subtitle: "车库 · 测量与标记",
    avatar: "📏",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you double check this measurement before I cut?", zh: "我切之前你能再检查一遍这个尺寸吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me measure it one more time.", zh: "我能，我再量一遍。", correct: true, xp: 10 },
          { text: "I can't measure anything with this ruler.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me measure it one more time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This measurement is trickier than I thought it would be.", zh: "这个尺寸比我想的要更棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, angles always make things harder.", zh: "确实是，涉及角度总会更难一些。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just guess the size.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, angles always make things harder.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Remember, measure twice and cut only once.", zh: "记住，量两次，切一次。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good rule, mistakes are hard to fix in wood.", zh: "这规则不错，木头上的失误很难修正。", correct: true, xp: 10 },
          { text: "That rule is silly, let's just cut it now.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good rule, mistakes are hard to fix in wood.",
        next: null
      }
    }
  },
  {
    id: "hammering-the-nails",
    transition: { en: "They line up the boards and start hammering small nails.", zh: "他们把木板对齐，开始敲进小钉子。" },
    title: "Hammering the Nails",
    subtitle: "车库 · 敲钉子",
    avatar: "🔨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This hammer is heavier than the one at home.", zh: "这把锤子比家里那把要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but it drives nails in faster.", zh: "确实是，不过敲钉子更快一些。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's use it randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but it drives nails in faster.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we hold the nail steady while you hammer?", zh: "你敲的时候我们要不要扶稳钉子？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, please, that keeps it from bending.", zh: "好的，请扶稳，这样它就不会弯。", correct: true, xp: 10 },
          { text: "No, let's just hammer it in blindly.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, please, that keeps it from bending.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That nail is going in straighter than the last one.", zh: "这颗钉子敲得比上一颗要直。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I think I'm finally getting the hang of it.", zh: "确实是，我想我终于摸到窍门了。", correct: true, xp: 10 },
          { text: "Straightness doesn't matter, let's move on quickly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I think I'm finally getting the hang of it.",
        next: null
      }
    }
  },
  {
    id: "a-toddler-watches-closely",
    transition: { en: "Their curious toddler watches from a safe distance, fascinated.", zh: "好奇的孩子在安全距离外看得入了迷。" },
    title: "A Toddler Watches Closely",
    subtitle: "车库 · 孩子在一旁看",
    avatar: "👀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can I hold the hammer just once, please?", zh: "我能拿一次锤子吗，拜托？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "Not yet, but you can watch closely.", zh: "现在还不行，不过你可以仔细看。", correct: true, xp: 10 },
          { text: "Sure, here's a real hammer for you.", correct: false }
        ],
        hintOnWrong: "拒绝但补偿 → Not yet, but you can watch closely.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Why do we need so many little nails?", zh: "为什么我们需要这么多小钉子？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Each one holds the boards together tightly.", zh: "每一颗都能把木板牢牢固定住。", correct: true, xp: 10 },
          { text: "We don't actually need any nails at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → Each one holds the boards together tightly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once we finish, you can paint the birdhouse yourself.", zh: "等我们做完，你就可以自己给鸟屋上色了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will love that, they've been waiting patiently.", zh: "他们会很喜欢的，一直耐心等着呢。", correct: true, xp: 10 },
          { text: "They won't care about painting anything at all.", correct: false }
        ],
        hintOnWrong: "will 表将来 → They will love that, they've been waiting patiently.",
        next: null
      }
    }
  },
  {
    id: "assembling-the-roof",
    transition: { en: "The tricky part comes next: attaching the slanted roof pieces.", zh: "接下来是最棘手的部分：安装倾斜的屋顶部件。" },
    title: "Assembling the Roof",
    subtitle: "车库 · 安装屋顶",
    avatar: "🏠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This roof piece is trickier to attach than the walls were.", zh: "这块屋顶部件比墙面更难安装。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, the angle keeps throwing me off.", zh: "确实是，这个角度老是让我搞错。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just force it on.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, the angle keeps throwing me off.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we glue it first, the nails will hold better.", zh: "如果我们先用胶水粘，钉子会固定得更牢。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that works, let's do glue every time.", zh: "如果有效，我们以后每次都先上胶吧。", correct: true, xp: 10 },
          { text: "If that works, let's forget the nails entirely.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If that works, let's do glue every time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This roof is looking sturdier than I expected already.", zh: "这个屋顶看起来已经比我预想的要更牢固了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I'm actually proud of how it looks.", zh: "确实是，我对它的样子挺自豪的。", correct: true, xp: 10 },
          { text: "Sturdiness doesn't matter, let's just glue it faster.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I'm actually proud of how it looks.",
        next: null
      }
    }
  },
  {
    id: "painting-the-birdhouse",
    transition: { en: "Their toddler dips a small brush into bright blue paint.", zh: "孩子把一支小刷子蘸进了明亮的蓝色颜料里。" },
    title: "Painting the Birdhouse",
    subtitle: "车库 · 给鸟屋上色",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Which color do you want to paint the roof?", zh: "你想把屋顶漆成什么颜色？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "They're pointing at the bright red, of course.", zh: "他们当然是指着那种亮红色啦。", correct: true, xp: 10 },
          { text: "They don't want any color at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答选择 → They're pointing at the bright red, of course.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're painting more carefully than I expected them to.", zh: "他们涂色比我预想的要更细心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They are, look how focused they seem.", zh: "确实是，看他们多专注啊。", correct: true, xp: 10 },
          { text: "Care doesn't matter, let's just take over for them.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They are, look how focused they seem.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is going to be a very colorful birdhouse.", zh: "这会是一个非常五颜六色的鸟屋。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, and the birds probably won't mind at all.", zh: "会的，鸟儿大概也不会介意的。", correct: true, xp: 10 },
          { text: "It won't, we should stop them right now.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, and the birds probably won't mind at all.",
        next: null
      }
    }
  },
  {
    id: "finding-the-right-spot",
    transition: { en: "They walk around the yard, searching for the perfect tree branch.", zh: "他们在院子里走来走去，寻找最合适的树枝。" },
    title: "Finding the Right Spot",
    subtitle: "后院 · 寻找合适的位置",
    avatar: "🌳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This branch looks sturdier than the one near the fence.", zh: "这根树枝看起来比篱笆边那根要更结实。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, and it's high enough for safety too.", zh: "确实是，而且高度也够安全了。", correct: true, xp: 10 },
          { text: "Sturdiness doesn't matter, let's just pick any branch.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, and it's high enough for safety too.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we hang it facing away from the wind?", zh: "我们要不要挂得背对着风向？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that'll keep the birds warmer inside.", zh: "要，这样鸟儿在里面会更暖和。", correct: true, xp: 10 },
          { text: "No, direction doesn't matter to birds at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that'll keep the birds warmer inside.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's hang it here and see who moves in first.", zh: "我们把它挂在这儿，看看谁先住进来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I'm excited to find out.", zh: "好啊，我很期待看到结果。", correct: true, xp: 10 },
          { text: "Let's just leave it in the garage instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm excited to find out.",
        next: null
      }
    }
  },
  {
    id: "hanging-the-birdhouse",
    transition: { en: "Together, they hang the finished birdhouse on a sturdy branch.", zh: "他们一起把做好的鸟屋挂在了一根结实的树枝上。" },
    title: "Hanging the Birdhouse",
    subtitle: "后院 · 挂起鸟屋",
    avatar: "🪺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This looks better hanging outside than it did in the garage.", zh: "挂在外面比在车库里看起来更好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, the colors really pop against the leaves.", zh: "确实是，颜色在树叶映衬下特别鲜艳。", correct: true, xp: 10 },
          { text: "Looks don't matter, let's just take it down now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, the colors really pop against the leaves.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How long do you think it'll take for a bird to notice?", zh: "你觉得鸟儿要多久才会注意到它？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe a few days, birds are curious creatures.", zh: "也许几天吧，鸟儿是很好奇的生物。", correct: true, xp: 10 },
          { text: "Never, birds don't notice anything new.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → Maybe a few days, birds are curious creatures.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how long it takes, we made this together.", zh: "不管要花多久，这都是我们一起做的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how long, I'll always remember today.", zh: "不管要多久，我都会一直记得今天。", correct: true, xp: 10 },
          { text: "No matter how long, this was a waste of time.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how long, I'll always remember today.",
        next: null
      }
    }
  },
  {
    id: "the-first-visitor",
    transition: { en: "A week later, a small bird finally perches on the birdhouse.", zh: "一周后，一只小鸟终于停在了鸟屋上。" },
    title: "The First Visitor",
    subtitle: "后院 · 第一位访客",
    avatar: "🐦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look, a bird is checking out our birdhouse right now!", zh: "快看，有只鸟正在查看我们的鸟屋！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I see it, I can't believe it actually worked.", zh: "我看到了，真不敢相信它真的成功了。", correct: true, xp: 10 },
          { text: "I don't see any bird anywhere near it.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I see it, I can't believe it actually worked.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This moment feels better than I ever imagined it would.", zh: "这一刻比我曾经想象的要更美好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, all that work was worth it.", zh: "确实如此，之前所有的努力都值得了。", correct: true, xp: 10 },
          { text: "It really doesn't, this feels pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, all that work was worth it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Someday we'll build a bigger one for the whole yard.", zh: "将来我们会给整个院子做一个更大的。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, this hobby might just be starting.", zh: "会的，这个爱好也许才刚刚开始。", correct: true, xp: 10 },
          { text: "We won't, one birdhouse is more than enough.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, this hobby might just be starting.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "hardware store", zh: "五金店", category: "community" },
  { en: "birdhouse", zh: "鸟屋", category: "community" },
  { en: "safety glasses", zh: "护目镜", category: "community" },
  { en: "sand", zh: "打磨", category: "community" },
  { en: "boards", zh: "木板（复数）", category: "community" },
  { en: "splinters", zh: "木刺（复数）", category: "community" },
  { en: "measure", zh: "测量", category: "community" },
  { en: "ruler", zh: "尺子", category: "community" },
  { en: "angles", zh: "角度（复数）", category: "community" },
  { en: "hammer", zh: "锤子", category: "community" },
  { en: "nails", zh: "钉子（复数）", category: "community" },
  { en: "drives in", zh: "敲入（钉子）", category: "community" },
  { en: "bending", zh: "弯曲", category: "community" },
  { en: "getting the hang of it", zh: "摸到窍门", category: "community" },
  { en: "safe distance", zh: "安全距离", category: "community" },
  { en: "tightly", zh: "紧紧地", category: "community" },
  { en: "slanted", zh: "倾斜的", category: "community" },
  { en: "roof pieces", zh: "屋顶部件", category: "community" },
  { en: "glue", zh: "胶水", category: "community" },
  { en: "sturdier", zh: "更牢固的", category: "community" },
  { en: "brush", zh: "刷子", category: "community" },
  { en: "focused", zh: "专注的", category: "community" },
  { en: "colorful", zh: "五颜六色的", category: "community" },
  { en: "tree branch", zh: "树枝", category: "community" },
  { en: "fence", zh: "篱笆", category: "community" },
  { en: "facing away", zh: "背对着", category: "community" },
  { en: "pop", zh: "（颜色）鲜艳突出", category: "community" },
  { en: "leaves", zh: "树叶（复数）", category: "community" },
  { en: "creatures", zh: "生物（复数）", category: "community" },
  { en: "perches", zh: "停歇", category: "community" },
  { en: "checking out", zh: "查看", category: "community" }
);
