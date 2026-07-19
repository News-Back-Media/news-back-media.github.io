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
const cards = document.querySelectorAll(".feed-card");

const perPage = 5;
let currentPage = 1;

function showPage(page){

currentPage = page;

cards.forEach((card,index)=>{

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

const totalPages=Math.ceil(cards.length/perPage);

const pagination=document.getElementById("pagination");

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
