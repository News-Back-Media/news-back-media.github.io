const input = document.getElementById("searchInput");
const hero = document.getElementById("heroNews");
const searchBtn = document.getElementById("searchBtn");

if (input && hero && searchBtn) {

    function cariBerita() {
        const keyword = input.value.toLowerCase();
        const isi = hero.innerText.toLowerCase();

        if (isi.includes(keyword)) {
            hero.style.border = "3px solid red";
            hero.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else {
            hero.style.border = "none";
        }
    }

    input.addEventListener("keyup", cariBerita);
    searchBtn.addEventListener("click", cariBerita);

                }


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
