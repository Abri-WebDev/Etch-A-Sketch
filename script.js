const grid = document.querySelector('.grid');
const apply = document.querySelector('.apply');
const reset = document.querySelector('.reset');
let gridSize = document.querySelector('.gridSize');
let input = document.querySelector('.input');
let gridSizeInput = 10;
let base = document.getElementById('base');
const randomRGB = document.querySelector('.randomRGB');

function handleRandomColor() {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.documentElement.style.setProperty(`--base`, randomColor);
    resetSetting();
}

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

function resetSetting () {

    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
        }
        createGrid(gridSizeInput);
}

function handleUpdate() {
    if (this.name !== "base") {
        return; 
    }
    const suffix = this.dataset.sizing || '';
    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    resetSetting();

    if (randomRGB.classList.contains('active')) {
        randomRGB.classList.remove('active');
    }
}

function reloadPage(){
    window.location.reload();
 }

input.addEventListener("input", (e) => {
    gridSizeInput = e.target.value;
    gridSize.textContent = `${gridSizeInput}x${gridSizeInput}`
    console.log('grid size input is', gridSizeInput)

})

grid.addEventListener('mouseover', (e) => {
    if (e.target.matches('.box')) {
       if (!randomRGB.classList.contains('active')) {
        e.target.classList.add('active');
      } else {
        e.target.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
       randomRGB.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        }
   }
})

randomRGB.addEventListener('click', (e) => {
    randomRGB.classList.toggle('active');
    handleRandomColor();
});

base.addEventListener('change', handleUpdate);
apply.addEventListener('click', resetSetting);
reset.addEventListener('click', reloadPage);
createGrid(gridSizeInput);
