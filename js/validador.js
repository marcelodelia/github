function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var fechaNacimiento = document.getElementById('nacim').value;
    var opcion = document.querySelector('input[name="opcion"]:checked');
    var fileInput = document.getElementById('imagen');
    var tipoComida = document.getElementById('comida').value;
    var mensaje = document.getElementById('consul').value;
    var terminos = document.getElementById('terminos').checked;

    if (nombre === '' || apellido === '' || email === '' || fechaNacimiento === '' || tipoComida === '' || !opcion || mensaje === '' || !terminos) {
        // Mostrar la modal con el mensaje de error
        var modal = document.getElementById("myModal");
        var modalMessage = document.getElementById("modal-message");
        modalMessage.innerHTML = 'Por favor, llene todos los campos y acepte los términos y condiciones.';
        modal.style.display = "block";

        // Cuando el usuario haga clic en el botón de cerrar, ocultar la modal
        var closeButton = document.getElementsByClassName("close")[0];
        closeButton.onclick = function() {
            modal.style.display = "none";
        };

        return false; // Detener el envío del formulario
    }

    // Validación de correo electrónico usando una expresión regular básica
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        var modal = document.getElementById("myModal");
        var modalMessage = document.getElementById("modal-message");
        modalMessage.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
        modal.style.display = "block";
        // Cuando el usuario haga clic en el botón de cerrar, ocultar la modal
        var closeButton = document.getElementsByClassName("close")[0];
        closeButton.onclick = function() {
            modal.style.display = "none";
        };

        return false;
    }

    // Validación de la extensión del archivo
    var extensiones = /(\.jpg|\.jpeg|\.doc|\.pdf|\.gif)$/i;
    if (!extensiones.exec(fileInput.value)) {
        var modal = document.getElementById("myModal");
        var modalMessage = document.getElementById("modal-message");
        modalMessage.innerHTML = 'Por favor, seleccione un archivo con una de las siguientes extensiones: JPG, JPEG, DOC, PDF, GIF.';
        modal.style.display = "block";

        var closeButton = document.getElementsByClassName("close")[0];
        closeButton.onclick = function() {
            modal.style.display = "none";
        };

        return false;
    }

    alert("¡El formulario se envió correctamente!");

    return true; // Si todo está bien, el formulario se enviará
}