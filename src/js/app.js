let about = document.querySelector(".about");
let work = document.querySelector(".work");
let contact = document.querySelector(".contact");
let morebtn = document.querySelector(".more");
// let workrow = document.querySelectorAll(".work .row > div:nth-last-child(n+7)")

// morebtn.addEventListener("click",()=>{
//   for (let i =0; i < workrow.length; i++){
//     workrow[i].style.display = "block"
//   }
// })

window.addEventListener("scroll", () => {
  const sectionabout = about.getBoundingClientRect();
  const sectionwork = work.getBoundingClientRect();
  const sectioncontact = contact.getBoundingClientRect();
  if (sectionabout.top <= window.innerHeight && sectionabout.bottom >= 0){
    about.classList.add("active")
  }
  if (sectionwork.top <= window.innerHeight && sectionwork.bottom >= 0){
    work.classList.add("active")
  }
  if (sectioncontact.top <= window.innerHeight && sectioncontact.bottom >= 0){
    contact.classList.add("active")
  }
  
});

window.onscroll = () => {
  console.log(clientHeight);
};
window.addEventListener("load", () => {
  let reload = document.querySelector(".preloader");
  setTimeout(() => {
    reload.style.display = "none";
  }, 2500);
});
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
