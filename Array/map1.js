const nums = [1,2,4,8];

//map é for com proposito
let result = nums.map(function(e){
    return e *2
})

//console.log(result)

const som10 = e => e * 10 
const som5 = e => e * 5 
const som2 = e => e * 2 

console.log(nums.map(som10))
console.log(nums.map(som5))
console.log(nums.map(som2))

const result2 = nums.map(som2).map(som10);
//concatenação de maps -> map sempre retorna array, por isso a concatenação.
console.log(result2);