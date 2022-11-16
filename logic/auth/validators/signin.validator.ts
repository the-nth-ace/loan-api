import {body} from  'express-validator'


export const SigninValidator = [
    body('email','email should be an email').isEmail(),
    body('password', 'password should be a string').isString().isLength({
        min: 1
    })
]