const button = document.querySelector(".button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    markers: false,
    start: "top center",
    end: "bottom center",
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
});

gsap.from(".box-artiste", {
  scrollTrigger: {
    trigger: ".box-artiste",
    markers: false,
    start: "top center",
    end: "bottom center",
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
});

gsap.from(".box-jour1", {
  scrollTrigger: {
    trigger: ".box-jour1",
    markers: false,
    start: "top center",
    end: "bottom center",
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
});

gsap.from(".box-jour2", {
  scrollTrigger: {
    trigger: ".box-jour2",
    markers: false,
    start: "top center",
    end: "bottom center",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".box-jour3", {
  scrollTrigger: {
    trigger: ".box-jour3",
    markers: false,
    start: "top center",
    end: "bottom center",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});
