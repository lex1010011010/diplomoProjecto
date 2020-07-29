import maskPhone from './maskPhone';
maskPhone('input[type=tel]');

const sendForm = () => {

    const errorMessage = `<h4>ОЙ!</h4>
    <p>Что-то пошло не так. <br> При загрузке данных произошла ошибка.</p>
    <button class="btn close-btn">OK</button>`,
        loadMessage = 'Загрузка...',
        errorInput = 'Ошибка ввода',
        confirmMessage = 'Необходимо подтверждение, поставьте галочку!!!=))';

    const forms = document.querySelectorAll('form'),
        form1 = document.getElementById('form1'),
        bannerForm = document.getElementById('banner-form'),
        cardOrder = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form');

    const thanks = document.getElementById('thanks'),
        formContent = thanks.querySelector('.form-content');

    //отправка формы
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    //оцистка формы после удачной отправки
    const clearInput = (form, chbox) => {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(elem => {
            elem.value = '';
        });
        if (chbox) {
            chbox.checked = false;
        }

    };

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.2rem; color: red;';

    //валидация текстовых полей
    const validText = form => {
        const inputText = form.querySelectorAll('input[type=text]');
        let result = true;
        inputText.forEach(item => {
            const test = /[а-яА-ЯёЁ\s]/.test(item.value);
            if (!test) {
                result = false;
                item.style.border = 'solid 1px red';
            } else {
                item.style.border = '';
            }
        });
        return result;
    };

    //запрет ввода всего, кроме русских букв
    const denyText = form => {
        const inputText = form.querySelectorAll('input[type=text]');
        inputText.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^а-яА-ЯёЁ\s]/, '');
            });
        });
    };

    form1.addEventListener('submit', event => {
        event.preventDefault();
        form1.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const chbox = document.getElementById('check');
        const formData = new FormData(form1);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        if (chbox.checked) {
            if (validText(form1)) {
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        clearInput(form1, chbox);
                        statusMessage.textContent = '';
                        thanks.style.display = 'flex';
                    })
                    .catch(error => {
                        console.error(error);
                        formContent.innerHTML = errorMessage;
                        thanks.style.display = 'flex';
                        statusMessage.textContent = '';
                    });

            } else {
                statusMessage.textContent = errorInput;
            }
        } else {
            statusMessage.textContent = confirmMessage;
        }
    });

    bannerForm.addEventListener('submit', event => {
        event.preventDefault();
        bannerForm.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const chbox = document.getElementById('check1');
        const formData = new FormData(bannerForm);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        if (chbox.checked) {
            if (validText(bannerForm)) {
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        clearInput(bannerForm, chbox);
                        statusMessage.textContent = '';
                        thanks.style.display = 'flex';
                    })
                    .catch(error => {
                        console.error(error);
                        formContent.innerHTML = errorMessage;
                        thanks.style.display = 'flex';
                        statusMessage.textContent = '';
                    });

            } else {
                statusMessage.textContent = errorInput;
            }
        } else {
            statusMessage.textContent = confirmMessage;
        }
    });

    cardOrder.addEventListener('submit', event => {
        event.preventDefault();
        cardOrder.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const chbox = document.getElementById('card_check');
        const formData = new FormData(cardOrder);
        const body = {};
        statusMessage.style.color = 'black';
        formData.forEach((val, key) => {
            body[key] = val;
        });
        console.log(body);
        if (chbox.checked) {
            if (validText(cardOrder)) {
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        clearInput(cardOrder);
                        statusMessage.textContent = '';
                        thanks.style.display = 'flex';
                    })
                    .catch(error => {
                        console.error(error);
                        formContent.innerHTML = errorMessage;
                        thanks.style.display = 'flex';
                        statusMessage.textContent = '';
                    });

            } else {
                statusMessage.textContent = errorInput;
            }
        } else {
            statusMessage.textContent = confirmMessage;
        }
    });

    footerForm.addEventListener('submit', event => {
        event.preventDefault();
        footerForm.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const radio = footerForm.querySelectorAll('input[type=radio]');
        const formData = new FormData(footerForm);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        if (validText(footerForm)) {
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    clearInput(footerForm);
                    radio.forEach(item => {
                        item.checked = false;
                    })
                    statusMessage.textContent = '';
                    thanks.style.display = 'flex';
                })
                .catch(error => {
                    console.error(error);
                    formContent.innerHTML = errorMessage;
                    thanks.style.display = 'flex';
                    statusMessage.textContent = '';
                });

        } else {
            statusMessage.textContent = errorInput;
        }
    });

    //запуск запрета ввода
    forms.forEach(elem => {
        denyText(elem);
    });

};

export default sendForm;
