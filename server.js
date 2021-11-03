const express = require('express');
const app = express();
const cors = require('cors')
const port = 2403;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const dbConnect = require('./data/dbConnect');

const routes = require('./routes/routes')(app);

const sql = require("mssql/msnodesqlv8");
const dbConfig = require('./data/dbConfig');

app.listen(port,
    () => {
        console.log("Le server écoute les requêtes du port %s", port);
        dbConnect(dbConfig.pivdatabase)
        // dbConnect(dbConfig.Webdatabase)
    })