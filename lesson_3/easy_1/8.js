// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// 1)
flintstones[flintstones.length] = "Dino"; // mutates flintstones
console.log(flintstones);

// 2)
flintstones.push("Dino");
console.log(flintstones);

// 3)
let newArr = flintstones.concat('Dino');
console.log(newArr);

