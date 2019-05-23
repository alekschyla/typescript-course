// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo('Ola'));
console.log(echo(24));
console.log(echo({name: 'Ola', age: 24}));


// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Ola').length);
console.log(betterEcho<number>(24));
console.log(betterEcho({name: 'Ola', age: 24}));


// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(3.44);
//testResults.push('test');  - wrong
console.log(testResults);


// Generic Types and Arrays

function printAll<T>(args: T[]) {
    args.forEach(element => console.log(element));
}
printAll<string>(['apples', 'watermelon', 'oranges', 'strawberries']);


// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("something"));









