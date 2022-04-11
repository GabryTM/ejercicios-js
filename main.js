//1.Variables//

//Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”

alert ('JavaScript Funcionando Correctamente');

//Crear variable tipo let de nombre variableSinValor declarada sin valor

let variableSinValor;
console.log (variableSinValor);

//Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

let booleano1 = true;
let booleano2 = false;

console.log (booleano1);
console.log (booleano2);

//Crear variable tipo const de nombre PI declarada con valor 3.14

const PI = 3.14;
console.log (PI);

//Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

const TAU = 2*PI
console.log (TAU);

//Crear variable tipo const de nombre miNombre declarada con valor tu nombre

const miNombre = "Gabriel";
console.log (miNombre);

//Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

const miNumeroFav = 2;
console.log (miNumeroFav);

//Crea una variable tipo booleano

let booleano3 = true;
console.log (booleano3);

//Muestra por consola la longitud de la variable miNombre

console.log (miNombre.length);

//Muestra por consola el tipo de dato de la variable miNumeroFav

console.log (typeof miNumeroFav);

//Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.

console.log (`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}`);

//Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.

const Frase = "Seré un crack en JavaScript al terminar el bootcamp";
const FraseEnMayusculas = Frase.toUpperCase();
console.log(FraseEnMayusculas);

//Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

const hola = "hola soy un crack";
console.log (hola.substring(0.5));

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

const miNumeroFav2 = miNumeroFav.toString;
console.log (typeof miNumeroFav);

//Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.

const purple = "morado";
const red = "rojo";
console.log (`me gusta el color ${red} y ${purple}`)

//Muestra por consola la variable PI hasta los 2 primeros decimales

console.log(PI.toFixed(2))


