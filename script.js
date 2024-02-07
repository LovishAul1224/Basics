
function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var clutter = "";

document.querySelector("#page2 h1").textContent.split("").forEach(function(dets){
  clutter+= `<span>${dets}</span>`
  document.querySelector("#page2 h1").innerHTML = clutter;
})



gsap.to("#page2 h1 span",{
  ScrollTrigger:{
    trigger:`#page2 h1 span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.2,
    markers:true,
  },
  stagger:0.5,
  color:`#ffff`
})



const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data =
  `
    ./frames00001.png
    ./frames00002.png
    ./frames00003.png
    ./frames00004.png
    ./frames00005.png
    ./frames00006.png
    ./frames00007.png
    ./frames00008.png
    ./frames00009.png
    ./frames00010.png
    ./frames00011.png
    ./frames00012.png
    ./frames00013.png
    ./frames00014.png
    ./frames00015.png
    ./frames00016.png
    ./frames00017.png
    ./frames00018.png
    ./frames00019.png
    ./frames00020.png
    ./frames00021.png
    ./frames00022.png
    ./frames00023.png
    ./frames00024.png
    ./frames00025.png
    ./frames00026.png
    ./frames00027.png
    ./frames00028.png
    ./frames00029.png
    ./frames00030.png
    ./frames00031.png
    ./frames00032.png
    ./frames00033.png
    ./frames00034.png
    ./frames00035.png
    ./frames00036.png
    ./frames00037.png
    ./frames00038.png
    ./frames00039.png
    ./frames00040.png
    ./frames00041.png
    ./frames00042.png
    ./frames00043.png
    ./frames00044.png
    ./frames00045.png
    ./frames00046.png
    ./frames00047.png
    ./frames00048.png
    ./frames00049.png
    ./frames00050.png
    ./frames00051.png
    ./frames00052.png
    ./frames00053.png
    ./frames00054.png
    ./frames00055.png
    ./frames00056.png
    ./frames00057.png
    ./frames00058.png
    ./frames00059.png
    ./frames00060.png
    ./frames00061.png
    ./frames00062.png
    ./frames00063.png
    ./frames00064.png
    ./frames00065.png
    ./frames00066.png
    ./frames00067.png // doubts
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 67,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "// object you want to pin it.",
  pin: true,
  markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});

// document.addEventListener("DOMContentLoaded", function () {
//   function loco() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       },
//       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
//   }

//   loco();

//   var clutter = "";

//   document.querySelector("#page2 h1").textContent.split("").forEach(function (dets) {
//     clutter += `<span>${dets}</span>`
//     document.querySelector("#page2 h1").innerHTML = clutter;
//   });

//   gsap.to("#page2 h1 span", {
//     scrollTrigger: {
//       trigger: `#page2 h1 span`,
//       start: `top bottom`,
//       end: `bottom top`,
//       scroller: `#main`,
//       scrub: .2,
//       markers: true
//     },
//     stagger: 0.5,
//     color: `#ffff`
//   });

//   const canvas = document.querySelector("canvas");
//   const context = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });

//   const frameCount = 300;
//   const images = [];
//   const imageSeq = { frame: 67 };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
//   }

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: 0.15,
//       trigger: `#page3 canvas`,
//       start: `top top`,
//       end: `600% top`,
//       scroller: `#main`
//     },
//     onUpdate: render
//   });

//   images[1].onload = render;

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
// });

// function files(index) {
//   var data =
//     `
//       ./frames00001.png
//       ./frames00002.png
//       ./frames00003.png
//       ./frames00004.png
//       ./frames00005.png
//       ./frames00006.png
//       ./frames00007.png
//       ./frames00008.png
//       ./frames00009.png
//       ./frames00010.png
//       ./frames00011.png
//       ./frames00012.png
//       ./frames00013.png
//       ./frames00014.png
//       ./frames00015.png
//       ./frames00016.png
//       ./frames00017.png
//       ./frames00018.png
//       ./frames00019.png
//       ./frames00020.png
//       ./frames00021.png
//       ./frames00022.png
//       ./frames00023.png
//       ./frames00024.png
//       ./frames00025.png
//       ./frames00026.png
//       ./frames00027.png
//       ./frames00028.png
//       ./frames00029.png
//       ./frames00030.png
//       ./frames00031.png
//       ./frames00032.png
//       ./frames00033.png
//       ./frames00034.png
//       ./frames00035.png
//       ./frames00036.png
//       ./frames00037.png
//       ./frames00038.png
//       ./frames00039.png
//       ./frames00040.png
//       ./frames00041.png
//       ./frames00042.png
//       ./frames00043.png
//       ./frames00044.png
//       ./frames00045.png
//       ./frames00046.png
//       ./frames00047.png
//       ./frames00048.png
//       ./frames00049.png
//       ./frames00050.png
//       ./frames00051.png
//       ./frames00052.png
//       ./frames00053.png
//       ./frames00054.png
//       ./frames00055.png
//       ./frames00056.png
//       ./frames00057.png
//       ./frames00058.png
//       ./frames00059.png
//       ./frames00060.png
//       ./frames00061.png
//       ./frames00062.png
//       ./frames00063.png
//       ./frames00064.png
//       ./frames00065.png
//       ./frames00066.png
//       ./frames00067.png
//    `;
//   return data.split("\n")[index];
// }
