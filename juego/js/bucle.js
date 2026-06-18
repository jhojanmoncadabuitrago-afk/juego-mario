var bucleInfinito = {
    id: null,
    fin: 0, // Fin del ciclo
    aps: 0, // Actualizaciones por segundo
    fps: 0, // Frames por segundo

    bucle: function(tiempo) {

        // Asegurarnos de que el bucle se siga llamando
        bucleInfinito.id = window.requestAnimationFrame(bucleInfinito.bucle);

        // Si es el primer ciclo y 'tiempo' viene indefinido,
        // le asignamos el tiempo actual
        if (!tiempo) {
            tiempo = performance.now();
        }

        var diferencia = tiempo - bucleInfinito.fin;

        // Ejecutar bloque cada ~1000 milisegundos (1 segundo)
        if (diferencia > 999) {
            console.log(`
fin=${bucleInfinito.fin}
tiempo=${tiempo}
diferencia=${diferencia}
            `);

            bucleInfinito.fin = tiempo;
        }
    }
};