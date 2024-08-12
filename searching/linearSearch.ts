const linearSearch = (arr: Array<number>, target: number) => {
    for (let i: number = 0; i <= arr.length; i++) {
        if (arr[i] == target) return i
    }
    return -1
}
console.log(linearSearch([1, 4, 8, 34, 2], 2))