const argv = require('./config/yargs.js').argv;
const
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./tablas/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.b, argv.limite);
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.b, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}

//let parametro = argv[2]
//let base = parametro.split('=')[1]