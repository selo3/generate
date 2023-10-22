document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});








const button =document.querySelector('.button1')
const logo =document.querySelector('.logo')
const changecolor = () =>{
  document.querySelector('.wrapper').style.background = logo.style.color = button.style.background =
  cercle1.style.background = rgb();
}
button.addEventListener("click" , changecolor);
const chanecolor = () =>{
  document.body.style.color =
  cercle2.style.background = rgb();
  
}
button.addEventListener("click" , chanecolor);
const qouteText = document.querySelector(".qoute"),qouteBtn = document.querySelector(".button1");
function randomQoute(){
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    
    console.log(result);
    qouteText.innerText = result.content ;
  })
}
qouteBtn.addEventListener("click" , randomQoute)
let btttn =document.querySelector(".button1");
function letme(){
  document.body.style.background = 
  cercle3.style.background = rgb();

  
}
btttn.addEventListener("click" , letme);
function rgb(){
  let r =Math.floor(Math.random()*255+1);
  let g =Math.floor(Math.random()*255+1);
  let b =Math.floor(Math.random()*255+1);
  return  `rgb( ${r}, ${g},${b}) `
}

const cercle1=document.querySelector('.c1');
const cercle2=document.querySelector('.c2');
const cercle3=document.querySelector('.c3');

















