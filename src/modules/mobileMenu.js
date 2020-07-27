
const menuHandler = () => {
    const popupMenu = document.querySelector('.popup-menu'),
          iconMenu = document.querySelector('.menu-button'),
          closeMenu = document.querySelector('.close-menu-btn'),
          listMenu = document.querySelector('.popup-menu ul'),
          topMenu = document.querySelector('.top-menu');

    //открываем меню
    iconMenu.addEventListener('click', (event) => {
        popupMenu.style.display = "flex";
    })

    //закрываем меню
    closeMenu.addEventListener('click', (event) => {
        popupMenu.style.display = "none";
    })

    listMenu.addEventListener('click', (event) => {
        popupMenu.style.display = "none";
    })

    // popupMenu.addEventListener('click', (event) => {
    //     const target = event.target;
    //     console.log(target);
    // })

    //фиксация бургера
    document.addEventListener('scroll', (event) => {

        if (pageYOffset > 60) {
            topMenu.style.position = "fixed";
            topMenu.style.top = 0;
        } else {
            topMenu.style.position = "unset";
            topMenu.style.top = "unset";
        }
    })

    //плавная прокрутка к якорям по клику на пункты меню
    const scrollItems = document.querySelectorAll('.scroll a');
    for (let item of scrollItems) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            
            const blockID = item.getAttribute('href');
            
            document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        })
    }




}

export default menuHandler;