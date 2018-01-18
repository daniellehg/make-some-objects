function Cube(length,mass) {
    this.length = length;
    this.mass = mass;
    this.volume = (Math.pow(this.length,3));
    this.density = this.mass/this.volume;
    this.surfaceArea = 6 * (Math.pow(this.length,2));
}
