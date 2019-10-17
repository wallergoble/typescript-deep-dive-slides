// never indicates an impossibility.
// The never type will never happen or represent something useful

function createInfiniteLoop(): never {
  while (true) {
    console.log('Tautalogy')
  }
}

function fail(): never {
  throw new Error('Uh oh')
}

// but why though
let useless: never

let impossible: never = 123

// So what is never actually for?