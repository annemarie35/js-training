export type Opaque<A, B extends string> = A & {
  "$uniqueOpaqueProperty": B;
};

export type UUID<Type extends string> = Opaque<string, Type>;
// UUID devient un helper type qui utilise Opaque