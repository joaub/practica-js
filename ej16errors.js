
//TRY - Bloque del codigo que se va a evaluar
//CATCH - Bloque del codigo que se ejecuta si se encuentra un error en el bloque TRY
//FINALLY - Bloque de codigo (opcional) que se va a ejecutar una vez haya terminado el bloque TRY, independientemente de su resultado

try {
    let divisor = 0;
    if (divisor === 0) {
      throw new Error('División por cero no permitida');
    }
    let resultado = 10 / divisor;
    console.log(resultado);
  } catch (error) {
    console.error('Se ha producido un error:', error);
  } finally {
    console.log('El bloque try-catch ha terminado de ejecutarse.');
  }
  