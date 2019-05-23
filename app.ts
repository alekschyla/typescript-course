// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo('Ola'));
console.log(echo(24));
console.log(echo({name: 'Ola', age: 24}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Ola').length);
console.log(betterEcho<number>(24));
console.log(betterEcho({name: 'Ola', age: 24}));