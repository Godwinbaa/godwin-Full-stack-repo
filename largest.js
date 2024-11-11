function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  const result = findLargest([3, 5, 1, 8, 2]);
  console.log(result); 