let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId) {
    if (argMoveId === '1') {
        return 'kamień';
    } else if (argMoveId === '2') {
        return 'nożyce'
    } else if (argMoveId === '3') {
        return 'papier'
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce')) {
        printMessage('Ty wygrywasz!');
    } else if ( (argComputerMove === 'papier' && argPlayerMove === 'kamień') || (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'papier')) {
        printMessage('Tym razem przegrywasz :(');
    } else if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
    }
}

displayResult(computerMove, playerMove);



