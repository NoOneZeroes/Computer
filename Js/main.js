
// header toggle bar resbonsive

let bars = document.querySelector(".bar")
let link = document.querySelector(".links")
// let links = document.querySelectorAll(".links li ")

bars.onclick = function () {
  link.classList.toggle("media")
}

// landing Pc slide

let bulletsUl = document.querySelector(".dots")
let bullets = document.querySelectorAll(".dots li ")
let ndb = document.querySelector(".ndb")
let startB = document.querySelectorAll(".startb")
let stslide = document.querySelector(".slide.st")
let ndslide = document.querySelector(".slide.nd")
let x = document.querySelectorAll(".ndb")
// console.log(startB)

bullets.forEach(li => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".act").forEach(element => {
      element.classList.remove("act")
    });
    e.target.classList.add("act")






    if (e.target.classList.contains("ndb")) {
      // Delete active class from all elements
      document.querySelectorAll(".act").forEach(element => {
        element.classList.remove("act")
      });

      // add active class to the element clicked and what same 
      x.forEach(element => {
        element.classList.add("act")
      });
      // css style
      // stslide.style.cssText = "margin-left: -1850px;"
    }

    else if (e.target.classList.contains("startb")) {
      document.querySelectorAll(".act").forEach(element => {
        element.classList.remove("act")
      });
      startB.forEach(element => {
        element.classList.add("act")
      });

      // stslide.style.cssText = "margin-left: -0px;"
    }
  })
});
console.log(x)

// console.log(stb.classList.contains("stb"))

//     if (e.target.classList.contains("ndb")) {
//
//   stslide.style.cssText = "margin-left: -1750px;"
// } else {

//   e.target.classList.add("act")
// }

// bullets in review

let reviewb = document.querySelectorAll(".reviewb li")

reviewb.forEach(li => {
  li.addEventListener("click", function (ele) {
    ele.target.parentElement.querySelectorAll(".activate").forEach(e => {
      e.classList.remove("activate")
    });
    ele.target.classList.add("activate")
  })
});


// bullets.forEach(li => {
//   li.addEventListener("click", (e) => {
//     e.target.parentElement.querySelectorAll(".act").forEach(element => {
//       element.classList.remove("act")
//     });
//     e.target.classList.add("act")

// loading page
setTimeout(() => {
}, 3000);

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
});

// arrow top

let toop = document.querySelector(".top")
window.onscroll = function () {
  (window.scrollY >= 600) ? toop.classList.add("flex") : toop.classList.remove("flex")
}
toop.addEventListener("click", function top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})