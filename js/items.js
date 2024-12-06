// ОТОБРАЖАЕМ КАРТОЧКУ
function displayItems(items) {
  const itemsContainer = document.getElementById("items-display");
  itemsContainer.innerHTML = "";
  items.forEach((item, index) => {
    const itemCard = `
      <div class="col col-md-4">
        <div class="card my-3" >
          <a href="item.html?id=${index}"><img src="${item.pic}" class="card-img-top" alt="..." /></a>
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h3 class="card-title">${item.price}</h3>
              <p class="card-text" style="color: #0c0c0ca4">${item.name}</p>
            </div>
            <a href="#" class="btn btn-primary w-100" data-id="1">В корзину</a>
          </div>
        </div>
      </div>
    `;
    itemsContainer.innerHTML += itemCard;
  });
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

// Обработчик события для поиска
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery) ||
      item.price.toLowerCase().includes(searchQuery)
  );
  displayItems(filteredItems);
});

if (window.location.href.match("shop") || window.location.href.match("index")) {
  loadItems();
}
