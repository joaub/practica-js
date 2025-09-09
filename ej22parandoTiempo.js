function parandoTiempo(nr1, nr2) {
    let suma = nr1 + nr2;
    setTimeout(() => {
        console.log(suma);
    }, 2000);  
}
console.log(parandoTiempo(3, 4));
