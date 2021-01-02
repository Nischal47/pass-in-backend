const express = require('express');
require("dotenv").config();
const cors = require("cors");

const db = require('./models');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
require('./routers/index')(app);

const port = process.env.PORT || 3000;

db.sequelize.sync()
    .then(result => {
        app.listen(port, () => {
            console.log(`The server is running at localhost:${port}`);
        });
        console.log(result)
    })
    .catch(error => {
        console.log(error);
    });



