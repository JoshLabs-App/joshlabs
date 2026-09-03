// 内容数据层：第五十七章，紧接第五十六章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：孩子夜里总是醒好几次，两人决定认真做睡眠训练。全新词汇领域：
// 睡眠训练法/作息安排/夜间哭闹/独立入睡。

GAME_CONTENT.scenes.push(
  {
    id: "another-rough-night",
    transition: { en: "After yet another sleepless night, they decide something needs to change.", zh: "又一个不眠之夜后，他们决定必须做出改变。" },
    title: "Another Rough Night",
    subtitle: "卧室 · 又一个难熬的夜晚",
    avatar: "😴",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They woke up four times again last night.", zh: "昨晚他们又醒了四次。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's it, we need a real plan now.", zh: "够了，我们现在需要一个真正的计划。", correct: true, xp: 10 },
          { text: "That's fine, four times is completely normal.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's it, we need a real plan now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We should really look into sleep training methods.", zh: "我们真的应该研究一下睡眠训练方法了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Agreed, let's research this weekend.", zh: "同意，我们这周末就去研究一下。", correct: true, xp: 10 },
          { text: "Disagreed, sleep training sounds cruel to us.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Agreed, let's research this weekend.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's talk to the pediatrician about it first.", zh: "我们先跟儿科医生聊聊这件事吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's book an appointment.", zh: "好主意，我们预约一下吧。", correct: true, xp: 10 },
          { text: "Let's just guess what to do on our own.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's book an appointment.",
        next: null
      }
    }
  },
  {
    id: "talking-to-the-pediatrician",
    transition: { en: "The pediatrician explains a few gentle approaches to try.", zh: "儿科医生讲解了几种可以尝试的温和方法。" },
    title: "Talking to the Pediatrician",
    subtitle: "诊所 · 咨询儿科医生",
    avatar: "🩺",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is your child eating and growing normally?", zh: "您的孩子吃得和长得都正常吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, everything else seems perfectly fine.", zh: "是的，其他方面都完全正常。", correct: true, xp: 10 },
          { text: "No, nothing about our child seems normal.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, everything else seems perfectly fine.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A consistent bedtime routine works better than most other methods.", zh: "一个固定的睡前流程比大多数其他方法都更有效。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, let's build one at home.", zh: "有道理，我们在家建立一个吧。", correct: true, xp: 10 },
          { text: "Routines never actually make a difference.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, let's build one at home.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Give it two weeks before deciding if it's working.", zh: "给它两周时间，再判断是否有效。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Okay, we'll be patient and stick with it.", zh: "好的，我们会耐心坚持下去的。", correct: true, xp: 10 },
          { text: "Sorry, two weeks feels far too long to wait.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Okay, we'll be patient and stick with it.",
        next: null
      }
    }
  },
  {
    id: "building-a-bedtime-routine",
    transition: { en: "They design a calm, predictable routine for every night.", zh: "他们设计了一套每晚都平静、可预测的流程。" },
    title: "Building a Bedtime Routine",
    subtitle: "家里 · 建立睡前流程",
    avatar: "🛁",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What order should we do bath, book, and bed?", zh: "洗澡、读书、睡觉的顺序应该怎么安排？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's do bath first, then a book, then bed.", zh: "我们先洗澡，然后读书，最后睡觉吧。", correct: true, xp: 10 },
          { text: "Order doesn't matter, let's do them randomly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's do bath first, then a book, then bed.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This routine should feel calmer than our usual chaos.", zh: "这个流程应该比我们平常的混乱要平静多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It should, and calm helps everyone sleep better.", zh: "应该是的，平静能帮大家睡得更好。", correct: true, xp: 10 },
          { text: "It shouldn't, chaos actually helps babies sleep.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It should, and calm helps everyone sleep better.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's keep the same routine every single night.", zh: "我们每晚都坚持同一套流程吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, consistency is probably the key.", zh: "好主意，一致性大概才是关键。", correct: true, xp: 10 },
          { text: "Let's change it up every night for fun.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, consistency is probably the key.",
        next: null
      }
    }
  },
  {
    id: "the-first-hard-night",
    transition: { en: "The first night of the new routine brings some tears.", zh: "新流程的第一晚伴随着一些哭闹。" },
    title: "The First Hard Night",
    subtitle: "卧室 · 艰难的第一晚",
    avatar: "😢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This crying is harder to listen to than I expected.", zh: "这哭声比我预想的更让人揪心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but let's trust the process for now.", zh: "确实是，但我们现在先相信这个方法吧。", correct: true, xp: 10 },
          { text: "It is, so let's give up right now.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but let's trust the process for now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Even though this is hard, we shouldn't rush in immediately.", zh: "尽管这很难，我们也不应该立刻冲进去。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "Even though it's hard, let's give it a few minutes.", zh: "尽管很难，我们还是先等几分钟吧。", correct: true, xp: 10 },
          { text: "Even though it's hard, let's rush in right now.", correct: false }
        ],
        hintOnWrong: "让步句 → Even though it's hard, let's give it a few minutes.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is honestly harder on us than it is on them.", zh: "说实话，这对我们来说比对他们更难受。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's probably true, we just need to stay strong.", zh: "也许确实如此，我们只需要坚持住。", correct: true, xp: 10 },
          { text: "That's false, this is only hard for them.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's probably true, we just need to stay strong.",
        next: null
      }
    }
  },
  {
    id: "checking-in-gently",
    transition: { en: "They check in every few minutes without picking the baby up.", zh: "他们每隔几分钟就去看一下，但不把宝宝抱起来。" },
    title: "Checking In Gently",
    subtitle: "卧室 · 温和地查看",
    avatar: "🚪",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we just pat their back and leave again?", zh: "我们要不要拍拍他们的背然后再离开？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, let's keep it short and calm.", zh: "对，我们要简短又平静地做这件事。", correct: true, xp: 10 },
          { text: "No, let's stay in the room all night.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, let's keep it short and calm.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The crying seems quieter than it was ten minutes ago.", zh: "哭声好像比十分钟前小了一些。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, I think it's actually working.", zh: "确实是，我觉得这方法真的有效果。", correct: true, xp: 10 },
          { text: "It doesn't, this is getting worse and worse.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, I think it's actually working.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "They've finally settled down on their own.", zh: "他们终于自己平静下来了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "They really have, I'm honestly a little proud.", zh: "确实是，说实话我有点小骄傲。", correct: true, xp: 10 },
          { text: "They really haven't, they're still crying loudly.", correct: false }
        ],
        hintOnWrong: "现在完成时 → They really have, I'm honestly a little proud.",
        next: null
      }
    }
  },
  {
    id: "a-small-victory",
    transition: { en: "By the third night, bedtime takes far less time.", zh: "到了第三晚，入睡花的时间大大减少了。" },
    title: "A Small Victory",
    subtitle: "卧室 · 小小的胜利",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Tonight only took ten minutes to settle them.", zh: "今晚只花了十分钟就让他们安定下来了。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "That's amazing, this is actually working now.", zh: "太棒了，这方法现在真的起效果了。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped for one minute.", correct: false }
        ],
        hintOnWrong: "过去时回应 → That's amazing, this is actually working now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We're both getting more sleep than we have in months.", zh: "我们俩现在睡的比过去几个月都要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really are, I feel like a new person.", zh: "确实如此，我感觉自己都焕然一新了。", correct: true, xp: 10 },
          { text: "We really aren't, we're still just as exhausted.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really are, I feel like a new person.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's not get too excited, some nights will still be hard.", zh: "先别高兴得太早，有些晚上应该还是会很难熬。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "That's fair, let's just enjoy tonight for now.", zh: "有道理，我们先享受今晚吧。", correct: true, xp: 10 },
          { text: "Let's assume every night from now on is perfect.", correct: false }
        ],
        hintOnWrong: "接受建议 → That's fair, let's just enjoy tonight for now.",
        next: null
      }
    }
  },
  {
    id: "a-setback",
    transition: { en: "A cold sets the progress back by a few days.", zh: "一场感冒让训练进度倒退了几天。" },
    title: "A Setback",
    subtitle: "卧室 · 小小的挫折",
    avatar: "🤒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're waking up again because of this cold.", zh: "因为这场感冒，他们又开始夜醒了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "That makes sense, let's comfort them more right now.", zh: "这可以理解，我们现在多安抚他们一些吧。", correct: true, xp: 10 },
          { text: "That's strange, colds never affect sleep at all.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → That makes sense, let's comfort them more right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This setback feels less scary than the first hard night did.", zh: "这次倒退感觉比第一个艰难的夜晚要没那么吓人。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, we know we can get back on track.", zh: "确实是，我们知道自己能重新回到正轨。", correct: true, xp: 10 },
          { text: "It doesn't, this feels even worse than before.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, we know we can get back on track.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Once they're feeling better, we'll get right back to the routine.", zh: "等他们感觉好些了，我们就重新回到流程上。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Right, let's just focus on comfort for now.", zh: "对，我们现在先专注于让他们舒服些吧。", correct: true, xp: 10 },
          { text: "Right, though the routine doesn't matter anymore.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Right, let's just focus on comfort for now.",
        next: null
      }
    }
  },
  {
    id: "back-on-track",
    transition: { en: "Once the cold passes, they return to the routine successfully.", zh: "感冒好了之后，他们成功回到了原来的流程。" },
    title: "Back on Track",
    subtitle: "卧室 · 重回正轨",
    avatar: "✅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We're finally back to our normal bedtime routine.", zh: "我们终于回到了正常的睡前流程。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's such a relief, I missed this routine.", zh: "这真让人松了口气，我还挺想念这个流程的。", correct: true, xp: 10 },
          { text: "That's disappointing, the chaos was more fun.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's such a relief, I missed this routine.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This whole experience taught us more patience than I expected.", zh: "整个过程教会了我们比预想的更多的耐心。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, and I'm grateful for that lesson.", zh: "确实如此，我很感激这个经历带来的教训。", correct: true, xp: 10 },
          { text: "It really didn't, we've never once needed patience.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, and I'm grateful for that lesson.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what setbacks come, we know we can handle it now.", zh: "不管未来遇到什么挫折，我们现在都知道自己能应付。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what comes, we've got this together.", zh: "不管遇到什么，我们都能一起搞定。", correct: true, xp: 10 },
          { text: "No matter what comes, we'll probably fall apart.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what comes, we've got this together.",
        next: null
      }
    }
  },
  {
    id: "sleeping-through-the-night",
    transition: { en: "One morning, they realize the baby slept through the entire night.", zh: "一天早上，他们意识到宝宝一整晚都没醒过。" },
    title: "Sleeping Through the Night",
    subtitle: "卧室 · 一觉到天亮",
    avatar: "🌙",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Did they really sleep through the whole night?", zh: "他们真的一整晚都没醒吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, not a single wake-up, I checked.", zh: "是的，一次都没醒，我检查过了。", correct: true, xp: 10 },
          { text: "No, they woke up every single hour again.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, not a single wake-up, I checked.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I feel more rested than I have in a year.", zh: "我感觉比这一年来任何时候都休息得更好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Same here, this feels like a whole new life.", zh: "我也是，这感觉像是全新的生活一样。", correct: true, xp: 10 },
          { text: "Same here, though nothing has changed at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Same here, this feels like a whole new life.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "All those hard nights were absolutely worth it.", zh: "所有那些难熬的夜晚都完全值得了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really were, every single one of them.", zh: "确实如此，每一个夜晚都值得。", correct: true, xp: 10 },
          { text: "They really weren't, we shouldn't have bothered.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really were, every single one of them.",
        next: null
      }
    }
  },
  {
    id: "sharing-advice",
    transition: { en: "They pass along what they learned to another struggling friend.", zh: "他们把学到的经验分享给了另一位正在挣扎的朋友。" },
    title: "Sharing Advice",
    subtitle: "电话 · 分享经验",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How did you two finally get through this?", zh: "你们俩最后到底是怎么熬过来的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Consistency, patience, and a lot of coffee.", zh: "一致性、耐心，还有大量的咖啡。", correct: true, xp: 10 },
          { text: "We never actually got through it at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答方法 → Consistency, patience, and a lot of coffee.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "It's much easier when you know it'll eventually end.", zh: "当你知道它最终会结束时，一切会容易很多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, and it really does end, I promise.", zh: "确实是，而且它真的会结束的，我保证。", correct: true, xp: 10 },
          { text: "It isn't, nothing about parenting ever gets easier.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, and it really does end, I promise.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You'll get through this, no matter how hard it feels right now.", zh: "不管现在感觉多难，你们都会熬过来的。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how hard, thank you for the encouragement.", zh: "不管有多难，谢谢你的鼓励。", correct: true, xp: 10 },
          { text: "No matter how hard, I don't believe that at all.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how hard, thank you for the encouragement.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "sleepless", zh: "无眠的", category: "community" },
  { en: "woke up", zh: "醒了", category: "community" },
  { en: "sleep training", zh: "睡眠训练", category: "community" },
  { en: "methods", zh: "方法（复数）", category: "community" },
  { en: "cruel", zh: "残忍的", category: "community" },
  { en: "gentle approaches", zh: "温和的方法", category: "community" },
  { en: "growing", zh: "成长着", category: "community" },
  { en: "consistent", zh: "一致的，坚持不懈的", category: "community" },
  { en: "bedtime routine", zh: "睡前流程", category: "community" },
  { en: "stick with it", zh: "坚持下去", category: "community" },
  { en: "predictable", zh: "可预测的", category: "community" },
  { en: "usual chaos", zh: "平常的混乱", category: "community" },
  { en: "consistency", zh: "一致性", category: "community" },
  { en: "the key", zh: "关键", category: "community" },
  { en: "tears", zh: "眼泪", category: "community" },
  { en: "crying", zh: "哭闹", category: "community" },
  { en: "trust the process", zh: "相信这个方法", category: "community" },
  { en: "rush in", zh: "冲进去", category: "community" },
  { en: "stay strong", zh: "坚持住", category: "community" },
  { en: "pat", zh: "轻拍", category: "community" },
  { en: "quieter", zh: "更安静的（quiet 比较级）", category: "community" },
  { en: "settled down", zh: "平静下来了", category: "community" },
  { en: "small victory", zh: "小小的胜利", category: "community" },
  { en: "new person", zh: "焕然一新的人", category: "community" },
  { en: "setback", zh: "挫折，倒退", category: "community" },
  { en: "cold", zh: "感冒", category: "community" },
  { en: "comfort", zh: "安抚", category: "community" },
  { en: "scary", zh: "吓人的", category: "community" },
  { en: "back on track", zh: "回到正轨", category: "community" },
  { en: "missed", zh: "想念", category: "community" },
  { en: "lesson", zh: "教训，经验", category: "community" },
  { en: "wake-up", zh: "醒来", category: "community" },
  { en: "rested", zh: "休息好的", category: "community" },
  { en: "whole new life", zh: "全新的生活", category: "community" },
  { en: "absolutely", zh: "完全地", category: "community" },
  { en: "pass along", zh: "传递，分享", category: "community" },
  { en: "struggling", zh: "挣扎中的", category: "community" },
  { en: "get through", zh: "熬过", category: "community" },
  { en: "eventually", zh: "最终", category: "community" },
  { en: "encouragement", zh: "鼓励", category: "community" }
);
