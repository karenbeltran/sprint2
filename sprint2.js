function agregarpendiente () {
	var nuevopendiente = document.getElementById("agregarlista").value;
	var nuevoElemento = document.createElement("li");
	nuevoElemento.innerHTML = nuevopendiente;
	document.getElementById("lista").appendChild(nuevoElemento);
	document.getElementById("agregarlista").value= ""
}
function agregarpendiente2 (){
	var nuevopendiente2 = document.getElementById("crearlista").value;
	var nuevoElemento2 = document.createElement("li");
	nuevoElemento2.innerHTML = nuevopendiente2;
	document.getElementById("lista2").appendChild(nuevoElemento2);
	document.getElementById("crearlista").value=""
}	
// function borrarelemento(id){
// 	pendiente = document.getElementById("id");
// 	if (pendiente) {
// 		alert("El elemento seleccionado se eliminara");
// 	}else{
// 		padre = pendiente.parentNode
// 		padre.removeChild(pendiente);
// 	}
	
// }