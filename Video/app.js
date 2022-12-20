const btn = document.querySelector(".switch__btn");
const video = document.querySelector(".video__container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});


const preloader = document.querySelector('.preloader')

window.addEventListener('load', function() {
    preloader.classList.add('hide__preloader')
})