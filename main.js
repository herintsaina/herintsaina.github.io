
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

// Sélectionnez le menu et les éléments du menu
const menu = document.getElementById('menu-link'); // Remplacez 'menu' par l'ID de votre menu
const menuItems = document.querySelectorAll('.menu-mobil'); // Remplacez '.menu-item' par la classe de vos éléments de menu

// Ajoutez un gestionnaire d'événement de clic à chaque élément du menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Fermez le menu en masquant la classe CSS (par exemple, 'menu-active')
    menu.classList.remove('menu-active'); // Assurez-vous de définir cette classe dans votre CSS
  });
});