// Exercise 1
class Car {
    acceleration: number = 0;
    constructor (name: string) {}

    honk(): void {
        console.log('Toooot');
    }

    accelerate (speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
class baseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends baseObject{
    calcSize() {
        return this.width * this.length;
    }
}

let rec = new Rectangle();
rec.width = 10;
rec.length = 5;
console.log(rec.calcSize());


// Exercise 3
class Person {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(name: string) {
        if (name.length > 0) {
            this._firstName = name;
        } else {
            this._firstName = '';
        }
    }
}
const newPerson = new Person();
console.log(newPerson.firstName);
newPerson.firstName = 'Maja';
console.log(newPerson.firstName);






