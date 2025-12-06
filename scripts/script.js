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

    //Для проданных тюльпанов
    // markAsSold('card3', 'card5', 'card7', 'card9', 'card10', 'card14', 'card17', 'card20', 'card22', 'card23', 'card24', 'card25', 'card26', 'card27', 'card28', 'card29', 'card32', 'card35', 'card36', 'card40', 'card41', 'card42', 'card44', 'card48', 'card49', 'card52', 'card54', 'card56', 'card58', 'card59', 'card60')


    // Телефоны
    function createMessengerHandler(phoneNumber, isViber = false) {
        return function (event) {
            event.preventDefault();
            if (isViber) {
                window.location.href = 'viber://chat?number=' + phoneNumber.replace('+', '');
            } else {
                window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumber);
            }
        };
    }

    document.getElementById('telegram-link-one')?.addEventListener('click', createMessengerHandler('+375296855655'));
    document.getElementById('viber-link-one')?.addEventListener('click', createMessengerHandler('+375296855655', true));
    document.getElementById('telegram-link-two')?.addEventListener('click', createMessengerHandler('+375296175665'));
    document.getElementById('viber-link-two')?.addEventListener('click', createMessengerHandler('+375296175665', true));


}