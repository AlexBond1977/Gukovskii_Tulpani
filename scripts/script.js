'use strict';

// Массив с данными о тюльпанах
const tulipsData = [
    { id: 1, name: 'AVANT GARDE', image: 'AvantGarde.png', height: '40-50 см', budHeight: '6-7 см', class: 'пионовидные махровые' },
    { id: 2, name: 'BODY BUILDER', image: 'BODY_BUILDER.png', height: '50-55 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 3, name: 'BULLIT', image: 'BULLIT.png', height: '55-60 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 4, name: 'COLUMBUS', image: 'Columbus.png', height: '40-45 см', budHeight: '6-8 см', class: 'пионовидные' },
    { id: 5, name: 'CHRISTMAS GIFT', image: 'CHRISTMAS_GIFT.png', height: '50-55 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 6, name: 'CIRCUIT', image: 'CIRCUIT.png', height: '50-60 см', budHeight: '5 см', class: 'триумф' },
    { id: 7, name: 'CREME FRAICHE', image: 'CremeFraiche.png', height: '45-55 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 8, name: 'CURRY', image: 'CURRY.png', height: '50-60 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 9, name: 'DELTA STORM', image: 'DELTA_STRONG.png', height: '50-60 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 10, name: 'DENMARK', image: 'DENMARK.png', height: '50-60 см', budHeight: '7 см', class: 'триумф' },
    { id: 11, name: 'DISCO', image: 'DISCO.png', height: '50-60 см', budHeight: '7-10 см', class: 'триумф' },
    { id: 12, name: 'DOW JONES', image: 'DOW_JONES.png', height: '45-50 см', budHeight: '6-9 см', class: 'триумф' },
    { id: 13, name: 'DYNASTY', image: 'DYNASTY.png', height: '45-50 см', budHeight: '8 см', class: 'триумф' },
    { id: 14, name: 'FIRST LIFE', image: 'FirstLife.png', height: '60-65 см', budHeight: '8 см', class: 'триумф' },
    { id: 15, name: 'FIRST CLASS', image: 'FirstClass.png', height: '45-55 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 16, name: 'FLAMING FLAG', image: 'FlamingFlag.png', height: '40-50 см', budHeight: 'до 10 см', class: 'триумф' },
    { id: 17, name: 'FLASH POINT', image: 'FlashPoint.png', height: '40-45 см', budHeight: '10-15 см', class: 'махровые' },
    { id: 18, name: 'FORTRESS', image: 'FORTRESS.png', height: '50-60 см', budHeight: '8 см', class: 'триумф' },
    { id: 19, name: 'HAKUUN', image: 'HAKUUN.png', height: '70 см', budHeight: 'до 12 см', class: 'дарвиновы гибриды' },
    { id: 20, name: 'HENNIE VAN DE MOST', image: 'HennieVanDeMost.png', height: '50-60 см', budHeight: '7-9 см', class: 'дарвиновы гибриды' },
    { id: 21, name: 'ICOON', image: 'ICOON.png', height: '55-60 см', budHeight: '5-6 см', class: 'пионовидный' },
    { id: 22, name: 'INVANDER', image: 'INVANDER.png', height: '50 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 23, name: 'JUMBO PINK', image: 'JUMBO_PINK.png', height: '50-70 см', budHeight: '6-7 см', class: 'триумф' },
    { id: 24, name: 'LINCOLN', image: 'Lincoln.png', height: 'до 50 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 25, name: 'MARGARITA', image: 'Margarita.png', height: 'до 25-35 см', budHeight: '10-12 см', class: 'махровые' },
    { id: 26, name: 'NOVI SUN', image: 'NOVI_SUN.png', height: '40-50 см', budHeight: '6-10 см', class: 'триумф' },
    { id: 27, name: 'ORANGE SHERPA', image: 'OrangeSherpa.png', height: '40-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 28, name: 'PINK ARDOUR', image: 'PINK_ARDOUR.png', height: '45-55 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 29, name: 'PURPLE LADY', image: 'PurpleLady.png', height: '40-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 30, name: 'ROYAL VIRGIN', image: 'RoyalVirgin.png', height: '45-50 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 31, name: 'STRONG ENERGY', image: 'STRONG_ENERGY.png', height: '45-50 см', budHeight: '6-7 см', class: 'триумф' },
    { id: 32, name: 'STRONG GOLD', image: 'STRONG_GOLD.png', height: '50-70 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 33, name: 'STRONG LOVE', image: 'STRONG_LOVE.png', height: '50-55 см', budHeight: '6-10 см', class: 'триумф' },
    { id: 34, name: 'SUPER MODEL', image: 'SUPER_MODEL.png', height: '50-55 см', budHeight: '8 см', class: 'триумф' },
    { id: 35, name: 'SYNAEDA BLUE', image: 'SynaedaBlue.png', height: '45-55 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 36, name: 'UPDATE', image: 'Update.png', height: '45-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 37, name: 'VALDIVIA', image: 'VALDIVIA.png', height: '40-45 см', budHeight: '5 см', class: 'махровый' },
    { id: 38, name: 'VERANDI', image: 'Verandi.png', height: '40-50 см', budHeight: '5-6 см', class: 'триумф' },
    { id: 39, name: 'WHITE DYNASTY', image: 'WHITE_DYNASTY.png', height: '45-65 см', budHeight: '8 см', class: 'триумф' },
    { id: 40, name: 'WHITE PRINCE', image: 'WhitePrince.png', height: '30-40 см', budHeight: '8-10 см', class: 'простые' }
];

// Функция для рендеринга товаров (все сразу с классом sold-out)
function renderProducts() {
    const productsContainer = document.querySelector('.products-items');
    if (!productsContainer) return;

    let html = '';
    tulipsData.forEach(tulip => {
        html += `
            <div class="product sold-out" id="${tulip.id}">
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
                <span>${tulip.id}</span>
            </div>
        `;
    });

    productsContainer.innerHTML = html;
}

window.onload = function () {
    // Рендерим товары (все уже с классом sold-out)
    renderProducts();

    // Обновляем год в футере
    document.querySelector('.rights span').innerText = (new Date()).getFullYear();

    // Переупорядочиваем проданные товары (хотя все проданные, порядок сохраняется по id)
    reorderSoldItems();

    // Telegram ссылки
    document.getElementById('telegram-link-one').addEventListener('click', function(event) {
        event.preventDefault();
        const phoneNumberOne = '+375296855655';
        window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberOne);
    });

    document.getElementById('telegram-link-two').addEventListener('click', function(event) {
        event.preventDefault();
        const phoneNumberTwo = '+375296175665';
        window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberTwo);
    });

    // Viber ссылки
    document.getElementById('viber-link-one').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'viber://chat?number=375296855655';
    });

    document.getElementById('viber-link-two').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'viber://chat?number=375296175665';
    });
};

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

    // Сортируем проданные по ID (числовому значению)
    soldProducts.sort((a, b) => {
        const idA = parseInt(a.id);
        const idB = parseInt(b.id);
        return idA - idB;
    });

    // Очищаем контейнер и добавляем товары в новом порядке: сначала доступные, потом проданные
    productsContainer.innerHTML = '';
    availableProducts.forEach(product => productsContainer.appendChild(product));
    soldProducts.forEach(product => productsContainer.appendChild(product));
}