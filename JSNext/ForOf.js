const list = ["porquinho","barbecue","arroiz","kebabi"]

console.log(list);



for (const l of list) {
    console.log(l);
}

for (const l in list) {
    console.log(l);
}

for (let i=0;i<list.length;i++) {
    console.log(i,list[i]);
}