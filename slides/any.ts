namespace AnyExample {
  // any: literally anything, or nothing

  function getProperty(obj: any, property: string): any {
    if (obj[property]) {
      return obj[property]
    }
  }

  const employee = {
    id: 12345,
    position: 'Keyboard Jockey',
    name: {
      first: 'Waller',
      last: 'Goble',
    },
  }

  const wallersNameObject: boolean = getProperty(employee, name)
  // {
  //   first: 'Waller',
  //   last: 'Goble',
  // }

  // my recommendation:
  // has it's uses, but don't just put it everywhere
}
