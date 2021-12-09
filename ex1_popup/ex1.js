/* 
	Código en JavaScript obtido de https://github.com/irocho/exerciciosJavascript/ex1_popup/
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
var dato; //declaramos unha variable para gardar a resposta
dato = prompt('Cal é o teu nome?');
alert('Encantada '+ dato);


// o navegador sabe HTML:
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Benvidos á páxina do ex1.js</h1>'); // podemos inserir HTML
document.write('Iremos aprendendo. '); //non fai caso dos saltos de liña
document.write('Para un salto de liña usamos a etiqueta HTML: <br>');
document.write('Funciona? Lembramos a raia: <hr>');

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('Deixamos este exercio? ');

if(marchamos)
{
	document.write('<br> Saúdos.... '+ dato);
} 
else 
{
	document.write('<br> Daquela seguimos xogando, '+ dato);
}
