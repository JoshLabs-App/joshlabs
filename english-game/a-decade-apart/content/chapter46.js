// 内容数据层：第四十六章，紧接第四十五章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter45.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：两人申请了一块社区花园地块，带着孩子一起种菜。全新词汇领域：
// 地块申请/播种施肥/病虫害/丰收分享。

GAME_CONTENT.scenes.push(
  {
    id: "applying-for-a-plot",
    transition: { en: "They apply for a small plot at the community garden.", zh: "他们申请了社区花园的一小块地。" },
    title: "Applying for a Plot",
    subtitle: "社区花园 · 申请地块",
    avatar: "🌱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever grown anything before?", zh: "你以前种过什么东西吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've grown a few herbs on our balcony.", zh: "我在阳台上种过一些香草。", correct: true, xp: 10 },
          { text: "I'm growing something at this exact moment.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've grown a few herbs on our balcony.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's currently a short waiting list for plots.", zh: "目前地块有一个不长的等候名单。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's fine, we're happy to wait a bit.", zh: "没关系，我们不介意等一段时间。", correct: true, xp: 10 },
          { text: "That's unacceptable, we need one today.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's fine, we're happy to wait a bit.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll call you as soon as a plot opens up.", zh: "有地块空出来我们会马上打电话给你们。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Perfect, we'll keep our phone nearby.", zh: "太好了，我们会把手机放在身边留意。", correct: true, xp: 10 },
          { text: "Perfect, though we probably won't answer.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Perfect, we'll keep our phone nearby.",
        next: null
      }
    }
  },
  {
    id: "the-first-visit",
    transition: { en: "A spot opens up, and they visit their new plot for the first time.", zh: "有地块空出来了，他们第一次去看自己的新地块。" },
    title: "The First Visit",
    subtitle: "社区花园 · 首次到访",
    avatar: "🌻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This plot gets more sunlight than I expected.", zh: "这块地的日照比我预想的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, this should be perfect for tomatoes.", zh: "确实是，这应该很适合种西红柿。", correct: true, xp: 10 },
          { text: "It doesn't, this plot looks completely shaded.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, this should be perfect for tomatoes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What should we plant first?", zh: "我们应该先种什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Something easy, like lettuce or radishes.", zh: "种点简单的，比如生菜或者萝卜。", correct: true, xp: 10 },
          { text: "Nothing at all, planting sounds too difficult.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Something easy, like lettuce or radishes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's bring the baby along next time to see it.", zh: "下次我们带宝宝一起来看看吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, they'll love the dirt.", zh: "好啊，他们肯定会喜欢泥土的。", correct: true, xp: 10 },
          { text: "Let's leave them at home, gardens are boring.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, they'll love the dirt.",
        next: null
      }
    }
  },
  {
    id: "preparing-the-soil",
    transition: { en: "They spend a Saturday preparing the soil before planting.", zh: "种植前，他们花了一个周六准备土壤。" },
    title: "Preparing the Soil",
    subtitle: "社区花园 · 整理土壤",
    avatar: "🧑‍🌾",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you help me turn over this soil?", zh: "你能帮我把这块土翻一下吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, hand me the other shovel.", zh: "可以，把另一把铲子给我。", correct: true, xp: 10 },
          { text: "I can't, digging isn't something I enjoy.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, hand me the other shovel.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This soil looks richer than what we had last year.", zh: "这块土看起来比我们去年那块要肥沃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that should help everything grow.", zh: "确实是，这应该对作物生长有帮助。", correct: true, xp: 10 },
          { text: "It doesn't, this soil looks completely dead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that should help everything grow.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should add some compost before we plant anything.", zh: "在种任何东西之前我们应该先加点堆肥。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good call, I'll grab some from the shed.", zh: "好主意，我去棚子里拿一些。", correct: true, xp: 10 },
          { text: "Bad call, compost never actually helps anything.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good call, I'll grab some from the shed.",
        next: null
      }
    }
  },
  {
    id: "planting-day",
    transition: { en: "With soil ready, they finally plant their first seeds.", zh: "土壤准备好后，他们终于种下了第一批种子。" },
    title: "Planting Day",
    subtitle: "社区花园 · 播种日",
    avatar: "🌱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How deep should we plant these seeds?", zh: "这些种子应该种多深？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "About an inch deep, according to the packet.", zh: "按照种子包上写的，大概一英寸深。", correct: true, xp: 10 },
          { text: "Depth doesn't matter for seeds at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答方法 → About an inch deep, according to the packet.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you spacing them out evenly?", zh: "你有把它们均匀地隔开吗？" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Yes, I'm measuring the distance carefully.", zh: "是的，我在仔细测量间距。", correct: true, xp: 10 },
          { text: "Yes, I spaced them out last winter.", correct: false }
        ],
        hintOnWrong: "现在进行时 → Yes, I'm measuring the distance carefully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's water everything well before we go.", zh: "走之前我们把一切都浇透吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's give it a good soak.", zh: "好主意，我们好好浇一遍吧。", correct: true, xp: 10 },
          { text: "Let's skip watering, the rain will handle it.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's give it a good soak.",
        next: null
      }
    }
  },
  {
    id: "the-first-sprouts",
    transition: { en: "A couple of weeks later, tiny green sprouts appear.", zh: "几周后，一些嫩绿的小芽冒了出来。" },
    title: "The First Sprouts",
    subtitle: "社区花园 · 第一批嫩芽",
    avatar: "🌿",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look, something's actually growing!", zh: "看，真的有东西长出来了！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "It's really happening, I can't believe it.", zh: "真的发生了，我简直不敢相信。", correct: true, xp: 10 },
          { text: "It's not growing at all, this plot is dead.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → It's really happening, I can't believe it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These sprouts look healthier than I expected.", zh: "这些嫩芽看起来比我预想的更健康。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really do, we must be doing something right.", zh: "确实是，我们一定是做对了什么。", correct: true, xp: 10 },
          { text: "They really don't, they look completely wilted.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really do, we must be doing something right.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "The baby seems fascinated by the little leaves.", zh: "宝宝好像被这些小叶子迷住了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really are, look at that little face.", zh: "确实是，看看那张小脸。", correct: true, xp: 10 },
          { text: "They aren't interested at all, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really are, look at that little face.",
        next: null
      }
    }
  },
  {
    id: "battling-pests",
    transition: { en: "A few weeks in, unwanted insects start showing up.", zh: "几周后，一些不速之客——害虫开始出现。" },
    title: "Battling Pests",
    subtitle: "社区花园 · 对付虫害",
    avatar: "🐛",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Something's been eating our lettuce leaves.", zh: "有什么东西一直在吃我们的生菜叶子。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've noticed that too, we need a solution.", zh: "我也注意到了，我们需要想个办法。", correct: true, xp: 10 },
          { text: "I've never once noticed anything wrong here.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've noticed that too, we need a solution.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This natural spray is safer than chemical pesticides.", zh: "这种天然喷剂比化学杀虫剂更安全。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Safer sounds good, especially with the baby around.", zh: "更安全听起来不错，尤其是家里有宝宝。", correct: true, xp: 10 },
          { text: "Safer doesn't matter, let's use the strongest one.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Safer sounds good, especially with the baby around.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If we spray it every few days, it should help.", zh: "如果我们每隔几天喷一次，应该会有帮助。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If it helps, let's start doing that today.", zh: "如果有效，我们今天就开始吧。", correct: true, xp: 10 },
          { text: "If it helps, let's just wait a few more weeks.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If it helps, let's start doing that today.",
        next: null
      }
    }
  },
  {
    id: "meeting-fellow-gardeners",
    transition: { en: "They chat with neighbors tending their own plots nearby.", zh: "他们和在附近打理自己地块的邻居们聊了起来。" },
    title: "Meeting Fellow Gardeners",
    subtitle: "社区花园 · 结识园友",
    avatar: "👥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How long have you been gardening here?", zh: "你在这儿种地多久了？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've been coming here for about five years.", zh: "我在这儿差不多有五年了。", correct: true, xp: 10 },
          { text: "I've never actually gardened here before today.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've been coming here for about five years.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Your tomatoes look far more impressive than ours.", zh: "你的西红柿看起来比我们的漂亮多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Thank you, I'd be happy to share some tips.", zh: "谢谢，我很乐意分享一些经验。", correct: true, xp: 10 },
          { text: "Thank you, though yours look terrible, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Thank you, I'd be happy to share some tips.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should organize a shared harvest dinner sometime.", zh: "我们应该找时间办一顿丰收共享晚餐。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That sounds wonderful, let's plan one soon.", zh: "这听起来太棒了，我们尽快计划一下吧。", correct: true, xp: 10 },
          { text: "That sounds unnecessary, let's just keep to ourselves.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That sounds wonderful, let's plan one soon.",
        next: null
      }
    }
  },
  {
    id: "a-summer-storm",
    transition: { en: "A sudden summer storm threatens to flatten their young plants.", zh: "一场突如其来的夏季暴雨威胁着他们的幼苗。" },
    title: "A Summer Storm",
    subtitle: "社区花园 · 夏季暴雨",
    avatar: "⛈️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we go cover the plants before the storm hits?", zh: "暴雨来之前我们要不要去给植物盖上防护？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's hurry before it starts raining.", zh: "好，我们趁还没下雨赶紧去吧。", correct: true, xp: 10 },
          { text: "No, the plants can handle anything.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's hurry before it starts raining.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This wind is stronger than the forecast predicted.", zh: "这风比天气预报预测的要强。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's finish up and get inside.", zh: "确实是，我们赶紧弄完然后进去吧。", correct: true, xp: 10 },
          { text: "It isn't, this wind feels perfectly calm.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's finish up and get inside.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Even if we lose a few plants, most should survive.", zh: "即使我们失去几株植物，大部分应该都能挺过去。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even if we do, we can always replant.", zh: "即使真丢了几株，我们也可以重新种。", correct: true, xp: 10 },
          { text: "Even if we do, the whole garden is ruined.", correct: false }
        ],
        hintOnWrong: "让步句 → Even if we do, we can always replant.",
        next: null
      }
    }
  },
  {
    id: "the-first-harvest",
    transition: { en: "Finally, it's time to pick their very first vegetables.", zh: "终于到了采摘第一批蔬菜的时候了。" },
    title: "The First Harvest",
    subtitle: "社区花园 · 首次丰收",
    avatar: "🍅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you believe we actually grew these ourselves?", zh: "你能相信这些真的是我们自己种出来的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can't believe it, I'm honestly so proud.", zh: "我不敢相信，说实话我特别骄傲。", correct: true, xp: 10 },
          { text: "I can believe it, this feels totally ordinary.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I can't believe it, I'm honestly so proud.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These tomatoes taste even better than store-bought ones.", zh: "这些西红柿吃起来比超市买的还要好吃。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really do, homegrown just tastes different.", zh: "确实如此，自己种的味道就是不一样。", correct: true, xp: 10 },
          { text: "They really don't, store-bought is always better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really do, homegrown just tastes different.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's cook something tonight using only what we grew.", zh: "今晚我们做点菜，只用我们自己种的东西吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, a full garden-to-table meal.", zh: "好啊，来一顿完全的“从地到桌”大餐。", correct: true, xp: 10 },
          { text: "Let's just order takeout instead tonight.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, a full garden-to-table meal.",
        next: null
      }
    }
  },
  {
    id: "sharing-with-neighbors",
    transition: { en: "With more vegetables than they can eat, they share the extra with neighbors.", zh: "蔬菜多得吃不完，他们把多出来的分享给了邻居。" },
    title: "Sharing with Neighbors",
    subtitle: "邻居家 · 分享丰收",
    avatar: "🥕",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We grew way more than we could ever eat.", zh: "我们种的比我们能吃完的多太多了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's a good problem to have, honestly.", zh: "说实话，这是个幸福的烦恼。", correct: true, xp: 10 },
          { text: "That's a shame, we should have planted less.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's a good problem to have, honestly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We brought you some fresh vegetables from our garden.", zh: "我们从自家花园带了些新鲜蔬菜给你们。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's so thoughtful, thank you so much.", zh: "你们真是太贴心了，非常感谢。", correct: true, xp: 10 },
          { text: "That's unnecessary, we don't eat vegetables.", correct: false }
        ],
        hintOnWrong: "过去时表达感谢的回应 → That's so thoughtful, thank you so much.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Growing food to share feels more meaningful than I expected.", zh: "种菜分享给别人，比我预想的更有意义。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, I love this whole experience.", zh: "确实如此，我很享受整个过程。", correct: true, xp: 10 },
          { text: "It really doesn't, sharing feels pointless to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, I love this whole experience.",
        next: null
      }
    }
  },
  {
    id: "planning-next-season",
    transition: { en: "As the season winds down, they start planning for next year.", zh: "随着这个赛季接近尾声，他们开始计划明年的种植。" },
    title: "Planning Next Season",
    subtitle: "社区花园 · 规划来年",
    avatar: "📋",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What should we grow differently next year?", zh: "明年我们应该有什么不同的种植方式？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe fewer tomatoes and more herbs.", zh: "也许少种点西红柿，多种点香草。", correct: true, xp: 10 },
          { text: "Nothing, next year we should stop gardening.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Maybe fewer tomatoes and more herbs.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've learned so much more than we expected this year.", zh: "今年我们学到的比预想的多多了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, and I loved every part of it.", zh: "确实如此，我很享受这一切。", correct: true, xp: 10 },
          { text: "We really haven't, we learned nothing at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, and I loved every part of it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what we grow next year, I'm excited to do this again.", zh: "不管明年种什么，我都很期待再来一次。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, count me in every single year.", zh: "不管怎样，每一年都算上我。", correct: true, xp: 10 },
          { text: "No matter what, once was more than enough.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, count me in every single year.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "plot", zh: "地块", category: "community" },
  { en: "grown", zh: "种植过的", category: "community" },
  { en: "herbs", zh: "香草", category: "community" },
  { en: "balcony", zh: "阳台", category: "community" },
  { en: "waiting list", zh: "等候名单", category: "community" },
  { en: "opens up", zh: "空出来", category: "community" },
  { en: "sunlight", zh: "日照，阳光", category: "community" },
  { en: "tomatoes", zh: "西红柿", category: "community" },
  { en: "plant", zh: "种植", category: "community" },
  { en: "lettuce", zh: "生菜", category: "community" },
  { en: "radishes", zh: "萝卜（复数）", category: "community" },
  { en: "dirt", zh: "泥土", category: "community" },
  { en: "turn over", zh: "翻（土）", category: "community" },
  { en: "shovel", zh: "铲子", category: "community" },
  { en: "digging", zh: "挖掘", category: "community" },
  { en: "richer", zh: "更肥沃的（rich 比较级）", category: "community" },
  { en: "compost", zh: "堆肥", category: "community" },
  { en: "shed", zh: "棚屋", category: "community" },
  { en: "seeds", zh: "种子（复数）", category: "community" },
  { en: "inch", zh: "英寸", category: "community" },
  { en: "packet", zh: "包（种子包）", category: "community" },
  { en: "spacing", zh: "间隔", category: "community" },
  { en: "evenly", zh: "均匀地", category: "community" },
  { en: "measuring", zh: "测量", category: "community" },
  { en: "distance", zh: "距离", category: "community" },
  { en: "soak", zh: "浸透", category: "community" },
  { en: "sprouts", zh: "嫩芽（复数）", category: "community" },
  { en: "healthier", zh: "更健康的（healthy 比较级）", category: "community" },
  { en: "wilted", zh: "枯萎的", category: "community" },
  { en: "fascinated", zh: "着迷的", category: "community" },
  { en: "leaves", zh: "叶子（复数）", category: "community" },
  { en: "pests", zh: "害虫（复数）", category: "community" },
  { en: "insects", zh: "昆虫（复数）", category: "community" },
  { en: "eating", zh: "吃（正在进行）", category: "community" },
  { en: "solution", zh: "解决办法", category: "community" },
  { en: "natural spray", zh: "天然喷剂", category: "community" },
  { en: "safer", zh: "更安全的（safe 比较级）", category: "community" },
  { en: "chemical pesticides", zh: "化学杀虫剂", category: "community" },
  { en: "fellow gardeners", zh: "园友", category: "community" },
  { en: "tending", zh: "打理", category: "community" },
  { en: "impressive", zh: "令人印象深刻的", category: "community" },
  { en: "share tips", zh: "分享经验", category: "community" },
  { en: "shared harvest dinner", zh: "丰收共享晚餐", category: "community" },
  { en: "summer storm", zh: "夏季暴雨", category: "community" },
  { en: "cover", zh: "遮盖，覆盖", category: "community" },
  { en: "forecast", zh: "天气预报", category: "community" },
  { en: "predicted", zh: "预测的", category: "community" },
  { en: "survive", zh: "存活", category: "community" },
  { en: "replant", zh: "重新种植", category: "community" },
  { en: "harvest", zh: "丰收", category: "community" },
  { en: "store-bought", zh: "商店买来的", category: "community" },
  { en: "homegrown", zh: "自家种的", category: "community" },
  { en: "garden-to-table", zh: "从地到桌", category: "community" },
  { en: "thoughtful", zh: "贴心的", category: "community" },
  { en: "meaningful", zh: "有意义的", category: "community" },
  { en: "fewer", zh: "更少的（few 比较级）", category: "community" }
);
