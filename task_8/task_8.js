//task_8

const btn = document.querySelector(".btn");
const page = document.querySelector(".page");
const limit = document.querySelector(".limit");
const ul = document.querySelector(".ul");
const out_info = document.querySelector(".out_info");
const out_img = document.querySelector(".out_img");
//обработчик на запр
btn.addEventListener("click", () => {
  getUser(displayResult);
});
// function getUser() {
//      console.log(input.value);
// }
// получить данные
function getUser(callback) {
  let numbPage = +page.value;
  let limitPage = +limit.value;
  if (
    (isNaN(limitPage) || limitPage > 10 || limitPage < 1) &&
    (isNaN(numbPage) || numbPage > 10 || numbPage < 1)
  ) {
    out_info.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  } else if (isNaN(numbPage) || numbPage > 10 || numbPage < 1) {
    out_info.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  } else if (isNaN(limitPage) || limitPage > 10 || limitPage < 1) {
    out_info.innerHTML = "Лимит вне диапазона от 1 до 10";
  } else {
    fetch(`https://picsum.photos/v2/list?page=${numbPage}&limit=${limitPage}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.length === 0) {
          alert("Пользователь с указанным id не найден");
        } else {
          callback(result);
        }
      })
      .catch(() => {
        console.log("error");
      });
  }
}

// вывод запроса на страницу
function displayResult(apiData) {
  clearOut();
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
        //   class="img-fluid"
        />
        <p>Автор ${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  console.log("end cards", cards);
  out_img.innerHTML = cards;
}
//очищение out
function clearOut() {
  out_img.textContent = "";
  out_info.textContent = "";
}
