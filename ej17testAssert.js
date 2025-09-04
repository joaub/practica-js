const assert = require('assert');

// Prueba que una función lance un error específico
function suma(a, b) {
  return a + b;
}

// Tests
try {
  // Este test debería pasar
  assert.strictEqual(suma(2, 3), 5);

  // Este test debería fallar
  assert.strictEqual(suma(2, 3), 6);

   assert.strictEqual(suma(5, 3), 8);

  assert.notStrictEqual(suma(5, 3), 10); //Comprueba que a !== b.
  assert.ok(suma(5, 5) === 10); // Verifica que valor sea verdadero:
  assert.deepStrictEqual([1, 2], [1, 2]); // Compara objetos o arrays por contenido sean iguales:

  console.log("✅ Todos los tests pasaron");
} catch (error) {
  console.error("❌ Test falló:", error.message);
}