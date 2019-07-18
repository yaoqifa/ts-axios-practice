// 类类型
interface ClockInterface {
  // 方法
  tick()
}
interface ClockConstructor {
  // 静态属性 构造器
  new(hour: number, minute: number): ClockInterface
}

class DigitalClock implements ClockInterface {
  constructor(hour: number, minute: number) {

  }
  tick() {
    console.log('di di')
  }
}

class AnalogClock implements ClockInterface {
  constructor(hour: number, minute: number) {

  }
  tick() {
    console.log('keke')
  }
}

function createClock(ctor: ClockConstructor, hour: number, minute: number) {
  return new ctor(hour, minute)
}

let digital = createClock(DigitalClock, 10, 10)
let analog = createClock(AnalogClock, 12, 12)