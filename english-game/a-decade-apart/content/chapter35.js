// 内容数据层：第三十五章，紧接第三十四章——同一个 GAME_CONTENT 对象继续 push。
// index.html 里这个文件排在 chapter34.js 之后、audio-manifest.js 之前加载。
//
// Tier: L4（不引入新grammarTag，继续场景领域切换策略，
// 见 skills/joshlabs-dev/references/projects/english-game.md）
//
// 剧情：为了迎接宝宝，两人决定换一套更划算的手机和网络套餐。全新词汇领域：
// 客服通话/套餐比较/账单/合约条款。

GAME_CONTENT.scenes.push(
  {
    id: "reviewing-the-bill",
    transition: { en: "Looking over the monthly bills, they notice the phone plan is expensive.", zh: "翻看每月账单时，他们发现手机套餐太贵了。" },
    title: "Reviewing the Bill",
    subtitle: "家里 · 查看账单",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This bill is higher than it was last year.", zh: "这份账单比去年要高。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, we should look into other plans.", zh: "确实是，我们应该看看其他套餐。", correct: true, xp: 10 },
          { text: "It isn't, this bill looks lower than ever.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, we should look into other plans.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Have we ever actually compared other providers?", zh: "我们真的比较过其他运营商吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We've never really compared them, honestly.", zh: "老实说，我们从来没真正比较过。", correct: true, xp: 10 },
          { text: "We're comparing them at this exact second.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We've never really compared them, honestly.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We should probably switch before the baby comes.", zh: "我们大概应该在宝宝出生前换掉。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Good idea, every dollar helps right now.", zh: "好主意，现在每一块钱都有用。", correct: true, xp: 10 },
          { text: "Bad idea, switching plans sounds like a hassle.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Good idea, every dollar helps right now.",
        next: null
      }
    }
  },
  {
    id: "calling-customer-service",
    transition: { en: "He calls the current provider to ask about better deals.", zh: "他打电话给目前的运营商询问更好的方案。" },
    title: "Calling Customer Service",
    subtitle: "电话 · 联系客服",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "How can I help you today?", zh: "今天有什么可以帮您的？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I'd like to ask about lowering my monthly bill.", zh: "我想问问怎样能降低我的月账单。", correct: true, xp: 10 },
          { text: "I don't need any help at all today.", correct: false }
        ],
        hintOnWrong: "wh-问题回答需求 → I'd like to ask about lowering my monthly bill.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Are you currently under contract with us?", zh: "您目前和我们有合约吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, my contract actually ended last month.", zh: "没有，我的合约实际上上个月就结束了。", correct: true, xp: 10 },
          { text: "Yes, I signed a lifetime contract at birth.", correct: false }
        ],
        hintOnWrong: "肯定回答 → No, my contract actually ended last month.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "I can offer you a discount if you upgrade today.", zh: "如果您今天升级套餐，我可以给您一个折扣。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that saves money, I'm definitely interested.", zh: "如果能省钱，我一定感兴趣。", correct: true, xp: 10 },
          { text: "If that saves money, I'd rather not bother.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that saves money, I'm definitely interested.",
        next: null
      }
    }
  },
  {
    id: "comparing-plans",
    transition: { en: "That evening, they compare a few plans side by side.", zh: "那天晚上，他们把几个套餐放在一起比较。" },
    title: "Comparing Plans",
    subtitle: "家里 · 比较套餐",
    avatar: "💻",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "This plan has more data than the one we have now.", zh: "这个套餐的流量比我们现在的多。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "More data would actually be really useful.", zh: "更多流量其实会很有用。", correct: true, xp: 10 },
          { text: "More data would just go to waste anyway.", correct: false }
        ],
        hintOnWrong: "回应比较句 → More data would actually be really useful.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "Which provider has the best coverage in our area?", zh: "哪家运营商在我们这个地区信号覆盖最好？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "This one seems to have the best reviews.", zh: "这一家看起来评价最好。", correct: true, xp: 10 },
          { text: "Coverage doesn't matter to us at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答比较 → This one seems to have the best reviews.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Bundling internet and phone together saves even more.", zh: "把网络和手机套餐捆绑在一起能省更多钱。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Let's bundle them, then, that sounds smart.", zh: "那我们就捆绑吧，这听起来很明智。", correct: true, xp: 10 },
          { text: "Let's keep them separate, bundling sounds risky.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Let's bundle them, then, that sounds smart.",
        next: null
      }
    }
  },
  {
    id: "reading-the-fine-print",
    transition: { en: "Before switching, they carefully read the contract terms.", zh: "在换套餐前，他们仔细阅读了合约条款。" },
    title: "Reading the Fine Print",
    subtitle: "家里 · 阅读合约细则",
    avatar: "📄",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Are there any cancellation fees if we leave early?", zh: "如果我们提前离开会有取消费用吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "Yes, there's a fee if you cancel within a year.", zh: "有的，如果一年内取消会有费用。", correct: true, xp: 10 },
          { text: "No, cancellation is always completely free.", correct: false }
        ],
        hintOnWrong: "肯定回答 → Yes, there's a fee if you cancel within a year.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This clause is more confusing than the rest of the contract.", zh: "这一条比合约的其他部分更让人困惑。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It is, let's ask the agent to explain it.", zh: "确实是，我们让客服解释一下吧。", correct: true, xp: 10 },
          { text: "It isn't, every clause here is perfectly clear.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It is, let's ask the agent to explain it.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "If you sign today, the price is locked for two years.", zh: "如果你今天签约，价格会锁定两年。" },
        skill: "community",
        grammarTag: "conditional",
        choices: [
          { text: "If that's guaranteed, I'm ready to sign.", zh: "如果这是保证的，那我准备好签字了。", correct: true, xp: 10 },
          { text: "If that's guaranteed, I'd rather not sign anything.", correct: false }
        ],
        hintOnWrong: "if 条件句 → If that's guaranteed, I'm ready to sign.",
        next: null
      }
    }
  },
  {
    id: "switching-providers",
    transition: { en: "They call to officially switch to the new provider.", zh: "他们打电话正式转到新的运营商。" },
    title: "Switching Providers",
    subtitle: "电话 · 正式转网",
    avatar: "📞",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Would you like to keep your current phone numbers?", zh: "您想保留目前的手机号码吗？" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Yes, keeping our numbers is really important.", zh: "是的，保留我们的号码非常重要。", correct: true, xp: 10 },
          { text: "No, we'd love to get brand new numbers.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Yes, keeping our numbers is really important.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "The transfer will take about two business days.", zh: "转移大约需要两个工作日。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "That's fine, two days works for us.", zh: "没问题，两天对我们来说可以接受。", correct: true, xp: 10 },
          { text: "That's too long, we need it done instantly.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → That's fine, two days works for us.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "You'll receive a confirmation text once it's complete.", zh: "完成后您会收到一条确认短信。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Great, we'll keep an eye out for that.", zh: "好的，我们会留意的。", correct: true, xp: 10 },
          { text: "Great, though we never read our texts.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Great, we'll keep an eye out for that.",
        next: null
      }
    }
  },
  {
    id: "installing-new-internet",
    transition: { en: "A technician comes to install the new internet router.", zh: "一位技术人员上门安装新的网络路由器。" },
    title: "Installing New Internet",
    subtitle: "家里 · 安装新网络",
    avatar: "🧑‍🔧",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Where would you like the router placed?", zh: "您想把路由器放在哪里？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "Somewhere central would give us the best signal.", zh: "放在中间位置信号应该会最好。", correct: true, xp: 10 },
          { text: "It doesn't matter, signal isn't important to us.", correct: false }
        ],
        hintOnWrong: "wh-问题回答建议 → Somewhere central would give us the best signal.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "This new connection is much faster than your old one.", zh: "这个新网络比你们之前的快多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "That's a huge improvement, thank you.", zh: "这真是个巨大的提升，谢谢你。", correct: true, xp: 10 },
          { text: "That's disappointing, we expected it to be slower.", correct: false }
        ],
        hintOnWrong: "回应比较句 → That's a huge improvement, thank you.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "Please restart your devices to connect to the new network.", zh: "请重启您的设备以连接新网络。" },
        skill: "community",
        grammarTag: "please-request",
        choices: [
          { text: "Sure, I'll restart everything right now.", zh: "好的，我现在就重启所有设备。", correct: true, xp: 10 },
          { text: "Sorry, restarting devices sounds too complicated.", correct: false }
        ],
        hintOnWrong: "礼貌回应请求 → Sure, I'll restart everything right now.",
        next: null
      }
    }
  },
  {
    id: "the-first-bill-arrives",
    transition: { en: "A month later, the first bill under the new plan arrives.", zh: "一个月后，新套餐的第一张账单到了。" },
    title: "The First Bill Arrives",
    subtitle: "家里 · 首张新账单",
    avatar: "📬",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Look, this bill is way lower than the old one.", zh: "看，这张账单比之前的低多了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "It really is, I'm so glad we switched.", zh: "确实如此，很高兴我们换了。", correct: true, xp: 10 },
          { text: "It really isn't, this bill looks higher to me.", correct: false }
        ],
        hintOnWrong: "回应比较句 → It really is, I'm so glad we switched.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "We've saved almost forty dollars a month already.", zh: "我们每月已经省了差不多四十块钱。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "That's incredible, that adds up fast.", zh: "太厉害了，这样积累起来很快。", correct: true, xp: 10 },
          { text: "That's disappointing, forty dollars means nothing.", correct: false }
        ],
        hintOnWrong: "现在完成时 → That's incredible, that adds up fast.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "That savings could go straight into the baby fund.", zh: "这笔省下的钱可以直接存进宝宝基金。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "Let's do exactly that, starting this month.", zh: "那我们就这么做吧，从这个月开始。", correct: true, xp: 10 },
          { text: "Let's spend it on something else instead.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → Let's do exactly that, starting this month.",
        next: null
      }
    }
  },
  {
    id: "a-service-outage",
    transition: { en: "A week later, the internet suddenly stops working.", zh: "一周后，网络突然中断了。" },
    title: "A Service Outage",
    subtitle: "家里 · 网络中断",
    avatar: "📡",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Is your internet working right now?", zh: "你的网络现在能用吗？" },
        skill: "community",
        grammarTag: "do-question",
        choices: [
          { text: "No, it stopped working about an hour ago.", zh: "不能，大概一小时前就断了。", correct: true, xp: 10 },
          { text: "Yes, it's working perfectly, no issues at all.", correct: false }
        ],
        hintOnWrong: "肯定回答 → No, it stopped working about an hour ago.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "There's an outage in your area right now.", zh: "您所在的区域目前正在停机维护。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "That explains it, thanks for letting us know.", zh: "这就说得通了，谢谢你告诉我们。", correct: true, xp: 10 },
          { text: "That's impossible, everything else works fine here.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → That explains it, thanks for letting us know.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "We'll have it restored within the hour.", zh: "我们会在一小时内恢复网络。" },
        skill: "community",
        grammarTag: "will-future",
        choices: [
          { text: "Thank you, we'll just wait it out then.", zh: "谢谢，那我们就耐心等一下。", correct: true, xp: 10 },
          { text: "Thank you, though an hour feels far too long.", correct: false }
        ],
        hintOnWrong: "回应未来计划 → Thank you, we'll just wait it out then.",
        next: null
      }
    }
  },
  {
    id: "downgrading-later",
    transition: { en: "Months later, they revisit the plan to see if they need less.", zh: "几个月后，他们重新审视套餐，看是否需要精简。" },
    title: "Downgrading Later",
    subtitle: "家里 · 重新调整套餐",
    avatar: "📱",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "Have we actually been using all this data?", zh: "我们真的用完了这么多流量吗？" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We haven't used nearly that much, actually.", zh: "其实我们根本没用那么多。", correct: true, xp: 10 },
          { text: "We've used every bit of it every month.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We haven't used nearly that much, actually.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "A smaller plan would honestly work just fine now.", zh: "现在其实一个更小的套餐就够用了。" },
        skill: "community",
        grammarTag: "comparative",
        choices: [
          { text: "Let's downgrade and save a bit more.", zh: "那我们就降级，多省一点钱吧。", correct: true, xp: 10 },
          { text: "Let's upgrade even more, just in case.", correct: false }
        ],
        hintOnWrong: "回应比较句 → Let's downgrade and save a bit more.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "It's nice being on top of our expenses like this.", zh: "像这样掌控好开支感觉真不错。" },
        skill: "community",
        grammarTag: "statement",
        choices: [
          { text: "It really is, this feels responsible of us.", zh: "确实如此，这样感觉我们很负责任。", correct: true, xp: 10 },
          { text: "It really isn't, tracking expenses feels pointless.", correct: false }
        ],
        hintOnWrong: "陈述句回应 → It really is, this feels responsible of us.",
        next: null
      }
    }
  },
  {
    id: "ready-for-the-baby",
    transition: { en: "With the household bills in order, they feel more ready for the baby.", zh: "家里的账单都理顺了，他们对迎接宝宝感到更有底气。" },
    title: "Ready for the Baby",
    subtitle: "家里 · 准备就绪",
    avatar: "🧑",
    startNode: "n1",
    nodes: {
      n1: {
        npcLine: { en: "We've handled so many little things this year.", zh: "今年我们处理了这么多小事。" },
        skill: "community",
        grammarTag: "present-perfect",
        choices: [
          { text: "We really have, piece by piece it all adds up.", zh: "确实如此，一点一点地积累起来。", correct: true, xp: 10 },
          { text: "We really haven't, nothing has changed all year.", correct: false }
        ],
        hintOnWrong: "现在完成时 → We really have, piece by piece it all adds up.",
        next: "n2"
      },
      n2: {
        npcLine: { en: "How do you feel about all of this coming together?", zh: "看到这一切都逐渐就绪，你感觉怎么样？" },
        skill: "community",
        grammarTag: "wh-question",
        choices: [
          { text: "I feel calm, which surprises me a little.", zh: "我感觉很平静，这让我自己都有点意外。", correct: true, xp: 10 },
          { text: "I feel nothing about any of this at all.", correct: false }
        ],
        hintOnWrong: "wh-问题回答感受 → I feel calm, which surprises me a little.",
        next: "n3"
      },
      n3: {
        npcLine: { en: "No matter what comes next, we've got this.", zh: "无论接下来发生什么，我们都能应付。" },
        skill: "community",
        grammarTag: "concession",
        choices: [
          { text: "No matter what happens, we've got each other.", zh: "无论发生什么，我们都拥有彼此。", correct: true, xp: 10 },
          { text: "No matter what happens, we're on our own.", correct: false }
        ],
        hintOnWrong: "让步句 → No matter what happens, we've got each other.",
        next: null
      }
    }
  }
);

GAME_CONTENT.vocabBank.push(
  { en: "bill", zh: "账单", category: "community" },
  { en: "look into", zh: "调查，了解", category: "community" },
  { en: "compared", zh: "比较过的", category: "community" },
  { en: "providers", zh: "运营商（复数）", category: "community" },
  { en: "switch", zh: "转换，切换", category: "community" },
  { en: "every dollar helps", zh: "每一块钱都有用", category: "community" },
  { en: "hassle", zh: "麻烦事", category: "community" },
  { en: "customer service", zh: "客服", category: "community" },
  { en: "lowering", zh: "降低", category: "community" },
  { en: "monthly bill", zh: "月账单", category: "community" },
  { en: "under contract", zh: "在合约期内", category: "community" },
  { en: "lifetime", zh: "终身的", category: "community" },
  { en: "discount", zh: "折扣", category: "community" },
  { en: "upgrade", zh: "升级", category: "community" },
  { en: "interested", zh: "感兴趣的", category: "community" },
  { en: "data", zh: "流量", category: "community" },
  { en: "useful", zh: "有用的", category: "community" },
  { en: "coverage", zh: "信号覆盖", category: "community" },
  { en: "area", zh: "地区", category: "community" },
  { en: "reviews", zh: "评价（复数）", category: "community" },
  { en: "bundling", zh: "捆绑", category: "community" },
  { en: "saves", zh: "节省", category: "community" },
  { en: "risky", zh: "有风险的", category: "community" },
  { en: "fine print", zh: "细则条款", category: "community" },
  { en: "cancellation fees", zh: "取消费用", category: "community" },
  { en: "within a year", zh: "一年之内", category: "community" },
  { en: "clause", zh: "条款", category: "community" },
  { en: "confusing", zh: "令人困惑的", category: "community" },
  { en: "agent", zh: "客服代表", category: "community" },
  { en: "guaranteed", zh: "有保证的", category: "community" },
  { en: "keep", zh: "保留", category: "community" },
  { en: "phone numbers", zh: "手机号码", category: "community" },
  { en: "transfer", zh: "转移", category: "community" },
  { en: "business days", zh: "工作日", category: "community" },
  { en: "confirmation text", zh: "确认短信", category: "community" },
  { en: "complete", zh: "完成的", category: "community" },
  { en: "technician", zh: "技术人员", category: "community" },
  { en: "router", zh: "路由器", category: "community" },
  { en: "placed", zh: "放置", category: "community" },
  { en: "central", zh: "中心的，中间的", category: "community" },
  { en: "signal", zh: "信号", category: "community" },
  { en: "connection", zh: "网络连接", category: "community" },
  { en: "improvement", zh: "提升", category: "community" },
  { en: "restart", zh: "重启", category: "community" },
  { en: "devices", zh: "设备（复数）", category: "community" },
  { en: "way lower", zh: "低多了", category: "community" },
  { en: "saved", zh: "省下的", category: "community" },
  { en: "adds up", zh: "累积起来", category: "community" },
  { en: "savings", zh: "省下的钱", category: "community" },
  { en: "outage", zh: "服务中断", category: "community" },
  { en: "explains it", zh: "说得通了", category: "community" },
  { en: "restored", zh: "恢复的", category: "community" },
  { en: "wait it out", zh: "耐心等待", category: "community" },
  { en: "downgrade", zh: "降级（套餐）", category: "community" },
  { en: "smaller", zh: "更小的（small 比较级）", category: "community" },
  { en: "on top of", zh: "掌控着", category: "community" },
  { en: "responsible", zh: "负责任的", category: "community" },
  { en: "piece by piece", zh: "一点一点地", category: "community" },
  { en: "coming together", zh: "逐渐就绪", category: "community" },
  { en: "calm", zh: "平静的", category: "community" },
  { en: "surprises", zh: "让……感到意外", category: "community" },
  { en: "got this", zh: "能应付", category: "community" }
);
