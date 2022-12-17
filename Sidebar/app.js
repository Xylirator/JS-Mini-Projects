const toggleBtn = document.querySelector(`.sidebar__toggle`);
const closeBtn = document.querySelector(`.close__btn`);
const sidebar = document.querySelector(`.sidebar`);

toggleBtn.addEventListener("click", function () {
  //     if(sidebar.classList.contains(`show__sidebar`)){
  // sidebar.classList.remove(`show__sidebar`)
  //     } else {
  //         sidebar.classList.add('show__sidebar')
  //     }
  sidebar.classList.toggle("show__sidebar");
});


closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show__sidebar')
})