window.onscroll = function () {
    scrolled()
};
var navbar = document.getElementById("navbar");

function scrolled() {
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky")
        navbar.classList.remove("stationary")

    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("stationary");
    }
}