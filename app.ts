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