function numPerdidos(numeros){
    
    let faltan = []
    for(let i = 0;i < numeros.length - 1 ; i++){
        const actual = numeros[i];
        const siguiente = numeros[i + 1];

        for(let n = actual + 1; n < siguiente; n++){
            faltan.push(n);
        }
    }
    return faltan
}
console.log(numPerdidos([1,3,5,6,8]))