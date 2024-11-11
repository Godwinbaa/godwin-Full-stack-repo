function Duplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(Duplicates([1, 2, 3, 1, 2, 4]));