const dogs = new Set();
dogs.add("labrador")
dogs.add("cocker")
dogs.add("Pastor Belga").add("pastor Alemão")

console.log(dogs);

console.log(dogs.has("labrador"))
dogs.delete("labrador")
console.log(dogs.has("labrador"))
console.log(dogs.size)


const gatos = ["persa","malioi","espanhol","laranja", "laranja"]
const gatosSet = new Set(gatos)
console.log(gatosSet)