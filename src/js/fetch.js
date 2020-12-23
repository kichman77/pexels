import { createClient } from "pexels";

const div = document.getElementById("root");
// console.log(div);
const div1 = document.getElementById("main");
console.log(div1);


// const key = "563492ad6f9170000100000139cf7ae6b48641a5a6c5e541ad2b93e2";

let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";

const client = createClient(key);
console.log(client);

// client.photos.random().then((x) => {
//   // console.log(x);
//   const img = document.createElement("img");
//   img.setAttribute("src", x.src.original);
//   img.width = "300";
//   // console.log(img);
//   div.insertAdjacentElement("afterbegin", img);
// });

// const query = "Nature";
// client.photos.search({ query, per_page: 15 }).then((y) => {
//   // console.log(y.photos);
//  const images = y.photos.map((elem)=>{
//     console.log(elem);
//     const img = document.createElement("img")
//     img.src = elem.src.original
//     img.width = '300'
//     return img
//   })
//   console.log(images);
//   div1.append(...images)
// });
