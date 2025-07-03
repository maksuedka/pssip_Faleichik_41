 // Скрипт 7 — ввод имени с изменёнными сообщениями

function promptName() {
  let name = prompt("Пожалуйста, введите ваше имя:");
  let result = document.getElementById("result7");
  if (name) {
    result.textContent = "Здравствуйте, " + name + "!";
  } else {
    result.textContent = "Очень жаль, что вы не представились.";
  }
}
