import { User } from "./lib";

namespace WeHaveLearnedEnough {
  // now that we understand mapped types + generics

  type RememberMe<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  // with a little bit of cleaning up by type-fest
  type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
    ObjectType,
    Exclude<keyof ObjectType, KeysType>
  >;

  // Hover over me
  type UserWithoutId = Except<User, "id">;
}
