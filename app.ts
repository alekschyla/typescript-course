// Interfaces and function types
interface DoubleValue {
    (number1: number, number2: number): number;
}

const doubleFunction: DoubleValue = (value1: number, value2: number) => {
    return (value1 + value2) * 2;
};

console.log(doubleFunction(3, 5));
