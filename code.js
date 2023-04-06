// encriptado.push(datoTexto[i].replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat'));

const campoTexto = document.querySelector(".textareaBox__campoTexto");
const btnEncript = document.querySelector(".btn__Encript");
const btnDsEncript = document.querySelector(".btn__DsEncript");
const btnCopy = document.querySelector(".visualizacion__btnCopy")
const resultado = document.querySelector(".visualizacion__resultado");
const visualizacion = document.querySelector(".principal__visualizacion");
const inactivo = document.querySelector(".principal__inactivo");

var palabras = [];
var palabrasEncrip = [];

campoTexto.addEventListener("keyup", () => {
	if (campoTexto.value == "") {
		visualizacion.style.display = "none"
		inactivo.style.display = "flex"
	}
});

btnCopy.addEventListener("click", ()=>{
	navigator.clipboard.writeText(resultado.textContent);
});

const accionBtn = (btn) => {
	btn.addEventListener("click", (event) => {
		palabras.length = 0;
		palabrasEncrip.length = 0;

		palabras = campoTexto.value.split(' ')
		encriptar(palabras, event);
		mostrarEncriptado(palabrasEncrip);
	});
};

accionBtn(btnEncript);
accionBtn(btnDsEncript);

const encriptar = (palabras, evento) => {
	// console.log(evento.target.className);
	if (evento.target.className == "btn__Encript") {
		for (let i = 0; i < palabras.length; i++) {
			palabrasEncrip.push(palabras[i].replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat'));
		}
	} else {
		for (let i = 0; i < palabras.length; i++) {
			palabrasEncrip.push(palabras[i].replaceAll('enter','e' ).replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u'));
		}
	}
};

const mostrarEncriptado = (palabrasEncrip) => {
	visualizacion.style.display = "flex"
	inactivo.style.display = "none"

	let acumuladora = '';
	for (let i = 0; i < palabrasEncrip.length; i++) {
		if (palabrasEncrip[i + 1] == null) {
			acumuladora += palabrasEncrip[i];
		} else {
			acumuladora += palabrasEncrip[i] + " ";
		}
	}

	resultado.textContent = acumuladora;
};