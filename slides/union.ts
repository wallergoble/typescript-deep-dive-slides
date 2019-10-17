import { Router } from 'express'
import { routeTo } from './lib'

namespace UnionExample {
  // Union type: describes a value that can be one of several types

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

//   // --------- Baby Pattern Matching ---------

//   type Employee = {
//     kind: 'employee'
//   }

//   type Manager = {
//     kind: 'manager'
//   }

//   type Admin = {
//     landingPage: '/admin'
//     kind: 'admin'
//   }

//   type User = Employee | Manager | Admin

//   function login(user: User) {
//     // hover over kind
//     switch (user.kind) {
//       case 'employee':
//       case 'manager':
//         routeTo('landing page')
//       // case 'invalid':

//     }
//   }
// }

// --------- Any questions about Union types? ---------
