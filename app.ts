// array
let hobbies: any[] = ['cooking', 'reading'];
hobbies = [100];
//hobbies = 100; - error


//tuples
let address: [string, number] = ['Superstreet', 99];

//enum
enum Color {
    Gray, //0
    Green = 100, //1
    Blue //2
}
let myColor: Color = Color.Blue;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);