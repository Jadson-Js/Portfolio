const toggleButton = document.querySelector("#toggleButton")
const toggleMenu = document.querySelector("#toggleMenu")

toggleButton.addEventListener('click', () => {
    if (toggleMenu.classList[1] == "toggle--close") {
        toggleMenu.classList.remove("toggle--close")
        toggleMenu.classList.add('toggle--open')
    } else {
        toggleMenu.classList.remove("toggle--open")
        toggleMenu.classList.add('toggle--close')
    }
})