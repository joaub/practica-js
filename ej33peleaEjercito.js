function batalla(bondadosos, malvados) {
    const razaBondadosa = {
        pelosos: 1,
        sureñosBuenos: 2,
        enanos: 3,
        númenóreanos: 4,
        elfos: 5
    };
    const razaMalvada = {
        sureñosMalos: 2,
        orcos: 2,
        goblins: 2,
        huargos: 3,
        trolls: 5
    };

    const fuerzaBien = Object.entries(bondadosos).reduce(
        (total,[raza,cantidad]) => { 
        return total + (razaBondadosa[raza] || 0)* cantidad 
    },0);

    const fuerzaMal = Object.entries(malvados).reduce(
        (total,[raza,cantidad]) =>{ 
        return total + (razaMalvada[raza] || 0)* cantidad 
    },0);
   
    if(fuerzaMal > fuerzaBien) {
        return "gana el mal";
    } else if(fuerzaBien > fuerzaMal) {
        return "gana el bien";
    } else{
        return "empate";
    }

}

console.log(
  batalla(
    { pelosos: 3 },
    { orcos: 1 }
  )
); 
console.log(
  batalla(
    { pelosos: 3 },
    { trolls: 1 }
  )
); 
console.log(
  batalla(
    { elfos: 1 },
    { trolls: 1 }
  )
); 
console.log(
  batalla(
    { elfos: 1, pelosos: 1, sureñosBuenos:2, enanos:1 },
    { trolls: 2, sureñosMalos:1 }
  )
); 