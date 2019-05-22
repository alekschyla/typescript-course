interface NamesPerson {
    name: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamesPerson): void {
    console.log('Hello, ' + person.name);
}

function changeName(person: NamesPerson) {
    person.name = "Anna";
}

const person = {
    name: 'Ola',
    hobbies: ['cooking', 'writing'],
    greet(lastName: string) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    }
};

// greet({name: 'Mary', age: 22});
changeName(person);
greet(person);
person.greet('Nowak');
