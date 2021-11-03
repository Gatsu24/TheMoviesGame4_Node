const dbConfig = {pivdatabase:{
    server: "LENOVO",
    database: "movie_database_staging",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
    }, Webdatabase:{
        server: "LENOVO",
        database: "movie_data_application",
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true
        }
    }
}

module.exports = dbConfig