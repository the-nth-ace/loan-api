import { body } from 'express-validator'

export const SignupValidator = [
    body('email', 'email should be an email').isEmail(),
    body('password', 'password should be a string of length 8 or more').isString().isLength(
        {min: 8}
    ),
]