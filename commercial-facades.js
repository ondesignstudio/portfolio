/*==================================================
COMMERCIAL FACADES
PARTIE 1
==================================================*/

//==============================
// Les catégories
//==============================

const galleries = [

{
    title: "Curtain Walls",
    folder: "Commercial Facades/Curtain Walls",
    total: 20,
    cover: "Commercial Facades/Curtain Walls/01.jpg"
},

{
    title: "Retail Stores",
    folder: "Commercial Facades/Retail Stores",
    total: 19,
    cover: "Commercial Facades/Retail Stores/01.jpg"
},

{
    title: "Hair Salons",
    folder: "Commercial Facades/Hair Salons",
    total: 9,
    cover: "Commercial Facades/Hair Salons/01.jpg"
},

{
    title: "Dairies",
    folder: "Commercial Facades/Dairies",
    total: 6,
    cover: "Commercial Facades/Dairies/01.jpg"
},

{
    title: "Restaurants",
    folder: "Commercial Facades/Restaurants",
    total: 5,
    cover: "Commercial Facades/Restaurants/01.jpg"
},

{
    title: "Promotional Displays",
    folder: "Commercial Facades/Promotional Displays",
    total: 4,
    cover: "Commercial Facades/Promotional Displays/01.jpg"
},

{
    title: "Miscellaneous",
    folder: "Commercial Facades/Miscellaneous",
    total: 29,
    cover: "Commercial Facades/Miscellaneous/01.jpg"
}

];

//==============================
// Variables
//==============================

let currentGallery = [];
let currentIndex = 0;

//==============================
// Eléments HTML
//==============================

const galleryGrid = document.getElementById("galleryGrid");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const counter = document.getElementById("lightbox-counter");

const btnClose = document.querySelector(".close");

const btnPrev = document.querySelector(".prev");

const btnNext = document.querySelector(".next");
/*==================================================
PARTIE 2
Création des cartes des catégories
==================================================*/

function createCategories() {

    galleryGrid.innerHTML = "";

    galleries.forEach(function(item){

        const card = document.createElement("div");
        card.className = "gallery-card";

        card.innerHTML = `

    <div class="gallery-card-image">
        <img src="${item.cover}" alt="${item.title}">
    </div>

    <div class="gallery-card-content">

        <h2>${item.title}</h2>

        <span class="project-count">${item.total} Projects</span>

        <button class="gallery-btn" type="button">
            View Gallery
        </button>

    </div>

`;

        card.querySelector(".gallery-btn").onclick = function(){

            openCategory(item);

        };

        galleryGrid.appendChild(card);

    });

}
/*==================================================
PARTIE 3
Ouverture d'une catégorie + Lightbox
==================================================*/

function openCategory(category){

    currentGallery = [];

    for(let i = 1; i <= category.total; i++){

        const number = String(i).padStart(2,"0");

        currentGallery.push(
            category.folder + "/" + number + ".jpg"
        );

    }

    currentIndex = 0;

    lightbox.style.display = "flex";

    showImage();

}


function showImage(){

    lightboxImg.src = currentGallery[currentIndex];

    counter.textContent =
        (currentIndex + 1) +
        " / " +
        currentGallery.length;

}


function nextImage(){

    currentIndex++;

    if(currentIndex >= currentGallery.length){

        currentIndex = 0;

    }

    showImage();

}


function prevImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = currentGallery.length - 1;

    }

    showImage();

}
/*==================================================
PARTIE 4
Navigation + Fermeture + Initialisation
==================================================*/

//==============================
// Boutons
//==============================

btnNext.onclick = nextImage;

btnPrev.onclick = prevImage;

btnClose.onclick = function(){

    lightbox.style.display = "none";

};

//==============================
// Fermer en cliquant en dehors
//==============================

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};

//==============================
// Navigation clavier
//==============================

document.addEventListener("keydown",function(e){

    if(lightbox.style.display !== "flex") return;

    if(e.key === "ArrowRight"){

        nextImage();

    }

    if(e.key === "ArrowLeft"){

        prevImage();

    }

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});

//==============================
// Initialisation
//==============================

window.onload = function(){

    createCategories();

};