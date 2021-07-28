let array = [1,2,3, [1,2,3, [1,2,3]]];

// array.flat permite devolver una matriz con cualquier sub matriz aplanada
// flat recibe como parametro la profundidad con la que se quiere trabajar
// console.log(array.flat(2));

// flay map permite mapear cada elemento pasarle una función y aplanarlo 
// según el resultado
let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));

// trimStart permite eliminar los espacios en blanco de un string

let hello = '         Hola gente!';
console.log(hello);
console.log(hello.trimStart());

// trimEnd permite eliminar los espacios al final del texto
let saludo = 'Hola gente!!      ';
console.log(saludo);
console.log(saludo.trimEnd());

// Transformar clave valor a un objeto
let entries = [["name", "Miguel"], ["age", 32]];
console.log(Object.fromEntries(entries)); 

// objeto de tipo simbolo que nos va permitir acceder a una descripción
let MySymbol = `My Symbol Description`;
let symbol = Symbol(MySymbol);
console.log(symbol.description);

// Comite tecnico TC39   -- tc39.es
// Es un grupo de desarrolladores que se encargan de revisar 
// y evaluar que cada propuesta cumpla el estandar que se implica  
