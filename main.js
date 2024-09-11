const operacion = prompt(" paea el promedio 1 para el sueldo 2 ")

console.log(operacion)
switch (operacion) {
    case " 1":
        promedio()
        case "2":
            tusueldo()
            break;
default:
    alert(" El numero no es correcto")
    break

}

function tusueldo() {
    const preciohora = prompt (" ingresa el precio de tus horas")
    const horastrabajadas = prompt ("ingresa las hiras trabajadas")

    const sueldo = preciohora + horastrabajadas
    alert(" tu sueldo de este mes es de: " + sueldo + "DOP")
}

























