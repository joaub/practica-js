function codigoMorse(texto) {
    const morse = {
        'A': '.-',    'B': '-...',  'C': '-.-.', 
        'D': '-..',   'E': '.',     'F': '..-.',
        'G': '--.',   'H':'....',   'I': '..',
        'J': '.---',  'K': '-.-',   'L': '.-..',
        'M': '--',    'N': '-.',    'O': '---',
        'P': '.--.',  'Q': '--.-',  'R': '.-.',
        'S': '...',   'T': '-',     'U': '..-',
        'V': '...-',  'W': '.--',   'X': '-..-',
        'Y': '-.--',  'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..',
        '9': '----.',
    }
    return texto.toUpperCase().split('').map(char => morse[char] || char).join(' ');

}
console.log(codigoMorse("Hola Mundo 123"));
console.log(codigoMorse("SOS"));
console.log(codigoMorse("JavaScript"));
console.log(codigoMorse("Ejercicio 9"));
console.log(codigoMorse("¡Hola, Mundo!"));