function number(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0) {  
        sum += i;
      }
    }
    return sum;
}
let result = number(1, 10);
console.log(result);
  