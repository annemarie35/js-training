# CODE SNIPPETS

```typescript
type GenericTypeExample = Array<string>
```

- [Branded Types](https://www.learningtypescript.com/articles/branded-types)

```typescript
type Positive = number & { __brand: "positive" };

declare function waitForSeconds(seconds: Positive): Promise<void>;

async function waitThenLog(seconds: Positive) {
  // This should not be an error: seconds are being used. 👍
  await waitForSeconds(seconds);

  // Now, this errors as we'd expect it to. 👍
  await waitForSeconds(-1);
}
```
> Argument of type 'number' is not assignable to parameter of type 'Positive'.
Type 'number' is not assignable to type '{ __brand: "positive"; }'.
