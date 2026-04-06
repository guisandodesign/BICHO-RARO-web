document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openMenu");
    const closeBtn = document.getElementById("closeMenu");
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    openBtn.addEventListener("click", () => {
        menu.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });

});