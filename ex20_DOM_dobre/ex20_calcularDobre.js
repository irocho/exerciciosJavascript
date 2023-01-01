/* 
	Código en JavaScript obtido de https://github.com/irocho/exerciciosJavascript/ex20_DOM_dobre/
   idea de:  https://github.com/pdeitel/InternetAndWorldWideWebHowToProgram5e/blob/master/examples/ch09/ex09_06/volume.html

	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/







/*
Cando cargue (load) a ventá chama á función start()
*/
window.addEventListener("load", start, false);


/*
+ Agarda a que o usuario faga clic no botón que se chama "botaConta")
+ Xusto nese intre chama á función mostraResultado()
*/
function start() {
    var botonazo = document.getElementById("botaConta");
    botonazo.addEventListener("click", mostraResultado, false);
 } // fin función start


/*
+ Collo o que teclea o usuario (que serán caracteres), 
+ Convirto a enteiro
+ No sitio que teño no .html para a solución escribo o resultado da conta
*/


 function mostraResultado() {
    var resposta = document.getElementById("numerito");
    var respNum = parseInt(resposta.value);
    //document.getElementById("solucion").innerHTML = "O dobre dese número é: " + (respNum * 2);
    document.getElementById("solucion").innerHTML = "O dobre dese número é: " + calcDobre(respNum) ;

   } // fin función mostraResultado

/*
// Estilo tradicional
 function calcDobre(nn){
   return nn * 2;
 }
*/


// Estilo ECMAScript2015 (ES6)
var calcDobre = x => 2*x;