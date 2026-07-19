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
if(input){
input.addEventListener("input", cariBerita);
}
const searchBtn = document.getElementById("searchBtn");
if(searchBtn){
searchBtn.addEventListener("click", cariBerita);
}

//
window.addEventListener("load", () => {
setTimeout(() => {
const loader = document.getElementById("loader");
if(loader){
loader.classList.add("hide");
}
},1500);
});

//
const feedCards = document.querySelectorAll(".feed-card");
const pagination = document.getElementById("pagination");
if(feedCards.length > 0 && pagination){
const perPage = 5;
let currentPage = 1;
function showPage(page){
currentPage = page;
feedCards.forEach((card,index)=>{
const start=(page-1)*perPage;
const end=start+perPage;
card.style.display =
(index>=start && index<end)
? "flex"
: "none";
});
renderPagination();
}
function renderPagination(){
const totalPages=Math.ceil(feedCards.length/perPage);
pagination.innerHTML="";
for(let i=1;i<=totalPages;i++){
const btn=document.createElement("button");
btn.textContent=i;
if(i===currentPage){
btn.classList.add("active");
}
btn.onclick=()=>showPage(i);
pagination.appendChild(btn);
}
}
showPage(1);
}
