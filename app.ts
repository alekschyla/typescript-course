//functions
let myName: string = 'Ola';

function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void - error when something is returned
function sayHello(): void {
    console.log('Hello');
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply( 2, 3));