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

// Selects for all <a> elements within header and returns a NodeList
const navLinksQuery = document.querySelectorAll('a');
console.log(navLinksQuery);


// Converts navLinksQuery NodeList into an array
const navLinksArray = Array.from(navLinksQuery);
console.log(navLinksArray);

// Adds the 'nav-item-#' class name to each <a> element inside of <header>
let navCounter = 1;
navLinksArray.forEach( element => {
  console.log(element);
  element.className = `nav-item-${navCounter}`;
  navCounter += 1;
});

// Updates the content for each <a> element inside of <header>
const navItem1 = document.querySelector('.nav-item-1');
navItem1.textContent = siteContent.nav["nav-item-1"];
// Updates the color of navigation text to green
navItem1.style.color = "green";

const navItem2 = document.querySelector('.nav-item-2');
navItem2.textContent = siteContent.nav["nav-item-2"];
// Updates the color of navigation text to green
navItem2.style.color = "green";

const navItem3 = document.querySelector('.nav-item-3');
navItem3.textContent = siteContent.nav["nav-item-3"];
// Updates the color of navigation text to green
navItem3.style.color = "green";

const navItem4 = document.querySelector('.nav-item-4');
navItem4.textContent = siteContent.nav["nav-item-4"];
// Updates the color of navigation text to green
navItem4.style.color = "green";

const navItem5 = document.querySelector('.nav-item-5');
navItem5.textContent = siteContent.nav["nav-item-5"];
// Updates the color of navigation text to green
navItem5.style.color = "green"; 

const navItem6 = document.querySelector('.nav-item-6');
navItem6.textContent = siteContent.nav["nav-item-6"];
// Updates the color of navigation text to green
navItem6.style.color = "green";


// Create a new <a> element to be added into header <nav>
// via .appendChild()
const newNode = document.createElement("A");
console.log(newNode);

// Create text for new <a> element
const newNodeText = document.createTextNode("Blog");
console.log(newNodeText);

// Appends 'newNodeText' to 'newNode'
newNode.appendChild(newNodeText);

// Changes color of 'newNodeText' to 'green'
newNode.style.color = "green";

// Adds a class name
newNode.className = "nav-item-7";

// Selects for the <nav> element within <header>
const navQuery = document.querySelector("nav");
console.log(navQuery);

// Appends 'newNode' to end of 'navQuery' <nav> element
navQuery.appendChild(newNode);



// Create a ANOTHER new <a> element to be added into header <nav>
// via .prepend()
const newNode2 = document.createElement("A");
console.log(newNode2);

// Create text for new <a> element
const newNode2Text = document.createTextNode("Mission");
console.log(newNode2Text);

// Appends 'newNodeText' to 'newNode'
newNode2.appendChild(newNode2Text);

// Changes color of 'newNodeText' to 'green'
newNode2.style.color = "green";

// Adds a class name
newNode2.className = "nav-item-0";

// Appends 'newNode' to end of 'navQuery' <nav> element
navQuery.prepend(newNode2);



// Updates the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

// Updates the content of <h1> element inside of .cta-text <div>
const ctaTextH1 = document.querySelector('h1');
ctaTextH1.textContent = siteContent.cta['h1'];

// Updates the img src for the #cta-img
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Updates the content of <button> element inside of .cta-text <div>
const ctaTextButton = document.querySelector('button');
ctaTextButton.textContent = siteContent.cta['button'];

// Selects for all <h4> elements within .main-content <section> and returns a NodeList
const h4Query = document.querySelectorAll('h4');
console.log(h4Query);

// Converts h4Query NodeList into an array
const h4Array = Array.from(h4Query);
console.log(h4Array);

// Adds respective class names from 'siteContent' to each <h4> element in .main-content <section>
h4Array[0].className = "features-h4";
console.log(h4Array[0]);

h4Array[1].className = "about-h4";
console.log(h4Array[1]);

h4Array[2].className = "services-h4";
console.log(h4Array[2]);

h4Array[3].className = "product-h4";
console.log(h4Array[3]);

h4Array[4].className = "vision-h4";
console.log(h4Array[4]);


// Updates the content for each <h4> element in .main-content <section>
// with the appropriate text from siteContent object
document.querySelector('.features-h4').textContent = siteContent["main-content"]["features-h4"];
document.querySelector('.about-h4').textContent = siteContent["main-content"]["about-h4"];
document.querySelector('.services-h4').textContent = siteContent["main-content"]["services-h4"];
document.querySelector('.product-h4').textContent = siteContent["main-content"]["product-h4"];
document.querySelector('.vision-h4').textContent = siteContent["main-content"]["vision-h4"];


// Updates the img src for the .middle-img
const middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Selects for all <p> elements within .main-content <section> and returns a NodeList
const pQuery = document.querySelectorAll('.main-content p');
console.log(pQuery);

// Converts pQuery NodeList into an array
const pArray = Array.from(pQuery);
console.log(pArray);

// Adds respective class names from 'siteContent' to each <p> element in .main-content <section>
pArray[0].className = "features-content";
console.log(pArray[0]);

pArray[1].className = "about-content";
console.log(pArray[1]);

pArray[2].className = "services-content";
console.log(pArray[2]);

pArray[3].className = "product-content";
console.log(pArray[3]);

pArray[4].className = "vision-content";
console.log(pArray[4]);


// Updates the content for each <p> element in .main-content <section>
// with the appropriate text from siteContent object
document.querySelector('.features-content').textContent = siteContent["main-content"]["features-content"];
document.querySelector('.about-content').textContent = siteContent["main-content"]["about-content"];
document.querySelector('.services-content').textContent = siteContent["main-content"]["services-content"];
document.querySelector('.product-content').textContent = siteContent["main-content"]["product-content"];
document.querySelector('.vision-content').textContent = siteContent["main-content"]["vision-content"];


// Selects for the <h4> element within .contact <section>
const contactH4Query = document.querySelector('.contact h4');
console.log(contactH4Query);

// Adds respective class name from 'siteContent' to the <h4> element in .contact <section>
contactH4Query.className = "contact-h4";
console.log(contactH4Query.className);


// Updates the content for the <h4> element in .contact <section>
// with the appropriate text from siteContent object
document.querySelector('.contact-h4').textContent = siteContent.contact["contact-h4"];

// Selects for all the <p> elements within .contact <section>
const contactPQuery = document.querySelectorAll('.contact p');
console.log(contactPQuery);

// Converts contactPQuery NodeList into an array
const contactPArray = Array.from(contactPQuery);
console.log(contactPArray);

// Adds respective class names from 'siteContent' to each <p> element in .contact <section>
contactPArray[0].className = "address";
console.log(contactPArray[0]);

contactPArray[1].className = "phone";
console.log(contactPArray[1]);

contactPArray[2].className = "email";
console.log(contactPArray[2]);

// Updates the content for each <p> element in .contact <section>
// with the appropriate text from siteContent object
document.querySelector('.address').textContent = siteContent["contact"]["address"];
document.querySelector('.phone').textContent = siteContent["contact"]["phone"];
document.querySelector('.email').textContent = siteContent["contact"]["email"];


// Selects for the <p> element within <footer>
const footerPQuery = document.querySelector('footer p');
console.log(footerPQuery);

// Adds respective class name from 'siteContent' to the <p> element in <footer>
footerPQuery.className = "copyright";
console.log(footerPQuery.className);

// Updates the content for the <p> element in <footer>
// with the appropriate text from siteContent object
document.querySelector('.copyright').textContent = siteContent.footer.copyright;







