document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("header-menu-320").addEventListener("click", function(){
    document.querySelector(".header__broadcast-menu-320").classList.toggle("open-header-menu-320")
  });
});

// document.addEventListener("DOMContentLoaded", function(){
//   document.getElementById("header-search-btn").addEventListener("click", function(){
//     document.querySelector(".header").classList.toggle("open-search")
//   });
// });


new Accordion('.accordion-container');
