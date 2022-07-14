export function mergeSort<T>(arr: T[]): T[] {
    if (arr.length < 2) {
        return arr;
    }
    const [left, right] = cleave(arr);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return mergeTwo(sortedLeft, sortedRight);
}

function cleave<T>(arr: T[]): [T[], T[]] {
    const halfIdx = Math.floor(arr.length / 2);
    return [arr.slice(0, halfIdx), arr.slice(halfIdx)];
}

function mergeTwo<T>(left: T[], right: T[]): T[] {
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

function flushRemaining<T>(result: T[], side: T[], idx: number) {
    while (idx < side.length) {
        result.push(side[idx]);
        idx++;
    }
}
