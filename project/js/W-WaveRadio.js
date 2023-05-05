document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open-menu")
  });

  document.getElementById("accordion-btn").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open-accordion")
  });

});


new Accordion('.accordion-container');


