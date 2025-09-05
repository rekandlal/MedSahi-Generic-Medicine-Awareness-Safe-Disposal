// for header

window.addEventListener("scroll", function () {
  const header = document.querySelector("header"); 
  const shad = document.querySelector("#header1"); 

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    shad.classList.add("shadow");
  } else {
    header.classList.remove("scrolled");
    shad.classList.remove("shadow");
  }
});
