var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickDog = document.getElementById('js-playerPick_dog'),
    pickCat = document.getElementById('js-playerPick_cat'),
    pickHamster = document.getElementById('js-playerPick_hamster');

pickDog.addEventListener('click', function () { playerPick('Dog') });
pickCat.addEventListener('click', function () { playerPick('Cat') });
pickHamster.addEventListener('click', function () { playerPick('Hamster') });

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    confetti = document.getElementById('js-confetti');

function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            confetti.style.display = 'none';
            break;
        case 'ended':
            newGameBtn.innerText = 'Play again';
            confetti.style.display = 'block';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
            confetti.style.display = 'block';
    }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name: ', 'Gamer name');
    if (player.name) {
        player.score = 0;
        computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
    }
}



Math.floor(Math.random()*3)

function getComputerPick() {
    var possiblePicks = ['Dog','Cat', 'Hamster'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';
    } else if (
        (computerPick == 'Cat' && playerPick == 'Hamster') ||
        (computerPick == 'Hamster' && playerPick == 'Dog') ||
        (computerPick == 'Dog' && playerPick == 'Cat'))
    {
        winnerIs = 'computer';
    }
    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!"
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    
    setGamePoints();
    
    if(computer.score == 10 || player.score == 10) {
        gameState = 'ended';
        setGameElements();
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}


