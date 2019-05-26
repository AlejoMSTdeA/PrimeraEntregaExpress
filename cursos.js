const cursos = [{
    id: 1001,
    nombreCurso: 'Curso lógica de programación',
    duracionCurso: '80 horas',
    valorCurso: 150000
},
{
    id: 1002,
    nombreCurso: 'Curso HTML5 y CSS3 con Bootstrap 4',
    duracionCurso: '50 horas',
    valorCurso: 160000
},
// Son objetos por lo tanto se usan los dos puntos
// en lugar del operador de asignación
{
    id: 1003,
    nombreCurso: 'Curso de formularios con macros en Excel 2016',
    duracionCurso: '70 horas',
    valorCurso: 180000
},
// El operador de asignación solo se usa
// con las palabras reservas var, let, const y al redinir una variable
{
    id: 1004,
    nombreCurso: 'Curso de estructuras de datos en Python',
    duracionCurso: '90 horas',
    valorCurso: 200000
}
];

const opciones = {
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
    cursos: {
        demand: true,
        alias: 'i'
    }
}

let cursosOfertados = () => {
    // Como se debe mostrar cada dos segundos,
    // cada setTimeout debe tener un tiempo diferente
    let timeout = 0;
    // forEach recorre toda la lista y ejecuta el código dentro del callback
    // La variable curso es un elemento de la lista
    cursos.forEach(curso => {
        setTimeout(() => {
            // Destructuro el objeto para no tener que usar
            // la notación punto curso.id, etc.
            const { id, nombreCurso, duracionCurso, valorCurso } = curso
            // la cadena dentro del método log es conocida como template o plantilla
            // y permite interpolar variables dentro de ella y mejora la legibilidad
            // del código.
            console.log(`El ${nombreCurso} con código ${id} tiene una duracion de ${duracionCurso} y un Valor de $${valorCurso} pesos \n`);
        }, timeout)
        timeout += 2000
    })
}

let buscarCurso = (idCurso) => {
    return cursos.find((item) => {
        return item.id === idCurso;
    });
}

const express = require('express')
const app = express()
 


let crearMatricula = (nombre, cedula, idCur, nomCur, valCur, durCur) => {
    texto = '<p>El estudiante <b>' + nombre + '</b><br>Con cedula <b>' + cedula + '</b><br>' + 'Se inscribió en el curso <b>' + idCur + '</b><br>' + nomCur + 'Con duración de <b>' + durCur + '</b><br>Con un valor de <b>$' + valCur + '</b>';
    app.get('/', function (req, res) {
  res.send(texto)
  console.log('\nEl Aspirante de nombre ' + nombre + ' y cedula ' + cedula + ' se inscribió al curso ' + idCur + ', ' + nomCur + '\n')

  console.log('La pre-matricula se ha creado Correctamente...');
})
 
app.listen(3000)

}
const argv = require('yargs')
    .command('inscribir', 'Matricula Cursos T de A', opciones)
    .argv

module.exports = {
    cursosOfertados,
    buscarCurso,
    crearMatricula,
    argv
};