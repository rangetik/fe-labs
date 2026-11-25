// Завдання 1
// Варіант: (41 - 1) % 15 + 1 = 11 -> рядки табл. 2: 1, 4, 6, 7, 8

const fields = [
  // 1. ПІБ: ТТТТТТ Т.Т.
  { id: "pib",     regex: /^[А-ЯІЇЄҐ][а-яіїєґ'’-]+ [А-ЯІЇЄҐ]\. ?[А-ЯІЇЄҐ]\.$/ },
  // 4. Телефон: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ
  { id: "phone",   regex: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/ },
  // 6. Факультет: ТТТТ
  { id: "faculty", regex: /^[А-ЯІЇЄҐ]{4}$/ },
  // 7. Дата народження: ЧЧ.ЧЧ.ЧЧЧЧ (день 01-31, місяць 01-12)
  { id: "birth",   regex: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/ },
  // 8. Адреса: м. Назва
  { id: "address", regex: /^м\. [А-ЯІЇЄҐ][а-яіїєґ'’-]+( [А-ЯІЇЄҐ][а-яіїєґ'’-]+)*$/ }
];

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let allValid = true;

  for (const field of fields) {
    const input = document.getElementById(field.id);
    const value = input.value.trim();

    if (field.regex.test(value)) {
      input.classList.remove("error");
      input.classList.add("ok");
    } else {
      input.classList.remove("ok");
      input.classList.add("error");
      allValid = false;
    }
  }

  if (allValid) {
    for (const field of fields) {
      document.getElementById("r-" + field.id).textContent =
        document.getElementById(field.id).value.trim();
    }
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }
});

// Завдання 2
// Варіант: (41 - 1) % 10 + 1 = 1 -> клітинка 1,
// dblclick: зміна кольору відповідного рядка таблиці

const VARIANT = 1;
const grid = document.getElementById("grid");
const palette = document.getElementById("palette");

for (let r = 0; r < 6; r++) {
  const row = document.createElement("tr");
  for (let c = 0; c < 6; c++) {
    const cell = document.createElement("td");
    cell.textContent = r * 6 + c + 1;
    row.appendChild(cell);
  }
  grid.appendChild(row);
}

const cells = grid.querySelectorAll("td");
const myCell = cells[VARIANT - 1];

function randomColor() {
  const n = Math.floor(Math.random() * 0x1000000);
  return "#" + n.toString(16).padStart(6, "0");
}


myCell.addEventListener("mouseover", function () {
  myCell.style.backgroundColor = randomColor();
});

// Click -> колір з палітри
myCell.addEventListener("click", function () {
  myCell.style.backgroundColor = palette.value;
});

// dblClick -> колір з палітри для всього рядка, в якому стоїть клітинка
myCell.addEventListener("dblclick", function () {
  const row = myCell.parentElement;
  for (const cell of row.children) {
    cell.style.backgroundColor = palette.value;
  }
});