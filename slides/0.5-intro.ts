import { Except } from "type-fest";

namespace Intro {
  type Huh<T extends Array<any>> = T[number];

  type MaybeThisMakesSense<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  type WhatDoesThisDo<T, K extends keyof T = keyof T> = {
    [Key in K]: Required<Pick<T, Key>>;
  }[K] &
    Except<T, K>;

  type CanYouInferTheMeaning<T, K extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, K>
  > &
    Partial<Pick<T, K>> extends infer U
    ? { [L in keyof U]: U[L] }
    : never;
}
