const mainSlider = () => {
    const mainSlider = document.querySelector('.main-slider'),
        itemsSlider = document.querySelectorAll('.main-slider .slide'),
        lengthSlider = itemsSlider.length;

    let i = 1;
    setTimeout(function slide() {
        if (i == 0) {
            itemsSlider[lengthSlider - 1].style.display = "none";
        } else {
            itemsSlider[i - 1].style.display = "none";
        }

        itemsSlider[i].style.display = "flex";
        if (i == lengthSlider - 1) {
            i = 0;
        } else { i++; }

        setTimeout(slide, 3000);
    }, 3000);
}

export default mainSlider;

