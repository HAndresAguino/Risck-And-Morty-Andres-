import { Link } from "react-router-dom";
import style from "../Card/Card.module.css"


import { addFav, removeFav } from "../../Redux/actions"; //Me traigo las actions
import { connect } from "react-redux";
import { useState, useEffect } from "react";





function Card({ name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   const [isFav, setIsfav] = useState(false)

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ name, status, species, gender, origin, image, onClose }) //Si el estado isFav es true, entonces settea ese estado en false, y despacha la función removeFav que recibiste por props pasándole el id del personaje como argumento.
    //Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFav que recibiste por props, pasándole props como argumento. 
      setIsfav(!isFav)

   } 

   useEffect(() => {  //Este useEffect comprobará si el personaje que contiene la Card ya está dentro de tus favoritos. En ese caso setteará el estado isFav en true. 
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={StyleSheet.Container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => { onClose(id) }}> CERRAR </button>
         {/* <h4> id: {id}</h4>  */}
         <Link to={`/detail/${id}`}>
            <h2>Nombre: {name}</h2>
         </Link>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Genero: {gender}</h2>
         <h3>Origen: {origin}</h3>
         <img src={image} alt='' />
      </div>
   );
}

//Para hacer el punto: Dirígete al componente Card. Aquí deberás crear una función mapDispatchToProps que contenga dos funciones. Esta debe despachar las dos actions que creaste anteriormente (por lo que deberás importarlas).
// El import de addfav, removefav y connect es para este punto 

const mapDispatchToProps = (dispatch) => {


   //Conecta esta función con tu componente y recibe ambas funciones despachadoras por props.

   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}


const mapStateToProps = (state) => {

   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);