const popupControl = () => {

    const popupContainer = document.querySelectorAll('.popup'),
        callFreeVisit = document.querySelector('.free-visit'),
        popupFreeVisit = document.getElementById('free_visit_form'),
        callCallback = document.querySelector('.callback-btn'),
        popupCallback = document.getElementById('callback_form');

    popupContainer.forEach(popup => {
        popup.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')) {
                popup.style.display = "none";
            }

        })
    });

    callFreeVisit.addEventListener('click', (event) => {
        popupFreeVisit.style.display = "flex";
    });

    callCallback.addEventListener('click', (event) => {
        popupCallback.style.display = "flex";
    })
}

export default popupControl;

