// public/theme-script.js
;(function () {
  try {
    const storedTheme = localStorage.theme;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      storedTheme === "dark" ||
      (!storedTheme && systemPrefersDark)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    console.error("Theme preload script error:", e);
  }
})();
