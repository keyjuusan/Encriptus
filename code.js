const campoTexto = document.querySelector(".textareaBox__campoTexto");
const btnEncript = document.querySelector(".btn__Encript");
const btnDsEncript = document.querySelector(".btn__DsEncript");
const btnCopy = document.querySelector(".visualizacion__btnCopy")
const resultado = document.querySelector(".visualizacion__resultado");
// const textoNormal = document.querySelector(".textoNormal");
// const textoEncriptado = document.querySelector(".textoEncriptado");
const visualizacion = document.querySelector(".principal__visualizacion");
const inactivo = document.querySelector(".principal__inactivo");

var datoTexto = [];
var encriptado = [];
//var texto = campoTexto.value.trim(); //by Geofoxsv - Elimina espacios en blanco.
//var palabras= campoTexto.value.split(' '); //by Geofoxsv - Divide palabras y las encierra en un array.
var palabras = new String(""); //variable acumuladora.

btnEncript.onclick = encriptar;
btnDsEncript.onclick = desEncriptar;
btnCopy.onclick = copiarTexto;

campoTexto.addEventListener("keyup", ()=>{
	if (campoTexto.value == '') {
		inactivo.style.display = "flex";
		visualizacion.style.display = "none";
	}
});

function encriptar(){
	visualizacion.style.display = "flex";
	inactivo.style.display = "none";
	encriptado.length = 0;
	datoTexto.length = 0; //resetea el contenido del array.
	datoTexto = campoTexto.value.split(' ');
	mostrarTextoEncriptado();

	// textoNormal.textContent = "Texto normal";
	// textoEncriptado.textContent = "Texto encriptado";
}

function mostrarTextoEncriptado(){
	trascripcion();
	for(var i=0; i < encriptado.length; i++){
		palabras = palabras + encriptado[i] + ' ';
	}

	// for(var i=0; i < datoTexto.length; i++){
	// 	palabras = palabras + datoTexto[i] + ' ';
	// }

	resultado.textContent = palabras;

	palabras = new String(""); //resetea la variable acumuladora.
}

function trascripcion(){
	
	for(var i=0; i < datoTexto.length; i++){
		
		if (datoTexto){
			encriptado.push(datoTexto[i].replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat'));
			
		}else{
			resultado.textContent = "Trascripcion detenida.";
		}
	}
}

function desEncriptar(){
	encriptado.length = 0;
	datoTexto.length = 0; //resetea el contenido del array.
	datoTexto = campoTexto.value.split(' ');
	mostrarTextoNormal();

	// textoNormal.textContent = "Texto encriptado";
	// textoEncriptado.textContent = "Texto normal";

}

function mostrarTextoNormal(){
	desTrascripcion();
	for(var i=0; i < encriptado.length; i++){
		palabras = palabras + encriptado[i] + ' ';
	}

	// for(var i=0; i < datoTexto.length; i++){
	// 	palabras = palabras + datoTexto[i] + ' ';
	// }

	resultado.textContent = palabras;

	palabras = new String(""); //resetea la variable acumuladora.
}

function desTrascripcion(){
	
	for(var i=0; i < datoTexto.length; i++){
		
		if (datoTexto){
			encriptado.push(datoTexto[i].replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u'));
			
		}else{
			resultado.textContent = "Trascripcion detenida.";
		}
	}
}

function copiarTexto(){
	navigator.clipboard.writeText(resultado.innerHTML);
}

function ocultarAviso(){

}