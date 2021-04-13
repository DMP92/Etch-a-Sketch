
var etchGrid = document.querySelector('.etchGrid');
var grid = document.createElement('div');
grid.setAttribute('class', 'grid');


function gridCreation(num) {
    
for (i = 1; i <= num; i++) {
    grid = document.createElement('div');
    grid.style.cssText = "border: 1px solid black;   width: 80px; height: 80px;";
    etchGrid.appendChild(grid);
    
}

for (i = 1; i <= num; i++) {
    grid = document.createElement('div');   
    grid.style.cssText = "border: 1px solid black; width: 80px; height: 80px;";
    etchGrid.appendChild(grid);
    
}

for (i = 1; i <= num; i++) {
    grid = document.createElement('div');  
    grid.style.cssText = "border: 1px solid black;  width: 80px; height: 80px;";
    etchGrid.appendChild(grid);
    
}

for (i = 1; i <= num; i++) {    
    grid = document.createElement('div');  
    grid.style.cssText = "border: 1px solid black;  width: 80px; height: 80px;";
    etchGrid.appendChild(grid);
}
}

gridCreation(10);


let colorArray = [
     "Orange", 
     "Blue", 
     "Red",
     "Gray",
     "Yellow",
     "Brown", 
     "Green", 
     "Pink", 
     "Black"
    ];

    function colorRandomizer() {
        let colors = colorArray[Math.floor(Math.random() * colorArray.length)];
        grid.style.backgroundColor = colors;
        
    }
    


grid.addEventListener('mouseover', colorRandomizer, true);