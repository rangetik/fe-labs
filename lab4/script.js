// Варіант 41: (41 mod 10) + 1 = 2 -> 2-й елемент сторінки (<h2>)
// наступний елемент -> 3-й (<p class="birth">)

// Завдання 1
const fullname = document.getElementById("fullname");
let fullnameClicked = false;

fullname.addEventListener("click", function () {
  fullnameClicked = !fullnameClicked;
  if (fullnameClicked) {
    fullname.style.backgroundColor = "blue";
    fullname.style.color = "white";
  } else {
    fullname.style.backgroundColor = "lime";
    fullname.style.color = "black";
  }
});

const birth = document.querySelector(".birth");
let birthClicked = false;

birth.addEventListener("click", function () {
  birthClicked = !birthClicked;
  if (birthClicked) {
    birth.style.backgroundColor = "lime";
    birth.style.color = "black";
  } else {
    birth.style.backgroundColor = "blue";
    birth.style.color = "white";
  }
});

// Завдання 2
const images = document.getElementById("images");

function lastImage() {
  const list = images.querySelectorAll("img");
  return list.length > 0 ? list[list.length - 1] : null;
}

document.getElementById("add").addEventListener("click", function () {
  const img = document.createElement("img");
  img.src = "img/city.jpg";
  img.alt = "Фото міста Одеса";
  img.width = 600;
  images.appendChild(img);
});

document.getElementById("bigger").addEventListener("click", function () {
  const img = lastImage();
  if (img && img.width < 1200) {
    img.width = img.width + 50;
  }
});

document.getElementById("smaller").addEventListener("click", function () {
  const img = lastImage();
  if (img && img.width > 100) {
    img.width = img.width - 50;
  }
});

document.getElementById("remove").addEventListener("click", function () {
  const img = lastImage();
  if (img) {
    const target = img.parentElement.tagName === "A" ? img.parentElement : img;
    target.remove();
  }
});