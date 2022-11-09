import { User } from "./lib";

namespace ConditionalTypeExample {
  /* conditional types: express non-uniform type mappings
   * selects one of two possible types based on a condition expressed as a type relationship test

   follow the pattern: T extends U ? X : Y
  */

  /**
   * Exclude from T those types that are assignable to U
   */
  type Exclude<T, U> = T extends U ? never : T;

  type WhatIsThisGonnaBe = Exclude<1 | 2 | 3 | 4, 1 | 3>;

  type UserProperties = keyof User;

  // Hover over me
  type UserPropertiesWithoutId = Exclude<keyof User, "id">;

  // conditional types by themselves aren't really that exciting. however...
}

// ---------- Any questions on conditional types? ------------------
