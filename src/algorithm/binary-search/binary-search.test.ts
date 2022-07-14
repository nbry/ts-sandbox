import { binarySearch } from "./";

describe("binarySearch", () => {
    it("returns true if list has one item, and target is that item", () => {
        const sortedList = [22];
        const target = 22;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    it("returns false if list has one item, but target isn't that item", () => {
        const sortedList = [22];
        const target = 99;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });

    test("target is in list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 400;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    test("target is on the left edge list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 1;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    test("target is on the rightedge list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 9678;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    test("target is not in list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 4;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });

    test("target is greater than the right most item in the list", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 10000;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });

    it("target is less than the left most item in the list", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 0;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });
});
