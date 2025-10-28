import {
    buildContext, CustomerDatabase, deleteFrom, selectAll, selectFields, selectFrom,

} from "./db";

/**
* Refactoring
*/
export function testQueriesOrder() {
    /**
     * Ne pas pouvoir accéder au `selectFields` après un `deleteFrom`
     */
    const customerContext = buildContext<CustomerDatabase>();
    const deleteUsersQuery = deleteFrom(customerContext, "users");
    // @ts-expect-error
    selectFields(deleteUsersQuery, ["firstName"]);

    /**
     * Ne pas pouvoir accéder au `selectFields` après un `selectAll`
     */
    const selectFromQuery = selectFrom(customerContext, "companies")
    const selectAllQuery = selectAll(selectFromQuery)
    // @ts-expect-error
    selectFields(selectAllQuery, ["name"]);

    /**
     * Se voir proposer `selectFields` après un `selectFrom`
     */

    // const selectFromQuery = selectFrom(customerContext, 'users')

}

