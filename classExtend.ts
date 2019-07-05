class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} has move ${distance}`)
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 30) {
    console.log('dog...')
    super.move(distance)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 5) {
    console.log('snake....')
    super.move(distance)
  }
}

let dog: Animal = new Dog('dog')
let snake: Dog = new Snake('snake')
dog.name
dog.move()
snake.move()