let nombreUsuario = prompt("Bienvenido  al smartcampus politecnico grancolombiano, ingrese su nombre para continuar")
let edadUsuario = parseInt(prompt("Ingrese Su numero de cedula"))

alert(`Bienvenido ${nombreUsuario}`)
let parcial1 = parseInt(prompt("Ingrese la nota de su primer parcial"))
let parcial2 = parseInt(prompt("Ingrese la nota del segundo parcial"))
let parcial3 = parseInt(prompt("Ingrese la nota del tercer parcial"))
function notaFinal(){
    let resultado = parcial1 + parcial2 + parcial3
    let promedio = resultado / 3

    if (promedio >= 7){
        alert (` Modulo aprobado - calificacion:  ${promedio} excelente`)
    }else if (promedio >= 4){
        alert(`Modulo aceptado - calificacion: ${promedio} Verificar asesorias pruebas complementarias`)
    }else
    alert(`"Modulo Reprobado - calificacion:  ${promedio} deficiente`)
}
notaFinal()