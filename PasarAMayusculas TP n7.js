var fs = require("fs");
//selección del archivo desde la consola
var file = process.argv[2];

//lectura del archivo
fs.readFile(file, 'utf-8', function(err, data) {
    if (err) throw err;
    //proceso de intercambio de vocales por sus mayúsculas
    data = data.replace(/a/g, 'A');
    data = data.replace(/e/g, 'E');
    data = data.replace(/i/g, 'I');
    data = data.replace(/o/g, 'O');
    data = data.replace(/u/g, 'U');
    
    //se escribe el nuevo archivo con las vocales cambiadas
    fs.writeFile('tempMayus.txt', data, function(err) {
        if (err) throw err;
        //logueo de consola que anuncia la realización del proceso
        console.log('Las vocales han sido cambiadas');
    });
})