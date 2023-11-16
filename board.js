const DEFAULT_BOARD_SIZE = 20;

const spots = []
let turn = "black"


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
            }
        }

        boardContainer.appendChild(rowContainer);
        if (r != dim - 1) {
            boardContainer.appendChild(spotRowContainer);
            spots.push(rowSpots);
        }
    }
}


const generateHandleSpotClick = (r, c) => () => {
    spots[r][c].style.backgroundColor = turn
    if (turn === "black") {
        turn = "#bbb"
    } else {
        turn = "black"
    }
}

constructBoard(DEFAULT_BOARD_SIZE);