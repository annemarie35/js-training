"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var exercices_1 = require("./exercices");
(0, vitest_1.test)("Get element that have id with value some-id-value", function () {
    (0, exercices_1.addNewPizza)({ name: "Napolitan", price: 11 });
});
