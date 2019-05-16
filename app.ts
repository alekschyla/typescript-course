class Person {
    name: string;
    private type: string;
    protected age: number = 21;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Cool');
    }

    private setType (type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Kate', 'Katie1995');
console.log(person);
console.log(person.name, person.username);
person.printAge();
//person.setType('Cool');

class Ola extends Person {
    //name = 'Ola';

    constructor(username: string) {
        super("Ola", username);
        this.age = 24;
    }

}

const ola = new Ola("ola");
console.log(ola);













