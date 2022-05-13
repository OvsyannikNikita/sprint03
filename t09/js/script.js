
function* generator(){
    let first = 1
    while(true){
        let other =  +prompt(`Previous result is ${first}.Enter a new number:`,`${first}`)
        yield  first +=other
        if(isNaN(first)){
            console.error('Invalid number')
        }else if(other == ' '){
            console.error(`Enter a number suka!!!`)
            +prompt(`Enter a number suka!!!`)     
        }
        else if (first > 10000){
            first = 1
        }
    }
    
}
let str = generator()

 console.log(str.next().value)
 console.log(str.next().value)
 console.log(str.next().value)
 console.log(str.next().value)
 






// function* idMaker(){

//     let index = 0
//     while(index<=3){
//         yield index++
//     }
// }
// let gen = idMaker()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* anotherGenerator(i){
//     yield i+1;
//     yield i+2;
//     yield i+3;
// }

// function* generator(i){
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
// }

// var gen = generator(10)
// console.log(gen.next().value);


// function* generator(){
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
//     yield '!';
// };

// const str = generator()
// console.log(str.next().value);
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// function* count(n){
//     for(let i = 0;i < n; i++){
//         yield i;
//     }
// }

// for(let k of count(7)){
//     console.log(k)
// }

// const counter = count(7)

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
