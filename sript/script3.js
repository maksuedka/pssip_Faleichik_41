 // Цикл с пропуском значения и изменённым текстом

function loopNumbers() {
  const result = document.getElementById("result3");
  let output = "Перечисляем числа от 0 до 9, кроме 5: ";

  for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    output += i + " ";
  }

  result.textContent = output;
}
