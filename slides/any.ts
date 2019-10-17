namespace AnyExample {
  const getProperty = (obj: any, property: string): any => {
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

  const wallersNameObject = getProperty(employee, name)

  wallersNameObject.first = 123
  // wrong type, uh oh
  wallersNameObject.lastName = 'Bug'
  // this property doesn't exist
}
