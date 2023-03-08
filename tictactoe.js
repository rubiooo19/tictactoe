/**
 * Todas las casillas tienen la clase .casilla
 * 
 */

/**
 * Almacenamos todas las casillas, es decir, todos los divs que tienen clase 'casilla'
 * En total tenemos 9 casillas que van desde la 0 hasta la 8
 */
let casillas = document.getElementsByClassName("casilla");

/**
 * Creamos un array con arrays que contienen todas las combinaciones ganadoras
 * 
 * [0] => [0, 1, 2]
 * [1] => [3, 4, 5]
 * ...
 */
let combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

/**
 * Recorrer las casillas que tengo en array casillas
 * Comprobar el contenido de cada una
 */

/**
 * Utilizo el array posicionesLlenas para introducir aquellas posiciones que contienen
 * un texto igual a 'X'
 * 
 * Al realizar un push lo que hago es introducir en el array, el numero de la posicion
 */
let posicionesLlenas = [];
for(let i = 0; i < casillas.length; i++){
     console.log('La casilla numero ' + i + ' contiene: ' + casillas[i].innerHTML);
    if(casillas[i].innerHTML == 'X'){
        posicionesLlenas.push(i);
     }
 }
 console.log(posicionesLlenas);

/**
 * Una vez tengo un array con las posiciones que contienen una 'X',
 * me interesa poder comparar si en el contenido de 'posicionesLlenas' esta incluido
 * alguna de las combinaciones de 'combinacionesGanadoras'.
 * 
 * En este caso en 'posicionesLlenas' tenemos:
 * [0] ---> 0
 * [1] ---> 1
 * [2] ---> 2
 * [3] ---> 5
 * 
 * En este caso en 'combinacionesGanadoras' tenemos:
 * [0] ---> [0, 1, 2]           // CORRECTA
 */


/**
 * -------------------------------------------------------------------------
 * CONTENIDO NUEVO
 * -------------------------------------------------------------------------
 */
let turno = true;
let x = [];
let y = [];
function agregarFicha(numero){
    console.log('Has hecho un click en la casilla ' + numero)
    /**
     * Cuando se activa esta funcion por el evento del click
     * es necesario eliminar el click del div
     */
    casillas[numero].removeAttribute('onclick')
    
if (turno){
    casillas[numero].textContent = 'X';
    turno = false;
    x.push(numero);
}else{
    casillas[numero].textContent = 'O';
    turno = true;
    y.push(numero);
}
}

/**
 * Para acabar el juego necesitamos:
 * 1. Colocar ficha
 * 2. Comprobar en cada insercion de ficha si se ha ganado el juego
 * 3. Cambiar turno
 * 4. Cuando hay ganador, mostrar mensaje
 * 
 * OPCIONES EXTRA:
 * 1. Generar un contado de victorias y resetear el tablero
 */
/**
 * 1 ¿hay ganador?
 *   leer fichas tablero / mirar array x/y
 *   comparar con combinaciones ganadoras
 * 2 ¡Hay ganador!
 *   No eventos click (remove atribute (onclick))
 *   Contador de equipo suma 1 (text content, parceint)
 *   OPCIONAL mostrar linea ganadora (estilos)
 *   reiniciamos tablero  (text content , setatribute)
 *   
 * 3 EXTRA Contador de tiempo para cambiar de turno  settimeout
 * 
 * 4 Minimos logicos de buen programador
 *   -comentarios cabecera de funciones
 *   - buenas practicas variables
 *   - no errores en consola
 *   - estilos
 *   - github
 * */
/**
 * 
 * @description: 
 * @param - no
 * @return - no
 * 
 */

