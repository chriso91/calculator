$(document).ready(function(){
var arr = [];
var num = 0;
var answer = 0;
var action = '+';

$('#ac-but').on('click', function(){
	arr = [];
	num = 0;
	answer = 0;
	action = '+';
	document.getElementById('box').value='';
});

$('#ce-but').on('click', function(){
	arr.pop();
	num = joinArr(arr);
	setBox(num);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('#div-but').on('click', function(){
	setEqual(num, action);
	action = '/';
});

$('#mult-but').on('click', function(){
	setEqual(num, action, false);
	action = '*';
});

$('#plus-but').on('click', function(){
	setEqual(num, action);
	action = '+';
});

$('#min-but').on('click', function(){
	setEqual(num, action);
	action = '-';
});

$('#eq-but').on('click', function(){
	setEqual(num, action);
	setBox(answer);
	action = '=';
});


function setEqual(num, action){
	if (action === '+'){
		answer += num;
	}
	else if (action === '-'){
		answer -= num;
	}
	else if (action === '/'){
		answer /= num;
	}
	else if (action === '*'){
		answer *= num;
	}
	else if (action === '='){
		num = answer;
	}
	else{
		document.getElementById('box').value='Action not specified.';
	}
	console.log(num);
	console.log(answer);
	console.log(arr);
	arr = [];
}

function joinArr(arr){
	var number = arr.join('');
	number = parseFloat(number);
	return number;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('#seven-but').on('click', function(){
	arr.push(7);
	num = joinArr(arr);
	setBox(num);
});

$('#eight-but').on('click', function(){
	arr.push(8);
	num = joinArr(arr);
	setBox(num);
});

$('#nine-but').on('click', function(){
	arr.push(9);
	num = joinArr(arr);
	setBox(num);
});

$('#four-but').on('click', function(){
	arr.push(4);
	num = joinArr(arr);
	setBox(num);
});

$('#five-but').on('click', function(){
	arr.push(5);
	num = joinArr(arr);
	setBox(num);
});

$('#six-but').on('click', function(){
	arr.push(6);
	num = joinArr(arr);
	setBox(num);
});

$('#three-but').on('click', function(){
	arr.push(3);
	num = joinArr(arr);
	setBox(num);
});

$('#two-but').on('click', function(){
	arr.push(2);
	num = joinArr(arr);
	setBox(num);
});

$('#one-but').on('click', function(){
	arr.push(1);
	num = joinArr(arr);
	setBox(num);
});

$('#zero-but').on('click', function(){
	arr.push(0);
	num = joinArr(arr);
	setBox(num);
});

$('#dec-but').on('click', function(){
	console.log(arr);
	console.log(num);
	console.log(answer);
	if (!arr[0]){
		arr.push('0.');
	}
	else{
		arr.push('.');
	}
	num = joinArr(arr);
	setBox(num);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setBox(num){
	if(num === NaN){
		document.getElementById('box').value = 'Error, improper entry.';
		arr = [0];
		num = 0;
		answer = 0;
		action = '+';
	}
	else{
		document.getElementById('box').value = num;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var colors = ["limegreen", "pink", "lightblue", "#BB8FCE", "#DC7633", "#48C9B0"];
var count = 1;
$('#font-but').on('click', function(){
	document.body.style.setProperty('--change-color', colors[count]);
	if (count >= 6){
		count = 0;
	}
	count++;
});

});

