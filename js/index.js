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

//Nav
let navItems = document.getElementsByTagName('a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

//cta
document.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"];
document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"];
document.getElementById("cta-img").src = siteContent["cta"]["img-src"];

//main content
const headersAndContent = document.querySelectorAll('.text-content *');

let iter = 0;
for (key in siteContent["main-content"]) {
  if (iter < 4) {
    headersAndContent[iter].textContent = siteContent["main-content"][key];
    iter++;
  } else if (iter === 4) {
    iter++;
  } else {
    headersAndContent[iter - 1].textContent = siteContent["main-content"][key];
    iter++;
  }
}

document.getElementById("middle-img").src = siteContent['main-content']["middle-img-src"];

//contact section
const contactChildren = document.querySelectorAll('.contact *');

iter = 0;
for (key in siteContent["contact"]) {
  contactChildren[iter].textContent = siteContent["contact"][key];
  iter++
}

//footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];