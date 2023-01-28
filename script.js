const grid = document.querySelector('.grid');
const apply = document.querySelector('.apply');
const reset = document.querySelector('.reset');
let gridSize = document.querySelector('.gridSize');
let input = document.querySelector('.input');
let gridSizeInput = 10;
let base = document.getElementById('base');

function createDiv (size) {
    const div = document.createElement('div');
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.classList.add('box');
    return div;
}

function createGrid (size) {
    for (let x = 0; x < size; x++) {
        for (let j = 0; j < size; j++) {
            grid.appendChild(createDiv(grid.clientHeight / size));
            console.log('grid is ', grid)
        }
    }
}

function resetBrowser () {

    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
        }
        createGrid(gridSizeInput);

}

input.addEventListener("input", (e) => {
    gridSizeInput = e.target.value;
    gridSize.textContent = `${gridSizeInput}x${gridSizeInput}`
    console.log('grid size input is', gridSizeInput)

})

createGrid(gridSizeInput);

grid.addEventListener('mouseover', (e) => {
   if (e.target.matches('.box')) {
    e.target.classList.add('active');
    console.log('e is ', e)
   }
})

function handleUpdate() {
    if (this.name !== "base") {
        return; 
    }
    const suffix = this.dataset.sizing || '';
    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    resetBrowser();
}

function reloadPage(){
    window.location.reload();
 }

base.addEventListener('change', handleUpdate);
apply.addEventListener('click', resetBrowser)
reset.addEventListener('click', reloadPage)
