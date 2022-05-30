const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]
const navbarLinks1 = document.getElementsByClassName('nav')[1]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarLinks1.classList.toggle('active')
})



const modalViews = document.querySelectorAll('.modal'),
      modalBtns = document.querySelectorAll('.modal_button'),
      modalCloses = document.querySelectorAll('.modal_close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})