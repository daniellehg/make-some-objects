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
    this.birthDate = birthDate;
    this.sayHi = function () {
        if (day = 0) {
            return "sunday"
        } else {
            return "not sunday"
        }

    }
}
}
