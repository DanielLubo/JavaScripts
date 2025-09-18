/**
 * Estos son los tipos de datos Primitivos
 */

/* Tipo Number */
let numero = 1;
let decimal = 3.14;
let negativo = -10;

/* Tipo String */
let texto = "Webosxd";
let texto2 = 'También con comillas simples';
let template = `Template literal ${texto}`; // Backticks
console.log(texto, texto2, template);

texto = "ete setc"; //De esta forma se le puede volver a reasignar el valor de la variable texto
console.log(texto);
console.log(typeof texto); //TypeOf sirve para que te diga que tipo de dato es la variable

/* Tipo Boolean */
let verdadero = true;
let falso = false;

/* Tipo Undefined */
let noDefinido;
let unDef;
console.log(noDefinido); // undefined

/* Tipo Null */
let nulo = null;

// Symbol (único, avanzado)
/**
 * El symbol crea identificadores únicos e inmutables (no pueden cambiar).
 * Se utiliza para añadir propiedades a los objetos que son verdaderamente únicas, 
 * evitando colisiones con claves de propiedades ya existentes o añadidas por otros códigos
 */
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);
console.log(typeof symbol2);

console.log(symbol1 === symbol2);

// Operador typeof
console.log(typeof "texto");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" ⚠️ (quirk de JavaScript)
console.log(typeof [1, 2, 3]);   // "object"
console.log(typeof {a: 1});      // "object"

// Verificación más específica
console.log(Array.isArray([1, 2, 3])); // true
console.log(null === null);             // true para verificar null



// A String
String(123);        // "123"
(123).toString();   // "123"
123 + "";          // "123"

// A Number
Number("123");      // 123
parseInt("123px");  // 123 (ignora caracteres no numéricos)
parseFloat("12.34"); // 12.34
+"123";            // 123 (operador unario +)

// A Boolean
Boolean(1);         // true
Boolean(0);         // false
Boolean("texto");   // true
Boolean("");        // false
!!1;               // true (doble negación)