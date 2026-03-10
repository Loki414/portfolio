// typing animation

const text="Web Developer | PHP | JavaScript";
let i=0;

function typing(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


// cursor glow

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});


// scroll reveal

function reveal(){

document.querySelectorAll(".reveal").forEach(el=>{

const windowHeight=window.innerHeight;

if(el.getBoundingClientRect().top<windowHeight-100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);


// particles

particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

move:{speed:2},

line_linked:{enable:true}

}

});