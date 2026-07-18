const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".hero-card, .feed-card");
function cariBerita() {
const keyword = input.value.trim().toLowerCase();
cards.forEach(card => {
const isi = card.innerText.toLowerCase();
if (keyword === "" || isi.includes(keyword)) {
card.style.display = "";
} else {
card.style.display = "none";
}
});
}
