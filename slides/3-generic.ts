namespace GenericExample {
  // Generic types: provide the ability to make reusable, parametrized types

  // Functions but for your type system

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

  // Generics can also have constraints

  // only let Arrays in
  type GetArrayKind<T extends Array<any>> = T[number];

  let twitterUsers = [
    {
      handle: "@wallergoble",
      id: 1337,
      overalls: true,
    },
    {
      handle: "@kwelch",
      id: 404,
      overalls: false,
    },
  ];

  type TwitterUser = GetArrayKind<typeof twitterUsers>;

  type NumberMaybe = GetArrayKind<number>;
}

// ----------- Any questions on Generics? ----------------
