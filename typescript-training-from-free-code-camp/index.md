# Learn TypeScript with Interactive Lessons

[From free code camp](https://www.freecodecamp.org/news/learn-typescript-with-interactive-lessons/) by teacher Bob Ziroll

- https://www.youtube.com/watch?v=SpwzRDUQ1GI
- https://scrimba.com/learn-typescript-c03c/~00

autocomplete
errors compiling
refactoring


- Why TypeScript
- Basic type
- Literal type
- Custom types (objects
- Typed array
- Optional properties
- Union
- Type narrowing
- Utility types
- Generics

--> another course https://www.freecodecamp.org/news/learn-typescript-for-practical-projects/

warning for edges cases, not only happy path

### Primitives types
ts is smart enough to infer data type that is used : inferred or derived (see suggestion on mouse over) from what you write
```
let myName = 'Bob'
myName = 5 // ts will warn you
```
primitive data type :string, number, boolean

### Custom types
new type created by `type Order` (capitalize by convention)

### Nested Object
Definition of a person type
```typescript
type Person = {
    name: string
    age: number
    isStudent: boolean
    address: {
        street: string
        city: string
        country: string
    }
}
```
freedom & flexibility vs **rigidity**

```typescript
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
```
more flexibility with optional adress `address?` trade off reduce type safety
? = question mark 

### Arrays
array of another elements
```typescript
let ages: number[] = [100, 101]
ages.push[true] // error
```
another syntax is possible with generics
Array<Person>

### Literal type
not a generic string for ex but a defined string

`
//let name = 'Bob' // string
//const name = 'Bob' // literal 'Bob'
// with literals
//let name: 'Bob' = 'Bob' // string
//const name: 'Bob' = 'Bob' // literal 'Bob'
`

### Union type with the pipe
```typescript
type UserRole = "guest" | "member" | "admin"
let userRole: UserRole = "admin"
```

### Type narrowing
See exercices example on getPizzaDetails
Ts can narrow down the type

> Be explicit as you can !

### Function return types
`:` colon
Helps refactoring
Ts can infer returning type but define type protects from changing what function returns, exemple, returning `user.name` in the fetchUserDetails function

explicit that the function returns anything, so add `void`

### Any type
It turns off typescript for the value, cause it can be anything. First added to facilitate the transitioning from js code to ts code and you don't have time.

```typescript
let value: any = 1
value.toUpperCase()
value = "Hi"
value.map()
```

type `unknown`

### Utility types & partial
We don't want Pizza ids to be optionnal

Updates are not complete User type, creating a new type is duplication and don't work with big objects
```typescript
type UpdatedUser = {
    id?: number
    username?: string
    role?: "member" | "contributor" | "admin"
}
```

Utility types
- Like a function, they take other types in as parameter and return a new type, with some changes made to it
- Built-in to Ts, perform commonly-needed modifications to existing types
- Use "Generics" syntax using angle brackets(<>)

Partial
This modifies the type you pass in and turns all properties into optionnal properties
[documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
