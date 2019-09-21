let container = document.getElementById('grid');
let numSquares = 4;

function createGrid() {

    for (let i = 0; i<numSquares ; i++) {
        for (let j=0 ; j<numSquares ; j++) {
            let createDiv = document.createElement('div');
            createDiv.className = 'square-div';
            createDiv.style.height = 960/numSquares + 'px';
            createDiv.style.width = 960/numSquares + 'px';
            createDiv.id='Block #' + i +',' + j;
            container.appendChild(createDiv);
            document.getElementById('Block #' + i + ',' + j).addEventListener('mouseover' , function () {
                document.getElementById('Block #' + i + ',' + j).style.backgroundColor = 'blue';
            })
            console.log('Inner loop '+ j);
        }
        let lineBreak = document.createElement('br');
        container.appendChild(lineBreak);
        console.log('Outer loop '+i);
    }
}

let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    let squares = container.querySelectorAll('.square-div');

    squares.forEach(function(element) {
        container.removeChild(element);
    })

    let breaks = container.querySelectorAll('br');
    breaks.forEach(function(element) {
        container.removeChild(element);
    })

    numSquares = prompt('How Wide Do You Want the Grid?', 4);
    createGrid();
})

createGrid();
