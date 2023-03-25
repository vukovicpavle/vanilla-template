function initializeTheme() {
  const theme = localStorage.theme;
  if (theme) {
    setTheme(theme);
  } else {
    setTheme("system");
  }

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }
}

function setTheme(theme) {
  switch (theme) {
    case "dark":
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      break;
    case "light":
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      break;
    default:
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.removeItem("theme");
  }
}

// On page load
// document.addEventListener("DOMContentLoaded", () => {
//   initializeTheme();
// });
