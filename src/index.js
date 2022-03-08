const siteContent = {
    // DO NOT CHANGE THIS OBJECT
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io",
    },
    footer: {
        copyright: "Copyright Great Idea! 2021",
    },
    images: {
        "logo-img": "http://localhost:9000/img/logo.png",
        "cta-img": "http://localhost:9000/img/cta.png",
        "accent-img": "http://localhost:9000/img/accent.png",
    },
};

console.log("project wired!");

//Nav
document.querySelector("#logo-img").src = siteContent.images["logo-img"];
const navLinksArray = Array.from(document.querySelectorAll("nav a"));
navLinksArray[0].innerHTML = siteContent.nav["nav-item-1"];
navLinksArray[1].innerHTML = siteContent.nav["nav-item-2"];
navLinksArray[2].innerHTML = siteContent.nav["nav-item-3"];
navLinksArray[3].innerHTML = siteContent.nav["nav-item-4"];
navLinksArray[4].innerHTML = siteContent.nav["nav-item-5"];
navLinksArray[5].innerHTML = siteContent.nav["nav-item-6"];

navLinksArray.forEach((link) => link.classList.add("italic"));

//Header
document.querySelector(".cta-text h1").innerHTML = siteContent.cta.h1;
document.querySelector(".cta-text button").innerHTML = siteContent.cta.button;
document.querySelector("#cta-img").src = siteContent.images["cta-img"];

//Main Content
const textContentArray = Array.from(
    document.querySelectorAll(".main-content .text-content")
);
textContentArray[0].querySelector("h4").innerHTML =
    siteContent["main-content"]["features-h4"];
textContentArray[0].querySelector("p").innerHTML =
    siteContent["main-content"]["features-content"];
textContentArray[1].querySelector("h4").innerHTML =
    siteContent["main-content"]["about-h4"];
textContentArray[1].querySelector("p").innerHTML =
    siteContent["main-content"]["about-content"];
textContentArray[2].querySelector("h4").innerHTML =
    siteContent["main-content"]["services-h4"];
textContentArray[2].querySelector("p").innerHTML =
    siteContent["main-content"]["services-content"];
textContentArray[3].querySelector("h4").innerHTML =
    siteContent["main-content"]["product-h4"];
textContentArray[3].querySelector("p").innerHTML =
    siteContent["main-content"]["product-content"];
textContentArray[4].querySelector("h4").innerHTML =
    siteContent["main-content"]["vision-h4"];
textContentArray[4].querySelector("p").innerHTML =
    siteContent["main-content"]["vision-content"];
document.querySelector("#middle-img").src = siteContent.images["accent-img"];

//Contact
document.querySelector(".contact h4").innerHTML =
    siteContent.contact["contact-h4"];
const contactTextArray = Array.from(document.querySelectorAll(".contact p"));
contactTextArray[0].innerHTML = siteContent.contact.address;
contactTextArray[1].innerHTML = siteContent.contact.phone;
contactTextArray[2].innerHTML = siteContent.contact.email;

//Footer
document.querySelector("footer a").innerHTML = siteContent.footer.copyright;
document.querySelector("footer a").classList.add("bold");