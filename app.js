const draggableOne = document.getElementById('draggable-1');
const dropzoneOne = document.getElementById('dropzone-1');

function dragstartHandler(event) {
    console.log('start');
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
}

function dragoverHandler(event) {
    console.log('dragging over');
    event.preventDefault();
}

function dropHandler(event) {
    event.preventDefault();
    console.log('dropped');
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    event.target.appendChild(draggableElement);
    event.dataTransfer.clearData();
}

draggableOne.addEventListener('dragstart', dragstartHandler);
dropzoneOne.addEventListener('dragover', dragoverHandler);
dropzoneOne.addEventListener('drop', dropHandler);
