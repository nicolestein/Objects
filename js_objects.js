function Cube(length,mass) {
    this.length = length;
    this.mass = mass;
    this.volume = Math.pow(length,3);
    this.density = this.mass/this.volume;
    this.surfaceArea = Math.power(length,2)*6;
}

function Person(firstname,lastname,bithdate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
function greeting() {
    var d = new Date();
    var day = d.getDay();
    var hour = d.getHours();
    if (hour < 12) {
        if (day == 6 || day == 0) {
            return "Go back to sleep, its the weekend!";
        } else if (day == 1) {
            return "Ugh, its Monday morning...";
        } else {
            return "Good morning!";
        }
    } else if (hour > 12 && hour < 20) {
        if (day == 6 || day == 0) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good Day!";
        }
    } else {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!";
         {
                return "Good Evening!";
        }
    }
}
   }

function Pet(name,species,sleep,hunger,awake) {
    this.name = name;
    this.species = species;
    this.sleep = 0;
	this.hunger = 0;
	this.awake = true;
    this.speak = function speak () {
        if (this.type === "Dog") {
            return "Woof! That means I love you!";
        } else if (this.type === "Cat") {
            return "Ugh. meow";
        } else {
            return "";
        }
    }


