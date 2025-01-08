"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var exercices_1 = require("./exercices");
(0, vitest_1.test)("Add new pizza with no compilation error", function () {
    (0, exercices_1.addNewPizza)({ name: "Napolitan", price: 11 });
});
(0, vitest_1.describe)("Place order", function () {
    (0, vitest_1.it)("should place an order when pizza name exists", function () {
        var response = (0, exercices_1.placeOrder)("Veggie");
        (0, vitest_1.expect)(response).toEqual({
            id: 2,
            pizza: {
                name: "Veggie",
                price: 9,
            },
            status: "ordered",
        });
    });
    (0, vitest_1.it)("should return an error message when pizza name does not exist", function () {
        var response = (0, exercices_1.placeOrder)("Napolitan");
        (0, vitest_1.expect)(response).toEqual("Napolitan pizza does not exist in the menu");
    });
});
