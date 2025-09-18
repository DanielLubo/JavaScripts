/**
 * 15 Crea un array de objetos "venta" (fecha, producto, cantidad, precio). Implementa funciones para:
 * - Ventas totales por producto
 * - Venta más grande del día
 * - Promedio de ventas
 * - Producto más vendido
 */

const sale = [
    {fecha: '01-09-2025', idProduct: 1, producto: 'Hamburguesa', cantidad: 2, precio: 25900},
    {fecha: '01-09-2025', idProduct: 2, producto: 'Sandwich', cantidad: 1, precio: 21500},
    {fecha: '02-09-2025', idProduct: 3, producto: 'Perro Caliente', cantidad: 4, precio: 17800},
    {fecha: '03-09-2025', idProduct: 4, producto: 'Pizza', cantidad: 2, precio: 45900},
    {fecha: '03-09-2025', idProduct: 1, producto: 'Hamburguesa', cantidad: 3, precio: 25900},
    {fecha: '03-09-2025', idProduct: 5, producto: 'Gaseosa', cantidad: 1, precio: 7500},
    {fecha: '04-09-2025', idProduct: 3, producto: 'Perro Caliente', cantidad: 2, precio: 17800},
]


// Funcion para Ventas totales por producto
const salesByProduct = () => {
    let arrayVentas = [];
    console.log(`Ventas Totales por productos`);

    for(let venta of sale){

        let buscar = false;

        for(let producto of arrayVentas){
            if(venta.idProduct === producto.idProduct){
                producto.cantidad += venta.cantidad;
                producto.precioTotal += (venta.cantidad * venta.precio);
                buscar = true;
            }
        }
        if(!buscar) {
            arrayVentas.push({
                idProduct: venta.idProduct,
                producto: venta.producto,
                cantidad: venta.cantidad,
                precioTotal : venta.cantidad * venta.precio
            });
        }
    }
    console.log(arrayVentas);
    return arrayVentas;
}

// Funcion para la Venta más grande del día
const salesDay = () => {
    let arrayVentaDia = [];
    let mayorVenta = 0;
    let menorVenta = Math.min(...arrayVentaDia.map(dia => dia.precioTotal));

    console.log(`|- Ventas del dia ----------------`);

    for(let venta of sale){
        let busqueda = false;
        for(let produ of arrayVentaDia){
            if(venta.fecha === produ.fecha){
                produ.precioTotal += venta.cantidad * venta.precio;
                busqueda = true;
            }
        }
        if(!busqueda){
            arrayVentaDia.push({
                fecha: venta.fecha,
                precioTotal : venta.cantidad * venta.precio
            });
        }
    }
    console.log(arrayVentaDia);

    for(let key of arrayVentaDia){
        if(key.precioTotal > mayorVenta){
            mayorVenta = key.precioTotal;
        }
    }
    console.log(`Mayor venta: ${mayorVenta.toLocaleString('es-CO')}`);

    for(let key of arrayVentaDia){
        if(key.precioTotal < mayorVenta){
            menorVenta = key.precioTotal;
        }
    }
    console.log(`Menor venta: ${menorVenta.toLocaleString('es-CO')}`);
}


const averageSale = () => {
    let promedio = 0;
    let ventasTotales = 0;

    for(let key of sale){
        ventasTotales += key.cantidad * key.precio;
    }
    promedio = ventasTotales / sale.length;

    console.log(`Promedio ventas: ${promedio.toLocaleString('es-CO')}`);
}

const bestProduct = () => {
    let arrayProductos = [];
    let mayorCantidad = 0;
    let mejorProducto = '';

    for(let ventas of sale){
        let busqueda = false;

        for(let obj of arrayProductos){
            if(obj.idProduct === ventas.idProduct){
                obj.cantidad += ventas.cantidad;
                busqueda = true;
            }
        }

        if(!busqueda) {
            arrayProductos.push({
                idProduct: ventas.idProduct,
                producto: ventas.producto,
                cantidad: ventas.cantidad,
            });
        }
    }

    for(let producto of arrayProductos){
        if(producto.cantidad > mayorCantidad){
            mayorCantidad = producto.cantidad;
            mejorProducto = producto.producto;
        }
    }
    console.log(`Producto más vendido: ${mejorProducto} con ${mayorCantidad} unidades`);
}

salesByProduct();
salesByProduct();
averageSale();
bestProduct();