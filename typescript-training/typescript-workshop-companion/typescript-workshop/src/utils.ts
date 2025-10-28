export type Opaque<A, B extends string> = A & {
  "$uniqueOpaqueProperty": B;
};

// Mon implémentation ci-dessous
// export type UUID<Type extends string> = Opaque<string, Type>;
// UUID devient un helper type qui utilise Opaque

// Erreur dans l'exercice, cf le test ligne 21, on différencie la valeur dans le helper avec une interpolation de chaîne de caractère
export type UUID<T extends string> = Opaque<string, `${T}_uuid`>;