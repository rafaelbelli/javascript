var dataVisor = [];
var resultado = 0;

function startCalc(buttonValue) {
	var numbersOnVisor = document.getElementById("showResult");
	numbersOnVisor.value = numbersOnVisor.value + buttonValue;
};

function startOperator(typeOperator){
	var numbersOnVisor = document.getElementById("showResult");
	var resultVisor = document.getElementById("resultVisor");
	if (numbersOnVisor.value != '') {
			dataVisor.push(numbersOnVisor.value);
			numbersOnVisor.value = null;
		if(dataVisor[1] != null){
			stopCalc(typeOperator);
		};
	};
resultVisor.value = parseInt(resultado);
};

function stopCalc(typeOperator){
			if (typeOperator == "soma") {
				resultado = parseInt(dataVisor[0]) + parseInt(dataVisor[1]);
				dataVisor = [resultado];
			}
			else if(typeOperator == "multiplicacao") {
				resultado = dataVisor[0] * dataVisor[1];
				dataVisor = [resultado];
			}
			else if(typeOperator == "subtracao") {
				resultado = dataVisor[0] - dataVisor[1];
				dataVisor = [resultado];
			}
			else {
				resultado = dataVisor[0] / dataVisor[1];
				dataVisor = [resultado];
			}
};

function abracadabra(){
	numbersOnVisor = document.getElementById("showResult");
	var resultVisor = document.getElementById("resultVisor");
	numbersOnVisor.value = '';
	resultCalc = 0;
	resultVisor.value = '';
	dataVisor = [];
};