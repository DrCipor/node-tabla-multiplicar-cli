// Tabla del 5 mediante consola
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 4;


