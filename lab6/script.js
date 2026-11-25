// Варіант: (41 - 1) % 20 + 1 = 1 -> рядки табл. 2: 1, 2, 3, 4, 5
// picture, name, cell, city, country

const API_URL = "https://randomuser.me/api/?results=5";

const button = document.getElementById("download");
const statusText = document.getElementById("status");
const usersBlock = document.getElementById("users");

function createCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML =
    '<img src="' + user.picture.large + '" alt="Фото користувача">' +
    "<p><b>Name:</b> " + user.name.first + " " + user.name.last + "</p>" +
    "<p><b>Cell:</b> " + user.cell + "</p>" +
    "<p><b>City:</b> " + user.location.city + "</p>" +
    "<p><b>Country:</b> " + user.location.country + "</p>";

  return card;
}

button.addEventListener("click", function () {
  statusText.textContent = "loading...";
  usersBlock.innerHTML = "";

  fetch(API_URL)                
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }
      return response.json();         
    })
    .then(function (data) {
      for (const user of data.results) {
        usersBlock.appendChild(createCard(user));
      }
      statusText.textContent = "success!";
    })
    .catch(function (error) {        
      statusText.textContent = "error: " + error.message;
    });
});