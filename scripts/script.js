'use strict';

window.onload = function () {

document.querySelector('.rights span').innerText = (new Date()).getFullYear();

function markAsSold(...ids) {
    ids.forEach(id => {
        const card = document.getElementById(id);
        if (card) {
            card.classList.add('sold-out');
        }
    });
}
markAsSold('card5', 'card7', 'card10', 'card20', 'card22', 'card24', 'card25', 'card26', 'card27', 'card28', 'card32', 'card33', 'card35', 'card36', 'card40', 'card42', 'card44', 'card49', 'card52', 'card58', 'card59', 'card60');


document.getElementById('telegram-link-one').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    const phoneNumberOne = '+375296855655'; // Номер телефона без пробелов и дефисов
    window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberOne); // Переходим в Telegram
});

document.getElementById('telegram-link-two').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    const phoneNumberTwo = '+375296175665'; // Номер телефона без пробелов и дефисов
    window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberTwo); // Переходим в Telegram
});


}