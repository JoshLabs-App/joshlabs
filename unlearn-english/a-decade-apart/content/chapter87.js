// 内容数据层：第八十七章，紧接第八十六章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人尝试在家制作手工皂。全新词汇领域：
// 碱液/皂化/模具/精油。

GAME_CONTENT.scenes.push(
  {
    id: "the-soap-making-supplies",
    transition: { en: "They lay out lye, oils, and silicone molds on the table.", zh: "他们把碱液、油和硅胶模具摆在桌上。" },
    title: "The Soap-Making Supplies",
    subtitle: "家里 · 手工皂材料",
    avatar: "🧼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever handled lye before this project?", zh: "这次之前你处理过碱液吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never handled it, so let's be extra careful.", zh: "我从没处理过，所以我们要格外小心。", correct: true, xp: 10 },
          { text: "I've handled lye every single day for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never handled it, so let's be extra careful.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This lye is more dangerous than any ingredient we've used.", zh: "这个碱液比我们用过的任何原料都要危险。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's wear gloves and goggles.", zh: "确实是，我们戴上手套和护目镜吧。", correct: true, xp: 10 },
          { text: "Danger doesn't matter, let's just mix it barehanded.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's wear gloves and goggles.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's work in a well-ventilated space just in case.", zh: "我们在通风良好的地方操作吧，以防万一。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, let's open a window too.", zh: "很有道理，我们也开扇窗吧。", correct: true, xp: 10 },
          { text: "Let's just work in the closed bathroom instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, let's open a window too.",
        next: null
      }
    }
  },
  {
    id: "mixing-the-lye-solution",
    transition: { en: "Wearing gloves, they carefully stir lye into cold water.", zh: "戴着手套，他们小心地把碱液搅拌进冷水里。" },
    title: "Mixing the Lye Solution",
    subtitle: "厨房 · 调配碱液",
    avatar: "🥽",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you always add lye to water, never the other way around?", zh: "是不是一定要把碱液加进水里，绝不能反过来？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "That's right, the order really matters here.", zh: "没错，这里的顺序真的很重要。", correct: true, xp: 10 },
          { text: "Order doesn't matter, do it however you like.", correct: false }
        ],
        hintOnWrong: "确认安全规则 → That's right, the order really matters here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This mixture is heating up faster than I expected.", zh: "这个混合液升温比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that's a normal chemical reaction apparently.", zh: "确实是，据说这是正常的化学反应。", correct: true, xp: 10 },
          { text: "Heat doesn't matter, let's touch it to check.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that's a normal chemical reaction apparently.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's set this aside to cool for a while.", zh: "我们把这个放一边晾一会儿吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, patience keeps us safe here.", zh: "好啊，耐心等待能让我们更安全。", correct: true, xp: 10 },
          { text: "Let's just pour it into the oils right away.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, patience keeps us safe here.",
        next: null
      }
    }
  },
  {
    id: "melting-the-oils",
    transition: { en: "They warm coconut oil, olive oil, and shea butter together.", zh: "他们一起加热了椰子油、橄榄油和乳木果油。" },
    title: "Melting the Oils",
    subtitle: "厨房 · 融化油脂",
    avatar: "🫒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This shea butter is melting slower than the coconut oil.", zh: "这乳木果油融化得比椰子油要慢。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's stir it a little more.", zh: "确实是，我们再多搅拌一下吧。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's crank up the heat.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's stir it a little more.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you check if both temperatures match now?", zh: "你能确认两边的温度现在是否一致吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, they're almost exactly the same now.", zh: "我能确认，现在几乎完全一致了。", correct: true, xp: 10 },
          { text: "I can't check temperatures with this thermometer.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, they're almost exactly the same now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once both are the same temperature, we'll combine them.", zh: "两边温度一致后，我们就把它们混合起来。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, timing really matters for this step.", zh: "会的，这一步的时机把握真的很重要。", correct: true, xp: 10 },
          { text: "We won't, let's just mix them whenever.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, timing really matters for this step.",
        next: null
      }
    }
  },
  {
    id: "reaching-trace",
    transition: { en: "They blend the mixture until it thickens to a pudding-like consistency.", zh: "他们搅拌混合物，直到它变得像布丁一样浓稠。" },
    title: "Reaching Trace",
    subtitle: "厨房 · 达到皂化痕迹",
    avatar: "🥄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is thickening faster than the tutorial said it would.", zh: "这变浓稠的速度比教程说的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's stop blending pretty soon.", zh: "确实是，我们应该差不多要停止搅拌了。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's blend for another hour.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's stop blending pretty soon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Is this what they call reaching trace?", zh: "这就是他们说的达到皂化痕迹吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "It is, the drizzle leaves a mark now.", zh: "是的，现在滴下去会留下痕迹了。", correct: true, xp: 10 },
          { text: "It isn't, this still looks completely liquid.", correct: false }
        ],
        hintOnWrong: "肯定回答 → It is, the drizzle leaves a mark now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Now we'll add the essential oils for scent.", zh: "现在我们要加入精油来调香了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, I picked lavender and mint.", zh: "会的，我选了薰衣草和薄荷。", correct: true, xp: 10 },
          { text: "We won't, let's leave the soap unscented.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, I picked lavender and mint.",
        next: null
      }
    }
  },
  {
    id: "pouring-into-molds",
    transition: { en: "They pour the thick soap batter into cheerful silicone molds.", zh: "他们把浓稠的皂液倒进色彩明快的硅胶模具里。" },
    title: "Pouring into Molds",
    subtitle: "厨房 · 倒入模具",
    avatar: "🧊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you pour this evenly across all six molds?", zh: "你能把这个均匀地分到六个模具里吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me go slowly and steady.", zh: "我能做到，我慢慢地稳稳地倒。", correct: true, xp: 10 },
          { text: "I can't pour anything evenly at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me go slowly and steady.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This mold is filling up faster than the others.", zh: "这个模具比其他的灌得快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's pour a bit less into it.", zh: "确实是，我们往这个里少倒一点吧。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just keep pouring.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's pour a bit less into it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's tap the molds gently to release any air bubbles.", zh: "我们轻轻敲一下模具，把气泡排出来吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, that should smooth out the tops.", zh: "好主意，这样能让表面更平整。", correct: true, xp: 10 },
          { text: "Let's just leave the bubbles trapped inside.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, that should smooth out the tops.",
        next: null
      }
    }
  },
  {
    id: "waiting-for-saponification",
    transition: { en: "They cover the molds and let chemistry work overnight.", zh: "他们盖上模具，让化学反应过夜进行。" },
    title: "Waiting for Saponification",
    subtitle: "厨房 · 等待皂化",
    avatar: "⏳",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we peek at these before we go to bed?", zh: "我们睡觉前要不要瞄一眼？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Just once, then let's leave them alone.", zh: "就看一次，之后我们就不动它们了。", correct: true, xp: 10 },
          { text: "No, let's stir them every single hour tonight.", correct: false }
        ],
        hintOnWrong: "折中回答 → Just once, then let's leave them alone.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This process is happening slower than I expected.", zh: "这个过程发生得比我预想的要慢。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but good soap takes real time.", zh: "确实是，不过好皂需要真正的时间。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's throw them in the oven.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but good soap takes real time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "By morning, these will be firm enough to unmold.", zh: "到早上，这些就会变得足够硬，可以脱模了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "They will, I can't wait to see the shapes.", zh: "会的，我等不及要看它们的形状了。", correct: true, xp: 10 },
          { text: "They won't, these will stay liquid forever.", correct: false }
        ],
        hintOnWrong: "will 表将来 → They will, I can't wait to see the shapes.",
        next: null
      }
    }
  },
  {
    id: "unmolding-the-soap",
    transition: { en: "The next morning, they carefully pop the bars out of the molds.", zh: "第二天早上，他们小心地把皂块从模具里脱出来。" },
    title: "Unmolding the Soap",
    subtitle: "厨房 · 脱模",
    avatar: "🧼",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This came out cleaner than I expected it to.", zh: "这个脱模比我预想的要更干净利落。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, the silicone molds really helped.", zh: "确实如此，硅胶模具真的帮了大忙。", correct: true, xp: 10 },
          { text: "It didn't, this bar looks completely ruined.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, the silicone molds really helped.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look, you can still see swirls of the mint color.", zh: "看，还能看到薄荷色的漩涡纹路。" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I see it, that turned out beautifully.", zh: "我看到了，效果做得真好看。", correct: true, xp: 10 },
          { text: "I don't see any pattern at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力回应 → I see it, that turned out beautifully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This smells lovelier than I imagined homemade soap would.", zh: "这闻起来比我想象的自制皂要更宜人。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, the lavender is just right.", zh: "确实如此，薰衣草的比例正好。", correct: true, xp: 10 },
          { text: "It really doesn't, this smells quite unpleasant.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, the lavender is just right.",
        next: null
      }
    }
  },
  {
    id: "curing-the-bars",
    transition: { en: "They line the bars up on a rack to cure for several weeks.", zh: "他们把皂块排在架子上，让它们熟成好几周。" },
    title: "Curing the Bars",
    subtitle: "储藏室 · 皂块熟成",
    avatar: "🗄️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have we ever waited this long for a bar of soap?", zh: "我们以前有为一块肥皂等这么久吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We haven't, and it's teaching us to slow down.", zh: "还没有过，这也让我们学会了放慢脚步。", correct: true, xp: 10 },
          { text: "We've waited weeks for soap dozens of times.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We haven't, and it's teaching us to slow down.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If we let it cure fully, it'll last longer in the shower.", zh: "如果我们让它充分熟成，用起来会更耐用。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, I'm glad we're being patient.", zh: "如果确实如此，我很高兴我们有耐心等待。", correct: true, xp: 10 },
          { text: "If that's true, let's just use it right now.", correct: false }
        ],
        hintOnWrong: "条件句回应 → If that's true, I'm glad we're being patient.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "In four weeks, this will be ready to use.", zh: "四周后，这个就能用了。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, and I already know it'll be worth it.", zh: "会的，我已经知道这会是值得的。", correct: true, xp: 10 },
          { text: "It won't, soap doesn't actually need to cure.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, and I already know it'll be worth it.",
        next: null
      }
    }
  },
  {
    id: "the-first-wash",
    transition: { en: "Weeks later, they finally use a cured bar for the first time.", zh: "几周后，他们终于第一次用上了熟成好的皂块。" },
    title: "The First Wash",
    subtitle: "浴室 · 第一次使用",
    avatar: "🚿",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This lathers more richly than any soap we've bought.", zh: "这个起泡比我们买过的任何肥皂都要丰富。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I'm genuinely surprised by that.", zh: "确实如此，这真的让我很惊喜。", correct: true, xp: 10 },
          { text: "It really doesn't, this barely lathers at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I'm genuinely surprised by that.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you believe we made this from scratch, start to finish?", zh: "你能相信这是我们从头到尾自己做的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, this feels like a real achievement.", zh: "我真的不敢相信，这感觉像是一项真正的成就。", correct: true, xp: 10 },
          { text: "I can believe it, this feels totally ordinary.", correct: false }
        ],
        hintOnWrong: "用 can 表惊讶 → I honestly can't, this feels like a real achievement.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's make a batch of gift bars for the holidays.", zh: "我们做一批节日礼物皂吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, everyone will love a handmade gift.", zh: "好啊，大家都会喜欢手工礼物的。", correct: true, xp: 10 },
          { text: "Let's keep every bar just for ourselves instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, everyone will love a handmade gift.",
        next: null
      }
    }
  },
  {
    id: "wrapping-gift-bars",
    transition: { en: "They wrap the finished bars in kraft paper and twine.", zh: "他们用牛皮纸和麻绳把成品皂块包了起来。" },
    title: "Wrapping Gift Bars",
    subtitle: "家里 · 包装礼物皂",
    avatar: "🎀",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This wrapping looks nicer than I expected for a first attempt.", zh: "以第一次尝试来说，这个包装比我预想的要好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, the twine really ties it together.", zh: "确实是，这麻绳把整体感觉衬托出来了。", correct: true, xp: 10 },
          { text: "Looks don't matter, let's just toss it in a bag.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, the twine really ties it together.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "No matter how simple, handmade soap makes a thoughtful gift.", zh: "不管多简单，手工皂都是一份用心的礼物。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how simple, we made it with care.", zh: "不管多简单，都是我们用心做的。", correct: true, xp: 10 },
          { text: "No matter how simple, store-bought is always better.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how simple, we made it with care.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This hobby turned out to be more rewarding than we imagined.", zh: "这个爱好带来的成就感比我们想象的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, I'm so glad we tried something new.", zh: "确实如此，我很高兴我们尝试了新事物。", correct: true, xp: 10 },
          { text: "It didn't, this hobby was disappointing overall.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, I'm so glad we tried something new.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "soap-making", zh: "手工皂制作", category: "community" },
  { en: "lye", zh: "碱液", category: "community" },
  { en: "silicone molds", zh: "硅胶模具", category: "community" },
  { en: "gloves", zh: "手套（复数）", category: "community" },
  { en: "goggles", zh: "护目镜", category: "community" },
  { en: "well-ventilated", zh: "通风良好的", category: "community" },
  { en: "chemical reaction", zh: "化学反应", category: "community" },
  { en: "coconut oil", zh: "椰子油", category: "community" },
  { en: "olive oil", zh: "橄榄油", category: "community" },
  { en: "shea butter", zh: "乳木果油", category: "community" },
  { en: "combine", zh: "混合", category: "community" },
  { en: "pudding-like", zh: "布丁般的", category: "community" },
  { en: "consistency", zh: "浓稠度，质地", category: "community" },
  { en: "trace", zh: "皂化痕迹", category: "community" },
  { en: "drizzle", zh: "细流，滴淌", category: "community" },
  { en: "essential oils", zh: "精油（复数）", category: "community" },
  { en: "mint", zh: "薄荷", category: "community" },
  { en: "batter", zh: "浓稠糊状物", category: "community" },
  { en: "tap", zh: "轻敲", category: "community" },
  { en: "air bubbles", zh: "气泡（复数）", category: "community" },
  { en: "saponification", zh: "皂化", category: "community" },
  { en: "unmold", zh: "脱模", category: "community" },
  { en: "swirls", zh: "漩涡纹路（复数）", category: "community" },
  { en: "lovelier", zh: "更宜人的", category: "community" },
  { en: "cure", zh: "熟成", category: "community" },
  { en: "rack", zh: "架子", category: "community" },
  { en: "lathers", zh: "起泡", category: "community" },
  { en: "richly", zh: "丰富地", category: "community" },
  { en: "kraft paper", zh: "牛皮纸", category: "community" },
  { en: "twine", zh: "麻绳", category: "community" },
  { en: "handmade", zh: "手工制作的", category: "community" }
);
