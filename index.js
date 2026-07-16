const input = document.getElementById("searchInput");
const hero = document.getElementById("heroNews");
function cariBerita(){
const keyword = input.value.toLowerCase();
const isi = hero.innerText.toLowerCase();
if(isi.includes(keyword)){
hero.style.border="3px solid red";
hero.scrollIntoView({
behavior:"smooth",
block:"center"
});
}else{
hero.style.border="none";
}
}
input.addEventListener("keyup",cariBerita);
document
.getElementById("searchBtn")
.addEventListener("click",cariBerita);

const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);
document.getElementById("share-whatsapp").href =
`https://wa.me/?text=${pageTitle}%20${pageUrl}`;
document.getElementById("share-telegram").href =
`https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
document.getElementById("share-facebook").href =
`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
document.getElementById("share-x").href =
`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
