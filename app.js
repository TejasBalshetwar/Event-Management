const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("open");
  console.log("click");
});

document.addEventListener("mouseup", (e) => {
  if (!navbar.contains(e.target) && navbar.classList.contains("open")) {
    navbar.classList.toggle("open");
  }
  if (!modal.contains(e.target)&& modal.classList.contains("open")) {
    modal.classList.remove("open");
  }
});
const cta = document.querySelector(".cta .btn");
const modal = document.querySelector(".modal");
const submit = document.querySelector(".submit");

cta.addEventListener("click", () => {
  modal.classList.toggle("open");
});

submit.addEventListener("click", () => {
  modal.classList.remove("open");
});

const tl = gsap.timeline({defaults:{ease:'back'}});

tl.from('.navbar',{
    opacity:0,
    y:"-50%"
    // duration:0.7,
}).from('.hero',{
    opacity:0,
    duration:1
}).from('.hero .heading',{
    duration:0.5,
    y:"-100%"
},'-=1').from('.hero p',{
    x:"-500%",
    duration:1.6
},'-=1').from('.hero a',{
    opacity:0,
    y:"100%"
},'-=0.6');

const scroll_about = gsap.timeline({
    scrollTrigger:{
        trigger:'.about',
        start:'100px bottom',
        end:'+=300px +=500px'
}})

scroll_about.from('.about .right',{
    x:'100%',
    opacity:0,
    duration:0.6,
    stagger:0.2 
}).from('.about .left',{
    x:'-100%',
    opacity:0,
    duration:0.6
},'-=0.6');

const scroll_events = gsap.timeline({
    scrollTrigger:{
        trigger:'.events',
        start:'100px bottom',
        end:'+=300px +=500px',
        ease:"power4"
}});

scroll_events.from('.events .heading',{
    opacity:0,
    x:'-100%',
    duration:1,
},'-=2').from('.events .cards .card',{
    opacity:0,
    y:'100%',
    duration:0.2,
    stagger:0.3
},'-=1')

