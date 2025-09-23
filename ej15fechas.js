const diasEntreFechas = ((fecha1, fecha2, unidad = "dias") => {
    // Validar formato dd/MM/yyyy
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!regex.test(fecha1) || !regex.test(fecha2)) {
        throw new Error("Formato de fecha inválido. Usa dd/MM/yyyy");
    }

    function validarFecha(fechaStr) {
        const [, dia, mes, año] = fechaStr.match(regex);
        const fecha = new Date(año, mes - 1, dia);
        if (fecha.getDate() != dia || fecha.getMonth() != mes - 1 || fecha.getFullYear() != año) {
            throw new Error(`Fecha inválida: ${fechaStr}`);
        }
        return fecha;
    }
    const f1 = validarFecha(fecha1);
    const f2 = validarFecha(fecha2);

    const diferenciaMs = Math.abs(f1 - f2);

    const factores = {
        años: 1000 * 60 * 60 * 24 * 365,
        dias: 1000 * 60 * 60 * 24,
        horas: 1000 * 60 * 60,
        minutos: 1000 * 60,
        segundos: 1000
    };

    if (!factores[unidad]) {
        throw new Error(`Unidad no válida: ${unidad}`);
    }

    return Math.floor(diferenciaMs / factores[unidad]);
});


console.log(diasEntreFechas("31/12/2022", "22/09/2025","años"));
console.log(diasEntreFechas("06/02/2001", "21/01/2025","dias"));
console.log(diasEntreFechas("14/01/1992", "06/02/2025","horas"));