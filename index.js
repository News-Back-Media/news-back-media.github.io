const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".hero-card, .feed-card");
function cariBerita() {
const keyword = input.value.trim().toLowerCase();
cards.forEach(card => {
const isi = card.textContent.toLowerCase();
if (keyword === "" || isi.includes(keyword)) {
card.style.display = "";
} else {
card.style.display = "none";
}
});
}
input.addEventListener("input", cariBerita);
document.getElementById("searchBtn").addEventListener("click", cariBerita);

window.addEventListener("load", () => {
document.getElementById("loader").classList.add("hide");
});
