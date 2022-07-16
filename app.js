const draggableOne = document.getElementById('draggable-1');

function dragstartHandler(event) {
    let img = new Image();
    img.src='giphy.gif';
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.setDragImage(img, 10, 10);
}

draggableOne.addEventListener('dragstart', dragstartHandler);
draggableOne.addEventListener('dragend', ()=> console.log('dragging ends'));