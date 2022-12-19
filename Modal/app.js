const modalBtn = document.querySelector('.modal__btn')
const modal = document.querySelector('.modal__overlay')
const closeBtn = document.querySelector('.close__btn')

modalBtn.addEventListener('click', function() {
modal.classList.add('open__modal')
})
closeBtn.addEventListener('click', function() {
modal.classList.remove('open__modal')
})
