document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar .nav-link, .navbar .dropdown-item");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});
