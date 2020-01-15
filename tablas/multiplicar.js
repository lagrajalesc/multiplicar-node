const fs = require('fs');
const
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número, por favor Chinga tu madre`);
            return;
        }

        let dato = '';
        for (let i = 0; i <= limite; i++) {
            dato += `${base} x ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tabla-${base}.txt`, dato, (err) => {
            if (err) reject(err);
            else
                resolve(`Tabla-${base}.txt`);



        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}