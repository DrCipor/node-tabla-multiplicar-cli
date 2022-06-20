const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let x = 1; x <= hasta; x++) {

            salida += `${base} x ${x} = ${x * base}\n`;
            consola += `${base} ${'x'.red} ${x} ${'='.red} ${x * base}\n`;
        }

        if (listar) {
            console.log('========================'.green);
            console.log('     Tabla del:'.green, colors.blue(base));
            console.log('========================'.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.rainbow;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
};







// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`);
// });