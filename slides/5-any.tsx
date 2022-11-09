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

  // Sometimes, any is really what you want

  // from Ramda.composeWith

  /**
   * Performs right-to-left function composition using transforming function.
   * With the current typings, all functions must be unary.
   */

  interface R {
    composeWith<V0, T>(
      composer: (a: any) => any,
      fns: ComposeWithFns<V0, T>
    ): (x0: V0) => T;
  }

  type ComposeWithFns<V0, T> =
    | [(x0: V0) => T]
    | [(x: any) => T, (x: V0) => any]
    | [(x: any) => T, (x: any) => any, (x: V0) => any]
    | [(x: any) => T, (x: any) => any, (x: any) => any, (x: V0) => any]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any
      ]
    | [
        (x: any) => T,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: any) => any,
        (x: V0) => any
      ];

  // lesson learned: type pragmatism

  // ~any~ questions?
}
