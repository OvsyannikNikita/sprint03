// let john = {name:'John Newman'}
// let eva = {name:"Eva Friderick"}

// let guestList = new WeakSet()

// guestList.add(john)
// guestList.add(eva)
// console.log(guestList);
// console.log(guestList.has('bomjik'));
// guestList.delete(john);
// console.log(guestList.john);
// console.log(guestList.size);

// let menu = new Map()
// menu.set('Ukrainian Borsch','26 UAH')
// menu.set('French meat','100$')
// menu.set('American Coca-Cola','1$')
// console.log(menu);
// console.log(menu.has('Ukrainian Borsch'));
// for(let key of menu.entries()){
//     console.log(key);
// }

// let bankVault = new WeakMap()

// let obj = {}

// bankVault.set(obj,'ok')
// console.log(bankVault.get(obj));

// let coinCollection = new Set(['Bitcoin','Epherium','Cordana','Cordana'])
// console.log(coinCollection);


//====================================================================================
//Modules


export let one = 1;
let two = 2;
export{two,three}

export default class Person{
    constructor(name){
        this.name = name
    }
}

export function sayHello(){
    console.log('hello!');
}

//Rename

export{one as once,two as twice}


//Import
import{one,two} from './file.js'

//Rename Import
import {one as num1,two as num2} from '.file/js'

//one import
import * as numbers from './file.js'

//default export

import Person from './file.js'





































// let recipeMap = new Map([
//     ['ogirok',500],
//     ['pomadora',150],
//     ['lu4ok',10]
// ])
// console.log(recipeMap);
// console.log(recipeMap.get('ogirok'));

// for(let vegetable of recipeMap.keys()){
//     console.log(vegetable);
// }

// recipeMap.forEach((value,key) =>{
//     console.log(`${key}:${value}`);
// })

// let obj = {
//     name : 'Nikitos',
//     age : 18
// }
// console.log(obj);
// let map = new Map(Object.entries(obj))
// console.log(map);

// let prices = Object.fromEntries([
//     ['banana',1],
//     ['orange',2],
//     ['meat',4]
// ])
// console.log(prices);

// let map1 = new Map()
// map1
//     .set('apple',2)
//     .set('pear',4)
//     .set('melon',6)
//     let result = Object.fromEntries(map1)
//     console.log(map1);
//     console.log(result);

//     let sayings = new Map()
//     sayings.set('dog','woof')
//     sayings.set('cat','meow')
//     sayings.set('elephant','toot')
//     console.log(sayings.size);
//     console.log(sayings.get('dog'));
//     console.log(sayings.get('fox'));
//     console.log(sayings.has('dog'));
//     console.log(sayings.delete('dog'));
//     console.log(sayings);

//     for(let [key,values] of sayings){
//         console.log(key + ' goes ' + values);
//     }
//     sayings.clear()
//     console.log(sayings.size);

//  let mySet = new Set()
//  mySet.add(1)
//  mySet.add(1)
//  mySet.add('some text')
//  mySet.add('foo')
// console.log(mySet);

// for(let item of mySet){
//     console.log(item);
// }
// console.log(Array.from(mySet));

// let mySet2 = new Set([1,2,2,2,3,4,5,6,7,7,7,7,7])
// console.log(mySet2);

// let pus = new Set([1,2,3,4,5,6,5,5,5,5,5])
// console.log(pus);
// pus.add(9)
// console.log(pus);
// pus.delete(9)
// console.log(pus);
// console.log(pus.has(1));
// console.log(pus.size);
// console.log(pus.clear());
// console.log(pus.size);

// let set = new Set()

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john)
// set.add(pete)
// set.add(mary)
// set.add(john)
// set.add(mary)
// console.log(set.size);

// for(let user of set){
//     console.log(user.name);
// }

// let res = new Set(["апельсин", "яблоко", "банан"]);

// // for (let value of res) console.log(value);

// res.forEach((value, valueAgain, set) => {
//     console.log(value);
//   });

//   function unique(arr) {
//     return [...new Set(arr)]
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log(unique(values).join(',')); // Hare,Krishna,:-O



//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr){
//     let map = new Map();

//     for (let word of arr) {
//       // разбиваем слово на буквы, сортируем и объединяем снова в строку
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     }
  
//     return Array.from(map.values());
// }
//   console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
