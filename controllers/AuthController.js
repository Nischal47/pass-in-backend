const User = require('../models').User;

const {
    searchUser,
    hashPassword,
    comparePassword,
    generateToken
} = require('../Helpers/UserHelper');

const {ErrorHandler} = require('../Helpers/Error');

module.exports = {
    store: async (req, res, next) => {
        try {
            const {email, password} = req.body

            if (!email || !password) {
                throw new ErrorHandler(422, "All Field Are Required")
            }

            const userExist = await searchUser(email)
            if (userExist) {
                throw new ErrorHandler(422, "User Already Exist")
            }

            const bcryptPassword = await hashPassword(password)
            User.create({
                "first_name": req.body.first_name,
                "last_name": req.body.last_name,
                "email": req.body.email,
                "password": bcryptPassword,
                "email_verified":false
            }).then(() => {
                return res.status(201).json(
                    {
                        status: "success",
                        message: "User Register SuccessFully"
                    }
                )
            }).catch(
                (error) => {
                    console.log(error)
                    throw new ErrorHandler(500, "Internal Server Error")
                }
            )
        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        try {
            const {email, password} = req.body

            if (!email || !password) {
                throw new ErrorHandler(422, "All Field Are Required")
            }

            const userExist = await searchUser(email)
            if (!userExist) {
                throw new ErrorHandler(422, "Incorrect Credentials")
            }

            const isMatch = await comparePassword(password, userExist.password)
            if (!isMatch) {
                throw new ErrorHandler(422, "Incorrect Credentials")
            }

            const token = await generateToken(userExist)
            if (!token) {
                throw new ErrorHandler(500, "Internal Server Error")
            }
            return res.status(200).json({
                    token: token,
                    user: {
                        firstName: userExist.first_name,
                        lastName:userExist.last_name,
                        email:userExist.email
                    }
                }
            )
        } catch (e) {
            next(e)
        }
    }
}
