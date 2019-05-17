// Static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(5));

// Abstract Classes
abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;

    abstract changeName (name: string): void;

    calcBudget () {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

























