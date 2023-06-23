let myFavorites = []

const postFav = (req,res) => {

    const favoritesCharacters = req.body
    myFavorites.push(favoritesCharacters)
    res.status(200).json(myFavorites)

}

function deleteFav(req,res){

    const {id} = req.params
     myFavorites = myFavorites.filter ((cbDeleteFavorites)=>{

        cbDeleteFavorites.id !== Number(id)

     }); 
     return res.status(200).json(myFavorites)
}

module.exports = postFav , deleteFav