document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openMenu");
    const closeBtn = document.getElementById("closeMenu");
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    // Función unificada para CERRAR
    const closeMenu = () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    };

    // Función unificada para ABRIR
    const openMenu = (e) => {
        e.preventDefault();
        menu.classList.add("active");
        overlay.classList.add("active");
    };

    // Asignación de eventos
    if (openBtn) openBtn.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (overlay) overlay.addEventListener("click", closeMenu); // CLIC FUERA

    // Cerrar también si se pulsa un enlace del menú
    const menuLinks = document.querySelectorAll(".side-menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // 2. Lógica de Scroll Reveal (Se mantiene igual, está OK)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
