let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 3, 6]
];

let board = document.querySelector('.game');

function createCells() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;
        board.appendChild(cell);
    };
};

function comuterTurn() {
    let emptyCells = document.querySelectorAll('.cell:not(.x):not(.o)');
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].classList.add('o');
    emptyCells[randomIndex].innerHTML = 'O';
    if (checkWin('o')) {
        console.log('o wins');
    };
};

createCells();
const cells = document.querySelectorAll('.cell');
circleTurn= false;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});


function handleClick(e) {
    const cell = e.target;
    if(!cell.classList.contains('x') || !cell.classList.contains('o')) {
        cell.classList.add('x');
        cell.innerHTML = 'X';
    };
    if (checkWin('x')) {
        console.log('X wins');
    };
    comuterTurn();
};

function checkWin(symbol) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(symbol);
        })
    });
}

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    createCells();
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });
}
);