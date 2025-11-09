const TOTAL_CELLS = 40;
const VISITS = new Array(TOTAL_CELLS).fill(0);
const CELL_NAMES = [
    "Вперёд",
    "ул. Житная",
    "Общественная казна",
    "ул. Нагатинская",
    "Подоходный налог",
    "Рижская Ж/Д",
    "Варшавское шоссе",
    "Шанс",
    "ул. Огарева",
    "ул. Первая парковая",
    "Тюрьма",
    "ул. Полянка",
    "Электростанция",
    "ул. Сретенка",
    "Ростовская наб.",
    "Курская Ж/Д",
    "Рязанский проспект",
    "Общественная казна",
    "ул. Вавилова",
    "Рублевское шоссе",
    "Бесплатная стоянка",
    "ул. Тверская",
    "Шанс",
    "ул. Пушкинская",
    "Площадь Маяковского",
    "Казанская Ж/Д",
    "ул. Грузинский вал",
    "ул. Чайковского",
    "Водопровод",
    "Смоленская площадь",
    "Отправляйтесь в тюрьму",
    "ул. Щусева",
    "Гоголевский бульвар",
    "Общественная казна",
    "Кутузовский проспект",
    "Ленинградская Ж/Д",
    "Шанс",
    "ул. Малая бронная",
    "Сверхналог",
    "ул. Арбат",
];
let position = 0;
let escapeAttempt = 0;
let isPrisoner = false;

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

// Бросить кубик
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Бросить кубики
function rollDices() {
    const dice1 = rollDice();
    const dice2 = rollDice();

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

// Симулировать монополию
function simulateMonopoly(numTurns) {
    for (let turn = 0; turn < numTurns; turn++) {
        const { sum: diceSum } = rollDices();

        changePositionAfterDicesRoll(diceSum);
        if (position === 10 && isPrisoner) {
            tryToEscape();
        } else if (position === 30) {
            goToPrison();
        }
    }
    return calculateProbabilities();
}

// Логировать результаты
function logResults(numTurns, probabilities) {
    let totalProbability = 0;

    console.log(`Результаты симуляции (${numTurns.toLocaleString('ru-RU')} ходов):`);
    console.log('');
    for (let i = 0; i < TOTAL_CELLS; i++) {
        const probability = probabilities[i];
        const cellNumber = i.toString().padStart(2, '0');

        totalProbability += probability;
        console.log(`Клетка ${cellNumber}:`, calculatePercent(probability), `\t("${CELL_NAMES[i]}")`);
    }
    console.log('');
    console.log('Сумма вероятностей:', calculatePercent(totalProbability));
    console.log('');
}

// Запустить симуляцию
function runSimulation() {
    console.time('Время симуляции');
    console.log('Запуск симуляции')
    const numTurns = 10_000_000;
    const probabilities = simulateMonopoly(numTurns);

    logResults(numTurns, probabilities);
    console.timeEnd('Время симуляции');
}

runSimulation();