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

cheeseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cheese = document.createElement("div");
  cheese.innerHTML = `<img src="./images/cheese.svg" alt="" />`;

  masalliqlar.prepend(cheese);
  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End

  cheese.addEventListener("click", (e) => {
    cheese.innerHTML = "";
    masalliqlar.removeChild(cheese);
    //   Narx sozlamasi start
    totalNarx -= 2;
    document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
    //   Narx sozlamasi End
  });
});
// cheese End

// pickle Start

pickleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const pickle = document.createElement("div");
  pickle.innerHTML = `<img src="./images/pickle.svg" alt="" />`;

  masalliqlar.prepend(pickle);
  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End

  pickle.addEventListener("click", (e) => {
    pickle.innerHTML = "";
    masalliqlar.removeChild(pickle);
    //   Narx sozlamasi start
    totalNarx -= 2;
    document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
    //   Narx sozlamasi End
  });
});
// pickle End

// tomato Start

tomatoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const tomato = document.createElement("div");
  tomato.innerHTML = `<img src="./images/tomato.svg" alt="" />`;

  masalliqlar.prepend(tomato);
  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End

  tomato.addEventListener("click", (e) => {
    tomato.innerHTML = " ";
    masalliqlar.removeChild(tomato);
    //   Narx sozlamasi start
    totalNarx -= 2;
    document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
    //   Narx sozlamasi End
  });
});
// tomato End

// onion Start

onionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const onion = document.createElement("div");
  onion.innerHTML = `<img src="./images/onion.svg" alt="" />`;

  masalliqlar.prepend(onion);
  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End

  onion.addEventListener("click", (e) => {
    onion.innerHTML = " ";
    masalliqlar.removeChild(onion);
    //   Narx sozlamasi start
    totalNarx -= 2;
    document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
    //   Narx sozlamasi End
  });
});
// onion End

// meat Start

meatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const meat = document.createElement("div");
  meat.innerHTML = `<img src="./images/meat.svg" alt="" />`;

  masalliqlar.prepend(meat);
  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End

  meat.addEventListener("click", (e) => {
    meat.innerHTML = " ";
    masalliqlar.removeChild(meat);
    //   Narx sozlamasi start
    totalNarx -= 2;
    document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
    //   Narx sozlamasi End
  });
});
// meat End

// salad Start

saladBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const salad = document.createElement("div");
  salad.innerHTML = `<img src="./images/salad.svg" alt="" />`;

  masalliqlar.prepend(salad);
  //   Narx sozlamasi start
  totalNarx += 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End

  salad.addEventListener("click", (e) => {
    salad.innerHTML = " ";
    masalliqlar.removeChild(salad);
    //   Narx sozlamasi start
    totalNarx -= 2;
    document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
    //   Narx sozlamasi End
  });
});
// salad End
// qayta kiritish start

let qayta = document.querySelector("#qayta");
qayta.addEventListener("click", (e) => {
  e.preventDefault();
  // e.target.remove();
  masalliqlar.innerHTML = "";

  //   Narx sozlamasi start

  totalNarx = 2;
  document.querySelector("#totalnarx").textContent = `Total : $${totalNarx}`;
  //   Narx sozlamasi End
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
