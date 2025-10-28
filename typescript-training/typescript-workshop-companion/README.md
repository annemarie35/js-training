# Typescript Workshop Companion - Notes on course


Practice a little with this [ressource](https://typescript-workshop.github.io/typescript-workshop-companion) 

## Exercice 0
[Cours et corrections](https://typescript-workshop.github.io/typescript-workshop-companion/docs/atelier/types-primitifs/)


Ce premier exercice a pour objectif de balayer les concepts de bases de TypeScript et les différentes syntaxes qui existent
:::tip Ressources

- [Types primitifs](../typescript/types-primitifs.md)
- [Types par référence](../typescript/types-par-references.md)
- [keyof et lookup](../typescript/keyof-lookup.md)
- [Affirmation de type et types spéciaux](../typescript/types-speciaux-affirmation-de-types.md)

:::

```typescript
function lookup<Data, Key extends keyof Data>(data: Data, prop: Key): Data[Key] {
    return data[prop]
}

const userName = lookup({ name: "Max", age: 42}, 'name')
expectTypeOf(userName).toEqualTypeOf<string>();

const stringLength = lookup("four", "length")
expectTypeOf(stringLength).toEqualTypeOf<number>();
```

- `Data` : le type générique pour l'objet/la donnée d'entrée
- `Key extends keyof Data` : Key doit être une clé valide de Data (utilisation de keyof pour obtenir les clés)
- `prop: Key` : la propriété qui doit être une clé de Data
- `: Data[Key] : le type de retour est le type de la propriété Key dans Data (indexed access type)

TypeScript inférera automatiquement :

lookup({ name: "Max", age: 42}, 'name') → Data = { name: string, age: number }, Key = 'name', retourne string
lookup("four", "length") → Data = string, Key = 'length', retourne number (car string a une propriété length de type number)

## Exercice 1 (Opaque)
[Cours et corrections](https://typescript-workshop.github.io/typescript-workshop-companion/docs/atelier/opaque/)

:::tip Ressources

- [Typage structurel](../typescript/typage-structurel.md)
- [Types génériques](../typescript/generic.md)
- [Template literal](../typescript/template-literal.md)

:::

## Exercice 2

[Cours et corrections](https://typescript-workshop.github.io/typescript-workshop-companion/docs/atelier/construire-le-contexte/)

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Exercice 3

[Cours et corrections](https://typescript-workshop.github.io/typescript-workshop-companion/docs/atelier/selectionner-une-table/)

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Exercice 4
[Cours et corrections](https://github.com/typescript-workshop/typescript-workshop-companion/blob/main/docs/atelier/4-selectionner-des-champs.md)


:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)

:::


## Exercice 5
[Cours et corrections](https://github.com/typescript-workshop/typescript-workshop-companion/blob/main/docs/atelier/5-selectionner-tous-les-champs.md)

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Exercice 6
[Cours et corrections](https://typescript-workshop.github.io/typescript-workshop-companion/docs/atelier/filtrer-des-lignes/)

:::tip Ressources

- [Keyof & lookup](../typescript/keyof-lookup.md)
- [Types conditionnels](../typescript/conditional-types.md)

:::