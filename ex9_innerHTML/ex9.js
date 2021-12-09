/* 
	Código en JavaScript  obtido de https://github.com/irocho/exerciciosJavascript/ex9_innerHTML/
	Nome do ficheiro: ex9.js
	Usado: getElementById(), innerHTML
	*/

/*	
	Este ficheiro só contén as funcións. Todo o demáis está no .html
	*/


//https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
function cambiarCor(colorin) {
	var letras = document.getElementById('textito');
	letras.style.color = colorin;
}

function procesarDatos(){
	var aa;
	var nn;
	aa = document.getElementById('apelido').value;
	nn = document.getElementById('nome').value;
	alert('Vostede é ' + nn +' '+ aa);
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
function cambiarTexto() {
	document.getElementById("parrafada").innerHTML = "Xa cho dicía eu...";
}

function consultarHora() {
	var agora=Date();
	document.getElementById("hora").innerHTML = agora;
}
