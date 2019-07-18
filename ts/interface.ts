interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // 额外属性
}
function createSquare(config: SquareConfig): Square {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * 100
  }
  return newSquare
}

let mySquare = createSquare({colorr: '', width: 30})
console.log(mySquare)


interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {x: 10, y: 20}

let a: number[] = [1, 2, 3, 4]
let b: ReadonlyArray<number> = a
let c: number[] = b as number[]


interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = (src, sub) => {
  return src.search(sub) > -1
}