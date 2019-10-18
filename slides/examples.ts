import { User } from './lib'
import { List } from 'lodash'

namespace ExamplesExample {
  // Let's tie it all together

  // --------------- RequireAtLeastOne -----------------

  // type-fest/source/require-at-least-one.d.ts
  // All of this is straight out of that file

  // Required for except
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type PickedUser = Pick<User, 'email' | 'firstName'>

  // Required for RequireAtLeastOne
  // What is ObjectType here? KeysType?
  type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
    ObjectType,
    Exclude<keyof ObjectType, KeysType>
  >

  type UserExceptId = Except<User, 'id'>

  // Any questions? It's about to get hairy

  // -------------------------------------

  // Straight out of type-fest

  // Create a type that requires at least one of the given keys. The remaining keys are kept as is.
  type RequireAtLeastOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType
  > = {
    // For each Key in KeysType make a mapped type
    [Key in KeysType]: (// …by picking that Key's type and making it required
    Required<Pick<ObjectType, Key>>)
  }[KeysType] &
    // …then, make intersection types by adding the remaining keys to each mapped type.
    Except<ObjectType, KeysType>

  type Responder = {
    text?: () => string
    json?: () => string

    secure?: boolean
  }

  const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
    // try commenting me out
    json: () => '{"message": "ok"}',
    secure: true,
  }

  // --------------- Any questions? -----------------

  // from type-fest

  // Create a type that makes the given keys optional. The remaining keys are kept as is.

  export type SetOptional<
    BaseType,
    Keys extends keyof BaseType = keyof BaseType
  > =
    // Pick just the keys that are not optional from the base type.
    Pick<BaseType, Exclude<keyof BaseType, Keys>> &
      // Pick the keys that should be optional from the base type and make them optional.
      Partial<Pick<BaseType, Keys>> extends infer InferredType // If `InferredType` extends the previous, then for each key, use the inferred type key.
      ? { [KeyType in keyof InferredType]: InferredType[KeyType] }
      : never

  type Foo = {
    a: number
    b?: string
    c: boolean
  }

  type SomeOptional = SetOptional<Foo, 'b' | 'c'>

  // type SomeOptional = {
  // 	a: number;
  // 	b?: string; // Was already optional and still is.
  // 	c?: boolean; // Is now optional.
  // }

  // --------------- Any questions? -----------------

  // from lodash

  interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}

  interface ListOfRecursiveArraysOrValues<T>
    extends List<T | RecursiveArray<T>> {}

  interface LoDashStatic {
    /**
     * Recursively flattens a nested array.
     *
     * @param array The array to recursively flatten.
     * @return Returns the new flattened array.
     */
    flattenDeep<T>(
      array: ListOfRecursiveArraysOrValues<T> | null | undefined,
    ): T[]
  }

  // --------------- Any questions? -----------------

  // from @types/react

  type PropsWithoutRef<P> =
    // Just Pick would be sufficient for this, but I'm trying to avoid unnecessary mapping over union types
    // https://github.com/Microsoft/TypeScript/issues/28339
    'ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P

  /** Ensures that the props do not include string ref, which cannot be forwarded */
  type PropsWithRef<P> =
    // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
    'ref' extends keyof P
      ? P extends { ref?: infer R }
        ? string extends R
          ? PropsWithoutRef<P> & { ref?: Exclude<R, string> } // first true branch fo the conditional, using inferred R
          : P
        : P
      : P

  // --------------- Any questions? -----------------

  // from Ramda.composeWith

  /**
   * Performs right-to-left function composition using transforming function.
   * With the current typings, all functions must be unary.
   */

  interface R {
    composeWith<V0, T>(
      composer: (a: any) => any,
      fns: ComposeWithFns<V0, T>,
    ): (x0: V0) => T
  }

  type ComposeWithFns<V0, T> =
    | [(x0: V0) => T]
    | [(x: any) => T, (x: V0) => any]
    | [(x: any) => T, (x: any) => any, (x: V0) => any]
    | [(x: any) => T, (x: any) => any, (x: any) => any, (x: V0) => any]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any,
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any,
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any,
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any,
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any,
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any,
      ]

  // lesson learned: type pragmatism

  // Any questions?
}
