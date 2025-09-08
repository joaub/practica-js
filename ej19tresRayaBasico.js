function tresEnRaya(tablero){
    let tabla = ["","","",
                "","","",
                "","",""];
    
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];
    let ganador = null;
    for(let i=0; i<tablero.length; i++){
        tabla[i] = tablero[i];
    }

    for (const combinacion of combinacionesGanadoras) {
        for (const jugador of ["X", "O"]) {
            if (combinacion.every(index => tabla[index] === jugador)) {
                ganador = jugador;
                break;
            }
        }
        
    }

    if (ganador) {
        return `El ganador es: ${ganador} ` ;

    } else if (tabla.every(celda => celda !== "")) {
        return "Empate";
    } else {
        return "El juego continúa";
    }    


}
console.log(tresEnRaya(["X", "O", "X",
                        "O", "X", "O",
                         "O", "X", "X"])); // Empate
console.log(tresEnRaya(["X", "O", "X",
                        "O", "X", "", 
                        "O", "O", "O"]));
console.log(tresEnRaya(["X", "O", "X", 
                        "O", "", "",
                        "O", "", "X"]));
console.log(tresEnRaya(["X", "O", "O",
                        "O", "X", "X",
                        "X", "O", "O"]));