// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let status = 0;
let x = 'x';
let y = 'y';
let end = false;

function getData(b) {
	if (status == 0) {
		b.value = x;
		b.disabled = true;
		status = 1;
	} else {
		b.value = y;
		b.disabled = true;
		status = 0
	}
}

function checkWin(button, side) {
	for (let i = 0; i < 6; i+=3) {
		if (button[0 + i].value === side && button[1 + i].value === side && button[2 + i].value === side) {
			end(button, side);
		}
	}

	for (let i = 0; i < 3; i++) {
		if (button[0 + i].value === side && button[3 + i].value === side && button[6 + i].value === side) {
			end(button, side);
		}
	}

	if (button[0].value === side && button[4].value === side && button[8].value === side) {
		end(button, side);
	}

	if (button[2].value === side && button[4].value === side && button[6].value === side) {
		end(button, side);
	}
}

function end(button, side) {
	for(let i = 0; i < length; i++) {
		buttons[i].disabled = true;
	}
	end = true;
	document.querySelector('h1').innerHTML = side + ' wins';
}

let buttons = document.querySelectorAll('#mainframe > input')

let length = buttons.length;
for(let i = 0; i < length; i++) {
	buttons[i].addEventListener('click', () => {
		getData(buttons[i]);
		checkWin(buttons, x);
		checkWin(buttons, y);
	});
}
