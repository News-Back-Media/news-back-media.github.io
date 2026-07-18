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

//

window.addEventListener("load", () => {
setTimeout(() => {
document.getElementById("loader").classList.add("hide");
}, 1500);
});

//

const cards = [...document.querySelectorAll(".feed-card")];
const perPage = 10;
let currentPage = 1;
function tampilkanHalaman(page){
currentPage = page;
cards.forEach((card,index)=>{
if(
index >= (page-1)*perPage &&
index < page*perPage
){
card.style.display="flex";
}else{
card.style.display="none";
}
});
buatPagination();
}
function buatPagination(){
const totalPage=Math.ceil(cards.length/perPage);
const pagination=document.getElementById("pagination");
pagination.innerHTML="";
for(let i=1;i<=totalPage;i++){
const btn=document.createElement("button");
btn.textContent=i;
if(i===currentPage){
btn.classList.add("active");
}
btn.onclick=()=>tampilkanHalaman(i);
pagination.appendChild(btn);
}
}
document.getElementById("newsCount").textContent=
cards.length+" Berita";
tampilkanHalaman(1);
