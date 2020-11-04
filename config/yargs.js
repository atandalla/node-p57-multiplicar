let opciones = {
    base: {
        demand: true, //la base es obligatoria
        alias: 'b',
        desc: 'La base de la Tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        desc: 'Limite de la Tabla de multiplicar'
    }
}

const argv = require('yargs')
    .command('imprimir', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tbla de multiplicar', opciones)
    .help()
    .argv;


module.exports = {
    argv
}