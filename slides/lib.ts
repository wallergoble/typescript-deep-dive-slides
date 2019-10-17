export type User = {
  firstName: string
  lastName: string
  email: string
}

export function routeTo(string: string) {
  return null
}

function returnsSomething(...args: any[]): unknown {
  return args as unknown
}

export type Diet = 'omnivore' | 'herbivore' | 'carnivore'
