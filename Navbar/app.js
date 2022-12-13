const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
//   if (links.classList.contains("show__links")) {
//     links.classList.remove("show__links");
//   } else {
//     links.classList.add("show__links");
//   }
  links.classList.toggle('show__links')
});
