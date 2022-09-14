import { add } from "lodash";

namespace UnknownExample {
  // unknown: like a safer version of `any` makes the compiler require you to prove any usages of members of the value are valid

  const obviouslyANumber: unknown = 5;

  // Hover over me
  add(obviouslyANumber, 5);

  if (typeof obviouslyANumber == "number") {
    add(obviouslyANumber, 5);
  }

  class ValueError extends Error() {
    constructor(message: string) {
      super(message);
    }
  }

  function canFail() {
    let rand = Math.random();

    if (rand > 0.5) {
      throw new ValueError("Random number was too big");
    }
    return rand;
  }

  function getNumber() {
    try {
      let result = canFail();
    } catch (error) {
      // won't let us use message here because it's unknown
      console.error("uh oh", error.message);

      if (error instanceof Error) {
        console.log("now typescript is happy", error.message);
      }
    }
  }
}

// ---------- Any questions on unknown? -------------
