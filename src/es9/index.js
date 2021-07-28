const obj = {
    name: 'Pedro',
    age: 23,
    country: 'MX'
};

// Traer todos los elementos con all(encapsulado)
// Resultado: Pedro { age: 23, country: 'MX' }
let { name, ...all } = obj;
// console.log(name, all);

const obj1 = {
    name: 'Pedro',
    age: 23
}

// Se unen el objeto con el objeto1
const obj2 = {
    ...obj1,
    country: 'MX'
}

// console.log(obj2);


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello People!!'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    // Imprime la respuesta en consola al llamar la promesa
    .then(response => console.log(response))
    // Retorna un error en caso de que lo halla
    .catch(error => console.log(error))
    // Imprime un mensaje de que finalizo el proceso
    .finally(() => console.log('Finalizo!'))

// Implementando regex
// Agrupar bloques de regex y como acceder a cada uno de ellos
// Como manejar las fechas:
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);


