$(document).ready(function() {

let calculator ={
numberA: null,
numberB: null,
func:null,
output:null,
enter:null,
}


$("#1").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 1;
		calculator.output = 1;
	}
	else {
		calculator.numberA = 1;
		calculator.output = 1;
	}
});
$("#2").click(function() {
	console.log(2);
	if (calculator.numberA === null) {
		calculator.numberA = 2;
		calculator.output = 2;
	}
	else {
		calculator.numberB = 2;
		calculator.output = 2;
	}
});
$("#3").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 3;
		calculator.output = 3;
	}
	else {
		calculator.numberA = 3;
		calculator.output = 3;
	}
});
$("#4").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 4;
		calculator.output = 4;
	}
	else {
		calculator.numberA = 4;
		calculator.output = 4;
	}
});
$("#5").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 5;
		calculator.output = 5;
	}
	else {
		calculator.numberA = 5;
		calculator.output = 5;
	}
});
$("#6").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 6;
		calculator.output = 6;
	}
	else {
		calculator.numberA = 6;
		calculator.output = 6;
	}
});
$("#7").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 7;
		calculator.output = 7;
	}
	else {
		calculator.numberA = 7;
		calculator.output = 7;
	}
});
$("#8").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 8;
		calculator.output = 8;
	}
	else {
		calculator.numberA = 8;
		calculator.output = 8;
	}
});
$("#9").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 9;
		calculator.output = 9;
	}
	else {
		calculator.numberA = 9;
		calculator.output = 9;
	}
});
$("#10").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 0;
		calculator.output = 0;
	}
	else {
		calculator.numberA = 0;
		calculator.output = 0;
	}
});



$("#plus").click(function() {
	console.log('plus');
	calculator.func === 'plus';
});
$("#minus").click(function() {
	console.log('minus');
	calculator.func === 'minus';
});
$("#umn").click(function() {
	console.log('umn');
	calculator.func === 'umn';
});
$("#del").click(function() {
	console.log('del');
	calculator.func === 'del';
});
$("#enter").click(function() {
	console.log('enter');
	if (calculator.func === 'plus') {
		calculator.enter = calculator.numberA + calculator.numberB;
		calculator.output = calculator.enter
	}
});


function output() {
	$("#output").text(calculator.output)
}



});