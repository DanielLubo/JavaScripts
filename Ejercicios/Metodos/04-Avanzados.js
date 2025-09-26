const transacciones = [
    { id: 1, tipo: "ingreso", monto: 1500000, fecha: "2024-01-15", categoria: "Salario" },
    { id: 2, tipo: "gasto", monto: 200000, fecha: "2024-01-16", categoria: "Comida" },
    { id: 3, tipo: "gasto", monto: 800000, fecha: "2024-01-18", categoria: "Arriendo" },
    { id: 4, tipo: "ingreso", monto: 300000, fecha: "2024-01-20", categoria: "Freelance" },
    { id: 5, tipo: "gasto", monto: 150000, fecha: "2024-01-22", categoria: "Transporte" }
];

/**
 * Calcula el balance total (ingresos - gastos)
 * Encuentra la transacción de mayor monto
 * Agrupa las transacciones por tipo y calcula el total de cada uno
 * Encuentra el promedio de gastos
 * Crea un reporte que muestre el total gastado por categoría   
 */


//Calcula el balance total (ingresos - gastos)
const balanceTotal = transacciones.reduce((balance, transaccion) => {
    return transaccion.tipo === 'ingreso'
    ? balance + transaccion.monto
    : balance - transaccion.monto
}, 0);

console.log('El balance total es: ', balanceTotal.toLocaleString());


//Encuentra la transacción de mayor monto
const mayorTransaccion = transacciones.reduce((mayor, transaccion) => {
    return transaccion.monto > mayor.monto ? transaccion : mayor;
});

console.log(mayorTransaccion);


//Agrupa las transacciones por tipo y calcula el total de cada uno
const transaccionesPorTipo = transacciones.reduce((acc, transaccion) => {
    if(!acc[transaccion.tipo]){
        acc[transaccion.tipo] = 0;
    }
    acc[transaccion.tipo] += transaccion.monto;
    return acc;
}, {})

console.log(transaccionesPorTipo);


//Encuentra el promedio de gastos
const soloGastos = transacciones.filter(transaccion => transaccion.tipo === "gasto");

const promedioGastos = soloGastos.reduce((acc, transaccion) => acc + transaccion.monto, 0) / soloGastos.length
console.log(`Promedio de gastos: $${Math.round(promedioGastos).toLocaleString()}`);


//Crea un reporte que muestre el total gastado por categoría
const totalGastado = transacciones
    .filter(tr => tr.tipo === 'gasto')
    .reduce((acc, tra) => {
        acc[tra.categoria] = (acc[tra.categoria] || 0) + tra.monto;
        return acc;
    }, {})
console.log('Total gasto por categoria: ', totalGastado);




//=======================================================================================================

const estudiantesCompleto = [
    { 
        nombre: "Ana", 
        materias: [
            { nombre: "Matemáticas", notas: [85, 90, 88] },
            { nombre: "Historia", notas: [78, 82, 85] },
            { nombre: "Ciencias", notas: [92, 89, 94] }
        ]
    },
    { 
        nombre: "Luis", 
        materias: [
            { nombre: "Matemáticas", notas: [75, 80, 78] },
            { nombre: "Historia", notas: [88, 85, 90] },
            { nombre: "Ciencias", notas: [82, 79, 85] }
        ]
    }
];