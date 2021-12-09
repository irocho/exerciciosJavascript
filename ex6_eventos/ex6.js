/* 
	Código en JavaScript  obtido de https://github.com/irocho/exerciciosJavascript/ex6_eventos/
	Nome do ficheiro: ex6.js
	Usados os eventos: onclick, onload, onmouseover
*/

/*	
	Definimos funcións ás que chaman os eventos
*/

function arrancamos () {
	alert('😀 Moi boas 😃');
}

function premerBoton () {
	alert('👍🏽 Botón presionado 👍🏽');
}

function paseando () {
	alert('🚶🏼‍♀️ Paseando polo botón 🚶🏼‍♀️');
}

/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Programación orientada a eventos </h1>');

/*	
	Creamos botóns que respondan a eventos, no .html ou aquí mesmo
*/
document.write('<h3>Lembramos aquelo dos formularios e dos botóns </h3>');
document.write('<button onclick="premerBoton()">Fai clic aquí </button>');
