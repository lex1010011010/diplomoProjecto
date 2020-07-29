
const gallerySlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        itemsSlider = gallerySlider.querySelectorAll('.slide'),
        leftArrow = gallerySlider.querySelector('.slide-left'),
        rightArrow = gallerySlider.querySelector('.slide-right'),
        slideArrow = gallerySlider.querySelectorAll('.slide-arrow'),
        lengthSlider = itemsSlider.length;

    let activeSlide = 0,
        sliderAutoplay;

    const sliderDots = () => {

        const dotsList = document.createElement('ul');
        dotsList.classList.add('slider-dots');
        gallerySlider.append(dotsList);
        itemsSlider.forEach(() => {
            const dotsItem = document.createElement('li');
            dotsItem.classList.add('slider-dots-item');
            dotsList.append(dotsItem);
        });
    }
    sliderDots();

    const galleryDots = gallerySlider.querySelectorAll('.slider-dots-item');
    galleryDots[0].classList.add('active');

    galleryDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            checkActiveSlide();

            itemsSlider[activeSlide].classList.remove('active');
            galleryDots[activeSlide].classList.remove('active');
            itemsSlider[index].classList.add('active');
            galleryDots[index].classList.add('active');
        })
    });



    sliderAutoplay = setInterval(function slide() {
        nextSlide(activeSlide);
    }, 3000);;

    gallerySlider.addEventListener('mouseleave', () => {
        sliderAutoplay = setInterval(function slide() {
            nextSlide(activeSlide);
        }, 3000);
    })
    gallerySlider.addEventListener('mouseenter', () => {
        clearInterval(sliderAutoplay);
    })


    const checkActiveSlide = () => {
        itemsSlider.forEach((item, index) => {

            if (item.classList.contains('active')) {
                activeSlide = index;
            }
            galleryDots[index].classList.remove('active')

        });

        if (activeSlide === lengthSlider - 1) {
            galleryDots[0].classList.add('active')
        } else {
            galleryDots[activeSlide + 1].classList.add('active')
        }

    }

    const nextSlide = () => {
        checkActiveSlide();
        if (activeSlide < lengthSlider - 1) {
            itemsSlider[activeSlide].classList.toggle('active');
            itemsSlider[activeSlide + 1].classList.toggle('active');
        } else if (activeSlide === lengthSlider - 1) {
            itemsSlider[activeSlide].classList.toggle('active');
            itemsSlider[0].classList.toggle('active');
        }
    }

    const prevSlide = () => {
        checkActiveSlide();
        if (activeSlide !== 0) {
            itemsSlider[activeSlide].classList.toggle('active');
            itemsSlider[activeSlide - 1].classList.toggle('active');
        } else if (activeSlide === 0) {
            itemsSlider[activeSlide].classList.toggle('active');
            itemsSlider[lengthSlider - 1].classList.toggle('active');
        }
    }

    slideArrow.forEach(arrow => {

        arrow.addEventListener('click', () => {
            if (arrow === leftArrow) {
                prevSlide(activeSlide);
            } else if (arrow === rightArrow) {
                nextSlide(activeSlide);
            }
        })

    });

}

export default gallerySlider;

