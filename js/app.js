console.log('js');

const createElement = (tag, classes, ...content) => {
	return Object.assign(document.createElement(tag), { className: classes, innerText: content });
};

const listener = (element, event, cb) => element.addEventListener(event, cb);
const activate = (element) => element.classList.add('active');

const getSize = () => {
	let row = 0;
	let cells = 0;
	const size = parseInt(document.getElementById('001').value);
	if (size === 3) {
		row = 10;
		cells = 100;
	} else if (size === 2) {
		row = 9;
		cells = 81;
	} else if (size === 1) {
		row = 7;
		cells = 49;
	}

	return { row, cells };
};

const buildGrid = (row, cells) => {
	const grid = createElement('div', 'grid');
	for (let i = 1; i <= cells; i++) {
		const cell = createElement('div', 'cell', i);
		cell.style.width = `calc(100% / ${row})`;
		listener(cell, 'click', () => activate(cell));
		grid.appendChild(cell);
	}
	document.querySelector('main').appendChild(grid);
};

const playBtn = document.getElementById('play');
playBtn.addEventListener('click', (event) => {
	document.querySelector('main').innerHTML = '';
	const row = getSize().row;
	const cells = getSize().cells;
	console.log(row, cells);
	buildGrid(row, cells);
});
