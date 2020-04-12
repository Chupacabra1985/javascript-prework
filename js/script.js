function playGame(playerInput) {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove, playerMove;

    console.log('Wylosowana liczba to: ' + randomNumber);

    function getMoveName(argMoveId) {
        if (argMoveId == '1') {
            return 'kamień';
        } else if (argMoveId == '2') {
            return 'nożyce'
        } else if (argMoveId == '3') {
            return 'papier'
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce')) {
            printMessage('Ty wygrywasz!');
        } else if ((argComputerMove === 'papier' && argPlayerMove === 'kamień') || (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'papier')) {
            printMessage('Tym razem przegrywasz :(');
        } else if (argComputerMove === argPlayerMove) {
            printMessage('Remis!');
        }
    }

    displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener('click', function () {
    return playGame(1);
});

document.getElementById("play-scissors").addEventListener('click', function () {
    return playGame(2);
});

document.getElementById("play-paper").addEventListener('click', function () {
    return playGame(3);
});



