function maxComunDivisor(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    
    return a;
}

function minComunMultiplo(a, b) {
    console.log("el minimo comun multiplo es:" );
    return Math.abs(a * b) / maxComunDivisor(a, b);

}

console.log(maxComunDivisor(48, 18)); // 6
console.log(maxComunDivisor(56, 98));
console.log(minComunMultiplo(4, 5)); // 20
console.log(minComunMultiplo(21, 6)); // 42