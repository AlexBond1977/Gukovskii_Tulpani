'use strict';

// Массив с данными о тюльпанах
const tulipsData = [
    { id: 1, name: 'Alison Bradley', image: 'AlisonBradley.png', height: '40-50 см', budHeight: '8-10 см', class: 'махровые ранние' },
    { id: 2, name: 'Argos', image: 'Argos.png', height: '45-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 3, name: 'Avant Garde', image: 'AvantGarde.png', height: '40-50 см', budHeight: '6-7 см', class: 'пионовидные махровые' },
    { id: 4, name: 'Body Builder', image: 'BODY_BUILDER.png', height: '50-55 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 5, name: 'Brindisi', image: 'Brindisi.png', height: '40 см', budHeight: '6-8 см', class: 'махровые ранние' },
    { id: 6, name: 'Christmas Gift', image: 'CHRISTMAS_GIFT.png', height: '50-55 см', budHeight: '8-10 см', class: 'триумф' },
    { id: 7, name: 'Columbus', image: 'Columbus.png', height: '40-45 см', budHeight: '6-8 см', class: 'пионовидные' },
    { id: 8, name: 'Creme Fraiche', image: 'CremeFraiche.png', height: '45-55 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 9, name: 'Delta Storm', image: 'DELTA_STRONG.png', height: '50-60 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 10, name: 'Denmark', image: 'DENMARK.png', height: '50-60 см', budHeight: '7 см', class: 'триумф' },
    { id: 11, name: 'Dynasty', image: 'DYNASTY.png', height: '45-50 см', budHeight: '8 см', class: 'триумф' },
    { id: 12, name: 'First Class', image: 'FirstClass.png', height: '45-55 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 13, name: 'Flaming Flag', image: 'FlamingFlag.png', height: '40-50 см', budHeight: 'до 10 см', class: 'триумф' },
    { id: 14, name: 'Flashpoint', image: 'FlashPoint.png', height: '40-45 см', budHeight: '10-15 см', class: 'махровые' },
    { id: 15, name: 'Gabriella', image: 'Gabriella.png', height: '40-60 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 16, name: 'Icoon', image: 'ICOON.png', height: '55-60 см', budHeight: '5-6 см', class: 'пионовидный' },
    { id: 17, name: 'Laptop', image: 'Laptop.png', height: '40-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 18, name: 'Lincoln', image: 'Lincoln.png', height: 'до 50 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 19, name: 'Montezuma', image: 'Montezuma.png', height: '50-60 см', budHeight: '7-8 см', class: 'триумф' },
    { id: 20, name: 'Mosni', image: 'Mosni.png', height: '45-50 см', budHeight: '6-9 см', class: 'триумф' },
    { id: 21, name: 'Neper', image: 'Neper.png', height: '45-55 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 22, name: 'Novi Sun', image: 'NOVI_SUN.png', height: '40-50 см', budHeight: '6-10 см', class: 'триумф' },
    { id: 23, name: 'Pink Ardur', image: 'PINK_ARDOUR.png', height: '45-55 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 24, name: 'Queensday', image: 'Queensday.png', height: '40-45 см', budHeight: '6-8 см', class: 'махровые пионовидные' },
    { id: 25, name: 'Red Solder', image: 'RedSolder.png', height: '50-60 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 26, name: 'Red Stone', image: 'RedStone.png', height: '35-50 см', budHeight: '6-8 см', class: 'триумф' },
    { id: 27, name: 'Scarlet Verona', image: 'ScarletVerona.png', height: '35-45 см', budHeight: '5-7 см', class: 'махровые ранние' },
    { id: 28, name: 'Showdown', image: 'Showdown.png', height: '35-40 см', budHeight: '6-7 см', class: 'триумф' },
    { id: 29, name: 'Strong Gold', image: 'STRONG_GOLD.png', height: '50-70 см', budHeight: '7-9 см', class: 'триумф' },
    { id: 30, name: 'Strong Love', image: 'STRONG_LOVE.png', height: '50-55 см', budHeight: '6-10 см', class: 'триумф' },
    { id: 31, name: 'Supermodel', image: 'SUPER_MODEL.png', height: '50-55 см', budHeight: '8 см', class: 'триумф' },
    { id: 32, name: 'Valdivia', image: 'VALDIVIA.png', height: '40-45 см', budHeight: '5 см', class: 'махровый' },
    { id: 33, name: 'Verandi', image: 'Verandi.png', height: '40-50 см', budHeight: '5-6 см', class: 'триумф' },
    { id: 34, name: 'White Flag', image: 'WhiteFlag.png', height: '35-45 см', budHeight: '6-7 см', class: 'триумф' },
    { id: 35, name: 'White Marvel', image: 'WhiteMarvel.png', height: '35-50 см', budHeight: '6-8 см', class: 'простые ранние' }
];

// ID проданных тюльпанов.
// Чтобы отметить товар проданным — добавьте его id в этот массив.
// Пример: const soldOutIds = [3, 7, 12];
const soldOutIds = [];

/**
 * Формирует HTML для одной характеристики товара.
 * Если значение пустое — возвращает пустую строку (пункт не выводится).
 */
function buildSpecItem(label, value) {
    if (!value || !String(value).trim()) return '';
    return `<li>${label}: ${value}</li>`;
}

// Функция для рендеринга товаров
function renderProducts() {
    const productsContainer = document.querySelector('.products-items');
    if (!productsContainer) return;

    let html = '';
    tulipsData.forEach(tulip => {
        const isSoldOut = soldOutIds.includes(tulip.id);
        const specsHtml =
            buildSpecItem('Высота', tulip.height) +
            buildSpecItem('Высота бутона', tulip.budHeight) +
            buildSpecItem('Класс', tulip.class);

        html += `
            <div class="product${isSoldOut ? ' sold-out' : ''}" id="${tulip.id}">
                <div class="product-image">
                    <img src="images/${tulip.image}" alt="${tulip.name}">
                </div>
                <div class="product-title">
                    ${tulip.name}
                </div>
                <div class="product-text">
                    <ul>${specsHtml}</ul>
                </div>
                <span>${tulip.id}</span>
            </div>
        `;
    });

    productsContainer.innerHTML = html;
}

/**
 * Логика кнопки заказа на мобильных (≤ 864px):
 * изначально закреплена внизу экрана (fixed),
 * при докрутке до футера — встаёт в поток перед футером,
 * при возврате наверх — снова закрепляется внизу.
 */
function initOrderDocking() {
    const orderWrap = document.querySelector('.order-wrap');
    const footer = document.querySelector('.footer');
    if (!orderWrap || !footer) return;

    const mobileQuery = window.matchMedia('(max-width: 864px)');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!mobileQuery.matches) {
                    // на десктопе класс не нужен
                    orderWrap.classList.remove('is-docked');
                    return;
                }
                if (entry.isIntersecting) {
                    // футер виден → кнопка встаёт в поток перед футером
                    orderWrap.classList.add('is-docked');
                } else {
                    // футер скрыт → кнопка снова fixed внизу
                    orderWrap.classList.remove('is-docked');
                }
            });
        },
        { threshold: 0.01 }
    );

    observer.observe(footer);

    // при переходе через границу 864px сбрасываем состояние
    mobileQuery.addEventListener('change', () => {
        orderWrap.classList.remove('is-docked');
    });
}

window.onload = function () {
    // Рендерим товары
    renderProducts();

    // Обновляем год в футере
    document.querySelector('.rights span').innerText = (new Date()).getFullYear();

    // Переупорядочиваем проданные товары (в конец списка)
    reorderSoldItems();

    // Док-логика кнопки заказа на мобильных
    initOrderDocking();

    // Telegram ссылки
    document.getElementById('telegram-link-one').addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumberOne = '+375296855655';
        window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberOne);
    });

    document.getElementById('telegram-link-two').addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumberTwo = '+375296175665';
        window.location.href = 'https://t.me/' + encodeURIComponent(phoneNumberTwo);
    });

    // Viber ссылки
    document.getElementById('viber-link-one').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'viber://chat?number=375296855655';
    });

    document.getElementById('viber-link-two').addEventListener('click', function (event) {
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