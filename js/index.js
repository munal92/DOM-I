const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//change img source

const headerImgSource = document.getElementById('cta-img');
headerImgSource.setAttribute('src',siteContent["cta"][ "img-src"]);
//middle img
const middleImgSource = document.getElementById("middle-img");
middleImgSource.setAttribute('src',siteContent['main-content']['middle-img-src']);

//changing nav bar 

const navbarCont = document.getElementsByTagName('a');
let nav_i = 1;
Array.from(navbarCont).forEach((navItem) => {
        navItem.style.color = 'green';
        navItem.textContent = siteContent["nav"][`nav-item-${nav_i}`];
        nav_i++;
});

// updating header 

//const contentHeader  = document.classSelectorAll("cta-text");
const contentHeader  = document.querySelector(".cta-text");
contentHeader.firstElementChild.textContent= siteContent["cta"]["h1"];
contentHeader.childNodes[3].textContent= siteContent["cta"]["button"];

//contentHeader.childNodes[1].textContent= siteContent["cta"]["h1"];
//contentHeader.childNodes[3].textContent= siteContent["cta"]["h1"];

console.log('a',contentHeader.firstChild);

//main 
contentMainArray = ["features","about","services","product","vision"];
let contentMain  = document.querySelectorAll(".text-content h4");
contentMain.forEach((item,index) => {
  item.textContent = siteContent["main-content"][`${contentMainArray[index]}-h4`];

});

//main content 
let contentMainP  = document.querySelectorAll(".text-content p");
contentMainP.forEach((item,index) => {
  item.textContent = siteContent["main-content"][`${contentMainArray[index]}-content`];

});


//contact section
let contactSecArry = ["address","phone","email"]
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent =  siteContent["contact"]["contact-h4"];
let contactSec = document.querySelectorAll(".contact p");

contactSec.forEach((item,index) =>{
item.textContent = siteContent["contact"][`${contactSecArry[index]}`];


});


let footerSect = document.querySelector('footer p');
footerSect.textContent  = siteContent["footer"]["copyright"];


//add 2 element to the navbar

let newNavElmnt = document.createElement("a");
newNavElmnt.textContent ="Map";
let navb = document.querySelector("nav");
navb.prepend(newNavElmnt);

let newNavElmnt2 = document.createElement("a");
 newNavElmnt2 = document.querySelector("nav a:nth-child(2)");
newNavElmnt2.textContent ="Locations";
header.appendChild(newNavElmnt2);




