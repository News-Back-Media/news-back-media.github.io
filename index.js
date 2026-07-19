//this not private environment 
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

//this not private environment 
window.addEventListener("load", () => {
setTimeout(() => {
const loader = document.getElementById("loader");
if(loader){
loader.classList.add("hide");
}
},1500);
});

//this not private environment 
const feedCards = document.querySelectorAll(".feed-card");
const pagination = document.getElementById("pagination");
if(feedCards.length > 0 && pagination){
const perPage = 5;
const pageLimit = 10;
let currentPage = 1;
function showPage(page){
currentPage = page;
feedCards.forEach((card,index)=>{
const start = (page-1)*perPage;
const end = start+perPage;
card.style.display =
(index>=start && index<end)
? "flex"
: "none";
});
renderPagination();
}
function renderPagination(){
const totalPages = Math.ceil(feedCards.length/perPage);
pagination.innerHTML = "";
const currentGroup = Math.floor((currentPage-1)/pageLimit);
const startPage = currentGroup*pageLimit+1;
const endPage = Math.min(startPage+pageLimit-1,totalPages);
if(startPage > 1){
const prev = document.createElement("button");
prev.textContent = "←";
prev.onclick = ()=>showPage(startPage-pageLimit);
pagination.appendChild(prev);
}
for(let i=startPage;i<=endPage;i++){
const btn=document.createElement("button");
btn.textContent=i;
if(i===currentPage){
btn.classList.add("active");
}
btn.onclick=()=>showPage(i);
pagination.appendChild(btn);
}
if(endPage < totalPages){
const next=document.createElement("button");
next.textContent="→";
next.onclick=()=>showPage(endPage+1);
pagination.appendChild(next);
}
}
showPage(1);
}
