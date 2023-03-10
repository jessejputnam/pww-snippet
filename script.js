"use strict";

// Hamburger
const burger_container = document.querySelector(".burger-container");
const bar_top = document.querySelector("#bar-top");
const bar_mid = document.querySelector("#bar-mid");
const bar_low = document.querySelector("#bar-low");
const burger_title_menu = document.querySelector("#burger-title-menu");

// Drop Menu
const drop_menu = document.querySelector("#menu");

// Drop Search
const drop_search_btn = document.querySelector(".btn-header-search");
const drop_search = document.querySelector("#header-search-container");
const drop_search_input = document.querySelector("#searchTermHeader");

// ################################

burger_container.addEventListener("click", () => {
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

drop_search_btn.addEventListener("click", () => {
  if (drop_search.classList.contains("open")) {
    drop_search_input.value = "";

    drop_search.classList.remove("open");
    drop_search_btn.classList.remove("open");
  } else {
    drop_search.classList.add("open");
    drop_search_btn.classList.add("open");
  }
});
