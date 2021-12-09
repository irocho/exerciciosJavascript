/* 
	Código en JavaScript  obtido de https://github.com/irocho/exerciciosJavascript/ex4_switch-case/
	Nome do ficheiro: ex4.js
	Usado: switch(), case, break, default
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con condicionais</h1>');

// varios caracteres entre comiñas forman unha cadea (string)
var resposta = prompt('que tal persoa é vostede? ');
document.write('Vostede di ser unha persoa ' + resposta +  '<br>'); // unha cadea detrás da outra co signo +

/*	
	avaliamos o que introduce o usuario
*/

switch(resposta)
{
	case 'estupenda':
		document.write('POR SUPOSTO 😆');
	break;
	case 'marabillosa':
		document.write('QUE SORTE 🤣');
	break;
	case 'guapo':
	case 'guapa':
		document.write('🤨 ENGREÍDA');
	break;
	default:
		document.write('MÁGOA!! 😫');
	break;
}; 

document.write('<h6>Truquito: 😉 En Sublime Text: Edit/Emoji</h6>');
