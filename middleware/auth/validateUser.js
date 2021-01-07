const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY
const {
    ErrorHandler
} = require('../../Helpers/Error')

module.exports = {
    validateUser:(req, res, next) => {
        try{
            if(!req.headers['authorization']){
                throw new ErrorHandler(401,"You are not authorized")
            }
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                throw new ErrorHandler(401,"You are not authorized")
            }
            try{
                const jwtVerified = jwt.verify(authorization[1], secretKey)
                next()
            }catch (e) {
                throw new ErrorHandler(422,"Invalid Token !")
            }
        } catch (e) {
            next(e)
        }
    }
}