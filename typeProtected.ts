// typeof 类型保护
function doSomething(x: number | string) {
  if (typeof x === 'string') {
    console.log(x.substr(1))
  }
}

// instance 类型保护

class Bird {
  fly() {
    console.log('bird fly')
  }
  layeggs() {
    console.log('bird layeggs')
  }
}

class Fish {
  swim() {
    console.log('fish swim')
  }
  layeggs() {
    console.log('fish layeggs')
  }
}

function getRandomPet(): Bird | Fish {
  return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getRandomPet()

if (pet instanceof Bird) {
  pet.fly()
}
if (pet instanceof Fish) {
  pet.swim()
}