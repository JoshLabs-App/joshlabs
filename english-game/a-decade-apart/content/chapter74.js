// 内容数据层：第七十四章，紧接第七十三章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人第一次带孩子去雪场滑雪。全新词汇领域：雪具租赁/初级雪道/
// 滑雪缆车/摔倒与爬起。

GAME_CONTENT.scenes.push(
  {
    id: "planning-a-ski-trip",
    transition: { en: "Friends invite them on a day trip to a nearby ski hill.", zh: "朋友们邀请他们去附近的雪场玩一天。" },
    title: "Planning a Ski Trip",
    subtitle: "群聊 · 计划滑雪之旅",
    avatar: "⛷️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have either of us ever skied before?", zh: "我们俩有人滑过雪吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "Neither of us has, this will be our first time.", zh: "我们俩都没有，这将是我们第一次。", correct: true, xp: 10 },
          { text: "Both of us have skied since childhood.", correct: false }
        ],
        hintOnWrong: "现在完成时 → Neither of us has, this will be our first time.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Do you think our toddler is old enough for the bunny hill?", zh: "你觉得我们家孩子的年纪够上初级雪道了吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I think so, plenty of kids start this young.", zh: "我觉得可以，很多孩子这个年纪就开始了。", correct: true, xp: 10 },
          { text: "No, skiing is only for teenagers and adults.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I think so, plenty of kids start this young.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's take a beginner lesson before hitting the slopes.", zh: "我们上雪道之前先上一节初学者课程吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's not skip that step.", zh: "好主意，我们不要跳过这一步。", correct: true, xp: 10 },
          { text: "Let's just wing it without any lessons.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's not skip that step.",
        next: null
      }
    }
  },
  {
    id: "renting-equipment",
    transition: { en: "They visit the rental shop for skis, boots, and helmets.", zh: "他们去租赁店租雪板、雪靴和头盔。" },
    title: "Renting Equipment",
    subtitle: "租赁店 · 租借装备",
    avatar: "🎿",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What size boots do you usually wear?", zh: "您平常穿多大码的靴子？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I usually wear a size nine, I think.", zh: "我一般穿九码，我觉得。", correct: true, xp: 10 },
          { text: "I never wear boots, ever, at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答尺码 → I usually wear a size nine, I think.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "These skis are shorter than the ones you rented last time.", zh: "这些雪板比您上次租的要短。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That makes sense, shorter should be easier for beginners.", zh: "有道理，短一点对初学者来说应该更容易。", correct: true, xp: 10 },
          { text: "Length doesn't matter, let's just grab any pair.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That makes sense, shorter should be easier for beginners.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please make sure the helmet fits snugly.", zh: "请确保头盔戴得贴合。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Got it, I'll adjust the strap now.", zh: "明白了，我现在就调整一下带子。", correct: true, xp: 10 },
          { text: "Sorry, helmets seem unnecessary for beginners.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Got it, I'll adjust the strap now.",
        next: null
      }
    }
  },
  {
    id: "learning-to-stand",
    transition: { en: "Their first challenge is simply standing up on skis.", zh: "他们的第一个挑战就是简单地站稳在雪板上。" },
    title: "Learning to Stand",
    subtitle: "初级雪道 · 学习站立",
    avatar: "😅",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This is harder than I ever imagined it would be.", zh: "这比我曾经想象的要难得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, standing alone feels impossible.", zh: "确实如此，光是站着都感觉不可能。", correct: true, xp: 10 },
          { text: "It really isn't, this feels completely natural.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, standing alone feels impossible.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you keep your knees bent while standing?", zh: "站着的时候你能保持膝盖弯曲吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, though my legs are already shaking.", zh: "可以，不过我的腿已经在抖了。", correct: true, xp: 10 },
          { text: "I can't, my legs refuse to bend at all.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, though my legs are already shaking.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Everyone falls a lot on their first day, this is normal.", zh: "每个人第一天都会摔很多次，这很正常。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That's reassuring, we feel a little better now.", zh: "这让人安心，我们现在感觉好一点了。", correct: true, xp: 10 },
          { text: "That's disappointing, we hoped to be naturals already.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That's reassuring, we feel a little better now.",
        next: null
      }
    }
  },
  {
    id: "the-first-fall",
    transition: { en: "A sudden wobble sends one of them tumbling into the snow.", zh: "一个突然的摇晃让其中一人摔进了雪里。" },
    title: "The First Fall",
    subtitle: "初级雪道 · 首次摔倒",
    avatar: "❄️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are you okay? That looked like a soft landing at least.", zh: "你还好吗？至少看起来摔得挺软的。" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "I'm okay, snow is surprisingly forgiving.", zh: "我没事，雪比想象中要软得多。", correct: true, xp: 10 },
          { text: "I'm not okay, call an ambulance right now.", correct: false }
        ],
        hintOnWrong: "肯定回答 → I'm okay, snow is surprisingly forgiving.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Getting back up is trickier than falling down.", zh: "重新站起来比摔倒本身要棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I have no idea how to do this.", zh: "确实如此，我完全不知道该怎么做。", correct: true, xp: 10 },
          { text: "It isn't, standing back up is completely simple.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I have no idea how to do this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's laugh about this instead of getting frustrated.", zh: "我们笑一笑就好，别为此感到沮丧了。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this is honestly kind of funny.", zh: "好啊，说实话这挺搞笑的。", correct: true, xp: 10 },
          { text: "Let's just quit and go home right now.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this is honestly kind of funny.",
        next: null
      }
    }
  },
  {
    id: "the-toddlers-ski-lesson",
    transition: { en: "Meanwhile, their toddler takes a lesson at the kids' area.", zh: "与此同时，他们的孩子在儿童区上了一节课。" },
    title: "The Toddler's Ski Lesson",
    subtitle: "儿童雪场 · 孩子的滑雪课",
    avatar: "🧒",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Your child is picking this up faster than most adults do.", zh: "您的孩子学得比大多数成年人还要快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's amazing, kids really do learn quickly.", zh: "太厉害了，孩子学东西确实快。", correct: true, xp: 10 },
          { text: "That's odd, adults always learn faster than kids.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's amazing, kids really do learn quickly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "They're braver on this hill than I expected them to be.", zh: "他们在这个雪坡上比我预想的要勇敢。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "They really are, I'm learning from them, honestly.", zh: "确实如此，说实话，我都在向他们学习。", correct: true, xp: 10 },
          { text: "They really aren't, they seem terrified up there.", correct: false }
        ],
        hintOnWrong: "回应比较句 → They really are, I'm learning from them, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's watch them finish this run before we head back.", zh: "我们回去之前先看他们把这一趟滑完吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, this is too cute to miss.", zh: "好啊，这画面太可爱了不能错过。", correct: true, xp: 10 },
          { text: "Let's just leave now without watching.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, this is too cute to miss.",
        next: null
      }
    }
  },
  {
    id: "the-first-real-slide",
    transition: { en: "One of them finally glides a few meters without falling.", zh: "其中一人终于顺畅地滑了几米，没有摔倒。" },
    title: "The First Real Slide",
    subtitle: "初级雪道 · 第一次真正滑行",
    avatar: "🛷",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "I actually just glided without falling over!", zh: "我刚刚真的滑起来了，没有摔倒！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "You did it, that was actually really smooth!", zh: "你做到了，那滑得真的很顺！", correct: true, xp: 10 },
          { text: "You didn't, you fell down immediately.", correct: false }
        ],
        hintOnWrong: "过去时回应 → You did it, that was actually really smooth!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "That felt more natural than I expected it to feel.", zh: "那种感觉比我预想的要自然。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, maybe we're getting the hang of this.", zh: "确实如此，也许我们开始上手了。", correct: true, xp: 10 },
          { text: "It really didn't, that felt completely wrong.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, maybe we're getting the hang of this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's try that same slope one more time.", zh: "我们再试一次同样的坡道吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, I want to feel that again.", zh: "好啊，我还想再感受一次那种感觉。", correct: true, xp: 10 },
          { text: "Let's move to a much steeper slope instead.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, I want to feel that again.",
        next: null
      }
    }
  },
  {
    id: "riding-the-chairlift",
    transition: { en: "Feeling braver, they try the chairlift for a slightly longer run.", zh: "变得更大胆后，他们尝试坐缆车去一条稍长的雪道。" },
    title: "Riding the Chairlift",
    subtitle: "缆车 · 乘坐滑雪缆车",
    avatar: "🚡",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This chairlift is higher off the ground than I expected.", zh: "这个缆车离地面比我预想的要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but the view up here is worth it.", zh: "确实是，但这上面的景色很值得。", correct: true, xp: 10 },
          { text: "It isn't, this chairlift feels perfectly low.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but the view up here is worth it.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can you lower the safety bar for us?", zh: "你能帮我们把安全杆放下来吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, one second, let me reach it.", zh: "可以，等我一下，我来够一下。", correct: true, xp: 10 },
          { text: "I can't, safety bars seem unnecessary honestly.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, one second, let me reach it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Getting off might be trickier than getting on.", zh: "下车可能比上车更棘手。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's stay calm and just slide off gently.", zh: "我们保持冷静，轻轻滑下去就好。", correct: true, xp: 10 },
          { text: "Let's just jump off as fast as possible.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's stay calm and just slide off gently.",
        next: null
      }
    }
  },
  {
    id: "a-wobbly-descent",
    transition: { en: "The longer run down proves wobbly but exhilarating.", zh: "这条更长的下坡路线走得摇摇晃晃但令人兴奋。" },
    title: "A Wobbly Descent",
    subtitle: "雪道 · 摇晃的下坡",
    avatar: "🎢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "My legs are shaking more than they ever have before!", zh: "我的腿比以往任何时候都抖得厉害！" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but we're actually doing this!", zh: "我也是，但我们真的在做这件事！", correct: true, xp: 10 },
          { text: "Mine feel completely steady, honestly.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but we're actually doing this!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This run is definitely scarier than the bunny hill.", zh: "这条道肯定比初级道更吓人。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, but the thrill is honestly kind of fun.", zh: "确实是，但说实话这种刺激感挺有意思的。", correct: true, xp: 10 },
          { text: "It is, so let's just stop here and walk down.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, but the thrill is honestly kind of fun.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We actually made it all the way down!", zh: "我们真的一路滑到底了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did it, I'm honestly shaking with excitement.", zh: "我们做到了，说实话我都因为兴奋在发抖。", correct: true, xp: 10 },
          { text: "We didn't, we're still stuck halfway up.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did it, I'm honestly shaking with excitement.",
        next: null
      }
    }
  },
  {
    id: "warming-up-by-the-fire",
    transition: { en: "They retreat to the lodge to warm up by the fireplace.", zh: "他们回到小木屋，在壁炉旁取暖。" },
    title: "Warming Up by the Fire",
    subtitle: "雪场小木屋 · 壁炉旁取暖",
    avatar: "🔥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This hot chocolate tastes better than any I've had before.", zh: "这杯热可可比我以前喝过的任何一杯都要好喝。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really does, maybe it's the cold weather.", zh: "确实如此，也许是因为天气冷的缘故。", correct: true, xp: 10 },
          { text: "It really doesn't, this tastes exactly the same.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really does, maybe it's the cold weather.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "My whole body feels more sore than it has in years.", zh: "我全身比这些年来任何时候都要酸痛。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Mine too, but it's the good kind of sore.", zh: "我也是，但这是一种舒服的酸痛。", correct: true, xp: 10 },
          { text: "Mine feels perfectly fine, actually.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Mine too, but it's the good kind of sore.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This turned out to be more fun than I ever expected.", zh: "这次的乐趣比我曾经预想的要多得多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, let's make this a yearly trip.", zh: "确实如此，我们把这变成每年一次的旅行吧。", correct: true, xp: 10 },
          { text: "It really didn't, this was a waste of a day.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, let's make this a yearly trip.",
        next: null
      }
    }
  },
  {
    id: "already-planning-next-time",
    transition: { en: "On the drive home, they're already dreaming about their next ski day.", zh: "回家的路上，他们已经在憧憬下一次滑雪日了。" },
    title: "Already Planning Next Time",
    subtitle: "车上 · 期待下一次",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've come further than I ever thought we would today.", zh: "今天我们进步的程度超出了我曾经的想象。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "We really have, and it's only our first day.", zh: "确实如此，而这才只是我们的第一天。", correct: true, xp: 10 },
          { text: "We really haven't, we barely improved at all.", correct: false }
        ],
        hintOnWrong: "回应比较句 → We really have, and it's only our first day.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Our child might end up skiing better than both of us.", zh: "我们家孩子可能最终会滑得比我们俩都好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's true, and I'd be honestly delighted about that.", zh: "确实如此，说实话我会很乐意看到这一点。", correct: true, xp: 10 },
          { text: "That's impossible, kids never surpass their parents.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's true, and I'd be honestly delighted about that.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how sore we are tomorrow, today was worth every fall.", zh: "不管明天有多酸痛，今天的每一次摔倒都值得。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how sore, I'd do this again tomorrow.", zh: "不管有多酸痛，我明天还愿意再来一次。", correct: true, xp: 10 },
          { text: "No matter how sore, I'll never ski again.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how sore, I'd do this again tomorrow.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "ski hill", zh: "雪场", category: "community" },
  { en: "bunny hill", zh: "初级雪道", category: "community" },
  { en: "beginner lesson", zh: "初学者课程", category: "community" },
  { en: "slopes", zh: "雪道（复数）", category: "community" },
  { en: "rental shop", zh: "租赁店", category: "community" },
  { en: "skis", zh: "雪板（复数）", category: "community" },
  { en: "boots", zh: "雪靴（复数）", category: "community" },
  { en: "helmets", zh: "头盔（复数）", category: "community" },
  { en: "shorter", zh: "更短的（short 比较级）", category: "community" },
  { en: "fits snugly", zh: "戴得贴合", category: "community" },
  { en: "strap", zh: "带子", category: "community" },
  { en: "standing up", zh: "站起来", category: "community" },
  { en: "knees bent", zh: "膝盖弯曲", category: "community" },
  { en: "shaking", zh: "颤抖", category: "community" },
  { en: "falls", zh: "摔倒（复数）", category: "community" },
  { en: "wobble", zh: "摇晃", category: "community" },
  { en: "tumbling", zh: "跌倒", category: "community" },
  { en: "soft landing", zh: "软着陆", category: "community" },
  { en: "forgiving", zh: "宽容的，不那么硬的", category: "community" },
  { en: "getting back up", zh: "重新站起来", category: "community" },
  { en: "kids' area", zh: "儿童区", category: "community" },
  { en: "picking this up", zh: "学会这个", category: "community" },
  { en: "braver", zh: "更勇敢的（brave 比较级）", category: "community" },
  { en: "run", zh: "一趟滑道", category: "community" },
  { en: "glided", zh: "滑行了", category: "community" },
  { en: "smooth", zh: "顺畅的", category: "community" },
  { en: "getting the hang of", zh: "开始上手", category: "community" },
  { en: "steeper", zh: "更陡的（steep 比较级）", category: "community" },
  { en: "chairlift", zh: "滑雪缆车", category: "community" },
  { en: "off the ground", zh: "离地", category: "community" },
  { en: "safety bar", zh: "安全杆", category: "community" },
  { en: "sliding off", zh: "滑下去", category: "community" },
  { en: "descent", zh: "下坡", category: "community" },
  { en: "exhilarating", zh: "令人兴奋的", category: "community" },
  { en: "scarier", zh: "更吓人的（scary 比较级）", category: "community" },
  { en: "thrill", zh: "刺激感", category: "community" },
  { en: "lodge", zh: "小木屋", category: "community" },
  { en: "fireplace", zh: "壁炉", category: "community" },
  { en: "hot chocolate", zh: "热可可", category: "community" },
  { en: "cold weather", zh: "寒冷天气", category: "community" },
  { en: "good kind of sore", zh: "舒服的酸痛", category: "community" },
  { en: "yearly trip", zh: "每年一次的旅行", category: "community" },
  { en: "come further", zh: "取得了更多进步", category: "community" },
  { en: "surpass", zh: "超越", category: "community" },
  { en: "delighted", zh: "感到高兴的", category: "community" }
);
