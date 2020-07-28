const choiceClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubsListItems = document.querySelector('.clubs-list ul');

    clubsList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('.clubs-list ul a') || target.closest('.clubs-list')) {
            clubsListItems.classList.toggle('display-none');
        }
    })
}

export default choiceClub;

