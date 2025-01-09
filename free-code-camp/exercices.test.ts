import { describe, expect, it, test } from "vitest";
import { addNewPizza, placeOrder } from "./exercices";

test("Add new pizza with no compilation error", () => {
    addNewPizza({ name: "Napolitan", price: 11 });
});

describe("Place order", () => {
    it("should place an order when pizza name exists", () => {
        const response = placeOrder("Veggie");
        expect(response).toEqual({
            id: 2,
            pizza: {
                name: "Veggie",
                price: 9,
            },
            status: "ordered",
        });
    });
});
