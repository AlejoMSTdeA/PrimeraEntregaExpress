const {cursosOfertados, buscarCurso, crearMatricula, argv } = require('./cursos');


if (argv._[0] == 'inscribir') {
    
    let curso = buscarCurso(argv.i);

    if (!curso) {
        console.log('El curso no se encuentra ofertado revise las ofertas de nuevo \n');
        cursosOfertados();
    } else {
        crearMatricula(argv.n, argv.c, curso.id, curso.nombreCurso, curso.valorCurso, curso.duracionCurso);
    }
} else {
    cursosOfertados();
}