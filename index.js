 const h3 = document.querySelector("#navHeading");
 const result = document.querySelector("#contentContainer");

h3.addEventListener("mouseover", () => {
   result.style.visibility = "visible";
 });

 h3.addEventListener("mouseout", () => {
  result.style.visibility = "hidden";
});

 // dynamic date
// // const date = new Date().getFullYear();

// // const d = document.querySelector("#date");