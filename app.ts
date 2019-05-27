function logged(constructorFunction: Function) {
    console.log(constructorFunction);
}

@logged
class MyPerson {
    constructor() {
        console.log("Hi")
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class MyCar {

}

// Advanced
function printable(constructorFunction: Function) {
    constructorFunction.prototype.print = function () {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant"
}

const newPlant = new Plant();
(<any>newPlant).print();







