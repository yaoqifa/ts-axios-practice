interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let count = function (start: number) {
  } as Counter
  count.interval = 3
  count.reset = function () {
    console.log(1)
  }
  return count
}

let count = getCounter()
count(10)
count.interval = 4
count.reset()