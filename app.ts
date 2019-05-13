// union types
let myRealAge: number | string = 27;
myRealAge = '27';
//myRealAge = true; - error

// check types
let finalValue = 30;
if (typeof  finalValue == "number") {
    console.log('Final Value is a number');
}
