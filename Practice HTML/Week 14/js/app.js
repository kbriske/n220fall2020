//REFERENCES
let dName = document.getElementById("displayName");

/*
function Drink(type) {
    this.type = type;
    this.calories = 220;
    this.price = 2.75;
}
let myDrink = new Drink("Red Bull");
let myDrink2 = new Drink("Gatorade");

console.log(myDrink);
console.log(myDrink2);
*/
/*
function Bike(type) {
    this.type = type;
    this.wheels = 2;
    this.speeds = 10;
    this.ride = function() {
        let randomDistance = Math.round(Math.random() * 10)
        console.log(`The ${this.type} bike rode ${randomDistance} miles`);
    }
}

let myBike = new Bike("Rider");
myBike.ride();

let myBike2 = new Bike("Huffy");
myBike2.ride();
*/

//define class level variables here
wheels = 2;
type = "Huffy";
speeds = 10;

class Bike {
    constructor(type) {
        this.type = type;
    }

    ride() {
            let randomDistance = Math.round(Math.random() * 10)
            console.log(`The ${this.type} bike rode ${randomDistance} miles`);
    }
}

let myBike = new Bike("Huffy");
myBike.ride();
