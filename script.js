
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function(elem) {
    let Parent = document.createElement("span");
    let Child = document.createElement("span");

    Parent.classList.add("parent");
    Child.classList.add("child");

    Child.innerHTML = elem.innerHTML;
    elem.innerHTML = "";
    Parent.appendChild(Child);
    elem.appendChild(Parent);
  });
}

function timelapse(){
  var tl = gsap.timeline();

// 1. Animate text (unchanged)
tl.from(".child span", { x: 130, duration: 1, stagger: 0.2 });

// 2. Text slides up (unchanged)
tl.to(".parent .child", { y: "-100%", duration: 1 });

// 3. BLACK LOADER COLLAPSES + GREEN SCREEN RISES (SIMULTANEOUSLY)
tl.to(".loader", { 
  height: 0, 
  duration:0.5,  // Faster collapse
  ease:"power1.inOut"
});
tl.to(".green",{
  height:"100%",
  top:0,
  duration:1,
  delay:-1,
  ease:"power1.inOut"
});
tl.to(".green",{
  height:"0%",
  duration:1,
  delay:-.3,
  ease:"power1.inOut"
});
tl.to(".home", {
  zIndex: 10,
  duration: 0.1
});
tl.from(".row1 h1, .row2 h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0 // same as your CSS delay
});
}

// function locoInitialize(){
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
// }
// function cardShow(){
//   document.querySelectorAll(".cont")
//   forEach(function(cont){
//     cont.addEventListner("mousemove", function)
//   })
//   }
revealToSpan();
timelapse();
// locoInitialize();

















