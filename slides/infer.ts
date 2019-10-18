/* prettier-ignore-start */

namespace InferExample {
  // WARNING: this is where things get crazy 🤯🤯🤯

  // infer is pattern matching on types to some extent
  // only usable within the extends clause of a conditional type
  // can only be used in the true branch of the conditional type

  // Exists already
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

  type Predicate<T> = (arg: T) => boolean

  type PredicateReturnType = ReturnType<Predicate<any>>

  type Testing = number

  type TestingReturnType = ReturnType<Testing>

  const triple = (number: number) => number * 3

  // Hover over me
  type TripleReturnType = ReturnType<typeof triple>

  // -------------------

  // Get the type of the first element in a tuple type
  type First<T extends any[]> = T extends [infer U, ...unknown[]] ? U : never

  function tuple<T extends any[]>(...args: T): T {
    return args
  }

  const myTuple = tuple('a', 1, true)

  // Hover over me
  type FirstOfMyTuple = First<typeof myTuple>
}

// Any questions?

/* prettier-ignore-end */
