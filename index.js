
var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"
}
function closeNavbar()
{
    sidenav.style.left="-100%"
}


let lastScrollTop = 0;

window.addEventListener("scroll", function () {

    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        document.querySelector(".navbar").style.transform =
            "translateY(-100%)";

    } else {
        document.querySelector(".navbar").style.transform =
            "translateY(0)";
    }

    lastScrollTop = currentScroll;
});

document.getElementById("year").textContent = new Date().getFullYear();