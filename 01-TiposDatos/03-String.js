// Concatenación
let myName = "El pepe";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes
console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas

console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Daniel"))
console.log(greeting.indexOf("Dante"))

console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("El pepe"))
console.log(greeting.includes("Y ete Secth"))

console.log(greeting.startsWith("Hola")) // True
console.log(greeting.endsWithsWith("!")) // True

// Extraer partes
console.log(greeting.substring(0,4)); // "Hola"
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.charAt(0)); // "H"

// Reemplazar
console.log(greeting.replace("El pepe", "Daniel")); // "Hola Daniel !"

// Dividir
texto.split(" ");            // ["Hola", "Daniel", "!"]

// Limpiar espacios
"  texto  ".trim();          // "texto"

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
    es mi
    curso de
    JavaScript`
console.log(message);

// Interpolación de valores
let email = "braismoure@mouredev.com";
console.log(`Hola, ${myName}! Tu email es ${email}.`);


// Escapar caracteres especiales
let comillas = "Él dijo: \"Hola\"";
let saltoLinea = "Primera línea\nSegunda línea";
let tab = "Columna1\tColumna2";