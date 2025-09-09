function primeraMayuscula(str) {
    
    return str.toLowerCase().split(" ").map(palabra => 
    palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}
console.log(primeraMayuscula("hola mundo "));
console.log(primeraMayuscula("javaScript es genial"));
console.log(primeraMayuscula("ESTO DEBE CAMBIARLO TODO"));