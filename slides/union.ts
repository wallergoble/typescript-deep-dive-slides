import { ReactChild, ReactFragment, ReactPortal } from 'react'

namespace UnionExample {
  // Union type: describes a value that can be one of several types

  // Straight out of type-fest
  type Primitive =
    | null
    | undefined
    | string
    | number
    | boolean
    | symbol
    | bigint

  const hello: Primitive = 'world'

  // Any questions?

  // ------------- keyof ----------------

  type User = {
    firstName: string
    lastName: string
    email: string
    id: number
  }

  type UserProperties = keyof User

  // --------- Any questions? ---------

  // --------- String Literal Unions ---------

  type BufferEncoding =
    | 'ascii'
    | 'utf8'
    | 'utf-8'
    | 'utf16le'
    | 'ucs2'
    | 'ucs-2'
    | 'base64'
    | 'latin1'
    | 'binary'
    | 'hex'

  let buffer = new Buffer('hello connect tech', 'ascii')

  let buffer2 = new Buffer(
    "please don't ask me about buffers",
    'I just know about types',
  )

  // --------- Any questions? ---------

  // --------- Number Literal Unions ---------

  type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6

  const myRoll: DiceRoll = 20
  // sorry Dungeons and Dragons 😔

  // --------- Any questions? ---------

  // --------- Any questions about Union types? ---------
}
