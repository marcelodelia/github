const expresiones = {
  nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Expresión regular para letras y espacios, incluyendo acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  nacim: /^.{4,12}$/ // 4 a 12 dígitos.
};

function controlarInput() {

  var valorInputNombre = document.getElementById('nombre').value;
  var valorInputApellido = document.getElementById('apellido').value;
  var valorInputEmail = document.getElementById('email').value;
  var valorInputNacim = document.getElementById('nacim').value;
  var valorInputCheck = document.getElementById('terminos');

  if (expresiones.nombres.test(valorInputNombre)) {

    var checknombre = document.getElementById('check_nombre');
    checknombre.style.display = 'block';

  } else {
    var checknombre = document.getElementById('check_error_nombre');
    checknombre.style.display = 'block';
    var cartel_nombre = document.getElementById('error_nombre');
    cartel_nombre.style.display = 'block';
  }

  if (expresiones.apellido.test(valorInputApellido)) {

    var checkapellido = document.getElementById('check_apellido');
    checkapellido.style.display = 'block';

  } else {
    var checkapellido = document.getElementById('check_error_apellido');
    checkapellido.style.display = 'block';
    var cartel_apellido = document.getElementById('error_apellido');
    cartel_apellido.style.display = 'block';
  }

  if (expresiones.email.test(valorInputEmail)) {

    var checkemail = document.getElementById('check_email');
    checkemail.style.display = 'block';

  } else {
    var checkemail = document.getElementById('check_error_email');
    checkemail.style.display = 'block';
    var cartel_email = document.getElementById('error_email');
    cartel_email.style.display = 'block';
  }

  if (expresiones.nacim.test(valorInputNacim)) {

    var checknacim = document.getElementById('check_nacim');
    checknacim.style.display = 'block';

  } else {
    var checknacim = document.getElementById('check_error_nacim');
    checknacim.style.display = 'block';
    var cartel_nacim = document.getElementById('error_nacim');
    cartel_nacim.style.display = 'block';
  }

  if (valorInputCheck.checked && expresiones.nombres.test(valorInputNombre) && expresiones.apellido.test(valorInputApellido) && expresiones.nacim.test(valorInputNacim) && expresiones.email.test(valorInputEmail)) {

    var cartel_terminos = document.getElementById('terminos_ok');
    cartel_terminos.style.display = 'block';
    checknombre.style.display = 'none';

    checkapellido.style.display = 'none';

    checkemail.style.display = 'none';

    checknacim.style.display = 'none';

    document.getElementById("formulario").reset();

  }

  else {
    var cartel_terminos = document.getElementById('error-term');
    cartel_terminos.style.display = 'block';

  }

}


































