import { Diet } from './lib'

namespace TypeExample {
  // What's the difference between the type keyword and the interface keyword?
  // No really, what is it?

  // ----------- type keyword --------------
  /* Pros:
    * useful for type aliasing
    * less characters
    * makes me feel like you're writing a cool functional language like haskell

   Cons:
    * can't extend
  */
  type AnimalType = {
    legs: number
    diet: Diet
  }

  // doesn't work :(
  // type LionType extends AnimalType

  // ----------- interface keyword --------------
  /*
   Pros:
    * can extend

   Cons:
    * so many characters, my fingers hurt when I type it
    * makes me feel like I'm writing Java, which hurts
  */
  interface AnimalInterface {
    legs: number
    diet: Diet
  }

  interface Lion extends AnimalInterface {
    sound: 'grrrrrr'
  }
}

// My preference: use type unless you want to use `extends`
// really doesn't seem to matter

// --------- Any questions about type vs interface? ---------
