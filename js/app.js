const ticTac = {

    gameBoard: document.querySelector('.gameBoard'),
    cells: document.querySelectorAll('.cell'),
    onBoard: [],
    player: 'X',
    aiPlayer: 'O',
    // gameOver: false,
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
        const c1 = document.getElementById('one');
        const c2 = document.getElementById('two');
        const c3 = document.getElementById('three');
        const c4 = document.getElementById('four');
        const c5 = document.getElementById('five');
        const c6 = document.getElementById('six');
        const c7 = document.getElementById('seven');
        const c8 = document.getElementById('eight');
        const c9 = document.getElementById('nine'); 
        if (
            c1.value == 'X' && c2.value == 'X' && c3.value == 'X' ||
            c4.value == 'X' && c5.value == 'X' && c6.value == 'X' ||
            c7.value == 'X' && c8.value == 'X' && c9.value == 'X' ||
            c1.value == 'X' && c4.value == 'X' && c7.value == 'X' ||
            c2.value == 'X' && c5.value == 'X' && c8.value == 'X' ||
            c3.value == 'X' && c6.value == 'X' && c9.value == 'X' ||
            c1.value == 'X' && c5.value == 'X' && c9.value == 'X' ||
            c3.value == 'X' && c5.value == 'X' && c7.value == 'X' 
        ) {
            reset();
        } else if (
            c1.value == 'O' && c2.value == 'O' && c3.value == 'O' ||
            c4.value == 'O' && c5.value == 'O' && c6.value == 'O' ||
            c7.value == 'O' && c8.value == 'O' && c9.value == 'O' ||
            c1.value == 'O' && c4.value == 'O' && c7.value == 'O' ||
            c2.value == 'O' && c5.value == 'O' && c8.value == 'O' ||
            c3.value == 'O' && c6.value == 'O' && c9.value == 'O' ||
            c1.value == 'O' && c5.value == 'O' && c9.value == 'O' ||
            c3.value == 'O' && c5.value == 'O' && c7.value == 'O' 
        )
        reset();
    },
    reset () {
        c1.value = '';
        c1.disabled = false;

        c2.value = '';
        c2.disabled = false;

        c3.value = '';
        c3.disabled = false;

        c4.value = '';
        c4.disabled = false;

        c5.value = '';
        c5.disabled = false;

        c6.value = '';
        c6.disabled = false;

        c7.value = '';
        c7.disabled = false;

        c8.value = '';
        c8.disabled = false;

        c9.value = '';
        c9.disabled = false;
    },

    game() {
        this.winCheck();
    }
};
ticTac.game();