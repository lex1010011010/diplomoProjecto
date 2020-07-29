const gallerySlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        gallerySlide = gallerySlider.querySelectorAll('.slide'),
        galleryLenght = gallerySlide.length,
        sliderArrows = gallerySlider.querySelectorAll('.slide-arrow');

    let activeSlide;

    const checkActiveslide = function () {
        gallerySlide.forEach((slide, index) => {
            if (slide.classList.contains('active')) {
                activeSlide = index;
            }
        });
    }

    const nextSlide = function (current, next) {
        gallerySlide[current].classList.remove('active'); //index
        sliderDots[current].classList.remove('active');
        gallerySlide[next].classList.add('active');  //index + 1
        sliderDots[next].classList.add('active');
    }

    const prevSlide = function (current, prev) {
        gallerySlide[current].classList.remove('active');  //index
        sliderDots[current].classList.remove('active');
        gallerySlide[prev].classList.add('active'); // index-1
        sliderDots[prev].classList.add('active');
    }

    const sliderAutoplay = function () {
        checkActiveslide();
        let i = activeSlide;

        setTimeout(function slide() {
            checkActiveslide();
            if (i !== galleryLenght - 1) {
                nextSlide(i, i + 1);
                i++;
            } else {
                gallerySlide[i].classList.remove('active');
                sliderDots[i].classList.remove('active');
                i = 0;
                gallerySlide[i].classList.add('active');
                sliderDots[i].classList.add('active');
            }
            checkActiveslide();

            setTimeout(slide, 3000);

        }, 3000);
    }
    sliderAutoplay();

    const dotsSlide = function () {
        const dots = document.createElement('ul');
        dots.classList.add('slider-dots');
        gallerySlider.append(dots);

        gallerySlide.forEach((slide, index) => {
            const dotsItem = document.createElement('li');
            dotsItem.classList.add('slider-dots-item');
            dots.append(dotsItem);
        });
    }
    dotsSlide();

    const sliderDots = gallerySlider.querySelectorAll('.slider-dots-item')
    sliderDots[0].classList.add('active');

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', (event) => {
            checkActiveslide();
            gallerySlide[activeSlide].classList.remove('active');
            sliderDots[activeSlide].classList.remove('active');

            gallerySlide[index].classList.add('active');
            sliderDots[index].classList.add('active');
        })
    });

    sliderArrows.forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            const target = event.target;
            checkActiveslide();
            if (target.classList.contains('slide-right') && activeSlide < galleryLenght - 1) {
                nextSlide(activeSlide, activeSlide + 1);
            } else if (target.classList.contains('slide-left') && activeSlide !== 0) {
                prevSlide(activeSlide, activeSlide - 1);
            } else if (target.classList.contains('slide-left') && activeSlide === 0) {
                prevSlide(activeSlide, galleryLenght - 1);
            } else if (target.classList.contains('slide-right') && activeSlide === galleryLenght - 1) {
                nextSlide(activeSlide, 0);
            }

            checkActiveslide();

        })
    });
}

export default gallerySlider;
