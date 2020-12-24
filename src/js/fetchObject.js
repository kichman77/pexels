import { createClient } from "pexels";

export default {
  _query: "",
  page: 1,
  per_page: 2,
  get query() {
    return this._query;
  },
  set query(value) {
    return (this._query = value);
  },
  get perPage() {
    return this.per_page;
  },
  set perPage(value) {
    return (this.per_page = value);
  },
  getFetch(value, div) {
    this.query = value;
    let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
    const client = createClient(key);

    client.photos
      .search({ query: this._query, per_page: this.per_page, page: this.page })
      .then((response) => {
        return response;
      })
      .then((result) => {
        console.log(result);
        this.showPhotos(result.photos, div);
      });
  },
  showPhotos(array, place) {
    const images = array.map((elem) => {
      const img = document.createElement("img");
      img.src = elem.src.original;
      img.width = "300";
      return img;
    });
    place.append(...images);
  },
  resetPage() {
    return (this.page = 1);
  },
  setPage() {
    return (this.page += 1);
  },
  incrementCount(button, span) {
    button.addEventListener("click", () => {
      if (this.per_page < 80) {
        this.per_page += 1;
        span.textContent = this.per_page;
      }
    });
  },
  decrementCount(button, span) {
    button.addEventListener("click", () => {
      if (this.per_page > 2) {
        this.per_page -= 1;
        span.textContent = this.per_page;
      }
    });
  },
};
