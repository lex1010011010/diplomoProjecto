import choiceClub from './modules/choiceClub';
import menuHandler from './modules/mobileMenu';
import upScroll from './modules/upScroll';
import giftControl from './modules/giftAction';
import popupControl from './modules/popupControl';
import calcControl from './modules/calcControl';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import serviceSlider from './modules/servicesSlider';
import gallerySlider from './modules/gallerySlider';


document.addEventListener('DOMContentLoaded', () => {

    const currentPage = document.querySelector('html').id;

    if (currentPage === '') {
        choiceClub();
        menuHandler();
        upScroll();
        giftControl();
        popupControl();
        calcControl();
        sendForm();
        mainSlider();
        serviceSlider();
        gallerySlider();
    } else {
        choiceClub();
        menuHandler();
        upScroll();
        popupControl();
        sendForm();
        mainSlider();
        serviceSlider();
        gallerySlider();
    }
})


