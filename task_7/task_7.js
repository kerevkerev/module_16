//task_7

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector(".ul");

//обработчик на запр
btn.addEventListener("click", () => {
  getUser(displayResult);
});

// получить данные
function getUser(callback) {
  let id = +input.value;
  if (isNaN(id) || input.value === "") {
    btn.ariaDisabled;
  } else {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
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
  ul.textContent = "";
  apiData.forEach((item) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    ul.appendChild(li);

    item.completed
      ? (li.innerHTML = item.title.strike())
      : (li.innerHTML = item.title);
  });
}
