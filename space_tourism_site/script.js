// Обработчик для кнопки на главной странице
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    const demoText = document.getElementById('demoText');

    if (mainButton && demoText) {
        mainButton.addEventListener('click', function() {
            demoText.style.display = 'block';
        });
    }

    // Обработчик для формы на странице контактов
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем реальную отправку формы
            formMessage.style.display = 'block';
            contactForm.reset(); // Очищаем форму
        });
    }
});