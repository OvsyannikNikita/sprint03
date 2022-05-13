class Building{
    constructor(hasElevator,arcCapacity,height){
            this.hasElevator = hasElevator
            this.arcCapacity = arcCapacity
            this.height = height
        }

        get hasElevator(){
            return this.foo
        }
        set hasElevator(value){
            if(value){
                this.foo = '+'
            }else this.foo = '-'
        } 
        getFloorHeight(){
            return this.height/this.floors; 
    }
        

}
class Tower extends Building{
    constructor(floors,material,address){
        super()
        this.floors = floors
        this.material = material
        this.address = address
    }
   
    toString(){
return `Floors: ${this.floors}
Material: ${this.material}
Adress: ${this.address}
Elevator: ${this.hasElevator}
Arc reactor capacity: ${this.arcCapacity}
Height: ${this.height}
Floor height: ${this.getFloorHeight()}`
    }
}





const starkTower = new Tower(93,'Different','Manhattan, NY')
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
starkTower.getFloorHeight()
console.log(starkTower.toString());