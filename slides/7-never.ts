namespace NeverExample {
  // never indicates an impossibility.
  // The never type will never happen or represent something useful

  function fail(): never {
    throw new Error('Uh oh')
  }

  // but why though
  let useless: never

  useless = 5

  let impossible: never = 123

  // So what is never actually for?
}
