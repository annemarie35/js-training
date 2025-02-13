import { beforeEach, describe, expect, it } from "vitest";
import {
    addNewPizza,
    addToArray,
    completeOrder,
    emptyOrderQueue,
    getPizzaDetail,
    placeOrder,
    newOrderHistory,
    newMenu,
} from "./exercices";
import { addNewUser, displayInfo, person1, person2, updateUser } from "./users-app";
import { favoriteThings, gameScores, getLastItem, voters } from "./games";

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

    describe("addNewPizza", () => {
        it("return details by id", () => {
            const response = addNewPizza({ name: "Spicy Sausage", price: 11 });
            expect(response).toEqual({
                "id": 8,
                "name": "Spicy Sausage",
                "price": 11,
            });
        });
    });

    describe("addToArray", () => {
        it('should a pizza to a menu', () => {
            expect(newMenu).toEqual([
                {
                    "id": 1,
                    "name": "Margherita",
                    "price": 8,
                },
                {
                    "id": 2,
                    "name": "Pepperoni",
                    "price": 10,
                },
                {
                    "id": 3,
                    "name": "Hawaiian",
                    "price": 10,
                },
                {
                    "id": 4,
                    "name": "Veggie",
                    "price": 9,
                },
                {
                    "id": 5,
                    "name": "Chicken Bacon Ranch",
                    "price": 12,
                },
                {
                    "id": 6,
                    "name": "BBQ Chicken",
                    "price": 12,
                },
                {
                    "id": 7,
                    "name": "Spicy Sausage",
                    "price": 11,
                },
                {
                    "id": 8,
                    "name": "Spicy Sausage",
                    "price": 11,
                },
            ])
        })

        it('should an order to order history', () => {
            expect(newOrderHistory).toEqual([{
                "id": 1,
                "pizza":  {
                    "id": 3,
                    "name": "Hawaiian",
                    "price": 10,
                },
                "status": "completed",
            }])
        })
    })
})

describe('Users exercices', () => {
    describe('displayInfo', () => {
        it('should display infos without address', () => {
            const response = displayInfo( person1);
            expect(response).toEqual('Joe lives at undefined')
        })

        it('should display infos with address', () => {
            const response = displayInfo( person2);
            expect(response).toEqual('Jill lives at 123 Main')
        })
    })

    describe("updateUser", () => {
        it('Should update users', () => {
            const response1 = updateUser(1, { username: "new_john_doe" });
            const response2 = updateUser(4, { role: "contributor" });

            expect(response1).toEqual({  "id": 1,
                "role": "member",
                "username": "new_john_doe"})
            expect(response2).toEqual({
                "id": 4,
                "role": "contributor",
                "username": "charlie_brown",
            })
        })
    })

    describe("addNewUser", () => {
        it('Should add a new user', () => {
            const response = addNewUser({ username: "joe_schmoe", role: "member" });

            expect(response).toEqual({
                "id": 5,
                "role": "member",
                "username": "joe_schmoe",
            })
        })
    })
})


describe('Games exercices', () => {
    describe('getLastItem', () => {
        it('should withArrayOfNumbers', () => {
            const response: number | undefined = getLastItem(gameScores);
            expect(response).toEqual(59)

            const response2: string | undefined = getLastItem(favoriteThings);
            expect(response2).toEqual('warm woolen mittens')

            const response3: {name: string, age: number} | undefined = getLastItem(voters);
            expect(response3).toEqual({ name: 'Bob', age: 77 })

            const response4: undefined = getLastItem([]);
            expect(response4).toEqual(undefined)
        })
    })
})
