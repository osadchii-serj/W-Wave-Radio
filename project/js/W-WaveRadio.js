document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open-menu")
  });
});

// document.addEventListener("DOMContentLoaded", function(){
//   document.getElementById("header-search-btn").addEventListener("click", function(){
//     document.querySelector(".header").classList.toggle("open-search")
//   });
// });


new Accordion('.accordion-container');
