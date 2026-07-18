// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");



if(navLinks.classList.contains("active")){

menuBtn.innerHTML="?";

}

else{

menuBtn.innerHTML="?";

}


});






// Close menu after clicking link


document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


menuBtn.innerHTML="?";


});


});









// ===============================
// TYPING EFFECT
// ===============================


const heading =
document.querySelector(".hero-text h2");


const text =
"Frontend Developer";


let i=0;



function typing(){


if(i < text.length){


heading.innerHTML += text.charAt(i);


i++;


setTimeout(typing,120);


}



}


typing();











// ===============================
// SCROLL ANIMATION
// ===============================


const elements =
document.querySelectorAll(
".section,.hero-text,.hero-card"
);



elements.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(50px)";

el.style.transition=
"0.8s";


});





window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});






// ===============================
// PROJECT 3D EFFECT
// ===============================


const cards =
document.querySelectorAll(".project-card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let x =
e.offsetX-card.offsetWidth/2;


let y =
e.offsetY-card.offsetHeight/2;



card.style.transform=
`
perspective(500px)
rotateX(${-y/20}deg)
rotateY(${x/20}deg)
`;



});





card.addEventListener("mouseleave",()=>{


card.style.transform=
"translateY(0)";


});



});









// ===============================
// CURSOR GLOW
// ===============================


const cursor =
document.createElement("div");


cursor.className=
"cursor-glow";


document.body.appendChild(cursor);



document.addEventListener("mousemove",(e)=>{


cursor.style.left=
e.clientX+"px";


cursor.style.top=
e.clientY+"px";


});
