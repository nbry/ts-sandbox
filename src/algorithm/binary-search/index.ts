/**
 * Given a list sorted in ascending order, determine if
 * a target is in the list.
 */
export function binarySearch<T>(sortedList: T[], target: T): boolean {
    let l = 0;
    let r = sortedList.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        const middle = sortedList[m];

        if (target < middle) {
            r = m - 1;
        } else if (target > middle) {
            l = m + 1;
        } else {
            return true;
        }
    }

    return false;
}
