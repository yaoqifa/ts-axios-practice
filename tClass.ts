// 范型类 实例部分的范型，静态部分没有范型
class GenerateNum<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenerateNum = new GenerateNum<number>()
myGenerateNum.zeroValue = 0
myGenerateNum.add = function (x, y) {
  return x + y;
}

let myGenerateString = new GenerateNum<string>()
myGenerateString.zeroValue = ''
myGenerateString.add = function (x, y) {
  return x + y;
}

console.log(myGenerateString.add(myGenerateString.zeroValue, 'test'))

// 范型约束
interface LengthWise {
  length: number
}
function loggingIdentify<T extends LengthWise>(arg: T) {
  console.log(arg.length)
  return arg
}

loggingIdentify({length: 3})

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// 类类型 在工厂函数中的应用

function create<T>(c: {new(): T}): T {
  return new c()
}

// 范型的类型推导

class BeeKeeper {
  hasMask: boolean
}

class LionKeeper {
  nametag: string
}

class Animal2 {
  numLength: number
}

class Bee extends Animal2 {
  keeper: BeeKeeper
}
class Lion extends Animal2 {
  keeper: LionKeeper
}

function createInstance<T>(c: {new(): T}): T {
  return new c()
}

createInstance(Bee).keeper.hasMask
createInstance(Lion).keeper.nametag