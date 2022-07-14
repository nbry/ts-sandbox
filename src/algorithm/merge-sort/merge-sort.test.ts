import { mergeSort } from "./merge-sort";

[
    {
        title: "return array with length of 0",
        subject: [],
        expected: [],
    },
    {
        title: "return array with length of 1",
        subject: [22],
        expected: [22],
    },
    {
        title: "general test 1",
        subject: [22, 11, 1],
        expected: [1, 11, 22],
    },
    {
        title: "general test 2",
        subject: [1, 11, 22],
        expected: [1, 11, 22],
    },
    {
        title: "general test 3",
        subject: [99, 5, 3, 44, 7, 19, 21, 900],
        expected: [3, 5, 7, 19, 21, 44, 99, 900],
    },
].forEach(({ title, subject, expected }) => {
    test(title, () => {
        const result = mergeSort(subject);
        expect(result).toStrictEqual(expected);
    });
});
