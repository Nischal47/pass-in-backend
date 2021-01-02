const { handleError } = require('../Helpers/Error');

module.exports = (app) => {

    app.use('/api/v1/auth', require('./api/AuthRoute'))

    app.use((err, req, res, next) => {
        handleError(err, res);
    });

}
