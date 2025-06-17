const grid = document.getElementById("grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCell");
let defaultSize = 16;
// let oldDim = 16;

function buildGrid(dim) {
    grid.innerHTML = "";

    let cellWidth = 100 / dim // in % of container
    makeRows(dim, cellWidth);
    makeColumns(dim, cellWidth);
};

function makeRows(noRows, cellWidth) {
    for (let i=0; i < noRows; i++){
        let row = document.createElement("div");
        grid.appendChild(row).className = "gridRow";
    }
};

function makeColumns(noColumns, cellWidth) {
    for (let i=0; i<rows.length; i++) {
        for (let j=0; j < noColumns; j++){
            let newCell = document.createElement("div");
            newCell.className = "gridCell";
            newCell.style.width = `${cellWidth}%`;
            rows[i].appendChild(newCell);
        }
    }
};

// Too much overhead causing race condition. Less overhead by deleting grid and rebuilding.

// function ammendRows(noRows) {
//     if (rows.length > noRows) {
//         while (rows.length > noRows) {
//             grid.removeChild(rows[rows.length - 1]);
//         }   
//     }
//     else {
//         while (rows.length < noRows) {
//             let row = document.createElement("div");
//             grid.appendChild(row).className = "gridRow";
//         }   
//     }
// }

// function ammendColumns(noColumns) {
//     if (oldDim > noColumns){
//         for (let i=0; i<rows.length; i++){
//             for (let j=oldDim-1; j>=noColumns; j--){
//                 let cellsRemove = rows[i].getElementsByClassName("gridCell");
//                 rows[i].removeChild(cellsRemove[j]);
//             }
//         }
//     }
//     else {
//         for (let i=0; i<noColumns-1; i++) {
//             for (let j=oldDim; j < noColumns; j++){
//                 let newCell = document.createElement("div");
//                 rows[i].appendChild(newCell).className = "gridCell";
//             }
//         }
//         for (let i=0; i<noColumns; i++){
//             let newCell = document.createElement("div");
//             rows[noColumns - 1].appendChild(newCell).className = "gridCell";
//         }
//     }
// }

// function amendGrid(dim) {
//     oldDim = rows.length;
//     ammendRows(dim);
//     ammendColumns(dim);
// }

// slider

var output = document.getElementById("demo");
var sliderObj = document.getElementById("myRange");

var getSliderVal = sliderObj.addEventListener("input", function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right,rgb(173, 204, 250) 0%,rgb(142, 186, 248) ' + value + '%, #ddd ' + value + '%, #ddd 100%)';
    output.innerHTML = `${this.value}x${this.value}`;
});

var setSliderGrid = sliderObj.addEventListener("input", function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100;
    buildGrid(this.value); 
});

buildGrid(defaultSize);