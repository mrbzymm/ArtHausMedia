const btn = document.querySelector('.cookiebtn')
const container = document.querySelector('.cookiesContainer')

btn.addEventListener('click', () => {
    document.body.removeChild(container)
})

setTimeout(() => {
    container.style.bottom = 0;
}, 2000)