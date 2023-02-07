
let digito = "";
let fechaActual = new Date();
const diasDeLaSemana = [`domingo`,`lunes`,`martes`,`miercoles`,`jueves`,`viernes`,`sabado`];
const mesDelAnio = [`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`];

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
const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

//CREACION DEL TEMPORIZADOR
fecha.innerHTML = `${diasDeLaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesDelAnio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
setInterval(()=>{
    let horaActual = new Date;
    hora.innerHTML = horaActual.toLocaleTimeString();
},1000)

//creamos tres empleados a modo de prueba con sus correspondientes ID

localStorage.setItem(`empleado 1`,JSON.stringify(new Empleado ("Diego","Ramirez","4958", "Supervisor")));
localStorage.setItem(`empleado 2`,JSON.stringify(new Empleado ("Hernan","Ramos","3381", "Encargado")));
localStorage.setItem(`empleado 3`,JSON.stringify(new Empleado ("Claudio","Gomez","1980", "Operador")));

const empleado1 = JSON.parse(localStorage.getItem("empleado 1"));
const empleado2 = JSON.parse(localStorage.getItem("empleado 2"));
const empleado3 = JSON.parse(localStorage.getItem("empleado 3"));

lector_panel.innerText =`**Ingrese su numero ID **`;

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
    lector_panel.innerText =`**Ingrese su numero ID **`;
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
                lector_panel.innerText = `** Su numero ID es invalido **`;
                break;
        }

    } else {
        lector_panel.innerText = "** NO ingreso numero ID **";
    }

} )
 
const saludar = nombre => {lector_panel.innerText = `*** Bienvenido ${nombre} ***`};










