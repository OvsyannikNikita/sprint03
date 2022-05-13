
// const regex = /^\d+/g

// let validator = {  
    
//     set(target,prop,value){
//             if(value >=0 && value <= 200 || value ==='male'){
//                 target[prop] = value
//                 console.log(`Setting value '${value}' to '${prop}'`);
//                 }else if(value === 'young'){
//                     throw new Error(`The ${prop} is not an integer`)
//                 }else     throw new Error(`The ${prop} is invalid`)
                
//     },
//     get(target,prop){
//         if(target[prop]){
//         console.log(`Trying to access the property '${prop}'`);
//         return target[prop]
//     }else return false

//     } 
   
// }




// let person = new Proxy({},validator)

// person.age = 100 ;
// //Seting value '100' to 'age'
// console.log(person.age);
// //Trying to access the property 'age'...
// //100
// person.gender ='male'
// //Setting value 'male' to 'gender'
// person.age = 'young'
// //Uncaught TypeError: The age is not an integer
// person.age = 300;
// // //Uncaught RangeError: The age is invalid















const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}

let handler ={
    get(target,prop){
        console.log(target);
       console.log(`Getting Prop ${prop}`);
    return target[prop]
},
set(target,prop,value){
    console.log(prop);
    if(prop in target){
    target[prop] = value
    }else {
        throw new Error(`No ${prop} field in target`)
    }
    
},
has(target,prop){
    return ['age','name','job'].includes(prop)
},
deleteProperty(target,prop){
    console.log('Deleting...',prop);
    delete target[prop]
    return true
}

}


const op = new Proxy(person,handler)
op.name = person.name
console.log(op.name);
// //Function

// const log = text => `Log: ${text}`

// const fp = new Proxy(log,{
//     apply(target,thisArg,args){
//        console.log('Calling fn...');

//      return target.apply(thisArg,args).toUpperCase()
//     }
// })

// //Classes
// class Person{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy

