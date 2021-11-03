const dbConnect = require('../data/dbConnect')
const sql = require('mssql/msnodesqlv8')
const dbConfig = require('../data/dbConfig')
const { json } = require('body-parser')

const prefix = '/users/'

const UserRoutes = (app) => {
    app.get(`${ prefix }`,
        (req, res) => {
            let request = new sql.Request(dbConnect(dbConfig.pivdatabase))
            request.query('SELECT * FROM Users',
                (err, result) => {
                    if(err) console.log(err);
                    else res.send(result.recordset)
                }
            )
        }
    );

    app.post(`${ prefix }`,
        (req, res) => {
            let body = req.body
            let request = new sql.Request(dbConnect(dbConfig.pivdatabase))
            request.query(`INSERT INTO Users (UserName, Email, Password, Birthday) VALUES ('${body.UserName}', '${body.Email}', '${body.Password}', '${body.Birthday}')`,
                (err, result) => {
                    if(err) console.log(err);
                    else res.send(result.rowsAffected)
                }
            )
        }
    );
}

module.exports = UserRoutes