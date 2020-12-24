import css from "./style.css";
// import "./js/fetch.js";
import fetchObject from "./js/fetchObject.js";
import refs from "./js/refs.js";

const {
  divMain,
  loadBtn,
  searchForm,
  incrementBtn,
  decrementBtn,
  counterSpan,
} = refs;

counterSpan.textContent = fetchObject.perPage;
fetchObject.incrementCount(incrementBtn, counterSpan);
fetchObject.decrementCount(decrementBtn, counterSpan);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.dir(event.target.elements.query.value);
  let inputValue = event.target.elements.query.value;
  console.log(inputValue);

  fetchObject.resetPage();
  divMain.innerHTML = "";

  fetchObject.getFetch(inputValue, divMain);
  loadBtn.addEventListener("click", () => {
    fetchObject.setPage();
    fetchObject.getFetch(inputValue, divMain);
  });
});
