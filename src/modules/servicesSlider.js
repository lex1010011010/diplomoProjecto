const serviceSlider = () => {
    const serviceSlider = document.querySelector('.services-slider'),
        serviceSlide = serviceSlider.querySelectorAll('.services-slider .slide'),
        sliderArrows = serviceSlider.querySelectorAll('.slide-arrow'),
        sliderLeft = serviceSlider.querySelector('.slide-left'),
        sliderRight = serviceSlider.querySelector('.slide-right'),
        sliderContent = serviceSlider.querySelector('.slider-content'),
        widthSlider = serviceSlider.offsetWidth;

    serviceSlide.forEach(slide => {
        slide.style.minWidth = widthSlider / 5 - 18 + 'px';
    });

    sliderArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const val = 222;
            let current = Number(sliderContent.style.left.match(/-\d+/));

            if (arrow.classList.contains('slide-left') && current != 0) {
                sliderContent.style.left = current + val + 'px';
            } else if (arrow.classList.contains('slide-right') && current > -1100) {
                sliderContent.style.left = current - val + 'px';
            }

            current = Number(sliderContent.style.left.match(/-\d+/));
            if (current == 0) {
                sliderLeft.classList.add('hidden')
            } else {
                sliderLeft.classList.remove('hidden')
            }

            if (current == -1110) {
                sliderRight.classList.add('hidden')
            } else {
                sliderRight.classList.remove('hidden')
            }
        })
    });
}

export default serviceSlider;

