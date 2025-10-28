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

type EmptyContext<DataBase> = {
  /*
  * @deprecated type only, do not use at runtime
  */
  $db: DataBase
}

type AliasedTable<TableName> = `${TableName & string} ${string}`
type TableOrAlias<TableName> = TableName | AliasedTable<TableName>


export const buildContext = <DataBase>(): {$db: DataBase} => {
  return {} as EmptyContext<DataBase>
  // undefined as Type effectue une type assertion pour indiquer à TypeScript que la valeur est de type Type
  // Cela permet de satisfaire le type de retour {$db: Type} tout en initialisant la valeur à undefined
  // On peut caster undefined directement vers le type de notre base de données afin que TypeScript fasse transiter le type dans notre context
}

type AnyEmptyContext = EmptyContext<any>;
// à la place de {$db: ShoppingDatabase | CustomerDatabase} qui limite à deux db nommées explicitement

type AnyTable<Context extends AnyEmptyContext> = TableOrAlias<keyof Context['$db']>

export const selectFrom = <
    Context extends AnyEmptyContext,
    TableName extends AnyTable<Context>
>(
    ctx: Context,
    tableName: TableName
) => ({
  ...ctx,
  _operation: "select" as const,
  _table: tableName,
  // TableName doit être une clé valide de la base de données du contexte
  //  Le contexte doit avoir une propriété $db
});

type SelectableContext<Database> = EmptyContext<Database> & {
  _operation: "select";
  _table: keyof Database;
}

type DeletableContext<Database> = EmptyContext<Database> & {
  _operation: "delete";
  _table: keyof Database;
}

type AnyQueryableContext = SelectableContext<any> | DeletableContext<any>

type AliasedField<FieldName> = FieldName | `${FieldName & string} as ${string}`

type FieldOrExplicitField<Table, Field> =
    |  AliasedField<Field>
    | `${Table & string}.${AliasedField<Field> & string}`

type ExplicitableField<Context extends SelectableContext<any>> =
    Context["_table"] extends `${infer Table} ${infer Alias}`
        ? FieldOrExplicitField<Alias, keyof Context["$db"][Table]>
        : FieldOrExplicitField<Context["_table"], keyof Context["$db"][Context["_table"]]>;

export const selectFields = <
    DataBaseContext extends SelectableContext<any>
>(
    ctx: DataBaseContext,
    fieldNames: ExplicitableField<DataBaseContext>[]
) => ({
  ...ctx,
  _fields: fieldNames,
});

export const selectAll = <DatabaseContext extends SelectableContext<any>>(ctx: DatabaseContext) => ({
  ...ctx,
  _fields: "ALL" as const,
  // as const = il faut dire au compilateur d'inférer le type le plus précis possible à partir de cette expression (i.e. le type littéral ALL).
});

export const where = <
    DataBaseContext extends AnyQueryableContext,
    Field extends keyof DataBaseContext["$db"][DataBaseContext["_table"]]
>(
    ctx: DataBaseContext,
    field: Field,
    operator: "=",
    value: DataBaseContext["$db"][DataBaseContext["_table"]][Field] // This is a Lookup type
    // https://typescript-workshop.github.io/typescript-workshop-companion/docs/typescript/keyof-lookup/
) => ({
  ...ctx,
  _where: {
    field,
    operator,
    value,
  },
});

// value ne peut avoir que les types de la db

export const deleteFrom = <
    DatabaseContext extends AnyEmptyContext,
    TableName extends keyof DatabaseContext['$db']
>(ctx: DatabaseContext, tableName: TableName) => ({
  ...ctx,
  _operation: "delete" as const,
  _table: tableName,
});