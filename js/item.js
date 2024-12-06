// Получаем ID пользователя из URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

// ОТОБРАЖАЕМ КАРТОЧКУ
function displayItems(items) {
  const itemContainer = document.getElementById("item-display");

  if (items[itemId]) {
    const item = items[itemId];
    itemContainer.innerHTML = `
      <div class="container container-autorization my-5 d-flex">
      <div
        class="container container-autorization-left d-flex flex-column justify-content-center"
      >
        <img src="${item.pic}" alt="..." />
      </div>

      <div
        class="container container-autorization-right d-flex flex-column justify-content-between"
      >
        <div class="container my-3">
          <h3 class="card-text" style="color: #0c0c0ca4">${item.name}</h3>
          <h1 class="card-title">${item.price}</h1>
        </div>

        <div class="container my-2">
          <h5 class="no-margin">Характеристики</h5>
          <div class="container my-3">
            <div
              class="container my-3 d-flex justify-content-between el-param p-3"
            >
              <p class="no-margin">Бренд:</p>
              <p class="no-margin">${item.brand}</p>
            </div>
            <div
              class="container my-3 d-flex justify-content-between el-param p-3"
            >
              <p class="no-margin">Размеры:</p>
              <p class="no-margin">${item.size}</p>
            </div>
            <div
              class="container my-3 d-flex justify-content-between el-param p-3"
            >
              <p class="no-margin">Обивка:</p>
              <p class="no-margin">${item.material}</p>
            </div>
            <div
              class="container my-3 d-flex justify-content-between el-param p-3"
            >
              <p class="no-margin">Цвет:</p>
              <p class="no-margin">${item.color}</p>
            </div>
          </div>
        </div>

        <div class="container my-3">
          <div class="container">
            <a href="#" class="btn btn-primary btn-el">В корзину</a>
          </div>
        </div>
      </div>
    </div>
  `;
  } else {
    itemContainer.innerHTML = "<p>Item не найден</p>";
  }
}

// Функция для загрузки данных через AJAX
let allItems = []; // Переменная для хранения всех элементов

function loadItems() {
  fetch("../php/get_items.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Данные загружены:", data);
      allItems = data;
      displayItems(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

if (window.location.href.match("item")) {
  loadItems();
}
