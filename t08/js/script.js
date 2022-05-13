let houseMixin = {
    wordReplace(incoming,outgoing){
      this.description = this.description.replace(incoming,outgoing)
    },
    wordDelete(incoming){
        this.description = this.description.replace(incoming,'')
    },
    wordInsertAfter(incoming,next){
        this.description = this.description.split(' ')
        this.description.splice(3,0,next)
        this.description = this.description.join(' ')
    },
    wordEncrypt(){
        key = {
            a: 'n',
            b: 'o',
            c: 'p',
            d: 'q',
            e: 'r',
            f: 's',
            g: 't',
            h: 'u',
            i: 'v',
            j: 'w',
            k: 'x',
            l: 'y',
            m: 'z',
            n: 'a',
            o: 'b',
            p: 'c',
            q: 'd',
            r: 'e',
            s: 'f',
            t: 'g',
            u: 'h',
            v: 'i',
            w: 'j',
            x: 'k',
            y: 'l',
            z: 'm',
            S: 'F',
        
        }
        let result = ''
        for(let i = 0;i < this.description.length;i++){
            if(key[this.description[i]]){
                result += key[this.description[i]]
            }else{
                result += this.description[i]
            }
        }
        this.description=result
    },
    wordDecrypt(){
        key = {
            n: 'a',
            o: 'b',
            v: 'c',
            q: 'd',
            r: 'e',
            s: 'f',
            t: 'g',
            u: 'h',
            v: 'i',
            w: 'j',
            c: 'p',
            x: 'k',
            y: 'l',
            z: 'm',
            a: 'n',
            b: 'o',
            p: 'c',
            d: 'q',
            e: 'r',
            f: 's',
            g: 't',
            h: 'u',
            i: 'v',
            j: 'w',
            k: 'x',
            l: 'y',
            m: 'z',
            F: 'S',
        
        }
        let result = ''
        for(let i = 0;i < this.description.length;i++){
            if(key[this.description[i]]){
                result += key[this.description[i]]
            }else{
                result += this.description[i]
            }
        }
        this.description=result

    }
}

const house = new HouseBuilder('99 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J.Smith',
110,
5);

Object.assign(house,houseMixin)

console.log(house.getDaysToBuild());

console.log(house.description);

house.wordReplace('wood','tile')
console.log(house.description);


house.wordDelete('town ')
console.log(house.description);

house.wordInsertAfter('with','marble')
console.log(house.description);

house.wordEncrypt()
console.log(house.description);

house.wordDecrypt()
console.log(house.description);

// let hello = 'hello hi mahai'
// let result = ''
// const key = {
//     h : 'N',
//     e : 'i',
//     l : 'K',
//     o : 'I',
//     i : 'a',
//     m : 'p',
//     a : 'q',
//     " ": " "

// }
// for(let i = 0;i < hello.length;i++){
//     result += key[hello [i] ]
   
// }

// console.log(result);





















// let sayHiMixin ={
//     sayHi(name){
//         alert(`Hello ${this.name}`)
//     },
//     sayBye(){
//         `Bye ${this.name}`
//     }
// };



// class User{
//     constructor(name){
//         this.name = name
//     }
// }

// Object.assign(User.prototype, sayHiMixin)

// new User('Nikitosss').sayHi()

// class Person extends User{

// }

// Object.assign(User.prototype, sayHiMixin)

// let sayMixin = {
//     say(phrase){
//         alert(phrase)
//     }
// };
// let sayHiMixin = {
//     __proto__: sayMixin,
//     sayHi(){
//         super.say(`Hello ${this.name}`)
//     },
//     sayBye(){
//         super.say(`Bye ${this.name}`)
//     }
// }

// class User{
//     constructor(name){
//         this.name = name
//     }
// }

// Object.assign(User.prototype,sayHiMixin)

// new User ('Челік').sayHi()

// const course = {
//     name: 'Web Programming',
//     score: 102
// }

// const grade = {
//     score: 9
// }

// const finalResult = Object.assign(course,grade,{teacher:'Mrs Water'})
// const copy = Object.assign(finalResult)
// console.log(finalResult);
// console.log(copy);

// function printName (options){
//     const defaults = {
//         firstName : 'Steve',
//         lastName: 'Bottle'
//     }
//     options = Object.assign(defaults,options)
//     console.log(`${options.firstName} ${options.lastName}`);
// }

// printName({
//     firstName:'Dom',
//     lastName: 'Soks'
// })
