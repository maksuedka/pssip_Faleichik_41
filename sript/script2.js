 // Описание фруктов с изменёнными текстами

function describeFruit() {
  const fruit = document.getElementById("fruitSelect").value;
  const result = document.getElementById("result2");

  switch (fruit) {
    case "apple":
      result.textContent = "Яблоко — сочный и бывает красным или зелёным.";
      break;
    case "banana":
      result.textContent = "Банан — сладкий и желтого цвета.";
      break;
    case "orange":
      result.textContent = "Апельсин — круглый фрукт с витамином C.";
      break;
    default:
      result.textContent = "Фрукт не опознан.";
  }
}
