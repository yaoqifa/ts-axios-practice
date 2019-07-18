function greet(name: number | string) {
  console.log(name)
}
greet('jhs')

function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('wrong ..')
}

// tuple
let x: [string, number]
x = ['ccc', 4]