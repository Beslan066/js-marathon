

const dragItem = document.querySelector('.item');
const itemTargets = document.querySelectorAll('.placeholder');




dragItem.addEventListener('dragstart', dragStart);
dragItem.addEventListener('dragend', dragEnd);


for( const   targets of itemTargets) {

    targets.addEventListener('dragover', dragover);

    targets.addEventListener('dragenter', dragenter);

    targets.addEventListener('dragleave', dragleave);

    targets.addEventListener('drop', dragdrop);
}



function dragStart(event) {
    event.target.classList.add('hold');

    setTimeout(() => event.target.classList.add('no-hide'), 0)
}

function dragEnd(event) {
    event.target.className = 'item';
}




function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.append(dragItem);
}