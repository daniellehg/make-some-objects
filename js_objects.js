function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = (Math.pow(this.length, 3));
    this.density = this.mass / this.volume;
    this.surfaceArea = 6 * (Math.pow(this.length, 2));
}

function Person(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.sayHi = function sayHi() {
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
    this.age = function age() {
        return Math.floor((new Date() - this.birthDate) / 1000 / 60 / 60 / 24 / 365);

    }
    this.getSign = function getSign() {
        var date = new Date(birthDate);
        var day = date.getDate();
        var month = date.getMonth();
         if (month == 0) {
            if (day <= 20) {
                return "Capricorn";
            } else if (day > 20) {
                return "Aquarius";
            }
        } else if (month == 1) {
            if (day <= 19) {
                return "Aquarius";
            } else if (day > 19) {
                return "Pisces";
            }
        } else if (month == 2) {
            if (day <= 20) {
                return "Pisces";
            } else if (day > 20) {
                return "Aries";
            }
        } else if (month == 3) {
            if (day <= 20) {
                return "Aries";
            } else if (day > 20) {
                return "Taurus";
            }
        } else if (month == 4) {
            if (day <= 21) {
                return "Taurus";
            } else if (day > 21) {
                return "Gemini";
            }
        } else if (month == 5) {
            if (day <= 21) {
                return "Gemini";
            } else if (day > 21) {
                return "Cancer";
            }
        } else if (month == 6) {
            if (day <= 22) {
                return "Cancer";
            } else if (day > 22) {
                return "Leo";
            }
        } else if (month == 7) {
            if (day <= 22) {
                return "Leo";
            } else if (day > 22) {
                return "Virgo";
            }
        } else if (month == 8) {
            if (day <= 23) {
                return "Virgo";
            } else if (day > 23) {
                return "Libra";
            }
        } else if (month == 9) {
            if (day <= 23) {
                return "Libra";
            } else if (day > 23) {
                return "Scorpio";
            }
        } else if (month == 10) {
            if (day <= 22) {
                return "Scorpio";
            } else if (day > 22) {
                return "Sagittarius";
            }
        } else if (month == 11) {
            if (day <= 21) {
                return "Sagittarius";
            } else if (day > 21) {
                return "Capricorn";
            }
        }

    }
}

function Pet(name, species) {
    this.name = name;
    this.species = species;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.speak = function speak() {
        if (species = "dog") {
            this.sleepy++;
            this.hunger++;
            return "Woof! That means I love you!"
        }else {
                this.sleepy++;
                this.hunger++;
            return "Ugh. meow.";
            }

        }
    this.eat = function eat(){
         if (species = "dog") {
            this.sleepy++;
            this.hunger = 0;
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!"
        }else {
                this.sleepy++;
                this.hunger = 0;
            return "Ugh, I guess I'll eat this.";
            }
    }
    this.nap = function nap() {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz..."
    }
    this.wakeUp = function wakeUp(){
        this.awake = false;
        this.sleepy = 0;
        this.hunger = 4;
         if (species = "dog") {
            return "I'm awake! Let's eat and then play! I love you!"
        }else {
            return "Ugh, I'm awake now. Is there anything to eat around here?";
            }
    }
    }

