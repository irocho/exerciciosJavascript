

/* 
	Código en JavaScript  obtido de https://github.com/irocho/exerciciosJavascript/ex23_traballos/
	Nome do ficheiro: ex26.js
	Usado:  addEventListener(), getElementById(),createElement(), appendChild()
*/



/*
 Se pretendemos pasar parámetros dende addEventListener
  non se pode facer a pelo:
  cómpre crear unha función (anónima) para que funcione.

xxx NON COLA:
xxxx window.addEventListener('load', escribir("Boas"), false);
*/




// cargo páxina e estou pendente de que se faga clic no botoncito.


window.addEventListener('load', escollerBoton, false);



//cando alguén faga clic chamo á función chamada fixenClic()
function escollerBoton() {
	var boton = document.getElementById('botoncito');
	boton.addEventListener('click', charlar, false);//() => escribir(charla)
}


function charlar(){
	var cotilleo = prompt ("Cóntame");
	//alert(charla);
	//escribir(charla);

	// vai ser un h1
	const etiqueta = document.createElement("li");
	// revela o cotilleo
	etiqueta.innerText = cotilleo;

	// vai onde o body
	document.body.appendChild(etiqueta);

}

