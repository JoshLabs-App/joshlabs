(function initMenVideoPlayer() {
  const slot = document.getElementById("video-slot");
  if (!slot) return;

  const apiBase = window.menVideoConfig?.apiBase || "/my-class/api/men-video";
  const TOKEN_KEY = "menVideoAuthToken";
  let authed = false;
  let authChecked = false;
  let authToken = window.sessionStorage.getItem(TOKEN_KEY) || "";
  let activeLesson = null;
  let activeVideo = null;

  function padLesson(n) {
    return String(n).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function checkAuth() {
    if (!authToken) return false;
    try {
      const res = await fetch(`${apiBase}/auth/status?token=${encodeURIComponent(authToken)}`, {
        credentials: "include",
      });
      if (!res.ok) return false;
      const data = await res.json();
      return Boolean(data?.ok);
    } catch {
      return false;
    }
  }

  async function ensureAuthState() {
    if (authChecked) return authed;
    authed = await checkAuth();
    authChecked = true;
    return authed;
  }

  function stopVideo() {
    if (activeVideo) {
      activeVideo.pause();
      activeVideo.removeAttribute("src");
      activeVideo.load();
      activeVideo = null;
    }
  }

  function renderPrompt(lessonNum) {
    stopVideo();
    slot.hidden = false;
    slot.innerHTML = `
      <button type="button" class="video-open-btn" data-video-open>
        <span class="video-open-mark">MEN</span>
        <span class="video-open-copy">第 ${lessonNum} 课</span>
      </button>
    `;
    slot.querySelector("[data-video-open]")?.addEventListener("click", async () => {
      const ok = await ensureAuthState();
      if (!ok) {
        renderGate(lessonNum);
        return;
      }
      renderPlayer(lessonNum);
    });
  }

  function renderGate(lessonNum, message = "") {
    stopVideo();
    slot.hidden = false;
    slot.innerHTML = `
      <form class="video-gate" data-video-gate>
        <div class="video-gate-title">MEN</div>
        <p class="video-gate-copy">输入密码后播放第 ${lessonNum} 课（支持全屏）。</p>
        <label class="video-gate-label" for="men-video-password">密码</label>
        <input
          id="men-video-password"
          class="video-gate-input"
          type="password"
          autocomplete="current-password"
          inputmode="text"
          required
        />
        <button class="video-gate-btn" type="submit">解锁视频</button>
        ${message ? `<p class="video-gate-error" role="alert">${escapeHtml(message)}</p>` : ""}
      </form>
    `;

    const form = slot.querySelector("[data-video-gate]");
    const input = slot.querySelector("#men-video-password");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const password = input?.value || "";
      try {
        const res = await fetch(`${apiBase}/auth`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data?.ok) {
          renderGate(lessonNum, "密码不正确，请重试。");
          return;
        }
        authToken = String(data.token || "");
        if (authToken) {
          window.sessionStorage.setItem(TOKEN_KEY, authToken);
        }
        authed = true;
        authChecked = true;
        renderPlayer(lessonNum);
      } catch {
        renderGate(lessonNum, "无法连接视频服务，请稍后再试。");
      }
    });
  }

  function bindFullscreen(frame, video) {
    const btn = frame.querySelector("[data-fullscreen-btn]");
    if (!btn) return;

    function isFrameFullscreen() {
      return (
        document.fullscreenElement === frame ||
        document.webkitFullscreenElement === frame
      );
    }

    function syncButton() {
      const active = isFrameFullscreen();
      btn.textContent = active ? "退出全屏" : "全屏";
      btn.setAttribute("aria-label", active ? "退出全屏" : "全屏");
      btn.title = active ? "退出全屏" : "全屏";
    }

    btn.addEventListener("click", () => {
      if (isFrameFullscreen()) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        return;
      }

      if (typeof video.webkitEnterFullscreen === "function") {
        video.webkitEnterFullscreen();
        return;
      }

      if (frame.requestFullscreen) frame.requestFullscreen();
      else if (frame.webkitRequestFullscreen) frame.webkitRequestFullscreen();
    });

    document.addEventListener("fullscreenchange", syncButton);
    document.addEventListener("webkitfullscreenchange", syncButton);
    video.addEventListener("webkitendfullscreen", syncButton);
    syncButton();
  }

  function renderPlayer(lessonNum) {
    stopVideo();
    slot.hidden = false;
    const tokenQuery = authToken ? `?token=${encodeURIComponent(authToken)}` : "";
    const src = `${apiBase}/${padLesson(lessonNum)}.mp4${tokenQuery}`;
    slot.innerHTML = `
      <div class="video-frame" data-video-frame>
        <video
          class="men-video-player"
          controls
          playsinline
          preload="metadata"
          controlsList="nodownload"
          src="${escapeHtml(src)}"
        ></video>
        <button type="button" class="video-fullscreen-btn" data-fullscreen-btn>全屏</button>
      </div>
    `;
    activeVideo = slot.querySelector("video");
    const frame = slot.querySelector("[data-video-frame]");
    if (frame && activeVideo) bindFullscreen(frame, activeVideo);
    activeLesson = lessonNum;
  }

  async function renderLessonVideo(lessonNum) {
    if (!Number.isFinite(lessonNum) || lessonNum < 1) {
      slot.hidden = true;
      slot.innerHTML = "";
      stopVideo();
      return;
    }

    activeLesson = lessonNum;
    const ok = await ensureAuthState();
    if (ok) {
      renderPlayer(lessonNum);
      return;
    }
    renderPrompt(lessonNum);
  }

  window.menVideoPlayer = {
    renderLessonVideo,
    resetAuth() {
      authed = false;
      authChecked = false;
      authToken = "";
      window.sessionStorage.removeItem(TOKEN_KEY);
      stopVideo();
    },
  };
})();
