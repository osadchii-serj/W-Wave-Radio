document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open-menu")
  });

  document.getElementById("accordion-btn").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open-accordion")
  });

  document.getElementById("open-btn").addEventListener("click", function(){
    document.querySelector(".header").classList.add("open-search");
  });

  document.getElementById("close-btn").addEventListener("click", function(){
    document.querySelector(".header").classList.remove("open-search");
  });

});


new Accordion('.accordion-container');


