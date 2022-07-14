/**
 * Given a list items sorted in ascending order, determine
 * if target is in the list.
 */
export function mergeSort<T>(arr: T[]): T[] {
    if (arr.length < 2) {
        return arr;
    }
    const [left, right] = cleave(arr);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return mergeTwoSortedLists(sortedLeft, sortedRight);
}

/**
 * Given a single list, return two slices of the list,
 * each slice being a half of the original list.
 */
function cleave<T>(arr: T[]): [T[], T[]] {
    const halfIdx = Math.floor(arr.length / 2);
    return [arr.slice(0, halfIdx), arr.slice(halfIdx)];
}

/**
 * Given two sorted lists, merge into a single sorted list.
 */
function mergeTwoSortedLists<T>(left: T[], right: T[]): T[] {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    if (i < left.length) {
        flushRemaining(result, left, i);
    } else {
        flushRemaining(result, right, j);
    }

    return result;
}

/**
 *  Given a reference to the "result" of mergeTwoSortedLists,
 *  put the remaining items of the sortedSlice into the result.
 */
function flushRemaining<T>(result: T[], sortedSlice: T[], idx: number) {
    while (idx < sortedSlice.length) {
        result.push(sortedSlice[idx]);
        idx++;
    }
}
