/* 
	Código en JavaScript  obtido de https://github.com/irocho/exerciciosJavascript/ex25_fillos/
	Nome do ficheiro: ex25.js
	Usado:  addEventListener(), getElementById(),createElement(), appendChild()
*/

// cargo páxina e estou pendente de que se faga clic no botoncito.
window.addEventListener('load', escollerBoton, false);

//cando alguén faga clic chamo á función chamada fixenClic()
function escollerBoton() {
	document.getElementById('botoncito').addEventListener('click', fixenClic, false);
}

// esto é o que vai acontecer en canto alguén faga clic no botón
function fixenClic() {
	// Fabrícase a etiqueta:
	var plin = document.createElement("h2");
	// Dáselle  algo que facer:
	plin.innerHTML = "Xa te sentín facer clic";
	// Colócase no body:
	document.body.appendChild(plin);

}


/*
 Se pretendemos pasar parámetros dende addEventListener
  non se pode facer a pelo:
  cómpre crear unha función (anónima) para que funcione.

xxx NON COLA:
xxxx window.addEventListener('load', escribir("Boas"), false);
*/
/*
window.addEventListener('load', () => escribir("Boas"), false);
function escribir(algo) {
	// Create element:
	const etiqueta = document.createElement("h1");
	etiqueta.innerText = algo;

	// Append to body:
	document.body.appendChild(etiqueta);

}
*/

/*
//document.body.onload = addElement; //estilo inline
document.addEventListener('load', addElement, false); /// estilo modelno

function addElement() {
	// crea un nuevo div
	var newDiv = document.createElement("div");
	// tecleo un algo
	var newContent = document.createTextNode("Hola!¿Qué tal?");
	//mete o texto no div creado.
	newDiv.appendChild(newContent); 

	// engade o elemento creado mais o seu contenido no body
	var currentDiv = document.getElementById("div1");
	document.body.insertBefore(newDiv, currentDiv);
}
*/
