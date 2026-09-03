// 账号登录 + 云端存档同步。复用 josh-apps 共享 Supabase 项目
// （AskBible / JoshMoney / Selah 同一个后端），只加了 english_game_saves 一张表。
// 用普通 <script> 加载（不是 type="module"），跟 content/*.js、main.js 保持同一套
// 全局脚本约定；Supabase SDK 用动态 import() 懒加载，避免整站改成 ES module。
//
// 离线优先：没登录/没网时，window.GameAuth 的方法直接空转，不阻塞本地存档，
// ready 无论成功失败都会 resolve（不会让游戏卡在"等云端"上）。
(function () {
  const SUPABASE_URL = "https://tgobadhdylarhssudplc.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnb2JhZGhkeWxhcmhzc3VkcGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMTMwMDAsImV4cCI6MjA5Njc4OTAwMH0.5EqC5hJFmydZaVBmpXJk1ddJNGX_fY2hN83k5IzAO3I";
  const TABLE = "english_game_saves";
  const PUSH_DEBOUNCE_MS = 1200;
  // 排行榜走独立的小表，只装"昵称+总分"，跟 english_game_saves（含复习队列等
  // 更细的学习数据）分开——那张表按单用户设计的 RLS 不开放跨用户读，这张表
  // 反过来：谁都能 SELECT，但只能 upsert 自己那一行（auth.uid() = user_id）。
  const LEADERBOARD_TABLE = "english_game_leaderboard";
  const LEADERBOARD_PUSH_DEBOUNCE_MS = 1500;

  let clientPromise = null;
  function getClient() {
    if (!clientPromise) {
      clientPromise = import("https://esm.sh/@supabase/supabase-js@2").then(({ createClient }) =>
        createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      );
    }
    return clientPromise;
  }

  let currentUser = null;
  let readyDone = false;
  let resolveReady;
  const readyPromise = new Promise((resolve) => {
    resolveReady = resolve;
  });
  const authChangeHandlers = [];

  function settleReady(user) {
    currentUser = user;
    if (!readyDone) {
      readyDone = true;
      resolveReady(user);
    }
    authChangeHandlers.forEach((fn) => fn(user));
  }

  getClient()
    .then((supabase) => {
      supabase.auth.onAuthStateChange((_event, session) => {
        settleReady(session?.user ?? null);
      });
    })
    .catch(() => settleReady(null)); // 加载失败（离线/被拦截）：当作未登录，不卡游戏

  function currentPageUrl() {
    return window.location.origin + window.location.pathname;
  }

  async function pushSaveNow(state) {
    if (!currentUser) return;
    const supabase = await getClient();
    await supabase.from(TABLE).upsert({
      user_id: currentUser.id,
      state,
      updated_at: new Date().toISOString()
    });
  }

  let pushTimer = null;
  function pushSaveDebounced(state) {
    if (!currentUser) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => pushSaveNow(state), PUSH_DEBOUNCE_MS);
  }

  async function pullSave() {
    if (!currentUser) return null;
    const supabase = await getClient();
    const { data, error } = await supabase
      .from(TABLE)
      .select("state")
      .eq("user_id", currentUser.id)
      .maybeSingle();
    if (error || !data) return null;
    return data.state;
  }

  window.GameAuth = {
    // 首次会话检查的结果（登录用户或 null），页面刚打开时用它决定要不要拉云端存档。
    ready: readyPromise,
    onAuthChange(fn) {
      authChangeHandlers.push(fn);
    },
    getUser() {
      return currentUser;
    },
    async sendMagicLink(email) {
      const supabase = await getClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: currentPageUrl() }
      });
      if (error) throw error;
    },
    async signInWithGoogle() {
      const supabase = await getClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: currentPageUrl() }
      });
      if (error) throw error;
    },
    async signOut() {
      const supabase = await getClient();
      await supabase.auth.signOut();
    },
    pushSave: pushSaveDebounced,
    pullSave
  };
})();
