document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openMenu");
    const closeBtn = document.getElementById("closeMenu");
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    // Lógica del Menú
    const toggleMenu = () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    openBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".side-menu a").forEach(link => {
        link.addEventListener("click", toggleMenu);
    });

    // Lógica de Aparición al hacer Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
});
