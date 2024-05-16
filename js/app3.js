// Declaración de Variables
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const fechanac = document.getElementById("nacim")
const form = document.getElementById("script")
const parrafo = document.getElementById("warnings")

// funcion flecha -  click a boton enviar
form.addEventListener("submit", e=>{
    e.preventDefault()
    // if(nombre.value.length <2){
    //     alert ("El nombre debe de tener un minimo de 2 caracteres")
        // }
    let warnings = ""
    let entrar = false
    parrafo.innerHTML= ""
    // Expresion Regular de Fecha.
    let RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    // expresiones regulares para avlidar campo Email
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // Validacion Nombre
    if(nombre.value.length <2){
        warnings += `El nombre debe de tener un minimo de 2 caracteres <br>`
        let entrar = true
    }
    // Validacion apellido
    if(apellido.value.length <2){
        warnings += `El apellido debe de tener un minimo de 2 caracteres <br>`
        let entrar = true
    }
    console.log(regexEmail.test(email.value))
    // Validacion email
    if(!regexEmail.test(email.value)){
        warnings += `El campo email debe contener un correo valido <br>`
        let entrar = true
    }
    // Validacion Fecha
    let DATE_REGEX = /^(0[1-9]| [1-2]\d |3[01])(\/)(0[1-9]|1[012])\2(\d{4}) $/
    let CURRENT_YEAR = new Date().getFullYear()
    validateDate = (birthDate) => {
    /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
    if (!birthDate.match (DATE_REGEX)) {
        warnings += `El campo Fecha debe contener un formato valido <br>`
        let entrar = true
        return false
    }
    /* Comprobar los días del mes */
    let day = parseInt(birthDate.split( '/')[o])
    let month = parseInt(birthDate.split('/')[1])
    let year = parseint(birthDate.split('/')[2] )
    let monthDays = new Date(year, month, O).getDate( )
    if (day > monthDays) {
        return false
    }
    /* Comprobar que el año no sea superior al actual*/
    if (year > CURRENT_YEAR) {
        return false
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
}
}
)
