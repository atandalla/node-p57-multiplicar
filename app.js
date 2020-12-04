const argv = require('./config/yargs').argv;

//Destruccturacion
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar'); //(./) busque al mismo nivel

let comando = argv._[0]; ///(_)el guion bajo es la intruccion

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => { console.log(mensaje); })
            .catch(err => { console.log(err); })
        break;

    case 'imprimir':
        listarArchivo(argv.base, argv.limite)
            .catch(err => { console.log(err); })
        break;

}





// listarArchivo(argv.base, argv.limite);

// let base = 5;
// let argv2 = process.argv; //Todos los argumentos que nos manda
// let parametro = argv[2]; //lo que venga en la posicion

// let base = parametro.split('=')[1];



// multiplicar.crearArchivo(base)
//     .then(mensaje => {
//         console.log(mensaje);
//     })

// crearArchivo(base)
//     .then(mensaje => { console.log(mensaje); })
//     .catch(err => { console.log(err); })

// console.log(process.argv); //Un procesos es un programa en ejecucion y tengo un objeto de ello.