class LinkedList{
    constructor(arr){
        this.data = arr
    }
    log(){
       console.log(this.data.join())
    }
    remove(value){
        let result = this.data.indexOf(value)
        if (result == -1) {
            return false
        }
        return this.data.splice(result,1)
    }
    add(value){
        this.data.push(value)
    }
    contains(value){
        for(let i = 0;i<=this.data.length;i++){
            if(this.data[i] === value){
                return true
            }
        }
        return false
    }
    *[Symbol.iterator](){
        for(let item of this.data) {
            yield item;
        }
     }
     result = this[Symbol.iterator]()
     next(){
        return this.result.next()
     }
     
     clear(){
         this.data = []
     }

    

    

}


function createLinkedList(arr){    
    return new LinkedList(arr)
}


const ll = createLinkedList([100, 1, 2, 3, 100 ,4 ,5 ,100])

ll.log()

while(ll.remove(100));
ll.log()

ll.add(10);
ll.log()

 console.log(ll.contains(10))

let sum = 0;
for(const n of ll){
    sum += n
}

console.log(sum)

ll.clear()
ll.log()




// function* strGenerator(){
//     yield   'H'
//     yield   'e'
//     yield   'l'
//     yield   'l'
//     yield   'o'
// }

// const str = strGenerator()


// function* numberGen(n){
//     for(let i = 0; i < n; i++){
//         yield i
//     }
// }
// let num = numberGen(7)

// const iterator = {
//     [Symbol.iterator](n = 10){
//         let i = 0;
//         return {
//                 next(){
//                     if(i < n){
//                         return {value: ++i,done: false}
//                     }
//                     return {value: undefined,done: true}
//                 }
//         }
//     }
// }
 
 



// function* iter(n){
//     for(let i = 0; i < n; i++){
//         yield i
//     }
// }

// for(let k of iter(6)){
//     console.log(k)
// }

// let names = ['jack','max', 'lea']

// for (let name of names){
//     console.log(name);
// }

