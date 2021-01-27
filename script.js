const app = document.querySelector('.container');
const resize = document.querySelector('#resize');
const clear = document.querySelector('#clear');

const defaultSide = 16;

const startUp = () => {
	app.innerHTML = '';
	for (i = 0; i < defaultSide ** 2; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		app.style.gridTemplateColumns = `repeat(16, 1fr)`;
		app.style.gridTemplateRows = `repeat(16, 1fr)`;
		square.id = `${i}`;
		app.appendChild(square);
		square.addEventListener('mouseenter', () => {
			square.style.backgroundColor = 'red';
		});
	}
};

const newGrid = () => {
	const newArea = Number(
		prompt('How Many Squares Per Side in the New Grid?', 16)
	);
	if (newArea > 100 || isNaN(newArea)) {
		alert('Please Enter a Numeric Value Under 100');
		return;
	}
	console.log(newArea);
	app.innerHTML = '';
	for (i = 0; i < newArea ** 2; i++) {
		const newSquare = document.createElement('div');
		newSquare.classList.add('square');
		app.style.gridTemplateColumns = `repeat(${newArea}, 1fr)`;
		app.style.gridTemplateRows = `repeat(${newArea}, 1fr)`;
		newSquare.id = `${i}`;
		app.appendChild(newSquare);
		newSquare.addEventListener('mouseenter', () => {
			newSquare.style.backgroundColor = 'red';
		});
	}
};

resize.addEventListener('click', newGrid);
clear.addEventListener('click', startUp);

startUp();
