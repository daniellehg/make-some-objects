function Cube(length,mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function(){
      return (this.length * 3)
    }
    this.density = function(){
        return (this.mass/this.volume)
    }
    this.surfaceArea = function(){
       return (6 * (Math.pow(this.length,2)))
    }
}
