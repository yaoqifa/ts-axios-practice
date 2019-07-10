// private protected readonly
class Grid {
  static origin = {x: 0, y: 0}
  scale: number
  constructor(scale: number) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x: number, y: number}) {
    const xDist = point.x - Grid.origin.x
    const yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

const g1 = new Grid(1)
const g2 = new Grid(2)

console.log(g1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(g2.calculateDistanceFromOrigin({x: 3, y: 4}))