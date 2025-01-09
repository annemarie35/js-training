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