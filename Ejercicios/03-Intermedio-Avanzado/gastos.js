/**
 * 19. CONTROL DE GASTOS MENSUALES
 * Crea un array de objetos "gasto" con: fecha, categoria, descripcion, monto.
 * Implementa funciones para:
 * - Gastos por categoría
 * - Día con mayor gasto
 * - Promedio de gasto diario
 * - ¿Se excedió el presupuesto mensual? (parámetro: presupuesto)
 */

const gastos = [
    {fecha: '12-10-2025', categoria: 'Gustos', descripcion: 'Mucho texto', monto: 20000},
    {fecha: '12-10-2025', categoria: 'Pasajes', descripcion: 'Transmilenio', monto: 4600},
    {fecha: '13-10-2025', categoria: 'Comida', descripcion: 'Huevos', monto: 25000},
    {fecha: '13-10-2025', categoria: 'Pasajes', descripcion: 'Taxi', monto: 11500},
    {fecha: '13-10-2025', categoria: 'Recibos', descripcion: 'Recibo de agua', monto: 30500},
    {fecha: '14-10-2025', categoria: 'Imprevisto', descripcion: 'Compra monitor', monto: 65000},
];

//Gastos por categoria
const gastosPorCategoria = ( cat ) => {
    const gastosFiltrados = gastos.filter(categoria => categoria.categoria === cat);

    if(gastosFiltrados.length > 0){
        console.log(gastosFiltrados);
    } else {
        console.log('No se ha encontrado la categoria buscada');
    }
}

//Día con mayor gasto
const diaConMayorGasto = () => {
    const gastosDiarios = {};

    gastos.forEach(gasto => {
        const {fecha, monto} = gasto;
        //const fecha = gasto.fecha;
        //const monto = gasto.monto;
        gastosDiarios[fecha] = (gastosDiarios[fecha] || 0) + monto;
    })

    let maxGasto = 0;
    let diaMaxGasto = '';

    for(let fecha in gastosDiarios){
        if(gastosDiarios[fecha] > maxGasto){
            maxGasto = gastosDiarios[fecha];
            diaMaxGasto = fecha;
        }
    }

    if(diaMaxGasto){
        resultado = {fecha: diaMaxGasto, montoTotal : maxGasto};
        console.log(resultado);
        return resultado
    } else {
        console.log('a');
        return null;
    }
};

//Promedio de gasto diario
const gastoDiario = () => {
    const gastosPorDia = gastos.reduce((acumulador, gasto) =>{
        const {fecha, monto} = gasto;
        acumulador[fecha] = (acumulador[fecha] || 0) + monto;
        // acumulador[fecha] ? acumulador[fecha] += monto : acumulador[fecha] = monto;
        return acumulador;
    }, {});

    const valoresGastos = Object.values(gastosPorDia);

    const sumaTotalGastos = valoresGastos.reduce((suma, valor) => {
        return suma + valor;
    }, 0);

    const promedio = sumaTotalGastos / valoresGastos.length;
    console.log(`El promedio de gastos por dia es: ${promedio}`);
}

//¿Se excedió el presupuesto mensual? (parámetro: presupuesto)
const verificarExcesoPresupuesto = ( presupuesto ) => {
    const valorGasto = gastos.reduce((total, gasto) => {
        return total + gasto.monto;
    }, 0);
    return valorGasto > presupuesto;
}

diaConMayorGasto();
gastosPorCategoria('Pasajes');
gastoDiario();

console.log("¿Se excedió el presupuesto?", verificarExcesoPresupuesto(200000));