//objects
let userData: {name: string, age: number} = {
    name: 'Ola',
    age: 24,
};

//complex object
let complex: {data: number[], output: (all: boolean) => number[] } = {
    data: [20, 30, 40],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//type alias
type Complex = {data: number[], output: (all: boolean) => number[] }

let complex2: Complex = {
    data: [20, 30, 40],
    output: function (all: boolean): number[] {
        return this.data;
    }
};