const navslides = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");


        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
            }
        });

        burger.classList.toggle("toggle");
    });

    
}
navslides();
    

const typedTextSpan = document.querySelector(".text-type");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["ios developer", "web developer", "designer"]
const typing = 100;
const erasing = 50;
const newText = 2000;
let textArrayindex = 0;
let charindex = 0;

function type() {
    if (charindex < textArray[textArrayindex].length){
        if(!cursorSpan.classList.contains("typeing")) cursorSpan.classList.add("typeing");
        typedTextSpan.textContent += textArray[textArrayindex].charAt(charindex);
        charindex++;
        setTimeout(type, typing);
    }
    else {
        cursorSpan.classList.remove("typeing");
        setTimeout(erase, newText);
    }
}

function erase() {
    if (charindex > 0){
        if(!cursorSpan.classList.contains("typeing")) cursorSpan.classList.add("typeing");
        typedTextSpan.textContent = textArray[textArrayindex].substring(0, charindex-1);
        charindex--;
        setTimeout(erase, erasing);
    }
    else{
        cursorSpan.classList.remove("typeing");
        textArrayindex++
        if(textArrayindex>=textArray.length) textArrayindex = 0;
        setTimeout(type, typing + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newText + 250);
});

