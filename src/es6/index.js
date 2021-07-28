// Como se hacia antes de es6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    // console.log(name, age, country);
}

// Con ES6:

function newFunction2(name = 'oscar', age = 32, country = "MX"){
    // console.log(name, age, country);
}

// Para llamar la funcion hay 2 formas:
// Para el primer caso, hay funciones que toman los articulos por 
// si mismos, entonces se pueden dejar vacias
newFunction2();
newFunction2('Jeff', '24', 'CO');

// Concatenar antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + '' + world;
// console.log(epicPhrase);

// Concatenar con Es6
// la hacer ${} se trae el valor de la variable, solo funciona
// con las comillas invertidad ``
let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

// Multilinea antes de ES6
let lorem = "Frase epica número 1. \n"
+ "Otra frase epica.";

// Multilinea con de ES6
let lorem2 = `Frase epica que necesito
aca un salto de linea`;

// console.log(lorem);
// console.log(lorem2);

// antes de ES6
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'CO'
};

// console.log(person.name, person.age, person.country);

// con ES6
let { name,age,country } = person;
// console.log(name, age, country);

let team1 = ['Papá cerdito', 'Pedro', 'Juan'];
let team2 = ['Maria', 'Juanita', 'Mulan'];

let education = ['David', ...team1, ...team2];

// console.log(education);

// diferencias
// let: solo esta disponible en el bloque de codigo el cual es llamado
// var: se le asigna la variable la cual estaria disponible de forma global
// const: no cambia su valor
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    // console.log(globalLet);
}

// console.log(globalVar);

// console.log(globalLet); // no es accesible por ende no se muestra en consola

const a = 'b';
// a = 'a';

let nombre = 'Naniela';
let edad = 22;

// ES5
obj = { nombre: nombre, edad: edad };

// ES6
obj2 = { nombre, edad };
console.log(obj2);

// funciones de tipo flecha o rows functions
// son funciones anonimas
const names = [
    { name: 'Juanita', age: 32 },
    { name: 'Juanito', age: 24 }
]

// Recorrer los elementos
let  listOfNames = names.map(function (item) {
    // console.log(item.name);
});

// formas como se puede hacer ahora
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    
}

const listOfNames4 = name => {

}

const square = num => num * num;

// Promesas (trabaja con asicronismo)

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        }else {
            reject('Ups!!')
        }
    });
}

// Ejecutar la funcion
// helloPromise()
//     .then(Response => console.log(Response))
//     // .then(() => console.log('hola'))
//     .catch(error =>console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function* helloWorld() {
    if(true) {
        //yield permite retornar y guarda de forma interna
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

