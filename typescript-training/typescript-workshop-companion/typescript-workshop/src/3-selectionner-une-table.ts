import {expectTypeOf} from "vitest";
import {buildContext, type CustomerDatabase, selectFrom, type ShoppingDatabase} from "./db.ts";

/**
 * Selectionner une table
 */

export function testSelectFrom() {
    /**
     * On peut sélectionner depuis une table de notre DB
     *
     * Go to ./db.ts to implement working type
     */
    const customerContext = buildContext<CustomerDatabase>();
    selectFrom(customerContext, "users");
    selectFrom(customerContext, "companies");
    expectTypeOf(selectFrom(customerContext, "companies")._table).toEqualTypeOf<'companies'>()
    expectTypeOf(selectFrom(customerContext, "users")._table).toEqualTypeOf<'users'>()
    // @ts-expect-error
    // "products" et "companiz" sont des clés invalides de CustomerDatabase
    selectFrom(customerContext, "products");
    // @ts-expect-error
    selectFrom(customerContext, "companiz");

    const shoppingContext = buildContext<ShoppingDatabase>();
    selectFrom(shoppingContext, "products");
    selectFrom(shoppingContext, "carts");
    // @ts-expect-error
    // "users" et "cartz" sont des clés invalides de ShoppingDatabase
    selectFrom(shoppingContext, "users");
    // @ts-expect-error
    selectFrom(shoppingContext, "cartz");
}
