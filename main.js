let DateTime = luxon.DateTime;
let digito = "";

//creamos el constructor de objetos 
class Empleado {
    constructor (nombre,apellido,edad,civil,antiguedad,rango,id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.civil = civil;
        this.antiguedad = antiguedad;
        this.rango = rango;
        this.id = id;
    }
    
}

const numeros = document.querySelectorAll(".numeros");
const cancelar = document.getElementById("cancelar");
const aceptar = document.getElementById("aceptar");
const lector_panel = document.getElementById("lector_panel");
const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");
const dPersonales = document.getElementById("datosPersonales");
const informacion = document.getElementById("informacion");
const panelNumerico = document.getElementById("panelNumerico");

//CREACION DEL TEMPORIZADOR
fecha.innerHTML = DateTime.now().setLocale('es').toFormat("cccc dd 'de' MMMM 'de' yyyy");
setInterval(()=>{
    hora.innerHTML = DateTime.now().toFormat("hh:mm:ss");
},1000)

//creamos tres empleados a modo de prueba con sus correspondientes id

localStorage.setItem(`empleado 1`,JSON.stringify(new Empleado ("Diego","Ramirez",'31','soltero','3 años','Supervisor',"4958")));
localStorage.setItem(`empleado 2`,JSON.stringify(new Empleado ("Hernan","Ramos",'24','soltero','5 años','Encargado',"3381")));
localStorage.setItem(`empleado 3`,JSON.stringify(new Empleado ("Claudio","Gomez",'30','casado','9 años','Operador',"1980")));

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

    if (digito!='' && digito.length === 4 ) {

        switch (digito) {
            case empleado1.id:
                saludar(empleado1.nombre); 
                mostrarDatosPersonales(empleado1);
                bloqueo();
                break;
            case empleado2.id:
                saludar(empleado2.nombre);
                mostrarDatosPersonales(empleado2);
                bloqueo(); 
                break;
            case empleado3.id:
                saludar(empleado3.nombre);
                mostrarDatosPersonales(empleado3); 
                bloqueo();
                break; 
            default:
                lector_panel.innerText = `** Su numero ID es invalido **`;
                digito = '';
                limpiarLector();
                break;
        }

    } else {
        lector_panel.innerText = "** NO ingreso numero ID **";
        digito = '';
        limpiarLector();
    }
})
 
const saludar = nombre => {lector_panel.innerText = `*** Bienvenido ${nombre} ***`};


function limpiarLector(){
    setTimeout(() => {
        lector_panel.innerText = '';
    }, 3000);
}

  mostrarDatosPersonales = (empleado) => {

    setTimeout(() => {
        lector_panel.innerText = `*** Asistencia Registrada ***`;
    }, 2000);
    
    const datos = document.createElement('ul');
    datos.innerHTML = ` <h3>Datos Personales</h3>
                        <li>Nombre: ${empleado.nombre}</li>
                        <li>Apellido: ${empleado.apellido}</li>
                        <li>Edad: ${empleado.edad}</li>
                        <li>Estado civil: ${empleado.civil}</li>
                        <li>Antiguedad: ${empleado.antiguedad}</li>
                        <li>Rango: ${empleado.rango}</li>`
    dPersonales.appendChild(datos);
    }
                    


bloqueo = () => {
    panelNumerico.className = 'inactivo';
    
    
}

fetch ("data/empleados.json")
    .then (response => response.json())
    .then (data => {
        for (const elemento of data) {
            const info = document.createElement("ul");
            info.innerHTML = `<li>${elemento.nombre}</li>
                            <li>${elemento.apellido}</li>`
            informacion.appendChild(info);
        }

    })




                        
                        