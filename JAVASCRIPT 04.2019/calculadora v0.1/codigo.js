function functionCalc(){
	valueOne = document.getElementById("numberOne").value;
	valueTwo = document.getElementById("numberTwo").value;
	operation = document.getElementById("operationValue").value;
	;

	if (operation == 1) {
		resultCalc = parseInt(valueOne) + parseInt(valueTwo);
	}
	else if(operation == 2){
		resultCalc = valueOne - valueTwo;
	}
	else if(operation == 3){
		resultCalc = valueOne / valueTwo;
	}
	else{
		resultCalc = valueOne * valueTwo;
	}

document.getElementById("resultScreen").value = resultCalc;
}