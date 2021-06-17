const changeThemeColor = (color) => {
  let root = document.querySelector(":root");
  root.style.setProperty("--side-menu-bg-light", color.hex);
}
const changeNightMode = (flag) => {
  let style = document.querySelector(":root").style;
  if(flag) {
    style.filter = "invert(100) hue-rotate(365deg)";
    style.setProperty("--side-bg","white");
  } else {
    style.filter = "none";
  }
}
export {
  changeThemeColor,
  changeNightMode
};
