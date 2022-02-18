const container = document.querySelector('.grid-container');

const randColor = () => {
	return (
		'#' +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0')
			.toUpperCase()
	);
};

function grid() {
	let userChoice = prompt('Choose grid size: (max input 100)');
	parseInt(userChoice);
	if (userChoice > 100) {
		alert(
			'Cannot have over 100 x 100 squares! Please enter a number below 100.'
		);
		setTimeout('location.reload(true);', 1);
	} else {
		document.documentElement.style.setProperty('--columns-row', userChoice);
		for (i = 0; i < userChoice ** 2; i++) {
			const gridSquare = document.createElement('div');
			gridSquare.textContent = '';
			gridSquare.classList.add('grid-square');
			document
				.getElementById('standard')
				.addEventListener('click', function () {
					gridSquare.addEventListener('mouseover', function () {
						gridSquare.setAttribute(
							'style',
							'background-color: white;'
						);
					});
				});
			document
				.getElementById('random')
				.addEventListener('click', function () {
					gridSquare.addEventListener('mouseover', function () {
						gridSquare.style.setProperty(
							'background-color',
							randColor()
						);
					});
				});
			container.appendChild(gridSquare);
		}
	}
}

grid();

const reset = document.getElementById('reset');

reset.onclick = function () {
	window.location.reload();
};
