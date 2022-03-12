//const mobileNavHamburger = document.getElementById("linesHamburgerImage");
//const body = document.getElementsByName("body");
const HamNavA = document.querySelector("#HamNavA");
const mobileNav = document.getElementById("hamburger");

// hamburger
function openNav() {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }
}

function closeOpenNav() {
    if (window.outerWidth > 729) {
        mobileNav.style.display = "none";
    }
}

// Nav links -- close hamburger on cick
// HamNavA.addEventListener('click', NavLinkClickCloseHam);

function NavLinkClickCloseHam() {
    mobileNav.style.display = "none";
}


// tilt effect
const mainPhoto = document.getElementById("mainPhoto")
mainPhoto.addEventListener("mousemove", imageMouseMove)
mainPhoto.addEventListener("mouseleave", imageMouseLeave)

function imageMouseMove(e) {
    const imgWidth = mainPhoto.offsetWidth;
    const imgHeight = mainPhoto.offsetHeight;
    const centerX = mainPhoto.offsetLeft + imgWidth / 2;
    const centerY = mainPhoto.offsetTop + imgHeight / 2;
    const mouseX = (e.clientX - centerX);
    const mouseY = (e.pageY - centerY); // imgHeight;
    const rotateX = 15 * mouseY / (imgHeight / 2); // 15 is in degrees, *-1 if you want to reverse
    const rotateY = (-1) * 15 * mouseX / (imgWidth / 2)

    mainPhoto.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(.95, .95, .95)`

}

function imageMouseLeave(e) {
    mainPhoto.style.transform = `perspective(1000px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1, 1, 1)`
}