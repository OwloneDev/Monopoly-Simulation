const TOTAL_CELLS = 40;
const VISITS = new Array(TOTAL_CELLS).fill(0);
const CELLS = [
    { name: "Вперёд" },
    {
        name: "ул. Житная",
        cost: 60,
        house_cost: 50,
        rent: 2,
        rent_set: 4,
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
        rent_set: 8,
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
        rent_set: 12,
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
        rent_set: 12,
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
        rent_set: 16,
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
        rent_set: 20,
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
        rent_set: 20,
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
        rent_set: 24,
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
        rent_set: 28,
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
        rent_set: 28,
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
        rent_set: 32,
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
        rent_set: 36,
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
        rent_set: 36,
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
        rent_set: 40,
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
        rent_set: 44,
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
        rent_set: 44,
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
        rent_set: 48,
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
        rent_set: 52,
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
        rent_set: 52,
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
        rent_set: 56,
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
        rent_set: 70,
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
        rent_set: 100,
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

// Логировать результаты
function logResults(numTurns, probabilities) {
    const cellProbabilities = probabilities.map((prob, index) => ({
        cell: index,
        prob: prob
    }));

    console.log(`Результаты симуляции (${numTurns.toLocaleString('ru-RU')} ходов):`);
    console.log('');
    cellProbabilities.sort((a, b) => b.prob - a.prob);
    cellProbabilities.forEach(({ cell, prob }, index) => {
        const indexNumber = padStart(index + 1);
        const cellNumber = padStart(cell);
        const element = CELLS[cell];
        let info = `${indexNumber}. Клетка ${cellNumber}: ${calculatePercent(prob)} \t("${element.name}")`;

        if (element.cost !== undefined)
            info = `${info} +${element.cost}`;
        console.log(info);
    });
    console.log('');
}

// Запустить симуляцию
function runSimulation() {
    console.time('Время симуляции');
    console.log('Запуск симуляции');

    const numTurns = 100_000_000;
    const probabilities = simulateMonopoly(numTurns);

    logResults(numTurns, probabilities);
    console.timeEnd('Время симуляции');
}

runSimulation();