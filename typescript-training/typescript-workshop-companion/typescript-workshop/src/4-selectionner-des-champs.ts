import {buildContext, type CustomerDatabase, selectFields, selectFrom, type ShoppingDatabase,} from "./db";

/**
 * Selectionner des champs dans une table
 */
export function testSelectFields() {
    /**
     * On peut sélectionner parmi tous les champs d'une table
     */
    const customerContext = buildContext<CustomerDatabase>();
    const selectUsersQuery = selectFrom(customerContext, "users");
    selectFields(selectUsersQuery, [
        "id",
        "firstName",
        "lastName",
        "birthDate",
    ]);
    // @ts-ignore
    selectFields(selectUsersQuery, ["idi"]);

    const selectCompaniesQuery = selectFrom(customerContext, "companies");
    selectFields(selectCompaniesQuery, ["id", "name"]);
    // @ts-ignore
    selectFields(selectCompaniesQuery, ["id", "firstName"]);

    const shoppingContext = buildContext<ShoppingDatabase>();
    const selectProductsQuery = selectFrom(shoppingContext, "products");
    selectFields(selectProductsQuery, ["id", "name", "description"]);
    // @ts-ignore
    selectFields(selectProductsQuery, ["id", "firstName"]);
}
