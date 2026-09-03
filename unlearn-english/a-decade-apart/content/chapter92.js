// 内容数据层：第九十二章，紧接第九十一章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人第一次去河边划皮划艇。全新词汇领域：
// 皮划艇/桨/救生衣/水流。

GAME_CONTENT.scenes.push(
  {
    id: "renting-the-kayaks",
    transition: { en: "At a riverside rental shop, they pick out kayaks and paddles.", zh: "在河边的一家租赁店，他们挑选了皮划艇和桨。" },
    title: "Renting the Kayaks",
    subtitle: "河边租赁店 · 租皮划艇",
    avatar: "🛶",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever paddled a kayak before today?", zh: "今天之前你划过皮划艇吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never paddled one, but I'm eager to learn.", zh: "我从没划过，不过我很想学。", correct: true, xp: 10 },
          { text: "I've paddled kayaks every single day this year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never paddled one, but I'm eager to learn.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This paddle feels lighter than I expected it to be.", zh: "这支桨比我预想的要更轻。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that should make paddling easier.", zh: "确实是，这样划起来应该会更轻松。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's grab any paddle.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that should make paddling easier.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's put on our life jackets before we launch.", zh: "下水之前我们先穿上救生衣吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, safety comes first on the water.", zh: "好主意，在水上安全永远第一。", correct: true, xp: 10 },
          { text: "Let's just skip the jackets, we'll be fine.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, safety comes first on the water.",
        next: null
      }
    }
  },
  {
    id: "a-quick-lesson",
    transition: { en: "An instructor shows them how to hold the paddle correctly.", zh: "一位教练示范了如何正确握桨。" },
    title: "A Quick Lesson",
    subtitle: "河边 · 简短教学",
    avatar: "🧑‍🏫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you hold the paddle with both hands like this?", zh: "你能像这样用双手握住桨吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, this grip feels pretty natural.", zh: "我能做到，这个握法感觉挺自然的。", correct: true, xp: 10 },
          { text: "I can't hold anything with two hands.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, this grip feels pretty natural.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This stroke is trickier to master than it looks.", zh: "这个划桨动作比看起来更难掌握。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but I'm slowly getting the rhythm.", zh: "确实是，不过我慢慢找到节奏了。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just splash randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but I'm slowly getting the rhythm.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once you get the rhythm, steering gets much easier.", zh: "一旦你找到节奏，操控就会容易得多。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, I can already feel it improving.", zh: "会的，我已经能感觉到在进步了。", correct: true, xp: 10 },
          { text: "It won't, steering will always feel impossible.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, I can already feel it improving.",
        next: null
      }
    }
  },
  {
    id: "launching-onto-the-river",
    transition: { en: "They push off from the bank and glide onto calm water.", zh: "他们从岸边推离，滑入了平静的水面。" },
    title: "Launching onto the River",
    subtitle: "河边 · 下水",
    avatar: "🌊",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This water is calmer than I expected for a river.", zh: "作为一条河，这水面比我预想的要平静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, perfect conditions for our first try.", zh: "确实是，是我们第一次尝试的绝佳条件。", correct: true, xp: 10 },
          { text: "Calmness doesn't matter, let's paddle as fast as possible.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, perfect conditions for our first try.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you feel how the current pulls us gently downstream?", zh: "你能感觉到水流轻轻地把我们往下游推吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can feel it, it's actually kind of relaxing.", zh: "我能感觉到，其实挺让人放松的。", correct: true, xp: 10 },
          { text: "I can't feel any movement at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can feel it, it's actually kind of relaxing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This feels more peaceful than I imagined it would be.", zh: "这比我想象的要更平静宜人。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I could paddle like this for hours.", zh: "确实是，我可以这样划上好几个小时。", correct: true, xp: 10 },
          { text: "Peace doesn't matter, let's race each other now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I could paddle like this for hours.",
        next: null
      }
    }
  },
  {
    id: "the-toddler-in-a-tandem-kayak",
    transition: { en: "Their toddler sits bundled in a small seat between the paddlers.", zh: "孩子裹得严严实实地坐在两位划桨人中间的小座位上。" },
    title: "The Toddler in a Tandem Kayak",
    subtitle: "河上 · 双人艇上的孩子",
    avatar: "🧒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you comfortable back there in your little seat?", zh: "你坐在那个小座位上舒服吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "They are, they seem completely at ease.", zh: "很舒服，他们看起来完全放松。", correct: true, xp: 10 },
          { text: "They aren't, they want to get out right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → They are, they seem completely at ease.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Look, they're pointing at a duck swimming right beside us!", zh: "看，他们在指着游在我们旁边的一只鸭子！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I see it, wildlife is everywhere out here.", zh: "我看到了，这附近到处都是野生动物。", correct: true, xp: 10 },
          { text: "I don't see any animals nearby at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I see it, wildlife is everywhere out here.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might be their favorite part of the whole trip.", zh: "这可能是整趟旅程里他们最喜欢的部分。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It might be, look at that huge smile.", zh: "很有可能，看那灿烂的笑容。", correct: true, xp: 10 },
          { text: "It can't be, they look completely bored.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It might be, look at that huge smile.",
        next: null
      }
    }
  },
  {
    id: "learning-to-steer",
    transition: { en: "They practice steering the kayak around a gentle bend in the river.", zh: "他们练习在河流一个平缓的弯道处操控皮划艇转弯。" },
    title: "Learning to Steer",
    subtitle: "河上 · 学习转向",
    avatar: "🧭",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This turn is smoother than the last one we tried.", zh: "这次转弯比我们上次试的要更顺畅。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we're getting better with practice.", zh: "确实是，我们越练越好了。", correct: true, xp: 10 },
          { text: "Smoothness doesn't matter, let's stop paddling entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we're getting better with practice.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we paddle harder on the left to turn right?", zh: "我们要不要左边多用力划来向右转？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, that's exactly how steering works apparently.", zh: "对，据说操控就是这个原理。", correct: true, xp: 10 },
          { text: "No, direction doesn't matter at all here.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, that's exactly how steering works apparently.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is starting to feel more natural now.", zh: "这现在开始感觉更自然了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I think we've got the hang of it.", zh: "确实是，我觉得我们摸到窍门了。", correct: true, xp: 10 },
          { text: "Naturalness doesn't matter, let's just drift aimlessly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I think we've got the hang of it.",
        next: null
      }
    }
  },
  {
    id: "a-splash-of-water",
    transition: { en: "A playful splash from a paddle sends cool water over everyone.", zh: "一次调皮的划桨溅起的水花把大家都弄湿了。" },
    title: "A Splash of Water",
    subtitle: "河上 · 一阵水花",
    avatar: "💦",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That splash was colder than I expected it to be!", zh: "那水花比我预想的要更凉！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, but it actually feels refreshing.", zh: "确实是，不过感觉挺清爽的。", correct: true, xp: 10 },
          { text: "Temperature doesn't matter, let's splash back harder.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, but it actually feels refreshing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Their laughter was louder than the sound of the river!", zh: "他们的笑声比河水的声音还要响亮！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It was, that sound made the whole trip better.", zh: "确实是，那笑声让整趟旅程更美好了。", correct: true, xp: 10 },
          { text: "Volume doesn't matter, let's tell them to quiet down.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It was, that sound made the whole trip better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's be a little more careful with the paddle from now on.", zh: "从现在起我们用桨的时候小心点吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, wet clothes aren't ideal out here.", zh: "好主意，穿着湿衣服在这可不太理想。", correct: true, xp: 10 },
          { text: "Let's splash even more, it's actually fun.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, wet clothes aren't ideal out here.",
        next: null
      }
    }
  },
  {
    id: "spotting-wildlife",
    transition: { en: "A heron stands motionless in the shallows as they paddle past.", zh: "一只苍鹭静静地站在浅水处，他们划桨经过。" },
    title: "Spotting Wildlife",
    subtitle: "河上 · 观察野生动物",
    avatar: "🦢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you see that heron standing so still over there?", zh: "你能看到那边站得一动不动的苍鹭吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it hasn't moved an inch.", zh: "我能看到，它一动都没动。", correct: true, xp: 10 },
          { text: "I can't see any birds anywhere near us.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it hasn't moved an inch.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This bird is more patient than any hunter I've seen.", zh: "这只鸟比我见过的任何猎手都要有耐心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, it's waiting for the perfect moment.", zh: "确实是，它在等待完美的时机。", correct: true, xp: 10 },
          { text: "Patience doesn't matter, let's paddle right at it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, it's waiting for the perfect moment.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's paddle quietly so we don't scare it off.", zh: "我们轻轻划桨，别把它吓跑了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I want to watch it a bit longer.", zh: "好啊，我想再多看它一会儿。", correct: true, xp: 10 },
          { text: "Let's shout and see if it flies away.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I want to watch it a bit longer.",
        next: null
      }
    }
  },
  {
    id: "resting-on-a-sandbar",
    transition: { en: "They pull the kayaks onto a small sandbar to rest and snack.", zh: "他们把皮划艇拖上一片小沙洲，休息、吃点东西。" },
    title: "Resting on a Sandbar",
    subtitle: "沙洲 · 休息补给",
    avatar: "🏝️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This sand feels warmer than the water we've been sitting in.", zh: "这沙子比我们坐着的水要更暖和。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, this is a perfect little break spot.", zh: "确实是，这是个休息的绝佳小地方。", correct: true, xp: 10 },
          { text: "Warmth doesn't matter, let's get back in the water now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, this is a perfect little break spot.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My arms are more tired than I expected after that stretch.", zh: "划了那一段之后，我的胳膊比我预想的要更累。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but it's a good kind of tired.", zh: "我也是，不过是那种好的累。", correct: true, xp: 10 },
          { text: "Tiredness doesn't matter, let's paddle twice as far.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but it's a good kind of tired.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This snack tastes better after all that paddling.", zh: "划了这么久之后，这零食吃起来更香了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, everything tastes better after exercise.", zh: "确实是，运动之后什么都更好吃。", correct: true, xp: 10 },
          { text: "Taste doesn't matter, let's skip the snack entirely.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, everything tastes better after exercise.",
        next: null
      }
    }
  },
  {
    id: "paddling-back",
    transition: { en: "Refreshed, they turn the kayaks around and paddle back upstream.", zh: "休息够了，他们调转皮划艇，往上游划回去。" },
    title: "Paddling Back",
    subtitle: "河上 · 划回去",
    avatar: "🔄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is harder than paddling with the current was.", zh: "这比顺着水流划要更费力。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's paddle steadily and pace ourselves.", zh: "确实是，我们要稳稳地划，控制节奏。", correct: true, xp: 10 },
          { text: "Difficulty doesn't matter, let's just sprint the whole way.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's paddle steadily and pace ourselves.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We're closer to the dock now than we were an hour ago.", zh: "我们现在离码头比一小时前要近多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We are, we're almost back now.", zh: "确实是，我们快到了。", correct: true, xp: 10 },
          { text: "Distance doesn't matter, let's just stop paddling here.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We are, we're almost back now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We actually paddled this whole river today, all of us.", zh: "我们今天真的一起划完了整条河。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We did, I'm proud of our whole family.", zh: "确实是，我为我们全家感到骄傲。", correct: true, xp: 10 },
          { text: "We didn't, we barely moved at all today.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We did, I'm proud of our whole family.",
        next: null
      }
    }
  },
  {
    id: "returning-the-kayaks",
    transition: { en: "Tired and sun-kissed, they haul the kayaks back onto the dock.", zh: "疲惫又晒得微红，他们把皮划艇拖回了码头。" },
    title: "Returning the Kayaks",
    subtitle: "码头 · 归还皮划艇",
    avatar: "🏞️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Today turned out more adventurous than I ever expected.", zh: "今天比我曾经预想的要更有冒险精神。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I'm so glad we tried this.", zh: "确实如此，我很高兴我们尝试了这个。", correct: true, xp: 10 },
          { text: "It really didn't, today felt pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I'm so glad we tried this.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someday we'll paddle an even longer stretch of river.", zh: "将来我们会划更长一段河。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, today was just the beginning.", zh: "会的，今天只是个开始。", correct: true, xp: 10 },
          { text: "We won't, this was probably a one-time thing.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, today was just the beginning.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how tired we are, this was completely worth it.", zh: "不管我们有多累，今天完全值得。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how tired, I'd do this again tomorrow.", zh: "不管多累，我明天都愿意再来一次。", correct: true, xp: 10 },
          { text: "No matter how tired, we shouldn't have come at all.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how tired, I'd do this again tomorrow.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "kayaks", zh: "皮划艇（复数）", category: "community" },
  { en: "paddles", zh: "桨（复数）", category: "community" },
  { en: "paddled", zh: "划过（paddle 过去式）", category: "community" },
  { en: "life jackets", zh: "救生衣（复数）", category: "community" },
  { en: "launch", zh: "下水", category: "community" },
  { en: "grip", zh: "握法", category: "community" },
  { en: "stroke", zh: "划桨动作", category: "community" },
  { en: "master", zh: "掌握", category: "community" },
  { en: "rhythm", zh: "节奏", category: "community" },
  { en: "steering", zh: "操控，转向", category: "community" },
  { en: "glide", zh: "滑行", category: "community" },
  { en: "current", zh: "水流", category: "community" },
  { en: "downstream", zh: "顺流而下", category: "community" },
  { en: "tandem kayak", zh: "双人皮划艇", category: "community" },
  { en: "at ease", zh: "放松，自在", category: "community" },
  { en: "duck", zh: "鸭子", category: "community" },
  { en: "wildlife", zh: "野生动物", category: "community" },
  { en: "bend", zh: "弯道", category: "community" },
  { en: "got the hang of it", zh: "摸到窍门", category: "community" },
  { en: "refreshing", zh: "清爽的", category: "community" },
  { en: "heron", zh: "苍鹭", category: "community" },
  { en: "motionless", zh: "一动不动的", category: "community" },
  { en: "shallows", zh: "浅水处", category: "community" },
  { en: "hunter", zh: "猎手", category: "community" },
  { en: "scare it off", zh: "把它吓跑", category: "community" },
  { en: "sandbar", zh: "沙洲", category: "community" },
  { en: "break spot", zh: "休息地点", category: "community" },
  { en: "pace ourselves", zh: "控制节奏", category: "community" },
  { en: "dock", zh: "码头", category: "community" },
  { en: "sun-kissed", zh: "被阳光晒得微红的", category: "community" }
);
