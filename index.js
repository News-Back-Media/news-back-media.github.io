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
