const toggleButton = document.querySelector("#toggleButton")
const toggleMenu = document.querySelector("#toggleMenu")

const nav__link1 = document.querySelector(".nav__link1")
const nav__link2 = document.querySelector(".nav__link2")
const nav__link3 = document.querySelector(".nav__link3")
const nav__link4 = document.querySelector(".nav__link4")
const nav__link5 = document.querySelector(".nav__link5")
const nav__link6 = document.querySelector(".nav__link6")

toggleButton.addEventListener('click', () => {
    if (toggleMenu.classList[1] == "toggle--close") {
        toggleMenu.classList.remove("toggle--close")
        toggleMenu.classList.add('toggle--open')
    } else {
        toggleMenu.classList.remove("toggle--open")
        toggleMenu.classList.add('toggle--close')
    }
})

nav__link1.addEventListener('click', () => {
    toggleMenu.classList.remove("toggle--open")
    toggleMenu.classList.add('toggle--close')
})

nav__link2.addEventListener('click', () => {
    toggleMenu.classList.remove("toggle--open")
    toggleMenu.classList.add('toggle--close')
})

nav__link3.addEventListener('click', () => {
    toggleMenu.classList.remove("toggle--open")
    toggleMenu.classList.add('toggle--close')
})

nav__link4.addEventListener('click', () => {
    toggleMenu.classList.remove("toggle--open")
    toggleMenu.classList.add('toggle--close')
})

nav__link5.addEventListener('click', () => {
    toggleMenu.classList.remove("toggle--open")
    toggleMenu.classList.add('toggle--close')
})

nav__link6.addEventListener('click', () => {
    toggleMenu.classList.remove("toggle--open")
    toggleMenu.classList.add('toggle--close')
})