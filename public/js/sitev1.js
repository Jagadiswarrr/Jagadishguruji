// ==========================================
// JagadishGuruji
// Common Website JavaScript
// ChintaLabs
// ==========================================

// ==========================================
// MOBILE MENU
// ==========================================

const menuButton =
document.getElementById("menuButton");

const mainNav =
document.querySelector(".main-nav");

if (menuButton && mainNav) {

```
menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("open");

});
```

}

// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

if (mainNav) {

```
const navLinks =
    mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("open");

    });

});
```

}

// ==========================================
// CURRENT YEAR
// ==========================================

const currentYear =
document.getElementById("currentYear");

if (currentYear) {

```
currentYear.textContent =
    new Date().getFullYear();
```

}
