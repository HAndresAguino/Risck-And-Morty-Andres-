import { connect } from "react-redux"
import Card from "../Card/Card"

const Favorites = ({ myFavorites}) => {

    return (
        <div >
            <h2> Personajes favoritos </h2>
            {
                   myFavorites?.map(({name, status, species, gender,image,id, origin, onClose})=> {
                    return (
                        <Card
                        key={id}
                        id = {id}
                        name = {name}
                        status = {status}
                        specie= {species}
                        gender = {gender}
                        origin = {origin}
                        image = {image}
                        onClose = {onClose}
                        />  
                    )
                })
    

            }

        </div>
    )
}

///Dentro de tu componente Favorites crea una función mapStateToProps. Esta función debe traer el estado global myFavorites. Conecta el componente con la función, y recibe el estado global por props.

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);