import { mergeSort } from "./";

describe("mergeSort", () => {
    it("returns the array when the array's length is 0", () => {
        const subject: number[] = [];
        const result = mergeSort(subject);
        expect(result).toStrictEqual([]);
    });

    it("returns the array when the array's length is 1", () => {
        const subject = [22];
        const result = mergeSort(subject);
        expect(result).toStrictEqual([22]);
    });

    test("array is already in order", () => {
        const subject = [1, 11, 22];
        const result = mergeSort(subject);
        expect(result).toStrictEqual(subject);
    });

    test("array is in reverse order", () => {
        const subject = [22, 11, 1];
        const result = mergeSort(subject);
        expect(result).toStrictEqual([1, 11, 22]);
    });

    test("array is randomly assorted", () => {
        const subject = [99, 5, 3, 44, 7, 19, 21, 900];
        const result = mergeSort(subject);
        expect(result).toStrictEqual([3, 5, 7, 19, 21, 44, 99, 900]);
    });
});
