// Consider the following nested object: Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sum = 0;
Object.values(munsters).forEach(object => {
  if (object.gender === 'male') {
    sum += object.age;
  }
});

console.log(sum); // 444
