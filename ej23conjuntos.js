function combinarArrays(arr1, arr2, booleano) {
    let arrayComun = [];
    let arrayNoComun = [];
    if (booleano) {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j] && !arrayComun.includes(arr1[i])) {
                    arrayComun.push(arr1[i]);
                }
            }
        }
        return arrayComun;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (!arr2.includes(arr1[i]) && !arr1.includes(arr2[j])  && 
                !arrayNoComun.includes(arr1[i])) {
                    arrayNoComun.push(arr1[i]);
                    arrayNoComun.push(arr2[j]);
                }
            }
        }
        
        return arrayNoComun;
    }


} 
console.log(combinarArrays([1, 2, 3, 5, 8], [3, 4, 5, 8], true)); 
console.log(combinarArrays([1, 4, 3, 6], [3, 4, 5, 6], false));
console.log(combinarArrays(['a', 'b', 'c', 'd'], ['c', 'd', 'e', 'f'], true));
console.log(combinarArrays(['a', 'b', 'c', 'd'], ['c', 'd', 'e', 'f'], false));