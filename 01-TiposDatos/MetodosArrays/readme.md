🔍 BÚSQUEDA: find, findIndex, includes, indexOf
🔄 TRANSFORMACIÓN: map, filter, reduce  
✅ VERIFICACIÓN: every, some
🔄 ITERACIÓN: forEach
📊 ORDENAMIENTO: sort, reverse
➕ MODIFICACIÓN: push, pop, shift, unshift (MUTAN el original)
✂️ EXTRACCIÓN: slice (NO muta), splice (SÍ muta)
🔗 UNIÓN: concat, join
🆕 MODERNOS: flat, flatMap

❗ IMPORTANTE: 
- Los que MUTAN el original: push, pop, shift, unshift, sort, reverse, splice
- Los que NO mutan: map, filter, find, slice, concat, etc.
- Usa [...array] para hacer copias antes de mutar



filter(): Es como un colador. Sirve para seleccionar los elementos que cumplan con una condición específica. De un array grande, te quedas solo con un subconjunto de lo que necesitas.

map(): Es como una máquina de transformación. Se usa para modificar cada elemento de un array. Si tienes una lista de precios, map puede convertirlos en "precio con IVA" o "precio con descuento". El número de elementos en el array de salida siempre será el mismo que el del array de entrada.

reduce(): Es como una licuadora. Se usa para combinar todos los elementos del array en un solo valor. Ese valor puede ser un número (la suma total), una cadena de texto, o un objeto complejo (como el inventario por categoría que calculaste). Es el método más flexible y poderoso.

sort(): Es como un archivador. Se usa para ordenar los elementos de un array. Ya sea por números, letras, o algún otro criterio.

slice(): Es como unas tijeras. Se usa para cortar una porción específica de un array, creando un nuevo array con esa porción.