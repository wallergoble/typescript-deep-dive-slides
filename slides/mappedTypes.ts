import { User } from './lib'

namespace MappedTypeExample {
  // Mapped type: creates a new type which transforms each property in the old type *in the same way*.

  // Nullable takes in a type and converts the type of all its members to the union of their type and null
  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  }

  type User = {
    firstName: string
    lastName: string
    email: string
    id: number
  }

  type UserKeys = keyof User

  // What's going on here?
  // in?
  // keyof?
  // T[P] is an example of a look up type, or indexed access type

  const myUser: User = {
    firstName: 'string',
    lastName: 'string',
    id: 12345,
    email: undefined,
  }

  const waller: Nullable<User> = {
    firstName: 'Waller',
    lastName: undefined,
    id: 12345,
    email: 'waller.go@gmail.com',
  }

  waller.email = null
  // No error

  // --------- Any questions? ---------

  // --------- Optional Type Modifier - ? ---------

  // Takes in a type and makes all of its properties optional
  type Partial<T> = {
    [P in keyof T]?: T[P]
  }

  // Hover over me
  const wallerNoLastNameWithError: User = {
    firstName: 'Waller',
    email: 'waller.go@gmail.com',
    id: 12345,
  }

  const wallerNoLastName: Partial<User> = {
    firstName: 'Waller',
    email: 'waller.go@gmail.com',
  }
  // No error

  // --------- Any questions? ---------

  // --------- Readonly Type Modifier - readonly ---------

  type Readonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  const definitelyGonnaBeWaller: Readonly<User> = {
    firstName: 'Waller',
    lastName: 'Goble',
    email: 'waller.go@gmail.com',
    id: 12345,
  }

  definitelyGonnaBeWaller.firstName = 'Wilma'
  // Error: Cannot assign to 'firstName' because it is a read-only property.

  // --------- Any questions? ---------

  // ---------- Mapped Type Composition -------------

  type ReallyCoolUser = Partial<Nullable<Readonly<User>>>

  const strangeWaller: ReallyCoolUser = {
    firstName: 'Waller',
    lastName: null,
    id: 12345,
    // email is undefined, but we could define it
  }

  strangeWaller.email = 'asdf'

  // --------- Any questions? ---------

  // ---------- Mapped Type Modifiers - + and -  -------------

  // What if I want to remove a modifier?

  type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
  }
  // what's that minus sign?!

  const wallerCanChange: Mutable<ReallyCoolUser> = {
    firstName: 'Waller',
    lastName: null,
  }

  // this didn't work last time!
  wallerCanChange.lastName = 'Goble'
  // no error
}

// ---------- Any questions on mapped types? -------------
