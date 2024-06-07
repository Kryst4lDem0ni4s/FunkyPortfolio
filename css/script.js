const numSteps = 20.0; // Not used anymore

let increasingOpacity = "1";
let decreasingOpacity = "0";

// Set things up
window.addEventListener(
  "load",
  (event) => {
    const b1Element = document.querySelector("#b1");
    const b2Element = document.querySelector("#b2");
    const b3Element = document.querySelector("#b3"); 
    const b4Element = document.querySelector("#b4");
    const b5Element = document.querySelector("#b5");
    const b6Element = document.querySelector("#b6");
    const b7Element = document.querySelector("#b7");
    const b8Element = document.querySelector("#b8");
    const b9Element = document.querySelector("#b9");
    const b10Element = document.querySelector("#b10");
    const b11Element = document.querySelector("#b11");
    const b12Element = document.querySelector("#b12");
    const b13Element = document.querySelector("#b13");
    const b14Element = document.querySelector("#b14");
    const b15Element = document.querySelector("#b15");


    createObserver(b1Element);
    createObserver(b2Element);
    createObserver(b3Element);    
    createObserver(b4Element);
    createObserver(b5Element);
    createObserver(b6Element);
    createObserver(b7Element);
    createObserver(b8Element);
    createObserver(b9Element);
    createObserver(b10Element);
    createObserver(b11Element);
    createObserver(b11Element);
    createObserver(b12Element);
    createObserver(b13Element);
    createObserver(b14Element);
    createObserver(b15Element);
  },
  false
);

function createObserver(element) {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1, // Single threshold for full visibility
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(element);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.isIntersecting ? increasingOpacity : decreasingOpacity;
  });
}
