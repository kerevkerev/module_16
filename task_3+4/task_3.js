// task_3+4

// получение нод элементов
const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".btn");
const selectNod = document.querySelector(".select");
const tbodyNod = document.querySelector("tbody");
const outNod = document.querySelector(".out");
let prop;

// запрос
function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      prop = result;
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
  apiData.forEach((item, i) => {
    let option = document.createElement("option");

    selectNod.appendChild(option);
    option.value = i;
    option.text = item.year;
  });
}

// обработчик на кнопку для выборки в таблицу
btnNode.addEventListener("click", outTable);
function outTable() {
  let elem = selectNod.value;
  let year = prop[elem].year;
  let td = `
  <td>${prop[elem].sales.q1}</td>
  <td>${prop[elem].sales.q2}</td>
  <td>${prop[elem].sales.q3}</td>
  <td>${prop[elem].sales.q4}</td>
  `;
  tbodyNod.innerHTML = td;

  // создание графика
  outNod.innerHTML = `<iframe src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], 
  datasets:[{label:'Выручка за ${year} год',data:[${prop[elem].sales.q1},${prop[elem].sales.q2},${prop[elem].sales.q3},${prop[elem].sales.q4}]}]}}"
   width="1000px" height="1000px" align="left">
</iframe>`;
}

// выполнение запроса при загрузке страницы
window.onload = useRequest(
  "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440",
  displayResult
);

// [
//   { year: 2017, sales: { q1: 89266, q2: 42711, q3: 75124, q4: 32011 } },
//   { year: 2018, sales: { q1: 57574, q2: 54990, q3: 28648, q4: 73295 } },
//   { year: 2019, sales: { q1: 30208, q2: 77357, q3: 87824, q4: 55472 } },
// ];
