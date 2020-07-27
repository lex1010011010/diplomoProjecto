const giftControl = () => {

    const giftIcon = document.querySelector('.fixed-gift'),
          giftPopup = document.getElementById('gift');

    giftIcon.addEventListener('click', (event) => {
        giftPopup.style.display = "flex";
        giftIcon.remove();
    })


}

export default giftControl;

