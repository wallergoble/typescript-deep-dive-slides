import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

namespace InferExample {
  // WARNING: this is where things get crazy 🤯🤯🤯

  // infer is pseudo-pattern matching on types
  // only usable within the extends clause of a conditional type
  // can only be used in the true branch of the conditional type

  // think of it like setting a variable
  // infer == let

  // These exist in TypeScript already
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

  type Predicate<T> = (arg: T) => boolean;

  type PredicateReturnType = ReturnType<Predicate<any>>;

  type Testing = number;

  type TestingReturnType = ReturnType<Testing>;

  const triple = (number: number) => number * 3;

  // Hover over me
  type TripleReturnType = ReturnType<typeof triple>;

  // -------------------

  // Get the type of the first element in a tuple type
  type First<T extends any[]> = T extends [infer U, ...unknown[]] ? U : never;

  function tuple<T extends any[]>(...args: T): T {
    return args;
  }

  const myTuple = tuple("a", 1, true);

  // Hover over me
  type FirstOfMyTuple = First<typeof myTuple>;

  // In practice, looks a little more like this:

  export type InferGetStaticPropsType<T> = T extends GetStaticProps<
    infer P,
    any
  >
    ? P
    : T extends (
        context?: GetStaticPropsContext<any>
      ) =>
        | Promise<GetStaticPropsResult<infer P>>
        | GetStaticPropsResult<infer P>
    ? P
    : never;

  // from @types/react

  type PropsWithoutRef<P> =
    // Just Pick would be sufficient for this, but I'm trying to avoid unnecessary mapping over union types
    // https://github.com/Microsoft/TypeScript/issues/28339
    "ref" extends keyof P ? Pick<P, Exclude<keyof P, "ref">> : P;

  /** Ensures that the props do not include string ref, which cannot be forwarded */
  type PropsWithRef<P> =
    // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
    "ref" extends keyof P
      ? P extends { ref?: infer R }
        ? string extends R
          ? PropsWithoutRef<P> & { ref?: Exclude<R, string> } // first true branch fo the conditional, using inferred R
          : P
        : P
      : P;
}

// Any questions?
