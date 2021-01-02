import {check} from 'express-validator'

export const loginValidationRules = [
    check('email')
        .not().isEmpty().withMessage('Email is Empty')
        .isEmail()
        .withMessage('Email is invalid').normalizeEmail(),
    check('password')
        .not().isEmpty().withMessage('Password is Empty')
        .isLength({ min: 5 }).withMessage('Password must not be less than 5 characters')
]
export const registerValidationRules = [
    check('email')
        .not().isEmpty().withMessage('Email is Empty')
        .isEmail()
        .withMessage('Email is invalid').normalizeEmail(),
    check('name')
        .not().isEmpty().withMessage('Name is Empty'),
    check('password')
        .not().isEmpty().withMessage('Password is Empty')
        .isLength({ min: 5 }).withMessage('Password must not be less than 5 characters')
]
