let cells = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#reset");
let restartBtn = document.querySelector("#restart");
let winnerMsg = document.querySelector(".winner-msg");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4 ,8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const restart = () => {
    turn0 = true;
    enableCell();
    winnerMsg.classList.add("hide");
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        console.log("Box was Clicked");
        if (turn0) {
            cell.innerText = "O";
            turn0 = false;
        } else {
            cell.innerText = "X";
            turn0 = true;
        }
        cell.disabled = true;
        isWinner();
    });
});


const isWinner = () => {
    for (let pattern of winPatterns) {
        cell1Val = cells[pattern[0]].innerText;
        cell2Val = cells[pattern[1]].innerText;
        cell3Val = cells[pattern[2]].innerText;

        if (cell1Val !== "" && cell2Val !== "" && cell3Val !== "") {
            if (cell1Val === cell2Val && cell2Val === cell3Val) {
                console.log("Winner " + cell1Val);
                showWinner(cell1Val);
            }
        }
    }
};

const disableCell = () => {
    for(let cell of cells){
        cell.disabled = true;
    }
}

const enableCell = () => {
    for(let cell of cells){
        cell.disabled = false;
        cell.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrats! Winner is ${winner}`;
    winnerMsg.classList.remove("hide");
    disableCell();
};


resetBtn.addEventListener("click", restart);

restartBtn.addEventListener("click",restart);
