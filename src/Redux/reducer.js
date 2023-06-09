const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_fAV": //Crea un primer caso llamado "ADD_FAV" en el que puedas agregar a un personaje que recibes por payload a tu estado "myFavorites"
            return {
                ...state,
                myFavorites: [...state, action.payload]
            }

        case "REMOVE_FAV":
            return {
                ...state,
                myFavorites: [state.myFavorites.filter(fav => fav.id !== Number(action.payload))]
            }

        default:
            return state
    }

}



export default reducer