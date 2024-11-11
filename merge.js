function merge(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "New York" };

const merged = merge(obj1, obj2);
console.log(merged);