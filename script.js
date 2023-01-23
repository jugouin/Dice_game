let activePlayer = 1;
let currentScore = 0;
let P1globalScore = 0;
let P2globalScore = 0;


function ActiveCircle () {
    const circle = document.getElementsByClassName("circle");
    if (activePlayer === 1) {
        circle.className = "active";
    }
    else {
        circle.className = "active";
    }
}

function newGame(){
    activePlayer = 1;
    currentScore = 0;
    P1globalScore = 0;
    P2globalScore = 0;
    document.getElementById(`P1globalScore`).textContent = `0`;
    document.getElementById(`P2globalScore`).textContent = `0`;
    document.getElementById(`P1currentScore`).textContent = `0`;
    document.getElementById(`P2currentScore`).textContent = `0`;
}

function roll() {
    dice();
    currentScore = diceNumber + currentScore;
    let HTMLcurrent = document.getElementById(`P${activePlayer}currentScore`);

    if(diceNumber === 1){
        currentScore = 0;
        HTMLcurrent.textContent = '0';
        switchPlayer();
    }
    
    HTMLcurrent.textContent = `${currentScore}`;

}

function hold(){
    let HTMLglobal = document.getElementById(`P${activePlayer}globalScore`);
    let HTMLcurrent = document.getElementById(`P${activePlayer}currentScore`);

    if (activePlayer === 1){
        P1globalScore = currentScore + P1globalScore;
        HTMLglobal.textContent =`${P1globalScore}`;   
    }
    else {
        P2globalScore = currentScore + P2globalScore;
        HTMLglobal.textContent =`${P2globalScore}`;     
    }
    
    currentScore = 0;
    HTMLcurrent.textContent = `${currentScore}`;

    if(P1globalScore >=100 || P2globalScore >= 100){
        alert(` Le Player ${activePlayer} a gagné la partie !`);
    }

    switchPlayer();
}


function switchPlayer(){

    let player1 = document.getElementById('P1');
    let player2 = document.getElementById('P2');
    

    if (activePlayer === 1){
        activePlayer = 2; 
        player2.innerText =`circle`;
        player1.innerHTML = "";
    }
    else {
        activePlayer = 1;
        player1.innerText =`circle`;
        player2.innerHTML = "";
    }
}

function dice(){

    diceNumber = getRandomeArbitrairy (1, 7);
    function getRandomeArbitrairy(min, max){
        return Math.floor(Math.random() * (max-min) + min);
    }
    let getHtmlDice = document.getElementById('Dice');
    getHtmlDice.innerHTML = `<div class="dice" id="${diceNumber}">
            <img style="height: 100%" src="Dice/dice-${diceNumber}.png"></img></div>`;
}