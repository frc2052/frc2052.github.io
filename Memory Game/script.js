const teamNumbers = ['2052', '2169', '2502', '6045', '3100', '2491', '2129', '2472', '5913'];
const teamNames = ['KnightKrawler', 'KING TeC', 'Talon Robotics', 'Sabre Robotics', 'Lightning', 'NoMythic', 'Ultraviolet', 'Centurions', 'Patriotics'];

var firstCard = null
var secondCard = null
var canFlip = true
var matches = 0
var moves = 0
var seconds = 0
var timeRunning = false
var timerInterval

function startGame() {
    var gameBoard = document.getElementById("gameBoard")

    clearInterval(timerInterval)
    gameBoard.innerHTML = ""

    var cards = teamNumbers.concat(teamNames)
    cards.sort(function () {
        return 0.5 - Math.random()
    })

    for (var i = 0; i < cards.length; i++) {
        var card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<div class="card-front"><img src="https://www.team2052.com/assets/images/logo/logo-sm.png" alt="Card front"></div>
                <div class="card-back"><span>${cards[i]}</span></div>`
        card.onclick = flipCard
        card.dataset.text = cards[i]
        gameBoard.appendChild(card)
    }

    firstCard = null
    secondCard = null
    canFlip = true
    matches = 0
    moves = 0
    seconds = 0
    timeRunning = false

    updateStats()
    document.getElementById("winModal").classList.remove("show")
}

function flipCard() {
    if (!canFlip || this.classList.contains("flipped") || this.classList.contains("matched")) return

    if (!timeRunning) startTimer()
    this.classList.add("flipped")

    if (firstCard === null) {
        firstCard = this
    } else {
        secondCard = this
        canFlip = false
        moves++
        updateStats()
        checkMatch()
    }
}

function checkMatch() {
    var firstCardText = firstCard.dataset.text
    var secondCardText = secondCard.dataset.text

    var match = teamNumbers.indexOf(firstCardText) == teamNames.indexOf(secondCardText)
    if (teamNumbers.indexOf(firstCardText) == -1 && teamNames.indexOf(secondCardText) == -1) {
        match = teamNames.indexOf(firstCardText) == teamNumbers.indexOf(secondCardText)
    }
    if (match) {
        setTimeout(function () {
            firstCard.classList.add("matched")
            secondCard.classList.add("matched")
            matches++
            updateStats()
            resetCards()

            if (matches === teamNumbers.length) endGame()
        }, 500)
    } else {
        setTimeout(function () {
            firstCard.classList.remove("flipped")
            secondCard.classList.remove("flipped")
            resetCards()
        }, 1000)
    }
}

function resetCards() {
    firstCard = null
    secondCard = null
    canFlip = true
}

function startTimer() {
    timeRunning = true
    timerInterval = setInterval(function () {
        seconds++
        updateStats()
    }, 1000)
}

function updateStats() {
    var minutes = Math.floor(seconds / 60)
    var remainingSeconds = String(seconds % 60).padStart(2, "0")

    document.getElementById("movesValue").textContent = moves
    document.getElementById("timeValue").textContent = minutes + ":" + remainingSeconds
    document.getElementById("matchesValue").textContent = matches + "/" + teamNumbers.length
}

function newGame() {
    startGame()
}

function endGame() {
    timeRunning = false
    clearInterval(timerInterval)
    document.getElementById("finalMoves").textContent = moves
    document.getElementById("finalTime").textContent = formatTime(seconds)
    document.getElementById("winModal").classList.add("show")
}

function formatTime(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60)
    var remainingSeconds = String(totalSeconds % 60).padStart(2, "0")
    return minutes + ":" + remainingSeconds
}

startGame()
