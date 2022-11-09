namespace WeLearnedAgain {
  // generics, conditionals, infer, oh my!

  type CanYouInferTheMeaning<T, K extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, K>
  > &
    Partial<Pick<T, K>> extends infer U
    ? { [L in keyof U]: U[L] }
    : never;

  // with some love

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
      : never;

  type Foo = {
    a: number;
    b?: string;
    c: boolean;
  };

  type SomeOptional = SetOptional<Foo, "b" | "c">;

  // type SomeOptional = {
  // 	a: number;
  // 	b?: string; // Was already optional and still is.
  // 	c?: boolean; // Is now optional.
  // }
}
