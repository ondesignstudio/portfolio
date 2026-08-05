/*==================================================
LANGUAGE.JS
PARTIE 1
LANGUAGES
==================================================*/

const translations = {

    en:{

        home:"Home",
        about:"About",
        portfolio:"Portfolio",
        contact:"Contact",

        heroJob:"Senior Graphic Designer",

        heroTitle1:"Design That Builds",

        heroTitle2:"Powerful Brands",

        heroText:"More than 16 years of experience creating commercial facades, branding, packaging, retail spaces, 3D visualization and premium print solutions.",

        explore:"Explore Portfolio",

        contactBtn:"Contact Me"

    },

    fr:{

        home:"Accueil",
        about:"À propos",
        portfolio:"Portfolio",
        contact:"Contact",

        heroJob:"Graphiste Senior",

        heroTitle1:"Des designs qui créent",

        heroTitle2:"des marques puissantes",

        heroText:"Plus de 16 ans d'expérience dans la création de façades commerciales, identités visuelles, packagings, espaces commerciaux, visualisations 3D et solutions d'impression haut de gamme.",

        explore:"Voir le Portfolio",

        contactBtn:"Me Contacter"

    },

    ar:{

        home:"الرئيسية",

        about:"من أنا",

        portfolio:"معرض الأعمال",

        contact:"اتصل بي",

        heroJob:"مصمم جرافيك محترف",

        heroTitle1:"تصاميم تبني",

        heroTitle2:"علامات تجارية قوية",

        heroText:"أكثر من 16 سنة من الخبرة في تصميم الهويات البصرية، الواجهات التجارية، التغليف، التصميم ثلاثي الأبعاد والحلول الطباعية الاحترافية.",

        explore:"استعرض الأعمال",

        contactBtn:"تواصل معي"

    }

};
/*==================================================
LANGUAGE.JS
PARTIE 2
CHANGE LANGUAGE
==================================================*/

function changeLanguage(lang){

    const t = translations[lang];

    // Navigation

    document.querySelector('[href="#home"]').textContent = t.home;

    document.querySelector('[href="#about"]').textContent = t.about;

    document.querySelector('[href="#categories"]').textContent = t.portfolio;

    document.querySelector('[href="#contact"]').textContent = t.contact;

    // Hero

    document.querySelector(".hero h4").textContent = t.heroJob;

    document.querySelector(".hero h1").childNodes[0].textContent = t.heroTitle1 + " ";

    document.querySelector(".hero h1 span").textContent = t.heroTitle2;

    document.querySelector(".hero p").textContent = t.heroText;

    // Buttons

    document.querySelector(".btn").textContent = t.explore;

    document.querySelector(".btn2").textContent = t.contactBtn;

    // RTL pour l'arabe

    if(lang==="ar"){

        document.documentElement.dir="rtl";

        document.documentElement.lang="ar";

    }else{

        document.documentElement.dir="ltr";

        document.documentElement.lang=lang;

    }

}
/*==================================================
LANGUAGE.JS
PARTIE 3
EVENTS + SAVE LANGUAGE
==================================================*/

// Boutons des langues

const langButtons = document.querySelectorAll(".language-switcher a");

langButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        const lang=this.textContent.toLowerCase();

        changeLanguage(lang);

        localStorage.setItem("language",lang);

        langButtons.forEach(btn=>btn.classList.remove("active"));

        this.classList.add("active");

    });

});

// Chargement automatique

window.addEventListener("load",()=>{

    const savedLanguage=localStorage.getItem("language") || "en";

    changeLanguage(savedLanguage);

    langButtons.forEach(btn=>{

        btn.classList.remove("active");

        if(btn.textContent.toLowerCase()===savedLanguage){

            btn.classList.add("active");

        }

    });

});
/*==================================================
LANGUAGE.JS
PARTIE 4
SAFE TRANSLATION
==================================================*/

function setText(selector,text){

    const element=document.querySelector(selector);

    if(element){

        element.textContent=text;

    }

}

function setHeroTitle(text1,text2){

    const hero=document.querySelector(".hero h1");

    if(hero){

        hero.childNodes[0].textContent=text1+" ";

        const span=hero.querySelector("span");

        if(span){

            span.textContent=text2;

        }

    }

}

// Remplace l'ancienne fonction changeLanguage()

function changeLanguage(lang){

    const t=translations[lang];

    // Navigation

    setText('[href="#home"]',t.home);

    setText('[href="#about"]',t.about);

    setText('[href="#categories"]',t.portfolio);

    setText('[href="#contact"]',t.contact);

    // Hero (uniquement sur index.html)

    setText(".hero h4",t.heroJob);

    setHeroTitle(t.heroTitle1,t.heroTitle2);

    setText(".hero p",t.heroText);

    setText(".btn",t.explore);

    setText(".btn2",t.contactBtn);

    // Direction

    if(lang==="ar"){

        document.documentElement.lang="ar";

        document.documentElement.dir="rtl";

    }else{

        document.documentElement.lang=lang;

        document.documentElement.dir="ltr";

    }

}