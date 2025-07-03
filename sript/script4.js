 // Циклы while и do..while с изменёнными сообщениями

function startCounter() {
  const result = document.getElementById("result4");
  let output = "Текущий счёт: ";
  let count = 0;

  while (true) {
    output += count + " ";
    count++;

    if (count > 5) break;
  }

  let repeat = 0;
  output += " | do..while цикл: ";
  do {
    output += repeat + " ";
    repeat++;
  } while (repeat < 3);

  result.textContent = output;
}
