import getValue from "./modules/get_value.js";

const  superHero = [
    { id:12345, hero: 'batman', power: 'money'},
    { id:12345, hero: 'aquaman', power: 'fishpower'}
]

//get value from array
let res= []




console.log(getValue(superHero,'hero'));
console.log(getValue(superHero,'power'));
