namespace AnyExample {
  // any: literally anything, or nothing

  function getProperty(obj: any, property: string): any {
    if (obj[property]) {
      return obj[property];
    }
  }

  const employee = {
    id: 12345,
    position: "Keyboard Jockey",
    name: {
      first: "Waller",
      last: "Goble",
    },
  };

  // remove boolean
  const wallersNameObject: boolean = getProperty(employee, "name");
  // {
  //   first: 'Waller',
  //   last: 'Goble',
  // }

  // my recommendation:
  // don't just throw any around, instead:

  type $FixMe = any;

  // use $FixMe to unblock yourself
  // then refactor to a more specific type when you're feeling more able

  // specific uses of any are important, we'll get to them later

  function MyReactComponent(props: $FixMe) {
    return (
      <div>
        hello {props.name}
        {props.children}
      </div>
    );
  }
}
