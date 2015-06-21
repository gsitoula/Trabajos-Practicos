function contarVocales(param) {
    //la función identifica si lo recibido es un array
    if (Array.isArray(param) === true) {
        //variables de cantidades
        var inc = 0;
        var inca = 0;
        var ince = 0;
        var inci = 0;
        var inco = 0;
        var incu = 0;
        var arraya = [];
        var arraye = [];
        var arrayi = [];
        var arrayo = [];
        var arrayu = [];

        for (var i = 0; i < param.length; i++) {
            //se prepara el array para trabajarlo
            var palabra = param[i];
            //spliteo del array
            palabra = palabra.split('');

            palabra.forEach(function(valor) {

                if (valor === 'a') {
                    inc++;
                    inca++;
                }
                if (valor === 'e') {
                    inc++;
                    ince++;
                }
                if (valor === 'i') {
                    inc++;
                    inci++;
                }
                if (valor === 'o') {
                    inc++;
                    inco++;
                }
                if (valor === 'u') {
                    inc++;
                    incu++;
                }
            });
        }
        //invididualmente, el programa proveera de la cantidad de
        //vocales que el Array posee
        arraya.push("hay" + " " + inca + " " + "a");
        arraye.push("hay" + " " + ince + " " + "e");
        arrayi.push("hay" + " " + inci + " " + "i");
        arrayo.push("hay" + " " + inco + " " + "o");
        arrayu.push("hay" + " " + incu + " " + "u");
        console.log(arraya);
        console.log(arraye);
        console.log(arrayi);
        console.log(arrayo);
        console.log(arrayu);
        return inc;

    } else {
        //si lo analizado no es un Array, ocurrirá esto
        alert("El parametro establecido no es un Array [object]")
    }

}