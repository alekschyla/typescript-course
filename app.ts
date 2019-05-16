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