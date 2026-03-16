'use strict';

// Массив с данными о тюльпанах
const tulipsData = [
    { id: 'card1', name: 'AVANT GARDE', image: 'AvantGarde.png', height: '40-50 см', budHeight: '6-7 см', class: 'пионовидные махровые' },
    { id: 'card2', name: 'BODY BUILDER', image: 'BODY_BUILDER.png', height: '50-55 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 'card3', name: 'BULLIT', image: 'BULLIT.png', height: '55-60 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 'card4', name: 'COLUMBUS', image: 'Columbus.png', height: '40-45 см', budHeight: '6-8 см', class: 'пионовидные' },
    { id: 'card5', name: 'CHRISTMAS GIFT', image: 'CHRISTMAS_GIFT.png', height: '50-55 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 'card6', name: 'CIRCUIT', image: 'CIRCUIT.png', height: '50-60 см', budHeight: '5 см', class: 'триумф' },
    { id: 'card7', name: 'CREME FRAICHE', image: 'CremeFraiche.png', height: '45-55 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 'card8', name: 'CURRY', image: 'CURRY.png', height: '50-60 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 'card9', name: 'DELTA STORM', image: 'DELTA_STRONG.png', height: '50-60 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 'card10', name: 'DENMARK', image: 'DENMARK.png', height: '50-60 см', budHeight: '7 см', class: 'триумф' },
    { id: 'card11', name: 'DISCO', image: 'DISCO.png', height: '50-60 см', budHeight: '7-10 см', class: 'триумф' },
    { id: 'card12', name: 'DOW JONES', image: 'DOW_JONES.png', height: '45-50 см', budHeight: '6-9 см', class: 'триумф' },
    { id: 'card13', name: 'DYNASTY', image: 'DYNASTY.png', height: '45-50 см', budHeight: '8 см', class: 'триумф' },
    { id: 'card14', name: 'FIRST LIFE', image: 'FirstLife.png', height: '60-65 см', budHeight: '8 см', class: 'триумф' },
    { id: 'card15', name: 'FIRST CLASS', image: 'FirstClass.png', height: '45-55 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 'card16', name: 'FLAMING FLAG', image: 'FlamingFlag.png', height: '40-50 см', budHeight: 'до 10 см', class: 'триумф' },
    { id: 'card17', name: 'FLASH POINT', image: 'FlashPoint.png', height: '40-45 см', budHeight: '10-15 см', class: 'махровые' },
    { id: 'card18', name: 'FORTRESS', image: 'FORTRESS.png', height: '50-60 см', budHeight: '8 см', class: 'триумф' },
    { id: 'card19', name: 'HAKUUN', image: 'HAKUUN.png', height: '70 см', budHeight: 'до 12 см', class: 'дарвиновы гибриды' },
    { id: 'card20', name: 'HENNIE VAN DE MOST', image: 'HennieVanDeMost.png', height: '50-60 см', budHeight: '7-9 см', class: 'дарвиновы гибриды' },
    { id: 'card21', name: 'ICOON', image: 'ICOON.png', height: '55-60 см', budHeight: '5-6 см', class: 'пионовидный' },
    { id: 'card22', name: 'INVANDER', image: 'INVANDER.png', height: '50 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 'card23', name: 'JUMBO PINK', image: 'JUMBO_PINK.png', height: '50-70 см', budHeight: '6-7 см', class: 'триумф' },
    { id: 'card24', name: 'LINCOLN', image: 'Lincoln.png', height: 'до 50 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 'card25', name: 'MARGARITA', image: 'Margarita.png', height: 'до 25-35 см', budHeight: '10-12 см', class: 'махровые' },
    { id: 'card26', name: 'NOVI SUN', image: 'NOVI_SUN.png', height: '40-50 см', budHeight: '6-10 см', class: 'триумф' },
    { id: 'card27', name: 'ORANGE SHERPA', image: 'OrangeSherpa.png', height: '40-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 'card28', name: 'PINK ARDOUR', image: 'PINK_ARDOUR.png', height: '45-55 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 'card29', name: 'PURPLE LADY', image: 'PurpleLady.png', height: '40-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 'card30', name: 'ROYAL VIRGIN', image: 'RoyalVirgin.png', height: '45-50 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 'card31', name: 'STRONG ENERGY', image: 'STRONG_ENERGY.png', height: '45-50 см', budHeight: '6-7 см', class: 'триумф' },
    { id: 'card32', name: 'STRONG GOLD', image: 'STRONG_GOLD.png', height: '50-70 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 'card33', name: 'STRONG LOVE', image: 'STRONG_LOVE.png', height: '50-55 см', budHeight: '6-10 см', class: 'триумф' },
    { id: 'card34', name: 'SUPER MODEL', image: 'SUPER_MODEL.png', height: '50-55 см', budHeight: '8 см', class: 'триумф' },
    { id: 'card35', name: 'SYNAEDA BLUE', image: 'SynaedaBlue.png', height: '45-55 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 'card36', name: 'UPDATE', image: 'Update.png', height: '45-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 'card37', name: 'VALDIVIA', image: 'VALDIVIA.png', height: '40-45 см', budHeight: '5 см', class: 'махровый' },
    { id: 'card38', name: 'VERANDI', image: 'Verandi.png', height: '40-50 см', budHeight: '5-6 см', class: 'триумф' },
    { id: 'card39', name: 'WHITE DYNASTY', image: 'WHITE_DYNASTY.png', height: '45-65 см', budHeight: '8 см', class: 'триумф' },
    { id: 'card40', name: 'WHITE PRINCE', image: 'WhitePrince.png', height: '30-40 см', budHeight: '8-10 см', class: 'простые' }
];

// Функция для рендеринга товаров
function renderProducts() {
    const productsContainer = document.querySelector('.products-items');
    if (!productsContainer) return;

    let html = '';
    tulipsData.forEach(tulip => {
        html += `
            <div class="product" id="${tulip.id}">
                <div class="product-image">
                    <img src="images/${tulip.image}" alt="${tulip.name}">
                </div>
                <div class="product-title">
                    ${tulip.name}
                </div>
                <div class="product-text">
                    <ul>
                        <li>Высота: ${tulip.height}</li>
                        <li>Высота бутона: ${tulip.budHeight}</li>
                        <li>Класс: ${tulip.class}</li>
                    </ul>
                </div>
                <span>${tulip.id.replace('card', '')}</span>
            </div>
        `;
    });

    productsContainer.innerHTML = html;
}

window.onload = function () {
    // Рендерим товары
    renderProducts();

    document.querySelector('.rights span').innerText = (new Date()).getFullYear();

    function markAsSold(...ids) {
        ids.forEach(id => {
            const card = document.getElementById(id);
            if (card) {
                card.classList.add('sold-out');
            }
        });
        // После добавления класса sold-out, перестраиваем порядок
        reorderSoldItems();
    }

    /**
     * Функция для перемещения всех проданных товаров в конец списка
     * с сортировкой по возрастанию ID
     */
    function reorderSoldItems() {
        const productsContainer = document.querySelector('.products-items');
        if (!productsContainer) return;

        // Получаем все карточки товаров
        const allProducts = Array.from(productsContainer.children);

        // Разделяем на проданные и непроданные
        const soldProducts = allProducts.filter(product => product.classList.contains('sold-out'));
        const availableProducts = allProducts.filter(product => !product.classList.contains('sold-out'));

        // Сортируем проданные по ID (числовому значению после 'card')
        soldProducts.sort((a, b) => {
            const idA = parseInt(a.id.replace('card', ''));
            const idB = parseInt(b.id.replace('card', ''));
            return idA - idB; // По возрастанию
        });

        // Очищаем контейнер и добавляем товары в новом порядке: сначала доступные, потом проданные (отсортированные)
        productsContainer.innerHTML = '';
        availableProducts.forEach(product => productsContainer.appendChild(product));
        soldProducts.forEach(product => productsContainer.appendChild(product));
    }

    //Для проданных тюльпанов
    markAsSold('card1', 'card2', 'card3', 'card4', 'card13', 'card14', 'card16', 'card17', 'card18', 'card19', 'card21', 'card2', 'card25', 'card30', 'card31', 'card33', 'card34', 'card34', 'card36', 'card37');

    document.getElementById('telegram-link-one').addEventListener('click', function(event) {
        event.preventDefault();
        const phoneNumberOne = '+375296855655'; // Номер телефона без пробелов и дефисов
        window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberOne); // Переходим в Telegram
    });

    document.getElementById('telegram-link-two').addEventListener('click', function(event) {
        event.preventDefault();
        const phoneNumberTwo = '+375296175665'; // Номер телефона без пробелов и дефисов
        window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberTwo); // Переходим в Telegram
    });

    document.getElementById('viber-link-one').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'viber://chat?number=375296855655';
    });

    document.getElementById('viber-link-two').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'viber://chat?number=375296175665';
    });
};