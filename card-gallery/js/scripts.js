

const slides = document.querySelectorAll('.slide');

for(const slide of slides) {

    slide.addEventListener('click', () => {

        clearSlidesActiveClass();
        slide.classList.add('active')
    })
}


function clearSlidesActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}