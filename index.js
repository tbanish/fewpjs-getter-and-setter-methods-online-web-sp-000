// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(diameter) {
    this._diameter = diameter
    this.radius = diameter/2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  set circumference(circumference) {
    this._circumference = circumference
    this.diameter = circumference/Math.PI
  }

  get area() {
    return Math.PI * (this.radius ** 2)
  }

  set area(area) {
    this._area = area
    this.radius = Math.sqrt(area/Math.PI)
  }
}
