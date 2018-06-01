const ticTac = {

    board: document.querySelector('.board'),
    cells: document.querySelectorAll('.cell'),
    player: 'X',
    aiPlayer: 'O',
    winCases: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], 
            [0, 4, 8],
            [2, 4, 6],
        ],
    

    winCheck() {
        const c1 = document.getElementById('1');
        const c2 = document.getElementById('2');
        const c3 = document.getElementById('3');
        const c4 = document.getElementById('4');
        const c5 = document.getElementById('5');
        const c6 = document.getElementById('6');
        const c7 = document.getElementById('7');
        const c8 = document.getElementById('8');
        const c9 = document.getElementById('9'); 
    }
};
ticTac.game();