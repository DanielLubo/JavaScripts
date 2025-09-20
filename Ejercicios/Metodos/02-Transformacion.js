const precios = [100, 250, 80, 150, 300];
const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
];


/**
 * Aplica un descuento del 20% a todos los precios
 * Convierte todos los precios a dólares (dividir por 4000 - suponiendo pesos colombianos)
 * Crea un array solo con los nombres de los productos
 * Crea un array con strings que digan: "El producto X cuesta Y pesos"
 */


console.log('Metodo Map');

const descuento = precios.map(precio => precio - (precio * 0.20));
console.log(descuento);

const conversion = precios.map(precios => precios * 4000);
console.log(`Dolar a peso colombiano : ${conversion}`);

const nombresProductos = productos.map(producto => producto.nombre);
console.log(`Map - Solo nombres : ${nombresProductos}`);

const nombresString = productos.map(producto => ('El producto' + '-' + producto.nombre + '-' + 'cuesta :' + producto.precio));
console.log(nombresString);

console.log('----------------------------------------------------------');

//=======================================================================================




const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Bogota" },
    { nombre: "María", edad: 17, ciudad: "Medellin" },
    { nombre: "Pedro", edad: 30, ciudad: "Cali" },
    { nombre: "Ana", edad: 16, ciudad: "Bogota" },
    { nombre: "Luis", edad: 28, ciudad: "Medellin" }
];

/**
 * Filtra solo los mayores de edad
 * Filtra solo las personas de Bogotá
 * Filtra mayores de edad que viven en Medellín
 * Filtra personas cuyo nombre tenga más de 4 letras
 */

console.log('Metodo Filter');

const mayoresEdad = personas.filter(persona => persona.edad > 18);
console.log(mayoresEdad);

const filtroBogota = personas.filter(persona => persona.ciudad === 'Bogota');
console.log(filtroBogota);

const filtro = personas.filter(persona => persona.edad > 18 && persona.ciudad === 'Medellin');
console.log(filtro);

const nombreCuatro = personas.filter(persona => (persona.nombre).length > 4);
console.log(nombreCuatro);

console.log('------------------------------------------------------------');

//==========================================================================




const ventas = [1500, 2300, 800, 1200, 3000];
const palabras = ["Hola", "mundo", "desde", "JavaScript"];
const productosDos = [
    { categoria: "Electrónicos", precio: 500 },
    { categoria: "Ropa", precio: 100 },
    { categoria: "Electrónicos", precio: 800 },
    { categoria: "Hogar", precio: 200 },
    { categoria: "Ropa", precio: 150 }
];

/**
 * Suma todas las ventas
 * Encuentra la venta más alta
 * Concatena todas las palabras en una sola frase
 * Cuenta cuántos productos hay por categoría (devuelve un objeto)
 * Calcula el precio promedio de todos los productos
 */

console.log('Metodo Reduce');

const res = ventas.reduce((acc, item) => {
    return acc += item;
}, 0);

console.log(res);


const ventaAlta = ventas.reduce((acc, item) => {
    return item > acc ? item : acc;
}, 0);

console.log(ventaAlta);


const frace = palabras.reduce((acc, item) => {
    return acc += ' ' + item;
});

console.log(frace);

const productosCategoria = productosDos.reduce((acc, item, index) => {
    acc[item.categoria] = (acc[item.categoria] || 0) + 1;
    return acc;
}, {});

console.log(productosCategoria);


const promedio = productosDos.reduce((acc, producto) => acc + producto.precio, 0);
const precioPromedio = promedio / productosDos.length;

console.log(precioPromedio);