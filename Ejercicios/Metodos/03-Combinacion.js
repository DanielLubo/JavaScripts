const empleados = [
    { nombre: "Carlos", departamento: "IT", salario: 3000000 },
    { nombre: "Ana", departamento: "Marketing", salario: 2500000 },
    { nombre: "Luis", departamento: "IT", salario: 3500000 },
    { nombre: "María", departamento: "Ventas", salario: 2800000 },
    { nombre: "Pedro", departamento: "IT", salario: 4000000 },
    { nombre: "Sofia", departamento: "Marketing", salario: 2700000 }, 
    { nombre: "Juan", departamento: "Marketing", salario: 2400000 },
];

/**
 * Encuentra todos los empleados de IT con salario mayor a 3,000,000 y devuelve solo sus nombres
 * Calcula el salario promedio de los empleados de Marketing
 * Crea un array con el formato "Nombre - Departamento" solo para empleados con salario > 2,600,000
 */


const nombresEmpleadosIT = empleados
    .filter(empleado => empleado.departamento === 'IT' && empleado.salario > 3000000)
    .map(empleado => empleado.nombre);

// console.log('Empleados IT con salario mayor a 3000000: ', nombresEmpleadosIT);

const promedioEmpleados = empleados
    .filter(empleado => empleado.departamento === 'Marketing')
    .reduce((acc, empleado) => acc + empleado.salario, 0) /
    empleados.filter(empleado => empleado.departamento === 'Marketing').length;

// console.log('El salario promedio de los empleados de marketing es: ',promedioEmpleados);

const nombreDepartamento = empleados
    .filter(empleado => empleado.salario > 2600000)
    .map(empleado => `${empleado.nombre} - ${empleado.departamento}`);

// console.log('Empleados con salario mayor a 2600000: ',nombreDepartamento);














//========================================================================================

const productos = [
    { id: 1, nombre: "Smartphone", categoria: "Electronicos", precio: 800000, stock: 5, rating: 4.5 },
    { id: 2, nombre: "Laptop", categoria: "Electronicos", precio: 1200000, stock: 0, rating: 4.8 },
    { id: 3, nombre: "Camiseta", categoria: "Ropa", precio: 50000, stock: 15, rating: 4.2 },
    { id: 4, nombre: "Audífonos", categoria: "Electronicos", precio: 200000, stock: 8, rating: 4.6 },
    { id: 5, nombre: "Zapatos", categoria: "Ropa", precio: 150000, stock: 3, rating: 4.0 },
    { id: 6, nombre: "Planta", categoria: "Decoracion", precio: 150000, stock: 3, rating: 4.7 },
    { id: 7, nombre: "Lampara", categoria: "Electronicos", precio: 150000, stock: 3, rating: 4.9 }
];

/**
 * Productos Disponibles: Filtra productos con stock > 0
 * Productos Premium: Encuentra productos con rating >= 4.5 y precio > 100,000
 * Resumen por Categoría: Crea un objeto que muestre cuántos productos hay por categoría
 * Productos Más Vendidos: Filtra productos con rating >= 4.5, ordénalos por precio descendente y toma los primeros 3
 * Valor Total del Inventario: Calcula el valor total del inventario (precio × stock) por categoría
 */


//Productos disponibles
const filtroProductosDisponibles = productos.filter(producto => producto.stock > 0);
console.log(filtroProductosDisponibles);

//Productos Premium
const filtroProductosPremium = productos.filter(producto => producto.rating >= 4.5 && producto.precio > 100000);
console.log('Productos Premium',filtroProductosPremium.length);

//Resumen Categoria
const resumenCategoria = productos
    .reduce((acc, producto) => {
        acc[producto.categoria] = (acc[producto.categoria] || 0) + 1;
        return acc;
    }, {});
console.log(resumenCategoria);

//Productos Mas vendidos
const productosMasVendidos = productos
    .filter(producto => producto.rating >= 4.5)
    .sort((a, b) => b.precio - a.precio)
    .slice(0, 3);

console.log('Productos más vendidos (top 3):', productosMasVendidos);

//Valor total Inventario
const inventario = productos.reduce((acc, producto) => {

    const valorProducto = producto.precio * producto.stock;

    (acc[producto.categoria]) 
        ? acc[producto.categoria] += valorProducto 
        : acc[producto.categoria] = valorProducto;

    return acc;
}, {});

console.log(inventario);