const input = document.getElementById("searchInput");
function cariBerita(){
const keyword = input.value.toLowerCase();
const cards = document.querySelectorAll(".hero-card");
cards.forEach(card=>{
card.style.border="none";
const isi = card.innerText.toLowerCase();
if(isi.includes(keyword)){
card.style.border="3px solid red";
card.scrollIntoView({
behavior:"smooth",
block:"center"
});
}
});
}
input.addEventListener("keyup",cariBerita);
document
.getElementById("searchBtn")
.addEventListener("click",cariBerita);
