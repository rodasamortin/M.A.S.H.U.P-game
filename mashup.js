function rollNum() {
    var number = Math.random()*(7-1) + 1;
    document.getElementById("d6-diceNumberHere").innerHTML = Math.floor(number);
}