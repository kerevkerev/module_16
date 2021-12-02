// task_5

if (localStorage.getItem("userName")) {
  alert(
    `Добрый день, ${localStorage.getItem(
      "userName"
    )}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem(
      "date"
    )}`
  );
} else {
  localStorage.setItem(
    "userName",
    prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя")
  );
  localStorage.setItem("date", new Date().toLocaleString().slice(0, -3));
}
