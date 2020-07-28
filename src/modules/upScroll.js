const upScroll = () => {

    const topScroll = document.getElementById('totop');
    topScroll.style.display = "none";

    document.addEventListener('scroll', (event) => {

        if (pageYOffset > 120) {
            topScroll.style.display = "block";
        } else {
            topScroll.style.display = "none";
        }
    })
}
export default upScroll;

