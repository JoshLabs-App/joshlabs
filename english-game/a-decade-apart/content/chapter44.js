// 内容数据层：第四十四章，紧接第四十三章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter43.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：Emma的表弟大学毕业，一家三口去参加毕业典礼。全新词汇领域：
// 学位帽长袍/毕业典礼流程/致辞/拍照留念。

GAME_CONTENT.scenes.push(
  {
    id: "getting-ready-for-the-ceremony",
    transition: { en: "Emma's cousin is graduating from university, and they plan to attend.", zh: "Emma的表弟即将大学毕业，他们打算去参加。" },
    title: "Getting Ready for the Ceremony",
    subtitle: "家里 · 准备出发",
    avatar: "🎓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What time does the ceremony actually start?", zh: "典礼具体几点开始？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "It starts at ten, but doors open earlier.", zh: "十点开始，但门会更早开放。", correct: true, xp: 10 },
          { text: "It doesn't have a start time at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答时间 → It starts at ten, but doors open earlier.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Should we bring flowers, or is that too much?", zh: "我们要带花吗，还是这样有点太隆重了？", },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Flowers would be a really sweet gesture.", zh: "带花会是个很温馨的举动。", correct: true, xp: 10 },
          { text: "Flowers seem completely unnecessary for this.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Flowers would be a really sweet gesture.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll need to leave early to find good parking.", zh: "我们得早点出发才能找到好的停车位。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Good thinking, let's leave in twenty minutes.", zh: "想得周到，我们二十分钟后出发吧。", correct: true, xp: 10 },
          { text: "Good thinking, though parking never matters much.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Good thinking, let's leave in twenty minutes.",
        next: null
      }
    }
  },
  {
    id: "arriving-at-the-venue",
    transition: { en: "They arrive at the large auditorium filled with proud families.", zh: "他们抵达了挤满自豪家属的大礼堂。" },
    title: "Arriving at the Venue",
    subtitle: "礼堂 · 到达现场",
    avatar: "🏛️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This place is more crowded than I expected.", zh: "这地方比我预想的还要拥挤。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's find seats quickly.", zh: "确实是，我们赶紧找座位吧。", correct: true, xp: 10 },
          { text: "It isn't, this place looks nearly empty.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's find seats quickly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you see the stage from back here?", zh: "从后面这里你能看到舞台吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can see it fine, actually.", zh: "其实我能看得很清楚。", correct: true, xp: 10 },
          { text: "I can't see anything from back here.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can see it fine, actually.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's save a seat for your aunt and uncle.", zh: "我们留个座位给你的姑姑姑父吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good call, I'll put my bag on that seat.", zh: "好主意，我把包放在那个座位上。", correct: true, xp: 10 },
          { text: "Let's not, they can find their own seats.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good call, I'll put my bag on that seat.",
        next: null
      }
    }
  },
  {
    id: "the-procession",
    transition: { en: "Graduates in caps and gowns file in to applause.", zh: "身穿学位服的毕业生们在掌声中鱼贯而入。" },
    title: "The Procession",
    subtitle: "礼堂 · 入场仪式",
    avatar: "👨‍🎓",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "There he is, can you spot him in the crowd?", zh: "他在那儿，你能在人群中认出他吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can spot him, he's waving right now.", zh: "我能看到他，他正在挥手呢。", correct: true, xp: 10 },
          { text: "I can't spot him anywhere in this crowd.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can spot him, he's waving right now.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "He looks so much older than I remember.", zh: "他看起来比我记忆中老成多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "He really does, time flies, doesn't it?", zh: "确实是，时间过得真快，不是吗？", correct: true, xp: 10 },
          { text: "He really doesn't, he looks exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → He really does, time flies, doesn't it?",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I'm getting emotional just watching this.", zh: "光是看着这一幕我就开始感动了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Same here, I wasn't expecting to tear up.", zh: "我也是，没想到自己会想哭。", correct: true, xp: 10 },
          { text: "I'm not feeling anything at all, honestly.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → Same here, I wasn't expecting to tear up.",
        next: null
      }
    }
  },
  {
    id: "the-commencement-speech",
    transition: { en: "A guest speaker takes the stage to address the graduating class.", zh: "一位嘉宾演讲人走上舞台，向毕业班致辞。" },
    title: "The Commencement Speech",
    subtitle: "礼堂 · 毕业演讲",
    avatar: "🎤",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Failure taught me more than success ever did.", zh: "失败教会我的，比成功教会我的还要多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's such a powerful thing to say.", zh: "这句话说得真是有力量。", correct: true, xp: 10 },
          { text: "That's a strange thing to say to graduates.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's such a powerful thing to say.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "If you follow your curiosity, it will never fail you.", zh: "如果你追随自己的好奇心，它永远不会辜负你。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's true, I should follow mine more often.", zh: "如果真是这样，我应该更常追随自己的好奇心。", correct: true, xp: 10 },
          { text: "If that's true, curiosity still seems pointless.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's true, I should follow mine more often.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This speech is definitely making me reflect on my own life.", zh: "这场演讲确实让我反思起自己的人生。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Mine too, it's more relatable than I thought.", zh: "我也是，这演讲比我想的更能引起共鸣。", correct: true, xp: 10 },
          { text: "Not mine, this speech feels totally irrelevant.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → Mine too, it's more relatable than I thought.",
        next: null
      }
    }
  },
  {
    id: "calling-his-name",
    transition: { en: "Names are called one by one as graduates cross the stage.", zh: "毕业生们依次被点名走上舞台。" },
    title: "Calling His Name",
    subtitle: "礼堂 · 点名颁证",
    avatar: "📜",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "They're getting close to his name now.", zh: "现在快念到他的名字了。" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "I'm ready with the camera, just in case.", zh: "我已经拿好相机了，以防万一。", correct: true, xp: 10 },
          { text: "I'm not ready, and I don't have a camera.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → I'm ready with the camera, just in case.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There he goes, walking across the stage!", zh: "他上台了，正走过舞台！" },
        skill: "community",
        grammarTag: "present-continuous",
        choices: [
          { text: "Look at him go, he's beaming with pride.", zh: "看看他，满脸都是骄傲的笑容。", correct: true, xp: 10 },
          { text: "He's barely moving, this is taking forever.", correct: false }
        ],
        hintOnWrong: "现在进行时回应 → Look at him go, he's beaming with pride.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "He's officially got his diploma now.", zh: "他现在正式拿到学位证书了。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "He finally did it, after all those years.", zh: "经过这些年的努力，他终于做到了。", correct: true, xp: 10 },
          { text: "That diploma doesn't really mean anything, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → He finally did it, after all those years.",
        next: null
      }
    }
  },
  {
    id: "cheering-from-the-crowd",
    transition: { en: "The whole family cheers loudly as his name echoes through the hall.", zh: "他的名字在礼堂里回响，全家人大声欢呼。" },
    title: "Cheering from the Crowd",
    subtitle: "礼堂 · 全场欢呼",
    avatar: "📣",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We're being louder than everyone else, aren't we?", zh: "我们是不是比其他人都更大声？" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Definitely, but he deserves every bit of it.", zh: "绝对是，但这都是他应得的。", correct: true, xp: 10 },
          { text: "No, actually we're the quietest ones here.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Definitely, but he deserves every bit of it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Did you see him smile when he heard us cheering?", zh: "你看到他听到我们欢呼时笑了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I did, his whole face lit up.", zh: "看到了，他整张脸都亮了起来。", correct: true, xp: 10 },
          { text: "I didn't see anything, my eyes were closed.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I did, his whole face lit up.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Moments like this make all the noise worth it.", zh: "像这样的时刻让所有的喧闹都值得。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "They really do, no regrets at all.", zh: "确实如此，一点都不后悔。", correct: true, xp: 10 },
          { text: "They don't, we probably embarrassed him.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → They really do, no regrets at all.",
        next: null
      }
    }
  },
  {
    id: "photos-after-the-ceremony",
    transition: { en: "Outside, everyone gathers for photos in caps and gowns.", zh: "典礼结束后，大家聚在外面穿着学位服拍照。" },
    title: "Photos After the Ceremony",
    subtitle: "礼堂外 · 拍照留念",
    avatar: "📸",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you toss your cap in the air for this one?", zh: "这张照片你能把帽子抛向空中吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can definitely do that, on three.", zh: "我完全可以，数到三就抛。", correct: true, xp: 10 },
          { text: "I can't, I might lose the cap somewhere.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can definitely do that, on three.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This photo turned out better than the last one.", zh: "这张照片比上一张拍得更好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It did, let's use this one for the frame.", zh: "确实是，我们就用这张来装框吧。", correct: true, xp: 10 },
          { text: "It didn't, let's delete this one immediately.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It did, let's use this one for the frame.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's get one more with the whole family together.", zh: "我们再拍一张全家福吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, everyone squeeze in close.", zh: "好，大家都靠近一点吧。", correct: true, xp: 10 },
          { text: "Let's skip that one, we have enough already.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, everyone squeeze in close.",
        next: null
      }
    }
  },
  {
    id: "a-toast-at-lunch",
    transition: { en: "The family celebrates over lunch at a nearby restaurant.", zh: "全家人在附近一家餐厅共进午餐庆祝。" },
    title: "A Toast at Lunch",
    subtitle: "餐厅 · 庆功午餐",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I'd like to say a few words about my nephew.", zh: "我想说几句关于我侄子的话。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, please, we'd love to hear it.", zh: "当然，请说吧，我们很想听。", correct: true, xp: 10 },
          { text: "Sorry, we'd rather skip the speeches today.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, please, we'd love to hear it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "He's worked harder than anyone I know for this.", zh: "为了这一切，他比我认识的任何人都努力。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "He truly has, and it clearly paid off.", zh: "他确实做到了，而且显然值得了。", correct: true, xp: 10 },
          { text: "He hasn't, honestly, this was pretty easy for him.", correct: false }
        ],
        hintOnWrong: "回应比较句 → He truly has, and it clearly paid off.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "To many more milestones ahead for this whole family.", zh: "敬这个大家庭未来更多的里程碑。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To many more, cheers to all of us.", zh: "敬更多的里程碑，为我们所有人干杯。", correct: true, xp: 10 },
          { text: "To fewer milestones, honestly, life feels busy enough.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒 → To many more, cheers to all of us.",
        next: null
      }
    }
  },
  {
    id: "talking-about-what-comes-next",
    transition: { en: "Over dessert, the graduate shares his plans for the future.", zh: "吃甜点时，这位毕业生分享了他对未来的计划。" },
    title: "Talking About What Comes Next",
    subtitle: "餐厅 · 谈未来打算",
    avatar: "🗣️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What are your plans now that you've graduated?", zh: "毕业之后你有什么打算？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I've actually just accepted a job offer.", zh: "我其实刚接受了一份工作邀约。", correct: true, xp: 10 },
          { text: "I have absolutely no plans of any kind.", correct: false }
        ],
        hintOnWrong: "wh-问题回答计划 → I've actually just accepted a job offer.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That's such exciting news, congratulations again.", zh: "这真是个令人兴奋的消息，再次恭喜你。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Thank you, I still can't quite believe it.", zh: "谢谢，我到现在还有点不敢相信。", correct: true, xp: 10 },
          { text: "Thank you, though I already knew this would happen.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Thank you, I still can't quite believe it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We're so proud of the person you've become.", zh: "我们为你成为这样的人感到骄傲。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That means everything, thank you all so much.", zh: "这句话对我意义非凡，非常感谢大家。", correct: true, xp: 10 },
          { text: "That's a strange thing to say, honestly.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → That means everything, thank you all so much.",
        next: null
      }
    }
  },
  {
    id: "the-drive-home-reflecting",
    transition: { en: "Driving home, they talk about how quickly time passes.", zh: "开车回家的路上，他们聊起时间过得有多快。" },
    title: "The Drive Home, Reflecting",
    subtitle: "车上 · 归途感悟",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "It feels like just yesterday he was a kid.", zh: "感觉他还是个孩子的日子就在昨天。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really does, time moves so fast.", zh: "确实如此，时间过得太快了。", correct: true, xp: 10 },
          { text: "It doesn't, he's always seemed grown up.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really does, time moves so fast.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Someday, we'll be watching our own child walk across a stage like that.", zh: "有一天，我们也会看着自己的孩子这样走过舞台。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "We will, and I already can't wait for that day.", zh: "会的，我已经等不及那一天了。", correct: true, xp: 10 },
          { text: "We won't, that day feels impossibly far away.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → We will, and I already can't wait for that day.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how far off that day is, moments like today make me hopeful.", zh: "不管那天有多遥远，像今天这样的时刻让我充满希望。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how far off, I feel that hope too.", zh: "不管有多遥远，我也感受到了这份希望。", correct: true, xp: 10 },
          { text: "No matter how far off, I try not to think about it.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how far off, I feel that hope too.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "graduating", zh: "毕业中的", category: "community" },
  { en: "university", zh: "大学", category: "community" },
  { en: "attend", zh: "参加", category: "community" },
  { en: "doors open", zh: "开放入场", category: "community" },
  { en: "sweet gesture", zh: "温馨的举动", category: "community" },
  { en: "parking", zh: "停车", category: "community" },
  { en: "venue", zh: "场地", category: "community" },
  { en: "auditorium", zh: "礼堂", category: "community" },
  { en: "proud", zh: "自豪的", category: "community" },
  { en: "crowded", zh: "拥挤的", category: "community" },
  { en: "stage", zh: "舞台", category: "community" },
  { en: "aunt", zh: "姑姑，阿姨", category: "community" },
  { en: "uncle", zh: "叔叔，舅舅", category: "community" },
  { en: "procession", zh: "入场仪式", category: "community" },
  { en: "caps and gowns", zh: "学位帽长袍", category: "community" },
  { en: "applause", zh: "掌声", category: "community" },
  { en: "spot", zh: "认出，发现", category: "community" },
  { en: "waving", zh: "挥手", category: "community" },
  { en: "time flies", zh: "时间过得真快", category: "community" },
  { en: "tear up", zh: "想哭", category: "community" },
  { en: "commencement speech", zh: "毕业演讲", category: "community" },
  { en: "guest speaker", zh: "嘉宾演讲人", category: "community" },
  { en: "failure", zh: "失败", category: "community" },
  { en: "success", zh: "成功", category: "community" },
  { en: "powerful", zh: "有力量的", category: "community" },
  { en: "curiosity", zh: "好奇心", category: "community" },
  { en: "relatable", zh: "能引起共鸣的", category: "community" },
  { en: "cross the stage", zh: "走过舞台", category: "community" },
  { en: "just in case", zh: "以防万一", category: "community" },
  { en: "beaming with pride", zh: "满脸骄傲的笑容", category: "community" },
  { en: "diploma", zh: "学位证书", category: "community" },
  { en: "echoes", zh: "回响", category: "community" },
  { en: "cheer", zh: "欢呼", category: "community" },
  { en: "louder", zh: "更大声的（loud 比较级）", category: "community" },
  { en: "deserves", zh: "应得", category: "community" },
  { en: "lit up", zh: "亮了起来", category: "community" },
  { en: "regrets", zh: "遗憾", category: "community" },
  { en: "embarrassed", zh: "使尴尬的", category: "community" },
  { en: "toss", zh: "抛", category: "community" },
  { en: "cap", zh: "学位帽", category: "community" },
  { en: "turned out", zh: "结果是", category: "community" },
  { en: "frame", zh: "相框", category: "community" },
  { en: "squeeze in", zh: "挤在一起", category: "community" },
  { en: "nephew", zh: "侄子，外甥", category: "community" },
  { en: "worked harder", zh: "更努力地工作过", category: "community" },
  { en: "milestones", zh: "里程碑（复数）", category: "community" },
  { en: "accepted", zh: "接受了", category: "community" },
  { en: "job offer", zh: "工作邀约", category: "community" },
  { en: "exciting news", zh: "令人兴奋的消息", category: "community" },
  { en: "become", zh: "成为", category: "community" },
  { en: "just yesterday", zh: "就像昨天一样", category: "community" },
  { en: "grown up", zh: "长大成人的", category: "community" },
  { en: "can't wait", zh: "迫不及待", category: "community" },
  { en: "impossibly", zh: "难以置信地", category: "community" }
);
