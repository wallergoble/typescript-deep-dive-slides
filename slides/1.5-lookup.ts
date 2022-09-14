namespace LookupExample {
  // Lookup type: access type at given key
  // also known as indexed access type

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
}

// --------- Any questions about lookup types? --------
