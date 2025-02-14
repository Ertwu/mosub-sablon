// toggle menu
const navbarnav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
 
};

// klik diluar menu hilang
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target))
    navbarnav.classList.remove("active");
  
});

// toggle search
const searchcontainer = document.querySelector(".search-container");
const searchinput = document.querySelector("#search-input");
document.querySelector("#search").onclick = (e) => {
  searchcontainer.classList.toggle("active");
  searchinput.focus();
  e.preventDefault();
};

// klik diluar search hilang
const searchicons = document.querySelector("#search");
document.addEventListener("click", function (e) {
  if (!searchcontainer.contains(e.target) && !searchicons.contains(e.target))
    searchcontainer.classList.remove("active");
});
