let houseBlueprint = {
    date: {
        toDateString: function(){
            return new Date();
        }
    },
    getDaysToBuild: function(){
        return this.size / this._building_speed
    }
   
}
function HouseBuilder(address, description, owner, size, roomCount, _building_speed){
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this._building_speed = 0.5
}


HouseBuilder.prototype = houseBlueprint

const house = new HouseBuilder('99 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J.Smith',
110,
5);
console.log(house.address);

console.log(house.description);

console.log(house.size);

console.log(house.date.toDateString());

console.log(house.owner);

console.log(house._building_speed);

console.log(house.getDaysToBuild());

console.log(house.roomCount);

