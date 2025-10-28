export type UserTable = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
};

export type CompanyTable = {
  id: string;
  name: string;
};

export type CustomerDatabase = {
  users: UserTable;
  companies: CompanyTable;
};

type Price = number;

export type ProductTable = {
  id: string;
  name: string;
  description: string;
  unitPrice: Price;
};

export type CartTable = {
  id: string;
  items: ProductTable["id"][];
};

export type ShoppingDatabase = {
  carts: CartTable;
  products: ProductTable;
};

export const buildContext = <Type>(): {$db: Type} => {
  return {
    $db: undefined as Type,
    // undefined as Type effectue une type assertion pour indiquer à TypeScript que la valeur est de type Type
    //Cela permet de satisfaire le type de retour {$db: Type} tout en initialisant la valeur à undefined
  };
};

export const selectFrom = <Context extends {$db: ShoppingDatabase | CustomerDatabase}, TableName extends keyof Context['$db']>(ctx: Context, tableName: TableName) => ({
  ...ctx,
  _operation: "select" as const,
  _table: tableName,
  // TableName doit être une clé valide de la base de données du contexte
  //  le contexte doit avoir une propriété $db
});


export const selectFields = (ctx: any, fieldNames: any[]) => ({
  ...ctx,
  _fields: fieldNames,
});

export const selectAll = (ctx: any) => ({
  ...ctx,
  _fields: "ALL",
});

export const where = (ctx: any, field: any, operator: "=", value: any) => ({
  ...ctx,
  _where: {
    field,
    operator,
    value,
  },
});

export const deleteFrom = (ctx: any, tableName: any) => ({
  ...ctx,
  _operation: "delete",
  _table: tableName,
});
