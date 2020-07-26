const choiseClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubsListItems = document.querySelector('.clubs-list ul');

    clubsList.addEventListener('click', (event) => {
        clubsListItems.classList.toggle('display-none');
        console.log(event.target);
    })


}

export default choiseClub;

