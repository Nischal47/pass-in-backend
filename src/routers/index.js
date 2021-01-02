const cors = require("cors");

module.exports = (app) => {
    app.use(cors());

    app.use("/api/v1/auth", require("./authRoute"));

    app.use("/", (req, res) => {
        res.end("Server is working!");
    });
}