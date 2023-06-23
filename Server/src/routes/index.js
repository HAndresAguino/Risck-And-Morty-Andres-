const postFav = require ("../controllers/handleFavorites")
const deleteFav = require ("../controllers/handleFavorites")
const getCharById =  require ("../controllers/getCarById")
const login = require ("../controllers/login")

const {Router} = require ("express")

const rutas = Router()

rutas.get("/character/:id", getCharById)
rutas.get("/login", login)
rutas.post("/fav",postFav)
rutas.delete("/fav/:id", deleteFav)

module.exports = rutas;