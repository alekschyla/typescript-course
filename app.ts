function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean): any {
    return function (target: any, propName: string) {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);


// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target:", target);
    console.log("Method Name:", methodName);
    console.log("Index:", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }


    printStudentNumber(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course('Super name');
course.printStudentNumber("anything", true);
course.printStudentNumber("anything", false);











