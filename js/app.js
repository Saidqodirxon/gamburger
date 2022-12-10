// umumiy Selectorlar start
let masalliqlar = document.querySelector(".masalliqlar");
let form = document.querySelector("form");
let tugmalar = document.querySelector(".tugmalar");
// umumiy Selectorlar End

// tugmalar start
let cheeseBtn = document.querySelector("#btn-cheese");
let meatBtn = document.querySelector("#btn-meat");
let onionBtn = document.querySelector("#btn-onion");
let saladBtn = document.querySelector("#btn-salad");
let tomatoBtn = document.querySelector("#btn-tomato");
let pickleBtn = document.querySelector("#btn-pickle");
// tugmalar End

// Umumiy narx tugma start
let totalNarx = document.querySelector("#totalnarx");
totalNarx = 2;
document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
// Umumiy narx tugma End

// cheese Start

let cheeseDiv = document.querySelector(".cheeseDiv");
cheeseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let cheese = `<div class="cheese">
  <img src="./images/cheese.svg" alt="" />
</div>`;

  cheeseDiv.innerHTML += cheese;

  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});

cheeseDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  //   Narx sozlamasi start
  totalNarx -= 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});
// cheese End

// meat Start

let meatDiv = document.querySelector(".meatDiv");
meatBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let meat = `<div class="meat">
  <img src="./images/meat.svg" alt="" />
</div>`;

  meatDiv.innerHTML += meat;

  //   Narx sozlamasi start
  totalNarx += 5;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});

meatDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  //   Narx sozlamasi start
  totalNarx -= 5;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});
// meat End

// onion Start

let onionDiv = document.querySelector(".onionDiv");
onionBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let onion = `<div class="onion">
  <img src="./images/onion.svg" alt="" />
</div>`;

  onionDiv.innerHTML += onion;

  //   Narx sozlamasi start
  totalNarx += 1;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});

onionDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();
  //   Narx sozlamasi start
  totalNarx -= 1;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});
// onion End

// salad Start

let saladDiv = document.querySelector(".saladDiv");
saladBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let salad = `<div class="salad">
  <img src="./images/salad.svg" alt="" />
</div>`;

  saladDiv.innerHTML += salad;
  //   Narx sozlamasi start
  totalNarx += 1;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});

saladDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();
  //   Narx sozlamasi start
  totalNarx -= 1;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});
// salad End

// tomato Start

let tomatoDiv = document.querySelector(".tomatoDiv");
tomatoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let tomato = `<div class="tomato">
  <img src="./images/tomato.svg" alt="" />
</div>`;

  tomatoDiv.innerHTML += tomato;

  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});

tomatoDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  //   Narx sozlamasi start
  totalNarx -= 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});
// tomato End

// pickle Start
let pickleDiv = document.querySelector(".pickleDiv");
pickleBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let pickle = `<div class="pickle">
  <img src="./images/pickle.svg" alt="" />
</div>`;

  pickleDiv.innerHTML += pickle;

  //   Narx sozlamasi start
  totalNarx += 3;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});

pickleDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();
  //   Narx sozlamasi start
  totalNarx -= 3;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
});
// pickle End

// qayta kiritish start

let qayta = document.querySelector("#qayta");
masalliqlar.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();
});

// qayta kiritish End

// buyurtma holati tugmasi start

let buyurtmaVaqti = document.querySelector("#buyurtmaVaqti");

let buyurtma = document.querySelector("#buyurtma");
buyurtma.addEventListener("click", (e) => {
  e.preventDefault();
  let number = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
  console.log(number);

  document.querySelector(
    "#buyurtmaVaqti"
  ).textContent = `Siz buyurtmangiz ${number} kundan song tayyor boladi `;
});

// buyurtma holati tugmasi End
