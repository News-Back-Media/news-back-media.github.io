const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);

const wa = document.getElementById("share-whatsapp");
const tg = document.getElementById("share-telegram");
const fb = document.getElementById("share-facebook");
const x = document.getElementById("share-x");

if (wa)
    wa.href = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;

if (tg)
    tg.href = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;

if (fb)
    fb.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

if (x)
    x.href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;

const article = document.querySelector(".article");
if(article){
    
const words = article.innerText.trim().split(/\s+/).length;
const minutes = Math.max(1,Math.ceil(words/200));
const reading = document.getElementById("reading-time");

if(reading){
reading.textContent=`⏱️ Dibaca sekitar ${minutes} menit`;
}
}

///
const copy=document.getElementById("copyLink");

if(copy){
copy.onclick=async()=>{
await navigator.clipboard.writeText(window.location.href);
copy.textContent="✓ Link berhasil disalin";

setTimeout(()=>{

copy.textContent="Salin Link Berita";
},2000);
};
}

///
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});

topBtn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});
};
