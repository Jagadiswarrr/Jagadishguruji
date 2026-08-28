/* ==========================================
JAGADISHGURUJI
Site JavaScript V2
========================================== */

document.addEventListener("DOMContentLoaded", function () {

```
/* ==========================================
   CURRENT YEAR
   ========================================== */

const yearElement =
    document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==========================================
   ACTIVE NAVIGATION
   ========================================== */

const currentPage =
    window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


document
    .querySelectorAll(".main-nav a")
    .forEach(function (link) {

        const linkPage =
            link.getAttribute("href")
                .split("?")[0]
                .toLowerCase();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });
```

});
