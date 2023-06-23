const initialState = {
    myFavorites: [],
    allCharactersFAV: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case "ADD_fAV": //Crea un primer caso llamado "ADD_FAV" en el que puedas agregar a un personaje que recibes por payload a tu estado "myFavorites"
        //     return {
        //         ...state,
        //         myFavorites: [...state.allCharactersFAV, action.payload],
        //         allCharactersFAV: [...state.allCharactersFAV, action.payload],
        //     }//! Esta función y Reducerfav se eliminó porque se remplazó con la que esta abajo en la homework de expres


        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case "FILTER":
            const allCharactersFiltered = state.allCharactersFAV.filter
                ((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }


        case "ORDER":

            // const allCharactersFAVCopy = {...state.allCharactersFAV}
            const allCharactersFAVCopy = state.allCharactersFAV.slice();
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                        ? allCharactersFAVCopy.sort((a, b) => a.id < b.id)
                        : allCharactersFAVCopy.sort((a, b) => b.id - a.id)
            }




        default:
            return { ...state }
    }

}



export default reducer