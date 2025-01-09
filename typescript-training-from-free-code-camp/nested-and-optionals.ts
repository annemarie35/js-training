type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
    // will display lives at undefined, not UX friendly but no error if address is undefined
}

let people: Person[] = [person1, person2];

// let people = [person1, person2];
// Inference will show you that the type of people is Person[]
// another syntax is possible with generics
// Array<Person>