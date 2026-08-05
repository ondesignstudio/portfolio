/*=====================================================
GALLERY.JS
PARTIE 1
CONFIGURATION + GENERATION DES IMAGES
=====================================================*/

const galleryGrid = document.getElementById("galleryGrid");

const images = [];

/* Création automatique des images */

for (let i = 1; i <= totalImages; i++) {

    const imagePath = `${galleryFolder}/${i}.jpg`;

    images.push(imagePath);

    const img = document.createElement("img");

    img.src = imagePath;

    img.alt = `${galleryFolder} ${i}`;

    img.loading = "lazy";

    img.dataset.index = i - 1;

    galleryGrid.appendChild(img);

}

/* Variables Lightbox */

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

const counter = document.getElementById("lightbox-counter");

let currentIndex = 0;
/*=====================================================
GALLERY.JS
PARTIE 2
OUVERTURE DU LIGHTBOX
=====================================================*/

function updateCounter() {

    counter.textContent = `${currentIndex + 1} / ${images.length}`;

}

function openLightbox(index) {

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImg.src = images[currentIndex];

    updateCounter();

    document.body.style.overflow = "hidden";

}

/* Ouverture au clic */

document.querySelectorAll("#galleryGrid img").forEach((img) => {

    img.addEventListener("click", () => {

        openLightbox(parseInt(img.dataset.index));

    });

});

/* Fermeture */

function closeLightbox() {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

}

closeBtn.addEventListener("click", closeLightbox);

/* Clic sur le fond */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeLightbox();

    }

});
/*=====================================================
GALLERY.JS
PARTIE 3
PREVIOUS / NEXT + CLAVIER
=====================================================*/

function showImage(index){

    currentIndex = index;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    lightboxImg.src = images[currentIndex];

    updateCounter();

}

/*==============================
NEXT
==============================*/

nextBtn.addEventListener("click", () => {

    showImage(currentIndex + 1);

});

/*==============================
PREVIOUS
==============================*/

prevBtn.addEventListener("click", () => {

    showImage(currentIndex - 1);

});

/*==============================
KEYBOARD
==============================*/

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display !== "flex") return;

    if(e.key==="ArrowRight"){

        showImage(currentIndex+1);

    }

    if(e.key==="ArrowLeft"){

        showImage(currentIndex-1);

    }

    if(e.key==="Escape"){

        closeLightbox();

    }

});
/*=====================================================
GALLERY.JS
PARTIE 4
PRELOAD + SWIPE MOBILE + FIN
=====================================================*/

/*==============================
PRELOAD DES IMAGES VOISINES
==============================*/

function preloadImages(){

    const next = new Image();
    next.src = images[(currentIndex + 1) % images.length];

    const prev = new Image();
    prev.src = images[(currentIndex - 1 + images.length) % images.length];

}

lightboxImg.addEventListener("load", preloadImages);

/*==============================
SWIPE MOBILE
==============================*/

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 50){

        showImage(currentIndex + 1);

    }

    if(touchEndX > touchStartX + 50){

        showImage(currentIndex - 1);

    }

});

/*==============================
INITIALISATION
==============================*/

updateCounter();

console.log("Gallery loaded successfully.");