// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
const modeDark = document.querySelector('#mode')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu && e.target != modeDark) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')
const sunToggle = document.querySelector('#sun')
const moonToggle = document.querySelector('#moon')

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
        sunToggle.classList.add('hidden')
        moonToggle.classList.remove('hidden')
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
        moonToggle.classList.add('hidden')
        sunToggle.classList.remove('hidden')
    }
})

// Refresh dark mode
if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    darkToggle.checked = true
    sunToggle.classList.add('hidden')
} else {
    darkToggle.checked = false
    moonToggle.classList.add('hidden')
}
