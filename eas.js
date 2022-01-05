function grid(x,y) {
    const container = document.getElementById('grid');
    for (i=0; i < y; i++) {       
        for (j=0; j < x; j++) {
            let ccell = document.createElement('div');
            ccell.setAttribute('class','row');
            //ccell.innerHTML = 'cell';
            container.appendChild(ccell);
        };
    };
};

function changeColor() {
    let block = document.getElementsByClassName('row');
    for (i=0; i < block.length; i++) {
        let cell = block[i];
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
            cell.style.cursor = 'pointer';
        });
    };
};

function clearBoard() {
    let clear = document.getElementsByClassName('row');
    for (i=0; i < clear.length; i++) {
        let cell = clear[i];
        cell.style.backgroundColor = 'rgb(145, 145, 145)';
//        cell.style.width = cellWidth;
        };
}


const resetB = document.querySelector('#reset');
resetB.addEventListener('click', () => {
//    let size = prompt('Enter grid size');
//    cellWidth = size / 100 + '%';
    clearBoard();
    //grid(size, size);
});

grid(75,75);
changeColor();
