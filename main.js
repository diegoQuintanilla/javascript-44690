
//simulador de presentismo  

//creamos 3 empleados a manera de prueba con sus correspondientes ID
const empleado1 = 5589;  //Diego
const empleado2 = 4938;  //Hernan
const empleado3 = 6789;  //Samuel

let contador = 0;
let ID;

const saludar = nombre => alert ("***Bienvenido " + nombre + "***");


while (contador < 3) {
    ID = Number(prompt("Por favor, ingrese su numero ID"));
    
    if (ID != ""){    // validacion de la variable ID 

        if (ID == empleado1) {
            saludar("Diego");
            break;
        } else if (ID == empleado2) {
            saludar("Hernan");
            break;
        } else if (ID == empleado3) {
            saludar("Samuel");
            break;
        } else {
            alert("su numero ID no corresponde a un empleado activo")
        }

    } else {
        alert ("No ingreso ningun numero ID");
    }

    contador++;
}

















