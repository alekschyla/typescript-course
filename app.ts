// union types
let myRealAge: number | string = 27;
myRealAge = '27';
//myRealAge = true; - error

// check types
let finalValue = 30;
if (typeof  finalValue == "number") {
    console.log('Final Value is a number');
}

// never type - TypeScript 2.0
function neverReturns(): never {
    throw new Error('An error');
}

// Nullable type - TypeScript 2.0
let canBeNull: number | null = 12;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;

let canThisBeAny: number = null;
canThisBeAny = 12;

