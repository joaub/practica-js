function conversorDeTiempo(dias, horas, minutos, segundos) {
    const totalMilisegundos = 
    (dias * 24 * 60 * 60 * 1000) +
    (horas * 60 * 60 * 1000) +
    (minutos * 60 * 1000) +
    (segundos * 1000);
    return totalMilisegundos;
}
console.log(conversorDeTiempo(1, 0, 1, 1)); 
console.log(conversorDeTiempo(0, 3, 1, 0));
console.log(conversorDeTiempo(0, 1, 3, 0));
console.log(conversorDeTiempo(0, 0, 0, 15));