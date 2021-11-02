console.log('js');

const createElement = (tag, classes, ...content) => {
	return Object.assign(document.createElement(tag), { className: classes, innerText: content });
};

const listener = (element, event, cb) => element.addEventListener(event, cb);
const activate = (element) => element.classList.add('active');
const cells = (value) => (value === 3 ? 100 : value === 2 ? 81 : 49);
const rows = (value) => Math.sqrt(value);

const size = () => {
	let c = cells(parseInt(document.getElementById('001').value));
	let r = rows(c);
	return { c, r };
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
	buildGrid(size().r, size().c);
});
