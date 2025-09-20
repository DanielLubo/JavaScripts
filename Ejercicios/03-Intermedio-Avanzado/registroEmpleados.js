/**
 * 17. REGISTRO DE EMPLEADOS
 * Crea un array de objetos "empleado" con: id, nombre, departamento, salario, antiguedad.
 * Implementa funciones para:
 * - Promedio de salarios por departamento
 * - Empleado con mayor antigüedad
 * - Total de nómina
 * - Aumentar salario a empleados con más de 3 años (10%)
 */

const empleados = [
    {id: 0, nombre: 'Ana Sofia', departamento: 'Desarrollo', salario: 4000000, antiguedad: 3},
    {id: 1, nombre: 'Sara', departamento: 'Desarrollo', salario: 4000000, antiguedad: 2},
    {id: 3, nombre: 'Daniela', departamento: 'Marketing', salario: 2000000, antiguedad: 1},
    {id: 4, nombre: 'Angela', departamento: 'Contabilidad', salario: 2500000, antiguedad: 1},
    {id: 5, nombre: 'Leidy', departamento: 'Mercancia', salario: 3600000, antiguedad: 3},
    {id: 6, nombre: 'Nose', departamento: 'sI', salario: 2000000, antiguedad: 8},
];

//Promedio de salarios por departamento
const average = ( dep ) => {
    const averageDeparment = empleados.filter(depar => depar.departamento === dep);

    if(averageDeparment.length > 0){
        const totalSalaries = averageDeparment.reduce((sum, empleado) => {
            return sum + empleado.salario;
        }, 0);

        const averageSalary = totalSalaries / averageDeparment.length;
        console.log(`El salario promedio del departamento de ${dep} es: $${averageSalary.toLocaleString('es-CO')}`);
    } else {
        console.log(`El departamento con nombre: ${dep}, no se ha encontrado`);
    }
}

//Empleado con mayor antigüedad
const greaterSeniority = () => {
    const seniority = empleados.reduce((prev, current) => {
        return (prev.antiguedad > current.antiguedad) ? prev : current;
    });

    console.log(`El empleado mas antiguo es: ${seniority.nombre} - ${seniority.antiguedad}`);
}

//Total de nómina
const paysheet = () => {
    const totalPaySheet = empleados.reduce((total, empleado) =>{
        return total + empleado.salario;
    }, 0);

    console.log(`El total de la nomina es: $${totalPaySheet.toLocaleString('es-CO')}`);
    return totalPaySheet;
}

//Aumentar salario a empleados con más de 3 años (10%)
const increase = () => {
    const empleadosViejos = empleados.filter( viejo => viejo.antiguedad >= 3);

    const empleadoConAumento = empleadosViejos.map(empleado => {

        const nuevoSalario = empleado.salario * 1.10;
        return { ...empleado, salario: nuevoSalario };
    });

    console.log('Empleados con aumento de salario: ');
    console.log(empleadoConAumento);

    return empleadoConAumento;
};

average('Desarrollo');
greaterSeniority();
paysheet();
increase();