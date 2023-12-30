var swiper = new Swiper(".new__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".new__pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".news__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".news__pagination",
        clickable: true,
    },
});

var swiper3 = new Swiper(".header__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".header__swiper-next",
        prevEl: ".header__swiper-prev",
    },
});

let openOverlay = document.querySelectorAll('.cart')
let overlay = document.querySelector(".overlay")
// let closeOverlay = document.querySelector(".close")

Array.from(openOverlay).forEach((item) => {
    item.addEventListener('click', () => {
        overlay.style.display = 'flex'
    })
})

// closeOverlay.addEventListener('click', () => {
//     overlay.style.display = 'none'
// })

overlay.addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className === 'overlay') overlay.style.display = 'none'
})