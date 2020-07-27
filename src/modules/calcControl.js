const calcControl = () => {

    let calcPromo = false;

    const makeCalc = (club, time, promo) => {
        let result;
        const resultField = document.getElementById('price-total');
        if (club === 'mozaika') {
            result = 1999;
            if (time == 6) {
                result = 9900;
            } else if (time == 9) {
                result = 13900;
            } else if (time == 12) {
                result = 29000;
            }
        } else if (club === 'schelkovo') {
            result = 2999;
            if (time == 6) {
                result = 14990;
            } else if (time == 9) {
                result = 21990;
            } else if (time == 12) {
                result = 24990;
            }
        }

        if (promo) {
            result = Math.floor(result * 0.7);
        }

        resultField.textContent = result;
    }

    const timeOptions = document.querySelectorAll('.time input'),
        clubOptions = document.querySelectorAll('.club input'),
        promoOption = document.querySelector('.price-message input');

    let clubSelected = document.querySelector('.club input:checked').value,
        timeSelected = document.querySelector('.time input:checked').value;
    makeCalc(clubSelected, timeSelected, calcPromo);

    clubOptions.forEach(club => {
        club.addEventListener('change', (event) => {
            clubSelected = document.querySelector('.club input:checked').value;
            makeCalc(clubSelected, timeSelected, calcPromo);
        });
    });

    timeOptions.forEach(time => {
        time.addEventListener('click', (event) => {
            const target = event.target;
            timeSelected = target.value;
            makeCalc(clubSelected, timeSelected, calcPromo);
        });
    });

    promoOption.addEventListener('input', (event) => {

        if (promoOption.value.toUpperCase() === 'ТЕЛО2020') {
            calcPromo = true
        } else {
            calcPromo = false
        }
        makeCalc(clubSelected, timeSelected, calcPromo);

    });


}

export default calcControl;

