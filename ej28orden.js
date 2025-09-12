function listaOrdenada(lista, orden) {
    if (orden === 'asc') {
        return lista.slice().sort((a, b) => a - b)
    }else if (orden === 'desc') {
        return lista.slice().sort((a, b) => b - a)
    }else{
        return orden + ' no es un criterio de orden válido';
    }
    

}
console.log(listaOrdenada([5, 3, 8, 1], 'asc')); // [1, 3, 5, 8]
console.log(listaOrdenada([5, 3, 8, 1], 'desc'));
console.log(listaOrdenada([5, 3, 8, 10, 1], 'asc'));
console.log(listaOrdenada([5, 3, 8, 10, 1], 'none'));