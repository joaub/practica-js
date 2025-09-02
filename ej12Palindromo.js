function palindrome(str) {
    let str1 = str.toLowerCase().replace(/\s/g, "");
    let str1rev = str1.split("").reverse().join("");
    return str1 === str1rev;
}
console.log(palindrome("neuquen"));
console.log(palindrome("Hola"));
console.log(palindrome("Anita lava la tina"));
console.log(palindrome("Ana lleva al oso la avellana"));