import { test } from "vitest";
import { addNewPizza } from "./exercices";

test("Get element that have id with value some-id-value", () => {
    addNewPizza({ name: "Napolitan", price: 11 });
});
