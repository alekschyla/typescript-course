interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson): void {
    console.log('Hello, ' + person.name);
}

function changeName(person: NamedPerson) {
    person.name = "Anna";
}

const person1 = {
    name: 'Ola',
    hobbies: ['cooking', 'writing'],
    greet(lastName: string) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    }
};

// greet({name: 'Mary', age: 22});
changeName(person1);
greet(person1);
person1.greet('Nowak');

class PersonInterfaces implements NamedPerson {
    name: string;
    lastName: string;
    greet(lastName: string) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    }
}

const myPerson = new PersonInterfaces();
myPerson.name = 'Kasia';
myPerson.lastName = 'Kowalska';
greet(myPerson);
myPerson.greet(myPerson.lastName);














