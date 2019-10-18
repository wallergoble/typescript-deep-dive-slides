namespace ExamplesExample {
  // Let's tie it all together

  // --------------- RequireAtLeastOne -----------------

  // type-fest/source/require-at-least-one.d.ts
  // All of this is straight out of that file

  // Required for except
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  // Required for RequireAtLeastOne
  type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
    ObjectType,
    Exclude<keyof ObjectType, KeysType>
  >

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

  // --------------- Ramda -----------------
}
