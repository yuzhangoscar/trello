const draggableOne = document.getElementById('draggable-1');
const draggableTwo = document.getElementById('draggable-2');
const draggableThree = document.getElementById('draggable-3');
const dropzoneOne = document.getElementById('dropzone-1');

function dragstartHandler(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
}

function dragoverHandler(event) {
    event.preventDefault();
}

function dropHandler(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    event.target.appendChild(draggableElement);
    event.dataTransfer.clearData();
}

draggableOne.addEventListener('dragstart', dragstartHandler);
draggableTwo.addEventListener('dragstart', dragstartHandler);
draggableThree.addEventListener('dragstart', dragstartHandler);
dropzoneOne.addEventListener('dragover', dragoverHandler);
dropzoneOne.addEventListener('drop', dropHandler);
