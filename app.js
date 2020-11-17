const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log(tarea.completado);
        }
        break;

    case 'actualizar':
        let completado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (completado) {
            console.log('Guardado');
        } else {
            console.log('No guardo');
        }

        break;

    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);

        if (eliminado) {
            console.log('Eliminado');
        } else {
            console.log('No se logro eliminar');
        }

        break;

    default:
        console.log('Comando no reconocido');
}