//Importar el modulo(paquete)
const fs = require('fs'); //Se convierte en un objeto
const colors = require('colors');

let listarArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(colors.red.underline(`El valor introducido ${base} no es un número`)); //El reject no para y continua
            return;
        }
        let tex = 'Probando'.yellow;
        console.log("==================".green);
        console.log(`Tabla de ${base}`.green);
        console.log("==================".green);
        console.log(tex);

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(data);
    })
};


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(colors.red.underline(`El valor introducido ${base} no es un número`)); //El reject no para y continua
            return;
        }
        let data = "";

        for (let i = 0; i <= limite; i++) {
            data += (`${base} x ${i} = ${base * i} \n`);

        }

        //Callback
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`El archivo tabla-${base}.txt ha sido creado`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}