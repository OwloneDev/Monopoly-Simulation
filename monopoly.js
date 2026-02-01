const PLAYERS = 4;
const TOTAL_CELLS = 40;
const VISITS = new Array(TOTAL_CELLS).fill(0);
const STREETS = [];
const CELLS = [
    { name: "Вперёд" },
    {
        name: "ул. Житная",
        cost: 60,
        house_cost: 50,
        rent: 2,
        rent_house_1: 10,
        rent_house_2: 30,
        rent_house_3: 90,
        rent_house_4: 160,
        rent_hotel: 250
    },
    { name: "Общественная казна" },
    {
        name: "ул. Нагатинская",
        cost: 60,
        house_cost: 50,
        rent: 4,
        rent_house_1: 20,
        rent_house_2: 60,
        rent_house_3: 180,
        rent_house_4: 320,
        rent_hotel: 450
    },
    { name: "Подоходный налог" },
    {
        name: "Рижская Ж/Д",
        cost: 200,
        rent_railway_1: 25,
        rent_railway_2: 50,
        rent_railway_3: 100,
        rent_railway_4: 200
    },
    {
        name: "Варшавское шоссе",
        cost: 100,
        house_cost: 50,
        rent: 6,
        rent_house_1: 30,
        rent_house_2: 90,
        rent_house_3: 270,
        rent_house_4: 400,
        rent_hotel: 550
    },
    { name: "Шанс" },
    {
        name: "ул. Огарева",
        cost: 100,
        house_cost: 50,
        rent: 6,
        rent_house_1: 30,
        rent_house_2: 90,
        rent_house_3: 270,
        rent_house_4: 400,
        rent_hotel: 550
    },
    {
        name: "ул. Первая парковая",
        cost: 120,
        house_cost: 50,
        rent: 8,
        rent_house_1: 40,
        rent_house_2: 100,
        rent_house_3: 300,
        rent_house_4: 450,
        rent_hotel: 600
    },
    { name: "Тюрьма" },
    {
        name: "ул. Полянка",
        cost: 140,
        house_cost: 100,
        rent: 10,
        rent_house_1: 50,
        rent_house_2: 150,
        rent_house_3: 450,
        rent_house_4: 625,
        rent_hotel: 750
    },
    {
        name: "Электростанция",
        cost: 150,
        rent_dices_1: 4,
        rent_dices_2: 10
    },
    {
        name: "ул. Сретенка",
        cost: 140,
        house_cost: 100,
        rent: 10,
        rent_house_1: 50,
        rent_house_2: 150,
        rent_house_3: 450,
        rent_house_4: 625,
        rent_hotel: 750
    },
    {
        name: "Ростовская наб.",
        cost: 160,
        house_cost: 100,
        rent: 12,
        rent_house_1: 60,
        rent_house_2: 180,
        rent_house_3: 500,
        rent_house_4: 700,
        rent_hotel: 900
    },
    {
        name: "Курская Ж/Д",
        cost: 200,
        rent_railroad_1: 25,
        rent_railroad_2: 50,
        rent_railroad_3: 100,
        rent_railroad_4: 200
    },
    {
        name: "Рязанский проспект",
        cost: 180,
        house_cost: 100,
        rent: 14,
        rent_house_1: 70,
        rent_house_2: 200,
        rent_house_3: 550,
        rent_house_4: 750,
        rent_hotel: 950
    },
    { name: "Общественная казна" },
    {
        name: "ул. Вавилова",
        cost: 180,
        house_cost: 100,
        rent: 14,
        rent_house_1: 70,
        rent_house_2: 200,
        rent_house_3: 550,
        rent_house_4: 750,
        rent_hotel: 950
    },
    {
        name: "Рублевское шоссе",
        cost: 200,
        house_cost: 100,
        rent: 16,
        rent_house_1: 80,
        rent_house_2: 220,
        rent_house_3: 600,
        rent_house_4: 800,
        rent_hotel: 1000
    },
    { name: "Бесплатная стоянка" },
    {
        name: "ул. Тверская",
        cost: 220,
        house_cost: 150,
        rent: 18,
        rent_house_1: 90,
        rent_house_2: 250,
        rent_house_3: 700,
        rent_house_4: 875,
        rent_hotel: 1050
    },
    { name: "Шанс" },
    {
        name: "ул. Пушкинская",
        cost: 220,
        house_cost: 150,
        rent: 18,
        rent_house_1: 90,
        rent_house_2: 250,
        rent_house_3: 700,
        rent_house_4: 875,
        rent_hotel: 1050
    },
    {
        name: "Площадь Маяковского",
        cost: 240,
        house_cost: 150,
        rent: 20,
        rent_house_1: 100,
        rent_house_2: 300,
        rent_house_3: 750,
        rent_house_4: 925,
        rent_hotel: 1100
    },
    {
        name: "Казанская Ж/Д",
        cost: 200,
        rent_railroad_1: 25,
        rent_railroad_2: 50,
        rent_railroad_3: 100,
        rent_railroad_4: 200
    },
    {
        name: "ул. Грузинский вал",
        cost: 260,
        house_cost: 150,
        rent: 22,
        rent_house_1: 110,
        rent_house_2: 330,
        rent_house_3: 800,
        rent_house_4: 975,
        rent_hotel: 1150
    },
    {
        name: "Новинский бульвар",
        cost: 260,
        house_cost: 150,
        rent: 22,
        rent_house_1: 110,
        rent_house_2: 330,
        rent_house_3: 800,
        rent_house_4: 975,
        rent_hotel: 1150
    },
    {
        name: "Водопровод",
        cost: 150,
        rent_dices_1: 4,
        rent_dices_2: 10
    },
    {
        name: "Смоленская площадь",
        cost: 280,
        house_cost: 150,
        rent: 24,
        rent_house_1: 120,
        rent_house_2: 360,
        rent_house_3: 850,
        rent_house_4: 1025,
        rent_hotel: 1200
    },
    { name: "Отправляйтесь в тюрьму" },
    {
        name: "ул. Щусева",
        cost: 300,
        house_cost: 200,
        rent: 26,
        rent_house_1: 130,
        rent_house_2: 390,
        rent_house_3: 900,
        rent_house_4: 1100,
        rent_hotel: 1275
    },
    {
        name: "Гоголевский бульвар",
        cost: 300,
        house_cost: 200,
        rent: 26,
        rent_house_1: 130,
        rent_house_2: 390,
        rent_house_3: 900,
        rent_house_4: 1100,
        rent_hotel: 1275
    },
    { name: "Общественная казна" },
    {
        name: "Кутузовский проспект",
        cost: 320,
        house_cost: 200,
        rent: 28,
        rent_house_1: 150,
        rent_house_2: 450,
        rent_house_3: 1000,
        rent_house_4: 1200,
        rent_hotel: 1400
    },
    {
        name: "Ленинградская Ж/Д",
        cost: 200,
        rent_railroad_1: 25,
        rent_railroad_2: 50,
        rent_railroad_3: 100,
        rent_railroad_4: 200
    },
    { name: "Шанс" },
    {
        name: "ул. Малая бронная",
        cost: 350,
        house_cost: 200,
        rent: 35,
        rent_house_1: 175,
        rent_house_2: 500,
        rent_house_3: 1100,
        rent_house_4: 1300,
        rent_hotel: 1500
    },
    { name: "Сверхналог" },
    {
        name: "ул. Арбат",
        cost: 400,
        house_cost: 200,
        rent: 50,
        rent_house_1: 200,
        rent_house_2: 600,
        rent_house_3: 1400,
        rent_house_4: 1700,
        rent_hotel: 2000
    },
];
let position = 0;
let doubleCounter = 0;
let escapeAttempt = 0;
let isPrisoner = false;

// Получить рандомное число от 1 до max
function getRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Рассчитать процент
function calculatePercent(value) {
    const percent = (value * 100).toFixed(2);
    return `${percent}%`;
}

// Рассчитать вероятности
function calculateProbabilities() {
    const totalVisits = VISITS.reduce((sum, count) => sum + count, 0);
    const probabilities = VISITS.map(count => count / totalVisits);

    return probabilities;
}

// Рассчитать рейтинг
function calculateRating(currentProfit, previousProfit, payback) {
    const delta = (currentProfit - previousProfit) / previousProfit;

    return 0.7 * currentProfit + 0.2 * (1 / payback) + 0.1 * delta;
}

// Рассчитать средний рейтинг
function calculateAverageRating(rating) {
    const common = 0.1 * rating.common;
    const set = 0.2 * rating.set;
    const house_1 = 0.3 * rating.house_1;
    const house_2 = 0.6 * rating.house_2;
    const house_3 = 0.8 * rating.house_3;
    const house_4 = 0.4 * rating.house_4;
    const hotel = 0.3 * rating.hotel;

    return (common + set + house_1 + house_2 + house_3 + house_4 + hotel) / 2.7;
}

// Рассчитать выгодность улицы
function calculateStreetProfit(element, cell, prob) {
    const streetCost = element.cost;
    const houseCost = element.house_cost;
    const rent = element.rent;
    const expectedIncomePerTurn = {
        common: rent * prob,
        set: rent * 2 * prob,
        house_1: element.rent_house_1 * prob,
        house_2: element.rent_house_2 * prob,
        house_3: element.rent_house_3 * prob,
        house_4: element.rent_house_4 * prob,
        hotel: element.rent_hotel * prob,
    };
    const totalDevelopmentCost = {
        common: streetCost,
        house_1: streetCost + houseCost,
        house_2: streetCost + houseCost * 2,
        house_3: streetCost + houseCost * 3,
        house_4: streetCost + houseCost * 4,
        hotel: streetCost + houseCost * 5,
    };
    const profit = {
        common: expectedIncomePerTurn.common / totalDevelopmentCost.common,
        set: expectedIncomePerTurn.set / totalDevelopmentCost.common,
        house_1: expectedIncomePerTurn.house_1 / totalDevelopmentCost.house_1,
        house_2: expectedIncomePerTurn.house_2 / totalDevelopmentCost.house_2,
        house_3: expectedIncomePerTurn.house_3 / totalDevelopmentCost.house_3,
        house_4: expectedIncomePerTurn.house_4 / totalDevelopmentCost.house_4,
        hotel: expectedIncomePerTurn.hotel / totalDevelopmentCost.hotel,
    };
    const payback = {
        common: 1 / (profit.common * PLAYERS),
        set: 1 / (profit.common * PLAYERS),
        house_1: 1 / (profit.house_1 * PLAYERS),
        house_2: 1 / (profit.house_2 * PLAYERS),
        house_3: 1 / (profit.house_3 * PLAYERS),
        house_4: 1 / (profit.house_4 * PLAYERS),
        hotel: 1 / (profit.hotel * PLAYERS),
    };
    const rating = {
        common: calculateRating(profit.common, profit.common, payback.common),
        set: calculateRating(profit.set, profit.common, payback.set),
        house_1: calculateRating(profit.house_1, profit.set, payback.house_1),
        house_2: calculateRating(profit.house_2, profit.house_1, payback.house_2),
        house_3: calculateRating(profit.house_3, profit.house_2, payback.house_3),
        house_4: calculateRating(profit.house_4, profit.house_3, payback.house_4),
        hotel: calculateRating(profit.hotel, profit.house_4, payback.hotel),
    }
    const street = {
        name: element.name,
        cell: cell,
        rating: calculateAverageRating(rating)
    };

    STREETS.push(street);
}

// Перерасчитать рейтинг улиц
function recalculateRating() {
    let maxRating = 0;

    STREETS.forEach(street => {
        const rating = street.rating;

        if (rating > maxRating) {
            maxRating = rating;
        }
    });
    STREETS.forEach(street => street.rating /= maxRating);
}

// Обновить счётчик дублей
function updateDoubleCounter(isDouble) {
    if (isDouble) {
        doubleCounter++;
    } else {
        doubleCounter = 0;
    }
}

// Добавить ноль для однозначных чисел
function padStart(num) {
    return num.toString().padStart(2, '0');
}

// Бросить кубики
function rollDices() {
    const dice1 = getRandom(6);
    const dice2 = getRandom(6);

    return { sum: dice1 + dice2, isDouble: dice1 === dice2 };
}

// Инкрементировать счётчик посещений
function incrementVisits(index) {
    VISITS[index]++;
}

// Сменить позицию
function changePosition(newPosition) {
    position = newPosition;
    incrementVisits(position);
}

// Сменить позицию после броска кубиков
function changePositionAfterDicesRoll(diceSum) {
    changePosition((position + diceSum) % TOTAL_CELLS);
}

// Попасть в тюрьму
function goToPrison() {
    changePosition(10);
    isPrisoner = true;
}

// Попытаться сбежать из тюрьмы
function tryToEscape() {
    const { sum: diceSum, isDouble: exitDouble } = rollDices();

    if (exitDouble || escapeAttempt == 3) {
        escapeFromPrison(diceSum);
    } else {
        escapeAttempt++;
        incrementVisits(10);
    }
}

// Сбежать из тюрьмы
function escapeFromPrison(diceSum) {
    changePositionAfterDicesRoll(diceSum);
    isPrisoner = false;
    escapeAttempt = 0;
}

// Получить карточку "Общественная казна"
function receiveCommunityChest() {
    switch (getRandom(16)) {
        case 1:
            goToPrison();
            break;
        case 2:
            changePosition(0);
            break;
    }
}

// Получить карточку "Шанс"
function receiveChance() {
    switch (getRandom(16)) {
        case 1:
            goToPrison();
            break;
        case 2:
            changePosition(0);
            break;
        case 3:
            let nearestPublicUtilities;

            if (position == 7) {
                nearestPublicUtilities = 12;
            } else {
                nearestPublicUtilities = 28;
            }
            changePosition(nearestPublicUtilities);
            break;
        case 4, 5:
            let nearestRailwayStation;

            switch (position) {
                case 7:
                    nearestRailwayStation = 5;
                    break;
                case 22:
                    nearestRailwayStation = 25;
                    break;
                case 36:
                    nearestRailwayStation = 35;
                    break;
            }
            changePosition(nearestRailwayStation);
            break;
        case 6:
            changePosition(11);
            break;
        case 7:
            changePosition(position - 3);
            break;
        case 8:
            changePosition(39);
            break;
        case 9:
            changePosition(5);
            break;
        case 10:
            changePosition(24);
            break;
    }
}

// Симулировать монополию
function simulateMonopoly(numTurns) {
    for (let turn = 0; turn < numTurns; turn++) {
        const { sum: diceSum, isDouble: isDouble } = rollDices();

        updateDoubleCounter(isDouble);
        if (doubleCounter < 3) {
            changePositionAfterDicesRoll(diceSum);
        } else {
            goToPrison();
        }
        switch (position) {
            case 2, 17, 33:
                receiveCommunityChest();
                break;
            case 7, 22, 36:
                receiveChance();
                break;
            case 10:
                if (isPrisoner) {
                    tryToEscape();
                }
                break;
            case 30:
                goToPrison();
                break;
        }
    }
    return calculateProbabilities();
}

// Логировать вероятности попасть на клетку
function logProbabilities(numTurns, probabilities) {
    const cellProbabilities = probabilities.map((prob, index) => ({
        cell: index,
        prob: prob
    }));

    console.log(`Результаты симуляции (${PLAYERS + 1} игроков, ${numTurns.toLocaleString('ru-RU')} ходов):`);
    console.log('');
    console.log('> Вероятность попасть на клетку: <');
    cellProbabilities.sort((a, b) => b.prob - a.prob);
    cellProbabilities.forEach(({ cell, prob }, index) => {
        const element = CELLS[cell];
        const indexNumber = `\t${padStart(index + 1)}.`;
        const cellNumber = `Клетка ${padStart(cell)}`;
        const name = `"${element.name}":`.padEnd(30, ' ');
        const probPercent = calculatePercent(prob);

        if (element.house_cost !== undefined) {
            calculateStreetProfit(element, cell, prob);
        }
        console.log(indexNumber, cellNumber, name, probPercent);
    });
    console.log('');
}

// Логировать рейтинг улиц
function logRating() {
    console.log(`> Рейтинг улиц: <`);
    STREETS.sort((a, b) => b.rating - a.rating)
    STREETS.forEach(({ name, cell, rating }, index) => {
        const indexNumber = `\t${padStart(index + 1)}.`;
        const cellNumber = `Клетка ${padStart(cell)}`;
        const streetName = `"${name}":`.padEnd(30, ' ');
        const streetRating = `\t${calculatePercent(rating)}`;

        console.log(indexNumber, cellNumber, streetName, streetRating);
    });
    console.log('');
}

// Запустить симуляцию
function runSimulation() {
    console.time('Время симуляции');
    console.log('Запуск симуляции');

    const numTurns = 100_000_000;
    const probabilities = simulateMonopoly(numTurns);

    logProbabilities(numTurns, probabilities);
    recalculateRating();
    logRating();
    console.timeEnd('Время симуляции');
}

runSimulation();