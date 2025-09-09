function parandoTiempo(nr1, nr2, segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nr1 + nr2);
        }, segundos *1000);  
    });
}

async function ejecutar(nr1, nr2, segundos) {
    console.log('Empieza la ejecución');
    let resultado = await parandoTiempo(nr1, nr2, segundos);
    console.log("resultado ",resultado);

    console.log('Termina la ejecución');
}
ejecutar(2, 4, 3);
ejecutar(5, 8, 6);
