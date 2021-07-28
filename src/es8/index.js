const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

// Convertir objeto en una matriz
const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

const data1 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

// Devolver arreglo de strings
const values = Object.values(data1);
console.log(values);
console.log(values.length);

// Añade hi antes del string hello
const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '  ----'));
console.log('food'.padEnd(12, '  ----'));

// Async Await 
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello People!!'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
} 

//Ejecutar la función
helloAsync();

const anotherFunction = async() => {
     // Capturar errores con try catch
     try {
         const hello = await helloWorld();
         console.log(hello);
     }catch (error) {
        console.log(error);
     }
};

anotherFunction(); 