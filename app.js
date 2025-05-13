document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");

    function openMenu() {
        sideMenu.classList.add("open");
        menuBtn.style.display = "none";
    }

    function closeMenu() {
        sideMenu.classList.remove("open");
        menuBtn.style.display = "block";
    }

    menuBtn.addEventListener("click", openMenu);

    document.addEventListener("click", (e) => {
        const clickedInsideMenu = sideMenu.contains(e.target);
        const clickedMenuBtn = menuBtn.contains(e.target);

        if (!clickedInsideMenu && !clickedMenuBtn && sideMenu.classList.contains("open")) {
            closeMenu();
        }
    });
});
