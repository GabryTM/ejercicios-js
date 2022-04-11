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
console.log (Perro);

//Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

const Noticia = {titular:"Titulo", cuerpo:"Hola aquí supuestamente hay un texto"};
console.log (Noticia);

//Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

const Persona = {nombre: "Gabriel", apellidos: "Tapia Manzanero", edad:"27"};
console.log (Persona);

//Muestra por consola el nombre de la variable Persona

console.log (Persona);

//Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

console.log (FullStackDeveloper[0]);

//Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

const Portatil = {marca:"Lenovo"};
console.log (Portatil.marca);

//Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola

console.log (Portatil ["marca"]);

//Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

const Concierto = {grupos: ["ska-p","mago de oz","la oreja de van gogh"]};
console.log (Concierto);

//Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola

const Led = {rojo: 2, verde: 3, azul: 5};
console.log (RGB);

//Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const O_Error = {codigo: "oops i did it again"};
console.log (O_Error.codigo);

//Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

const Grupo = {integrantes: ["Maritrini", "Pascasio", "Ataulfo"]};
console.log (integrantes);

//Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola 

const Impresora = {tinta: {rojo: 4, verde: 6, azul:10}};
const nivelesTinta = Impresora.tinta;
console.log (nivelesTinta);

//Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

const Movil = {Especificaciones: "Android 128GB 8GBRAM"};
console.log (Movil);

//Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

Portatil.marca = "MSI";
console.log (Portatil.marca);

//Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

Concierto.grupos.push ("Guns N' Roses");
console.log (Concierto);

//Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado

Concierto.fecha = "07/09/2015";
console.log(Concierto);
Concierto.fecha = new Date();
console.log(Concierto);

//Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)

Grupo.integrantes.pop ();
console.log (Grupo.integrantes.length);


