# TYPESCRIPT PATH

[See repo's readme for general purpose](README.md)

- I attended this TypeScript [course on scrimbra](typescript-training-from-free-code-camp)
- To see next
  - typeof type operator 
  - indexed access types 
  - conditional types 
  - type guard function: if a function returns a certain value, that means that paramaters has a certain type, for example returns true when parameters is a string
  - type assertion `as number` in some part of the code, for example 
  - type predicate
  - `as const` for example -> retrieve name, it is indexed access type
```typescript
const totoList = ["something"] as const;
type Toto = (typeof totoList)[number];
```
  