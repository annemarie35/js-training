# FREE NOTES ON TYPESCRIPT

Working on improving my TypeScript knowledge, using the right vocabulary and going further.

## TODO
- [ ] Work on tsconfig file
- [ ] Interface versus Types ? In my last experiences, we were using only types https://www.freecodecamp.org/news/how-typescript-interfaces-work/

## MISCELLEANOUS

New version is 5.5 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#inferred-type-predicates

- [statisfies](https://www.freecodecamp.org/news/typescript-satisfies-operator/) Not used in my last project and not sure i like the idea of using typescript to check some rules that could be business like rules like in the example (Lastname should be uppercase)
- [aliases](https://www.freecodecamp.org/news/how-typescript-type-aliases-work/)
- [annotations](https://www.freecodecamp.org/news/basic-typescript-types/)
- [generics with react](https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/)
- [typescript&react example](https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/)
- [predicates](https://www.freecodecamp.org/news/what-are-type-predicates-in-typescript/)
- [generics](https://www.freecodecamp.org/news/how-typescript-generics-work/)


TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators, you can combine them [source](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## ADVICES
- use TypeScript in 'strict' mode

## TS CONFIG FILE
- Which version of EcmaScript should I use in the TypeScript configuration
  - if project is going to production you might be concerned by browser compatibility so use the [version most used](https://caniuse.com/?search=es5). By the way, the ts code will be transpiled for build
- Exclude `node_modules` from type checking [here](https://stackoverflow.com/questions/45267500/exclude-node-modules-from-problems)
```
{
    "compilerOptions": {
        "skipLibCheck": true,
    }
}
```
