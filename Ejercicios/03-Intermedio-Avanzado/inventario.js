/**
 * 16. SISTEMA DE INVENTARIO
 * Crea un array de objetos "producto" con: id, nombre, categoria, stock, precio.
 * Implementa funciones para:
 * - Buscar productos por categoría
 * - Productos con stock bajo (menos de 5 unidades)
 * - Valor total del inventario
 * - Producto más caro y más barato
 */

const products = [
    {id: 0, name: 'Sofa LINAMAS', category: 'Sofas y sillones', stock: 4, price: 1200000},
    {id: 1, name: 'Sofa Glostad', category: 'Sofas y sillones', stock: 3, price: 1700000},
    {id: 2, name: 'Sofa 3 VIMLE', category: 'Sofas y sillones', stock: 2, price: 2000000},
    {id: 3, name: 'Mueble zapatos', category: 'Almacenamiento y Organizacion', stock: 10, price: 45000},
    {id: 4, name: 'Estanteria', category: 'Almacenamiento y Organizacion', stock: 5, price: 130000},
    {id: 5, name: 'Vela de Pared', category: 'Decoracion', stock: 25, price: 20000},
    {id: 6, name: 'Reloj de Pared', category: 'Decoracion', stock: 10, price: 45000},
    {id: 7, name: 'Tapete Bano', category: 'Bano', stock: 10, price: 54900},
    {id: 8, name: 'Flores ornamenta', category: 'Decoracion', stock: 10, price: 35000},
]

//Buscar productos por categoría
const searchProductsByCategory = ( categ ) => {
    let productsCategory = [];          // Array para agregar los productos por categoria
    let productFound = false;           // Variable para saber el estado de, si se encontro o no un producto

    for(let obj of products){           // Recorrer el array de 'products'
        if(obj.category === categ){     // Filtrar o buscar si alguno de los objetos tiene en su categoria el mismo argumento pasado por parametro a la funcion
            productsCategory.push(obj); // Realizar un .push del objeto que si tenga esa categoria al array 'productsCategory'
            productFound = true;        // Cambiar el estado de la variable a true, porque si se encontro un producto con esa categoria
        }
    }

    if(!productFound){                  // Preguntar el estado de 'productFound'. SI sigue en false entonces imprimir este clg
        console.log('Categoria no encontrada');
    } else {                            // SiNo esta en false entonces imprimir este otro clg
        console.log(`Productos en la categoria de: ${categ}`);
    }

    for(let obj of productsCategory){   // Recorrer el array 'productsCategory'
        console.log(obj);               // Imprimir en consola los objetos que se encuentran en el array
    }

    // Version optimizada con filter
    // const filteredProducts = products.filter(product => product.category === categ);

    // if(filteredProducts.length > 0){
    //     console.log(`Productos en la categoría de: ${category}`);
    //     console.log(filteredProducts);
    // } else {
    //     console.log(`Categoría no encontrada: ${category}`);
    // }
}

//Productos con stock bajo (menos de 5 unidades)
const productsLowStock = () => {
    let productsLowStock = [];          // Array para agregar los productos con stock menor a 5 unidades
    let productFound = false;           // Variable para saber el estado de, si se encontro o no un producto

    for(let obj of products){           // Recorrer el array de 'products'
        if(obj.stock <= 5){             // Filtrar o buscar si algun objeto en su propiedad stock tiene menor o igual a 5
            productsLowStock.push(obj); // Realizar un .push al array 'productsLowStock' con los productos con stock menor o igual a 5
            productFound = true;        // Cambiar el estado de la variable a true, porque si se encontro un producto con stock menor o igual a 5
        }
    }

    if(!productFound){                  // Preguntar el estado de 'productFound'. SI sigue en false entonces imprimir este clg
        console.log('No hay productos con stock bajo de menos de 5 unidades');
    } else {                            // SiNo esta en false entonces imprimir este otro clg
        console.log('Productos con stock menor a 5 unidades');
    }

    for(let obj of productsLowStock){   // Recorrer el array 'productsLowStock'
        console.log(obj);               // Imprimir en consola los objetos que se encuentran en el array
    }


    // Version optimizada con filter
    // const lowStockProducts = products.filter(product => product.stock < 5);

    // if(lowStockProducts.length > 0){
    //     console.log('Productos con stock menor a 5 unidades:');
    //     console.log(lowStockProducts);
    // } else {
    //     console.log('No hay productos con stock bajo de menos de 5 unidades.');
    // }
}

//Valor total del inventario
const inventoryValue = () => {

    const totalValue = products.reduce((accumulator, product) => {
        return accumulator + (product.stock * product.price);
    }, 0); // El '0' es el valor inicial del acumulador

    console.log(`Valor total del inventario: $ ${totalValue.toLocaleString('es-CO')}`);
}

//Producto más caro y más barato
const expensiveCheapestProduct = () => {

    const mostExpensive = products.reduce((prev, current) => {
        return (prev.price > current.price) ? prev: current;
    })

    const cheapest = products.reduce((prev, current) => {
        return (prev.price < current.price) ? prev : current;
    });

    console.log('Producto más caro:', mostExpensive);
    console.log('Producto más barato:', cheapest);
}


searchProductsByCategory('Decoracion');
productsLowStock();
inventoryValue();
expensiveCheapestProduct();