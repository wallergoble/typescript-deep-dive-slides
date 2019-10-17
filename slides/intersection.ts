namespace IntersectionExample {
  // Intersection type: combines multiple types into one

  // returns the union of both values passed in -------v
  function merge<T, U>(objectOne: T, objectTwo: U): T & U {
    return {
      ...objectOne,
      ...objectTwo,
    }
  }
}

// --------- Any questions about Intersection types? --------
