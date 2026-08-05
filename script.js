// =======================================
// O.Nacereddine Portfolio
// Main Script
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("show");
            menuToggle.classList.toggle("active");

        });

    }

    // ==========================
    // ACTIVE MENU
    // ==========================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

            if(navMenu){

                navMenu.classList.remove("show");

            }

        });

    });

    // ==========================
    // AUTOMATIC GALLERY
    // ==========================

    const gallery = document.getElementById("galleryGrid");

    if (gallery && typeof galleryFolder !== "undefined") {

        for (let i = 1; i <= totalImages; i++) {

            const number = String(i).padStart(2,"0");

            const card = document.createElement("div");

            card.className = "gallery-card";

            card.innerHTML = `
                <img src="${galleryFolder}/${number}.jpg"
                     alt="Project ${number}"
                     data-index="${i}">
            `;

            gallery.appendChild(card);

        }

    }

    // =====================================
// LIGHTBOX
// =====================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const counter = document.getElementById("lightbox-counter");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImage = 1;

function showImage(index){

    if(index < 1){

        index = totalImages;

    }

    if(index > totalImages){

        index = 1;

    }

    currentImage = index;

    let number = String(index).padStart(2,"0");

    lightboxImg.src = `${galleryFolder}/${number}.jpg`;
counter.textContent = `${currentImage} / ${totalImages}`;

}

gallery.addEventListener("click",(e)=>{

    if(e.target.tagName==="IMG"){

        currentImage = Number(e.target.alt.replace("Project ",""));

        showImage(currentImage);

        lightbox.style.display="flex";

    }

});

closeBtn.onclick=()=>{

    lightbox.style.display="none";

};

prevBtn.onclick=()=>{

    showImage(currentImage-1);

};

nextBtn.onclick=()=>{

    showImage(currentImage+1);

};

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowLeft"){

            showImage(currentImage-1);

        }

        if(e.key==="ArrowRight"){

            showImage(currentImage+1);

        }

        if(e.key==="Escape"){

            lightbox.style.display="none";

        }

    }

});

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};
lightbox.onclick = (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

};

// ===========================
// FIN DU DOMContentLoaded
// ===========================

});