
//simulador de autentificacion  

//creamos el constructor de objetos 
class Empleado {
    constructor (nombre, apellido, ID, rango){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ID = ID;
        this.rango = rango;
    }
}

//creamos tres empleados a modo de prueba con sus correspondientes ID
const empleado1 = new Empleado ("Diego","Ramirez",4958, "Supervisor");
const empleado2 = new Empleado ("Hernan","Ramos",3381, "Encargado");
const empleado3 = new Empleado ("Claudio","Gomez",1980, "Operador");


const diaDeLaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let diaActual = new Date();
let contador = 0;
let numID;
let asistencia = [];


//creamos la funcion flecha para automatizar el saludo de acceso 
const saludar = nombre => alert ("***Bienvenido " + nombre + "***");   

function asis() {
    asistencia.push(diaDeLaSemana[diaActual.getDay()]);
    asistencia.push(diaActual.getDate());
}



while (contador < 3) {
    numID = Number(prompt("Por favor, ingrese su numero ID"));
    
    if (numID != ""){    // validacion de la variable ID 
        
        switch (numID) {
            case empleado1.ID: 
                saludar(empleado1.nombre);
                asis();
                contador=3;
                break;
            case empleado2.ID:
                saludar(empleado2.nombre);
                asis();
                contador=3;
                break;
            case empleado3.ID:
                saludar(empleado3.nombre);
                asis();
                contador=3;
                break;
            default:
                alert("su numero ID no corresponde a un empleado activo");
        }        

    } else {
        alert ("No ingreso ningun numero ID");
    }    

    contador++;
}    
















