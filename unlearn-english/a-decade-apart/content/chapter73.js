// 内容数据层：第七十三章，紧接第七十二章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人报名了一次绘画配饮品的体验活动，享受不需要天赋的艺术之夜。
// 全新词汇领域：画布调色/笔触技巧/成品对比/挂画装饰。

GAME_CONTENT.scenes.push(
  {
    id: "spotting-the-event",
    transition: { en: "A local studio advertises a paint-and-sip night for beginners.", zh: "一家本地工作室宣传了一场适合初学者的绘画配饮品之夜。" },
    title: "Spotting the Event",
    subtitle: "手机 · 发现活动",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "No experience needed, they say anyone can do it.", zh: "他们说不需要经验，任何人都能参加。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, I can't paint at all.", zh: "这让人安心，我完全不会画画。", correct: true, xp: 10 },
          { text: "That's unlikely, art always requires talent.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, I can't paint at all.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have you ever painted anything since school?", zh: "你从上学以后画过什么吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "I've never once picked up a paintbrush since then.", zh: "从那以后我一次都没拿过画笔。", correct: true, xp: 10 },
          { text: "I've painted something every single week since.", correct: false }
        ],
        hintOnWrong: "现在完成时 → I've never once picked up a paintbrush since then.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's book two spots for Friday night.", zh: "我们订两个位子，周五晚上去吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, it sounds like a fun change.", zh: "好啊，这听起来会是个有趣的转换。", correct: true, xp: 10 },
          { text: "Let's just watch a movie instead like usual.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I'm actually curious now.",
        next: null
      }
    }
  },
  {
    id: "settling-in-at-the-studio",
    transition: { en: "They find seats in front of blank canvases and small paint palettes.", zh: "他们在空白画布和小调色盘前找到了座位。" },
    title: "Settling In at the Studio",
    subtitle: "绘画工作室 · 入座",
    avatar: "🖌️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This canvas looks bigger than I expected it to be.", zh: "这幅画布比我预想的要大。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, that's a lot of space to fill.", zh: "确实是，要填满的空间不少。", correct: true, xp: 10 },
          { text: "It doesn't, this canvas looks tiny to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, that's a lot of space to fill.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "What would you like to drink while you paint?", zh: "画画的时候你想喝点什么？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'll just have a glass of sparkling water, thanks.", zh: "我就来一杯气泡水吧，谢谢。", correct: true, xp: 10 },
          { text: "I don't want anything to drink at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答 → I'll just have a glass of sparkling water, thanks.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's grab our aprons before we get started.", zh: "我们开始前先拿上围裙吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, I don't want paint on my shirt.", zh: "好主意，我可不想把颜料弄到衣服上。", correct: true, xp: 10 },
          { text: "Let's skip that, we'll be perfectly careful.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, I don't want paint on my shirt.",
        next: null
      }
    }
  },
  {
    id: "following-the-instructor",
    transition: { en: "A cheerful instructor demonstrates each step for everyone to follow.", zh: "一位开朗的讲师示范每一步，供大家跟着做。" },
    title: "Following the Instructor",
    subtitle: "绘画工作室 · 跟着讲师学",
    avatar: "🧑‍🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "First, mix these two colors to create the background.", zh: "首先，把这两种颜色混合，画出背景色。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, I'll try to blend them evenly.", zh: "好的，我会尽量把它们混合均匀。", correct: true, xp: 10 },
          { text: "Sorry, mixing colors sounds too complicated.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, I'll try to blend them evenly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My color came out darker than the instructor's sample.", zh: "我调出的颜色比讲师的样本要深。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's fine, mine looks pretty good like this too.", zh: "没关系，我这样也挺好看的。", correct: true, xp: 10 },
          { text: "That's terrible, let's just stop right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's fine, mine looks pretty good like this too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Don't worry about perfection, just have fun with it.", zh: "别在意完不完美，享受这个过程就好。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Good advice, I'll try to relax a little.", zh: "好建议，我会尽量放松一点。", correct: true, xp: 10 },
          { text: "Sorry, I can only focus on perfection.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Good advice, I'll try to relax a little.",
        next: null
      }
    }
  },
  {
    id: "comparing-progress",
    transition: { en: "Halfway through, they pause to compare their paintings.", zh: "画到一半时，他们停下来比较各自的画。" },
    title: "Comparing Progress",
    subtitle: "绘画工作室 · 比较进度",
    avatar: "🖼️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Yours actually looks better than mine, honestly.", zh: "说实话，你画的其实比我的好看。", },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "No way, yours has way more personality.", zh: "才不是呢，你的更有个性多了。", correct: true, xp: 10 },
          { text: "That's true, mine is honestly pretty ugly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → No way, yours has way more personality.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This is more relaxing than I ever thought painting could be.", zh: "这比我曾经想象的画画要放松得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I forgot how nice this feels.", zh: "确实如此，我都忘了这种感觉有多好了。", correct: true, xp: 10 },
          { text: "It really isn't, this feels stressful, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I forgot how nice this feels.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a picture of our canvases side by side.", zh: "我们把两幅画拍一张并排的照片吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this is a fun memory to keep.", zh: "好啊，这是值得保留的有趣回忆。", correct: true, xp: 10 },
          { text: "Let's not, unfinished paintings look silly.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this is a fun memory to keep.",
        next: null
      }
    }
  },
  {
    id: "adding-the-details",
    transition: { en: "They move on to adding small details with thinner brushes.", zh: "他们用更细的画笔开始添加细节。" },
    title: "Adding the Details",
    subtitle: "绘画工作室 · 添加细节",
    avatar: "🖌️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This brush is thinner than the one we used before.", zh: "这支画笔比我们之前用的要细。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, that should help with the small details.", zh: "确实是，这应该能帮上处理细节的忙。", correct: true, xp: 10 },
          { text: "It isn't, this brush looks exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, that should help with the small details.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you show me how to make these tiny highlights?", zh: "你能教我怎么画这些小小的高光吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, just watch my brush carefully.", zh: "可以，你仔细看我的画笔就行。", correct: true, xp: 10 },
          { text: "I can't, I have no idea how to do that either.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, just watch my brush carefully.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This little touch really brought the whole piece together.", zh: "这个小小的细节真的让整幅画都完整起来了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "It really did, small details matter more than I thought.", zh: "确实如此，小细节的作用比我想的要大。", correct: true, xp: 10 },
          { text: "It didn't, that detail changed absolutely nothing.", correct: false }
        ],
        hintOnWrong: "过去时回应 → It really did, small details matter more than I thought.",
        next: null
      }
    }
  },
  {
    id: "the-final-reveal",
    transition: { en: "With brushes down, everyone holds up their finished paintings.", zh: "放下画笔后，大家举起了各自完成的画作。" },
    title: "The Final Reveal",
    subtitle: "绘画工作室 · 成品揭晓",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I can't believe we actually finished these!", zh: "我真不敢相信我们真的画完了！" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't either, I'm impressed with us.", zh: "说实话我也不敢相信，我为我们感到骄傲。", correct: true, xp: 10 },
          { text: "I can believe it, these look completely unfinished.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I honestly can't either, I'm impressed with us.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Yours turned out even better than the sample painting.", zh: "你画的效果比示范画还要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's so kind, thank you, though yours is great too.", zh: "你真是太客气了，谢谢你，不过你的也很棒。", correct: true, xp: 10 },
          { text: "That's not true, the sample was clearly better.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's so kind, thank you, though yours is great too.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's hang these somewhere in the house together.", zh: "我们把这两幅画一起挂在家里某处吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, maybe side by side in the hallway.", zh: "好啊，也许可以在走廊里并排挂着。", correct: true, xp: 10 },
          { text: "Let's just leave them in the closet forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, maybe side by side in the hallway.",
        next: null
      }
    }
  },
  {
    id: "carrying-the-canvases-home",
    transition: { en: "They carefully carry their wet canvases out to the car.", zh: "他们小心翼翼地把还没干的画布抱到车上。" },
    title: "Carrying the Canvases Home",
    subtitle: "停车场 · 带画回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you hold the door while I carry both canvases?", zh: "我拿两幅画的时候你能帮我扶一下门吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, let me get that for you.", zh: "可以，我来帮你扶门。", correct: true, xp: 10 },
          { text: "I can't, my hands are completely full too.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, let me get that for you.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These will look better once they're fully dry.", zh: "等完全干了之后会更好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "I bet they will, I can already picture it.", zh: "我相信会的，我都能想象出来了。", correct: true, xp: 10 },
          { text: "I doubt it, these will only look worse.", correct: false }
        ],
        hintOnWrong: "回应比较句 → I bet they will, I can already picture it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's lay them flat in the trunk to be safe.", zh: "为了安全起见，我们把它们平放在后备箱里吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's protect our hard work.", zh: "好主意，我们保护好这份劳动成果吧。", correct: true, xp: 10 },
          { text: "Let's just toss them in carelessly.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's protect our hard work.",
        next: null
      }
    }
  },
  {
    id: "finding-the-right-spot",
    transition: { en: "Once dry, they debate where in the house to hang their art.", zh: "干了之后，他们讨论该把画挂在家里哪个位置。" },
    title: "Finding the Right Spot",
    subtitle: "家里 · 寻找合适的位置",
    avatar: "🖼️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This wall gets more light than the one in the hallway.", zh: "这面墙比走廊那面采光更好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, let's hang them here instead.", zh: "确实是，我们改挂在这儿吧。", correct: true, xp: 10 },
          { text: "Light doesn't matter, let's just pick randomly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, let's hang them here instead.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you hold it up while I check if it's level?", zh: "我检查是否水平的时候你能扶着吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, just tell me which way to adjust.", zh: "可以，告诉我该往哪边调就行。", correct: true, xp: 10 },
          { text: "I can't, my arms are already too tired.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, just tell me which way to adjust.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "There, it looks perfect right where it is now.", zh: "好了，现在这个位置看起来正合适。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, I love how it turned out.", zh: "确实是，我很喜欢这个效果。", correct: true, xp: 10 },
          { text: "It doesn't, let's take it down completely.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, I love how it turned out.",
        next: null
      }
    }
  },
  {
    id: "admiring-their-work",
    transition: { en: "That evening, they admire their new artwork from the couch.", zh: "那天晚上，他们坐在沙发上欣赏自己的新画作。" },
    title: "Admiring Their Work",
    subtitle: "家里 · 欣赏成果",
    avatar: "❤️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I actually really like looking at this every day.", zh: "我其实每天看着这幅画都很喜欢。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Same here, it makes this room feel more like ours.", zh: "我也是，这让这个房间更有我们的味道了。", correct: true, xp: 10 },
          { text: "Same here, though I already want a new one.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Same here, it makes this room feel more like ours.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should try painting again sometime soon.", zh: "我们应该找时间再画一次。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, this turned out to be so much fun.", zh: "同意，这真的很有意思。", correct: true, xp: 10 },
          { text: "Disagreed, once was more than enough for me.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, this turned out to be so much fun.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how it turns out, making something together always feels good.", zh: "不管结果如何，一起创作总是让人感觉很好。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how it turns out, I agree completely.", zh: "不管结果如何，我完全同意。", correct: true, xp: 10 },
          { text: "No matter how it turns out, results are all that matter.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how it turns out, I agree completely.",
        next: null
      }
    }
  },
  {
    id: "a-second-attempt",
    transition: { en: "A month later, they return to the studio to try a new style.", zh: "一个月后，他们回到工作室尝试一种新的画风。" },
    title: "A Second Attempt",
    subtitle: "绘画工作室 · 再次尝试",
    avatar: "🎨",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This time feels more comfortable than the first.", zh: "这次感觉比第一次更自在了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, we already know what to expect.", zh: "确实是，我们已经知道会是什么样了。", correct: true, xp: 10 },
          { text: "It doesn't, this feels harder than before.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, we already know what to expect.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've gotten better at this than I ever expected we would.", zh: "我们的水平比我曾经预想的要好得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, practice must be paying off.", zh: "确实如此，练习一定有了回报。", correct: true, xp: 10 },
          { text: "We really haven't, we've barely improved at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, practice must be paying off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This might just become our regular date night thing.", zh: "这或许会成为我们固定的约会活动。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "I'd love that, more than most other date nights.", zh: "我很愿意，比大多数其他约会都更喜欢这个。", correct: true, xp: 10 },
          { text: "I doubt it, this feels like a one-time thing.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → I'd love that, more than most other date nights.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "paint-and-sip", zh: "绘画配饮品", category: "community" },
  { en: "beginners", zh: "初学者（复数）", category: "community" },
  { en: "reassuring", zh: "令人安心的", category: "community" },
  { en: "unlikely", zh: "不太可能的", category: "community" },
  { en: "paintbrush", zh: "画笔", category: "community" },
  { en: "canvases", zh: "画布（复数）", category: "community" },
  { en: "palettes", zh: "调色盘（复数）", category: "community" },
  { en: "fill", zh: "填满", category: "community" },
  { en: "sparkling water", zh: "气泡水", category: "community" },
  { en: "aprons", zh: "围裙（复数）", category: "community" },
  { en: "cheerful", zh: "开朗的", category: "community" },
  { en: "demonstrates", zh: "示范", category: "community" },
  { en: "mix", zh: "混合", category: "community" },
  { en: "background", zh: "背景", category: "community" },
  { en: "blend", zh: "调和，混合", category: "community" },
  { en: "evenly", zh: "均匀地", category: "community" },
  { en: "sample", zh: "样本", category: "community" },
  { en: "perfection", zh: "完美", category: "community" },
  { en: "personality", zh: "个性", category: "community" },
  { en: "relaxing", zh: "让人放松的", category: "community" },
  { en: "canvases side by side", zh: "并排的画布", category: "community" },
  { en: "unfinished", zh: "未完成的", category: "community" },
  { en: "thinner", zh: "更细的（thin 比较级）", category: "community" },
  { en: "highlights", zh: "高光（复数）", category: "community" },
  { en: "little touch", zh: "小小的细节", category: "community" },
  { en: "brought together", zh: "使完整、凝聚起来", category: "community" },
  { en: "hold up", zh: "举起", category: "community" },
  { en: "impressed", zh: "印象深刻的", category: "community" },
  { en: "sample painting", zh: "示范画", category: "community" },
  { en: "wet canvases", zh: "未干的画布", category: "community" },
  { en: "lay flat", zh: "平放", category: "community" },
  { en: "hard work", zh: "劳动成果", category: "community" },
  { en: "toss", zh: "扔", category: "community" },
  { en: "carelessly", zh: "随意地", category: "community" },
  { en: "level", zh: "水平的", category: "community" },
  { en: "adjust", zh: "调整", category: "community" },
  { en: "artwork", zh: "艺术作品", category: "community" },
  { en: "feels like ours", zh: "有我们的味道", category: "community" },
  { en: "turns out", zh: "结果", category: "community" },
  { en: "new style", zh: "新风格", category: "community" },
  { en: "what to expect", zh: "会是什么样", category: "community" },
  { en: "paying off", zh: "有了回报", category: "community" },
  { en: "one-time thing", zh: "一次性的事情", category: "community" }
);
