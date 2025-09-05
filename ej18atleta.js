function carrera(arr, pista){
    let pistaFinal = pista.split("");
    let tramoSuperado = true;
    
    for(let i = 0; i < arr.length; i++){
        let correr = arr[i];
        let tramo = pistaFinal[i];

        if(correr === "run" && tramo === "_" || correr === "jump" && tramo === "|"){
            continue
        
        }else if(correr === "jump" && tramo === "_" ){
            
            pistaFinal[i] = "x";
            tramoSuperado = false;
        
        }else if(correr === "run" && tramo === "|"){
            
            pistaFinal[i] = "/";
            tramoSuperado = false;
            
        }
        
    }
    console.log("resultado de la pista "+ pistaFinal.join(""));
    return tramoSuperado;
}
console.log(carrera(["run", "run", "jump", "run"], "__|_")); // true
console.log(carrera(["run", "run", "run", "run"], "_|_|")); // false
console.log(carrera(["run", "jump", "jump", "run"], "_||_"));