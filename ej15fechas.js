const diasEntreFechas = (fecha1, fecha2) => {
    // Validar formato dd/MM/yyyy
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!regex.test(fecha1) || !regex.test(fecha2)) {
        throw new Error("Formato de fecha inválido. Usa dd/MM/yyyy");
    }

    function validarFecha(fechastr) {
        const [_, dia, mes, año] = fechastr.match(regex);
        const fecha = new Date(año, mes - 1, dia);
        if (fecha.getDate() != dia || fecha.getMonth() != mes - 1 || fecha.getFullYear() != año) {
            throw new Error(`Fecha inválida: ${fechaStr}`);
        }
        return fecha;
    }
    const f1 = validarFecha(fecha1);
    const f2 = validarFecha(fecha2);

    const diferenciaMs = Math.abs(f1 - f2);
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    return dias;
};

console.log(diasEntreFechas("01/01/2024", "05/01/2025")); // 4
console.log(diasEntreFechas("06/02/2022", "01/03/2026"));