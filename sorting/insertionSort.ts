const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    // current is the 1st index means the second element in the array
    let current = arr[i];
    // lets initialize the previous index
    let previous = i - 1;
    // Move elements of arr that are greater than current, to one position ahead of their current position
    while (previous >= 0 && arr[previous] > current) {
      arr[previous + 1] = arr[previous];
      previous--;
    }
    // place the current element at its current position
    arr[previous + 1] = current;
  }
  return arr;
};

console.log(insertionSort([12, 2, 7, 15]));
