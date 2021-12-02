// task_3+4
// получение нод элементов
const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".btn");
const selectNod = document.querySelector(".select");
const tbodyNod = document.querySelector("tbody");
const outNod = document.querySelector(".out");
let a;

// запрос
function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      a = result;
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };
  xhr.send();
}

// обработка запроса, заполнение select
function displayResult(apiData) {
  apiData.forEach((item) => {
    let option = document.createElement("option");
    selectNod.appendChild(option);
    option.value = item.id;
    option.text = item.title;
  });
}

// обработчик на кнопку для выборки
btnNode.addEventListener("click", outTable);
function outTable() {
  let elem = selectNod.value - 1;
  let td = `
  <td>${a[elem].id}</td>
  <th>${a[elem].userId}</th>
  <th>${a[elem].id}</th>
  <th>${a[elem].title}</th>`;

  tbodyNod.innerHTML = td;
  outNod.innerHTML = `<iframe src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за год',data:[70,18,22,75]}]}}" width="1000px" height="1000px" align="left">
  Ваш браузер не поддерживает плавающие фреймы!
</iframe>`;

  // `<a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за год',data:[50,60,70,180]}]}}">Показать график</a>`;
}

// выполнение запроса при загрузке страницы
window.onload = useRequest(
  "https://jsonplaceholder.typicode.com/posts",
  displayResult
);
