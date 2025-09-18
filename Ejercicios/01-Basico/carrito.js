/**
 * 12 Crea un objeto "carrito" con un array de productos. Cada producto tiene: nombre, precio, cantidad. Implementa métodos para:
 * - Agregar producto
 * - Calcular total
 * - Mostrar resumen del carrito
 */

let carritoCompras = [];

const carrito = {
    productos : [
        {nombre : 'Cheetos', precio : 2000, cantidad: 0},
        {nombre : 'Doritos Flamin Hot', precio : 2800, cantidad: 0},
        {nombre : 'Cheetos Flamin Hot', precio : 2200, cantidad: 0},
        {nombre : 'Doritos Dinamita', precio : 3800, cantidad: 0},
        {nombre : 'Papas Pollo', precio : 2500, cantidad: 0},
    ],
    agregarProducto (nombreProducto) {

        let productoEncontrado = false;

        for(const producto of this.productos){
            if(nombreProducto === producto.nombre){
                productoEncontrado = true;

                let enCarrito = false;
                for(const item of carritoCompras){
                    if(item.nombre === producto.nombre){
                        item.cantidad ++;
                        enCarrito = true;
                    }
                }
                if(!enCarrito){
                    carritoCompras.push({ ...producto, cantidad: 1 });
                }
                console.log("Producto agregado al carrito");
            }
        }
        if(!productoEncontrado){
            console.log('El producto no se ha encontrado');
        }
    },
    mostrarCarrito () {
        let totalProducto = 0;

        console.log('/- Carrito de compras --------------/');
        for(let key of carritoCompras){
            totalProducto = key.precio * key.cantidad;

            console.table(`| ${key.nombre} ... (${key.cantidad}): ${totalProducto.toLocaleString('es-CO')} `);

        }
        console.log('/-----------------------------------/');
        return totalProducto;
    },
    totalCarrito () {
        let precioProducto = 0;
        let totalPagar = 0;

        for(let key of carritoCompras){
            precioProducto = key.precio * key.cantidad;
            totalPagar += precioProducto;
        }
        console.log(`Total a pagar factura: ${totalPagar.toLocaleString('es-CO')}`);
    },
};