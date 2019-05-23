// Interfaces and function types
interface DoubleValue {
    (number1: number, number2: number): number;
}

const doubleFunction: DoubleValue = (value1: number, value2: number) => {
    return (value1 + value2) * 2;
};

console.log(doubleFunction(3, 5));

// Interface Inheritance
interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 89,
    name: 'Kate',
    greet(lastName: string): void {
        console.log('Hello!');
    }
};
console.log(oldPerson);
oldPerson.greet('Smith');
