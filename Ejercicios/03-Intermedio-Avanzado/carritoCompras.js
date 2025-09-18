// Mostrar productos disponibles
// Agregar productos al carrito
// Calcular el total
// Aplicar descuentos según ciertas condiciones


// -------- Conceptos en practica --------
// Arrays y objetos
// Ciclos (for, while)
// Condicionales (if/else)
// Funciones
// Operaciones matemáticas


const productos = [
    { id: 1, nombre: "Monitor", precio: 900000},
    { id: 2, nombre: "Mousepad", precio: 45000 },
    { id: 3, nombre: "Mouse Razer", precio: 350000 },
    { id: 4, nombre: "Microfono", precio: 650000 },
    { id: 5, nombre: "Teclado", precio: 287000 },
    { id: 6, nombre: "Ryzen 7 7750X3D", precio: 1490000 },
    { id: 7, nombre: "Audifonos", precio: 65000 },
    { id: 8, nombre: "Ventiladores", precio: 95000 },
    { id: 9, nombre: "Cable de red", precio: 55000 },
    { id: 10, nombre: "Camara", precio: 299000 },
    { id: 11, nombre: "teclado Mecanico", precio: 405000 },
    { id: 12, nombre: "Planta", precio: 5000 },
];

let carrito = [];

/*  
    Cuando yo quiero imprimir o mostrar lo que hay en un Array usando una funcion con un ciclo,
    se hace de esta forma: 
*/

//Funcion para mostrar los productos en consola
const mostrarProductos = () => {
    /**
        Se crea un ciclio para poder recorrer esa array
        Se inicializa el indice = 0, se tiene que crear la condicion de que sea menor o igual al largo del array e incrementar el valor del indice 
    */
    for (let i = 0; i < productos.length; i++) {
        /** 
            cuando se crea la condicion del indice ya puedo mostrar en consola el array, y para ello habiamos hecho que:
            Mientras el valor de i fuera menor o igual al largo del array iba a ir incrementando su valor (0, 1, 2, 3, etc...)
            de esta forma puedo hacer un console.log de productos que es el array y como es un array necesito saber su indice o 
            mostrar que hay en que posicion del array y para ello uso la variable [i]
        */
        console.log(productos[i]);
    };
};

mostrarProductos(productos);



//Funcion para buscar productos
/**
 * Para crear una funcion que busque un producto del array tiene que recibir como parametro ese campo especifico por el que se desea filtrar
 */
const buscarProducto = ( id ) => {

    //Se crea una variable para guardar o retornar el producto filtrado
    let productoFiltrado = null;

    //Se tiene que recorrer el array por completo
    for (let i = 0; i < productos.length; i++){
        
        //Se hace la condicional de si el id que se recibio como argumento es exactamente igual al campo id que hay en los objetos del array
        if(id === productos[i].id){
            //si se encuentra entonces la variable para guardar el producto filtrado sera igual al la posicion del array donde se encuentra el item
            productoFiltrado = productos[i];
            //y se rompe la condicional porque se encontro el producto
            break;
        };
    };

    //Se hace otra condicional para retornar el producto o una alerta en caso de no ser encontrado
    //si el producto filtrado existe, entonces aparte de retornarlo hace un console.log
    if(productoFiltrado){
        console.log(`Producto encontrado:`, productoFiltrado);
        return productoFiltrado;

    //Si NO se encuentra un producto filtrado entonces retorna null
    } else{
        console.warn('Producto no encontrado');
        return null;
    };
};



//Sistema carrito
//Para agregar un producto a un carrito en este caso tiene que recibir como parametro un id del producto
const agregarCarrito = ( idProducto ) => {
    //Necesitamos guardar el producto filtrado en un producto en esta funcion
    const producto = buscarProducto(idProducto);

    //si no esta el producto retorna un console.log
    if(!producto){
        console.log("No se puede agregar el producto al carrito");
        return;
    };

    //es necesario tener una variable para usarla para verificar si el producto esta en el carrito (por defecto es null)
    let productoEnCarrito = null;

    //Necesitamos recorrer el array del carrito
    for(let i = 0; i < carrito.length; i++){
        //si en el carrito en cualquiera de los indices hay un item con un id igual al argumento que se recibio en la funcion
        if(carrito[i].id === idProducto){
            //entonces la variable productoEnCarrito será igual al OBJETO que está en ese índice del array
            productoEnCarrito = carrito[i];
            break;
        };
    };

    //Si esta la variable productoEnCarrito
    if(productoEnCarrito){
        //entonces solo hara que se aumente la cantidad de ese producto
        productoEnCarrito.cantidad++;
        //y un mensaje en consola avisando que se agrego el producto con su nombre y su cantidad
        console.log(`Se agregó otra unidad de ${producto.nombre}. Cantidad: ${productoEnCarrito.cantidad}`);
    } else {
        //de lo contrario si no esta el productoEnCarrito
        //hara un .push de ese producto con sus valores al array carrito y una cantidad
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
        //mensaje en consola con el nombre del producto
        console.log(`${producto.nombre} agregado al carrito`);
    };

};

agregarCarrito(2);
agregarCarrito(2);
agregarCarrito(4);
agregarCarrito(5);
agregarCarrito(7);

agregarCarrito(1);
agregarCarrito(2);
agregarCarrito(3);


//Funcion para mostrar el Carrito
const mostrarCarrito = () => {
    //si la longitud del array de carrito es igual a 0 entonces esta vacio
    if(carrito.length === 0){
        console.log('El carrito esta vacio');
        return
    };

    let totalCarrito = 0;       //varibale para saber el total de carrito
    let cantidadArticulos = 0;  //varibale para saber la cantidad de articulos

    console.log("=== CARRITO DE COMPRAS ===");

    //Necesitamos recorrer el array del carrito
    for(let i = 0; i < carrito.length; i++){
        const item = carrito[i];                        //varibale para guardar el item o producto del array segun su indice
        const subTotal = item.precio * item.cantidad;   //varibale para el subtotal, es igual al producto con su precio multiplicado por su cantidad

        /** 
         * Mensaje en consola que muetra en orden primero el indice del array concatenando o agregando el 1
         * con su cantidad, el precio por unidad, el subtotal de ese producto
        */
        console.log(`${i + 1}. ${item.nombre} - Cantidad: ${item.cantidad} - Precio unitario: $${item.precio} - Subtotal: $${subTotal}`);


        totalCarrito += subTotal; //Se usa la variable totalCarrito que es igual al subTotal mas la suma de cada uno del subtotal
        cantidadArticulos += item.cantidad; // La variable de cantidad Articulos es igual a la cantidad de productos sumados
    };
    console.log("==========================");
    console.log(`Total de artículos: ${cantidadArticulos}`);
    console.log(`Total a pagar: $${totalCarrito}`);
    console.log("==========================");
};

mostrarCarrito();