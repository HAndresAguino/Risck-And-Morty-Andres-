// export const addFav = (character) => {

//     return (
//         {
//             type: "ADD_FAV",
//             payload: character
//         }
//     )
// } //! Esta función se eliminó porque se remplazó con la que esta abajo en la homework de express

import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
};

//_______________________________________________________________________


// export const removeFav = (id) =>{

//     return (
//         {
//             type: "REMOVE_FAV",
//             payload: id

//         }
//     )
// } //! Esta función se eliminó porque se remplazó con la que esta abajo en la homework de express


export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };





export const filtercards = (gender) => {

    return (
        {
            type: "FILTER",
            payload: gender
        }
    )

}

export const ordercards = (order) => {
    return (
        
        {
            type: "ORDER",
            payload: order
        }
    )
}
//!Estas actions las leé el reducer 