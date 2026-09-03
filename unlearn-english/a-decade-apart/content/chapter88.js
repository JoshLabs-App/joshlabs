// 内容数据层：第八十八章，紧接第八十七章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：一家人体验了一次入门锻造课，打了一把小刀。全新词汇领域：
// 铁砧/锻造炉/锤打/淬火。

GAME_CONTENT.scenes.push(
  {
    id: "the-blacksmith-workshop",
    transition: { en: "They arrive at a small forge for a beginner blacksmithing class.", zh: "他们来到一个小锻造坊，参加入门锻造课。" },
    title: "The Blacksmith Workshop",
    subtitle: "锻造坊 · 入门锻造课",
    avatar: "🔥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have you ever stood this close to a forge before?", zh: "你以前有站得离锻造炉这么近过吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never stood this close, the heat is intense.", zh: "我从没这么近过，这热度真强烈。", correct: true, xp: 10 },
          { text: "I've stood this close every single week for years.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never stood this close, the heat is intense.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This forge is hotter than any oven we've ever used.", zh: "这锻造炉比我们用过的任何烤箱都要热。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's keep a safe distance from it.", zh: "确实是，我们要跟它保持安全距离。", correct: true, xp: 10 },
          { text: "Heat doesn't matter, let's just touch it.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's keep a safe distance from it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's put on these thick leather aprons first.", zh: "我们先穿上这些厚厚的皮围裙吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, safety first around fire.", zh: "好主意，靠近火要把安全放在第一位。", correct: true, xp: 10 },
          { text: "Let's skip the aprons, they look uncomfortable.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, safety first around fire.",
        next: null
      }
    }
  },
  {
    id: "heating-the-steel",
    transition: { en: "The instructor places a steel bar into the glowing coals.", zh: "老师把一根钢条放进了发红的炭火里。" },
    title: "Heating the Steel",
    subtitle: "锻造坊 · 加热钢条",
    avatar: "🟠",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This steel is glowing brighter than I expected it would.", zh: "这根钢条发的红光比我预想的要亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that means it's almost ready to shape.", zh: "确实是，说明它差不多可以塑形了。", correct: true, xp: 10 },
          { text: "Brightness doesn't matter, let's grab it right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that means it's almost ready to shape.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you tell when the color turns orange-yellow?", zh: "你能看出它什么时候变成橙黄色吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, that's the color we're waiting for.", zh: "我能看出来，那就是我们要等的颜色。", correct: true, xp: 10 },
          { text: "I can't see any color change at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, that's the color we're waiting for.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once it's hot enough, we'll pull it out fast.", zh: "等它够热了，我们就要快速把它拿出来。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, speed really matters at this point.", zh: "会的，这一步速度真的很重要。", correct: true, xp: 10 },
          { text: "We won't, let's just leave it in there longer.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, speed really matters at this point.",
        next: null
      }
    }
  },
  {
    id: "hammering-on-the-anvil",
    transition: { en: "They take turns swinging a hammer against the glowing metal.", zh: "他们轮流挥锤敲打发红的金属。" },
    title: "Hammering on the Anvil",
    subtitle: "锻造坊 · 铁砧上锤打",
    avatar: "🔨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This hammer is heavier than any tool I've held before.", zh: "这把锤子比我拿过的任何工具都要重。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, my arm is already feeling it.", zh: "确实是，我的胳膊已经有感觉了。", correct: true, xp: 10 },
          { text: "Weight doesn't matter, let's swing it wildly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, my arm is already feeling it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you hit the same spot again, right there?", zh: "你能再打一次同一个位置吗，就是那里？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, watch my aim this time.", zh: "我能做到，这次看我瞄准。", correct: true, xp: 10 },
          { text: "I can't hit anything accurately at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, watch my aim this time.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This metal is flattening faster than I expected.", zh: "这块金属变扁的速度比我预想的要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, each hit is making real progress.", zh: "确实是，每一锤都有实实在在的进展。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just stop hammering.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, each hit is making real progress.",
        next: null
      }
    }
  },
  {
    id: "reheating-the-metal",
    transition: { en: "The metal cools quickly, so they return it to the coals often.", zh: "金属冷却得很快，所以他们经常把它放回炭火里。" },
    title: "Reheating the Metal",
    subtitle: "锻造坊 · 重新加热",
    avatar: "♻️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is cooling faster than I thought metal would.", zh: "这个冷却得比我以为金属会冷却的速度要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we'll need to heat it several times.", zh: "确实是，我们需要多次重新加热。", correct: true, xp: 10 },
          { text: "Speed doesn't matter, let's just keep hammering it cold.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we'll need to heat it several times.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How many times do we need to repeat this process?", zh: "我们需要重复这个过程多少次？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Probably five or six more times, the instructor said.", zh: "老师说大概还要五六次。", correct: true, xp: 10 },
          { text: "We don't need to repeat it at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答数量 → Probably five or six more times, the instructor said.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This shape is starting to look more like a blade now.", zh: "这个形状现在开始更像一把刀刃了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, I can finally see what it'll become.", zh: "确实是，我终于能看出它会变成什么样了。", correct: true, xp: 10 },
          { text: "Shape doesn't matter, let's just melt it down.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, I can finally see what it'll become.",
        next: null
      }
    }
  },
  {
    id: "shaping-the-edge",
    transition: { en: "Carefully, they hammer a thin edge along one side of the blade.", zh: "他们小心地沿着刀身一侧锤出了薄薄的刃口。" },
    title: "Shaping the Edge",
    subtitle: "锻造坊 · 塑造刀刃",
    avatar: "🗡️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This edge needs to be thinner than the spine of the blade.", zh: "这个刃口需要比刀背更薄。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's angle the hammer carefully.", zh: "确实是，我们要小心调整锤子的角度。", correct: true, xp: 10 },
          { text: "Thickness doesn't matter, let's just hit it randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's angle the hammer carefully.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we check the shape against this template?", zh: "我们要不要对照这个模板检查一下形状？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's compare it every few hits.", zh: "要，我们每敲几下就比对一次吧。", correct: true, xp: 10 },
          { text: "No, let's just guess the shape freely.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's compare it every few hits.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is starting to look like a real knife now.", zh: "这个现在开始看起来像一把真正的刀了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, I'm impressed with our progress.", zh: "确实是，我对我们的进展感到很佩服。", correct: true, xp: 10 },
          { text: "It really isn't, this just looks like a lump.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, I'm impressed with our progress.",
        next: null
      }
    }
  },
  {
    id: "quenching-the-blade",
    transition: { en: "With tongs, the instructor plunges the hot blade into a bucket of oil.", zh: "老师用钳子把热刀刃浸入了一桶油里。" },
    title: "Quenching the Blade",
    subtitle: "锻造坊 · 淬火",
    avatar: "🛢️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That hissed louder than anything I've heard all day.", zh: "那声嘶嘶声比我今天听到的任何声音都要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, that sudden cooling must be intense.", zh: "确实是，那种骤冷一定很剧烈。", correct: true, xp: 10 },
          { text: "Volume doesn't matter, let's ignore that sound.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, that sudden cooling must be intense.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Why do we need to cool it down so quickly?", zh: "为什么我们需要这么快地把它冷却下来？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It hardens the steel so it holds an edge.", zh: "这能让钢材变硬，让刀刃更持久。", correct: true, xp: 10 },
          { text: "Cooling speed doesn't affect the metal at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答原因 → It hardens the steel so it holds an edge.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This blade is harder now than it was an hour ago.", zh: "这把刀现在比一小时前要硬得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, quenching really changed everything.", zh: "确实是，淬火确实改变了一切。", correct: true, xp: 10 },
          { text: "Hardness doesn't matter, let's bend it for fun.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, quenching really changed everything.",
        next: null
      }
    }
  },
  {
    id: "grinding-and-polishing",
    transition: { en: "They use a grinder to smooth the rough surface of the blade.", zh: "他们用磨床把刀身粗糙的表面打磨光滑。" },
    title: "Grinding and Polishing",
    subtitle: "锻造坊 · 打磨抛光",
    avatar: "✨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you hold this steady while I grind the edge?", zh: "我磨刃口的时候你能扶稳吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, take your time and go slow.", zh: "我能扶稳，你慢慢来。", correct: true, xp: 10 },
          { text: "I can't hold anything steady right now.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, take your time and go slow.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This surface is smoother now than it was this morning.", zh: "这个表面现在比今天早上要光滑多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, all that grinding really paid off.", zh: "确实是，那些打磨确实值得。", correct: true, xp: 10 },
          { text: "Smoothness doesn't matter, let's stop grinding now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, all that grinding really paid off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This will shine even more once we polish it fully.", zh: "等我们完全抛光后，这会更闪亮。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "It will, I can already see the shine forming.", zh: "会的，我已经能看到光泽在形成了。", correct: true, xp: 10 },
          { text: "It won't, this metal will always look dull.", correct: false }
        ],
        hintOnWrong: "will 表将来 → It will, I can already see the shine forming.",
        next: null
      }
    }
  },
  {
    id: "attaching-a-handle",
    transition: { en: "They wrap and secure a wooden handle onto the finished blade.", zh: "他们把一个木质刀柄包裹并固定在成品刀身上。" },
    title: "Attaching a Handle",
    subtitle: "锻造坊 · 安装刀柄",
    avatar: "🪵",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This wood feels warmer in the hand than metal would.", zh: "这块木头握在手里比金属要更温暖。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that'll make it more comfortable to hold.", zh: "确实是，这会让握持更舒服。", correct: true, xp: 10 },
          { text: "Warmth doesn't matter, let's use metal instead.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that'll make it more comfortable to hold.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we sand the handle before we attach it?", zh: "我们装上之前要不要先打磨一下刀柄？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, a smooth handle grips better.", zh: "要，光滑的刀柄握起来更好。", correct: true, xp: 10 },
          { text: "No, let's attach it exactly as it is.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, a smooth handle grips better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This finally looks like a finished knife, not just a project.", zh: "这终于看起来像一把完成的刀了，不再只是个半成品。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, our first project actually worked.", zh: "确实如此，我们的第一个项目真的成功了。", correct: true, xp: 10 },
          { text: "It really doesn't, this still looks unfinished.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, our first project actually worked.",
        next: null
      }
    }
  },
  {
    id: "the-finished-knife",
    transition: { en: "They hold up the completed knife, glinting under the workshop lights.", zh: "他们举起了做好的刀，在车间灯光下闪闪发亮。" },
    title: "The Finished Knife",
    subtitle: "锻造坊 · 成品刀",
    avatar: "🔪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This turned out better than I ever expected on our first try.", zh: "以第一次尝试来说，这做出来比我曾经预想的要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, I'm proud of what we made.", zh: "确实如此，我为我们做出的东西感到自豪。", correct: true, xp: 10 },
          { text: "It really didn't, this looks pretty rough.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, I'm proud of what we made.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you believe we shaped this from a plain steel bar?", zh: "你能相信这是我们从一根普通钢条打出来的吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't, this feels like real craftsmanship.", zh: "我真的不敢相信，这感觉像真正的手艺。", correct: true, xp: 10 },
          { text: "I can believe it, this looks totally ordinary.", correct: false }
        ],
        hintOnWrong: "用 can 表惊讶 → I honestly can't, this feels like real craftsmanship.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's frame the receipt just to remember this day.", zh: "我们把这张凭证裱起来，纪念今天吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this deserves a special memory.", zh: "好啊，这值得一份特别的纪念。", correct: true, xp: 10 },
          { text: "Let's just throw the receipt away right now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this deserves a special memory.",
        next: null
      }
    }
  },
  {
    id: "driving-home-proud",
    transition: { en: "On the drive home, the new knife rests carefully in its sheath.", zh: "回家的路上，新刀小心地放在刀鞘里。" },
    title: "Driving Home Proud",
    subtitle: "车上 · 自豪地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Today felt more satisfying than most weekends we've had.", zh: "今天比我们大多数周末都要更有成就感。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, making something with our hands mattered.", zh: "确实如此，亲手做点东西真的很有意义。", correct: true, xp: 10 },
          { text: "It really didn't, today felt pretty ordinary.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, making something with our hands mattered.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someday we'll tell people we forged our own knife.", zh: "将来我们会告诉别人我们自己锻造过一把刀。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, and no one will quite believe it.", zh: "会的，没人会完全相信的。", correct: true, xp: 10 },
          { text: "We won't, this isn't worth mentioning to anyone.", correct: false }
        ],
        hintOnWrong: "will 表将来 → We will, and no one will quite believe it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how many hobbies we try, this one felt different.", zh: "不管我们尝试了多少爱好，这次感觉不一样。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how many, this one will stay special.", zh: "不管有多少个，这次都会一直特别。", correct: true, xp: 10 },
          { text: "No matter how many, they all feel the same.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how many, this one will stay special.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "blacksmithing", zh: "锻造", category: "community" },
  { en: "forge", zh: "锻造炉", category: "community" },
  { en: "intense", zh: "强烈的", category: "community" },
  { en: "leather aprons", zh: "皮围裙（复数）", category: "community" },
  { en: "steel bar", zh: "钢条", category: "community" },
  { en: "coals", zh: "炭火（复数）", category: "community" },
  { en: "shape", zh: "塑形", category: "community" },
  { en: "orange-yellow", zh: "橙黄色", category: "community" },
  { en: "anvil", zh: "铁砧", category: "community" },
  { en: "swinging", zh: "挥动", category: "community" },
  { en: "aim", zh: "瞄准", category: "community" },
  { en: "flattening", zh: "变扁", category: "community" },
  { en: "repeat", zh: "重复", category: "community" },
  { en: "blade", zh: "刀刃，刀身", category: "community" },
  { en: "spine", zh: "刀背", category: "community" },
  { en: "template", zh: "模板", category: "community" },
  { en: "tongs", zh: "钳子", category: "community" },
  { en: "plunges", zh: "浸入", category: "community" },
  { en: "hissed", zh: "发出嘶嘶声", category: "community" },
  { en: "hardens", zh: "使变硬", category: "community" },
  { en: "quenching", zh: "淬火", category: "community" },
  { en: "grinder", zh: "磨床", category: "community" },
  { en: "grind", zh: "打磨", category: "community" },
  { en: "shine", zh: "光泽", category: "community" },
  { en: "handle", zh: "刀柄", category: "community" },
  { en: "grips", zh: "握持", category: "community" },
  { en: "craftsmanship", zh: "手艺", category: "community" },
  { en: "sheath", zh: "刀鞘", category: "community" },
  { en: "satisfying", zh: "有成就感的", category: "community" },
  { en: "forged", zh: "锻造过的（forge 过去式）", category: "community" }
);
