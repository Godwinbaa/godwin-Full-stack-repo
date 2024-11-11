function shallowCopy(obj) {
    return Object.assign({}, obj);
}


let original = { a: 1, b: 2 };
let copy = shallowCopy(original);

copy.a = 3;

console.log(original.a); 
console.log(copy.a); 