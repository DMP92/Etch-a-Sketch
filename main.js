grid = document.createElement('div');
grid.classList="grid";
let currentGrid = document.querySelector('grid');
let etchGrid = document.getElementById('etchGrid');    
let allGrids = document.querySelectorAll('div');
let eachGrid = document.getElementsByClassName('grid');
let etchContainer = document.getElementById('etchContainer');
let off = "off";
let on = "on";
var clicked1 = 'off';
var clicked2 = 'off';
var clicked3 = 'off';
let standard = 'on';

// Standard Grid and colors


window.addEventListener('load', makeGrid(35));

function makeGrid(cell) {
    for (let i = 0; i < (cell * cell); i++) {
        let grid = document.createElement('div');
        grid.classList = 'grid';
        etchGrid.style.cssText = 'background-color: rgba(255, 255, 255, 0.85)';
        etchGrid.style.gridTemplateColumns = `repeat(${cell}, 1fr)`;
        etchGrid.style.gridTemplateRows = `repeat(${cell}, 1fr)`;
        etchGrid.appendChild(grid);
    }
    
}



// Custom Grid Sizing

let customButton = document.querySelector('.custom');
customButton.onclick = () => {
    gridPrompt();
    
}

function gridPrompt() {
    removeAllChildNodes(etchGrid);
    cleanSlate();
    let cell = prompt("Enter The Size Of Your Grid", "Any Number From 2 - 64");
    if (cell <= 1 || cell > 65){
        alert("Invalid Grid Size. (2 - 64 only)");
    } else {
        let grid = document.createElement('div');
        grid.classlist = 'grid';
        let etchGrid = document.getElementById('etchGrid');
        makeGrid(cell);
    }
} 

function clearedUpGrid(){
    
        grid = document.createElement('div');
        grid.classList = "grid";
        
        etchGrid.style.gridTemplateColumns = `repeat(0, 1fr)`;
        etchGrid.style.gridTemplateRows = `repeat(0, 1fr)`;
    

}


// Color Scheme #1 
//-----------------------------------------------
let sunset = ['#212a51', '#404465', '#654e7a', '#944b76', '#b74b75', '#e86a6e', '#d06b65', '#e68a75', '#ee9c6c', '#ee9b6d', '#fdba5f',  '#f3d970', '#f3d970', '#f1ec9b', '#fdded9'];
let firstColor = document.querySelector('.colorOne');

firstColor.addEventListener('click', () => {
    standard = off;
    clicked1 = on;
    clicked2 = off;
    clicked3 = off;
})





// 'Earthy' - Color Scheme #2 
//-----------------------------------------------
let secondColor = document.querySelector('.colorTwo');

let earthy = ['#403164', '#332354', '#232d60', ' #4c4799', '#66689b', '#252e4b', '#03568e', '#03568b', '#52b7c4',' #a4d3b4', '#4ca06f', '#89c291', '#a8d293', '#85c554', '#4da645'];

function earthyColor(e) {
    earth = Math.floor(Math.random() * earthy.length);
    e.target.style.backgroundColor = `${earthy[earth]}`; 
}  

secondColor.addEventListener('click', () => {
    standard = "off";
    clicked1 = "off";
    clicked2 = "on"; 
    clicked3 = "off";
    colorizeGrid;
    
})




// 'Gray Scale' - Color Scheme #3
//-----------------------------------------------
let thirdColor = document.querySelector('.colorThree');
thirdColor.addEventListener('click', third);



function third() {
    standard = 'off';
    clicked1 = 'off';
    clicked2 = 'off';
    clicked3 = 'on';
    colorizeGrid;
}


// Clears the grid 
// ---------------------------------------------

function cleanSlate() {
    let allGrids = document.getElementsByClassName('grid');

    for (let i = 0; i < allGrids.length; i++) {
        allGrids[i].style.backgroundColor = '';
    }    
}    


let clear = document.querySelector('.btnClear');
clear.onclick = () => cleanSlate();

function cleanGrid() {
    grid = document.querySelector('.div');

    grid.etchGrid.removeChild(grid);
    
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}


// Logic for color scheme switches
// ----------------------------------------------------------

function colorizeGrid(e) {
 
    if (clicked1 == "on") {
        
        sun = Math.floor(Math.random() * sunset.length);
        e.target.style.backgroundColor = `${sunset[sun]}`;
        
     

    }else if (clicked2 == "on") {
        earth = Math.floor(Math.random() * earthy.length);
        e.target.style.backgroundColor = `${earthy[earth]}`;
     

    } else if (clicked3 == "on") {
       
        let currentOpacity = Number(e.target.style.backgroundColor.slice(-4, -1));
        let coloredOpacity = e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        let fullOpacity = e.target.style.backgroundColor = 'rgba(0, 0, 0)';

        if (currentOpacity > .9) {
            e.target.style.backgroundColor = `rgba(0, 0, 0, .1)`;
        } else if (currentOpacity <= .9) {
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + .1})`
        } else if (currentOpacity = fullOpacity) {
            e.target.style.backgroundColor = `${fullOpacity}`;
        }


        if (coloredOpacity > 1) {
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 1})`
        }
    } else {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor += `rgba(${red}, ${green}, ${blue})`;
            
            
        }
        
    }
    
    allGrids.forEach(grids => grids.addEventListener('mouseover', colorizeGrid));
    
/*
Each time there is a mouseover:
take the color that already exists - add .1 / .2 in opacity

*/
