const serviceSlider = () => {
    const serviceSlider = document.querySelector('.services-slider'),
        serviceSlide = serviceSlider.querySelectorAll('.slide'),
        sliderArrows = serviceSlider.querySelectorAll('.slide-arrow'),
        sliderLeft = serviceSlider.querySelector('.slide-left'),
        sliderRight = serviceSlider.querySelector('.slide-right'),
        sliderContent = serviceSlider.querySelector('.slider-content'),
        widthSlider = serviceSlider.offsetWidth,
        sliderLenght = serviceSlide.length;

    let buildSlider;

    const cloneStart = () => {
        for (var i = 0; i <= 4; i++) {
            const clone = serviceSlide[i].cloneNode(true);
            clone.classList.add('clone' + i);
            sliderContent.append(clone);
        };
    }


    const cloneFinish = () => {
        for (var i = sliderLenght - 1; i >= 5; i--) {
            const clone = serviceSlide[i].cloneNode(true);
            clone.classList.add('clone' + i);
            sliderContent.prepend(clone)
        }
    }

    const sliderBuild = () => {
        sliderContent.style.left = -1110 + 'px';

        cloneStart();
        cloneFinish();

        buildSlider = serviceSlider.querySelectorAll('.slide');

        buildSlider.forEach((slide) => {
            slide.style.minWidth = widthSlider / 5 - 18 + 'px';
        });
    }


    sliderBuild();

    // const moveFirst = () => {
    //     const moveSlide = buildSlider[0].cloneNode(true);
    //     buildSlider.append(moveSlide);
    //     buildSlider[0].remove();
    // }
    // const moveLast = () => {
    //     const moveSlide = buildSlider[5].cloneNode(true);
    //     sliderContent.prepend(moveSlide);
    //     buildSlider[5].remove();
    // }



    sliderArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const val = 222;
            let current = Number(sliderContent.style.left.match(/-\d+/));

            if (arrow.classList.contains('slide-left')) {
                sliderContent.style.left = current + val + 'px';
            } else if (arrow.classList.contains('slide-right')) {
                sliderContent.style.left = current - val + 'px';
            }

            current = Number(sliderContent.style.left.match(/-\d+/));



        })
    });




}

export default serviceSlider;

