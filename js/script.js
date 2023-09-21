//toggle class active
const navbaNav = document.querySelector(".navbar-nav");
// ketika hamberger menu di klik
document.querySelector("#menu").onclick = () => {
  navbaNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan menu
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbaNav.contains(e.target)) {
    navbaNav.classList.remove("active");
  }
});
