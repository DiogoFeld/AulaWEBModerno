console.log("01)", "01" === 1);
console.log("02) ", "01" == 1);
console.log("03) ", "01" != 3);
console.log("04) ", "03" != 3);
console.log("05) ", 3 > 2 );
console.log("06) ", 3 < 5);
console.log("07) ", 3 <= 5);
console.log("08) ", 3 <= 5);

const d1 = new Date(0);
const d2 = new Date(0);

console.log("09) ", d1 == d2);
console.log("10) ", d1 === d2);
//compara o endereço de memoria
console.log("11) ", d1.getTime() === d2.getTime());
console.log("12) ", undefined == null);
console.log("13) ", undefined === null);
console.log("14) ", !!undefined);

