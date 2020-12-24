import css from "./style.css";
// import "./js/fetch.js";
import fetchObject from "./js/fetchObject.js";
import refs from "./js/refs.js";

const { divMain, searchBtn, loadBtn, searchForm } = refs;
console.log(divMain, searchBtn, loadBtn, searchForm);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.dir(event.target.elements.query.value);
  let inputValue = event.target.elements.query.value;
  console.log(inputValue);
  fetchObject.getFetch(inputValue, divMain);
});
