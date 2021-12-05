// task_6

let getNumber = () => Math.floor(Math.random(100) * 100);

let promise = new Promise((resolve, reject) => {
  let randNumber = getNumber();
  setTimeout(() => {
    if (randNumber % 2 == 0) {
      resolve({
        mesage: "Завершено успешно. Сгенерированное число — ",
        data: randNumber,
      });
    }
    if (randNumber % 2 != 0) {
      reject({
        mesage: "Завершено с ошибкой. Сгенерированное число — ",
        data: randNumber,
      });
    }
  }, 3000);
});

promise
  .then((result) => {
    console.log(`${result.mesage}${result.data}`);
  })
  .catch((error) => {
    console.log(`${error.mesage}${error.data}`);
  });
