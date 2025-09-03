function numeroArmstrong(num) {
    let suma = 0;
    let potencia = num.toString().length;
    for (let digit of num.toString()) {
        suma += Math.pow(Number(digit), potencia);
    }
    return suma === num;

}
console.log(numeroArmstrong(153)); // true
console.log(numeroArmstrong(9474));
console.log(numeroArmstrong(123)); // false