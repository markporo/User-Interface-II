const mobileNavHamburger = document.getElementById("linesHamburgerImage");
const mobileNav = document.getElementById("hamburger");
const body = document.getElementsByName("body");

function openNav() {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }
}

function closeOpenNav() {
    if (window.outerWidth > "729") {
        mobileNav.style.display = "none";
    }
}