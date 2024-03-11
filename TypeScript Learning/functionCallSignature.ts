type P = {
    name: string;
    age: number
    greet: (country: string) => void
}

const person: P = {
    name: "tejas",
    age: 21,
    greet: (country): string => `welcome to ${country} ${person.name}!`
}

console.log(person.greet('India'));
