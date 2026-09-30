// 1. Tahun otomatis di footer
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// 2. Tombol tab (halaman profile)
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // hapus class active dari semua tombol & panel
        tabButtons.forEach(function (b) { b.classList.remove("active"); });
        tabPanels.forEach(function (p) { p.classList.remove("active"); });

        // aktifkan tombol yang diklik + panel yang cocok
        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});

// 3. Tombol like (halaman food & tourist)
document.querySelectorAll(".like-btn").forEach(function (button) {
    let count = 0;
    button.addEventListener("click", function () {
        count++;
        button.textContent = "♥ " + count;
        button.classList.add("liked");
    });
});

// 4. Tombol fun fact (halaman hometown)
const factBtn = document.getElementById("fact-btn");
const factBox = document.getElementById("fact-box");

if (factBtn) {
    factBtn.addEventListener("click", function () {
        factBox.classList.toggle("show");
        factBtn.textContent = factBox.classList.contains("show")
            ? "✨ Hide fun fact"
            : "✨ Show fun fact";
    });
}