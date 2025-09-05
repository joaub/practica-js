function carrera(arr, pista) {
    let pistaFinal = pista.split("");
    let tramoSuperado = true;

    if (arr.length !== pistaFinal.length) {
        throw new Error("La cantidad de acciones y la longitud de la pista deben ser iguales.");
    }

    for (let i = 0; i < arr.length; i++) {
        let accion = arr[i];
        let tramo = pistaFinal[i];

        if ((accion === "run" && tramo === "_") || 
        (accion === "jump" && tramo === "|")) {
            continue;
        } else if (accion === "jump" && tramo === "_") {
            pistaFinal[i] = "x";
            tramoSuperado = false;
        } else if (accion === "run" && tramo === "|") {
            pistaFinal[i] = "/";
            tramoSuperado = false;
        }
    }
    console.log("resultado de la pista " + pistaFinal.join(""));
    return tramoSuperado;
}
console.log(carrera(["run", "run", "jump", "run"], "__|_")); // true
console.log(carrera(["run", "run", "run", "run"], "_|_|")); // false
console.log(carrera(["run", "jump", "jump", "run"], "_||_"));
console.log(carrera(["run", "jump", "jump", "run"], "___|"));

//subir denuevo este repo a github