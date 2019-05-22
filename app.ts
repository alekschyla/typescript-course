interface NamesPerson {
    name: string,
}

function greet(person: NamesPerson): void {
    console.log('Hello, ' + person.name);
}

function changeName(person: NamesPerson) {
    person.name = "Anna";
}

const person = {
    name: 'Ola',
    age: 24,
};

greet(person);
changeName(person);
greet(person);
