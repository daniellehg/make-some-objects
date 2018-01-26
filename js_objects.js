function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = (Math.pow(this.length, 3));
    this.density = this.mass / this.volume;
    this.surfaceArea = 6 * (Math.pow(this.length, 2));
}

function sayHi() {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    if (hour >= 0 && hour <= 9) {
        if (day == 0 || day == 6) {
            return "Go back to sleep, its the weekend!";
        } else if (day == 1) {
            return "Ugh, its monday morning!";
        } else {
            return "Good Morning!";
        }
    } else if (hour >= 10 && hour <= 17) {
        if (day == 0 || day == 6) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good Day!";
        }
    } else {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!";
        } else {
            return "Good Evening!";
        }
    }


}

function Person(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date("03/09/2001");
    this.sayHi = sayHi;
    this.age = function age() {
        var date = new date;
        return Math.floor((new Date() - this.birthDate) / 1000 / 60 / 60 / 24 / 365);

    }
    this.getSign = function zodiac() {
        var today = new Date();
        var date = today.getDate();
        var month = today.getMonth();
        var bMonth = birthDate.bMonth();
        var bDate = birthDate.bDate();
        if ()
    }
}

function Pet(name, species, 0, 0, true) {
    this.name = name;
    this.species = species;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.speak = function speak() {
        if (species = "dog") {
            return "Woof! That means I love you!"
            this.sleepy = this.sleepy++;
            this.hunger = this.hunger++;
        }else {
                return "Ugh. meow.";
                this.sleepy = this.sleepy++;
                this.hunger = this.hunger++;
            }
        }
    this.eat = function eat(){
        if(species = "crocodile")
            return "That guy captain Hook-What a Guy!"
    }
    }

