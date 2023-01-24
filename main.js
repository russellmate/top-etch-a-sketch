const container = document.querySelector('.grid-container');

let userChoice = prompt('Enter grid size (1 - 100): ');
if (userChoice < 1 || userChoice > 100) {
	prompt('Please enter a valid number (1 - 100): ');
	12;
} else {
	userChoice = userChoice;
}

let gridSize = userChoice * userChoice;
for (let i = 0; i < gridSize; i++) {
	let square = document.createElement('div');
	square.classList.add('grid-square');
	container.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
	container.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
	container.appendChild(square);
}

let squares = document.querySelectorAll('.grid-square');

const random = document
	.querySelector('#random')
	.addEventListener('click', () => {
		squares.forEach(square => {
			const randomColor = Math.floor(Math.random() * 16777215).toString(
				16
			);
			square.addEventListener(
				'mouseover',
				() => (square.style.backgroundColor = '#' + randomColor)
			);
		});
	});

const standard = document
	.querySelector('#standard')
	.addEventListener('click', () => {
		squares.forEach(square => {
			square.addEventListener(
				'mouseover',
				() => (square.style.backgroundColor = 'black')
			);
		});
	});

const eraser = document
	.querySelector('#eraser')
	.addEventListener('click', () => {
		squares.forEach(square => {
			square.addEventListener(
				'mouseover',
				() => (square.style.backgroundColor = 'rgb(230, 203, 176)')
			);
		});
	});

const reset = document.querySelector('#reset').addEventListener('click', () => {
	const clear = prompt(
		'Type "New" to start a new grid. Type "Clear" to clear the current grid.'
	);
	const confirmClear = clear.toLowerCase();
	if (confirmClear === 'new') {
		window.location.reload();
	} else if (confirmClear === 'clear') {
		squares.forEach(square => {
			square.style.backgroundColor = 'rgb(230, 203, 176)';
		});
	}
});
