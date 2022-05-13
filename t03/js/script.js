
String.prototype.removeDuplicates = function(){
    let arr = this.split(' ')
    let result = new Set(arr)
    return result.join(' ')
}

let str = "Giant Spiders?   What's next? Giant Snakes?";
console.log(str);

str = str.removeDuplicates();
console.log(str);

str = str.removeDuplicates();
console.log(str);

str = ". . . . ? . . . . . . . . . . ."
console.log(str);

str = str.removeDuplicates();
console.log(str);


const array = ['Alex', 'Jenny', 'Mark', 'Jenny','Melissa','Jenny','Jenny']
const noDuplicate = new Set(array);
console.log(noDuplicate);


const obj = {
    name: 'Vladilen',
    age:26,
    job: 'Fullstack'
}

const entries = [
    ['name','Vladilen'],
    ['age','26'],
    ['job','Fullstack']
]
console.log(obj);
console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));

const ma = new Map(entries)
ma
.set('newField',32)
.set(obj, 'Value of object')
.set(NaN,'NaN?')

console.log(ma.get(NaN));
ma.delete('age')
console.log(ma.has('age'));
console.log(ma.size);
ma.clear()
console.log(ma.size);

//========================

// for(let [key,value] of ma){
//     console.log(key,value);
// }

// for(let value of ma.values()){
//     console.log(value);
// }

// for(let value of ma.keys()){
//     console.log(value);
// }


// ma.forEach((val,key,map) =>{
//     console.log(val,key);
// })

// const arr = Array.from(ma)

// const maObj = Object.fromEntries(ma.entries())
// console.log(maObj);
//=======================
// const users = [ 
//     {name:'Elena'},
//     {name:'Alex'},
//     {name:'Irina'}
// ]

// const visits = new Map()

// visits
//         .set(users[0],new Date())
//         .set(users[1],new Date(new Date().getTime() + 1000 * 60))
//         .set(users[2],new Date(new Date().getTime() + 5000 * 60))

//         function lastVisit(user){
//             return visits.get(user)
//         }

//         console.log(lastVisit(users[2]));

// let set = new Set([1,2,3,3,3,4,5,5,6]);
// set.add(10).add(20).add(30).add(20)
// console.log(set);
// console.log(set.delete(1));
// console.log(set);
// console.log(set.clear());
// console.log(set.size);

// for(let key of set){
//     console.log(key);
// }

// function uniqValues(array){
//     return [...new Set(array)]
// }
// console.log(uniqValues([1,1,2,2,4,4,4,4,4,5,6,6,7]));

// let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(arr[0]);

// const map = new WeakMap([
//     [obj,'obj data']
// ])
// // get set delete has
// obj = null

// console.log(map)

//==========================================================================================
// const cache = new WeakMap()
// function cacheUser(user){
//     if(!cache.has(user)){
//         cache.set(user,Date.now())
//     }
//     return cache.get(user)
// }
// let lena ={name:'elena'}
// let alex = {name:'Alex'}
// cacheUser(lena)
// cacheUser(alex);

// console.log(cache.get(lena));
// console.log(cache.get(alex));
//==================================================================================================================

// const users = [ 
//     {name:'Elena'},
//     {name:'Alex'},
//     {name:'Irina'}
// ]

// const visits = new WeakSet()

// visits.add(users[0]).add(users[1])
// users.splice(1,1)
// console.log(users);
// console.log(visits.has(users[0]));
// console.log(visits.has(users[1]));