const burger = document.querySelector('.burg')
const navBar = document.querySelector('nav')
const li = navBar.querySelectorAll('li')

window.addEventListener('resize', () => {
    if (navBar.classList.contains('active')) toggleMenu()
})

burger.onclick = toggleMenu
li.forEach(i => i.onclick = toggleMenu)

function toggleMenu() {
    navBar.classList.toggle('active')
    burger.classList.toggle('active')
}
