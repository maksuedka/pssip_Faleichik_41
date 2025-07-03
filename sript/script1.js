 // Проверка возраста с изменёнными сообщениями

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("result1");

  if (isNaN(age)) {
    result.textContent = "Пожалуйста, введите корректное число.";
    return;
  }

  if (age < 18) {
    result.textContent = "К сожалению, вы ещё не достигли совершеннолетия.";
    return;
  }

  result.textContent = "Вы уже взрослый человек!";
}
