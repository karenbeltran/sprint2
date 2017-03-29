function agregarpendiente () {
	var nuevopendiente = document.getElementById("agregarlista").value;
	var nuevoElemento = document.createElement("li");
	nuevoElemento.innerHTML = nuevopendiente;
	document.getElementById("lista").appendChild(nuevoElemento);
	document.getElementById("agregarlista").value= ""
}
