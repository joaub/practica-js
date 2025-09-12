function proximosAñosBisiesto(año) {
    let ultimoAñoBisiesto = 2024;
    let añosBisiestos = [];
    for (let i = 0; i < 30; i++) {
        ultimoAñoBisiesto += 4;
        añosBisiestos.push(ultimoAñoBisiesto);
    }
    return añosBisiestos;
    

}
console.log(proximosAñosBisiesto(2023));
