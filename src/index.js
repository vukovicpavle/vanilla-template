function initializeTheme() {
  const theme = localStorage.theme;
  if (theme) {
    setTheme(theme);
  } else {
    setTheme("system");
  }
}

function setTheme(theme) {
  switch (theme) {
    case "dark":
      setDarkTheme();
      break;
    case "light":
      setLightTheme();
      break;
    default:
      setDefaultTheme();
  }
}

function setDarkTheme() {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
}

function setLightTheme() {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
}

function setDefaultTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.removeItem("theme");
}
