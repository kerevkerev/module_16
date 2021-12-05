//task_7

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", getUser);

function getUser() {
  let id = +input.value;
  if (isNaN(id) || input.value === "") {
    btn.ariaDisabled;
  } else {
    let url = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          alert("Нет такого пользователя");
        } else {
          console.log(data);

         
        }
      })
      .catch(() => {
        console.log("error");
      });
  }
}

