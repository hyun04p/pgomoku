const DEFAULT_BOARD_SIZE = 20;

const spots = []
let state = []
let turn = "b"

const stateToColor = {
    "e": "none",
    "b": "#000",
    "w": "#bbb"
}


function constructBoard(dim) {
    const GRID_SIZE = 35;

    const boardContainer = document.querySelector("#board-container");

    boardContainer.style.width = GRID_SIZE * dim + "px";
    boardContainer.style.height = GRID_SIZE * dim + "px";

    for (let r = 0; r < dim; r++) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("board-row-container");

        let spotRowContainer = document.createElement("div");
        spotRowContainer.classList.add("spot-row-container");
        spotRowContainer.style.width = GRID_SIZE * (dim-1) + "px";

        let rowSpots = []
        let rowState = []

        for (let c = 0; c < dim; c++) {
            let colContainer = document.createElement("div");
            colContainer.classList.add("board-col-container");
            rowContainer.appendChild(colContainer);

            if (c != dim - 1) {
                let spotColContainer = document.createElement("div");
                spotColContainer.classList.add("spot-col-container");
                spotColContainer.id = "s-" + r + "-" + c; 
                spotColContainer.onclick = generateHandleSpotClick(r, c);
                spotRowContainer.appendChild(spotColContainer);
                rowSpots.push(spotColContainer);
                rowState.push("e");
            }
        }

        boardContainer.appendChild(rowContainer);
        if (r != dim - 1) {
            boardContainer.appendChild(spotRowContainer);
            spots.push(rowSpots);
            state.push(rowState);
        }
    }
}


function updateOneSpot(r, c, turn) {
    spots[r][c].style.backgroundColor = stateToColor[turn];
}


function renderBoard() {
    for (r = 0; r < DEFAULT_BOARD_SIZE - 1; r++) {
        for (c = 0; c < DEFAULT_BOARD_SIZE - 1; c++) {
            spots[r][c].style.backgroundColor = stateToColor[state[r][c]]       
        }
    }
}


const generateHandleSpotClick = (r, c) => () => {
    if (state[r][c] != "e") return;
    state[r][c] = turn;
    updateOneSpot(r, c, turn);

    // toggle turns
    turn = turn == 'b' ? 'w' : 'b';
}


constructBoard(DEFAULT_BOARD_SIZE);