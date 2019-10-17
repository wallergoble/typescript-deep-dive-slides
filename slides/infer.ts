/* prettier-ignore-start */

namespace InferExample {
  // infer is pattern matching on types to some extent
  // only usable within the extends clause of a conditional type
  // can only be used in the true branch of the conditional type

  // Exists already
  type ReturnType<T extends Function> = T extends (...args: any[]) => infer R
    ? R
    : any // haven't been able to get here

  type Predicate<T> = (arg: T) => boolean

  type PredicateReturnType = ReturnType<Predicate<any>>

  type Testing = number

  type a = ReturnType<Testing>

  const double = (number: number) => number * 2

  // Hover over me
  type DoubleReturnType = ReturnType<typeof double>

  // -------------------
  // Get the type of the first element in a tuple type
  type First<T extends any[]> = T extends [infer U, ...unknown[]] ? U : never

  function tuple<T extends any[]>(...args: T): T {
    return args
  }

  const myTuple = tuple('a', 1, true)

  // Hover over me
  type FirstEntriesReturnType = First<typeof myTuple>
}

/* prettier-ignore-end */
