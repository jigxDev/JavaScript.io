const box = document.querySelectorAll(".box")
const result = document.querySelector(".result")
const resetBtn  = document.querySelector('.reset-btn')
let indexChance = 0;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

// Don't Overlap
box.forEach(eachBox => {
    eachBox.addEventListener('click', (event) => {
        let clickedBox = event.currentTarget;
        if (clickedBox.innerHTML.trim()) {
            return;
        }
        checkChance(event)
    })
})

// Add "X & O"
function checkChance(event) {
    if(indexChance%2 == 0) {
        event.target.innerHTML = 'X';
        checkWinner();
        indexChance++;
        if (indexChance > 8) {
            endGame()
        }
        console.log(indexChance);
    } 
    else {
        event.target.innerHTML = 'O';
        checkWinner();
        indexChance++;
        if (indexChance > 8) {
            endGame()    
        }
        console.log(indexChance);
    }
}

const checkWinner = () => {
    for (let i = 0; i < winPattern.length; i++) {
        if (box[winPattern[i][0]].innerHTML == 'X' && box[winPattern[i][1]].innerHTML == 'X' && box[winPattern[i][2]].innerHTML == 'X') {
            showWinner("X Master");
            return true;
        } else if (box[winPattern[i][0]].innerHTML == 'O' && box[winPattern[i][1]].innerHTML == 'O' && box[winPattern[i][2]].innerHTML == 'O') {
            showWinner("Almighty O");
            return true;
        } else {
            continue;
        }
    }
}
checkWinner();
function showWinner(name) {
    document.getElementById("winnerName").textContent = name;
    document.getElementById("winnerPopup").style.display = "flex";
}
function resetGame() {
    document.getElementById("noWinnerPopup").style.display = "none";
    document.getElementById("winnerPopup").style.display = "none";
    indexChance = 0;
    box.forEach(everyBox => {
        everyBox.innerText = '';
    })
}
function endGame() {
    document.getElementById('noWinnerPopup').style.display = "flex";
}