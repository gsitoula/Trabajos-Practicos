var arr = ["hola", "soy", "Gastón"];

reverse(arr);

function reverse(arr) {
        	var arx = [];
    if (Array.isArray(arr)) {
        console.log(true);
        for (var i = arr.length-1 ; i >= 0; i--) {
        	arx.push(arr[i]);

        }
        	console.log(arx);
    } else {
        console.log("el elemento seleccionado no es un array");
        console.log(false);

    }
}

