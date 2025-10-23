let firstValue = ''; // 7 
let secondValue = ''; // 9 
let operation = ''; // + 



let output = document.querySelector('.output');
let numKeys = document.querySelectorAll('.number');
let opKeys = document.querySelectorAll('.op');
let signKey = document.querySelector('.key-sign');
let pointKey = document.querySelector('.key-point');
let calc = document.querySelector('.calc');

numKeys.forEach((number) => {
	number.addEventListener('click', () => {
		if (operation) {
			secondValue += number.innerText;
			output.innerText = secondValue;
		} else {
			firstValue += number.innerText;
			output.innerText = firstValue;
		}
	});
});



opKeys.forEach((op) => {
	op.addEventListener('click', () => {
		if (!operation && firstValue) {
			operation = op.innerText; 
			op.classList.add('active');
		}
	});
});


signKey.addEventListener('click', () => {
	if (operation && secondValue) {
		secondValue = -1 * Number(secondValue);
		output.innerText = secondValue;
	}
	if (!operation && firstValue) {
		firstValue = -1 * Number(firstValue);
		output.innerText = firstValue;
	}
});


pointKey.addEventListener('click', () => {
	if (operation) {
        if (secondValue) secondValue += '.';
        else secondValue = '0.';
        output.innerText = secondValue;
    }
    if (!operation) {
        if (firstValue) firstValue += '.';
        else firstValue = '0.';
        output.innerText = firstValue;
    }
});


calc.addEventListener('click', () => {
	switch (operation) {
		case '+':
			output.innerText = Number(firstValue) + Number(secondValue);
			break;
		case '-':
			output.innerText = Number(firstValue) - Number(secondValue);
			break;
		case '*':
			output.innerText = Number(firstValue) * Number(secondValue);
			break;
		case '/':
			output.innerText = Number(firstValue) / Number(secondValue);
			break;
		default:
			output.innerText = 'Error';
	}
	operation = '';
	firstValue = '' + output.innerText;
	secondValue = '';
	document.querySelector('.active').classList.remove('active');
});
