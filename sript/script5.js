 // Окно alert и отправка письма с изменёнными текстами

function showAlert() {
  alert("Внимание! Это сообщение alert.");
}

function openUrlScheme() {
  const email = "test@example.com";
  const subject = encodeURIComponent("Здравствуйте");
  const body = encodeURIComponent("Это пример письма");
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
