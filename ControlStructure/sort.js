const points = [40, 100, 1,30 ,40,5, 25, 10];
const pointsInOrder = points.sort(function (a, b) {
    return a - b
});
console.log(pointsInOrder);

const pointsInOrder2 = points.sort(function (a, b) {
    return b - a
});
console.log(pointsInOrder2);
console.log(pointsInOrder2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);