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
