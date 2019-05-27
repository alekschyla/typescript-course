function logged(constructorFunction: Function) {
    console.log(constructorFunction);
}

@logged
class MyPerson {
    constructor() {
        console.log("Hi")
    }
}