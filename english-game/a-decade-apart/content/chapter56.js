// 内容数据层：第五十六章，紧接第五十五章——同一个 GAME_CONTENT 对象继续 push。
// Tier: L4（不引入新grammarTag，继续场景领域切换策略）
// 剧情：两人联合朋友们为一位老友筹备一场惊喜生日派对。全新词汇领域：
// 保密行动/借口/惊喜揭晓/协调安排。

GAME_CONTENT.scenes.push(
  {
    id: "the-secret-plan",
    transition: { en: "A group chat starts buzzing about a friend's upcoming fortieth birthday.", zh: "一个群聊因为一位朋友即将到来的四十岁生日热闹了起来。" },
    title: "The Secret Plan",
    subtitle: "手机 · 秘密计划",
    avatar: "🤫",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Should we throw her a surprise party this year?", zh: "我们今年要给她办个惊喜派对吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, she deserves something special this year.", zh: "好啊，今年她值得拥有点特别的东西。", correct: true, xp: 10 },
          { text: "No, surprises are always a terrible idea.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, she deserves something special this year.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We'll need to keep this a complete secret.", zh: "我们得把这件事完全保密。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Agreed, not a single word to her.", zh: "同意，一个字都不能跟她透露。", correct: true, xp: 10 },
          { text: "Agreed, though we should probably tell her anyway.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Agreed, not a single word to her.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's create a group chat without her in it.", zh: "我们建一个不加她的群聊吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, I'll set that up right now.", zh: "好主意，我现在就建。", correct: true, xp: 10 },
          { text: "Let's just plan everything in the group with her.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, I'll set that up right now.",
        next: null
      }
    }
  },
  {
    id: "finding-a-venue",
    transition: { en: "They search for a venue that can host without being obvious.", zh: "他们寻找一个既能办派对又不会太张扬的场地。" },
    title: "Finding a Venue",
    subtitle: "手机 · 寻找场地",
    avatar: "🏢",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This venue is quieter than the one we used last time.", zh: "这个场地比我们上次用的更安静。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's perfect, less noise means less suspicion.", zh: "太好了，噪音越小引起怀疑的可能就越小。", correct: true, xp: 10 },
          { text: "That's bad, we want a loud, obvious place.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's perfect, less noise means less suspicion.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Can they hold thirty people comfortably?", zh: "这里能舒适地容纳三十个人吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "They can, that fits our guest list perfectly.", zh: "可以，这正好符合我们的宾客名单。", correct: true, xp: 10 },
          { text: "They can't, this place barely fits five people.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → They can, that fits our guest list perfectly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll book it under a fake reason, just in case.", zh: "为了保险起见，我们用一个假借口来预订场地。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Smart move, let's say it's a work event.", zh: "聪明的做法，我们就说是公司活动吧。", correct: true, xp: 10 },
          { text: "Smart move, let's just tell her the truth.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Smart move, let's say it's a work event.",
        next: null
      }
    }
  },
  {
    id: "coordinating-with-friends",
    transition: { en: "They divide up tasks among a growing group of friends.", zh: "他们在越来越多的朋友之间分配任务。" },
    title: "Coordinating with Friends",
    subtitle: "群聊 · 协调分工",
    avatar: "👥",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Who's handling the cake and decorations?", zh: "谁负责蛋糕和装饰？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'll take care of both of those.", zh: "这两样我来负责。", correct: true, xp: 10 },
          { text: "Nobody's handling anything at all, honestly.", correct: false }
        ],
        hintOnWrong: "wh-问题回答分工 → I'll take care of both of those.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This planning has become more complicated than I expected.", zh: "这个策划比我预想的要复杂多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It has, but it's fun coordinating everyone.", zh: "确实是，但协调大家其实挺有趣的。", correct: true, xp: 10 },
          { text: "It hasn't, this has been incredibly simple.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It has, but it's fun coordinating everyone.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's set a deadline for everyone to RSVP.", zh: "我们给大家设一个回复出席与否的截止时间吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Good idea, let's say by the end of the week.", zh: "好主意，我们就定在本周末之前吧。", correct: true, xp: 10 },
          { text: "Let's not set any deadlines, that seems too strict.", correct: false }
        ],
        hintOnWrong: "接受建议 → Good idea, let's say by the end of the week.",
        next: null
      }
    }
  },
  {
    id: "inventing-a-cover-story",
    transition: { en: "They invent a believable reason to get her to the venue.", zh: "他们编了一个可信的理由，把她骗到场地去。" },
    title: "Inventing a Cover Story",
    subtitle: "家里 · 编造借口",
    avatar: "🎭",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "What excuse should we use to bring her there?", zh: "我们应该用什么借口把她带过去？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Let's tell her we're just meeting for dinner.", zh: "我们就说只是一起吃个饭吧。", correct: true, xp: 10 },
          { text: "We shouldn't use any excuse at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Let's tell her we're just meeting for dinner.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This lie is easier to keep up than I thought.", zh: "这个谎言比我想的要好维持。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, she hasn't suspected a thing.", zh: "确实如此，她一点都没起疑心。", correct: true, xp: 10 },
          { text: "It really isn't, she already figured it out.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, she hasn't suspected a thing.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please stick to the story, no matter what she asks.", zh: "不管她问什么，都请坚持这个说法。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Of course, I won't slip up.", zh: "当然，我不会说漏嘴的。", correct: true, xp: 10 },
          { text: "Sorry, I already told her the truth.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Of course, I won't slip up.",
        next: null
      }
    }
  },
  {
    id: "decorating-in-secret",
    transition: { en: "While she's distracted, everyone rushes to decorate the venue.", zh: "趁她被支开的时候，大家赶紧布置场地。" },
    title: "Decorating in Secret",
    subtitle: "场地 · 悄悄布置",
    avatar: "🎈",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We only have thirty minutes before she arrives.", zh: "她到之前我们只有三十分钟。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Then let's move fast and split up the tasks.", zh: "那我们就快点动作，分头行动吧。", correct: true, xp: 10 },
          { text: "Then let's slow down and take our time.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Then let's move fast and split up the tasks.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This banner looks better than the one from last year.", zh: "这条横幅比去年那条更好看。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, everyone did a great job on this.", zh: "确实是，大家这次做得都很棒。", correct: true, xp: 10 },
          { text: "It doesn't, last year's banner was much nicer.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, everyone did a great job on this.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "She just texted, she's five minutes away!", zh: "她刚发消息说，还有五分钟就到了！" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "Everyone hide, quick, turn off the lights!", zh: "大家快躲起来，关灯！", correct: true, xp: 10 },
          { text: "Everyone relax, we have plenty of time still.", correct: false }
        ],
        hintOnWrong: "过去时回应 → Everyone hide, quick, turn off the lights!",
        next: null
      }
    }
  },
  {
    id: "the-surprise-moment",
    transition: { en: "The lights flip on the moment she walks through the door.", zh: "她一走进门，灯光瞬间亮了起来。" },
    title: "The Surprise Moment",
    subtitle: "场地 · 惊喜揭晓",
    avatar: "🎉",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Surprise! We can't believe you didn't suspect anything!", zh: "惊喜！真不敢相信你一点都没起疑心！" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I honestly can't believe this either!", zh: "说实话我也不敢相信这一切！", correct: true, xp: 10 },
          { text: "I can believe it, I knew all along.", correct: false }
        ],
        hintOnWrong: "用 can 表能力/惊讶 → I honestly can't believe this either!",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Her face lit up brighter than any candle in the room.", zh: "她脸上的笑容比屋里任何一支蜡烛都要明亮。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, this was worth every secret text.", zh: "确实如此，之前所有偷偷发的短信都值得了。", correct: true, xp: 10 },
          { text: "It really didn't, she looked completely unimpressed.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, this was worth every secret text.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "This is honestly the best surprise anyone has ever given me.", zh: "这真的是有人给过我的最棒的惊喜了。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We're so glad we could pull this off for you.", zh: "我们很高兴能为你把这一切做成。", correct: true, xp: 10 },
          { text: "We're glad, though it wasn't really that hard.", correct: false }
        ],
        hintOnWrong: "现在完成时回应 → We're so glad we could pull this off for you.",
        next: null
      }
    }
  },
  {
    id: "explaining-the-secret",
    transition: { en: "Over drinks, they explain how they kept the secret for months.", zh: "喝着饮料，他们解释这个秘密是怎么保守了好几个月的。" },
    title: "Explaining the Secret",
    subtitle: "场地 · 揭秘经过",
    avatar: "🗣️",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How long have you been planning this?", zh: "你们计划这件事多久了？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've actually been planning it for two months.", zh: "我们其实已经计划了两个月了。", correct: true, xp: 10 },
          { text: "We've never actually planned this at all.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've actually been planning it for two months.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This secret was harder to keep than I expected.", zh: "这个秘密比我预想的更难保守。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really was, I almost slipped up twice.", zh: "确实如此，我差点漏嘴两次。", correct: true, xp: 10 },
          { text: "It really wasn't, keeping secrets is always easy.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really was, I almost slipped up twice.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You all really pulled off something amazing tonight.", zh: "你们今晚真的做成了一件很了不起的事。" },
        skill: "community",
        grammarTag: "past-simple",
        choices: [
          { text: "We did, and honestly, it was worth it.", zh: "确实做到了，说实话这一切都值得。", correct: true, xp: 10 },
          { text: "We didn't, tonight was actually a disaster.", correct: false }
        ],
        hintOnWrong: "过去时回应 → We did, and honestly, it was worth it.",
        next: null
      }
    }
  },
  {
    id: "a-toast-to-friendship",
    transition: { en: "Someone raises a glass to celebrate the friendship behind it all.", zh: "有人举杯，庆祝这份友谊背后的一切。" },
    title: "A Toast to Friendship",
    subtitle: "场地 · 敬友谊",
    avatar: "🥂",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "To friends who plan secret parties and never tell.", zh: "敬那些筹划秘密派对却守口如瓶的朋友们。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "To friendship, and to keeping good secrets.", zh: "敬友谊，也敬那些守得住的美好秘密。", correct: true, xp: 10 },
          { text: "To nothing at all, this feels unnecessary.", correct: false }
        ],
        hintOnWrong: "陈述句回应祝酒 → To friendship, and to keeping good secrets.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Nights like this remind me how lucky I am to have you all.", zh: "像今晚这样的夜晚让我意识到自己有你们这些朋友有多幸运。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "We feel exactly the same way about you.", zh: "我们对你也有一模一样的感受。", correct: true, xp: 10 },
          { text: "We don't feel lucky at all, honestly.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → We feel exactly the same way about you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Let's do this again for the next big birthday.", zh: "下一个重要生日我们还这样办吧。" },
        skill: "community",
        grammarTag: "lets-suggestion",
        choices: [
          { text: "Let's do that, though we'll need a better hiding spot.", zh: "好啊，不过我们得找个更好的藏身之处。", correct: true, xp: 10 },
          { text: "Let's not, one surprise party was enough forever.", correct: false }
        ],
        hintOnWrong: "接受建议 → Let's do that, though we'll need a better hiding spot.",
        next: null
      }
    }
  },
  {
    id: "cleaning-up-together",
    transition: { en: "Once the guests leave, they help clean up the venue.", zh: "客人离开后，他们帮忙收拾场地。" },
    title: "Cleaning Up Together",
    subtitle: "场地 · 一起收拾",
    avatar: "🧹",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Can you sweep while I fold up these tables?", zh: "我折桌子的时候你能扫一下地吗？" },
        skill: "community",
        grammarTag: "can-modal",
        choices: [
          { text: "I can, hand me the broom.", zh: "可以，把扫帚给我。", correct: true, xp: 10 },
          { text: "I can't, sweeping isn't something I know how to do.", correct: false }
        ],
        hintOnWrong: "用 can 表能力 → I can, hand me the broom.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Cleanup always feels faster with more people helping.", zh: "人多帮忙收拾总是感觉更快。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It does, many hands really do make light work.", zh: "确实是，人多力量大果然没错。", correct: true, xp: 10 },
          { text: "It doesn't, more people just gets in the way.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It does, many hands really do make light work.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Tonight was such a wonderful reminder of what friendship means.", zh: "今晚真的让人重新体会到友谊的意义。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really was, I'll remember tonight for a long time.", zh: "确实如此，我会长久记得今晚。", correct: true, xp: 10 },
          { text: "It really wasn't, tonight felt pretty forgettable.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really was, I'll remember tonight for a long time.",
        next: null
      }
    }
  },
  {
    id: "driving-home-happy",
    transition: { en: "Exhausted but happy, they drive home talking about the whole night.", zh: "又累又高兴，他们开车回家，聊着整晚发生的一切。" },
    title: "Driving Home Happy",
    subtitle: "车上 · 满足地回家",
    avatar: "🚗",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "That went better than we could have ever planned.", zh: "这次的效果比我们计划的还要好。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really did, everything just came together perfectly.", zh: "确实如此，一切都恰到好处地凑到了一起。", correct: true, xp: 10 },
          { text: "It really didn't, tonight went completely wrong.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really did, everything just came together perfectly.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "I love being part of something like this for someone we care about.", zh: "我很喜欢为我们在乎的人参与这样的事情。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Me too, moments like this make everything worth it.", zh: "我也是，像这样的时刻让一切都变得值得。", correct: true, xp: 10 },
          { text: "Me too, though it wasn't really worth the effort.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Me too, moments like this make everything worth it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter how busy we get, let's always make time for our friends.", zh: "不管我们有多忙，都要一直为朋友抽出时间。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter how busy, our friends deserve that.", zh: "不管多忙，我们的朋友值得我们这样做。", correct: true, xp: 10 },
          { text: "No matter how busy, friends can always wait.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter how busy, our friends deserve that.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "buzzing", zh: "热闹地讨论着", category: "community" },
  { en: "fortieth", zh: "第四十的", category: "community" },
  { en: "throw a party", zh: "办派对", category: "community" },
  { en: "deserves", zh: "应得", category: "community" },
  { en: "complete secret", zh: "完全的秘密", category: "community" },
  { en: "group chat", zh: "群聊", category: "community" },
  { en: "venue", zh: "场地", category: "community" },
  { en: "host", zh: "举办", category: "community" },
  { en: "obvious", zh: "明显的", category: "community" },
  { en: "suspicion", zh: "怀疑", category: "community" },
  { en: "guest list", zh: "宾客名单", category: "community" },
  { en: "fake reason", zh: "假借口", category: "community" },
  { en: "work event", zh: "公司活动", category: "community" },
  { en: "coordinating", zh: "协调", category: "community" },
  { en: "handling", zh: "负责", category: "community" },
  { en: "take care of", zh: "负责，照顾", category: "community" },
  { en: "complicated", zh: "复杂的", category: "community" },
  { en: "deadline", zh: "截止时间", category: "community" },
  { en: "strict", zh: "严格的", category: "community" },
  { en: "invent", zh: "编造", category: "community" },
  { en: "believable", zh: "可信的", category: "community" },
  { en: "excuse", zh: "借口", category: "community" },
  { en: "lie", zh: "谎言", category: "community" },
  { en: "keep up", zh: "维持", category: "community" },
  { en: "suspected", zh: "起疑心的", category: "community" },
  { en: "stick to the story", zh: "坚持这个说法", category: "community" },
  { en: "slip up", zh: "说漏嘴", category: "community" },
  { en: "distracted", zh: "被分散注意力的", category: "community" },
  { en: "split up", zh: "分头行动", category: "community" },
  { en: "banner", zh: "横幅", category: "community" },
  { en: "hide", zh: "躲藏", category: "community" },
  { en: "turn off", zh: "关掉", category: "community" },
  { en: "surprise", zh: "惊喜", category: "community" },
  { en: "lit up", zh: "亮了起来", category: "community" },
  { en: "candle", zh: "蜡烛", category: "community" },
  { en: "pull this off", zh: "做成这件事", category: "community" },
  { en: "explaining", zh: "解释", category: "community" },
  { en: "almost", zh: "差点", category: "community" },
  { en: "amazing", zh: "了不起的", category: "community" },
  { en: "raises a glass", zh: "举杯", category: "community" },
  { en: "friendship", zh: "友谊", category: "community" },
  { en: "hiding spot", zh: "藏身之处", category: "community" },
  { en: "sweep", zh: "扫地", category: "community" },
  { en: "fold up", zh: "折叠起来", category: "community" },
  { en: "broom", zh: "扫帚", category: "community" },
  { en: "cleanup", zh: "清理", category: "community" },
  { en: "many hands make light work", zh: "人多力量大", category: "community" },
  { en: "forgettable", zh: "容易被遗忘的", category: "community" },
  { en: "came together", zh: "凑到了一起", category: "community" },
  { en: "care about", zh: "在乎", category: "community" }
);
