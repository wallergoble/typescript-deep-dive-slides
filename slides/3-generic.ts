namespace GenericExample {
  // Generic types: provide the ability to make reusable, parametrized types

  // Takes in T and returns T

  function identity<T>(arg: T): T {
    return arg;
  }

  identity(1);
  identity("string");
  identity({ handle: "wallergoble", conferenceTalks: 0.25 });

  // Why T?
  // Conventional, but could be anything

  // Any questions?

  // ------------- another example --------------------

  // common utility type
  // Record<K, T>
  // Constructs a type with a set of properties K of type T

  type ObjectMap = Record<string, object>;
  type NumberMap = Record<string, number>;
  type StringMap = Record<string, string>;
  type AnyMap = Record<string, any>;

  const myStrings: StringMap = {
    a: "a",
    b: "b",
    c: 0,
  };
}

// ----------- Any questions on Generics? ----------------
