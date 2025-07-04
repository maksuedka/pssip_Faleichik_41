/**
 * Задание 4 (Вариант 61): Пользовательская функция для расчета значения f.
 * f = (-t + sqrt(7 + t)) / (8 - |t|)
 */
function calculateF(t) {
    // 5. Обработка исключительных ситуаций

    // Проверка на корень из отрицательного числа. Теперь 7+t не должно быть < 0
    if (7 + t < 0) {
        alert("Ошибка: Нельзя извлечь корень из отрицательного числа! (Выражение 7+t должно быть больше или равно 0)");
        return "Ошибка (подкоренное выражение < 0)";
    }

    // Проверка на деление на ноль (остается без изменений)
    if (Math.abs(t) === 8) {
        alert("Ошибка: Деление на ноль! (модуль t не может быть равен 8)");
        return "Ошибка (деление на ноль)";
    }

    // 1. Расчет по ИСПРАВЛЕННОЙ формуле
    const result = (-t + Math.sqrt(7 + t)) / (8 - Math.abs(t));

    // 3. Возврат результата через return
    return result;
}