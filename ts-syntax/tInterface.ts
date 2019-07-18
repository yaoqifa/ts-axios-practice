function identify<T>(arg: T): T {
  return arg
}

let myIdentify: <T>(arg: T) => T = identify

interface GenericIdentifyFn<T> {
  (arg: T): T
}
let myIdentify2: GenericIdentifyFn<number> = identify
