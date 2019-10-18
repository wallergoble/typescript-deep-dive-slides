import { add } from 'lodash'

namespace UnknownExample {
  // unknown: like a safer version of `any` makes the compiler require you to prove any usages of members of the value are valid

  const obviouslyANumber: unknown = 5

  // Hover over me
  add(obviouslyANumber, 5)

  if (typeof obviouslyANumber == 'number') {
    add(obviouslyANumber, 5)
  }
}

// ---------- Any questions on unknown? -------------
