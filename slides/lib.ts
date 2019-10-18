export type User = {
  firstName: string
  lastName: string
  email: string
  id: number
}

export function routeTo(string: string) {
  return null
}

function returnsSomething(...args: any[]): unknown {
  return args as unknown
}

export type Diet = 'omnivore' | 'herbivore' | 'carnivore'
