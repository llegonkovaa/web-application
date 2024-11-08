document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    // Получаем значения полей
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    // Проверяем, заполнены ли все поля
    if (name === '' || email === '' || message === '') {
        document.getElementById('error-message').style.display = 'block'; // Показываем сообщение об ошибке
        document.getElementById('success-message').style.display = 'none'; // Скрываем сообщение об успехе
    } else {
        // Если все поля заполнены, показываем сообщение об успехе
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none'; // Скрываем сообщение об ошибке
        // Здесь можно добавить код для отправки данных на сервер, если это необходимо
        // Например, используя fetch или XMLHttpRequest
    }
});