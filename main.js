//1.Variables//

//Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”

alert ("JavaScript Funcionando Correctamente");

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
console.log (hola.substring(0,5));

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

const miNumeroFav2 = miNumeroFav.toString;
console.log (typeof miNumeroFav);

//Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.

const purple = "morado";
const red = "rojo";
console.log (`me gusta el color ${red} y ${purple}`);

//Muestra por consola la variable PI hasta los 2 primeros decimales

console.log (PI.toFixed(2));

//2.Arrays//

//Crear variable de nombre arrayVacio cuyo valor sea un array vacío

const arrayVacio = [];
console.log (arrayVacio);

//Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
console.log (arrayNumeros);

//Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log (arrayNumeros2);

//Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

const arrayNumerosPares = [0,2,4,6,8];
console.log (arrayNumerosPares);

//Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

const arrayNumerosNeg = [-0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log (arrayNumerosNeg);

//Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

const holaMundo = ["Hola", "Mundo"];
console.log (holaMundo);

//Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

const loGuardoTodo = ["hola","que","23", "42.23","tal"];
console.log (loGuardoTodo);

//Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

const arrayDeArrays = [[756, "nombre"],[225, "apellido"],[298, "dirección"]];
console.log (arrayDeArrays);

//Muestra por consola la longitud del array “loGuardoTodo” Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

console.log (loGuardoTodo.length);

//Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo.push ("veréTodaslasPelisdeStarWars");
console.log (loGuardoTodo);

//Ordena de mayor a menor la variable arrayNumeros y muestrala por consola

console.log (arrayNumeros.sort());

//Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola

console.log (arrayNumeros2.reverse());

//Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

console.log (loGuardoTodo[1]);

//Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.push ("Euralio");
console.log (loGuardoTodo);

//3.Objetos//

//Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores

const Coche = {marca: "Peugeot", modelo: "307",matrícula: "2749DWD"};

console.log (Coche);

//Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

const Casa = {codPostal: "13610", calle: "Escobar", portal: "2", piso:"6"};
console.log (Casa);

//Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const FullStackDeveloper = {
    leguajes: ["javascript", "php", "css","html"], 
    proyectos: ["Responsive","Carta"]};
console.log (FullStackDeveloper);

//Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

const Perro = {nombre:"Manolo", raza: "pomerania", color: "blanco", edad:"2"};
console.log (Perro)