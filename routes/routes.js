const moviesRoutes = require("./movie")
const UserRoutes = require("./user")

const appRoutes = (app) => {
    app.get('/',
        (req, res) => {
            let accueil = {
                description: "Bienvenue sur l'API de TMDB"
            }
            res.send(accueil)
        }
    )

    moviesRoutes(app)
    UserRoutes(app)
}

module.exports = appRoutes