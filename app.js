const draggableOne = document.getElementById('draggable-1');

function dragstartHandler(event) {
    let img = new Image();
    img.src='giphy.gif';
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.setDragImage(img, 10, 10);
}

function dragoverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function dropHandler(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.appendChild();
}

draggableOne.addEventListener('dragstart', dragstartHandler);
draggableOne.addEventListener('dragend', ()=> console.log('dragging ends'));