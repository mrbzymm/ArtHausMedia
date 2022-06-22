const ham = document.querySelector(".ham-menu")
const navbarLinks = document.querySelector('.links')

ham.addEventListener("click", () => {
    ham.classList.toggle('ham-menu-active')
    navbarLinks.classList.toggle('nav-link-active')
    console.log(navbarLinks)
    console.log(ham)
})

if (media(window).s) {
    navbarLinks.classList.remove('nav-link-active')
}

const close = document.querySelector(".cookieinfo-close")
const cookieinfo = document.querySelector('.cookieinfo')

close.addEventListener('click', () => {
    document.removeChild(cookieinfo)
})