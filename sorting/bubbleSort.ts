const bubbleSort = (arr: Array<number>) => {
    const n: number = arr.length - 1;
    let i: number, j: number;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // swapping code is here
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          console.log(`Array now is ${arr}`);
        }
      }
    }
    return arr;
  };
  
  console.log(bubbleSort([1, 3, 4, 2, 5]));
  