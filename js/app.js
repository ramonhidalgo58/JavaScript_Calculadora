var calculadora = {

	displayScreen: document.getElementById("display"),
	valordisplayScreen: "0",
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	auxTeclaIgual: false,

	init: (function(){
		this.FuncionesCalculadora();
	}),


	/*todas las operaciones de la calculadora, suma , resta, multiplicacion, division*/

	FuncionesCalculadora: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.ingresoNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.ingresoNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.ingresoNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.ingresoNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.ingresoNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.ingresoNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.ingresoNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.ingresoNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.ingresoNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.ingresoNumero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.borrardisplayScreen();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoDecimal();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.verResultado();});
		document.getElementById("raiz").addEventListener("click", function() {calculadora.ingresoOperacion("raiz");});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.ingresoOperacion("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.ingresoOperacion("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.ingresoOperacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.ingresoOperacion("+");});
	},

	/*Fin de opreaciones*/

	/*Funcion de teclas de calculadora*/

	borrardisplayScreen: function(){

	    this.valordisplayScreen = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.auxTeclaIgual = false;
		this.ultimoValor = 0;
		this.updatedisplayScreen();
	},

	cambiarSigno: function(){
		if (this.valordisplayScreen !="0") {
			var aux;
			if (this.valordisplayScreen.charAt(0)=="-") {
				aux = this.valordisplayScreen.slice(1);
			}	else {
				aux = "-" + this.valordisplayScreen;
			}
		this.valordisplayScreen = "";
		this.valordisplayScreen = aux;
		this.updatedisplayScreen();
		}
	},

	ingresoDecimal: function(){
		if (this.valordisplayScreen.indexOf(".")== -1) {
			if (this.valordisplayScreen == ""){
				this.valordisplayScreen = this.valordisplayScreen + "0.";
			} else {
				this.valordisplayScreen = this.valordisplayScreen + ".";
			}
			this.updatedisplayScreen();
		}
	},

	ingresoNumero: function(valor){
		if (this.valordisplayScreen.length < 8) {

			if (this.valordisplayScreen=="0") {
				this.valordisplayScreen = "";
				this.valordisplayScreen = this.valordisplayScreen + valor;
			} else {
				this.valordisplayScreen = this.valordisplayScreen + valor;
			}
		this.updatedisplayScreen();
		}
	},

	ingresoOperacion: function(oper){
		this.primerValor = parseFloat(this.valordisplayScreen);
		this.valordisplayScreen = "";
		this.operacion = oper;
		this.auxTeclaIgual = false;
		this.updatedisplayScreen();
	},

	verResultado: function(){

		if(!this.auxTeclaIgual){
			this.segundoValor = parseFloat(this.valordisplayScreen);
			this.ultimoValor = this.segundoValor;
			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);
		} else {

		this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}
		this.primerValor = this.resultado;
		this.valordisplayScreen = "";
		if (this.resultado.toString().length < 9){
			this.valordisplayScreen = this.resultado.toString();
		} else {
			this.valordisplayScreen = this.resultado.toString().slice(0,8) + "...";
		}
		this.auxTeclaIgual = true;
		this.updatedisplayScreen();
	},

	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+":
				this.resultado = eval(primerValor + segundoValor);
			break;
			case "-":
				this.resultado = eval(primerValor - segundoValor);
			break;
			case "*":
				this.resultado = eval(primerValor * segundoValor);
			break;
			case "/":
				this.resultado = eval(primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(primerValor));
		}
	},

	updatedisplayScreen: function(){
		this.displayScreen.innerHTML = this.valordisplayScreen;
	}

};

calculadora.init();
