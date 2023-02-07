
let digito = "";


//creamos el constructor de objetos 
class Empleado {
    constructor (nombre, apellido, ID, rango){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ID = ID;
        this.rango = rango;
    }

}

const numeros = document.querySelectorAll(".numeros");
const cancelar = document.getElementById("cancelar");
const aceptar = document.getElementById("aceptar");
const lector_panel = document.getElementById("lector_panel");


//creamos tres empleados a modo de prueba con sus correspondientes ID

localStorage.setItem(`empleado 1`,JSON.stringify(new Empleado ("Diego","Ramirez","4958", "Supervisor")));
localStorage.setItem(`empleado 2`,JSON.stringify(new Empleado ("Hernan","Ramos","3381", "Encargado")));
localStorage.setItem(`empleado 3`,JSON.stringify(new Empleado ("Claudio","Gomez","1980", "Operador")));

const empleado1 = JSON.parse(localStorage.getItem("empleado 1"));
const empleado2 = JSON.parse(localStorage.getItem("empleado 2"));
const empleado3 = JSON.parse(localStorage.getItem("empleado 3"));



for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", (e) => {

        let atr = e.target.getAttribute('value');
        if (digito=="") {
            digito = atr;
            lector_panel.innerHTML = digito;
        }else {
            digito += atr;
            lector_panel.innerHTML = digito;    
        }
    
    })
    
}

cancelar.addEventListener("click",cancelacion);
function cancelacion(){
    lector_panel.innerHTML = "";
    digito = "";
}

aceptar.addEventListener("click",() => {

    if (digito) {

        switch (digito) {
            case empleado1.ID:
                saludar(empleado1.nombre); 
                break;
            case empleado2.ID:
                saludar(empleado2.nombre); 
                break;
            case empleado3.ID:
                saludar(empleado3.nombre); 
                break; 
            default:
                lector_panel.innerText = `su numero ID es invalido`;
                break;
        }

    } else {
        lector_panel.innerText = "no ingreso ningun numero ID";
    }

} )
 
const saludar = nombre => {lector_panel.innerText = `*** Bienvenido ${nombre} ***`};   















