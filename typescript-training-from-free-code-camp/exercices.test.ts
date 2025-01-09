import { beforeEach, describe, expect, it } from "vitest";
import { completeOrder, emptyOrderQueue, getPizzaDetail, placeOrder } from "./exercices";

describe('Restaurant Orders', () => {
    beforeEach(() => {
        emptyOrderQueue()
    })
    describe("Place order", () => {
    it("should place an order when pizza name exists", () => {
        const response = placeOrder("Veggie");
        expect(response).toEqual({
            id: 1,
            pizza: {
                name: "Veggie",
                price: 9,
                id: 4
            },
            status: "ordered",
        });
    });

    it("should return an error message when pizza name does not exist", () => {
        const response = placeOrder("Napolitan");
        expect(response).toEqual("Napolitan pizza does not exist in the menu");
    });
});

    describe("Complete order", () => {
    it("should complete order with id 2", () => {
        placeOrder('Veggie')
        placeOrder('Pepperoni')
        const response = completeOrder(2);
        expect(response).toEqual({
            "id": 2,
            "pizza": {
                "name": "Pepperoni",
                "price": 10,
                id: 2
        },
        "status": "completed",
    });
    });

    it("should return an error message when order id does not exist", () => {
        const response = completeOrder(42);
        expect(response).toEqual("Order with id 42 not found");
    });
});

    describe("getPizzaDetail", () => {
    it("return details by id", () => {
        const response = getPizzaDetail(2);
        expect(response).toEqual({
            "id": 2,
            "name": "Pepperoni",
            "price": 10,
        });
    });

        it("return details by id", () => {
            const response = getPizzaDetail('Margherita');
            expect(response).toEqual( {
                "id": 1,
                "name": "Margherita",
                "price": 8,
            });
        });

        it("return an error when identifier does not exist", () => {
            // @ts-ignore
            const response = getPizzaDetail(false);
            expect(response).toEqual("Pizza with identifier false not found");
        });
});
})

