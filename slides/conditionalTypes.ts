/* prettier-ignore-start */

namespace ConditionalTypeExample {
  // WARNING: this is where things get crazy 🤯🤯🤯

  type NonNullable<T> = T extends null | undefined ? never : T

  type User = null

  type SuperTypeSafeUser = NonNullable<User>

  const example: SuperTypeSafeUser = 1
  // The type resolves to never, so it's never useful

  // Any questions?
}

/* prettier-ignore-end */
