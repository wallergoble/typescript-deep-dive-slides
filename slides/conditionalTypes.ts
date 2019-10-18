import { User } from './lib'

namespace ConditionalTypeExample {
  /* conditional types: express non-uniform type mappings
   * selects one of two possible types based on a condition expressed as a type relationship test

   follow the pattern: T extends U ? X : Y
  */

  /**
   * Exclude from T those types that are assignable to U
   */
  type Exclude<T, U> = T extends U ? never : T

  // Hover over me
  type UserPropertiesWithoutId = Exclude<keyof User, 'id'>
}

// ---------- Any questions on conditional types? ------------------
