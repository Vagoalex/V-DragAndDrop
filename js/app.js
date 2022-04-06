const dragItem = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

dragItem.addEventListener('dragstart', dragStart);
dragItem.addEventListener('dragend', dragEnd);

placeholders.forEach(placeholder => {
	placeholder.addEventListener('dragover', dragOver);
	placeholder.addEventListener('dragenter', dragEnter);
	placeholder.addEventListener('dragleave', dragLeave);
	placeholder.addEventListener('drop', dragdrop);
});

function dragStart(event) {
	const item = event.target;
	setTimeout(() => {
		item.classList.add('hide');
	}, 0);
	item.classList.add('hold');
}
function dragEnd(event) {
	const item = event.target;
	// item.classList.remove('hide');
	// item.classList.remove('hold');
	item.className = 'item';
}

function dragOver(event) {
	event.preventDefault();
}
function dragEnter(event) {
	event.target.classList.add('hovered');
}
function dragLeave(event) {
	event.target.classList.remove('hovered');
}
function dragdrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(dragItem);
}
