// Private Constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor (public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}


//let wrong = new OnlyOne;
let right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
//right.name = 'Something else';
console.log(right.name);























