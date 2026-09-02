// 内容数据层：整个课程共用一条故事线（连载式）。这是"第一章"，10 课一路讲完
// "十年之约"这个故事——不是每课各自一个故事，是同一条线往前推进。
// 用普通 JS 全局变量承载（而非 fetch 一个 .json），这样双击打开 index.html 也能跑，
// 不会被浏览器的 file:// 同源策略卡住。
//
// Tier: L1（分级/复现规则见 skills/joshlabs-dev/references/projects/english-game.md）
// 每个 node 的 grammarTag 只标"玩家正确选项"的产出语法点，NPC 台词（npcLine）是输入，
// 可以略超纲，不计入 grammarTag 统计——跑 scripts/validate-curriculum.mjs 校验复现间隔。

const GAME_CONTENT = {
  chapterTitle: "第一章 · 十年之约",
  chapterSubtitle: "A Decade Apart",

  // 词汇库：既是"本章词汇"展示用，也是回忆闪回小游戏里干扰项的来源池。
  vocabBank: [
    { en: "Here you are.", zh: "给你" },
    { en: "I'm here to meet someone.", zh: "我是来见一个人的" },
    { en: "Thank you!", zh: "谢谢" },
    { en: "This address, please.", zh: "这个地址，麻烦了" },
    { en: "Really? Do you know it well?", zh: "真的吗？你熟悉那里吗" },
    { en: "Perfect, this is it.", zh: "太好了，就是这里" },
    { en: "Yes, under Zhang.", zh: "有，姓张" },
    { en: "For me? Can I see it?", zh: "给我的？我能看看吗" },
    { en: "Thank you so much!", zh: "太谢谢了" },
    { en: "A coffee and a croissant, please.", zh: "请给我一杯咖啡" },
    { en: "You know her? Where is she?", zh: "你认识她？她在哪儿" },
    { en: "Thank you, I'm on my way!", zh: "谢谢，我这就出发！" },
    { en: "Excuse me, where is the CN Tower?", zh: "打扰一下，请问CN塔怎么走" },
    { en: "Turn left? Do you mean at the light?", zh: "左转？你是说在红绿灯那儿吗？" },
    { en: "Thank you, I'm running!", zh: "谢谢，我这就跑" },
    { en: "Yes! Do you know Emma?", zh: "是的！你认识Emma吗" },
    { en: "Can you tell me where she is?", zh: "你能告诉我她在哪儿吗？" },
    { en: "Sure, I'll see you there.", zh: "好，我会去那儿见你。" },
    { en: "Yes, table for two.", zh: "是的，两位" },
    { en: "Of course. A promise is a promise.", zh: "当然啦，说好的事就要做到" },
    { en: "Sure, I'll be there.", zh: "好，我会去的。" },
    { en: "I'm getting ready, let's go!", zh: "我在准备了，走吧！" },
    { en: "Sounds fun, I love streetcars.", zh: "听起来很棒，我喜欢电车" },
    { en: "Perfect, let's get off.", zh: "太好了，我们下车吧" },
    { en: "Wow, you own this place?", zh: "哇，这是你自己的店？" },
    { en: "That's so sweet.", zh: "太贴心了" },
    { en: "Thank you, Emma.", zh: "谢谢你，Emma" },
    { en: "Yes, that's me.", zh: "是的，就是我" },
    { en: "Let's open it together.", zh: "我们一起打开看看吧" },
    { en: "I can't wait for the next chapter.", zh: "我等不及下一章了" },
    { en: "Passport.", zh: "护照" },
    { en: "Address.", zh: "地址" },
    { en: "Sunset.", zh: "日落" },
    { en: "Promise.", zh: "承诺" }
  ],

  // max 由引擎在加载时根据每个技能在所有场景里能拿到的总经验值自动算出，
  // 加新场景/新技能不需要再手动同步这里的数值。
  skillMeta: {
    greeting: { label: "问候寒暄", labelEn: "Greetings", icon: "👋" },
    direction: { label: "方位交通", labelEn: "Directions & Transit", icon: "🧭" },
    shopping: { label: "消费购物", labelEn: "Shopping", icon: "💳" },
    dining: { label: "餐饮点单", labelEn: "Dining", icon: "☕" }
  },

  scenes: [
    {
      id: "airport-arrival",
      title: "Toronto Pearson Airport",
      subtitle: "多伦多皮尔逊机场 · 入境检查",
      avatar: "👮",
      startNode: "n1",
      nodes: {
        n1: {
          npcLine: { en: "Hello! Passport, please.", zh: "你好！请出示护照。" },
          skill: "greeting",
          grammarTag: "statement",
          choices: [
            { text: "Here you are.", zh: "给你", correct: true, xp: 10 },
            { text: "Nice to meet you.", correct: false }
          ],
          hintOnWrong: "递东西给别人时说「给你」→ Here you are.",
          next: "n2"
        },
        n2: {
          npcLine: { en: "What's the purpose of your visit?", zh: "你此行的目的是？" },
          skill: "greeting",
          grammarTag: "statement",
          choices: [
            { text: "I'm here to meet someone.", zh: "我是来见一个人的", correct: true, xp: 10 },
            { text: "Goodbye.", correct: false }
          ],
          hintOnWrong: "说明来意 → I'm here to meet someone.",
          next: "n3"
        },
        n3: {
          npcLine: { en: "Interesting! Welcome to Toronto.", zh: "有意思！欢迎来到多伦多。" },
          skill: "greeting",
          grammarTag: "courtesy",
          choices: [
            { text: "Thank you!", zh: "谢谢", correct: true, xp: 10 },
            { text: "Sorry.", correct: false }
          ],
          hintOnWrong: "表达感谢 → Thank you!",
          next: null
        }
      }
    },
    {
      id: "taxi-ride",
      title: "A Taxi Downtown",
      subtitle: "出租车 · 驶向市区",
      avatar: "🚕",
      startNode: "n1",
      nodes: {
        n1: {
          npcLine: { en: "Hop in! Where to?", zh: "上车吧！去哪儿？" },
          skill: "direction",
          grammarTag: "please-request",
          choices: [
            { text: "This address, please.", zh: "这个地址，麻烦了", correct: true, xp: 10 },
            { text: "I am fine, thanks.", correct: false }
          ],
          hintOnWrong: "出示地址说明目的地 → This address, please.",
          next: "n2"
        },
        n2: {
          npcLine: { en: "Huh, that's an old street. Haven't heard that name in years.", zh: "咦，这条老街，好多年没人提起了。" },
          skill: "direction",
          grammarTag: "do-question",
          choices: [
            { text: "Really? Do you know it well?", zh: "真的吗？你熟悉那里吗", correct: true, xp: 10 },
            { text: "I don't know.", correct: false }
          ],
          hintOnWrong: "追问 → Really? Do you know it well?",
          next: "n3"
        },
        n3: {
          npcLine: { en: "We're here!", zh: "到了！" },
          skill: "direction",
          grammarTag: "statement",
          choices: [
            { text: "Perfect, this is it.", zh: "太好了，就是这里", correct: true, xp: 10 },
            { text: "Where are we?", correct: false }
          ],
          hintOnWrong: "确认到达 → Perfect, this is it.",
          next: null
        }
      }
    },
    {
      id: "hostel-checkin",
      title: "Maple Street Hostel",
      subtitle: "枫叶街旅馆 · 竟是明信片上的地址",
      avatar: "🛎️",
      startNode: "n1",
      nodes: {
        n1: {
          npcLine: { en: "Welcome! Do you have a reservation?", zh: "欢迎！请问有预订吗？" },
          skill: "shopping",
          grammarTag: "short-answer",
          choices: [
            { text: "Yes, under Zhang.", zh: "有，姓张", correct: true, xp: 10 },
            { text: "No, thank you.", correct: false }
          ],
          hintOnWrong: "确认预订 → Yes, under [name].",
          next: "n2"
        },
        n2: {
          npcLine: { en: "Actually — someone left this here for you, years ago.", zh: "对了——很多年前，有人在这儿给你留了这个。" },
          skill: "shopping",
          grammarTag: "can-modal",
          choices: [
            { text: "For me? Can I see it?", zh: "给我的？我能看看吗", correct: true, xp: 10 },
            { text: "I have no money.", correct: false }
          ],
          hintOnWrong: "请求查看 → For me? Can I see it?",
          next: "n3"
        },
        n3: {
          npcLine: { en: "Here you go. It's a note from a woman named Emma.", zh: "给你，一位叫 Emma 的女士留的字条。" },
          skill: "shopping",
          grammarTag: "courtesy",
          choices: [
            { text: "Thank you so much!", zh: "太谢谢了", correct: true, xp: 10 },
            { text: "Goodbye.", correct: false }
          ],
          hintOnWrong: "表达感谢 → Thank you so much!",
          next: null
        }
      }
    },
    {
      id: "corner-cafe",
      title: "Kensington Market Café",
      subtitle: "肯辛顿市场咖啡馆 · 打听线索",
      avatar: "☕",
      startNode: "n1",
      nodes: {
        n1: {
          npcLine: { en: "Morning! What can I get for you?", zh: "早上好！想点些什么？" },
          skill: "dining",
          grammarTag: "please-request",
          choices: [
            { text: "A coffee and a croissant, please.", zh: "请给我一杯咖啡", correct: true, xp: 10 },
            { text: "I'm not hungry.", correct: false }
          ],
          hintOnWrong: "点单说「请给我...」→ ..., please.",
          next: "n2"
        },
        n2: {
          npcLine: { en: "Wait — is that Emma's note? I know her!", zh: "等等——那是 Emma 的字条？我认识她！" },
          skill: "dining",
          grammarTag: "wh-question",
          choices: [
            { text: "You know her? Where is she?", zh: "你认识她？她在哪儿", correct: true, xp: 10 },
            { text: "I don't know.", correct: false }
          ],
          hintOnWrong: "追问下落 → You know her? Where is she?",
          next: "n3"
        },
        n3: {
          npcLine: { en: "She said... watch the sunset from the CN Tower.", zh: "她说过……去 CN 塔看日落。" },
          skill: "dining",
          grammarTag: "statement",
          choices: [
            { text: "Thank you, I'm on my way!", zh: "谢谢，我这就出发！", correct: true, xp: 10 },
            { text: "Is it free?", correct: false }
          ],
          hintOnWrong: "道谢并表明行动（陈述句）→ Thank you, I'm on my way!",
          next: null
        }
      }
    },
    {
      id: "asking-directions",
      title: "Racing to the CN Tower",
      subtitle: "街头问路 · 赶往 CN 塔",
      avatar: "🧭",
      startNode: "n1",
      nodes: {
        n1: {
          npcLine: { en: "Yes? Can I help you?", zh: "什么事？需要帮忙吗？" },
          skill: "direction",
          grammarTag: "wh-question",
          choices: [
            { text: "Excuse me, where is the CN Tower?", zh: "打扰一下，请问CN塔怎么走", correct: true, xp: 10 },
            { text: "I like pizza.", correct: false }
          ],
          hintOnWrong: "开口问路 → Excuse me, where is the CN Tower?",
          next: "n2"
        },
        n2: {
          npcLine: { en: "Go straight, then turn left.", zh: "直走，然后左转。" },
          skill: "direction",
          grammarTag: "do-question",
          choices: [
            { text: "Turn left? Do you mean at the light?", zh: "左转？你是说在红绿灯那儿吗？", correct: true, xp: 10 },
            { text: "Turn right?", correct: false }
          ],
          hintOnWrong: "反问确认 → Do you mean at the light?",
          next: "n3"
        },
        n3: {
          npcLine: { en: "Hurry, the sun is setting!", zh: "快点，太阳要下山了！" },
          skill: "direction",
          grammarTag: "present-continuous",
          choices: [
            { text: "Thank you, I'm running!", zh: "谢谢，我这就跑", correct: true, xp: 10 },
            { text: "Too far.", correct: false }
          ],
          hintOnWrong: "道谢并加快行动 → Thank you, I'm running!",
          next: null
        }
      }
    },
    {
      id: "cn-tower",
      title: "CN Tower, Sunset",
      subtitle: "CN塔观景台 · 日落时分",
      avatar: "🗼",
      startNode: "n1",
      nodes: {
        n1: {
          avatar: "🧑",
          npcLine: { en: "Excuse me — are you looking for someone?", zh: "打扰了——你是在找人吗？" },
          skill: "greeting",
          grammarTag: "do-question",
          choices: [
            { text: "Yes! Do you know Emma?", zh: "是的！你认识Emma吗", correct: true, xp: 10 },
            { text: "I live here.", correct: false }
          ],
          hintOnWrong: "直接确认 → Yes! Do you know Emma?",
          next: "n2"
        },
        n2: {
          avatar: "😊",
          npcLine: { en: "I'm her brother. She asked me to wait for you.", zh: "我是她哥哥。她让我在这儿等你。" },
          skill: "greeting",
          grammarTag: "can-modal",
          choices: [
            { text: "Can you tell me where she is?", zh: "你能告诉我她在哪儿吗？", correct: true, xp: 10 },
            { text: "I don't know.", correct: false }
          ],
          hintOnWrong: "用 can 请求告知 → Can you tell me where she is?",
          next: "n3"
        },
        n3: {
          avatar: "😅",
          npcLine: { en: "She's running late — meet her for dinner instead. Here's the address.", zh: "她要晚一点——改到晚餐见你吧，这是地址。" },
          skill: "greeting",
          grammarTag: "will-future",
          choices: [
            { text: "Sure, I'll see you there.", zh: "好，我会去那儿见你。", correct: true, xp: 10 },
            { text: "No, never.", correct: false }
          ],
          hintOnWrong: "用 will 表示以后会做的事 → Sure, I'll see you there.",
          next: null
        }
      }
    },
    {
      id: "reunion-dinner",
      title: "The Maple Diner",
      subtitle: "枫糖餐馆 · 十年之约",
      avatar: "🍽️",
      startNode: "n1",
      nodes: {
        n1: {
          npcLine: { en: "Welcome! Table for two?", zh: "欢迎光临！两位吗？" },
          skill: "dining",
          grammarTag: "short-answer",
          choices: [
            { text: "Yes, table for two.", zh: "是的，两位", correct: true, xp: 10 },
            { text: "I'm alone.", correct: false }
          ],
          hintOnWrong: "确认人数 → Yes, table for two.",
          next: "n2"
        },
        n2: {
          avatar: "🥹",
          npcLine: { en: "Ten years... you actually came.", zh: "十年了……你真的来了。" },
          skill: "dining",
          grammarTag: "statement",
          choices: [
            { text: "Of course. A promise is a promise.", zh: "当然啦，说好的事就要做到", correct: true, xp: 10 },
            { text: "Nothing, thanks.", correct: false }
          ],
          hintOnWrong: "兑现承诺 → Of course. A promise is a promise.",
          next: "n3"
        },
        n3: {
          avatar: "😳",
          npcLine: { en: "There's something I never told you. Can I show you tomorrow?", zh: "有件事我一直没告诉你。明天带你去看，好吗？" },
          skill: "dining",
          grammarTag: "will-future",
          choices: [
            { text: "Sure, I'll be there.", zh: "好，我会去的。", correct: true, xp: 10 },
            { text: "It's a gift.", correct: false }
          ],
          hintOnWrong: "用 will 表示以后会做的事 → Sure, I'll be there.",
          next: null
        }
      }
    },
    {
      id: "streetcar-morning",
      transition: { en: "Night falls. Morning comes.", zh: "夜色降临，又是新的一天。" },
      title: "The Morning After",
      subtitle: "电车前往蒸馏区 · 她要给你看什么？",
      avatar: "🚊",
      startNode: "n1",
      nodes: {
        n1: {
          avatar: "😄",
          npcLine: { en: "Morning! Ready to see my surprise?", zh: "早上好！准备好看我的惊喜了吗？" },
          skill: "direction",
          grammarTag: "present-continuous",
          choices: [
            { text: "I'm getting ready, let's go!", zh: "我在准备了，走吧！", correct: true, xp: 10 },
            { text: "Not now.", correct: false }
          ],
          hintOnWrong: "描述正在做的事 → I'm getting ready, let's go!",
          next: "n2"
        },
        n2: {
          avatar: "😊",
          npcLine: { en: "We'll take the streetcar. It's not far.", zh: "我们坐电车去，不远。" },
          skill: "direction",
          grammarTag: "statement",
          choices: [
            { text: "Sounds fun, I love streetcars.", zh: "听起来很棒，我喜欢电车", correct: true, xp: 10 },
            { text: "I don't know.", correct: false }
          ],
          hintOnWrong: "表达喜欢 → Sounds fun, I love streetcars.",
          next: "n3"
        },
        n3: {
          avatar: "🙂",
          npcLine: { en: "Here's our stop!", zh: "到站了！" },
          skill: "direction",
          grammarTag: "lets-suggestion",
          choices: [
            { text: "Perfect, let's get off.", zh: "太好了，我们下车吧", correct: true, xp: 10 },
            { text: "Already?", correct: false }
          ],
          hintOnWrong: "确认下车 → Perfect, let's get off.",
          next: null
        }
      }
    },
    {
      id: "bookstore-reveal",
      title: "Ten Letters Bookstore",
      subtitle: "「十封信」书店 · 秘密揭晓",
      avatar: "📚",
      startNode: "n1",
      nodes: {
        n1: {
          avatar: "😊",
          npcLine: { en: "This is it. I opened it last spring.", zh: "就是这里。我去年春天开的。" },
          skill: "shopping",
          grammarTag: "do-question",
          choices: [
            { text: "Wow, you own this place?", zh: "哇，这是你自己的店？", correct: true, xp: 10 },
            { text: "I don't like books.", correct: false }
          ],
          hintOnWrong: "表达惊喜 → Wow, you own this place?",
          next: "n2"
        },
        n2: {
          avatar: "🥹",
          npcLine: { en: "I named it after the letters we wrote as kids.", zh: "我用我们小时候写的信给它取的名字。" },
          skill: "shopping",
          grammarTag: "statement",
          choices: [
            { text: "That's so sweet.", zh: "太贴心了", correct: true, xp: 10 },
            { text: "That's strange.", correct: false }
          ],
          hintOnWrong: "表达感动 → That's so sweet.",
          next: "n3"
        },
        n3: {
          avatar: "😊",
          npcLine: { en: "Come in — the first book is on me.", zh: "进来吧——第一本书我请你。" },
          skill: "shopping",
          grammarTag: "courtesy",
          choices: [
            { text: "Thank you, Emma.", zh: "谢谢你，Emma", correct: true, xp: 10 },
            { text: "No, I'm leaving.", correct: false }
          ],
          hintOnWrong: "道谢 → Thank you, Emma.",
          next: null
        }
      }
    },
    {
      id: "new-envelope",
      title: "A New Envelope",
      subtitle: "一个新的信封 · 故事还在继续",
      avatar: "✉️",
      startNode: "n1",
      nodes: {
        n1: {
          avatar: "📦",
          npcLine: { en: "Excuse me, is this... for an old friend?", zh: "打扰一下，这个……是给一位老朋友的吗？" },
          skill: "greeting",
          grammarTag: "short-answer",
          choices: [
            { text: "Yes, that's me.", zh: "是的，就是我", correct: true, xp: 10 },
            { text: "No idea.", correct: false }
          ],
          hintOnWrong: "确认身份 → Yes, that's me.",
          next: "n2"
        },
        n2: {
          avatar: "🤔",
          npcLine: { en: "Another letter? Who could this be from?", zh: "又一封信？会是谁寄来的呢？" },
          skill: "greeting",
          grammarTag: "lets-suggestion",
          choices: [
            { text: "Let's open it together.", zh: "我们一起打开看看吧", correct: true, xp: 10 },
            { text: "Throw it away.", correct: false }
          ],
          hintOnWrong: "邀请一起打开 → Let's open it together.",
          next: "n3"
        },
        n3: {
          avatar: "😏",
          npcLine: { en: "To be continued...", zh: "故事，未完待续……" },
          skill: "greeting",
          grammarTag: "can-modal",
          choices: [
            { text: "I can't wait for the next chapter.", zh: "我等不及下一章了", correct: true, xp: 10 },
            { text: "The end.", correct: false }
          ],
          hintOnWrong: "表达期待 → I can't wait for the next chapter.",
          next: null
        }
      }
    }
  ]
};
