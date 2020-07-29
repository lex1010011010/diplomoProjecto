const mainSlider = () => {
    const mainSlider = document.querySelector('.main-slider'),
        itemsSlider = mainSlider.querySelectorAll('.main-slider .slide'),
        lengthSlider = itemsSlider.length;

    const sliderAutoplay = (slider, len, start) => {

        let i = start;
        setTimeout(function slide() {
            if (i == 0) {
                slider[len - 1].classList.remove('active');
            } else {
                slider[i - 1].classList.remove('active');
            }

            slider[i].classList.add('active');
            if (i == len - 1) {
                i = 0;
            } else { i++; }

            setTimeout(slide, 3000);
        }, 3000);
    }

    sliderAutoplay(itemsSlider, lengthSlider, 1);

}

export default mainSlider;

