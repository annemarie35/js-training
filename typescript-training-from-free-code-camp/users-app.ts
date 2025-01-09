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

let nextUserId = 1

type UserRole = "guest" | "member" | "admin" | "contributor"

type User = {
    id: number
    username: string
    role: UserRole
}

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

export function updateUser(id: number, updates: UpdatedUser) {
    const userToUpdate = users.find(user => user.id === id)
    if(!userToUpdate) {
        return `User with id ${id} not found.`
    }
    return Object.assign(userToUpdate, updates);
}
type UpdatedUser = Partial<User>



export function addNewUser(newUser: Omit<User, 'id'>): User {
    const user:User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}