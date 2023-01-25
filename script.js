const grid = document.querySelector('.grid');
const apply = document.querySelector('.apply');
const reset = document.querySelector('.reset');
let gridSize = document.querySelector('.gridSize');
let input = document.querySelector('input');
let gridSizeInput = 0;

function createDiv (gridSizeInput) {
    const div = document.createElement('div');
    div.style.width = `${gridSizeInput}px`
    div.style.height = `${gridSizeInput}px`
    div.classList.add('active');
    return div;
}



input.addEventListener("input", (e) => {
    gridSizeInput = e.target.value;
    gridSize.textContent = `${gridSizeInput}x${gridSizeInput}`
    console.log('grid size input is', gridSizeInput)
})
