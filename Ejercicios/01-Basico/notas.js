/**
 * 13 Dado un array de objetos "estudiante" con notas, calcula:
 * - Promedio general
 * - Nota más alta y más baja
 * - Cantidad de estudiantes aprobados (nota >= 6)
 */

const aula = [
    {nombreEstudiante: 'Sofia', nota: 8},
    {nombreEstudiante: 'Sara', nota: 9},
    {nombreEstudiante: 'Ana', nota: 7},
    {nombreEstudiante: 'Angela', nota: 3},
    {nombreEstudiante: 'Laura', nota: 5},
    {nombreEstudiante: 'Isabela', nota: 6},
]

const promedioGeneral = () => {
    let sumaNotas = 0;
    let promedioAula = 0;
    for(let key of aula){
        sumaNotas += key.nota;
        promedioAula = sumaNotas / aula.length;
    }
    console.log(`El promedio del aula es: ${promedioAula}`);
}

const notaMayorYMenor = () => {
    let notaMayor = 0;
    let notaMenor = 10;

    for(let key of aula){
        if(key.nota > notaMayor){
            notaMayor = key.nota;
        }
        if(key.nota < notaMenor){
            notaMenor = key.nota;
        }
    }

    console.log(`La Nota mas alta es: ${notaMayor}`);
    console.log(`La Nota mas baja es: ${notaMenor}`);
}

const estudantesAprobados = () => {
    let contador = 0;
    console.log('Lista de estudiantes aprobados: ');
    for(let key of aula){
        if(key.nota >= 6){
            contador++;
            console.log(`|- ${key.nombreEstudiante}: ${key.nota}`);
        }
    }
    console.log(`Total estudiantes aprobados: ${contador}`);
    // const aprobados = aula.filter(obj => obj.nota >= 6);
    // console.log('Lista estudiantes aprobados')
    // console.log(aprobados);
}

promedioGeneral();
notaMayorYMenor();
estudantesAprobados();