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

    it("general test - target is in list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 400;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    it("left edge test - target is list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 1;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    it("right edge test - target is list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 9678;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(true);
    });

    it("general test - target is not in list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 4;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });

    it("left edge test - target is not in list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 10000;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });

    it("right edge test - target is not in list with multiple items", () => {
        const sortedList = [1, 2, 3, 5, 19, 99, 333, 400, 9678];
        const target = 0;
        const result = binarySearch(sortedList, target);
        expect(result).toBe(false);
    });
});
