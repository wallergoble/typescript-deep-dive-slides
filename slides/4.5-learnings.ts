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

  // anotha one

  type WhatDoesThisDo<T, K extends keyof T = keyof T> = {
    [Key in K]: Required<Pick<T, Key>>;
  }[K] &
    Except<T, K>;

  // some extra characters =>

  // Create a type that requires at least one of the given keys. The remaining keys are kept as is.
  type RequireAtLeastOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType
  > = {
    // For each Key in KeysType make a mapped type
    [Key in KeysType]: Required<Pick<ObjectType, Key>>; // …by picking that Key's type and making it required
  }[KeysType] &
    // …then, make intersection types by adding the remaining keys to each mapped type.
    Except<ObjectType, KeysType>;

  type Responder = {
    text?: () => string;
    json?: () => string;

    secure?: boolean;
  };

  const responder: RequireAtLeastOne<Responder, "text" | "json"> = {
    // try commenting me out
    json: () => '{"message": "ok"}',
    secure: true,
  };
}
