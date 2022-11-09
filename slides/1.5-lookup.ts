namespace LookupExample {
  // Lookup type: access type at given key
  // also known as indexed access type

  // a lot like ['a','b','c'][1]

  type User = {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
  };

  // hover over me
  type IdType = User["id"];

  // also works with union literals

  type UserSubset = User["id" | "email"];

  // Also work to figure out array types

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

  type TwitterUser = typeof twitterUsers[number];
}

// --------- Any questions about lookup types? --------
