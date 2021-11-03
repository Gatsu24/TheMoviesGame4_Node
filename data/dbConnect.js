// const dbConfig = require('./dbConfig');
const sql = require('mssql/msnodesqlv8');

const dbConnect = (dbConfig) => new sql.connect(dbConfig,
    (err) =>
    {
        if(err) console.log(err);
        else console.log(`Connection réussie sur le serveur : ${dbConfig.server}\\${dbConfig.database}`);
    }
)

module.exports = dbConnect