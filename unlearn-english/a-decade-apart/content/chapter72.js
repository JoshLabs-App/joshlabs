// 内容数据层：第七十二章，紧接第七十一章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：厨房水龙头开始滴水，两人决定自己动手修理，而不是马上叫师傅。
// 全新词汇领域：水管工具/垫圈更换/关闭总阀/试水检查。

GAME_CONTENT.scenes.push(
  {
    id: "the-dripping-faucet",
    transition: { en: "A steady drip from the kitchen faucet keeps them up at night.", zh: "厨房水龙头持续的滴水声让他们晚上睡不着。" },
    title: "The Dripping Faucet",
    subtitle: "厨房 · 滴水的水龙头",
    avatar: "🚰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That dripping sound is driving me crazy.", zh: "那个滴水声快把我逼疯了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Same here, we need to fix this soon.", zh: "我也是，我们得尽快修一下这个。", correct: true, xp: 10 },
          { text: "That's fine, the sound doesn't bother me at all.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Same here, we need to fix this soon.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we call a plumber, or should we try it ourselves?", zh: "我们要请水管工，还是自己试试？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Let's try it ourselves first, how hard can it be?", zh: "我们先自己试试吧，能有多难呢？", correct: true, xp: 10 },
          { text: "Let's just call someone without even trying.", correct: false }
        ],
        hintOnWrong: "肯定回答（补充建议） → Let's try it ourselves first, how hard can it be?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's watch a video and see what tools we need.", zh: "我们看个视频，看看需要哪些工具吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's search for one right now.", zh: "好主意，我们现在就搜一下。", correct: true, xp: 10 },
          { text: "Let's just guess and hope for the best.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's search for one right now.",
        next: null
      }
    }
  },
  {
    id: "gathering-tools",
    transition: { en: "They dig through a toolbox looking for the right tools.", zh: "他们翻找工具箱，寻找合适的工具。" },
    title: "Gathering Tools",
    subtitle: "车库 · 收集工具",
    avatar: "🧰",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What tools do we actually need for this?", zh: "我们实际上需要哪些工具？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "A wrench, a screwdriver, and a new washer.", zh: "一把扳手、一把螺丝刀，还有一个新垫圈。", correct: true, xp: 10 },
          { text: "We don't need any tools at all for this.", correct: false }
        ],
        hintOnWrong: "wh-问题回答清单 → A wrench, a screwdriver, and a new washer.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This wrench looks bigger than what the video used.", zh: "这把扳手看起来比视频里用的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's check if a smaller one fits better.", zh: "我们看看有没有更小的更合适吧。", correct: true, xp: 10 },
          { text: "Size doesn't matter, let's use this one anyway.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's check if a smaller one fits better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab a bucket too, just in case.", zh: "我们也拿个桶吧，以防万一。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good thinking, let's place it right under the sink.", zh: "想得周到，我们就放在水槽正下方吧。", correct: true, xp: 10 },
          { text: "Let's not bother, a bucket seems unnecessary.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good thinking, let's place it right under the sink.",
        next: null
      }
    }
  },
  {
    id: "shutting-off-the-water",
    transition: { en: "Before touching anything, they locate the shutoff valve.", zh: "在动手之前，他们先找到了总阀门。" },
    title: "Shutting Off the Water",
    subtitle: "水槽下方 · 关闭总阀",
    avatar: "🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you find the shutoff valve under here?", zh: "你能在下面找到总阀门吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's right behind these pipes.", zh: "可以，就在这些水管后面。", correct: true, xp: 10 },
          { text: "I can't, valves don't exist under sinks.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's right behind these pipes.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Turn it clockwise until it stops moving.", zh: "顺时针转动，直到转不动为止。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'm turning it slowly right now.", zh: "好的，我现在正在慢慢转动。", correct: true, xp: 10 },
          { text: "Sorry, I'd rather turn it the other way.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'm turning it slowly right now.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's test the faucet to make sure the water's off.", zh: "我们试一下水龙头，确保水已经关了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's turn the handle and check.", zh: "好主意，我们转一下把手检查一下吧。", correct: true, xp: 10 },
          { text: "Let's skip that step and just start working.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's turn the handle and check.",
        next: null
      }
    }
  },
  {
    id: "taking-apart-the-faucet",
    transition: { en: "They carefully disassemble the faucet handle to reach the washer.", zh: "他们小心地拆开水龙头把手，以便够到垫圈。" },
    title: "Taking Apart the Faucet",
    subtitle: "厨房 · 拆开水龙头",
    avatar: "🔩",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This screw is looser than I expected.", zh: "这颗螺丝比我预想的要松。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's convenient, this should come off easily.", zh: "这挺方便的，应该很容易就能拆下来。", correct: true, xp: 10 },
          { text: "That's concerning, let's tighten it more first.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's convenient, this should come off easily.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you hold this piece steady while I unscrew it?", zh: "我拧螺丝的时候你能把这块固定住吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, I've got a good grip on it.", zh: "可以，我抓得很稳。", correct: true, xp: 10 },
          { text: "I can't, holding things steady isn't my strength.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, I've got a good grip on it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There it is, the worn-out washer causing the leak.", zh: "找到了，就是这个磨损的垫圈导致漏水。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "So that's the problem, let's swap it out.", zh: "原来问题在这儿，我们换掉它吧。", correct: true, xp: 10 },
          { text: "That's odd, that washer looks perfectly fine.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → So that's the problem, let's swap it out.",
        next: null
      }
    }
  },
  {
    id: "replacing-the-washer",
    transition: { en: "They swap the old washer for a new one from the hardware store.", zh: "他们把旧垫圈换成了从五金店买来的新垫圈。" },
    title: "Replacing the Washer",
    subtitle: "厨房 · 更换垫圈",
    avatar: "⚙️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This new washer looks identical to the old one.", zh: "这个新垫圈看起来和旧的一模一样。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good, that means we bought the right size.", zh: "很好，这说明我们买对了尺寸。", correct: true, xp: 10 },
          { text: "That's odd, we should have bought a different size.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good, that means we bought the right size.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you fit this piece in without forcing it?", zh: "你能把这块装进去，不需要用力硬塞吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, it's sliding in smoothly.", zh: "可以，它顺利滑进去了。", correct: true, xp: 10 },
          { text: "I can't, I'll just hammer it in instead.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, it's sliding in smoothly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's put everything back together in reverse order.", zh: "我们按相反顺序把所有东西装回去吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's go step by step.", zh: "好主意，我们一步一步来。", correct: true, xp: 10 },
          { text: "Let's just guess the order randomly.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's go step by step.",
        next: null
      }
    }
  },
  {
    id: "the-moment-of-truth",
    transition: { en: "With everything reassembled, they turn the water back on.", zh: "一切重新装好后，他们重新打开了水。" },
    title: "The Moment of Truth",
    subtitle: "厨房 · 见真章的时刻",
    avatar: "😬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you ready to turn the water back on?", zh: "你准备好重新打开水了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I am, here goes nothing.", zh: "准备好了，豁出去了。", correct: true, xp: 10 },
          { text: "I'm not, let's leave the water off forever.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I am, here goes nothing.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This faucet is quieter now than it was this morning.", zh: "这水龙头现在比今早要安静多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I don't hear any dripping at all.", zh: "确实是，我一点滴水声都听不到了。", correct: true, xp: 10 },
          { text: "It really isn't, it's dripping louder than before.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I don't hear any dripping at all.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We actually fixed it ourselves, I can't believe it!", zh: "我们真的自己修好了，我简直不敢相信！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, I'm honestly really proud of us.", zh: "我们做到了，说实话我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "We didn't, this faucet is still dripping badly.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, I'm honestly really proud of us.",
        next: null
      }
    }
  },
  {
    id: "checking-for-leaks",
    transition: { en: "They watch the pipes closely for the next few minutes.", zh: "接下来的几分钟他们仔细观察着水管。" },
    title: "Checking for Leaks",
    subtitle: "厨房 · 检查漏水",
    avatar: "🔍",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Do you see any water pooling underneath?", zh: "你看到下面有积水吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, everything looks completely dry down here.", zh: "没有，这下面看起来完全干燥。", correct: true, xp: 10 },
          { text: "Yes, there's a huge puddle forming already.", correct: false }
        ],
        hintOnWrong: "否定回答 → No, everything looks completely dry down here.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This connection is tighter than it was before we started.", zh: "这个接口比我们开始修之前要更紧固了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we did a solid job on this part.", zh: "确实是，这部分我们做得很扎实。", correct: true, xp: 10 },
          { text: "It isn't, this connection feels loose still.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we did a solid job on this part.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's check back on it tomorrow, just to be sure.", zh: "为保险起见，我们明天再检查一次吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, one more check won't hurt.", zh: "好主意，再检查一次也无妨。", correct: true, xp: 10 },
          { text: "Let's not bother, we're already confident enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, better safe than sorry.",
        next: null
      }
    }
  },
  {
    id: "a-quiet-night",
    transition: { en: "That night, the kitchen stays wonderfully silent.", zh: "那天晚上，厨房安静得美妙极了。" },
    title: "A Quiet Night",
    subtitle: "家里 · 安静的夜晚",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It's so quiet in here now, no more dripping.", zh: "现在这儿真安静，再也没有滴水声了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, I forgot how peaceful this could be.", zh: "确实如此，我都忘了这里可以这么安静了。", correct: true, xp: 10 },
          { text: "It isn't, I can still hear it dripping somewhere.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, I forgot how peaceful this could be.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We saved more money than I expected by doing this ourselves.", zh: "我们自己动手省下的钱比我预想的要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really did, that's a nice bonus.", zh: "确实是，这真是个不错的额外收获。", correct: true, xp: 10 },
          { text: "We really didn't, this cost us more overall.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really did, that's a nice bonus.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what breaks next, I feel like we can handle it now.", zh: "不管下次坏的是什么，我现在感觉我们能应付了。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what, we've got this together.", zh: "不管是什么，我们都能一起搞定。", correct: true, xp: 10 },
          { text: "No matter what, we'll probably call someone else.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what, we've got this together.",
        next: null
      }
    }
  },
  {
    id: "a-new-confidence",
    transition: { en: "The small victory sparks confidence to tackle more small repairs.", zh: "这次小胜利激发了他们处理更多小修理的信心。" },
    title: "A New Confidence",
    subtitle: "家里 · 新的信心",
    avatar: "💪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What other small repairs should we try next?", zh: "我们接下来还应该尝试哪些小修理？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Maybe that squeaky door hinge in the hallway.", zh: "也许试试走廊那扇吱呀作响的门吧。", correct: true, xp: 10 },
          { text: "We shouldn't try anything else, ever again.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Maybe that squeaky door hinge in the hallway.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We're more capable than we ever gave ourselves credit for.", zh: "我们比自己曾经想象的要能干得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really are, this whole thing was empowering.", zh: "确实如此，这整件事让人感到很有力量。", correct: true, xp: 10 },
          { text: "We really aren't, that was just a lucky fix.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really are, this whole thing was empowering.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep a running list of little projects for the house.", zh: "我们列一份持续更新的家庭小项目清单吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I actually find this satisfying.", zh: "好啊，我其实觉得这挺有成就感的。", correct: true, xp: 10 },
          { text: "Let's not, one fix was more than enough.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I actually find this satisfying.",
        next: null
      }
    }
  },
  {
    id: "teaching-the-toddler-tools",
    transition: { en: "Their toddler watches with fascination as they organize the toolbox.", zh: "他们的孩子着迷地看着他们整理工具箱。" },
    title: "Teaching the Toddler Tools",
    subtitle: "车库 · 教孩子认识工具",
    avatar: "🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you point to the screwdriver for me?", zh: "你能帮我指出螺丝刀在哪儿吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, look how proud they look pointing it out.", zh: "他们能做到，看他们指出来的时候多骄傲。", correct: true, xp: 10 },
          { text: "They can't, tools are way too advanced for them.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, look how proud they look pointing it out.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're more interested in this than any toy lately.", zh: "他们最近对这个的兴趣比对任何玩具都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, maybe they'll be handy someday too.", zh: "确实如此，也许他们以后也会很会动手。", correct: true, xp: 10 },
          { text: "They really aren't, they'd rather watch television.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, maybe they'll be handy someday too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's nice knowing they're growing up seeing us solve problems together.", zh: "看到他们从小就看着我们一起解决问题，感觉真好。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, that feels like an important lesson.", zh: "确实如此，这感觉是个重要的道理。", correct: true, xp: 10 },
          { text: "It doesn't matter, they won't remember any of this.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, that feels like an important lesson.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "dripping", zh: "滴水", category: "community" },
  { en: "steady drip", zh: "持续的滴水", category: "community" },
  { en: "driving me crazy", zh: "快把我逼疯了", category: "community" },
  { en: "plumber", zh: "水管工", category: "community" },
  { en: "toolbox", zh: "工具箱", category: "community" },
  { en: "wrench", zh: "扳手", category: "community" },
  { en: "screwdriver", zh: "螺丝刀", category: "community" },
  { en: "washer", zh: "垫圈", category: "community" },
  { en: "bucket", zh: "桶", category: "community" },
  { en: "shutoff valve", zh: "总阀门", category: "community" },
  { en: "pipes", zh: "水管（复数）", category: "community" },
  { en: "clockwise", zh: "顺时针", category: "community" },
  { en: "handle", zh: "把手", category: "community" },
  { en: "disassemble", zh: "拆开", category: "community" },
  { en: "screw", zh: "螺丝", category: "community" },
  { en: "looser", zh: "更松的（loose 比较级）", category: "community" },
  { en: "unscrew", zh: "拧下", category: "community" },
  { en: "worn-out", zh: "磨损的", category: "community" },
  { en: "causing the leak", zh: "导致漏水", category: "community" },
  { en: "swap out", zh: "更换掉", category: "community" },
  { en: "identical", zh: "一模一样的", category: "community" },
  { en: "right size", zh: "正确的尺寸", category: "community" },
  { en: "forcing it", zh: "用力硬塞", category: "community" },
  { en: "sliding in", zh: "滑进去", category: "community" },
  { en: "hammer", zh: "锤", category: "community" },
  { en: "reverse order", zh: "相反顺序", category: "community" },
  { en: "reassembled", zh: "重新装好的", category: "community" },
  { en: "here goes nothing", zh: "豁出去了", category: "community" },
  { en: "pooling", zh: "积水", category: "community" },
  { en: "underneath", zh: "下面", category: "community" },
  { en: "puddle", zh: "水坑", category: "community" },
  { en: "connection", zh: "接口", category: "community" },
  { en: "tighter", zh: "更紧的（tight 比较级）", category: "community" },
  { en: "solid job", zh: "扎实的工作", category: "community" },
  { en: "check back", zh: "再检查一次", category: "community" },
  { en: "peaceful", zh: "宁静的", category: "community" },
  { en: "nice bonus", zh: "不错的额外收获", category: "community" },
  { en: "small repairs", zh: "小修理", category: "community" },
  { en: "squeaky", zh: "吱呀作响的", category: "community" },
  { en: "door hinge", zh: "门铰链", category: "community" },
  { en: "capable", zh: "能干的", category: "community" },
  { en: "gave ourselves credit", zh: "给自己应有的肯定", category: "community" },
  { en: "empowering", zh: "让人感到有力量的", category: "community" },
  { en: "running list", zh: "持续更新的清单", category: "community" },
  { en: "fascination", zh: "着迷", category: "community" },
  { en: "handy", zh: "手巧的，擅长动手的", category: "community" }
);
