document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open-menu")
  });

});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("open-btn").addEventListener("click", function () {
    document.querySelector(".header").classList.add("open-search");
  });

  document.getElementById("close-btn").addEventListener("click", function () {
    document.querySelector(".header").classList.remove("open-search");
  });

});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("log-in").addEventListener("click", function () {
    document.querySelector(".header").classList.add("open-registration-form");
  });

  document.getElementById("registration-close").addEventListener("click", function () {
    document.querySelector(".header").classList.remove("open-registration-form");
  });

});


const accordion = new Accordion('.accordion-container', {
  duration: 500,
});

let validation = new JustValidate(".registration-form")
validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите имя",
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа",
  },
  {
    rule: 'customRegexp',
    value: /[a-zA-Zа-яА-Я]+/g,
    errorMessage: "Только буквы",
  },
]);
validation.addField("#password", [
  {
    rule: "required",
    errorMessage: "Введите пароль",
  },
  {
    rule: "minLength",
    value: 8,
    errorMessage: "Минимум 8 символов",
  },
]);

