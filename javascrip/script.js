const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	nacim: /^.{4,12}$/, // 4 a 12 digitos.
}

formulario.addEventListener('submit', (e) => {
	 	e.preventDefault();
});



const validarFormulario = (e) => {
switch (e.target.name){
	case "nombre":
		validarCampo(expresiones.nombre, e.target, 'nombre');
	break;
	case "apellido":
		validarCampo(expresiones.apellido, e.target, 'apellido');
	
	break;
	case "email":
		validarCampo(expresiones.email, e.target, 'email');
	break;
	case "nacim":
		validarCampo(expresiones.nacim, e.target, 'nacim');
	break;
	case "opcion1":
	console.log('funciona');
	break;
	case "opcion2":
	console.log('funciona');
	break;
	case "imagen":
	console.log('funciona');
	break;
}
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo-${campo}`).classList.remove('form-control-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.add('form-control-correcto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-solid fa-circle-check');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-solid fa-circle-xmark');
		document.querySelector(`#grupo-${campo} form-input-error`).classList.remove('form-input-error-activo')
		

	}else{
		document.getElementById(`grupo-${campo}`).classList.add('form-control-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.remove('form-control-correcto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-solid fa-circle-check');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-solid fa-circle-xmark');
		document.querySelector(`#grupo-${campo} form-input-error`).classList.add('form-input-error-activo')

	}
}





inputs.forEach( (input)=>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});















// const campos = {
// 	nombre: false,
// 	apellido: false,
// 	email: false,
// 	nacim: false,
// 	imagen: false,
// 	// consul: false
// }






// const validarFormulario = (e) => {
// 	switch (e.target.name) {
// 		case "nombre":
// 			validarCampo(expresiones.nombre, e.target, 'nombre');
// 		break;
// 		case "apellido":
// 			validarCampo(expresiones.apellido, e.target, 'apellido');
// 		break;
// 		case "email":
// 			validarCampo(expresiones.email, e.target, 'email');
// 		break;
// 		case "nacim":
// 			validarCampo(expresiones.nacim, e.target, 'nacim');
// 		break;
// 		case "imagen":
// 			validarCampo(expresiones.imagen, e.target, 'imagen');
// 		break;
// 		// case "consul":
// 		// 	validarCampo(expresiones.consul, e.target, 'consul');
// 		// break;
		
// 	}

// }

// const validarCampo = (expresion, input, campo) => {
// 	if (expresion.test(input.value)) {
// 		document.getElementById('grupo__${campo}').classList.remove('form-control-incorrecto');
// 		document.getElementById('grupo__${campo}').classList.add('form-control-correcto');
// 		document.querySelector('#grupo__${campo} i').classList.add('fa-check-circle');
// 		document.querySelector('#grupo__${campo} i').classList.remove('fa-solid fa-circle-xmark');
// 		document.querySelector('#grupo__${campo} .form-input-error').classList.remove('form-input-error-activo');
// 		campos[campo] = true;
// 	} else {
// 		document.getElementById('grupo__${campo}').classList.add('form-control-incorrecto');
// 		document.getElementById('grupo__${campo}').classList.remove('form-control-correcto');
// 		document.querySelector('#grupo__${campo} i').classList.add('fa-solid fa-circle-xmark');
// 		document.querySelector('#grupo__${campo} i').classList.remove('fa-check-circle');
// 		document.querySelector('#grupo__${campo} .form-input-error').classList.add('form-input-error-activo');
// 		campos[campo] = false;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();


// 	const terminos = document.getElementById('terminos');
// 	if (campos.nombre && campos.apellido && campos.email && campos.nacim && campos.imagen && terminos.checked) {
// 		formulario.reset();

// 		document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('form-mensaje-exito').classList.remove('form-mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('form-control-correcto').forEach((icono) => {
// 			icono.classList.remove('form-control-correcto');
// 		});
// 	} else {
// 		document.getElementById('form-mensaje').classList.add('form-mensaje-activo');
// 	}
// });

