// let header = document.querySelector("header");
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("shadow", window.scrollY > 0);
// });

// menu.onclick = () => {
//   navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

// // Dark Mode / light mode
// let darkmode = document.querySelector("#darkmode");

// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
  
// };


let menu = document.querySelector("#menu-icon");  //code selects an element with the id "menu-icon" using the document.querySelector() method and assigns it to the variable menu
let navbar = document.querySelector(".navbar");


menu.onclick = () => {       // mobile mode me menu icon ko toggle(change for active to default) karne ke liye 
  navbar.classList.toggle("active");
};

window.onscroll = () => {      // used to hide or close the navigation menu when the user scrolls the page(in mobile mode)
  navbar.classList.remove("active");
};

// Enable dark mode by default
// document.body.classList.add("active");
// darkmode.classList.replace("bx-moon", "bx-sun");

let darkmode = document.querySelector("#darkmode");   

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {         //it returns true or false ie. it contain bx-moon or not 
    darkmode.classList.replace("bx-moon", "bx-sun");  //If the darkmode element has the class "bx-moon," this line replaces it with "bx-sun."
    document.body.classList.add("active");            // change the style of background and color  with css for dark mode 
  } 
  else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
