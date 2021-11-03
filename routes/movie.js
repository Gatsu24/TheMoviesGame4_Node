const APIrequest = require('https')
const dbConnect = require('../data/dbConnect')
const sql = require('mssql/msnodesqlv8')
const dbConfig = require('../data/dbConfig')
const { json } = require('body-parser')

const prefix = '/movies/'

const moviesRoutes = (app) => {
    app.get(`${ prefix }`,
        (req, res) => {
            let request = new sql.Request(dbConnect(dbConfig.pivdatabase))
            request.query('SELECT * FROM TwoRandomFilms',
                (err, result) => {
                    if(err) console.log(err);
                    else res.send(result.recordset)
                }
            )
        }
    );

    app.post("/results/",
        (req, res) => {
            let request = new sql.Request(dbConnect(dbConfig.pivdatabase))
            request.query("INSERT INTO [game.round] VALUES (\'"+req.body.movie_id1+"\', \'"+req.body.movie_id2+"\', \'"+req.body.result+"\',GETDATE(),1)",
                (err, result) => {
                    if(err) console.log(err);
                    else res.send(result.recordset)
                }
            )
        }
    );
    
    // app.get(`${ prefix }title`,
    // (req, res) => {
    //     let request = new sql.Request(dbConnect(dbConfig.pivdatabase));
    //     request.input('MinYear', 2000).execute('sp_MovieTtle',
    //     (err, result) => {if (err) console.error(err);
    //         else res.send(result.recordset)
    //     }
    //     )
    // }
    // );

    // app.get(`${ prefix}image/:id`,
    //     (req, res) => {
    //         let id = parseInt(req.params.id);
    //         APIrequest.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=8d7de589c392ecfcd90f0654fadd2c65`,
    //         (response) => {
    //             let data = ""
    //             response.on("data", pieces => data += pieces)
    //             response.on("end", () => res.send(JSON.parse(data).backdrops[0].file_path))
    //         }
    //         )
    //     }
    
    // );
}

module.exports = moviesRoutes