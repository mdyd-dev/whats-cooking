import * as t from "io-ts"
import { isRight } from 'fp-ts/lib/Either'

const register = t.strict({
  email: t.string,
})

isRight(register.decode({ email: 'amir@example.com' })) // true

isRight(register.decode({ emai: 1234 })) // false


type Register = t.TypeOf<typeof register>
