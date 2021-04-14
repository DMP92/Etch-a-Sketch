
let etchGrid = document.getElementById('etchGrid');





function gridCreation(num) {
    for (let i = 1; i <= num; i++) {
        const grid = document.createElement('div');
        grid.classList="grid";
        grid.addEventListener('mouseover', rGB);
        etchGrid.appendChild(grid);  
    }
}
gridCreation(100);
        
function rGB(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let opacity = Math.random();
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
rGB();




    
        
 
   



