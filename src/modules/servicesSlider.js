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
        for (var i = 0; i <= sliderLenght - 1; i++) {
            const clone = serviceSlide[i].cloneNode(true);
            clone.classList.add('clone' + i);
            sliderContent.append(clone);
        };
    }


    const cloneFinish = () => {
        for (var i = sliderLenght - 1; i >= 0; i--) {
            const clone = serviceSlide[i].cloneNode(true);
            clone.classList.add('clone' + i);
            sliderContent.prepend(clone)
        }
    }


    const removeStart = () => {
        for (var i = 0; i <= sliderLenght - 1; i++) {
            buildSlider[i].remove();
        };
    }
    const removeFinish = () => {
        for (var i = sliderLenght - 1; i >= 0; i--) {
            buildSlider[i].remove();
        };
    }

    const sliderBuild = () => {
        cloneStart();
        sliderContent.style.left = -2220 + 'px';

        buildSlider = serviceSlider.querySelectorAll('.slide');

        buildSlider.forEach((slide, index) => {
            slide.style.minWidth = widthSlider / 5 - 18 + 'px';
        });
    }

    sliderBuild();





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
            if (current === 0) {
                // sliderLeft.classList.add('hidden')
                console.log('делаем еще клонов');
                cloneStart();
            } else {
                // sliderLeft.classList.remove('hidden')
            }

            if (current === -3330) {
                // sliderRight.classList.add('hidden')
                console.log('делаем еще клонов');
                cloneFinish();
                removeStart();
            } else {
                // sliderRight.classList.remove('hidden')
            }
        })
    });




}

export default serviceSlider;

