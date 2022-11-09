namespace IntersectionExample {
  // Intersection type: the combination of multiple types into one type

  // returns the union of both values passed in ------v
  function merge<T, U>(objectOne: T, objectTwo: U): T & U {
    return {
      ...objectOne,
      ...objectTwo,
    };
  }

  let mergedObject = merge({ name: "Anushka" }, { age: 30 });

  type Anushka = typeof mergedObject;
}

// --------- Any questions about Intersection types? --------
