"use strict";

//

const burger_container = document.querySelector(".burger-container");
const menu_btn = document.querySelector("#burger");
const bar_top = document.querySelector("#bar-top");
const bar_mid = document.querySelector("#bar-mid");
const bar_low = document.querySelector("#bar-low");
const burger_title_menu = document.querySelector("#burger-title-menu");

const drop_menu = document.querySelector("#menu");

burger_container.addEventListener("click", (e) => {
  if (drop_menu.classList.contains("open")) {
    drop_menu.classList.remove("open");
    burger_title_menu.textContent = "MENU";
    burger_title_menu.classList.remove("open");
    burger_container.classList.remove("open");

    bar_top.classList.remove("open");
    bar_mid.classList.remove("open");
    bar_low.classList.remove("open");
  } else {
    drop_menu.classList.add("open");
    burger_title_menu.textContent = "CLOSE";
    burger_title_menu.classList.add("open");
    burger_container.classList.add("open");

    bar_top.classList.add("open");
    bar_mid.classList.add("open");
    bar_low.classList.add("open");
  }
});
