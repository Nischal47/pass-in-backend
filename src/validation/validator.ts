import { validationResult } from 'express-validator'
import {Request, Response, NextFunction} from 'express'

const validate = (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors:any = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
        type:"error",
        name:"Entities Error",
        errors: extractedErrors,
    })
}

export default validate
