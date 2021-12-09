/* 
	Código en JavaScript obtido de https://github.com/irocho/exerciciosJavascript/ex2_mate/
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Páxina de mates que usa .css </h1>')

// as variables decláranse
var num1; 
var num2;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('Canto vale o primeiro número? ');
num2 = prompt('Canto vale o segundo número? ');

// convertimos a números
var solucionado = parseInt(num1)+parseInt(num2);
document.write('O resultado da túa suma é '+ solucionado);

// fallos nos cálculos
var num3 = 0;
document.write('<br> <hr>Atención ós erros nas contas (dividir entre 0) será...'+ num1/num3); // opsssss


document.write('<hr><h3>Javascript "inventa" un número entre 0 e 10</h3>');

var misterio = Math.random();
document.write('<br>Xenero un número aleatorio menor ca un: '+ misterio);

//olliño con este truquito para non crear máis variables
misterio = misterio*10;
document.write('<br> Agora está entre 0 e 10: '+ misterio);

//olliño con este truquito para non crear máis variables (outra vez)
misterio = Math.round(misterio)
document.write('<br> Redondeo para non andar con decimais '+ misterio);
