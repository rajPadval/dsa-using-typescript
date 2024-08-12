const binarySearch = (arr: Array<number>, target: number) => {

    let start: number = 0;
    let end: number = arr.length - 1;

    while (start <= end) {
        let middle: number = Math.floor((start + end) / 2);
        if (arr[middle] == target) return middle
        else if (arr[middle] < target) start = middle + 1;
        else end = middle - 1
    }

    return false

}
console.log(binarySearch([1, 2, 3, 4], 4))