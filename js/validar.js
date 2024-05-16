// Selección del Formulario
var formulario = document.getElementById("script")
// variables
const userNameField = document.querySelector("[name=username]");
const lastNameField = document.querySelector("[name=lastname]");
const emailField = document.querySelector("[name=email]");
const fileField = document.querySelector("[name=avatar]");
window.onload = inicio;

function inicio() {
    document.getElementById("boton_enviar").addEventListener('click, validar, false');
}
// Funcion para validar que el campo nombre no este vacio
function validarNombre(){
    var elemento = document.getElementById("username");
    if (elemento.value == ""){
        alert("El Campo Nombre no puede esta vacio");
        return false
    }
    return true
}
// Funcion para validar que el campo apellido no este vacio
function validarApellido(){
    var elemento = document.getElementById("lastname");
    if (elemento.value == ""){
        alert("El Campo Nombre no puede esta vacio");
        return false
    }
    return true
}
// valiacion de carecateres de E-MAIL con funcion flecha
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        setErrors("Por favor validar que sea un E-mail..", field);
    } else {
        setErrors("", field, false);
    }
}
// Funcion para validar que el campo fecha sea en formato de fecha
function validarFecha(fecha) {  
      
    try{        
        var fecha = fecha.split("/");        
        var dia = fecha[0];        
        var mes = fecha[1];        
        var ano = fecha[2];        
        var estado = true;  
         
        if ((dia.length == 2) && (mes.length == 2) && (ano.length == 4)) {        
            switch (parseInt(mes)) {        
                case 1:dmax = 31;break;        
                case 2: if (ano % 4 == 0) dmax = 29; else dmax = 28;        
                break;        
                case 3:dmax = 31;break;        
                case 4:dmax = 30;break;        
                case 5:dmax = 31;break;        
                case 6:dmax = 30;break;        
                case 7:dmax = 31;break;        
                case 8:dmax = 31;break;        
                case 9:dmax = 30;break;        
                case 10:dmax = 31;break;       
                case 11:dmax = 30;break;      
                case 12:dmax = 31;break;       
            }  
              
            dmax!=""?dmax:dmax=-1;if ((dia >= 1) && (dia <= dmax) && (mes >= 1) && (mes <= 12)) {        
            for (var i = 0; i < fecha[0].length; i++) {         
                diaC = fecha[0].charAt(i).charCodeAt(0);        
                (!((diaC > 47) && (diaC < 58)))?estado = false:'';       
                mesC = fecha[1].charAt(i).charCodeAt(0);        
                (!((mesC > 47) && (mesC < 58)))?estado = false:'';       
            }  
         
        } for (var i = 0; i < fecha[2].length; i++) {  
         
        anoC = fecha[2].charAt(i).charCodeAt(0);  
         
        (!((anoC > 47) && (anoC < 58)))?estado = false:'';        
        }} else estado = false;        
        return estado;    
        
   }
   catch(err){  
    alert("Error fechas");    
    }
}

// Funcion para validar que el campo check
function validaAcepto(){
    var campoCheck = document.getElementById("checkbox");
    if (!campoCheck.checked)
        alert("Debe aceptar los Terminos y Condiciones")
        return false
}
return true
// Funcion de Validar todas las funaciones del Form
function validar (e) {
    if (validarNombre()  && validarApellido() && validarFecha() && validateEmailFormat() && validaAcepto()  && confirm("Pulsa Aceptar si deseas solicitar el pedido")) {
        return true;
    } else {
        e.preventDefault();
        return false
    }
}


