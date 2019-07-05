interface Shape {
  color: string
}

interface Weight {
  kg: number
}
interface Rectangle extends Shape, Weight {
  width: number
}

let rect = {} as Rectangle
rect.color = '#0dc2b3'
rect.width = 10
rect.kg = 99