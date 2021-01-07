const User = require('../models').User;

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    searchUser: (email) => {
        return User.findOne({
            where: { email: email },
        })
    },

    hashPassword: (password) => {
        return bcrypt.hash(password, 12)
    },

    comparePassword: (enteredPassword, existingPassword) => {
        return bcrypt.compare(enteredPassword, existingPassword);
    },

    generateToken: (result) => {
        const secretKey = process.env.JWT_SECRET_KEY
        const payload = {
            user: {
                id: result.id,
                email: result.email,
                first_name: result.first_name,
            }
        };
        return jwt.sign(
            payload,
            secretKey,
            {
                expiresIn: 900
            },
        );
    },
}
