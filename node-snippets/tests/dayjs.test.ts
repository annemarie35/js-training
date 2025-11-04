import { expect, test, describe } from "vitest";

import { formatDate } from "../src/daysjs";

describe("Test File", () => {
    test("formatDate", () => {
        expect(formatDate("2011-10-10T14:48:00")).toBe("Lundi");
    });
});
