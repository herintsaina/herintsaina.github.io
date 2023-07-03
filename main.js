
window.addEventListener('scroll', menuScroll);

function menuScroll() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.getElementById('menu').classList.add('menu-scroll');
    } else {
        document.getElementById('menu').classList.remove('menu-scroll');
    }
}

function checkedMenu() {
    location.reload();

}