//Objetivos específicos:
//1: Delcarar variables, constantes y arrays
//2: Crar una o más funciones JS que generen interacción
//3: Agregar los ciclos de iteración y/o condicionales necesarios, para que tu proyecto fujncione correctamente
//4: Integerar el uso de Consola JS y de los cuadros de diálogo Prompt, Confirm y Alert

alert("Descubrí cuál es tu animal espiritual según tu mes y día de nacimiento.");

let nombre = prompt("¿Cuál es tu nombre?");

//Función 1 ---- función flecha
const saludo = (nombre) => {alert("Hola " + nombre + "¡Bienvenido a mi primera entrega en CoderHouse!");};

//Creo los Arrays
//Array de animales según el mes solicitado en número
const animal = ["🐲 Dragón", "🦦 Carpincho", "🐂 Toro", "🦄 Unicornio", "🐅 Tigre", "🦁 León", "🦟 Mosquito", "🐺 Lobo", "🦅 Cóndor", "Guanaco", "🐎 Caballo", "🐬 Delfín"];

//Array de adjetivos según el día de la semana, solicitado en letras pero convertido a números en el switch
const adjetivo = ["peludo", "asmático", "petizo", "vegano", "filósofo", "dramático", "insoportable"];

let respuesta;



do{
    //Solicito el nro de mes para luego acceder al array de animales
let mes = parseInt(prompt("Ingrese el número de su mes de nacimiento"));
    while (isNaN(mes)|| mes<1 || mes>12){ //con el while pido el dato para el mes hasta que ingese uno válido.
        alert("Debe ingresar un número válido para el mes.");
        mes = parseInt(prompt("Ingrese su mes de nacimiento (del 1 al 12)")); 
    }
//en el While uso 3 condiciones que de ser verdaderas vuelve a solicitarle al usuario el mes en el formato que solicité en el prompt

let diaSemana = prompt("Ingrese el día de la semana en que nació (Ej: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo)").toLowerCase(); //uso el lowerCase para transformar todo a minúsuclas
//función 2 ---- funcion tradicional que le pone acento al miércoles o jueves si el usuario los escribe sin acento
    function diaConAcento(diaSemana){
        if (diaSemana === "miercoles"){
            diaSemana = "miércoles";
        }else if (diaSemana === "sabado"){
            diaSemana = "sábado";
        }
        
        return diaSemana; //retorno el valor modificado proque lo voy a usar después 
    }

    diaSemana = diaConAcento(diaSemana); //guardo el valor retornado por la función en la variable diaSemana

    while (diaSemana != "lunes" && diaSemana != "martes" && diaSemana != "miércoles" && diaSemana != "jueves" && diaSemana != "viernes" && diaSemana != "sábado" && diaSemana != "domingo"){
        alert("Debe ingresar un día de la semana válido.");
        diaSemana = prompt("Ingrese el día de la semana en que nació (Ej: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo)").toLowerCase();
        diaSemana = diaConAcento(diaSemana); //llamo a la función otra vez por si dentro del while el usuario vuelve a ingresar miércoles o sábado sin acento
    }

    //acá le doy un valor numérico al día de la semana que pedí como string antes
    switch(diaSemana){
        case "lunes":
            diaSemana = 0
            break;
        case "martes":
            diaSemana = 1
            break;
        case "miércoles":
            diaSemana = 2
            break;
        case "jueves":
            diaSemana = 3
            break;                 
        case "viernes":
            diaSemana = 4
            break; 
        case "sábado":
            diaSemana = 5
            break;     
        case "domingo":
            diaSemana = 6;
            break;
        default:
            alert("Error inesperado.");
            break;
    }

    let resultadoFinal = nombre + "!" + " Tu animal espiritual es el " + animal[mes-1] + " " + adjetivo[diaSemana]; //descubrí que se puede guardar el mensaje final en una variable y no obligatorimente en el console.log
    console.log(resultadoFinal);
    //alert(resultadoFinal);  Muestras el resultado también en el alert! (no sabía esto!!)


    //  le pregunto al usuario si desea continuar jugando o no pero con confirm
    let quiereJugarDeNuevo = confirm("¿Desea volver a jugar?"); 

    //el confirm devuelve true o false, y eso lo uso en el if para saber qué hacer
    if (quiereJugarDeNuevo === true) {
        respuesta = "si";
    } else {
        respuesta = "no";
    }

}while (respuesta === "si"); //si el usuario quiere vovler a jugaar el while actúa



// ---------- COSAS QUE HICE ANTES Y MODIFIQUÉ PORQUE NO ME GUSTARON ------------------- //

    //Accedo a los arrays y los concateno en la respuesta
    // console.log("Tu animal espiritual es el " + animal[mes-1] + " " + adjetivo[diaSemana] );

//le consulto al usuario si desea volver a jugar y de nuevo, valído si la resputa es válida
    // respuesta = prompt("¿Desea vovler a jugar? (si/no)").toLowerCase();
    // while (respuesta != "si" && respuesta != "no"){
    //     alert("Debe ingresar una respuesta válida: si o no.");
    //     respuesta = prompt("¿Desea vovler a jugar? (si/no)").toLowerCase();
    // }