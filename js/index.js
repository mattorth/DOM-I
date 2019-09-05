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

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";

const middleImg = document.querySelector('#middle-img');
middleImg.src = "img/mid-page-accent.jpg";

const navItems = document.querySelectorAll('nav a');

for (i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i+1}`];
};



const ctaTextH1 = document.querySelector('.cta .cta-text h1');
ctaTextH1.textContent = siteContent.cta.h1;

const ctaTextButton = document.querySelector('.cta .cta-text button');
ctaTextButton.textContent = siteContent.cta.button;

const mainContentHeadings = document.getElementsByTagName('h4');
const mainContentText = document.getElementsByClassName('.text-content');

mainContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];

mainContentHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContentP = document.getElementsByTagName('p');

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;

navItems.forEach((element) => {
  element.style.color = "green";
});

const home = document.createElement('a');
home.textContent = "Home";
home.style.color = "green";

const moreFeatures = document.createElement('a');
moreFeatures.textContent = "More Features";
moreFeatures.style.color = "green";

const nav = document.querySelector('header nav');
nav.prepend(home);
nav.append(moreFeatures);

