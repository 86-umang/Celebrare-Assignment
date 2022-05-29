const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]
const navbarLinks1 = document.getElementsByClassName('nav')[1]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarLinks1.classList.toggle('active')
})