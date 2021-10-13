
//blur, cuando pierdo el foco
palabra.addEventListener("blur", crearGuiones, true);
//keyup es cuando soltemos la tecla pulsada y se ejecuta
caracterBuscar.addEventListener("keyup", buscarCaracter, false);

//creamos un botón en el cual, si pulsamos se reinicia la pantalla para jugar de nuevo
var nuevo = document.createElement("button");
nuevo.innerHTML = "Jugar de nuevo";
document.body.appendChild(nuevo);

nuevo.onclick = function () {
    location.reload();
};

//variable global
var guiones;

function crearGuiones() {
    //guardamos en guiones los caracteres de la palabra
    guiones = palabra.value;
    //Expresion regular
    guiones = guiones.replace(/./g, "-");
    //por cada letra que tenemos escribimos un guion en el input de acierto
    aciertos.value = guiones;
}

function buscarCaracter() {
    //si es distinto a vacio entra
    if (caracterBuscar.value != "") {

        //convertimos todas las letras a mayuscula
        var caracter = caracterBuscar.value.toUpperCase();
        var palabraA = (palabra.value).toUpperCase();

        //Devuelve la posicion en la que esta la letra encontrada
        var posicion = palabraA.indexOf(caracter[0]);
        //usamos este boolean para que si el caracter no lo encuentra nos lo escriba en fallos
        var encontrado = false;

        //si hay un caracter encontrado entra sino no
        while (posicion > -1) {

            //recorremos toda la palabra
            guiones = guiones.substr(0, posicion) + caracter + guiones.substr(posicion + 1, guiones.length);
            //visualizamos los caracteres en los guiones
            aciertos.value = guiones;

            posicion = palabraA.indexOf(caracter, posicion + 1);
            console.log(posicion);
            encontrado = true;

            if (aciertos.value.indexOf('-') == -1) {
                alert("Juego finalizado, pulse jugar de nuevo");
            }

        }

        //controlar si la letra introducida no esta se escriba en los fallos
        if (encontrado == false) {
            fallos.value = fallos.value + "-" + caracter;

        }
        //una vez que se haya hecho todo con el caracter se quede vacia el input
        caracterBuscar.value = "";
    }
}

function jugarNuevo() {
    location.reload();
}
